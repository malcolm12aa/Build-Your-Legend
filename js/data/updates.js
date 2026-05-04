export const UPDATE_NOTES = [
  {
    version: "v0.3.1 — Race & Job Filter Update",
    date: "2026-05-03",
    notes: [
      "Added race filters to Character Creation: search, category, tier, and build focus.",
      "Added job filters to Character Creation: search, category, tier, and build focus.",
      "Added result counts so large imported lists are easier to browse on mobile.",
      "Added warnings when your currently selected race/job is hidden by filters but still selected.",
      "Kept the full Class Registry filters for browsing every imported race evolution and job path."
    ]
  },
  {
    version: "v0.3.0 — Excel Data Import",
    date: "2026-05-03",
    notes: [
      "Imported 69 races from the Excel race summary.",
      "Imported 73 base jobs and 584 job progression paths from the Excel job summary.",
      "Imported 552 race evolution paths from the Excel race-evolution rows.",
      "Added a Class Registry screen with search, type, category/world, and tier filters.",
      "Kept the imported data modular so v0.4.0 can convert more Excel requirements into full unlock logic."
    ]
  },
  {
    version: "v0.2.0 — Improvement Pass",
    date: "2026-05-03",
    notes: [
      "Added a 5-slot save/load menu using browser localStorage.",
      "Added character creation stat preview with race/job synergy detection.",
      "Added race evolution tree and job class tree previews.",
      "Added race + job synergy bonuses.",
      "Added enemy intent display during battle.",
      "Added more random dungeon events including shrines, portals, locked chests, weather, and merchants.",
      "Added equipment set bonus support and new gear sets.",
      "Expanded recruits with personality text and passive role descriptions.",
      "Added achievements and selectable title rewards.",
      "Added this versioned update notes screen."
    ]
  },
  {
    version: "v0.1.0 — Foundation Release",
    date: "2026-05-03",
    notes: [
      "Added main menu, character creation, hub, map, battle, shops, inventory, and progression screens.",
      "Added 10 starting races and 10 starting jobs.",
      "Added Total Level = Race Levels + Job Levels.",
      "Added Overlord/YGGDRASIL-inspired class caps and unlock paths.",
      "Added localStorage saving, turn-based combat, elemental weaknesses, status effects, recruits, and roguelike dungeon runs."
    ]
  }
];
