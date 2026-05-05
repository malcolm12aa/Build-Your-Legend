import { RACES, RACE_PATHS } from "../data/races.js";
import { JOBS, JOB_PATHS } from "../data/jobs.js";
import { byId, titleCase } from "../core/utils.js";

export function getClassCatalog(trackName = "all") {
  if (trackName === "race") return [...RACES, ...RACE_PATHS];
  if (trackName === "job") return [...JOBS, ...JOB_PATHS];
  return [...RACES, ...RACE_PATHS, ...JOBS, ...JOB_PATHS];
}

export function getClassDataById(id) {
  return byId(getClassCatalog("all"), id);
}

export function getTrackClasses(player, trackName) {
  if (!player) return [];
  return trackName === "race" ? (player.raceLevels ?? []) : (player.jobLevels ?? []);
}

export function isClassOwned(player, classId) {
  return Boolean((player?.raceLevels ?? []).some(cls => cls.id === classId) || (player?.jobLevels ?? []).some(cls => cls.id === classId));
}

export function getOwnedClass(player, trackName, classId) {
  return getTrackClasses(player, trackName).find(cls => cls.id === classId) ?? null;
}

export function getPathList(trackName) {
  return trackName === "race" ? RACE_PATHS : JOB_PATHS;
}

export function getBaseList(trackName) {
  return trackName === "race" ? RACES : JOBS;
}

export function isHiddenPath(path) {
  const tier = String(path?.tier ?? "").toLowerCase();
  return tier === "hidden" || tier === "secret" || Boolean(path?.secret || path?.hidden);
}

export function isDeprecatedOverlap(entry) {
  return Boolean(entry?.deprecatedOverlap || entry?.registryVisible === false);
}

function requirementValue(req, ...keys) {
  for (const key of keys) {
    if (req?.[key] !== undefined && req?.[key] !== null && req?.[key] !== "") return req[key];
  }
  return undefined;
}

function hasClassWithLevel(player, classId, minLevel = 1) {
  return [...(player?.raceLevels ?? []), ...(player?.jobLevels ?? [])].some(cls => cls.id === classId && cls.level >= minLevel);
}

function hasAnyClassWithLevel(player, classIds = [], minLevel = 1) {
  return classIds.some(id => hasClassWithLevel(player, id, minLevel));
}

export function getUnlockStatus(state, trackName, path) {
  const player = state?.player;
  const source = getOwnedClass(player, trackName, path?.from);
  const req = path?.requirements ?? {};
  const checks = [];
  const costs = [];

  checks.push({
    key: "sourceClass",
    label: source ? `${source.name} owned` : `Own source class: ${path?.from ?? "Unknown"}`,
    met: Boolean(source)
  });

  const classLevel = Number(requirementValue(req, "classLevel", "sourceLevel", "level") ?? 0);
  if (classLevel > 0) {
    checks.push({
      key: "classLevel",
      label: source ? `${source.name} Lv. ${classLevel}` : `Source class Lv. ${classLevel}`,
      met: Boolean(source && source.level >= classLevel),
      current: source?.level ?? 0,
      required: classLevel
    });
  }

  const totalLevel = Number(requirementValue(req, "totalLevel", "overallLevel") ?? 0);
  if (totalLevel > 0) {
    const current = [...(player?.raceLevels ?? []), ...(player?.jobLevels ?? [])].reduce((sum, cls) => sum + cls.level, 0);
    checks.push({ key: "totalLevel", label: `Overall Lv. ${totalLevel}`, met: current >= totalLevel, current, required: totalLevel });
  }

  const bossKills = Number(requirementValue(req, "bossKills", "bosses") ?? 0);
  if (bossKills > 0) checks.push({ key: "bossKills", label: `Defeat ${bossKills} boss${bossKills === 1 ? "" : "es"}`, met: (state?.meta?.bossKills ?? 0) >= bossKills, current: state?.meta?.bossKills ?? 0, required: bossKills });

  const eliteKills = Number(requirementValue(req, "eliteKills", "elites") ?? 0);
  if (eliteKills > 0) checks.push({ key: "eliteKills", label: `Defeat ${eliteKills} elite${eliteKills === 1 ? "" : "s"}`, met: (state?.meta?.eliteKills ?? 0) >= eliteKills, current: state?.meta?.eliteKills ?? 0, required: eliteKills });

  const enemyKills = Number(requirementValue(req, "enemyKills", "kills") ?? 0);
  if (enemyKills > 0) checks.push({ key: "enemyKills", label: `Defeat ${enemyKills} enemies`, met: (state?.meta?.enemyKills ?? 0) >= enemyKills, current: state?.meta?.enemyKills ?? 0, required: enemyKills });

  const highestFloor = Number(requirementValue(req, "highestFloor", "floor") ?? 0);
  if (highestFloor > 0) checks.push({ key: "highestFloor", label: `Reach floor ${highestFloor}`, met: (state?.meta?.highestFloor ?? 0) >= highestFloor, current: state?.meta?.highestFloor ?? 0, required: highestFloor });

  const totalRuns = Number(requirementValue(req, "totalRuns", "runs") ?? 0);
  if (totalRuns > 0) checks.push({ key: "totalRuns", label: `Complete/start ${totalRuns} run${totalRuns === 1 ? "" : "s"}`, met: (state?.meta?.totalRuns ?? 0) >= totalRuns, current: state?.meta?.totalRuns ?? 0, required: totalRuns });

  const gold = Number(requirementValue(req, "gold") ?? 0);
  if (gold > 0) costs.push({ key: "gold", label: `${gold} gold`, met: (player?.gold ?? 0) >= gold, current: player?.gold ?? 0, required: gold });

  const relicDust = Number(requirementValue(req, "relicDust", "dust") ?? 0);
  if (relicDust > 0) costs.push({ key: "relicDust", label: `${relicDust} Relic Dust`, met: (state?.meta?.relicDust ?? 0) >= relicDust, current: state?.meta?.relicDust ?? 0, required: relicDust });

  const requiredClassId = requirementValue(req, "requiredClassId", "classId");
  if (requiredClassId) checks.push({ key: "requiredClassId", label: `Own ${getClassDataById(requiredClassId)?.name ?? requiredClassId}`, met: hasClassWithLevel(player, requiredClassId) });

  const requiredRaceId = requirementValue(req, "requiredRaceId", "raceId");
  if (requiredRaceId) checks.push({ key: "requiredRaceId", label: `Own race ${getClassDataById(requiredRaceId)?.name ?? requiredRaceId}`, met: hasClassWithLevel(player, requiredRaceId) });

  const requiredJobId = requirementValue(req, "requiredJobId", "jobId");
  if (requiredJobId) checks.push({ key: "requiredJobId", label: `Own job ${getClassDataById(requiredJobId)?.name ?? requiredJobId}`, met: hasClassWithLevel(player, requiredJobId) });

  const requiredAnyClassIds = requirementValue(req, "requiredAnyClassIds", "anyClassIds");
  if (Array.isArray(requiredAnyClassIds) && requiredAnyClassIds.length) checks.push({ key: "requiredAnyClassIds", label: `Own one required class`, met: hasAnyClassWithLevel(player, requiredAnyClassIds) });

  const achievementId = requirementValue(req, "achievementId", "achievement");
  if (achievementId) checks.push({ key: "achievementId", label: `Achievement: ${titleCase(String(achievementId))}`, met: (player?.achievements ?? []).includes(achievementId) });

  const defeatedBossId = requirementValue(req, "defeatedBossId", "bossId");
  if (defeatedBossId) checks.push({ key: "defeatedBossId", label: `Defeat boss: ${titleCase(String(defeatedBossId))}`, met: (player?.defeatedBosses ?? []).includes(defeatedBossId) });

  const allChecks = [...checks, ...costs];
  const met = allChecks.every(check => check.met);
  const missing = allChecks.filter(check => !check.met);
  const visible = Boolean(source) && (!isHiddenPath(path) || met || isClassOwned(player, path.id));

  return { path, source, checks, costs, missing, met, visible, hidden: isHiddenPath(path) };
}

export function canUnlockPath(state, trackName, path) {
  if (!path || !state?.player) return false;
  if (getOwnedClass(state.player, trackName, path.id)) return false;
  return getUnlockStatus(state, trackName, path).met;
}

export function canRevealPath(state, trackName, path) {
  if (!path || !state?.player) return false;
  if (getOwnedClass(state.player, trackName, path.id)) return true;
  const status = getUnlockStatus(state, trackName, path);
  if (isHiddenPath(path)) return status.met;
  return Boolean(status.source);
}

export function getRequirementText(req = {}, options = {}) {
  const parts = [];
  if (req.classLevel || req.sourceLevel || req.level) parts.push(`source Lv. ${req.classLevel ?? req.sourceLevel ?? req.level}`);
  if (req.totalLevel || req.overallLevel) parts.push(`overall Lv. ${req.totalLevel ?? req.overallLevel}`);
  if (req.bossKills || req.bosses) parts.push(`${req.bossKills ?? req.bosses} boss kill${Number(req.bossKills ?? req.bosses) === 1 ? "" : "s"}`);
  if (req.eliteKills || req.elites) parts.push(`${req.eliteKills ?? req.elites} elite kill${Number(req.eliteKills ?? req.elites) === 1 ? "" : "s"}`);
  if (req.enemyKills || req.kills) parts.push(`${req.enemyKills ?? req.kills} enemy kills`);
  if (req.highestFloor || req.floor) parts.push(`floor ${req.highestFloor ?? req.floor}`);
  if (req.totalRuns || req.runs) parts.push(`${req.totalRuns ?? req.runs} runs`);
  if (req.gold) parts.push(`${req.gold} gold`);
  if (req.relicDust || req.dust) parts.push(`${req.relicDust ?? req.dust} Relic Dust`);
  if (req.requiredClassId || req.classId) parts.push(`own ${getClassDataById(req.requiredClassId ?? req.classId)?.name ?? req.requiredClassId ?? req.classId}`);
  if (req.requiredRaceId || req.raceId) parts.push(`race ${getClassDataById(req.requiredRaceId ?? req.raceId)?.name ?? req.requiredRaceId ?? req.raceId}`);
  if (req.requiredJobId || req.jobId) parts.push(`job ${getClassDataById(req.requiredJobId ?? req.jobId)?.name ?? req.requiredJobId ?? req.jobId}`);
  if (req.achievementId || req.achievement) parts.push(`achievement ${titleCase(String(req.achievementId ?? req.achievement))}`);
  if (req.defeatedBossId || req.bossId) parts.push(`defeat ${titleCase(String(req.defeatedBossId ?? req.bossId))}`);
  if (!parts.length && options.fallback) parts.push(options.fallback);
  return parts.join(", ") || "none";
}

export function getUnlockRequirementMarkup(status) {
  if (!status) return "";
  const rows = [...status.checks, ...status.costs];
  if (!rows.length) return `<p class="small">No extra requirements.</p>`;
  return rows.map(row => `<div class="requirement-row ${row.met ? "met" : "missing"}"><span>${row.met ? "✓" : "✕"}</span><span>${row.label}</span>${row.current !== undefined ? `<span class="small">${row.current}/${row.required}</span>` : ""}</div>`).join("");
}

export function getUnlockableAdvancements(state, trackName) {
  const player = state?.player;
  if (!player) return [];
  const track = getTrackClasses(player, trackName);
  const paths = getPathList(trackName);
  const result = [];
  for (const cls of track) {
    const classPaths = paths.filter(path => path.from === cls.id && !getOwnedClass(player, trackName, path.id) && !isDeprecatedOverlap(path));
    for (const path of classPaths) {
      const status = getUnlockStatus(state, trackName, path);
      if (status.met) result.push({ ...path, sourceName: cls.name, canUnlock: true, sourceLevel: cls.level, unlockStatus: status });
    }
  }
  return result;
}

export function getVisibleTreeForPlayer(state, trackName) {
  const player = state?.player;
  const owned = getTrackClasses(player, trackName);
  const paths = getPathList(trackName);
  const ownedIds = new Set(owned.map(cls => cls.id));
  const visible = [];
  for (const cls of owned) {
    const children = paths.filter(path => path.from === cls.id && !ownedIds.has(path.id) && !isDeprecatedOverlap(path)).map(path => {
      const status = getUnlockStatus(state, trackName, path);
      if (isHiddenPath(path) && !status.met) return { mystery: true, from: cls.id, tier: path.tier, requirement: "Secret requirement not discovered yet." };
      return { ...path, canUnlock: status.met, unlockStatus: status };
    });
    visible.push({ ...cls, data: getClassDataById(cls.id), children });
  }
  return visible;
}

export function canSeeRegistryEntry(state, entry) {
  if (!entry) return false;
  if (isDeprecatedOverlap(entry) && !isClassOwned(state?.player, entry.id)) return false;
  if (String(entry.tier).toLowerCase() !== "hidden") return true;
  if (!state?.player) return false;
  if (isClassOwned(state.player, entry.id)) return true;
  const trackName = entry.track ?? (entry.kind?.toLowerCase().includes("race") ? "race" : "job");
  const data = getClassDataById(entry.id);
  if (!data) return false;
  return getUnlockStatus(state, trackName, data).met;
}

export function getLockedRegistryName(entry) {
  if (String(entry.tier).toLowerCase() !== "hidden") return entry.name;
  return "???? Hidden Class";
}
