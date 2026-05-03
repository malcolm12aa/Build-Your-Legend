export const EVENTS = [
  { id: "lost_cache", name: "Lost Adventurer Cache", type: "reward", weight: 4, text: "You find a half-buried satchel beneath a cracked stair.", gold: [15, 45], items: ["minor_potion", "camp_ration"] },
  { id: "mana_fountain", name: "Mana Fountain", type: "restore", weight: 3, text: "A blue fountain hums with clean mana.", restore: { hp: 20, mana: 35, stamina: 15 } },
  { id: "training_echo", name: "Training Echo", type: "xp", weight: 3, text: "A ghostly instructor corrects your stance before fading.", xp: 45 },
  { id: "trapped_chest", name: "Trapped Chest", type: "risk", weight: 3, text: "A chest clicks open, then hisses with old poison needles.", damage: [12, 30], gold: [25, 70], status: "poison" },
  { id: "wandering_recruit", name: "Wandering Recruit", type: "recruit", weight: 2, text: "A lone adventurer offers to join your run." },
  { id: "secret_marker", name: "Secret Class Marker", type: "dust", weight: 1, text: "You scrape shining dust from a sealed class monument.", relicDust: 1 }
];
