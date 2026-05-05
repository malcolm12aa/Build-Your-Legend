import { CONFIG } from "../config.js";
import { RACES, RACE_PATHS } from "../data/races.js";
import { JOBS, JOB_PATHS } from "../data/jobs.js";
import { ITEMS, SET_BONUSES } from "../data/items.js";
import { SKILLS } from "../data/skills.js";
import { SYNERGIES } from "../data/synergies.js";
import { ACHIEVEMENTS } from "../data/achievements.js";
import { addLog, byId, clamp } from "../core/utils.js";
import { canUnlockPath, getUnlockableAdvancements, getUnlockStatus, getClassDataById } from "./unlocks.js";

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
  return getClassDataById(id);
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


export function getEquippedTitleBonus(player) {
  if (!player?.title) return null;
  const achievement = ACHIEVEMENTS.find(item => item.title === player.title);
  if (!achievement) return null;
  return {
    title: achievement.title,
    achievementId: achievement.id,
    difficulty: achievement.difficulty ?? "common",
    stats: achievement.bonus ?? {},
    description: achievement.description ?? ""
  };
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
  const titleBonus = getEquippedTitleBonus(player);
  if (titleBonus) addStats(stats, titleBonus.stats ?? {});
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

export function getAvailableAdvancements(state, trackName) {
  // v0.4.0: progression now shows only class/race paths that are actually valid
  // to unlock right now. Locked future paths remain in the Registry/Tree, while
  // hidden paths stay concealed until their requirements are fully satisfied.
  return getUnlockableAdvancements(state, trackName);
}

export function addAdvancedClass(state, trackName, pathId) {
  const player = state.player;
  const paths = trackName === "race" ? RACE_PATHS : JOB_PATHS;
  const track = trackName === "race" ? player.raceLevels : player.jobLevels;
  const path = byId(paths, pathId);
  if (!path) return;
  const source = track.find(cls => cls.id === path.from);
  const status = getUnlockStatus(state, trackName, path);
  if (!source) {
    addLog(state, "That path belongs to a class you do not own yet.");
    return;
  }
  if (track.some(cls => cls.id === path.id)) {
    addLog(state, `${path.name} is already part of your build.`);
    return;
  }
  if (!canUnlockPath(state, trackName, path)) {
    const missing = status.missing?.map(item => item.label).join(", ") || "unknown requirement";
    addLog(state, `Requirements are not met for ${path.name}: ${missing}.`);
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
