// Auto-generated/merged for v0.5.0 Ability Linking.
// Includes legacy foundation abilities plus Excel-imported skill/spell shop libraries.

export const SKILLS = [
  {
    "id": "human_resolve",
    "name": "Human Resolve",
    "kind": "intrinsic",
    "rank": "Intrinsic",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Restore a little HP and gain Focus.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "elf_spark",
    "name": "Elf Spark",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "arcane",
    "target": "enemy",
    "power": 11,
    "description": "A precise arcane spark."
  },
  {
    "id": "dwarf_guard",
    "name": "Dwarf Guard",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Brace and gain Guard.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "beast_claw",
    "name": "Beast Claw",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "A tearing claw attack with bleed chance.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 35
      }
    ]
  },
  {
    "id": "ember_breath",
    "name": "Ember Breath",
    "kind": "spell",
    "rank": "Intrinsic",
    "resource": "mana",
    "cost": 10,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Dragon-blooded fire breath.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 35
      }
    ]
  },
  {
    "id": "gale_cut",
    "name": "Gale Cut",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "wind",
    "target": "enemy",
    "power": 10,
    "description": "A slicing blade of wind."
  },
  {
    "id": "grave_drain",
    "name": "Grave Drain",
    "kind": "spell",
    "rank": "Intrinsic",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "Dark damage that heals the user.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.45
      }
    ]
  },
  {
    "id": "impish_hex",
    "name": "Impish Hex",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 8,
    "description": "A small curse that weakens the enemy.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 60
      }
    ]
  },
  {
    "id": "stone_slam",
    "name": "Stone Slam",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 9,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 13,
    "description": "A heavy slam with stun chance.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 25
      }
    ]
  },
  {
    "id": "star_mend",
    "name": "Star Mend",
    "kind": "spell",
    "rank": "Intrinsic",
    "resource": "mana",
    "cost": 11,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Heal yourself with gentle starlight.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.7
      }
    ]
  },
  {
    "id": "power_strike",
    "name": "Power Strike",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 13,
    "description": "A reliable heavy hit."
  },
  {
    "id": "firebolt",
    "name": "Firebolt",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 9,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 13,
    "description": "A basic fire spell.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 2,
        "chance": 25
      }
    ]
  },
  {
    "id": "quick_stab",
    "name": "Quick Stab",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A fast stab that often lands."
  },
  {
    "id": "mend",
    "name": "Mend",
    "kind": "spell",
    "rank": "Common",
    "resource": "mana",
    "cost": 10,
    "cooldown": 2,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Restore HP.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.65
      }
    ]
  },
  {
    "id": "aimed_shot",
    "name": "Aimed Shot",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "A careful ranged shot with bonus accuracy."
  },
  {
    "id": "shield_bash",
    "name": "Shield Bash",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Damage with a chance to stun.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 30
      }
    ]
  },
  {
    "id": "mana_edge",
    "name": "Mana Edge",
    "kind": "hybrid",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "arcane",
    "target": "enemy",
    "power": 12,
    "description": "A weapon slash wrapped in mana."
  },
  {
    "id": "brew_tonic",
    "name": "Brew Tonic",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 6,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Patch yourself with emergency alchemy.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.5
      },
      {
        "type": "restore",
        "resource": "mana",
        "amount": 8
      }
    ]
  },
  {
    "id": "iron_palm",
    "name": "Iron Palm",
    "kind": "skill",
    "rank": "Common",
    "resource": "stamina",
    "cost": 7,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 11,
    "description": "A palm strike with a small stun chance.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 18
      }
    ]
  },
  {
    "id": "inspire",
    "name": "Inspire",
    "kind": "support",
    "rank": "Common",
    "resource": "mana",
    "cost": 8,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Gain Focus and restore stamina.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ]
  },
  {
    "id": "heroic_surge",
    "name": "Heroic Surge",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 14,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 18,
    "description": "A fate-defying attack that grants Focus.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "rune_bolt",
    "name": "Rune Bolt",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "arcane",
    "target": "enemy",
    "power": 17,
    "description": "A rune-shaped projectile."
  },
  {
    "id": "moon_lance",
    "name": "Moon Lance",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 17,
    "description": "Pierce the target with moonlight."
  },
  {
    "id": "verdant_barrier",
    "name": "Verdant Barrier",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "earth",
    "target": "self",
    "power": 0,
    "description": "Gain Guard and heal slightly.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "heal",
        "scale": 0.35
      }
    ]
  },
  {
    "id": "rune_guard",
    "name": "Rune Guard",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "earth",
    "target": "self",
    "power": 0,
    "description": "Gain Guard and resist magic.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "forge_roar",
    "name": "Forge Roar",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Burning roar that weakens enemies.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 55
      }
    ]
  },
  {
    "id": "dire_pounce",
    "name": "Dire Pounce",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 13,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 18,
    "description": "Leap onto an enemy and cause bleed.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 55
      }
    ]
  },
  {
    "id": "lunar_rend",
    "name": "Lunar Rend",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 16,
    "description": "Silver claw damage."
  },
  {
    "id": "wyvern_flame",
    "name": "Wyvern Flame",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 20,
    "description": "A hotter draconic flame.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "scale_aegis",
    "name": "Scale Aegis",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Harden scales for Guard.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "storm_jolt",
    "name": "Storm Jolt",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "lightning",
    "target": "enemy",
    "power": 17,
    "description": "Lightning magic with stun chance.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 18
      }
    ]
  },
  {
    "id": "mist_step",
    "name": "Mist Step",
    "kind": "support",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "wind",
    "target": "self",
    "power": 0,
    "description": "Gain Haste and Focus.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "soul_leech",
    "name": "Soul Leech",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 16,
    "description": "Drain a larger amount of life.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.65
      }
    ]
  },
  {
    "id": "grave_charge",
    "name": "Grave Charge",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 17,
    "description": "A deathly rush attack."
  },
  {
    "id": "hellbrand_mark",
    "name": "Hellbrand Mark",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "Burn and weaken an enemy.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 50
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 50
      }
    ]
  },
  {
    "id": "binding_clause",
    "name": "Binding Clause",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "Curse the enemy with Weakened.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 75
      }
    ]
  },
  {
    "id": "mithril_pulse",
    "name": "Mithril Pulse",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "arcane",
    "target": "enemy",
    "power": 16,
    "description": "A crystal-core shockwave."
  },
  {
    "id": "colossus_stomp",
    "name": "Colossus Stomp",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 15,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 19,
    "description": "A heavy stomp with stun chance.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 35
      }
    ]
  },
  {
    "id": "seraphic_ray",
    "name": "Seraphic Ray",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 17,
    "description": "A radiant beam."
  },
  {
    "id": "omen_mend",
    "name": "Omen Mend",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Heal and gain Focus.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.55
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "ice_lance",
    "name": "Ice Lance",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 16,
    "description": "Ice magic that can freeze.",
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 1,
        "chance": 22
      }
    ]
  },
  {
    "id": "arcane_missile",
    "name": "Arcane Missile",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 11,
    "cooldown": 1,
    "element": "arcane",
    "target": "enemy",
    "power": 15,
    "description": "Efficient arcane damage."
  },
  {
    "id": "mana_shield",
    "name": "Mana Shield",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Gain Guard and restore stamina.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 8
      }
    ]
  },
  {
    "id": "venom_stab",
    "name": "Venom Stab",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "poison",
    "target": "enemy",
    "power": 12,
    "description": "Poisoned blade attack.",
    "effects": [
      {
        "type": "status",
        "status": "poison",
        "duration": 4,
        "chance": 65
      }
    ]
  },
  {
    "id": "shadowstep",
    "name": "Shadowstep",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 15,
    "description": "Strike from a blind spot and gain Haste.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "lucky_find",
    "name": "Lucky Find",
    "kind": "support",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 8,
    "cooldown": 5,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Restore stamina and improve reward luck this battle.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "lucky",
        "duration": 5,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 10
      }
    ]
  },
  {
    "id": "greater_mend",
    "name": "Greater Mend",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Large heal.",
    "effects": [
      {
        "type": "heal",
        "scale": 1.05
      }
    ]
  },
  {
    "id": "banish",
    "name": "Banish",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 13,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 18,
    "description": "Radiant damage that crushes dark enemies."
  },
  {
    "id": "radiant_smite",
    "name": "Radiant Smite",
    "kind": "hybrid",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 17,
    "description": "A weapon strike carrying light."
  },
  {
    "id": "piercing_shot",
    "name": "Piercing Shot",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 17,
    "description": "A stronger shot that ignores some defense."
  },
  {
    "id": "pack_call",
    "name": "Pack Call",
    "kind": "support",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 10,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Gain Focus and call ally pressure.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "thorn_field",
    "name": "Thorn Field",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 14,
    "description": "Earth damage and bleed chance.",
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "iron_wall",
    "name": "Iron Wall",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Strong defensive stance.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "protective_oath",
    "name": "Protective Oath",
    "kind": "support",
    "rank": "Unique",
    "resource": "mana",
    "cost": 14,
    "cooldown": 5,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Gain Guard and Focus.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "fire_bomb",
    "name": "Fire Bomb",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 16,
    "description": "Throw a volatile bomb.",
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "patchwork_aid",
    "name": "Patchwork Aid",
    "kind": "support",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Heal and patch your party tactics.",
    "effects": [
      {
        "type": "heal",
        "scale": 0.6
      }
    ]
  },
  {
    "id": "toxic_cloud",
    "name": "Toxic Cloud",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 14,
    "cooldown": 4,
    "element": "poison",
    "target": "enemy",
    "power": 13,
    "description": "Poison magic with high poison chance.",
    "effects": [
      {
        "type": "status",
        "status": "poison",
        "duration": 4,
        "chance": 75
      }
    ]
  },
  {
    "id": "ki_burst",
    "name": "Ki Burst",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "arcane",
    "target": "enemy",
    "power": 16,
    "description": "Compressed inner force."
  },
  {
    "id": "stunning_palm",
    "name": "Stunning Palm",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 12,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A palm strike with strong stun chance.",
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      }
    ]
  },
  {
    "id": "war_chant",
    "name": "War Chant",
    "kind": "support",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 4,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "Rally yourself and allies.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 10
      }
    ]
  },
  {
    "id": "dirge_of_dread",
    "name": "Dirge of Dread",
    "kind": "spell",
    "rank": "Extra",
    "resource": "mana",
    "cost": 12,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 12,
    "description": "Dark music that weakens enemies.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 70
      }
    ]
  },
  {
    "id": "exploit_lore",
    "name": "Exploit Lore",
    "kind": "support",
    "rank": "Unique",
    "resource": "mana",
    "cost": 10,
    "cooldown": 4,
    "element": "arcane",
    "target": "enemy",
    "power": 10,
    "description": "Identify an enemy weakness and strike it.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 60
      }
    ]
  },
  {
    "id": "perfect_form",
    "name": "Perfect Form",
    "kind": "skill",
    "rank": "Unique",
    "resource": "stamina",
    "cost": 16,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 22,
    "description": "A refined martial technique with huge damage."
  },
  {
    "id": "rage_cleave",
    "name": "Rage Cleave",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 14,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 20,
    "description": "A reckless cleave."
  },
  {
    "id": "guarding_cut",
    "name": "Guarding Cut",
    "kind": "skill",
    "rank": "Extra",
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 15,
    "description": "Attack while gaining Guard.",
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "iaido_starfall",
    "name": "Iaido: Starfall",
    "kind": "hybrid",
    "rank": "Rare",
    "resource": "mana",
    "cost": 24,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 32,
    "description": "A rare instant-draw spellblade finisher."
  },
  {
    "id": "void_fist",
    "name": "Void Fist",
    "kind": "skill",
    "rank": "Hidden",
    "resource": "stamina",
    "cost": 22,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 30,
    "description": "Strike the space behind the target.",
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 80
      }
    ]
  },
  {
    "id": "eclipse_edict",
    "name": "Eclipse Edict",
    "kind": "spell",
    "rank": "Hidden",
    "resource": "mana",
    "cost": 25,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 30,
    "description": "Secret law of light and dark in balance.",
    "effects": [
      {
        "type": "drain",
        "ratio": 0.5
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 70
      }
    ]
  },
  {
    "id": "basic_focus",
    "name": "Basic Focus",
    "kind": "support",
    "rank": "Common",
    "resource": "stamina",
    "cost": 0,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Take a breath, restore stamina, and gain Focus.",
    "effects": [
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 18
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 2,
        "chance": 100
      }
    ]
  },
  {
    "id": "sk_armor_breaker",
    "name": "Armor Breaker",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 18,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A targeted strike against armor, shell, stance, or guard. Applies Vulnerable when it lands cleanly.",
    "tags": [
      "Physical",
      "Break",
      "Melee",
      "Damage",
      "Vulnerable",
      "Debuff",
      "Active"
    ],
    "source": "Advanced Skill Library",
    "price": 219,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "sk_bleeding_crescent",
    "name": "Bleeding Crescent",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 18,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A crescent-shaped slash designed to open bleeding wounds.",
    "tags": [
      "Physical",
      "Weapon Art",
      "Melee",
      "Damage",
      "Bleed",
      "Active"
    ],
    "source": "Advanced Skill Library",
    "price": 219,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "sk_war_cry",
    "name": "War Cry",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 14,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "A battle shout that hardens your resolve, draws attention, and grants Bravery.",
    "tags": [
      "Physical",
      "Taunt",
      "Bravery",
      "Buff",
      "Support",
      "Active"
    ],
    "source": "Advanced Skill Library",
    "price": 207,
    "starting": false
  },
  {
    "id": "sk_iron_counter",
    "name": "Iron Counter",
    "kind": "skill",
    "rank": "Extra",
    "tier": 7,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "Brace yourself for impact and prepare to punish the next opening. Grants Guard and Focus.",
    "tags": [
      "Physical",
      "Counter",
      "Guard",
      "Defensive",
      "Buff",
      "Active"
    ],
    "source": "Advanced Skill Library",
    "price": 194,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "sk_twin_fang_rush",
    "name": "Twin Fang Rush",
    "kind": "skill",
    "rank": "Extra",
    "tier": 7,
    "resource": "stamina",
    "cost": 16,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 22,
    "description": "A two-hit rush that rewards aggressive physical builds.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Multi-Hit",
      "Combo",
      "Active"
    ],
    "source": "Advanced Skill Library",
    "price": 197,
    "starting": false
  },
  {
    "id": "sp_shadow_mark",
    "name": "Shadow Mark",
    "kind": "spell",
    "rank": "Extra",
    "tier": 5,
    "resource": "mana",
    "cost": 23,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 26,
    "description": "Etch a shadow sigil onto the enemy, making it easier to damage and track.",
    "tags": [
      "Magic",
      "Dark",
      "Curse",
      "Marked",
      "Vulnerable",
      "Debuff",
      "Active"
    ],
    "source": "Advanced Spell Library",
    "price": 250,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "sp_chain_lightning",
    "name": "Chain Lightning",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 24,
    "cooldown": 3,
    "element": "light",
    "target": "enemy",
    "power": 24,
    "description": "Lightning jumps between enemies, striking the field with unstable arcs.",
    "tags": [
      "Magic",
      "Lightning",
      "AoE",
      "Damage",
      "Paralysis",
      "Multi-Hit",
      "Active"
    ],
    "source": "Advanced Spell Library",
    "price": 237,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      }
    ]
  },
  {
    "id": "sp_frost_prison",
    "name": "Frost Prison",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 22,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 24,
    "description": "Bind the enemy in layered ice, dealing damage and attempting to freeze it.",
    "tags": [
      "Magic",
      "Ice",
      "Control",
      "Freeze",
      "Debuff",
      "Active"
    ],
    "source": "Advanced Spell Library",
    "price": 231,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 45
      }
    ]
  },
  {
    "id": "sp_regeneration",
    "name": "Regeneration",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 20,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "A restorative spell that heals immediately and applies Regen.",
    "tags": [
      "Magic",
      "Healing",
      "Regeneration",
      "Support",
      "Buff",
      "Active"
    ],
    "source": "Advanced Spell Library",
    "price": 225,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 0.6
      }
    ]
  },
  {
    "id": "sp_fireball",
    "name": "Fireball",
    "kind": "spell",
    "rank": "Extra",
    "tier": 7,
    "resource": "mana",
    "cost": 20,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 22,
    "description": "A classic explosive fire spell that hits all enemies and may burn them.",
    "tags": [
      "Magic",
      "Fire",
      "AoE",
      "Damage",
      "Burn",
      "Burst",
      "Active"
    ],
    "source": "Advanced Spell Library",
    "price": 209,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "in_predator_instinct",
    "name": "Predator Instinct",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "A beastkin instinct for openings, movement, and pursuit.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Physical",
      "Critical",
      "Focus"
    ],
    "source": "Beastkin Lineage",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "sp_abyssal_chain",
    "name": "Abyssal Chain",
    "kind": "spell",
    "rank": "Unique",
    "tier": 4,
    "resource": "mana",
    "cost": 34,
    "cooldown": 4,
    "element": "dark",
    "target": "enemy",
    "power": 36,
    "description": "Dark chains bind the target’s shadow, damaging and fearing it.",
    "tags": [
      "Magic",
      "Dark",
      "Curse",
      "Control",
      "Fear",
      "Unique",
      "Active"
    ],
    "source": "Dark Magic Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 75
      }
    ]
  },
  {
    "id": "in_hellfire_affinity",
    "name": "Hellfire Affinity",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 6,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "dark",
    "target": "self",
    "power": 0,
    "description": "A demonic affinity that strengthens dark flame and curse spells.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Fire",
      "Dark",
      "Magic"
    ],
    "source": "Demon Lineage",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "in_dragon_breath",
    "name": "Dragon Breath",
    "kind": "spell",
    "rank": "Intrinsic",
    "tier": 5,
    "resource": "mana",
    "cost": 28,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 24,
    "description": "Exhale destructive elemental force from a draconic core.",
    "tags": [
      "Intrinsic",
      "Magic",
      "Fire",
      "AoE",
      "Damage",
      "Burn"
    ],
    "source": "Dragonkin / Dragon Evolution",
    "price": 300,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "in_dragon_scales",
    "name": "Dragon Scales",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 6,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "A draconic body trait that reinforces defense and resistance.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Dragon",
      "Guard",
      "Defensive"
    ],
    "source": "Dragonkin / Dragon Race",
    "price": 200,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "in_stoneblood",
    "name": "Stoneblood",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "earth",
    "target": "self",
    "power": 0,
    "description": "A dwarven body trait that hardens blood and bone against impact.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Guard",
      "Defensive"
    ],
    "source": "Dwarf Lineage",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "in_arcane_sight",
    "name": "Arcane Sight",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "An elven sense for mana currents, improving spell control and special perception.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Arcane",
      "Utility"
    ],
    "source": "Elf Lineage",
    "price": 0,
    "starting": false
  },
  {
    "id": "sp_world_flame_sigil",
    "name": "World Flame Sigil",
    "kind": "spell",
    "rank": "Unique",
    "tier": 4,
    "resource": "mana",
    "cost": 36,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 36,
    "description": "A fire sigil that brands the battlefield itself. Evolves from deep Fireball mastery.",
    "tags": [
      "Magic",
      "Fire",
      "Burn",
      "AoE",
      "Curse",
      "Unique",
      "Active"
    ],
    "source": "Fireball Mastery Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 75
      },
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 75
      }
    ]
  },
  {
    "id": "sk_kings_guard",
    "name": "King’s Guard",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "The defensive form of royal guardians. Converts a desperate defense into momentum.",
    "tags": [
      "Physical",
      "Guard",
      "Counter",
      "Defensive",
      "Unique",
      "Active"
    ],
    "source": "Guardian Path Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "sk_blood_moon_reaver",
    "name": "Blood Moon Reaver",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 35,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "A forbidden reaving slash that grows more vicious against bleeding foes.",
    "tags": [
      "Physical",
      "Weapon Art",
      "Bleed",
      "Burst",
      "Unique",
      "Active"
    ],
    "source": "Hidden Achievement Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "bleed",
        "duration": 4,
        "chance": 75
      }
    ]
  },
  {
    "id": "sp_saints_restoration",
    "name": "Saint’s Restoration",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 40,
    "cooldown": 5,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "A high holy restoration spell that heals, cleanses, and guards the caster.",
    "tags": [
      "Magic",
      "Holy",
      "Healing",
      "Cleanse",
      "Barrier",
      "Unique",
      "Active"
    ],
    "source": "Holy Path Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      },
      {
        "type": "heal",
        "scale": 0.85
      }
    ]
  },
  {
    "id": "sk_soul_bound_blade_art",
    "name": "Soul-Bound Blade Art",
    "kind": "skill",
    "rank": "Unique",
    "tier": 2,
    "resource": "stamina",
    "cost": 42,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 40,
    "description": "A rare blade art that synchronizes weapon, soul, and class mastery into one strike.",
    "tags": [
      "Physical",
      "Weapon Art",
      "True Damage",
      "Burst",
      "Unique",
      "Active"
    ],
    "source": "Rare Class / Special Weapon Requirement",
    "price": 0,
    "starting": false
  },
  {
    "id": "sk_dragon_rend",
    "name": "Dragon Rend",
    "kind": "skill",
    "rank": "Unique",
    "tier": 4,
    "resource": "stamina",
    "cost": 32,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 36,
    "description": "A monster-slaying art designed to split scales, armor, and draconic hide.",
    "tags": [
      "Physical",
      "Weapon Art",
      "Burst",
      "Damage",
      "Piercing",
      "Unique",
      "Active"
    ],
    "source": "Requirement Unlock",
    "price": 0,
    "starting": false
  },
  {
    "id": "sk_phantom_step_art",
    "name": "Phantom Step Art",
    "kind": "skill",
    "rank": "Unique",
    "tier": 4,
    "resource": "stamina",
    "cost": 28,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 36,
    "description": "A speed art that turns movement into afterimages, granting Haste and Focus.",
    "tags": [
      "Physical",
      "Mobility",
      "Haste",
      "Counter",
      "Unique",
      "Active"
    ],
    "source": "Requirement Unlock",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "sp_void_gate",
    "name": "Void Gate",
    "kind": "spell",
    "rank": "Unique",
    "tier": 2,
    "resource": "mana",
    "cost": 48,
    "cooldown": 6,
    "element": "dark",
    "target": "enemy",
    "power": 40,
    "description": "Open a short-lived gate into the void to crush, banish, or displace the enemy.",
    "tags": [
      "Magic",
      "Arcane",
      "Dark",
      "Control",
      "Banish",
      "Unique",
      "Active"
    ],
    "source": "Secret Research Requirement",
    "price": 0,
    "starting": false
  },
  {
    "id": "sk_hunter_step",
    "name": "Hunter Step",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 11,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "A trained evasive step that sharpens positioning, grants Haste, and restores a small burst of stamina.",
    "tags": [
      "Physical",
      "Mobility",
      "Haste",
      "Focus",
      "Buff",
      "Active"
    ],
    "source": "Skill Library",
    "price": 121,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ]
  },
  {
    "id": "sp_mana_shield",
    "name": "Mana Shield",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 14,
    "cooldown": 3,
    "element": "arcane",
    "target": "self",
    "power": 0,
    "description": "Compress mana into a barrier around your body, granting Guard for a short time.",
    "tags": [
      "Magic",
      "Arcane",
      "Barrier",
      "Guard",
      "Defensive",
      "Buff",
      "Active"
    ],
    "source": "Skill Library",
    "price": 130,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "sp_minor_heal",
    "name": "Minor Heal",
    "kind": "spell",
    "rank": "Common",
    "tier": 9,
    "resource": "mana",
    "cost": 12,
    "cooldown": 2,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "A low-tier recovery spell that restores a small portion of HP.",
    "tags": [
      "Magic",
      "Holy",
      "Healing",
      "Support",
      "Active"
    ],
    "source": "Skill Library",
    "price": 108,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 0.45
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ]
  },
  {
    "id": "sk_power_strike",
    "name": "Power Strike",
    "kind": "skill",
    "rank": "Common",
    "tier": 9,
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "A committed heavy blow that deals higher physical damage than a basic attack.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Burst",
      "Break",
      "Active"
    ],
    "source": "Skill Library",
    "price": 108,
    "starting": false
  },
  {
    "id": "sk_shield_bash",
    "name": "Shield Bash",
    "kind": "skill",
    "rank": "Common",
    "tier": 9,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "Drive a shield, weapon guard, or armored shoulder into the enemy. Deals damage and may stun.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Guard",
      "Stun",
      "Control",
      "Active"
    ],
    "source": "Skill Library",
    "price": 102,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      },
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "in_adaptive_body",
    "name": "Adaptive Body",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 8,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "A slime body trait that adapts to shape, impact, and strange environments.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Slime",
      "Evolution",
      "Utility"
    ],
    "source": "Slime Lineage",
    "price": 0,
    "starting": false
  },
  {
    "id": "sk_guard_stance",
    "name": "Guard Stance",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 4,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "Set your stance, reduce incoming damage, and recover extra stamina. A basic survival tool for physical builds.",
    "tags": [
      "Physical",
      "Stance",
      "Guard",
      "Defensive",
      "Buff",
      "Active"
    ],
    "source": "Starter Skill / Skill Library",
    "price": 68,
    "starting": true,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ]
  },
  {
    "id": "sk_quick_slash",
    "name": "Quick Slash",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 7,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A fast, reliable weapon cut meant for conserving stamina while keeping pressure on one enemy.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Weapon Art",
      "Active"
    ],
    "source": "Starter Skill / Skill Library",
    "price": 77,
    "starting": true
  },
  {
    "id": "sp_fire_bolt",
    "name": "Fire Bolt",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 10,
    "description": "A beginner fire spell that launches a compact bolt of flame with a small chance to burn.",
    "tags": [
      "Magic",
      "Fire",
      "Ranged",
      "Damage",
      "Burn",
      "Active"
    ],
    "source": "Starter Spell / Skill Library",
    "price": 80,
    "starting": true,
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 3,
        "chance": 45
      }
    ]
  },
  {
    "id": "sp_ice_needle",
    "name": "Ice Needle",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 8,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 10,
    "description": "A thin spike of cold mana that deals ice damage and may freeze the target.",
    "tags": [
      "Magic",
      "Ice",
      "Ranged",
      "Damage",
      "Freeze",
      "Control",
      "Active"
    ],
    "source": "Starter Spell / Skill Library",
    "price": 80,
    "starting": true,
    "effects": [
      {
        "type": "status",
        "status": "frozen",
        "duration": 2,
        "chance": 45
      }
    ]
  },
  {
    "id": "sp_spark",
    "name": "Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "light",
    "target": "enemy",
    "power": 10,
    "description": "A small lightning spell that is cheap to cast and can briefly paralyze an enemy.",
    "tags": [
      "Magic",
      "Lightning",
      "Ranged",
      "Damage",
      "Paralysis",
      "Active"
    ],
    "source": "Starter Spell / Skill Library",
    "price": 77,
    "starting": true,
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      }
    ]
  },
  {
    "id": "sp_storm_crown_invocation",
    "name": "Storm Crown Invocation",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 42,
    "cooldown": 5,
    "element": "light",
    "target": "enemy",
    "power": 38,
    "description": "Call a crown of stormlight over the battlefield, shocking enemies and quickening your movement.",
    "tags": [
      "Magic",
      "Lightning",
      "AoE",
      "Haste",
      "Paralysis",
      "Unique",
      "Active"
    ],
    "source": "Storm Requirement",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 65
      },
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "sk_aegis_last_king",
    "name": "Aegis of the Last King",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 60,
    "cooldown": 8,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The last royal guard stance. Raises an impossible defense and answers damage with judgment.",
    "tags": [
      "Physical",
      "Ultimate",
      "Guard",
      "Counter",
      "Defensive",
      "Thorns",
      "Active"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "sp_astraea_final_benediction",
    "name": "Astraea’s Final Benediction",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 85,
    "cooldown": 9,
    "element": "light",
    "target": "self",
    "power": 0,
    "description": "A world-class benediction that restores, cleanses, and protects in one miracle.",
    "tags": [
      "Magic",
      "Ultimate",
      "Holy",
      "Healing",
      "Cleanse",
      "Barrier",
      "Support",
      "Active"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      },
      {
        "type": "heal",
        "scale": 1.0
      },
      {
        "type": "restore",
        "resource": "stamina",
        "amount": 12
      }
    ]
  },
  {
    "id": "sp_eclipse_archive_end_names",
    "name": "Eclipse Archive: End of Names",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 90,
    "cooldown": 9,
    "element": "dark",
    "target": "enemy",
    "power": 54,
    "description": "Open a cursed archive that erases the enemy’s name from the world’s memory.",
    "tags": [
      "Magic",
      "Ultimate",
      "Dark",
      "Arcane",
      "Curse",
      "Weaken",
      "Marked",
      "Damage",
      "Active"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "weakened",
        "duration": 4,
        "chance": 75
      }
    ]
  },
  {
    "id": "sk_heaven_splitting_lion_art",
    "name": "Heaven-Splitting Lion Art",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 70,
    "cooldown": 8,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "A legendary single-target weapon art that cleaves with the pressure of a divine beast.",
    "tags": [
      "Physical",
      "Ultimate",
      "Weapon Art",
      "Burst",
      "Critical",
      "Piercing",
      "Active"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "focus",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "sp_ragnarok_starfall_cataclysm",
    "name": "Ragnarok Starfall Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 95,
    "cooldown": 9,
    "element": "fire",
    "target": "enemy",
    "power": 54,
    "description": "Call down a storm of dying stars. A legendary AoE spell built for catastrophic damage.",
    "tags": [
      "Magic",
      "Ultimate",
      "AoE",
      "Fire",
      "Arcane",
      "Burst",
      "Damage",
      "Active"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "burn",
        "duration": 4,
        "chance": 75
      }
    ]
  },
  {
    "id": "sk_thousand_step_godspeed_reversal",
    "name": "Thousand-Step Godspeed Reversal",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 65,
    "cooldown": 8,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "An ultimate speed art that turns every step into a counterstrike.",
    "tags": [
      "Physical",
      "Ultimate",
      "Mobility",
      "Counter",
      "Multi-Hit",
      "Haste",
      "Active"
    ],
    "source": "Ultimate Evolution",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "haste",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "in_deathless_body",
    "name": "Deathless Body",
    "kind": "passive",
    "rank": "Intrinsic",
    "tier": 6,
    "resource": "none",
    "cost": 0,
    "cooldown": 0,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "An undead body that endures wounds living flesh cannot.",
    "tags": [
      "Intrinsic",
      "Passive",
      "Undead",
      "Defensive"
    ],
    "source": "Undead Lineage",
    "price": 0,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "sk_arrow_pin",
    "name": "Arrow Pin",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 12,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A precise shot that pins movement and marks the target.",
    "tags": [
      "Physical",
      "Ranged",
      "Marked",
      "Damage",
      "Control"
    ],
    "source": "v26 Ability Shop",
    "price": 124,
    "starting": false
  },
  {
    "id": "sk_brutal_cleave",
    "name": "Brutal Cleave",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 14,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A broad heavy-weapon swing that can pressure multiple enemies.",
    "tags": [
      "Physical",
      "Melee",
      "Damage",
      "Break",
      "AoE"
    ],
    "source": "v26 Ability Shop",
    "price": 130,
    "starting": false
  },
  {
    "id": "sk_open_palm_break",
    "name": "Open Palm Break",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A martial strike that disrupts posture and can stun weaker foes.",
    "tags": [
      "Physical",
      "Martial Art",
      "Stun",
      "Break",
      "Melee"
    ],
    "source": "v26 Ability Shop",
    "price": 118,
    "starting": false,
    "effects": [
      {
        "type": "status",
        "status": "stunned",
        "duration": 1,
        "chance": 45
      }
    ]
  },
  {
    "id": "sk_piercing_thrust",
    "name": "Piercing Thrust",
    "kind": "skill",
    "rank": "Common",
    "tier": 9,
    "resource": "stamina",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 12,
    "description": "A linear thrust meant to punch through guards and thick hides.",
    "tags": [
      "Physical",
      "Melee",
      "Piercing",
      "Damage",
      "Weapon Art"
    ],
    "source": "v26 Ability Shop",
    "price": 105,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "v50_arcane_2",
    "name": "Aether Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "arcane",
    "target": "enemy",
    "power": 14,
    "description": "A broader school spell with better scaling.",
    "tags": [
      "Magic",
      "Burst",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_fire_2",
    "name": "Flame Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "fire",
    "target": "enemy",
    "power": 14,
    "description": "A broader school spell with better scaling.",
    "tags": [
      "Magic",
      "Burst",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_ice_2",
    "name": "Frost Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "ice",
    "target": "enemy",
    "power": 14,
    "description": "A broader school spell with better scaling.",
    "tags": [
      "Magic",
      "Burst",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_wind_2",
    "name": "Gale Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "wind",
    "target": "enemy",
    "power": 14,
    "description": "A broader school spell with better scaling.",
    "tags": [
      "Magic",
      "Burst",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_healing_2",
    "name": "Mend Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "A broader school spell with better scaling.",
    "tags": [
      "Magic",
      "Burst",
      "Healing"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 0.45
      }
    ]
  },
  {
    "id": "v50_holy_2",
    "name": "Radiant Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 14,
    "description": "A broader school spell with better scaling.",
    "tags": [
      "Magic",
      "Burst",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_dark_2",
    "name": "Shade Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 14,
    "description": "A broader school spell with better scaling.",
    "tags": [
      "Magic",
      "Burst",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_earth_2",
    "name": "Stone Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "earth",
    "target": "enemy",
    "power": 14,
    "description": "A broader school spell with better scaling.",
    "tags": [
      "Magic",
      "Burst",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_water_2",
    "name": "Tide Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A broader school spell with better scaling.",
    "tags": [
      "Magic",
      "Burst",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_lightning_2",
    "name": "Volt Wave",
    "kind": "spell",
    "rank": "Common",
    "tier": 8,
    "resource": "mana",
    "cost": 11,
    "cooldown": 2,
    "element": "light",
    "target": "enemy",
    "power": 14,
    "description": "A broader school spell with better scaling.",
    "tags": [
      "Magic",
      "Burst",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 121,
    "starting": false
  },
  {
    "id": "v50_arcane_1",
    "name": "Aether Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "A starter arcane spell.",
    "tags": [
      "Magic",
      "Starter",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_fire_1",
    "name": "Flame Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "fire",
    "target": "enemy",
    "power": 10,
    "description": "A starter fire spell.",
    "tags": [
      "Magic",
      "Starter",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_ice_1",
    "name": "Frost Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "ice",
    "target": "enemy",
    "power": 10,
    "description": "A starter ice spell.",
    "tags": [
      "Magic",
      "Starter",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_wind_1",
    "name": "Gale Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "A starter wind spell.",
    "tags": [
      "Magic",
      "Starter",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_healing_1",
    "name": "Mend Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "self",
    "power": 0,
    "description": "A starter healing spell.",
    "tags": [
      "Magic",
      "Starter",
      "Healing"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true,
    "effects": [
      {
        "type": "heal",
        "scale": 0.45
      }
    ]
  },
  {
    "id": "v50_holy_1",
    "name": "Radiant Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "light",
    "target": "enemy",
    "power": 10,
    "description": "A starter holy spell.",
    "tags": [
      "Magic",
      "Starter",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_dark_1",
    "name": "Shade Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "A starter dark spell.",
    "tags": [
      "Magic",
      "Starter",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_earth_1",
    "name": "Stone Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "A starter earth spell.",
    "tags": [
      "Magic",
      "Starter",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_water_1",
    "name": "Tide Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "lightning",
    "target": "enemy",
    "power": 10,
    "description": "A starter water spell.",
    "tags": [
      "Magic",
      "Starter",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_lightning_1",
    "name": "Volt Spark",
    "kind": "spell",
    "rank": "Common",
    "tier": 10,
    "resource": "mana",
    "cost": 7,
    "cooldown": 1,
    "element": "light",
    "target": "enemy",
    "power": 10,
    "description": "A starter lightning spell.",
    "tags": [
      "Magic",
      "Starter",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 77,
    "starting": true
  },
  {
    "id": "v50_arcane_3",
    "name": "Aether Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "arcane",
    "target": "enemy",
    "power": 24,
    "description": "A specialized spell for dedicated casters.",
    "tags": [
      "Magic",
      "Extra",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_fire_3",
    "name": "Flame Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "fire",
    "target": "enemy",
    "power": 24,
    "description": "A specialized spell for dedicated casters.",
    "tags": [
      "Magic",
      "Extra",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_ice_3",
    "name": "Frost Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "ice",
    "target": "enemy",
    "power": 24,
    "description": "A specialized spell for dedicated casters.",
    "tags": [
      "Magic",
      "Extra",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_wind_3",
    "name": "Gale Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "wind",
    "target": "enemy",
    "power": 24,
    "description": "A specialized spell for dedicated casters.",
    "tags": [
      "Magic",
      "Extra",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_healing_3",
    "name": "Mend Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "A specialized spell for dedicated casters.",
    "tags": [
      "Magic",
      "Extra",
      "Healing"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 0.6
      }
    ]
  },
  {
    "id": "v50_holy_3",
    "name": "Radiant Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "light",
    "target": "enemy",
    "power": 24,
    "description": "A specialized spell for dedicated casters.",
    "tags": [
      "Magic",
      "Extra",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_dark_3",
    "name": "Shade Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 24,
    "description": "A specialized spell for dedicated casters.",
    "tags": [
      "Magic",
      "Extra",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_earth_3",
    "name": "Stone Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "earth",
    "target": "enemy",
    "power": 24,
    "description": "A specialized spell for dedicated casters.",
    "tags": [
      "Magic",
      "Extra",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_water_3",
    "name": "Tide Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A specialized spell for dedicated casters.",
    "tags": [
      "Magic",
      "Extra",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_lightning_3",
    "name": "Volt Sigil",
    "kind": "spell",
    "rank": "Extra",
    "tier": 6,
    "resource": "mana",
    "cost": 16,
    "cooldown": 3,
    "element": "light",
    "target": "enemy",
    "power": 24,
    "description": "A specialized spell for dedicated casters.",
    "tags": [
      "Magic",
      "Extra",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 213,
    "starting": false
  },
  {
    "id": "v50_ice_5",
    "name": "Eternal Glacier Palace",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "ice",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate spell of the ice school.",
    "tags": [
      "Magic",
      "Ultimate",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_healing_5",
    "name": "Legend Rebirth Canon",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "The ultimate spell of the healing school.",
    "tags": [
      "Magic",
      "Ultimate",
      "Healing"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 1.0
      }
    ]
  },
  {
    "id": "v50_dark_5",
    "name": "Night Emperor Cataclysm",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "dark",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate spell of the dark school.",
    "tags": [
      "Magic",
      "Ultimate",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_water_5",
    "name": "Ocean Throne Deluge",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate spell of the water school.",
    "tags": [
      "Magic",
      "Ultimate",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_fire_5",
    "name": "Phoenix Crown Apocalypse",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "fire",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate spell of the fire school.",
    "tags": [
      "Magic",
      "Ultimate",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_wind_5",
    "name": "Sky Dominion Hurricane",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "wind",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate spell of the wind school.",
    "tags": [
      "Magic",
      "Ultimate",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_lightning_5",
    "name": "Storm Kingdom Descent",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "light",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate spell of the lightning school.",
    "tags": [
      "Magic",
      "Ultimate",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_holy_5",
    "name": "World Cathedral Miracle",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "light",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate spell of the holy school.",
    "tags": [
      "Magic",
      "Ultimate",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_earth_5",
    "name": "World Pillar Genesis",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "earth",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate spell of the earth school.",
    "tags": [
      "Magic",
      "Ultimate",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_arcane_5",
    "name": "World Script Overwrite",
    "kind": "spell",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "mana",
    "cost": 34,
    "cooldown": 5,
    "element": "arcane",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate spell of the arcane school.",
    "tags": [
      "Magic",
      "Ultimate",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 662,
    "starting": false
  },
  {
    "id": "v50_ice_4",
    "name": "Absolute Zero Seal",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "ice",
    "target": "enemy",
    "power": 38,
    "description": "A rare spell with build requirements.",
    "tags": [
      "Magic",
      "Unique",
      "Ice"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_dark_4",
    "name": "Abyss Sovereign Mark",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "dark",
    "target": "enemy",
    "power": 38,
    "description": "A rare spell with build requirements.",
    "tags": [
      "Magic",
      "Unique",
      "Dark"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_water_4",
    "name": "Abyssal Fountain Rite",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "dark",
    "target": "enemy",
    "power": 38,
    "description": "A rare spell with build requirements.",
    "tags": [
      "Magic",
      "Unique",
      "Water"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_arcane_4",
    "name": "Astral Code Archive",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "arcane",
    "target": "enemy",
    "power": 38,
    "description": "A rare spell with build requirements.",
    "tags": [
      "Magic",
      "Unique",
      "Arcane"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_lightning_4",
    "name": "Emperor Thunder Circuit",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "light",
    "target": "enemy",
    "power": 38,
    "description": "A rare spell with build requirements.",
    "tags": [
      "Magic",
      "Unique",
      "Lightning"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_healing_4",
    "name": "Grand Vital Liturgy",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "physical",
    "target": "self",
    "power": 0,
    "description": "A rare spell with build requirements.",
    "tags": [
      "Magic",
      "Unique",
      "Healing"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false,
    "effects": [
      {
        "type": "heal",
        "scale": 0.85
      }
    ]
  },
  {
    "id": "v50_earth_4",
    "name": "Kingdom Bedrock Ward",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "earth",
    "target": "enemy",
    "power": 38,
    "description": "A rare spell with build requirements.",
    "tags": [
      "Magic",
      "Unique",
      "Earth"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_wind_4",
    "name": "Phantom Tempest Step",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "wind",
    "target": "enemy",
    "power": 38,
    "description": "A rare spell with build requirements.",
    "tags": [
      "Magic",
      "Unique",
      "Wind"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_holy_4",
    "name": "Saint Halo Decree",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "light",
    "target": "enemy",
    "power": 38,
    "description": "A rare spell with build requirements.",
    "tags": [
      "Magic",
      "Unique",
      "Holy"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_fire_4",
    "name": "World Flame Sigil",
    "kind": "spell",
    "rank": "Unique",
    "tier": 3,
    "resource": "mana",
    "cost": 24,
    "cooldown": 4,
    "element": "fire",
    "target": "enemy",
    "power": 38,
    "description": "A rare spell with build requirements.",
    "tags": [
      "Magic",
      "Unique",
      "Fire"
    ],
    "source": "v50 Magic Shop",
    "price": 380,
    "starting": false
  },
  {
    "id": "v50_sword_2",
    "name": "Blade Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A faster pressure skill for aggressive turns.",
    "tags": [
      "Physical",
      "Burst",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_shield_2",
    "name": "Bulwark Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A faster pressure skill for aggressive turns.",
    "tags": [
      "Physical",
      "Burst",
      "Shield"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "v50_heavy_weapon_2",
    "name": "Colossus Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A faster pressure skill for aggressive turns.",
    "tags": [
      "Physical",
      "Burst",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_catalyst_2",
    "name": "Focus Core Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A faster pressure skill for aggressive turns.",
    "tags": [
      "Physical",
      "Burst",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_unarmed_2",
    "name": "Iron Fist Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A faster pressure skill for aggressive turns.",
    "tags": [
      "Physical",
      "Burst",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_spear_2",
    "name": "Lancer Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A faster pressure skill for aggressive turns.",
    "tags": [
      "Physical",
      "Burst",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_bow_2",
    "name": "Longshot Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A faster pressure skill for aggressive turns.",
    "tags": [
      "Physical",
      "Burst",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_staff_2",
    "name": "Mystic Staff Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A faster pressure skill for aggressive turns.",
    "tags": [
      "Physical",
      "Burst",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_dagger_2",
    "name": "Shadowfang Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "dark",
    "target": "enemy",
    "power": 14,
    "description": "A faster pressure skill for aggressive turns.",
    "tags": [
      "Physical",
      "Burst",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_axe_2",
    "name": "Waraxe Rush",
    "kind": "skill",
    "rank": "Common",
    "tier": 8,
    "resource": "stamina",
    "cost": 10,
    "cooldown": 2,
    "element": "physical",
    "target": "enemy",
    "power": 14,
    "description": "A faster pressure skill for aggressive turns.",
    "tags": [
      "Physical",
      "Burst",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 118,
    "starting": false
  },
  {
    "id": "v50_sword_1",
    "name": "Blade Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A basic sword technique that starts this weapon path.",
    "tags": [
      "Physical",
      "Starter",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_shield_1",
    "name": "Bulwark Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A basic shield technique that starts this weapon path.",
    "tags": [
      "Physical",
      "Starter",
      "Shield"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "v50_heavy_weapon_1",
    "name": "Colossus Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A basic heavy weapon technique that starts this weapon path.",
    "tags": [
      "Physical",
      "Starter",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_catalyst_1",
    "name": "Focus Core Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A basic catalyst technique that starts this weapon path.",
    "tags": [
      "Physical",
      "Starter",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_unarmed_1",
    "name": "Iron Fist Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A basic unarmed technique that starts this weapon path.",
    "tags": [
      "Physical",
      "Starter",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_spear_1",
    "name": "Lancer Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A basic spear technique that starts this weapon path.",
    "tags": [
      "Physical",
      "Starter",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_bow_1",
    "name": "Longshot Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A basic bow technique that starts this weapon path.",
    "tags": [
      "Physical",
      "Starter",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_staff_1",
    "name": "Mystic Staff Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A basic staff technique that starts this weapon path.",
    "tags": [
      "Physical",
      "Starter",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_dagger_1",
    "name": "Shadowfang Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "dark",
    "target": "enemy",
    "power": 10,
    "description": "A basic dagger technique that starts this weapon path.",
    "tags": [
      "Physical",
      "Starter",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_axe_1",
    "name": "Waraxe Initiation",
    "kind": "skill",
    "rank": "Common",
    "tier": 10,
    "resource": "stamina",
    "cost": 6,
    "cooldown": 1,
    "element": "physical",
    "target": "enemy",
    "power": 10,
    "description": "A basic axe technique that starts this weapon path.",
    "tags": [
      "Physical",
      "Starter",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 74,
    "starting": true
  },
  {
    "id": "v50_sword_3",
    "name": "Blade Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A stronger signature art for skilled users.",
    "tags": [
      "Physical",
      "Extra",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_shield_3",
    "name": "Bulwark Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A stronger signature art for skilled users.",
    "tags": [
      "Physical",
      "Extra",
      "Shield"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 3,
        "chance": 100
      }
    ]
  },
  {
    "id": "v50_heavy_weapon_3",
    "name": "Colossus Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A stronger signature art for skilled users.",
    "tags": [
      "Physical",
      "Extra",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_catalyst_3",
    "name": "Focus Core Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A stronger signature art for skilled users.",
    "tags": [
      "Physical",
      "Extra",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_unarmed_3",
    "name": "Iron Fist Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A stronger signature art for skilled users.",
    "tags": [
      "Physical",
      "Extra",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_spear_3",
    "name": "Lancer Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A stronger signature art for skilled users.",
    "tags": [
      "Physical",
      "Extra",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_bow_3",
    "name": "Longshot Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A stronger signature art for skilled users.",
    "tags": [
      "Physical",
      "Extra",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_staff_3",
    "name": "Mystic Staff Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A stronger signature art for skilled users.",
    "tags": [
      "Physical",
      "Extra",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_dagger_3",
    "name": "Shadowfang Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "dark",
    "target": "enemy",
    "power": 24,
    "description": "A stronger signature art for skilled users.",
    "tags": [
      "Physical",
      "Extra",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_axe_3",
    "name": "Waraxe Crest Art",
    "kind": "skill",
    "rank": "Extra",
    "tier": 6,
    "resource": "stamina",
    "cost": 15,
    "cooldown": 3,
    "element": "physical",
    "target": "enemy",
    "power": 24,
    "description": "A stronger signature art for skilled users.",
    "tags": [
      "Physical",
      "Extra",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 210,
    "starting": false
  },
  {
    "id": "v50_catalyst_5",
    "name": "Cosmic Catalyst Surge",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate expression of catalyst mastery.",
    "tags": [
      "Physical",
      "Ultimate",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_staff_5",
    "name": "Grand Magus Orbit",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate expression of staff mastery.",
    "tags": [
      "Physical",
      "Ultimate",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_spear_5",
    "name": "Heaven-Piercing Phalanx",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate expression of spear mastery.",
    "tags": [
      "Physical",
      "Ultimate",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_heavy_weapon_5",
    "name": "Mountain-Crushing Finale",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate expression of heavy weapon mastery.",
    "tags": [
      "Physical",
      "Ultimate",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_dagger_5",
    "name": "Night-Crowned Assassination",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate expression of dagger mastery.",
    "tags": [
      "Physical",
      "Ultimate",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_bow_5",
    "name": "Starfall Arrow Dominion",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate expression of bow mastery.",
    "tags": [
      "Physical",
      "Ultimate",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_axe_5",
    "name": "Titan Rend Execution",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate expression of axe mastery.",
    "tags": [
      "Physical",
      "Ultimate",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_shield_5",
    "name": "World Bastion Protocol",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate expression of shield mastery.",
    "tags": [
      "Physical",
      "Ultimate",
      "Shield"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "v50_unarmed_5",
    "name": "Worldbreaker Martial Soul",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate expression of unarmed mastery.",
    "tags": [
      "Physical",
      "Ultimate",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_sword_5",
    "name": "Worldsplitter Edge",
    "kind": "skill",
    "rank": "Ultimate",
    "tier": 1,
    "resource": "stamina",
    "cost": 30,
    "cooldown": 5,
    "element": "physical",
    "target": "enemy",
    "power": 54,
    "description": "The ultimate expression of sword mastery.",
    "tags": [
      "Physical",
      "Ultimate",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 650,
    "starting": false
  },
  {
    "id": "v50_catalyst_4",
    "name": "Arcflash Conductor",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "A rare technique with strict build requirements.",
    "tags": [
      "Physical",
      "Unique",
      "Catalyst"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_axe_4",
    "name": "Bloodbreak Maul",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "A rare technique with strict build requirements.",
    "tags": [
      "Physical",
      "Unique",
      "Axe"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_shield_4",
    "name": "Guardian Wall Counter",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "A rare technique with strict build requirements.",
    "tags": [
      "Physical",
      "Unique",
      "Shield"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false,
    "effects": [
      {
        "type": "statusSelf",
        "status": "guard",
        "duration": 4,
        "chance": 100
      }
    ]
  },
  {
    "id": "v50_unarmed_4",
    "name": "Heavenstep Combo",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "A rare technique with strict build requirements.",
    "tags": [
      "Physical",
      "Unique",
      "Unarmed"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_sword_4",
    "name": "Kingsguard Severance",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "A rare technique with strict build requirements.",
    "tags": [
      "Physical",
      "Unique",
      "Sword"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_dagger_4",
    "name": "Phantom Step Art",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "A rare technique with strict build requirements.",
    "tags": [
      "Physical",
      "Unique",
      "Dagger"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_heavy_weapon_4",
    "name": "Siegebreak Overrun",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "A rare technique with strict build requirements.",
    "tags": [
      "Physical",
      "Unique",
      "Heavy Weapon"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_spear_4",
    "name": "Skypierce Rotation",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "A rare technique with strict build requirements.",
    "tags": [
      "Physical",
      "Unique",
      "Spear"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_staff_4",
    "name": "Spellstaff Breaker",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "physical",
    "target": "enemy",
    "power": 38,
    "description": "A rare technique with strict build requirements.",
    "tags": [
      "Physical",
      "Unique",
      "Staff"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  },
  {
    "id": "v50_bow_4",
    "name": "Stormfeather Volley",
    "kind": "skill",
    "rank": "Unique",
    "tier": 3,
    "resource": "stamina",
    "cost": 22,
    "cooldown": 4,
    "element": "lightning",
    "target": "enemy",
    "power": 38,
    "description": "A rare technique with strict build requirements.",
    "tags": [
      "Physical",
      "Unique",
      "Bow"
    ],
    "source": "v50 Physical Shop",
    "price": 374,
    "starting": false
  }
];

export const SKILL_SHOP_LIBRARIES = [
  {
    "id": "advanced_skill_library",
    "name": "Advanced Skill Library",
    "description": "Excel-imported skill/spell library: Advanced Skill Library.",
    "stock": [
      "sk_twin_fang_rush",
      "sk_iron_counter",
      "sk_bleeding_crescent",
      "sk_armor_breaker",
      "sk_war_cry"
    ]
  },
  {
    "id": "advanced_spell_library",
    "name": "Advanced Spell Library",
    "description": "Excel-imported skill/spell library: Advanced Spell Library.",
    "stock": [
      "sp_fireball",
      "sp_frost_prison",
      "sp_chain_lightning",
      "sp_regeneration",
      "sp_shadow_mark"
    ]
  },
  {
    "id": "dragonkin_dragon_evolution",
    "name": "Dragonkin / Dragon Evolution",
    "description": "Excel-imported skill/spell library: Dragonkin / Dragon Evolution.",
    "stock": [
      "in_dragon_breath"
    ]
  },
  {
    "id": "dragonkin_dragon_race",
    "name": "Dragonkin / Dragon Race",
    "description": "Excel-imported skill/spell library: Dragonkin / Dragon Race.",
    "stock": [
      "in_dragon_scales"
    ]
  },
  {
    "id": "skill_library",
    "name": "Skill Library",
    "description": "Excel-imported skill/spell library: Skill Library.",
    "stock": [
      "sk_power_strike",
      "sk_shield_bash",
      "sk_hunter_step",
      "sp_minor_heal",
      "sp_mana_shield"
    ]
  },
  {
    "id": "starter_skill_skill_library",
    "name": "Starter Skill / Skill Library",
    "description": "Excel-imported skill/spell library: Starter Skill / Skill Library.",
    "stock": [
      "sk_quick_slash",
      "sk_guard_stance"
    ]
  },
  {
    "id": "starter_spell_skill_library",
    "name": "Starter Spell / Skill Library",
    "description": "Excel-imported skill/spell library: Starter Spell / Skill Library.",
    "stock": [
      "sp_fire_bolt",
      "sp_ice_needle",
      "sp_spark"
    ]
  },
  {
    "id": "v26_ability_shop",
    "name": "v26 Ability Shop",
    "description": "Excel-imported skill/spell library: v26 Ability Shop.",
    "stock": [
      "sk_quick_slash",
      "sk_guard_stance",
      "sk_power_strike",
      "sk_shield_bash",
      "sk_hunter_step",
      "sk_piercing_thrust",
      "sk_brutal_cleave",
      "sk_arrow_pin",
      "sk_open_palm_break",
      "sp_fire_bolt",
      "sp_ice_needle",
      "sp_spark",
      "sp_minor_heal",
      "sp_mana_shield",
      "sk_twin_fang_rush",
      "sk_iron_counter",
      "sk_bleeding_crescent",
      "sk_armor_breaker",
      "sk_war_cry",
      "sp_fireball",
      "sp_frost_prison",
      "sp_chain_lightning",
      "sp_regeneration",
      "sp_shadow_mark",
      "in_dragon_scales",
      "in_dragon_breath"
    ]
  },
  {
    "id": "v50_magic_shop",
    "name": "v50 Magic Shop",
    "description": "Excel-imported skill/spell library: v50 Magic Shop.",
    "stock": [
      "v50_fire_1",
      "v50_fire_2",
      "v50_fire_3",
      "v50_fire_4",
      "v50_fire_5",
      "v50_ice_1",
      "v50_ice_2",
      "v50_ice_3",
      "v50_ice_4",
      "v50_ice_5",
      "v50_lightning_1",
      "v50_lightning_2",
      "v50_lightning_3",
      "v50_lightning_4",
      "v50_lightning_5",
      "v50_earth_1",
      "v50_earth_2",
      "v50_earth_3",
      "v50_earth_4",
      "v50_earth_5",
      "v50_wind_1",
      "v50_wind_2",
      "v50_wind_3",
      "v50_wind_4",
      "v50_wind_5",
      "v50_water_1",
      "v50_water_2",
      "v50_water_3",
      "v50_water_4",
      "v50_water_5",
      "v50_holy_1",
      "v50_holy_2",
      "v50_holy_3",
      "v50_holy_4",
      "v50_holy_5",
      "v50_dark_1",
      "v50_dark_2",
      "v50_dark_3",
      "v50_dark_4",
      "v50_dark_5",
      "v50_arcane_1",
      "v50_arcane_2",
      "v50_arcane_3",
      "v50_arcane_4",
      "v50_arcane_5",
      "v50_healing_1",
      "v50_healing_2",
      "v50_healing_3",
      "v50_healing_4",
      "v50_healing_5"
    ]
  },
  {
    "id": "v50_physical_shop",
    "name": "v50 Physical Shop",
    "description": "Excel-imported skill/spell library: v50 Physical Shop.",
    "stock": [
      "v50_sword_1",
      "v50_sword_2",
      "v50_sword_3",
      "v50_sword_4",
      "v50_sword_5",
      "v50_axe_1",
      "v50_axe_2",
      "v50_axe_3",
      "v50_axe_4",
      "v50_axe_5",
      "v50_spear_1",
      "v50_spear_2",
      "v50_spear_3",
      "v50_spear_4",
      "v50_spear_5",
      "v50_dagger_1",
      "v50_dagger_2",
      "v50_dagger_3",
      "v50_dagger_4",
      "v50_dagger_5",
      "v50_bow_1",
      "v50_bow_2",
      "v50_bow_3",
      "v50_bow_4",
      "v50_bow_5",
      "v50_shield_1",
      "v50_shield_2",
      "v50_shield_3",
      "v50_shield_4",
      "v50_shield_5",
      "v50_staff_1",
      "v50_staff_2",
      "v50_staff_3",
      "v50_staff_4",
      "v50_staff_5",
      "v50_unarmed_1",
      "v50_unarmed_2",
      "v50_unarmed_3",
      "v50_unarmed_4",
      "v50_unarmed_5",
      "v50_heavy_weapon_1",
      "v50_heavy_weapon_2",
      "v50_heavy_weapon_3",
      "v50_heavy_weapon_4",
      "v50_heavy_weapon_5",
      "v50_catalyst_1",
      "v50_catalyst_2",
      "v50_catalyst_3",
      "v50_catalyst_4",
      "v50_catalyst_5"
    ]
  }
];

export const ABILITY_FILTER_OPTIONS = {
  "libraries": [
    "all",
    "advanced_skill_library",
    "advanced_spell_library",
    "dragonkin_dragon_evolution",
    "dragonkin_dragon_race",
    "skill_library",
    "starter_skill_skill_library",
    "starter_spell_skill_library",
    "v26_ability_shop",
    "v50_magic_shop",
    "v50_physical_shop"
  ],
  "kinds": [
    "all",
    "hybrid",
    "intrinsic",
    "passive",
    "skill",
    "spell",
    "support"
  ],
  "ranks": [
    "all",
    "Common",
    "Extra",
    "Hidden",
    "Intrinsic",
    "Rare",
    "Ultimate",
    "Unique"
  ]
};
