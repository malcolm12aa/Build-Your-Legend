// Auto-generated from Excel import and updated in v0.5.0.
// v0.5.0 adds Excel ability links, starting abilities, and learn tables.

export const RACES = [
  {
    "id": "human",
    "excelId": 1,
    "name": "Human",
    "category": "Common Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Human are a Common Fantasy race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10000_awakened_human",
      "race_path_10004_human_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "high_elf",
    "excelId": 2,
    "name": "Elves",
    "category": "Common Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Elves are a Common Fantasy race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10008_awakened_elve",
      "race_path_10012_elve_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_1"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 15,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "race_003_dark_elves",
    "excelId": 3,
    "name": "Dark Elves",
    "category": "Common Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Dark Elves are a Common Fantasy race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10016_awakened_dark_elve",
      "race_path_10020_dark_elve_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 15,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "iron_dwarf",
    "excelId": 4,
    "name": "Dwarves",
    "category": "Common Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Dwarves are a Common Fantasy race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_stoneblood"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10024_awakened_dwarve",
      "race_path_10028_dwarve_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_guard_stance"
      },
      {
        "level": 10,
        "skillId": "sk_shield_bash"
      },
      {
        "level": 15,
        "skillId": "sk_kings_guard"
      }
    ]
  },
  {
    "id": "race_005_halflings",
    "excelId": 5,
    "name": "Halflings",
    "category": "Common Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Halflings are a Common Fantasy race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 0,
      "wis": 1,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "con": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10032_awakened_halfling",
      "race_path_10036_halfling_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_006_gnomes",
    "excelId": 6,
    "name": "Gnomes",
    "category": "Common Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Gnomes are a Common Fantasy race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 0,
      "wis": 1,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "con": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10040_awakened_gnome",
      "race_path_10044_gnome_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_007_fairies",
    "excelId": 7,
    "name": "Fairies",
    "category": "Common Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Fairies are a Common Fantasy race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10048_awakened_fairie",
      "race_path_10052_fairie_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 15,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "sylph",
    "excelId": 8,
    "name": "Spirits",
    "category": "Common Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Spirits are a Common Fantasy race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 3,
      "int": 2,
      "wis": 1,
      "con": -1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "strengths": [
      "Mana control",
      "Speed",
      "Finesse"
    ],
    "weaknesses": [
      "Low HP",
      "Poison pressure"
    ],
    "resists": [
      "wind",
      "arcane"
    ],
    "weaknessesElements": [
      "earth"
    ],
    "paths": [
      "race_path_10056_awakened_spirit",
      "race_path_10060_spirit_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      },
      {
        "level": 15,
        "skillId": "v50_arcane_4"
      }
    ]
  },
  {
    "id": "race_009_angels",
    "excelId": 9,
    "name": "Angels",
    "category": "Common Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Angels are a Common Fantasy race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 3,
      "con": 1,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light resistance",
      "High wisdom"
    ],
    "weaknesses": [
      "Dark damage",
      "Resource pressure"
    ],
    "resists": [
      "light"
    ],
    "weaknessesElements": [
      "dark"
    ],
    "paths": [
      "race_path_10064_awakened_angel",
      "race_path_10068_angel_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      },
      {
        "level": 15,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "demonkin",
    "excelId": 10,
    "name": "Demons / Devils",
    "category": "Common Fantasy",
    "tier": "base",
    "maxLevel": 15,
    "description": "Demons / Devils are a Common Fantasy race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 2,
      "wis": -1,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [
      "fire",
      "dark"
    ],
    "weaknessesElements": [
      "light"
    ],
    "paths": [
      "race_path_10072_awakened_demons_devil",
      "race_path_10076_demons_devil_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 15,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "beastkin",
    "excelId": 11,
    "name": "Beastmen / Beastkin",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Beastmen / Beastkin are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Speed",
      "Physical pressure",
      "Instincts"
    ],
    "weaknesses": [
      "Arcane damage",
      "Low magic defense"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10080_awakened_beastmen_beastkin",
      "race_path_10084_beastmen_beastkin_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_012_catfolk_nekomimi",
    "excelId": 12,
    "name": "Catfolk / Nekomimi",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Catfolk / Nekomimi are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Speed",
      "Physical pressure",
      "Instincts"
    ],
    "weaknesses": [
      "Arcane damage",
      "Low magic defense"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10088_awakened_catfolk_nekomimi",
      "race_path_10092_catfolk_nekomimi_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_013_dogfolk_inumimi",
    "excelId": 13,
    "name": "Dogfolk / Inumimi",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Dogfolk / Inumimi are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Speed",
      "Physical pressure",
      "Instincts"
    ],
    "weaknesses": [
      "Arcane damage",
      "Low magic defense"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10096_awakened_dogfolk_inumimi",
      "race_path_10100_dogfolk_inumimi_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_014_foxfolk_kitsune",
    "excelId": 14,
    "name": "Foxfolk / Kitsune",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Foxfolk / Kitsune are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Speed",
      "Physical pressure",
      "Instincts"
    ],
    "weaknesses": [
      "Arcane damage",
      "Low magic defense"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10104_awakened_foxfolk_kitsune",
      "race_path_10108_foxfolk_kitsune_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_015_rabbitfolk",
    "excelId": 15,
    "name": "Rabbitfolk",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Rabbitfolk are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Speed",
      "Physical pressure",
      "Instincts"
    ],
    "weaknesses": [
      "Arcane damage",
      "Low magic defense"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10112_awakened_rabbitfolk",
      "race_path_10116_rabbitfolk_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_016_bearfolk",
    "excelId": 16,
    "name": "Bearfolk",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Bearfolk are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Speed",
      "Physical pressure",
      "Instincts"
    ],
    "weaknesses": [
      "Arcane damage",
      "Low magic defense"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10120_awakened_bearfolk",
      "race_path_10124_bearfolk_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_017_lionfolk",
    "excelId": 17,
    "name": "Lionfolk",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Lionfolk are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Speed",
      "Physical pressure",
      "Instincts"
    ],
    "weaknesses": [
      "Arcane damage",
      "Low magic defense"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10128_awakened_lionfolk",
      "race_path_10132_lionfolk_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_018_tigerfolk",
    "excelId": 18,
    "name": "Tigerfolk",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Tigerfolk are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Speed",
      "Physical pressure",
      "Instincts"
    ],
    "weaknesses": [
      "Arcane damage",
      "Low magic defense"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10136_awakened_tigerfolk",
      "race_path_10140_tigerfolk_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_019_birdfolk_harpies",
    "excelId": 19,
    "name": "Birdfolk / Harpies",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Birdfolk / Harpies are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10144_awakened_birdfolk_harpie",
      "race_path_10148_birdfolk_harpie_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_020_lizardfolk",
    "excelId": 20,
    "name": "Lizardfolk",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Lizardfolk are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "High HP",
      "Fire-aspected power",
      "Strong melee"
    ],
    "weaknesses": [
      "Ice pressure",
      "Slow recovery"
    ],
    "resists": [
      "fire"
    ],
    "weaknessesElements": [
      "ice"
    ],
    "paths": [
      "race_path_10152_awakened_lizardfolk",
      "race_path_10156_lizardfolk_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "dragonoid",
    "excelId": 21,
    "name": "Dragonfolk / Dragonewts",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Dragonfolk / Dragonewts are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "strengths": [
      "High HP",
      "Fire-aspected power",
      "Strong melee"
    ],
    "weaknesses": [
      "Ice pressure",
      "Slow recovery"
    ],
    "resists": [
      "fire"
    ],
    "weaknessesElements": [
      "ice"
    ],
    "paths": [
      "race_path_10160_awakened_dragonfolk_dragonewt",
      "race_path_10164_dragonfolk_dragonewt_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 15,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_022_snakefolk_lamia",
    "excelId": 22,
    "name": "Snakefolk / Lamia",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Snakefolk / Lamia are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10168_awakened_snakefolk_lamia",
      "race_path_10172_snakefolk_lamia_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_023_minotaurs",
    "excelId": 23,
    "name": "Minotaurs",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Minotaurs are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10176_awakened_minotaur",
      "race_path_10180_minotaur_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_024_centaurs",
    "excelId": 24,
    "name": "Centaurs",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Centaurs are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Durability",
      "Stun pressure",
      "Body traits"
    ],
    "weaknesses": [
      "Lightning damage",
      "Low speed"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10184_awakened_centaur",
      "race_path_10188_centaur_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_025_merfolk_mermaids",
    "excelId": 25,
    "name": "Merfolk / Mermaids",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Merfolk / Mermaids are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [
      "ice"
    ],
    "weaknessesElements": [
      "lightning"
    ],
    "paths": [
      "race_path_10192_awakened_merfolk_mermaid",
      "race_path_10196_merfolk_mermaid_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_water_1"
      },
      {
        "level": 10,
        "skillId": "v50_water_2"
      },
      {
        "level": 15,
        "skillId": "v50_water_3"
      }
    ]
  },
  {
    "id": "race_026_fishmen",
    "excelId": 26,
    "name": "Fishmen",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Fishmen are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [
      "ice"
    ],
    "weaknessesElements": [
      "lightning"
    ],
    "paths": [
      "race_path_10200_awakened_fishmen",
      "race_path_10204_fishmen_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_027_minks",
    "excelId": 27,
    "name": "Minks",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Minks are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Speed",
      "Physical pressure",
      "Instincts"
    ],
    "weaknesses": [
      "Arcane damage",
      "Low magic defense"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10208_awakened_mink",
      "race_path_10212_mink_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_028_arachne",
    "excelId": 28,
    "name": "Arachne",
    "category": "Beastfolk",
    "tier": "base",
    "maxLevel": 15,
    "description": "Arachne are a Beastfolk race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10216_awakened_arachne",
      "race_path_10220_arachne_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 15,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_029_goblins",
    "excelId": 29,
    "name": "Goblins",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Goblins are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10224_awakened_goblin",
      "race_path_10228_goblin_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_030_hobgoblins",
    "excelId": 30,
    "name": "Hobgoblins",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Hobgoblins are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10232_awakened_hobgoblin",
      "race_path_10236_hobgoblin_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_031_orcs",
    "excelId": 31,
    "name": "Orcs",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Orcs are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10240_awakened_orc",
      "race_path_10244_orc_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_032_ogres",
    "excelId": 32,
    "name": "Ogres",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Ogres are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10248_awakened_ogre",
      "race_path_10252_ogre_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 15,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_033_oni",
    "excelId": 33,
    "name": "Oni",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Oni are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 2,
      "wis": -1,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [
      "fire",
      "dark"
    ],
    "weaknessesElements": [
      "light"
    ],
    "paths": [
      "race_path_10256_awakened_oni",
      "race_path_10260_oni_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 15,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_034_trolls",
    "excelId": 34,
    "name": "Trolls",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Trolls are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10264_awakened_troll",
      "race_path_10268_troll_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_035_giants",
    "excelId": 35,
    "name": "Giants",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Giants are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10272_awakened_giant",
      "race_path_10276_giant_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 15,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_036_cyclopes",
    "excelId": 36,
    "name": "Cyclopes",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Cyclopes are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10280_awakened_cyclope",
      "race_path_10284_cyclope_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_037_slimes",
    "excelId": 37,
    "name": "Slimes",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Slimes are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "in_adaptive_body"
    ],
    "strengths": [
      "Durability",
      "Stun pressure",
      "Body traits"
    ],
    "weaknesses": [
      "Lightning damage",
      "Low speed"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10288_awakened_slime",
      "race_path_10292_slime_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 15,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_038_treants_ents",
    "excelId": 38,
    "name": "Treants / Ents",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Treants / Ents are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Durability",
      "Stun pressure",
      "Body traits"
    ],
    "weaknesses": [
      "Lightning damage",
      "Low speed"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10296_awakened_treants_ent",
      "race_path_10300_treants_ent_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "golemforged",
    "excelId": 39,
    "name": "Golems",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Golems are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_guard_stance"
    ],
    "strengths": [
      "Durability",
      "Stun pressure",
      "Body traits"
    ],
    "weaknesses": [
      "Lightning damage",
      "Low speed"
    ],
    "resists": [
      "physical",
      "poison"
    ],
    "weaknessesElements": [
      "lightning"
    ],
    "paths": [
      "race_path_10304_awakened_golem",
      "race_path_10308_golem_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_shield_bash"
      },
      {
        "level": 10,
        "skillId": "sk_kings_guard"
      },
      {
        "level": 15,
        "skillId": "sk_aegis_last_king"
      }
    ]
  },
  {
    "id": "race_040_homunculi",
    "excelId": 40,
    "name": "Homunculi",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Homunculi are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10312_awakened_homunculi",
      "race_path_10316_homunculi_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_041_automata_living_dolls",
    "excelId": 41,
    "name": "Automata / Living Dolls",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Automata / Living Dolls are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Durability",
      "Stun pressure",
      "Body traits"
    ],
    "weaknesses": [
      "Lightning damage",
      "Low speed"
    ],
    "resists": [
      "physical",
      "poison"
    ],
    "weaknessesElements": [
      "lightning"
    ],
    "paths": [
      "race_path_10320_awakened_automata_living_doll",
      "race_path_10324_automata_living_doll_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "undead",
    "excelId": 42,
    "name": "Undead",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Undead are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 2,
      "wis": 1,
      "con": 3,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "strengths": [
      "Dark resistance",
      "Life drain",
      "Poison resistance"
    ],
    "weaknesses": [
      "Light damage",
      "Holy enemies"
    ],
    "resists": [
      "dark",
      "poison"
    ],
    "weaknessesElements": [
      "light"
    ],
    "paths": [
      "race_path_10328_awakened_undead",
      "race_path_10332_undead_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 15,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_043_skeletons",
    "excelId": 43,
    "name": "Skeletons",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Skeletons are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 2,
      "wis": 1,
      "con": 3,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "strengths": [
      "Dark resistance",
      "Life drain",
      "Poison resistance"
    ],
    "weaknesses": [
      "Light damage",
      "Holy enemies"
    ],
    "resists": [
      "dark",
      "poison"
    ],
    "weaknessesElements": [
      "light"
    ],
    "paths": [
      "race_path_10336_awakened_skeleton",
      "race_path_10340_skeleton_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 15,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_044_zombies",
    "excelId": 44,
    "name": "Zombies",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Zombies are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 2,
      "wis": 1,
      "con": 3,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "strengths": [
      "Dark resistance",
      "Life drain",
      "Poison resistance"
    ],
    "weaknesses": [
      "Light damage",
      "Holy enemies"
    ],
    "resists": [
      "dark",
      "poison"
    ],
    "weaknessesElements": [
      "light"
    ],
    "paths": [
      "race_path_10344_awakened_zombie",
      "race_path_10348_zombie_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 15,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_045_liches",
    "excelId": 45,
    "name": "Liches",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Liches are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 2,
      "wis": 1,
      "con": 3,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "strengths": [
      "Dark resistance",
      "Life drain",
      "Poison resistance"
    ],
    "weaknesses": [
      "Light damage",
      "Holy enemies"
    ],
    "resists": [
      "dark",
      "poison"
    ],
    "weaknessesElements": [
      "light"
    ],
    "paths": [
      "race_path_10352_awakened_liche",
      "race_path_10356_liche_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 15,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_046_vampires",
    "excelId": 46,
    "name": "Vampires",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Vampires are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 2,
      "wis": 1,
      "con": 3,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "strengths": [
      "Dark resistance",
      "Life drain",
      "Poison resistance"
    ],
    "weaknesses": [
      "Light damage",
      "Holy enemies"
    ],
    "resists": [
      "dark",
      "poison"
    ],
    "weaknessesElements": [
      "light"
    ],
    "paths": [
      "race_path_10360_awakened_vampire",
      "race_path_10364_vampire_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 15,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_047_werewolves",
    "excelId": 47,
    "name": "Werewolves",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Werewolves are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10368_awakened_werewolve",
      "race_path_10372_werewolve_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_048_wraiths_ghosts",
    "excelId": 48,
    "name": "Wraiths / Ghosts",
    "category": "Monster Races",
    "tier": "base",
    "maxLevel": 15,
    "description": "Wraiths / Ghosts are a Monster Races race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 2,
      "wis": 1,
      "con": 3,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "strengths": [
      "Dark resistance",
      "Life drain",
      "Poison resistance"
    ],
    "weaknesses": [
      "Light damage",
      "Holy enemies"
    ],
    "resists": [
      "dark",
      "poison"
    ],
    "weaknessesElements": [
      "light"
    ],
    "paths": [
      "race_path_10376_awakened_wraiths_ghost",
      "race_path_10380_wraiths_ghost_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 15,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_049_yokai",
    "excelId": 49,
    "name": "Yōkai",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Yōkai are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10384_awakened_yokai",
      "race_path_10388_yokai_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_050_kitsune",
    "excelId": 50,
    "name": "Kitsune",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Kitsune are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10392_awakened_kitsune",
      "race_path_10396_kitsune_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_051_tanuki",
    "excelId": 51,
    "name": "Tanuki",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Tanuki are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10400_awakened_tanuki",
      "race_path_10404_tanuki_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_052_tengu",
    "excelId": 52,
    "name": "Tengu",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Tengu are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 3,
      "int": 2,
      "wis": 1,
      "con": -1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Mana control",
      "Speed",
      "Finesse"
    ],
    "weaknesses": [
      "Low HP",
      "Poison pressure"
    ],
    "resists": [
      "wind",
      "arcane"
    ],
    "weaknessesElements": [
      "earth"
    ],
    "paths": [
      "race_path_10408_awakened_tengu",
      "race_path_10412_tengu_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_053_kappa",
    "excelId": 53,
    "name": "Kappa",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Kappa are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [
      "ice"
    ],
    "weaknessesElements": [
      "lightning"
    ],
    "paths": [
      "race_path_10416_awakened_kappa",
      "race_path_10420_kappa_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_054_yuki_onna",
    "excelId": 54,
    "name": "Yuki-Onna",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Yuki-Onna are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10424_awakened_yuki_onna",
      "race_path_10428_yuki_onna_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_055_nekomata_bakeneko",
    "excelId": 55,
    "name": "Nekomata / Bakeneko",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Nekomata / Bakeneko are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 2,
      "dex": 3,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Speed",
      "Physical pressure",
      "Instincts"
    ],
    "weaknesses": [
      "Arcane damage",
      "Low magic defense"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10432_awakened_nekomata_bakeneko",
      "race_path_10436_nekomata_bakeneko_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_056_tsukumogami",
    "excelId": 56,
    "name": "Tsukumogami",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Tsukumogami are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10440_awakened_tsukumogami",
      "race_path_10444_tsukumogami_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_057_shikigami",
    "excelId": 57,
    "name": "Shikigami",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Shikigami are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10448_awakened_shikigami",
      "race_path_10452_shikigami_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_058_kami",
    "excelId": 58,
    "name": "Kami",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Kami are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 3,
      "con": 1,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Healing",
      "Light resistance",
      "High wisdom"
    ],
    "weaknesses": [
      "Dark damage",
      "Resource pressure"
    ],
    "resists": [
      "light"
    ],
    "weaknessesElements": [
      "dark"
    ],
    "paths": [
      "race_path_10456_awakened_kami",
      "race_path_10460_kami_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_059_ayakashi",
    "excelId": 59,
    "name": "Ayakashi",
    "category": "Japanese Mythology",
    "tier": "base",
    "maxLevel": 15,
    "description": "Ayakashi are a Japanese Mythology race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 2,
      "wis": -1,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10464_awakened_ayakashi",
      "race_path_10468_ayakashi_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_060_dragons",
    "excelId": 60,
    "name": "Dragons",
    "category": "Eastern / Cultivation",
    "tier": "base",
    "maxLevel": 15,
    "description": "Dragons are a Eastern / Cultivation race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "strengths": [
      "High HP",
      "Fire-aspected power",
      "Strong melee"
    ],
    "weaknesses": [
      "Ice pressure",
      "Slow recovery"
    ],
    "resists": [
      "fire"
    ],
    "weaknessesElements": [
      "ice"
    ],
    "paths": [
      "race_path_10472_awakened_dragon",
      "race_path_10476_dragon_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 15,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_061_dragonkin",
    "excelId": 61,
    "name": "Dragonkin",
    "category": "Eastern / Cultivation",
    "tier": "base",
    "maxLevel": 15,
    "description": "Dragonkin are a Eastern / Cultivation race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "strengths": [
      "High HP",
      "Fire-aspected power",
      "Strong melee"
    ],
    "weaknesses": [
      "Ice pressure",
      "Slow recovery"
    ],
    "resists": [
      "fire"
    ],
    "weaknessesElements": [
      "ice"
    ],
    "paths": [
      "race_path_10480_awakened_dragonkin",
      "race_path_10484_dragonkin_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 15,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "celestian",
    "excelId": 62,
    "name": "Celestials",
    "category": "Eastern / Cultivation",
    "tier": "base",
    "maxLevel": 15,
    "description": "Celestials are a Eastern / Cultivation race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 3,
      "con": 1,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "strengths": [
      "Healing",
      "Light resistance",
      "High wisdom"
    ],
    "weaknesses": [
      "Dark damage",
      "Resource pressure"
    ],
    "resists": [
      "light"
    ],
    "weaknessesElements": [
      "dark"
    ],
    "paths": [
      "race_path_10488_awakened_celestial",
      "race_path_10492_celestial_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      },
      {
        "level": 15,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_063_immortals",
    "excelId": 63,
    "name": "Immortals",
    "category": "Eastern / Cultivation",
    "tier": "base",
    "maxLevel": 15,
    "description": "Immortals are a Eastern / Cultivation race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 3,
      "con": 1,
      "cha": 2
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Healing",
      "Light resistance",
      "High wisdom"
    ],
    "weaknesses": [
      "Dark damage",
      "Resource pressure"
    ],
    "resists": [
      "light"
    ],
    "weaknessesElements": [
      "dark"
    ],
    "paths": [
      "race_path_10496_awakened_immortal",
      "race_path_10500_immortal_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_064_asura",
    "excelId": 64,
    "name": "Asura",
    "category": "Eastern / Cultivation",
    "tier": "base",
    "maxLevel": 15,
    "description": "Asura are a Eastern / Cultivation race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 2,
      "wis": -1,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [
      "fire",
      "dark"
    ],
    "weaknessesElements": [
      "light"
    ],
    "paths": [
      "race_path_10504_awakened_asura",
      "race_path_10508_asura_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_065_rakshasa",
    "excelId": 65,
    "name": "Rakshasa",
    "category": "Eastern / Cultivation",
    "tier": "base",
    "maxLevel": 15,
    "description": "Rakshasa are a Eastern / Cultivation race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 2,
      "wis": -1,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [
      "fire",
      "dark"
    ],
    "weaknessesElements": [
      "light"
    ],
    "paths": [
      "race_path_10512_awakened_rakshasa",
      "race_path_10516_rakshasa_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_066_naga",
    "excelId": 66,
    "name": "Naga",
    "category": "Eastern / Cultivation",
    "tier": "base",
    "maxLevel": 15,
    "description": "Naga are a Eastern / Cultivation race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "High HP",
      "Fire-aspected power",
      "Strong melee"
    ],
    "weaknesses": [
      "Ice pressure",
      "Slow recovery"
    ],
    "resists": [
      "fire"
    ],
    "weaknessesElements": [
      "ice"
    ],
    "paths": [
      "race_path_10520_awakened_naga",
      "race_path_10524_naga_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_067_garuda",
    "excelId": 67,
    "name": "Garuda",
    "category": "Eastern / Cultivation",
    "tier": "base",
    "maxLevel": 15,
    "description": "Garuda are a Eastern / Cultivation race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 0,
      "dex": 3,
      "int": 2,
      "wis": 1,
      "con": -1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Mana control",
      "Speed",
      "Finesse"
    ],
    "weaknesses": [
      "Low HP",
      "Poison pressure"
    ],
    "resists": [
      "wind",
      "arcane"
    ],
    "weaknessesElements": [
      "earth"
    ],
    "paths": [
      "race_path_10528_awakened_garuda",
      "race_path_10532_garuda_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_068_yaksha",
    "excelId": 68,
    "name": "Yaksha",
    "category": "Eastern / Cultivation",
    "tier": "base",
    "maxLevel": 15,
    "description": "Yaksha are a Eastern / Cultivation race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "strengths": [
      "Flexible growth",
      "Easy class pairing"
    ],
    "weaknesses": [
      "No extreme specialization"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10536_awakened_yaksha",
      "race_path_10540_yaksha_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 15,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_069_qilin_kirin",
    "excelId": 69,
    "name": "Qilin / Kirin",
    "category": "Eastern / Cultivation",
    "tier": "base",
    "maxLevel": 15,
    "description": "Qilin / Kirin are a Eastern / Cultivation race imported from the Excel race registry. Their growth template is tuned for the current roguelike foundation.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 3,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "strengths": [
      "High HP",
      "Fire-aspected power",
      "Strong melee"
    ],
    "weaknesses": [
      "Ice pressure",
      "Slow recovery"
    ],
    "resists": [],
    "weaknessesElements": [],
    "paths": [
      "race_path_10544_awakened_qilin_kirin",
      "race_path_10548_qilin_kirin_bloodline"
    ],
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 15,
        "skillId": "sk_power_strike"
      }
    ]
  }
];

export const RACE_PATHS = [
  {
    "id": "race_path_10000_awakened_human",
    "excelId": 10000,
    "name": "Awakened Human",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "human",
    "description": "Excel-imported advanced race evolution path for Human.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Human",
      "raceId": 1,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_human_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10001_elder_human",
    "excelId": 10001,
    "name": "Elder Human",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10000_awakened_human",
    "description": "Excel-imported specialist race evolution path for Human.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Human",
      "raceId": 1,
      "previousJobId": 10000,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_human_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10002_human_sovereign",
    "excelId": 10002,
    "name": "Human Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10001_elder_human",
    "description": "Excel-imported rare race evolution path for Human.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Human",
      "raceId": 1,
      "previousJobId": 10001,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_human_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10003_origin_human",
    "excelId": 10003,
    "name": "Origin Human",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10002_human_sovereign",
    "description": "Excel-imported hidden race evolution path for Human.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Human",
      "raceId": 1,
      "previousJobId": 10002,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_human_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10004_human_bloodline",
    "excelId": 10004,
    "name": "Human Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "human",
    "description": "Excel-imported advanced race evolution path for Human.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Human",
      "raceId": 1,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_human_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10005_mythic_human",
    "excelId": 10005,
    "name": "Mythic Human",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10004_human_bloodline",
    "description": "Excel-imported specialist race evolution path for Human.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Human",
      "raceId": 1,
      "previousJobId": 10004,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_human_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10006_ancient_human_avatar",
    "excelId": 10006,
    "name": "Ancient Human Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10005_mythic_human",
    "description": "Excel-imported rare race evolution path for Human.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Human",
      "raceId": 1,
      "previousJobId": 10005,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_human_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10007_world_born_human",
    "excelId": 10007,
    "name": "World-Born Human",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10006_ancient_human_avatar",
    "description": "Excel-imported hidden race evolution path for Human.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Human",
      "raceId": 1,
      "previousJobId": 10006,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_human_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10008_awakened_elve",
    "excelId": 10008,
    "name": "Awakened Elve",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "high_elf",
    "description": "Excel-imported advanced race evolution path for Elves.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Elves",
      "raceId": 2,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_elves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_1"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "race_path_10009_elder_elve",
    "excelId": 10009,
    "name": "Elder Elve",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10008_awakened_elve",
    "description": "Excel-imported specialist race evolution path for Elves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Elves",
      "raceId": 2,
      "previousJobId": 10008,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_elves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_1"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "race_path_10010_elve_sovereign",
    "excelId": 10010,
    "name": "Elve Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10009_elder_elve",
    "description": "Excel-imported rare race evolution path for Elves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Elves",
      "raceId": 2,
      "previousJobId": 10009,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_elves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_1"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "race_path_10011_origin_elve",
    "excelId": 10011,
    "name": "Origin Elve",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10010_elve_sovereign",
    "description": "Excel-imported hidden race evolution path for Elves.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Elves",
      "raceId": 2,
      "previousJobId": 10010,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_elves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_1"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "race_path_10012_elve_bloodline",
    "excelId": 10012,
    "name": "Elve Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "high_elf",
    "description": "Excel-imported advanced race evolution path for Elves.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Elves",
      "raceId": 2,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_elves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_1"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "race_path_10013_mythic_elve",
    "excelId": 10013,
    "name": "Mythic Elve",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10012_elve_bloodline",
    "description": "Excel-imported specialist race evolution path for Elves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Elves",
      "raceId": 2,
      "previousJobId": 10012,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_elves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_1"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "race_path_10014_ancient_elve_avatar",
    "excelId": 10014,
    "name": "Ancient Elve Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10013_mythic_elve",
    "description": "Excel-imported rare race evolution path for Elves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Elves",
      "raceId": 2,
      "previousJobId": 10013,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_elves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_1"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "race_path_10015_world_born_elve",
    "excelId": 10015,
    "name": "World-Born Elve",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10014_ancient_elve_avatar",
    "description": "Excel-imported hidden race evolution path for Elves.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Elves",
      "raceId": 2,
      "previousJobId": 10014,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_elves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_1"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      }
    ]
  },
  {
    "id": "race_path_10016_awakened_dark_elve",
    "excelId": 10016,
    "name": "Awakened Dark Elve",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_003_dark_elves",
    "description": "Excel-imported advanced race evolution path for Dark Elves.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dark Elves",
      "raceId": 3,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_dark_elves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10017_elder_dark_elve",
    "excelId": 10017,
    "name": "Elder Dark Elve",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10016_awakened_dark_elve",
    "description": "Excel-imported specialist race evolution path for Dark Elves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dark Elves",
      "raceId": 3,
      "previousJobId": 10016,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_dark_elves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10018_dark_elve_sovereign",
    "excelId": 10018,
    "name": "Dark Elve Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10017_elder_dark_elve",
    "description": "Excel-imported rare race evolution path for Dark Elves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dark Elves",
      "raceId": 3,
      "previousJobId": 10017,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_dark_elves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10019_origin_dark_elve",
    "excelId": 10019,
    "name": "Origin Dark Elve",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10018_dark_elve_sovereign",
    "description": "Excel-imported hidden race evolution path for Dark Elves.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dark Elves",
      "raceId": 3,
      "previousJobId": 10018,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_dark_elves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10020_dark_elve_bloodline",
    "excelId": 10020,
    "name": "Dark Elve Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_003_dark_elves",
    "description": "Excel-imported advanced race evolution path for Dark Elves.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dark Elves",
      "raceId": 3,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_dark_elves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10021_mythic_dark_elve",
    "excelId": 10021,
    "name": "Mythic Dark Elve",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10020_dark_elve_bloodline",
    "description": "Excel-imported specialist race evolution path for Dark Elves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dark Elves",
      "raceId": 3,
      "previousJobId": 10020,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_dark_elves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10022_ancient_dark_elve_avatar",
    "excelId": 10022,
    "name": "Ancient Dark Elve Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10021_mythic_dark_elve",
    "description": "Excel-imported rare race evolution path for Dark Elves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dark Elves",
      "raceId": 3,
      "previousJobId": 10021,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_dark_elves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10023_world_born_dark_elve",
    "excelId": 10023,
    "name": "World-Born Dark Elve",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10022_ancient_dark_elve_avatar",
    "description": "Excel-imported hidden race evolution path for Dark Elves.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "in_arcane_sight"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dark Elves",
      "raceId": 3,
      "previousJobId": 10022,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_dark_elves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10024_awakened_dwarve",
    "excelId": 10024,
    "name": "Awakened Dwarve",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "iron_dwarf",
    "description": "Excel-imported advanced race evolution path for Dwarves.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dwarves",
      "raceId": 4,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_dwarves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10025_elder_dwarve",
    "excelId": 10025,
    "name": "Elder Dwarve",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10024_awakened_dwarve",
    "description": "Excel-imported specialist race evolution path for Dwarves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dwarves",
      "raceId": 4,
      "previousJobId": 10024,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_dwarves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10026_dwarve_sovereign",
    "excelId": 10026,
    "name": "Dwarve Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10025_elder_dwarve",
    "description": "Excel-imported rare race evolution path for Dwarves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dwarves",
      "raceId": 4,
      "previousJobId": 10025,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_dwarves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10027_origin_dwarve",
    "excelId": 10027,
    "name": "Origin Dwarve",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10026_dwarve_sovereign",
    "description": "Excel-imported hidden race evolution path for Dwarves.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dwarves",
      "raceId": 4,
      "previousJobId": 10026,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_dwarves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10028_dwarve_bloodline",
    "excelId": 10028,
    "name": "Dwarve Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "iron_dwarf",
    "description": "Excel-imported advanced race evolution path for Dwarves.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dwarves",
      "raceId": 4,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_dwarves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10029_mythic_dwarve",
    "excelId": 10029,
    "name": "Mythic Dwarve",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10028_dwarve_bloodline",
    "description": "Excel-imported specialist race evolution path for Dwarves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dwarves",
      "raceId": 4,
      "previousJobId": 10028,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_dwarves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10030_ancient_dwarve_avatar",
    "excelId": 10030,
    "name": "Ancient Dwarve Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10029_mythic_dwarve",
    "description": "Excel-imported rare race evolution path for Dwarves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dwarves",
      "raceId": 4,
      "previousJobId": 10029,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_dwarves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10031_world_born_dwarve",
    "excelId": 10031,
    "name": "World-Born Dwarve",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10030_ancient_dwarve_avatar",
    "description": "Excel-imported hidden race evolution path for Dwarves.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dwarves",
      "raceId": 4,
      "previousJobId": 10030,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_dwarves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10032_awakened_halfling",
    "excelId": 10032,
    "name": "Awakened Halfling",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_005_halflings",
    "description": "Excel-imported advanced race evolution path for Halflings.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 0,
      "wis": 1,
      "con": 4,
      "cha": 0
    },
    "levelGrowth": {
      "con": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Halflings",
      "raceId": 5,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_halflings_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10033_elder_halfling",
    "excelId": 10033,
    "name": "Elder Halfling",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10032_awakened_halfling",
    "description": "Excel-imported specialist race evolution path for Halflings.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 5,
      "cha": 0
    },
    "levelGrowth": {
      "con": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Halflings",
      "raceId": 5,
      "previousJobId": 10032,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_halflings_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10034_halfling_sovereign",
    "excelId": 10034,
    "name": "Halfling Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10033_elder_halfling",
    "description": "Excel-imported rare race evolution path for Halflings.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 7,
      "cha": 0
    },
    "levelGrowth": {
      "con": 3,
      "wis": 2,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Halflings",
      "raceId": 5,
      "previousJobId": 10033,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_halflings_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10035_origin_halfling",
    "excelId": 10035,
    "name": "Origin Halfling",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10034_halfling_sovereign",
    "description": "Excel-imported hidden race evolution path for Halflings.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 0,
      "wis": 3,
      "con": 9,
      "cha": 0
    },
    "levelGrowth": {
      "con": 4,
      "wis": 2,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Halflings",
      "raceId": 5,
      "previousJobId": 10034,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_halflings_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10036_halfling_bloodline",
    "excelId": 10036,
    "name": "Halfling Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_005_halflings",
    "description": "Excel-imported advanced race evolution path for Halflings.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 0,
      "wis": 1,
      "con": 4,
      "cha": 0
    },
    "levelGrowth": {
      "con": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Halflings",
      "raceId": 5,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_halflings_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10037_mythic_halfling",
    "excelId": 10037,
    "name": "Mythic Halfling",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10036_halfling_bloodline",
    "description": "Excel-imported specialist race evolution path for Halflings.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 5,
      "cha": 0
    },
    "levelGrowth": {
      "con": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Halflings",
      "raceId": 5,
      "previousJobId": 10036,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_halflings_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10038_ancient_halfling_avatar",
    "excelId": 10038,
    "name": "Ancient Halfling Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10037_mythic_halfling",
    "description": "Excel-imported rare race evolution path for Halflings.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 7,
      "cha": 0
    },
    "levelGrowth": {
      "con": 3,
      "wis": 2,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Halflings",
      "raceId": 5,
      "previousJobId": 10037,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_halflings_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10039_world_born_halfling",
    "excelId": 10039,
    "name": "World-Born Halfling",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10038_ancient_halfling_avatar",
    "description": "Excel-imported hidden race evolution path for Halflings.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 0,
      "wis": 3,
      "con": 9,
      "cha": 0
    },
    "levelGrowth": {
      "con": 4,
      "wis": 2,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Halflings",
      "raceId": 5,
      "previousJobId": 10038,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_halflings_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10040_awakened_gnome",
    "excelId": 10040,
    "name": "Awakened Gnome",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_006_gnomes",
    "description": "Excel-imported advanced race evolution path for Gnomes.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 0,
      "wis": 1,
      "con": 4,
      "cha": 0
    },
    "levelGrowth": {
      "con": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Gnomes",
      "raceId": 6,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_gnomes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10041_elder_gnome",
    "excelId": 10041,
    "name": "Elder Gnome",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10040_awakened_gnome",
    "description": "Excel-imported specialist race evolution path for Gnomes.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 5,
      "cha": 0
    },
    "levelGrowth": {
      "con": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Gnomes",
      "raceId": 6,
      "previousJobId": 10040,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_gnomes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10042_gnome_sovereign",
    "excelId": 10042,
    "name": "Gnome Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10041_elder_gnome",
    "description": "Excel-imported rare race evolution path for Gnomes.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 7,
      "cha": 0
    },
    "levelGrowth": {
      "con": 3,
      "wis": 2,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Gnomes",
      "raceId": 6,
      "previousJobId": 10041,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_gnomes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10043_origin_gnome",
    "excelId": 10043,
    "name": "Origin Gnome",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10042_gnome_sovereign",
    "description": "Excel-imported hidden race evolution path for Gnomes.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 0,
      "wis": 3,
      "con": 9,
      "cha": 0
    },
    "levelGrowth": {
      "con": 4,
      "wis": 2,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Gnomes",
      "raceId": 6,
      "previousJobId": 10042,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_gnomes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10044_gnome_bloodline",
    "excelId": 10044,
    "name": "Gnome Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_006_gnomes",
    "description": "Excel-imported advanced race evolution path for Gnomes.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 0,
      "wis": 1,
      "con": 4,
      "cha": 0
    },
    "levelGrowth": {
      "con": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Gnomes",
      "raceId": 6,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_gnomes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10045_mythic_gnome",
    "excelId": 10045,
    "name": "Mythic Gnome",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10044_gnome_bloodline",
    "description": "Excel-imported specialist race evolution path for Gnomes.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 5,
      "cha": 0
    },
    "levelGrowth": {
      "con": 2,
      "wis": 1,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Gnomes",
      "raceId": 6,
      "previousJobId": 10044,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_gnomes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10046_ancient_gnome_avatar",
    "excelId": 10046,
    "name": "Ancient Gnome Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10045_mythic_gnome",
    "description": "Excel-imported rare race evolution path for Gnomes.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 0,
      "wis": 2,
      "con": 7,
      "cha": 0
    },
    "levelGrowth": {
      "con": 3,
      "wis": 2,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Gnomes",
      "raceId": 6,
      "previousJobId": 10045,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_gnomes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10047_world_born_gnome",
    "excelId": 10047,
    "name": "World-Born Gnome",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10046_ancient_gnome_avatar",
    "description": "Excel-imported hidden race evolution path for Gnomes.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 0,
      "wis": 3,
      "con": 9,
      "cha": 0
    },
    "levelGrowth": {
      "con": 4,
      "wis": 2,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Gnomes",
      "raceId": 6,
      "previousJobId": 10046,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_gnomes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10048_awakened_fairie",
    "excelId": 10048,
    "name": "Awakened Fairie",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_007_fairies",
    "description": "Excel-imported advanced race evolution path for Fairies.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fairies",
      "raceId": 7,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_fairies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 10,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10049_elder_fairie",
    "excelId": 10049,
    "name": "Elder Fairie",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10048_awakened_fairie",
    "description": "Excel-imported specialist race evolution path for Fairies.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fairies",
      "raceId": 7,
      "previousJobId": 10048,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_fairies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 10,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10050_fairie_sovereign",
    "excelId": 10050,
    "name": "Fairie Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10049_elder_fairie",
    "description": "Excel-imported rare race evolution path for Fairies.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fairies",
      "raceId": 7,
      "previousJobId": 10049,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_fairies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 5,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10051_origin_fairie",
    "excelId": 10051,
    "name": "Origin Fairie",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10050_fairie_sovereign",
    "description": "Excel-imported hidden race evolution path for Fairies.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fairies",
      "raceId": 7,
      "previousJobId": 10050,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_fairies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 5,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10052_fairie_bloodline",
    "excelId": 10052,
    "name": "Fairie Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_007_fairies",
    "description": "Excel-imported advanced race evolution path for Fairies.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fairies",
      "raceId": 7,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_fairies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 10,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10053_mythic_fairie",
    "excelId": 10053,
    "name": "Mythic Fairie",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10052_fairie_bloodline",
    "description": "Excel-imported specialist race evolution path for Fairies.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fairies",
      "raceId": 7,
      "previousJobId": 10052,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_fairies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 10,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10054_ancient_fairie_avatar",
    "excelId": 10054,
    "name": "Ancient Fairie Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10053_mythic_fairie",
    "description": "Excel-imported rare race evolution path for Fairies.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fairies",
      "raceId": 7,
      "previousJobId": 10053,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_fairies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 5,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10055_world_born_fairie",
    "excelId": 10055,
    "name": "World-Born Fairie",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10054_ancient_fairie_avatar",
    "description": "Excel-imported hidden race evolution path for Fairies.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fairies",
      "raceId": 7,
      "previousJobId": 10054,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_fairies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 5,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10056_awakened_spirit",
    "excelId": 10056,
    "name": "Awakened Spirit",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "sylph",
    "description": "Excel-imported advanced race evolution path for Spirits.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 3,
      "wis": 1,
      "con": -1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Spirits",
      "raceId": 8,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_spirits_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_4"
      }
    ]
  },
  {
    "id": "race_path_10057_elder_spirit",
    "excelId": 10057,
    "name": "Elder Spirit",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10056_awakened_spirit",
    "description": "Excel-imported specialist race evolution path for Spirits.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 4,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Spirits",
      "raceId": 8,
      "previousJobId": 10056,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_spirits_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_4"
      }
    ]
  },
  {
    "id": "race_path_10058_spirit_sovereign",
    "excelId": 10058,
    "name": "Spirit Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10057_elder_spirit",
    "description": "Excel-imported rare race evolution path for Spirits.",
    "stats": {
      "str": 0,
      "dex": 7,
      "int": 5,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 3,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Spirits",
      "raceId": 8,
      "previousJobId": 10057,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_spirits_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_4"
      }
    ]
  },
  {
    "id": "race_path_10059_origin_spirit",
    "excelId": 10059,
    "name": "Origin Spirit",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10058_spirit_sovereign",
    "description": "Excel-imported hidden race evolution path for Spirits.",
    "stats": {
      "str": 0,
      "dex": 9,
      "int": 6,
      "wis": 3,
      "con": -3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 4,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Spirits",
      "raceId": 8,
      "previousJobId": 10058,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_spirits_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_4"
      }
    ]
  },
  {
    "id": "race_path_10060_spirit_bloodline",
    "excelId": 10060,
    "name": "Spirit Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "sylph",
    "description": "Excel-imported advanced race evolution path for Spirits.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 3,
      "wis": 1,
      "con": -1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Spirits",
      "raceId": 8,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_spirits_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_4"
      }
    ]
  },
  {
    "id": "race_path_10061_mythic_spirit",
    "excelId": 10061,
    "name": "Mythic Spirit",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10060_spirit_bloodline",
    "description": "Excel-imported specialist race evolution path for Spirits.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 4,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Spirits",
      "raceId": 8,
      "previousJobId": 10060,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_spirits_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_3"
      },
      {
        "level": 10,
        "skillId": "v50_arcane_4"
      }
    ]
  },
  {
    "id": "race_path_10062_ancient_spirit_avatar",
    "excelId": 10062,
    "name": "Ancient Spirit Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10061_mythic_spirit",
    "description": "Excel-imported rare race evolution path for Spirits.",
    "stats": {
      "str": 0,
      "dex": 7,
      "int": 5,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 3,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Spirits",
      "raceId": 8,
      "previousJobId": 10061,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_spirits_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_4"
      }
    ]
  },
  {
    "id": "race_path_10063_world_born_spirit",
    "excelId": 10063,
    "name": "World-Born Spirit",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10062_ancient_spirit_avatar",
    "description": "Excel-imported hidden race evolution path for Spirits.",
    "stats": {
      "str": 0,
      "dex": 9,
      "int": 6,
      "wis": 3,
      "con": -3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 4,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "v50_arcane_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Spirits",
      "raceId": 8,
      "previousJobId": 10062,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_spirits_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_arcane_2"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_3"
      },
      {
        "level": 5,
        "skillId": "v50_arcane_4"
      }
    ]
  },
  {
    "id": "race_path_10064_awakened_angel",
    "excelId": 10064,
    "name": "Awakened Angel",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_009_angels",
    "description": "Excel-imported advanced race evolution path for Angels.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 4,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Angels",
      "raceId": 9,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_angels_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      },
      {
        "level": 10,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10065_elder_angel",
    "excelId": 10065,
    "name": "Elder Angel",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10064_awakened_angel",
    "description": "Excel-imported specialist race evolution path for Angels.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 4
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Angels",
      "raceId": 9,
      "previousJobId": 10064,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_angels_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      },
      {
        "level": 10,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10066_angel_sovereign",
    "excelId": 10066,
    "name": "Angel Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10065_elder_angel",
    "description": "Excel-imported rare race evolution path for Angels.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 7,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "wis": 3,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Angels",
      "raceId": 9,
      "previousJobId": 10065,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_angels_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      },
      {
        "level": 5,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10067_origin_angel",
    "excelId": 10067,
    "name": "Origin Angel",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10066_angel_sovereign",
    "description": "Excel-imported hidden race evolution path for Angels.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 9,
      "con": 3,
      "cha": 6
    },
    "levelGrowth": {
      "wis": 4,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Angels",
      "raceId": 9,
      "previousJobId": 10066,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_angels_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      },
      {
        "level": 5,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10068_angel_bloodline",
    "excelId": 10068,
    "name": "Angel Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_009_angels",
    "description": "Excel-imported advanced race evolution path for Angels.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 4,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Angels",
      "raceId": 9,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_angels_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      },
      {
        "level": 10,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10069_mythic_angel",
    "excelId": 10069,
    "name": "Mythic Angel",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10068_angel_bloodline",
    "description": "Excel-imported specialist race evolution path for Angels.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 4
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Angels",
      "raceId": 9,
      "previousJobId": 10068,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_angels_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      },
      {
        "level": 10,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10070_ancient_angel_avatar",
    "excelId": 10070,
    "name": "Ancient Angel Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10069_mythic_angel",
    "description": "Excel-imported rare race evolution path for Angels.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 7,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "wis": 3,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Angels",
      "raceId": 9,
      "previousJobId": 10069,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_angels_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      },
      {
        "level": 5,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10071_world_born_angel",
    "excelId": 10071,
    "name": "World-Born Angel",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10070_ancient_angel_avatar",
    "description": "Excel-imported hidden race evolution path for Angels.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 9,
      "con": 3,
      "cha": 6
    },
    "levelGrowth": {
      "wis": 4,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Angels",
      "raceId": 9,
      "previousJobId": 10070,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_angels_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      },
      {
        "level": 5,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10072_awakened_demons_devil",
    "excelId": 10072,
    "name": "Awakened Demons / Devil",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "demonkin",
    "description": "Excel-imported advanced race evolution path for Demons / Devils.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 3,
      "wis": -1,
      "con": 1,
      "cha": 4
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Demons / Devils",
      "raceId": 10,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_demons_devils_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10073_elder_demons_devil",
    "excelId": 10073,
    "name": "Elder Demons / Devil",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10072_awakened_demons_devil",
    "description": "Excel-imported specialist race evolution path for Demons / Devils.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 4,
      "wis": -2,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Demons / Devils",
      "raceId": 10,
      "previousJobId": 10072,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_demons_devils_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10074_demons_devil_sovereign",
    "excelId": 10074,
    "name": "Demons / Devil Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10073_elder_demons_devil",
    "description": "Excel-imported rare race evolution path for Demons / Devils.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 5,
      "wis": -2,
      "con": 2,
      "cha": 7
    },
    "levelGrowth": {
      "int": 2,
      "cha": 3,
      "str": 2
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Demons / Devils",
      "raceId": 10,
      "previousJobId": 10073,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_demons_devils_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10075_origin_demons_devil",
    "excelId": 10075,
    "name": "Origin Demons / Devil",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10074_demons_devil_sovereign",
    "description": "Excel-imported hidden race evolution path for Demons / Devils.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 6,
      "wis": -3,
      "con": 3,
      "cha": 9
    },
    "levelGrowth": {
      "int": 2,
      "cha": 4,
      "str": 2
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Demons / Devils",
      "raceId": 10,
      "previousJobId": 10074,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_demons_devils_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10076_demons_devil_bloodline",
    "excelId": 10076,
    "name": "Demons / Devil Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "demonkin",
    "description": "Excel-imported advanced race evolution path for Demons / Devils.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 3,
      "wis": -1,
      "con": 1,
      "cha": 4
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Demons / Devils",
      "raceId": 10,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_demons_devils_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10077_mythic_demons_devil",
    "excelId": 10077,
    "name": "Mythic Demons / Devil",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10076_demons_devil_bloodline",
    "description": "Excel-imported specialist race evolution path for Demons / Devils.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 4,
      "wis": -2,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Demons / Devils",
      "raceId": 10,
      "previousJobId": 10076,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_demons_devils_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10078_ancient_demons_devil_avatar",
    "excelId": 10078,
    "name": "Ancient Demons / Devil Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10077_mythic_demons_devil",
    "description": "Excel-imported rare race evolution path for Demons / Devils.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 5,
      "wis": -2,
      "con": 2,
      "cha": 7
    },
    "levelGrowth": {
      "int": 2,
      "cha": 3,
      "str": 2
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Demons / Devils",
      "raceId": 10,
      "previousJobId": 10077,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_demons_devils_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10079_world_born_demons_devil",
    "excelId": 10079,
    "name": "World-Born Demons / Devil",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10078_ancient_demons_devil_avatar",
    "description": "Excel-imported hidden race evolution path for Demons / Devils.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 6,
      "wis": -3,
      "con": 3,
      "cha": 9
    },
    "levelGrowth": {
      "int": 2,
      "cha": 4,
      "str": 2
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Demons / Devils",
      "raceId": 10,
      "previousJobId": 10078,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_demons_devils_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10080_awakened_beastmen_beastkin",
    "excelId": 10080,
    "name": "Awakened Beastmen / Beastkin",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "beastkin",
    "description": "Excel-imported advanced race evolution path for Beastmen / Beastkin.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Beastmen / Beastkin",
      "raceId": 11,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_beastmen_beastkin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10081_elder_beastmen_beastkin",
    "excelId": 10081,
    "name": "Elder Beastmen / Beastkin",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10080_awakened_beastmen_beastkin",
    "description": "Excel-imported specialist race evolution path for Beastmen / Beastkin.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Beastmen / Beastkin",
      "raceId": 11,
      "previousJobId": 10080,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_beastmen_beastkin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10082_beastmen_beastkin_sovereign",
    "excelId": 10082,
    "name": "Beastmen / Beastkin Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10081_elder_beastmen_beastkin",
    "description": "Excel-imported rare race evolution path for Beastmen / Beastkin.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Beastmen / Beastkin",
      "raceId": 11,
      "previousJobId": 10081,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_beastmen_beastkin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10083_origin_beastmen_beastkin",
    "excelId": 10083,
    "name": "Origin Beastmen / Beastkin",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10082_beastmen_beastkin_sovereign",
    "description": "Excel-imported hidden race evolution path for Beastmen / Beastkin.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Beastmen / Beastkin",
      "raceId": 11,
      "previousJobId": 10082,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_beastmen_beastkin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10084_beastmen_beastkin_bloodline",
    "excelId": 10084,
    "name": "Beastmen / Beastkin Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "beastkin",
    "description": "Excel-imported advanced race evolution path for Beastmen / Beastkin.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Beastmen / Beastkin",
      "raceId": 11,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_beastmen_beastkin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10085_mythic_beastmen_beastkin",
    "excelId": 10085,
    "name": "Mythic Beastmen / Beastkin",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10084_beastmen_beastkin_bloodline",
    "description": "Excel-imported specialist race evolution path for Beastmen / Beastkin.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Beastmen / Beastkin",
      "raceId": 11,
      "previousJobId": 10084,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_beastmen_beastkin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10086_ancient_beastmen_beastkin_avatar",
    "excelId": 10086,
    "name": "Ancient Beastmen / Beastkin Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10085_mythic_beastmen_beastkin",
    "description": "Excel-imported rare race evolution path for Beastmen / Beastkin.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Beastmen / Beastkin",
      "raceId": 11,
      "previousJobId": 10085,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_beastmen_beastkin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10087_world_born_beastmen_beastkin",
    "excelId": 10087,
    "name": "World-Born Beastmen / Beastkin",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10086_ancient_beastmen_beastkin_avatar",
    "description": "Excel-imported hidden race evolution path for Beastmen / Beastkin.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Beastmen / Beastkin",
      "raceId": 11,
      "previousJobId": 10086,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_beastmen_beastkin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10088_awakened_catfolk_nekomimi",
    "excelId": 10088,
    "name": "Awakened Catfolk / Nekomimi",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_012_catfolk_nekomimi",
    "description": "Excel-imported advanced race evolution path for Catfolk / Nekomimi.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Catfolk / Nekomimi",
      "raceId": 12,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_catfolk_nekomimi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10089_elder_catfolk_nekomimi",
    "excelId": 10089,
    "name": "Elder Catfolk / Nekomimi",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10088_awakened_catfolk_nekomimi",
    "description": "Excel-imported specialist race evolution path for Catfolk / Nekomimi.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Catfolk / Nekomimi",
      "raceId": 12,
      "previousJobId": 10088,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_catfolk_nekomimi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10090_catfolk_nekomimi_sovereign",
    "excelId": 10090,
    "name": "Catfolk / Nekomimi Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10089_elder_catfolk_nekomimi",
    "description": "Excel-imported rare race evolution path for Catfolk / Nekomimi.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Catfolk / Nekomimi",
      "raceId": 12,
      "previousJobId": 10089,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_catfolk_nekomimi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10091_origin_catfolk_nekomimi",
    "excelId": 10091,
    "name": "Origin Catfolk / Nekomimi",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10090_catfolk_nekomimi_sovereign",
    "description": "Excel-imported hidden race evolution path for Catfolk / Nekomimi.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Catfolk / Nekomimi",
      "raceId": 12,
      "previousJobId": 10090,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_catfolk_nekomimi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10092_catfolk_nekomimi_bloodline",
    "excelId": 10092,
    "name": "Catfolk / Nekomimi Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_012_catfolk_nekomimi",
    "description": "Excel-imported advanced race evolution path for Catfolk / Nekomimi.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Catfolk / Nekomimi",
      "raceId": 12,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_catfolk_nekomimi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10093_mythic_catfolk_nekomimi",
    "excelId": 10093,
    "name": "Mythic Catfolk / Nekomimi",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10092_catfolk_nekomimi_bloodline",
    "description": "Excel-imported specialist race evolution path for Catfolk / Nekomimi.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Catfolk / Nekomimi",
      "raceId": 12,
      "previousJobId": 10092,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_catfolk_nekomimi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10094_ancient_catfolk_nekomimi_avatar",
    "excelId": 10094,
    "name": "Ancient Catfolk / Nekomimi Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10093_mythic_catfolk_nekomimi",
    "description": "Excel-imported rare race evolution path for Catfolk / Nekomimi.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Catfolk / Nekomimi",
      "raceId": 12,
      "previousJobId": 10093,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_catfolk_nekomimi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10095_world_born_catfolk_nekomimi",
    "excelId": 10095,
    "name": "World-Born Catfolk / Nekomimi",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10094_ancient_catfolk_nekomimi_avatar",
    "description": "Excel-imported hidden race evolution path for Catfolk / Nekomimi.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Catfolk / Nekomimi",
      "raceId": 12,
      "previousJobId": 10094,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_catfolk_nekomimi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10096_awakened_dogfolk_inumimi",
    "excelId": 10096,
    "name": "Awakened Dogfolk / Inumimi",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_013_dogfolk_inumimi",
    "description": "Excel-imported advanced race evolution path for Dogfolk / Inumimi.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dogfolk / Inumimi",
      "raceId": 13,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_dogfolk_inumimi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10097_elder_dogfolk_inumimi",
    "excelId": 10097,
    "name": "Elder Dogfolk / Inumimi",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10096_awakened_dogfolk_inumimi",
    "description": "Excel-imported specialist race evolution path for Dogfolk / Inumimi.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dogfolk / Inumimi",
      "raceId": 13,
      "previousJobId": 10096,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_dogfolk_inumimi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10098_dogfolk_inumimi_sovereign",
    "excelId": 10098,
    "name": "Dogfolk / Inumimi Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10097_elder_dogfolk_inumimi",
    "description": "Excel-imported rare race evolution path for Dogfolk / Inumimi.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dogfolk / Inumimi",
      "raceId": 13,
      "previousJobId": 10097,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_dogfolk_inumimi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10099_origin_dogfolk_inumimi",
    "excelId": 10099,
    "name": "Origin Dogfolk / Inumimi",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10098_dogfolk_inumimi_sovereign",
    "description": "Excel-imported hidden race evolution path for Dogfolk / Inumimi.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dogfolk / Inumimi",
      "raceId": 13,
      "previousJobId": 10098,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_dogfolk_inumimi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10100_dogfolk_inumimi_bloodline",
    "excelId": 10100,
    "name": "Dogfolk / Inumimi Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_013_dogfolk_inumimi",
    "description": "Excel-imported advanced race evolution path for Dogfolk / Inumimi.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dogfolk / Inumimi",
      "raceId": 13,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_dogfolk_inumimi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10101_mythic_dogfolk_inumimi",
    "excelId": 10101,
    "name": "Mythic Dogfolk / Inumimi",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10100_dogfolk_inumimi_bloodline",
    "description": "Excel-imported specialist race evolution path for Dogfolk / Inumimi.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dogfolk / Inumimi",
      "raceId": 13,
      "previousJobId": 10100,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_dogfolk_inumimi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10102_ancient_dogfolk_inumimi_avatar",
    "excelId": 10102,
    "name": "Ancient Dogfolk / Inumimi Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10101_mythic_dogfolk_inumimi",
    "description": "Excel-imported rare race evolution path for Dogfolk / Inumimi.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dogfolk / Inumimi",
      "raceId": 13,
      "previousJobId": 10101,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_dogfolk_inumimi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10103_world_born_dogfolk_inumimi",
    "excelId": 10103,
    "name": "World-Born Dogfolk / Inumimi",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10102_ancient_dogfolk_inumimi_avatar",
    "description": "Excel-imported hidden race evolution path for Dogfolk / Inumimi.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dogfolk / Inumimi",
      "raceId": 13,
      "previousJobId": 10102,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_dogfolk_inumimi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10104_awakened_foxfolk_kitsune",
    "excelId": 10104,
    "name": "Awakened Foxfolk / Kitsune",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_014_foxfolk_kitsune",
    "description": "Excel-imported advanced race evolution path for Foxfolk / Kitsune.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Foxfolk / Kitsune",
      "raceId": 14,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_foxfolk_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10105_elder_foxfolk_kitsune",
    "excelId": 10105,
    "name": "Elder Foxfolk / Kitsune",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10104_awakened_foxfolk_kitsune",
    "description": "Excel-imported specialist race evolution path for Foxfolk / Kitsune.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Foxfolk / Kitsune",
      "raceId": 14,
      "previousJobId": 10104,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_foxfolk_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10106_foxfolk_kitsune_sovereign",
    "excelId": 10106,
    "name": "Foxfolk / Kitsune Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10105_elder_foxfolk_kitsune",
    "description": "Excel-imported rare race evolution path for Foxfolk / Kitsune.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Foxfolk / Kitsune",
      "raceId": 14,
      "previousJobId": 10105,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_foxfolk_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10107_origin_foxfolk_kitsune",
    "excelId": 10107,
    "name": "Origin Foxfolk / Kitsune",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10106_foxfolk_kitsune_sovereign",
    "description": "Excel-imported hidden race evolution path for Foxfolk / Kitsune.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Foxfolk / Kitsune",
      "raceId": 14,
      "previousJobId": 10106,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_foxfolk_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10108_foxfolk_kitsune_bloodline",
    "excelId": 10108,
    "name": "Foxfolk / Kitsune Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_014_foxfolk_kitsune",
    "description": "Excel-imported advanced race evolution path for Foxfolk / Kitsune.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Foxfolk / Kitsune",
      "raceId": 14,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_foxfolk_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10109_mythic_foxfolk_kitsune",
    "excelId": 10109,
    "name": "Mythic Foxfolk / Kitsune",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10108_foxfolk_kitsune_bloodline",
    "description": "Excel-imported specialist race evolution path for Foxfolk / Kitsune.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Foxfolk / Kitsune",
      "raceId": 14,
      "previousJobId": 10108,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_foxfolk_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 10,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10110_ancient_foxfolk_kitsune_avatar",
    "excelId": 10110,
    "name": "Ancient Foxfolk / Kitsune Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10109_mythic_foxfolk_kitsune",
    "description": "Excel-imported rare race evolution path for Foxfolk / Kitsune.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Foxfolk / Kitsune",
      "raceId": 14,
      "previousJobId": 10109,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_foxfolk_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10111_world_born_foxfolk_kitsune",
    "excelId": 10111,
    "name": "World-Born Foxfolk / Kitsune",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10110_ancient_foxfolk_kitsune_avatar",
    "description": "Excel-imported hidden race evolution path for Foxfolk / Kitsune.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Foxfolk / Kitsune",
      "raceId": 14,
      "previousJobId": 10110,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_foxfolk_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_hunter_step"
      },
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      }
    ]
  },
  {
    "id": "race_path_10112_awakened_rabbitfolk",
    "excelId": 10112,
    "name": "Awakened Rabbitfolk",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_015_rabbitfolk",
    "description": "Excel-imported advanced race evolution path for Rabbitfolk.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rabbitfolk",
      "raceId": 15,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_rabbitfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10113_elder_rabbitfolk",
    "excelId": 10113,
    "name": "Elder Rabbitfolk",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10112_awakened_rabbitfolk",
    "description": "Excel-imported specialist race evolution path for Rabbitfolk.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rabbitfolk",
      "raceId": 15,
      "previousJobId": 10112,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_rabbitfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10114_rabbitfolk_sovereign",
    "excelId": 10114,
    "name": "Rabbitfolk Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10113_elder_rabbitfolk",
    "description": "Excel-imported rare race evolution path for Rabbitfolk.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rabbitfolk",
      "raceId": 15,
      "previousJobId": 10113,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_rabbitfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10115_origin_rabbitfolk",
    "excelId": 10115,
    "name": "Origin Rabbitfolk",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10114_rabbitfolk_sovereign",
    "description": "Excel-imported hidden race evolution path for Rabbitfolk.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rabbitfolk",
      "raceId": 15,
      "previousJobId": 10114,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_rabbitfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10116_rabbitfolk_bloodline",
    "excelId": 10116,
    "name": "Rabbitfolk Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_015_rabbitfolk",
    "description": "Excel-imported advanced race evolution path for Rabbitfolk.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rabbitfolk",
      "raceId": 15,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_rabbitfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10117_mythic_rabbitfolk",
    "excelId": 10117,
    "name": "Mythic Rabbitfolk",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10116_rabbitfolk_bloodline",
    "description": "Excel-imported specialist race evolution path for Rabbitfolk.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rabbitfolk",
      "raceId": 15,
      "previousJobId": 10116,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_rabbitfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10118_ancient_rabbitfolk_avatar",
    "excelId": 10118,
    "name": "Ancient Rabbitfolk Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10117_mythic_rabbitfolk",
    "description": "Excel-imported rare race evolution path for Rabbitfolk.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rabbitfolk",
      "raceId": 15,
      "previousJobId": 10117,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_rabbitfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10119_world_born_rabbitfolk",
    "excelId": 10119,
    "name": "World-Born Rabbitfolk",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10118_ancient_rabbitfolk_avatar",
    "description": "Excel-imported hidden race evolution path for Rabbitfolk.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rabbitfolk",
      "raceId": 15,
      "previousJobId": 10118,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_rabbitfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10120_awakened_bearfolk",
    "excelId": 10120,
    "name": "Awakened Bearfolk",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_016_bearfolk",
    "description": "Excel-imported advanced race evolution path for Bearfolk.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Bearfolk",
      "raceId": 16,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_bearfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10121_elder_bearfolk",
    "excelId": 10121,
    "name": "Elder Bearfolk",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10120_awakened_bearfolk",
    "description": "Excel-imported specialist race evolution path for Bearfolk.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Bearfolk",
      "raceId": 16,
      "previousJobId": 10120,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_bearfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10122_bearfolk_sovereign",
    "excelId": 10122,
    "name": "Bearfolk Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10121_elder_bearfolk",
    "description": "Excel-imported rare race evolution path for Bearfolk.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Bearfolk",
      "raceId": 16,
      "previousJobId": 10121,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_bearfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10123_origin_bearfolk",
    "excelId": 10123,
    "name": "Origin Bearfolk",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10122_bearfolk_sovereign",
    "description": "Excel-imported hidden race evolution path for Bearfolk.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Bearfolk",
      "raceId": 16,
      "previousJobId": 10122,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_bearfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10124_bearfolk_bloodline",
    "excelId": 10124,
    "name": "Bearfolk Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_016_bearfolk",
    "description": "Excel-imported advanced race evolution path for Bearfolk.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Bearfolk",
      "raceId": 16,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_bearfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10125_mythic_bearfolk",
    "excelId": 10125,
    "name": "Mythic Bearfolk",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10124_bearfolk_bloodline",
    "description": "Excel-imported specialist race evolution path for Bearfolk.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Bearfolk",
      "raceId": 16,
      "previousJobId": 10124,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_bearfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10126_ancient_bearfolk_avatar",
    "excelId": 10126,
    "name": "Ancient Bearfolk Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10125_mythic_bearfolk",
    "description": "Excel-imported rare race evolution path for Bearfolk.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Bearfolk",
      "raceId": 16,
      "previousJobId": 10125,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_bearfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10127_world_born_bearfolk",
    "excelId": 10127,
    "name": "World-Born Bearfolk",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10126_ancient_bearfolk_avatar",
    "description": "Excel-imported hidden race evolution path for Bearfolk.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Bearfolk",
      "raceId": 16,
      "previousJobId": 10126,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_bearfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10128_awakened_lionfolk",
    "excelId": 10128,
    "name": "Awakened Lionfolk",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_017_lionfolk",
    "description": "Excel-imported advanced race evolution path for Lionfolk.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lionfolk",
      "raceId": 17,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_lionfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10129_elder_lionfolk",
    "excelId": 10129,
    "name": "Elder Lionfolk",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10128_awakened_lionfolk",
    "description": "Excel-imported specialist race evolution path for Lionfolk.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lionfolk",
      "raceId": 17,
      "previousJobId": 10128,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_lionfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10130_lionfolk_sovereign",
    "excelId": 10130,
    "name": "Lionfolk Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10129_elder_lionfolk",
    "description": "Excel-imported rare race evolution path for Lionfolk.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lionfolk",
      "raceId": 17,
      "previousJobId": 10129,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_lionfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10131_origin_lionfolk",
    "excelId": 10131,
    "name": "Origin Lionfolk",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10130_lionfolk_sovereign",
    "description": "Excel-imported hidden race evolution path for Lionfolk.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lionfolk",
      "raceId": 17,
      "previousJobId": 10130,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_lionfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10132_lionfolk_bloodline",
    "excelId": 10132,
    "name": "Lionfolk Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_017_lionfolk",
    "description": "Excel-imported advanced race evolution path for Lionfolk.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lionfolk",
      "raceId": 17,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_lionfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10133_mythic_lionfolk",
    "excelId": 10133,
    "name": "Mythic Lionfolk",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10132_lionfolk_bloodline",
    "description": "Excel-imported specialist race evolution path for Lionfolk.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lionfolk",
      "raceId": 17,
      "previousJobId": 10132,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_lionfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10134_ancient_lionfolk_avatar",
    "excelId": 10134,
    "name": "Ancient Lionfolk Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10133_mythic_lionfolk",
    "description": "Excel-imported rare race evolution path for Lionfolk.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lionfolk",
      "raceId": 17,
      "previousJobId": 10133,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_lionfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10135_world_born_lionfolk",
    "excelId": 10135,
    "name": "World-Born Lionfolk",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10134_ancient_lionfolk_avatar",
    "description": "Excel-imported hidden race evolution path for Lionfolk.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lionfolk",
      "raceId": 17,
      "previousJobId": 10134,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_lionfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10136_awakened_tigerfolk",
    "excelId": 10136,
    "name": "Awakened Tigerfolk",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_018_tigerfolk",
    "description": "Excel-imported advanced race evolution path for Tigerfolk.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tigerfolk",
      "raceId": 18,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_tigerfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10137_elder_tigerfolk",
    "excelId": 10137,
    "name": "Elder Tigerfolk",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10136_awakened_tigerfolk",
    "description": "Excel-imported specialist race evolution path for Tigerfolk.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tigerfolk",
      "raceId": 18,
      "previousJobId": 10136,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_tigerfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10138_tigerfolk_sovereign",
    "excelId": 10138,
    "name": "Tigerfolk Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10137_elder_tigerfolk",
    "description": "Excel-imported rare race evolution path for Tigerfolk.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tigerfolk",
      "raceId": 18,
      "previousJobId": 10137,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_tigerfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10139_origin_tigerfolk",
    "excelId": 10139,
    "name": "Origin Tigerfolk",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10138_tigerfolk_sovereign",
    "description": "Excel-imported hidden race evolution path for Tigerfolk.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tigerfolk",
      "raceId": 18,
      "previousJobId": 10138,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_tigerfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10140_tigerfolk_bloodline",
    "excelId": 10140,
    "name": "Tigerfolk Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_018_tigerfolk",
    "description": "Excel-imported advanced race evolution path for Tigerfolk.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tigerfolk",
      "raceId": 18,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_tigerfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10141_mythic_tigerfolk",
    "excelId": 10141,
    "name": "Mythic Tigerfolk",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10140_tigerfolk_bloodline",
    "description": "Excel-imported specialist race evolution path for Tigerfolk.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tigerfolk",
      "raceId": 18,
      "previousJobId": 10140,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_tigerfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10142_ancient_tigerfolk_avatar",
    "excelId": 10142,
    "name": "Ancient Tigerfolk Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10141_mythic_tigerfolk",
    "description": "Excel-imported rare race evolution path for Tigerfolk.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tigerfolk",
      "raceId": 18,
      "previousJobId": 10141,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_tigerfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10143_world_born_tigerfolk",
    "excelId": 10143,
    "name": "World-Born Tigerfolk",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10142_ancient_tigerfolk_avatar",
    "description": "Excel-imported hidden race evolution path for Tigerfolk.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tigerfolk",
      "raceId": 18,
      "previousJobId": 10142,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_tigerfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10144_awakened_birdfolk_harpie",
    "excelId": 10144,
    "name": "Awakened Birdfolk / Harpie",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_019_birdfolk_harpies",
    "description": "Excel-imported advanced race evolution path for Birdfolk / Harpies.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Birdfolk / Harpies",
      "raceId": 19,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_birdfolk_harpies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 10,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10145_elder_birdfolk_harpie",
    "excelId": 10145,
    "name": "Elder Birdfolk / Harpie",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10144_awakened_birdfolk_harpie",
    "description": "Excel-imported specialist race evolution path for Birdfolk / Harpies.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Birdfolk / Harpies",
      "raceId": 19,
      "previousJobId": 10144,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_birdfolk_harpies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 10,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10146_birdfolk_harpie_sovereign",
    "excelId": 10146,
    "name": "Birdfolk / Harpie Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10145_elder_birdfolk_harpie",
    "description": "Excel-imported rare race evolution path for Birdfolk / Harpies.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Birdfolk / Harpies",
      "raceId": 19,
      "previousJobId": 10145,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_birdfolk_harpies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 5,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10147_origin_birdfolk_harpie",
    "excelId": 10147,
    "name": "Origin Birdfolk / Harpie",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10146_birdfolk_harpie_sovereign",
    "description": "Excel-imported hidden race evolution path for Birdfolk / Harpies.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Birdfolk / Harpies",
      "raceId": 19,
      "previousJobId": 10146,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_birdfolk_harpies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 5,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10148_birdfolk_harpie_bloodline",
    "excelId": 10148,
    "name": "Birdfolk / Harpie Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_019_birdfolk_harpies",
    "description": "Excel-imported advanced race evolution path for Birdfolk / Harpies.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Birdfolk / Harpies",
      "raceId": 19,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_birdfolk_harpies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 10,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10149_mythic_birdfolk_harpie",
    "excelId": 10149,
    "name": "Mythic Birdfolk / Harpie",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10148_birdfolk_harpie_bloodline",
    "description": "Excel-imported specialist race evolution path for Birdfolk / Harpies.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Birdfolk / Harpies",
      "raceId": 19,
      "previousJobId": 10148,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_birdfolk_harpies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 10,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 10,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10150_ancient_birdfolk_harpie_avatar",
    "excelId": 10150,
    "name": "Ancient Birdfolk / Harpie Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10149_mythic_birdfolk_harpie",
    "description": "Excel-imported rare race evolution path for Birdfolk / Harpies.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Birdfolk / Harpies",
      "raceId": 19,
      "previousJobId": 10149,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_birdfolk_harpies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 5,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10151_world_born_birdfolk_harpie",
    "excelId": 10151,
    "name": "World-Born Birdfolk / Harpie",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10150_ancient_birdfolk_harpie_avatar",
    "description": "Excel-imported hidden race evolution path for Birdfolk / Harpies.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_hunter_step"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Birdfolk / Harpies",
      "raceId": 19,
      "previousJobId": 10150,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_birdfolk_harpies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_phantom_step_art"
      },
      {
        "level": 5,
        "skillId": "sk_thousand_step_godspeed_reversal"
      },
      {
        "level": 5,
        "skillId": "sk_guard_stance"
      }
    ]
  },
  {
    "id": "race_path_10152_awakened_lizardfolk",
    "excelId": 10152,
    "name": "Awakened Lizardfolk",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_020_lizardfolk",
    "description": "Excel-imported advanced race evolution path for Lizardfolk.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lizardfolk",
      "raceId": 20,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_lizardfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10153_elder_lizardfolk",
    "excelId": 10153,
    "name": "Elder Lizardfolk",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10152_awakened_lizardfolk",
    "description": "Excel-imported specialist race evolution path for Lizardfolk.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lizardfolk",
      "raceId": 20,
      "previousJobId": 10152,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_lizardfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10154_lizardfolk_sovereign",
    "excelId": 10154,
    "name": "Lizardfolk Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10153_elder_lizardfolk",
    "description": "Excel-imported rare race evolution path for Lizardfolk.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lizardfolk",
      "raceId": 20,
      "previousJobId": 10153,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_lizardfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10155_origin_lizardfolk",
    "excelId": 10155,
    "name": "Origin Lizardfolk",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10154_lizardfolk_sovereign",
    "description": "Excel-imported hidden race evolution path for Lizardfolk.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lizardfolk",
      "raceId": 20,
      "previousJobId": 10154,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_lizardfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10156_lizardfolk_bloodline",
    "excelId": 10156,
    "name": "Lizardfolk Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_020_lizardfolk",
    "description": "Excel-imported advanced race evolution path for Lizardfolk.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lizardfolk",
      "raceId": 20,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_lizardfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10157_mythic_lizardfolk",
    "excelId": 10157,
    "name": "Mythic Lizardfolk",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10156_lizardfolk_bloodline",
    "description": "Excel-imported specialist race evolution path for Lizardfolk.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lizardfolk",
      "raceId": 20,
      "previousJobId": 10156,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_lizardfolk_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10158_ancient_lizardfolk_avatar",
    "excelId": 10158,
    "name": "Ancient Lizardfolk Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10157_mythic_lizardfolk",
    "description": "Excel-imported rare race evolution path for Lizardfolk.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lizardfolk",
      "raceId": 20,
      "previousJobId": 10157,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_lizardfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10159_world_born_lizardfolk",
    "excelId": 10159,
    "name": "World-Born Lizardfolk",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10158_ancient_lizardfolk_avatar",
    "description": "Excel-imported hidden race evolution path for Lizardfolk.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "in_predator_instinct"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Lizardfolk",
      "raceId": 20,
      "previousJobId": 10158,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_lizardfolk_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10160_awakened_dragonfolk_dragonewt",
    "excelId": 10160,
    "name": "Awakened Dragonfolk / Dragonewt",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "dragonoid",
    "description": "Excel-imported advanced race evolution path for Dragonfolk / Dragonewts.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonfolk / Dragonewts",
      "raceId": 21,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_dragonfolk_dragonewts_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10161_elder_dragonfolk_dragonewt",
    "excelId": 10161,
    "name": "Elder Dragonfolk / Dragonewt",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10160_awakened_dragonfolk_dragonewt",
    "description": "Excel-imported specialist race evolution path for Dragonfolk / Dragonewts.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonfolk / Dragonewts",
      "raceId": 21,
      "previousJobId": 10160,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_dragonfolk_dragonewts_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10162_dragonfolk_dragonewt_sovereign",
    "excelId": 10162,
    "name": "Dragonfolk / Dragonewt Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10161_elder_dragonfolk_dragonewt",
    "description": "Excel-imported rare race evolution path for Dragonfolk / Dragonewts.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonfolk / Dragonewts",
      "raceId": 21,
      "previousJobId": 10161,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_dragonfolk_dragonewts_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10163_origin_dragonfolk_dragonewt",
    "excelId": 10163,
    "name": "Origin Dragonfolk / Dragonewt",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10162_dragonfolk_dragonewt_sovereign",
    "description": "Excel-imported hidden race evolution path for Dragonfolk / Dragonewts.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonfolk / Dragonewts",
      "raceId": 21,
      "previousJobId": 10162,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_dragonfolk_dragonewts_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10164_dragonfolk_dragonewt_bloodline",
    "excelId": 10164,
    "name": "Dragonfolk / Dragonewt Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "dragonoid",
    "description": "Excel-imported advanced race evolution path for Dragonfolk / Dragonewts.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonfolk / Dragonewts",
      "raceId": 21,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_dragonfolk_dragonewts_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10165_mythic_dragonfolk_dragonewt",
    "excelId": 10165,
    "name": "Mythic Dragonfolk / Dragonewt",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10164_dragonfolk_dragonewt_bloodline",
    "description": "Excel-imported specialist race evolution path for Dragonfolk / Dragonewts.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonfolk / Dragonewts",
      "raceId": 21,
      "previousJobId": 10164,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_dragonfolk_dragonewts_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10166_ancient_dragonfolk_dragonewt_avatar",
    "excelId": 10166,
    "name": "Ancient Dragonfolk / Dragonewt Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10165_mythic_dragonfolk_dragonewt",
    "description": "Excel-imported rare race evolution path for Dragonfolk / Dragonewts.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonfolk / Dragonewts",
      "raceId": 21,
      "previousJobId": 10165,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_dragonfolk_dragonewts_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10167_world_born_dragonfolk_dragonewt",
    "excelId": 10167,
    "name": "World-Born Dragonfolk / Dragonewt",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10166_ancient_dragonfolk_dragonewt_avatar",
    "description": "Excel-imported hidden race evolution path for Dragonfolk / Dragonewts.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonfolk / Dragonewts",
      "raceId": 21,
      "previousJobId": 10166,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_dragonfolk_dragonewts_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10168_awakened_snakefolk_lamia",
    "excelId": 10168,
    "name": "Awakened Snakefolk / Lamia",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_022_snakefolk_lamia",
    "description": "Excel-imported advanced race evolution path for Snakefolk / Lamia.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Snakefolk / Lamia",
      "raceId": 22,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_snakefolk_lamia_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10169_elder_snakefolk_lamia",
    "excelId": 10169,
    "name": "Elder Snakefolk / Lamia",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10168_awakened_snakefolk_lamia",
    "description": "Excel-imported specialist race evolution path for Snakefolk / Lamia.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Snakefolk / Lamia",
      "raceId": 22,
      "previousJobId": 10168,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_snakefolk_lamia_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10170_snakefolk_lamia_sovereign",
    "excelId": 10170,
    "name": "Snakefolk / Lamia Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10169_elder_snakefolk_lamia",
    "description": "Excel-imported rare race evolution path for Snakefolk / Lamia.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Snakefolk / Lamia",
      "raceId": 22,
      "previousJobId": 10169,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_snakefolk_lamia_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10171_origin_snakefolk_lamia",
    "excelId": 10171,
    "name": "Origin Snakefolk / Lamia",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10170_snakefolk_lamia_sovereign",
    "description": "Excel-imported hidden race evolution path for Snakefolk / Lamia.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Snakefolk / Lamia",
      "raceId": 22,
      "previousJobId": 10170,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_snakefolk_lamia_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10172_snakefolk_lamia_bloodline",
    "excelId": 10172,
    "name": "Snakefolk / Lamia Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_022_snakefolk_lamia",
    "description": "Excel-imported advanced race evolution path for Snakefolk / Lamia.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Snakefolk / Lamia",
      "raceId": 22,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_snakefolk_lamia_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10173_mythic_snakefolk_lamia",
    "excelId": 10173,
    "name": "Mythic Snakefolk / Lamia",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10172_snakefolk_lamia_bloodline",
    "description": "Excel-imported specialist race evolution path for Snakefolk / Lamia.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Snakefolk / Lamia",
      "raceId": 22,
      "previousJobId": 10172,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_snakefolk_lamia_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10174_ancient_snakefolk_lamia_avatar",
    "excelId": 10174,
    "name": "Ancient Snakefolk / Lamia Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10173_mythic_snakefolk_lamia",
    "description": "Excel-imported rare race evolution path for Snakefolk / Lamia.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Snakefolk / Lamia",
      "raceId": 22,
      "previousJobId": 10173,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_snakefolk_lamia_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10175_world_born_snakefolk_lamia",
    "excelId": 10175,
    "name": "World-Born Snakefolk / Lamia",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10174_ancient_snakefolk_lamia_avatar",
    "description": "Excel-imported hidden race evolution path for Snakefolk / Lamia.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Snakefolk / Lamia",
      "raceId": 22,
      "previousJobId": 10174,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_snakefolk_lamia_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10176_awakened_minotaur",
    "excelId": 10176,
    "name": "Awakened Minotaur",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_023_minotaurs",
    "description": "Excel-imported advanced race evolution path for Minotaurs.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minotaurs",
      "raceId": 23,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_minotaurs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10177_elder_minotaur",
    "excelId": 10177,
    "name": "Elder Minotaur",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10176_awakened_minotaur",
    "description": "Excel-imported specialist race evolution path for Minotaurs.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minotaurs",
      "raceId": 23,
      "previousJobId": 10176,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_minotaurs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10178_minotaur_sovereign",
    "excelId": 10178,
    "name": "Minotaur Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10177_elder_minotaur",
    "description": "Excel-imported rare race evolution path for Minotaurs.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minotaurs",
      "raceId": 23,
      "previousJobId": 10177,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_minotaurs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10179_origin_minotaur",
    "excelId": 10179,
    "name": "Origin Minotaur",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10178_minotaur_sovereign",
    "description": "Excel-imported hidden race evolution path for Minotaurs.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minotaurs",
      "raceId": 23,
      "previousJobId": 10178,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_minotaurs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10180_minotaur_bloodline",
    "excelId": 10180,
    "name": "Minotaur Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_023_minotaurs",
    "description": "Excel-imported advanced race evolution path for Minotaurs.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minotaurs",
      "raceId": 23,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_minotaurs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10181_mythic_minotaur",
    "excelId": 10181,
    "name": "Mythic Minotaur",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10180_minotaur_bloodline",
    "description": "Excel-imported specialist race evolution path for Minotaurs.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minotaurs",
      "raceId": 23,
      "previousJobId": 10180,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_minotaurs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10182_ancient_minotaur_avatar",
    "excelId": 10182,
    "name": "Ancient Minotaur Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10181_mythic_minotaur",
    "description": "Excel-imported rare race evolution path for Minotaurs.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minotaurs",
      "raceId": 23,
      "previousJobId": 10181,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_minotaurs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10183_world_born_minotaur",
    "excelId": 10183,
    "name": "World-Born Minotaur",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10182_ancient_minotaur_avatar",
    "description": "Excel-imported hidden race evolution path for Minotaurs.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minotaurs",
      "raceId": 23,
      "previousJobId": 10182,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_minotaurs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10184_awakened_centaur",
    "excelId": 10184,
    "name": "Awakened Centaur",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_024_centaurs",
    "description": "Excel-imported advanced race evolution path for Centaurs.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Centaurs",
      "raceId": 24,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_centaurs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10185_elder_centaur",
    "excelId": 10185,
    "name": "Elder Centaur",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10184_awakened_centaur",
    "description": "Excel-imported specialist race evolution path for Centaurs.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Centaurs",
      "raceId": 24,
      "previousJobId": 10184,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_centaurs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10186_centaur_sovereign",
    "excelId": 10186,
    "name": "Centaur Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10185_elder_centaur",
    "description": "Excel-imported rare race evolution path for Centaurs.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Centaurs",
      "raceId": 24,
      "previousJobId": 10185,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_centaurs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10187_origin_centaur",
    "excelId": 10187,
    "name": "Origin Centaur",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10186_centaur_sovereign",
    "description": "Excel-imported hidden race evolution path for Centaurs.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Centaurs",
      "raceId": 24,
      "previousJobId": 10186,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_centaurs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10188_centaur_bloodline",
    "excelId": 10188,
    "name": "Centaur Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_024_centaurs",
    "description": "Excel-imported advanced race evolution path for Centaurs.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Centaurs",
      "raceId": 24,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_centaurs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10189_mythic_centaur",
    "excelId": 10189,
    "name": "Mythic Centaur",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10188_centaur_bloodline",
    "description": "Excel-imported specialist race evolution path for Centaurs.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Centaurs",
      "raceId": 24,
      "previousJobId": 10188,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_centaurs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10190_ancient_centaur_avatar",
    "excelId": 10190,
    "name": "Ancient Centaur Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10189_mythic_centaur",
    "description": "Excel-imported rare race evolution path for Centaurs.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Centaurs",
      "raceId": 24,
      "previousJobId": 10189,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_centaurs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10191_world_born_centaur",
    "excelId": 10191,
    "name": "World-Born Centaur",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10190_ancient_centaur_avatar",
    "description": "Excel-imported hidden race evolution path for Centaurs.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Centaurs",
      "raceId": 24,
      "previousJobId": 10190,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_centaurs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10192_awakened_merfolk_mermaid",
    "excelId": 10192,
    "name": "Awakened Merfolk / Mermaid",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_025_merfolk_mermaids",
    "description": "Excel-imported advanced race evolution path for Merfolk / Mermaids.",
    "stats": {
      "str": 0,
      "dex": 3,
      "int": 0,
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_water_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Merfolk / Mermaids",
      "raceId": 25,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_merfolk_mermaids_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_water_2"
      },
      {
        "level": 10,
        "skillId": "v50_water_3"
      },
      {
        "level": 10,
        "skillId": "v50_water_4"
      }
    ]
  },
  {
    "id": "race_path_10193_elder_merfolk_mermaid",
    "excelId": 10193,
    "name": "Elder Merfolk / Mermaid",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10192_awakened_merfolk_mermaid",
    "description": "Excel-imported specialist race evolution path for Merfolk / Mermaids.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 0,
      "wis": 4,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_water_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Merfolk / Mermaids",
      "raceId": 25,
      "previousJobId": 10192,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_merfolk_mermaids_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_water_2"
      },
      {
        "level": 10,
        "skillId": "v50_water_3"
      },
      {
        "level": 10,
        "skillId": "v50_water_4"
      }
    ]
  },
  {
    "id": "race_path_10194_merfolk_mermaid_sovereign",
    "excelId": 10194,
    "name": "Merfolk / Mermaid Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10193_elder_merfolk_mermaid",
    "description": "Excel-imported rare race evolution path for Merfolk / Mermaids.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_water_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Merfolk / Mermaids",
      "raceId": 25,
      "previousJobId": 10193,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_merfolk_mermaids_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_water_2"
      },
      {
        "level": 5,
        "skillId": "v50_water_3"
      },
      {
        "level": 5,
        "skillId": "v50_water_4"
      }
    ]
  },
  {
    "id": "race_path_10195_origin_merfolk_mermaid",
    "excelId": 10195,
    "name": "Origin Merfolk / Mermaid",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10194_merfolk_mermaid_sovereign",
    "description": "Excel-imported hidden race evolution path for Merfolk / Mermaids.",
    "stats": {
      "str": 0,
      "dex": 6,
      "int": 0,
      "wis": 6,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_water_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Merfolk / Mermaids",
      "raceId": 25,
      "previousJobId": 10194,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_merfolk_mermaids_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_water_2"
      },
      {
        "level": 5,
        "skillId": "v50_water_3"
      },
      {
        "level": 5,
        "skillId": "v50_water_4"
      }
    ]
  },
  {
    "id": "race_path_10196_merfolk_mermaid_bloodline",
    "excelId": 10196,
    "name": "Merfolk / Mermaid Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_025_merfolk_mermaids",
    "description": "Excel-imported advanced race evolution path for Merfolk / Mermaids.",
    "stats": {
      "str": 0,
      "dex": 3,
      "int": 0,
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_water_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Merfolk / Mermaids",
      "raceId": 25,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_merfolk_mermaids_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_water_2"
      },
      {
        "level": 10,
        "skillId": "v50_water_3"
      },
      {
        "level": 10,
        "skillId": "v50_water_4"
      }
    ]
  },
  {
    "id": "race_path_10197_mythic_merfolk_mermaid",
    "excelId": 10197,
    "name": "Mythic Merfolk / Mermaid",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10196_merfolk_mermaid_bloodline",
    "description": "Excel-imported specialist race evolution path for Merfolk / Mermaids.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 0,
      "wis": 4,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "v50_water_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Merfolk / Mermaids",
      "raceId": 25,
      "previousJobId": 10196,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_merfolk_mermaids_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_water_2"
      },
      {
        "level": 10,
        "skillId": "v50_water_3"
      },
      {
        "level": 10,
        "skillId": "v50_water_4"
      }
    ]
  },
  {
    "id": "race_path_10198_ancient_merfolk_mermaid_avatar",
    "excelId": 10198,
    "name": "Ancient Merfolk / Mermaid Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10197_mythic_merfolk_mermaid",
    "description": "Excel-imported rare race evolution path for Merfolk / Mermaids.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "v50_water_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Merfolk / Mermaids",
      "raceId": 25,
      "previousJobId": 10197,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_merfolk_mermaids_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_water_2"
      },
      {
        "level": 5,
        "skillId": "v50_water_3"
      },
      {
        "level": 5,
        "skillId": "v50_water_4"
      }
    ]
  },
  {
    "id": "race_path_10199_world_born_merfolk_mermaid",
    "excelId": 10199,
    "name": "World-Born Merfolk / Mermaid",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10198_ancient_merfolk_mermaid_avatar",
    "description": "Excel-imported hidden race evolution path for Merfolk / Mermaids.",
    "stats": {
      "str": 0,
      "dex": 6,
      "int": 0,
      "wis": 6,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "v50_water_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Merfolk / Mermaids",
      "raceId": 25,
      "previousJobId": 10198,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_merfolk_mermaids_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_water_2"
      },
      {
        "level": 5,
        "skillId": "v50_water_3"
      },
      {
        "level": 5,
        "skillId": "v50_water_4"
      }
    ]
  },
  {
    "id": "race_path_10200_awakened_fishmen",
    "excelId": 10200,
    "name": "Awakened Fishmen",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_026_fishmen",
    "description": "Excel-imported advanced race evolution path for Fishmen.",
    "stats": {
      "str": 0,
      "dex": 3,
      "int": 0,
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fishmen",
      "raceId": 26,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_fishmen_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10201_elder_fishmen",
    "excelId": 10201,
    "name": "Elder Fishmen",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10200_awakened_fishmen",
    "description": "Excel-imported specialist race evolution path for Fishmen.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 0,
      "wis": 4,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fishmen",
      "raceId": 26,
      "previousJobId": 10200,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_fishmen_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10202_fishmen_sovereign",
    "excelId": 10202,
    "name": "Fishmen Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10201_elder_fishmen",
    "description": "Excel-imported rare race evolution path for Fishmen.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fishmen",
      "raceId": 26,
      "previousJobId": 10201,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_fishmen_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10203_origin_fishmen",
    "excelId": 10203,
    "name": "Origin Fishmen",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10202_fishmen_sovereign",
    "description": "Excel-imported hidden race evolution path for Fishmen.",
    "stats": {
      "str": 0,
      "dex": 6,
      "int": 0,
      "wis": 6,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fishmen",
      "raceId": 26,
      "previousJobId": 10202,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_fishmen_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10204_fishmen_bloodline",
    "excelId": 10204,
    "name": "Fishmen Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_026_fishmen",
    "description": "Excel-imported advanced race evolution path for Fishmen.",
    "stats": {
      "str": 0,
      "dex": 3,
      "int": 0,
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fishmen",
      "raceId": 26,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_fishmen_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10205_mythic_fishmen",
    "excelId": 10205,
    "name": "Mythic Fishmen",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10204_fishmen_bloodline",
    "description": "Excel-imported specialist race evolution path for Fishmen.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 0,
      "wis": 4,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fishmen",
      "raceId": 26,
      "previousJobId": 10204,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_fishmen_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10206_ancient_fishmen_avatar",
    "excelId": 10206,
    "name": "Ancient Fishmen Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10205_mythic_fishmen",
    "description": "Excel-imported rare race evolution path for Fishmen.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fishmen",
      "raceId": 26,
      "previousJobId": 10205,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_fishmen_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10207_world_born_fishmen",
    "excelId": 10207,
    "name": "World-Born Fishmen",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10206_ancient_fishmen_avatar",
    "description": "Excel-imported hidden race evolution path for Fishmen.",
    "stats": {
      "str": 0,
      "dex": 6,
      "int": 0,
      "wis": 6,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Fishmen",
      "raceId": 26,
      "previousJobId": 10206,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_fishmen_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10208_awakened_mink",
    "excelId": 10208,
    "name": "Awakened Mink",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_027_minks",
    "description": "Excel-imported advanced race evolution path for Minks.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minks",
      "raceId": 27,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_minks_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10209_elder_mink",
    "excelId": 10209,
    "name": "Elder Mink",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10208_awakened_mink",
    "description": "Excel-imported specialist race evolution path for Minks.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minks",
      "raceId": 27,
      "previousJobId": 10208,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_minks_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10210_mink_sovereign",
    "excelId": 10210,
    "name": "Mink Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10209_elder_mink",
    "description": "Excel-imported rare race evolution path for Minks.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minks",
      "raceId": 27,
      "previousJobId": 10209,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_minks_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10211_origin_mink",
    "excelId": 10211,
    "name": "Origin Mink",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10210_mink_sovereign",
    "description": "Excel-imported hidden race evolution path for Minks.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minks",
      "raceId": 27,
      "previousJobId": 10210,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_minks_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10212_mink_bloodline",
    "excelId": 10212,
    "name": "Mink Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_027_minks",
    "description": "Excel-imported advanced race evolution path for Minks.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minks",
      "raceId": 27,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_minks_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10213_mythic_mink",
    "excelId": 10213,
    "name": "Mythic Mink",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10212_mink_bloodline",
    "description": "Excel-imported specialist race evolution path for Minks.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minks",
      "raceId": 27,
      "previousJobId": 10212,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_minks_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10214_ancient_mink_avatar",
    "excelId": 10214,
    "name": "Ancient Mink Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10213_mythic_mink",
    "description": "Excel-imported rare race evolution path for Minks.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minks",
      "raceId": 27,
      "previousJobId": 10213,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_minks_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10215_world_born_mink",
    "excelId": 10215,
    "name": "World-Born Mink",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10214_ancient_mink_avatar",
    "description": "Excel-imported hidden race evolution path for Minks.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Minks",
      "raceId": 27,
      "previousJobId": 10214,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_minks_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10216_awakened_arachne",
    "excelId": 10216,
    "name": "Awakened Arachne",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_028_arachne",
    "description": "Excel-imported advanced race evolution path for Arachne.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Arachne",
      "raceId": 28,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_arachne_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10217_elder_arachne",
    "excelId": 10217,
    "name": "Elder Arachne",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10216_awakened_arachne",
    "description": "Excel-imported specialist race evolution path for Arachne.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Arachne",
      "raceId": 28,
      "previousJobId": 10216,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_arachne_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10218_arachne_sovereign",
    "excelId": 10218,
    "name": "Arachne Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10217_elder_arachne",
    "description": "Excel-imported rare race evolution path for Arachne.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Arachne",
      "raceId": 28,
      "previousJobId": 10217,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_arachne_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10219_origin_arachne",
    "excelId": 10219,
    "name": "Origin Arachne",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10218_arachne_sovereign",
    "description": "Excel-imported hidden race evolution path for Arachne.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Arachne",
      "raceId": 28,
      "previousJobId": 10218,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_arachne_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10220_arachne_bloodline",
    "excelId": 10220,
    "name": "Arachne Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_028_arachne",
    "description": "Excel-imported advanced race evolution path for Arachne.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Arachne",
      "raceId": 28,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_arachne_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10221_mythic_arachne",
    "excelId": 10221,
    "name": "Mythic Arachne",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10220_arachne_bloodline",
    "description": "Excel-imported specialist race evolution path for Arachne.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Arachne",
      "raceId": 28,
      "previousJobId": 10220,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_arachne_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10222_ancient_arachne_avatar",
    "excelId": 10222,
    "name": "Ancient Arachne Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10221_mythic_arachne",
    "description": "Excel-imported rare race evolution path for Arachne.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Arachne",
      "raceId": 28,
      "previousJobId": 10221,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_arachne_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10223_world_born_arachne",
    "excelId": 10223,
    "name": "World-Born Arachne",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10222_ancient_arachne_avatar",
    "description": "Excel-imported hidden race evolution path for Arachne.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Arachne",
      "raceId": 28,
      "previousJobId": 10222,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_arachne_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10224_awakened_goblin",
    "excelId": 10224,
    "name": "Awakened Goblin",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_029_goblins",
    "description": "Excel-imported advanced race evolution path for Goblins.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Goblins",
      "raceId": 29,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_goblins_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10225_elder_goblin",
    "excelId": 10225,
    "name": "Elder Goblin",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10224_awakened_goblin",
    "description": "Excel-imported specialist race evolution path for Goblins.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Goblins",
      "raceId": 29,
      "previousJobId": 10224,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_goblins_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10226_goblin_sovereign",
    "excelId": 10226,
    "name": "Goblin Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10225_elder_goblin",
    "description": "Excel-imported rare race evolution path for Goblins.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Goblins",
      "raceId": 29,
      "previousJobId": 10225,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_goblins_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10227_origin_goblin",
    "excelId": 10227,
    "name": "Origin Goblin",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10226_goblin_sovereign",
    "description": "Excel-imported hidden race evolution path for Goblins.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Goblins",
      "raceId": 29,
      "previousJobId": 10226,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_goblins_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10228_goblin_bloodline",
    "excelId": 10228,
    "name": "Goblin Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_029_goblins",
    "description": "Excel-imported advanced race evolution path for Goblins.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Goblins",
      "raceId": 29,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_goblins_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10229_mythic_goblin",
    "excelId": 10229,
    "name": "Mythic Goblin",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10228_goblin_bloodline",
    "description": "Excel-imported specialist race evolution path for Goblins.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Goblins",
      "raceId": 29,
      "previousJobId": 10228,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_goblins_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10230_ancient_goblin_avatar",
    "excelId": 10230,
    "name": "Ancient Goblin Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10229_mythic_goblin",
    "description": "Excel-imported rare race evolution path for Goblins.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Goblins",
      "raceId": 29,
      "previousJobId": 10229,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_goblins_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10231_world_born_goblin",
    "excelId": 10231,
    "name": "World-Born Goblin",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10230_ancient_goblin_avatar",
    "description": "Excel-imported hidden race evolution path for Goblins.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Goblins",
      "raceId": 29,
      "previousJobId": 10230,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_goblins_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10232_awakened_hobgoblin",
    "excelId": 10232,
    "name": "Awakened Hobgoblin",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_030_hobgoblins",
    "description": "Excel-imported advanced race evolution path for Hobgoblins.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Hobgoblins",
      "raceId": 30,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_hobgoblins_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10233_elder_hobgoblin",
    "excelId": 10233,
    "name": "Elder Hobgoblin",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10232_awakened_hobgoblin",
    "description": "Excel-imported specialist race evolution path for Hobgoblins.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Hobgoblins",
      "raceId": 30,
      "previousJobId": 10232,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_hobgoblins_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10234_hobgoblin_sovereign",
    "excelId": 10234,
    "name": "Hobgoblin Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10233_elder_hobgoblin",
    "description": "Excel-imported rare race evolution path for Hobgoblins.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Hobgoblins",
      "raceId": 30,
      "previousJobId": 10233,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_hobgoblins_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10235_origin_hobgoblin",
    "excelId": 10235,
    "name": "Origin Hobgoblin",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10234_hobgoblin_sovereign",
    "description": "Excel-imported hidden race evolution path for Hobgoblins.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Hobgoblins",
      "raceId": 30,
      "previousJobId": 10234,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_hobgoblins_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10236_hobgoblin_bloodline",
    "excelId": 10236,
    "name": "Hobgoblin Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_030_hobgoblins",
    "description": "Excel-imported advanced race evolution path for Hobgoblins.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Hobgoblins",
      "raceId": 30,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_hobgoblins_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10237_mythic_hobgoblin",
    "excelId": 10237,
    "name": "Mythic Hobgoblin",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10236_hobgoblin_bloodline",
    "description": "Excel-imported specialist race evolution path for Hobgoblins.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Hobgoblins",
      "raceId": 30,
      "previousJobId": 10236,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_hobgoblins_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10238_ancient_hobgoblin_avatar",
    "excelId": 10238,
    "name": "Ancient Hobgoblin Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10237_mythic_hobgoblin",
    "description": "Excel-imported rare race evolution path for Hobgoblins.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Hobgoblins",
      "raceId": 30,
      "previousJobId": 10237,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_hobgoblins_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10239_world_born_hobgoblin",
    "excelId": 10239,
    "name": "World-Born Hobgoblin",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10238_ancient_hobgoblin_avatar",
    "description": "Excel-imported hidden race evolution path for Hobgoblins.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Hobgoblins",
      "raceId": 30,
      "previousJobId": 10238,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_hobgoblins_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10240_awakened_orc",
    "excelId": 10240,
    "name": "Awakened Orc",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_031_orcs",
    "description": "Excel-imported advanced race evolution path for Orcs.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Orcs",
      "raceId": 31,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_orcs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10241_elder_orc",
    "excelId": 10241,
    "name": "Elder Orc",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10240_awakened_orc",
    "description": "Excel-imported specialist race evolution path for Orcs.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Orcs",
      "raceId": 31,
      "previousJobId": 10240,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_orcs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10242_orc_sovereign",
    "excelId": 10242,
    "name": "Orc Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10241_elder_orc",
    "description": "Excel-imported rare race evolution path for Orcs.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Orcs",
      "raceId": 31,
      "previousJobId": 10241,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_orcs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10243_origin_orc",
    "excelId": 10243,
    "name": "Origin Orc",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10242_orc_sovereign",
    "description": "Excel-imported hidden race evolution path for Orcs.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Orcs",
      "raceId": 31,
      "previousJobId": 10242,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_orcs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10244_orc_bloodline",
    "excelId": 10244,
    "name": "Orc Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_031_orcs",
    "description": "Excel-imported advanced race evolution path for Orcs.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Orcs",
      "raceId": 31,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_orcs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10245_mythic_orc",
    "excelId": 10245,
    "name": "Mythic Orc",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10244_orc_bloodline",
    "description": "Excel-imported specialist race evolution path for Orcs.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Orcs",
      "raceId": 31,
      "previousJobId": 10244,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_orcs_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10246_ancient_orc_avatar",
    "excelId": 10246,
    "name": "Ancient Orc Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10245_mythic_orc",
    "description": "Excel-imported rare race evolution path for Orcs.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Orcs",
      "raceId": 31,
      "previousJobId": 10245,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_orcs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10247_world_born_orc",
    "excelId": 10247,
    "name": "World-Born Orc",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10246_ancient_orc_avatar",
    "description": "Excel-imported hidden race evolution path for Orcs.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Orcs",
      "raceId": 31,
      "previousJobId": 10246,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_orcs_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10248_awakened_ogre",
    "excelId": 10248,
    "name": "Awakened Ogre",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_032_ogres",
    "description": "Excel-imported advanced race evolution path for Ogres.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ogres",
      "raceId": 32,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_ogres_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10249_elder_ogre",
    "excelId": 10249,
    "name": "Elder Ogre",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10248_awakened_ogre",
    "description": "Excel-imported specialist race evolution path for Ogres.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ogres",
      "raceId": 32,
      "previousJobId": 10248,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_ogres_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10250_ogre_sovereign",
    "excelId": 10250,
    "name": "Ogre Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10249_elder_ogre",
    "description": "Excel-imported rare race evolution path for Ogres.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ogres",
      "raceId": 32,
      "previousJobId": 10249,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_ogres_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10251_origin_ogre",
    "excelId": 10251,
    "name": "Origin Ogre",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10250_ogre_sovereign",
    "description": "Excel-imported hidden race evolution path for Ogres.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ogres",
      "raceId": 32,
      "previousJobId": 10250,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_ogres_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10252_ogre_bloodline",
    "excelId": 10252,
    "name": "Ogre Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_032_ogres",
    "description": "Excel-imported advanced race evolution path for Ogres.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ogres",
      "raceId": 32,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_ogres_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10253_mythic_ogre",
    "excelId": 10253,
    "name": "Mythic Ogre",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10252_ogre_bloodline",
    "description": "Excel-imported specialist race evolution path for Ogres.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ogres",
      "raceId": 32,
      "previousJobId": 10252,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_ogres_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10254_ancient_ogre_avatar",
    "excelId": 10254,
    "name": "Ancient Ogre Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10253_mythic_ogre",
    "description": "Excel-imported rare race evolution path for Ogres.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ogres",
      "raceId": 32,
      "previousJobId": 10253,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_ogres_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10255_world_born_ogre",
    "excelId": 10255,
    "name": "World-Born Ogre",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10254_ancient_ogre_avatar",
    "description": "Excel-imported hidden race evolution path for Ogres.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ogres",
      "raceId": 32,
      "previousJobId": 10254,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_ogres_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10256_awakened_oni",
    "excelId": 10256,
    "name": "Awakened Oni",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_033_oni",
    "description": "Excel-imported advanced race evolution path for Oni.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 3,
      "wis": -1,
      "con": 1,
      "cha": 4
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Oni",
      "raceId": 33,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_oni_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10257_elder_oni",
    "excelId": 10257,
    "name": "Elder Oni",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10256_awakened_oni",
    "description": "Excel-imported specialist race evolution path for Oni.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 4,
      "wis": -2,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Oni",
      "raceId": 33,
      "previousJobId": 10256,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_oni_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10258_oni_sovereign",
    "excelId": 10258,
    "name": "Oni Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10257_elder_oni",
    "description": "Excel-imported rare race evolution path for Oni.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 5,
      "wis": -2,
      "con": 2,
      "cha": 7
    },
    "levelGrowth": {
      "int": 2,
      "cha": 3,
      "str": 2
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Oni",
      "raceId": 33,
      "previousJobId": 10257,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_oni_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10259_origin_oni",
    "excelId": 10259,
    "name": "Origin Oni",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10258_oni_sovereign",
    "description": "Excel-imported hidden race evolution path for Oni.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 6,
      "wis": -3,
      "con": 3,
      "cha": 9
    },
    "levelGrowth": {
      "int": 2,
      "cha": 4,
      "str": 2
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Oni",
      "raceId": 33,
      "previousJobId": 10258,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_oni_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10260_oni_bloodline",
    "excelId": 10260,
    "name": "Oni Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_033_oni",
    "description": "Excel-imported advanced race evolution path for Oni.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 3,
      "wis": -1,
      "con": 1,
      "cha": 4
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Oni",
      "raceId": 33,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_oni_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10261_mythic_oni",
    "excelId": 10261,
    "name": "Mythic Oni",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10260_oni_bloodline",
    "description": "Excel-imported specialist race evolution path for Oni.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 4,
      "wis": -2,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Oni",
      "raceId": 33,
      "previousJobId": 10260,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_oni_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10262_ancient_oni_avatar",
    "excelId": 10262,
    "name": "Ancient Oni Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10261_mythic_oni",
    "description": "Excel-imported rare race evolution path for Oni.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 5,
      "wis": -2,
      "con": 2,
      "cha": 7
    },
    "levelGrowth": {
      "int": 2,
      "cha": 3,
      "str": 2
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Oni",
      "raceId": 33,
      "previousJobId": 10261,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_oni_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10263_world_born_oni",
    "excelId": 10263,
    "name": "World-Born Oni",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10262_ancient_oni_avatar",
    "description": "Excel-imported hidden race evolution path for Oni.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 6,
      "wis": -3,
      "con": 3,
      "cha": 9
    },
    "levelGrowth": {
      "int": 2,
      "cha": 4,
      "str": 2
    },
    "startingSkills": [
      "in_hellfire_affinity"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Oni",
      "raceId": 33,
      "previousJobId": 10262,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_oni_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10264_awakened_troll",
    "excelId": 10264,
    "name": "Awakened Troll",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_034_trolls",
    "description": "Excel-imported advanced race evolution path for Trolls.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Trolls",
      "raceId": 34,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_trolls_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10265_elder_troll",
    "excelId": 10265,
    "name": "Elder Troll",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10264_awakened_troll",
    "description": "Excel-imported specialist race evolution path for Trolls.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Trolls",
      "raceId": 34,
      "previousJobId": 10264,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_trolls_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10266_troll_sovereign",
    "excelId": 10266,
    "name": "Troll Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10265_elder_troll",
    "description": "Excel-imported rare race evolution path for Trolls.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Trolls",
      "raceId": 34,
      "previousJobId": 10265,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_trolls_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10267_origin_troll",
    "excelId": 10267,
    "name": "Origin Troll",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10266_troll_sovereign",
    "description": "Excel-imported hidden race evolution path for Trolls.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Trolls",
      "raceId": 34,
      "previousJobId": 10266,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_trolls_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10268_troll_bloodline",
    "excelId": 10268,
    "name": "Troll Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_034_trolls",
    "description": "Excel-imported advanced race evolution path for Trolls.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Trolls",
      "raceId": 34,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_trolls_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10269_mythic_troll",
    "excelId": 10269,
    "name": "Mythic Troll",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10268_troll_bloodline",
    "description": "Excel-imported specialist race evolution path for Trolls.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Trolls",
      "raceId": 34,
      "previousJobId": 10268,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_trolls_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10270_ancient_troll_avatar",
    "excelId": 10270,
    "name": "Ancient Troll Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10269_mythic_troll",
    "description": "Excel-imported rare race evolution path for Trolls.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Trolls",
      "raceId": 34,
      "previousJobId": 10269,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_trolls_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10271_world_born_troll",
    "excelId": 10271,
    "name": "World-Born Troll",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10270_ancient_troll_avatar",
    "description": "Excel-imported hidden race evolution path for Trolls.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Trolls",
      "raceId": 34,
      "previousJobId": 10270,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_trolls_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10272_awakened_giant",
    "excelId": 10272,
    "name": "Awakened Giant",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_035_giants",
    "description": "Excel-imported advanced race evolution path for Giants.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Giants",
      "raceId": 35,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_giants_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10273_elder_giant",
    "excelId": 10273,
    "name": "Elder Giant",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10272_awakened_giant",
    "description": "Excel-imported specialist race evolution path for Giants.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Giants",
      "raceId": 35,
      "previousJobId": 10272,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_giants_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10274_giant_sovereign",
    "excelId": 10274,
    "name": "Giant Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10273_elder_giant",
    "description": "Excel-imported rare race evolution path for Giants.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Giants",
      "raceId": 35,
      "previousJobId": 10273,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_giants_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10275_origin_giant",
    "excelId": 10275,
    "name": "Origin Giant",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10274_giant_sovereign",
    "description": "Excel-imported hidden race evolution path for Giants.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Giants",
      "raceId": 35,
      "previousJobId": 10274,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_giants_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10276_giant_bloodline",
    "excelId": 10276,
    "name": "Giant Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_035_giants",
    "description": "Excel-imported advanced race evolution path for Giants.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Giants",
      "raceId": 35,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_giants_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10277_mythic_giant",
    "excelId": 10277,
    "name": "Mythic Giant",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10276_giant_bloodline",
    "description": "Excel-imported specialist race evolution path for Giants.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Giants",
      "raceId": 35,
      "previousJobId": 10276,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_giants_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 10,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10278_ancient_giant_avatar",
    "excelId": 10278,
    "name": "Ancient Giant Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10277_mythic_giant",
    "description": "Excel-imported rare race evolution path for Giants.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Giants",
      "raceId": 35,
      "previousJobId": 10277,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_giants_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10279_world_born_giant",
    "excelId": 10279,
    "name": "World-Born Giant",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10278_ancient_giant_avatar",
    "description": "Excel-imported hidden race evolution path for Giants.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "v50_heavy_weapon_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Giants",
      "raceId": 35,
      "previousJobId": 10278,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_giants_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_heavy_weapon_2"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_3"
      },
      {
        "level": 5,
        "skillId": "v50_heavy_weapon_4"
      }
    ]
  },
  {
    "id": "race_path_10280_awakened_cyclope",
    "excelId": 10280,
    "name": "Awakened Cyclope",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_036_cyclopes",
    "description": "Excel-imported advanced race evolution path for Cyclopes.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Cyclopes",
      "raceId": 36,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_cyclopes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10281_elder_cyclope",
    "excelId": 10281,
    "name": "Elder Cyclope",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10280_awakened_cyclope",
    "description": "Excel-imported specialist race evolution path for Cyclopes.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Cyclopes",
      "raceId": 36,
      "previousJobId": 10280,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_cyclopes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10282_cyclope_sovereign",
    "excelId": 10282,
    "name": "Cyclope Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10281_elder_cyclope",
    "description": "Excel-imported rare race evolution path for Cyclopes.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Cyclopes",
      "raceId": 36,
      "previousJobId": 10281,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_cyclopes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10283_origin_cyclope",
    "excelId": 10283,
    "name": "Origin Cyclope",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10282_cyclope_sovereign",
    "description": "Excel-imported hidden race evolution path for Cyclopes.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Cyclopes",
      "raceId": 36,
      "previousJobId": 10282,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_cyclopes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10284_cyclope_bloodline",
    "excelId": 10284,
    "name": "Cyclope Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_036_cyclopes",
    "description": "Excel-imported advanced race evolution path for Cyclopes.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Cyclopes",
      "raceId": 36,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_cyclopes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10285_mythic_cyclope",
    "excelId": 10285,
    "name": "Mythic Cyclope",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10284_cyclope_bloodline",
    "description": "Excel-imported specialist race evolution path for Cyclopes.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Cyclopes",
      "raceId": 36,
      "previousJobId": 10284,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_cyclopes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10286_ancient_cyclope_avatar",
    "excelId": 10286,
    "name": "Ancient Cyclope Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10285_mythic_cyclope",
    "description": "Excel-imported rare race evolution path for Cyclopes.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Cyclopes",
      "raceId": 36,
      "previousJobId": 10285,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_cyclopes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10287_world_born_cyclope",
    "excelId": 10287,
    "name": "World-Born Cyclope",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10286_ancient_cyclope_avatar",
    "description": "Excel-imported hidden race evolution path for Cyclopes.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Cyclopes",
      "raceId": 36,
      "previousJobId": 10286,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_cyclopes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10288_awakened_slime",
    "excelId": 10288,
    "name": "Awakened Slime",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_037_slimes",
    "description": "Excel-imported advanced race evolution path for Slimes.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "in_adaptive_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Slimes",
      "raceId": 37,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_slimes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10289_elder_slime",
    "excelId": 10289,
    "name": "Elder Slime",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10288_awakened_slime",
    "description": "Excel-imported specialist race evolution path for Slimes.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "in_adaptive_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Slimes",
      "raceId": 37,
      "previousJobId": 10288,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_slimes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10290_slime_sovereign",
    "excelId": 10290,
    "name": "Slime Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10289_elder_slime",
    "description": "Excel-imported rare race evolution path for Slimes.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "in_adaptive_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Slimes",
      "raceId": 37,
      "previousJobId": 10289,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_slimes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10291_origin_slime",
    "excelId": 10291,
    "name": "Origin Slime",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10290_slime_sovereign",
    "description": "Excel-imported hidden race evolution path for Slimes.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "in_adaptive_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Slimes",
      "raceId": 37,
      "previousJobId": 10290,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_slimes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10292_slime_bloodline",
    "excelId": 10292,
    "name": "Slime Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_037_slimes",
    "description": "Excel-imported advanced race evolution path for Slimes.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "in_adaptive_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Slimes",
      "raceId": 37,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_slimes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10293_mythic_slime",
    "excelId": 10293,
    "name": "Mythic Slime",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10292_slime_bloodline",
    "description": "Excel-imported specialist race evolution path for Slimes.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "in_adaptive_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Slimes",
      "raceId": 37,
      "previousJobId": 10292,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_slimes_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10294_ancient_slime_avatar",
    "excelId": 10294,
    "name": "Ancient Slime Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10293_mythic_slime",
    "description": "Excel-imported rare race evolution path for Slimes.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "in_adaptive_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Slimes",
      "raceId": 37,
      "previousJobId": 10293,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_slimes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10295_world_born_slime",
    "excelId": 10295,
    "name": "World-Born Slime",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10294_ancient_slime_avatar",
    "description": "Excel-imported hidden race evolution path for Slimes.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "in_adaptive_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Slimes",
      "raceId": 37,
      "previousJobId": 10294,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_slimes_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10296_awakened_treants_ent",
    "excelId": 10296,
    "name": "Awakened Treants / Ent",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_038_treants_ents",
    "description": "Excel-imported advanced race evolution path for Treants / Ents.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Treants / Ents",
      "raceId": 38,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_treants_ents_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10297_elder_treants_ent",
    "excelId": 10297,
    "name": "Elder Treants / Ent",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10296_awakened_treants_ent",
    "description": "Excel-imported specialist race evolution path for Treants / Ents.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Treants / Ents",
      "raceId": 38,
      "previousJobId": 10296,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_treants_ents_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10298_treants_ent_sovereign",
    "excelId": 10298,
    "name": "Treants / Ent Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10297_elder_treants_ent",
    "description": "Excel-imported rare race evolution path for Treants / Ents.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Treants / Ents",
      "raceId": 38,
      "previousJobId": 10297,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_treants_ents_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10299_origin_treants_ent",
    "excelId": 10299,
    "name": "Origin Treants / Ent",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10298_treants_ent_sovereign",
    "description": "Excel-imported hidden race evolution path for Treants / Ents.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Treants / Ents",
      "raceId": 38,
      "previousJobId": 10298,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_treants_ents_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10300_treants_ent_bloodline",
    "excelId": 10300,
    "name": "Treants / Ent Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_038_treants_ents",
    "description": "Excel-imported advanced race evolution path for Treants / Ents.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Treants / Ents",
      "raceId": 38,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_treants_ents_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10301_mythic_treants_ent",
    "excelId": 10301,
    "name": "Mythic Treants / Ent",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10300_treants_ent_bloodline",
    "description": "Excel-imported specialist race evolution path for Treants / Ents.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Treants / Ents",
      "raceId": 38,
      "previousJobId": 10300,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_treants_ents_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10302_ancient_treants_ent_avatar",
    "excelId": 10302,
    "name": "Ancient Treants / Ent Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10301_mythic_treants_ent",
    "description": "Excel-imported rare race evolution path for Treants / Ents.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Treants / Ents",
      "raceId": 38,
      "previousJobId": 10301,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_treants_ents_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10303_world_born_treants_ent",
    "excelId": 10303,
    "name": "World-Born Treants / Ent",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10302_ancient_treants_ent_avatar",
    "description": "Excel-imported hidden race evolution path for Treants / Ents.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Treants / Ents",
      "raceId": 38,
      "previousJobId": 10302,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_treants_ents_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10304_awakened_golem",
    "excelId": 10304,
    "name": "Awakened Golem",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "golemforged",
    "description": "Excel-imported advanced race evolution path for Golems.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_guard_stance"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Golems",
      "raceId": 39,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_golems_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_shield_bash"
      },
      {
        "level": 10,
        "skillId": "sk_kings_guard"
      },
      {
        "level": 10,
        "skillId": "sk_aegis_last_king"
      }
    ]
  },
  {
    "id": "race_path_10305_elder_golem",
    "excelId": 10305,
    "name": "Elder Golem",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10304_awakened_golem",
    "description": "Excel-imported specialist race evolution path for Golems.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_guard_stance"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Golems",
      "raceId": 39,
      "previousJobId": 10304,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_golems_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_shield_bash"
      },
      {
        "level": 10,
        "skillId": "sk_kings_guard"
      },
      {
        "level": 10,
        "skillId": "sk_aegis_last_king"
      }
    ]
  },
  {
    "id": "race_path_10306_golem_sovereign",
    "excelId": 10306,
    "name": "Golem Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10305_elder_golem",
    "description": "Excel-imported rare race evolution path for Golems.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "sk_guard_stance"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Golems",
      "raceId": 39,
      "previousJobId": 10305,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_golems_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_shield_bash"
      },
      {
        "level": 5,
        "skillId": "sk_kings_guard"
      },
      {
        "level": 5,
        "skillId": "sk_aegis_last_king"
      }
    ]
  },
  {
    "id": "race_path_10307_origin_golem",
    "excelId": 10307,
    "name": "Origin Golem",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10306_golem_sovereign",
    "description": "Excel-imported hidden race evolution path for Golems.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "sk_guard_stance"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Golems",
      "raceId": 39,
      "previousJobId": 10306,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_golems_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_shield_bash"
      },
      {
        "level": 5,
        "skillId": "sk_kings_guard"
      },
      {
        "level": 5,
        "skillId": "sk_aegis_last_king"
      }
    ]
  },
  {
    "id": "race_path_10308_golem_bloodline",
    "excelId": 10308,
    "name": "Golem Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "golemforged",
    "description": "Excel-imported advanced race evolution path for Golems.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_guard_stance"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Golems",
      "raceId": 39,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_golems_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_shield_bash"
      },
      {
        "level": 10,
        "skillId": "sk_kings_guard"
      },
      {
        "level": 10,
        "skillId": "sk_aegis_last_king"
      }
    ]
  },
  {
    "id": "race_path_10309_mythic_golem",
    "excelId": 10309,
    "name": "Mythic Golem",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10308_golem_bloodline",
    "description": "Excel-imported specialist race evolution path for Golems.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_guard_stance"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Golems",
      "raceId": 39,
      "previousJobId": 10308,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_golems_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_shield_bash"
      },
      {
        "level": 10,
        "skillId": "sk_kings_guard"
      },
      {
        "level": 10,
        "skillId": "sk_aegis_last_king"
      }
    ]
  },
  {
    "id": "race_path_10310_ancient_golem_avatar",
    "excelId": 10310,
    "name": "Ancient Golem Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10309_mythic_golem",
    "description": "Excel-imported rare race evolution path for Golems.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "sk_guard_stance"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Golems",
      "raceId": 39,
      "previousJobId": 10309,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_golems_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_shield_bash"
      },
      {
        "level": 5,
        "skillId": "sk_kings_guard"
      },
      {
        "level": 5,
        "skillId": "sk_aegis_last_king"
      }
    ]
  },
  {
    "id": "race_path_10311_world_born_golem",
    "excelId": 10311,
    "name": "World-Born Golem",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10310_ancient_golem_avatar",
    "description": "Excel-imported hidden race evolution path for Golems.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "sk_guard_stance"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Golems",
      "raceId": 39,
      "previousJobId": 10310,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_golems_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_shield_bash"
      },
      {
        "level": 5,
        "skillId": "sk_kings_guard"
      },
      {
        "level": 5,
        "skillId": "sk_aegis_last_king"
      }
    ]
  },
  {
    "id": "race_path_10312_awakened_homunculi",
    "excelId": 10312,
    "name": "Awakened Homunculi",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_040_homunculi",
    "description": "Excel-imported advanced race evolution path for Homunculi.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Homunculi",
      "raceId": 40,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_homunculi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10313_elder_homunculi",
    "excelId": 10313,
    "name": "Elder Homunculi",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10312_awakened_homunculi",
    "description": "Excel-imported specialist race evolution path for Homunculi.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Homunculi",
      "raceId": 40,
      "previousJobId": 10312,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_homunculi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10314_homunculi_sovereign",
    "excelId": 10314,
    "name": "Homunculi Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10313_elder_homunculi",
    "description": "Excel-imported rare race evolution path for Homunculi.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Homunculi",
      "raceId": 40,
      "previousJobId": 10313,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_homunculi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10315_origin_homunculi",
    "excelId": 10315,
    "name": "Origin Homunculi",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10314_homunculi_sovereign",
    "description": "Excel-imported hidden race evolution path for Homunculi.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Homunculi",
      "raceId": 40,
      "previousJobId": 10314,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_homunculi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10316_homunculi_bloodline",
    "excelId": 10316,
    "name": "Homunculi Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_040_homunculi",
    "description": "Excel-imported advanced race evolution path for Homunculi.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Homunculi",
      "raceId": 40,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_homunculi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10317_mythic_homunculi",
    "excelId": 10317,
    "name": "Mythic Homunculi",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10316_homunculi_bloodline",
    "description": "Excel-imported specialist race evolution path for Homunculi.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Homunculi",
      "raceId": 40,
      "previousJobId": 10316,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_homunculi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10318_ancient_homunculi_avatar",
    "excelId": 10318,
    "name": "Ancient Homunculi Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10317_mythic_homunculi",
    "description": "Excel-imported rare race evolution path for Homunculi.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Homunculi",
      "raceId": 40,
      "previousJobId": 10317,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_homunculi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10319_world_born_homunculi",
    "excelId": 10319,
    "name": "World-Born Homunculi",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10318_ancient_homunculi_avatar",
    "description": "Excel-imported hidden race evolution path for Homunculi.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Homunculi",
      "raceId": 40,
      "previousJobId": 10318,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_homunculi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10320_awakened_automata_living_doll",
    "excelId": 10320,
    "name": "Awakened Automata / Living Doll",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_041_automata_living_dolls",
    "description": "Excel-imported advanced race evolution path for Automata / Living Dolls.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Automata / Living Dolls",
      "raceId": 41,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_automata_living_dolls_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10321_elder_automata_living_doll",
    "excelId": 10321,
    "name": "Elder Automata / Living Doll",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10320_awakened_automata_living_doll",
    "description": "Excel-imported specialist race evolution path for Automata / Living Dolls.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Automata / Living Dolls",
      "raceId": 41,
      "previousJobId": 10320,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_automata_living_dolls_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10322_automata_living_doll_sovereign",
    "excelId": 10322,
    "name": "Automata / Living Doll Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10321_elder_automata_living_doll",
    "description": "Excel-imported rare race evolution path for Automata / Living Dolls.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Automata / Living Dolls",
      "raceId": 41,
      "previousJobId": 10321,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_automata_living_dolls_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10323_origin_automata_living_doll",
    "excelId": 10323,
    "name": "Origin Automata / Living Doll",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10322_automata_living_doll_sovereign",
    "description": "Excel-imported hidden race evolution path for Automata / Living Dolls.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Automata / Living Dolls",
      "raceId": 41,
      "previousJobId": 10322,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_automata_living_dolls_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10324_automata_living_doll_bloodline",
    "excelId": 10324,
    "name": "Automata / Living Doll Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_041_automata_living_dolls",
    "description": "Excel-imported advanced race evolution path for Automata / Living Dolls.",
    "stats": {
      "str": 4,
      "dex": -1,
      "int": 1,
      "wis": 0,
      "con": 6,
      "cha": -1
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Automata / Living Dolls",
      "raceId": 41,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_automata_living_dolls_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10325_mythic_automata_living_doll",
    "excelId": 10325,
    "name": "Mythic Automata / Living Doll",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10324_automata_living_doll_bloodline",
    "description": "Excel-imported specialist race evolution path for Automata / Living Dolls.",
    "stats": {
      "str": 5,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "str": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Automata / Living Dolls",
      "raceId": 41,
      "previousJobId": 10324,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_automata_living_dolls_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10326_ancient_automata_living_doll_avatar",
    "excelId": 10326,
    "name": "Ancient Automata / Living Doll Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10325_mythic_automata_living_doll",
    "description": "Excel-imported rare race evolution path for Automata / Living Dolls.",
    "stats": {
      "str": 7,
      "dex": -2,
      "int": 2,
      "wis": 0,
      "con": 10,
      "cha": -2
    },
    "levelGrowth": {
      "str": 3,
      "con": 3
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Automata / Living Dolls",
      "raceId": 41,
      "previousJobId": 10325,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_automata_living_dolls_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10327_world_born_automata_living_doll",
    "excelId": 10327,
    "name": "World-Born Automata / Living Doll",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10326_ancient_automata_living_doll_avatar",
    "description": "Excel-imported hidden race evolution path for Automata / Living Dolls.",
    "stats": {
      "str": 9,
      "dex": -3,
      "int": 3,
      "wis": 0,
      "con": 12,
      "cha": -3
    },
    "levelGrowth": {
      "str": 4,
      "con": 4
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Automata / Living Dolls",
      "raceId": 41,
      "previousJobId": 10326,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_automata_living_dolls_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10328_awakened_undead",
    "excelId": 10328,
    "name": "Awakened Undead",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "undead",
    "description": "Excel-imported advanced race evolution path for Undead.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Undead",
      "raceId": 42,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_undead_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10329_elder_undead",
    "excelId": 10329,
    "name": "Elder Undead",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10328_awakened_undead",
    "description": "Excel-imported specialist race evolution path for Undead.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Undead",
      "raceId": 42,
      "previousJobId": 10328,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_undead_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10330_undead_sovereign",
    "excelId": 10330,
    "name": "Undead Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10329_elder_undead",
    "description": "Excel-imported rare race evolution path for Undead.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Undead",
      "raceId": 42,
      "previousJobId": 10329,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_undead_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10331_origin_undead",
    "excelId": 10331,
    "name": "Origin Undead",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10330_undead_sovereign",
    "description": "Excel-imported hidden race evolution path for Undead.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Undead",
      "raceId": 42,
      "previousJobId": 10330,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_undead_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10332_undead_bloodline",
    "excelId": 10332,
    "name": "Undead Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "undead",
    "description": "Excel-imported advanced race evolution path for Undead.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Undead",
      "raceId": 42,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_undead_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10333_mythic_undead",
    "excelId": 10333,
    "name": "Mythic Undead",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10332_undead_bloodline",
    "description": "Excel-imported specialist race evolution path for Undead.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Undead",
      "raceId": 42,
      "previousJobId": 10332,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_undead_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10334_ancient_undead_avatar",
    "excelId": 10334,
    "name": "Ancient Undead Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10333_mythic_undead",
    "description": "Excel-imported rare race evolution path for Undead.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Undead",
      "raceId": 42,
      "previousJobId": 10333,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_undead_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10335_world_born_undead",
    "excelId": 10335,
    "name": "World-Born Undead",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10334_ancient_undead_avatar",
    "description": "Excel-imported hidden race evolution path for Undead.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Undead",
      "raceId": 42,
      "previousJobId": 10334,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_undead_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10336_awakened_skeleton",
    "excelId": 10336,
    "name": "Awakened Skeleton",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_043_skeletons",
    "description": "Excel-imported advanced race evolution path for Skeletons.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Skeletons",
      "raceId": 43,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_skeletons_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10337_elder_skeleton",
    "excelId": 10337,
    "name": "Elder Skeleton",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10336_awakened_skeleton",
    "description": "Excel-imported specialist race evolution path for Skeletons.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Skeletons",
      "raceId": 43,
      "previousJobId": 10336,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_skeletons_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10338_skeleton_sovereign",
    "excelId": 10338,
    "name": "Skeleton Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10337_elder_skeleton",
    "description": "Excel-imported rare race evolution path for Skeletons.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Skeletons",
      "raceId": 43,
      "previousJobId": 10337,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_skeletons_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10339_origin_skeleton",
    "excelId": 10339,
    "name": "Origin Skeleton",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10338_skeleton_sovereign",
    "description": "Excel-imported hidden race evolution path for Skeletons.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Skeletons",
      "raceId": 43,
      "previousJobId": 10338,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_skeletons_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10340_skeleton_bloodline",
    "excelId": 10340,
    "name": "Skeleton Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_043_skeletons",
    "description": "Excel-imported advanced race evolution path for Skeletons.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Skeletons",
      "raceId": 43,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_skeletons_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10341_mythic_skeleton",
    "excelId": 10341,
    "name": "Mythic Skeleton",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10340_skeleton_bloodline",
    "description": "Excel-imported specialist race evolution path for Skeletons.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Skeletons",
      "raceId": 43,
      "previousJobId": 10340,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_skeletons_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10342_ancient_skeleton_avatar",
    "excelId": 10342,
    "name": "Ancient Skeleton Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10341_mythic_skeleton",
    "description": "Excel-imported rare race evolution path for Skeletons.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Skeletons",
      "raceId": 43,
      "previousJobId": 10341,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_skeletons_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10343_world_born_skeleton",
    "excelId": 10343,
    "name": "World-Born Skeleton",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10342_ancient_skeleton_avatar",
    "description": "Excel-imported hidden race evolution path for Skeletons.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Skeletons",
      "raceId": 43,
      "previousJobId": 10342,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_skeletons_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10344_awakened_zombie",
    "excelId": 10344,
    "name": "Awakened Zombie",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_044_zombies",
    "description": "Excel-imported advanced race evolution path for Zombies.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Zombies",
      "raceId": 44,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_zombies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10345_elder_zombie",
    "excelId": 10345,
    "name": "Elder Zombie",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10344_awakened_zombie",
    "description": "Excel-imported specialist race evolution path for Zombies.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Zombies",
      "raceId": 44,
      "previousJobId": 10344,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_zombies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10346_zombie_sovereign",
    "excelId": 10346,
    "name": "Zombie Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10345_elder_zombie",
    "description": "Excel-imported rare race evolution path for Zombies.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Zombies",
      "raceId": 44,
      "previousJobId": 10345,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_zombies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10347_origin_zombie",
    "excelId": 10347,
    "name": "Origin Zombie",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10346_zombie_sovereign",
    "description": "Excel-imported hidden race evolution path for Zombies.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Zombies",
      "raceId": 44,
      "previousJobId": 10346,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_zombies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10348_zombie_bloodline",
    "excelId": 10348,
    "name": "Zombie Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_044_zombies",
    "description": "Excel-imported advanced race evolution path for Zombies.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Zombies",
      "raceId": 44,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_zombies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10349_mythic_zombie",
    "excelId": 10349,
    "name": "Mythic Zombie",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10348_zombie_bloodline",
    "description": "Excel-imported specialist race evolution path for Zombies.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Zombies",
      "raceId": 44,
      "previousJobId": 10348,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_zombies_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10350_ancient_zombie_avatar",
    "excelId": 10350,
    "name": "Ancient Zombie Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10349_mythic_zombie",
    "description": "Excel-imported rare race evolution path for Zombies.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Zombies",
      "raceId": 44,
      "previousJobId": 10349,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_zombies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10351_world_born_zombie",
    "excelId": 10351,
    "name": "World-Born Zombie",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10350_ancient_zombie_avatar",
    "description": "Excel-imported hidden race evolution path for Zombies.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Zombies",
      "raceId": 44,
      "previousJobId": 10350,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_zombies_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10352_awakened_liche",
    "excelId": 10352,
    "name": "Awakened Liche",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_045_liches",
    "description": "Excel-imported advanced race evolution path for Liches.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Liches",
      "raceId": 45,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_liches_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10353_elder_liche",
    "excelId": 10353,
    "name": "Elder Liche",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10352_awakened_liche",
    "description": "Excel-imported specialist race evolution path for Liches.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Liches",
      "raceId": 45,
      "previousJobId": 10352,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_liches_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10354_liche_sovereign",
    "excelId": 10354,
    "name": "Liche Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10353_elder_liche",
    "description": "Excel-imported rare race evolution path for Liches.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Liches",
      "raceId": 45,
      "previousJobId": 10353,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_liches_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10355_origin_liche",
    "excelId": 10355,
    "name": "Origin Liche",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10354_liche_sovereign",
    "description": "Excel-imported hidden race evolution path for Liches.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Liches",
      "raceId": 45,
      "previousJobId": 10354,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_liches_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10356_liche_bloodline",
    "excelId": 10356,
    "name": "Liche Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_045_liches",
    "description": "Excel-imported advanced race evolution path for Liches.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Liches",
      "raceId": 45,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_liches_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10357_mythic_liche",
    "excelId": 10357,
    "name": "Mythic Liche",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10356_liche_bloodline",
    "description": "Excel-imported specialist race evolution path for Liches.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Liches",
      "raceId": 45,
      "previousJobId": 10356,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_liches_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10358_ancient_liche_avatar",
    "excelId": 10358,
    "name": "Ancient Liche Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10357_mythic_liche",
    "description": "Excel-imported rare race evolution path for Liches.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Liches",
      "raceId": 45,
      "previousJobId": 10357,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_liches_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10359_world_born_liche",
    "excelId": 10359,
    "name": "World-Born Liche",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10358_ancient_liche_avatar",
    "description": "Excel-imported hidden race evolution path for Liches.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Liches",
      "raceId": 45,
      "previousJobId": 10358,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_liches_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10360_awakened_vampire",
    "excelId": 10360,
    "name": "Awakened Vampire",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_046_vampires",
    "description": "Excel-imported advanced race evolution path for Vampires.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Vampires",
      "raceId": 46,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_vampires_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10361_elder_vampire",
    "excelId": 10361,
    "name": "Elder Vampire",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10360_awakened_vampire",
    "description": "Excel-imported specialist race evolution path for Vampires.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Vampires",
      "raceId": 46,
      "previousJobId": 10360,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_vampires_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10362_vampire_sovereign",
    "excelId": 10362,
    "name": "Vampire Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10361_elder_vampire",
    "description": "Excel-imported rare race evolution path for Vampires.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Vampires",
      "raceId": 46,
      "previousJobId": 10361,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_vampires_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10363_origin_vampire",
    "excelId": 10363,
    "name": "Origin Vampire",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10362_vampire_sovereign",
    "description": "Excel-imported hidden race evolution path for Vampires.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Vampires",
      "raceId": 46,
      "previousJobId": 10362,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_vampires_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10364_vampire_bloodline",
    "excelId": 10364,
    "name": "Vampire Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_046_vampires",
    "description": "Excel-imported advanced race evolution path for Vampires.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Vampires",
      "raceId": 46,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_vampires_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10365_mythic_vampire",
    "excelId": 10365,
    "name": "Mythic Vampire",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10364_vampire_bloodline",
    "description": "Excel-imported specialist race evolution path for Vampires.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Vampires",
      "raceId": 46,
      "previousJobId": 10364,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_vampires_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_dark_1"
      },
      {
        "level": 10,
        "skillId": "v50_dark_2"
      },
      {
        "level": 10,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10366_ancient_vampire_avatar",
    "excelId": 10366,
    "name": "Ancient Vampire Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10365_mythic_vampire",
    "description": "Excel-imported rare race evolution path for Vampires.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Vampires",
      "raceId": 46,
      "previousJobId": 10365,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_vampires_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10367_world_born_vampire",
    "excelId": 10367,
    "name": "World-Born Vampire",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10366_ancient_vampire_avatar",
    "description": "Excel-imported hidden race evolution path for Vampires.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Vampires",
      "raceId": 46,
      "previousJobId": 10366,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_vampires_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_dark_1"
      },
      {
        "level": 5,
        "skillId": "v50_dark_2"
      },
      {
        "level": 5,
        "skillId": "v50_dark_3"
      }
    ]
  },
  {
    "id": "race_path_10368_awakened_werewolve",
    "excelId": 10368,
    "name": "Awakened Werewolve",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_047_werewolves",
    "description": "Excel-imported advanced race evolution path for Werewolves.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Werewolves",
      "raceId": 47,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_werewolves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10369_elder_werewolve",
    "excelId": 10369,
    "name": "Elder Werewolve",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10368_awakened_werewolve",
    "description": "Excel-imported specialist race evolution path for Werewolves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Werewolves",
      "raceId": 47,
      "previousJobId": 10368,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_werewolves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10370_werewolve_sovereign",
    "excelId": 10370,
    "name": "Werewolve Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10369_elder_werewolve",
    "description": "Excel-imported rare race evolution path for Werewolves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Werewolves",
      "raceId": 47,
      "previousJobId": 10369,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_werewolves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10371_origin_werewolve",
    "excelId": 10371,
    "name": "Origin Werewolve",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10370_werewolve_sovereign",
    "description": "Excel-imported hidden race evolution path for Werewolves.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Werewolves",
      "raceId": 47,
      "previousJobId": 10370,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_werewolves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10372_werewolve_bloodline",
    "excelId": 10372,
    "name": "Werewolve Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_047_werewolves",
    "description": "Excel-imported advanced race evolution path for Werewolves.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Werewolves",
      "raceId": 47,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_werewolves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10373_mythic_werewolve",
    "excelId": 10373,
    "name": "Mythic Werewolve",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10372_werewolve_bloodline",
    "description": "Excel-imported specialist race evolution path for Werewolves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Werewolves",
      "raceId": 47,
      "previousJobId": 10372,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_werewolves_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10374_ancient_werewolve_avatar",
    "excelId": 10374,
    "name": "Ancient Werewolve Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10373_mythic_werewolve",
    "description": "Excel-imported rare race evolution path for Werewolves.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Werewolves",
      "raceId": 47,
      "previousJobId": 10373,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_werewolves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10375_world_born_werewolve",
    "excelId": 10375,
    "name": "World-Born Werewolve",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10374_ancient_werewolve_avatar",
    "description": "Excel-imported hidden race evolution path for Werewolves.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Werewolves",
      "raceId": 47,
      "previousJobId": 10374,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_werewolves_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10376_awakened_wraiths_ghost",
    "excelId": 10376,
    "name": "Awakened Wraiths / Ghost",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_048_wraiths_ghosts",
    "description": "Excel-imported advanced race evolution path for Wraiths / Ghosts.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Wraiths / Ghosts",
      "raceId": 48,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_wraiths_ghosts_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10377_elder_wraiths_ghost",
    "excelId": 10377,
    "name": "Elder Wraiths / Ghost",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10376_awakened_wraiths_ghost",
    "description": "Excel-imported specialist race evolution path for Wraiths / Ghosts.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Wraiths / Ghosts",
      "raceId": 48,
      "previousJobId": 10376,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_wraiths_ghosts_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10378_wraiths_ghost_sovereign",
    "excelId": 10378,
    "name": "Wraiths / Ghost Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10377_elder_wraiths_ghost",
    "description": "Excel-imported rare race evolution path for Wraiths / Ghosts.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Wraiths / Ghosts",
      "raceId": 48,
      "previousJobId": 10377,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_wraiths_ghosts_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10379_origin_wraiths_ghost",
    "excelId": 10379,
    "name": "Origin Wraiths / Ghost",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10378_wraiths_ghost_sovereign",
    "description": "Excel-imported hidden race evolution path for Wraiths / Ghosts.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Wraiths / Ghosts",
      "raceId": 48,
      "previousJobId": 10378,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_wraiths_ghosts_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10380_wraiths_ghost_bloodline",
    "excelId": 10380,
    "name": "Wraiths / Ghost Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_048_wraiths_ghosts",
    "description": "Excel-imported advanced race evolution path for Wraiths / Ghosts.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 3,
      "wis": 1,
      "con": 4,
      "cha": -1
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Wraiths / Ghosts",
      "raceId": 48,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_wraiths_ghosts_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10381_mythic_wraiths_ghost",
    "excelId": 10381,
    "name": "Mythic Wraiths / Ghost",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10380_wraiths_ghost_bloodline",
    "description": "Excel-imported specialist race evolution path for Wraiths / Ghosts.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 4,
      "wis": 2,
      "con": 5,
      "cha": -2
    },
    "levelGrowth": {
      "int": 1,
      "wis": 1,
      "con": 2
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Wraiths / Ghosts",
      "raceId": 48,
      "previousJobId": 10380,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_wraiths_ghosts_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10382_ancient_wraiths_ghost_avatar",
    "excelId": 10382,
    "name": "Ancient Wraiths / Ghost Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10381_mythic_wraiths_ghost",
    "description": "Excel-imported rare race evolution path for Wraiths / Ghosts.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 5,
      "wis": 2,
      "con": 7,
      "cha": -2
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 3
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Wraiths / Ghosts",
      "raceId": 48,
      "previousJobId": 10381,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_wraiths_ghosts_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10383_world_born_wraiths_ghost",
    "excelId": 10383,
    "name": "World-Born Wraiths / Ghost",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10382_ancient_wraiths_ghost_avatar",
    "description": "Excel-imported hidden race evolution path for Wraiths / Ghosts.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 6,
      "wis": 3,
      "con": 9,
      "cha": -3
    },
    "levelGrowth": {
      "int": 2,
      "wis": 2,
      "con": 4
    },
    "startingSkills": [
      "in_deathless_body"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Wraiths / Ghosts",
      "raceId": 48,
      "previousJobId": 10382,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_wraiths_ghosts_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      }
    ]
  },
  {
    "id": "race_path_10384_awakened_yokai",
    "excelId": 10384,
    "name": "Awakened Yōkai",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_049_yokai",
    "description": "Excel-imported advanced race evolution path for Yōkai.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yōkai",
      "raceId": 49,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_y_kai_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10385_elder_yokai",
    "excelId": 10385,
    "name": "Elder Yōkai",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10384_awakened_yokai",
    "description": "Excel-imported specialist race evolution path for Yōkai.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yōkai",
      "raceId": 49,
      "previousJobId": 10384,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_y_kai_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10386_yokai_sovereign",
    "excelId": 10386,
    "name": "Yōkai Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10385_elder_yokai",
    "description": "Excel-imported rare race evolution path for Yōkai.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yōkai",
      "raceId": 49,
      "previousJobId": 10385,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_y_kai_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10387_origin_yokai",
    "excelId": 10387,
    "name": "Origin Yōkai",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10386_yokai_sovereign",
    "description": "Excel-imported hidden race evolution path for Yōkai.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yōkai",
      "raceId": 49,
      "previousJobId": 10386,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_y_kai_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10388_yokai_bloodline",
    "excelId": 10388,
    "name": "Yōkai Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_049_yokai",
    "description": "Excel-imported advanced race evolution path for Yōkai.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yōkai",
      "raceId": 49,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_y_kai_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10389_mythic_yokai",
    "excelId": 10389,
    "name": "Mythic Yōkai",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10388_yokai_bloodline",
    "description": "Excel-imported specialist race evolution path for Yōkai.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yōkai",
      "raceId": 49,
      "previousJobId": 10388,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_y_kai_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10390_ancient_yokai_avatar",
    "excelId": 10390,
    "name": "Ancient Yōkai Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10389_mythic_yokai",
    "description": "Excel-imported rare race evolution path for Yōkai.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yōkai",
      "raceId": 49,
      "previousJobId": 10389,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_y_kai_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10391_world_born_yokai",
    "excelId": 10391,
    "name": "World-Born Yōkai",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10390_ancient_yokai_avatar",
    "description": "Excel-imported hidden race evolution path for Yōkai.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yōkai",
      "raceId": 49,
      "previousJobId": 10390,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_y_kai_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10392_awakened_kitsune",
    "excelId": 10392,
    "name": "Awakened Kitsune",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_050_kitsune",
    "description": "Excel-imported advanced race evolution path for Kitsune.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kitsune",
      "raceId": 50,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10393_elder_kitsune",
    "excelId": 10393,
    "name": "Elder Kitsune",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10392_awakened_kitsune",
    "description": "Excel-imported specialist race evolution path for Kitsune.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kitsune",
      "raceId": 50,
      "previousJobId": 10392,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10394_kitsune_sovereign",
    "excelId": 10394,
    "name": "Kitsune Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10393_elder_kitsune",
    "description": "Excel-imported rare race evolution path for Kitsune.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kitsune",
      "raceId": 50,
      "previousJobId": 10393,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10395_origin_kitsune",
    "excelId": 10395,
    "name": "Origin Kitsune",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10394_kitsune_sovereign",
    "description": "Excel-imported hidden race evolution path for Kitsune.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kitsune",
      "raceId": 50,
      "previousJobId": 10394,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10396_kitsune_bloodline",
    "excelId": 10396,
    "name": "Kitsune Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_050_kitsune",
    "description": "Excel-imported advanced race evolution path for Kitsune.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kitsune",
      "raceId": 50,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10397_mythic_kitsune",
    "excelId": 10397,
    "name": "Mythic Kitsune",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10396_kitsune_bloodline",
    "description": "Excel-imported specialist race evolution path for Kitsune.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kitsune",
      "raceId": 50,
      "previousJobId": 10396,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10398_ancient_kitsune_avatar",
    "excelId": 10398,
    "name": "Ancient Kitsune Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10397_mythic_kitsune",
    "description": "Excel-imported rare race evolution path for Kitsune.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kitsune",
      "raceId": 50,
      "previousJobId": 10397,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10399_world_born_kitsune",
    "excelId": 10399,
    "name": "World-Born Kitsune",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10398_ancient_kitsune_avatar",
    "description": "Excel-imported hidden race evolution path for Kitsune.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kitsune",
      "raceId": 50,
      "previousJobId": 10398,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_kitsune_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10400_awakened_tanuki",
    "excelId": 10400,
    "name": "Awakened Tanuki",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_051_tanuki",
    "description": "Excel-imported advanced race evolution path for Tanuki.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tanuki",
      "raceId": 51,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_tanuki_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10401_elder_tanuki",
    "excelId": 10401,
    "name": "Elder Tanuki",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10400_awakened_tanuki",
    "description": "Excel-imported specialist race evolution path for Tanuki.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tanuki",
      "raceId": 51,
      "previousJobId": 10400,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_tanuki_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10402_tanuki_sovereign",
    "excelId": 10402,
    "name": "Tanuki Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10401_elder_tanuki",
    "description": "Excel-imported rare race evolution path for Tanuki.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tanuki",
      "raceId": 51,
      "previousJobId": 10401,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_tanuki_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10403_origin_tanuki",
    "excelId": 10403,
    "name": "Origin Tanuki",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10402_tanuki_sovereign",
    "description": "Excel-imported hidden race evolution path for Tanuki.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tanuki",
      "raceId": 51,
      "previousJobId": 10402,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_tanuki_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10404_tanuki_bloodline",
    "excelId": 10404,
    "name": "Tanuki Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_051_tanuki",
    "description": "Excel-imported advanced race evolution path for Tanuki.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tanuki",
      "raceId": 51,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_tanuki_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10405_mythic_tanuki",
    "excelId": 10405,
    "name": "Mythic Tanuki",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10404_tanuki_bloodline",
    "description": "Excel-imported specialist race evolution path for Tanuki.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tanuki",
      "raceId": 51,
      "previousJobId": 10404,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_tanuki_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10406_ancient_tanuki_avatar",
    "excelId": 10406,
    "name": "Ancient Tanuki Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10405_mythic_tanuki",
    "description": "Excel-imported rare race evolution path for Tanuki.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tanuki",
      "raceId": 51,
      "previousJobId": 10405,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_tanuki_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10407_world_born_tanuki",
    "excelId": 10407,
    "name": "World-Born Tanuki",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10406_ancient_tanuki_avatar",
    "description": "Excel-imported hidden race evolution path for Tanuki.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tanuki",
      "raceId": 51,
      "previousJobId": 10406,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_tanuki_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10408_awakened_tengu",
    "excelId": 10408,
    "name": "Awakened Tengu",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_052_tengu",
    "description": "Excel-imported advanced race evolution path for Tengu.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 3,
      "wis": 1,
      "con": -1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tengu",
      "raceId": 52,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_tengu_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10409_elder_tengu",
    "excelId": 10409,
    "name": "Elder Tengu",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10408_awakened_tengu",
    "description": "Excel-imported specialist race evolution path for Tengu.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 4,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tengu",
      "raceId": 52,
      "previousJobId": 10408,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_tengu_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10410_tengu_sovereign",
    "excelId": 10410,
    "name": "Tengu Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10409_elder_tengu",
    "description": "Excel-imported rare race evolution path for Tengu.",
    "stats": {
      "str": 0,
      "dex": 7,
      "int": 5,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 3,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tengu",
      "raceId": 52,
      "previousJobId": 10409,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_tengu_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10411_origin_tengu",
    "excelId": 10411,
    "name": "Origin Tengu",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10410_tengu_sovereign",
    "description": "Excel-imported hidden race evolution path for Tengu.",
    "stats": {
      "str": 0,
      "dex": 9,
      "int": 6,
      "wis": 3,
      "con": -3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 4,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tengu",
      "raceId": 52,
      "previousJobId": 10410,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_tengu_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10412_tengu_bloodline",
    "excelId": 10412,
    "name": "Tengu Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_052_tengu",
    "description": "Excel-imported advanced race evolution path for Tengu.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 3,
      "wis": 1,
      "con": -1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tengu",
      "raceId": 52,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_tengu_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10413_mythic_tengu",
    "excelId": 10413,
    "name": "Mythic Tengu",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10412_tengu_bloodline",
    "description": "Excel-imported specialist race evolution path for Tengu.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 4,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tengu",
      "raceId": 52,
      "previousJobId": 10412,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_tengu_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10414_ancient_tengu_avatar",
    "excelId": 10414,
    "name": "Ancient Tengu Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10413_mythic_tengu",
    "description": "Excel-imported rare race evolution path for Tengu.",
    "stats": {
      "str": 0,
      "dex": 7,
      "int": 5,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 3,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tengu",
      "raceId": 52,
      "previousJobId": 10413,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_tengu_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10415_world_born_tengu",
    "excelId": 10415,
    "name": "World-Born Tengu",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10414_ancient_tengu_avatar",
    "description": "Excel-imported hidden race evolution path for Tengu.",
    "stats": {
      "str": 0,
      "dex": 9,
      "int": 6,
      "wis": 3,
      "con": -3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 4,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tengu",
      "raceId": 52,
      "previousJobId": 10414,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_tengu_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10416_awakened_kappa",
    "excelId": 10416,
    "name": "Awakened Kappa",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_053_kappa",
    "description": "Excel-imported advanced race evolution path for Kappa.",
    "stats": {
      "str": 0,
      "dex": 3,
      "int": 0,
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kappa",
      "raceId": 53,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_kappa_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10417_elder_kappa",
    "excelId": 10417,
    "name": "Elder Kappa",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10416_awakened_kappa",
    "description": "Excel-imported specialist race evolution path for Kappa.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 0,
      "wis": 4,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kappa",
      "raceId": 53,
      "previousJobId": 10416,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_kappa_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10418_kappa_sovereign",
    "excelId": 10418,
    "name": "Kappa Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10417_elder_kappa",
    "description": "Excel-imported rare race evolution path for Kappa.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kappa",
      "raceId": 53,
      "previousJobId": 10417,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_kappa_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10419_origin_kappa",
    "excelId": 10419,
    "name": "Origin Kappa",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10418_kappa_sovereign",
    "description": "Excel-imported hidden race evolution path for Kappa.",
    "stats": {
      "str": 0,
      "dex": 6,
      "int": 0,
      "wis": 6,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kappa",
      "raceId": 53,
      "previousJobId": 10418,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_kappa_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10420_kappa_bloodline",
    "excelId": 10420,
    "name": "Kappa Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_053_kappa",
    "description": "Excel-imported advanced race evolution path for Kappa.",
    "stats": {
      "str": 0,
      "dex": 3,
      "int": 0,
      "wis": 3,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kappa",
      "raceId": 53,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_kappa_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10421_mythic_kappa",
    "excelId": 10421,
    "name": "Mythic Kappa",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10420_kappa_bloodline",
    "description": "Excel-imported specialist race evolution path for Kappa.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 0,
      "wis": 4,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 1,
      "wis": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kappa",
      "raceId": 53,
      "previousJobId": 10420,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_kappa_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10422_ancient_kappa_avatar",
    "excelId": 10422,
    "name": "Ancient Kappa Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10421_mythic_kappa",
    "description": "Excel-imported rare race evolution path for Kappa.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kappa",
      "raceId": 53,
      "previousJobId": 10421,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_kappa_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10423_world_born_kappa",
    "excelId": 10423,
    "name": "World-Born Kappa",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10422_ancient_kappa_avatar",
    "description": "Excel-imported hidden race evolution path for Kappa.",
    "stats": {
      "str": 0,
      "dex": 6,
      "int": 0,
      "wis": 6,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 2,
      "wis": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kappa",
      "raceId": 53,
      "previousJobId": 10422,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_kappa_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10424_awakened_yuki_onna",
    "excelId": 10424,
    "name": "Awakened Yuki-Onna",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_054_yuki_onna",
    "description": "Excel-imported advanced race evolution path for Yuki-Onna.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yuki-Onna",
      "raceId": 54,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_yuki_onna_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10425_elder_yuki_onna",
    "excelId": 10425,
    "name": "Elder Yuki-Onna",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10424_awakened_yuki_onna",
    "description": "Excel-imported specialist race evolution path for Yuki-Onna.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yuki-Onna",
      "raceId": 54,
      "previousJobId": 10424,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_yuki_onna_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10426_yuki_onna_sovereign",
    "excelId": 10426,
    "name": "Yuki-Onna Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10425_elder_yuki_onna",
    "description": "Excel-imported rare race evolution path for Yuki-Onna.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yuki-Onna",
      "raceId": 54,
      "previousJobId": 10425,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_yuki_onna_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10427_origin_yuki_onna",
    "excelId": 10427,
    "name": "Origin Yuki-Onna",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10426_yuki_onna_sovereign",
    "description": "Excel-imported hidden race evolution path for Yuki-Onna.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yuki-Onna",
      "raceId": 54,
      "previousJobId": 10426,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_yuki_onna_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10428_yuki_onna_bloodline",
    "excelId": 10428,
    "name": "Yuki-Onna Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_054_yuki_onna",
    "description": "Excel-imported advanced race evolution path for Yuki-Onna.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yuki-Onna",
      "raceId": 54,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_yuki_onna_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10429_mythic_yuki_onna",
    "excelId": 10429,
    "name": "Mythic Yuki-Onna",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10428_yuki_onna_bloodline",
    "description": "Excel-imported specialist race evolution path for Yuki-Onna.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yuki-Onna",
      "raceId": 54,
      "previousJobId": 10428,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_yuki_onna_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10430_ancient_yuki_onna_avatar",
    "excelId": 10430,
    "name": "Ancient Yuki-Onna Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10429_mythic_yuki_onna",
    "description": "Excel-imported rare race evolution path for Yuki-Onna.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yuki-Onna",
      "raceId": 54,
      "previousJobId": 10429,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_yuki_onna_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10431_world_born_yuki_onna",
    "excelId": 10431,
    "name": "World-Born Yuki-Onna",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10430_ancient_yuki_onna_avatar",
    "description": "Excel-imported hidden race evolution path for Yuki-Onna.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yuki-Onna",
      "raceId": 54,
      "previousJobId": 10430,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_yuki_onna_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10432_awakened_nekomata_bakeneko",
    "excelId": 10432,
    "name": "Awakened Nekomata / Bakeneko",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_055_nekomata_bakeneko",
    "description": "Excel-imported advanced race evolution path for Nekomata / Bakeneko.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Nekomata / Bakeneko",
      "raceId": 55,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_nekomata_bakeneko_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10433_elder_nekomata_bakeneko",
    "excelId": 10433,
    "name": "Elder Nekomata / Bakeneko",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10432_awakened_nekomata_bakeneko",
    "description": "Excel-imported specialist race evolution path for Nekomata / Bakeneko.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Nekomata / Bakeneko",
      "raceId": 55,
      "previousJobId": 10432,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_nekomata_bakeneko_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10434_nekomata_bakeneko_sovereign",
    "excelId": 10434,
    "name": "Nekomata / Bakeneko Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10433_elder_nekomata_bakeneko",
    "description": "Excel-imported rare race evolution path for Nekomata / Bakeneko.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Nekomata / Bakeneko",
      "raceId": 55,
      "previousJobId": 10433,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_nekomata_bakeneko_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10435_origin_nekomata_bakeneko",
    "excelId": 10435,
    "name": "Origin Nekomata / Bakeneko",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10434_nekomata_bakeneko_sovereign",
    "description": "Excel-imported hidden race evolution path for Nekomata / Bakeneko.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Nekomata / Bakeneko",
      "raceId": 55,
      "previousJobId": 10434,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_nekomata_bakeneko_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10436_nekomata_bakeneko_bloodline",
    "excelId": 10436,
    "name": "Nekomata / Bakeneko Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_055_nekomata_bakeneko",
    "description": "Excel-imported advanced race evolution path for Nekomata / Bakeneko.",
    "stats": {
      "str": 3,
      "dex": 4,
      "int": -1,
      "wis": 1,
      "con": 1,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Nekomata / Bakeneko",
      "raceId": 55,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_nekomata_bakeneko_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10437_mythic_nekomata_bakeneko",
    "excelId": 10437,
    "name": "Mythic Nekomata / Bakeneko",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10436_nekomata_bakeneko_bloodline",
    "description": "Excel-imported specialist race evolution path for Nekomata / Bakeneko.",
    "stats": {
      "str": 4,
      "dex": 5,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 1,
      "dex": 2,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Nekomata / Bakeneko",
      "raceId": 55,
      "previousJobId": 10436,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_nekomata_bakeneko_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10438_ancient_nekomata_bakeneko_avatar",
    "excelId": 10438,
    "name": "Ancient Nekomata / Bakeneko Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10437_mythic_nekomata_bakeneko",
    "description": "Excel-imported rare race evolution path for Nekomata / Bakeneko.",
    "stats": {
      "str": 5,
      "dex": 7,
      "int": -2,
      "wis": 2,
      "con": 2,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 3,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Nekomata / Bakeneko",
      "raceId": 55,
      "previousJobId": 10437,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_nekomata_bakeneko_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10439_world_born_nekomata_bakeneko",
    "excelId": 10439,
    "name": "World-Born Nekomata / Bakeneko",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10438_ancient_nekomata_bakeneko_avatar",
    "description": "Excel-imported hidden race evolution path for Nekomata / Bakeneko.",
    "stats": {
      "str": 6,
      "dex": 9,
      "int": -3,
      "wis": 3,
      "con": 3,
      "cha": 0
    },
    "levelGrowth": {
      "str": 2,
      "dex": 4,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Nekomata / Bakeneko",
      "raceId": 55,
      "previousJobId": 10438,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_nekomata_bakeneko_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10440_awakened_tsukumogami",
    "excelId": 10440,
    "name": "Awakened Tsukumogami",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_056_tsukumogami",
    "description": "Excel-imported advanced race evolution path for Tsukumogami.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tsukumogami",
      "raceId": 56,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_tsukumogami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10441_elder_tsukumogami",
    "excelId": 10441,
    "name": "Elder Tsukumogami",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10440_awakened_tsukumogami",
    "description": "Excel-imported specialist race evolution path for Tsukumogami.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tsukumogami",
      "raceId": 56,
      "previousJobId": 10440,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_tsukumogami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10442_tsukumogami_sovereign",
    "excelId": 10442,
    "name": "Tsukumogami Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10441_elder_tsukumogami",
    "description": "Excel-imported rare race evolution path for Tsukumogami.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tsukumogami",
      "raceId": 56,
      "previousJobId": 10441,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_tsukumogami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10443_origin_tsukumogami",
    "excelId": 10443,
    "name": "Origin Tsukumogami",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10442_tsukumogami_sovereign",
    "description": "Excel-imported hidden race evolution path for Tsukumogami.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tsukumogami",
      "raceId": 56,
      "previousJobId": 10442,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_tsukumogami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10444_tsukumogami_bloodline",
    "excelId": 10444,
    "name": "Tsukumogami Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_056_tsukumogami",
    "description": "Excel-imported advanced race evolution path for Tsukumogami.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tsukumogami",
      "raceId": 56,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_tsukumogami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10445_mythic_tsukumogami",
    "excelId": 10445,
    "name": "Mythic Tsukumogami",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10444_tsukumogami_bloodline",
    "description": "Excel-imported specialist race evolution path for Tsukumogami.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tsukumogami",
      "raceId": 56,
      "previousJobId": 10444,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_tsukumogami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10446_ancient_tsukumogami_avatar",
    "excelId": 10446,
    "name": "Ancient Tsukumogami Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10445_mythic_tsukumogami",
    "description": "Excel-imported rare race evolution path for Tsukumogami.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tsukumogami",
      "raceId": 56,
      "previousJobId": 10445,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_tsukumogami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10447_world_born_tsukumogami",
    "excelId": 10447,
    "name": "World-Born Tsukumogami",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10446_ancient_tsukumogami_avatar",
    "description": "Excel-imported hidden race evolution path for Tsukumogami.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Tsukumogami",
      "raceId": 56,
      "previousJobId": 10446,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_tsukumogami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10448_awakened_shikigami",
    "excelId": 10448,
    "name": "Awakened Shikigami",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_057_shikigami",
    "description": "Excel-imported advanced race evolution path for Shikigami.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Shikigami",
      "raceId": 57,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_shikigami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10449_elder_shikigami",
    "excelId": 10449,
    "name": "Elder Shikigami",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10448_awakened_shikigami",
    "description": "Excel-imported specialist race evolution path for Shikigami.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Shikigami",
      "raceId": 57,
      "previousJobId": 10448,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_shikigami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10450_shikigami_sovereign",
    "excelId": 10450,
    "name": "Shikigami Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10449_elder_shikigami",
    "description": "Excel-imported rare race evolution path for Shikigami.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Shikigami",
      "raceId": 57,
      "previousJobId": 10449,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_shikigami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10451_origin_shikigami",
    "excelId": 10451,
    "name": "Origin Shikigami",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10450_shikigami_sovereign",
    "description": "Excel-imported hidden race evolution path for Shikigami.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Shikigami",
      "raceId": 57,
      "previousJobId": 10450,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_shikigami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10452_shikigami_bloodline",
    "excelId": 10452,
    "name": "Shikigami Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_057_shikigami",
    "description": "Excel-imported advanced race evolution path for Shikigami.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Shikigami",
      "raceId": 57,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_shikigami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10453_mythic_shikigami",
    "excelId": 10453,
    "name": "Mythic Shikigami",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10452_shikigami_bloodline",
    "description": "Excel-imported specialist race evolution path for Shikigami.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Shikigami",
      "raceId": 57,
      "previousJobId": 10452,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_shikigami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10454_ancient_shikigami_avatar",
    "excelId": 10454,
    "name": "Ancient Shikigami Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10453_mythic_shikigami",
    "description": "Excel-imported rare race evolution path for Shikigami.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Shikigami",
      "raceId": 57,
      "previousJobId": 10453,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_shikigami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10455_world_born_shikigami",
    "excelId": 10455,
    "name": "World-Born Shikigami",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10454_ancient_shikigami_avatar",
    "description": "Excel-imported hidden race evolution path for Shikigami.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Shikigami",
      "raceId": 57,
      "previousJobId": 10454,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_shikigami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10456_awakened_kami",
    "excelId": 10456,
    "name": "Awakened Kami",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_058_kami",
    "description": "Excel-imported advanced race evolution path for Kami.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 4,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kami",
      "raceId": 58,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_kami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10457_elder_kami",
    "excelId": 10457,
    "name": "Elder Kami",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10456_awakened_kami",
    "description": "Excel-imported specialist race evolution path for Kami.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 4
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kami",
      "raceId": 58,
      "previousJobId": 10456,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_kami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10458_kami_sovereign",
    "excelId": 10458,
    "name": "Kami Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10457_elder_kami",
    "description": "Excel-imported rare race evolution path for Kami.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 7,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "wis": 3,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kami",
      "raceId": 58,
      "previousJobId": 10457,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_kami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10459_origin_kami",
    "excelId": 10459,
    "name": "Origin Kami",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10458_kami_sovereign",
    "description": "Excel-imported hidden race evolution path for Kami.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 9,
      "con": 3,
      "cha": 6
    },
    "levelGrowth": {
      "wis": 4,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kami",
      "raceId": 58,
      "previousJobId": 10458,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_kami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10460_kami_bloodline",
    "excelId": 10460,
    "name": "Kami Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_058_kami",
    "description": "Excel-imported advanced race evolution path for Kami.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 4,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kami",
      "raceId": 58,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_kami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10461_mythic_kami",
    "excelId": 10461,
    "name": "Mythic Kami",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10460_kami_bloodline",
    "description": "Excel-imported specialist race evolution path for Kami.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 4
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kami",
      "raceId": 58,
      "previousJobId": 10460,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_kami_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10462_ancient_kami_avatar",
    "excelId": 10462,
    "name": "Ancient Kami Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10461_mythic_kami",
    "description": "Excel-imported rare race evolution path for Kami.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 7,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "wis": 3,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kami",
      "raceId": 58,
      "previousJobId": 10461,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_kami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10463_world_born_kami",
    "excelId": 10463,
    "name": "World-Born Kami",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10462_ancient_kami_avatar",
    "description": "Excel-imported hidden race evolution path for Kami.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 9,
      "con": 3,
      "cha": 6
    },
    "levelGrowth": {
      "wis": 4,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Kami",
      "raceId": 58,
      "previousJobId": 10462,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_kami_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10464_awakened_ayakashi",
    "excelId": 10464,
    "name": "Awakened Ayakashi",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_059_ayakashi",
    "description": "Excel-imported advanced race evolution path for Ayakashi.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 3,
      "wis": -1,
      "con": 1,
      "cha": 4
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ayakashi",
      "raceId": 59,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_ayakashi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10465_elder_ayakashi",
    "excelId": 10465,
    "name": "Elder Ayakashi",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10464_awakened_ayakashi",
    "description": "Excel-imported specialist race evolution path for Ayakashi.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 4,
      "wis": -2,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ayakashi",
      "raceId": 59,
      "previousJobId": 10464,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_ayakashi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10466_ayakashi_sovereign",
    "excelId": 10466,
    "name": "Ayakashi Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10465_elder_ayakashi",
    "description": "Excel-imported rare race evolution path for Ayakashi.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 5,
      "wis": -2,
      "con": 2,
      "cha": 7
    },
    "levelGrowth": {
      "int": 2,
      "cha": 3,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ayakashi",
      "raceId": 59,
      "previousJobId": 10465,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_ayakashi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10467_origin_ayakashi",
    "excelId": 10467,
    "name": "Origin Ayakashi",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10466_ayakashi_sovereign",
    "description": "Excel-imported hidden race evolution path for Ayakashi.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 6,
      "wis": -3,
      "con": 3,
      "cha": 9
    },
    "levelGrowth": {
      "int": 2,
      "cha": 4,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ayakashi",
      "raceId": 59,
      "previousJobId": 10466,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_ayakashi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10468_ayakashi_bloodline",
    "excelId": 10468,
    "name": "Ayakashi Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_059_ayakashi",
    "description": "Excel-imported advanced race evolution path for Ayakashi.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 3,
      "wis": -1,
      "con": 1,
      "cha": 4
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ayakashi",
      "raceId": 59,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_ayakashi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10469_mythic_ayakashi",
    "excelId": 10469,
    "name": "Mythic Ayakashi",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10468_ayakashi_bloodline",
    "description": "Excel-imported specialist race evolution path for Ayakashi.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 4,
      "wis": -2,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ayakashi",
      "raceId": 59,
      "previousJobId": 10468,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_ayakashi_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10470_ancient_ayakashi_avatar",
    "excelId": 10470,
    "name": "Ancient Ayakashi Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10469_mythic_ayakashi",
    "description": "Excel-imported rare race evolution path for Ayakashi.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 5,
      "wis": -2,
      "con": 2,
      "cha": 7
    },
    "levelGrowth": {
      "int": 2,
      "cha": 3,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ayakashi",
      "raceId": 59,
      "previousJobId": 10469,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_ayakashi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10471_world_born_ayakashi",
    "excelId": 10471,
    "name": "World-Born Ayakashi",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10470_ancient_ayakashi_avatar",
    "description": "Excel-imported hidden race evolution path for Ayakashi.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 6,
      "wis": -3,
      "con": 3,
      "cha": 9
    },
    "levelGrowth": {
      "int": 2,
      "cha": 4,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Ayakashi",
      "raceId": 59,
      "previousJobId": 10470,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_ayakashi_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10472_awakened_dragon",
    "excelId": 10472,
    "name": "Awakened Dragon",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_060_dragons",
    "description": "Excel-imported advanced race evolution path for Dragons.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragons",
      "raceId": 60,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_dragons_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10473_elder_dragon",
    "excelId": 10473,
    "name": "Elder Dragon",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10472_awakened_dragon",
    "description": "Excel-imported specialist race evolution path for Dragons.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragons",
      "raceId": 60,
      "previousJobId": 10472,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_dragons_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10474_dragon_sovereign",
    "excelId": 10474,
    "name": "Dragon Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10473_elder_dragon",
    "description": "Excel-imported rare race evolution path for Dragons.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragons",
      "raceId": 60,
      "previousJobId": 10473,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_dragons_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10475_origin_dragon",
    "excelId": 10475,
    "name": "Origin Dragon",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10474_dragon_sovereign",
    "description": "Excel-imported hidden race evolution path for Dragons.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragons",
      "raceId": 60,
      "previousJobId": 10474,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_dragons_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10476_dragon_bloodline",
    "excelId": 10476,
    "name": "Dragon Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_060_dragons",
    "description": "Excel-imported advanced race evolution path for Dragons.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragons",
      "raceId": 60,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_dragons_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10477_mythic_dragon",
    "excelId": 10477,
    "name": "Mythic Dragon",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10476_dragon_bloodline",
    "description": "Excel-imported specialist race evolution path for Dragons.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragons",
      "raceId": 60,
      "previousJobId": 10476,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_dragons_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10478_ancient_dragon_avatar",
    "excelId": 10478,
    "name": "Ancient Dragon Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10477_mythic_dragon",
    "description": "Excel-imported rare race evolution path for Dragons.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragons",
      "raceId": 60,
      "previousJobId": 10477,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_dragons_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10479_world_born_dragon",
    "excelId": 10479,
    "name": "World-Born Dragon",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10478_ancient_dragon_avatar",
    "description": "Excel-imported hidden race evolution path for Dragons.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragons",
      "raceId": 60,
      "previousJobId": 10478,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_dragons_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10480_awakened_dragonkin",
    "excelId": 10480,
    "name": "Awakened Dragonkin",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_061_dragonkin",
    "description": "Excel-imported advanced race evolution path for Dragonkin.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonkin",
      "raceId": 61,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_dragonkin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10481_elder_dragonkin",
    "excelId": 10481,
    "name": "Elder Dragonkin",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10480_awakened_dragonkin",
    "description": "Excel-imported specialist race evolution path for Dragonkin.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonkin",
      "raceId": 61,
      "previousJobId": 10480,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_dragonkin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10482_dragonkin_sovereign",
    "excelId": 10482,
    "name": "Dragonkin Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10481_elder_dragonkin",
    "description": "Excel-imported rare race evolution path for Dragonkin.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonkin",
      "raceId": 61,
      "previousJobId": 10481,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_dragonkin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10483_origin_dragonkin",
    "excelId": 10483,
    "name": "Origin Dragonkin",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10482_dragonkin_sovereign",
    "description": "Excel-imported hidden race evolution path for Dragonkin.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonkin",
      "raceId": 61,
      "previousJobId": 10482,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_dragonkin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10484_dragonkin_bloodline",
    "excelId": 10484,
    "name": "Dragonkin Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_061_dragonkin",
    "description": "Excel-imported advanced race evolution path for Dragonkin.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonkin",
      "raceId": 61,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_dragonkin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10485_mythic_dragonkin",
    "excelId": 10485,
    "name": "Mythic Dragonkin",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10484_dragonkin_bloodline",
    "description": "Excel-imported specialist race evolution path for Dragonkin.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonkin",
      "raceId": 61,
      "previousJobId": 10484,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_dragonkin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "v50_fire_1"
      },
      {
        "level": 10,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10486_ancient_dragonkin_avatar",
    "excelId": 10486,
    "name": "Ancient Dragonkin Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10485_mythic_dragonkin",
    "description": "Excel-imported rare race evolution path for Dragonkin.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonkin",
      "raceId": 61,
      "previousJobId": 10485,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_dragonkin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10487_world_born_dragonkin",
    "excelId": 10487,
    "name": "World-Born Dragonkin",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10486_ancient_dragonkin_avatar",
    "description": "Excel-imported hidden race evolution path for Dragonkin.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Dragonkin",
      "raceId": 61,
      "previousJobId": 10486,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_dragonkin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "v50_fire_1"
      },
      {
        "level": 5,
        "skillId": "v50_fire_2"
      }
    ]
  },
  {
    "id": "race_path_10488_awakened_celestial",
    "excelId": 10488,
    "name": "Awakened Celestial",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "celestian",
    "description": "Excel-imported advanced race evolution path for Celestials.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 4,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Celestials",
      "raceId": 62,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_celestials_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      },
      {
        "level": 10,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10489_elder_celestial",
    "excelId": 10489,
    "name": "Elder Celestial",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10488_awakened_celestial",
    "description": "Excel-imported specialist race evolution path for Celestials.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 4
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Celestials",
      "raceId": 62,
      "previousJobId": 10488,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_celestials_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      },
      {
        "level": 10,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10490_celestial_sovereign",
    "excelId": 10490,
    "name": "Celestial Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10489_elder_celestial",
    "description": "Excel-imported rare race evolution path for Celestials.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 7,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "wis": 3,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Celestials",
      "raceId": 62,
      "previousJobId": 10489,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_celestials_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      },
      {
        "level": 5,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10491_origin_celestial",
    "excelId": 10491,
    "name": "Origin Celestial",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10490_celestial_sovereign",
    "description": "Excel-imported hidden race evolution path for Celestials.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 9,
      "con": 3,
      "cha": 6
    },
    "levelGrowth": {
      "wis": 4,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Celestials",
      "raceId": 62,
      "previousJobId": 10490,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_celestials_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      },
      {
        "level": 5,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10492_celestial_bloodline",
    "excelId": 10492,
    "name": "Celestial Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "celestian",
    "description": "Excel-imported advanced race evolution path for Celestials.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 4,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Celestials",
      "raceId": 62,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_celestials_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      },
      {
        "level": 10,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10493_mythic_celestial",
    "excelId": 10493,
    "name": "Mythic Celestial",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10492_celestial_bloodline",
    "description": "Excel-imported specialist race evolution path for Celestials.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 4
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Celestials",
      "raceId": 62,
      "previousJobId": 10492,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_celestials_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "v50_holy_2"
      },
      {
        "level": 10,
        "skillId": "v50_holy_3"
      },
      {
        "level": 10,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10494_ancient_celestial_avatar",
    "excelId": 10494,
    "name": "Ancient Celestial Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10493_mythic_celestial",
    "description": "Excel-imported rare race evolution path for Celestials.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 7,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "wis": 3,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Celestials",
      "raceId": 62,
      "previousJobId": 10493,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_celestials_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      },
      {
        "level": 5,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10495_world_born_celestial",
    "excelId": 10495,
    "name": "World-Born Celestial",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10494_ancient_celestial_avatar",
    "description": "Excel-imported hidden race evolution path for Celestials.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 9,
      "con": 3,
      "cha": 6
    },
    "levelGrowth": {
      "wis": 4,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "v50_holy_1"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Celestials",
      "raceId": 62,
      "previousJobId": 10494,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_celestials_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "v50_holy_2"
      },
      {
        "level": 5,
        "skillId": "v50_holy_3"
      },
      {
        "level": 5,
        "skillId": "v50_holy_4"
      }
    ]
  },
  {
    "id": "race_path_10496_awakened_immortal",
    "excelId": 10496,
    "name": "Awakened Immortal",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_063_immortals",
    "description": "Excel-imported advanced race evolution path for Immortals.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 4,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Immortals",
      "raceId": 63,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_immortals_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10497_elder_immortal",
    "excelId": 10497,
    "name": "Elder Immortal",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10496_awakened_immortal",
    "description": "Excel-imported specialist race evolution path for Immortals.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 4
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Immortals",
      "raceId": 63,
      "previousJobId": 10496,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_immortals_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10498_immortal_sovereign",
    "excelId": 10498,
    "name": "Immortal Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10497_elder_immortal",
    "description": "Excel-imported rare race evolution path for Immortals.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 7,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "wis": 3,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Immortals",
      "raceId": 63,
      "previousJobId": 10497,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_immortals_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10499_origin_immortal",
    "excelId": 10499,
    "name": "Origin Immortal",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10498_immortal_sovereign",
    "description": "Excel-imported hidden race evolution path for Immortals.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 9,
      "con": 3,
      "cha": 6
    },
    "levelGrowth": {
      "wis": 4,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Immortals",
      "raceId": 63,
      "previousJobId": 10498,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_immortals_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10500_immortal_bloodline",
    "excelId": 10500,
    "name": "Immortal Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_063_immortals",
    "description": "Excel-imported advanced race evolution path for Immortals.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 4,
      "con": 1,
      "cha": 3
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Immortals",
      "raceId": 63,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_immortals_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10501_mythic_immortal",
    "excelId": 10501,
    "name": "Mythic Immortal",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10500_immortal_bloodline",
    "description": "Excel-imported specialist race evolution path for Immortals.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 5,
      "con": 2,
      "cha": 4
    },
    "levelGrowth": {
      "wis": 2,
      "cha": 1,
      "con": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Immortals",
      "raceId": 63,
      "previousJobId": 10500,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_immortals_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10502_ancient_immortal_avatar",
    "excelId": 10502,
    "name": "Ancient Immortal Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10501_mythic_immortal",
    "description": "Excel-imported rare race evolution path for Immortals.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 7,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "wis": 3,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Immortals",
      "raceId": 63,
      "previousJobId": 10501,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_immortals_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10503_world_born_immortal",
    "excelId": 10503,
    "name": "World-Born Immortal",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10502_ancient_immortal_avatar",
    "description": "Excel-imported hidden race evolution path for Immortals.",
    "stats": {
      "str": 0,
      "dex": 0,
      "int": 0,
      "wis": 9,
      "con": 3,
      "cha": 6
    },
    "levelGrowth": {
      "wis": 4,
      "cha": 2,
      "con": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Immortals",
      "raceId": 63,
      "previousJobId": 10502,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_immortals_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10504_awakened_asura",
    "excelId": 10504,
    "name": "Awakened Asura",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_064_asura",
    "description": "Excel-imported advanced race evolution path for Asura.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 3,
      "wis": -1,
      "con": 1,
      "cha": 4
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Asura",
      "raceId": 64,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_asura_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10505_elder_asura",
    "excelId": 10505,
    "name": "Elder Asura",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10504_awakened_asura",
    "description": "Excel-imported specialist race evolution path for Asura.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 4,
      "wis": -2,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Asura",
      "raceId": 64,
      "previousJobId": 10504,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_asura_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10506_asura_sovereign",
    "excelId": 10506,
    "name": "Asura Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10505_elder_asura",
    "description": "Excel-imported rare race evolution path for Asura.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 5,
      "wis": -2,
      "con": 2,
      "cha": 7
    },
    "levelGrowth": {
      "int": 2,
      "cha": 3,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Asura",
      "raceId": 64,
      "previousJobId": 10505,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_asura_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10507_origin_asura",
    "excelId": 10507,
    "name": "Origin Asura",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10506_asura_sovereign",
    "description": "Excel-imported hidden race evolution path for Asura.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 6,
      "wis": -3,
      "con": 3,
      "cha": 9
    },
    "levelGrowth": {
      "int": 2,
      "cha": 4,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Asura",
      "raceId": 64,
      "previousJobId": 10506,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_asura_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10508_asura_bloodline",
    "excelId": 10508,
    "name": "Asura Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_064_asura",
    "description": "Excel-imported advanced race evolution path for Asura.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 3,
      "wis": -1,
      "con": 1,
      "cha": 4
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Asura",
      "raceId": 64,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_asura_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10509_mythic_asura",
    "excelId": 10509,
    "name": "Mythic Asura",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10508_asura_bloodline",
    "description": "Excel-imported specialist race evolution path for Asura.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 4,
      "wis": -2,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Asura",
      "raceId": 64,
      "previousJobId": 10508,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_asura_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10510_ancient_asura_avatar",
    "excelId": 10510,
    "name": "Ancient Asura Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10509_mythic_asura",
    "description": "Excel-imported rare race evolution path for Asura.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 5,
      "wis": -2,
      "con": 2,
      "cha": 7
    },
    "levelGrowth": {
      "int": 2,
      "cha": 3,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Asura",
      "raceId": 64,
      "previousJobId": 10509,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_asura_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10511_world_born_asura",
    "excelId": 10511,
    "name": "World-Born Asura",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10510_ancient_asura_avatar",
    "description": "Excel-imported hidden race evolution path for Asura.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 6,
      "wis": -3,
      "con": 3,
      "cha": 9
    },
    "levelGrowth": {
      "int": 2,
      "cha": 4,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Asura",
      "raceId": 64,
      "previousJobId": 10510,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_asura_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10512_awakened_rakshasa",
    "excelId": 10512,
    "name": "Awakened Rakshasa",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_065_rakshasa",
    "description": "Excel-imported advanced race evolution path for Rakshasa.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 3,
      "wis": -1,
      "con": 1,
      "cha": 4
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rakshasa",
      "raceId": 65,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_rakshasa_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10513_elder_rakshasa",
    "excelId": 10513,
    "name": "Elder Rakshasa",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10512_awakened_rakshasa",
    "description": "Excel-imported specialist race evolution path for Rakshasa.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 4,
      "wis": -2,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rakshasa",
      "raceId": 65,
      "previousJobId": 10512,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_rakshasa_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10514_rakshasa_sovereign",
    "excelId": 10514,
    "name": "Rakshasa Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10513_elder_rakshasa",
    "description": "Excel-imported rare race evolution path for Rakshasa.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 5,
      "wis": -2,
      "con": 2,
      "cha": 7
    },
    "levelGrowth": {
      "int": 2,
      "cha": 3,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rakshasa",
      "raceId": 65,
      "previousJobId": 10513,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_rakshasa_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10515_origin_rakshasa",
    "excelId": 10515,
    "name": "Origin Rakshasa",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10514_rakshasa_sovereign",
    "description": "Excel-imported hidden race evolution path for Rakshasa.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 6,
      "wis": -3,
      "con": 3,
      "cha": 9
    },
    "levelGrowth": {
      "int": 2,
      "cha": 4,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rakshasa",
      "raceId": 65,
      "previousJobId": 10514,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_rakshasa_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10516_rakshasa_bloodline",
    "excelId": 10516,
    "name": "Rakshasa Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_065_rakshasa",
    "description": "Excel-imported advanced race evolution path for Rakshasa.",
    "stats": {
      "str": 1,
      "dex": 0,
      "int": 3,
      "wis": -1,
      "con": 1,
      "cha": 4
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rakshasa",
      "raceId": 65,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_rakshasa_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10517_mythic_rakshasa",
    "excelId": 10517,
    "name": "Mythic Rakshasa",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10516_rakshasa_bloodline",
    "description": "Excel-imported specialist race evolution path for Rakshasa.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 4,
      "wis": -2,
      "con": 2,
      "cha": 5
    },
    "levelGrowth": {
      "int": 1,
      "cha": 2,
      "str": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rakshasa",
      "raceId": 65,
      "previousJobId": 10516,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_rakshasa_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10518_ancient_rakshasa_avatar",
    "excelId": 10518,
    "name": "Ancient Rakshasa Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10517_mythic_rakshasa",
    "description": "Excel-imported rare race evolution path for Rakshasa.",
    "stats": {
      "str": 2,
      "dex": 0,
      "int": 5,
      "wis": -2,
      "con": 2,
      "cha": 7
    },
    "levelGrowth": {
      "int": 2,
      "cha": 3,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rakshasa",
      "raceId": 65,
      "previousJobId": 10517,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_rakshasa_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10519_world_born_rakshasa",
    "excelId": 10519,
    "name": "World-Born Rakshasa",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10518_ancient_rakshasa_avatar",
    "description": "Excel-imported hidden race evolution path for Rakshasa.",
    "stats": {
      "str": 3,
      "dex": 0,
      "int": 6,
      "wis": -3,
      "con": 3,
      "cha": 9
    },
    "levelGrowth": {
      "int": 2,
      "cha": 4,
      "str": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Rakshasa",
      "raceId": 65,
      "previousJobId": 10518,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_rakshasa_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10520_awakened_naga",
    "excelId": 10520,
    "name": "Awakened Naga",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_066_naga",
    "description": "Excel-imported advanced race evolution path for Naga.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Naga",
      "raceId": 66,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_naga_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10521_elder_naga",
    "excelId": 10521,
    "name": "Elder Naga",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10520_awakened_naga",
    "description": "Excel-imported specialist race evolution path for Naga.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Naga",
      "raceId": 66,
      "previousJobId": 10520,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_naga_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10522_naga_sovereign",
    "excelId": 10522,
    "name": "Naga Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10521_elder_naga",
    "description": "Excel-imported rare race evolution path for Naga.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Naga",
      "raceId": 66,
      "previousJobId": 10521,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_naga_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10523_origin_naga",
    "excelId": 10523,
    "name": "Origin Naga",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10522_naga_sovereign",
    "description": "Excel-imported hidden race evolution path for Naga.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Naga",
      "raceId": 66,
      "previousJobId": 10522,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_naga_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10524_naga_bloodline",
    "excelId": 10524,
    "name": "Naga Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_066_naga",
    "description": "Excel-imported advanced race evolution path for Naga.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Naga",
      "raceId": 66,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_naga_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10525_mythic_naga",
    "excelId": 10525,
    "name": "Mythic Naga",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10524_naga_bloodline",
    "description": "Excel-imported specialist race evolution path for Naga.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Naga",
      "raceId": 66,
      "previousJobId": 10524,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_naga_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10526_ancient_naga_avatar",
    "excelId": 10526,
    "name": "Ancient Naga Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10525_mythic_naga",
    "description": "Excel-imported rare race evolution path for Naga.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Naga",
      "raceId": 66,
      "previousJobId": 10525,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_naga_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10527_world_born_naga",
    "excelId": 10527,
    "name": "World-Born Naga",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10526_ancient_naga_avatar",
    "description": "Excel-imported hidden race evolution path for Naga.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Naga",
      "raceId": 66,
      "previousJobId": 10526,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_naga_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10528_awakened_garuda",
    "excelId": 10528,
    "name": "Awakened Garuda",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_067_garuda",
    "description": "Excel-imported advanced race evolution path for Garuda.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 3,
      "wis": 1,
      "con": -1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Garuda",
      "raceId": 67,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_garuda_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10529_elder_garuda",
    "excelId": 10529,
    "name": "Elder Garuda",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10528_awakened_garuda",
    "description": "Excel-imported specialist race evolution path for Garuda.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 4,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Garuda",
      "raceId": 67,
      "previousJobId": 10528,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_garuda_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10530_garuda_sovereign",
    "excelId": 10530,
    "name": "Garuda Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10529_elder_garuda",
    "description": "Excel-imported rare race evolution path for Garuda.",
    "stats": {
      "str": 0,
      "dex": 7,
      "int": 5,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 3,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Garuda",
      "raceId": 67,
      "previousJobId": 10529,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_garuda_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10531_origin_garuda",
    "excelId": 10531,
    "name": "Origin Garuda",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10530_garuda_sovereign",
    "description": "Excel-imported hidden race evolution path for Garuda.",
    "stats": {
      "str": 0,
      "dex": 9,
      "int": 6,
      "wis": 3,
      "con": -3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 4,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Garuda",
      "raceId": 67,
      "previousJobId": 10530,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_garuda_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10532_garuda_bloodline",
    "excelId": 10532,
    "name": "Garuda Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_067_garuda",
    "description": "Excel-imported advanced race evolution path for Garuda.",
    "stats": {
      "str": 0,
      "dex": 4,
      "int": 3,
      "wis": 1,
      "con": -1,
      "cha": 1
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Garuda",
      "raceId": 67,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_garuda_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10533_mythic_garuda",
    "excelId": 10533,
    "name": "Mythic Garuda",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10532_garuda_bloodline",
    "description": "Excel-imported specialist race evolution path for Garuda.",
    "stats": {
      "str": 0,
      "dex": 5,
      "int": 4,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 2,
      "int": 1,
      "wis": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Garuda",
      "raceId": 67,
      "previousJobId": 10532,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_garuda_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10534_ancient_garuda_avatar",
    "excelId": 10534,
    "name": "Ancient Garuda Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10533_mythic_garuda",
    "description": "Excel-imported rare race evolution path for Garuda.",
    "stats": {
      "str": 0,
      "dex": 7,
      "int": 5,
      "wis": 2,
      "con": -2,
      "cha": 2
    },
    "levelGrowth": {
      "dex": 3,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Garuda",
      "raceId": 67,
      "previousJobId": 10533,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_garuda_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10535_world_born_garuda",
    "excelId": 10535,
    "name": "World-Born Garuda",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10534_ancient_garuda_avatar",
    "description": "Excel-imported hidden race evolution path for Garuda.",
    "stats": {
      "str": 0,
      "dex": 9,
      "int": 6,
      "wis": 3,
      "con": -3,
      "cha": 3
    },
    "levelGrowth": {
      "dex": 4,
      "int": 2,
      "wis": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Garuda",
      "raceId": 67,
      "previousJobId": 10534,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_garuda_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10536_awakened_yaksha",
    "excelId": 10536,
    "name": "Awakened Yaksha",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_068_yaksha",
    "description": "Excel-imported advanced race evolution path for Yaksha.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yaksha",
      "raceId": 68,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_yaksha_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10537_elder_yaksha",
    "excelId": 10537,
    "name": "Elder Yaksha",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10536_awakened_yaksha",
    "description": "Excel-imported specialist race evolution path for Yaksha.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yaksha",
      "raceId": 68,
      "previousJobId": 10536,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_yaksha_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10538_yaksha_sovereign",
    "excelId": 10538,
    "name": "Yaksha Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10537_elder_yaksha",
    "description": "Excel-imported rare race evolution path for Yaksha.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yaksha",
      "raceId": 68,
      "previousJobId": 10537,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_yaksha_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10539_origin_yaksha",
    "excelId": 10539,
    "name": "Origin Yaksha",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10538_yaksha_sovereign",
    "description": "Excel-imported hidden race evolution path for Yaksha.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yaksha",
      "raceId": 68,
      "previousJobId": 10538,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_yaksha_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10540_yaksha_bloodline",
    "excelId": 10540,
    "name": "Yaksha Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_068_yaksha",
    "description": "Excel-imported advanced race evolution path for Yaksha.",
    "stats": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yaksha",
      "raceId": 68,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_yaksha_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10541_mythic_yaksha",
    "excelId": 10541,
    "name": "Mythic Yaksha",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10540_yaksha_bloodline",
    "description": "Excel-imported specialist race evolution path for Yaksha.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "dex": 1,
      "int": 1,
      "wis": 1,
      "con": 1,
      "cha": 1
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yaksha",
      "raceId": 68,
      "previousJobId": 10540,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_yaksha_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "sk_power_strike"
      },
      {
        "level": 10,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 10,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10542_ancient_yaksha_avatar",
    "excelId": 10542,
    "name": "Ancient Yaksha Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10541_mythic_yaksha",
    "description": "Excel-imported rare race evolution path for Yaksha.",
    "stats": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yaksha",
      "raceId": 68,
      "previousJobId": 10541,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_yaksha_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10543_world_born_yaksha",
    "excelId": 10543,
    "name": "World-Born Yaksha",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10542_ancient_yaksha_avatar",
    "description": "Excel-imported hidden race evolution path for Yaksha.",
    "stats": {
      "str": 3,
      "dex": 3,
      "int": 3,
      "wis": 3,
      "con": 3,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "dex": 2,
      "int": 2,
      "wis": 2,
      "con": 2,
      "cha": 2
    },
    "startingSkills": [
      "sk_quick_slash"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Yaksha",
      "raceId": 68,
      "previousJobId": 10542,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_yaksha_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "sk_power_strike"
      },
      {
        "level": 5,
        "skillId": "sk_twin_fang_rush"
      },
      {
        "level": 5,
        "skillId": "sk_heaven_splitting_lion_art"
      }
    ]
  },
  {
    "id": "race_path_10544_awakened_qilin_kirin",
    "excelId": 10544,
    "name": "Awakened Qilin / Kirin",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_069_qilin_kirin",
    "description": "Excel-imported advanced race evolution path for Qilin / Kirin.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Qilin / Kirin",
      "raceId": 69,
      "previousJobId": null,
      "stage": 0,
      "branch": 0,
      "keySkill": "race_qilin_kirin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      }
    ]
  },
  {
    "id": "race_path_10545_elder_qilin_kirin",
    "excelId": 10545,
    "name": "Elder Qilin / Kirin",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10544_awakened_qilin_kirin",
    "description": "Excel-imported specialist race evolution path for Qilin / Kirin.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Qilin / Kirin",
      "raceId": 69,
      "previousJobId": 10544,
      "stage": 1,
      "branch": 0,
      "keySkill": "race_qilin_kirin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      }
    ]
  },
  {
    "id": "race_path_10546_qilin_kirin_sovereign",
    "excelId": 10546,
    "name": "Qilin / Kirin Sovereign",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10545_elder_qilin_kirin",
    "description": "Excel-imported rare race evolution path for Qilin / Kirin.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Qilin / Kirin",
      "raceId": 69,
      "previousJobId": 10545,
      "stage": 2,
      "branch": 0,
      "keySkill": "race_qilin_kirin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      }
    ]
  },
  {
    "id": "race_path_10547_origin_qilin_kirin",
    "excelId": 10547,
    "name": "Origin Qilin / Kirin",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10546_qilin_kirin_sovereign",
    "description": "Excel-imported hidden race evolution path for Qilin / Kirin.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Qilin / Kirin",
      "raceId": 69,
      "previousJobId": 10546,
      "stage": 3,
      "branch": 0,
      "keySkill": "race_qilin_kirin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      }
    ]
  },
  {
    "id": "race_path_10548_qilin_kirin_bloodline",
    "excelId": 10548,
    "name": "Qilin / Kirin Bloodline",
    "category": "Race Evolution",
    "tier": "advanced",
    "maxLevel": 10,
    "from": "race_069_qilin_kirin",
    "description": "Excel-imported advanced race evolution path for Qilin / Kirin.",
    "stats": {
      "str": 4,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 4,
      "cha": 1
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 15
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Qilin / Kirin",
      "raceId": 69,
      "previousJobId": null,
      "stage": 0,
      "branch": 1,
      "keySkill": "race_qilin_kirin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      }
    ]
  },
  {
    "id": "race_path_10549_mythic_qilin_kirin",
    "excelId": 10549,
    "name": "Mythic Qilin / Kirin",
    "category": "Race Evolution",
    "tier": "specialist",
    "maxLevel": 10,
    "from": "race_path_10548_qilin_kirin_bloodline",
    "description": "Excel-imported specialist race evolution path for Qilin / Kirin.",
    "stats": {
      "str": 5,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 5,
      "cha": 2
    },
    "levelGrowth": {
      "str": 1,
      "con": 2,
      "cha": 1
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Qilin / Kirin",
      "raceId": 69,
      "previousJobId": 10548,
      "stage": 1,
      "branch": 1,
      "keySkill": "race_qilin_kirin_limit_15"
    },
    "learns": [
      {
        "level": 5,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 10,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 10,
        "skillId": "sk_power_strike"
      }
    ]
  },
  {
    "id": "race_path_10550_ancient_qilin_kirin_avatar",
    "excelId": 10550,
    "name": "Ancient Qilin / Kirin Avatar",
    "category": "Race Evolution",
    "tier": "rare",
    "maxLevel": 5,
    "from": "race_path_10549_mythic_qilin_kirin",
    "description": "Excel-imported rare race evolution path for Qilin / Kirin.",
    "stats": {
      "str": 7,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 7,
      "cha": 2
    },
    "levelGrowth": {
      "str": 2,
      "con": 3,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 10
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Qilin / Kirin",
      "raceId": 69,
      "previousJobId": 10549,
      "stage": 2,
      "branch": 1,
      "keySkill": "race_qilin_kirin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      }
    ]
  },
  {
    "id": "race_path_10551_world_born_qilin_kirin",
    "excelId": 10551,
    "name": "World-Born Qilin / Kirin",
    "category": "Race Evolution",
    "tier": "hidden",
    "maxLevel": 5,
    "from": "race_path_10550_ancient_qilin_kirin_avatar",
    "description": "Excel-imported hidden race evolution path for Qilin / Kirin.",
    "stats": {
      "str": 9,
      "dex": 0,
      "int": 0,
      "wis": 0,
      "con": 9,
      "cha": 3
    },
    "levelGrowth": {
      "str": 2,
      "con": 4,
      "cha": 2
    },
    "startingSkills": [
      "in_dragon_scales"
    ],
    "requirements": {
      "classLevel": 5,
      "bossKills": 1,
      "relicDust": 1
    },
    "registryRequirement": {
      "raceEvolution": true,
      "raceName": "Qilin / Kirin",
      "raceId": 69,
      "previousJobId": 10550,
      "stage": 3,
      "branch": 1,
      "keySkill": "race_qilin_kirin_limit_15"
    },
    "learns": [
      {
        "level": 3,
        "skillId": "in_dragon_breath"
      },
      {
        "level": 5,
        "skillId": "sk_quick_slash"
      },
      {
        "level": 5,
        "skillId": "sk_power_strike"
      }
    ]
  }
];
