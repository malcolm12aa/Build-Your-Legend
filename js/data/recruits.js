// Build Your Legend data split from js/core/00_game_core.js
// Keep loaded before the core systems file.

const RECRUIT_DATA = [
    {
        "id": "recruit_001",
        "anime": "Village Adventurers",
        "category": "Village Adventurers",
        "name": "Mira Hearthstep",
        "emoji": "🙂",
        "level": 1,
        "req": 1,
        "race": "Human",
        "job": "Adventurer",
        "role": "Adventurer",
        "cost": 160,
        "desc": "A first-rank adventurer who fights with a chipped sword, a lantern, and impossible optimism.",
        "bonus": {
            "hp": 18,
            "pa": 3,
            "ag": 2
        },
        "assist": {
            "kind": "damage",
            "pow": 52,
            "name": "Torchlit Strike",
            "status": "marked",
            "statusChance": 0.25
        }
    },
    {
        "id": "recruit_002",
        "anime": "Village Adventurers",
        "category": "Village Adventurers",
        "name": "Borin Stonepan",
        "emoji": "🥘",
        "level": 1,
        "req": 1,
        "race": "Halfling",
        "job": "Cook",
        "role": "Cook",
        "cost": 180,
        "desc": "A traveling cook whose battle meals keep allies standing longer than they should.",
        "bonus": {
            "hp": 20,
            "rs": 3,
            "sp": 2
        },
        "assist": {
            "kind": "heal",
            "healPct": 0.2,
            "name": "Campfire Stew",
            "cleanse": false
        }
    },
    {
        "id": "recruit_003",
        "anime": "Village Adventurers",
        "category": "Village Adventurers",
        "name": "Tessa Lockwhistle",
        "emoji": "🗝️",
        "level": 2,
        "req": 2,
        "race": "Gnome",
        "job": "Thief",
        "role": "Thief",
        "cost": 220,
        "desc": "A nimble dungeon picklock who knows every door has a weakness and every monster has pockets.",
        "bonus": {
            "ag": 5,
            "sp": 3
        },
        "assist": {
            "kind": "status",
            "pow": 40,
            "name": "Pocket Sand Trap",
            "status": "confusion",
            "statusChance": 0.55
        }
    },
    {
        "id": "recruit_004",
        "anime": "Village Adventurers",
        "category": "Village Adventurers",
        "name": "Rurik Ironmug",
        "emoji": "🛡️",
        "level": 3,
        "req": 3,
        "race": "Dwarf",
        "job": "Shield Bearer",
        "role": "Shield Bearer",
        "cost": 280,
        "desc": "A stubborn dwarf defender who turns bad positioning into a shield wall.",
        "bonus": {
            "hp": 30,
            "pd": 6
        },
        "assist": {
            "kind": "buff",
            "name": "Hold the Line",
            "buff": "guard"
        }
    },
    {
        "id": "recruit_005",
        "anime": "Village Adventurers",
        "category": "Village Adventurers",
        "name": "Elowen Greenwake",
        "emoji": "🌿",
        "level": 4,
        "req": 4,
        "race": "Elf",
        "job": "Ranger",
        "role": "Ranger",
        "cost": 340,
        "desc": "A forest scout who pins enemies with thorn-feathered arrows.",
        "bonus": {
            "ag": 4,
            "ma": 3,
            "rs": 3
        },
        "assist": {
            "kind": "damage",
            "pow": 62,
            "name": "Briarshot Volley",
            "status": "bleed",
            "statusChance": 0.35
        }
    },
    {
        "id": "recruit_006",
        "anime": "Royal Vanguard",
        "category": "Royal Vanguard",
        "name": "Sir Aldren Voss",
        "emoji": "⚔️",
        "level": 5,
        "req": 5,
        "race": "Human",
        "job": "Knight",
        "role": "Knight",
        "cost": 420,
        "desc": "A disciplined royal knight trained to take the first blow and answer with steel.",
        "bonus": {
            "hp": 35,
            "pd": 8,
            "rs": 2
        },
        "assist": {
            "kind": "buff",
            "name": "Vanguard Oath",
            "buff": "guard"
        }
    },
    {
        "id": "recruit_007",
        "anime": "Royal Vanguard",
        "category": "Royal Vanguard",
        "name": "Lady Maribel Crest",
        "emoji": "🦁",
        "level": 7,
        "req": 7,
        "race": "Lionfolk",
        "job": "Royal Guard",
        "role": "Royal Guard",
        "cost": 520,
        "desc": "A proud palace guard whose courage makes weaker enemies hesitate.",
        "bonus": {
            "pa": 6,
            "pd": 6,
            "sp": 3
        },
        "assist": {
            "kind": "damage",
            "pow": 78,
            "name": "Lion Banner Charge",
            "status": "fear",
            "statusChance": 0.35
        }
    },
    {
        "id": "recruit_008",
        "anime": "Royal Vanguard",
        "category": "Royal Vanguard",
        "name": "Cedric Dawnlance",
        "emoji": "🔱",
        "level": 9,
        "req": 9,
        "race": "Human",
        "job": "Lancer",
        "role": "Lancer",
        "cost": 640,
        "desc": "A cavalry-born spear fighter with perfect reach and brutal timing.",
        "bonus": {
            "pa": 8,
            "ag": 4,
            "hp": 20
        },
        "assist": {
            "kind": "damage",
            "pow": 88,
            "name": "Sunpoint Impale",
            "status": "bleed",
            "statusChance": 0.4
        }
    },
    {
        "id": "recruit_009",
        "anime": "Royal Vanguard",
        "category": "Royal Vanguard",
        "name": "Helga Ironcrown",
        "emoji": "🔨",
        "level": 12,
        "req": 12,
        "race": "Dwarf",
        "job": "Hammer Knight",
        "role": "Hammer Knight",
        "cost": 820,
        "desc": "A royal siege knight who treats enemy armor like cracked pottery.",
        "bonus": {
            "pa": 9,
            "pd": 8
        },
        "assist": {
            "kind": "status",
            "pow": 72,
            "name": "Armorbreaker Maul",
            "status": "weaken",
            "statusChance": 0.6
        }
    },
    {
        "id": "recruit_010",
        "anime": "Royal Vanguard",
        "category": "Royal Vanguard",
        "name": "Kael Argentwing",
        "emoji": "🪽",
        "level": 15,
        "req": 15,
        "race": "Angel",
        "job": "Paladin",
        "role": "Paladin",
        "cost": 1080,
        "desc": "A young paladin with angelic blood who guards allies with radiant vows.",
        "bonus": {
            "hp": 30,
            "pd": 5,
            "md": 7,
            "rs": 6
        },
        "assist": {
            "kind": "heal",
            "healPct": 0.28,
            "cleanse": true,
            "name": "Sanctuary Wing"
        }
    },
    {
        "id": "recruit_011",
        "anime": "Arcane Collegium",
        "category": "Arcane Collegium",
        "name": "Selene Quillfire",
        "emoji": "📖",
        "level": 3,
        "req": 3,
        "race": "Human",
        "job": "Wizard",
        "role": "Wizard",
        "cost": 300,
        "desc": "A spellbook scholar who turns equations into controlled explosions.",
        "bonus": {
            "mp": 28,
            "ma": 6
        },
        "assist": {
            "kind": "damage",
            "pow": 68,
            "name": "Formula Flare",
            "status": "burn",
            "statusChance": 0.38
        }
    },
    {
        "id": "recruit_012",
        "anime": "Arcane Collegium",
        "category": "Arcane Collegium",
        "name": "Nym Starbottle",
        "emoji": "✨",
        "level": 5,
        "req": 5,
        "race": "Fairy",
        "job": "Illusionist",
        "role": "Illusionist",
        "cost": 430,
        "desc": "A tiny glamour mage who makes enemies attack shadows and apologize to furniture.",
        "bonus": {
            "mp": 22,
            "ag": 5,
            "sp": 5
        },
        "assist": {
            "kind": "status",
            "pow": 36,
            "name": "Glamour Maze",
            "status": "confusion",
            "statusChance": 0.7
        }
    },
    {
        "id": "recruit_013",
        "anime": "Arcane Collegium",
        "category": "Arcane Collegium",
        "name": "Orven Deepglyph",
        "emoji": "🪨",
        "level": 8,
        "req": 8,
        "race": "Gnome",
        "job": "Runesmith",
        "role": "Runesmith",
        "cost": 580,
        "desc": "A glyph carver whose runes hum louder when danger gets close.",
        "bonus": {
            "ma": 5,
            "pd": 4,
            "rs": 5
        },
        "assist": {
            "kind": "buff",
            "name": "Living Rune Ward",
            "buff": "focus"
        }
    },
    {
        "id": "recruit_014",
        "anime": "Arcane Collegium",
        "category": "Arcane Collegium",
        "name": "Thalia Frostmere",
        "emoji": "❄️",
        "level": 11,
        "req": 11,
        "race": "Yuki-Onna",
        "job": "Ice Mage",
        "role": "Ice Mage",
        "cost": 760,
        "desc": "A snow spirit mage who seals movement under layers of perfect frost.",
        "bonus": {
            "mp": 25,
            "ma": 8,
            "md": 5
        },
        "assist": {
            "kind": "damage",
            "pow": 82,
            "name": "Whiteout Coffin",
            "status": "freeze",
            "statusChance": 0.42
        }
    },
    {
        "id": "recruit_015",
        "anime": "Arcane Collegium",
        "category": "Arcane Collegium",
        "name": "Vael Astranox",
        "emoji": "🌀",
        "level": 16,
        "req": 16,
        "race": "Elf",
        "job": "Spatial Mage",
        "role": "Spatial Mage",
        "cost": 1120,
        "desc": "A portal theorist who attacks from angles the battlefield forgot existed.",
        "bonus": {
            "mp": 34,
            "ma": 9,
            "sp": 7
        },
        "assist": {
            "kind": "damage",
            "pow": 95,
            "name": "Folded-Space Cut",
            "status": "marked",
            "statusChance": 0.55
        }
    },
    {
        "id": "recruit_016",
        "anime": "Holy Order",
        "category": "Holy Order",
        "name": "Sister Aveline",
        "emoji": "🕯️",
        "level": 2,
        "req": 2,
        "race": "Human",
        "job": "Cleric",
        "role": "Cleric",
        "cost": 250,
        "desc": "A battlefield cleric who keeps wounded adventurers from becoming cautionary tales.",
        "bonus": {
            "mp": 20,
            "md": 5,
            "rs": 4
        },
        "assist": {
            "kind": "heal",
            "healPct": 0.24,
            "cleanse": true,
            "name": "Gentle Benediction"
        }
    },
    {
        "id": "recruit_017",
        "anime": "Holy Order",
        "category": "Holy Order",
        "name": "Brother Caldus",
        "emoji": "📿",
        "level": 6,
        "req": 6,
        "race": "Human",
        "job": "Exorcist",
        "role": "Exorcist",
        "cost": 500,
        "desc": "A stern exorcist whose prayer bells shake curses loose.",
        "bonus": {
            "ma": 5,
            "rs": 6,
            "sp": 3
        },
        "assist": {
            "kind": "status",
            "pow": 58,
            "name": "Bell of Banishment",
            "status": "fear",
            "statusChance": 0.5
        }
    },
    {
        "id": "recruit_018",
        "anime": "Holy Order",
        "category": "Holy Order",
        "name": "Liora Sunveil",
        "emoji": "☀️",
        "level": 9,
        "req": 9,
        "race": "Elf",
        "job": "Light Mage",
        "role": "Light Mage",
        "cost": 680,
        "desc": "A radiant mage who burns away darkness with disciplined light.",
        "bonus": {
            "mp": 24,
            "ma": 7,
            "md": 5
        },
        "assist": {
            "kind": "damage",
            "pow": 80,
            "name": "Sunlance Ray",
            "status": "burn",
            "statusChance": 0.32
        }
    },
    {
        "id": "recruit_019",
        "anime": "Holy Order",
        "category": "Holy Order",
        "name": "Ena Mercyvale",
        "emoji": "💠",
        "level": 13,
        "req": 13,
        "race": "Spirit",
        "job": "Saint Candidate",
        "role": "Saint Candidate",
        "cost": 900,
        "desc": "A gentle spirit vessel whose healing circle refuses despair.",
        "bonus": {
            "hp": 20,
            "mp": 30,
            "md": 7,
            "rs": 7
        },
        "assist": {
            "kind": "heal",
            "healPct": 0.32,
            "cleanse": true,
            "name": "Mercy Field"
        }
    },
    {
        "id": "recruit_020",
        "anime": "Holy Order",
        "category": "Holy Order",
        "name": "Seraphiel Ashguard",
        "emoji": "🔥",
        "level": 18,
        "req": 18,
        "race": "Angel",
        "job": "Templar",
        "role": "Templar",
        "cost": 1280,
        "desc": "A temple executioner who brands oathbreakers with holy fire.",
        "bonus": {
            "pa": 6,
            "pd": 7,
            "ma": 6,
            "rs": 8
        },
        "assist": {
            "kind": "damage",
            "pow": 105,
            "name": "Judgment Brand",
            "status": "doom",
            "statusChance": 0.18
        }
    },
    {
        "id": "recruit_021",
        "anime": "Shadow Guild",
        "category": "Shadow Guild",
        "name": "Nyx Understep",
        "emoji": "🗡️",
        "level": 4,
        "req": 4,
        "race": "Dark Elf",
        "job": "Rogue",
        "role": "Rogue",
        "cost": 360,
        "desc": "A dark elf alley-runner who strikes while enemies check the wrong shadow.",
        "bonus": {
            "ag": 7,
            "sp": 4
        },
        "assist": {
            "kind": "damage",
            "pow": 70,
            "name": "Back-Alley Crit",
            "status": "bleed",
            "statusChance": 0.5
        }
    },
    {
        "id": "recruit_022",
        "anime": "Shadow Guild",
        "category": "Shadow Guild",
        "name": "Pip Blackbutton",
        "emoji": "🎭",
        "level": 6,
        "req": 6,
        "race": "Halfling",
        "job": "Trickster",
        "role": "Trickster",
        "cost": 460,
        "desc": "A smiling trickster whose best weapon is everyone underestimating him.",
        "bonus": {
            "ag": 5,
            "sp": 7
        },
        "assist": {
            "kind": "status",
            "pow": 34,
            "name": "False Surrender",
            "status": "confusion",
            "statusChance": 0.75
        }
    },
    {
        "id": "recruit_023",
        "anime": "Shadow Guild",
        "category": "Shadow Guild",
        "name": "Vesper Nocturne",
        "emoji": "🌑",
        "level": 10,
        "req": 10,
        "race": "Vampire",
        "job": "Assassin",
        "role": "Assassin",
        "cost": 720,
        "desc": "A vampire blade-for-hire who prefers contracts signed in moonlight.",
        "bonus": {
            "pa": 8,
            "ag": 8,
            "rs": 3
        },
        "assist": {
            "kind": "damage",
            "pow": 92,
            "name": "Crimson Needle",
            "status": "poison",
            "statusChance": 0.45
        }
    },
    {
        "id": "recruit_024",
        "anime": "Shadow Guild",
        "category": "Shadow Guild",
        "name": "Kara Wyrmstring",
        "emoji": "🧵",
        "level": 14,
        "req": 14,
        "race": "Arachne",
        "job": "Trap Master",
        "role": "Trap Master",
        "cost": 940,
        "desc": "An arachne ambusher who turns battlefields into spiderweb diagrams.",
        "bonus": {
            "sp": 8,
            "pd": 4,
            "ag": 4
        },
        "assist": {
            "kind": "status",
            "pow": 60,
            "name": "Silk Snare Ambush",
            "status": "paralysis",
            "statusChance": 0.65
        }
    },
    {
        "id": "recruit_025",
        "anime": "Shadow Guild",
        "category": "Shadow Guild",
        "name": "Shade of Merrin",
        "emoji": "👻",
        "level": 19,
        "req": 19,
        "race": "Wraith",
        "job": "Spy",
        "role": "Spy",
        "cost": 1360,
        "desc": "A ghostly intelligence broker who gathers secrets from locked rooms and sleeping kings.",
        "bonus": {
            "ag": 7,
            "sp": 10,
            "rs": 6
        },
        "assist": {
            "kind": "status",
            "pow": 66,
            "name": "Possession Whisper",
            "status": "fear",
            "statusChance": 0.65
        }
    },
    {
        "id": "recruit_026",
        "anime": "Wild Hunt",
        "category": "Wild Hunt",
        "name": "Taro Quickpaw",
        "emoji": "🐰",
        "level": 2,
        "req": 2,
        "race": "Rabbitfolk",
        "job": "Scout",
        "role": "Scout",
        "cost": 230,
        "desc": "A rabbitfolk scout who reads footprints like written letters.",
        "bonus": {
            "ag": 7,
            "sp": 2
        },
        "assist": {
            "kind": "buff",
            "name": "Trailrunner Rhythm",
            "buff": "haste"
        }
    },
    {
        "id": "recruit_027",
        "anime": "Wild Hunt",
        "category": "Wild Hunt",
        "name": "Ragna Bearhide",
        "emoji": "🐻",
        "level": 5,
        "req": 5,
        "race": "Bearfolk",
        "job": "Berserker",
        "role": "Berserker",
        "cost": 440,
        "desc": "A bearfolk raider whose roar arrives half a second before the axe.",
        "bonus": {
            "hp": 42,
            "pa": 7
        },
        "assist": {
            "kind": "damage",
            "pow": 84,
            "name": "Mauling Roar",
            "status": "fear",
            "statusChance": 0.38
        }
    },
    {
        "id": "recruit_028",
        "anime": "Wild Hunt",
        "category": "Wild Hunt",
        "name": "Saffron Nine-Tails",
        "emoji": "🦊",
        "level": 8,
        "req": 8,
        "race": "Kitsune",
        "job": "Enchanter",
        "role": "Enchanter",
        "cost": 620,
        "desc": "A kitsune wanderer who wraps enemy senses in blue foxfire.",
        "bonus": {
            "mp": 20,
            "ma": 6,
            "sp": 7
        },
        "assist": {
            "kind": "status",
            "pow": 42,
            "name": "Foxfire Charm",
            "status": "confusion",
            "statusChance": 0.68
        }
    },
    {
        "id": "recruit_029",
        "anime": "Wild Hunt",
        "category": "Wild Hunt",
        "name": "Aquila Highwind",
        "emoji": "🦅",
        "level": 12,
        "req": 12,
        "race": "Birdfolk",
        "job": "Wind Mage",
        "role": "Wind Mage",
        "cost": 820,
        "desc": "A harpy windcaller who fights from above and leaves red lines behind.",
        "bonus": {
            "ag": 8,
            "ma": 6,
            "sp": 4
        },
        "assist": {
            "kind": "damage",
            "pow": 86,
            "name": "Razor-Gale Dive",
            "status": "bleed",
            "statusChance": 0.4
        }
    },
    {
        "id": "recruit_030",
        "anime": "Wild Hunt",
        "category": "Wild Hunt",
        "name": "Neris Pearlvoice",
        "emoji": "🧜",
        "level": 15,
        "req": 15,
        "race": "Merfolk",
        "job": "Bard",
        "role": "Bard",
        "cost": 1050,
        "desc": "A merfolk singer whose songs steady hearts and restore spell rhythm.",
        "bonus": {
            "mp": 25,
            "md": 5,
            "sp": 9
        },
        "assist": {
            "kind": "heal",
            "healPct": 0.22,
            "mpRestorePct": 0.12,
            "name": "Tide-Lullaby"
        }
    },
    {
        "id": "recruit_031",
        "anime": "Monster-Blooded",
        "category": "Monster-Blooded",
        "name": "Grubnail",
        "emoji": "👺",
        "level": 3,
        "req": 3,
        "race": "Goblin",
        "job": "Goblin Champion",
        "role": "Goblin Champion",
        "cost": 260,
        "desc": "A goblin champion with three backup knives and no concept of fair fighting.",
        "bonus": {
            "pa": 5,
            "ag": 4,
            "sp": 2
        },
        "assist": {
            "kind": "damage",
            "pow": 64,
            "name": "Dirty Dagger Rush",
            "status": "poison",
            "statusChance": 0.35
        }
    },
    {
        "id": "recruit_032",
        "anime": "Monster-Blooded",
        "category": "Monster-Blooded",
        "name": "Mog Rattlehorn",
        "emoji": "🐂",
        "level": 7,
        "req": 7,
        "race": "Minotaur",
        "job": "Gladiator",
        "role": "Gladiator",
        "cost": 560,
        "desc": "A minotaur pit fighter who still hears phantom crowds before every charge.",
        "bonus": {
            "hp": 38,
            "pa": 9,
            "pd": 4
        },
        "assist": {
            "kind": "damage",
            "pow": 90,
            "name": "Arena Gore",
            "status": "stun",
            "statusChance": 0.45
        }
    },
    {
        "id": "recruit_033",
        "anime": "Monster-Blooded",
        "category": "Monster-Blooded",
        "name": "Oka Redmask",
        "emoji": "👹",
        "level": 11,
        "req": 11,
        "race": "Oni",
        "job": "Oni Warrior",
        "role": "Oni Warrior",
        "cost": 780,
        "desc": "An oni club fighter whose blood heats when allies are threatened.",
        "bonus": {
            "hp": 35,
            "pa": 10,
            "rs": 4
        },
        "assist": {
            "kind": "buff",
            "name": "Red Oni Fury",
            "buff": "bravery"
        }
    },
    {
        "id": "recruit_034",
        "anime": "Monster-Blooded",
        "category": "Monster-Blooded",
        "name": "Luma Gelheart",
        "emoji": "🫧",
        "level": 13,
        "req": 13,
        "race": "Slime",
        "job": "Healer",
        "role": "Healer",
        "cost": 880,
        "desc": "A kind greater slime who patches wounds by dividing pieces of herself.",
        "bonus": {
            "hp": 45,
            "rs": 6,
            "md": 4
        },
        "assist": {
            "kind": "heal",
            "healPct": 0.3,
            "cleanse": true,
            "name": "Restorative Split"
        }
    },
    {
        "id": "recruit_035",
        "anime": "Monster-Blooded",
        "category": "Monster-Blooded",
        "name": "Varkos Ashscale",
        "emoji": "🐉",
        "level": 20,
        "req": 20,
        "race": "Dragonkin",
        "job": "Dragon Knight",
        "role": "Dragon Knight",
        "cost": 1500,
        "desc": "A dragonkin knight whose armor is older than most villages.",
        "bonus": {
            "hp": 40,
            "pa": 8,
            "ma": 7,
            "rs": 8
        },
        "assist": {
            "kind": "damage",
            "pow": 115,
            "name": "Ashscale Breath",
            "status": "burn",
            "statusChance": 0.55
        }
    },
    {
        "id": "recruit_036",
        "anime": "Deep Dungeon Company",
        "category": "Deep Dungeon Company",
        "name": "Marn Slate-Eye",
        "emoji": "🪓",
        "level": 6,
        "req": 6,
        "race": "Dwarf",
        "job": "Dungeon Explorer",
        "role": "Dungeon Explorer",
        "cost": 480,
        "desc": "A veteran delver who knows when stone floors are lying.",
        "bonus": {
            "pd": 6,
            "sp": 5,
            "hp": 24
        },
        "assist": {
            "kind": "buff",
            "name": "Dungeon Sense",
            "buff": "focus"
        }
    },
    {
        "id": "recruit_037",
        "anime": "Deep Dungeon Company",
        "category": "Deep Dungeon Company",
        "name": "Ivy Rootbound",
        "emoji": "🌳",
        "level": 10,
        "req": 10,
        "race": "Treant",
        "job": "Guardian",
        "role": "Guardian",
        "cost": 760,
        "desc": "A young treant guardian carrying an entire forest's patience.",
        "bonus": {
            "hp": 55,
            "pd": 8,
            "rs": 5
        },
        "assist": {
            "kind": "buff",
            "name": "Rootwall Shelter",
            "buff": "guard"
        }
    },
    {
        "id": "recruit_038",
        "anime": "Deep Dungeon Company",
        "category": "Deep Dungeon Company",
        "name": "Crix Gearwake",
        "emoji": "⚙️",
        "level": 14,
        "req": 14,
        "race": "Automata",
        "job": "Artificer",
        "role": "Artificer",
        "cost": 980,
        "desc": "A living doll engineer who calculates angles with unsettling cheer.",
        "bonus": {
            "pd": 7,
            "ma": 6,
            "sp": 6
        },
        "assist": {
            "kind": "damage",
            "pow": 92,
            "name": "Clockwork Barrage",
            "status": "marked",
            "statusChance": 0.55
        }
    },
    {
        "id": "recruit_039",
        "anime": "Deep Dungeon Company",
        "category": "Deep Dungeon Company",
        "name": "Mortis Candlebone",
        "emoji": "💀",
        "level": 18,
        "req": 18,
        "race": "Skeleton",
        "job": "Necromancer",
        "role": "Necromancer",
        "cost": 1320,
        "desc": "A skeletal mage whose ribcage hums with graveyard harmony.",
        "bonus": {
            "mp": 32,
            "ma": 9,
            "rs": 7
        },
        "assist": {
            "kind": "status",
            "pow": 72,
            "name": "Bone Choir Dirge",
            "status": "doom",
            "statusChance": 0.16
        }
    },
    {
        "id": "recruit_040",
        "anime": "Deep Dungeon Company",
        "category": "Deep Dungeon Company",
        "name": "Edrin Philos",
        "emoji": "⚗️",
        "level": 22,
        "req": 22,
        "race": "Homunculus",
        "job": "Alchemist",
        "role": "Alchemist",
        "cost": 1680,
        "desc": "An artificial alchemist searching dungeons for the formula of a real soul.",
        "bonus": {
            "mp": 28,
            "ma": 6,
            "md": 7,
            "sp": 8
        },
        "assist": {
            "kind": "heal",
            "healPct": 0.26,
            "cleanse": true,
            "name": "Perfected Panacea"
        }
    },
    {
        "id": "recruit_041",
        "anime": "Mythic Companions",
        "category": "Mythic Companions",
        "name": "Yara Mooncoil",
        "emoji": "🐍",
        "level": 16,
        "req": 16,
        "race": "Naga",
        "job": "Oracle",
        "role": "Oracle",
        "cost": 1180,
        "desc": "A naga seer who points out the exact future an enemy should fear.",
        "bonus": {
            "mp": 30,
            "ma": 7,
            "sp": 9
        },
        "assist": {
            "kind": "status",
            "pow": 58,
            "name": "Mooncoil Prophecy",
            "status": "marked",
            "statusChance": 0.75
        }
    },
    {
        "id": "recruit_042",
        "anime": "Mythic Companions",
        "category": "Mythic Companions",
        "name": "Rohas Sunfeather",
        "emoji": "🪶",
        "level": 20,
        "req": 20,
        "race": "Garuda",
        "job": "Monk",
        "role": "Monk",
        "cost": 1500,
        "desc": "A garuda ascetic whose talon forms are practiced at sunrise.",
        "bonus": {
            "ag": 10,
            "pa": 7,
            "rs": 5
        },
        "assist": {
            "kind": "damage",
            "pow": 112,
            "name": "Solar Talon Kata",
            "status": "stun",
            "statusChance": 0.38
        }
    },
    {
        "id": "recruit_043",
        "anime": "Mythic Companions",
        "category": "Mythic Companions",
        "name": "Kirin Bellstep",
        "emoji": "🦄",
        "level": 24,
        "req": 24,
        "race": "Qilin",
        "job": "Diviner",
        "role": "Diviner",
        "cost": 1900,
        "desc": "A qilin omen-walker who blesses allies with impossible luck.",
        "bonus": {
            "mp": 35,
            "md": 8,
            "rs": 8,
            "sp": 10
        },
        "assist": {
            "kind": "heal",
            "healPct": 0.24,
            "mpRestorePct": 0.18,
            "name": "Auspicious Bell"
        }
    },
    {
        "id": "recruit_044",
        "anime": "Mythic Companions",
        "category": "Mythic Companions",
        "name": "Astra Ninefold",
        "emoji": "🌠",
        "level": 28,
        "req": 28,
        "race": "Celestial",
        "job": "Sage",
        "role": "Sage",
        "cost": 2400,
        "desc": "A celestial scholar whose spells align with patient stars.",
        "bonus": {
            "mp": 44,
            "ma": 10,
            "md": 9,
            "sp": 10
        },
        "assist": {
            "kind": "buff",
            "name": "Star-Sage Alignment",
            "buff": "focus"
        }
    },
    {
        "id": "recruit_045",
        "anime": "Mythic Companions",
        "category": "Mythic Companions",
        "name": "Daeva Ironhalo",
        "emoji": "☄️",
        "level": 32,
        "req": 32,
        "race": "Asura",
        "job": "Warlord",
        "role": "Warlord",
        "cost": 3000,
        "desc": "An asura commander who considers peace a tactic, not a preference.",
        "bonus": {
            "hp": 50,
            "pa": 12,
            "pd": 7,
            "rs": 6
        },
        "assist": {
            "kind": "damage",
            "pow": 135,
            "name": "Six-Armed War Cry",
            "status": "fear",
            "statusChance": 0.6
        }
    }
];
