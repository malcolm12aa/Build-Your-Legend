import { ACHIEVEMENTS } from "../data/achievements.js";
import { addLog } from "../core/utils.js";
import { getActiveSynergies, getTotalLevel } from "./leveling.js";

function hasRareOrHiddenPath(player) {
  return [...(player.raceLevels ?? []), ...(player.jobLevels ?? [])].some(cls => ["rare", "hidden"].includes(cls.tier));
}

function achievementMet(id, state) {
  const player = state.player;
  if (!player) return false;
  const classCount = (player.raceLevels?.length ?? 0) + (player.jobLevels?.length ?? 0);
  switch (id) {
    case "first_run": return (state.meta.totalRuns ?? 0) >= 1;
    case "first_blood": return (state.meta.enemyKills ?? 0) >= 1;
    case "elite_breaker": return (state.meta.eliteKills ?? 0) >= 3;
    case "boss_breaker": return (state.meta.bossKills ?? 0) >= 1;
    case "tower_climber": return (state.meta.highestFloor ?? 0) >= 10;
    case "deep_delver": return (state.meta.highestFloor ?? 0) >= 20;
    case "gold_hoarder": return (player.gold ?? 0) >= 1000;
    case "class_collector": return classCount >= 4 || getTotalLevel(player) >= 25;
    case "party_leader": return (player.party?.length ?? 0) >= 2;
    case "relic_hunter": return (state.meta.relicDust ?? 0) >= 5;
    case "synergy_found": return getActiveSynergies(player).length > 0;
    case "rare_path": return hasRareOrHiddenPath(player);
    default: return false;
  }
}

export function checkAchievements(state) {
  if (!state.player) return [];
  state.player.achievements ??= [];
  const newlyUnlocked = [];
  for (const achievement of ACHIEVEMENTS) {
    if (state.player.achievements.includes(achievement.id)) continue;
    if (!achievementMet(achievement.id, state)) continue;
    state.player.achievements.push(achievement.id);
    if (!state.player.title || state.player.title === "Wanderer") state.player.title = achievement.title;
    newlyUnlocked.push(achievement);
    addLog(state, `<strong>Achievement unlocked:</strong> ${achievement.name}. Title gained: ${achievement.title}.`);
  }
  return newlyUnlocked;
}

export function isAchievementUnlocked(player, achievementId) {
  return (player?.achievements ?? []).includes(achievementId);
}
