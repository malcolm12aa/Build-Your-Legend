// v0.6.0 Balance Pass templates.
// These templates are used by the data-generation pass to keep imported Excel races/jobs distinct.
// The generated stats are written into races.js/jobs.js, while this file documents the source balance logic.

export const RACE_STAT_TEMPLATES = Object.freeze({
  "Common Fantasy": { focus: "balanced growth", stats: { str: 1, dex: 1, int: 1, wis: 1, con: 1, cha: 1 } },
  "Beastfolk": { focus: "speed and instinct", stats: { str: 2, dex: 3, wis: 1, con: 1 } },
  "Monster Races": { focus: "body power and durability", stats: { str: 3, con: 3, dex: -1, cha: -1 } },
  "Japanese Mythology": { focus: "spirit tricks and charm", stats: { dex: 2, wis: 2, cha: 2, int: 1 } },
  "Eastern / Cultivation": { focus: "wisdom, qi, and breakthrough scaling", stats: { str: 1, dex: 1, int: 2, wis: 3 } }
});

export const JOB_STAT_TEMPLATES = Object.freeze({
  Combat: { focus: "frontline weapon pressure", stats: { str: 3, con: 2 } },
  Magic: { focus: "mana burst and spell scaling", stats: { int: 4, wis: 1, con: -1 } },
  Holy: { focus: "healing and radiant defense", stats: { wis: 3, cha: 1, con: 1 } },
  Dark: { focus: "curses and life-drain pressure", stats: { int: 3, cha: 2, wis: -1 } },
  Rogue: { focus: "speed, crits, and status pressure", stats: { dex: 4, str: 1 } },
  Support: { focus: "party tempo and control", stats: { cha: 3, wis: 2 } },
  Ranged: { focus: "precision and battlefield spacing", stats: { dex: 3, wis: 2 } },
  Crafting: { focus: "items, traps, and preparation", stats: { int: 2, dex: 2, wis: 1 } },
  Monster: { focus: "adaptation and body powers", stats: { str: 2, con: 3, int: 1 } },
  "Japanese Fantasy": { focus: "spirit arts and named techniques", stats: { dex: 2, wis: 2, cha: 1 } },
  "Modern Fantasy": { focus: "tactics and tool use", stats: { dex: 3, int: 2 } },
  "Martial Arts": { focus: "stamina chains and body tempering", stats: { str: 2, dex: 2, wis: 1 } },
  "Summoner / Tamer": { focus: "companions and loyalty scaling", stats: { wis: 2, cha: 3 } },
  "Cultivation / Murim": { focus: "inner energy breakthroughs", stats: { str: 1, dex: 1, wis: 3, int: 1 } },
  "Guild Jobs": { focus: "utility and exploration", stats: { cha: 2, wis: 2, dex: 1 } }
});
