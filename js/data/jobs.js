// Auto-generated from Excel import and updated in v0.5.0.
// JOBS contains base starting jobs. JOB_PATHS contains advanced/specialist/rare/hidden paths.
// v0.5.0 adds Excel ability links, starting abilities, and learn tables.

export const JOBS = [
  {
    "id": "job_1000_warrior",
    "excelId": 1000,
    "name": "Warrior",
    "category": "Combat",
    "tier": "base",
    "maxLevel": 15,
    "description": "Warrior is a base Combat job imported from the Excel job registry.",
    "stats": {
      "str": 3,
      "con": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "paths": [
      "job_path_1073_warrior_vanguard",
      "job_path_1077_warrior_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_1001_swordsman",
    "excelId": 1001,
    "name": "Swordsman",
    "category": "Combat",
    "tier": "base",
    "maxLevel": 15,
    "description": "Swordsman is a base Combat job imported from the Excel job registry.",
    "stats": {
      "str": 3,
      "con": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "paths": [
      "job_path_1081_swordsman_vanguard",
      "job_path_1085_swordsman_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "guardian",
    "excelId": 1002,
    "name": "Knight",
    "category": "Combat",
    "tier": "base",
    "maxLevel": 15,
    "description": "Knight is a base Combat job imported from the Excel job registry.",
    "stats": {
      "str": 3,
      "con": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "paths": [
      "job_path_1089_knight_vanguard",
      "job_path_1093_knight_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_1003_paladin",
    "excelId": 1003,
    "name": "Paladin",
    "category": "Holy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Paladin is a base Holy job imported from the Excel job registry.",
    "stats": {
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "paths": [
      "job_path_1097_paladin_vanguard",
      "job_path_1101_paladin_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "fighter",
    "excelId": 1004,
    "name": "Fighter",
    "category": "Combat",
    "tier": "base",
    "maxLevel": 15,
    "description": "Fighter is a base Combat job imported from the Excel job registry.",
    "stats": {
      "str": 3,
      "con": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "paths": [
      "job_path_1105_fighter_vanguard",
      "job_path_1109_fighter_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_1005_spearman",
    "excelId": 1005,
    "name": "Spearman",
    "category": "Combat",
    "tier": "base",
    "maxLevel": 15,
    "description": "Spearman is a base Combat job imported from the Excel job registry.",
    "stats": {
      "str": 3,
      "con": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "paths": [
      "job_path_1113_spearman_vanguard",
      "job_path_1117_spearman_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_spear_2"
      },
      {
        "level": 10,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_1006_lancer",
    "excelId": 1006,
    "name": "Lancer",
    "category": "Combat",
    "tier": "base",
    "maxLevel": 15,
    "description": "Lancer is a base Combat job imported from the Excel job registry.",
    "stats": {
      "str": 3,
      "con": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "paths": [
      "job_path_1121_lancer_vanguard",
      "job_path_1125_lancer_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_spear_2"
      },
      {
        "level": 10,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "monk",
    "excelId": 1007,
    "name": "Monk",
    "category": "Martial Arts",
    "tier": "base",
    "maxLevel": 15,
    "description": "Monk is a base Martial Arts job imported from the Excel job registry.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_unarmed_1"
    ],
    "strengths": [
      "Stamina economy",
      "Self buffs"
    ],
    "weaknesses": [
      "Gear scaling"
    ],
    "paths": [
      "job_path_1129_monk_vanguard",
      "job_path_1133_monk_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_unarmed_2"
      },
      {
        "level": 10,
        "skillId": "v50_unarmed_3"
      }
    ]
  },
  {
    "id": "job_1008_berserker",
    "excelId": 1008,
    "name": "Berserker",
    "category": "Combat",
    "tier": "base",
    "maxLevel": 15,
    "description": "Berserker is a base Combat job imported from the Excel job registry.",
    "stats": {
      "str": 3,
      "con": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_axe_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "paths": [
      "job_path_1137_berserker_vanguard",
      "job_path_1141_berserker_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_axe_2"
      },
      {
        "level": 10,
        "skillId": "v50_axe_3"
      }
    ]
  },
  {
    "id": "mage",
    "excelId": 1009,
    "name": "Mage",
    "category": "Magic",
    "tier": "base",
    "maxLevel": 15,
    "description": "Mage is a base Magic job imported from the Excel job registry.",
    "stats": {
      "int": 4,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "paths": [
      "job_path_1145_mage_vanguard",
      "job_path_1149_mage_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_1010_wizard",
    "excelId": 1010,
    "name": "Wizard",
    "category": "Magic",
    "tier": "base",
    "maxLevel": 15,
    "description": "Wizard is a base Magic job imported from the Excel job registry.",
    "stats": {
      "int": 4,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "paths": [
      "job_path_1153_wizard_vanguard",
      "job_path_1157_wizard_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_1011_sorcerer",
    "excelId": 1011,
    "name": "Sorcerer",
    "category": "Magic",
    "tier": "base",
    "maxLevel": 15,
    "description": "Sorcerer is a base Magic job imported from the Excel job registry.",
    "stats": {
      "int": 4,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "paths": [
      "job_path_1161_sorcerer_vanguard",
      "job_path_1165_sorcerer_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_1012_elementalist",
    "excelId": 1012,
    "name": "Elementalist",
    "category": "Magic",
    "tier": "base",
    "maxLevel": 15,
    "description": "Elementalist is a base Magic job imported from the Excel job registry.",
    "stats": {
      "int": 4,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "paths": [
      "job_path_1169_elementalist_vanguard",
      "job_path_1173_elementalist_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1013_witch",
    "excelId": 1013,
    "name": "Witch",
    "category": "Dark",
    "tier": "base",
    "maxLevel": 15,
    "description": "Witch is a base Dark job imported from the Excel job registry.",
    "stats": {
      "int": 3,
      "cha": 2,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "paths": [
      "job_path_1177_witch_vanguard",
      "job_path_1181_witch_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_1014_summoner",
    "excelId": 1014,
    "name": "Summoner",
    "category": "Summoner / Tamer",
    "tier": "base",
    "maxLevel": 15,
    "description": "Summoner is a base Summoner / Tamer job imported from the Excel job registry.",
    "stats": {
      "wis": 2,
      "cha": 2,
      "int": 1
    },
    "levelGrowth": {
      "wis": 1,
      "cha": 1,
      "int": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Companion synergy",
      "Control"
    ],
    "weaknesses": [
      "Setup time"
    ],
    "paths": [
      "job_path_1185_summoner_vanguard",
      "job_path_1189_summoner_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1015_barrier_mage",
    "excelId": 1015,
    "name": "Barrier Mage",
    "category": "Magic",
    "tier": "base",
    "maxLevel": 15,
    "description": "Barrier Mage is a base Magic job imported from the Excel job registry.",
    "stats": {
      "int": 4,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "paths": [
      "job_path_1193_barrier_mage_vanguard",
      "job_path_1197_barrier_mage_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_1016_healer",
    "excelId": 1016,
    "name": "Healer",
    "category": "Support",
    "tier": "base",
    "maxLevel": 15,
    "description": "Healer is a base Support job imported from the Excel job registry.",
    "stats": {
      "cha": 3,
      "wis": 2
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "paths": [
      "job_path_1201_healer_vanguard",
      "job_path_1205_healer_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "cleric",
    "excelId": 1017,
    "name": "Cleric",
    "category": "Holy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Cleric is a base Holy job imported from the Excel job registry.",
    "stats": {
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "paths": [
      "job_path_1209_cleric_vanguard",
      "job_path_1213_cleric_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_1018_priest",
    "excelId": 1018,
    "name": "Priest",
    "category": "Holy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Priest is a base Holy job imported from the Excel job registry.",
    "stats": {
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "paths": [
      "job_path_1217_priest_vanguard",
      "job_path_1221_priest_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "bard",
    "excelId": 1019,
    "name": "Bard",
    "category": "Support",
    "tier": "base",
    "maxLevel": 15,
    "description": "Bard is a base Support job imported from the Excel job registry.",
    "stats": {
      "cha": 3,
      "wis": 2
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "paths": [
      "job_path_1225_bard_vanguard",
      "job_path_1229_bard_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1020_dancer",
    "excelId": 1020,
    "name": "Dancer",
    "category": "Support",
    "tier": "base",
    "maxLevel": 15,
    "description": "Dancer is a base Support job imported from the Excel job registry.",
    "stats": {
      "cha": 3,
      "wis": 2
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "paths": [
      "job_path_1233_dancer_vanguard",
      "job_path_1237_dancer_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1021_strategist",
    "excelId": 1021,
    "name": "Strategist",
    "category": "Support",
    "tier": "base",
    "maxLevel": 15,
    "description": "Strategist is a base Support job imported from the Excel job registry.",
    "stats": {
      "cha": 3,
      "wis": 2
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "paths": [
      "job_path_1241_strategist_vanguard",
      "job_path_1245_strategist_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1022_cook",
    "excelId": 1022,
    "name": "Cook",
    "category": "Support",
    "tier": "base",
    "maxLevel": 15,
    "description": "Cook is a base Support job imported from the Excel job registry.",
    "stats": {
      "cha": 3,
      "wis": 2
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "paths": [
      "job_path_1249_cook_vanguard",
      "job_path_1253_cook_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1023_buffer",
    "excelId": 1023,
    "name": "Buffer",
    "category": "Support",
    "tier": "base",
    "maxLevel": 15,
    "description": "Buffer is a base Support job imported from the Excel job registry.",
    "stats": {
      "cha": 3,
      "wis": 2
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "paths": [
      "job_path_1257_buffer_vanguard",
      "job_path_1261_buffer_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1024_archer",
    "excelId": 1024,
    "name": "Archer",
    "category": "Ranged",
    "tier": "base",
    "maxLevel": 15,
    "description": "Archer is a base Ranged job imported from the Excel job registry.",
    "stats": {
      "dex": 3,
      "wis": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "paths": [
      "job_path_1265_archer_vanguard",
      "job_path_1269_archer_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_1025_hunter",
    "excelId": 1025,
    "name": "Hunter",
    "category": "Ranged",
    "tier": "base",
    "maxLevel": 15,
    "description": "Hunter is a base Ranged job imported from the Excel job registry.",
    "stats": {
      "dex": 3,
      "wis": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "paths": [
      "job_path_1273_hunter_vanguard",
      "job_path_1277_hunter_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "ranger",
    "excelId": 1026,
    "name": "Ranger",
    "category": "Ranged",
    "tier": "base",
    "maxLevel": 15,
    "description": "Ranger is a base Ranged job imported from the Excel job registry.",
    "stats": {
      "dex": 3,
      "wis": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "paths": [
      "job_path_1281_ranger_vanguard",
      "job_path_1285_ranger_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_1027_sniper",
    "excelId": 1027,
    "name": "Sniper",
    "category": "Ranged",
    "tier": "base",
    "maxLevel": 15,
    "description": "Sniper is a base Ranged job imported from the Excel job registry.",
    "stats": {
      "dex": 3,
      "wis": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "paths": [
      "job_path_1289_sniper_vanguard",
      "job_path_1293_sniper_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_1028_gunslinger",
    "excelId": 1028,
    "name": "Gunslinger",
    "category": "Ranged",
    "tier": "base",
    "maxLevel": 15,
    "description": "Gunslinger is a base Ranged job imported from the Excel job registry.",
    "stats": {
      "dex": 3,
      "wis": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "paths": [
      "job_path_1297_gunslinger_vanguard",
      "job_path_1301_gunslinger_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1029_magic_gunner",
    "excelId": 1029,
    "name": "Magic Gunner",
    "category": "Ranged",
    "tier": "base",
    "maxLevel": 15,
    "description": "Magic Gunner is a base Ranged job imported from the Excel job registry.",
    "stats": {
      "dex": 3,
      "wis": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "paths": [
      "job_path_1305_magic_gunner_vanguard",
      "job_path_1309_magic_gunner_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "rogue",
    "excelId": 1030,
    "name": "Rogue",
    "category": "Rogue",
    "tier": "base",
    "maxLevel": 15,
    "description": "Rogue is a base Rogue job imported from the Excel job registry.",
    "stats": {
      "dex": 4,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "paths": [
      "job_path_1313_rogue_vanguard",
      "job_path_1317_rogue_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_1031_thief",
    "excelId": 1031,
    "name": "Thief",
    "category": "Rogue",
    "tier": "base",
    "maxLevel": 15,
    "description": "Thief is a base Rogue job imported from the Excel job registry.",
    "stats": {
      "dex": 4,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "paths": [
      "job_path_1321_thief_vanguard",
      "job_path_1325_thief_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_1032_assassin",
    "excelId": 1032,
    "name": "Assassin",
    "category": "Rogue",
    "tier": "base",
    "maxLevel": 15,
    "description": "Assassin is a base Rogue job imported from the Excel job registry.",
    "stats": {
      "dex": 4,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "paths": [
      "job_path_1329_assassin_vanguard",
      "job_path_1333_assassin_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_1033_ninja",
    "excelId": 1033,
    "name": "Ninja",
    "category": "Rogue",
    "tier": "base",
    "maxLevel": 15,
    "description": "Ninja is a base Rogue job imported from the Excel job registry.",
    "stats": {
      "dex": 4,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "paths": [
      "job_path_1337_ninja_vanguard",
      "job_path_1341_ninja_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_1034_scout",
    "excelId": 1034,
    "name": "Scout",
    "category": "Rogue",
    "tier": "base",
    "maxLevel": 15,
    "description": "Scout is a base Rogue job imported from the Excel job registry.",
    "stats": {
      "dex": 4,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "paths": [
      "job_path_1345_scout_vanguard",
      "job_path_1349_scout_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_1035_spy",
    "excelId": 1035,
    "name": "Spy",
    "category": "Rogue",
    "tier": "base",
    "maxLevel": 15,
    "description": "Spy is a base Rogue job imported from the Excel job registry.",
    "stats": {
      "dex": 4,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "paths": [
      "job_path_1353_spy_vanguard",
      "job_path_1357_spy_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_1036_trickster",
    "excelId": 1036,
    "name": "Trickster",
    "category": "Rogue",
    "tier": "base",
    "maxLevel": 15,
    "description": "Trickster is a base Rogue job imported from the Excel job registry.",
    "stats": {
      "dex": 4,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "paths": [
      "job_path_1361_trickster_vanguard",
      "job_path_1365_trickster_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_1037_blacksmith",
    "excelId": 1037,
    "name": "Blacksmith",
    "category": "Crafting",
    "tier": "base",
    "maxLevel": 15,
    "description": "Blacksmith is a base Crafting job imported from the Excel job registry.",
    "stats": {
      "int": 2,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "paths": [
      "job_path_1369_blacksmith_vanguard",
      "job_path_1373_blacksmith_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "alchemist",
    "excelId": 1038,
    "name": "Alchemist",
    "category": "Crafting",
    "tier": "base",
    "maxLevel": 15,
    "description": "Alchemist is a base Crafting job imported from the Excel job registry.",
    "stats": {
      "int": 2,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "paths": [
      "job_path_1377_alchemist_vanguard",
      "job_path_1381_alchemist_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 10,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_1039_enchanter",
    "excelId": 1039,
    "name": "Enchanter",
    "category": "Crafting",
    "tier": "base",
    "maxLevel": 15,
    "description": "Enchanter is a base Crafting job imported from the Excel job registry.",
    "stats": {
      "int": 2,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "paths": [
      "job_path_1385_enchanter_vanguard",
      "job_path_1389_enchanter_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1040_engineer",
    "excelId": 1040,
    "name": "Engineer",
    "category": "Crafting",
    "tier": "base",
    "maxLevel": 15,
    "description": "Engineer is a base Crafting job imported from the Excel job registry.",
    "stats": {
      "int": 2,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "paths": [
      "job_path_1393_engineer_vanguard",
      "job_path_1397_engineer_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 10,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_1041_tailor",
    "excelId": 1041,
    "name": "Tailor",
    "category": "Crafting",
    "tier": "base",
    "maxLevel": 15,
    "description": "Tailor is a base Crafting job imported from the Excel job registry.",
    "stats": {
      "int": 2,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "paths": [
      "job_path_1401_tailor_vanguard",
      "job_path_1405_tailor_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1042_chef",
    "excelId": 1042,
    "name": "Chef",
    "category": "Crafting",
    "tier": "base",
    "maxLevel": 15,
    "description": "Chef is a base Crafting job imported from the Excel job registry.",
    "stats": {
      "int": 2,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "paths": [
      "job_path_1409_chef_vanguard",
      "job_path_1413_chef_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1043_appraiser",
    "excelId": 1043,
    "name": "Appraiser",
    "category": "Crafting",
    "tier": "base",
    "maxLevel": 15,
    "description": "Appraiser is a base Crafting job imported from the Excel job registry.",
    "stats": {
      "int": 2,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "paths": [
      "job_path_1417_appraiser_vanguard",
      "job_path_1421_appraiser_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1044_merchant",
    "excelId": 1044,
    "name": "Merchant",
    "category": "Crafting",
    "tier": "base",
    "maxLevel": 15,
    "description": "Merchant is a base Crafting job imported from the Excel job registry.",
    "stats": {
      "int": 2,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "paths": [
      "job_path_1425_merchant_vanguard",
      "job_path_1429_merchant_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1045_saint",
    "excelId": 1045,
    "name": "Saint",
    "category": "Holy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Saint is a base Holy job imported from the Excel job registry.",
    "stats": {
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "paths": [
      "job_path_1433_saint_vanguard",
      "job_path_1437_saint_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_1046_exorcist",
    "excelId": 1046,
    "name": "Exorcist",
    "category": "Holy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Exorcist is a base Holy job imported from the Excel job registry.",
    "stats": {
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "paths": [
      "job_path_1441_exorcist_vanguard",
      "job_path_1445_exorcist_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_1047_templar",
    "excelId": 1047,
    "name": "Templar",
    "category": "Holy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Templar is a base Holy job imported from the Excel job registry.",
    "stats": {
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "paths": [
      "job_path_1449_templar_vanguard",
      "job_path_1453_templar_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_1048_oracle",
    "excelId": 1048,
    "name": "Oracle",
    "category": "Holy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Oracle is a base Holy job imported from the Excel job registry.",
    "stats": {
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "paths": [
      "job_path_1457_oracle_vanguard",
      "job_path_1461_oracle_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_1049_necromancer",
    "excelId": 1049,
    "name": "Necromancer",
    "category": "Dark",
    "tier": "base",
    "maxLevel": 15,
    "description": "Necromancer is a base Dark job imported from the Excel job registry.",
    "stats": {
      "int": 3,
      "cha": 2,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "paths": [
      "job_path_1465_necromancer_vanguard",
      "job_path_1469_necromancer_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_1050_warlock",
    "excelId": 1050,
    "name": "Warlock",
    "category": "Dark",
    "tier": "base",
    "maxLevel": 15,
    "description": "Warlock is a base Dark job imported from the Excel job registry.",
    "stats": {
      "int": 3,
      "cha": 2,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "paths": [
      "job_path_1473_warlock_vanguard",
      "job_path_1477_warlock_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_1051_dark_knight",
    "excelId": 1051,
    "name": "Dark Knight",
    "category": "Dark",
    "tier": "base",
    "maxLevel": 15,
    "description": "Dark Knight is a base Dark job imported from the Excel job registry.",
    "stats": {
      "int": 3,
      "cha": 2,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "paths": [
      "job_path_1481_dark_knight_vanguard",
      "job_path_1485_dark_knight_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_1052_curse_mage",
    "excelId": 1052,
    "name": "Curse Mage",
    "category": "Dark",
    "tier": "base",
    "maxLevel": 15,
    "description": "Curse Mage is a base Dark job imported from the Excel job registry.",
    "stats": {
      "int": 3,
      "cha": 2,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "paths": [
      "job_path_1489_curse_mage_vanguard",
      "job_path_1493_curse_mage_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_1053_blood_mage",
    "excelId": 1053,
    "name": "Blood Mage",
    "category": "Dark",
    "tier": "base",
    "maxLevel": 15,
    "description": "Blood Mage is a base Dark job imported from the Excel job registry.",
    "stats": {
      "int": 3,
      "cha": 2,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "paths": [
      "job_path_1497_blood_mage_vanguard",
      "job_path_1501_blood_mage_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_1054_reaper",
    "excelId": 1054,
    "name": "Reaper",
    "category": "Dark",
    "tier": "base",
    "maxLevel": 15,
    "description": "Reaper is a base Dark job imported from the Excel job registry.",
    "stats": {
      "int": 3,
      "cha": 2,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "paths": [
      "job_path_1505_reaper_vanguard",
      "job_path_1509_reaper_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_1055_demon_lord",
    "excelId": 1055,
    "name": "Demon Lord",
    "category": "Monster",
    "tier": "base",
    "maxLevel": 15,
    "description": "Demon Lord is a base Monster job imported from the Excel job registry.",
    "stats": {
      "str": 2,
      "con": 2,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "paths": [
      "job_path_1513_demon_lord_vanguard",
      "job_path_1517_demon_lord_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_1056_vampire_lord",
    "excelId": 1056,
    "name": "Vampire Lord",
    "category": "Monster",
    "tier": "base",
    "maxLevel": 15,
    "description": "Vampire Lord is a base Monster job imported from the Excel job registry.",
    "stats": {
      "str": 2,
      "con": 2,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "paths": [
      "job_path_1521_vampire_lord_vanguard",
      "job_path_1525_vampire_lord_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_1057_oni_warrior",
    "excelId": 1057,
    "name": "Oni Warrior",
    "category": "Monster",
    "tier": "base",
    "maxLevel": 15,
    "description": "Oni Warrior is a base Monster job imported from the Excel job registry.",
    "stats": {
      "str": 2,
      "con": 2,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "paths": [
      "job_path_1529_oni_warrior_vanguard",
      "job_path_1533_oni_warrior_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_1058_goblin_champion",
    "excelId": 1058,
    "name": "Goblin Champion",
    "category": "Monster",
    "tier": "base",
    "maxLevel": 15,
    "description": "Goblin Champion is a base Monster job imported from the Excel job registry.",
    "stats": {
      "str": 2,
      "con": 2,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "paths": [
      "job_path_1537_goblin_champion_vanguard",
      "job_path_1541_goblin_champion_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1059_slime_predator",
    "excelId": 1059,
    "name": "Slime Predator",
    "category": "Monster",
    "tier": "base",
    "maxLevel": 15,
    "description": "Slime Predator is a base Monster job imported from the Excel job registry.",
    "stats": {
      "str": 2,
      "con": 2,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "paths": [
      "job_path_1545_slime_predator_vanguard",
      "job_path_1549_slime_predator_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "job_1060_dragon_apostle",
    "excelId": 1060,
    "name": "Dragon Apostle",
    "category": "Monster",
    "tier": "base",
    "maxLevel": 15,
    "description": "Dragon Apostle is a base Monster job imported from the Excel job registry.",
    "stats": {
      "str": 2,
      "con": 2,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_fire_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "paths": [
      "job_path_1553_dragon_apostle_vanguard",
      "job_path_1557_dragon_apostle_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_fire_2"
      },
      {
        "level": 10,
        "skillId": "v50_fire_3"
      }
    ]
  },
  {
    "id": "job_1061_samurai",
    "excelId": 1061,
    "name": "Samurai",
    "category": "Japanese Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Samurai is a base Japanese Fantasy job imported from the Excel job registry.",
    "stats": {
      "dex": 2,
      "wis": 2,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "paths": [
      "job_path_1561_samurai_vanguard",
      "job_path_1565_samurai_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_1062_onmyoji",
    "excelId": 1062,
    "name": "Onmyoji",
    "category": "Japanese Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Onmyoji is a base Japanese Fantasy job imported from the Excel job registry.",
    "stats": {
      "dex": 2,
      "wis": 2,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "paths": [
      "job_path_1569_onmyoji_vanguard",
      "job_path_1573_onmyoji_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1063_miko",
    "excelId": 1063,
    "name": "Miko",
    "category": "Japanese Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Miko is a base Japanese Fantasy job imported from the Excel job registry.",
    "stats": {
      "dex": 2,
      "wis": 2,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "paths": [
      "job_path_1577_miko_vanguard",
      "job_path_1581_miko_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1064_cultivator",
    "excelId": 1064,
    "name": "Cultivator",
    "category": "Cultivation / Murim",
    "tier": "base",
    "maxLevel": 15,
    "description": "Cultivator is a base Cultivation / Murim job imported from the Excel job registry.",
    "stats": {
      "str": 2,
      "wis": 2,
      "con": 1
    },
    "levelGrowth": {
      "str": 1,
      "wis": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Scaling",
      "Inner power"
    ],
    "weaknesses": [
      "Slow start"
    ],
    "paths": [
      "job_path_1585_cultivator_vanguard",
      "job_path_1589_cultivator_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1065_esper",
    "excelId": 1065,
    "name": "Esper",
    "category": "Modern Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Esper is a base Modern Fantasy job imported from the Excel job registry.",
    "stats": {
      "dex": 2,
      "int": 2,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "paths": [
      "job_path_1593_esper_vanguard",
      "job_path_1597_esper_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1066_hero_student",
    "excelId": 1066,
    "name": "Hero Student",
    "category": "Modern Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Hero Student is a base Modern Fantasy job imported from the Excel job registry.",
    "stats": {
      "dex": 2,
      "int": 2,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "paths": [
      "job_path_1601_hero_student_vanguard",
      "job_path_1605_hero_student_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1067_pro_hero",
    "excelId": 1067,
    "name": "Pro Hero",
    "category": "Modern Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Pro Hero is a base Modern Fantasy job imported from the Excel job registry.",
    "stats": {
      "dex": 2,
      "int": 2,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "paths": [
      "job_path_1609_pro_hero_vanguard",
      "job_path_1613_pro_hero_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1068_adventurer",
    "excelId": 1068,
    "name": "Adventurer",
    "category": "Guild Jobs",
    "tier": "base",
    "maxLevel": 15,
    "description": "Adventurer is a base Guild Jobs job imported from the Excel job registry.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "paths": [
      "job_path_1617_adventurer_vanguard",
      "job_path_1621_adventurer_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1069_villager",
    "excelId": 1069,
    "name": "Villager",
    "category": "Guild Jobs",
    "tier": "base",
    "maxLevel": 15,
    "description": "Villager is a base Guild Jobs job imported from the Excel job registry.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "paths": [
      "job_path_1625_villager_vanguard",
      "job_path_1629_villager_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1070_farmer",
    "excelId": 1070,
    "name": "Farmer",
    "category": "Guild Jobs",
    "tier": "base",
    "maxLevel": 15,
    "description": "Farmer is a base Guild Jobs job imported from the Excel job registry.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "paths": [
      "job_path_1633_farmer_vanguard",
      "job_path_1637_farmer_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1071_mercenary",
    "excelId": 1071,
    "name": "Mercenary",
    "category": "Guild Jobs",
    "tier": "base",
    "maxLevel": 15,
    "description": "Mercenary is a base Guild Jobs job imported from the Excel job registry.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "paths": [
      "job_path_1641_mercenary_vanguard",
      "job_path_1645_mercenary_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_1072_bounty_hunter",
    "excelId": 1072,
    "name": "Bounty Hunter",
    "category": "Guild Jobs",
    "tier": "base",
    "maxLevel": 15,
    "description": "Bounty Hunter is a base Guild Jobs job imported from the Excel job registry.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "paths": [
      "job_path_1649_bounty_hunter_vanguard",
      "job_path_1653_bounty_hunter_adept"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  }
];

export const JOB_PATHS = [
  {
    "id": "job_path_1073_warrior_vanguard",
    "excelId": 1073,
    "name": "Warrior Vanguard",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1000_warrior",
    "description": "Warrior Vanguard is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1000,
      "previousJobId": 1000,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1074_warrior_paragon",
    "excelId": 1074,
    "name": "Warrior Paragon",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1073_warrior_vanguard",
    "description": "Warrior Paragon is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1000,
      "previousJobId": 1073,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1075_warrior_sovereign",
    "excelId": 1075,
    "name": "Warrior Sovereign",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1074_warrior_paragon",
    "description": "Warrior Sovereign is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1000,
      "previousJobId": 1074,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1076_world_crowned_warrior",
    "excelId": 1076,
    "name": "World-Crowned Warrior",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1075_warrior_sovereign",
    "description": "World-Crowned Warrior is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1000,
      "previousJobId": 1075,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1077_warrior_adept",
    "excelId": 1077,
    "name": "Warrior Adept",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1000_warrior",
    "description": "Warrior Adept is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1000,
      "previousJobId": 1000,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1078_eclipse_warrior",
    "excelId": 1078,
    "name": "Eclipse Warrior",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1077_warrior_adept",
    "description": "Eclipse Warrior is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1000,
      "previousJobId": 1077,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1079_mythic_warrior",
    "excelId": 1079,
    "name": "Mythic Warrior",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1078_eclipse_warrior",
    "description": "Mythic Warrior is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1000,
      "previousJobId": 1078,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1080_hidden_origin_warrior",
    "excelId": 1080,
    "name": "Hidden Origin Warrior",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1079_mythic_warrior",
    "description": "Hidden Origin Warrior is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1000,
      "previousJobId": 1079,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1081_swordsman_vanguard",
    "excelId": 1081,
    "name": "Swordsman Vanguard",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1001_swordsman",
    "description": "Swordsman Vanguard is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1001,
      "previousJobId": 1001,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1082_swordsman_paragon",
    "excelId": 1082,
    "name": "Swordsman Paragon",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1081_swordsman_vanguard",
    "description": "Swordsman Paragon is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1001,
      "previousJobId": 1081,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1083_swordsman_sovereign",
    "excelId": 1083,
    "name": "Swordsman Sovereign",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1082_swordsman_paragon",
    "description": "Swordsman Sovereign is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1001,
      "previousJobId": 1082,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1084_world_crowned_swordsman",
    "excelId": 1084,
    "name": "World-Crowned Swordsman",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1083_swordsman_sovereign",
    "description": "World-Crowned Swordsman is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1001,
      "previousJobId": 1083,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1085_swordsman_adept",
    "excelId": 1085,
    "name": "Swordsman Adept",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1001_swordsman",
    "description": "Swordsman Adept is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1001,
      "previousJobId": 1001,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1086_eclipse_swordsman",
    "excelId": 1086,
    "name": "Eclipse Swordsman",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1085_swordsman_adept",
    "description": "Eclipse Swordsman is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1001,
      "previousJobId": 1085,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1087_mythic_swordsman",
    "excelId": 1087,
    "name": "Mythic Swordsman",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1086_eclipse_swordsman",
    "description": "Mythic Swordsman is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1001,
      "previousJobId": 1086,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1088_hidden_origin_swordsman",
    "excelId": 1088,
    "name": "Hidden Origin Swordsman",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1087_mythic_swordsman",
    "description": "Hidden Origin Swordsman is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1001,
      "previousJobId": 1087,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1089_knight_vanguard",
    "excelId": 1089,
    "name": "Knight Vanguard",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "guardian",
    "description": "Knight Vanguard is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1002,
      "previousJobId": 1002,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1090_knight_paragon",
    "excelId": 1090,
    "name": "Knight Paragon",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1089_knight_vanguard",
    "description": "Knight Paragon is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1002,
      "previousJobId": 1089,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1091_knight_sovereign",
    "excelId": 1091,
    "name": "Knight Sovereign",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1090_knight_paragon",
    "description": "Knight Sovereign is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1002,
      "previousJobId": 1090,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1092_world_crowned_knight",
    "excelId": 1092,
    "name": "World-Crowned Knight",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1091_knight_sovereign",
    "description": "World-Crowned Knight is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1002,
      "previousJobId": 1091,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1093_knight_adept",
    "excelId": 1093,
    "name": "Knight Adept",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "guardian",
    "description": "Knight Adept is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1002,
      "previousJobId": 1002,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1094_eclipse_knight",
    "excelId": 1094,
    "name": "Eclipse Knight",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1093_knight_adept",
    "description": "Eclipse Knight is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1002,
      "previousJobId": 1093,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1095_mythic_knight",
    "excelId": 1095,
    "name": "Mythic Knight",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1094_eclipse_knight",
    "description": "Mythic Knight is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1002,
      "previousJobId": 1094,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1096_hidden_origin_knight",
    "excelId": 1096,
    "name": "Hidden Origin Knight",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1095_mythic_knight",
    "description": "Hidden Origin Knight is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1002,
      "previousJobId": 1095,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1097_paladin_vanguard",
    "excelId": 1097,
    "name": "Paladin Vanguard",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1003_paladin",
    "description": "Paladin Vanguard is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1003,
      "previousJobId": 1003,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1098_paladin_paragon",
    "excelId": 1098,
    "name": "Paladin Paragon",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1097_paladin_vanguard",
    "description": "Paladin Paragon is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1003,
      "previousJobId": 1097,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1099_paladin_sovereign",
    "excelId": 1099,
    "name": "Paladin Sovereign",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1098_paladin_paragon",
    "description": "Paladin Sovereign is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1003,
      "previousJobId": 1098,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1100_world_crowned_paladin",
    "excelId": 1100,
    "name": "World-Crowned Paladin",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1099_paladin_sovereign",
    "description": "World-Crowned Paladin is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1003,
      "previousJobId": 1099,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1101_paladin_adept",
    "excelId": 1101,
    "name": "Paladin Adept",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1003_paladin",
    "description": "Paladin Adept is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1003,
      "previousJobId": 1003,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1102_eclipse_paladin",
    "excelId": 1102,
    "name": "Eclipse Paladin",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1101_paladin_adept",
    "description": "Eclipse Paladin is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1003,
      "previousJobId": 1101,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1103_mythic_paladin",
    "excelId": 1103,
    "name": "Mythic Paladin",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1102_eclipse_paladin",
    "description": "Mythic Paladin is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1003,
      "previousJobId": 1102,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1104_hidden_origin_paladin",
    "excelId": 1104,
    "name": "Hidden Origin Paladin",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1103_mythic_paladin",
    "description": "Hidden Origin Paladin is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1003,
      "previousJobId": 1103,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1105_fighter_vanguard",
    "excelId": 1105,
    "name": "Fighter Vanguard",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "fighter",
    "description": "Fighter Vanguard is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1004,
      "previousJobId": 1004,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1106_fighter_paragon",
    "excelId": 1106,
    "name": "Fighter Paragon",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1105_fighter_vanguard",
    "description": "Fighter Paragon is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1004,
      "previousJobId": 1105,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1107_fighter_sovereign",
    "excelId": 1107,
    "name": "Fighter Sovereign",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1106_fighter_paragon",
    "description": "Fighter Sovereign is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1004,
      "previousJobId": 1106,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1108_world_crowned_fighter",
    "excelId": 1108,
    "name": "World-Crowned Fighter",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1107_fighter_sovereign",
    "description": "World-Crowned Fighter is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1004,
      "previousJobId": 1107,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1109_fighter_adept",
    "excelId": 1109,
    "name": "Fighter Adept",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "fighter",
    "description": "Fighter Adept is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1004,
      "previousJobId": 1004,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1110_eclipse_fighter",
    "excelId": 1110,
    "name": "Eclipse Fighter",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1109_fighter_adept",
    "description": "Eclipse Fighter is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1004,
      "previousJobId": 1109,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1111_mythic_fighter",
    "excelId": 1111,
    "name": "Mythic Fighter",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1110_eclipse_fighter",
    "description": "Mythic Fighter is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1004,
      "previousJobId": 1110,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1112_hidden_origin_fighter",
    "excelId": 1112,
    "name": "Hidden Origin Fighter",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1111_mythic_fighter",
    "description": "Hidden Origin Fighter is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1004,
      "previousJobId": 1111,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1113_spearman_vanguard",
    "excelId": 1113,
    "name": "Spearman Vanguard",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1005_spearman",
    "description": "Spearman Vanguard is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1005,
      "previousJobId": 1005,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_spear_2"
      },
      {
        "level": 10,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1114_spearman_paragon",
    "excelId": 1114,
    "name": "Spearman Paragon",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1113_spearman_vanguard",
    "description": "Spearman Paragon is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1005,
      "previousJobId": 1113,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_spear_2"
      },
      {
        "level": 10,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1115_spearman_sovereign",
    "excelId": 1115,
    "name": "Spearman Sovereign",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1114_spearman_paragon",
    "description": "Spearman Sovereign is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1005,
      "previousJobId": 1114,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_spear_2"
      },
      {
        "level": 5,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1116_world_crowned_spearman",
    "excelId": 1116,
    "name": "World-Crowned Spearman",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1115_spearman_sovereign",
    "description": "World-Crowned Spearman is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1005,
      "previousJobId": 1115,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_spear_2"
      },
      {
        "level": 5,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1117_spearman_adept",
    "excelId": 1117,
    "name": "Spearman Adept",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1005_spearman",
    "description": "Spearman Adept is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1005,
      "previousJobId": 1005,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_spear_2"
      },
      {
        "level": 10,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1118_eclipse_spearman",
    "excelId": 1118,
    "name": "Eclipse Spearman",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1117_spearman_adept",
    "description": "Eclipse Spearman is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1005,
      "previousJobId": 1117,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1119_mythic_spearman",
    "excelId": 1119,
    "name": "Mythic Spearman",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1118_eclipse_spearman",
    "description": "Mythic Spearman is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1005,
      "previousJobId": 1118,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_spear_2"
      },
      {
        "level": 5,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1120_hidden_origin_spearman",
    "excelId": 1120,
    "name": "Hidden Origin Spearman",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1119_mythic_spearman",
    "description": "Hidden Origin Spearman is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1005,
      "previousJobId": 1119,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_spear_2"
      },
      {
        "level": 5,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1121_lancer_vanguard",
    "excelId": 1121,
    "name": "Lancer Vanguard",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1006_lancer",
    "description": "Lancer Vanguard is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1006,
      "previousJobId": 1006,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_spear_2"
      },
      {
        "level": 10,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1122_lancer_paragon",
    "excelId": 1122,
    "name": "Lancer Paragon",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1121_lancer_vanguard",
    "description": "Lancer Paragon is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1006,
      "previousJobId": 1121,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_spear_2"
      },
      {
        "level": 10,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1123_lancer_sovereign",
    "excelId": 1123,
    "name": "Lancer Sovereign",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1122_lancer_paragon",
    "description": "Lancer Sovereign is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1006,
      "previousJobId": 1122,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_spear_2"
      },
      {
        "level": 5,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1124_world_crowned_lancer",
    "excelId": 1124,
    "name": "World-Crowned Lancer",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1123_lancer_sovereign",
    "description": "World-Crowned Lancer is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1006,
      "previousJobId": 1123,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_spear_2"
      },
      {
        "level": 5,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1125_lancer_adept",
    "excelId": 1125,
    "name": "Lancer Adept",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1006_lancer",
    "description": "Lancer Adept is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1006,
      "previousJobId": 1006,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_spear_2"
      },
      {
        "level": 10,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1126_eclipse_lancer",
    "excelId": 1126,
    "name": "Eclipse Lancer",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1125_lancer_adept",
    "description": "Eclipse Lancer is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1006,
      "previousJobId": 1125,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1127_mythic_lancer",
    "excelId": 1127,
    "name": "Mythic Lancer",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1126_eclipse_lancer",
    "description": "Mythic Lancer is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1006,
      "previousJobId": 1126,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_spear_2"
      },
      {
        "level": 5,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1128_hidden_origin_lancer",
    "excelId": 1128,
    "name": "Hidden Origin Lancer",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1127_mythic_lancer",
    "description": "Hidden Origin Lancer is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_spear_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1006,
      "previousJobId": 1127,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_spear_2"
      },
      {
        "level": 5,
        "skillId": "v50_spear_3"
      }
    ]
  },
  {
    "id": "job_path_1129_monk_vanguard",
    "excelId": 1129,
    "name": "Monk Vanguard",
    "category": "Martial Arts",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "monk",
    "description": "Monk Vanguard is an Excel-imported advanced job path in the Martial Arts category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_unarmed_1"
    ],
    "strengths": [
      "Stamina economy",
      "Self buffs"
    ],
    "weaknesses": [
      "Gear scaling"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1007,
      "previousJobId": 1007,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_unarmed_2"
      },
      {
        "level": 10,
        "skillId": "v50_unarmed_3"
      }
    ]
  },
  {
    "id": "job_path_1130_monk_paragon",
    "excelId": 1130,
    "name": "Monk Paragon",
    "category": "Martial Arts",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1129_monk_vanguard",
    "description": "Monk Paragon is an Excel-imported specialist job path in the Martial Arts category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_unarmed_1"
    ],
    "strengths": [
      "Stamina economy",
      "Self buffs"
    ],
    "weaknesses": [
      "Gear scaling"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1007,
      "previousJobId": 1129,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_unarmed_2"
      },
      {
        "level": 10,
        "skillId": "v50_unarmed_3"
      }
    ]
  },
  {
    "id": "job_path_1131_monk_sovereign",
    "excelId": 1131,
    "name": "Monk Sovereign",
    "category": "Martial Arts",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1130_monk_paragon",
    "description": "Monk Sovereign is an Excel-imported rare job path in the Martial Arts category.",
    "stats": {
      "str": 4,
      "dex": 4,
      "wis": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_unarmed_1"
    ],
    "strengths": [
      "Stamina economy",
      "Self buffs"
    ],
    "weaknesses": [
      "Gear scaling"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1007,
      "previousJobId": 1130,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_unarmed_2"
      },
      {
        "level": 5,
        "skillId": "v50_unarmed_3"
      }
    ]
  },
  {
    "id": "job_path_1132_world_crowned_monk",
    "excelId": 1132,
    "name": "World-Crowned Monk",
    "category": "Martial Arts",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1131_monk_sovereign",
    "description": "World-Crowned Monk is an Excel-imported hidden job path in the Martial Arts category.",
    "stats": {
      "str": 6,
      "dex": 6,
      "wis": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_unarmed_1"
    ],
    "strengths": [
      "Stamina economy",
      "Self buffs"
    ],
    "weaknesses": [
      "Gear scaling"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1007,
      "previousJobId": 1131,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_unarmed_2"
      },
      {
        "level": 5,
        "skillId": "v50_unarmed_3"
      }
    ]
  },
  {
    "id": "job_path_1133_monk_adept",
    "excelId": 1133,
    "name": "Monk Adept",
    "category": "Martial Arts",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "monk",
    "description": "Monk Adept is an Excel-imported advanced job path in the Martial Arts category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_unarmed_1"
    ],
    "strengths": [
      "Stamina economy",
      "Self buffs"
    ],
    "weaknesses": [
      "Gear scaling"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1007,
      "previousJobId": 1007,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_unarmed_2"
      },
      {
        "level": 10,
        "skillId": "v50_unarmed_3"
      }
    ]
  },
  {
    "id": "job_path_1134_eclipse_monk",
    "excelId": 1134,
    "name": "Eclipse Monk",
    "category": "Martial Arts",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1133_monk_adept",
    "description": "Eclipse Monk is an Excel-imported specialist job path in the Martial Arts category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Stamina economy",
      "Self buffs"
    ],
    "weaknesses": [
      "Gear scaling"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1007,
      "previousJobId": 1133,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1135_mythic_monk",
    "excelId": 1135,
    "name": "Mythic Monk",
    "category": "Martial Arts",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1134_eclipse_monk",
    "description": "Mythic Monk is an Excel-imported rare job path in the Martial Arts category.",
    "stats": {
      "str": 4,
      "dex": 4,
      "wis": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_unarmed_1"
    ],
    "strengths": [
      "Stamina economy",
      "Self buffs"
    ],
    "weaknesses": [
      "Gear scaling"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1007,
      "previousJobId": 1134,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_unarmed_2"
      },
      {
        "level": 5,
        "skillId": "v50_unarmed_3"
      }
    ]
  },
  {
    "id": "job_path_1136_hidden_origin_monk",
    "excelId": 1136,
    "name": "Hidden Origin Monk",
    "category": "Martial Arts",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1135_mythic_monk",
    "description": "Hidden Origin Monk is an Excel-imported hidden job path in the Martial Arts category.",
    "stats": {
      "str": 6,
      "dex": 6,
      "wis": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_unarmed_1"
    ],
    "strengths": [
      "Stamina economy",
      "Self buffs"
    ],
    "weaknesses": [
      "Gear scaling"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1007,
      "previousJobId": 1135,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_unarmed_2"
      },
      {
        "level": 5,
        "skillId": "v50_unarmed_3"
      }
    ]
  },
  {
    "id": "job_path_1137_berserker_vanguard",
    "excelId": 1137,
    "name": "Berserker Vanguard",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1008_berserker",
    "description": "Berserker Vanguard is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_axe_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1008,
      "previousJobId": 1008,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_axe_2"
      },
      {
        "level": 10,
        "skillId": "v50_axe_3"
      }
    ]
  },
  {
    "id": "job_path_1138_berserker_paragon",
    "excelId": 1138,
    "name": "Berserker Paragon",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1137_berserker_vanguard",
    "description": "Berserker Paragon is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_axe_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1008,
      "previousJobId": 1137,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_axe_2"
      },
      {
        "level": 10,
        "skillId": "v50_axe_3"
      }
    ]
  },
  {
    "id": "job_path_1139_berserker_sovereign",
    "excelId": 1139,
    "name": "Berserker Sovereign",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1138_berserker_paragon",
    "description": "Berserker Sovereign is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_axe_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1008,
      "previousJobId": 1138,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_axe_2"
      },
      {
        "level": 5,
        "skillId": "v50_axe_3"
      }
    ]
  },
  {
    "id": "job_path_1140_world_crowned_berserker",
    "excelId": 1140,
    "name": "World-Crowned Berserker",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1139_berserker_sovereign",
    "description": "World-Crowned Berserker is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_axe_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1008,
      "previousJobId": 1139,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_axe_2"
      },
      {
        "level": 5,
        "skillId": "v50_axe_3"
      }
    ]
  },
  {
    "id": "job_path_1141_berserker_adept",
    "excelId": 1141,
    "name": "Berserker Adept",
    "category": "Combat",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1008_berserker",
    "description": "Berserker Adept is an Excel-imported advanced job path in the Combat category.",
    "stats": {
      "str": 4,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_axe_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1008,
      "previousJobId": 1008,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_axe_2"
      },
      {
        "level": 10,
        "skillId": "v50_axe_3"
      }
    ]
  },
  {
    "id": "job_path_1142_eclipse_berserker",
    "excelId": 1142,
    "name": "Eclipse Berserker",
    "category": "Combat",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1141_berserker_adept",
    "description": "Eclipse Berserker is an Excel-imported specialist job path in the Combat category.",
    "stats": {
      "str": 5,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1008,
      "previousJobId": 1141,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1143_mythic_berserker",
    "excelId": 1143,
    "name": "Mythic Berserker",
    "category": "Combat",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1142_eclipse_berserker",
    "description": "Mythic Berserker is an Excel-imported rare job path in the Combat category.",
    "stats": {
      "str": 7,
      "con": 4
    },
    "levelGrowth": {
      "str": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_axe_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1008,
      "previousJobId": 1142,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_axe_2"
      },
      {
        "level": 5,
        "skillId": "v50_axe_3"
      }
    ]
  },
  {
    "id": "job_path_1144_hidden_origin_berserker",
    "excelId": 1144,
    "name": "Hidden Origin Berserker",
    "category": "Combat",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1143_mythic_berserker",
    "description": "Hidden Origin Berserker is an Excel-imported hidden job path in the Combat category.",
    "stats": {
      "str": 8,
      "con": 6
    },
    "levelGrowth": {
      "str": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_axe_1"
    ],
    "strengths": [
      "Reliable physical damage",
      "Good HP scaling"
    ],
    "weaknesses": [
      "Limited magic"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1008,
      "previousJobId": 1143,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_axe_2"
      },
      {
        "level": 5,
        "skillId": "v50_axe_3"
      }
    ]
  },
  {
    "id": "job_path_1145_mage_vanguard",
    "excelId": 1145,
    "name": "Mage Vanguard",
    "category": "Magic",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "mage",
    "description": "Mage Vanguard is an Excel-imported advanced job path in the Magic category.",
    "stats": {
      "int": 5,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1009,
      "previousJobId": 1009,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1146_mage_paragon",
    "excelId": 1146,
    "name": "Mage Paragon",
    "category": "Magic",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1145_mage_vanguard",
    "description": "Mage Paragon is an Excel-imported specialist job path in the Magic category.",
    "stats": {
      "int": 7,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1009,
      "previousJobId": 1145,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1147_mage_sovereign",
    "excelId": 1147,
    "name": "Mage Sovereign",
    "category": "Magic",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1146_mage_paragon",
    "description": "Mage Sovereign is an Excel-imported rare job path in the Magic category.",
    "stats": {
      "int": 9,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1009,
      "previousJobId": 1146,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1148_world_crowned_mage",
    "excelId": 1148,
    "name": "World-Crowned Mage",
    "category": "Magic",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1147_mage_sovereign",
    "description": "World-Crowned Mage is an Excel-imported hidden job path in the Magic category.",
    "stats": {
      "int": 11,
      "wis": 3,
      "con": -3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1009,
      "previousJobId": 1147,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1149_mage_adept",
    "excelId": 1149,
    "name": "Mage Adept",
    "category": "Magic",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "mage",
    "description": "Mage Adept is an Excel-imported advanced job path in the Magic category.",
    "stats": {
      "int": 5,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1009,
      "previousJobId": 1009,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1150_eclipse_mage",
    "excelId": 1150,
    "name": "Eclipse Mage",
    "category": "Magic",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1149_mage_adept",
    "description": "Eclipse Mage is an Excel-imported specialist job path in the Magic category.",
    "stats": {
      "int": 7,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1009,
      "previousJobId": 1149,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1151_mythic_mage",
    "excelId": 1151,
    "name": "Mythic Mage",
    "category": "Magic",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1150_eclipse_mage",
    "description": "Mythic Mage is an Excel-imported rare job path in the Magic category.",
    "stats": {
      "int": 9,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1009,
      "previousJobId": 1150,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1152_hidden_origin_mage",
    "excelId": 1152,
    "name": "Hidden Origin Mage",
    "category": "Magic",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1151_mythic_mage",
    "description": "Hidden Origin Mage is an Excel-imported hidden job path in the Magic category.",
    "stats": {
      "int": 11,
      "wis": 3,
      "con": -3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1009,
      "previousJobId": 1151,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1153_wizard_vanguard",
    "excelId": 1153,
    "name": "Wizard Vanguard",
    "category": "Magic",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1010_wizard",
    "description": "Wizard Vanguard is an Excel-imported advanced job path in the Magic category.",
    "stats": {
      "int": 5,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1010,
      "previousJobId": 1010,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1154_wizard_paragon",
    "excelId": 1154,
    "name": "Wizard Paragon",
    "category": "Magic",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1153_wizard_vanguard",
    "description": "Wizard Paragon is an Excel-imported specialist job path in the Magic category.",
    "stats": {
      "int": 7,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1010,
      "previousJobId": 1153,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1155_wizard_sovereign",
    "excelId": 1155,
    "name": "Wizard Sovereign",
    "category": "Magic",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1154_wizard_paragon",
    "description": "Wizard Sovereign is an Excel-imported rare job path in the Magic category.",
    "stats": {
      "int": 9,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1010,
      "previousJobId": 1154,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1156_world_crowned_wizard",
    "excelId": 1156,
    "name": "World-Crowned Wizard",
    "category": "Magic",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1155_wizard_sovereign",
    "description": "World-Crowned Wizard is an Excel-imported hidden job path in the Magic category.",
    "stats": {
      "int": 11,
      "wis": 3,
      "con": -3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1010,
      "previousJobId": 1155,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1157_wizard_adept",
    "excelId": 1157,
    "name": "Wizard Adept",
    "category": "Magic",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1010_wizard",
    "description": "Wizard Adept is an Excel-imported advanced job path in the Magic category.",
    "stats": {
      "int": 5,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1010,
      "previousJobId": 1010,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1158_eclipse_wizard",
    "excelId": 1158,
    "name": "Eclipse Wizard",
    "category": "Magic",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1157_wizard_adept",
    "description": "Eclipse Wizard is an Excel-imported specialist job path in the Magic category.",
    "stats": {
      "int": 7,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1010,
      "previousJobId": 1157,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1159_mythic_wizard",
    "excelId": 1159,
    "name": "Mythic Wizard",
    "category": "Magic",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1158_eclipse_wizard",
    "description": "Mythic Wizard is an Excel-imported rare job path in the Magic category.",
    "stats": {
      "int": 9,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1010,
      "previousJobId": 1158,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1160_hidden_origin_wizard",
    "excelId": 1160,
    "name": "Hidden Origin Wizard",
    "category": "Magic",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1159_mythic_wizard",
    "description": "Hidden Origin Wizard is an Excel-imported hidden job path in the Magic category.",
    "stats": {
      "int": 11,
      "wis": 3,
      "con": -3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1010,
      "previousJobId": 1159,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1161_sorcerer_vanguard",
    "excelId": 1161,
    "name": "Sorcerer Vanguard",
    "category": "Magic",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1011_sorcerer",
    "description": "Sorcerer Vanguard is an Excel-imported advanced job path in the Magic category.",
    "stats": {
      "int": 5,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1011,
      "previousJobId": 1011,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1162_sorcerer_paragon",
    "excelId": 1162,
    "name": "Sorcerer Paragon",
    "category": "Magic",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1161_sorcerer_vanguard",
    "description": "Sorcerer Paragon is an Excel-imported specialist job path in the Magic category.",
    "stats": {
      "int": 7,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1011,
      "previousJobId": 1161,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1163_sorcerer_sovereign",
    "excelId": 1163,
    "name": "Sorcerer Sovereign",
    "category": "Magic",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1162_sorcerer_paragon",
    "description": "Sorcerer Sovereign is an Excel-imported rare job path in the Magic category.",
    "stats": {
      "int": 9,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1011,
      "previousJobId": 1162,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1164_world_crowned_sorcerer",
    "excelId": 1164,
    "name": "World-Crowned Sorcerer",
    "category": "Magic",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1163_sorcerer_sovereign",
    "description": "World-Crowned Sorcerer is an Excel-imported hidden job path in the Magic category.",
    "stats": {
      "int": 11,
      "wis": 3,
      "con": -3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1011,
      "previousJobId": 1163,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1165_sorcerer_adept",
    "excelId": 1165,
    "name": "Sorcerer Adept",
    "category": "Magic",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1011_sorcerer",
    "description": "Sorcerer Adept is an Excel-imported advanced job path in the Magic category.",
    "stats": {
      "int": 5,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1011,
      "previousJobId": 1011,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1166_eclipse_sorcerer",
    "excelId": 1166,
    "name": "Eclipse Sorcerer",
    "category": "Magic",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1165_sorcerer_adept",
    "description": "Eclipse Sorcerer is an Excel-imported specialist job path in the Magic category.",
    "stats": {
      "int": 7,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1011,
      "previousJobId": 1165,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1167_mythic_sorcerer",
    "excelId": 1167,
    "name": "Mythic Sorcerer",
    "category": "Magic",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1166_eclipse_sorcerer",
    "description": "Mythic Sorcerer is an Excel-imported rare job path in the Magic category.",
    "stats": {
      "int": 9,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1011,
      "previousJobId": 1166,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1168_hidden_origin_sorcerer",
    "excelId": 1168,
    "name": "Hidden Origin Sorcerer",
    "category": "Magic",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1167_mythic_sorcerer",
    "description": "Hidden Origin Sorcerer is an Excel-imported hidden job path in the Magic category.",
    "stats": {
      "int": 11,
      "wis": 3,
      "con": -3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1011,
      "previousJobId": 1167,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1169_elementalist_vanguard",
    "excelId": 1169,
    "name": "Elementalist Vanguard",
    "category": "Magic",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1012_elementalist",
    "description": "Elementalist Vanguard is an Excel-imported advanced job path in the Magic category.",
    "stats": {
      "int": 5,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1012,
      "previousJobId": 1012,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1170_elementalist_paragon",
    "excelId": 1170,
    "name": "Elementalist Paragon",
    "category": "Magic",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1169_elementalist_vanguard",
    "description": "Elementalist Paragon is an Excel-imported specialist job path in the Magic category.",
    "stats": {
      "int": 7,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1012,
      "previousJobId": 1169,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1171_elementalist_sovereign",
    "excelId": 1171,
    "name": "Elementalist Sovereign",
    "category": "Magic",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1170_elementalist_paragon",
    "description": "Elementalist Sovereign is an Excel-imported rare job path in the Magic category.",
    "stats": {
      "int": 9,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1012,
      "previousJobId": 1170,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1172_world_crowned_elementalist",
    "excelId": 1172,
    "name": "World-Crowned Elementalist",
    "category": "Magic",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1171_elementalist_sovereign",
    "description": "World-Crowned Elementalist is an Excel-imported hidden job path in the Magic category.",
    "stats": {
      "int": 11,
      "wis": 3,
      "con": -3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1012,
      "previousJobId": 1171,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1173_elementalist_adept",
    "excelId": 1173,
    "name": "Elementalist Adept",
    "category": "Magic",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1012_elementalist",
    "description": "Elementalist Adept is an Excel-imported advanced job path in the Magic category.",
    "stats": {
      "int": 5,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1012,
      "previousJobId": 1012,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1174_eclipse_elementalist",
    "excelId": 1174,
    "name": "Eclipse Elementalist",
    "category": "Magic",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1173_elementalist_adept",
    "description": "Eclipse Elementalist is an Excel-imported specialist job path in the Magic category.",
    "stats": {
      "int": 7,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1012,
      "previousJobId": 1173,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1175_mythic_elementalist",
    "excelId": 1175,
    "name": "Mythic Elementalist",
    "category": "Magic",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1174_eclipse_elementalist",
    "description": "Mythic Elementalist is an Excel-imported rare job path in the Magic category.",
    "stats": {
      "int": 9,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1012,
      "previousJobId": 1174,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1176_hidden_origin_elementalist",
    "excelId": 1176,
    "name": "Hidden Origin Elementalist",
    "category": "Magic",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1175_mythic_elementalist",
    "description": "Hidden Origin Elementalist is an Excel-imported hidden job path in the Magic category.",
    "stats": {
      "int": 11,
      "wis": 3,
      "con": -3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1012,
      "previousJobId": 1175,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1177_witch_vanguard",
    "excelId": 1177,
    "name": "Witch Vanguard",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1013_witch",
    "description": "Witch Vanguard is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1013,
      "previousJobId": 1013,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1178_witch_paragon",
    "excelId": 1178,
    "name": "Witch Paragon",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1177_witch_vanguard",
    "description": "Witch Paragon is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1013,
      "previousJobId": 1177,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1179_witch_sovereign",
    "excelId": 1179,
    "name": "Witch Sovereign",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1178_witch_paragon",
    "description": "Witch Sovereign is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1013,
      "previousJobId": 1178,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1180_world_crowned_witch",
    "excelId": 1180,
    "name": "World-Crowned Witch",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1179_witch_sovereign",
    "description": "World-Crowned Witch is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1013,
      "previousJobId": 1179,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1181_witch_adept",
    "excelId": 1181,
    "name": "Witch Adept",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1013_witch",
    "description": "Witch Adept is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1013,
      "previousJobId": 1013,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1182_eclipse_witch",
    "excelId": 1182,
    "name": "Eclipse Witch",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1181_witch_adept",
    "description": "Eclipse Witch is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1013,
      "previousJobId": 1181,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1183_mythic_witch",
    "excelId": 1183,
    "name": "Mythic Witch",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1182_eclipse_witch",
    "description": "Mythic Witch is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1013,
      "previousJobId": 1182,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1184_hidden_origin_witch",
    "excelId": 1184,
    "name": "Hidden Origin Witch",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1183_mythic_witch",
    "description": "Hidden Origin Witch is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1013,
      "previousJobId": 1183,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1185_summoner_vanguard",
    "excelId": 1185,
    "name": "Summoner Vanguard",
    "category": "Summoner / Tamer",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1014_summoner",
    "description": "Summoner Vanguard is an Excel-imported advanced job path in the Summoner / Tamer category.",
    "stats": {
      "wis": 3,
      "cha": 3,
      "int": 1
    },
    "levelGrowth": {
      "wis": 1,
      "cha": 1,
      "int": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Companion synergy",
      "Control"
    ],
    "weaknesses": [
      "Setup time"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1014,
      "previousJobId": 1014,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1186_summoner_paragon",
    "excelId": 1186,
    "name": "Summoner Paragon",
    "category": "Summoner / Tamer",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1185_summoner_vanguard",
    "description": "Summoner Paragon is an Excel-imported specialist job path in the Summoner / Tamer category.",
    "stats": {
      "wis": 3,
      "cha": 3,
      "int": 2
    },
    "levelGrowth": {
      "wis": 1,
      "cha": 1,
      "int": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Companion synergy",
      "Control"
    ],
    "weaknesses": [
      "Setup time"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1014,
      "previousJobId": 1185,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1187_summoner_sovereign",
    "excelId": 1187,
    "name": "Summoner Sovereign",
    "category": "Summoner / Tamer",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1186_summoner_paragon",
    "description": "Summoner Sovereign is an Excel-imported rare job path in the Summoner / Tamer category.",
    "stats": {
      "wis": 4,
      "cha": 4,
      "int": 2
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 2,
      "int": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Companion synergy",
      "Control"
    ],
    "weaknesses": [
      "Setup time"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1014,
      "previousJobId": 1186,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1188_world_crowned_summoner",
    "excelId": 1188,
    "name": "World-Crowned Summoner",
    "category": "Summoner / Tamer",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1187_summoner_sovereign",
    "description": "World-Crowned Summoner is an Excel-imported hidden job path in the Summoner / Tamer category.",
    "stats": {
      "wis": 6,
      "cha": 6,
      "int": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 2,
      "int": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Companion synergy",
      "Control"
    ],
    "weaknesses": [
      "Setup time"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1014,
      "previousJobId": 1187,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1189_summoner_adept",
    "excelId": 1189,
    "name": "Summoner Adept",
    "category": "Summoner / Tamer",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1014_summoner",
    "description": "Summoner Adept is an Excel-imported advanced job path in the Summoner / Tamer category.",
    "stats": {
      "wis": 3,
      "cha": 3,
      "int": 1
    },
    "levelGrowth": {
      "wis": 1,
      "cha": 1,
      "int": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Companion synergy",
      "Control"
    ],
    "weaknesses": [
      "Setup time"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1014,
      "previousJobId": 1014,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1190_eclipse_summoner",
    "excelId": 1190,
    "name": "Eclipse Summoner",
    "category": "Summoner / Tamer",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1189_summoner_adept",
    "description": "Eclipse Summoner is an Excel-imported specialist job path in the Summoner / Tamer category.",
    "stats": {
      "wis": 3,
      "cha": 3,
      "int": 2
    },
    "levelGrowth": {
      "wis": 1,
      "cha": 1,
      "int": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Companion synergy",
      "Control"
    ],
    "weaknesses": [
      "Setup time"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1014,
      "previousJobId": 1189,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1191_mythic_summoner",
    "excelId": 1191,
    "name": "Mythic Summoner",
    "category": "Summoner / Tamer",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1190_eclipse_summoner",
    "description": "Mythic Summoner is an Excel-imported rare job path in the Summoner / Tamer category.",
    "stats": {
      "wis": 4,
      "cha": 4,
      "int": 2
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 2,
      "int": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Companion synergy",
      "Control"
    ],
    "weaknesses": [
      "Setup time"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1014,
      "previousJobId": 1190,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1192_hidden_origin_summoner",
    "excelId": 1192,
    "name": "Hidden Origin Summoner",
    "category": "Summoner / Tamer",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1191_mythic_summoner",
    "description": "Hidden Origin Summoner is an Excel-imported hidden job path in the Summoner / Tamer category.",
    "stats": {
      "wis": 6,
      "cha": 6,
      "int": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 2,
      "int": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Companion synergy",
      "Control"
    ],
    "weaknesses": [
      "Setup time"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1014,
      "previousJobId": 1191,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1193_barrier_mage_vanguard",
    "excelId": 1193,
    "name": "Barrier Mage Vanguard",
    "category": "Magic",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1015_barrier_mage",
    "description": "Barrier Mage Vanguard is an Excel-imported advanced job path in the Magic category.",
    "stats": {
      "int": 5,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1015,
      "previousJobId": 1015,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1194_barrier_mage_paragon",
    "excelId": 1194,
    "name": "Barrier Mage Paragon",
    "category": "Magic",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1193_barrier_mage_vanguard",
    "description": "Barrier Mage Paragon is an Excel-imported specialist job path in the Magic category.",
    "stats": {
      "int": 7,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1015,
      "previousJobId": 1193,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1195_barrier_mage_sovereign",
    "excelId": 1195,
    "name": "Barrier Mage Sovereign",
    "category": "Magic",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1194_barrier_mage_paragon",
    "description": "Barrier Mage Sovereign is an Excel-imported rare job path in the Magic category.",
    "stats": {
      "int": 9,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1015,
      "previousJobId": 1194,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1196_world_crowned_barrier_mage",
    "excelId": 1196,
    "name": "World-Crowned Barrier Mage",
    "category": "Magic",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1195_barrier_mage_sovereign",
    "description": "World-Crowned Barrier Mage is an Excel-imported hidden job path in the Magic category.",
    "stats": {
      "int": 11,
      "wis": 3,
      "con": -3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1015,
      "previousJobId": 1195,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1197_barrier_mage_adept",
    "excelId": 1197,
    "name": "Barrier Mage Adept",
    "category": "Magic",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1015_barrier_mage",
    "description": "Barrier Mage Adept is an Excel-imported advanced job path in the Magic category.",
    "stats": {
      "int": 5,
      "wis": 1,
      "con": -1
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1015,
      "previousJobId": 1015,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1198_eclipse_barrier_mage",
    "excelId": 1198,
    "name": "Eclipse Barrier Mage",
    "category": "Magic",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1197_barrier_mage_adept",
    "description": "Eclipse Barrier Mage is an Excel-imported specialist job path in the Magic category.",
    "stats": {
      "int": 7,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1015,
      "previousJobId": 1197,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1199_mythic_barrier_mage",
    "excelId": 1199,
    "name": "Mythic Barrier Mage",
    "category": "Magic",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1198_eclipse_barrier_mage",
    "description": "Mythic Barrier Mage is an Excel-imported rare job path in the Magic category.",
    "stats": {
      "int": 9,
      "wis": 2,
      "con": -2
    },
    "levelGrowth": {
      "int": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1015,
      "previousJobId": 1198,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1200_hidden_origin_barrier_mage",
    "excelId": 1200,
    "name": "Hidden Origin Barrier Mage",
    "category": "Magic",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1199_mythic_barrier_mage",
    "description": "Hidden Origin Barrier Mage is an Excel-imported hidden job path in the Magic category.",
    "stats": {
      "int": 11,
      "wis": 3,
      "con": -3
    },
    "levelGrowth": {
      "int": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "High mana",
      "Elemental spells"
    ],
    "weaknesses": [
      "Low HP"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1015,
      "previousJobId": 1199,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "job_path_1201_healer_vanguard",
    "excelId": 1201,
    "name": "Healer Vanguard",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1016_healer",
    "description": "Healer Vanguard is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1016,
      "previousJobId": 1016,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1202_healer_paragon",
    "excelId": 1202,
    "name": "Healer Paragon",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1201_healer_vanguard",
    "description": "Healer Paragon is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1016,
      "previousJobId": 1201,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1203_healer_sovereign",
    "excelId": 1203,
    "name": "Healer Sovereign",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1202_healer_paragon",
    "description": "Healer Sovereign is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1016,
      "previousJobId": 1202,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1204_world_crowned_healer",
    "excelId": 1204,
    "name": "World-Crowned Healer",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1203_healer_sovereign",
    "description": "World-Crowned Healer is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1016,
      "previousJobId": 1203,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1205_healer_adept",
    "excelId": 1205,
    "name": "Healer Adept",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1016_healer",
    "description": "Healer Adept is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1016,
      "previousJobId": 1016,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1206_eclipse_healer",
    "excelId": 1206,
    "name": "Eclipse Healer",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1205_healer_adept",
    "description": "Eclipse Healer is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1016,
      "previousJobId": 1205,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1207_mythic_healer",
    "excelId": 1207,
    "name": "Mythic Healer",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1206_eclipse_healer",
    "description": "Mythic Healer is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1016,
      "previousJobId": 1206,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1208_hidden_origin_healer",
    "excelId": 1208,
    "name": "Hidden Origin Healer",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1207_mythic_healer",
    "description": "Hidden Origin Healer is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1016,
      "previousJobId": 1207,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1209_cleric_vanguard",
    "excelId": 1209,
    "name": "Cleric Vanguard",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "cleric",
    "description": "Cleric Vanguard is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1017,
      "previousJobId": 1017,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1210_cleric_paragon",
    "excelId": 1210,
    "name": "Cleric Paragon",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1209_cleric_vanguard",
    "description": "Cleric Paragon is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1017,
      "previousJobId": 1209,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1211_cleric_sovereign",
    "excelId": 1211,
    "name": "Cleric Sovereign",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1210_cleric_paragon",
    "description": "Cleric Sovereign is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1017,
      "previousJobId": 1210,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1212_world_crowned_cleric",
    "excelId": 1212,
    "name": "World-Crowned Cleric",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1211_cleric_sovereign",
    "description": "World-Crowned Cleric is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1017,
      "previousJobId": 1211,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1213_cleric_adept",
    "excelId": 1213,
    "name": "Cleric Adept",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "cleric",
    "description": "Cleric Adept is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1017,
      "previousJobId": 1017,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1214_eclipse_cleric",
    "excelId": 1214,
    "name": "Eclipse Cleric",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1213_cleric_adept",
    "description": "Eclipse Cleric is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1017,
      "previousJobId": 1213,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1215_mythic_cleric",
    "excelId": 1215,
    "name": "Mythic Cleric",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1214_eclipse_cleric",
    "description": "Mythic Cleric is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1017,
      "previousJobId": 1214,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1216_hidden_origin_cleric",
    "excelId": 1216,
    "name": "Hidden Origin Cleric",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1215_mythic_cleric",
    "description": "Hidden Origin Cleric is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1017,
      "previousJobId": 1215,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1217_priest_vanguard",
    "excelId": 1217,
    "name": "Priest Vanguard",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1018_priest",
    "description": "Priest Vanguard is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1018,
      "previousJobId": 1018,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1218_priest_paragon",
    "excelId": 1218,
    "name": "Priest Paragon",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1217_priest_vanguard",
    "description": "Priest Paragon is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1018,
      "previousJobId": 1217,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1219_priest_sovereign",
    "excelId": 1219,
    "name": "Priest Sovereign",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1218_priest_paragon",
    "description": "Priest Sovereign is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1018,
      "previousJobId": 1218,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1220_world_crowned_priest",
    "excelId": 1220,
    "name": "World-Crowned Priest",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1219_priest_sovereign",
    "description": "World-Crowned Priest is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1018,
      "previousJobId": 1219,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1221_priest_adept",
    "excelId": 1221,
    "name": "Priest Adept",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1018_priest",
    "description": "Priest Adept is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1018,
      "previousJobId": 1018,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1222_eclipse_priest",
    "excelId": 1222,
    "name": "Eclipse Priest",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1221_priest_adept",
    "description": "Eclipse Priest is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1018,
      "previousJobId": 1221,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_healing_2"
      },
      {
        "level": 10,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1223_mythic_priest",
    "excelId": 1223,
    "name": "Mythic Priest",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1222_eclipse_priest",
    "description": "Mythic Priest is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1018,
      "previousJobId": 1222,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1224_hidden_origin_priest",
    "excelId": 1224,
    "name": "Hidden Origin Priest",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1223_mythic_priest",
    "description": "Hidden Origin Priest is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_healing_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1018,
      "previousJobId": 1223,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_healing_2"
      },
      {
        "level": 5,
        "skillId": "v50_healing_3"
      }
    ]
  },
  {
    "id": "job_path_1225_bard_vanguard",
    "excelId": 1225,
    "name": "Bard Vanguard",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "bard",
    "description": "Bard Vanguard is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1019,
      "previousJobId": 1019,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1226_bard_paragon",
    "excelId": 1226,
    "name": "Bard Paragon",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1225_bard_vanguard",
    "description": "Bard Paragon is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1019,
      "previousJobId": 1225,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1227_bard_sovereign",
    "excelId": 1227,
    "name": "Bard Sovereign",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1226_bard_paragon",
    "description": "Bard Sovereign is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1019,
      "previousJobId": 1226,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1228_world_crowned_bard",
    "excelId": 1228,
    "name": "World-Crowned Bard",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1227_bard_sovereign",
    "description": "World-Crowned Bard is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1019,
      "previousJobId": 1227,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1229_bard_adept",
    "excelId": 1229,
    "name": "Bard Adept",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "bard",
    "description": "Bard Adept is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1019,
      "previousJobId": 1019,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1230_eclipse_bard",
    "excelId": 1230,
    "name": "Eclipse Bard",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1229_bard_adept",
    "description": "Eclipse Bard is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1019,
      "previousJobId": 1229,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1231_mythic_bard",
    "excelId": 1231,
    "name": "Mythic Bard",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1230_eclipse_bard",
    "description": "Mythic Bard is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1019,
      "previousJobId": 1230,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1232_hidden_origin_bard",
    "excelId": 1232,
    "name": "Hidden Origin Bard",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1231_mythic_bard",
    "description": "Hidden Origin Bard is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1019,
      "previousJobId": 1231,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1233_dancer_vanguard",
    "excelId": 1233,
    "name": "Dancer Vanguard",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1020_dancer",
    "description": "Dancer Vanguard is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1020,
      "previousJobId": 1020,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1234_dancer_paragon",
    "excelId": 1234,
    "name": "Dancer Paragon",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1233_dancer_vanguard",
    "description": "Dancer Paragon is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1020,
      "previousJobId": 1233,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1235_dancer_sovereign",
    "excelId": 1235,
    "name": "Dancer Sovereign",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1234_dancer_paragon",
    "description": "Dancer Sovereign is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1020,
      "previousJobId": 1234,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1236_world_crowned_dancer",
    "excelId": 1236,
    "name": "World-Crowned Dancer",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1235_dancer_sovereign",
    "description": "World-Crowned Dancer is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1020,
      "previousJobId": 1235,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1237_dancer_adept",
    "excelId": 1237,
    "name": "Dancer Adept",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1020_dancer",
    "description": "Dancer Adept is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1020,
      "previousJobId": 1020,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1238_eclipse_dancer",
    "excelId": 1238,
    "name": "Eclipse Dancer",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1237_dancer_adept",
    "description": "Eclipse Dancer is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1020,
      "previousJobId": 1237,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1239_mythic_dancer",
    "excelId": 1239,
    "name": "Mythic Dancer",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1238_eclipse_dancer",
    "description": "Mythic Dancer is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1020,
      "previousJobId": 1238,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1240_hidden_origin_dancer",
    "excelId": 1240,
    "name": "Hidden Origin Dancer",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1239_mythic_dancer",
    "description": "Hidden Origin Dancer is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1020,
      "previousJobId": 1239,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1241_strategist_vanguard",
    "excelId": 1241,
    "name": "Strategist Vanguard",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1021_strategist",
    "description": "Strategist Vanguard is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1021,
      "previousJobId": 1021,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1242_strategist_paragon",
    "excelId": 1242,
    "name": "Strategist Paragon",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1241_strategist_vanguard",
    "description": "Strategist Paragon is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1021,
      "previousJobId": 1241,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1243_strategist_sovereign",
    "excelId": 1243,
    "name": "Strategist Sovereign",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1242_strategist_paragon",
    "description": "Strategist Sovereign is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1021,
      "previousJobId": 1242,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1244_world_crowned_strategist",
    "excelId": 1244,
    "name": "World-Crowned Strategist",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1243_strategist_sovereign",
    "description": "World-Crowned Strategist is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1021,
      "previousJobId": 1243,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1245_strategist_adept",
    "excelId": 1245,
    "name": "Strategist Adept",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1021_strategist",
    "description": "Strategist Adept is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1021,
      "previousJobId": 1021,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1246_eclipse_strategist",
    "excelId": 1246,
    "name": "Eclipse Strategist",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1245_strategist_adept",
    "description": "Eclipse Strategist is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1021,
      "previousJobId": 1245,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1247_mythic_strategist",
    "excelId": 1247,
    "name": "Mythic Strategist",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1246_eclipse_strategist",
    "description": "Mythic Strategist is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1021,
      "previousJobId": 1246,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1248_hidden_origin_strategist",
    "excelId": 1248,
    "name": "Hidden Origin Strategist",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1247_mythic_strategist",
    "description": "Hidden Origin Strategist is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1021,
      "previousJobId": 1247,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1249_cook_vanguard",
    "excelId": 1249,
    "name": "Cook Vanguard",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1022_cook",
    "description": "Cook Vanguard is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1022,
      "previousJobId": 1022,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1250_cook_paragon",
    "excelId": 1250,
    "name": "Cook Paragon",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1249_cook_vanguard",
    "description": "Cook Paragon is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1022,
      "previousJobId": 1249,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1251_cook_sovereign",
    "excelId": 1251,
    "name": "Cook Sovereign",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1250_cook_paragon",
    "description": "Cook Sovereign is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1022,
      "previousJobId": 1250,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1252_world_crowned_cook",
    "excelId": 1252,
    "name": "World-Crowned Cook",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1251_cook_sovereign",
    "description": "World-Crowned Cook is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1022,
      "previousJobId": 1251,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1253_cook_adept",
    "excelId": 1253,
    "name": "Cook Adept",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1022_cook",
    "description": "Cook Adept is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1022,
      "previousJobId": 1022,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1254_eclipse_cook",
    "excelId": 1254,
    "name": "Eclipse Cook",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1253_cook_adept",
    "description": "Eclipse Cook is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1022,
      "previousJobId": 1253,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1255_mythic_cook",
    "excelId": 1255,
    "name": "Mythic Cook",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1254_eclipse_cook",
    "description": "Mythic Cook is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1022,
      "previousJobId": 1254,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1256_hidden_origin_cook",
    "excelId": 1256,
    "name": "Hidden Origin Cook",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1255_mythic_cook",
    "description": "Hidden Origin Cook is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1022,
      "previousJobId": 1255,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1257_buffer_vanguard",
    "excelId": 1257,
    "name": "Buffer Vanguard",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1023_buffer",
    "description": "Buffer Vanguard is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1023,
      "previousJobId": 1023,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1258_buffer_paragon",
    "excelId": 1258,
    "name": "Buffer Paragon",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1257_buffer_vanguard",
    "description": "Buffer Paragon is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1023,
      "previousJobId": 1257,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1259_buffer_sovereign",
    "excelId": 1259,
    "name": "Buffer Sovereign",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1258_buffer_paragon",
    "description": "Buffer Sovereign is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1023,
      "previousJobId": 1258,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1260_world_crowned_buffer",
    "excelId": 1260,
    "name": "World-Crowned Buffer",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1259_buffer_sovereign",
    "description": "World-Crowned Buffer is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1023,
      "previousJobId": 1259,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1261_buffer_adept",
    "excelId": 1261,
    "name": "Buffer Adept",
    "category": "Support",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1023_buffer",
    "description": "Buffer Adept is an Excel-imported advanced job path in the Support category.",
    "stats": {
      "cha": 4,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1023,
      "previousJobId": 1023,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1262_eclipse_buffer",
    "excelId": 1262,
    "name": "Eclipse Buffer",
    "category": "Support",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1261_buffer_adept",
    "description": "Eclipse Buffer is an Excel-imported specialist job path in the Support category.",
    "stats": {
      "cha": 5,
      "wis": 3
    },
    "levelGrowth": {
      "cha": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1023,
      "previousJobId": 1261,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1263_mythic_buffer",
    "excelId": 1263,
    "name": "Mythic Buffer",
    "category": "Support",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1262_eclipse_buffer",
    "description": "Mythic Buffer is an Excel-imported rare job path in the Support category.",
    "stats": {
      "cha": 7,
      "wis": 4
    },
    "levelGrowth": {
      "cha": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1023,
      "previousJobId": 1262,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1264_hidden_origin_buffer",
    "excelId": 1264,
    "name": "Hidden Origin Buffer",
    "category": "Support",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1263_mythic_buffer",
    "description": "Hidden Origin Buffer is an Excel-imported hidden job path in the Support category.",
    "stats": {
      "cha": 8,
      "wis": 6
    },
    "levelGrowth": {
      "cha": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Party value",
      "Buffs"
    ],
    "weaknesses": [
      "Lower solo damage"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1023,
      "previousJobId": 1263,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1265_archer_vanguard",
    "excelId": 1265,
    "name": "Archer Vanguard",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1024_archer",
    "description": "Archer Vanguard is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1024,
      "previousJobId": 1024,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1266_archer_paragon",
    "excelId": 1266,
    "name": "Archer Paragon",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1265_archer_vanguard",
    "description": "Archer Paragon is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1024,
      "previousJobId": 1265,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1267_archer_sovereign",
    "excelId": 1267,
    "name": "Archer Sovereign",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1266_archer_paragon",
    "description": "Archer Sovereign is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1024,
      "previousJobId": 1266,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1268_world_crowned_archer",
    "excelId": 1268,
    "name": "World-Crowned Archer",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1267_archer_sovereign",
    "description": "World-Crowned Archer is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1024,
      "previousJobId": 1267,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1269_archer_adept",
    "excelId": 1269,
    "name": "Archer Adept",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1024_archer",
    "description": "Archer Adept is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1024,
      "previousJobId": 1024,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1270_eclipse_archer",
    "excelId": 1270,
    "name": "Eclipse Archer",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1269_archer_adept",
    "description": "Eclipse Archer is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1024,
      "previousJobId": 1269,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1271_mythic_archer",
    "excelId": 1271,
    "name": "Mythic Archer",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1270_eclipse_archer",
    "description": "Mythic Archer is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1024,
      "previousJobId": 1270,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1272_hidden_origin_archer",
    "excelId": 1272,
    "name": "Hidden Origin Archer",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1271_mythic_archer",
    "description": "Hidden Origin Archer is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1024,
      "previousJobId": 1271,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1273_hunter_vanguard",
    "excelId": 1273,
    "name": "Hunter Vanguard",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1025_hunter",
    "description": "Hunter Vanguard is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1025,
      "previousJobId": 1025,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1274_hunter_paragon",
    "excelId": 1274,
    "name": "Hunter Paragon",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1273_hunter_vanguard",
    "description": "Hunter Paragon is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1025,
      "previousJobId": 1273,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1275_hunter_sovereign",
    "excelId": 1275,
    "name": "Hunter Sovereign",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1274_hunter_paragon",
    "description": "Hunter Sovereign is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1025,
      "previousJobId": 1274,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1276_world_crowned_hunter",
    "excelId": 1276,
    "name": "World-Crowned Hunter",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1275_hunter_sovereign",
    "description": "World-Crowned Hunter is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1025,
      "previousJobId": 1275,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1277_hunter_adept",
    "excelId": 1277,
    "name": "Hunter Adept",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1025_hunter",
    "description": "Hunter Adept is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1025,
      "previousJobId": 1025,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1278_eclipse_hunter",
    "excelId": 1278,
    "name": "Eclipse Hunter",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1277_hunter_adept",
    "description": "Eclipse Hunter is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1025,
      "previousJobId": 1277,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1279_mythic_hunter",
    "excelId": 1279,
    "name": "Mythic Hunter",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1278_eclipse_hunter",
    "description": "Mythic Hunter is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1025,
      "previousJobId": 1278,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1280_hidden_origin_hunter",
    "excelId": 1280,
    "name": "Hidden Origin Hunter",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1279_mythic_hunter",
    "description": "Hidden Origin Hunter is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1025,
      "previousJobId": 1279,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1281_ranger_vanguard",
    "excelId": 1281,
    "name": "Ranger Vanguard",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "ranger",
    "description": "Ranger Vanguard is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1026,
      "previousJobId": 1026,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1282_ranger_paragon",
    "excelId": 1282,
    "name": "Ranger Paragon",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1281_ranger_vanguard",
    "description": "Ranger Paragon is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1026,
      "previousJobId": 1281,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1283_ranger_sovereign",
    "excelId": 1283,
    "name": "Ranger Sovereign",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1282_ranger_paragon",
    "description": "Ranger Sovereign is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1026,
      "previousJobId": 1282,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1284_world_crowned_ranger",
    "excelId": 1284,
    "name": "World-Crowned Ranger",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1283_ranger_sovereign",
    "description": "World-Crowned Ranger is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1026,
      "previousJobId": 1283,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1285_ranger_adept",
    "excelId": 1285,
    "name": "Ranger Adept",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "ranger",
    "description": "Ranger Adept is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1026,
      "previousJobId": 1026,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1286_eclipse_ranger",
    "excelId": 1286,
    "name": "Eclipse Ranger",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1285_ranger_adept",
    "description": "Eclipse Ranger is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1026,
      "previousJobId": 1285,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1287_mythic_ranger",
    "excelId": 1287,
    "name": "Mythic Ranger",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1286_eclipse_ranger",
    "description": "Mythic Ranger is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1026,
      "previousJobId": 1286,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1288_hidden_origin_ranger",
    "excelId": 1288,
    "name": "Hidden Origin Ranger",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1287_mythic_ranger",
    "description": "Hidden Origin Ranger is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1026,
      "previousJobId": 1287,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1289_sniper_vanguard",
    "excelId": 1289,
    "name": "Sniper Vanguard",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1027_sniper",
    "description": "Sniper Vanguard is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1027,
      "previousJobId": 1027,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1290_sniper_paragon",
    "excelId": 1290,
    "name": "Sniper Paragon",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1289_sniper_vanguard",
    "description": "Sniper Paragon is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1027,
      "previousJobId": 1289,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1291_sniper_sovereign",
    "excelId": 1291,
    "name": "Sniper Sovereign",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1290_sniper_paragon",
    "description": "Sniper Sovereign is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1027,
      "previousJobId": 1290,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1292_world_crowned_sniper",
    "excelId": 1292,
    "name": "World-Crowned Sniper",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1291_sniper_sovereign",
    "description": "World-Crowned Sniper is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1027,
      "previousJobId": 1291,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1293_sniper_adept",
    "excelId": 1293,
    "name": "Sniper Adept",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1027_sniper",
    "description": "Sniper Adept is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1027,
      "previousJobId": 1027,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1294_eclipse_sniper",
    "excelId": 1294,
    "name": "Eclipse Sniper",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1293_sniper_adept",
    "description": "Eclipse Sniper is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1027,
      "previousJobId": 1293,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1295_mythic_sniper",
    "excelId": 1295,
    "name": "Mythic Sniper",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1294_eclipse_sniper",
    "description": "Mythic Sniper is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1027,
      "previousJobId": 1294,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1296_hidden_origin_sniper",
    "excelId": 1296,
    "name": "Hidden Origin Sniper",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1295_mythic_sniper",
    "description": "Hidden Origin Sniper is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1027,
      "previousJobId": 1295,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1297_gunslinger_vanguard",
    "excelId": 1297,
    "name": "Gunslinger Vanguard",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1028_gunslinger",
    "description": "Gunslinger Vanguard is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1028,
      "previousJobId": 1028,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1298_gunslinger_paragon",
    "excelId": 1298,
    "name": "Gunslinger Paragon",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1297_gunslinger_vanguard",
    "description": "Gunslinger Paragon is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1028,
      "previousJobId": 1297,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1299_gunslinger_sovereign",
    "excelId": 1299,
    "name": "Gunslinger Sovereign",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1298_gunslinger_paragon",
    "description": "Gunslinger Sovereign is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1028,
      "previousJobId": 1298,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1300_world_crowned_gunslinger",
    "excelId": 1300,
    "name": "World-Crowned Gunslinger",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1299_gunslinger_sovereign",
    "description": "World-Crowned Gunslinger is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1028,
      "previousJobId": 1299,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1301_gunslinger_adept",
    "excelId": 1301,
    "name": "Gunslinger Adept",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1028_gunslinger",
    "description": "Gunslinger Adept is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1028,
      "previousJobId": 1028,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1302_eclipse_gunslinger",
    "excelId": 1302,
    "name": "Eclipse Gunslinger",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1301_gunslinger_adept",
    "description": "Eclipse Gunslinger is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1028,
      "previousJobId": 1301,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1303_mythic_gunslinger",
    "excelId": 1303,
    "name": "Mythic Gunslinger",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1302_eclipse_gunslinger",
    "description": "Mythic Gunslinger is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1028,
      "previousJobId": 1302,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1304_hidden_origin_gunslinger",
    "excelId": 1304,
    "name": "Hidden Origin Gunslinger",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1303_mythic_gunslinger",
    "description": "Hidden Origin Gunslinger is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1028,
      "previousJobId": 1303,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1305_magic_gunner_vanguard",
    "excelId": 1305,
    "name": "Magic Gunner Vanguard",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1029_magic_gunner",
    "description": "Magic Gunner Vanguard is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1029,
      "previousJobId": 1029,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1306_magic_gunner_paragon",
    "excelId": 1306,
    "name": "Magic Gunner Paragon",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1305_magic_gunner_vanguard",
    "description": "Magic Gunner Paragon is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1029,
      "previousJobId": 1305,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1307_magic_gunner_sovereign",
    "excelId": 1307,
    "name": "Magic Gunner Sovereign",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1306_magic_gunner_paragon",
    "description": "Magic Gunner Sovereign is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1029,
      "previousJobId": 1306,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1308_world_crowned_magic_gunner",
    "excelId": 1308,
    "name": "World-Crowned Magic Gunner",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1307_magic_gunner_sovereign",
    "description": "World-Crowned Magic Gunner is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1029,
      "previousJobId": 1307,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1309_magic_gunner_adept",
    "excelId": 1309,
    "name": "Magic Gunner Adept",
    "category": "Ranged",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1029_magic_gunner",
    "description": "Magic Gunner Adept is an Excel-imported advanced job path in the Ranged category.",
    "stats": {
      "dex": 4,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1029,
      "previousJobId": 1029,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1310_eclipse_magic_gunner",
    "excelId": 1310,
    "name": "Eclipse Magic Gunner",
    "category": "Ranged",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1309_magic_gunner_adept",
    "description": "Eclipse Magic Gunner is an Excel-imported specialist job path in the Ranged category.",
    "stats": {
      "dex": 5,
      "wis": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1029,
      "previousJobId": 1309,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1311_mythic_magic_gunner",
    "excelId": 1311,
    "name": "Mythic Magic Gunner",
    "category": "Ranged",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1310_eclipse_magic_gunner",
    "description": "Mythic Magic Gunner is an Excel-imported rare job path in the Ranged category.",
    "stats": {
      "dex": 7,
      "wis": 4
    },
    "levelGrowth": {
      "dex": 3,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1029,
      "previousJobId": 1310,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1312_hidden_origin_magic_gunner",
    "excelId": 1312,
    "name": "Hidden Origin Magic Gunner",
    "category": "Ranged",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1311_mythic_magic_gunner",
    "description": "Hidden Origin Magic Gunner is an Excel-imported hidden job path in the Ranged category.",
    "stats": {
      "dex": 8,
      "wis": 6
    },
    "levelGrowth": {
      "dex": 4,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Safe damage",
      "Precision"
    ],
    "weaknesses": [
      "Weak defense"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1029,
      "previousJobId": 1311,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1313_rogue_vanguard",
    "excelId": 1313,
    "name": "Rogue Vanguard",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "rogue",
    "description": "Rogue Vanguard is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1030,
      "previousJobId": 1030,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1314_rogue_paragon",
    "excelId": 1314,
    "name": "Rogue Paragon",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1313_rogue_vanguard",
    "description": "Rogue Paragon is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1030,
      "previousJobId": 1313,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1315_rogue_sovereign",
    "excelId": 1315,
    "name": "Rogue Sovereign",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1314_rogue_paragon",
    "description": "Rogue Sovereign is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1030,
      "previousJobId": 1314,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1316_world_crowned_rogue",
    "excelId": 1316,
    "name": "World-Crowned Rogue",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1315_rogue_sovereign",
    "description": "World-Crowned Rogue is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1030,
      "previousJobId": 1315,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1317_rogue_adept",
    "excelId": 1317,
    "name": "Rogue Adept",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "rogue",
    "description": "Rogue Adept is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1030,
      "previousJobId": 1030,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1318_eclipse_rogue",
    "excelId": 1318,
    "name": "Eclipse Rogue",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1317_rogue_adept",
    "description": "Eclipse Rogue is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1030,
      "previousJobId": 1317,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1319_mythic_rogue",
    "excelId": 1319,
    "name": "Mythic Rogue",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1318_eclipse_rogue",
    "description": "Mythic Rogue is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1030,
      "previousJobId": 1318,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1320_hidden_origin_rogue",
    "excelId": 1320,
    "name": "Hidden Origin Rogue",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1319_mythic_rogue",
    "description": "Hidden Origin Rogue is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1030,
      "previousJobId": 1319,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1321_thief_vanguard",
    "excelId": 1321,
    "name": "Thief Vanguard",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1031_thief",
    "description": "Thief Vanguard is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1031,
      "previousJobId": 1031,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1322_thief_paragon",
    "excelId": 1322,
    "name": "Thief Paragon",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1321_thief_vanguard",
    "description": "Thief Paragon is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1031,
      "previousJobId": 1321,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1323_thief_sovereign",
    "excelId": 1323,
    "name": "Thief Sovereign",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1322_thief_paragon",
    "description": "Thief Sovereign is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1031,
      "previousJobId": 1322,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1324_world_crowned_thief",
    "excelId": 1324,
    "name": "World-Crowned Thief",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1323_thief_sovereign",
    "description": "World-Crowned Thief is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1031,
      "previousJobId": 1323,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1325_thief_adept",
    "excelId": 1325,
    "name": "Thief Adept",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1031_thief",
    "description": "Thief Adept is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1031,
      "previousJobId": 1031,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1326_eclipse_thief",
    "excelId": 1326,
    "name": "Eclipse Thief",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1325_thief_adept",
    "description": "Eclipse Thief is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1031,
      "previousJobId": 1325,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1327_mythic_thief",
    "excelId": 1327,
    "name": "Mythic Thief",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1326_eclipse_thief",
    "description": "Mythic Thief is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1031,
      "previousJobId": 1326,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1328_hidden_origin_thief",
    "excelId": 1328,
    "name": "Hidden Origin Thief",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1327_mythic_thief",
    "description": "Hidden Origin Thief is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1031,
      "previousJobId": 1327,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1329_assassin_vanguard",
    "excelId": 1329,
    "name": "Assassin Vanguard",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1032_assassin",
    "description": "Assassin Vanguard is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1032,
      "previousJobId": 1032,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1330_assassin_paragon",
    "excelId": 1330,
    "name": "Assassin Paragon",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1329_assassin_vanguard",
    "description": "Assassin Paragon is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1032,
      "previousJobId": 1329,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1331_assassin_sovereign",
    "excelId": 1331,
    "name": "Assassin Sovereign",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1330_assassin_paragon",
    "description": "Assassin Sovereign is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1032,
      "previousJobId": 1330,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1332_world_crowned_assassin",
    "excelId": 1332,
    "name": "World-Crowned Assassin",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1331_assassin_sovereign",
    "description": "World-Crowned Assassin is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1032,
      "previousJobId": 1331,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1333_assassin_adept",
    "excelId": 1333,
    "name": "Assassin Adept",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1032_assassin",
    "description": "Assassin Adept is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1032,
      "previousJobId": 1032,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1334_eclipse_assassin",
    "excelId": 1334,
    "name": "Eclipse Assassin",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1333_assassin_adept",
    "description": "Eclipse Assassin is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1032,
      "previousJobId": 1333,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1335_mythic_assassin",
    "excelId": 1335,
    "name": "Mythic Assassin",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1334_eclipse_assassin",
    "description": "Mythic Assassin is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1032,
      "previousJobId": 1334,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1336_hidden_origin_assassin",
    "excelId": 1336,
    "name": "Hidden Origin Assassin",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1335_mythic_assassin",
    "description": "Hidden Origin Assassin is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1032,
      "previousJobId": 1335,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1337_ninja_vanguard",
    "excelId": 1337,
    "name": "Ninja Vanguard",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1033_ninja",
    "description": "Ninja Vanguard is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1033,
      "previousJobId": 1033,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1338_ninja_paragon",
    "excelId": 1338,
    "name": "Ninja Paragon",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1337_ninja_vanguard",
    "description": "Ninja Paragon is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1033,
      "previousJobId": 1337,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1339_ninja_sovereign",
    "excelId": 1339,
    "name": "Ninja Sovereign",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1338_ninja_paragon",
    "description": "Ninja Sovereign is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1033,
      "previousJobId": 1338,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1340_world_crowned_ninja",
    "excelId": 1340,
    "name": "World-Crowned Ninja",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1339_ninja_sovereign",
    "description": "World-Crowned Ninja is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1033,
      "previousJobId": 1339,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1341_ninja_adept",
    "excelId": 1341,
    "name": "Ninja Adept",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1033_ninja",
    "description": "Ninja Adept is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1033,
      "previousJobId": 1033,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1342_eclipse_ninja",
    "excelId": 1342,
    "name": "Eclipse Ninja",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1341_ninja_adept",
    "description": "Eclipse Ninja is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1033,
      "previousJobId": 1341,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1343_mythic_ninja",
    "excelId": 1343,
    "name": "Mythic Ninja",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1342_eclipse_ninja",
    "description": "Mythic Ninja is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1033,
      "previousJobId": 1342,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1344_hidden_origin_ninja",
    "excelId": 1344,
    "name": "Hidden Origin Ninja",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1343_mythic_ninja",
    "description": "Hidden Origin Ninja is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1033,
      "previousJobId": 1343,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1345_scout_vanguard",
    "excelId": 1345,
    "name": "Scout Vanguard",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1034_scout",
    "description": "Scout Vanguard is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1034,
      "previousJobId": 1034,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1346_scout_paragon",
    "excelId": 1346,
    "name": "Scout Paragon",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1345_scout_vanguard",
    "description": "Scout Paragon is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1034,
      "previousJobId": 1345,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1347_scout_sovereign",
    "excelId": 1347,
    "name": "Scout Sovereign",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1346_scout_paragon",
    "description": "Scout Sovereign is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1034,
      "previousJobId": 1346,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1348_world_crowned_scout",
    "excelId": 1348,
    "name": "World-Crowned Scout",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1347_scout_sovereign",
    "description": "World-Crowned Scout is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1034,
      "previousJobId": 1347,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1349_scout_adept",
    "excelId": 1349,
    "name": "Scout Adept",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1034_scout",
    "description": "Scout Adept is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1034,
      "previousJobId": 1034,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1350_eclipse_scout",
    "excelId": 1350,
    "name": "Eclipse Scout",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1349_scout_adept",
    "description": "Eclipse Scout is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1034,
      "previousJobId": 1349,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1351_mythic_scout",
    "excelId": 1351,
    "name": "Mythic Scout",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1350_eclipse_scout",
    "description": "Mythic Scout is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1034,
      "previousJobId": 1350,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1352_hidden_origin_scout",
    "excelId": 1352,
    "name": "Hidden Origin Scout",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1351_mythic_scout",
    "description": "Hidden Origin Scout is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1034,
      "previousJobId": 1351,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1353_spy_vanguard",
    "excelId": 1353,
    "name": "Spy Vanguard",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1035_spy",
    "description": "Spy Vanguard is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1035,
      "previousJobId": 1035,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1354_spy_paragon",
    "excelId": 1354,
    "name": "Spy Paragon",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1353_spy_vanguard",
    "description": "Spy Paragon is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1035,
      "previousJobId": 1353,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1355_spy_sovereign",
    "excelId": 1355,
    "name": "Spy Sovereign",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1354_spy_paragon",
    "description": "Spy Sovereign is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1035,
      "previousJobId": 1354,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1356_world_crowned_spy",
    "excelId": 1356,
    "name": "World-Crowned Spy",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1355_spy_sovereign",
    "description": "World-Crowned Spy is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1035,
      "previousJobId": 1355,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1357_spy_adept",
    "excelId": 1357,
    "name": "Spy Adept",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1035_spy",
    "description": "Spy Adept is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1035,
      "previousJobId": 1035,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1358_eclipse_spy",
    "excelId": 1358,
    "name": "Eclipse Spy",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1357_spy_adept",
    "description": "Eclipse Spy is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1035,
      "previousJobId": 1357,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1359_mythic_spy",
    "excelId": 1359,
    "name": "Mythic Spy",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1358_eclipse_spy",
    "description": "Mythic Spy is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1035,
      "previousJobId": 1358,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1360_hidden_origin_spy",
    "excelId": 1360,
    "name": "Hidden Origin Spy",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1359_mythic_spy",
    "description": "Hidden Origin Spy is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1035,
      "previousJobId": 1359,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1361_trickster_vanguard",
    "excelId": 1361,
    "name": "Trickster Vanguard",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1036_trickster",
    "description": "Trickster Vanguard is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1036,
      "previousJobId": 1036,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1362_trickster_paragon",
    "excelId": 1362,
    "name": "Trickster Paragon",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1361_trickster_vanguard",
    "description": "Trickster Paragon is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1036,
      "previousJobId": 1361,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1363_trickster_sovereign",
    "excelId": 1363,
    "name": "Trickster Sovereign",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1362_trickster_paragon",
    "description": "Trickster Sovereign is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1036,
      "previousJobId": 1362,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1364_world_crowned_trickster",
    "excelId": 1364,
    "name": "World-Crowned Trickster",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1363_trickster_sovereign",
    "description": "World-Crowned Trickster is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1036,
      "previousJobId": 1363,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1365_trickster_adept",
    "excelId": 1365,
    "name": "Trickster Adept",
    "category": "Rogue",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1036_trickster",
    "description": "Trickster Adept is an Excel-imported advanced job path in the Rogue category.",
    "stats": {
      "dex": 5,
      "str": 1
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1036,
      "previousJobId": 1036,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 10,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1366_eclipse_trickster",
    "excelId": 1366,
    "name": "Eclipse Trickster",
    "category": "Rogue",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1365_trickster_adept",
    "description": "Eclipse Trickster is an Excel-imported specialist job path in the Rogue category.",
    "stats": {
      "dex": 7,
      "str": 2
    },
    "levelGrowth": {
      "dex": 2,
      "str": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1036,
      "previousJobId": 1365,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1367_mythic_trickster",
    "excelId": 1367,
    "name": "Mythic Trickster",
    "category": "Rogue",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1366_eclipse_trickster",
    "description": "Mythic Trickster is an Excel-imported rare job path in the Rogue category.",
    "stats": {
      "dex": 9,
      "str": 2
    },
    "levelGrowth": {
      "dex": 3,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1036,
      "previousJobId": 1366,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1368_hidden_origin_trickster",
    "excelId": 1368,
    "name": "Hidden Origin Trickster",
    "category": "Rogue",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1367_mythic_trickster",
    "description": "Hidden Origin Trickster is an Excel-imported hidden job path in the Rogue category.",
    "stats": {
      "dex": 11,
      "str": 3
    },
    "levelGrowth": {
      "dex": 4,
      "str": 2
    },
    "startingSkills": [
      "v50_dagger_1"
    ],
    "strengths": [
      "Speed",
      "Status pressure"
    ],
    "weaknesses": [
      "Fragile"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1036,
      "previousJobId": 1367,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dagger_2"
      },
      {
        "level": 5,
        "skillId": "v50_dagger_3"
      }
    ]
  },
  {
    "id": "job_path_1369_blacksmith_vanguard",
    "excelId": 1369,
    "name": "Blacksmith Vanguard",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1037_blacksmith",
    "description": "Blacksmith Vanguard is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1037,
      "previousJobId": 1037,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1370_blacksmith_paragon",
    "excelId": 1370,
    "name": "Blacksmith Paragon",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1369_blacksmith_vanguard",
    "description": "Blacksmith Paragon is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1037,
      "previousJobId": 1369,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1371_blacksmith_sovereign",
    "excelId": 1371,
    "name": "Blacksmith Sovereign",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1370_blacksmith_paragon",
    "description": "Blacksmith Sovereign is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1037,
      "previousJobId": 1370,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1372_world_crowned_blacksmith",
    "excelId": 1372,
    "name": "World-Crowned Blacksmith",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1371_blacksmith_sovereign",
    "description": "World-Crowned Blacksmith is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1037,
      "previousJobId": 1371,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1373_blacksmith_adept",
    "excelId": 1373,
    "name": "Blacksmith Adept",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1037_blacksmith",
    "description": "Blacksmith Adept is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1037,
      "previousJobId": 1037,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1374_eclipse_blacksmith",
    "excelId": 1374,
    "name": "Eclipse Blacksmith",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1373_blacksmith_adept",
    "description": "Eclipse Blacksmith is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1037,
      "previousJobId": 1373,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1375_mythic_blacksmith",
    "excelId": 1375,
    "name": "Mythic Blacksmith",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1374_eclipse_blacksmith",
    "description": "Mythic Blacksmith is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1037,
      "previousJobId": 1374,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1376_hidden_origin_blacksmith",
    "excelId": 1376,
    "name": "Hidden Origin Blacksmith",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1375_mythic_blacksmith",
    "description": "Hidden Origin Blacksmith is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1037,
      "previousJobId": 1375,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1377_alchemist_vanguard",
    "excelId": 1377,
    "name": "Alchemist Vanguard",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "alchemist",
    "description": "Alchemist Vanguard is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1038,
      "previousJobId": 1038,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 10,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1378_alchemist_paragon",
    "excelId": 1378,
    "name": "Alchemist Paragon",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1377_alchemist_vanguard",
    "description": "Alchemist Paragon is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1038,
      "previousJobId": 1377,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 10,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1379_alchemist_sovereign",
    "excelId": 1379,
    "name": "Alchemist Sovereign",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1378_alchemist_paragon",
    "description": "Alchemist Sovereign is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1038,
      "previousJobId": 1378,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 5,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1380_world_crowned_alchemist",
    "excelId": 1380,
    "name": "World-Crowned Alchemist",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1379_alchemist_sovereign",
    "description": "World-Crowned Alchemist is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1038,
      "previousJobId": 1379,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 5,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1381_alchemist_adept",
    "excelId": 1381,
    "name": "Alchemist Adept",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "alchemist",
    "description": "Alchemist Adept is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1038,
      "previousJobId": 1038,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 10,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1382_eclipse_alchemist",
    "excelId": 1382,
    "name": "Eclipse Alchemist",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1381_alchemist_adept",
    "description": "Eclipse Alchemist is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1038,
      "previousJobId": 1381,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1383_mythic_alchemist",
    "excelId": 1383,
    "name": "Mythic Alchemist",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1382_eclipse_alchemist",
    "description": "Mythic Alchemist is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1038,
      "previousJobId": 1382,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 5,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1384_hidden_origin_alchemist",
    "excelId": 1384,
    "name": "Hidden Origin Alchemist",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1383_mythic_alchemist",
    "description": "Hidden Origin Alchemist is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1038,
      "previousJobId": 1383,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 5,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1385_enchanter_vanguard",
    "excelId": 1385,
    "name": "Enchanter Vanguard",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1039_enchanter",
    "description": "Enchanter Vanguard is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1039,
      "previousJobId": 1039,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1386_enchanter_paragon",
    "excelId": 1386,
    "name": "Enchanter Paragon",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1385_enchanter_vanguard",
    "description": "Enchanter Paragon is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1039,
      "previousJobId": 1385,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1387_enchanter_sovereign",
    "excelId": 1387,
    "name": "Enchanter Sovereign",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1386_enchanter_paragon",
    "description": "Enchanter Sovereign is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1039,
      "previousJobId": 1386,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1388_world_crowned_enchanter",
    "excelId": 1388,
    "name": "World-Crowned Enchanter",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1387_enchanter_sovereign",
    "description": "World-Crowned Enchanter is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1039,
      "previousJobId": 1387,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1389_enchanter_adept",
    "excelId": 1389,
    "name": "Enchanter Adept",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1039_enchanter",
    "description": "Enchanter Adept is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1039,
      "previousJobId": 1039,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1390_eclipse_enchanter",
    "excelId": 1390,
    "name": "Eclipse Enchanter",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1389_enchanter_adept",
    "description": "Eclipse Enchanter is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1039,
      "previousJobId": 1389,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1391_mythic_enchanter",
    "excelId": 1391,
    "name": "Mythic Enchanter",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1390_eclipse_enchanter",
    "description": "Mythic Enchanter is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1039,
      "previousJobId": 1390,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1392_hidden_origin_enchanter",
    "excelId": 1392,
    "name": "Hidden Origin Enchanter",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1391_mythic_enchanter",
    "description": "Hidden Origin Enchanter is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1039,
      "previousJobId": 1391,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1393_engineer_vanguard",
    "excelId": 1393,
    "name": "Engineer Vanguard",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1040_engineer",
    "description": "Engineer Vanguard is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1040,
      "previousJobId": 1040,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 10,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1394_engineer_paragon",
    "excelId": 1394,
    "name": "Engineer Paragon",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1393_engineer_vanguard",
    "description": "Engineer Paragon is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1040,
      "previousJobId": 1393,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 10,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1395_engineer_sovereign",
    "excelId": 1395,
    "name": "Engineer Sovereign",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1394_engineer_paragon",
    "description": "Engineer Sovereign is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1040,
      "previousJobId": 1394,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 5,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1396_world_crowned_engineer",
    "excelId": 1396,
    "name": "World-Crowned Engineer",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1395_engineer_sovereign",
    "description": "World-Crowned Engineer is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1040,
      "previousJobId": 1395,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 5,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1397_engineer_adept",
    "excelId": 1397,
    "name": "Engineer Adept",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1040_engineer",
    "description": "Engineer Adept is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1040,
      "previousJobId": 1040,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 10,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1398_eclipse_engineer",
    "excelId": 1398,
    "name": "Eclipse Engineer",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1397_engineer_adept",
    "description": "Eclipse Engineer is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1040,
      "previousJobId": 1397,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1399_mythic_engineer",
    "excelId": 1399,
    "name": "Mythic Engineer",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1398_eclipse_engineer",
    "description": "Mythic Engineer is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1040,
      "previousJobId": 1398,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 5,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1400_hidden_origin_engineer",
    "excelId": 1400,
    "name": "Hidden Origin Engineer",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1399_mythic_engineer",
    "description": "Hidden Origin Engineer is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_catalyst_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1040,
      "previousJobId": 1399,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_catalyst_2"
      },
      {
        "level": 5,
        "skillId": "v50_catalyst_3"
      }
    ]
  },
  {
    "id": "job_path_1401_tailor_vanguard",
    "excelId": 1401,
    "name": "Tailor Vanguard",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1041_tailor",
    "description": "Tailor Vanguard is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1041,
      "previousJobId": 1041,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1402_tailor_paragon",
    "excelId": 1402,
    "name": "Tailor Paragon",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1401_tailor_vanguard",
    "description": "Tailor Paragon is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1041,
      "previousJobId": 1401,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1403_tailor_sovereign",
    "excelId": 1403,
    "name": "Tailor Sovereign",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1402_tailor_paragon",
    "description": "Tailor Sovereign is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1041,
      "previousJobId": 1402,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1404_world_crowned_tailor",
    "excelId": 1404,
    "name": "World-Crowned Tailor",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1403_tailor_sovereign",
    "description": "World-Crowned Tailor is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1041,
      "previousJobId": 1403,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1405_tailor_adept",
    "excelId": 1405,
    "name": "Tailor Adept",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1041_tailor",
    "description": "Tailor Adept is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1041,
      "previousJobId": 1041,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1406_eclipse_tailor",
    "excelId": 1406,
    "name": "Eclipse Tailor",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1405_tailor_adept",
    "description": "Eclipse Tailor is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1041,
      "previousJobId": 1405,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1407_mythic_tailor",
    "excelId": 1407,
    "name": "Mythic Tailor",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1406_eclipse_tailor",
    "description": "Mythic Tailor is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1041,
      "previousJobId": 1406,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1408_hidden_origin_tailor",
    "excelId": 1408,
    "name": "Hidden Origin Tailor",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1407_mythic_tailor",
    "description": "Hidden Origin Tailor is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1041,
      "previousJobId": 1407,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1409_chef_vanguard",
    "excelId": 1409,
    "name": "Chef Vanguard",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1042_chef",
    "description": "Chef Vanguard is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1042,
      "previousJobId": 1042,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1410_chef_paragon",
    "excelId": 1410,
    "name": "Chef Paragon",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1409_chef_vanguard",
    "description": "Chef Paragon is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1042,
      "previousJobId": 1409,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1411_chef_sovereign",
    "excelId": 1411,
    "name": "Chef Sovereign",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1410_chef_paragon",
    "description": "Chef Sovereign is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1042,
      "previousJobId": 1410,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1412_world_crowned_chef",
    "excelId": 1412,
    "name": "World-Crowned Chef",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1411_chef_sovereign",
    "description": "World-Crowned Chef is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1042,
      "previousJobId": 1411,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1413_chef_adept",
    "excelId": 1413,
    "name": "Chef Adept",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1042_chef",
    "description": "Chef Adept is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1042,
      "previousJobId": 1042,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1414_eclipse_chef",
    "excelId": 1414,
    "name": "Eclipse Chef",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1413_chef_adept",
    "description": "Eclipse Chef is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1042,
      "previousJobId": 1413,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1415_mythic_chef",
    "excelId": 1415,
    "name": "Mythic Chef",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1414_eclipse_chef",
    "description": "Mythic Chef is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1042,
      "previousJobId": 1414,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1416_hidden_origin_chef",
    "excelId": 1416,
    "name": "Hidden Origin Chef",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1415_mythic_chef",
    "description": "Hidden Origin Chef is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1042,
      "previousJobId": 1415,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1417_appraiser_vanguard",
    "excelId": 1417,
    "name": "Appraiser Vanguard",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1043_appraiser",
    "description": "Appraiser Vanguard is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1043,
      "previousJobId": 1043,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1418_appraiser_paragon",
    "excelId": 1418,
    "name": "Appraiser Paragon",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1417_appraiser_vanguard",
    "description": "Appraiser Paragon is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1043,
      "previousJobId": 1417,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1419_appraiser_sovereign",
    "excelId": 1419,
    "name": "Appraiser Sovereign",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1418_appraiser_paragon",
    "description": "Appraiser Sovereign is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1043,
      "previousJobId": 1418,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1420_world_crowned_appraiser",
    "excelId": 1420,
    "name": "World-Crowned Appraiser",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1419_appraiser_sovereign",
    "description": "World-Crowned Appraiser is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1043,
      "previousJobId": 1419,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1421_appraiser_adept",
    "excelId": 1421,
    "name": "Appraiser Adept",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1043_appraiser",
    "description": "Appraiser Adept is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1043,
      "previousJobId": 1043,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1422_eclipse_appraiser",
    "excelId": 1422,
    "name": "Eclipse Appraiser",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1421_appraiser_adept",
    "description": "Eclipse Appraiser is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1043,
      "previousJobId": 1421,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1423_mythic_appraiser",
    "excelId": 1423,
    "name": "Mythic Appraiser",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1422_eclipse_appraiser",
    "description": "Mythic Appraiser is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1043,
      "previousJobId": 1422,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1424_hidden_origin_appraiser",
    "excelId": 1424,
    "name": "Hidden Origin Appraiser",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1423_mythic_appraiser",
    "description": "Hidden Origin Appraiser is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1043,
      "previousJobId": 1423,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1425_merchant_vanguard",
    "excelId": 1425,
    "name": "Merchant Vanguard",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1044_merchant",
    "description": "Merchant Vanguard is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1044,
      "previousJobId": 1044,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1426_merchant_paragon",
    "excelId": 1426,
    "name": "Merchant Paragon",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1425_merchant_vanguard",
    "description": "Merchant Paragon is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1044,
      "previousJobId": 1425,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1427_merchant_sovereign",
    "excelId": 1427,
    "name": "Merchant Sovereign",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1426_merchant_paragon",
    "description": "Merchant Sovereign is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1044,
      "previousJobId": 1426,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1428_world_crowned_merchant",
    "excelId": 1428,
    "name": "World-Crowned Merchant",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1427_merchant_sovereign",
    "description": "World-Crowned Merchant is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1044,
      "previousJobId": 1427,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1429_merchant_adept",
    "excelId": 1429,
    "name": "Merchant Adept",
    "category": "Crafting",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1044_merchant",
    "description": "Merchant Adept is an Excel-imported advanced job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1044,
      "previousJobId": 1044,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1430_eclipse_merchant",
    "excelId": 1430,
    "name": "Eclipse Merchant",
    "category": "Crafting",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1429_merchant_adept",
    "description": "Eclipse Merchant is an Excel-imported specialist job path in the Crafting category.",
    "stats": {
      "int": 3,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 1,
      "dex": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1044,
      "previousJobId": 1429,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1431_mythic_merchant",
    "excelId": 1431,
    "name": "Mythic Merchant",
    "category": "Crafting",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1430_eclipse_merchant",
    "description": "Mythic Merchant is an Excel-imported rare job path in the Crafting category.",
    "stats": {
      "int": 4,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1044,
      "previousJobId": 1430,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1432_hidden_origin_merchant",
    "excelId": 1432,
    "name": "Hidden Origin Merchant",
    "category": "Crafting",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1431_mythic_merchant",
    "description": "Hidden Origin Merchant is an Excel-imported hidden job path in the Crafting category.",
    "stats": {
      "int": 6,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "int": 2,
      "dex": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Items",
      "Utility"
    ],
    "weaknesses": [
      "Needs resources"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1044,
      "previousJobId": 1431,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1433_saint_vanguard",
    "excelId": 1433,
    "name": "Saint Vanguard",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1045_saint",
    "description": "Saint Vanguard is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1045,
      "previousJobId": 1045,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1434_saint_paragon",
    "excelId": 1434,
    "name": "Saint Paragon",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1433_saint_vanguard",
    "description": "Saint Paragon is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1045,
      "previousJobId": 1433,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1435_saint_sovereign",
    "excelId": 1435,
    "name": "Saint Sovereign",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1434_saint_paragon",
    "description": "Saint Sovereign is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1045,
      "previousJobId": 1434,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1436_world_crowned_saint",
    "excelId": 1436,
    "name": "World-Crowned Saint",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1435_saint_sovereign",
    "description": "World-Crowned Saint is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1045,
      "previousJobId": 1435,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1437_saint_adept",
    "excelId": 1437,
    "name": "Saint Adept",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1045_saint",
    "description": "Saint Adept is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1045,
      "previousJobId": 1045,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1438_eclipse_saint",
    "excelId": 1438,
    "name": "Eclipse Saint",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1437_saint_adept",
    "description": "Eclipse Saint is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1045,
      "previousJobId": 1437,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1439_mythic_saint",
    "excelId": 1439,
    "name": "Mythic Saint",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1438_eclipse_saint",
    "description": "Mythic Saint is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1045,
      "previousJobId": 1438,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1440_hidden_origin_saint",
    "excelId": 1440,
    "name": "Hidden Origin Saint",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1439_mythic_saint",
    "description": "Hidden Origin Saint is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1045,
      "previousJobId": 1439,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1441_exorcist_vanguard",
    "excelId": 1441,
    "name": "Exorcist Vanguard",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1046_exorcist",
    "description": "Exorcist Vanguard is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1046,
      "previousJobId": 1046,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1442_exorcist_paragon",
    "excelId": 1442,
    "name": "Exorcist Paragon",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1441_exorcist_vanguard",
    "description": "Exorcist Paragon is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1046,
      "previousJobId": 1441,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1443_exorcist_sovereign",
    "excelId": 1443,
    "name": "Exorcist Sovereign",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1442_exorcist_paragon",
    "description": "Exorcist Sovereign is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1046,
      "previousJobId": 1442,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1444_world_crowned_exorcist",
    "excelId": 1444,
    "name": "World-Crowned Exorcist",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1443_exorcist_sovereign",
    "description": "World-Crowned Exorcist is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1046,
      "previousJobId": 1443,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1445_exorcist_adept",
    "excelId": 1445,
    "name": "Exorcist Adept",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1046_exorcist",
    "description": "Exorcist Adept is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1046,
      "previousJobId": 1046,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1446_eclipse_exorcist",
    "excelId": 1446,
    "name": "Eclipse Exorcist",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1445_exorcist_adept",
    "description": "Eclipse Exorcist is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1046,
      "previousJobId": 1445,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1447_mythic_exorcist",
    "excelId": 1447,
    "name": "Mythic Exorcist",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1446_eclipse_exorcist",
    "description": "Mythic Exorcist is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1046,
      "previousJobId": 1446,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1448_hidden_origin_exorcist",
    "excelId": 1448,
    "name": "Hidden Origin Exorcist",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1447_mythic_exorcist",
    "description": "Hidden Origin Exorcist is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1046,
      "previousJobId": 1447,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1449_templar_vanguard",
    "excelId": 1449,
    "name": "Templar Vanguard",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1047_templar",
    "description": "Templar Vanguard is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1047,
      "previousJobId": 1047,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1450_templar_paragon",
    "excelId": 1450,
    "name": "Templar Paragon",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1449_templar_vanguard",
    "description": "Templar Paragon is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1047,
      "previousJobId": 1449,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1451_templar_sovereign",
    "excelId": 1451,
    "name": "Templar Sovereign",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1450_templar_paragon",
    "description": "Templar Sovereign is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1047,
      "previousJobId": 1450,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1452_world_crowned_templar",
    "excelId": 1452,
    "name": "World-Crowned Templar",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1451_templar_sovereign",
    "description": "World-Crowned Templar is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1047,
      "previousJobId": 1451,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1453_templar_adept",
    "excelId": 1453,
    "name": "Templar Adept",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1047_templar",
    "description": "Templar Adept is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1047,
      "previousJobId": 1047,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1454_eclipse_templar",
    "excelId": 1454,
    "name": "Eclipse Templar",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1453_templar_adept",
    "description": "Eclipse Templar is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1047,
      "previousJobId": 1453,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1455_mythic_templar",
    "excelId": 1455,
    "name": "Mythic Templar",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1454_eclipse_templar",
    "description": "Mythic Templar is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1047,
      "previousJobId": 1454,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1456_hidden_origin_templar",
    "excelId": 1456,
    "name": "Hidden Origin Templar",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1455_mythic_templar",
    "description": "Hidden Origin Templar is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1047,
      "previousJobId": 1455,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1457_oracle_vanguard",
    "excelId": 1457,
    "name": "Oracle Vanguard",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1048_oracle",
    "description": "Oracle Vanguard is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1048,
      "previousJobId": 1048,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1458_oracle_paragon",
    "excelId": 1458,
    "name": "Oracle Paragon",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1457_oracle_vanguard",
    "description": "Oracle Paragon is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1048,
      "previousJobId": 1457,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1459_oracle_sovereign",
    "excelId": 1459,
    "name": "Oracle Sovereign",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1458_oracle_paragon",
    "description": "Oracle Sovereign is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1048,
      "previousJobId": 1458,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1460_world_crowned_oracle",
    "excelId": 1460,
    "name": "World-Crowned Oracle",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1459_oracle_sovereign",
    "description": "World-Crowned Oracle is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1048,
      "previousJobId": 1459,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1461_oracle_adept",
    "excelId": 1461,
    "name": "Oracle Adept",
    "category": "Holy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1048_oracle",
    "description": "Oracle Adept is an Excel-imported advanced job path in the Holy category.",
    "stats": {
      "wis": 4,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1048,
      "previousJobId": 1048,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1462_eclipse_oracle",
    "excelId": 1462,
    "name": "Eclipse Oracle",
    "category": "Holy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1461_oracle_adept",
    "description": "Eclipse Oracle is an Excel-imported specialist job path in the Holy category.",
    "stats": {
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1048,
      "previousJobId": 1461,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1463_mythic_oracle",
    "excelId": 1463,
    "name": "Mythic Oracle",
    "category": "Holy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1462_eclipse_oracle",
    "description": "Mythic Oracle is an Excel-imported rare job path in the Holy category.",
    "stats": {
      "wis": 7,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1048,
      "previousJobId": 1462,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1464_hidden_origin_oracle",
    "excelId": 1464,
    "name": "Hidden Origin Oracle",
    "category": "Holy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1463_mythic_oracle",
    "description": "Hidden Origin Oracle is an Excel-imported hidden job path in the Holy category.",
    "stats": {
      "wis": 8,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light damage"
    ],
    "weaknesses": [
      "Average burst"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1048,
      "previousJobId": 1463,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      }
    ]
  },
  {
    "id": "job_path_1465_necromancer_vanguard",
    "excelId": 1465,
    "name": "Necromancer Vanguard",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1049_necromancer",
    "description": "Necromancer Vanguard is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1049,
      "previousJobId": 1049,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1466_necromancer_paragon",
    "excelId": 1466,
    "name": "Necromancer Paragon",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1465_necromancer_vanguard",
    "description": "Necromancer Paragon is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1049,
      "previousJobId": 1465,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1467_necromancer_sovereign",
    "excelId": 1467,
    "name": "Necromancer Sovereign",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1466_necromancer_paragon",
    "description": "Necromancer Sovereign is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1049,
      "previousJobId": 1466,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1468_world_crowned_necromancer",
    "excelId": 1468,
    "name": "World-Crowned Necromancer",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1467_necromancer_sovereign",
    "description": "World-Crowned Necromancer is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1049,
      "previousJobId": 1467,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1469_necromancer_adept",
    "excelId": 1469,
    "name": "Necromancer Adept",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1049_necromancer",
    "description": "Necromancer Adept is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1049,
      "previousJobId": 1049,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1470_eclipse_necromancer",
    "excelId": 1470,
    "name": "Eclipse Necromancer",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1469_necromancer_adept",
    "description": "Eclipse Necromancer is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1049,
      "previousJobId": 1469,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1471_mythic_necromancer",
    "excelId": 1471,
    "name": "Mythic Necromancer",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1470_eclipse_necromancer",
    "description": "Mythic Necromancer is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1049,
      "previousJobId": 1470,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1472_hidden_origin_necromancer",
    "excelId": 1472,
    "name": "Hidden Origin Necromancer",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1471_mythic_necromancer",
    "description": "Hidden Origin Necromancer is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1049,
      "previousJobId": 1471,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1473_warlock_vanguard",
    "excelId": 1473,
    "name": "Warlock Vanguard",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1050_warlock",
    "description": "Warlock Vanguard is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1050,
      "previousJobId": 1050,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1474_warlock_paragon",
    "excelId": 1474,
    "name": "Warlock Paragon",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1473_warlock_vanguard",
    "description": "Warlock Paragon is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1050,
      "previousJobId": 1473,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1475_warlock_sovereign",
    "excelId": 1475,
    "name": "Warlock Sovereign",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1474_warlock_paragon",
    "description": "Warlock Sovereign is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1050,
      "previousJobId": 1474,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1476_world_crowned_warlock",
    "excelId": 1476,
    "name": "World-Crowned Warlock",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1475_warlock_sovereign",
    "description": "World-Crowned Warlock is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1050,
      "previousJobId": 1475,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1477_warlock_adept",
    "excelId": 1477,
    "name": "Warlock Adept",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1050_warlock",
    "description": "Warlock Adept is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1050,
      "previousJobId": 1050,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1478_eclipse_warlock",
    "excelId": 1478,
    "name": "Eclipse Warlock",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1477_warlock_adept",
    "description": "Eclipse Warlock is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1050,
      "previousJobId": 1477,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1479_mythic_warlock",
    "excelId": 1479,
    "name": "Mythic Warlock",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1478_eclipse_warlock",
    "description": "Mythic Warlock is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1050,
      "previousJobId": 1478,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1480_hidden_origin_warlock",
    "excelId": 1480,
    "name": "Hidden Origin Warlock",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1479_mythic_warlock",
    "description": "Hidden Origin Warlock is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1050,
      "previousJobId": 1479,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1481_dark_knight_vanguard",
    "excelId": 1481,
    "name": "Dark Knight Vanguard",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1051_dark_knight",
    "description": "Dark Knight Vanguard is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1051,
      "previousJobId": 1051,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1482_dark_knight_paragon",
    "excelId": 1482,
    "name": "Dark Knight Paragon",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1481_dark_knight_vanguard",
    "description": "Dark Knight Paragon is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1051,
      "previousJobId": 1481,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1483_dark_knight_sovereign",
    "excelId": 1483,
    "name": "Dark Knight Sovereign",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1482_dark_knight_paragon",
    "description": "Dark Knight Sovereign is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1051,
      "previousJobId": 1482,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1484_world_crowned_dark_knight",
    "excelId": 1484,
    "name": "World-Crowned Dark Knight",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1483_dark_knight_sovereign",
    "description": "World-Crowned Dark Knight is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1051,
      "previousJobId": 1483,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1485_dark_knight_adept",
    "excelId": 1485,
    "name": "Dark Knight Adept",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1051_dark_knight",
    "description": "Dark Knight Adept is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1051,
      "previousJobId": 1051,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1486_eclipse_dark_knight",
    "excelId": 1486,
    "name": "Eclipse Dark Knight",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1485_dark_knight_adept",
    "description": "Eclipse Dark Knight is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1051,
      "previousJobId": 1485,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1487_mythic_dark_knight",
    "excelId": 1487,
    "name": "Mythic Dark Knight",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1486_eclipse_dark_knight",
    "description": "Mythic Dark Knight is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1051,
      "previousJobId": 1486,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1488_hidden_origin_dark_knight",
    "excelId": 1488,
    "name": "Hidden Origin Dark Knight",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1487_mythic_dark_knight",
    "description": "Hidden Origin Dark Knight is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1051,
      "previousJobId": 1487,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1489_curse_mage_vanguard",
    "excelId": 1489,
    "name": "Curse Mage Vanguard",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1052_curse_mage",
    "description": "Curse Mage Vanguard is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1052,
      "previousJobId": 1052,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1490_curse_mage_paragon",
    "excelId": 1490,
    "name": "Curse Mage Paragon",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1489_curse_mage_vanguard",
    "description": "Curse Mage Paragon is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1052,
      "previousJobId": 1489,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1491_curse_mage_sovereign",
    "excelId": 1491,
    "name": "Curse Mage Sovereign",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1490_curse_mage_paragon",
    "description": "Curse Mage Sovereign is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1052,
      "previousJobId": 1490,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1492_world_crowned_curse_mage",
    "excelId": 1492,
    "name": "World-Crowned Curse Mage",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1491_curse_mage_sovereign",
    "description": "World-Crowned Curse Mage is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1052,
      "previousJobId": 1491,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1493_curse_mage_adept",
    "excelId": 1493,
    "name": "Curse Mage Adept",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1052_curse_mage",
    "description": "Curse Mage Adept is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1052,
      "previousJobId": 1052,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1494_eclipse_curse_mage",
    "excelId": 1494,
    "name": "Eclipse Curse Mage",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1493_curse_mage_adept",
    "description": "Eclipse Curse Mage is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1052,
      "previousJobId": 1493,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1495_mythic_curse_mage",
    "excelId": 1495,
    "name": "Mythic Curse Mage",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1494_eclipse_curse_mage",
    "description": "Mythic Curse Mage is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1052,
      "previousJobId": 1494,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1496_hidden_origin_curse_mage",
    "excelId": 1496,
    "name": "Hidden Origin Curse Mage",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1495_mythic_curse_mage",
    "description": "Hidden Origin Curse Mage is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1052,
      "previousJobId": 1495,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1497_blood_mage_vanguard",
    "excelId": 1497,
    "name": "Blood Mage Vanguard",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1053_blood_mage",
    "description": "Blood Mage Vanguard is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1053,
      "previousJobId": 1053,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1498_blood_mage_paragon",
    "excelId": 1498,
    "name": "Blood Mage Paragon",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1497_blood_mage_vanguard",
    "description": "Blood Mage Paragon is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1053,
      "previousJobId": 1497,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1499_blood_mage_sovereign",
    "excelId": 1499,
    "name": "Blood Mage Sovereign",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1498_blood_mage_paragon",
    "description": "Blood Mage Sovereign is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1053,
      "previousJobId": 1498,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1500_world_crowned_blood_mage",
    "excelId": 1500,
    "name": "World-Crowned Blood Mage",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1499_blood_mage_sovereign",
    "description": "World-Crowned Blood Mage is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1053,
      "previousJobId": 1499,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1501_blood_mage_adept",
    "excelId": 1501,
    "name": "Blood Mage Adept",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1053_blood_mage",
    "description": "Blood Mage Adept is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1053,
      "previousJobId": 1053,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1502_eclipse_blood_mage",
    "excelId": 1502,
    "name": "Eclipse Blood Mage",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1501_blood_mage_adept",
    "description": "Eclipse Blood Mage is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1053,
      "previousJobId": 1501,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1503_mythic_blood_mage",
    "excelId": 1503,
    "name": "Mythic Blood Mage",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1502_eclipse_blood_mage",
    "description": "Mythic Blood Mage is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1053,
      "previousJobId": 1502,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1504_hidden_origin_blood_mage",
    "excelId": 1504,
    "name": "Hidden Origin Blood Mage",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1503_mythic_blood_mage",
    "description": "Hidden Origin Blood Mage is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1053,
      "previousJobId": 1503,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1505_reaper_vanguard",
    "excelId": 1505,
    "name": "Reaper Vanguard",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1054_reaper",
    "description": "Reaper Vanguard is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1054,
      "previousJobId": 1054,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1506_reaper_paragon",
    "excelId": 1506,
    "name": "Reaper Paragon",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1505_reaper_vanguard",
    "description": "Reaper Paragon is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1054,
      "previousJobId": 1505,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1507_reaper_sovereign",
    "excelId": 1507,
    "name": "Reaper Sovereign",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1506_reaper_paragon",
    "description": "Reaper Sovereign is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1054,
      "previousJobId": 1506,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1508_world_crowned_reaper",
    "excelId": 1508,
    "name": "World-Crowned Reaper",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1507_reaper_sovereign",
    "description": "World-Crowned Reaper is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1054,
      "previousJobId": 1507,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1509_reaper_adept",
    "excelId": 1509,
    "name": "Reaper Adept",
    "category": "Dark",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1054_reaper",
    "description": "Reaper Adept is an Excel-imported advanced job path in the Dark category.",
    "stats": {
      "int": 4,
      "cha": 3,
      "wis": -1
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1054,
      "previousJobId": 1054,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1510_eclipse_reaper",
    "excelId": 1510,
    "name": "Eclipse Reaper",
    "category": "Dark",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1509_reaper_adept",
    "description": "Eclipse Reaper is an Excel-imported specialist job path in the Dark category.",
    "stats": {
      "int": 5,
      "cha": 3,
      "wis": -2
    },
    "levelGrowth": {
      "int": 2,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1054,
      "previousJobId": 1509,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1511_mythic_reaper",
    "excelId": 1511,
    "name": "Mythic Reaper",
    "category": "Dark",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1510_eclipse_reaper",
    "description": "Mythic Reaper is an Excel-imported rare job path in the Dark category.",
    "stats": {
      "int": 7,
      "cha": 4,
      "wis": -2
    },
    "levelGrowth": {
      "int": 3,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1054,
      "previousJobId": 1510,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1512_hidden_origin_reaper",
    "excelId": 1512,
    "name": "Hidden Origin Reaper",
    "category": "Dark",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1511_mythic_reaper",
    "description": "Hidden Origin Reaper is an Excel-imported hidden job path in the Dark category.",
    "stats": {
      "int": 8,
      "cha": 6,
      "wis": -3
    },
    "levelGrowth": {
      "int": 4,
      "cha": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Curses",
      "Drain effects"
    ],
    "weaknesses": [
      "Light enemies"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1054,
      "previousJobId": 1511,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1513_demon_lord_vanguard",
    "excelId": 1513,
    "name": "Demon Lord Vanguard",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1055_demon_lord",
    "description": "Demon Lord Vanguard is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1055,
      "previousJobId": 1055,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1514_demon_lord_paragon",
    "excelId": 1514,
    "name": "Demon Lord Paragon",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1513_demon_lord_vanguard",
    "description": "Demon Lord Paragon is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1055,
      "previousJobId": 1513,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1515_demon_lord_sovereign",
    "excelId": 1515,
    "name": "Demon Lord Sovereign",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1514_demon_lord_paragon",
    "description": "Demon Lord Sovereign is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1055,
      "previousJobId": 1514,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1516_world_crowned_demon_lord",
    "excelId": 1516,
    "name": "World-Crowned Demon Lord",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1515_demon_lord_sovereign",
    "description": "World-Crowned Demon Lord is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1055,
      "previousJobId": 1515,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1517_demon_lord_adept",
    "excelId": 1517,
    "name": "Demon Lord Adept",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1055_demon_lord",
    "description": "Demon Lord Adept is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1055,
      "previousJobId": 1055,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1518_eclipse_demon_lord",
    "excelId": 1518,
    "name": "Eclipse Demon Lord",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1517_demon_lord_adept",
    "description": "Eclipse Demon Lord is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1055,
      "previousJobId": 1517,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1519_mythic_demon_lord",
    "excelId": 1519,
    "name": "Mythic Demon Lord",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1518_eclipse_demon_lord",
    "description": "Mythic Demon Lord is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1055,
      "previousJobId": 1518,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1520_hidden_origin_demon_lord",
    "excelId": 1520,
    "name": "Hidden Origin Demon Lord",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1519_mythic_demon_lord",
    "description": "Hidden Origin Demon Lord is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1055,
      "previousJobId": 1519,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1521_vampire_lord_vanguard",
    "excelId": 1521,
    "name": "Vampire Lord Vanguard",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1056_vampire_lord",
    "description": "Vampire Lord Vanguard is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1056,
      "previousJobId": 1056,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1522_vampire_lord_paragon",
    "excelId": 1522,
    "name": "Vampire Lord Paragon",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1521_vampire_lord_vanguard",
    "description": "Vampire Lord Paragon is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1056,
      "previousJobId": 1521,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1523_vampire_lord_sovereign",
    "excelId": 1523,
    "name": "Vampire Lord Sovereign",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1522_vampire_lord_paragon",
    "description": "Vampire Lord Sovereign is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1056,
      "previousJobId": 1522,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1524_world_crowned_vampire_lord",
    "excelId": 1524,
    "name": "World-Crowned Vampire Lord",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1523_vampire_lord_sovereign",
    "description": "World-Crowned Vampire Lord is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1056,
      "previousJobId": 1523,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1525_vampire_lord_adept",
    "excelId": 1525,
    "name": "Vampire Lord Adept",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1056_vampire_lord",
    "description": "Vampire Lord Adept is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1056,
      "previousJobId": 1056,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1526_eclipse_vampire_lord",
    "excelId": 1526,
    "name": "Eclipse Vampire Lord",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1525_vampire_lord_adept",
    "description": "Eclipse Vampire Lord is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1056,
      "previousJobId": 1525,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1527_mythic_vampire_lord",
    "excelId": 1527,
    "name": "Mythic Vampire Lord",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1526_eclipse_vampire_lord",
    "description": "Mythic Vampire Lord is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1056,
      "previousJobId": 1526,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1528_hidden_origin_vampire_lord",
    "excelId": 1528,
    "name": "Hidden Origin Vampire Lord",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1527_mythic_vampire_lord",
    "description": "Hidden Origin Vampire Lord is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1056,
      "previousJobId": 1527,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1529_oni_warrior_vanguard",
    "excelId": 1529,
    "name": "Oni Warrior Vanguard",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1057_oni_warrior",
    "description": "Oni Warrior Vanguard is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1057,
      "previousJobId": 1057,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1530_oni_warrior_paragon",
    "excelId": 1530,
    "name": "Oni Warrior Paragon",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1529_oni_warrior_vanguard",
    "description": "Oni Warrior Paragon is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1057,
      "previousJobId": 1529,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1531_oni_warrior_sovereign",
    "excelId": 1531,
    "name": "Oni Warrior Sovereign",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1530_oni_warrior_paragon",
    "description": "Oni Warrior Sovereign is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1057,
      "previousJobId": 1530,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1532_world_crowned_oni_warrior",
    "excelId": 1532,
    "name": "World-Crowned Oni Warrior",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1531_oni_warrior_sovereign",
    "description": "World-Crowned Oni Warrior is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1057,
      "previousJobId": 1531,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1533_oni_warrior_adept",
    "excelId": 1533,
    "name": "Oni Warrior Adept",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1057_oni_warrior",
    "description": "Oni Warrior Adept is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1057,
      "previousJobId": 1057,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1534_eclipse_oni_warrior",
    "excelId": 1534,
    "name": "Eclipse Oni Warrior",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1533_oni_warrior_adept",
    "description": "Eclipse Oni Warrior is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1057,
      "previousJobId": 1533,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1535_mythic_oni_warrior",
    "excelId": 1535,
    "name": "Mythic Oni Warrior",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1534_eclipse_oni_warrior",
    "description": "Mythic Oni Warrior is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1057,
      "previousJobId": 1534,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1536_hidden_origin_oni_warrior",
    "excelId": 1536,
    "name": "Hidden Origin Oni Warrior",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1535_mythic_oni_warrior",
    "description": "Hidden Origin Oni Warrior is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1057,
      "previousJobId": 1535,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1537_goblin_champion_vanguard",
    "excelId": 1537,
    "name": "Goblin Champion Vanguard",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1058_goblin_champion",
    "description": "Goblin Champion Vanguard is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1058,
      "previousJobId": 1058,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1538_goblin_champion_paragon",
    "excelId": 1538,
    "name": "Goblin Champion Paragon",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1537_goblin_champion_vanguard",
    "description": "Goblin Champion Paragon is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1058,
      "previousJobId": 1537,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1539_goblin_champion_sovereign",
    "excelId": 1539,
    "name": "Goblin Champion Sovereign",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1538_goblin_champion_paragon",
    "description": "Goblin Champion Sovereign is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1058,
      "previousJobId": 1538,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1540_world_crowned_goblin_champion",
    "excelId": 1540,
    "name": "World-Crowned Goblin Champion",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1539_goblin_champion_sovereign",
    "description": "World-Crowned Goblin Champion is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1058,
      "previousJobId": 1539,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1541_goblin_champion_adept",
    "excelId": 1541,
    "name": "Goblin Champion Adept",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1058_goblin_champion",
    "description": "Goblin Champion Adept is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1058,
      "previousJobId": 1058,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1542_eclipse_goblin_champion",
    "excelId": 1542,
    "name": "Eclipse Goblin Champion",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1541_goblin_champion_adept",
    "description": "Eclipse Goblin Champion is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1058,
      "previousJobId": 1541,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1543_mythic_goblin_champion",
    "excelId": 1543,
    "name": "Mythic Goblin Champion",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1542_eclipse_goblin_champion",
    "description": "Mythic Goblin Champion is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1058,
      "previousJobId": 1542,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1544_hidden_origin_goblin_champion",
    "excelId": 1544,
    "name": "Hidden Origin Goblin Champion",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1543_mythic_goblin_champion",
    "description": "Hidden Origin Goblin Champion is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1058,
      "previousJobId": 1543,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1545_slime_predator_vanguard",
    "excelId": 1545,
    "name": "Slime Predator Vanguard",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1059_slime_predator",
    "description": "Slime Predator Vanguard is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1059,
      "previousJobId": 1059,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "job_path_1546_slime_predator_paragon",
    "excelId": 1546,
    "name": "Slime Predator Paragon",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1545_slime_predator_vanguard",
    "description": "Slime Predator Paragon is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1059,
      "previousJobId": 1545,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "job_path_1547_slime_predator_sovereign",
    "excelId": 1547,
    "name": "Slime Predator Sovereign",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1546_slime_predator_paragon",
    "description": "Slime Predator Sovereign is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1059,
      "previousJobId": 1546,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "job_path_1548_world_crowned_slime_predator",
    "excelId": 1548,
    "name": "World-Crowned Slime Predator",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1547_slime_predator_sovereign",
    "description": "World-Crowned Slime Predator is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1059,
      "previousJobId": 1547,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "job_path_1549_slime_predator_adept",
    "excelId": 1549,
    "name": "Slime Predator Adept",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1059_slime_predator",
    "description": "Slime Predator Adept is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1059,
      "previousJobId": 1059,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "job_path_1550_eclipse_slime_predator",
    "excelId": 1550,
    "name": "Eclipse Slime Predator",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1549_slime_predator_adept",
    "description": "Eclipse Slime Predator is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1059,
      "previousJobId": 1549,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1551_mythic_slime_predator",
    "excelId": 1551,
    "name": "Mythic Slime Predator",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1550_eclipse_slime_predator",
    "description": "Mythic Slime Predator is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1059,
      "previousJobId": 1550,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "job_path_1552_hidden_origin_slime_predator",
    "excelId": 1552,
    "name": "Hidden Origin Slime Predator",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1551_mythic_slime_predator",
    "description": "Hidden Origin Slime Predator is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1059,
      "previousJobId": 1551,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "job_path_1553_dragon_apostle_vanguard",
    "excelId": 1553,
    "name": "Dragon Apostle Vanguard",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1060_dragon_apostle",
    "description": "Dragon Apostle Vanguard is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_fire_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1060,
      "previousJobId": 1060,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_fire_2"
      },
      {
        "level": 10,
        "skillId": "v50_fire_3"
      }
    ]
  },
  {
    "id": "job_path_1554_dragon_apostle_paragon",
    "excelId": 1554,
    "name": "Dragon Apostle Paragon",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1553_dragon_apostle_vanguard",
    "description": "Dragon Apostle Paragon is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_fire_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1060,
      "previousJobId": 1553,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_fire_2"
      },
      {
        "level": 10,
        "skillId": "v50_fire_3"
      }
    ]
  },
  {
    "id": "job_path_1555_dragon_apostle_sovereign",
    "excelId": 1555,
    "name": "Dragon Apostle Sovereign",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1554_dragon_apostle_paragon",
    "description": "Dragon Apostle Sovereign is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "v50_fire_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1060,
      "previousJobId": 1554,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_fire_2"
      },
      {
        "level": 5,
        "skillId": "v50_fire_3"
      }
    ]
  },
  {
    "id": "job_path_1556_world_crowned_dragon_apostle",
    "excelId": 1556,
    "name": "World-Crowned Dragon Apostle",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1555_dragon_apostle_sovereign",
    "description": "World-Crowned Dragon Apostle is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "v50_fire_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1060,
      "previousJobId": 1555,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_fire_2"
      },
      {
        "level": 5,
        "skillId": "v50_fire_3"
      }
    ]
  },
  {
    "id": "job_path_1557_dragon_apostle_adept",
    "excelId": 1557,
    "name": "Dragon Apostle Adept",
    "category": "Monster",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1060_dragon_apostle",
    "description": "Dragon Apostle Adept is an Excel-imported advanced job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_fire_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1060,
      "previousJobId": 1060,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_fire_2"
      },
      {
        "level": 10,
        "skillId": "v50_fire_3"
      }
    ]
  },
  {
    "id": "job_path_1558_eclipse_dragon_apostle",
    "excelId": 1558,
    "name": "Eclipse Dragon Apostle",
    "category": "Monster",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1557_dragon_apostle_adept",
    "description": "Eclipse Dragon Apostle is an Excel-imported specialist job path in the Monster category.",
    "stats": {
      "str": 3,
      "con": 3,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1060,
      "previousJobId": 1557,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1559_mythic_dragon_apostle",
    "excelId": 1559,
    "name": "Mythic Dragon Apostle",
    "category": "Monster",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1558_eclipse_dragon_apostle",
    "description": "Mythic Dragon Apostle is an Excel-imported rare job path in the Monster category.",
    "stats": {
      "str": 4,
      "con": 4,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3
    },
    "startingSkills": [
      "v50_fire_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1060,
      "previousJobId": 1558,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_fire_2"
      },
      {
        "level": 5,
        "skillId": "v50_fire_3"
      }
    ]
  },
  {
    "id": "job_path_1560_hidden_origin_dragon_apostle",
    "excelId": 1560,
    "name": "Hidden Origin Dragon Apostle",
    "category": "Monster",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1559_mythic_dragon_apostle",
    "description": "Hidden Origin Dragon Apostle is an Excel-imported hidden job path in the Monster category.",
    "stats": {
      "str": 6,
      "con": 6,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4
    },
    "startingSkills": [
      "v50_fire_1"
    ],
    "strengths": [
      "Strong traits",
      "High pressure"
    ],
    "weaknesses": [
      "Narrow unlocks"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1060,
      "previousJobId": 1559,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_fire_2"
      },
      {
        "level": 5,
        "skillId": "v50_fire_3"
      }
    ]
  },
  {
    "id": "job_path_1561_samurai_vanguard",
    "excelId": 1561,
    "name": "Samurai Vanguard",
    "category": "Japanese Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1061_samurai",
    "description": "Samurai Vanguard is an Excel-imported advanced job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1061,
      "previousJobId": 1061,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1562_samurai_paragon",
    "excelId": 1562,
    "name": "Samurai Paragon",
    "category": "Japanese Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1561_samurai_vanguard",
    "description": "Samurai Paragon is an Excel-imported specialist job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1061,
      "previousJobId": 1561,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1563_samurai_sovereign",
    "excelId": 1563,
    "name": "Samurai Sovereign",
    "category": "Japanese Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1562_samurai_paragon",
    "description": "Samurai Sovereign is an Excel-imported rare job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 4,
      "wis": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1061,
      "previousJobId": 1562,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1564_world_crowned_samurai",
    "excelId": 1564,
    "name": "World-Crowned Samurai",
    "category": "Japanese Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1563_samurai_sovereign",
    "description": "World-Crowned Samurai is an Excel-imported hidden job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 6,
      "wis": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1061,
      "previousJobId": 1563,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1565_samurai_adept",
    "excelId": 1565,
    "name": "Samurai Adept",
    "category": "Japanese Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1061_samurai",
    "description": "Samurai Adept is an Excel-imported advanced job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1061,
      "previousJobId": 1061,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_sword_2"
      },
      {
        "level": 10,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1566_eclipse_samurai",
    "excelId": 1566,
    "name": "Eclipse Samurai",
    "category": "Japanese Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1565_samurai_adept",
    "description": "Eclipse Samurai is an Excel-imported specialist job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1061,
      "previousJobId": 1565,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1567_mythic_samurai",
    "excelId": 1567,
    "name": "Mythic Samurai",
    "category": "Japanese Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1566_eclipse_samurai",
    "description": "Mythic Samurai is an Excel-imported rare job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 4,
      "wis": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1061,
      "previousJobId": 1566,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1568_hidden_origin_samurai",
    "excelId": 1568,
    "name": "Hidden Origin Samurai",
    "category": "Japanese Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1567_mythic_samurai",
    "description": "Hidden Origin Samurai is an Excel-imported hidden job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 6,
      "wis": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_sword_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1061,
      "previousJobId": 1567,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_sword_2"
      },
      {
        "level": 5,
        "skillId": "v50_sword_3"
      }
    ]
  },
  {
    "id": "job_path_1569_onmyoji_vanguard",
    "excelId": 1569,
    "name": "Onmyoji Vanguard",
    "category": "Japanese Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1062_onmyoji",
    "description": "Onmyoji Vanguard is an Excel-imported advanced job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1062,
      "previousJobId": 1062,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1570_onmyoji_paragon",
    "excelId": 1570,
    "name": "Onmyoji Paragon",
    "category": "Japanese Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1569_onmyoji_vanguard",
    "description": "Onmyoji Paragon is an Excel-imported specialist job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1062,
      "previousJobId": 1569,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1571_onmyoji_sovereign",
    "excelId": 1571,
    "name": "Onmyoji Sovereign",
    "category": "Japanese Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1570_onmyoji_paragon",
    "description": "Onmyoji Sovereign is an Excel-imported rare job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 4,
      "wis": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1062,
      "previousJobId": 1570,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1572_world_crowned_onmyoji",
    "excelId": 1572,
    "name": "World-Crowned Onmyoji",
    "category": "Japanese Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1571_onmyoji_sovereign",
    "description": "World-Crowned Onmyoji is an Excel-imported hidden job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 6,
      "wis": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1062,
      "previousJobId": 1571,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1573_onmyoji_adept",
    "excelId": 1573,
    "name": "Onmyoji Adept",
    "category": "Japanese Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1062_onmyoji",
    "description": "Onmyoji Adept is an Excel-imported advanced job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1062,
      "previousJobId": 1062,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1574_eclipse_onmyoji",
    "excelId": 1574,
    "name": "Eclipse Onmyoji",
    "category": "Japanese Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1573_onmyoji_adept",
    "description": "Eclipse Onmyoji is an Excel-imported specialist job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1062,
      "previousJobId": 1573,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1575_mythic_onmyoji",
    "excelId": 1575,
    "name": "Mythic Onmyoji",
    "category": "Japanese Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1574_eclipse_onmyoji",
    "description": "Mythic Onmyoji is an Excel-imported rare job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 4,
      "wis": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1062,
      "previousJobId": 1574,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1576_hidden_origin_onmyoji",
    "excelId": 1576,
    "name": "Hidden Origin Onmyoji",
    "category": "Japanese Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1575_mythic_onmyoji",
    "description": "Hidden Origin Onmyoji is an Excel-imported hidden job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 6,
      "wis": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1062,
      "previousJobId": 1575,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1577_miko_vanguard",
    "excelId": 1577,
    "name": "Miko Vanguard",
    "category": "Japanese Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1063_miko",
    "description": "Miko Vanguard is an Excel-imported advanced job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1063,
      "previousJobId": 1063,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1578_miko_paragon",
    "excelId": 1578,
    "name": "Miko Paragon",
    "category": "Japanese Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1577_miko_vanguard",
    "description": "Miko Paragon is an Excel-imported specialist job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1063,
      "previousJobId": 1577,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1579_miko_sovereign",
    "excelId": 1579,
    "name": "Miko Sovereign",
    "category": "Japanese Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1578_miko_paragon",
    "description": "Miko Sovereign is an Excel-imported rare job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 4,
      "wis": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1063,
      "previousJobId": 1578,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1580_world_crowned_miko",
    "excelId": 1580,
    "name": "World-Crowned Miko",
    "category": "Japanese Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1579_miko_sovereign",
    "description": "World-Crowned Miko is an Excel-imported hidden job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 6,
      "wis": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1063,
      "previousJobId": 1579,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1581_miko_adept",
    "excelId": 1581,
    "name": "Miko Adept",
    "category": "Japanese Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1063_miko",
    "description": "Miko Adept is an Excel-imported advanced job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1063,
      "previousJobId": 1063,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1582_eclipse_miko",
    "excelId": 1582,
    "name": "Eclipse Miko",
    "category": "Japanese Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1581_miko_adept",
    "description": "Eclipse Miko is an Excel-imported specialist job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 3,
      "wis": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1063,
      "previousJobId": 1581,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1583_mythic_miko",
    "excelId": 1583,
    "name": "Mythic Miko",
    "category": "Japanese Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1582_eclipse_miko",
    "description": "Mythic Miko is an Excel-imported rare job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 4,
      "wis": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1063,
      "previousJobId": 1582,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1584_hidden_origin_miko",
    "excelId": 1584,
    "name": "Hidden Origin Miko",
    "category": "Japanese Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1583_mythic_miko",
    "description": "Hidden Origin Miko is an Excel-imported hidden job path in the Japanese Fantasy category.",
    "stats": {
      "dex": 6,
      "wis": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Technique variety",
      "Speed"
    ],
    "weaknesses": [
      "Requires setup"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1063,
      "previousJobId": 1583,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1585_cultivator_vanguard",
    "excelId": 1585,
    "name": "Cultivator Vanguard",
    "category": "Cultivation / Murim",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1064_cultivator",
    "description": "Cultivator Vanguard is an Excel-imported advanced job path in the Cultivation / Murim category.",
    "stats": {
      "str": 3,
      "wis": 3,
      "con": 1
    },
    "levelGrowth": {
      "str": 1,
      "wis": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Scaling",
      "Inner power"
    ],
    "weaknesses": [
      "Slow start"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1064,
      "previousJobId": 1064,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1586_cultivator_paragon",
    "excelId": 1586,
    "name": "Cultivator Paragon",
    "category": "Cultivation / Murim",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1585_cultivator_vanguard",
    "description": "Cultivator Paragon is an Excel-imported specialist job path in the Cultivation / Murim category.",
    "stats": {
      "str": 3,
      "wis": 3,
      "con": 2
    },
    "levelGrowth": {
      "str": 1,
      "wis": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Scaling",
      "Inner power"
    ],
    "weaknesses": [
      "Slow start"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1064,
      "previousJobId": 1585,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1587_cultivator_sovereign",
    "excelId": 1587,
    "name": "Cultivator Sovereign",
    "category": "Cultivation / Murim",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1586_cultivator_paragon",
    "description": "Cultivator Sovereign is an Excel-imported rare job path in the Cultivation / Murim category.",
    "stats": {
      "str": 4,
      "wis": 4,
      "con": 2
    },
    "levelGrowth": {
      "str": 2,
      "wis": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Scaling",
      "Inner power"
    ],
    "weaknesses": [
      "Slow start"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1064,
      "previousJobId": 1586,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1588_world_crowned_cultivator",
    "excelId": 1588,
    "name": "World-Crowned Cultivator",
    "category": "Cultivation / Murim",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1587_cultivator_sovereign",
    "description": "World-Crowned Cultivator is an Excel-imported hidden job path in the Cultivation / Murim category.",
    "stats": {
      "str": 6,
      "wis": 6,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "wis": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Scaling",
      "Inner power"
    ],
    "weaknesses": [
      "Slow start"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1064,
      "previousJobId": 1587,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1589_cultivator_adept",
    "excelId": 1589,
    "name": "Cultivator Adept",
    "category": "Cultivation / Murim",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1064_cultivator",
    "description": "Cultivator Adept is an Excel-imported advanced job path in the Cultivation / Murim category.",
    "stats": {
      "str": 3,
      "wis": 3,
      "con": 1
    },
    "levelGrowth": {
      "str": 1,
      "wis": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Scaling",
      "Inner power"
    ],
    "weaknesses": [
      "Slow start"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1064,
      "previousJobId": 1064,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1590_eclipse_cultivator",
    "excelId": 1590,
    "name": "Eclipse Cultivator",
    "category": "Cultivation / Murim",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1589_cultivator_adept",
    "description": "Eclipse Cultivator is an Excel-imported specialist job path in the Cultivation / Murim category.",
    "stats": {
      "str": 3,
      "wis": 3,
      "con": 2
    },
    "levelGrowth": {
      "str": 1,
      "wis": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Scaling",
      "Inner power"
    ],
    "weaknesses": [
      "Slow start"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1064,
      "previousJobId": 1589,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1591_mythic_cultivator",
    "excelId": 1591,
    "name": "Mythic Cultivator",
    "category": "Cultivation / Murim",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1590_eclipse_cultivator",
    "description": "Mythic Cultivator is an Excel-imported rare job path in the Cultivation / Murim category.",
    "stats": {
      "str": 4,
      "wis": 4,
      "con": 2
    },
    "levelGrowth": {
      "str": 2,
      "wis": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Scaling",
      "Inner power"
    ],
    "weaknesses": [
      "Slow start"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1064,
      "previousJobId": 1590,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1592_hidden_origin_cultivator",
    "excelId": 1592,
    "name": "Hidden Origin Cultivator",
    "category": "Cultivation / Murim",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1591_mythic_cultivator",
    "description": "Hidden Origin Cultivator is an Excel-imported hidden job path in the Cultivation / Murim category.",
    "stats": {
      "str": 6,
      "wis": 6,
      "con": 3
    },
    "levelGrowth": {
      "str": 2,
      "wis": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Scaling",
      "Inner power"
    ],
    "weaknesses": [
      "Slow start"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1064,
      "previousJobId": 1591,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1593_esper_vanguard",
    "excelId": 1593,
    "name": "Esper Vanguard",
    "category": "Modern Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1065_esper",
    "description": "Esper Vanguard is an Excel-imported advanced job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1065,
      "previousJobId": 1065,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1594_esper_paragon",
    "excelId": 1594,
    "name": "Esper Paragon",
    "category": "Modern Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1593_esper_vanguard",
    "description": "Esper Paragon is an Excel-imported specialist job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1065,
      "previousJobId": 1593,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1595_esper_sovereign",
    "excelId": 1595,
    "name": "Esper Sovereign",
    "category": "Modern Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1594_esper_paragon",
    "description": "Esper Sovereign is an Excel-imported rare job path in the Modern Fantasy category.",
    "stats": {
      "dex": 4,
      "int": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1065,
      "previousJobId": 1594,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1596_world_crowned_esper",
    "excelId": 1596,
    "name": "World-Crowned Esper",
    "category": "Modern Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1595_esper_sovereign",
    "description": "World-Crowned Esper is an Excel-imported hidden job path in the Modern Fantasy category.",
    "stats": {
      "dex": 6,
      "int": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1065,
      "previousJobId": 1595,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1597_esper_adept",
    "excelId": 1597,
    "name": "Esper Adept",
    "category": "Modern Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1065_esper",
    "description": "Esper Adept is an Excel-imported advanced job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1065,
      "previousJobId": 1065,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1598_eclipse_esper",
    "excelId": 1598,
    "name": "Eclipse Esper",
    "category": "Modern Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1597_esper_adept",
    "description": "Eclipse Esper is an Excel-imported specialist job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1065,
      "previousJobId": 1597,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1599_mythic_esper",
    "excelId": 1599,
    "name": "Mythic Esper",
    "category": "Modern Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1598_eclipse_esper",
    "description": "Mythic Esper is an Excel-imported rare job path in the Modern Fantasy category.",
    "stats": {
      "dex": 4,
      "int": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1065,
      "previousJobId": 1598,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1600_hidden_origin_esper",
    "excelId": 1600,
    "name": "Hidden Origin Esper",
    "category": "Modern Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1599_mythic_esper",
    "description": "Hidden Origin Esper is an Excel-imported hidden job path in the Modern Fantasy category.",
    "stats": {
      "dex": 6,
      "int": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1065,
      "previousJobId": 1599,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1601_hero_student_vanguard",
    "excelId": 1601,
    "name": "Hero Student Vanguard",
    "category": "Modern Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1066_hero_student",
    "description": "Hero Student Vanguard is an Excel-imported advanced job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1066,
      "previousJobId": 1066,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1602_hero_student_paragon",
    "excelId": 1602,
    "name": "Hero Student Paragon",
    "category": "Modern Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1601_hero_student_vanguard",
    "description": "Hero Student Paragon is an Excel-imported specialist job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1066,
      "previousJobId": 1601,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1603_hero_student_sovereign",
    "excelId": 1603,
    "name": "Hero Student Sovereign",
    "category": "Modern Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1602_hero_student_paragon",
    "description": "Hero Student Sovereign is an Excel-imported rare job path in the Modern Fantasy category.",
    "stats": {
      "dex": 4,
      "int": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1066,
      "previousJobId": 1602,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1604_world_crowned_hero_student",
    "excelId": 1604,
    "name": "World-Crowned Hero Student",
    "category": "Modern Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1603_hero_student_sovereign",
    "description": "World-Crowned Hero Student is an Excel-imported hidden job path in the Modern Fantasy category.",
    "stats": {
      "dex": 6,
      "int": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1066,
      "previousJobId": 1603,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1605_hero_student_adept",
    "excelId": 1605,
    "name": "Hero Student Adept",
    "category": "Modern Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1066_hero_student",
    "description": "Hero Student Adept is an Excel-imported advanced job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1066,
      "previousJobId": 1066,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1606_eclipse_hero_student",
    "excelId": 1606,
    "name": "Eclipse Hero Student",
    "category": "Modern Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1605_hero_student_adept",
    "description": "Eclipse Hero Student is an Excel-imported specialist job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1066,
      "previousJobId": 1605,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1607_mythic_hero_student",
    "excelId": 1607,
    "name": "Mythic Hero Student",
    "category": "Modern Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1606_eclipse_hero_student",
    "description": "Mythic Hero Student is an Excel-imported rare job path in the Modern Fantasy category.",
    "stats": {
      "dex": 4,
      "int": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1066,
      "previousJobId": 1606,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1608_hidden_origin_hero_student",
    "excelId": 1608,
    "name": "Hidden Origin Hero Student",
    "category": "Modern Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1607_mythic_hero_student",
    "description": "Hidden Origin Hero Student is an Excel-imported hidden job path in the Modern Fantasy category.",
    "stats": {
      "dex": 6,
      "int": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1066,
      "previousJobId": 1607,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1609_pro_hero_vanguard",
    "excelId": 1609,
    "name": "Pro Hero Vanguard",
    "category": "Modern Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1067_pro_hero",
    "description": "Pro Hero Vanguard is an Excel-imported advanced job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1067,
      "previousJobId": 1067,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1610_pro_hero_paragon",
    "excelId": 1610,
    "name": "Pro Hero Paragon",
    "category": "Modern Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1609_pro_hero_vanguard",
    "description": "Pro Hero Paragon is an Excel-imported specialist job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1067,
      "previousJobId": 1609,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1611_pro_hero_sovereign",
    "excelId": 1611,
    "name": "Pro Hero Sovereign",
    "category": "Modern Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1610_pro_hero_paragon",
    "description": "Pro Hero Sovereign is an Excel-imported rare job path in the Modern Fantasy category.",
    "stats": {
      "dex": 4,
      "int": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1067,
      "previousJobId": 1610,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1612_world_crowned_pro_hero",
    "excelId": 1612,
    "name": "World-Crowned Pro Hero",
    "category": "Modern Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1611_pro_hero_sovereign",
    "description": "World-Crowned Pro Hero is an Excel-imported hidden job path in the Modern Fantasy category.",
    "stats": {
      "dex": 6,
      "int": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1067,
      "previousJobId": 1611,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1613_pro_hero_adept",
    "excelId": 1613,
    "name": "Pro Hero Adept",
    "category": "Modern Fantasy",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1067_pro_hero",
    "description": "Pro Hero Adept is an Excel-imported advanced job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1067,
      "previousJobId": 1067,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1614_eclipse_pro_hero",
    "excelId": 1614,
    "name": "Eclipse Pro Hero",
    "category": "Modern Fantasy",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1613_pro_hero_adept",
    "description": "Eclipse Pro Hero is an Excel-imported specialist job path in the Modern Fantasy category.",
    "stats": {
      "dex": 3,
      "int": 3,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "int": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1067,
      "previousJobId": 1613,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1615_mythic_pro_hero",
    "excelId": 1615,
    "name": "Mythic Pro Hero",
    "category": "Modern Fantasy",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1614_eclipse_pro_hero",
    "description": "Mythic Pro Hero is an Excel-imported rare job path in the Modern Fantasy category.",
    "stats": {
      "dex": 4,
      "int": 4,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1067,
      "previousJobId": 1614,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1616_hidden_origin_pro_hero",
    "excelId": 1616,
    "name": "Hidden Origin Pro Hero",
    "category": "Modern Fantasy",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1615_mythic_pro_hero",
    "description": "Hidden Origin Pro Hero is an Excel-imported hidden job path in the Modern Fantasy category.",
    "stats": {
      "dex": 6,
      "int": 6,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "int": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible tools",
      "Burst"
    ],
    "weaknesses": [
      "Resource hungry"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1067,
      "previousJobId": 1615,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1617_adventurer_vanguard",
    "excelId": 1617,
    "name": "Adventurer Vanguard",
    "category": "Guild Jobs",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1068_adventurer",
    "description": "Adventurer Vanguard is an Excel-imported advanced job path in the Guild Jobs category.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1068,
      "previousJobId": 1068,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1618_adventurer_paragon",
    "excelId": 1618,
    "name": "Adventurer Paragon",
    "category": "Guild Jobs",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1617_adventurer_vanguard",
    "description": "Adventurer Paragon is an Excel-imported specialist job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1068,
      "previousJobId": 1617,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1619_adventurer_sovereign",
    "excelId": 1619,
    "name": "Adventurer Sovereign",
    "category": "Guild Jobs",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1618_adventurer_paragon",
    "description": "Adventurer Sovereign is an Excel-imported rare job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1068,
      "previousJobId": 1618,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1620_world_crowned_adventurer",
    "excelId": 1620,
    "name": "World-Crowned Adventurer",
    "category": "Guild Jobs",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1619_adventurer_sovereign",
    "description": "World-Crowned Adventurer is an Excel-imported hidden job path in the Guild Jobs category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1068,
      "previousJobId": 1619,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1621_adventurer_adept",
    "excelId": 1621,
    "name": "Adventurer Adept",
    "category": "Guild Jobs",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1068_adventurer",
    "description": "Adventurer Adept is an Excel-imported advanced job path in the Guild Jobs category.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1068,
      "previousJobId": 1068,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1622_eclipse_adventurer",
    "excelId": 1622,
    "name": "Eclipse Adventurer",
    "category": "Guild Jobs",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1621_adventurer_adept",
    "description": "Eclipse Adventurer is an Excel-imported specialist job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1068,
      "previousJobId": 1621,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1623_mythic_adventurer",
    "excelId": 1623,
    "name": "Mythic Adventurer",
    "category": "Guild Jobs",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1622_eclipse_adventurer",
    "description": "Mythic Adventurer is an Excel-imported rare job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1068,
      "previousJobId": 1622,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1624_hidden_origin_adventurer",
    "excelId": 1624,
    "name": "Hidden Origin Adventurer",
    "category": "Guild Jobs",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1623_mythic_adventurer",
    "description": "Hidden Origin Adventurer is an Excel-imported hidden job path in the Guild Jobs category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1068,
      "previousJobId": 1623,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1625_villager_vanguard",
    "excelId": 1625,
    "name": "Villager Vanguard",
    "category": "Guild Jobs",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1069_villager",
    "description": "Villager Vanguard is an Excel-imported advanced job path in the Guild Jobs category.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1069,
      "previousJobId": 1069,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1626_villager_paragon",
    "excelId": 1626,
    "name": "Villager Paragon",
    "category": "Guild Jobs",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1625_villager_vanguard",
    "description": "Villager Paragon is an Excel-imported specialist job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1069,
      "previousJobId": 1625,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1627_villager_sovereign",
    "excelId": 1627,
    "name": "Villager Sovereign",
    "category": "Guild Jobs",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1626_villager_paragon",
    "description": "Villager Sovereign is an Excel-imported rare job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1069,
      "previousJobId": 1626,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1628_world_crowned_villager",
    "excelId": 1628,
    "name": "World-Crowned Villager",
    "category": "Guild Jobs",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1627_villager_sovereign",
    "description": "World-Crowned Villager is an Excel-imported hidden job path in the Guild Jobs category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1069,
      "previousJobId": 1627,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1629_villager_adept",
    "excelId": 1629,
    "name": "Villager Adept",
    "category": "Guild Jobs",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1069_villager",
    "description": "Villager Adept is an Excel-imported advanced job path in the Guild Jobs category.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1069,
      "previousJobId": 1069,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1630_eclipse_villager",
    "excelId": 1630,
    "name": "Eclipse Villager",
    "category": "Guild Jobs",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1629_villager_adept",
    "description": "Eclipse Villager is an Excel-imported specialist job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1069,
      "previousJobId": 1629,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1631_mythic_villager",
    "excelId": 1631,
    "name": "Mythic Villager",
    "category": "Guild Jobs",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1630_eclipse_villager",
    "description": "Mythic Villager is an Excel-imported rare job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1069,
      "previousJobId": 1630,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1632_hidden_origin_villager",
    "excelId": 1632,
    "name": "Hidden Origin Villager",
    "category": "Guild Jobs",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1631_mythic_villager",
    "description": "Hidden Origin Villager is an Excel-imported hidden job path in the Guild Jobs category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1069,
      "previousJobId": 1631,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1633_farmer_vanguard",
    "excelId": 1633,
    "name": "Farmer Vanguard",
    "category": "Guild Jobs",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1070_farmer",
    "description": "Farmer Vanguard is an Excel-imported advanced job path in the Guild Jobs category.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1070,
      "previousJobId": 1070,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1634_farmer_paragon",
    "excelId": 1634,
    "name": "Farmer Paragon",
    "category": "Guild Jobs",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1633_farmer_vanguard",
    "description": "Farmer Paragon is an Excel-imported specialist job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1070,
      "previousJobId": 1633,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1635_farmer_sovereign",
    "excelId": 1635,
    "name": "Farmer Sovereign",
    "category": "Guild Jobs",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1634_farmer_paragon",
    "description": "Farmer Sovereign is an Excel-imported rare job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1070,
      "previousJobId": 1634,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1636_world_crowned_farmer",
    "excelId": 1636,
    "name": "World-Crowned Farmer",
    "category": "Guild Jobs",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1635_farmer_sovereign",
    "description": "World-Crowned Farmer is an Excel-imported hidden job path in the Guild Jobs category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1070,
      "previousJobId": 1635,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1637_farmer_adept",
    "excelId": 1637,
    "name": "Farmer Adept",
    "category": "Guild Jobs",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1070_farmer",
    "description": "Farmer Adept is an Excel-imported advanced job path in the Guild Jobs category.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1070,
      "previousJobId": 1070,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1638_eclipse_farmer",
    "excelId": 1638,
    "name": "Eclipse Farmer",
    "category": "Guild Jobs",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1637_farmer_adept",
    "description": "Eclipse Farmer is an Excel-imported specialist job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1070,
      "previousJobId": 1637,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1639_mythic_farmer",
    "excelId": 1639,
    "name": "Mythic Farmer",
    "category": "Guild Jobs",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1638_eclipse_farmer",
    "description": "Mythic Farmer is an Excel-imported rare job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1070,
      "previousJobId": 1638,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1640_hidden_origin_farmer",
    "excelId": 1640,
    "name": "Hidden Origin Farmer",
    "category": "Guild Jobs",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1639_mythic_farmer",
    "description": "Hidden Origin Farmer is an Excel-imported hidden job path in the Guild Jobs category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1070,
      "previousJobId": 1639,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1641_mercenary_vanguard",
    "excelId": 1641,
    "name": "Mercenary Vanguard",
    "category": "Guild Jobs",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1071_mercenary",
    "description": "Mercenary Vanguard is an Excel-imported advanced job path in the Guild Jobs category.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1071,
      "previousJobId": 1071,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1642_mercenary_paragon",
    "excelId": 1642,
    "name": "Mercenary Paragon",
    "category": "Guild Jobs",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1641_mercenary_vanguard",
    "description": "Mercenary Paragon is an Excel-imported specialist job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1071,
      "previousJobId": 1641,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1643_mercenary_sovereign",
    "excelId": 1643,
    "name": "Mercenary Sovereign",
    "category": "Guild Jobs",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1642_mercenary_paragon",
    "description": "Mercenary Sovereign is an Excel-imported rare job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1071,
      "previousJobId": 1642,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1644_world_crowned_mercenary",
    "excelId": 1644,
    "name": "World-Crowned Mercenary",
    "category": "Guild Jobs",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1643_mercenary_sovereign",
    "description": "World-Crowned Mercenary is an Excel-imported hidden job path in the Guild Jobs category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1071,
      "previousJobId": 1643,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1645_mercenary_adept",
    "excelId": 1645,
    "name": "Mercenary Adept",
    "category": "Guild Jobs",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1071_mercenary",
    "description": "Mercenary Adept is an Excel-imported advanced job path in the Guild Jobs category.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1071,
      "previousJobId": 1071,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1646_eclipse_mercenary",
    "excelId": 1646,
    "name": "Eclipse Mercenary",
    "category": "Guild Jobs",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1645_mercenary_adept",
    "description": "Eclipse Mercenary is an Excel-imported specialist job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1071,
      "previousJobId": 1645,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1647_mythic_mercenary",
    "excelId": 1647,
    "name": "Mythic Mercenary",
    "category": "Guild Jobs",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1646_eclipse_mercenary",
    "description": "Mythic Mercenary is an Excel-imported rare job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1071,
      "previousJobId": 1646,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1648_hidden_origin_mercenary",
    "excelId": 1648,
    "name": "Hidden Origin Mercenary",
    "category": "Guild Jobs",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1647_mythic_mercenary",
    "description": "Hidden Origin Mercenary is an Excel-imported hidden job path in the Guild Jobs category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1071,
      "previousJobId": 1647,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "job_path_1649_bounty_hunter_vanguard",
    "excelId": 1649,
    "name": "Bounty Hunter Vanguard",
    "category": "Guild Jobs",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1072_bounty_hunter",
    "description": "Bounty Hunter Vanguard is an Excel-imported advanced job path in the Guild Jobs category.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1072,
      "previousJobId": 1072,
      "stage": 0,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1650_bounty_hunter_paragon",
    "excelId": 1650,
    "name": "Bounty Hunter Paragon",
    "category": "Guild Jobs",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1649_bounty_hunter_vanguard",
    "description": "Bounty Hunter Paragon is an Excel-imported specialist job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1072,
      "previousJobId": 1649,
      "stage": 1,
      "branch": 0
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1651_bounty_hunter_sovereign",
    "excelId": 1651,
    "name": "Bounty Hunter Sovereign",
    "category": "Guild Jobs",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1650_bounty_hunter_paragon",
    "description": "Bounty Hunter Sovereign is an Excel-imported rare job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1072,
      "previousJobId": 1650,
      "stage": 2,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1652_world_crowned_bounty_hunter",
    "excelId": 1652,
    "name": "World-Crowned Bounty Hunter",
    "category": "Guild Jobs",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1651_bounty_hunter_sovereign",
    "description": "World-Crowned Bounty Hunter is an Excel-imported hidden job path in the Guild Jobs category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1072,
      "previousJobId": 1651,
      "stage": 3,
      "branch": 0
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1653_bounty_hunter_adept",
    "excelId": 1653,
    "name": "Bounty Hunter Adept",
    "category": "Guild Jobs",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "job_1072_bounty_hunter",
    "description": "Bounty Hunter Adept is an Excel-imported advanced job path in the Guild Jobs category.",
    "stats": {
      "str": 1,
      "dex": 1,
      "wis": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1072,
      "previousJobId": 1072,
      "stage": 0,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_bow_2"
      },
      {
        "level": 10,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1654_eclipse_bounty_hunter",
    "excelId": 1654,
    "name": "Eclipse Bounty Hunter",
    "category": "Guild Jobs",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "job_path_1653_bounty_hunter_adept",
    "description": "Eclipse Bounty Hunter is an Excel-imported specialist job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_dark_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1072,
      "previousJobId": 1653,
      "stage": 1,
      "branch": 1
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "job_path_1655_mythic_bounty_hunter",
    "excelId": 1655,
    "name": "Mythic Bounty Hunter",
    "category": "Guild Jobs",
    "tier": "rare",
    "maxLevel": 5,
    "from": "job_path_1654_eclipse_bounty_hunter",
    "description": "Mythic Bounty Hunter is an Excel-imported rare job path in the Guild Jobs category.",
    "stats": {
      "str": 2,
      "dex": 2,
      "wis": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1072,
      "previousJobId": 1654,
      "stage": 2,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  },
  {
    "id": "job_path_1656_hidden_origin_bounty_hunter",
    "excelId": 1656,
    "name": "Hidden Origin Bounty Hunter",
    "category": "Guild Jobs",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "job_path_1655_mythic_bounty_hunter",
    "description": "Hidden Origin Bounty Hunter is an Excel-imported hidden job path in the Guild Jobs category.",
    "stats": {
      "str": 3,
      "dex": 3,
      "wis": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_bow_1"
    ],
    "strengths": [
      "Utility",
      "Low requirements"
    ],
    "weaknesses": [
      "Low combat power"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "jobBranch": true,
      "baseJobId": 1072,
      "previousJobId": 1655,
      "stage": 3,
      "branch": 1
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_bow_2"
      },
      {
        "level": 5,
        "skillId": "v50_bow_3"
      }
    ]
  }
];
