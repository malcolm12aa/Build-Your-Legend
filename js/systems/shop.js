import { ITEMS } from "../data/items.js";
import { addInventory, addLog, byId } from "../core/utils.js";

export function buyItem(state, itemId) {
  const item = byId(ITEMS, itemId);
  if (!item) return;
  if (item.price <= 0) return addLog(state, "That item cannot be bought here.");
  if (state.player.gold < item.price) return addLog(state, "Not enough gold.");
  state.player.gold -= item.price;
  addInventory(state.player, itemId, 1);
  addLog(state, `Bought ${item.name} for ${item.price} gold.`);
}
