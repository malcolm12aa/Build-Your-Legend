import { CONFIG } from "../config.js";
import { RACES, RACE_PATHS } from "../data/races.js";
import { JOBS, JOB_PATHS } from "../data/jobs.js";
import { ITEMS, SET_BONUSES } from "../data/items.js";
import { SKILLS } from "../data/skills.js";
import { SYNERGIES } from "../data/synergies.js";
import { addLog, byId, clamp } from "../core/utils.js";

export function getTotalLevel(player) {
  if (!player) return 0;
  return [...player.raceLevels, ...player.jobLevels].reduce((sum, cls) => sum + cls.level, 0);
}

export function xpToNext(player) {
  const lvl = getTotalLevel(player);
  return Math.floor(55 + lvl * 26 + Math.pow(lvl, 1.22));
}

function allClassData() {
  return [...RACES, ...RACE_PATHS, ...JOBS, ...JOB_PATHS];
}

function getClassData(id) {
  return byId(allClassData(), id);
}

function addStats(target, source = {}, multiplier = 1) {
  for (const [key, value] of Object.entries(source)) target[key] = (target[key] ?? 0) + value * multiplier;
}

export function getActiveSynergies(player) {
  if (!player) return [];
  const raceIds = new Set((player.raceLevels ?? []).map(cls => cls.id));
  const jobIds = new Set((player.jobLevels ?? []).map(cls => cls.id));
  return SYNERGIES.filter(synergy =>
    (synergy.raceIds ?? []).some(id => raceIds.has(id)) &&
    (synergy.jobIds ?? []).some(id => jobIds.has(id))
  );
}

export function getEquippedSetBonuses(player) {
  const counts = {};
  for (const itemId of Object.values(player?.equipment ?? {})) {
    const item = byId(ITEMS, itemId);
    if (item?.set) counts[item.set] = (counts[item.set] ?? 0) + 1;
  }
  const active = [];
  for (const set of SET_BONUSES) {
    const pieces = counts[set.id] ?? 0;
    for (const threshold of set.thresholds ?? []) {
      if (pieces >= threshold.pieces) active.push({ ...threshold, setId: set.id, setName: set.name, pieces });
    }
  }
  return active;
}

export function computeStats(player) {
  const stats = { ...player.baseStats };
  for (const cls of [...player.raceLevels, ...player.jobLevels]) {
    const data = getClassData(cls.id);
    if (!data) continue;
    addStats(stats, data.stats ?? {});
    addStats(stats, data.levelGrowth ?? {}, Math.max(0, cls.level - 1));
  }
  for (const synergy of getActiveSynergies(player)) addStats(stats, synergy.stats ?? {});
  for (const itemId of Object.values(player.equipment ?? {})) {
    const item = byId(ITEMS, itemId);
    if (!item?.stats) continue;
    addStats(stats, item.stats);
  }
  for (const bonus of getEquippedSetBonuses(player)) addStats(stats, bonus.stats ?? {});
  const overall = getTotalLevel(player);
  stats.maxHp = Math.floor(65 + stats.con * 10 + overall * 5);
  stats.maxMana = Math.floor(35 + stats.int * 7 + stats.wis * 3 + overall * 2);
  stats.maxStamina = Math.floor(45 + stats.dex * 3 + stats.str * 4 + stats.con * 2 + overall * 2);
  stats.attack = Math.floor(5 + stats.str * 2 + stats.dex * 0.7);
  stats.magic = Math.floor(5 + stats.int * 2 + stats.wis * 0.8);
  stats.defense = Math.floor(2 + stats.con * 1.5 + stats.wis * 0.3);
  stats.speed = Math.floor(3 + stats.dex * 1.5);
  return stats;
}

export function computeCreationPreview(raceId, jobId) {
  const race = byId(RACES, raceId) ?? RACES[0];
  const job = byId(JOBS, jobId) ?? JOBS[0];
  const stats = { str: 4, dex: 4, int: 4, wis: 4, con: 4, cha: 4 };
  addStats(stats, race.stats ?? {});
  addStats(stats, job.stats ?? {});
  const synergies = SYNERGIES.filter(s => (s.raceIds ?? []).includes(race.id) && (s.jobIds ?? []).includes(job.id));
  for (const synergy of synergies) addStats(stats, synergy.stats ?? {});
  const skillIds = [...new Set([...(race.startingSkills ?? []), ...(job.startingSkills ?? []), ...synergies.flatMap(s => s.skills ?? []), "basic_focus"])]
    .filter(id => id === "basic_focus" || byId(SKILLS, id));
  const totalLevel = 2;
  stats.maxHp = Math.floor(65 + stats.con * 10 + totalLevel * 5);
  stats.maxMana = Math.floor(35 + stats.int * 7 + stats.wis * 3 + totalLevel * 2);
  stats.maxStamina = Math.floor(45 + stats.dex * 3 + stats.str * 4 + stats.con * 2 + totalLevel * 2);
  stats.attack = Math.floor(5 + stats.str * 2 + stats.dex * 0.7);
  stats.magic = Math.floor(5 + stats.int * 2 + stats.wis * 0.8);
  stats.defense = Math.floor(2 + stats.con * 1.5 + stats.wis * 0.3);
  stats.speed = Math.floor(3 + stats.dex * 1.5);
  return { race, job, stats, synergies, skillIds };
}

export function syncResourcesToStats(player) {
  const stats = computeStats(player);
  player.hp = clamp(player.hp, 0, stats.maxHp);
  player.mana = clamp(player.mana, 0, stats.maxMana);
  player.stamina = clamp(player.stamina, 0, stats.maxStamina);
  return stats;
}

export function gainXp(state, amount) {
  const player = state.player;
  if (!player || getTotalLevel(player) >= CONFIG.maxOverallLevel) return;
  player.xp += amount;
  let gained = 0;
  while (player.xp >= xpToNext(player) && getTotalLevel(player) + player.unspentClassLevels < CONFIG.maxOverallLevel) {
    player.xp -= xpToNext(player);
    player.unspentClassLevels += 1;
    gained += 1;
  }
  if (gained > 0) addLog(state, `<strong>Level points gained:</strong> +${gained}. Spend them on Race/Job Progression.`);
}

export function spendClassPoint(state, trackName, index) {
  const player = state.player;
  const track = trackName === "race" ? player.raceLevels : player.jobLevels;
  const cls = track[Number(index)];
  if (!cls || player.unspentClassLevels <= 0) return addLog(state, "No class point available.");
  if (cls.level >= cls.maxLevel) return addLog(state, `${cls.name} is already maxed.`);
  cls.level += 1;
  player.unspentClassLevels -= 1;
  unlockClassSkills(state, cls.id, cls.level);
  const stats = computeStats(player);
  player.hp = stats.maxHp;
  player.mana = stats.maxMana;
  player.stamina = stats.maxStamina;
  addLog(state, `<strong>${cls.name}</strong> increased to level ${cls.level}. Overall Level is now ${getTotalLevel(player)}.`);
}

export function unlockClassSkills(state, classId, level) {
  const data = getClassData(classId);
  if (!data) return;
  const learnList = data.learns ?? [];
  for (const learn of learnList) {
    if (learn.level === level && !state.player.skills.includes(learn.skillId)) {
      state.player.skills.push(learn.skillId);
      const skill = byId(SKILLS, learn.skillId);
      addLog(state, `<strong>New skill learned:</strong> ${skill?.name ?? learn.skillId}`);
    }
  }
}

function meetsRequirements(state, path, currentClass) {
  const req = path.requirements ?? {};
  if (req.classLevel && currentClass.level < req.classLevel) return false;
  if (req.gold && state.player.gold < req.gold) return false;
  if (req.bossKills && state.meta.bossKills < req.bossKills) return false;
  if (req.relicDust && state.meta.relicDust < req.relicDust) return false;
  return true;
}

export function getAvailableAdvancements(state, trackName) {
  const player = state.player;
  if (!player) return [];
  const track = trackName === "race" ? player.raceLevels : player.jobLevels;
  const paths = trackName === "race" ? RACE_PATHS : JOB_PATHS;
  const unlocked = [];
  for (const cls of track) {
    const classPaths = paths.filter(path => path.from === cls.id && !track.some(existing => existing.id === path.id));
    for (const path of classPaths) {
      unlocked.push({ ...path, sourceName: cls.name, canUnlock: meetsRequirements(state, path, cls), sourceLevel: cls.level });
    }
  }
  for (const path of paths.filter(p => p.tier === "hidden" && !track.some(existing => existing.id === p.id))) {
    const source = track.find(cls => cls.id === path.from) ?? track.at(-1);
    if (state.meta.bossKills > 0 || state.meta.relicDust > 0) {
      unlocked.push({ ...path, sourceName: source?.name ?? "Unknown", canUnlock: meetsRequirements(state, path, source ?? { level: 0 }), sourceLevel: source?.level ?? 0 });
    }
  }
  return unlocked;
}

export function addAdvancedClass(state, trackName, pathId) {
  const player = state.player;
  const paths = trackName === "race" ? RACE_PATHS : JOB_PATHS;
  const track = trackName === "race" ? player.raceLevels : player.jobLevels;
  const path = byId(paths, pathId);
  if (!path) return;
  const source = track.find(cls => cls.id === path.from) ?? track.at(-1);
  if (!meetsRequirements(state, path, source ?? { level: 0 })) {
    addLog(state, "Requirements are not met for that class path yet.");
    return;
  }
  if (path.requirements?.gold) player.gold -= path.requirements.gold;
  if (path.requirements?.relicDust) state.meta.relicDust -= path.requirements.relicDust;
  track.push({ id: path.id, name: path.name, tier: path.tier, level: 1, maxLevel: path.maxLevel });
  for (const skillId of path.startingSkills ?? []) {
    if (!player.skills.includes(skillId)) player.skills.push(skillId);
  }
  syncResourcesToStats(player);
  addLog(state, `<strong>New ${trackName} path unlocked:</strong> ${path.name}.`);
}

export function getKnownClassData(id) {
  return getClassData(id);
}
