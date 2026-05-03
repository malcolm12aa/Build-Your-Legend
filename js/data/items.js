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
  { id: "ember_gem", name: "Ember Gem", type: "material", price: 60, description: "A warm monster core used for future crafting." },
  { id: "relic_dust", name: "Relic Dust", type: "material", price: 0, description: "Permanent progression dust used for secret unlocks." }
];

export const EQUIPMENT_SLOTS = ["head", "chest", "arms", "legs", "weapon1", "weapon2", "accessory1", "accessory2", "accessory3", "accessory4", "accessory5"];
