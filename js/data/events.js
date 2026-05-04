export const EVENTS = [
  { id: "lost_cache", name: "Lost Adventurer Cache", type: "reward", weight: 4, text: "You find a half-buried satchel beneath a cracked stair.", gold: [15, 45], items: ["minor_potion", "camp_ration"] },
  { id: "mana_fountain", name: "Mana Fountain", type: "restore", weight: 3, text: "A blue fountain hums with clean mana.", restore: { hp: 20, mana: 35, stamina: 15 } },
  { id: "training_echo", name: "Training Echo", type: "xp", weight: 3, text: "A ghostly instructor corrects your stance before fading.", xp: 45 },
  { id: "trapped_chest", name: "Trapped Chest", type: "risk", weight: 3, text: "A chest clicks open, then hisses with old poison needles.", damage: [12, 30], gold: [25, 70], status: "poison" },
  { id: "wandering_recruit", name: "Wandering Recruit", type: "recruit", weight: 2, text: "A lone adventurer offers to join your run." },
  { id: "secret_marker", name: "Secret Class Marker", type: "dust", weight: 1, text: "You scrape shining dust from a sealed class monument.", relicDust: 1 },
  { id: "ancient_shrine", name: "Ancient Shrine", type: "blessing", weight: 2, text: "A cracked shrine asks for courage. You touch the altar and feel fate answer.", goodStatus: "focus", badStatus: "weakened", relicDust: 1 },
  { id: "wandering_merchant", name: "Wandering Merchant", type: "shop", weight: 2, text: "A masked merchant unfolds a tiny shop from inside a cloak.", shopId: "roadside_outfitter" },
  { id: "locked_relic_chest", name: "Locked Relic Chest", type: "risk", weight: 2, text: "A locked chest pulses with old class energy. Forcing it open hurts, but the reward is real.", damage: [18, 42], gold: [45, 110], items: ["ember_gem"], relicDust: 1, status: "bleed" },
  { id: "strange_portal", name: "Strange Portal", type: "portal", weight: 1, text: "A spiral gate offers to skip ahead. The landing will not be gentle.", skipFloors: 2, damage: [10, 28], xp: 30 },
  { id: "storm_weather", name: "Dungeon Weather: Stormfront", type: "risk", weight: 2, text: "Lightning crawls through the hallway. You push through the storm and find charged supplies.", damage: [8, 24], items: ["mana_vial"], status: "stunned" },
  { id: "lore_discovery", name: "Lore Discovery", type: "xp", weight: 2, text: "You discover a wall of class-record runes. Studying them sharpens your build plan.", xp: 80 },
  { id: "hidden_training_room", name: "Hidden Training Room", type: "restore", weight: 2, text: "A sealed chamber contains practice weapons, healing chalk, and a quiet training mat.", restore: { hp: 35, mana: 20, stamina: 45 }, xp: 35 },
  { id: "mimic_bargain", name: "Mimic Bargain", type: "reward", weight: 1, text: "A chest with teeth agrees not to bite if you take only one prize.", gold: [60, 120], items: ["stamina_tonic", "cleanse_salve"] }
];
