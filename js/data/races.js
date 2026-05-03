export const RACES = [
  {
    id: "human", name: "Human", tier: "base", maxLevel: 15,
    description: "Adaptable mortals who grow faster than most bloodlines. Their greatest strength is flexibility.",
    stats: { str: 1, dex: 1, int: 1, wis: 1, con: 1, cha: 1 },
    levelGrowth: { str: 1, dex: 1, int: 1, wis: 1, con: 1, cha: 1 },
    startingSkills: ["human_resolve"], strengths: ["Balanced stats", "Cheaper class advancement"], weaknesses: ["No natural elemental resistance"],
    resists: [], weaknessesElements: [], paths: ["champion_blooded", "runeborn"]
  },
  {
    id: "high_elf", name: "High Elf", tier: "base", maxLevel: 15,
    description: "Long-lived forest arcanists with sharp senses and natural mana control.",
    stats: { str: 0, dex: 2, int: 3, wis: 1, con: -1, cha: 1 },
    levelGrowth: { dex: 1, int: 2, wis: 1 },
    startingSkills: ["elf_spark"], strengths: ["High mana", "Arcane damage"], weaknesses: ["Lower durability"],
    resists: ["arcane"], weaknessesElements: ["poison"], paths: ["moon_elf", "spellwood_sage"]
  },
  {
    id: "iron_dwarf", name: "Iron Dwarf", tier: "base", maxLevel: 15,
    description: "Mountain-forged warriors with dense bodies, deep stamina, and stubborn defenses.",
    stats: { str: 2, dex: -1, int: 0, wis: 1, con: 4, cha: 0 },
    levelGrowth: { str: 1, con: 2, wis: 1 },
    startingSkills: ["dwarf_guard"], strengths: ["High HP", "Physical resistance"], weaknesses: ["Lower speed"],
    resists: ["physical", "earth"], weaknessesElements: ["lightning"], paths: ["rune_dwarf", "deep_forge_heir"]
  },
  {
    id: "beastkin", name: "Beastkin", tier: "base", maxLevel: 15,
    description: "Wild-blooded hunters with claws, instincts, and explosive speed.",
    stats: { str: 2, dex: 3, int: -1, wis: 1, con: 1, cha: 0 },
    levelGrowth: { str: 1, dex: 2, con: 1 },
    startingSkills: ["beast_claw"], strengths: ["Fast physical attacks", "Bleed pressure"], weaknesses: ["Weak magical defense"],
    resists: ["poison"], weaknessesElements: ["arcane"], paths: ["dire_beast", "moonfang"]
  },
  {
    id: "dragonoid", name: "Dragonoid", tier: "base", maxLevel: 15,
    description: "Scaled descendants of ancient wyrms who carry a tiny ember of dragon authority.",
    stats: { str: 3, dex: 0, int: 1, wis: 0, con: 3, cha: 1 },
    levelGrowth: { str: 1, con: 2, cha: 1 },
    startingSkills: ["ember_breath"], strengths: ["Fire resistance", "Strong mixed offense"], weaknesses: ["Ice weakness"],
    resists: ["fire"], weaknessesElements: ["ice"], paths: ["wyvern_heir", "ancient_scale"]
  },
  {
    id: "sylph", name: "Sylph", tier: "base", maxLevel: 15,
    description: "Wind-touched fey folk with light bodies, quick feet, and storm-born magic.",
    stats: { str: -1, dex: 4, int: 1, wis: 1, con: -1, cha: 2 },
    levelGrowth: { dex: 2, int: 1, cha: 1 },
    startingSkills: ["gale_cut"], strengths: ["Dodge and wind skills", "High initiative"], weaknesses: ["Low HP"],
    resists: ["wind"], weaknessesElements: ["earth"], paths: ["storm_sylph", "cloud_dancer"]
  },
  {
    id: "undead", name: "Awakened Undead", tier: "base", maxLevel: 15,
    description: "A soul anchored to bone and shadow. Hard to kill, feared by priests, and hated by sunlight.",
    stats: { str: 1, dex: 0, int: 2, wis: 1, con: 3, cha: -1 },
    levelGrowth: { int: 1, wis: 1, con: 2 },
    startingSkills: ["grave_drain"], strengths: ["Dark resistance", "Life drain"], weaknesses: ["Light weakness"],
    resists: ["dark", "poison"], weaknessesElements: ["light"], paths: ["lich_seed", "death_knight_blood"]
  },
  {
    id: "demonkin", name: "Demonkin", tier: "base", maxLevel: 15,
    description: "A horned bloodline carrying infernal ambition, curse talent, and dangerous charisma.",
    stats: { str: 1, dex: 1, int: 2, wis: -1, con: 1, cha: 3 },
    levelGrowth: { int: 1, cha: 2, str: 1 },
    startingSkills: ["impish_hex"], strengths: ["Dark and fire skills", "Debuffs"], weaknesses: ["Light weakness"],
    resists: ["fire", "dark"], weaknessesElements: ["light"], paths: ["hellbrand", "contract_fiend"]
  },
  {
    id: "golemforged", name: "Golemforged", tier: "base", maxLevel: 15,
    description: "A living construct with a crystal core, stone sinews, and slow but brutal force.",
    stats: { str: 3, dex: -2, int: 1, wis: 0, con: 5, cha: -1 },
    levelGrowth: { str: 2, con: 2 },
    startingSkills: ["stone_slam"], strengths: ["Huge durability", "Stun attacks"], weaknesses: ["Low speed and charm"],
    resists: ["physical", "poison"], weaknessesElements: ["lightning"], paths: ["mithril_core", "colossus_frame"]
  },
  {
    id: "celestian", name: "Celestian", tier: "base", maxLevel: 15,
    description: "Star-blessed wanderers with radiant souls and a natural instinct for protection.",
    stats: { str: 0, dex: 1, int: 1, wis: 3, con: 1, cha: 2 },
    levelGrowth: { wis: 2, cha: 1, con: 1 },
    startingSkills: ["star_mend"], strengths: ["Healing", "Light resistance"], weaknesses: ["Dark weakness"],
    resists: ["light"], weaknessesElements: ["dark"], paths: ["star_seraph", "oracle_blooded"]
  }
];

export const RACE_PATHS = [
  { id: "champion_blooded", name: "Champion-Blooded", tier: "advanced", maxLevel: 10, from: "human", description: "A human whose willpower begins to bend fate.", stats: { str: 2, con: 2, cha: 1 }, levelGrowth: { str: 1, con: 1, cha: 1 }, startingSkills: ["heroic_surge"], requirements: { classLevel: 15, gold: 100 } },
  { id: "runeborn", name: "Runeborn", tier: "advanced", maxLevel: 10, from: "human", description: "A human awakened by old glyphs and spell circuits.", stats: { int: 3, wis: 1 }, levelGrowth: { int: 2, wis: 1 }, startingSkills: ["rune_bolt"], requirements: { classLevel: 15, gold: 120 } },
  { id: "moon_elf", name: "Moon Elf", tier: "advanced", maxLevel: 10, from: "high_elf", description: "An elf who channels moonlight into spell blades.", stats: { dex: 2, int: 2 }, levelGrowth: { dex: 1, int: 2 }, startingSkills: ["moon_lance"], requirements: { classLevel: 15, gold: 110 } },
  { id: "spellwood_sage", name: "Spellwood Sage", tier: "advanced", maxLevel: 10, from: "high_elf", description: "A mystic rooted in old forest law.", stats: { int: 3, wis: 2 }, levelGrowth: { int: 2, wis: 1 }, startingSkills: ["verdant_barrier"], requirements: { classLevel: 15, gold: 110 } },
  { id: "rune_dwarf", name: "Rune Dwarf", tier: "advanced", maxLevel: 10, from: "iron_dwarf", description: "A smith-blood dwarf whose bones remember runes.", stats: { con: 3, wis: 2 }, levelGrowth: { con: 2, wis: 1 }, startingSkills: ["rune_guard"], requirements: { classLevel: 15, gold: 100 } },
  { id: "deep_forge_heir", name: "Deep Forge Heir", tier: "advanced", maxLevel: 10, from: "iron_dwarf", description: "A hardier dwarf tempered by under-mountain fire.", stats: { str: 2, con: 3 }, levelGrowth: { str: 1, con: 2 }, startingSkills: ["forge_roar"], requirements: { classLevel: 15, gold: 100 } },
  { id: "dire_beast", name: "Dire Beastkin", tier: "advanced", maxLevel: 10, from: "beastkin", description: "A beastkin whose instincts sharpen into predatory aura.", stats: { str: 3, dex: 2 }, levelGrowth: { str: 1, dex: 2 }, startingSkills: ["dire_pounce"], requirements: { classLevel: 15, gold: 90 } },
  { id: "moonfang", name: "Moonfang", tier: "advanced", maxLevel: 10, from: "beastkin", description: "A lunar hunter with silver claws and night senses.", stats: { dex: 3, wis: 1 }, levelGrowth: { dex: 2, wis: 1 }, startingSkills: ["lunar_rend"], requirements: { classLevel: 15, gold: 90 } },
  { id: "wyvern_heir", name: "Wyvern Heir", tier: "advanced", maxLevel: 10, from: "dragonoid", description: "A dragonoid whose draconic organs mature for battle.", stats: { str: 3, con: 2 }, levelGrowth: { str: 2, con: 1 }, startingSkills: ["wyvern_flame"], requirements: { classLevel: 15, gold: 130 } },
  { id: "ancient_scale", name: "Ancient Scale", tier: "advanced", maxLevel: 10, from: "dragonoid", description: "A scaled bloodline thickened by ancestral memory.", stats: { con: 4, cha: 1 }, levelGrowth: { con: 2, cha: 1 }, startingSkills: ["scale_aegis"], requirements: { classLevel: 15, gold: 130 } },
  { id: "storm_sylph", name: "Storm Sylph", tier: "advanced", maxLevel: 10, from: "sylph", description: "A sylph who dances at the edge of thunderheads.", stats: { dex: 3, int: 2 }, levelGrowth: { dex: 2, int: 1 }, startingSkills: ["storm_jolt"], requirements: { classLevel: 15, gold: 95 } },
  { id: "cloud_dancer", name: "Cloud Dancer", tier: "advanced", maxLevel: 10, from: "sylph", description: "A drifting fey duelist who avoids blows like mist.", stats: { dex: 4, cha: 1 }, levelGrowth: { dex: 2, cha: 1 }, startingSkills: ["mist_step"], requirements: { classLevel: 15, gold: 95 } },
  { id: "lich_seed", name: "Lich Seed", tier: "advanced", maxLevel: 10, from: "undead", description: "An undead beginning the forbidden road to soul sovereignty.", stats: { int: 4, con: 1 }, levelGrowth: { int: 2, con: 1 }, startingSkills: ["soul_leech"], requirements: { classLevel: 15, gold: 140 } },
  { id: "death_knight_blood", name: "Death Knight Blood", tier: "advanced", maxLevel: 10, from: "undead", description: "An undead body armored by grudge and battlefield memory.", stats: { str: 2, con: 3 }, levelGrowth: { str: 1, con: 2 }, startingSkills: ["grave_charge"], requirements: { classLevel: 15, gold: 120 } },
  { id: "hellbrand", name: "Hellbrand", tier: "advanced", maxLevel: 10, from: "demonkin", description: "A demonkin who brands enemies with living flame.", stats: { int: 2, cha: 3 }, levelGrowth: { int: 1, cha: 2 }, startingSkills: ["hellbrand_mark"], requirements: { classLevel: 15, gold: 125 } },
  { id: "contract_fiend", name: "Contract Fiend", tier: "advanced", maxLevel: 10, from: "demonkin", description: "A demonkin who turns bargains into battlefield curses.", stats: { wis: 1, cha: 4 }, levelGrowth: { wis: 1, cha: 2 }, startingSkills: ["binding_clause"], requirements: { classLevel: 15, gold: 125 } },
  { id: "mithril_core", name: "Mithril Core", tier: "advanced", maxLevel: 10, from: "golemforged", description: "A golemforged with a lighter, brighter, stronger core.", stats: { str: 2, con: 4 }, levelGrowth: { str: 1, con: 2 }, startingSkills: ["mithril_pulse"], requirements: { classLevel: 15, gold: 135 } },
  { id: "colossus_frame", name: "Colossus Frame", tier: "advanced", maxLevel: 10, from: "golemforged", description: "A massive frame made for tower breaking.", stats: { str: 4, con: 3, dex: -1 }, levelGrowth: { str: 2, con: 2 }, startingSkills: ["colossus_stomp"], requirements: { classLevel: 15, gold: 135 } },
  { id: "star_seraph", name: "Star Seraph", tier: "advanced", maxLevel: 10, from: "celestian", description: "A radiant bloodline that sings with dawn-colored wings.", stats: { wis: 3, cha: 2 }, levelGrowth: { wis: 2, cha: 1 }, startingSkills: ["seraphic_ray"], requirements: { classLevel: 15, gold: 120 } },
  { id: "oracle_blooded", name: "Oracle-Blooded", tier: "advanced", maxLevel: 10, from: "celestian", description: "A seer whose instincts read fate before it lands.", stats: { int: 1, wis: 4 }, levelGrowth: { int: 1, wis: 2 }, startingSkills: ["omen_mend"], requirements: { classLevel: 15, gold: 120 } },
  { id: "eclipse_immortal", name: "Eclipse Immortal", tier: "hidden", maxLevel: 5, from: "celestian", description: "A secret race path balancing light and dark without being consumed.", stats: { int: 3, wis: 3, con: 2 }, levelGrowth: { int: 2, wis: 2, con: 1 }, startingSkills: ["eclipse_edict"], requirements: { bossKills: 3, relicDust: 5 } }
];
