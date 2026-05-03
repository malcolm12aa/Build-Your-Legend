export const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
export const deepClone = (value) => JSON.parse(JSON.stringify(value));
export const uid = (prefix = "id") => `${prefix}_${Math.random().toString(36).slice(2, 9)}_${Date.now().toString(36)}`;
export const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const chance = (percent) => Math.random() * 100 < percent;
export const choice = (list) => list[Math.floor(Math.random() * list.length)];

export function weightedChoice(entries) {
  const total = entries.reduce((sum, entry) => sum + (entry.weight ?? 1), 0);
  let roll = Math.random() * total;
  for (const entry of entries) {
    roll -= entry.weight ?? 1;
    if (roll <= 0) return entry;
  }
  return entries.at(-1);
}

export function titleCase(text = "") {
  return text.replace(/[-_]/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

export function formatStat(stat) {
  const names = { str: "STR", dex: "DEX", int: "INT", wis: "WIS", con: "CON", cha: "CHA" };
  return names[stat] ?? titleCase(stat);
}

export function byId(list, id) {
  return list.find(item => item.id === id);
}

export function addLog(state, text) {
  state.log.unshift({ id: uid("log"), text, time: Date.now() });
  state.log = state.log.slice(0, 80);
}

export function addInventory(player, itemId, qty = 1) {
  player.inventory[itemId] = (player.inventory[itemId] ?? 0) + qty;
  if (player.inventory[itemId] <= 0) delete player.inventory[itemId];
}

export function removeInventory(player, itemId, qty = 1) {
  const current = player.inventory[itemId] ?? 0;
  if (current < qty) return false;
  player.inventory[itemId] = current - qty;
  if (player.inventory[itemId] <= 0) delete player.inventory[itemId];
  return true;
}
