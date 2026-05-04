export const RECRUITS = [
  {
    id: "mira_squire", name: "Mira the Squire", role: "Tank",
    personality: "Earnest, protective, and constantly taking notes about proper knight behavior.",
    passive: "Bulwark: sometimes intercepts a small part of incoming damage in future updates; currently adds steady shield pressure.",
    description: "A brave shield trainee who blocks small amounts of damage and keeps morale steady.",
    stats: { hp: 80, str: 5, dex: 2, int: 1, wis: 2, con: 7, cha: 3 }, skill: "shield_bash"
  },
  {
    id: "fen_archer", name: "Fen the Archer", role: "Striker",
    personality: "Quiet, observant, and weirdly good at finding safe paths through cursed halls.",
    passive: "Marked Shot: contributes reliable ranged damage every player turn.",
    description: "A quiet archer with steady ranged pressure and strong dungeon instincts.",
    stats: { hp: 58, str: 3, dex: 7, int: 1, wis: 4, con: 3, cha: 1 }, skill: "aimed_shot"
  },
  {
    id: "luma_acolyte", name: "Luma the Acolyte", role: "Healer",
    personality: "Kind, nervous, and determined to become the kind of healer who never runs away.",
    passive: "Emergency Prayer: her healing skills can restore your HP during battle.",
    description: "A gentle light caster who sometimes heals you during combat.",
    stats: { hp: 55, str: 1, dex: 2, int: 3, wis: 7, con: 3, cha: 5 }, skill: "mend"
  },
  {
    id: "garrick_brawler", name: "Garrick the Brawler", role: "Bruiser",
    personality: "Loud, loyal, and convinced every problem has a punch-shaped solution.",
    passive: "Heavy Hands: adds high physical chip damage during party actions.",
    description: "A tavern fighter with a heavy punch and no fear of ugly fights.",
    stats: { hp: 75, str: 7, dex: 3, int: 0, wis: 2, con: 6, cha: 2 }, skill: "power_strike"
  },
  {
    id: "nyx_trickster", name: "Nyx the Trickster", role: "Debuffer",
    personality: "Playful, suspicious, and always three jokes ahead of the room.",
    passive: "Dirty Trick: brings poison and status pressure to longer fights.",
    description: "A mischievous rogue who loves poison blades and enemy panic.",
    stats: { hp: 52, str: 2, dex: 8, int: 3, wis: 2, con: 2, cha: 5 }, skill: "venom_stab"
  },
  {
    id: "solen_chanter", name: "Solen the Chanter", role: "Support",
    personality: "Dramatic, confident, and absolutely certain every boss fight needs theme music.",
    passive: "Battle Hymn: supports the party with morale and control-focused skill pressure.",
    description: "A traveling singer who turns rhythm into battlefield momentum.",
    stats: { hp: 60, str: 2, dex: 3, int: 3, wis: 4, con: 3, cha: 8 }, skill: "inspire"
  },
  {
    id: "brina_bombwright", name: "Brina the Bombwright", role: "Specialist",
    personality: "Cheerful, reckless, and banned from three guild laboratories for educational reasons.",
    passive: "Controlled Blast: adds magic-leaning damage and item-flavored chaos.",
    description: "An alchemy specialist who solves ambushes with smoke, sparks, and questionable math.",
    stats: { hp: 57, str: 1, dex: 4, int: 7, wis: 5, con: 3, cha: 2 }, skill: "fire_bomb"
  }
];
