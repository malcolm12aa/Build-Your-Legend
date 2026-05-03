// Build Your Legend data split from js/core/00_game_core.js
// Keep loaded before the core systems file.

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

const REQUIREMENT_GUIDE = {
  soul: [
    'Worldline Stabilization — gain EXP and clear a normal World Map zone before spending major level milestones.',
    'Cross-World Adaptation — defeat enemies from 3 anime categories before every 10th total level.',
    'Isekai Body Sync — heal to full HP/MP at the Inn after earning enough EXP.',
    'Limit Calibration — levels 25, 50, 75, and 100 require Challenge Mode clears.'
  ],
  race: [
    'Bloodline Proof — use at least one racial skill before each race level-up.',
    'Heritage Synchronization — equip at least one item from the same anime as your race.',
    'True Form Spark — every 5 race levels, defeat an enemy above your current level.',
    'Ancestral Boss Mark — every 10 race levels, defeat a raid/challenge enemy connected to your race anime.'
  ],
  jobs: {
    Base: [
      'Starter Art Practice — use the job\'s Level 1 skill 5 times.',
      'Base Identity Test — win 3 battles with that job equipped.',
      'Fundamental Mastery — spend at least 3 stat points in the job\'s main stat.',
      'Lv.15 Base Capstone — defeat a Challenge Mode enemy.'
    ],
    Advanced: [
      'Path Specialization — own at least one related Base job.',
      'Advanced Skill Chain — use a Base job skill and Advanced job skill in the same battle.',
      'Elite Combat Test — defeat an enemy while under a negative status.',
      'Lv.10 Advanced Capstone — clear a raid or defeat an enemy with 500+ HP.'
    ],
    Specialist: [
      'Narrow Build Rule — win 3 battles using the same combat style.',
      'Specialist Combo — use one job skill, one spell, and one gear skill in the same battle.',
      'Role Lock Trial — prove the role: support keeps recruits alive, attack finishes enemies, defense survives 5 turns.',
      'Specialist Gear Proof — activate any equipment skill.'
    ],
    Rare: [
      'Rare Class Deed — complete 1 raid.',
      'Rare Set Sync — activate a full anime set bonus.',
      'Rare Combat Record — defeat 25 total enemies.',
      'Rare Capstone Trial — defeat a raid boss with all active recruits alive.'
    ],
    Hidden: [
      'Secret Research Gate — spend gold on Hidden Class Research.',
      'Low HP Awakening — win with HP below 20%.',
      'Forbidden Setup — equip cursed/dark/rare gear and win a battle.',
      'Hidden Capstone — defeat a raid boss using a Hidden job skill, equipment skill, or set skill.'
    ]
  }
};

const SPECIFIC_JOB_REQUIREMENTS = {
  'Chakra Duelist':'Dodge/survive a hit, then land the finishing blow.',
  'Seal Artificer':'Inflict stun, marked, vulnerable, or weaken.',
  'Medical Striker':'Heal yourself or a recruit before winning.',
  'Summon Handler':'Win with at least one active recruit alive.',
  'ANBU Operative':'Defeat an enemy before turn 4.',
  'Zanpakuto Duelist':'Win using both a physical skill and MP skill.',
  'Kido Scholar':'Spend 100 MP across battles.',
  'Hoho Scout':'Win while haste is active.',
  'Soul Medic':'Restore HP or cleanse a status.',
  'Reishi Archer':'Defeat an enemy while focus is active.',
  'Haki Brawler':'Win without purchased spells.',
  'Sea Chef':'Use an item or heal before winning.',
  'Navigator Tactician':'Clear 3 different map zones.',
  'Shipwright Defender':'Survive 5 turns while guard is active.',
  'Sniper Trickshot':'Defeat a marked or vulnerable enemy.',
  'ODM Vanguard':'Win a battle in under 5 turns.',
  'Thunder Spear Lancer':'Defeat a high-HP enemy or boss.',
  'Field Commander':'Win with all active recruits alive.',
  'Wall Artillery Crew':'Use an AoE skill.',
  'Scout Medic':'Heal a recruit after they fall below 50% HP.',
  'Barrier Architect':'Block/survive damage while guard is active.',
  'Cursed Tool Duelist':'Equip a weapon and land a finishing blow.',
  'Shikigami Handler':'Win with 2 or more recruits active.',
  'Reverse Technique Medic':'Recover HP during battle.',
  'Simple Domain Guard':'Survive a raid boss ultimate-style move.',
  'Ki Striker':'Win using only physical/energy attacks.',
  'Energy Blaster':'Defeat an enemy with a high MP skill.',
  'Martial Monk':'Win without equipment skills.',
  'Capsule Engineer':'Buy or equip new gear before leveling.',
  'Fusion Dancer':'Win with a recruit from a different anime.',
  'Elemental Caster':'Inflict burn, freeze, paralysis, poison, or weaken.',
  'Requip Knight':'Change equipment, then win a battle.',
  'Script Mage':'Inflict marked or vulnerable.',
  'Celestial Contractor':'Win with a recruit alive.',
  'Guild Tactician':'Win with 3 active recruits.',
  'Aura Striker':'Win with focus active.',
  'Contract Specialist':'Perform Hidden Class Research.',
  'Beast Keeper':'Win with a recruit landing the finishing blow.',
  'Assassin Footwork':'Defeat an enemy quickly.',
  'Hunter Examiner':'Clear 3 Challenge Mode battles.'
};
