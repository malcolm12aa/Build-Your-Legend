import { ITEMS } from "../data/items.js";
import { SKILLS } from "../data/skills.js";
import { addInventory, addLog, byId } from "../core/utils.js";
import { trackQuestProgress } from "./quests.js";

export function buyItem(state, itemId) {
  const item = byId(ITEMS, itemId);
  if (!item) return;
  if (item.price <= 0) return addLog(state, "That item cannot be bought here.");
  if (state.player.gold < item.price) return addLog(state, "Not enough gold.");
  state.player.gold -= item.price;
  trackQuestProgress(state, "goldSpent", item.price);
  addInventory(state.player, itemId, 1);
  addLog(state, `Bought ${item.name} for ${item.price} gold.`);
}

export function buyAbility(state, skillId) {
  const skill = byId(SKILLS, skillId);
  if (!skill) return addLog(state, "That ability is not available.");
  if (state.player.skills?.includes(skillId)) return addLog(state, `${skill.name} is already learned.`);
  const price = Number(skill.price ?? 0);
  if (price <= 0) return addLog(state, `${skill.name} cannot be bought from a shop.`);
  if (state.player.gold < price) return addLog(state, "Not enough gold for that ability.");
  state.player.gold -= price;
  trackQuestProgress(state, "goldSpent", price);
  state.player.skills ??= [];
  state.player.skills.push(skillId);
  addLog(state, `<strong>Learned ability:</strong> ${skill.name} for ${price} gold.`);
}
