export const BATTLE_MODIFIERS = [
  {
    id: "clear_field",
    name: "Clear Field",
    description: "No battlefield pressure. Both sides fight normally.",
    weight: 5,
    effects: { elementsBoosted: [], elementsWeakened: [] }
  },
  {
    id: "rainfall",
    name: "Rainfall",
    description: "Cold rain slicks the floor. Fire weakens, lightning and water-like magic become more dangerous.",
    weight: 2,
    effects: { elementsBoosted: ["lightning", "ice"], elementsWeakened: ["fire"], playerStaminaRegen: -1 }
  },
  {
    id: "darkness",
    name: "Darkness",
    description: "The lights die low. Dark attacks sharpen while light becomes the safest answer.",
    weight: 2,
    effects: { elementsBoosted: ["dark"], elementsWeakened: ["physical"], enemyAccuracyPressure: 1 }
  },
  {
    id: "sacred_ground",
    name: "Sacred Ground",
    description: "Ancient sigils glow beneath the combatants. Light and healing are favored, dark power is suppressed.",
    weight: 1,
    effects: { elementsBoosted: ["light"], elementsWeakened: ["dark"], healingBoost: 0.12 }
  },
  {
    id: "mana_storm",
    name: "Mana Storm",
    description: "Mana arcs through the room. Spells hit harder, but resource management becomes more dangerous.",
    weight: 1,
    effects: { elementsBoosted: ["arcane", "fire", "ice", "lightning", "wind"], elementsWeakened: [], spellBoost: 0.15 }
  },
  {
    id: "stone_pressure",
    name: "Stone Pressure",
    description: "The room grows heavy. Physical armor improves, but earth enemies become harder to break.",
    weight: 1,
    effects: { elementsBoosted: ["earth", "physical"], elementsWeakened: ["wind"], armorBoost: 0.1 }
  }
];
