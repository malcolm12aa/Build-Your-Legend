import { CONFIG } from "../config.js";
import { addLog } from "../core/utils.js";
import { syncResourcesToStats } from "./leveling.js";

export function startRun(state) {
  state.meta.totalRuns += 1;
  state.run = {
    active: true,
    mapId: "ember_tower",
    floor: 0,
    highestFloor: 0,
    roomsCleared: 0
  };
  state.combat = null;
  syncResourcesToStats(state.player);
  state.screen = "map";
  addLog(state, `<strong>Run started:</strong> Emberfall Tower shifts into a new layout.`);
}

export function endRunDefeat(state) {
  const lost = Math.floor(state.player.gold * CONFIG.defeatGoldLossRate);
  state.player.gold = Math.max(0, state.player.gold - lost);
  state.run = null;
  state.combat = null;
  state.player.statusEffects = [];
  const stats = syncResourcesToStats(state.player);
  state.player.hp = Math.max(1, Math.floor(stats.maxHp * 0.55));
  state.player.mana = Math.floor(stats.maxMana * 0.45);
  state.player.stamina = Math.floor(stats.maxStamina * 0.45);
  state.screen = "hub";
  addLog(state, `<strong>Defeat:</strong> dungeon progress was lost and ${lost} gold scattered into the tower.`);
}

export function leaveRun(state) {
  state.run = null;
  state.combat = null;
  state.screen = "hub";
  addLog(state, "You leave the dungeon run and return to the hub.");
}
