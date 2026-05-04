export const ITEMS = [
  { id: "minor_potion", name: "Minor Potion", type: "consumable", price: 25, description: "Restore 35 HP.", effects: [{ type: "healFlat", amount: 35 }] },
  { id: "mana_vial", name: "Mana Vial", type: "consumable", price: 30, description: "Restore 30 mana.", effects: [{ type: "restore", resource: "mana", amount: 30 }] },
  { id: "stamina_tonic", name: "Stamina Tonic", type: "consumable", price: 25, description: "Restore 30 stamina.", effects: [{ type: "restore", resource: "stamina", amount: 30 }] },
  { id: "cleanse_salve", name: "Cleanse Salve", type: "consumable", price: 35, description: "Remove poison, burn, bleed, and frozen.", effects: [{ type: "cleanse" }] },
  { id: "camp_ration", name: "Camp Ration", type: "consumable", price: 20, description: "Restore a small amount of all resources outside battle.", effects: [{ type: "healFlat", amount: 20 }, { type: "restore", resource: "mana", amount: 12 }, { type: "restore", resource: "stamina", amount: 12 }] },

  { id: "iron_sword", name: "Iron Sword", type: "equipment", slot: "weapon1", price: 90, description: "A basic blade for physical builds.", stats: { str: 2 } },
  { id: "oak_staff", name: "Oak Staff", type: "equipment", slot: "weapon1", price: 95, description: "A simple staff for magic users.", stats: { int: 2, wis: 1 } },
  { id: "hunter_bow", name: "Hunter Bow", type: "equipment", slot: "weapon1", price: 90, description: "A flexible ranged weapon.", stats: { dex: 2 } },
  { id: "training_shield", name: "Training Shield", type: "equipment", slot: "weapon2", price: 80, description: "A shield that helps survivability.", stats: { con: 2 } },
  { id: "cloth_robe", name: "Cloth Robe", type: "equipment", slot: "chest", price: 70, description: "Light robe with a little mana control.", stats: { int: 1, wis: 1 } },
  { id: "chain_vest", name: "Chain Vest", type: "equipment", slot: "chest", price: 95, description: "Basic armor for dungeon floors.", stats: { con: 2 } },
  { id: "swift_boots", name: "Swift Boots", type: "equipment", slot: "legs", price: 75, description: "Boots made for quicker turns.", stats: { dex: 2 } },
  { id: "apprentice_ring", name: "Apprentice Ring", type: "equipment", slot: "accessory1", price: 85, description: "A ring that helps basic casting.", stats: { int: 1, cha: 1 } },
  { id: "wolf_charm", name: "Wolf Charm", type: "equipment", slot: "accessory2", price: 85, description: "A small charm for stamina fighters.", stats: { str: 1, dex: 1 } },
  { id: "sun_badge", name: "Sun Badge", type: "equipment", slot: "accessory3", price: 120, description: "A light-aspected badge favored by healers.", stats: { wis: 2 } },

  { id: "ember_helm", name: "Ember Knight Helm", type: "equipment", slot: "head", set: "ember_knight", price: 165, description: "A warm helm from the Ember Knight set.", stats: { str: 1, con: 1 } },
  { id: "ember_cuirass", name: "Ember Knight Cuirass", type: "equipment", slot: "chest", set: "ember_knight", price: 210, description: "Heavy armor that hums with contained fire.", stats: { str: 1, con: 3 } },
  { id: "ember_gauntlets", name: "Ember Knight Gauntlets", type: "equipment", slot: "arms", set: "ember_knight", price: 150, description: "Gauntlets that make weapon strikes bite harder.", stats: { str: 2 } },
  { id: "ember_boots", name: "Ember Knight Greaves", type: "equipment", slot: "legs", set: "ember_knight", price: 155, description: "Greaves made to hold formation inside burning halls.", stats: { con: 1, dex: 1 } },

  { id: "sage_circlet", name: "Moon Sage Circlet", type: "equipment", slot: "head", set: "moon_sage", price: 170, description: "A silver circlet that improves calm casting.", stats: { int: 2 } },
  { id: "sage_robe", name: "Moon Sage Robe", type: "equipment", slot: "chest", set: "moon_sage", price: 215, description: "A robe stitched with quiet lunar runes.", stats: { int: 2, wis: 1 } },
  { id: "sage_gloves", name: "Moon Sage Gloves", type: "equipment", slot: "arms", set: "moon_sage", price: 145, description: "Gloves that stabilize mana flow.", stats: { int: 1, wis: 1 } },
  { id: "sage_charm", name: "Moon Sage Charm", type: "equipment", slot: "accessory4", set: "moon_sage", price: 160, description: "A charm that brightens spell circuits.", stats: { wis: 2 } },

  { id: "wolf_mask", name: "Wolf Road Mask", type: "equipment", slot: "head", set: "wolf_road", price: 145, description: "A hunter mask for quick roguelike dives.", stats: { dex: 2 } },
  { id: "wolf_jacket", name: "Wolf Road Jacket", type: "equipment", slot: "chest", set: "wolf_road", price: 175, description: "Light armor built for fast movement.", stats: { dex: 1, con: 1 } },
  { id: "wolf_claws", name: "Wolf Road Claws", type: "equipment", slot: "arms", set: "wolf_road", price: 165, description: "Clawed gloves for close-range stamina builds.", stats: { str: 1, dex: 2 } },
  { id: "wolf_talisman", name: "Wolf Road Talisman", type: "equipment", slot: "accessory5", set: "wolf_road", price: 155, description: "A talisman that sharpens instinct.", stats: { dex: 1, wis: 1 } },

  { id: "ember_gem", name: "Ember Gem", type: "material", price: 60, description: "A warm monster core used for future crafting." },
  { id: "relic_dust", name: "Relic Dust", type: "material", price: 0, description: "Permanent progression dust used for secret unlocks." }
];

export const SET_BONUSES = [
  {
    id: "ember_knight",
    name: "Ember Knight Set",
    thresholds: [
      { pieces: 2, description: "+2 STR and +1 CON", stats: { str: 2, con: 1 } },
      { pieces: 4, description: "+3 STR, +2 CON, and stronger stamina bruiser scaling", stats: { str: 3, con: 2 } }
    ]
  },
  {
    id: "moon_sage",
    name: "Moon Sage Set",
    thresholds: [
      { pieces: 2, description: "+2 INT and +1 WIS", stats: { int: 2, wis: 1 } },
      { pieces: 4, description: "+4 INT, +3 WIS, and better mana-focused scaling", stats: { int: 4, wis: 3 } }
    ]
  },
  {
    id: "wolf_road",
    name: "Wolf Road Set",
    thresholds: [
      { pieces: 2, description: "+2 DEX and +1 STR", stats: { dex: 2, str: 1 } },
      { pieces: 4, description: "+4 DEX, +2 STR, and improved speed builds", stats: { dex: 4, str: 2 } }
    ]
  }
];

export const EQUIPMENT_SLOTS = ["head", "chest", "arms", "legs", "weapon1", "weapon2", "accessory1", "accessory2", "accessory3", "accessory4", "accessory5"];
