export const CONFIG = Object.freeze({
  title: "Build Your Legend",
  version: "0.6.0-balance-pass",
  storageKey: "build-your-legend-save-v1",
  saveSlotCount: 5,
  maxOverallLevel: 100,
  partyLimit: 2,
  startingGold: 120,
  defeatGoldLossRate: 0.12,
  statKeys: ["str", "dex", "int", "wis", "con", "cha"],
  elements: ["physical", "fire", "ice", "lightning", "wind", "earth", "water", "light", "dark", "arcane", "poison"],
  classCaps: {
    base: 15,
    advanced: 10,
    specialist: 10,
    rare: 5,
    hidden: 5
  }
});
