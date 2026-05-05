export const CONFIG = Object.freeze({
  title: "Build Your Legend",
  version: "0.6.2-basic-abilities",
  storageKey: "build-your-legend-save-v1",
  saveSlotCount: 5,
  maxOverallLevel: 100,
  partyLimit: 2,
  startingGold: 120,
  defeatGoldLossRate: 0.12,
  statKeys: ["strength", "endurance", "dexterity", "agility", "magic"],
  basicAbilityRanks: { I: [0, 99], H: [100, 199], G: [200, 299], F: [300, 399], E: [400, 499], D: [500, 599], C: [600, 699], B: [700, 799], A: [800, 899], S: [900, 999] },
  elements: ["physical", "fire", "ice", "lightning", "wind", "earth", "water", "light", "dark", "arcane", "poison"],
  classCaps: {
    base: 15,
    advanced: 10,
    specialist: 10,
    rare: 5,
    hidden: 5
  }
});
