export const QUEST_CATEGORIES = [
  "Main Quest",
  "Side Quest",
  "Daily Quest",
  "Race Quest",
  "Job Quest",
  "Recruit Quest",
  "Hunting Quest",
  "Collection Quest",
  "Boss Quest",
  "Secret Quest"
];

export const QUESTS = [
  { id: "main_first_steps", category: "Main Quest", name: "First Steps into Emberfall", description: "Enter the shifting tower and clear your first room.", target: { type: "roomsCleared", amount: 1 }, rewards: { gold: 50, xp: 60 }, visibility: "always" },
  { id: "main_floor_five", category: "Main Quest", name: "Open the Fifth Gate", description: "Reach floor 5 and face the first gate boss.", target: { type: "highestFloor", amount: 5 }, rewards: { gold: 120, xp: 150, relicDust: 1 }, visibility: "always" },
  { id: "main_tower_oath", category: "Main Quest", name: "Tower Oathbreaker", description: "Defeat any tower boss and prove your build can survive real mechanics.", target: { type: "bossKills", amount: 1 }, rewards: { gold: 180, xp: 220, relicDust: 1 }, visibility: "always" },

  { id: "side_prepare", category: "Side Quest", name: "Prepared Adventurer", description: "Buy any item from a shop tab.", target: { type: "goldSpent", amount: 1 }, rewards: { gold: 35, xp: 40 }, visibility: "always" },
  { id: "side_save_gold", category: "Side Quest", name: "Coin Discipline", description: "Carry at least 500 gold at once.", target: { type: "gold", amount: 500 }, rewards: { xp: 100 }, visibility: "always" },

  { id: "daily_clear_three", category: "Daily Quest", name: "Daily Tower Patrol", description: "Clear 3 rooms during today's testing session.", target: { type: "dailyRooms", amount: 3 }, rewards: { gold: 90, xp: 90 }, visibility: "always", daily: true },
  { id: "daily_hunt", category: "Daily Quest", name: "Daily Hunt Order", description: "Defeat 5 enemies today.", target: { type: "dailyKills", amount: 5 }, rewards: { gold: 110, xp: 110 }, visibility: "always", daily: true },

  { id: "race_level_5", category: "Race Quest", name: "Bloodline Awakening Drill", description: "Raise any race stage to level 5.", target: { type: "highestRaceLevel", amount: 5 }, rewards: { xp: 120, relicDust: 1 }, visibility: "always" },
  { id: "race_evolve_once", category: "Race Quest", name: "First Evolution Proof", description: "Unlock any race evolution or upgraded race stage.", target: { type: "raceStages", amount: 2 }, rewards: { gold: 150, xp: 150, relicDust: 1 }, visibility: "always" },

  { id: "job_level_5", category: "Job Quest", name: "Role Identity Training", description: "Raise any job stage to level 5.", target: { type: "highestJobLevel", amount: 5 }, rewards: { xp: 120 }, visibility: "always" },
  { id: "job_upgrade_once", category: "Job Quest", name: "First Upgrade License", description: "Unlock any advanced, specialist, rare, or hidden job stage.", target: { type: "jobStages", amount: 2 }, rewards: { gold: 150, xp: 150 }, visibility: "always" },

  { id: "recruit_first", category: "Recruit Quest", name: "Do Not Walk Alone", description: "Recruit your first party member.", target: { type: "partySize", amount: 1 }, rewards: { gold: 80, xp: 80 }, visibility: "always" },
  { id: "recruit_full_party", category: "Recruit Quest", name: "Small Guild Formation", description: "Fill the current party limit with recruits.", target: { type: "partySize", amount: 2 }, rewards: { gold: 160, xp: 160 }, visibility: "always" },

  { id: "hunt_ten", category: "Hunting Quest", name: "Ten-Beast Ledger", description: "Defeat 10 enemies across runs.", target: { type: "enemyKills", amount: 10 }, rewards: { gold: 130, xp: 130 }, visibility: "always" },
  { id: "hunt_elite", category: "Hunting Quest", name: "Elite Mark", description: "Defeat an elite enemy.", target: { type: "eliteKills", amount: 1 }, rewards: { gold: 160, xp: 180, relicDust: 1 }, visibility: "always" },

  { id: "collect_dust", category: "Collection Quest", name: "Relic Dust Sample", description: "Gather 3 Relic Dust.", target: { type: "relicDust", amount: 3 }, rewards: { gold: 100, xp: 100 }, visibility: "always" },
  { id: "collect_items", category: "Collection Quest", name: "Pack Mule Trial", description: "Hold at least 10 total inventory items.", target: { type: "inventoryCount", amount: 10 }, rewards: { gold: 90, xp: 90 }, visibility: "always" },

  { id: "boss_first", category: "Boss Quest", name: "Gate Ogre Breaker", description: "Defeat one boss with its mechanics active.", target: { type: "bossKills", amount: 1 }, rewards: { gold: 220, xp: 260, relicDust: 2 }, visibility: "always" },
  { id: "boss_three", category: "Boss Quest", name: "Tower Boss Chain", description: "Defeat 3 bosses across your career.", target: { type: "bossKills", amount: 3 }, rewards: { gold: 400, xp: 500, relicDust: 3 }, visibility: "always" },

  { id: "secret_hidden_path", category: "Secret Quest", name: "????", revealedName: "Whisper Behind the Class Door", description: "A secret class door listens for proof of bosses defeated and Relic Dust gathered.", target: { type: "secretProgress", amount: 1 }, rewards: { gold: 250, xp: 300, relicDust: 2 }, visibility: "secret" }
];
