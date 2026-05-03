import { ITEMS, EQUIPMENT_SLOTS } from "../data/items.js";
import { byId, addInventory, removeInventory, addLog, clamp } from "../core/utils.js";
import { computeStats, syncResourcesToStats } from "./leveling.js";

export function useItem(state, itemId, inBattle = false) {
  const item = byId(ITEMS, itemId);
  if (!item || item.type !== "consumable") return false;
  if (!removeInventory(state.player, itemId, 1)) {
    addLog(state, "You do not have that item.");
    return false;
  }
  const stats = computeStats(state.player);
  for (const effect of item.effects ?? []) {
    if (effect.type === "healFlat") state.player.hp = clamp(state.player.hp + effect.amount, 0, stats.maxHp);
    if (effect.type === "restore") {
      const max = effect.resource === "mana" ? stats.maxMana : stats.maxStamina;
      state.player[effect.resource] = clamp(state.player[effect.resource] + effect.amount, 0, max);
    }
    if (effect.type === "cleanse") {
      state.player.statusEffects = (state.player.statusEffects ?? []).filter(s => !["poison", "burn", "bleed", "frozen"].includes(s.id));
    }
  }
  addLog(state, `Used ${item.name}.`);
  return true;
}

export function equipItem(state, itemId) {
  const item = byId(ITEMS, itemId);
  if (!item || item.type !== "equipment") return;
  if (!removeInventory(state.player, itemId, 1)) return addLog(state, "You do not have that equipment item.");
  const slot = item.slot;
  const old = state.player.equipment[slot];
  if (old) addInventory(state.player, old, 1);
  state.player.equipment[slot] = itemId;
  syncResourcesToStats(state.player);
  addLog(state, `Equipped ${item.name}.`);
}

export function unequipSlot(state, slot) {
  if (!EQUIPMENT_SLOTS.includes(slot)) return;
  const itemId = state.player.equipment[slot];
  if (!itemId) return;
  state.player.equipment[slot] = null;
  addInventory(state.player, itemId, 1);
  syncResourcesToStats(state.player);
  addLog(state, `Unequipped ${byId(ITEMS, itemId)?.name ?? itemId}.`);
}
