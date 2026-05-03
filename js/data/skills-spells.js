// Build Your Legend data split from js/core/00_game_core.js
// Keep loaded before the core systems file.

const SPELLS = [
    // ── Tier 1 ───────────────────────────────────────────────────
    {
        id: 'rasengan', name: 'Rasengan', anime: 'Naruto', cost: 120, mp: 20, power: 42,
        desc: "A spiraling orb of compressed chakra that grinds through anything on contact"
    },
    {
        id: 'transmutation', name: 'Fullmetal Transmutation', anime: 'Fullmetal Alchemist: Brotherhood', cost: 130, mp: 22, power: 50,
        status: 'weaken',
        desc: "Edward Elric reshapes the ground into a stone lance. Inflicts Weaken."
    },
    {
        id: 'ninpo_flame', name: 'Ninpo: Phoenix Flame', anime: "Hell's Paradise", cost: 145, mp: 25, power: 52,
        status: 'burn',
        desc: "Gabimaru's shinobi burst of concentrated Tao energy. Inflicts Burn."
    },
    {
        id: 'shinra_kick', name: 'Shinra Kick: Rapid Fire', anime: 'Fire Force', cost: 160, mp: 28, power: 58,
        status: 'stun',
        desc: "Shinra launches ignited kicks at blinding speed. Inflicts Stun."
    },
    {
        id: 'ora_rush', name: 'ORA ORA Rush', anime: "JoJo's Bizarre Adventure", cost: 160, mp: 30, power: 58,
        status: 'stun',
        desc: "Star Platinum's rapid barrage of devastating punches. Inflicts Stun."
    },
    // ── Tier 2 ───────────────────────────────────────────────────
    {
        id: 'gear_second', name: 'Gear Second: Jet Pistol', anime: 'One Piece', cost: 175, mp: 32, power: 65,
        selfBuff: 'haste',
        desc: "Luffy pumps blood at superhuman speed and fires a rubber fist. Grants self Haste."
    },
    {
        id: 'flame_breath', name: 'Flame Breathing: 1st Form', anime: 'Demon Slayer', cost: 190, mp: 35, power: 64,
        status: 'burn',
        desc: "A blazing sword slash channeling Total Concentration Breathing. Inflicts Burn."
    },
    {
        id: 'nen_jajanken', name: 'Nen: Jajanken — Paper', anime: 'Hunter x Hunter', cost: 195, mp: 36, power: 70,
        status: 'bleed',
        desc: "Gon's point-blank Nen explosion — pure explosive life force. Inflicts Bleed."
    },
    {
        id: 'black_flash', name: 'Black Flash', anime: 'Jujutsu Kaisen', cost: 210, mp: 38, power: 76,
        status: 'paralysis',
        desc: "Yuji triggers a black distortion of cursed energy at 0.000001s. Inflicts Paralysis."
    },
    // ── Tier 3 ───────────────────────────────────────────────────
    {
        id: 'detroit_smash', name: 'Detroit Smash', anime: 'My Hero Academia', cost: 220, mp: 42, power: 84,
        status: 'stun',
        desc: "Izuku channels 100% One For All into a shockwave punch. Inflicts Stun."
    },
    {
        id: 'kamehameha', name: 'Kamehameha', anime: 'Dragon Ball Z', cost: 230, mp: 42, power: 82,
        status: 'burn',
        desc: "A concentrated ki beam powerful enough to rearrange geography. Inflicts Burn."
    },
    {
        id: 'conquerors_haki', name: "Conqueror's Haki", anime: 'One Piece', cost: 240, mp: 45, power: 88,
        status: 'stun', selfBuff: 'bravery', aoe: true,
        desc: "Overwhelming willpower wave — hits ALL enemies. Inflicts Stun, grants self Bravery."
    },
    // ── Tier 4 (endgame) ─────────────────────────────────────────
    {
        id: 'amaterasu', name: 'Amaterasu', anime: 'Naruto', cost: 330, mp: 55, power: 100,
        status: 'burn', aoe: true,
        desc: "Black Mangekyo flames spread across ALL enemies — they never stop burning. Inflicts Burn."
    },
    {
        id: 'hollow_purple', name: 'Hollow Purple', anime: 'Jujutsu Kaisen', cost: 400, mp: 68, power: 125,
        status: 'doom', aoe: true,
        desc: "Gojo's Red + Blue annihilation sphere — obliterates ALL enemies. Inflicts Doom."
    },
    // ── Naruto extras ─────────────────────────────────────────────
    { id:'naruto_sc', name:'Shadow Clone Barrage', anime:'Naruto', cost:155, mp:28, power:58, status:'stun', aoe:true,
      desc:"Mass clone formation overwhelms ALL enemies. Inflicts Stun." },
    { id:'naruto_8g', name:'Eight Gates: Release', anime:'Naruto', cost:200, mp:38, power:80, selfBuff:'haste',
      desc:"Guy opens the forbidden gates — body surges beyond all limits. Grants Haste." },
    { id:'naruto_rn', name:'Reaper Death Seal', anime:'Naruto', cost:360, mp:60, power:110, status:'doom', aoe:true,
      desc:"The Shinigami's seal swallows ALL enemies. Inflicts Doom." },
    // ── Bleach ────────────────────────────────────────────────────
    { id:'bleach_sk', name:'Shikai Release', anime:'Bleach', cost:110, mp:18, power:44, status:'bleed',
      desc:"Zanpakuto spirit unleashed — spiritual slash. Inflicts Bleed." },
    { id:'bleach_kd', name:'Kido: Hado #31 Shakkaho', anime:'Bleach', cost:155, mp:26, power:60, status:'burn',
      desc:"Blue orb of destruction energy. Inflicts Burn." },
    { id:'bleach_gt', name:'Getsuga Tensho', anime:'Bleach', cost:185, mp:32, power:72, status:'bleed',
      desc:"Moon-fang wave of condensed black spiritual energy. Inflicts Bleed." },
    { id:'bleach_bk', name:'Bankai: Final Form', anime:'Bleach', cost:240, mp:44, power:88, selfBuff:'bravery',
      desc:"True Bankai released — overwhelming spiritual pressure. Grants Bravery." },
    { id:'bleach_mg', name:'Mugetsu', anime:'Bleach', cost:390, mp:65, power:120, status:'doom', aoe:true,
      desc:"The final Getsuga cuts through ALL enemies — absolute obliteration. Inflicts Doom." },
    // ── One Piece extras ──────────────────────────────────────────
    { id:'op_gp', name:'Gum-Gum Pistol', anime:'One Piece', cost:100, mp:16, power:40, status:'stun',
      desc:"Luffy's stretching rubber fist — basic but devastating. Inflicts Stun." },
    { id:'op_hk', name:'Armament Haki Strike', anime:'One Piece', cost:175, mp:30, power:70,
      desc:"Haki-hardened fist bypasses all defences — pure force." },
    { id:'op_g3', name:'Gear Third: Cannon', anime:'One Piece', cost:240, mp:45, power:92, status:'stun', aoe:true,
      desc:"Giant rubber limb smashes ALL enemies with concussive force. Inflicts Stun." },
    // ── Demon Slayer extras ───────────────────────────────────────
    { id:'ds_wb10', name:'Water Breathing: 10th Form', anime:'Demon Slayer', cost:145, mp:26, power:62, status:'bleed', aoe:true,
      desc:"Constant Flux — spinning water slashes hit ALL enemies. Inflicts Bleed." },
    { id:'ds_tcf', name:'Thunder Clap and Flash', anime:'Demon Slayer', cost:170, mp:30, power:70, status:'paralysis',
      desc:"Zenitsu's lightning-speed strike. Inflicts Paralysis." },
    { id:'ds_lb', name:'Love Breathing: Cat-Legged Winds', anime:'Demon Slayer', cost:200, mp:36, power:78, aoe:true,
      desc:"Mitsuri's sweeping serpentine slashes tear through ALL enemies." },
    { id:'ds_hk', name:'Hinokami Kagura: Burning Bones', anime:'Demon Slayer', cost:300, mp:55, power:105, status:'burn',
      desc:"Sacred Sun Dance — inescapable consuming flame. Inflicts Burn." },
    // ── JJK extras ────────────────────────────────────────────────
    { id:'jjk_ces', name:'Cursed Energy Strike', anime:'Jujutsu Kaisen', cost:100, mp:16, power:40,
      desc:"Raw cursed energy compressed into a devastating blow." },
    { id:'jjk_df', name:'Divergent Fist', anime:'Jujutsu Kaisen', cost:160, mp:28, power:65, status:'stun',
      desc:"Double-impact cursed wave — delayed shockwave stuns. Inflicts Stun." },
    { id:'jjk_de', name:'Domain Expansion: Unlimited Void', anime:'Jujutsu Kaisen', cost:300, mp:55, power:98, status:'confusion', aoe:true,
      desc:"Gojo's domain floods ALL enemies with infinite information. Inflicts Confusion." },
    // ── MHA extras ────────────────────────────────────────────────
    { id:'mha_fc', name:'One For All: Full Cowling', anime:'My Hero Academia', cost:155, mp:27, power:63, status:'stun',
      desc:"Power spread through every cell — explosive strike. Inflicts Stun." },
    { id:'mha_exp', name:'Explosion: Howitzer Impact', anime:'My Hero Academia', cost:185, mp:34, power:78, status:'burn', aoe:true,
      desc:"Katsuki's spiralling AP explosion blasts ALL enemies. Inflicts Burn." },
    { id:'mha_eng', name:'Engine: Recipro Burst', anime:'My Hero Academia', cost:210, mp:38, power:84, selfBuff:'haste',
      desc:"Iida's leg engines overdrive beyond their limit. Grants Haste." },
    { id:'mha_is', name:'Indiscriminate Shock 1,300,000V', anime:'My Hero Academia', cost:260, mp:46, power:96, status:'paralysis', aoe:true,
      desc:"Kaminari unleashes his full wattage — electric field hits ALL enemies. Inflicts Paralysis." },
    // ── DBZ extras ────────────────────────────────────────────────
    { id:'dbz_kb', name:'Ki Blast Barrage', anime:'Dragon Ball Z', cost:120, mp:20, power:48, aoe:true,
      desc:"A rapid volley of ki blasts rains down on ALL enemies." },
    { id:'dbz_sb', name:'Spirit Bomb', anime:'Dragon Ball Z', cost:220, mp:40, power:88, status:'stun', aoe:true,
      desc:"Colossal energy sphere crushes ALL enemies. Inflicts Stun." },
    { id:'dbz_ss', name:'Super Saiyan Surge', anime:'Dragon Ball Z', cost:260, mp:45, power:0, selfBuff:'bravery',
      desc:"Golden ki ignites — power level skyrockets. Grants Bravery." },
    { id:'dbz_ff', name:'Final Flash', anime:'Dragon Ball Z', cost:310, mp:56, power:105, status:'burn', aoe:true,
      desc:"Vegeta's full-power beam sweeps through ALL enemies. Inflicts Burn." },
    // ── HxH extras ────────────────────────────────────────────────
    { id:'hxh_en', name:'En: Detection Strike', anime:'Hunter x Hunter', cost:130, mp:22, power:50, status:'confusion', aoe:true,
      desc:"Nen field extends in all directions — strikes ALL enemies simultaneously. Inflicts Confusion." },
    { id:'hxh_em', name:'Nen: Emission Burst', anime:'Hunter x Hunter', cost:170, mp:30, power:70,
      desc:"Concentrated Nen emitted at point-blank range." },
    { id:'hxh_lp', name:'Killua: Lightning Palm', anime:'Hunter x Hunter', cost:200, mp:36, power:78, status:'paralysis',
      desc:"Godspeed-charged palm strike. Inflicts Paralysis." },
    { id:'hxh_ns', name:'100-Type Guanyin: Salvo', anime:'Hunter x Hunter', cost:350, mp:60, power:110, aoe:true,
      desc:"Netero's 100 simultaneous strikes rain down on ALL enemies." },
    // ── Various Worlds extra ──────────────────────────────────────
    { id:'fma_bc', name:'Black Coffin: Kuro Hitsugi', anime:'Fullmetal Alchemist: Brotherhood', cost:280, mp:50, power:95, status:'doom',
      desc:"Envelops the target in a black box — absolute obliteration. Inflicts Doom." },
];

const STATUS = {
    // DoT — deals % of max HP per turn
    burn:      { icon: '🔥', label: 'Burn',      dotPct: 0.10, turns: 3, neg: true  },
    poison:    { icon: '☠',  label: 'Poison',    dotPct: 0.08, turns: 4, neg: true  },
    bleed:     { icon: '🩸', label: 'Bleed',     dotPct: 0.12, turns: 3, neg: true  },
    // Incapacitation — skip target's turn
    stun:      { icon: '⚡', label: 'Stun',      skip: true,    turns: 1, neg: true  },
    sleep:     { icon: '💤', label: 'Sleep',     skip: true,    turns: 3, neg: true, wakeOnHit: true },
    freeze:    { icon: '❄',  label: 'Freeze',    skip: true,    turns: 2, neg: true, vulnMult: 1.5   },
    paralysis: { icon: '⚡', label: 'Paralysis', skipChance: 0.5, turns: 3, neg: true },
    fear:      { icon: '😱', label: 'Fear',      skip: true,    turns: 2, neg: true  },
    petrify:   { icon: '🪨', label: 'Petrify',  skip: true,    turns: 3, neg: true, vulnMult: 2.0   },
    // Behavioral
    confusion: { icon: '🌀', label: 'Confusion', confuse: true, turns: 2, neg: true  },
    // Stat mods — buff or debuff ATK multiplier
    weaken:    { icon: '⬇',  label: 'Weaken',    atkMult: 0.5,  turns: 3, neg: true  },
    bravery:   { icon: '⚔',  label: 'Bravery',   atkMult: 1.5,  turns: 3, neg: false },
    haste:     { icon: '💨', label: 'Haste',     atkMult: 1.3,  turns: 2, neg: false },
    guard:     { icon: '🛡', label: 'Guard',     dmgTakenMult: 0.60, turns: 2, neg: false },
    regen:     { icon: '✚',  label: 'Regen',     regenPct: 0.08, turns: 3, neg: false },
    focus:     { icon: '🎯', label: 'Focus',     atkMult: 1.25, turns: 3, neg: false },
    thorns:    { icon: '🌹', label: 'Thorns',    thornsPct: 0.20, turns: 3, neg: false },
    vulnerable:{ icon: '🔻', label: 'Vulnerable',vulnMult: 1.35, turns: 3, neg: true  },
    marked:    { icon: '印', label: 'Marked',    vulnMult: 1.25, turns: 3, neg: true  },
    // Fatal
    doom:      { icon: '💀', label: 'Doom',      fatal: true,   turns: 3, neg: true  },
};
