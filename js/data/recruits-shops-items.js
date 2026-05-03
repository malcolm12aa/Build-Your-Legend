// ── Recruitable fantasy companions — 9 recruitment boards, 5 allies each ─────────
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

const WEAPONS = [
    // ── Tier 1 (budget) ──────────────────────────────────────────
    {
        id: 'bokuto', name: "Gintoki's Bokuto", anime: 'Gintama', cost: 80, atk: 12,
        statusId: 'confusion', statusChance: 0.30,
        desc: "A beat-up wooden sword that somehow defeats everything. Causes Confusion (30%)."
    },
    // ── Tier 2 ───────────────────────────────────────────────────
    {
        id: 'zangetsu', name: 'Zangetsu', anime: 'Bleach', cost: 150, atk: 22,
        statusId: 'bleed', statusChance: 0.25,
        desc: "Ichigo's soul-cutting zanpakuto — cleaves deep. Inflicts Bleed (25%)."
    },
    {
        id: 'scissor_blade', name: 'Scissor Blade', anime: 'Kill la Kill', cost: 200, atk: 26,
        statusId: 'bleed', statusChance: 0.30,
        desc: "Half of the legendary Rending Scissors — cuts through life fibers. Inflicts Bleed (30%)."
    },
    {
        id: 'wado_ichimonji', name: 'Wado Ichimonji', anime: 'One Piece', cost: 240, atk: 32,
        statusId: 'weaken', statusChance: 0.20,
        desc: "Roronoa Zoro's pure white katana — precision strikes sap enemy strength. Inflicts Weaken (20%)."
    },
    {
        id: 'nichirin_thunder', name: 'Nichirin Blade: Thunder', anime: 'Demon Slayer', cost: 280, atk: 38,
        statusId: 'paralysis', statusChance: 0.30,
        desc: "Zenitsu's yellow blade — lightning channels through the ore. Inflicts Paralysis (30%)."
    },
    {
        id: 'tessaiga', name: 'Tessaiga', anime: 'InuYasha', cost: 220, atk: 30,
        statusId: 'weaken', statusChance: 0.25,
        desc: "Fang-forged blade that slays 100 demons in a swing. Inflicts Weaken (25%)."
    },
    // ── Tier 3 ───────────────────────────────────────────────────
    {
        id: 'thunder_spear', name: 'Thunder Spear', anime: 'Attack on Titan', cost: 300, atk: 40,
        statusId: 'stun', statusChance: 0.30,
        desc: "Explosive lance that detonates on impact. Inflicts Stun (30%)."
    },
    {
        id: 'chainsaw_arms', name: 'Chainsaw Devil Arms', anime: 'Chainsaw Man', cost: 360, atk: 50,
        statusId: 'bleed', statusChance: 0.35,
        desc: "Denji's devil contract — chainsaws rip through flesh. Inflicts Bleed (35%)."
    },
    {
        id: 'dragon_slayer', name: 'Dragon Slayer', anime: 'Berserk', cost: 380, atk: 54,
        statusId: 'stun', statusChance: 0.20,
        desc: "A slab of iron so massive it cannot rightly be called a sword. Inflicts Stun (20%)."
    },
    // ── Tier 4 (endgame) ─────────────────────────────────────────
    {
        id: 'licht_sword', name: "Licht's Sword of Despair", anime: 'Black Clover', cost: 460, atk: 63,
        statusId: 'fear', statusChance: 0.25,
        desc: "The Elf King's blade forged from crystallised mana — inspires terror. Inflicts Fear (25%)."
    },
    {
        id: 'excalibur', name: 'Excalibur', anime: 'Fate/Stay Night', cost: 560, atk: 70,
        statusId: 'doom', statusChance: 0.15,
        desc: "The sword of promised victory — holy judgment. Inflicts Doom (15%)."
    },
    // ── Naruto ───────────────────────────────────────────────────
    { id:'kubikiribocho', name:"Kubikiribōchō", anime:'Naruto', cost:200, atk:28, statusId:'bleed', statusChance:0.30,
      desc:"Zabuza's self-restoring executioner blade. Inflicts Bleed (30%)." },
    { id:'hiramekarei', name:"Hiramekarei", anime:'Naruto', cost:260, atk:36, statusId:'paralysis', statusChance:0.25,
      desc:"Chōjuro's twin-blade sword of the seven swordsmen — channels lightning. Inflicts Paralysis (25%)." },
    { id:'asuma_blades', name:"Asuma's Chakra Blades", anime:'Naruto', cost:180, atk:24, statusId:'bleed', statusChance:0.25,
      desc:"Chakra-flow trench knives — cut through chakra barriers. Inflicts Bleed (25%)." },
    { id:'minato_kunai', name:"Flying Thunder God Kunai", anime:'Naruto', cost:320, atk:44, statusId:'stun', statusChance:0.25,
      desc:"Minato's tri-pronged seal kunai — teleports to its mark. Inflicts Stun (25%)." },
    { id:'samehada', name:"Samehada", anime:'Naruto', cost:400, atk:55, statusId:'weaken', statusChance:0.30,
      desc:"The living shark sword that devours chakra. Inflicts Weaken (30%)." },
    // ── Bleach ───────────────────────────────────────────────────
    { id:'shinso', name:"Shinso — Extend", anime:'Bleach', cost:190, atk:26, statusId:'stun', statusChance:0.25,
      desc:"Gin Ichimaru's extending blade — too fast to dodge. Inflicts Stun (25%)." },
    { id:'sode_shirayuki', name:"Sode no Shirayuki", anime:'Bleach', cost:270, atk:38, statusId:'freeze', statusChance:0.30,
      desc:"The most beautiful zanpakuto — absolute zero ice dance. Inflicts Freeze (30%)." },
    { id:'suzumushi', name:"Suzumushi Tsuishiki", anime:'Bleach', cost:300, atk:44, statusId:'paralysis', statusChance:0.30,
      desc:"Kaname Tōsen's cricket-bell resonance attack. Inflicts Paralysis (30%)." },
    { id:'ryujin_jakka', name:"Ryūjin Jakka", anime:'Bleach', cost:500, atk:72, statusId:'burn', statusChance:0.40,
      desc:"The most powerful fire-type zanpakuto in Soul Society. Inflicts Burn (40%)." },
    // ── One Piece ────────────────────────────────────────────────
    { id:'sandai_kitetsu', name:"Sandai Kitetsu", anime:'One Piece', cost:200, atk:30, statusId:'bleed', statusChance:0.30,
      desc:"A cursed blade that hungers for blood. Inflicts Bleed (30%)." },
    { id:'yoru', name:"Yoru — Black Sword", anime:'One Piece', cost:480, atk:68, statusId:'fear', statusChance:0.25,
      desc:"Dracule Mihawk's supreme-grade blade. Inflicts Fear (25%)." },
    { id:'gryphon_blade', name:"Gryphon", anime:'One Piece', cost:380, atk:52, statusId:'stun', statusChance:0.25,
      desc:"Shanks' supreme-grade saber — channeling Conqueror's Haki. Inflicts Stun (25%)." },
    { id:'nidai_kitetsu', name:"Nidai Kitetsu", anime:'One Piece', cost:310, atk:46, statusId:'bleed', statusChance:0.30,
      desc:"The cursed second-class blade — superior to its successor. Inflicts Bleed (30%)." },
    // ── Demon Slayer ─────────────────────────────────────────────
    { id:'tanjiro_black', name:"Tanjiro's Black Nichirin", anime:'Demon Slayer', cost:160, atk:22, statusId:'burn', statusChance:0.20,
      desc:"The rare black Nichirin of the chosen Sun-Breathing user. Inflicts Burn (20%)." },
    { id:'rengoku_sword', name:"Flame Nichirin Blade", anime:'Demon Slayer', cost:280, atk:40, statusId:'burn', statusChance:0.35,
      desc:"Rengoku's orange-flame Nichirin. Inflicts Burn (35%)." },
    { id:'gyomei_flail', name:"Stone Breathing Flail", anime:'Demon Slayer', cost:350, atk:50, statusId:'stun', statusChance:0.30,
      desc:"Gyomei's spiked flail — the strongest Hashira's weapon. Inflicts Stun (30%)." },
    { id:'mitsuri_whip', name:"Love Breathing Whipsword", anime:'Demon Slayer', cost:310, atk:46, statusId:'confusion', statusChance:0.25,
      desc:"Mitsuri's ultra-thin serpentine blade — impossible to track. Inflicts Confusion (25%)." },
    // ── Jujutsu Kaisen ───────────────────────────────────────────
    { id:'playful_cloud', name:"Playful Cloud", anime:'Jujutsu Kaisen', cost:350, atk:50, statusId:'stun', statusChance:0.30,
      desc:"Toji Fushiguro's special-grade cursed tool. Inflicts Stun (30%)." },
    { id:'split_soul_katana', name:"Split Soul Katana", anime:'Jujutsu Kaisen', cost:270, atk:38, statusId:'bleed', statusChance:0.30,
      desc:"A blade that can sever the soul itself. Inflicts Bleed (30%)." },
    { id:'inverted_spear', name:"Inverted Spear of Heaven", anime:'Jujutsu Kaisen', cost:420, atk:60, statusId:'weaken', statusChance:0.35,
      desc:"Nullifies all cursed techniques — absolute weapon. Inflicts Weaken (35%)." },
    { id:'black_rope', name:"Black Rope", anime:'Jujutsu Kaisen', cost:200, atk:28, statusId:'paralysis', statusChance:0.25,
      desc:"Cursed rope that binds both body and soul. Inflicts Paralysis (25%)." },
    { id:'death_painting', name:"Death Painting Womb Blade", anime:'Jujutsu Kaisen', cost:300, atk:44, statusId:'poison', statusChance:0.30,
      desc:"A cursed-womb blade etched with death. Inflicts Poison (30%)." },
    // ── My Hero Academia ─────────────────────────────────────────
    { id:'dark_shadow_claw', name:"Dark Shadow Claws", anime:'My Hero Academia', cost:240, atk:32, statusId:'fear', statusChance:0.25,
      desc:"Tokoyami's sentient shadow — razor claws in darkness. Inflicts Fear (25%)." },
    { id:'explosion_grenade', name:"Explosion Grenades", anime:'My Hero Academia', cost:280, atk:40, statusId:'stun', statusChance:0.30,
      desc:"Bakugo's nitroglycerin grenades. Inflicts Stun (30%)." },
    { id:'recipro_boots', name:"Recipro-Burst Boots", anime:'My Hero Academia', cost:220, atk:30, statusId:'stun', statusChance:0.20,
      desc:"Iida's leg engines in overdrive. Inflicts Stun (20%)." },
    { id:'hardening_arm', name:"Hardening Gauntlet", anime:'My Hero Academia', cost:260, atk:36, statusId:'weaken', statusChance:0.25,
      desc:"Kirishima's unbreakable fist shatters armor. Inflicts Weaken (25%)." },
    { id:'one_for_all_smash', name:"OFA Smash Gauntlet", anime:'My Hero Academia', cost:460, atk:64, statusId:'stun', statusChance:0.30,
      desc:"Izuku's 100% One For All Focus Shot. Inflicts Stun (30%)." },
    // ── Dragon Ball Z ────────────────────────────────────────────
    { id:'power_pole', name:"Power Pole", anime:'Dragon Ball Z', cost:140, atk:20, statusId:'stun', statusChance:0.20,
      desc:"Goku's magical extending staff. Inflicts Stun (20%)." },
    { id:'trunks_sword', name:"Future Trunks' Sword", anime:'Dragon Ball Z', cost:280, atk:40, statusId:'bleed', statusChance:0.25,
      desc:"The blade from the future — cuts through androids. Inflicts Bleed (25%)." },
    { id:'z_sword', name:"Z-Sword", anime:'Dragon Ball Z', cost:400, atk:58, statusId:'weaken', statusChance:0.30,
      desc:"The sacred sword of the Supreme Kais. Inflicts Weaken (30%)." },
    { id:'spirit_lance', name:"Spirit Lance", anime:'Dragon Ball Z', cost:320, atk:46, statusId:'stun', statusChance:0.25,
      desc:"Ki condensed into a javelin of pure energy. Inflicts Stun (25%)." },
    { id:'divine_staff', name:"Staff of Beerus", anime:'Dragon Ball Z', cost:500, atk:70, statusId:'doom', statusChance:0.15,
      desc:"The God of Destruction's scepter. Inflicts Doom (15%)." },
    // ── Hunter x Hunter ──────────────────────────────────────────
    { id:'kagura_yoyo', name:"Kagura Yo-Yos", anime:'Hunter x Hunter', cost:200, atk:28, statusId:'confusion', statusChance:0.30,
      desc:"Killua's Godspeed-lightning yo-yos. Inflicts Confusion (30%)." },
    { id:'shadow_dagger', name:"Shadow Dagger", anime:'Hunter x Hunter', cost:240, atk:34, statusId:'bleed', statusChance:0.25,
      desc:"A dagger that strikes from the shadow — unseen, unblocked. Inflicts Bleed (25%)." },
    { id:'bungee_arm', name:"Bungee Gum Strike", anime:'Hunter x Hunter', cost:320, atk:46, statusId:'stun', statusChance:0.30,
      desc:"Hisoka's rubbery Nen — stretches and snaps back. Inflicts Stun (30%)." },
    { id:'illumi_needle', name:"Illumi's Needle", anime:'Hunter x Hunter', cost:280, atk:40, statusId:'paralysis', statusChance:0.30,
      desc:"A needle that rewrites the victim's will. Inflicts Paralysis (30%)." },
    { id:'needle_sword', name:"Needle Sword", anime:'Hunter x Hunter', cost:360, atk:52, statusId:'confusion', statusChance:0.30,
      desc:"A blade as thin as a needle — precision strikes. Inflicts Confusion (30%)." },
];

// Weapon Shops — each has exactly 5 weapons grouped by anime
const WEAPON_SHOPS = [
    { name: 'Ninja Arsenal',          anime: 'Naruto',
      ids: ['kubikiribocho','hiramekarei','asuma_blades','minato_kunai','samehada'] },
    { name: 'Soul Cutter Armory',     anime: 'Bleach',
      ids: ['zangetsu','shinso','sode_shirayuki','suzumushi','ryujin_jakka'] },
    { name: 'Grand Line Forge',       anime: 'One Piece',
      ids: ['wado_ichimonji','sandai_kitetsu','yoru','gryphon_blade','nidai_kitetsu'] },
    { name: "Swordsmith's Village",   anime: 'Demon Slayer',
      ids: ['nichirin_thunder','tanjiro_black','rengoku_sword','gyomei_flail','mitsuri_whip'] },
    { name: 'Cursed Weapons Cache',   anime: 'Jujutsu Kaisen',
      ids: ['playful_cloud','split_soul_katana','inverted_spear','black_rope','death_painting'] },
    { name: 'Hero Support Armory',    anime: 'My Hero Academia',
      ids: ['dark_shadow_claw','explosion_grenade','recipro_boots','hardening_arm','one_for_all_smash'] },
    { name: 'Capsule Corp Armory',    anime: 'Dragon Ball Z',
      ids: ['power_pole','trunks_sword','z_sword','spirit_lance','divine_staff'] },
    { name: "Hunter's Cache",         anime: 'Hunter x Hunter',
      ids: ['kagura_yoyo','shadow_dagger','bungee_arm','illumi_needle','needle_sword'] },
    { name: 'Various Worlds Bazaar',  anime: 'Various Worlds',
      ids: ['bokuto','dragon_slayer','licht_sword','excalibur','chainsaw_arms'] },
];

// Anime Spells — sold at Skill Library
// status = applied to enemy, selfBuff = applied to player
const SPELLS = [
    // ── Tier 1 ───────────────────────────────────────────────────
    {
        id: 'rasengan', name: 'Rasengan', anime: 'Naruto', cost: 120, mp: 20, power: 42,
        desc: "A spiraling orb of compressed chakra that grinds through anything on contact"
    },
    {
        id: 'transmutation', name: 'Fullmetal Transmutation', anime: 'Fullmetal Alchemist: Brotherhood', cost: 130, mp: 22, power: 50,
        status: 'weaken',
        desc: "Edward Elric reshapes the ground into a stone lance. Inflicts Weaken."
    },
    {
        id: 'ninpo_flame', name: 'Ninpo: Phoenix Flame', anime: "Hell's Paradise", cost: 145, mp: 25, power: 52,
        status: 'burn',
        desc: "Gabimaru's shinobi burst of concentrated Tao energy. Inflicts Burn."
    },
    {
        id: 'shinra_kick', name: 'Shinra Kick: Rapid Fire', anime: 'Fire Force', cost: 160, mp: 28, power: 58,
        status: 'stun',
        desc: "Shinra launches ignited kicks at blinding speed. Inflicts Stun."
    },
    {
        id: 'ora_rush', name: 'ORA ORA Rush', anime: "JoJo's Bizarre Adventure", cost: 160, mp: 30, power: 58,
        status: 'stun',
        desc: "Star Platinum's rapid barrage of devastating punches. Inflicts Stun."
    },
    // ── Tier 2 ───────────────────────────────────────────────────
    {
        id: 'gear_second', name: 'Gear Second: Jet Pistol', anime: 'One Piece', cost: 175, mp: 32, power: 65,
        selfBuff: 'haste',
        desc: "Luffy pumps blood at superhuman speed and fires a rubber fist. Grants self Haste."
    },
    {
        id: 'flame_breath', name: 'Flame Breathing: 1st Form', anime: 'Demon Slayer', cost: 190, mp: 35, power: 64,
        status: 'burn',
        desc: "A blazing sword slash channeling Total Concentration Breathing. Inflicts Burn."
    },
    {
        id: 'nen_jajanken', name: 'Nen: Jajanken — Paper', anime: 'Hunter x Hunter', cost: 195, mp: 36, power: 70,
        status: 'bleed',
        desc: "Gon's point-blank Nen explosion — pure explosive life force. Inflicts Bleed."
    },
    {
        id: 'black_flash', name: 'Black Flash', anime: 'Jujutsu Kaisen', cost: 210, mp: 38, power: 76,
        status: 'paralysis',
        desc: "Yuji triggers a black distortion of cursed energy at 0.000001s. Inflicts Paralysis."
    },
    // ── Tier 3 ───────────────────────────────────────────────────
    {
        id: 'detroit_smash', name: 'Detroit Smash', anime: 'My Hero Academia', cost: 220, mp: 42, power: 84,
        status: 'stun',
        desc: "Izuku channels 100% One For All into a shockwave punch. Inflicts Stun."
    },
    {
        id: 'kamehameha', name: 'Kamehameha', anime: 'Dragon Ball Z', cost: 230, mp: 42, power: 82,
        status: 'burn',
        desc: "A concentrated ki beam powerful enough to rearrange geography. Inflicts Burn."
    },
    {
        id: 'conquerors_haki', name: "Conqueror's Haki", anime: 'One Piece', cost: 240, mp: 45, power: 88,
        status: 'stun', selfBuff: 'bravery', aoe: true,
        desc: "Overwhelming willpower wave — hits ALL enemies. Inflicts Stun, grants self Bravery."
    },
    // ── Tier 4 (endgame) ─────────────────────────────────────────
    {
        id: 'amaterasu', name: 'Amaterasu', anime: 'Naruto', cost: 330, mp: 55, power: 100,
        status: 'burn', aoe: true,
        desc: "Black Mangekyo flames spread across ALL enemies — they never stop burning. Inflicts Burn."
    },
    {
        id: 'hollow_purple', name: 'Hollow Purple', anime: 'Jujutsu Kaisen', cost: 400, mp: 68, power: 125,
        status: 'doom', aoe: true,
        desc: "Gojo's Red + Blue annihilation sphere — obliterates ALL enemies. Inflicts Doom."
    },
    // ── Naruto extras ─────────────────────────────────────────────
    { id:'naruto_sc', name:'Shadow Clone Barrage', anime:'Naruto', cost:155, mp:28, power:58, status:'stun', aoe:true,
      desc:"Mass clone formation overwhelms ALL enemies. Inflicts Stun." },
    { id:'naruto_8g', name:'Eight Gates: Release', anime:'Naruto', cost:200, mp:38, power:80, selfBuff:'haste',
      desc:"Guy opens the forbidden gates — body surges beyond all limits. Grants Haste." },
    { id:'naruto_rn', name:'Reaper Death Seal', anime:'Naruto', cost:360, mp:60, power:110, status:'doom', aoe:true,
      desc:"The Shinigami's seal swallows ALL enemies. Inflicts Doom." },
    // ── Bleach ────────────────────────────────────────────────────
    { id:'bleach_sk', name:'Shikai Release', anime:'Bleach', cost:110, mp:18, power:44, status:'bleed',
      desc:"Zanpakuto spirit unleashed — spiritual slash. Inflicts Bleed." },
    { id:'bleach_kd', name:'Kido: Hado #31 Shakkaho', anime:'Bleach', cost:155, mp:26, power:60, status:'burn',
      desc:"Blue orb of destruction energy. Inflicts Burn." },
    { id:'bleach_gt', name:'Getsuga Tensho', anime:'Bleach', cost:185, mp:32, power:72, status:'bleed',
      desc:"Moon-fang wave of condensed black spiritual energy. Inflicts Bleed." },
    { id:'bleach_bk', name:'Bankai: Final Form', anime:'Bleach', cost:240, mp:44, power:88, selfBuff:'bravery',
      desc:"True Bankai released — overwhelming spiritual pressure. Grants Bravery." },
    { id:'bleach_mg', name:'Mugetsu', anime:'Bleach', cost:390, mp:65, power:120, status:'doom', aoe:true,
      desc:"The final Getsuga cuts through ALL enemies — absolute obliteration. Inflicts Doom." },
    // ── One Piece extras ──────────────────────────────────────────
    { id:'op_gp', name:'Gum-Gum Pistol', anime:'One Piece', cost:100, mp:16, power:40, status:'stun',
      desc:"Luffy's stretching rubber fist — basic but devastating. Inflicts Stun." },
    { id:'op_hk', name:'Armament Haki Strike', anime:'One Piece', cost:175, mp:30, power:70,
      desc:"Haki-hardened fist bypasses all defences — pure force." },
    { id:'op_g3', name:'Gear Third: Cannon', anime:'One Piece', cost:240, mp:45, power:92, status:'stun', aoe:true,
      desc:"Giant rubber limb smashes ALL enemies with concussive force. Inflicts Stun." },
    // ── Demon Slayer extras ───────────────────────────────────────
    { id:'ds_wb10', name:'Water Breathing: 10th Form', anime:'Demon Slayer', cost:145, mp:26, power:62, status:'bleed', aoe:true,
      desc:"Constant Flux — spinning water slashes hit ALL enemies. Inflicts Bleed." },
    { id:'ds_tcf', name:'Thunder Clap and Flash', anime:'Demon Slayer', cost:170, mp:30, power:70, status:'paralysis',
      desc:"Zenitsu's lightning-speed strike. Inflicts Paralysis." },
    { id:'ds_lb', name:'Love Breathing: Cat-Legged Winds', anime:'Demon Slayer', cost:200, mp:36, power:78, aoe:true,
      desc:"Mitsuri's sweeping serpentine slashes tear through ALL enemies." },
    { id:'ds_hk', name:'Hinokami Kagura: Burning Bones', anime:'Demon Slayer', cost:300, mp:55, power:105, status:'burn',
      desc:"Sacred Sun Dance — inescapable consuming flame. Inflicts Burn." },
    // ── JJK extras ────────────────────────────────────────────────
    { id:'jjk_ces', name:'Cursed Energy Strike', anime:'Jujutsu Kaisen', cost:100, mp:16, power:40,
      desc:"Raw cursed energy compressed into a devastating blow." },
    { id:'jjk_df', name:'Divergent Fist', anime:'Jujutsu Kaisen', cost:160, mp:28, power:65, status:'stun',
      desc:"Double-impact cursed wave — delayed shockwave stuns. Inflicts Stun." },
    { id:'jjk_de', name:'Domain Expansion: Unlimited Void', anime:'Jujutsu Kaisen', cost:300, mp:55, power:98, status:'confusion', aoe:true,
      desc:"Gojo's domain floods ALL enemies with infinite information. Inflicts Confusion." },
    // ── MHA extras ────────────────────────────────────────────────
    { id:'mha_fc', name:'One For All: Full Cowling', anime:'My Hero Academia', cost:155, mp:27, power:63, status:'stun',
      desc:"Power spread through every cell — explosive strike. Inflicts Stun." },
    { id:'mha_exp', name:'Explosion: Howitzer Impact', anime:'My Hero Academia', cost:185, mp:34, power:78, status:'burn', aoe:true,
      desc:"Katsuki's spiralling AP explosion blasts ALL enemies. Inflicts Burn." },
    { id:'mha_eng', name:'Engine: Recipro Burst', anime:'My Hero Academia', cost:210, mp:38, power:84, selfBuff:'haste',
      desc:"Iida's leg engines overdrive beyond their limit. Grants Haste." },
    { id:'mha_is', name:'Indiscriminate Shock 1,300,000V', anime:'My Hero Academia', cost:260, mp:46, power:96, status:'paralysis', aoe:true,
      desc:"Kaminari unleashes his full wattage — electric field hits ALL enemies. Inflicts Paralysis." },
    // ── DBZ extras ────────────────────────────────────────────────
    { id:'dbz_kb', name:'Ki Blast Barrage', anime:'Dragon Ball Z', cost:120, mp:20, power:48, aoe:true,
      desc:"A rapid volley of ki blasts rains down on ALL enemies." },
    { id:'dbz_sb', name:'Spirit Bomb', anime:'Dragon Ball Z', cost:220, mp:40, power:88, status:'stun', aoe:true,
      desc:"Colossal energy sphere crushes ALL enemies. Inflicts Stun." },
    { id:'dbz_ss', name:'Super Saiyan Surge', anime:'Dragon Ball Z', cost:260, mp:45, power:0, selfBuff:'bravery',
      desc:"Golden ki ignites — power level skyrockets. Grants Bravery." },
    { id:'dbz_ff', name:'Final Flash', anime:'Dragon Ball Z', cost:310, mp:56, power:105, status:'burn', aoe:true,
      desc:"Vegeta's full-power beam sweeps through ALL enemies. Inflicts Burn." },
    // ── HxH extras ────────────────────────────────────────────────
    { id:'hxh_en', name:'En: Detection Strike', anime:'Hunter x Hunter', cost:130, mp:22, power:50, status:'confusion', aoe:true,
      desc:"Nen field extends in all directions — strikes ALL enemies simultaneously. Inflicts Confusion." },
    { id:'hxh_em', name:'Nen: Emission Burst', anime:'Hunter x Hunter', cost:170, mp:30, power:70,
      desc:"Concentrated Nen emitted at point-blank range." },
    { id:'hxh_lp', name:'Killua: Lightning Palm', anime:'Hunter x Hunter', cost:200, mp:36, power:78, status:'paralysis',
      desc:"Godspeed-charged palm strike. Inflicts Paralysis." },
    { id:'hxh_ns', name:'100-Type Guanyin: Salvo', anime:'Hunter x Hunter', cost:350, mp:60, power:110, aoe:true,
      desc:"Netero's 100 simultaneous strikes rain down on ALL enemies." },
    // ── Various Worlds extra ──────────────────────────────────────
    { id:'fma_bc', name:'Black Coffin: Kuro Hitsugi', anime:'Fullmetal Alchemist: Brotherhood', cost:280, mp:50, power:95, status:'doom',
      desc:"Envelops the target in a black box — absolute obliteration. Inflicts Doom." },
];

// Spell Shops — each has exactly 5 spells grouped by anime
const SPELL_SHOPS = [
    { name: 'Hidden Leaf Scrolls',        anime: 'Naruto',
      ids: ['rasengan','naruto_sc','naruto_8g','amaterasu','naruto_rn'] },
    { name: 'Soul Society Archive',       anime: 'Bleach',
      ids: ['bleach_sk','bleach_kd','bleach_gt','bleach_bk','bleach_mg'] },
    { name: 'Grand Line Techniques',      anime: 'One Piece',
      ids: ['op_gp','gear_second','op_hk','conquerors_haki','op_g3'] },
    { name: 'Wisteria Dojo',              anime: 'Demon Slayer',
      ids: ['flame_breath','ds_wb10','ds_tcf','ds_lb','ds_hk'] },
    { name: 'Jujutsu Sorcery Guild',      anime: 'Jujutsu Kaisen',
      ids: ['jjk_ces','jjk_df','black_flash','jjk_de','hollow_purple'] },
    { name: 'UA Academy Store',           anime: 'My Hero Academia',
      ids: ['detroit_smash','mha_fc','mha_exp','mha_eng','mha_is'] },
    { name: 'Capsule Corp Training',      anime: 'Dragon Ball Z',
      ids: ['dbz_kb','kamehameha','dbz_sb','dbz_ss','dbz_ff'] },
    { name: 'Hunter Association Vault',   anime: 'Hunter x Hunter',
      ids: ['hxh_en','nen_jajanken','hxh_em','hxh_lp','hxh_ns'] },
    { name: 'Rare Technique Exchange',    anime: 'Various Worlds',
      ids: ['transmutation','ninpo_flame','shinra_kick','ora_rush','fma_bc'] },
];

// Potions — sold at Alchemy Shop
// cure: array of statuses to remove | cureAll: clears all negative | buff: applies status to player
const POTIONS = [
    // ── Restoratives ─────────────────────────────────────────────
    { id: 'health_pot',  name: 'Health Potion',  cost: 50,  hp: 50,     desc: 'Restores 50 HP' },
    { id: 'hi_pot',      name: 'Hi-Potion',      cost: 100, hp: 100,    desc: 'Restores 100 HP' },
    { id: 'mp_pot',      name: 'MP Potion',       cost: 65,  mp: 60,     desc: 'Restores 60 MP' },
    { id: 'elixir',      name: 'Elixir',          cost: 220, full: true, desc: 'Fully restores HP and MP' },
    // ── Curatives ────────────────────────────────────────────────
    { id: 'antidote',    name: 'Antidote',        cost: 40,  cure: ['poison', 'bleed'],   desc: 'Cures Poison and Bleed' },
    { id: 'burn_salve',  name: 'Burn Salve',      cost: 45,  cure: ['burn'],              desc: 'Cures Burn' },
    { id: 'echo_herb',   name: 'Echo Herb',        cost: 55,  cure: ['sleep', 'freeze'],  desc: 'Cures Sleep and Freeze' },
    { id: 'dispel',      name: 'Dispel',           cost: 80,  cure: ['stun', 'paralysis', 'fear', 'confusion', 'petrify'], desc: 'Cures Stun, Paralysis, Fear, Confusion, Petrify' },
    { id: 'remedy',      name: 'Remedy',           cost: 160, cureAll: true,              desc: 'Cures ALL negative status effects' },
    // ── Buffs ─────────────────────────────────────────────────────
    { id: 'hero_brew',   name: "Hero's Brew",      cost: 120, buff: 'bravery', desc: 'Grants Bravery — +50% ATK for 3 turns' },
    { id: 'swift_tonic', name: 'Swift Tonic',      cost: 110, buff: 'haste',   desc: 'Grants Haste — +30% ATK for 2 turns' },
    // ── Naruto ───────────────────────────────────────────────────
    { id:'chakra_pill',   name:'Chakra Recovery Pill',   cost:80,  mp:100,   desc:'Restores 100 MP' },
    { id:'soldier_pill',  name:'Soldier Pill',            cost:100, buff:'bravery', desc:'Combat stimulant — grants Bravery (+50% ATK 3 turns)' },
    { id:'mystical_palm', name:'Mystical Palm Salve',     cost:150, hp:180,   desc:'Medical ninjutsu in a bottle — restores 180 HP' },
    { id:'seal_elixir',   name:'Sealing Elixir',          cost:260, full:true, desc:'Uzumaki seal vial — fully restores HP and MP' },
    // ── Bleach ───────────────────────────────────────────────────
    { id:'spirit_water',  name:'Spirit Particle Water',   cost:75,  mp:90,    desc:'Restores 90 MP' },
    { id:'hollow_frag',   name:'Hollow Mask Fragment',    cost:120, buff:'bravery', desc:'Hollow power infusion — grants Bravery for 3 turns' },
    { id:'gigai_extract', name:'Gigai Extract',           cost:100, hp:110,   desc:'Restores 110 HP' },
    { id:'hogyoku_shard', name:'Hōgyoku Shard',           cost:280, full:true, desc:'Sōsuke Aizen\'s orb fragment — fully restores HP and MP' },
    // ── One Piece ────────────────────────────────────────────────
    { id:'haki_tonic',    name:'Haki Tonic',              cost:110, buff:'bravery', desc:'Grants Bravery for 3 turns' },
    { id:'sea_cure',      name:'Sea-Stone Antidote',      cost:55,  cure:['poison','burn'], desc:'Cures Poison and Burn' },
    { id:'rumble_ball',   name:'Rumble Ball',             cost:170, hp:200,   desc:"Chopper's power-up drug — restores 200 HP" },
    { id:'transponder_stim', name:'Transponder Stimulant', cost:90, buff:'haste', desc:'Den Den Mushi signal boost — grants Haste for 2 turns' },
    { id:'mera_flask',    name:'Flame Fruit Flask',       cost:65,  mp:75,    desc:'Restores 75 MP' },
    // ── Demon Slayer ─────────────────────────────────────────────
    { id:'wisteria_tonic', name:'Wisteria Tonic',         cost:60,  cure:['poison'], desc:'Cures Poison' },
    { id:'conc_pill',     name:'Total Concentration Pill', cost:130, mp:120,  desc:'Total Concentration Breathing — restores 120 MP' },
    { id:'nichirin_polish', name:'Nichirin Polish',       cost:110, buff:'haste', desc:'Blade treatment boost — grants Haste for 2 turns' },
    { id:'sun_essence',   name:'Sun Breathing Essence',   cost:200, hp:220,   desc:'Restores 220 HP' },
    // ── Jujutsu Kaisen ───────────────────────────────────────────
    { id:'cursed_vial',   name:'Cursed Energy Vial',      cost:80,  mp:90,    desc:'Restores 90 MP' },
    { id:'jjk_antidote',  name:'Jujutsu Antidote',        cost:50,  cure:['poison','bleed'], desc:'Cures Poison and Bleed' },
    { id:'binding_vow',   name:'Binding Vow Amplifier',   cost:140, buff:'bravery', desc:'Power through binding vow — grants Bravery' },
    { id:'reverse_cursed', name:'Reverse Cursed Technique', cost:180, hp:210, desc:'Restores 210 HP' },
    { id:'six_eyes_clarity', name:'Six Eyes Clarity Drop', cost:300, full:true, desc:"Gojo's limitless clarity — fully restores HP and MP" },
    // ── My Hero Academia ─────────────────────────────────────────
    { id:'stamina_drink', name:'Hero Stamina Drink',      cost:85,  hp:90,    desc:'Restores 90 HP' },
    { id:'support_beta',  name:'Support Item Beta',       cost:130, mp:110,   desc:'Restores 110 MP' },
    { id:'rewind_quirk',  name:'Rewind Quirk Vial',       cost:280, full:true, desc:"Eri's Rewind — fully restores HP and MP" },
    // ── Dragon Ball Z ────────────────────────────────────────────
    { id:'senzu_bean',    name:'Senzu Bean',              cost:300, full:true, desc:'Full restoration of HP and MP' },
    { id:'ki_restore',    name:'Ki Restoration Pill',     cost:85,  mp:95,    desc:'Restores 95 MP' },
    { id:'saiyan_herb',   name:'Saiyan Saga Herb',        cost:60,  cure:['stun','paralysis'], desc:'Cures Stun and Paralysis' },
    { id:'gravity_tonic', name:'Gravity Training Tonic',  cost:150, buff:'bravery', desc:'Grants Bravery for 3 turns' },
    { id:'zenkai_boost',  name:'Zenkai Boost Serum',      cost:200, hp:240,   desc:'Restores 240 HP' },
    // ── Hunter x Hunter ──────────────────────────────────────────
    { id:'nen_extract',   name:'Nen Extract',             cost:90,  mp:100,   desc:'Restores 100 MP' },
    { id:'assassin_anti', name:'Zoldyck Antidote',        cost:65,  cure:['poison','bleed','burn'], desc:'Cures Poison, Bleed, and Burn' },
    { id:'york_elixir',   name:'Yorknew Elixir',          cost:190, hp:220,   desc:'Restores 220 HP' },
    { id:'netero_tonic',  name:'Netero Discipline Tonic', cost:150, buff:'bravery', desc:'Grants Bravery for 3 turns' },
];

// Potion Shops — each has exactly 5 items grouped by anime
const POTION_SHOPS = [
    { name: 'Hidden Leaf Medic Store', anime: 'Naruto',
      ids: ['antidote','chakra_pill','soldier_pill','mystical_palm','seal_elixir'] },
    { name: 'Seireitei Pharmacy',      anime: 'Bleach',
      ids: ['dispel','spirit_water','hollow_frag','gigai_extract','hogyoku_shard'] },
    { name: 'Grand Line Apothecary',   anime: 'One Piece',
      ids: ['haki_tonic','sea_cure','rumble_ball','transponder_stim','mera_flask'] },
    { name: 'Wisteria Herbalist',      anime: 'Demon Slayer',
      ids: ['burn_salve','wisteria_tonic','conc_pill','nichirin_polish','sun_essence'] },
    { name: 'Jujutsu Remedies',        anime: 'Jujutsu Kaisen',
      ids: ['cursed_vial','jjk_antidote','binding_vow','reverse_cursed','six_eyes_clarity'] },
    { name: 'UA Medical Bay',          anime: 'My Hero Academia',
      ids: ['hero_brew','swift_tonic','stamina_drink','support_beta','rewind_quirk'] },
    { name: 'Capsule Corp Lab',        anime: 'Dragon Ball Z',
      ids: ['senzu_bean','ki_restore','saiyan_herb','gravity_tonic','zenkai_boost'] },
    { name: 'Hunter Provisions',       anime: 'Hunter x Hunter',
      ids: ['echo_herb','nen_extract','assassin_anti','york_elixir','netero_tonic'] },
    { name: "Traveler's Emporium",     anime: 'Various Worlds',
      ids: ['health_pot','hi_pot','mp_pot','elixir','remedy'] },
];
