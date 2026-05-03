// Build Your Legend data split from js/core/00_game_core.js
// Keep loaded before the core systems file.

const FOREST_ENEMIES = [
    {
        name: 'Lost Soul', emoji: '👻', hp: 48, atk: 9, exp: 15, gold: 12,
        lore: 'A wandering spirit still searching for something it has long forgotten.',
        moves: [
            { name: 'lunge' },
            { name: 'wail',        status: 'fear',  statusChance: 0.35 },
            { name: 'chill touch', status: 'sleep', statusChance: 0.25 },
        ],
    },
    {
        name: 'Forest Goblin', emoji: '👺', hp: 75, atk: 16, exp: 28, gold: 24,
        lore: 'A cunning little beast with a rusty blade and an ugly temper.',
        moves: [
            { name: 'slash', status: 'bleed',  statusChance: 0.25 },
            { name: 'stab',  status: 'bleed',  statusChance: 0.30 },
            { name: 'bite',  status: 'poison', statusChance: 0.25 },
        ],
    },
    {
        name: 'Hollow Warrior', emoji: '💀', hp: 120, atk: 26, exp: 48, gold: 40,
        lore: 'An undead knight stripped of all purpose, wielding darkness itself.',
        moves: [
            { name: 'heavy slash', status: 'weaken',    statusChance: 0.30 },
            { name: 'shield bash', status: 'stun',      statusChance: 0.25 },
            { name: 'dark stab',   status: 'bleed',     statusChance: 0.30 },
            { name: 'hex',         status: 'confusion', statusChance: 0.20 },
        ],
    },
    {
        name: 'Shadow Beast', emoji: '🐺', hp: 170, atk: 36, exp: 70, gold: 58,
        lore: 'A massive predator born from the abyss itself. Its eyes glow red.',
        moves: [
            { name: 'savage bite',  status: 'poison',    statusChance: 0.30 },
            { name: 'claw swipe',   status: 'bleed',     statusChance: 0.35 },
            { name: 'howl',         status: 'confusion', statusChance: 0.30 },
            { name: 'frost breath', status: 'freeze',    statusChance: 0.20 },
        ],
    },
    {
        name: 'Cursed Treant', emoji: '🌳', hp: 210, atk: 42, exp: 88, gold: 70,
        lore: 'An ancient tree that drank cursed water for centuries. Its roots reach into the underworld.',
        moves: [
            { name: 'root slam',     status: 'stun',    statusChance: 0.35 },
            { name: 'spore cloud',   status: 'poison',  statusChance: 0.30 },
            { name: 'branch whip',   status: 'bleed',   statusChance: 0.28 },
            { name: 'dark pulse',    status: 'weaken',  statusChance: 0.25 },
        ],
    },
    {
        name: 'Death Knight', emoji: '🛡', hp: 260, atk: 52, exp: 110, gold: 90,
        lore: 'A fallen paladin resurrected by dark magic. Serves no god — only destruction.',
        moves: [
            { name: 'dark slash',    status: 'doom',      statusChance: 0.12 },
            { name: 'shield bash',   status: 'stun',      statusChance: 0.30 },
            { name: 'necrotic aura', status: 'weaken',    statusChance: 0.35 },
            { name: 'death grip',    status: 'paralysis', statusChance: 0.25 },
        ],
    },
];

const COAST_ENEMIES = [
    {
        name: 'Marine Grunt', emoji: '🪖', hp: 58, atk: 12, exp: 20, gold: 18,
        lore: "A young Marine enforcing the World Government's justice — by the book, no exceptions.",
        moves: [
            { name: 'saber slash' },
            { name: 'justice kick',  status: 'stun',   statusChance: 0.25 },
            { name: 'rifle volley',  status: 'weaken', statusChance: 0.20 },
        ],
    },
    {
        name: "Fishman Pirate", emoji: '🐟', hp: 88, atk: 20, exp: 35, gold: 28,
        lore: "One of Arlong's crew. Twice as strong as a human — and they know it.",
        moves: [
            { name: 'fishman karate',  status: 'bleed',  statusChance: 0.30 },
            { name: 'water shot',      status: 'stun',   statusChance: 0.25 },
            { name: 'fin blade slash', status: 'bleed',  statusChance: 0.30 },
        ],
    },
    {
        name: 'Don Krieg Soldier', emoji: '💣', hp: 115, atk: 26, exp: 52, gold: 42,
        lore: "A hardened soldier from the Krieg Pirates' armada. Loaded with hidden weapons.",
        moves: [
            { name: 'needle gun',     status: 'bleed',  statusChance: 0.30 },
            { name: 'poison gas MH5', status: 'poison', statusChance: 0.35 },
            { name: 'armor bash',     status: 'stun',   statusChance: 0.20 },
        ],
    },
    {
        name: 'Sea King', emoji: '🦕', hp: 195, atk: 38, exp: 82, gold: 65,
        lore: "A colossal sea creature that rules the East Blue. Its roar shakes the ocean floor.",
        moves: [
            { name: 'crushing bite', status: 'bleed',   statusChance: 0.35 },
            { name: 'tail slam',     status: 'stun',    statusChance: 0.30 },
            { name: 'sea breath',    status: 'freeze',  statusChance: 0.25 },
            { name: 'deep roar',     status: 'fear',    statusChance: 0.30 },
        ],
    },
    {
        name: 'CP9 Agent', emoji: '🕶', hp: 150, atk: 34, exp: 65, gold: 52,
        lore: "A World Government assassin trained in Rokushiki. Six Powers make them barely human.",
        moves: [
            { name: 'shigan',        status: 'bleed',     statusChance: 0.35 },
            { name: 'soru strike',   status: 'stun',      statusChance: 0.28 },
            { name: 'geppo kick',    status: 'paralysis', statusChance: 0.22 },
        ],
    },
    {
        name: "Yonko Underling", emoji: '☠', hp: 240, atk: 48, exp: 105, gold: 85,
        lore: "A veteran crew member sworn to one of the Four Emperors. Every scar has a story.",
        moves: [
            { name: 'haki punch',    status: 'stun',    statusChance: 0.30 },
            { name: 'armament guard',status: 'weaken',  statusChance: 0.28 },
            { name: 'conqueror wave',status: 'fear',    statusChance: 0.25 },
            { name: 'slash flurry',  status: 'bleed',   statusChance: 0.32 },
        ],
    },
];

const DEMON_ENEMIES = [
    {
        name: 'Temple Demon', emoji: '👹', hp: 92, atk: 22, exp: 38, gold: 32,
        lore: "A demon turned from a humble monk centuries ago. Preys on pilgrims who stray from the path.",
        moves: [
            { name: 'claw rake',      status: 'bleed',  statusChance: 0.28 },
            { name: 'devour',         status: 'poison', statusChance: 0.25 },
            { name: 'berserk charge', status: 'stun',   statusChance: 0.20 },
        ],
    },
    {
        name: 'Swamp Demon', emoji: '🐊', hp: 118, atk: 28, exp: 55, gold: 44,
        lore: "A demon that creates pocket dimensions to trap its prey, dragging them into the dark.",
        moves: [
            { name: 'dimension grab',  status: 'paralysis', statusChance: 0.30 },
            { name: 'vine trap',       status: 'freeze',    statusChance: 0.25 },
            { name: 'acid spit',       status: 'burn',      statusChance: 0.30 },
        ],
    },
    {
        name: 'Mutant Demon', emoji: '🧟', hp: 148, atk: 34, exp: 72, gold: 58,
        lore: "A demon who absorbed dozens of victims and mutated beyond recognition.",
        moves: [
            { name: 'blood whip',    status: 'bleed',     statusChance: 0.35 },
            { name: 'terror shriek', status: 'fear',      statusChance: 0.30 },
            { name: 'acid volley',   status: 'burn',      statusChance: 0.28 },
            { name: 'plague touch',  status: 'confusion', statusChance: 0.22 },
        ],
    },
    {
        name: 'Upper Moon Demon', emoji: '🌑', hp: 220, atk: 46, exp: 100, gold: 82,
        lore: "One of Muzan's elite Twelve Kizuki. A demon of overwhelming, regenerating power.",
        moves: [
            { name: 'blood demon art', status: 'doom',      statusChance: 0.15 },
            { name: 'moon strike',     status: 'bleed',     statusChance: 0.38 },
            { name: 'nightmare veil',  status: 'fear',      statusChance: 0.32 },
            { name: 'cursed thorns',   status: 'paralysis', statusChance: 0.28 },
        ],
    },
    {
        name: 'Blood Demon Archer', emoji: '🏹', hp: 165, atk: 40, exp: 85, gold: 68,
        lore: "A demon who developed a long-range Blood Demon Art. It rains needles of crystallised blood.",
        moves: [
            { name: 'blood needle volley', status: 'bleed',  statusChance: 0.40 },
            { name: 'crimson barrage',     status: 'poison', statusChance: 0.30 },
            { name: 'arterial burst',      status: 'weaken', statusChance: 0.28 },
        ],
    },
    {
        name: 'Kokushibo Remnant', emoji: '🌙', hp: 290, atk: 58, exp: 130, gold: 105,
        lore: "A fragment of Upper Moon One's power given form. Moon Breathing tears through defences like paper.",
        moves: [
            { name: 'moon breathing: 1st', status: 'bleed',     statusChance: 0.40 },
            { name: 'moon breathing: 3rd', status: 'doom',      statusChance: 0.14 },
            { name: 'demon eye gaze',      status: 'petrify',   statusChance: 0.25 },
            { name: 'crescent slash',      status: 'paralysis', statusChance: 0.30 },
        ],
    },
];

const CURSE_ENEMIES = [
    {
        name: 'Grade 4 Curse', emoji: '👾', hp: 85, atk: 22, exp: 42, gold: 35,
        lore: "A low-grade cursed spirit born from petty human fears. Weak, but still dangerous to the unprepared.",
        moves: [
            { name: 'curse lash',  status: 'weaken', statusChance: 0.25 },
            { name: 'fear pulse',  status: 'fear',   statusChance: 0.30 },
            { name: 'spirit claw' },
        ],
    },
    {
        name: 'Finger Bearer', emoji: '🖐', hp: 145, atk: 32, exp: 68, gold: 55,
        lore: "A special-grade curse carrying one of Ryomen Sukuna's cursed fingers. Extremely hostile.",
        moves: [
            { name: 'cursed strike',      status: 'bleed',     statusChance: 0.32 },
            { name: 'black hole art',     status: 'doom',      statusChance: 0.12 },
            { name: 'domain resonance',   status: 'paralysis', statusChance: 0.28 },
        ],
    },
    {
        name: 'Mahito', emoji: '☯', hp: 195, atk: 42, exp: 95, gold: 78,
        lore: "A powerful curse that manipulates the shape of the human soul. Born from humanity's hatred of each other.",
        moves: [
            { name: 'idle transfiguration', status: 'petrify', statusChance: 0.28 },
            { name: 'soul distortion',      status: 'stun',    statusChance: 0.30 },
            { name: 'body repel',           status: 'weaken',  statusChance: 0.32 },
            { name: 'curse amplify',        status: 'doom',    statusChance: 0.10 },
        ],
    },
    {
        name: 'Special Grade Manifestation', emoji: '🌀', hp: 255, atk: 54, exp: 120, gold: 98,
        lore: "A special-grade cursed spirit at full power — the kind Gojo himself would take seriously.",
        moves: [
            { name: 'infinite void echo',  status: 'stun',      statusChance: 0.35 },
            { name: 'cursed technique',    status: 'doom',      statusChance: 0.15 },
            { name: 'soul shatter',        status: 'petrify',   statusChance: 0.28 },
            { name: 'black flash surge',   status: 'paralysis', statusChance: 0.32 },
        ],
    },
    {
        name: 'Transfigured Human', emoji: '🧬', hp: 130, atk: 36, exp: 72, gold: 58,
        lore: "A victim of Mahito's idle transfiguration. Their soul was warped — what remains barely qualifies as human.",
        moves: [
            { name: 'distorted lunge',  status: 'confusion', statusChance: 0.35 },
            { name: 'soul pulse',       status: 'weaken',    statusChance: 0.30 },
            { name: 'erratic strike' },
        ],
    },
    {
        name: 'Cursed Womb', emoji: '🥚', hp: 310, atk: 62, exp: 145, gold: 118,
        lore: "A special-grade cursed womb about to hatch. The power inside is barely contained — and it's very angry.",
        moves: [
            { name: 'curse eruption',  status: 'burn',      statusChance: 0.35 },
            { name: 'womb domain',     status: 'doom',      statusChance: 0.16 },
            { name: 'energy torrent',  status: 'paralysis', statusChance: 0.30 },
            { name: 'soul devour',     status: 'petrify',   statusChance: 0.28 },
        ],
    },
];

const SOUL_ENEMIES = [
    {
        name: 'Hollow', emoji: '🕳', hp: 105, atk: 26, exp: 55, gold: 44,
        lore: "A soul that lost its heart and became a monster. Driven by an endless hunger for other souls.",
        moves: [
            { name: 'cero blast',    status: 'burn',  statusChance: 0.28 },
            { name: 'claw swipe',    status: 'bleed', statusChance: 0.30 },
            { name: 'sonido strike', status: 'stun',  statusChance: 0.22 },
        ],
    },
    {
        name: 'Gillian', emoji: '🦊', hp: 175, atk: 38, exp: 88, gold: 72,
        lore: "A Menos Grande — a towering Hollow formed from thousands of devoured souls fused as one.",
        moves: [
            { name: 'grand cero',        status: 'burn',   statusChance: 0.32 },
            { name: 'spiritual pressure', status: 'weaken', statusChance: 0.30 },
            { name: 'crush',             status: 'stun',   statusChance: 0.28 },
        ],
    },
    {
        name: 'Arrancar', emoji: '💎', hp: 235, atk: 50, exp: 112, gold: 90,
        lore: "A Hollow that removed its mask and gained Shinigami-like powers. Combines both spiritual forces.",
        moves: [
            { name: 'resurreccion slash', status: 'bleed',     statusChance: 0.35 },
            { name: 'gran rey cero',      status: 'burn',      statusChance: 0.30 },
            { name: 'sonido barrage',     status: 'paralysis', statusChance: 0.28 },
            { name: 'hierro crush',       status: 'doom',      statusChance: 0.12 },
        ],
    },
    {
        name: 'Adjuchas', emoji: '🦴', hp: 185, atk: 44, exp: 95, gold: 78,
        lore: "An evolved Menos that retained enough will to keep changing. Faster and smarter than a Gillian — far more dangerous.",
        moves: [
            { name: 'cero barrage',      status: 'burn',    statusChance: 0.30 },
            { name: 'predator claw',     status: 'bleed',   statusChance: 0.35 },
            { name: 'spiritual crush',   status: 'weaken',  statusChance: 0.28 },
        ],
    },
    {
        name: 'Vasto Lorde', emoji: '👑', hp: 300, atk: 60, exp: 138, gold: 112,
        lore: "The peak of Hollow evolution — humanoid, intelligent, and stronger than most Captains. Almost nothing survives the encounter.",
        moves: [
            { name: 'omega cero',        status: 'doom',      statusChance: 0.16 },
            { name: 'reiatsu burst',     status: 'paralysis', statusChance: 0.30 },
            { name: 'sonido assassination', status: 'stun',   statusChance: 0.32 },
            { name: 'hierro rend',       status: 'bleed',     statusChance: 0.38 },
        ],
    },
    {
        name: 'Rogue Shinigami', emoji: '⚔', hp: 255, atk: 55, exp: 125, gold: 100,
        lore: "A Soul Reaper who abandoned the Gotei 13. Their Zanpakuto is in a permanent state of Shikai — and they have nothing left to lose.",
        moves: [
            { name: 'flash step cut',    status: 'bleed',     statusChance: 0.35 },
            { name: 'kido blast',        status: 'burn',      statusChance: 0.28 },
            { name: 'shikai release',    status: 'weaken',    statusChance: 0.30 },
            { name: 'spirit pressure',   status: 'fear',      statusChance: 0.25 },
        ],
    },
];

const SAIYAN_ENEMIES = [
    {
        name: 'Saibaman', emoji: '🌱', hp: 110, atk: 28, exp: 55, gold: 44,
        lore: 'Grown from seeds, these green creatures equal a low-class Saiyan warrior in power — expendable and explosive.',
        moves: [
            { name: 'claw strike',   status: 'bleed',  statusChance: 0.30 },
            { name: 'self-destruct', status: 'stun',   statusChance: 0.45 },
            { name: 'acid spit',     status: 'poison', statusChance: 0.30 },
        ],
    },
    {
        name: 'Frieza Soldier', emoji: '👽', hp: 160, atk: 38, exp: 78, gold: 62,
        lore: "An elite trooper of the Frieza Force. Trained since birth for planet conquest — ruthless and disciplined.",
        moves: [
            { name: 'energy blast',  status: 'burn',   statusChance: 0.30 },
            { name: 'ki barrage',    status: 'stun',   statusChance: 0.28 },
            { name: 'tail whip',     status: 'weaken', statusChance: 0.25 },
        ],
    },
    {
        name: 'Cell Jr.', emoji: '🧬', hp: 220, atk: 52, exp: 110, gold: 88,
        lore: "A perfect-gene offspring of Cell, created during the Cell Games. Pure aggression condensed into a tiny sadistic form.",
        moves: [
            { name: 'ki blast flurry', status: 'burn',      statusChance: 0.35 },
            { name: 'tail absorb',     status: 'weaken',    statusChance: 0.40 },
            { name: 'regeneration bite', status: 'bleed',   statusChance: 0.35 },
            { name: 'death beam',      status: 'paralysis', statusChance: 0.30 },
        ],
    },
    {
        name: 'Frieza: Second Form', emoji: '🐲', hp: 300, atk: 65, exp: 145, gold: 118,
        lore: "Power multiplied a hundredfold. Frieza's second transformation towers over the battlefield like a demon god.",
        moves: [
            { name: 'death ball',    status: 'doom',      statusChance: 0.15 },
            { name: 'death saucer',  status: 'bleed',     statusChance: 0.40 },
            { name: 'nova strike',   status: 'stun',      statusChance: 0.35 },
            { name: 'ki suppression',status: 'weaken',    statusChance: 0.45 },
        ],
    },
    {
        name: 'Android 19', emoji: '🤖', hp: 260, atk: 58, exp: 128, gold: 102,
        lore: 'An energy-absorbing android built by Dr. Gero. Every punch you land makes it stronger — it feeds on your power.',
        moves: [
            { name: 'energy absorption', status: 'weaken', statusChance: 0.50 },
            { name: 'ki discharge',      status: 'burn',   statusChance: 0.30 },
            { name: 'android strike',    status: 'stun',   statusChance: 0.30 },
        ],
    },
    {
        name: 'Majin Buu Fragment', emoji: '🍬', hp: 340, atk: 72, exp: 165, gold: 135,
        lore: "A piece of Majin Buu that reformed into a mini-Buu. Bouncy, nearly unkillable, and horrifyingly powerful.",
        moves: [
            { name: 'buu beam',          status: 'doom',      statusChance: 0.18 },
            { name: 'chocolate cannon',  status: 'confusion', statusChance: 0.45 },
            { name: 'regenerate slam',   status: 'stun',      statusChance: 0.35 },
            { name: 'absorption touch',  status: 'paralysis', statusChance: 0.35 },
        ],
    },
];

const GUILD_ENEMIES = [
    {
        name: 'Dark Mage', emoji: '🧙', hp: 140, atk: 35, exp: 72, gold: 58,
        lore: 'A mage who turned to darkness for power. Banned from the Magic Council — now serves whoever pays most.',
        moves: [
            { name: 'dark magic blast', status: 'weaken',    statusChance: 0.30 },
            { name: 'shadow bind',      status: 'paralysis', statusChance: 0.35 },
            { name: 'curse mark',       status: 'burn',      statusChance: 0.28 },
        ],
    },
    {
        name: 'Etherion Soldier', emoji: '💠', hp: 195, atk: 48, exp: 98, gold: 78,
        lore: "A warrior empowered by Etherion — the council's satellite magic cannon. Its body crackles with unstable energy.",
        moves: [
            { name: 'etherion burst',  status: 'burn',   statusChance: 0.35 },
            { name: 'magical pressure',status: 'weaken', statusChance: 0.40 },
            { name: 'unstable pulse',  status: 'stun',   statusChance: 0.30 },
        ],
    },
    {
        name: 'Spriggan Elite', emoji: '⚜', hp: 265, atk: 62, exp: 132, gold: 108,
        lore: "One of the Spriggan 12 — the emperor's personal shield mages. Their magic surpasses most guild masters.",
        moves: [
            { name: 'ice devil slayer', status: 'freeze',    statusChance: 0.40 },
            { name: 'repelling magic',  status: 'weaken',    statusChance: 0.40 },
            { name: 'irene field',      status: 'confusion', statusChance: 0.35 },
            { name: 'august beam',      status: 'doom',      statusChance: 0.15 },
        ],
    },
    {
        name: 'Acnologia Fragment', emoji: '🐉', hp: 380, atk: 80, exp: 185, gold: 150,
        lore: "A shard of Acnologia's consciousness inhabiting a dragon corpse. The Black Dragon of the Apocalypse — even a piece is catastrophic.",
        moves: [
            { name: 'dragon roar',      status: 'fear',   statusChance: 0.55 },
            { name: 'black dragon claw',status: 'bleed',  statusChance: 0.45 },
            { name: 'magic nullify',    status: 'weaken', statusChance: 0.50 },
            { name: 'apocalypse breath',status: 'doom',   statusChance: 0.20 },
        ],
    },
];

const NARUTO_ENEMIES = [
    {
        name: 'Academy Genin', emoji: '🥷', hp: 55, atk: 10, exp: 18, gold: 14,
        lore: 'A fresh Academy graduate — still learning the basics but eager to prove themselves.',
        moves: [
            { name: 'shuriken throw' },
            { name: 'taijutsu rush', status: 'stun',   statusChance: 0.20 },
            { name: 'clone trick',   status: 'confusion', statusChance: 0.25 },
        ],
    },
    {
        name: 'Rogue Ninja', emoji: '🗡', hp: 85, atk: 18, exp: 32, gold: 26,
        lore: "Abandoned their village and their oath. Skills honed by survival on the run.",
        moves: [
            { name: 'kunai barrage',  status: 'bleed',  statusChance: 0.28 },
            { name: 'wire trap',      status: 'paralysis', statusChance: 0.35 },
            { name: 'smoke bomb rush', status: 'confusion', statusChance: 0.25 },
        ],
    },
    {
        name: 'Chunin Gate Guard', emoji: '⛩', hp: 120, atk: 27, exp: 52, gold: 42,
        lore: 'A Chunin assigned to border duty. Tougher than they look — they passed the exams for a reason.',
        moves: [
            { name: 'earth wall slam', status: 'stun',   statusChance: 0.30 },
            { name: 'substitution counter', status: 'confusion', statusChance: 0.28 },
            { name: 'wind blade',      status: 'bleed',  statusChance: 0.28 },
        ],
    },
    {
        name: 'Missing-nin Tracker', emoji: '🎭', hp: 168, atk: 36, exp: 72, gold: 58,
        lore: 'Sent to eliminate defectors. Carries lethal compounds and knows how to use them silently.',
        moves: [
            { name: 'poison needle volley', status: 'poison',   statusChance: 0.45 },
            { name: 'chakra suppression',   status: 'weaken',   statusChance: 0.35 },
            { name: 'paralysis seal',       status: 'paralysis', statusChance: 0.30 },
        ],
    },
    {
        name: 'Akatsuki Scout', emoji: '🌀', hp: 238, atk: 50, exp: 106, gold: 85,
        lore: 'A reconnaissance agent for the Akatsuki. Even scouts carry S-rank level techniques.',
        moves: [
            { name: 'jutsu barrage',  status: 'stun',   statusChance: 0.30 },
            { name: 'shadow puppet',  status: 'paralysis', statusChance: 0.38 },
            { name: 'explosive tag',  status: 'burn',   statusChance: 0.35 },
            { name: 'death seal',     status: 'doom',   statusChance: 0.12 },
        ],
    },
];

const STARTER_COVE_ENEMIES = [
    {
        name: 'Harbor Bandit', emoji: '🔪', hp: 52, atk: 9, exp: 16, gold: 13,
        lore: 'A desperate criminal who preys on arriving travellers. More bark than bite.',
        moves: [
            { name: 'cheap shot' },
            { name: 'sand throw', status: 'confusion', statusChance: 0.30 },
        ],
    },
    {
        name: 'Pirate Scout', emoji: '🏴‍☠️', hp: 80, atk: 17, exp: 30, gold: 24,
        lore: "A lookout for a small pirate crew. Slippery and mean.",
        moves: [
            { name: 'saber slash', status: 'bleed',   statusChance: 0.25 },
            { name: 'flintlock',   status: 'stun',    statusChance: 0.22 },
        ],
    },
    {
        name: 'Mercenary', emoji: '⚔', hp: 114, atk: 25, exp: 48, gold: 38,
        lore: "A hired blade with no loyalty except to coin. Skilled in the basics.",
        moves: [
            { name: 'heavy strike', status: 'stun',   statusChance: 0.25 },
            { name: 'rend armour',  status: 'weaken', statusChance: 0.30 },
            { name: 'bleeding cut', status: 'bleed',  statusChance: 0.28 },
        ],
    },
    {
        name: 'Smuggler Boss', emoji: '💰', hp: 162, atk: 34, exp: 68, gold: 55,
        lore: "Controls the cove's black market. Dirty tricks and dirty gold.",
        moves: [
            { name: 'ambush',          status: 'stun',   statusChance: 0.30 },
            { name: 'poison vial',     status: 'poison', statusChance: 0.40 },
            { name: 'intimidation',    status: 'fear',   statusChance: 0.30 },
        ],
    },
    {
        name: 'Black Market Lord', emoji: '👑', hp: 235, atk: 48, exp: 100, gold: 82,
        lore: "The cove's warlord. Everyone on this dock owes them something — or has paid the price.",
        moves: [
            { name: 'dominance strike', status: 'weaken',  statusChance: 0.35 },
            { name: 'terror aura',      status: 'fear',    statusChance: 0.35 },
            { name: 'execute order',    status: 'doom',    statusChance: 0.10 },
        ],
    },
];

const FAIRY_OUTSKIRTS_ENEMIES = [
    {
        name: 'Vulcan Beast', emoji: '🦍', hp: 128, atk: 25, exp: 50, gold: 40,
        lore: 'A ferocious Fairy Tail-world creature that kidnaps mages and hunters alike.',
        moves: [
            { name: 'boulder throw', status: 'stun',  statusChance: 0.28 },
            { name: 'savage bite',   status: 'bleed', statusChance: 0.30 },
        ],
    },
    {
        name: 'Dark Mage Initiate', emoji: '🧙', hp: 158, atk: 33, exp: 67, gold: 54,
        lore: 'A rookie from one of the banned dark guilds — learning forbidden magic on the run.',
        moves: [
            { name: 'dark magic burst', status: 'weaken',    statusChance: 0.30 },
            { name: 'shadow bind',      status: 'paralysis', statusChance: 0.32 },
        ],
    },
    {
        name: 'Phantom Lord Soldier', emoji: '💠', hp: 195, atk: 44, exp: 92, gold: 74,
        lore: "A remnant of Phantom Lord still carrying grudges against Fairy Tail.",
        moves: [
            { name: 'iron body crush', status: 'stun',  statusChance: 0.30 },
            { name: 'melt magic',      status: 'burn',  statusChance: 0.35 },
            { name: 'magical barrage', status: 'weaken', statusChance: 0.28 },
        ],
    },
    {
        name: 'Demon Eye Cult Priest', emoji: '👁', hp: 248, atk: 58, exp: 120, gold: 96,
        lore: 'A priest of the Tartaros shadow cult. Eye magic warps perception.',
        moves: [
            { name: 'eye seal',       status: 'confusion', statusChance: 0.55 },
            { name: 'dark pulse',     status: 'weaken',    statusChance: 0.35 },
            { name: 'binding curse',  status: 'paralysis', statusChance: 0.30 },
        ],
    },
    {
        name: 'Sub-Dragon', emoji: '🐉', hp: 328, atk: 70, exp: 152, gold: 122,
        lore: 'A lesser dragon driven from its mountain by the Dragon King. Still vastly powerful.',
        moves: [
            { name: 'dragon breath', status: 'burn',  statusChance: 0.40 },
            { name: 'wing crash',    status: 'stun',  statusChance: 0.30 },
            { name: 'roar of fear',  status: 'fear',  statusChance: 0.40 },
            { name: 'claw shred',    status: 'bleed', statusChance: 0.35 },
        ],
    },
];

const RUKONGAI_ENEMIES = [
    {
        name: 'Hollow Fragment', emoji: '🕳', hp: 132, atk: 26, exp: 54, gold: 43,
        lore: 'A weak Hollow that wandered through a Garganta. Still dangerous to ordinary souls.',
        moves: [
            { name: 'cero blast', status: 'burn',  statusChance: 0.30 },
            { name: 'claw swipe', status: 'bleed', statusChance: 0.28 },
        ],
    },
    {
        name: 'Gillian Menos', emoji: '🌑', hp: 180, atk: 39, exp: 84, gold: 67,
        lore: 'A towering Menos Grande composed of hundreds of fused souls. Its Cero alone flattens buildings.',
        moves: [
            { name: 'grande cero',  status: 'burn',  statusChance: 0.35 },
            { name: 'stomp',        status: 'stun',  statusChance: 0.28 },
            { name: 'reiatsu wave', status: 'weaken', statusChance: 0.30 },
        ],
    },
    {
        name: 'Adjuchas', emoji: '👹', hp: 228, atk: 52, exp: 112, gold: 90,
        lore: 'An evolved Hollow that gained sentience and cruelty. Hunting Shinigami for sport.',
        moves: [
            { name: 'sonido strike',  status: 'stun',      statusChance: 0.30 },
            { name: 'high-speed cero',status: 'burn',      statusChance: 0.38 },
            { name: 'spiritual crush',status: 'fear',      statusChance: 0.32 },
        ],
    },
    {
        name: 'Arrancar Fraccion', emoji: '💀', hp: 288, atk: 64, exp: 140, gold: 112,
        lore: 'A low-ranking Espada fragment. Even the weakest Arrancar outclass most Shinigami.',
        moves: [
            { name: 'cero especial',  status: 'burn',      statusChance: 0.40 },
            { name: 'hierro counter', status: 'weaken',    statusChance: 0.35 },
            { name: 'sonido combo',   status: 'paralysis', statusChance: 0.28 },
            { name: 'doom gaze',      status: 'doom',      statusChance: 0.10 },
        ],
    },
    {
        name: 'Espada Remnant', emoji: '⚡', hp: 345, atk: 74, exp: 158, gold: 126,
        lore: 'A sliver of a former Espada — beaten but not destroyed. What survives is only its hunger.',
        moves: [
            { name: 'gran rey cero',  status: 'burn', statusChance: 0.45 },
            { name: 'resurreccion',   status: 'fear', statusChance: 0.40 },
            { name: 'darkness dome',  status: 'doom', statusChance: 0.13 },
        ],
    },
];

const UA_ENEMIES = [
    {
        name: 'Villain Scout', emoji: '😈', hp: 208, atk: 39, exp: 84, gold: 67,
        lore: 'A League of Villains advance scout. Their Quirk is for information — and ambush.',
        moves: [
            { name: 'quirk burst',    status: 'stun',    statusChance: 0.28 },
            { name: 'blinding flash', status: 'confusion', statusChance: 0.35 },
        ],
    },
    {
        name: 'Mind-Control Villain', emoji: '🧠', hp: 250, atk: 49, exp: 108, gold: 86,
        lore: "Shinso's dark mirror. Uses brainwashing to turn your own instincts against you.",
        moves: [
            { name: 'brainwash',       status: 'confusion', statusChance: 0.55 },
            { name: 'puppetry strike', status: 'weaken',    statusChance: 0.40 },
        ],
    },
    {
        name: 'Nomu Experiment', emoji: '🧟', hp: 315, atk: 63, exp: 142, gold: 114,
        lore: 'A failed USJ-class Nomu. Multiple stolen Quirks make it unpredictable and vicious.',
        moves: [
            { name: 'multi-quirk slam',  status: 'stun',    statusChance: 0.35 },
            { name: 'regen assault',     status: 'bleed',   statusChance: 0.38 },
            { name: 'shock absorption',  status: 'weaken',  statusChance: 0.30 },
        ],
    },
    {
        name: 'Stain Disciple', emoji: '🗡', hp: 375, atk: 74, exp: 168, gold: 134,
        lore: "Converted by the Hero Killer's ideology. Carries blades stained in heroic blood.",
        moves: [
            { name: 'blood blade',       status: 'bleed',     statusChance: 0.40 },
            { name: 'ichor touch',       status: 'paralysis', statusChance: 0.38 },
            { name: 'hero judgment',     status: 'weaken',    statusChance: 0.35 },
        ],
    },
    {
        name: 'League Vanguard', emoji: '🌀', hp: 448, atk: 83, exp: 195, gold: 156,
        lore: "The League's shock troops. Warp gates and overwhelming force — no warning, no mercy.",
        moves: [
            { name: 'warp gate strike', status: 'stun',  statusChance: 0.35 },
            { name: 'decay touch',      status: 'doom',  statusChance: 0.14 },
            { name: 'terror assault',   status: 'fear',  statusChance: 0.40 },
        ],
    },
];

const HEAVENS_ARENA_ENEMIES = [
    {
        name: 'Floor Fighter', emoji: '🥊', hp: 215, atk: 41, exp: 88, gold: 70,
        lore: 'A dedicated martial artist who climbed to the 100th floor. Efficient and relentless.',
        moves: [
            { name: 'rapid combo',  },
            { name: 'pressure fist', status: 'stun',  statusChance: 0.28 },
            { name: 'footwork trap', status: 'weaken', statusChance: 0.28 },
        ],
    },
    {
        name: 'Nen Warrior', emoji: '✨', hp: 260, atk: 52, exp: 112, gold: 90,
        lore: 'A fighter who unlocked Nen here and never left. Their Hatsu is razor-focused.',
        moves: [
            { name: 'nen pulse',    status: 'bleed',     statusChance: 0.32 },
            { name: 'gyo pressure', status: 'weaken',    statusChance: 0.38 },
            { name: 'emission blast', status: 'stun',    statusChance: 0.28 },
        ],
    },
    {
        name: 'Gido Clone', emoji: '🌀', hp: 308, atk: 62, exp: 136, gold: 108,
        lore: 'Spinning tops of Nen fly from every direction. Gido trained here for months.',
        moves: [
            { name: 'top spin barrage', status: 'paralysis', statusChance: 0.40 },
            { name: 'confusion spin',   status: 'confusion', statusChance: 0.40 },
        ],
    },
    {
        name: 'Kastro Shadow', emoji: '🪞', hp: 365, atk: 73, exp: 162, gold: 130,
        lore: "Kastro's double-user technique — you're fighting two enemies in one.",
        moves: [
            { name: 'double strike',  status: 'stun',    statusChance: 0.30 },
            { name: 'mirror illusion',status: 'confusion', statusChance: 0.40 },
            { name: 'nen double',     status: 'weaken',  statusChance: 0.32 },
        ],
    },
    {
        name: 'Hisoka Shadow', emoji: '🃏', hp: 455, atk: 86, exp: 198, gold: 158,
        lore: "A fragment of Hisoka's Nen that outlasted his death. Bungee Gum clings like fate.",
        moves: [
            { name: 'bungee gum snare', status: 'paralysis', statusChance: 0.45 },
            { name: 'card slash',       status: 'bleed',     statusChance: 0.40 },
            { name: 'textured surprise',status: 'doom',      statusChance: 0.12 },
        ],
    },
];

const AMESTRIS_ENEMIES = [
    {
        name: 'Mannequin Soldier', emoji: '🪖', hp: 312, atk: 55, exp: 120, gold: 96,
        lore: 'Alchemical constructs created from sacrificed souls — hollow inside, merciless outside.',
        moves: [
            { name: 'stone lance',    status: 'stun',  statusChance: 0.30 },
            { name: 'array burst',    status: 'bleed', statusChance: 0.35 },
        ],
    },
    {
        name: 'Ishvalan Rebel', emoji: '🏹', hp: 358, atk: 65, exp: 140, gold: 112,
        lore: 'A survivor of the Ishval massacre. Righteous fury and honed survival skills.',
        moves: [
            { name: 'rubble burst',    status: 'burn',   statusChance: 0.35 },
            { name: 'staff destroy',   status: 'weaken', statusChance: 0.35 },
            { name: 'scar technique',  status: 'doom',   statusChance: 0.11 },
        ],
    },
    {
        name: 'State Alchemist', emoji: '⚗', hp: 405, atk: 75, exp: 162, gold: 130,
        lore: "A corrupt government alchemist. The Philosopher's Stone research has changed them.",
        moves: [
            { name: 'transmutation array', status: 'stun',      statusChance: 0.32 },
            { name: 'flame alchemy',       status: 'burn',      statusChance: 0.40 },
            { name: 'ground rupture',      status: 'confusion', statusChance: 0.30 },
        ],
    },
    {
        name: 'Envy Fragment', emoji: '🐍', hp: 475, atk: 87, exp: 185, gold: 148,
        lore: 'A shard of Envy retaining its shapeshifting nature. It wears your face.',
        moves: [
            { name: 'shapeshifter strike', status: 'fear',   statusChance: 0.40 },
            { name: 'identity crush',      status: 'weaken', statusChance: 0.40 },
            { name: 'true form surge',     status: 'stun',   statusChance: 0.35 },
        ],
    },
    {
        name: 'Homunculus Shard', emoji: '💠', hp: 568, atk: 102, exp: 222, gold: 178,
        lore: 'A fragment of the original Homunculus — the Father — crystallised with stone energy.',
        moves: [
            { name: 'stone empowerment', status: 'weaken', statusChance: 0.45 },
            { name: 'god hand',          status: 'stun',   statusChance: 0.35 },
            { name: 'philosopher doom',  status: 'doom',   statusChance: 0.15 },
        ],
    },
];

const CLOVER_ENEMIES = [
    {
        name: 'Eye of the Midnight Sun', emoji: '🌑', hp: 428, atk: 71, exp: 160, gold: 128,
        lore: "An elf-magic wielder from Licht's order. Ancient grudge and impossible mana capacity.",
        moves: [
            { name: 'elf magic burst', status: 'bleed',  statusChance: 0.35 },
            { name: 'mana suppression', status: 'weaken', statusChance: 0.38 },
        ],
    },
    {
        name: 'Devil Vessel Scout', emoji: '😈', hp: 495, atk: 84, exp: 185, gold: 148,
        lore: 'A human who accepted a devil contract. Their new power comes at a terrible cost.',
        moves: [
            { name: 'devil power surge', status: 'burn',  statusChance: 0.38 },
            { name: 'curse stigmata',    status: 'doom',  statusChance: 0.14 },
            { name: 'dark blast',        status: 'stun',  statusChance: 0.32 },
        ],
    },
    {
        name: 'Diamond Kingdom Mage', emoji: '💎', hp: 552, atk: 94, exp: 208, gold: 166,
        lore: "A mage engineered to be a weapon. Diamond Kingdom's magic experiments made them ruthless.",
        moves: [
            { name: 'reinforcement magic', status: 'paralysis', statusChance: 0.38 },
            { name: 'crystal spike array', status: 'bleed',     statusChance: 0.40 },
            { name: 'stone armour crush',  status: 'stun',      statusChance: 0.32 },
        ],
    },
    {
        name: 'Spade Kingdom Knight', emoji: '♠', hp: 625, atk: 110, exp: 238, gold: 190,
        lore: 'A vanguard of the Dark Triad. Dark magic infused with the power of a mid-rank devil.',
        moves: [
            { name: 'dark magic barrage', status: 'fear',  statusChance: 0.42 },
            { name: 'devil arm strike',   status: 'stun',  statusChance: 0.35 },
            { name: 'spatial rend',       status: 'doom',  statusChance: 0.14 },
        ],
    },
    {
        name: 'Megicula Fragment', emoji: '🩸', hp: 725, atk: 124, exp: 278, gold: 222,
        lore: 'A splinter of the curse devil Megicula. Every curse laid by this being has never been broken.',
        moves: [
            { name: 'curse magic: amplify', status: 'doom',    statusChance: 0.18 },
            { name: 'blood curse',          status: 'bleed',   statusChance: 0.45 },
            { name: 'wither',               status: 'weaken',  statusChance: 0.50 },
        ],
    },
];

const MUGEN_ENEMIES = [
    {
        name: "Enmu's Dream Soldier", emoji: '💤', hp: 562, atk: 89, exp: 200, gold: 160,
        lore: "A soul harvested by Lower Moon One and bound to guard the dream realm.",
        moves: [
            { name: 'dream realm',    status: 'sleep',     statusChance: 0.45 },
            { name: 'nightmare pulse', status: 'confusion', statusChance: 0.40 },
        ],
    },
    {
        name: 'Lower Moon Demon', emoji: '🌒', hp: 638, atk: 102, exp: 226, gold: 180,
        lore: "One of the Twelve Kizuki lower moons. Muzan chose them for a reason.",
        moves: [
            { name: 'blood demon art', status: 'bleed', statusChance: 0.42 },
            { name: 'moon fang',       status: 'doom',  statusChance: 0.14 },
            { name: 'terror shriek',   status: 'fear',  statusChance: 0.38 },
        ],
    },
    {
        name: 'Nightmare Construct', emoji: '👁', hp: 705, atk: 115, exp: 252, gold: 202,
        lore: 'A physical manifestation of the most terrible dreams. It follows you even awake.',
        moves: [
            { name: 'paralytic terror',  status: 'paralysis', statusChance: 0.42 },
            { name: 'fear avatar',       status: 'fear',      statusChance: 0.45 },
            { name: 'dream crush',       status: 'weaken',    statusChance: 0.38 },
        ],
    },
    {
        name: 'Enhanced Lower Moon', emoji: '🔮', hp: 785, atk: 127, exp: 282, gold: 226,
        lore: 'A demon who consumed other demons to rapidly ascend the Twelve Kizuki rankings.',
        moves: [
            { name: 'amplified BDA',    status: 'bleed',  statusChance: 0.45 },
            { name: 'demon surge',      status: 'stun',   statusChance: 0.35 },
            { name: 'consumed power',   status: 'doom',   statusChance: 0.14 },
        ],
    },
    {
        name: "Muzan's Cursed Clone", emoji: '🌑', hp: 885, atk: 144, exp: 325, gold: 260,
        lore: "A clone imbued with Muzan's direct blood. Even a fragment holds catastrophic regeneration.",
        moves: [
            { name: 'full power surge',  status: 'stun',   statusChance: 0.40 },
            { name: 'blood corruption',  status: 'doom',   statusChance: 0.18 },
            { name: 'muzan legacy',      status: 'weaken', statusChance: 0.50 },
        ],
    },
];

const MARINEFORD_ENEMIES = [
    {
        name: 'Vice Admiral', emoji: '🪖', hp: 578, atk: 91, exp: 205, gold: 164,
        lore: 'A Marine Vice Admiral carrying Haki of all three types. The backbone of the war effort.',
        moves: [
            { name: 'haki fist',      status: 'stun',   statusChance: 0.32 },
            { name: 'justice slash',  status: 'weaken', statusChance: 0.35 },
        ],
    },
    {
        name: 'Admiral Fragment', emoji: '⚡', hp: 658, atk: 106, exp: 235, gold: 188,
        lore: "A facet of an Admiral's Logia power given form. Natural forces made weapon.",
        moves: [
            { name: 'logia element', status: 'burn',   statusChance: 0.40 },
            { name: 'haki pressure', status: 'weaken', statusChance: 0.40 },
            { name: 'absolute power',status: 'stun',   statusChance: 0.32 },
        ],
    },
    {
        name: 'Pacifista', emoji: '🤖', hp: 735, atk: 119, exp: 262, gold: 210,
        lore: "A human weapon modelled on the former Warlord. Its Kizaru-class laser never misses.",
        moves: [
            { name: 'laser beam',    status: 'burn',  statusChance: 0.42 },
            { name: 'arm cannon',    status: 'stun',  statusChance: 0.35 },
            { name: 'system shock',  status: 'paralysis', statusChance: 0.30 },
        ],
    },
    {
        name: 'CP0 Agent', emoji: '🕶', hp: 815, atk: 132, exp: 292, gold: 234,
        lore: 'The World Government\'s shadow hand. Above the law — beyond the law.',
        moves: [
            { name: 'shigan piercing',  status: 'bleed',     statusChance: 0.40 },
            { name: 'rokuogan burst',   status: 'paralysis', statusChance: 0.38 },
            { name: 'absolute erasure', status: 'doom',      statusChance: 0.15 },
        ],
    },
    {
        name: 'Akainu Clone', emoji: '🌋', hp: 905, atk: 150, exp: 332, gold: 265,
        lore: "A construct of Sakazuki's will — absolute justice in magma form. It shows no mercy.",
        moves: [
            { name: 'magma fist',      status: 'burn', statusChance: 0.50 },
            { name: 'magma eruption',  status: 'doom', statusChance: 0.18 },
            { name: 'absolute justice',status: 'stun', statusChance: 0.40 },
        ],
    },
];

const CHIMERA_ENEMIES = [
    {
        name: 'Chimera Ant Soldier', emoji: '🐜', hp: 562, atk: 89, exp: 202, gold: 162,
        lore: 'Fused from dozens of species. Far exceeds human physical limits in every category.',
        moves: [
            { name: 'mandible crush', status: 'stun',  statusChance: 0.32 },
            { name: 'toxin bite',     status: 'poison', statusChance: 0.38 },
            { name: 'claw barrage',   status: 'bleed', statusChance: 0.35 },
        ],
    },
    {
        name: 'Officer Ant', emoji: '🦟', hp: 645, atk: 103, exp: 230, gold: 184,
        lore: 'A Chimera Ant officer with human DNA dominance and a self-developed Nen Hatsu.',
        moves: [
            { name: 'nen burst',       status: 'weaken',    statusChance: 0.40 },
            { name: 'officer command', status: 'confusion', statusChance: 0.35 },
            { name: 'mandible nen',    status: 'bleed',     statusChance: 0.38 },
        ],
    },
    {
        name: 'Ikalgo Fragment', emoji: '🦑', hp: 718, atk: 118, exp: 258, gold: 206,
        lore: "A remnant of the Chimera Ant Intelligence Division's assassin. Tentacle strikes from everywhere.",
        moves: [
            { name: 'ink cloud',       status: 'confusion', statusChance: 0.45 },
            { name: 'tentacle strike', status: 'paralysis', statusChance: 0.38 },
        ],
    },
    {
        name: 'Youpi Shard', emoji: '💢', hp: 798, atk: 130, exp: 288, gold: 230,
        lore: "A fragment of the Royal Guard's rage. It exists purely to destroy.",
        moves: [
            { name: 'rage explosion', status: 'stun',  statusChance: 0.40 },
            { name: 'monstrous form', status: 'fear',  statusChance: 0.42 },
            { name: 'unstoppable',    status: 'weaken', statusChance: 0.38 },
        ],
    },
    {
        name: 'Meruem Fragment', emoji: '👑', hp: 895, atk: 148, exp: 330, gold: 264,
        lore: 'A sliver of the Chimera Ant King himself. Even a fragment holds godlike Nen capacity.',
        moves: [
            { name: 'royal aura',      status: 'weaken', statusChance: 0.50 },
            { name: 'overwhelming nen',status: 'doom',   statusChance: 0.18 },
            { name: 'king assault',    status: 'stun',   statusChance: 0.40 },
        ],
    },
];

const CELL_ENEMIES = [
    {
        name: 'Cell Jr.', emoji: '💚', hp: 718, atk: 109, exp: 248, gold: 198,
        lore: "Cell spawned seven of these to torment the Z-Fighters' loved ones. Relentlessly powerful.",
        moves: [
            { name: 'ki blast barrage', status: 'stun',  statusChance: 0.32 },
            { name: 'tail slam',        status: 'bleed', statusChance: 0.38 },
        ],
    },
    {
        name: 'Semi-Perfect Cell', emoji: '🌀', hp: 815, atk: 124, exp: 282, gold: 226,
        lore: 'Cell before absorbing Android 18. Already surpasses most fighters at this stage.',
        moves: [
            { name: 'ki cannon',       status: 'burn',   statusChance: 0.38 },
            { name: 'wing shock',      status: 'paralysis', statusChance: 0.32 },
            { name: 'energy drain',    status: 'weaken', statusChance: 0.38 },
        ],
    },
    {
        name: 'Android Fragment', emoji: '🤖', hp: 895, atk: 136, exp: 315, gold: 252,
        lore: 'Infinite energy cell from Dr. Gero\'s design. It does not tire. It does not bleed.',
        moves: [
            { name: 'infinite energy surge', status: 'stun',      statusChance: 0.35 },
            { name: 'laser cannon',          status: 'burn',      statusChance: 0.40 },
            { name: 'android grip',          status: 'paralysis', statusChance: 0.32 },
        ],
    },
    {
        name: 'Perfect Cell Clone', emoji: '🧬', hp: 975, atk: 150, exp: 350, gold: 280,
        lore: 'Cloned from Cell\'s regenerated cells. Retains all the arrogance and all the power.',
        moves: [
            { name: 'solar kamehameha', status: 'burn', statusChance: 0.50 },
            { name: 'perfect ki blast', status: 'doom', statusChance: 0.17 },
            { name: 'regeneration taunt',status: 'weaken',statusChance: 0.40 },
        ],
    },
    {
        name: 'Cell Perfect Form', emoji: '🌟', hp: 1085, atk: 167, exp: 395, gold: 316,
        lore: 'Perfect Cell at maximum power. This is the being that humiliated Super Saiyan Vegeta.',
        moves: [
            { name: 'full power kamehameha', status: 'burn', statusChance: 0.55 },
            { name: 'final form surge',      status: 'doom', statusChance: 0.20 },
            { name: 'perfect absorption',    status: 'weaken',statusChance: 0.45 },
        ],
    },
];

const MONSTER_ENEMIES = [
    {
        name: 'Dragon-Level Monster', emoji: '🐲', hp: 725, atk: 112, exp: 252, gold: 202,
        lore: 'A Dragon-level disaster — top tier of the Monster Association\'s hierarchy.',
        moves: [
            { name: 'terror assault', status: 'fear',  statusChance: 0.45 },
            { name: 'mass destruction',status: 'stun', statusChance: 0.35 },
            { name: 'monster rampage', status: 'bleed',statusChance: 0.40 },
        ],
    },
    {
        name: 'Elder Centipede Shard', emoji: '🐛', hp: 825, atk: 126, exp: 286, gold: 228,
        lore: 'A piece of the Dragon-level entity. Each segment alone qualifies as a national threat.',
        moves: [
            { name: 'crush wave',     status: 'stun',   statusChance: 0.38 },
            { name: 'poison mandible',status: 'poison', statusChance: 0.42 },
            { name: 'body slam',      status: 'weaken', statusChance: 0.40 },
        ],
    },
    {
        name: 'Psykos Fragment', emoji: '🧿', hp: 905, atk: 140, exp: 318, gold: 254,
        lore: 'The psychic core of the Monster Association\'s leader. Reality bends under her gaze.',
        moves: [
            { name: 'psychic blast',   status: 'confusion', statusChance: 0.50 },
            { name: 'gravity crush',   status: 'weaken',    statusChance: 0.45 },
            { name: 'mind erase',      status: 'paralysis', statusChance: 0.35 },
        ],
    },
    {
        name: 'Garou — Hero Hunter', emoji: '🐺', hp: 995, atk: 154, exp: 355, gold: 284,
        lore: 'The Monster that hunts Heroes. Human Monster. Martial arts evolved beyond any limit.',
        moves: [
            { name: 'whirlwind iron cutting', status: 'bleed', statusChance: 0.45 },
            { name: 'flowing water rock smashing', status: 'stun', statusChance: 0.40 },
            { name: 'monster step',    status: 'doom', statusChance: 0.16 },
        ],
    },
    {
        name: 'Orochi Clone', emoji: '🐍', hp: 1105, atk: 170, exp: 400, gold: 320,
        lore: 'A clone of the Monster King. Hundreds of dragons erupt simultaneously from one body.',
        moves: [
            { name: 'dragon surge',   status: 'doom',      statusChance: 0.20 },
            { name: 'serpent coil',   status: 'paralysis', statusChance: 0.40 },
            { name: 'scale barrage',  status: 'bleed',     statusChance: 0.45 },
        ],
    },
];

const INFINITY_ENEMIES = [
    {
        name: 'Upper Moon Fragment', emoji: '🌕', hp: 732, atk: 113, exp: 255, gold: 204,
        lore: 'A splinter of the Twelve Kizuki upper moons. Even a shard holds catastrophic Blood Demon Arts.',
        moves: [
            { name: 'moon breathing',   status: 'bleed', statusChance: 0.45 },
            { name: 'cursed mark',      status: 'doom',  statusChance: 0.14 },
        ],
    },
    {
        name: 'Nakime Remnant', emoji: '🎵', hp: 828, atk: 128, exp: 288, gold: 230,
        lore: "The fortress biwa player's echo. The walls themselves attack.",
        moves: [
            { name: 'biwa fortress spike', status: 'stun',      statusChance: 0.38 },
            { name: 'dimensional rend',    status: 'confusion', statusChance: 0.42 },
            { name: 'fortress collapse',   status: 'paralysis', statusChance: 0.35 },
        ],
    },
    {
        name: 'Hantengu Clone', emoji: '😱', hp: 912, atk: 142, exp: 322, gold: 258,
        lore: 'An emotion of the Infinity Fortress Upper Moon — born of pure terror.',
        moves: [
            { name: 'fear emotion',    status: 'fear',      statusChance: 0.50 },
            { name: 'grudge strike',   status: 'weaken',    statusChance: 0.45 },
            { name: 'rage emanation',  status: 'stun',      statusChance: 0.38 },
        ],
    },
    {
        name: 'Gyokko Shard', emoji: '🐟', hp: 998, atk: 157, exp: 360, gold: 288,
        lore: 'A fragment of Upper Moon Five. Monstrous fish pour from his vases endlessly.',
        moves: [
            { name: 'death fish swarm', status: 'poison', statusChance: 0.50 },
            { name: 'fish blade rain',  status: 'bleed',  statusChance: 0.48 },
            { name: 'vase dimension',   status: 'doom',   statusChance: 0.16 },
        ],
    },
    {
        name: 'Doma Fragment', emoji: '❄', hp: 1105, atk: 174, exp: 405, gold: 324,
        lore: "The Flower of Death — Upper Moon Two's frozen paradise. The coldest smile in hell.",
        moves: [
            { name: 'lotus ice pillar',  status: 'freeze', statusChance: 0.50 },
            { name: 'fan of cold death', status: 'doom',   statusChance: 0.20 },
            { name: 'ice absorption',    status: 'weaken', statusChance: 0.45 },
        ],
    },
];

let ENEMY_TURN_DELAY = 750;

const RAID_BOSSES = [
  {name:'Nine-Tails Raid Manifestation', emoji:'🦊', hp:520, atk:42, exp:260, gold:320, lore:'A chakra disaster tears open a raid gate.', moves:[{name:'Tailed Beast Claw'},{name:'Bijuu Roar'},{name:'Chakra Bomb'}]},
  {name:'Soul King Fragment', emoji:'👑', hp:650, atk:48, exp:340, gold:430, lore:'A divine fragment bends the battlefield with spiritual pressure.', moves:[{name:'Royal Pressure'},{name:'Spirit Rend'},{name:'Judgment Pulse'}]},
  {name:'Founding Titan Echo', emoji:'🦴', hp:780, atk:55, exp:440, gold:520, lore:'A raid-class Titan echo rises beyond the walls.', moves:[{name:'Coordinate Crush'},{name:'Titan Command'},{name:'Bone Spear'}]},
  {name:'Chimera Ant King Shadow', emoji:'🐜', hp:900, atk:62, exp:600, gold:700, lore:'A king-level shadow adapts to every attack.', moves:[{name:'Royal Guard Blitz'},{name:'Nen Pressure'},{name:'Predator Strike'}]}
];

const CHALLENGE_ENEMIES = [
  {name:'Mirror Build Duelist', emoji:'🪞', hp:260, atk:32, exp:120, gold:120, lore:'A PvP-style mirror opponent built to test your current stats.', moves:[{name:'Mirror Strike'},{name:'Counter Build'},{name:'Burst Window'}]},
  {name:'Speed Meta Challenger', emoji:'⚡', hp:220, atk:38, exp:140, gold:140, lore:'A fast PvP-style opponent that punishes slow builds.', moves:[{name:'Tempo Break'},{name:'Quick Combo'},{name:'Pressure Dash'}]},
  {name:'Raid Tank Simulacrum', emoji:'🛡️', hp:420, atk:30, exp:160, gold:160, lore:'A defensive challenge dummy for testing sustained damage.', moves:[{name:'Shield Bash'},{name:'Guard Crush'},{name:'Attrition'}]}
];
