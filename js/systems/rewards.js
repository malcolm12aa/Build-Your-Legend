import { ITEMS } from "../data/items.js";
import { addInventory, byId, chance, choice, randInt, addLog } from "../core/utils.js";
import { gainXp } from "./leveling.js";

const REWARD_ITEMS = ["minor_potion", "mana_vial", "stamina_tonic", "cleanse_salve", "camp_ration", "ember_gem"];

export function grantBattleRewards(state, enemy) {
  const [minGold, maxGold] = enemy.gold ?? [8, 20];
  const gold = randInt(minGold, maxGold);
  state.player.gold += gold;
  gainXp(state, enemy.xp ?? 25);
  let itemText = "";
  if (chance(28) || state.player.statusEffects?.some(s => s.id === "lucky")) {
    const itemId = choice(REWARD_ITEMS);
    addInventory(state.player, itemId, 1);
    itemText = ` Found ${byId(ITEMS, itemId)?.name ?? itemId}.`;
  }
  if (enemy.rewardDust) {
    state.meta.relicDust += enemy.rewardDust;
    itemText += ` Gained ${enemy.rewardDust} Relic Dust.`;
  }
  addLog(state, `<strong>Victory rewards:</strong> ${gold} gold, ${enemy.xp ?? 25} XP.${itemText}`);
}

export function grantEventReward(state, event) {
  if (event.gold) {
    const gold = randInt(event.gold[0], event.gold[1]);
    state.player.gold += gold;
    addLog(state, `Found ${gold} gold.`);
  }
  for (const itemId of event.items ?? []) {
    addInventory(state.player, itemId, 1);
    addLog(state, `Gained ${byId(ITEMS, itemId)?.name ?? itemId}.`);
  }
  if (event.xp) gainXp(state, event.xp);
  if (event.relicDust) {
    state.meta.relicDust += event.relicDust;
    addLog(state, `Gained ${event.relicDust} Relic Dust.`);
  }
}
