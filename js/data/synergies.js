export const SYNERGIES = [
  {
    id: "flame_bloodline",
    name: "Flame Bloodline",
    description: "Dragonoid instincts fuse with spellcraft, improving fire and mixed offense builds.",
    raceIds: ["dragonoid"],
    jobIds: ["mage", "spellblade", "alchemist"],
    stats: { str: 1, int: 2, cha: 1 },
    skills: ["ember_breath"],
    unlockText: "Dragonoid + Mage, Spellblade, or Alchemist"
  },
  {
    id: "grave_sovereign",
    name: "Grave Sovereign",
    description: "Undead bodies and curse-focused classes become harder to kill and better at draining enemies.",
    raceIds: ["undead"],
    jobIds: ["cleric", "mage", "guardian"],
    stats: { int: 1, wis: 1, con: 3 },
    skills: ["grave_drain"],
    unlockText: "Awakened Undead + Cleric, Mage, or Guardian"
  },
  {
    id: "forest_hunter",
    name: "Forest Hunter",
    description: "High Elf senses blend with ranger discipline for precise first strikes.",
    raceIds: ["high_elf"],
    jobIds: ["ranger", "rogue"],
    stats: { dex: 3, wis: 1 },
    skills: ["aimed_shot"],
    unlockText: "High Elf + Ranger or Rogue"
  },
  {
    id: "abyss_contract",
    name: "Abyss Contract",
    description: "Demonkin charisma turns curses, songs, and contracts into stronger debuffs.",
    raceIds: ["demonkin"],
    jobIds: ["bard", "mage", "spellblade"],
    stats: { int: 1, cha: 3 },
    skills: ["impish_hex"],
    unlockText: "Demonkin + Bard, Mage, or Spellblade"
  },
  {
    id: "living_fortress",
    name: "Living Fortress",
    description: "Golemforged frames become walking bastions when paired with defense jobs.",
    raceIds: ["golemforged", "iron_dwarf"],
    jobIds: ["guardian", "fighter"],
    stats: { str: 1, con: 4 },
    skills: ["dwarf_guard"],
    unlockText: "Golemforged/Iron Dwarf + Guardian or Fighter"
  },
  {
    id: "wind_step_duelist",
    name: "Wind-Step Duelist",
    description: "Sylph movement and rogue/monk footwork create a fast evasive build.",
    raceIds: ["sylph"],
    jobIds: ["rogue", "monk", "spellblade"],
    stats: { dex: 4, cha: 1 },
    skills: ["gale_cut"],
    unlockText: "Sylph + Rogue, Monk, or Spellblade"
  },
  {
    id: "radiant_anchor",
    name: "Radiant Anchor",
    description: "Celestian light strengthens healers and protectors, giving safer long dungeon runs.",
    raceIds: ["celestian"],
    jobIds: ["cleric", "guardian", "bard"],
    stats: { wis: 3, con: 1, cha: 1 },
    skills: ["star_mend"],
    unlockText: "Celestian + Cleric, Guardian, or Bard"
  },
  {
    id: "wild_brawler",
    name: "Wild Brawler",
    description: "Beastkin instincts make stamina-heavy melee classes hit harder and faster.",
    raceIds: ["beastkin"],
    jobIds: ["monk", "fighter", "ranger"],
    stats: { str: 2, dex: 2 },
    skills: ["beast_claw"],
    unlockText: "Beastkin + Monk, Fighter, or Ranger"
  },
  {
    id: "everyman_hero",
    name: "Everyman Hero",
    description: "Human adaptability gives a small bonus to any straightforward starter build.",
    raceIds: ["human"],
    jobIds: ["fighter", "ranger", "cleric", "mage", "rogue"],
    stats: { str: 1, dex: 1, int: 1, wis: 1 },
    skills: ["human_resolve"],
    unlockText: "Human + one of the five classic starter jobs"
  }
];
