export const ENEMIES = [
  { id: "slime", name: "Glimmer Slime", minFloor: 1, weight: 6, element: "arcane", stats: { hp: 42, str: 3, dex: 2, int: 2, wis: 1, con: 2, cha: 0 }, skills: ["elf_spark"], resists: ["arcane"], weaknessesElements: ["fire"], gold: [8, 18], xp: 28 },
  { id: "goblin", name: "Lantern Goblin", minFloor: 1, weight: 7, element: "physical", stats: { hp: 48, str: 4, dex: 4, int: 1, wis: 1, con: 2, cha: 0 }, skills: ["quick_stab"], resists: [], weaknessesElements: ["light"], gold: [10, 22], xp: 32 },
  { id: "wolf", name: "Ash Wolf", minFloor: 2, weight: 5, element: "physical", stats: { hp: 55, str: 5, dex: 5, int: 0, wis: 2, con: 3, cha: 0 }, skills: ["beast_claw"], resists: ["poison"], weaknessesElements: ["fire"], gold: [12, 24], xp: 38 },
  { id: "bandit", name: "Tower Bandit", minFloor: 3, weight: 5, element: "physical", stats: { hp: 66, str: 6, dex: 5, int: 1, wis: 2, con: 4, cha: 1 }, skills: ["power_strike", "quick_stab"], resists: [], weaknessesElements: ["dark"], gold: [16, 32], xp: 46 },
  { id: "ember_imp", name: "Ember Imp", minFloor: 4, weight: 4, element: "fire", stats: { hp: 64, str: 3, dex: 5, int: 6, wis: 2, con: 3, cha: 3 }, skills: ["firebolt", "impish_hex"], resists: ["fire", "dark"], weaknessesElements: ["ice", "light"], gold: [18, 38], xp: 52 },
  { id: "bone_guard", name: "Bone Guard", minFloor: 5, weight: 4, element: "dark", stats: { hp: 82, str: 7, dex: 2, int: 2, wis: 2, con: 7, cha: 0 }, skills: ["shield_bash", "grave_charge"], resists: ["dark", "poison"], weaknessesElements: ["light"], gold: [20, 44], xp: 64 },
  { id: "rune_wisp", name: "Rune Wisp", minFloor: 6, weight: 3, element: "arcane", stats: { hp: 70, str: 1, dex: 6, int: 8, wis: 5, con: 3, cha: 2 }, skills: ["arcane_missile", "rune_bolt"], resists: ["arcane"], weaknessesElements: ["physical"], gold: [24, 48], xp: 72 },
  { id: "stone_mauler", name: "Stone Mauler", minFloor: 7, weight: 3, element: "earth", stats: { hp: 108, str: 9, dex: 1, int: 1, wis: 2, con: 10, cha: 0 }, skills: ["stone_slam", "colossus_stomp"], resists: ["physical", "earth"], weaknessesElements: ["lightning"], gold: [28, 55], xp: 84 },
  { id: "frost_mage", name: "Frost Mage", minFloor: 8, weight: 3, element: "ice", stats: { hp: 88, str: 2, dex: 4, int: 10, wis: 5, con: 4, cha: 2 }, skills: ["ice_lance", "mana_shield"], resists: ["ice"], weaknessesElements: ["fire"], gold: [35, 65], xp: 95 },
  { id: "mirror_knight", name: "Mirror Knight", minFloor: 10, weight: 2, element: "light", stats: { hp: 125, str: 10, dex: 5, int: 3, wis: 5, con: 9, cha: 3 }, skills: ["guarding_cut", "radiant_smite"], resists: ["light", "physical"], weaknessesElements: ["dark"], gold: [45, 80], xp: 120 }
];

export const ELITES = [
  { id: "elite_goblin_duelist", base: "goblin", name: "Elite Goblin Duelist", multiplier: 1.45, bonusSkill: "shadowstep", rewardDust: 1 },
  { id: "elite_bone_captain", base: "bone_guard", name: "Elite Bone Captain", multiplier: 1.55, bonusSkill: "iron_wall", rewardDust: 1 },
  { id: "elite_rune_oracle", base: "rune_wisp", name: "Elite Rune Oracle", multiplier: 1.5, bonusSkill: "omen_mend", rewardDust: 1 }
];

export const BOSSES = [
  { id: "floor_5_boss", floor: 5, name: "Gate Ogre Brakk", element: "earth", stats: { hp: 180, str: 12, dex: 3, int: 2, wis: 4, con: 12, cha: 2 }, skills: ["power_strike", "stone_slam", "iron_wall"], resists: ["physical", "earth"], weaknessesElements: ["lightning"], gold: [70, 120], xp: 190, rewardDust: 2 },
  { id: "floor_10_boss", floor: 10, name: "Dame Veyra of the Mirror Oath", element: "light", stats: { hp: 260, str: 15, dex: 8, int: 6, wis: 8, con: 14, cha: 6 }, skills: ["guarding_cut", "radiant_smite", "protective_oath"], resists: ["light", "physical"], weaknessesElements: ["dark"], gold: [120, 190], xp: 320, rewardDust: 3 },
  { id: "floor_15_boss", floor: 15, name: "The Candle Lich", element: "dark", stats: { hp: 340, str: 4, dex: 7, int: 18, wis: 12, con: 12, cha: 8 }, skills: ["soul_leech", "toxic_cloud", "binding_clause"], resists: ["dark", "poison"], weaknessesElements: ["light"], gold: [180, 260], xp: 480, rewardDust: 4 }
];
