// ── RACES — anime species / being types ─────────────────────────
const RACE_DATA = {
    1: { name: 'Uchiha Clan', anime: 'Naruto', max_lv: 30,
         desc: 'Sharingan bloodline specialists with fire release, genjutsu, and high offensive potential.',
         base:   { hp:70, mp:80, pa:10, pd:7, ag:9, ma:12, md:8, rs:7, sp:6 },
         per_lv: { hp:3, mp:4, pa:1, pd:1, ag:1, ma:2, md:1, rs:1, sp:1 },
         skills: [] },
    2: { name: 'Hyuga Clan', anime: 'Naruto', max_lv: 30,
         desc: 'Byakugan users trained in Gentle Fist, chakra point strikes, and defensive taijutsu.',
         base:   { hp:75, mp:70, pa:9, pd:9, ag:10, ma:8, md:9, rs:8, sp:5 },
         per_lv: { hp:3, mp:3, pa:1, pd:2, ag:1, ma:1, md:2, rs:1, sp:0 },
         skills: [] },
    3: { name: 'Uzumaki Clan', anime: 'Naruto', max_lv: 30,
         desc: 'A clan known for massive chakra reserves, vitality, endurance, and sealing arts.',
         base:   { hp:100, mp:90, pa:8, pd:10, ag:6, ma:10, md:10, rs:9, sp:6 },
         per_lv: { hp:5, mp:4, pa:1, pd:2, ag:1, ma:2, md:2, rs:2, sp:1 },
         skills: [] },
    4: { name: 'Otsutsuki Clan', anime: 'Naruto', max_lv: 30,
         desc: 'Alien chakra progenitors with godlike reserves, dangerous dojutsu potential, and overwhelming growth.',
         base:   { hp:120, mp:120, pa:15, pd:12, ag:10, ma:15, md:12, rs:12, sp:10 },
         per_lv: { hp:6, mp:6, pa:2, pd:2, ag:2, ma:2, md:2, rs:2, sp:2 },
         skills: [] },
    5: { name: 'Senju Clan', anime: 'Naruto', max_lv: 30,
         desc: 'Powerful descendants of Asura with strong life force, balance, and battlefield adaptability.',
         base:   { hp:110, mp:80, pa:12, pd:11, ag:8, ma:10, md:10, rs:10, sp:6 },
         per_lv: { hp:5, mp:3, pa:2, pd:2, ag:1, ma:1, md:2, rs:2, sp:1 },
         skills: [] },
    6: { name: 'Shinigami', anime: 'Bleach', max_lv: 25,
         desc: 'Soul Reapers who fight with Zanpakuto, Kido, Shunpo, and spiritual pressure.',
         base:   { hp:70, mp:100, pa:10, pd:8, ag:11, ma:12, md:10, rs:10, sp:5 },
         per_lv: { hp:3, mp:5, pa:1, pd:1, ag:2, ma:2, md:1, rs:1, sp:1 },
         skills: [] },
    7: { name: 'Hollow', anime: 'Bleach', max_lv: 25,
         desc: 'Predatory spirits with monstrous instincts, high durability, and destructive spiritual attacks.',
         base:   { hp:110, mp:50, pa:14, pd:10, ag:7, ma:8, md:7, rs:6, sp:4 },
         per_lv: { hp:5, mp:2, pa:2, pd:2, ag:1, ma:1, md:1, rs:1, sp:0 },
         skills: [] },
    8: { name: 'Quincy', anime: 'Bleach', max_lv: 25,
         desc: 'Spiritual archers who gather Reishi into precise ranged attacks and defensive techniques.',
         base:   { hp:70, mp:90, pa:12, pd:7, ag:10, ma:11, md:9, rs:9, sp:6 },
         per_lv: { hp:3, mp:4, pa:2, pd:1, ag:1, ma:2, md:1, rs:1, sp:1 },
         skills: [] },
    9: { name: 'Fullbringer', anime: 'Bleach', max_lv: 25,
         desc: 'Humans who manipulate the souls inside objects to create unique personal powers.',
         base:   { hp:80, mp:70, pa:9, pd:8, ag:9, ma:9, md:9, rs:8, sp:7 },
         per_lv: { hp:4, mp:3, pa:1, pd:1, ag:1, ma:1, md:1, rs:1, sp:2 },
         skills: [] },
    10: { name: 'Arrancar', anime: 'Bleach', max_lv: 25,
         desc: 'Hollows who gained Shinigami-like power, combining Hierro, Cero, and Resurreccion potential.',
         base:   { hp:100, mp:70, pa:13, pd:10, ag:9, ma:10, md:9, rs:9, sp:6 },
         per_lv: { hp:5, mp:3, pa:2, pd:2, ag:1, ma:1, md:1, rs:1, sp:1 },
         skills: [] },
    11: { name: 'Visored', anime: 'Bleach', max_lv: 25,
         desc: 'Shinigami who can draw out Hollow mask power for explosive combat boosts.',
         base:   { hp:90, mp:90, pa:12, pd:9, ag:11, ma:12, md:10, rs:10, sp:7 },
         per_lv: { hp:4, mp:4, pa:2, pd:1, ag:2, ma:2, md:1, rs:1, sp:1 },
         skills: [] },
    12: { name: 'Giants', anime: 'One Piece', max_lv: 20,
         desc: 'Massive warriors with tremendous strength, huge health pools, and battlefield presence.',
         base:   { hp:150, mp:40, pa:18, pd:15, ag:4, ma:5, md:6, rs:8, sp:3 },
         per_lv: { hp:7, mp:2, pa:3, pd:3, ag:0, ma:1, md:1, rs:1, sp:0 },
         skills: [] },
    13: { name: 'Skypieans', anime: 'One Piece', max_lv: 20,
         desc: 'Winged sky-island people with agile movement, strong senses, and sky-combat potential.',
         base:   { hp:80, mp:60, pa:8, pd:7, ag:14, ma:9, md:8, rs:7, sp:6 },
         per_lv: { hp:3, mp:3, pa:1, pd:1, ag:2, ma:1, md:1, rs:1, sp:1 },
         skills: [] },
    14: { name: 'Ackerman Clan', anime: 'Attack on Titan', max_lv: 20,
         desc: 'Awakened warriors with extreme combat instincts, speed, and physical power.',
         base:   { hp:100, mp:30, pa:16, pd:12, ag:15, ma:4, md:6, rs:7, sp:6 },
         per_lv: { hp:4, mp:1, pa:3, pd:2, ag:2, ma:0, md:1, rs:1, sp:1 },
         skills: [] },
    15: { name: 'The Founding Titan', anime: 'Attack on Titan', max_lv: 20,
         desc: 'The coordinate-bearing Titan with overwhelming authority, command potential, and massive presence.',
         base:   { hp:200, mp:100, pa:20, pd:18, ag:5, ma:15, md:15, rs:15, sp:12 },
         per_lv: { hp:10, mp:5, pa:3, pd:3, ag:1, ma:2, md:2, rs:2, sp:2 },
         skills: [] },
    16: { name: 'The Armored Titan', anime: 'Attack on Titan', max_lv: 20,
         desc: 'A heavily armored Titan built for defense, siege warfare, and brutal charges.',
         base:   { hp:180, mp:40, pa:18, pd:22, ag:5, ma:5, md:12, rs:12, sp:6 },
         per_lv: { hp:9, mp:2, pa:3, pd:4, ag:0, ma:1, md:2, rs:2, sp:1 },
         skills: [] },
    17: { name: 'The Attack Titan', anime: 'Attack on Titan', max_lv: 20,
         desc: 'A relentless Titan driven by freedom, endurance, and forward momentum.',
         base:   { hp:150, mp:40, pa:18, pd:14, ag:10, ma:6, md:8, rs:8, sp:7 },
         per_lv: { hp:7, mp:2, pa:3, pd:2, ag:1, ma:1, md:1, rs:1, sp:1 },
         skills: [] },
    18: { name: 'The Beast Titan', anime: 'Attack on Titan', max_lv: 20,
         desc: 'A Titan with monstrous throwing power, tactical instincts, and variable beast traits.',
         base:   { hp:145, mp:50, pa:17, pd:12, ag:8, ma:8, md:8, rs:9, sp:8 },
         per_lv: { hp:7, mp:2, pa:3, pd:2, ag:1, ma:1, md:1, rs:1, sp:1 },
         skills: [] },
    19: { name: 'The Cart Titan', anime: 'Attack on Titan', max_lv: 20,
         desc: 'A mobile endurance Titan with stamina, support value, and battlefield utility.',
         base:   { hp:130, mp:50, pa:10, pd:12, ag:15, ma:6, md:8, rs:10, sp:8 },
         per_lv: { hp:6, mp:2, pa:1, pd:2, ag:3, ma:1, md:1, rs:2, sp:1 },
         skills: [] },
    20: { name: 'The Colossus Titan', anime: 'Attack on Titan', max_lv: 20,
         desc: 'A gigantic Titan with overwhelming size, heat, and catastrophic destructive power.',
         base:   { hp:240, mp:70, pa:24, pd:18, ag:2, ma:12, md:14, rs:14, sp:8 },
         per_lv: { hp:12, mp:3, pa:4, pd:3, ag:0, ma:2, md:2, rs:2, sp:1 },
         skills: [] },
    21: { name: 'The Female Titan', anime: 'Attack on Titan', max_lv: 20,
         desc: 'A balanced Titan with high adaptability, hardening, speed, and martial skill.',
         base:   { hp:145, mp:50, pa:16, pd:14, ag:12, ma:7, md:9, rs:9, sp:8 },
         per_lv: { hp:7, mp:2, pa:2, pd:2, ag:2, ma:1, md:1, rs:1, sp:1 },
         skills: [] },
    22: { name: 'The Jaw Titan', anime: 'Attack on Titan', max_lv: 20,
         desc: 'A small, fast Titan with crushing jaws, claws, and assassination speed.',
         base:   { hp:120, mp:35, pa:18, pd:10, ag:18, ma:4, md:6, rs:7, sp:7 },
         per_lv: { hp:5, mp:1, pa:3, pd:1, ag:3, ma:0, md:1, rs:1, sp:1 },
         skills: [] },
    23: { name: 'The War Hammer Titan', anime: 'Attack on Titan', max_lv: 20,
         desc: 'A hardening specialist able to create weapons, spikes, and battlefield structures.',
         base:   { hp:150, mp:80, pa:18, pd:16, ag:6, ma:12, md:12, rs:12, sp:10 },
         per_lv: { hp:7, mp:4, pa:3, pd:3, ag:1, ma:2, md:2, rs:2, sp:2 },
         skills: [] },
    24: { name: 'Zenin Clan', anime: 'Jujutsu Kaisen', max_lv: 20,
         desc: 'A major jujutsu clan tied to inherited techniques, weapon mastery, and harsh combat training.',
         base:   { hp:90, mp:70, pa:14, pd:10, ag:12, ma:8, md:8, rs:8, sp:6 },
         per_lv: { hp:4, mp:3, pa:2, pd:1, ag:1, ma:1, md:1, rs:1, sp:1 },
         skills: [] },
    25: { name: 'Gojo Clan', anime: 'Jujutsu Kaisen', max_lv: 20,
         desc: 'A prestigious clan associated with Limitless potential, immense cursed energy control, and rare perception.',
         base:   { hp:80, mp:120, pa:10, pd:8, ag:12, ma:16, md:12, rs:12, sp:10 },
         per_lv: { hp:3, mp:5, pa:1, pd:1, ag:2, ma:3, md:2, rs:2, sp:2 },
         skills: [] },
    26: { name: 'Kamo Clan', anime: 'Jujutsu Kaisen', max_lv: 20,
         desc: 'A great jujutsu clan famous for Blood Manipulation and disciplined cursed technique control.',
         base:   { hp:90, mp:80, pa:12, pd:10, ag:10, ma:10, md:10, rs:9, sp:7 },
         per_lv: { hp:4, mp:3, pa:2, pd:2, ag:1, ma:1, md:1, rs:1, sp:1 },
         skills: [] },
    27: { name: 'Celestial Spirit', anime: 'Fairy Tail', max_lv: 20,
         desc: 'A magical spirit tied to celestial contracts, high magical power, and support utility.',
         base:   { hp:80, mp:100, pa:8, pd:8, ag:10, ma:14, md:10, rs:10, sp:8 },
         per_lv: { hp:3, mp:5, pa:1, pd:1, ag:1, ma:2, md:1, rs:1, sp:2 },
         skills: [] },
    28: { name: 'Demon Slayer', anime: 'Fairy Tail', max_lv: 20,
         desc: 'A forbidden slayer lineage focused on demonic power, anti-demon magic, and ruthless offense.',
         base:   { hp:110, mp:80, pa:15, pd:11, ag:9, ma:13, md:10, rs:10, sp:8 },
         per_lv: { hp:5, mp:3, pa:3, pd:2, ag:1, ma:2, md:1, rs:1, sp:1 },
         skills: [] },
    29: { name: 'Dragon Slayer', anime: 'Fairy Tail', max_lv: 20,
         desc: 'A dragon-aspected slayer with elemental magic, enhanced senses, and close-range dominance.',
         base:   { hp:120, mp:80, pa:16, pd:12, ag:10, ma:12, md:10, rs:10, sp:8 },
         per_lv: { hp:6, mp:3, pa:3, pd:2, ag:1, ma:2, md:1, rs:1, sp:1 },
         skills: [] },
    30: { name: 'Etherious', anime: 'Fairy Tail', max_lv: 20,
         desc: 'A demonic being born from dark magic with curse power, durability, and dangerous regeneration.',
         base:   { hp:130, mp:90, pa:14, pd:13, ag:8, ma:14, md:12, rs:12, sp:9 },
         per_lv: { hp:6, mp:4, pa:2, pd:2, ag:1, ma:2, md:2, rs:2, sp:1 },
         skills: [] },
    31: { name: 'God Slayer', anime: 'Fairy Tail', max_lv: 20,
         desc: 'A rare slayer type using black god-slaying magic with high magical offense and resistance.',
         base:   { hp:100, mp:100, pa:13, pd:10, ag:10, ma:16, md:12, rs:12, sp:10 },
         per_lv: { hp:5, mp:5, pa:2, pd:1, ag:1, ma:3, md:2, rs:2, sp:2 },
         skills: [] },
    32: { name: 'Chimera Ant', anime: 'Hunter x Hunter', max_lv: 20,
         desc: 'An adaptive species with monstrous bodies, rapid evolution, and natural combat instincts.',
         base:   { hp:140, mp:60, pa:16, pd:14, ag:8, ma:10, md:10, rs:10, sp:8 },
         per_lv: { hp:6, mp:2, pa:2, pd:2, ag:1, ma:1, md:1, rs:1, sp:1 },
         skills: [] },
    33: { name: 'Zoldyck Family', anime: 'Hunter x Hunter', max_lv: 20,
         desc: 'An assassin bloodline trained from birth in stealth, poison resistance, and lethal speed.',
         base:   { hp:100, mp:60, pa:15, pd:10, ag:15, ma:8, md:8, rs:8, sp:10 },
         per_lv: { hp:4, mp:2, pa:2, pd:1, ag:2, ma:1, md:1, rs:1, sp:2 },
         skills: [] },
    34: { name: 'Kurta Clan', anime: 'Hunter x Hunter', max_lv: 20,
         desc: 'A clan with Scarlet Eyes that unlock intense power, focus, and emotional combat potential.',
         base:   { hp:90, mp:80, pa:12, pd:10, ag:10, ma:12, md:10, rs:10, sp:12 },
         per_lv: { hp:4, mp:3, pa:2, pd:2, ag:1, ma:2, md:1, rs:1, sp:2 },
         skills: [] }
};

// ── JOBS — role classes separated from racial/species choices ───────────────────
const JOB_DATA = {
    "1": {
        "name": "Chakra Duelist",
        "anime": "Naruto",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A mobile combat class focused on chakra footwork, feints, and close-range ninjutsu without being a racial bloodline. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j001_start",
                        "name": "Leaf Step Counter",
                        "type": "a",
                        "mp": 10,
                        "pow": 35,
                        "desc": "Starter job skill for Chakra Duelist: a mobile combat class focused on chakra footwork, feints, and close-range ninjutsu without being a racial bloodline. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j001_start_yg_5",
                        "name": "Chakra Duelist: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Chakra Duelist. Starter job skill for Chakra Duelist: a mobile combat class focused on chakra footwork, feints, and close-range ninjutsu without being a racial bloodline. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base. YGGDRASIL growth: drains HP from damage dealt.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j001_yg_p10",
                        "name": "Chakra Duelist: Class Mastery",
                        "type": "p",
                        "bon": {
                            "pa": 15,
                            "ag": 15,
                            "hp": 30,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Grants Bleed immunity and extra durability.",
                        "immune": [
                            "bleed"
                        ]
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j001_start_yg_15",
                        "name": "Chakra Duelist: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Chakra Duelist. Starter job skill for Chakra Duelist: a mobile combat class focused on chakra footwork, feints, and close-range ninjutsu without being a racial bloodline. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "2": {
        "name": "Seal Artificer",
        "anime": "Naruto",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A preparation-heavy class that writes tags, barrier marks, storage seals, and battlefield traps. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j002_start",
                        "name": "Paper Seal Burst",
                        "type": "a",
                        "mp": 12,
                        "pow": 34,
                        "desc": "Starter job skill for Seal Artificer: a preparation-heavy class that writes tags, barrier marks, storage seals, and battlefield traps. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.41,
                        "buf": "regen"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j002_start_yg_5",
                        "name": "Seal Artificer: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Seal Artificer. Starter job skill for Seal Artificer: a preparation-heavy class that writes tags, barrier marks, storage seals, and battlefield traps. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced. YGGDRASIL growth: cleanses negative effects from the user.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.41,
                        "buf": "regen",
                        "cleanse": true
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j002_start_yg_10",
                        "name": "Seal Artificer: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Advanced class technique for Seal Artificer. Starter job skill for Seal Artificer: a preparation-heavy class that writes tags, barrier marks, storage seals, and battlefield traps. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced. YGGDRASIL growth: weakens enemy attack power.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.7,
                        "buf": "regen"
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "3": {
        "name": "Medical Striker",
        "anime": "Naruto",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A combat medic class that combines chakra scalpel precision with emergency field recovery. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j003_start",
                        "name": "Chakra Scalpel Jab",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Medical Striker: a combat medic class that combines chakra scalpel precision with emergency field recovery. Unique effect: grants guard, can inflict marked. YGGDRASIL growth: wraps the user in counter-damage thorns. Class path: Specialist.",
                        "buf": "thorns",
                        "st": "marked",
                        "sc": 0.6
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j003_start_yg_5",
                        "name": "Medical Striker: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Medical Striker. Starter job skill for Medical Striker: a combat medic class that combines chakra scalpel precision with emergency field recovery. Unique effect: grants guard, can inflict marked. YGGDRASIL growth: wraps the user in counter-damage thorns. Class path: Specialist. YGGDRASIL growth: restores a portion of maximum MP.",
                        "buf": "thorns",
                        "st": "marked",
                        "sc": 0.6,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j003_yg_p10",
                        "name": "Medical Striker: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "md": 15,
                            "pa": 8,
                            "rs": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Specialist class path. Grants Fear immunity and fighting spirit.",
                        "immune": [
                            "fear"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "4": {
        "name": "Summon Handler",
        "anime": "Naruto",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A pact-based class that calls trained creatures for pressure, scouting, and combo attacks. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 55,
            "mp": 55,
            "pa": 10,
            "pd": 9,
            "ag": 10,
            "ma": 10,
            "md": 8,
            "rs": 8,
            "sp": 8
        },
        "per_lv": {
            "hp": 4,
            "mp": 3,
            "pa": 2,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 1,
            "rs": 1,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j004_start",
                        "name": "Toad Snap Ambush",
                        "type": "a",
                        "mp": 10,
                        "pow": 0,
                        "desc": "Starter job skill for Summon Handler: a pact-based class that calls trained creatures for pressure, scouting, and combo attacks. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare.",
                        "heal": 0.18,
                        "cleanse": true
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j004_start_yg_3",
                        "name": "Summon Handler: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Summon Handler. Starter job skill for Summon Handler: a pact-based class that calls trained creatures for pressure, scouting, and combo attacks. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare.",
                        "heal": 0.18,
                        "cleanse": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j004_start_yg_5",
                        "name": "Summon Handler: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Rare class technique for Summon Handler. Starter job skill for Summon Handler: a pact-based class that calls trained creatures for pressure, scouting, and combo attacks. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare. YGGDRASIL growth: pays HP for an execution strike against weakened enemies.",
                        "heal": 0.18,
                        "cleanse": true,
                        "hpCostPct": 0.08,
                        "execute": 0.3
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Naruto",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "5": {
        "name": "ANBU Operative",
        "anime": "Naruto",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A stealth assault class built around silent takedowns, masks, smoke, and lethal precision. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j005_start",
                        "name": "Black Ops Flash Cut",
                        "type": "a",
                        "mp": 10,
                        "pow": 38,
                        "desc": "Starter job skill for ANBU Operative: a stealth assault class built around silent takedowns, masks, smoke, and lethal precision. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j005_start_yg_3",
                        "name": "ANBU Operative: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for ANBU Operative. Starter job skill for ANBU Operative: a stealth assault class built around silent takedowns, masks, smoke, and lethal precision. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden. YGGDRASIL growth: restores a portion of maximum MP.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j005_start_yg_5",
                        "name": "ANBU Operative: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Hidden class technique for ANBU Operative. Starter job skill for ANBU Operative: a stealth assault class built around silent takedowns, masks, smoke, and lethal precision. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden. YGGDRASIL growth: hits every enemy in the encounter.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3,
                        "aoe": true
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "6": {
        "name": "Zanpakuto Duelist",
        "anime": "Bleach",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A sword-focused spiritual combat class centered on release timing, blade pressure, and disciplined forms. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j006_start",
                        "name": "First Release Draw",
                        "type": "a",
                        "mp": 10,
                        "pow": 57,
                        "desc": "Starter job skill for Zanpakuto Duelist: a sword-focused spiritual combat class centered on release timing, blade pressure, and disciplined forms. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j006_start_yg_5",
                        "name": "Zanpakuto Duelist: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Zanpakuto Duelist. Starter job skill for Zanpakuto Duelist: a sword-focused spiritual combat class centered on release timing, blade pressure, and disciplined forms. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base. YGGDRASIL growth: lands as a three-hit combo.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true,
                        "hits": 3
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j006_yg_p10",
                        "name": "Zanpakuto Duelist: Class Mastery",
                        "type": "p",
                        "bon": {
                            "hp": 35,
                            "pa": 15,
                            "ag": 15,
                            "sp": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Recruit assists deal +18% damage or support power.",
                        "summonBoost": 0.18
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j006_start_yg_15",
                        "name": "Zanpakuto Duelist: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Zanpakuto Duelist. Starter job skill for Zanpakuto Duelist: a sword-focused spiritual combat class centered on release timing, blade pressure, and disciplined forms. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "7": {
        "name": "Kido Scholar",
        "anime": "Bleach",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A spellcasting class that chains numbered binding and destruction arts into precise battle control. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 35,
            "mp": 85,
            "pa": 3,
            "pd": 5,
            "ag": 7,
            "ma": 16,
            "md": 9,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 2,
            "mp": 5,
            "pa": 0,
            "pd": 1,
            "ag": 1,
            "ma": 3,
            "md": 2,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j007_start",
                        "name": "Hado Spark Palm",
                        "type": "a",
                        "mp": 12,
                        "pow": 36,
                        "desc": "Starter job skill for Kido Scholar: a spellcasting class that chains numbered binding and destruction arts into precise battle control. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced.",
                        "execute": 0.35,
                        "st": "doom",
                        "sc": 0.16,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j007_start_yg_5",
                        "name": "Kido Scholar: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Kido Scholar. Starter job skill for Kido Scholar: a spellcasting class that chains numbered binding and destruction arts into precise battle control. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced. YGGDRASIL growth: weakens enemy attack power.",
                        "execute": 0.35,
                        "st": "weaken",
                        "sc": 0.7,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j007_start_yg_10",
                        "name": "Kido Scholar: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Advanced class technique for Kido Scholar. Starter job skill for Kido Scholar: a spellcasting class that chains numbered binding and destruction arts into precise battle control. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced. YGGDRASIL growth: raises Guard, reducing incoming damage.",
                        "execute": 0.35,
                        "st": "doom",
                        "sc": 0.16,
                        "mpRestorePct": 0.12,
                        "buf": "guard"
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "8": {
        "name": "Hoho Scout",
        "anime": "Bleach",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A movement specialist who uses flash steps, afterimages, and ambush angles to control the field. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j008_start",
                        "name": "Shunpo Needle Step",
                        "type": "a",
                        "mp": 10,
                        "pow": 35,
                        "desc": "Starter job skill for Hoho Scout: a movement specialist who uses flash steps, afterimages, and ambush angles to control the field. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist.",
                        "buf": "focus",
                        "hits": 2,
                        "aoe": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j008_start_yg_5",
                        "name": "Hoho Scout: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Hoho Scout. Starter job skill for Hoho Scout: a movement specialist who uses flash steps, afterimages, and ambush angles to control the field. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist. YGGDRASIL growth: can paralyze the enemy.",
                        "buf": "focus",
                        "hits": 2,
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j008_start_yg_10",
                        "name": "Hoho Scout: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Specialist class technique for Hoho Scout. Starter job skill for Hoho Scout: a movement specialist who uses flash steps, afterimages, and ambush angles to control the field. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "buf": "regen",
                        "hits": 2,
                        "aoe": true
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "9": {
        "name": "Soul Medic",
        "anime": "Bleach",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A backline support class trained in kaido, spiritual sutures, and emergency soul stabilization. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j009_start",
                        "name": "Kaido Pulse Touch",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Soul Medic: a backline support class trained in kaido, spiritual sutures, and emergency soul stabilization. Unique effect: drains HP, grants regen. YGGDRASIL growth: weakens enemy attack power. Class path: Rare.",
                        "buf": "regen",
                        "drain": true,
                        "st": "weaken",
                        "sc": 0.7
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j009_start_yg_3",
                        "name": "Soul Medic: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Soul Medic. Starter job skill for Soul Medic: a backline support class trained in kaido, spiritual sutures, and emergency soul stabilization. Unique effect: drains HP, grants regen. YGGDRASIL growth: weakens enemy attack power. Class path: Rare.",
                        "buf": "regen",
                        "drain": true,
                        "st": "weaken",
                        "sc": 0.7
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j009_yg_p5",
                        "name": "Soul Medic: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 20,
                            "ma": 18,
                            "md": 10,
                            "rs": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Rare class path. Grants Confusion immunity and mental clarity.",
                        "immune": [
                            "confusion"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Bleach",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "10": {
        "name": "Reishi Archer",
        "anime": "Bleach",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A ranged spirit-particle class that forms bows, platforms, and traps from gathered reishi. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j010_start",
                        "name": "Reishi Pin Shot",
                        "type": "a",
                        "mp": 12,
                        "pow": 34,
                        "desc": "Starter job skill for Reishi Archer: a ranged spirit-particle class that forms bows, platforms, and traps from gathered reishi. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden.",
                        "st": "doom",
                        "sc": 0.16
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j010_start_yg_3",
                        "name": "Reishi Archer: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Reishi Archer. Starter job skill for Reishi Archer: a ranged spirit-particle class that forms bows, platforms, and traps from gathered reishi. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden. YGGDRASIL growth: can paralyze the enemy.",
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j010_start_yg_5",
                        "name": "Reishi Archer: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Hidden class technique for Reishi Archer. Starter job skill for Reishi Archer: a ranged spirit-particle class that forms bows, platforms, and traps from gathered reishi. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden. YGGDRASIL growth: marks the enemy, increasing damage they take.",
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "11": {
        "name": "Haki Brawler",
        "anime": "One Piece",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A willpower fighter class using armament, observation, and brutal martial timing instead of species traits. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j011_start",
                        "name": "Armament Knuckle",
                        "type": "a",
                        "mp": 10,
                        "pow": 38,
                        "desc": "Starter job skill for Haki Brawler: a willpower fighter class using armament, observation, and brutal martial timing instead of species traits. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base.",
                        "buf": "thorns",
                        "st": "fear",
                        "sc": 0.42,
                        "hits": 3
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j011_start_yg_5",
                        "name": "Haki Brawler: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Haki Brawler. Starter job skill for Haki Brawler: a willpower fighter class using armament, observation, and brutal martial timing instead of species traits. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base. YGGDRASIL growth: opens a vulnerable point for follow-up attacks.",
                        "buf": "thorns",
                        "st": "vulnerable",
                        "sc": 0.65,
                        "hits": 3
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j011_yg_p10",
                        "name": "Haki Brawler: Class Mastery",
                        "type": "p",
                        "bon": {
                            "hp": 65,
                            "pa": 15,
                            "ag": 15,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Grants Bleed immunity and extra durability.",
                        "immune": [
                            "bleed"
                        ]
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j011_start_yg_15",
                        "name": "Haki Brawler: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Haki Brawler. Starter job skill for Haki Brawler: a willpower fighter class using armament, observation, and brutal martial timing instead of species traits. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base.",
                        "buf": "thorns",
                        "st": "fear",
                        "sc": 0.42,
                        "hits": 3
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "12": {
        "name": "Sea Chef",
        "anime": "One Piece",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A support striker class that mixes knife work, hot-blooded kicks, and battle meals for survival. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j012_start",
                        "name": "Diable Pan Kick",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Sea Chef: a support striker class that mixes knife work, hot-blooded kicks, and battle meals for survival. Unique effect: hits all enemies, can inflict confusion. YGGDRASIL growth: can paralyze the enemy. Class path: Advanced.",
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j012_start_yg_5",
                        "name": "Sea Chef: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Sea Chef. Starter job skill for Sea Chef: a support striker class that mixes knife work, hot-blooded kicks, and battle meals for survival. Unique effect: hits all enemies, can inflict confusion. YGGDRASIL growth: can paralyze the enemy. Class path: Advanced. YGGDRASIL growth: raises Guard, reducing incoming damage.",
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45,
                        "buf": "guard"
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j012_yg_p10",
                        "name": "Sea Chef: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "md": 23,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Advanced class path. Grants Burn immunity and magic resistance.",
                        "immune": [
                            "burn"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "13": {
        "name": "Navigator Tactician",
        "anime": "One Piece",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A weather-control class that reads pressure, wind, and lightning to set up battlefield advantages. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j013_start",
                        "name": "Storm Baton Jolt",
                        "type": "a",
                        "mp": 12,
                        "pow": 0,
                        "desc": "Starter job skill for Navigator Tactician: a weather-control class that reads pressure, wind, and lightning to set up battlefield advantages. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist.",
                        "heal": 0.16,
                        "buf": "bravery",
                        "mpRestorePct": 0.08,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j013_start_yg_5",
                        "name": "Navigator Tactician: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Navigator Tactician. Starter job skill for Navigator Tactician: a weather-control class that reads pressure, wind, and lightning to set up battlefield advantages. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "heal": 0.16,
                        "buf": "regen",
                        "mpRestorePct": 0.08,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j013_start_yg_10",
                        "name": "Navigator Tactician: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Specialist class technique for Navigator Tactician. Starter job skill for Navigator Tactician: a weather-control class that reads pressure, wind, and lightning to set up battlefield advantages. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist. YGGDRASIL growth: restores a portion of maximum MP.",
                        "heal": 0.16,
                        "buf": "bravery",
                        "mpRestorePct": 0.12,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "14": {
        "name": "Shipwright Defender",
        "anime": "One Piece",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A durable builder class that fights with reinforced tools, barricades, and improvised armor. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 90,
            "mp": 35,
            "pa": 8,
            "pd": 18,
            "ag": 4,
            "ma": 4,
            "md": 13,
            "rs": 12,
            "sp": 5
        },
        "per_lv": {
            "hp": 6,
            "mp": 2,
            "pa": 1,
            "pd": 3,
            "ag": 0,
            "ma": 1,
            "md": 2,
            "rs": 2,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j014_start",
                        "name": "Franky Guard Slam",
                        "type": "a",
                        "mp": 10,
                        "pow": 34,
                        "desc": "Starter job skill for Shipwright Defender: a durable builder class that fights with reinforced tools, barricades, and improvised armor. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "guard"
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j014_start_yg_3",
                        "name": "Shipwright Defender: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Shipwright Defender. Starter job skill for Shipwright Defender: a durable builder class that fights with reinforced tools, barricades, and improvised armor. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "guard"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j014_start_yg_5",
                        "name": "Shipwright Defender: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Rare class technique for Shipwright Defender. Starter job skill for Shipwright Defender: a durable builder class that fights with reinforced tools, barricades, and improvised armor. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare. YGGDRASIL growth: grants Focus for improved offense.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "focus"
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "One Piece",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "15": {
        "name": "Sniper Trickshot",
        "anime": "One Piece",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A ranged precision class using special ammunition, pop greens, ricochets, and deception. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j015_start",
                        "name": "Pop Green Snare",
                        "type": "a",
                        "mp": 10,
                        "pow": 35,
                        "desc": "Starter job skill for Sniper Trickshot: a ranged precision class using special ammunition, pop greens, ricochets, and deception. Unique effect: can inflict bleed. YGGDRASIL growth: grants Focus for improved offense. Class path: Hidden.",
                        "hits": 2,
                        "st": "bleed",
                        "sc": 0.46,
                        "buf": "focus"
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j015_start_yg_3",
                        "name": "Sniper Trickshot: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Sniper Trickshot. Starter job skill for Sniper Trickshot: a ranged precision class using special ammunition, pop greens, ricochets, and deception. Unique effect: can inflict bleed. YGGDRASIL growth: grants Focus for improved offense. Class path: Hidden. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "hits": 2,
                        "st": "bleed",
                        "sc": 0.46,
                        "buf": "regen"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j015_yg_p5",
                        "name": "Sniper Trickshot: Class Mastery",
                        "type": "p",
                        "bon": {
                            "pa": 10,
                            "ag": 10,
                            "rs": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Hidden class path. Grants Poison immunity and extra RESIST.",
                        "immune": [
                            "poison"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "16": {
        "name": "ODM Vanguard",
        "anime": "Attack on Titan",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A high-mobility soldier class built around grapples, gas bursts, and blade passes. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j016_start",
                        "name": "Gas Burst Slash",
                        "type": "a",
                        "mp": 10,
                        "pow": 35,
                        "desc": "Starter job skill for ODM Vanguard: a high-mobility soldier class built around grapples, gas bursts, and blade passes. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j016_start_yg_5",
                        "name": "ODM Vanguard: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for ODM Vanguard. Starter job skill for ODM Vanguard: a high-mobility soldier class built around grapples, gas bursts, and blade passes. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base. YGGDRASIL growth: drains HP from damage dealt.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j016_yg_p10",
                        "name": "ODM Vanguard: Class Mastery",
                        "type": "p",
                        "bon": {
                            "pa": 15,
                            "ag": 15,
                            "sp": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Recruit assists deal +18% damage or support power.",
                        "summonBoost": 0.18
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j016_start_yg_15",
                        "name": "ODM Vanguard: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for ODM Vanguard. Starter job skill for ODM Vanguard: a high-mobility soldier class built around grapples, gas bursts, and blade passes. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "17": {
        "name": "Thunder Spear Lancer",
        "anime": "Attack on Titan",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "An explosive assault class that commits to armor-breaking charges and point-blank detonations. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j017_start",
                        "name": "Thunder Spear Drill",
                        "type": "a",
                        "mp": 10,
                        "pow": 38,
                        "desc": "Starter job skill for Thunder Spear Lancer: an explosive assault class that commits to armor-breaking charges and point-blank detonations. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.41,
                        "buf": "regen"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j017_start_yg_5",
                        "name": "Thunder Spear Lancer: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Thunder Spear Lancer. Starter job skill for Thunder Spear Lancer: an explosive assault class that commits to armor-breaking charges and point-blank detonations. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced. YGGDRASIL growth: cleanses negative effects from the user.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.41,
                        "buf": "regen",
                        "cleanse": true
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j017_start_yg_10",
                        "name": "Thunder Spear Lancer: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Advanced class technique for Thunder Spear Lancer. Starter job skill for Thunder Spear Lancer: an explosive assault class that commits to armor-breaking charges and point-blank detonations. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced. YGGDRASIL growth: weakens enemy attack power.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.7,
                        "buf": "regen"
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "18": {
        "name": "Field Commander",
        "anime": "Attack on Titan",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A leadership class that turns formations, orders, and morale into battle momentum. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j018_start",
                        "name": "Rally Flare Order",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Field Commander: a leadership class that turns formations, orders, and morale into battle momentum. Unique effect: grants guard, can inflict marked. YGGDRASIL growth: wraps the user in counter-damage thorns. Class path: Specialist.",
                        "buf": "thorns",
                        "st": "marked",
                        "sc": 0.6
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j018_start_yg_5",
                        "name": "Field Commander: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Field Commander. Starter job skill for Field Commander: a leadership class that turns formations, orders, and morale into battle momentum. Unique effect: grants guard, can inflict marked. YGGDRASIL growth: wraps the user in counter-damage thorns. Class path: Specialist. YGGDRASIL growth: restores a portion of maximum MP.",
                        "buf": "thorns",
                        "st": "marked",
                        "sc": 0.6,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j018_yg_p10",
                        "name": "Field Commander: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "md": 15,
                            "ag": 6,
                            "sp": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Specialist class path. Detection utility reveals hidden-class prerequisites more clearly.",
                        "detection": 1
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "19": {
        "name": "Wall Artillery Crew",
        "anime": "Attack on Titan",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A ranged siege class trained in cannons, anchors, barricades, and kill-zone planning. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j019_start",
                        "name": "Cannon Anchor Shot",
                        "type": "a",
                        "mp": 12,
                        "pow": 0,
                        "desc": "Starter job skill for Wall Artillery Crew: a ranged siege class trained in cannons, anchors, barricades, and kill-zone planning. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare.",
                        "heal": 0.18,
                        "cleanse": true
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j019_start_yg_3",
                        "name": "Wall Artillery Crew: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Wall Artillery Crew. Starter job skill for Wall Artillery Crew: a ranged siege class trained in cannons, anchors, barricades, and kill-zone planning. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare.",
                        "heal": 0.18,
                        "cleanse": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j019_start_yg_5",
                        "name": "Wall Artillery Crew: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Rare class technique for Wall Artillery Crew. Starter job skill for Wall Artillery Crew: a ranged siege class trained in cannons, anchors, barricades, and kill-zone planning. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare. YGGDRASIL growth: pays HP for an execution strike against weakened enemies.",
                        "heal": 0.18,
                        "cleanse": true,
                        "hpCostPct": 0.08,
                        "execute": 0.3
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Attack on Titan",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "20": {
        "name": "Scout Medic",
        "anime": "Attack on Titan",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A survival support class that keeps squads alive with triage, signal discipline, and retreat routes. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j020_start",
                        "name": "Emergency Bandage Rush",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Scout Medic: a survival support class that keeps squads alive with triage, signal discipline, and retreat routes. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j020_start_yg_3",
                        "name": "Scout Medic: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Scout Medic. Starter job skill for Scout Medic: a survival support class that keeps squads alive with triage, signal discipline, and retreat routes. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden. YGGDRASIL growth: restores a portion of maximum MP.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j020_start_yg_5",
                        "name": "Scout Medic: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Hidden class technique for Scout Medic. Starter job skill for Scout Medic: a survival support class that keeps squads alive with triage, signal discipline, and retreat routes. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden. YGGDRASIL growth: hits every enemy in the encounter.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3,
                        "aoe": true
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "21": {
        "name": "Barrier Architect",
        "anime": "Jujutsu Kaisen",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A technical class that specializes in curtains, anti-entry rules, and battlefield geometry. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j021_start",
                        "name": "Curtain Edge Trap",
                        "type": "a",
                        "mp": 12,
                        "pow": 53,
                        "desc": "Starter job skill for Barrier Architect: a technical class that specializes in curtains, anti-entry rules, and battlefield geometry. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j021_start_yg_5",
                        "name": "Barrier Architect: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Barrier Architect. Starter job skill for Barrier Architect: a technical class that specializes in curtains, anti-entry rules, and battlefield geometry. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base. YGGDRASIL growth: lands as a three-hit combo.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true,
                        "hits": 3
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j021_yg_p10",
                        "name": "Barrier Architect: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "sp": 15,
                            "hp": 30,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Grants Bleed immunity and extra durability.",
                        "immune": [
                            "bleed"
                        ]
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j021_start_yg_15",
                        "name": "Barrier Architect: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Barrier Architect. Starter job skill for Barrier Architect: a technical class that specializes in curtains, anti-entry rules, and battlefield geometry. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "22": {
        "name": "Cursed Tool Duelist",
        "anime": "Jujutsu Kaisen",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A weapon class that channels cursed energy through blades, chains, staffs, and talismans. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j022_start",
                        "name": "Tool Resonance Cut",
                        "type": "a",
                        "mp": 10,
                        "pow": 38,
                        "desc": "Starter job skill for Cursed Tool Duelist: a weapon class that channels cursed energy through blades, chains, staffs, and talismans. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced.",
                        "execute": 0.35,
                        "st": "doom",
                        "sc": 0.16,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j022_start_yg_5",
                        "name": "Cursed Tool Duelist: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Cursed Tool Duelist. Starter job skill for Cursed Tool Duelist: a weapon class that channels cursed energy through blades, chains, staffs, and talismans. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced. YGGDRASIL growth: weakens enemy attack power.",
                        "execute": 0.35,
                        "st": "weaken",
                        "sc": 0.7,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j022_start_yg_10",
                        "name": "Cursed Tool Duelist: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Advanced class technique for Cursed Tool Duelist. Starter job skill for Cursed Tool Duelist: a weapon class that channels cursed energy through blades, chains, staffs, and talismans. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced. YGGDRASIL growth: raises Guard, reducing incoming damage.",
                        "execute": 0.35,
                        "st": "doom",
                        "sc": 0.16,
                        "mpRestorePct": 0.12,
                        "buf": "guard"
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "23": {
        "name": "Shikigami Handler",
        "anime": "Jujutsu Kaisen",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A summoner class that projects cursed familiars for tracking, shielding, and combo pressure. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 55,
            "mp": 55,
            "pa": 10,
            "pd": 9,
            "ag": 10,
            "ma": 10,
            "md": 8,
            "rs": 8,
            "sp": 8
        },
        "per_lv": {
            "hp": 4,
            "mp": 3,
            "pa": 2,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 1,
            "rs": 1,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j023_start",
                        "name": "Paper Fang Call",
                        "type": "a",
                        "mp": 10,
                        "pow": 36,
                        "desc": "Starter job skill for Shikigami Handler: a summoner class that projects cursed familiars for tracking, shielding, and combo pressure. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist.",
                        "buf": "focus",
                        "hits": 2,
                        "aoe": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j023_start_yg_5",
                        "name": "Shikigami Handler: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Shikigami Handler. Starter job skill for Shikigami Handler: a summoner class that projects cursed familiars for tracking, shielding, and combo pressure. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist. YGGDRASIL growth: can paralyze the enemy.",
                        "buf": "focus",
                        "hits": 2,
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j023_start_yg_10",
                        "name": "Shikigami Handler: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Specialist class technique for Shikigami Handler. Starter job skill for Shikigami Handler: a summoner class that projects cursed familiars for tracking, shielding, and combo pressure. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "buf": "regen",
                        "hits": 2,
                        "aoe": true
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "24": {
        "name": "Reverse Technique Medic",
        "anime": "Jujutsu Kaisen",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A rare healing class that converts cursed energy into positive restoration under fire. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j024_start",
                        "name": "Positive Pulse Stitch",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Reverse Technique Medic: a rare healing class that converts cursed energy into positive restoration under fire. Unique effect: drains HP, grants regen. YGGDRASIL growth: weakens enemy attack power. Class path: Rare.",
                        "buf": "regen",
                        "drain": true,
                        "st": "weaken",
                        "sc": 0.7
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j024_start_yg_3",
                        "name": "Reverse Technique Medic: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Reverse Technique Medic. Starter job skill for Reverse Technique Medic: a rare healing class that converts cursed energy into positive restoration under fire. Unique effect: drains HP, grants regen. YGGDRASIL growth: weakens enemy attack power. Class path: Rare.",
                        "buf": "regen",
                        "drain": true,
                        "st": "weaken",
                        "sc": 0.7
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j024_yg_p5",
                        "name": "Reverse Technique Medic: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 20,
                            "ma": 20,
                            "md": 10,
                            "pa": 10,
                            "rs": 5
                        },
                        "desc": "Passive YGGDRASIL growth from the Rare class path. Balanced combat scaling improves physical, magical, and resistance growth."
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Jujutsu Kaisen",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "25": {
        "name": "Simple Domain Guard",
        "anime": "Jujutsu Kaisen",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A defensive anti-domain class that survives sure-hit pressure with compact neutral zones. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 90,
            "mp": 35,
            "pa": 8,
            "pd": 18,
            "ag": 4,
            "ma": 4,
            "md": 13,
            "rs": 12,
            "sp": 5
        },
        "per_lv": {
            "hp": 6,
            "mp": 2,
            "pa": 1,
            "pd": 3,
            "ag": 0,
            "ma": 1,
            "md": 2,
            "rs": 2,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j025_start",
                        "name": "Domain Guard Stance",
                        "type": "a",
                        "mp": 10,
                        "pow": 34,
                        "desc": "Starter job skill for Simple Domain Guard: a defensive anti-domain class that survives sure-hit pressure with compact neutral zones. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden.",
                        "st": "doom",
                        "sc": 0.16
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j025_start_yg_3",
                        "name": "Simple Domain Guard: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Simple Domain Guard. Starter job skill for Simple Domain Guard: a defensive anti-domain class that survives sure-hit pressure with compact neutral zones. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden. YGGDRASIL growth: can paralyze the enemy.",
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j025_start_yg_5",
                        "name": "Simple Domain Guard: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Hidden class technique for Simple Domain Guard. Starter job skill for Simple Domain Guard: a defensive anti-domain class that survives sure-hit pressure with compact neutral zones. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden. YGGDRASIL growth: marks the enemy, increasing damage they take.",
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "26": {
        "name": "Ki Striker",
        "anime": "Dragon Ball Z",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A martial class that reinforces punches and kicks with explosive ki timing. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j026_start",
                        "name": "Meteor Knee Burst",
                        "type": "a",
                        "mp": 10,
                        "pow": 38,
                        "desc": "Starter job skill for Ki Striker: a martial class that reinforces punches and kicks with explosive ki timing. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base.",
                        "buf": "thorns",
                        "st": "fear",
                        "sc": 0.42,
                        "hits": 3
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j026_start_yg_5",
                        "name": "Ki Striker: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Ki Striker. Starter job skill for Ki Striker: a martial class that reinforces punches and kicks with explosive ki timing. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base. YGGDRASIL growth: opens a vulnerable point for follow-up attacks.",
                        "buf": "thorns",
                        "st": "vulnerable",
                        "sc": 0.65,
                        "hits": 3
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j026_yg_p10",
                        "name": "Ki Striker: Class Mastery",
                        "type": "p",
                        "bon": {
                            "hp": 35,
                            "pa": 15,
                            "ag": 15,
                            "sp": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Recruit assists deal +18% damage or support power.",
                        "summonBoost": 0.18
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j026_start_yg_15",
                        "name": "Ki Striker: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Ki Striker. Starter job skill for Ki Striker: a martial class that reinforces punches and kicks with explosive ki timing. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base.",
                        "buf": "thorns",
                        "st": "fear",
                        "sc": 0.42,
                        "hits": 3
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "27": {
        "name": "Energy Blaster",
        "anime": "Dragon Ball Z",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A ranged ki class that specializes in beams, volleys, and charged sphere attacks. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 35,
            "mp": 85,
            "pa": 3,
            "pd": 5,
            "ag": 7,
            "ma": 16,
            "md": 9,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 2,
            "mp": 5,
            "pa": 0,
            "pd": 1,
            "ag": 1,
            "ma": 3,
            "md": 2,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j027_start",
                        "name": "Ki Volley Spark",
                        "type": "a",
                        "mp": 12,
                        "pow": 36,
                        "desc": "Starter job skill for Energy Blaster: a ranged ki class that specializes in beams, volleys, and charged sphere attacks. Unique effect: hits all enemies, can inflict confusion. YGGDRASIL growth: can paralyze the enemy. Class path: Advanced.",
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j027_start_yg_5",
                        "name": "Energy Blaster: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Energy Blaster. Starter job skill for Energy Blaster: a ranged ki class that specializes in beams, volleys, and charged sphere attacks. Unique effect: hits all enemies, can inflict confusion. YGGDRASIL growth: can paralyze the enemy. Class path: Advanced. YGGDRASIL growth: raises Guard, reducing incoming damage.",
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45,
                        "buf": "guard"
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j027_yg_p10",
                        "name": "Energy Blaster: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "md": 15,
                            "sp": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Advanced class path. Crafting knowledge grants 10% shop discounts.",
                        "craftDiscount": 0.1
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "28": {
        "name": "Martial Monk",
        "anime": "Dragon Ball Z",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A disciplined speed class built around footwork, counters, and pressure-point strikes. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j028_start",
                        "name": "Afterimage Palm",
                        "type": "a",
                        "mp": 10,
                        "pow": 0,
                        "desc": "Starter job skill for Martial Monk: a disciplined speed class built around footwork, counters, and pressure-point strikes. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist.",
                        "heal": 0.16,
                        "buf": "bravery",
                        "mpRestorePct": 0.08,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j028_start_yg_5",
                        "name": "Martial Monk: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Martial Monk. Starter job skill for Martial Monk: a disciplined speed class built around footwork, counters, and pressure-point strikes. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "heal": 0.16,
                        "buf": "regen",
                        "mpRestorePct": 0.08,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j028_start_yg_10",
                        "name": "Martial Monk: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Specialist class technique for Martial Monk. Starter job skill for Martial Monk: a disciplined speed class built around footwork, counters, and pressure-point strikes. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist. YGGDRASIL growth: restores a portion of maximum MP.",
                        "heal": 0.16,
                        "buf": "bravery",
                        "mpRestorePct": 0.12,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "29": {
        "name": "Capsule Engineer",
        "anime": "Dragon Ball Z",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A gadget class using capsule gear, drones, gravity tech, and combat tools. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j029_start",
                        "name": "Capsule Turret Pop",
                        "type": "a",
                        "mp": 12,
                        "pow": 34,
                        "desc": "Starter job skill for Capsule Engineer: a gadget class using capsule gear, drones, gravity tech, and combat tools. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "guard"
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j029_start_yg_3",
                        "name": "Capsule Engineer: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Capsule Engineer. Starter job skill for Capsule Engineer: a gadget class using capsule gear, drones, gravity tech, and combat tools. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "guard"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j029_start_yg_5",
                        "name": "Capsule Engineer: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Rare class technique for Capsule Engineer. Starter job skill for Capsule Engineer: a gadget class using capsule gear, drones, gravity tech, and combat tools. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare. YGGDRASIL growth: grants Focus for improved offense.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "focus"
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Dragon Ball Z",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "30": {
        "name": "Fusion Dancer",
        "anime": "Dragon Ball Z",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A synchronized class that builds power through rhythm, timing, and partner-style combo forms. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 55,
            "mp": 55,
            "pa": 10,
            "pd": 9,
            "ag": 10,
            "ma": 10,
            "md": 8,
            "rs": 8,
            "sp": 8
        },
        "per_lv": {
            "hp": 4,
            "mp": 3,
            "pa": 2,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 1,
            "rs": 1,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j030_start",
                        "name": "Fusion Rhythm Kick",
                        "type": "a",
                        "mp": 10,
                        "pow": 36,
                        "desc": "Starter job skill for Fusion Dancer: a synchronized class that builds power through rhythm, timing, and partner-style combo forms. Unique effect: can inflict bleed. YGGDRASIL growth: grants Focus for improved offense. Class path: Hidden.",
                        "hits": 2,
                        "st": "bleed",
                        "sc": 0.46,
                        "buf": "focus"
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j030_start_yg_3",
                        "name": "Fusion Dancer: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Fusion Dancer. Starter job skill for Fusion Dancer: a synchronized class that builds power through rhythm, timing, and partner-style combo forms. Unique effect: can inflict bleed. YGGDRASIL growth: grants Focus for improved offense. Class path: Hidden. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "hits": 2,
                        "st": "bleed",
                        "sc": 0.46,
                        "buf": "regen"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j030_yg_p5",
                        "name": "Fusion Dancer: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 40,
                            "pa": 10,
                            "ag": 10,
                            "ma": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Hidden class path. Purchased spells deal +12% damage.",
                        "spellBoost": 0.12
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "31": {
        "name": "Elemental Caster",
        "anime": "Fairy Tail",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A guild mage class that shapes fire, ice, wind, or lightning into flexible battle spells. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 35,
            "mp": 85,
            "pa": 3,
            "pd": 5,
            "ag": 7,
            "ma": 16,
            "md": 9,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 2,
            "mp": 5,
            "pa": 0,
            "pd": 1,
            "ag": 1,
            "ma": 3,
            "md": 2,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j031_start",
                        "name": "Guild Flame Bolt",
                        "type": "a",
                        "mp": 12,
                        "pow": 36,
                        "desc": "Starter job skill for Elemental Caster: a guild mage class that shapes fire, ice, wind, or lightning into flexible battle spells. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j031_start_yg_5",
                        "name": "Elemental Caster: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Elemental Caster. Starter job skill for Elemental Caster: a guild mage class that shapes fire, ice, wind, or lightning into flexible battle spells. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base. YGGDRASIL growth: drains HP from damage dealt.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j031_yg_p10",
                        "name": "Elemental Caster: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "md": 15,
                            "hp": 30,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Grants Bleed immunity and extra durability.",
                        "immune": [
                            "bleed"
                        ]
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j031_start_yg_15",
                        "name": "Elemental Caster: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Elemental Caster. Starter job skill for Elemental Caster: a guild mage class that shapes fire, ice, wind, or lightning into flexible battle spells. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "32": {
        "name": "Requip Knight",
        "anime": "Fairy Tail",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A weapon-switching class that swaps armor and blades to fit the fight. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j032_start",
                        "name": "Requip Flash Blade",
                        "type": "a",
                        "mp": 10,
                        "pow": 38,
                        "desc": "Starter job skill for Requip Knight: a weapon-switching class that swaps armor and blades to fit the fight. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.41,
                        "buf": "regen"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j032_start_yg_5",
                        "name": "Requip Knight: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Requip Knight. Starter job skill for Requip Knight: a weapon-switching class that swaps armor and blades to fit the fight. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced. YGGDRASIL growth: cleanses negative effects from the user.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.41,
                        "buf": "regen",
                        "cleanse": true
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j032_start_yg_10",
                        "name": "Requip Knight: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Advanced class technique for Requip Knight. Starter job skill for Requip Knight: a weapon-switching class that swaps armor and blades to fit the fight. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced. YGGDRASIL growth: weakens enemy attack power.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.7,
                        "buf": "regen"
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "33": {
        "name": "Script Mage",
        "anime": "Fairy Tail",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A rune-writing class that traps targets with letters, rules, and written commands. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j033_start",
                        "name": "Rune Letter Bind",
                        "type": "a",
                        "mp": 12,
                        "pow": 34,
                        "desc": "Starter job skill for Script Mage: a rune-writing class that traps targets with letters, rules, and written commands. Unique effect: grants guard, can inflict marked. YGGDRASIL growth: wraps the user in counter-damage thorns. Class path: Specialist.",
                        "buf": "thorns",
                        "st": "marked",
                        "sc": 0.6
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j033_start_yg_5",
                        "name": "Script Mage: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Script Mage. Starter job skill for Script Mage: a rune-writing class that traps targets with letters, rules, and written commands. Unique effect: grants guard, can inflict marked. YGGDRASIL growth: wraps the user in counter-damage thorns. Class path: Specialist. YGGDRASIL growth: restores a portion of maximum MP.",
                        "buf": "thorns",
                        "st": "marked",
                        "sc": 0.6,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j033_yg_p10",
                        "name": "Script Mage: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "sp": 15,
                            "pa": 8,
                            "rs": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Specialist class path. Grants Fear immunity and fighting spirit.",
                        "immune": [
                            "fear"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "34": {
        "name": "Celestial Contractor",
        "anime": "Fairy Tail",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A key-bearing contract class that calls allies through gates without being a spirit race. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j034_start",
                        "name": "Silver Key Assist",
                        "type": "a",
                        "mp": 12,
                        "pow": 0,
                        "desc": "Starter job skill for Celestial Contractor: a key-bearing contract class that calls allies through gates without being a spirit race. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare.",
                        "heal": 0.18,
                        "cleanse": true
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j034_start_yg_3",
                        "name": "Celestial Contractor: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Celestial Contractor. Starter job skill for Celestial Contractor: a key-bearing contract class that calls allies through gates without being a spirit race. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare.",
                        "heal": 0.18,
                        "cleanse": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j034_start_yg_5",
                        "name": "Celestial Contractor: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Rare class technique for Celestial Contractor. Starter job skill for Celestial Contractor: a key-bearing contract class that calls allies through gates without being a spirit race. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare. YGGDRASIL growth: pays HP for an execution strike against weakened enemies.",
                        "heal": 0.18,
                        "cleanse": true,
                        "hpCostPct": 0.08,
                        "execute": 0.3
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Fairy Tail",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "35": {
        "name": "Guild Tactician",
        "anime": "Fairy Tail",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A teamwork class that buffs allies, reads enemies, and turns guild bonds into power. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j035_start",
                        "name": "Fairy Rally Call",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Guild Tactician: a teamwork class that buffs allies, reads enemies, and turns guild bonds into power. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j035_start_yg_3",
                        "name": "Guild Tactician: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Guild Tactician. Starter job skill for Guild Tactician: a teamwork class that buffs allies, reads enemies, and turns guild bonds into power. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden. YGGDRASIL growth: restores a portion of maximum MP.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j035_start_yg_5",
                        "name": "Guild Tactician: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Hidden class technique for Guild Tactician. Starter job skill for Guild Tactician: a teamwork class that buffs allies, reads enemies, and turns guild bonds into power. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden. YGGDRASIL growth: hits every enemy in the encounter.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3,
                        "aoe": true
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "36": {
        "name": "Telekinetic Bruiser",
        "anime": "Mob Psycho 100",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A psychic combat class that throws debris, compresses force, and slams targets with invisible hands. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 35,
            "mp": 85,
            "pa": 3,
            "pd": 5,
            "ag": 7,
            "ma": 16,
            "md": 9,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 2,
            "mp": 5,
            "pa": 0,
            "pd": 1,
            "ag": 1,
            "ma": 3,
            "md": 2,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j036_start",
                        "name": "Psychic Hammer Toss",
                        "type": "a",
                        "mp": 12,
                        "pow": 55,
                        "desc": "Starter job skill for Telekinetic Bruiser: a psychic combat class that throws debris, compresses force, and slams targets with invisible hands. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j036_start_yg_5",
                        "name": "Telekinetic Bruiser: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Telekinetic Bruiser. Starter job skill for Telekinetic Bruiser: a psychic combat class that throws debris, compresses force, and slams targets with invisible hands. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base. YGGDRASIL growth: lands as a three-hit combo.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true,
                        "hits": 3
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j036_yg_p10",
                        "name": "Telekinetic Bruiser: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "md": 15,
                            "sp": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Recruit assists deal +18% damage or support power.",
                        "summonBoost": 0.18
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j036_start_yg_15",
                        "name": "Telekinetic Bruiser: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Telekinetic Bruiser. Starter job skill for Telekinetic Bruiser: a psychic combat class that throws debris, compresses force, and slams targets with invisible hands. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "37": {
        "name": "Spirit Medium",
        "anime": "Mob Psycho 100",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A channeling class that negotiates with, purifies, and borrows power from spirits. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j037_start",
                        "name": "Medium Seal Clap",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Spirit Medium: a channeling class that negotiates with, purifies, and borrows power from spirits. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced.",
                        "execute": 0.35,
                        "st": "doom",
                        "sc": 0.16,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j037_start_yg_5",
                        "name": "Spirit Medium: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Spirit Medium. Starter job skill for Spirit Medium: a channeling class that negotiates with, purifies, and borrows power from spirits. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced. YGGDRASIL growth: weakens enemy attack power.",
                        "execute": 0.35,
                        "st": "weaken",
                        "sc": 0.7,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j037_start_yg_10",
                        "name": "Spirit Medium: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Advanced class technique for Spirit Medium. Starter job skill for Spirit Medium: a channeling class that negotiates with, purifies, and borrows power from spirits. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced. YGGDRASIL growth: raises Guard, reducing incoming damage.",
                        "execute": 0.35,
                        "st": "doom",
                        "sc": 0.16,
                        "mpRestorePct": 0.12,
                        "buf": "guard"
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "38": {
        "name": "Emotion Channeler",
        "anime": "Mob Psycho 100",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A volatile class whose power spikes when emotion crosses controlled thresholds. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 55,
            "mp": 55,
            "pa": 10,
            "pd": 9,
            "ag": 10,
            "ma": 10,
            "md": 8,
            "rs": 8,
            "sp": 8
        },
        "per_lv": {
            "hp": 4,
            "mp": 3,
            "pa": 2,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 1,
            "rs": 1,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j038_start",
                        "name": "Emotion Pressure Wave",
                        "type": "a",
                        "mp": 10,
                        "pow": 36,
                        "desc": "Starter job skill for Emotion Channeler: a volatile class whose power spikes when emotion crosses controlled thresholds. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist.",
                        "buf": "focus",
                        "hits": 2,
                        "aoe": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j038_start_yg_5",
                        "name": "Emotion Channeler: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Emotion Channeler. Starter job skill for Emotion Channeler: a volatile class whose power spikes when emotion crosses controlled thresholds. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist. YGGDRASIL growth: can paralyze the enemy.",
                        "buf": "focus",
                        "hits": 2,
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j038_start_yg_10",
                        "name": "Emotion Channeler: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Specialist class technique for Emotion Channeler. Starter job skill for Emotion Channeler: a volatile class whose power spikes when emotion crosses controlled thresholds. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "buf": "regen",
                        "hits": 2,
                        "aoe": true
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "39": {
        "name": "Exorcism Counselor",
        "anime": "Mob Psycho 100",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A calm support class that combines talk-down tactics with practical purification. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j039_start",
                        "name": "Salt Circle Tap",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Exorcism Counselor: a calm support class that combines talk-down tactics with practical purification. Unique effect: drains HP, grants regen. YGGDRASIL growth: weakens enemy attack power. Class path: Rare.",
                        "buf": "regen",
                        "drain": true,
                        "st": "weaken",
                        "sc": 0.7
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j039_start_yg_3",
                        "name": "Exorcism Counselor: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Exorcism Counselor. Starter job skill for Exorcism Counselor: a calm support class that combines talk-down tactics with practical purification. Unique effect: drains HP, grants regen. YGGDRASIL growth: weakens enemy attack power. Class path: Rare.",
                        "buf": "regen",
                        "drain": true,
                        "st": "weaken",
                        "sc": 0.7
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j039_yg_p5",
                        "name": "Exorcism Counselor: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 20,
                            "ma": 18,
                            "md": 10,
                            "rs": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Rare class path. Grants Confusion immunity and mental clarity.",
                        "immune": [
                            "confusion"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Mob Psycho 100",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "40": {
        "name": "Aura Barrier Adept",
        "anime": "Mob Psycho 100",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A defensive psychic class that layers barriers, cushions impacts, and reflects pressure. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 90,
            "mp": 35,
            "pa": 8,
            "pd": 18,
            "ag": 4,
            "ma": 4,
            "md": 13,
            "rs": 12,
            "sp": 5
        },
        "per_lv": {
            "hp": 6,
            "mp": 2,
            "pa": 1,
            "pd": 3,
            "ag": 0,
            "ma": 1,
            "md": 2,
            "rs": 2,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j040_start",
                        "name": "Barrier Rebound Knuckle",
                        "type": "a",
                        "mp": 10,
                        "pow": 34,
                        "desc": "Starter job skill for Aura Barrier Adept: a defensive psychic class that layers barriers, cushions impacts, and reflects pressure. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden.",
                        "st": "doom",
                        "sc": 0.16
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j040_start_yg_3",
                        "name": "Aura Barrier Adept: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Aura Barrier Adept. Starter job skill for Aura Barrier Adept: a defensive psychic class that layers barriers, cushions impacts, and reflects pressure. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden. YGGDRASIL growth: can paralyze the enemy.",
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j040_start_yg_5",
                        "name": "Aura Barrier Adept: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Hidden class technique for Aura Barrier Adept. Starter job skill for Aura Barrier Adept: a defensive psychic class that layers barriers, cushions impacts, and reflects pressure. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden. YGGDRASIL growth: marks the enemy, increasing damage they take.",
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "41": {
        "name": "Breath Blade Adept",
        "anime": "Demon Slayer",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A sword class that trains breathing forms as techniques rather than a racial identity. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j041_start",
                        "name": "First Form Flow Cut",
                        "type": "a",
                        "mp": 10,
                        "pow": 35,
                        "desc": "Starter job skill for Breath Blade Adept: a sword class that trains breathing forms as techniques rather than a racial identity. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base.",
                        "buf": "thorns",
                        "st": "fear",
                        "sc": 0.42,
                        "hits": 3
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j041_start_yg_5",
                        "name": "Breath Blade Adept: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Breath Blade Adept. Starter job skill for Breath Blade Adept: a sword class that trains breathing forms as techniques rather than a racial identity. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base. YGGDRASIL growth: opens a vulnerable point for follow-up attacks.",
                        "buf": "thorns",
                        "st": "vulnerable",
                        "sc": 0.65,
                        "hits": 3
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j041_yg_p10",
                        "name": "Breath Blade Adept: Class Mastery",
                        "type": "p",
                        "bon": {
                            "pa": 15,
                            "ag": 15,
                            "hp": 30,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Grants Bleed immunity and extra durability.",
                        "immune": [
                            "bleed"
                        ]
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j041_start_yg_15",
                        "name": "Breath Blade Adept: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Breath Blade Adept. Starter job skill for Breath Blade Adept: a sword class that trains breathing forms as techniques rather than a racial identity. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base.",
                        "buf": "thorns",
                        "st": "fear",
                        "sc": 0.42,
                        "hits": 3
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "42": {
        "name": "Poison Alchemist",
        "anime": "Demon Slayer",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A preparation class using wisteria compounds, coated needles, and anti-demon toxins. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j042_start",
                        "name": "Wisteria Needle Flick",
                        "type": "a",
                        "mp": 12,
                        "pow": 34,
                        "desc": "Starter job skill for Poison Alchemist: a preparation class using wisteria compounds, coated needles, and anti-demon toxins. Unique effect: hits all enemies, can inflict confusion. YGGDRASIL growth: can paralyze the enemy. Class path: Advanced.",
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j042_start_yg_5",
                        "name": "Poison Alchemist: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Poison Alchemist. Starter job skill for Poison Alchemist: a preparation class using wisteria compounds, coated needles, and anti-demon toxins. Unique effect: hits all enemies, can inflict confusion. YGGDRASIL growth: can paralyze the enemy. Class path: Advanced. YGGDRASIL growth: raises Guard, reducing incoming damage.",
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45,
                        "buf": "guard"
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j042_yg_p10",
                        "name": "Poison Alchemist: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "sp": 15,
                            "md": 8,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Advanced class path. Grants Burn immunity and magic resistance.",
                        "immune": [
                            "burn"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "43": {
        "name": "Kasugai Scout",
        "anime": "Demon Slayer",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A reconnaissance class built around crows, terrain reading, and quick message tactics. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j043_start",
                        "name": "Crow Signal Feint",
                        "type": "a",
                        "mp": 10,
                        "pow": 0,
                        "desc": "Starter job skill for Kasugai Scout: a reconnaissance class built around crows, terrain reading, and quick message tactics. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist.",
                        "heal": 0.16,
                        "buf": "bravery",
                        "mpRestorePct": 0.08,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j043_start_yg_5",
                        "name": "Kasugai Scout: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Kasugai Scout. Starter job skill for Kasugai Scout: a reconnaissance class built around crows, terrain reading, and quick message tactics. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "heal": 0.16,
                        "buf": "regen",
                        "mpRestorePct": 0.08,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j043_start_yg_10",
                        "name": "Kasugai Scout: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Specialist class technique for Kasugai Scout. Starter job skill for Kasugai Scout: a reconnaissance class built around crows, terrain reading, and quick message tactics. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist. YGGDRASIL growth: restores a portion of maximum MP.",
                        "heal": 0.16,
                        "buf": "bravery",
                        "mpRestorePct": 0.12,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "44": {
        "name": "Nichirin Smith",
        "anime": "Demon Slayer",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A craftsman defender class that reinforces blades, repairs gear, and fights with forge tools. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 90,
            "mp": 35,
            "pa": 8,
            "pd": 18,
            "ag": 4,
            "ma": 4,
            "md": 13,
            "rs": 12,
            "sp": 5
        },
        "per_lv": {
            "hp": 6,
            "mp": 2,
            "pa": 1,
            "pd": 3,
            "ag": 0,
            "ma": 1,
            "md": 2,
            "rs": 2,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j044_start",
                        "name": "Red Ore Hammerfall",
                        "type": "a",
                        "mp": 10,
                        "pow": 34,
                        "desc": "Starter job skill for Nichirin Smith: a craftsman defender class that reinforces blades, repairs gear, and fights with forge tools. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "guard"
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j044_start_yg_3",
                        "name": "Nichirin Smith: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Nichirin Smith. Starter job skill for Nichirin Smith: a craftsman defender class that reinforces blades, repairs gear, and fights with forge tools. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "guard"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j044_start_yg_5",
                        "name": "Nichirin Smith: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Rare class technique for Nichirin Smith. Starter job skill for Nichirin Smith: a craftsman defender class that reinforces blades, repairs gear, and fights with forge tools. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare. YGGDRASIL growth: grants Focus for improved offense.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "focus"
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Demon Slayer",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "45": {
        "name": "Field Kakushi Medic",
        "anime": "Demon Slayer",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A rescue class that evacuates allies, treats wounds, and stabilizes hunters after battle. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j045_start",
                        "name": "Kakushi Recovery Wrap",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Field Kakushi Medic: a rescue class that evacuates allies, treats wounds, and stabilizes hunters after battle. Unique effect: can inflict bleed. YGGDRASIL growth: grants Focus for improved offense. Class path: Hidden.",
                        "hits": 2,
                        "st": "bleed",
                        "sc": 0.46,
                        "buf": "focus"
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j045_start_yg_3",
                        "name": "Field Kakushi Medic: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Field Kakushi Medic. Starter job skill for Field Kakushi Medic: a rescue class that evacuates allies, treats wounds, and stabilizes hunters after battle. Unique effect: can inflict bleed. YGGDRASIL growth: grants Focus for improved offense. Class path: Hidden. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "hits": 2,
                        "st": "bleed",
                        "sc": 0.46,
                        "buf": "regen"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j045_yg_p5",
                        "name": "Field Kakushi Medic: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 20,
                            "ma": 10,
                            "md": 10,
                            "rs": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Hidden class path. Grants Poison immunity and extra RESIST.",
                        "immune": [
                            "poison"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "46": {
        "name": "Tomb Strategist",
        "anime": "Overlord",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A command class that controls formations, traps, and floor-style battle plans. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j046_start",
                        "name": "Floor Trap Directive",
                        "type": "a",
                        "mp": 12,
                        "pow": 34,
                        "desc": "Starter job skill for Tomb Strategist: a command class that controls formations, traps, and floor-style battle plans. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j046_start_yg_5",
                        "name": "Tomb Strategist: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Tomb Strategist. Starter job skill for Tomb Strategist: a command class that controls formations, traps, and floor-style battle plans. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base. YGGDRASIL growth: drains HP from damage dealt.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j046_yg_p10",
                        "name": "Tomb Strategist: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "sp": 23
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Recruit assists deal +18% damage or support power.",
                        "summonBoost": 0.18
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j046_start_yg_15",
                        "name": "Tomb Strategist: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Tomb Strategist. Starter job skill for Tomb Strategist: a command class that controls formations, traps, and floor-style battle plans. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "47": {
        "name": "Guild Artificer",
        "anime": "Overlord",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A crafting mage class that channels enchantments through relics, scrolls, and prepared items. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 35,
            "mp": 85,
            "pa": 3,
            "pd": 5,
            "ag": 7,
            "ma": 16,
            "md": 9,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 2,
            "mp": 5,
            "pa": 0,
            "pd": 1,
            "ag": 1,
            "ma": 3,
            "md": 2,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j047_start",
                        "name": "Runed Relic Bolt",
                        "type": "a",
                        "mp": 12,
                        "pow": 36,
                        "desc": "Starter job skill for Guild Artificer: a crafting mage class that channels enchantments through relics, scrolls, and prepared items. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.41,
                        "buf": "regen"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j047_start_yg_5",
                        "name": "Guild Artificer: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Guild Artificer. Starter job skill for Guild Artificer: a crafting mage class that channels enchantments through relics, scrolls, and prepared items. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced. YGGDRASIL growth: cleanses negative effects from the user.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.41,
                        "buf": "regen",
                        "cleanse": true
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j047_start_yg_10",
                        "name": "Guild Artificer: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Advanced class technique for Guild Artificer. Starter job skill for Guild Artificer: a crafting mage class that channels enchantments through relics, scrolls, and prepared items. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced. YGGDRASIL growth: weakens enemy attack power.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.7,
                        "buf": "regen"
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "48": {
        "name": "Battle Maid",
        "anime": "Overlord",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A polished combat servant class using discipline, hidden weapons, and flawless positioning. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j048_start",
                        "name": "Maid Flash Service",
                        "type": "a",
                        "mp": 10,
                        "pow": 35,
                        "desc": "Starter job skill for Battle Maid: a polished combat servant class using discipline, hidden weapons, and flawless positioning. Unique effect: grants guard, can inflict marked. YGGDRASIL growth: wraps the user in counter-damage thorns. Class path: Specialist.",
                        "buf": "thorns",
                        "st": "marked",
                        "sc": 0.6
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j048_start_yg_5",
                        "name": "Battle Maid: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Battle Maid. Starter job skill for Battle Maid: a polished combat servant class using discipline, hidden weapons, and flawless positioning. Unique effect: grants guard, can inflict marked. YGGDRASIL growth: wraps the user in counter-damage thorns. Class path: Specialist. YGGDRASIL growth: restores a portion of maximum MP.",
                        "buf": "thorns",
                        "st": "marked",
                        "sc": 0.6,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j048_yg_p10",
                        "name": "Battle Maid: Class Mastery",
                        "type": "p",
                        "bon": {
                            "pa": 15,
                            "ag": 21,
                            "sp": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Specialist class path. Detection utility reveals hidden-class prerequisites more clearly.",
                        "detection": 1
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "49": {
        "name": "Dark Ritualist",
        "anime": "Overlord",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A spell class that uses circles, sacrifices, and negative energy rituals. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 35,
            "mp": 85,
            "pa": 3,
            "pd": 5,
            "ag": 7,
            "ma": 16,
            "md": 9,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 2,
            "mp": 5,
            "pa": 0,
            "pd": 1,
            "ag": 1,
            "ma": 3,
            "md": 2,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j049_start",
                        "name": "Negative Altar Hex",
                        "type": "a",
                        "mp": 12,
                        "pow": 0,
                        "desc": "Starter job skill for Dark Ritualist: a spell class that uses circles, sacrifices, and negative energy rituals. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare.",
                        "heal": 0.18,
                        "cleanse": true
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j049_start_yg_3",
                        "name": "Dark Ritualist: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Dark Ritualist. Starter job skill for Dark Ritualist: a spell class that uses circles, sacrifices, and negative energy rituals. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare.",
                        "heal": 0.18,
                        "cleanse": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j049_start_yg_5",
                        "name": "Dark Ritualist: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Rare class technique for Dark Ritualist. Starter job skill for Dark Ritualist: a spell class that uses circles, sacrifices, and negative energy rituals. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare. YGGDRASIL growth: pays HP for an execution strike against weakened enemies.",
                        "heal": 0.18,
                        "cleanse": true,
                        "hpCostPct": 0.08,
                        "execute": 0.3
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Overlord",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "50": {
        "name": "Guardian Commander",
        "anime": "Overlord",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A front-line command class that protects allies with orders, shields, and intimidation. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 90,
            "mp": 35,
            "pa": 8,
            "pd": 18,
            "ag": 4,
            "ma": 4,
            "md": 13,
            "rs": 12,
            "sp": 5
        },
        "per_lv": {
            "hp": 6,
            "mp": 2,
            "pa": 1,
            "pd": 3,
            "ag": 0,
            "ma": 1,
            "md": 2,
            "rs": 2,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j050_start",
                        "name": "Guardian Line Break",
                        "type": "a",
                        "mp": 10,
                        "pow": 34,
                        "desc": "Starter job skill for Guardian Commander: a front-line command class that protects allies with orders, shields, and intimidation. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j050_start_yg_3",
                        "name": "Guardian Commander: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Guardian Commander. Starter job skill for Guardian Commander: a front-line command class that protects allies with orders, shields, and intimidation. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden. YGGDRASIL growth: restores a portion of maximum MP.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j050_start_yg_5",
                        "name": "Guardian Commander: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Hidden class technique for Guardian Commander. Starter job skill for Guardian Commander: a front-line command class that protects allies with orders, shields, and intimidation. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden. YGGDRASIL growth: hits every enemy in the encounter.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3,
                        "aoe": true
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "51": {
        "name": "Rescue Hero",
        "anime": "My Hero Academia",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A professional rescue role focused on evacuation, shields, mobility, and civilian protection. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j051_start",
                        "name": "Rescue Tape Pull",
                        "type": "a",
                        "mp": 12,
                        "pow": 52,
                        "desc": "Starter job skill for Rescue Hero: a professional rescue role focused on evacuation, shields, mobility, and civilian protection. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j051_start_yg_5",
                        "name": "Rescue Hero: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Rescue Hero. Starter job skill for Rescue Hero: a professional rescue role focused on evacuation, shields, mobility, and civilian protection. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base. YGGDRASIL growth: lands as a three-hit combo.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true,
                        "hits": 3
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j051_yg_p10",
                        "name": "Rescue Hero: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "md": 15,
                            "hp": 30,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Grants Bleed immunity and extra durability.",
                        "immune": [
                            "bleed"
                        ]
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j051_start_yg_15",
                        "name": "Rescue Hero: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Rescue Hero. Starter job skill for Rescue Hero: a professional rescue role focused on evacuation, shields, mobility, and civilian protection. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "52": {
        "name": "Combat Hero",
        "anime": "My Hero Academia",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A front-line hero role trained to end villain threats with controlled force. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j052_start",
                        "name": "Plus Ultra Jab",
                        "type": "a",
                        "mp": 10,
                        "pow": 38,
                        "desc": "Starter job skill for Combat Hero: a front-line hero role trained to end villain threats with controlled force. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced.",
                        "execute": 0.35,
                        "st": "doom",
                        "sc": 0.16,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j052_start_yg_5",
                        "name": "Combat Hero: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Combat Hero. Starter job skill for Combat Hero: a front-line hero role trained to end villain threats with controlled force. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced. YGGDRASIL growth: weakens enemy attack power.",
                        "execute": 0.35,
                        "st": "weaken",
                        "sc": 0.7,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j052_start_yg_10",
                        "name": "Combat Hero: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Advanced class technique for Combat Hero. Starter job skill for Combat Hero: a front-line hero role trained to end villain threats with controlled force. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced. YGGDRASIL growth: raises Guard, reducing incoming damage.",
                        "execute": 0.35,
                        "st": "doom",
                        "sc": 0.16,
                        "mpRestorePct": 0.12,
                        "buf": "guard"
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "53": {
        "name": "Underground Agent",
        "anime": "My Hero Academia",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A covert hero role using stealth, capture weapons, and ambush restraint. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j053_start",
                        "name": "Capture Cloth Snare",
                        "type": "a",
                        "mp": 10,
                        "pow": 35,
                        "desc": "Starter job skill for Underground Agent: a covert hero role using stealth, capture weapons, and ambush restraint. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist.",
                        "buf": "focus",
                        "hits": 2,
                        "aoe": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j053_start_yg_5",
                        "name": "Underground Agent: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Underground Agent. Starter job skill for Underground Agent: a covert hero role using stealth, capture weapons, and ambush restraint. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist. YGGDRASIL growth: can paralyze the enemy.",
                        "buf": "focus",
                        "hits": 2,
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j053_start_yg_10",
                        "name": "Underground Agent: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Specialist class technique for Underground Agent. Starter job skill for Underground Agent: a covert hero role using stealth, capture weapons, and ambush restraint. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "buf": "regen",
                        "hits": 2,
                        "aoe": true
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "54": {
        "name": "Support Inventor",
        "anime": "My Hero Academia",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A gear-focused role that fights with drones, braces, launchers, and emergency gadgets. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j054_start",
                        "name": "Gadget Burst Launcher",
                        "type": "a",
                        "mp": 12,
                        "pow": 34,
                        "desc": "Starter job skill for Support Inventor: a gear-focused role that fights with drones, braces, launchers, and emergency gadgets. Unique effect: drains HP, grants regen. YGGDRASIL growth: weakens enemy attack power. Class path: Rare.",
                        "buf": "regen",
                        "drain": true,
                        "st": "weaken",
                        "sc": 0.7
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j054_start_yg_3",
                        "name": "Support Inventor: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Support Inventor. Starter job skill for Support Inventor: a gear-focused role that fights with drones, braces, launchers, and emergency gadgets. Unique effect: drains HP, grants regen. YGGDRASIL growth: weakens enemy attack power. Class path: Rare.",
                        "buf": "regen",
                        "drain": true,
                        "st": "weaken",
                        "sc": 0.7
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j054_yg_p5",
                        "name": "Support Inventor: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 20,
                            "ma": 20,
                            "sp": 10,
                            "pa": 10,
                            "rs": 5
                        },
                        "desc": "Passive YGGDRASIL growth from the Rare class path. Balanced combat scaling improves physical, magical, and resistance growth."
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "My Hero Academia",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "55": {
        "name": "Team Leader",
        "anime": "My Hero Academia",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A battlefield coordination role that raises morale and links allies into a cleaner formation. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j055_start",
                        "name": "Hero Signal Rally",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Team Leader: a battlefield coordination role that raises morale and links allies into a cleaner formation. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden.",
                        "st": "doom",
                        "sc": 0.16
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j055_start_yg_3",
                        "name": "Team Leader: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Team Leader. Starter job skill for Team Leader: a battlefield coordination role that raises morale and links allies into a cleaner formation. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden. YGGDRASIL growth: can paralyze the enemy.",
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j055_start_yg_5",
                        "name": "Team Leader: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Hidden class technique for Team Leader. Starter job skill for Team Leader: a battlefield coordination role that raises morale and links allies into a cleaner formation. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden. YGGDRASIL growth: marks the enemy, increasing damage they take.",
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "56": {
        "name": "Aura Striker",
        "anime": "Hunter x Hunter",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A close-range Nen role that compresses aura into heavy strikes and durable guards. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j056_start",
                        "name": "Ko Impact Punch",
                        "type": "a",
                        "mp": 10,
                        "pow": 38,
                        "desc": "Starter job skill for Aura Striker: a close-range nen role that compresses aura into heavy strikes and durable guards. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base.",
                        "buf": "thorns",
                        "st": "fear",
                        "sc": 0.42,
                        "hits": 3
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j056_start_yg_5",
                        "name": "Aura Striker: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Aura Striker. Starter job skill for Aura Striker: a close-range nen role that compresses aura into heavy strikes and durable guards. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base. YGGDRASIL growth: opens a vulnerable point for follow-up attacks.",
                        "buf": "thorns",
                        "st": "vulnerable",
                        "sc": 0.65,
                        "hits": 3
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j056_yg_p10",
                        "name": "Aura Striker: Class Mastery",
                        "type": "p",
                        "bon": {
                            "hp": 35,
                            "pa": 15,
                            "ag": 15,
                            "sp": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Recruit assists deal +18% damage or support power.",
                        "summonBoost": 0.18
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j056_start_yg_15",
                        "name": "Aura Striker: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Aura Striker. Starter job skill for Aura Striker: a close-range nen role that compresses aura into heavy strikes and durable guards. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base.",
                        "buf": "thorns",
                        "st": "fear",
                        "sc": 0.42,
                        "hits": 3
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "57": {
        "name": "Contract Specialist",
        "anime": "Hunter x Hunter",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A restriction-and-vow role that gains power through clear conditions and sharp timing. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j057_start",
                        "name": "Condition Chain Tap",
                        "type": "a",
                        "mp": 12,
                        "pow": 34,
                        "desc": "Starter job skill for Contract Specialist: a restriction-and-vow role that gains power through clear conditions and sharp timing. Unique effect: hits all enemies, can inflict confusion. YGGDRASIL growth: can paralyze the enemy. Class path: Advanced.",
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j057_start_yg_5",
                        "name": "Contract Specialist: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Contract Specialist. Starter job skill for Contract Specialist: a restriction-and-vow role that gains power through clear conditions and sharp timing. Unique effect: hits all enemies, can inflict confusion. YGGDRASIL growth: can paralyze the enemy. Class path: Advanced. YGGDRASIL growth: raises Guard, reducing incoming damage.",
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45,
                        "buf": "guard"
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j057_yg_p10",
                        "name": "Contract Specialist: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "ma": 15,
                            "sp": 21
                        },
                        "desc": "Passive YGGDRASIL growth from the Advanced class path. Crafting knowledge grants 10% shop discounts.",
                        "craftDiscount": 0.1
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "58": {
        "name": "Beast Keeper",
        "anime": "Hunter x Hunter",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A companion role that trains aura beasts, scouts, and pressure partners. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 55,
            "mp": 55,
            "pa": 10,
            "pd": 9,
            "ag": 10,
            "ma": 10,
            "md": 8,
            "rs": 8,
            "sp": 8
        },
        "per_lv": {
            "hp": 4,
            "mp": 3,
            "pa": 2,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 1,
            "rs": 1,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j058_start",
                        "name": "Nen Beast Pounce",
                        "type": "a",
                        "mp": 10,
                        "pow": 0,
                        "desc": "Starter job skill for Beast Keeper: a companion role that trains aura beasts, scouts, and pressure partners. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist.",
                        "heal": 0.16,
                        "buf": "bravery",
                        "mpRestorePct": 0.08,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j058_start_yg_5",
                        "name": "Beast Keeper: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Beast Keeper. Starter job skill for Beast Keeper: a companion role that trains aura beasts, scouts, and pressure partners. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "heal": 0.16,
                        "buf": "regen",
                        "mpRestorePct": 0.08,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j058_start_yg_10",
                        "name": "Beast Keeper: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Specialist class technique for Beast Keeper. Starter job skill for Beast Keeper: a companion role that trains aura beasts, scouts, and pressure partners. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist. YGGDRASIL growth: restores a portion of maximum MP.",
                        "heal": 0.16,
                        "buf": "bravery",
                        "mpRestorePct": 0.12,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "59": {
        "name": "Assassin Footwork",
        "anime": "Hunter x Hunter",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A silent-kill role that blends rhythm steps, pressure feints, and ruthless entries. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j059_start",
                        "name": "Rhythm Echo Step",
                        "type": "a",
                        "mp": 10,
                        "pow": 35,
                        "desc": "Starter job skill for Assassin Footwork: a silent-kill role that blends rhythm steps, pressure feints, and ruthless entries. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "guard"
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j059_start_yg_3",
                        "name": "Assassin Footwork: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Assassin Footwork. Starter job skill for Assassin Footwork: a silent-kill role that blends rhythm steps, pressure feints, and ruthless entries. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "guard"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j059_start_yg_5",
                        "name": "Assassin Footwork: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Rare class technique for Assassin Footwork. Starter job skill for Assassin Footwork: a silent-kill role that blends rhythm steps, pressure feints, and ruthless entries. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare. YGGDRASIL growth: grants Focus for improved offense.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "focus"
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Hunter x Hunter",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "60": {
        "name": "Hunter Examiner",
        "anime": "Hunter x Hunter",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A veteran utility role that tests weaknesses, controls pacing, and exploits openings. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j060_start",
                        "name": "Examiner Weak-Point Mark",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Hunter Examiner: a veteran utility role that tests weaknesses, controls pacing, and exploits openings. Unique effect: can inflict bleed. YGGDRASIL growth: grants Focus for improved offense. Class path: Hidden.",
                        "hits": 2,
                        "st": "bleed",
                        "sc": 0.46,
                        "buf": "focus"
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j060_start_yg_3",
                        "name": "Hunter Examiner: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Hunter Examiner. Starter job skill for Hunter Examiner: a veteran utility role that tests weaknesses, controls pacing, and exploits openings. Unique effect: can inflict bleed. YGGDRASIL growth: grants Focus for improved offense. Class path: Hidden. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "hits": 2,
                        "st": "bleed",
                        "sc": 0.46,
                        "buf": "regen"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j060_yg_p5",
                        "name": "Hunter Examiner: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 40,
                            "ma": 16,
                            "md": 10
                        },
                        "desc": "Passive YGGDRASIL growth from the Hidden class path. Purchased spells deal +12% damage.",
                        "spellBoost": 0.12
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "61": {
        "name": "Rune Knight",
        "anime": "Black Clover",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A defensive magic-knight role that plants runes into armor, weapons, and terrain. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 90,
            "mp": 35,
            "pa": 8,
            "pd": 18,
            "ag": 4,
            "ma": 4,
            "md": 13,
            "rs": 12,
            "sp": 5
        },
        "per_lv": {
            "hp": 6,
            "mp": 2,
            "pa": 1,
            "pd": 3,
            "ag": 0,
            "ma": 1,
            "md": 2,
            "rs": 2,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j061_start",
                        "name": "Rune Guard Bash",
                        "type": "a",
                        "mp": 10,
                        "pow": 34,
                        "desc": "Starter job skill for Rune Knight: a defensive magic-knight role that plants runes into armor, weapons, and terrain. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j061_start_yg_5",
                        "name": "Rune Knight: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Rune Knight. Starter job skill for Rune Knight: a defensive magic-knight role that plants runes into armor, weapons, and terrain. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base. YGGDRASIL growth: drains HP from damage dealt.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j061_yg_p10",
                        "name": "Rune Knight: Class Mastery",
                        "type": "p",
                        "bon": {
                            "hp": 65,
                            "pd": 15,
                            "md": 15,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Grants Bleed immunity and extra durability.",
                        "immune": [
                            "bleed"
                        ]
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j061_start_yg_15",
                        "name": "Rune Knight: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Rune Knight. Starter job skill for Rune Knight: a defensive magic-knight role that plants runes into armor, weapons, and terrain. Unique effect: drains HP, can inflict poison. YGGDRASIL growth: opens a vulnerable point for follow-up attacks. Class path: Base.",
                        "drain": true,
                        "st": "vulnerable",
                        "sc": 0.65
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "62": {
        "name": "Mana Zone Caster",
        "anime": "Black Clover",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A ranged spell role that dominates space by casting from the surrounding mana itself. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 35,
            "mp": 85,
            "pa": 3,
            "pd": 5,
            "ag": 7,
            "ma": 16,
            "md": 9,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 2,
            "mp": 5,
            "pa": 0,
            "pd": 1,
            "ag": 1,
            "ma": 3,
            "md": 2,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j062_start",
                        "name": "Mana Zone Spark",
                        "type": "a",
                        "mp": 12,
                        "pow": 36,
                        "desc": "Starter job skill for Mana Zone Caster: a ranged spell role that dominates space by casting from the surrounding mana itself. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.41,
                        "buf": "regen"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j062_start_yg_5",
                        "name": "Mana Zone Caster: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Mana Zone Caster. Starter job skill for Mana Zone Caster: a ranged spell role that dominates space by casting from the surrounding mana itself. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced. YGGDRASIL growth: cleanses negative effects from the user.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.41,
                        "buf": "regen",
                        "cleanse": true
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j062_start_yg_10",
                        "name": "Mana Zone Caster: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Advanced class technique for Mana Zone Caster. Starter job skill for Mana Zone Caster: a ranged spell role that dominates space by casting from the surrounding mana itself. Unique effect: hits all enemies, can inflict weaken. YGGDRASIL growth: grants Regen for sustained recovery. Class path: Advanced. YGGDRASIL growth: weakens enemy attack power.",
                        "aoe": true,
                        "st": "weaken",
                        "sc": 0.7,
                        "buf": "regen"
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "63": {
        "name": "Grimoire Swordsman",
        "anime": "Black Clover",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A blade role that channels grimoire pages into sword arcs and anti-magic pressure. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j063_start",
                        "name": "Page-Turn Slash",
                        "type": "a",
                        "mp": 10,
                        "pow": 38,
                        "desc": "Starter job skill for Grimoire Swordsman: a blade role that channels grimoire pages into sword arcs and anti-magic pressure. Unique effect: grants guard, can inflict marked. YGGDRASIL growth: wraps the user in counter-damage thorns. Class path: Specialist.",
                        "buf": "thorns",
                        "st": "marked",
                        "sc": 0.6
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j063_start_yg_5",
                        "name": "Grimoire Swordsman: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Grimoire Swordsman. Starter job skill for Grimoire Swordsman: a blade role that channels grimoire pages into sword arcs and anti-magic pressure. Unique effect: grants guard, can inflict marked. YGGDRASIL growth: wraps the user in counter-damage thorns. Class path: Specialist. YGGDRASIL growth: restores a portion of maximum MP.",
                        "buf": "thorns",
                        "st": "marked",
                        "sc": 0.6,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j063_yg_p10",
                        "name": "Grimoire Swordsman: Class Mastery",
                        "type": "p",
                        "bon": {
                            "hp": 35,
                            "pa": 23,
                            "ag": 15,
                            "rs": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Specialist class path. Grants Fear immunity and fighting spirit.",
                        "immune": [
                            "fear"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "64": {
        "name": "Spirit Pact Mage",
        "anime": "Black Clover",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A pact role that synchronizes with a spirit-like partner for burst movement and spells. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 55,
            "mp": 55,
            "pa": 10,
            "pd": 9,
            "ag": 10,
            "ma": 10,
            "md": 8,
            "rs": 8,
            "sp": 8
        },
        "per_lv": {
            "hp": 4,
            "mp": 3,
            "pa": 2,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 1,
            "rs": 1,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j064_start",
                        "name": "Spirit Pact Gust",
                        "type": "a",
                        "mp": 10,
                        "pow": 0,
                        "desc": "Starter job skill for Spirit Pact Mage: a pact role that synchronizes with a spirit-like partner for burst movement and spells. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare.",
                        "heal": 0.18,
                        "cleanse": true
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j064_start_yg_3",
                        "name": "Spirit Pact Mage: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Spirit Pact Mage. Starter job skill for Spirit Pact Mage: a pact role that synchronizes with a spirit-like partner for burst movement and spells. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare.",
                        "heal": 0.18,
                        "cleanse": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j064_start_yg_5",
                        "name": "Spirit Pact Mage: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Rare class technique for Spirit Pact Mage. Starter job skill for Spirit Pact Mage: a pact role that synchronizes with a spirit-like partner for burst movement and spells. Unique effect: heals and supports the user, cleanses negative effects. YGGDRASIL growth: cleanses negative effects from the user. Class path: Rare. YGGDRASIL growth: pays HP for an execution strike against weakened enemies.",
                        "heal": 0.18,
                        "cleanse": true,
                        "hpCostPct": 0.08,
                        "execute": 0.3
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Black Clover",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "65": {
        "name": "Royal Squad Captain",
        "anime": "Black Clover",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A leadership role that commands squads with noble mana control and tactical discipline. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j065_start",
                        "name": "Captain Order Crest",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Royal Squad Captain: a leadership role that commands squads with noble mana control and tactical discipline. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j065_start_yg_3",
                        "name": "Royal Squad Captain: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Royal Squad Captain. Starter job skill for Royal Squad Captain: a leadership role that commands squads with noble mana control and tactical discipline. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden. YGGDRASIL growth: restores a portion of maximum MP.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j065_start_yg_5",
                        "name": "Royal Squad Captain: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Hidden class technique for Royal Squad Captain. Starter job skill for Royal Squad Captain: a leadership role that commands squads with noble mana control and tactical discipline. Unique effect: restores MP, can inflict paralysis. YGGDRASIL growth: pays HP for an execution strike against weakened enemies. Class path: Hidden. YGGDRASIL growth: hits every enemy in the encounter.",
                        "mpRestore": 16,
                        "st": "paralysis",
                        "sc": 0.41,
                        "hpCostPct": 0.08,
                        "execute": 0.3,
                        "aoe": true
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "66": {
        "name": "Public Safety Hunter",
        "anime": "Chainsaw Man",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "A professional devil-hunter role using contracts, blades, and controlled brutality. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j066_start",
                        "name": "Safety-Issue Cleaver",
                        "type": "a",
                        "mp": 10,
                        "pow": 57,
                        "desc": "Starter job skill for Public Safety Hunter: a professional devil-hunter role using contracts, blades, and controlled brutality. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j066_start_yg_5",
                        "name": "Public Safety Hunter: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Public Safety Hunter. Starter job skill for Public Safety Hunter: a professional devil-hunter role using contracts, blades, and controlled brutality. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base. YGGDRASIL growth: lands as a three-hit combo.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true,
                        "hits": 3
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j066_yg_p10",
                        "name": "Public Safety Hunter: Class Mastery",
                        "type": "p",
                        "bon": {
                            "hp": 35,
                            "pa": 15,
                            "ag": 15,
                            "sp": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Recruit assists deal +18% damage or support power.",
                        "summonBoost": 0.18
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j066_start_yg_15",
                        "name": "Public Safety Hunter: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Public Safety Hunter. Starter job skill for Public Safety Hunter: a professional devil-hunter role using contracts, blades, and controlled brutality. Unique effect: spends HP for extra power, can inflict burn. YGGDRASIL growth: drains HP from damage dealt. Class path: Base.",
                        "hpCostPct": 0.06,
                        "st": "burn",
                        "sc": 0.48,
                        "drain": true
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "67": {
        "name": "Contract Broker",
        "anime": "Chainsaw Man",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A risk-management role that pays costs for precise supernatural advantages. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 50,
            "mp": 60,
            "pa": 7,
            "pd": 8,
            "ag": 9,
            "ma": 13,
            "md": 10,
            "rs": 8,
            "sp": 12
        },
        "per_lv": {
            "hp": 3,
            "mp": 3,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 1,
            "sp": 3
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j067_start",
                        "name": "Signed Contract Pin",
                        "type": "a",
                        "mp": 12,
                        "pow": 34,
                        "desc": "Starter job skill for Contract Broker: a risk-management role that pays costs for precise supernatural advantages. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced.",
                        "execute": 0.35,
                        "st": "doom",
                        "sc": 0.16,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j067_start_yg_5",
                        "name": "Contract Broker: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Contract Broker. Starter job skill for Contract Broker: a risk-management role that pays costs for precise supernatural advantages. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced. YGGDRASIL growth: weakens enemy attack power.",
                        "execute": 0.35,
                        "st": "weaken",
                        "sc": 0.7,
                        "mpRestorePct": 0.12
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j067_start_yg_10",
                        "name": "Contract Broker: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Advanced class technique for Contract Broker. Starter job skill for Contract Broker: a risk-management role that pays costs for precise supernatural advantages. Unique effect: deals extra damage to weakened targets, can inflict doom. YGGDRASIL growth: restores a portion of maximum MP. Class path: Advanced. YGGDRASIL growth: raises Guard, reducing incoming damage.",
                        "execute": 0.35,
                        "st": "doom",
                        "sc": 0.16,
                        "mpRestorePct": 0.12,
                        "buf": "guard"
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "68": {
        "name": "Blood Weaponist",
        "anime": "Chainsaw Man",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A blood-shaping role that hardens crimson weapons and drains through wounds. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 55,
            "mp": 55,
            "pa": 10,
            "pd": 9,
            "ag": 10,
            "ma": 10,
            "md": 8,
            "rs": 8,
            "sp": 8
        },
        "per_lv": {
            "hp": 4,
            "mp": 3,
            "pa": 2,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 1,
            "rs": 1,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j068_start",
                        "name": "Blood Spike Burst",
                        "type": "a",
                        "mp": 10,
                        "pow": 36,
                        "desc": "Starter job skill for Blood Weaponist: a blood-shaping role that hardens crimson weapons and drains through wounds. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist.",
                        "buf": "focus",
                        "hits": 2,
                        "aoe": true
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j068_start_yg_5",
                        "name": "Blood Weaponist: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Blood Weaponist. Starter job skill for Blood Weaponist: a blood-shaping role that hardens crimson weapons and drains through wounds. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist. YGGDRASIL growth: can paralyze the enemy.",
                        "buf": "focus",
                        "hits": 2,
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j068_start_yg_10",
                        "name": "Blood Weaponist: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Specialist class technique for Blood Weaponist. Starter job skill for Blood Weaponist: a blood-shaping role that hardens crimson weapons and drains through wounds. Unique effect: grants focus. YGGDRASIL growth: hits every enemy in the encounter. Class path: Specialist. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "buf": "regen",
                        "hits": 2,
                        "aoe": true
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "69": {
        "name": "Devil Exorcist",
        "anime": "Chainsaw Man",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A support role that identifies devil fears, breaks panic, and seals outbreaks. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j069_start",
                        "name": "Fear Name Rebuke",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Devil Exorcist: a support role that identifies devil fears, breaks panic, and seals outbreaks. Unique effect: drains HP, grants regen. YGGDRASIL growth: weakens enemy attack power. Class path: Rare.",
                        "buf": "regen",
                        "drain": true,
                        "st": "weaken",
                        "sc": 0.7
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j069_start_yg_3",
                        "name": "Devil Exorcist: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Devil Exorcist. Starter job skill for Devil Exorcist: a support role that identifies devil fears, breaks panic, and seals outbreaks. Unique effect: drains HP, grants regen. YGGDRASIL growth: weakens enemy attack power. Class path: Rare.",
                        "buf": "regen",
                        "drain": true,
                        "st": "weaken",
                        "sc": 0.7
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j069_yg_p5",
                        "name": "Devil Exorcist: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 20,
                            "ma": 18,
                            "md": 10,
                            "rs": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Rare class path. Grants Confusion immunity and mental clarity.",
                        "immune": [
                            "confusion"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Chainsaw Man",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "70": {
        "name": "Engine Berserker",
        "anime": "Chainsaw Man",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A revving assault role built around momentum, saw arcs, and reckless entries. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j070_start",
                        "name": "Rev-Line Lunge",
                        "type": "a",
                        "mp": 10,
                        "pow": 35,
                        "desc": "Starter job skill for Engine Berserker: a revving assault role built around momentum, saw arcs, and reckless entries. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden.",
                        "st": "doom",
                        "sc": 0.16
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j070_start_yg_3",
                        "name": "Engine Berserker: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Engine Berserker. Starter job skill for Engine Berserker: a revving assault role built around momentum, saw arcs, and reckless entries. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden. YGGDRASIL growth: can paralyze the enemy.",
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j070_start_yg_5",
                        "name": "Engine Berserker: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Hidden class technique for Engine Berserker. Starter job skill for Engine Berserker: a revving assault role built around momentum, saw arcs, and reckless entries. Unique effect: can inflict vulnerable. YGGDRASIL growth: has a small chance to inflict Doom. Class path: Hidden. YGGDRASIL growth: marks the enemy, increasing damage they take.",
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    },
    "71": {
        "name": "Dungeon Capturer",
        "anime": "Magi: Labyrinth of Magic",
        "max_lv": 15,
        "unlock_lv": 0,
        "desc": "An adventurer role trained to survive dungeons, claim relics, and adapt to strange trials. YGGDRASIL class tier: Base Class: broad fundamentals, efficient for the first 15 levels of a build.",
        "base": {
            "hp": 55,
            "mp": 55,
            "pa": 10,
            "pd": 9,
            "ag": 10,
            "ma": 10,
            "md": 8,
            "rs": 8,
            "sp": 8
        },
        "per_lv": {
            "hp": 4,
            "mp": 3,
            "pa": 2,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 1,
            "rs": 1,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j071_start",
                        "name": "Dungeon Relic Swipe",
                        "type": "a",
                        "mp": 10,
                        "pow": 36,
                        "desc": "Starter job skill for Dungeon Capturer: an adventurer role trained to survive dungeons, claim relics, and adapt to strange trials. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base.",
                        "buf": "thorns",
                        "st": "fear",
                        "sc": 0.42,
                        "hits": 3
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j071_start_yg_5",
                        "name": "Dungeon Capturer: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Base class technique for Dungeon Capturer. Starter job skill for Dungeon Capturer: an adventurer role trained to survive dungeons, claim relics, and adapt to strange trials. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base. YGGDRASIL growth: opens a vulnerable point for follow-up attacks.",
                        "buf": "thorns",
                        "st": "vulnerable",
                        "sc": 0.65,
                        "hits": 3
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j071_yg_p10",
                        "name": "Dungeon Capturer: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 30,
                            "pa": 15,
                            "ag": 15,
                            "hp": 30,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Base class path. Grants Bleed immunity and extra durability.",
                        "immune": [
                            "bleed"
                        ]
                    }
                ]
            ],
            [
                15,
                [
                    {
                        "id": "j071_start_yg_15",
                        "name": "Dungeon Capturer: Lv.15 Art",
                        "type": "a",
                        "mp": 44,
                        "pow": 170,
                        "desc": "A Base class technique for Dungeon Capturer. Starter job skill for Dungeon Capturer: an adventurer role trained to survive dungeons, claim relics, and adapt to strange trials. Unique effect: grants thorns, can inflict fear. YGGDRASIL growth: lands as a three-hit combo. Class path: Base.",
                        "buf": "thorns",
                        "st": "fear",
                        "sc": 0.42,
                        "hits": 3
                    }
                ]
            ]
        ],
        "class_tier": "Base",
        "tier": "base",
        "hidden": false,
        "prereq": {}
    },
    "72": {
        "name": "Metal Vessel Knight",
        "anime": "Magi: Labyrinth of Magic",
        "max_lv": 10,
        "unlock_lv": 10,
        "desc": "A relic-combat role that channels djinn power through weapons and armor. YGGDRASIL class tier: Advanced Class: unlocks after committing to a related class path; capped at 10 levels.",
        "base": {
            "hp": 60,
            "mp": 25,
            "pa": 15,
            "pd": 9,
            "ag": 11,
            "ma": 2,
            "md": 5,
            "rs": 6,
            "sp": 4
        },
        "per_lv": {
            "hp": 4,
            "mp": 1,
            "pa": 3,
            "pd": 1,
            "ag": 2,
            "ma": 0,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j072_start",
                        "name": "Vessel Edge Flare",
                        "type": "a",
                        "mp": 10,
                        "pow": 38,
                        "desc": "Starter job skill for Metal Vessel Knight: a relic-combat role that channels djinn power through weapons and armor. Unique effect: hits all enemies, can inflict confusion. YGGDRASIL growth: can paralyze the enemy. Class path: Advanced.",
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j072_start_yg_5",
                        "name": "Metal Vessel Knight: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Advanced class technique for Metal Vessel Knight. Starter job skill for Metal Vessel Knight: a relic-combat role that channels djinn power through weapons and armor. Unique effect: hits all enemies, can inflict confusion. YGGDRASIL growth: can paralyze the enemy. Class path: Advanced. YGGDRASIL growth: raises Guard, reducing incoming damage.",
                        "aoe": true,
                        "st": "paralysis",
                        "sc": 0.45,
                        "buf": "guard"
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j072_yg_p10",
                        "name": "Metal Vessel Knight: Class Mastery",
                        "type": "p",
                        "bon": {
                            "hp": 35,
                            "pa": 15,
                            "ag": 15,
                            "md": 8,
                            "rs": 6
                        },
                        "desc": "Passive YGGDRASIL growth from the Advanced class path. Grants Burn immunity and magic resistance.",
                        "immune": [
                            "burn"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Advanced",
        "tier": "advanced",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 10
        }
    },
    "73": {
        "name": "Rukh Scholar",
        "anime": "Magi: Labyrinth of Magic",
        "max_lv": 10,
        "unlock_lv": 20,
        "desc": "A spell role that reads the flow of rukh and shapes magoi into clean formulas. YGGDRASIL class tier: Specialist Class: rewards focused synergy between related jobs; capped at 10 levels.",
        "base": {
            "hp": 35,
            "mp": 85,
            "pa": 3,
            "pd": 5,
            "ag": 7,
            "ma": 16,
            "md": 9,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 2,
            "mp": 5,
            "pa": 0,
            "pd": 1,
            "ag": 1,
            "ma": 3,
            "md": 2,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j073_start",
                        "name": "Rukh Script Bolt",
                        "type": "a",
                        "mp": 12,
                        "pow": 0,
                        "desc": "Starter job skill for Rukh Scholar: a spell role that reads the flow of rukh and shapes magoi into clean formulas. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist.",
                        "heal": 0.16,
                        "buf": "bravery",
                        "mpRestorePct": 0.08,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j073_start_yg_5",
                        "name": "Rukh Scholar: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 70,
                        "desc": "A Specialist class technique for Rukh Scholar. Starter job skill for Rukh Scholar: a spell role that reads the flow of rukh and shapes magoi into clean formulas. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "heal": 0.16,
                        "buf": "regen",
                        "mpRestorePct": 0.08,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ],
            [
                10,
                [
                    {
                        "id": "j073_start_yg_10",
                        "name": "Rukh Scholar: Lv.10 Art",
                        "type": "a",
                        "mp": 32,
                        "pow": 122,
                        "desc": "A Specialist class technique for Rukh Scholar. Starter job skill for Rukh Scholar: a spell role that reads the flow of rukh and shapes magoi into clean formulas. Unique effect: heals and supports the user, restores MP, grants bravery. YGGDRASIL growth: marks the enemy, increasing damage they take. Class path: Specialist. YGGDRASIL growth: restores a portion of maximum MP.",
                        "heal": 0.16,
                        "buf": "bravery",
                        "mpRestorePct": 0.12,
                        "st": "marked",
                        "sc": 0.7
                    }
                ]
            ]
        ],
        "class_tier": "Specialist",
        "tier": "specialist",
        "hidden": false,
        "prereq": {
            "anySameAnimeJobLevel": 15,
            "sameAnimeJobLevelTotal": 20
        }
    },
    "74": {
        "name": "Fanalis Gladiator",
        "anime": "Magi: Labyrinth of Magic",
        "max_lv": 5,
        "unlock_lv": 30,
        "desc": "A brutal arena role based on explosive movement and overwhelming body mechanics. YGGDRASIL class tier: Rare Class: hidden race-linked path; capped at 5 levels and unlocked through research.",
        "base": {
            "hp": 50,
            "mp": 40,
            "pa": 12,
            "pd": 7,
            "ag": 17,
            "ma": 5,
            "md": 6,
            "rs": 7,
            "sp": 6
        },
        "per_lv": {
            "hp": 3,
            "mp": 2,
            "pa": 2,
            "pd": 1,
            "ag": 3,
            "ma": 1,
            "md": 1,
            "rs": 1,
            "sp": 1
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j074_start",
                        "name": "Red Lion Pounce",
                        "type": "a",
                        "mp": 10,
                        "pow": 35,
                        "desc": "Starter job skill for Fanalis Gladiator: a brutal arena role based on explosive movement and overwhelming body mechanics. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "guard"
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j074_start_yg_3",
                        "name": "Fanalis Gladiator: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Rare class technique for Fanalis Gladiator. Starter job skill for Fanalis Gladiator: a brutal arena role based on explosive movement and overwhelming body mechanics. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "guard"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j074_start_yg_5",
                        "name": "Fanalis Gladiator: Lv.5 Art",
                        "type": "a",
                        "mp": 20,
                        "pow": 97,
                        "desc": "A Rare class technique for Fanalis Gladiator. Starter job skill for Fanalis Gladiator: a brutal arena role based on explosive movement and overwhelming body mechanics. Unique effect: can inflict stun. YGGDRASIL growth: raises Guard, reducing incoming damage. Class path: Rare. YGGDRASIL growth: grants Focus for improved offense.",
                        "st": "stun",
                        "sc": 0.42,
                        "buf": "focus"
                    }
                ]
            ]
        ],
        "class_tier": "Rare",
        "tier": "rare",
        "hidden": true,
        "prereq": {
            "raceAnime": "Magi: Labyrinth of Magic",
            "sameAnimeJobLevelTotal": 25,
            "achievements": [
                "secret_research_1"
            ]
        }
    },
    "75": {
        "name": "Household Strategist",
        "anime": "Magi: Labyrinth of Magic",
        "max_lv": 5,
        "unlock_lv": 50,
        "desc": "A retainer-command role that coordinates followers, relics, and battlefield routes. YGGDRASIL class tier: Hidden Class: secret build path requiring research and battle achievements; capped at 5 levels.",
        "base": {
            "hp": 45,
            "mp": 75,
            "pa": 5,
            "pd": 7,
            "ag": 8,
            "ma": 12,
            "md": 12,
            "rs": 10,
            "sp": 10
        },
        "per_lv": {
            "hp": 3,
            "mp": 4,
            "pa": 1,
            "pd": 1,
            "ag": 1,
            "ma": 2,
            "md": 2,
            "rs": 2,
            "sp": 2
        },
        "skills": [
            [
                1,
                [
                    {
                        "id": "j075_start",
                        "name": "Household Banner Call",
                        "type": "a",
                        "mp": 12,
                        "pow": 33,
                        "desc": "Starter job skill for Household Strategist: a retainer-command role that coordinates followers, relics, and battlefield routes. Unique effect: can inflict bleed. YGGDRASIL growth: grants Focus for improved offense. Class path: Hidden.",
                        "hits": 2,
                        "st": "bleed",
                        "sc": 0.46,
                        "buf": "focus"
                    }
                ]
            ],
            [
                3,
                [
                    {
                        "id": "j075_start_yg_3",
                        "name": "Household Strategist: Lv.3 Art",
                        "type": "a",
                        "mp": 15,
                        "pow": 60,
                        "desc": "A Hidden class technique for Household Strategist. Starter job skill for Household Strategist: a retainer-command role that coordinates followers, relics, and battlefield routes. Unique effect: can inflict bleed. YGGDRASIL growth: grants Focus for improved offense. Class path: Hidden. YGGDRASIL growth: grants Regen for sustained recovery.",
                        "hits": 2,
                        "st": "bleed",
                        "sc": 0.46,
                        "buf": "regen"
                    }
                ]
            ],
            [
                5,
                [
                    {
                        "id": "j075_yg_p5",
                        "name": "Household Strategist: Class Mastery",
                        "type": "p",
                        "bon": {
                            "mp": 20,
                            "ma": 10,
                            "md": 10,
                            "rs": 8
                        },
                        "desc": "Passive YGGDRASIL growth from the Hidden class path. Grants Poison immunity and extra RESIST.",
                        "immune": [
                            "poison"
                        ]
                    }
                ]
            ]
        ],
        "class_tier": "Hidden",
        "tier": "hidden",
        "hidden": true,
        "prereq": {
            "sameAnimeJobLevelTotal": 30,
            "totalKills": 10,
            "achievements": [
                "secret_research_3"
            ]
        }
    }
};

// ── v0.4 Uniqueness Patch: every base race + job now has a distinct identity ──
(function applyV04UniqueRaceAndJobPatch(){
  const raceSets = {
    1: [[1,[{id:'r_uchiha_1',name:'Sharingan Read',type:'p',bon:{ag:4,ma:4,sp:3},desc:'Passive: heightened perception improves speed, magic offense, and special control.'}]],
        [5,[{id:'r_uchiha_5',name:'Great Fireball Jutsu',type:'a',mp:20,pow:70,st:'burn',sc:0.55,desc:'A signature Uchiha fire attack with a strong burn chance.'}]],
        [10,[{id:'r_uchiha_10',name:'Genjutsu Lock',type:'a',mp:28,pow:35,st:'confusion',sc:0.85,desc:'Traps the enemy perception and leaves them confused.'}]],
        [20,[{id:'r_uchiha_20',name:'Susanoo Ribcage',type:'p',bon:{pd:15,md:12,rs:10},desc:'Passive: spectral defense greatly improves survivability.'}]],
        [30,[{id:'r_uchiha_30',name:'Mangekyo Execution',type:'a',mp:80,pow:210,st:'doom',sc:0.22,desc:'A forbidden ocular finisher that can mark the target for doom.'}]]],
    2: [[1,[{id:'r_hyuga_1',name:'Byakugan Focus',type:'p',bon:{ag:4,pa:3,rs:3},desc:'Passive: visual awareness increases speed, precision, and resistance.'}]],
        [5,[{id:'r_hyuga_5',name:'Gentle Fist: Tenketsu Strike',type:'a',mp:18,pow:58,st:'weaken',sc:0.75,desc:'Targets chakra points to weaken the enemy.'}]],
        [10,[{id:'r_hyuga_10',name:'Eight Trigrams Palm Rotation',type:'p',bon:{pd:14,md:8},desc:'Passive: rotating chakra defense raises physical and magical defense.'}]],
        [20,[{id:'r_hyuga_20',name:'Sixty-Four Palms',type:'a',mp:45,pow:125,hits:4,st:'paralysis',sc:0.35,desc:'A multi-hit chakra-point barrage with a chance to paralyze.'}]]],
    3: [[1,[{id:'r_uzumaki_1',name:'Vitality of the Red Whirlpool',type:'p',bon:{hp:45,mp:20,rs:4},desc:'Passive: huge life force and chakra reserves.'}]],
        [5,[{id:'r_uzumaki_5',name:'Adamantine Sealing Chain',type:'a',mp:22,pow:55,st:'stun',sc:0.65,desc:'Binds the enemy with chakra chains.'}]],
        [10,[{id:'r_uzumaki_10',name:'Four-Symbol Seal',type:'a',mp:35,pow:65,st:'weaken',sc:0.9,desc:'Suppresses enemy power with a sealing formula.'}]],
        [20,[{id:'r_uzumaki_20',name:'Chakra Recovery Seal',type:'a',mp:35,pow:0,heal:0.35,buf:'regen',desc:'Heals and applies regeneration through sealing arts.'}]]],
    4: [[1,[{id:'r_otsutsuki_1',name:'Celestial Chakra Core',type:'p',bon:{hp:35,mp:45,ma:8,rs:5},desc:'Passive: divine chakra raises all supernatural performance.'}]],
        [5,[{id:'r_otsutsuki_5',name:'Truth-Seeking Pulse',type:'a',mp:35,pow:95,st:'vulnerable',sc:0.65,desc:'A reality-warping chakra pulse that exposes weaknesses.'}]],
        [10,[{id:'r_otsutsuki_10',name:'Rinnegan Gravity Well',type:'a',mp:48,pow:115,st:'stun',sc:0.55,desc:'Crushes enemies under gravitational pressure.'}]],
        [20,[{id:'r_otsutsuki_20',name:'Karma Resonance',type:'p',bon:{pa:15,ma:15,sp:12},desc:'Passive: alien battle data strengthens physical, magical, and special output.'}]]],
    5: [[1,[{id:'r_senju_1',name:'Body of Asura',type:'p',bon:{hp:40,pd:6,rs:5},desc:'Passive: overwhelming vitality and battlefield endurance.'}]],
        [5,[{id:'r_senju_5',name:'Wood-Style Binding Roots',type:'a',mp:24,pow:65,st:'stun',sc:0.6,desc:'Restrains enemies with chakra-grown roots.'}]],
        [10,[{id:'r_senju_10',name:'Forest Bloom Regeneration',type:'a',mp:38,pow:0,heal:0.3,buf:'guard',desc:'Heals while forming defensive wood armor.'}]],
        [20,[{id:'r_senju_20',name:'Deep Forest Impact',type:'a',mp:62,pow:155,hits:2,st:'weaken',sc:0.45,desc:'A crushing wood-style battlefield attack.'}]]],
    6: [[1,[{id:'r_shinigami_1',name:'Zanpakuto Bond',type:'p',bon:{pa:5,ma:5,ag:3},desc:'Passive: weapon spirit synchronization improves offense and speed.'}]],
        [5,[{id:'r_shinigami_5',name:'Shunpo Slash',type:'a',mp:18,pow:65,hits:2,desc:'A flash-step double slash.'}]],
        [10,[{id:'r_shinigami_10',name:'Kido Burst',type:'a',mp:30,pow:90,st:'burn',sc:0.45,desc:'A destructive spell burst.'}]],
        [20,[{id:'r_shinigami_20',name:'Bankai Pressure',type:'p',bon:{pa:14,ma:14,sp:8},desc:'Passive: Bankai-level pressure boosts combat output.'}]]],
    7: [[1,[{id:'r_hollow_1',name:'Hollow Instinct',type:'p',bon:{hp:35,pa:7,rs:3},desc:'Passive: predator instincts increase health and raw attack.'}]],
        [5,[{id:'r_hollow_5',name:'Cero Roar',type:'a',mp:25,pow:85,st:'fear',sc:0.45,desc:'A terrifying spirit blast.'}]],
        [10,[{id:'r_hollow_10',name:'Hierro Hide',type:'p',bon:{pd:15,rs:8},desc:'Passive: hardened spiritual skin raises defense.'}]],
        [20,[{id:'r_hollow_20',name:'Devouring Bite',type:'a',mp:40,pow:120,drain:true,desc:'A soul-eating strike that heals from damage dealt.'}]]],
    8: [[1,[{id:'r_quincy_1',name:'Reishi Gathering',type:'p',bon:{mp:25,ma:5,sp:4},desc:'Passive: gathers spiritual particles for precision attacks.'}]],
        [5,[{id:'r_quincy_5',name:'Heilig Pfeil Volley',type:'a',mp:20,pow:65,hits:3,desc:'Fires a triple volley of reishi arrows.'}]],
        [10,[{id:'r_quincy_10',name:'Blut Vene',type:'p',bon:{pd:10,md:10,rs:7},desc:'Passive: defensive blood technique improves survivability.'}]],
        [20,[{id:'r_quincy_20',name:'Letzt Stil Release',type:'a',mp:65,pow:175,st:'vulnerable',sc:0.6,desc:'A high-risk Quincy release that exposes the target.'}]]],
    9: [[1,[{id:'r_fullbring_1',name:'Object Soul Affinity',type:'p',bon:{sp:8,ma:3,md:3},desc:'Passive: manipulates the soul of objects for utility and defense.'}]],
        [5,[{id:'r_fullbring_5',name:'Bringer Light Rush',type:'a',mp:18,pow:60,hits:2,buf:'haste',desc:'A quick movement attack that grants haste.'}]],
        [10,[{id:'r_fullbring_10',name:'Personal Relic Manifest',type:'p',bon:{pa:8,ma:8,sp:8},desc:'Passive: awakens a unique item-based power.'}]],
        [20,[{id:'r_fullbring_20',name:'Soul Dominion',type:'a',mp:55,pow:140,st:'confusion',sc:0.55,desc:'Overloads the enemy by manipulating nearby souls.'}]]],
    10:[[1,[{id:'r_arrancar_1',name:'Broken Mask Power',type:'p',bon:{pa:6,ma:5,pd:4},desc:'Passive: Hollow and Shinigami traits combine into brute force.'}]],
        [5,[{id:'r_arrancar_5',name:'Bala Chain',type:'a',mp:18,pow:52,hits:3,desc:'Rapid-fire spirit bullets.'}]],
        [10,[{id:'r_arrancar_10',name:'Hierro + Sonido',type:'p',bon:{pd:10,ag:10},desc:'Passive: hardened body and high-speed movement.'}]],
        [20,[{id:'r_arrancar_20',name:'Resurreccion Release',type:'a',mp:65,pow:170,buf:'bravery',desc:'Releases true form for a massive attack and bravery buff.'}]]],
    11:[[1,[{id:'r_visored_1',name:'Inner Hollow Mask',type:'p',bon:{pa:5,ma:5,rs:5},desc:'Passive: controlled Hollow power boosts balanced offense.'}]],
        [5,[{id:'r_visored_5',name:'Masked Getsuga',type:'a',mp:28,pow:88,st:'fear',sc:0.4,desc:'A Hollow-enhanced spiritual slash.'}]],
        [10,[{id:'r_visored_10',name:'Mask Discipline',type:'p',bon:{ag:8,sp:8,md:8},desc:'Passive: control training prevents the mask from consuming the user.'}]],
        [20,[{id:'r_visored_20',name:'Hollow Bankai Crash',type:'a',mp:70,pow:185,hits:2,desc:'A brutal hybrid release attack.'}]]],
    12:[[1,[{id:'r_giant_1',name:'Colossal Frame',type:'p',bon:{hp:75,pa:8,pd:8},desc:'Passive: enormous body grants health, attack, and defense.'}]],
        [5,[{id:'r_giant_5',name:'Elbaf Hammer Blow',type:'a',mp:18,pow:90,st:'stun',sc:0.45,desc:'A huge crushing strike.'}]],
        [10,[{id:'r_giant_10',name:'Titan Grip',type:'p',bon:{pa:14,pd:10},desc:'Passive: giant strength improves weapon handling and durability.'}]],
        [20,[{id:'r_giant_20',name:'Sovereignty Shockwave',type:'a',mp:55,pow:165,st:'fear',sc:0.35,desc:'A legendary giant shockwave attack.'}]]],
    13:[[1,[{id:'r_skypiean_1',name:'Skyborne Balance',type:'p',bon:{ag:8,sp:5,md:3},desc:'Passive: sky-island movement improves agility and special control.'}]],
        [5,[{id:'r_skypiean_5',name:'Cloud Dial Burst',type:'a',mp:18,pow:55,st:'stun',sc:0.45,desc:'A dial-powered burst of compressed force.'}]],
        [10,[{id:'r_skypiean_10',name:'Mantra Reading',type:'p',bon:{ag:10,rs:7,sp:7},desc:'Passive: predictive awareness improves evasion and resistance.'}]],
        [20,[{id:'r_skypiean_20',name:'Impact Dial Reversal',type:'a',mp:45,pow:135,st:'vulnerable',sc:0.55,desc:'Returns stored impact as a devastating counter.'}]]]
  };

  const titanNames = {14:'Ackerman Awakening',15:'Coordinate Command',16:'Armored Charge',17:'Freedom Rush',18:'Beast Throw',19:'Cart Endurance',20:'Colossus Steam Burst',21:'Female Titan Hardening',22:'Jaw Crusher',23:'War Hammer Construct'};
  for (let id=14; id<=23; id++) {
    raceSets[id] = [[1,[{id:'r_aot_'+id+'_1',name:titanNames[id]+' Instinct',type:'p',bon:{hp:25,pa:5,ag:id===20?0:4,pd:5},desc:'Passive: this Titan/Ackerman path has its own physical combat identity.'}]],
      [5,[{id:'r_aot_'+id+'_5',name:titanNames[id],type:'a',mp:20+(id%5)*4,pow:70+(id%7)*8,st:id===16?'guard':(id===20?'burn':'stun'),sc:0.45,desc:'Unique Attack on Titan race technique themed around '+titanNames[id]+'.'}]],
      [10,[{id:'r_aot_'+id+'_10',name:titanNames[id]+' Adaptation',type:'p',bon:{hp:30,pd:8,rs:5},desc:'Passive: specialized survival traits improve durability.'}]],
      [20,[{id:'r_aot_'+id+'_20',name:titanNames[id]+' Apex',type:'a',mp:60,pow:155+(id%4)*12,hits:id===22?3:1,st:id===20?'burn':'vulnerable',sc:0.5,desc:'Apex technique for this race path.'}]]];
  }
  const clanSets = {
    24:['Projection Weapon Drill','Zenin Arsenal Mastery','pa'],
    25:['Infinity Screen','Six Eyes Efficiency','ma'],
    26:['Blood Edge Convergence','Red Scale Control','pa'],
    27:['Stellar Gate','Celestial Contract','ma'],
    28:['Demon Slayer Black Art','Demon Force','pa'],
    29:['Dragon Roar','Dragon Sense','pa'],
    30:['Etherious Curse','Demonic Regeneration','hp'],
    31:['God Slayer Eclipse','Black God Magic','ma'],
    32:['Chimera Evolution','Predator Adaptation','hp'],
    33:['Assassin Rhythm','Poison Body Training','ag'],
    34:['Scarlet Eye Surge','Emperor Time Focus','sp']
  };
  Object.entries(clanSets).forEach(([id, arr]) => {
    const n=Number(id), active=arr[0], passive=arr[1], stat=arr[2];
    const bon1 = stat==='hp'?{hp:45,rs:5}: stat==='ag'?{ag:10,pa:5}: stat==='sp'?{sp:10,ma:5}:{[stat]:10,mp:18};
    raceSets[n] = [[1,[{id:'r_unique_'+id+'_1',name:passive,type:'p',bon:bon1,desc:'Passive: gives this race a distinct combat identity.'}]],
      [5,[{id:'r_unique_'+id+'_5',name:active,type:'a',mp:24,pow:78,st:(stat==='ma'?'burn':stat==='ag'?'paralysis':stat==='sp'?'confusion':'bleed'),sc:0.5,desc:'Signature active skill unique to this race.'}]],
      [10,[{id:'r_unique_'+id+'_10',name:passive+' II',type:'p',bon:{hp:20,mp:15,pa:stat==='pa'?8:2,ma:stat==='ma'?8:2,ag:stat==='ag'?8:2,sp:stat==='sp'?8:2,rs:5},desc:'Passive: second-stage racial specialization.'}]],
      [20,[{id:'r_unique_'+id+'_20',name:active+' — Apex',type:'a',mp:62,pow:165,hits:(stat==='ag'?3:1),drain:(stat==='hp'),st:'vulnerable',sc:0.45,desc:'Apex racial technique.'}]]];
  });

  Object.entries(raceSets).forEach(([id, skills]) => {
    if (RACE_DATA[id]) RACE_DATA[id].skills = skills;
  });

  const jobThemes = {
    Duelist:['Precision duelist','single-target pressure','vulnerable','focus'],
    Artificer:['Craft specialist','gear scaling and seals','weaken','guard'],
    Striker:['Hybrid striker','burst damage and recovery','bleed','bravery'],
    Handler:['Companion handler','summons and support control','stun','guard'],
    Operative:['Stealth assassin','opening burst and control','marked','haste'],
    Scholar:['Scholar caster','efficient spell pressure','burn','focus'],
    Scout:['Speed scout','initiative and evasion','paralysis','haste'],
    Medic:['Battle medic','healing and sustain','weaken','regen'],
    Archer:['Ranged sniper','multi-hit precision','marked','focus'],
    Brawler:['Brawler','close-range physical pressure','stun','bravery'],
    Chef:['Support chef','healing food and buffs','weaken','regen'],
    Tactician:['Tactician','planning and debuffs','confusion','focus'],
    Defender:['Defender','guarding and durability','stun','guard'],
    Trickshot:['Trickshot sniper','crit-style pressure','marked','haste'],
    Vanguard:['Vanguard','frontline engage','stun','bravery'],
    Lancer:['Lancer','piercing burst','bleed','focus'],
    Commander:['Commander','team buffs and control','fear','bravery'],
    Guard:['Guard','defensive counters','stun','guard'],
    Monk:['Martial monk','rapid physical chains','stun','focus'],
    Engineer:['Engineer','tools and crafted advantages','vulnerable','guard'],
    Caster:['Caster','high magical pressure','burn','focus'],
    Knight:['Knight','weapon stance and armor','bleed','guard'],
    Mage:['Mage','specialized magic utility','confusion','focus'],
    Contractor:['Contractor','summons and pacts','marked','regen'],
    Bruiser:['Bruiser','telekinetic impact','stun','bravery'],
    Medium:['Medium','spirit utility and resist','fear','focus'],
    Channeler:['Channeler','emotion-based scaling','confusion','bravery'],
    Counselor:['Counselor','control and recovery','weaken','regen'],
    Adept:['Adept','focused fundamentals','vulnerable','focus'],
    Alchemist:['Alchemist','poisons and crafted effects','poison','focus'],
    Smith:['Smith','equipment empowerment','bleed','guard'],
    Strategist:['Strategist','battlefield planning','vulnerable','focus'],
    Ritualist:['Ritualist','dark scaling and sacrifice','doom','focus'],
    Commander:['Commander','party control and power auras','fear','bravery'],
    Hero:['Hero','balanced rescue and offense','stun','bravery'],
    Agent:['Agent','stealth control','marked','haste'],
    Inventor:['Inventor','gadgets and support gear','vulnerable','guard'],
    Leader:['Leader','teamwide momentum','fear','bravery'],
    Specialist:['Specialist','contract-based specialization','weaken','focus'],
    Keeper:['Keeper','beast support and pressure','stun','guard'],
    Examiner:['Examiner','tests and adaptive reads','vulnerable','focus'],
    Exorcist:['Exorcist','anti-devil control','fear','focus'],
    Berserker:['Berserker','high-risk offense','bleed','bravery'],
    Capturer:['Dungeon conqueror','relic-based offense','marked','focus'],
    Gladiator:['Gladiator','raw physical dominance','bleed','bravery']
  };

  function themeForJob(name){
    for (const key in jobThemes) if (name.includes(key)) return jobThemes[key];
    return ['Unique class','specialized class identity','vulnerable','focus'];
  }
  function levelSpread(max){
    if (max >= 15) return [1,5,10,15];
    if (max >= 10) return [1,5,10];
    return [1,3,5];
  }
  Object.entries(JOB_DATA).forEach(([id, j]) => {
    const [role, mechanic, status, buff] = themeForJob(j.name);
    j.desc = role + ' — ' + mechanic + '. ' + (j.desc || '');
    const max = Number(j.max_lv || 5);
    const levels = levelSpread(max);
    const tier = j.class_tier || (max>=15?'Base':max>=10?'Advanced':'Rare');
    const phys = /Duelist|Striker|Brawler|Vanguard|Lancer|Knight|Blade|Monk|Gladiator|Weapon|Assassin|Operative|Hero|Berserker|Fighter|Scout|Guard|Vanguard|Smith/.test(j.name);
    const support = /Medic|Chef|Tactician|Commander|Leader|Counselor|Strategist|Handler|Contractor|Keeper/.test(j.name);
    const craft = /Artificer|Engineer|Inventor|Smith|Shipwright|Capsule|Guild/.test(j.name);
    const primary = phys ? 'pa' : /Caster|Scholar|Mage|Ritualist|Medium|Exorcist|Energy|Kido|Rukh|Mana|Spirit/.test(j.name) ? 'ma' : support ? 'sp' : 'ag';
    const passiveBon = primary==='pa'?{pa:6,ag:3}:primary==='ma'?{ma:6,mp:18}:primary==='sp'?{sp:6,rs:4}:{ag:6,sp:3};
    if (craft) { passiveBon.pd = (passiveBon.pd||0)+4; passiveBon.sp=(passiveBon.sp||0)+3; }
    const skillList = [];
    skillList.push([levels[0],[{id:'job_'+id+'_signature',name:j.name+' Signature',type:'a',mp:10+Number(id)%10,pow:38+Number(id)%18,st:status,sc:0.45,desc:'Unique starter technique for '+j.name+': '+mechanic+'.'}]]);
    if (levels[1]) skillList.push([levels[1],[{id:'job_'+id+'_passive',name:j.name+' Discipline',type:'p',bon:passiveBon,desc:'Passive identity bonus for '+j.name+' focused on '+mechanic+'.'}]]);
    if (levels[2]) skillList.push([levels[2],[{id:'job_'+id+'_art',name:j.name+' Advanced Art',type:'a',mp:24+Number(id)%12,pow:82+Number(id)%30,hits:(phys&&Number(id)%2===0)?2:1,st:status,sc:0.55,drain:support,desc:'Higher-tier class art unique to '+j.name+'.'}]]);
    if (levels[3]) skillList.push([levels[3],[{id:'job_'+id+'_capstone',name:j.name+' Capstone',type:'a',mp:48+Number(id)%20,pow:135+Number(id)%45,hits:(phys?2:1),buf:buff,st:status,sc:0.4,desc:'Base-class capstone: '+j.name+' reaches its full beginner-path identity.'}]]);
    if (max === 5 && !skillList.some(x=>x[0]===5)) skillList.push([5,[{id:'job_'+id+'_rare_capstone',name:j.name+' Rare Capstone',type:'a',mp:42,pow:135,buf:buff,st:status,sc:0.5,desc:'Rare/hidden class capstone unique to '+j.name+'.'}]]);
    j.skills = skillList;
    j.unique_role = role;
    j.unique_mechanic = mechanic;
  });

  window.UNIQUE_PATCH_VERSION = 'v0.4-race-job-identity';
})();
;
