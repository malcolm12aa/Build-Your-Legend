// Build Your Legend data split from js/core/00_game_core.js
// Keep loaded before the core systems file.

const WEAPONS = [
    // ── Tier 1 (budget) ──────────────────────────────────────────
    {
        id: 'bokuto', name: "Gintoki's Bokuto", anime: 'Gintama', cost: 80, atk: 12,
        statusId: 'confusion', statusChance: 0.30,
        desc: "A beat-up wooden sword that somehow defeats everything. Causes Confusion (30%)."
    },
    // ── Tier 2 ───────────────────────────────────────────────────
    {
        id: 'zangetsu', name: 'Zangetsu', anime: 'Bleach', cost: 150, atk: 22,
        statusId: 'bleed', statusChance: 0.25,
        desc: "Ichigo's soul-cutting zanpakuto — cleaves deep. Inflicts Bleed (25%)."
    },
    {
        id: 'scissor_blade', name: 'Scissor Blade', anime: 'Kill la Kill', cost: 200, atk: 26,
        statusId: 'bleed', statusChance: 0.30,
        desc: "Half of the legendary Rending Scissors — cuts through life fibers. Inflicts Bleed (30%)."
    },
    {
        id: 'wado_ichimonji', name: 'Wado Ichimonji', anime: 'One Piece', cost: 240, atk: 32,
        statusId: 'weaken', statusChance: 0.20,
        desc: "Roronoa Zoro's pure white katana — precision strikes sap enemy strength. Inflicts Weaken (20%)."
    },
    {
        id: 'nichirin_thunder', name: 'Nichirin Blade: Thunder', anime: 'Demon Slayer', cost: 280, atk: 38,
        statusId: 'paralysis', statusChance: 0.30,
        desc: "Zenitsu's yellow blade — lightning channels through the ore. Inflicts Paralysis (30%)."
    },
    {
        id: 'tessaiga', name: 'Tessaiga', anime: 'InuYasha', cost: 220, atk: 30,
        statusId: 'weaken', statusChance: 0.25,
        desc: "Fang-forged blade that slays 100 demons in a swing. Inflicts Weaken (25%)."
    },
    // ── Tier 3 ───────────────────────────────────────────────────
    {
        id: 'thunder_spear', name: 'Thunder Spear', anime: 'Attack on Titan', cost: 300, atk: 40,
        statusId: 'stun', statusChance: 0.30,
        desc: "Explosive lance that detonates on impact. Inflicts Stun (30%)."
    },
    {
        id: 'chainsaw_arms', name: 'Chainsaw Devil Arms', anime: 'Chainsaw Man', cost: 360, atk: 50,
        statusId: 'bleed', statusChance: 0.35,
        desc: "Denji's devil contract — chainsaws rip through flesh. Inflicts Bleed (35%)."
    },
    {
        id: 'dragon_slayer', name: 'Dragon Slayer', anime: 'Berserk', cost: 380, atk: 54,
        statusId: 'stun', statusChance: 0.20,
        desc: "A slab of iron so massive it cannot rightly be called a sword. Inflicts Stun (20%)."
    },
    // ── Tier 4 (endgame) ─────────────────────────────────────────
    {
        id: 'licht_sword', name: "Licht's Sword of Despair", anime: 'Black Clover', cost: 460, atk: 63,
        statusId: 'fear', statusChance: 0.25,
        desc: "The Elf King's blade forged from crystallised mana — inspires terror. Inflicts Fear (25%)."
    },
    {
        id: 'excalibur', name: 'Excalibur', anime: 'Fate/Stay Night', cost: 560, atk: 70,
        statusId: 'doom', statusChance: 0.15,
        desc: "The sword of promised victory — holy judgment. Inflicts Doom (15%)."
    },
    // ── Naruto ───────────────────────────────────────────────────
    { id:'kubikiribocho', name:"Kubikiribōchō", anime:'Naruto', cost:200, atk:28, statusId:'bleed', statusChance:0.30,
      desc:"Zabuza's self-restoring executioner blade. Inflicts Bleed (30%)." },
    { id:'hiramekarei', name:"Hiramekarei", anime:'Naruto', cost:260, atk:36, statusId:'paralysis', statusChance:0.25,
      desc:"Chōjuro's twin-blade sword of the seven swordsmen — channels lightning. Inflicts Paralysis (25%)." },
    { id:'asuma_blades', name:"Asuma's Chakra Blades", anime:'Naruto', cost:180, atk:24, statusId:'bleed', statusChance:0.25,
      desc:"Chakra-flow trench knives — cut through chakra barriers. Inflicts Bleed (25%)." },
    { id:'minato_kunai', name:"Flying Thunder God Kunai", anime:'Naruto', cost:320, atk:44, statusId:'stun', statusChance:0.25,
      desc:"Minato's tri-pronged seal kunai — teleports to its mark. Inflicts Stun (25%)." },
    { id:'samehada', name:"Samehada", anime:'Naruto', cost:400, atk:55, statusId:'weaken', statusChance:0.30,
      desc:"The living shark sword that devours chakra. Inflicts Weaken (30%)." },
    // ── Bleach ───────────────────────────────────────────────────
    { id:'shinso', name:"Shinso — Extend", anime:'Bleach', cost:190, atk:26, statusId:'stun', statusChance:0.25,
      desc:"Gin Ichimaru's extending blade — too fast to dodge. Inflicts Stun (25%)." },
    { id:'sode_shirayuki', name:"Sode no Shirayuki", anime:'Bleach', cost:270, atk:38, statusId:'freeze', statusChance:0.30,
      desc:"The most beautiful zanpakuto — absolute zero ice dance. Inflicts Freeze (30%)." },
    { id:'suzumushi', name:"Suzumushi Tsuishiki", anime:'Bleach', cost:300, atk:44, statusId:'paralysis', statusChance:0.30,
      desc:"Kaname Tōsen's cricket-bell resonance attack. Inflicts Paralysis (30%)." },
    { id:'ryujin_jakka', name:"Ryūjin Jakka", anime:'Bleach', cost:500, atk:72, statusId:'burn', statusChance:0.40,
      desc:"The most powerful fire-type zanpakuto in Soul Society. Inflicts Burn (40%)." },
    // ── One Piece ────────────────────────────────────────────────
    { id:'sandai_kitetsu', name:"Sandai Kitetsu", anime:'One Piece', cost:200, atk:30, statusId:'bleed', statusChance:0.30,
      desc:"A cursed blade that hungers for blood. Inflicts Bleed (30%)." },
    { id:'yoru', name:"Yoru — Black Sword", anime:'One Piece', cost:480, atk:68, statusId:'fear', statusChance:0.25,
      desc:"Dracule Mihawk's supreme-grade blade. Inflicts Fear (25%)." },
    { id:'gryphon_blade', name:"Gryphon", anime:'One Piece', cost:380, atk:52, statusId:'stun', statusChance:0.25,
      desc:"Shanks' supreme-grade saber — channeling Conqueror's Haki. Inflicts Stun (25%)." },
    { id:'nidai_kitetsu', name:"Nidai Kitetsu", anime:'One Piece', cost:310, atk:46, statusId:'bleed', statusChance:0.30,
      desc:"The cursed second-class blade — superior to its successor. Inflicts Bleed (30%)." },
    // ── Demon Slayer ─────────────────────────────────────────────
    { id:'tanjiro_black', name:"Tanjiro's Black Nichirin", anime:'Demon Slayer', cost:160, atk:22, statusId:'burn', statusChance:0.20,
      desc:"The rare black Nichirin of the chosen Sun-Breathing user. Inflicts Burn (20%)." },
    { id:'rengoku_sword', name:"Flame Nichirin Blade", anime:'Demon Slayer', cost:280, atk:40, statusId:'burn', statusChance:0.35,
      desc:"Rengoku's orange-flame Nichirin. Inflicts Burn (35%)." },
    { id:'gyomei_flail', name:"Stone Breathing Flail", anime:'Demon Slayer', cost:350, atk:50, statusId:'stun', statusChance:0.30,
      desc:"Gyomei's spiked flail — the strongest Hashira's weapon. Inflicts Stun (30%)." },
    { id:'mitsuri_whip', name:"Love Breathing Whipsword", anime:'Demon Slayer', cost:310, atk:46, statusId:'confusion', statusChance:0.25,
      desc:"Mitsuri's ultra-thin serpentine blade — impossible to track. Inflicts Confusion (25%)." },
    // ── Jujutsu Kaisen ───────────────────────────────────────────
    { id:'playful_cloud', name:"Playful Cloud", anime:'Jujutsu Kaisen', cost:350, atk:50, statusId:'stun', statusChance:0.30,
      desc:"Toji Fushiguro's special-grade cursed tool. Inflicts Stun (30%)." },
    { id:'split_soul_katana', name:"Split Soul Katana", anime:'Jujutsu Kaisen', cost:270, atk:38, statusId:'bleed', statusChance:0.30,
      desc:"A blade that can sever the soul itself. Inflicts Bleed (30%)." },
    { id:'inverted_spear', name:"Inverted Spear of Heaven", anime:'Jujutsu Kaisen', cost:420, atk:60, statusId:'weaken', statusChance:0.35,
      desc:"Nullifies all cursed techniques — absolute weapon. Inflicts Weaken (35%)." },
    { id:'black_rope', name:"Black Rope", anime:'Jujutsu Kaisen', cost:200, atk:28, statusId:'paralysis', statusChance:0.25,
      desc:"Cursed rope that binds both body and soul. Inflicts Paralysis (25%)." },
    { id:'death_painting', name:"Death Painting Womb Blade", anime:'Jujutsu Kaisen', cost:300, atk:44, statusId:'poison', statusChance:0.30,
      desc:"A cursed-womb blade etched with death. Inflicts Poison (30%)." },
    // ── My Hero Academia ─────────────────────────────────────────
    { id:'dark_shadow_claw', name:"Dark Shadow Claws", anime:'My Hero Academia', cost:240, atk:32, statusId:'fear', statusChance:0.25,
      desc:"Tokoyami's sentient shadow — razor claws in darkness. Inflicts Fear (25%)." },
    { id:'explosion_grenade', name:"Explosion Grenades", anime:'My Hero Academia', cost:280, atk:40, statusId:'stun', statusChance:0.30,
      desc:"Bakugo's nitroglycerin grenades. Inflicts Stun (30%)." },
    { id:'recipro_boots', name:"Recipro-Burst Boots", anime:'My Hero Academia', cost:220, atk:30, statusId:'stun', statusChance:0.20,
      desc:"Iida's leg engines in overdrive. Inflicts Stun (20%)." },
    { id:'hardening_arm', name:"Hardening Gauntlet", anime:'My Hero Academia', cost:260, atk:36, statusId:'weaken', statusChance:0.25,
      desc:"Kirishima's unbreakable fist shatters armor. Inflicts Weaken (25%)." },
    { id:'one_for_all_smash', name:"OFA Smash Gauntlet", anime:'My Hero Academia', cost:460, atk:64, statusId:'stun', statusChance:0.30,
      desc:"Izuku's 100% One For All Focus Shot. Inflicts Stun (30%)." },
    // ── Dragon Ball Z ────────────────────────────────────────────
    { id:'power_pole', name:"Power Pole", anime:'Dragon Ball Z', cost:140, atk:20, statusId:'stun', statusChance:0.20,
      desc:"Goku's magical extending staff. Inflicts Stun (20%)." },
    { id:'trunks_sword', name:"Future Trunks' Sword", anime:'Dragon Ball Z', cost:280, atk:40, statusId:'bleed', statusChance:0.25,
      desc:"The blade from the future — cuts through androids. Inflicts Bleed (25%)." },
    { id:'z_sword', name:"Z-Sword", anime:'Dragon Ball Z', cost:400, atk:58, statusId:'weaken', statusChance:0.30,
      desc:"The sacred sword of the Supreme Kais. Inflicts Weaken (30%)." },
    { id:'spirit_lance', name:"Spirit Lance", anime:'Dragon Ball Z', cost:320, atk:46, statusId:'stun', statusChance:0.25,
      desc:"Ki condensed into a javelin of pure energy. Inflicts Stun (25%)." },
    { id:'divine_staff', name:"Staff of Beerus", anime:'Dragon Ball Z', cost:500, atk:70, statusId:'doom', statusChance:0.15,
      desc:"The God of Destruction's scepter. Inflicts Doom (15%)." },
    // ── Hunter x Hunter ──────────────────────────────────────────
    { id:'kagura_yoyo', name:"Kagura Yo-Yos", anime:'Hunter x Hunter', cost:200, atk:28, statusId:'confusion', statusChance:0.30,
      desc:"Killua's Godspeed-lightning yo-yos. Inflicts Confusion (30%)." },
    { id:'shadow_dagger', name:"Shadow Dagger", anime:'Hunter x Hunter', cost:240, atk:34, statusId:'bleed', statusChance:0.25,
      desc:"A dagger that strikes from the shadow — unseen, unblocked. Inflicts Bleed (25%)." },
    { id:'bungee_arm', name:"Bungee Gum Strike", anime:'Hunter x Hunter', cost:320, atk:46, statusId:'stun', statusChance:0.30,
      desc:"Hisoka's rubbery Nen — stretches and snaps back. Inflicts Stun (30%)." },
    { id:'illumi_needle', name:"Illumi's Needle", anime:'Hunter x Hunter', cost:280, atk:40, statusId:'paralysis', statusChance:0.30,
      desc:"A needle that rewrites the victim's will. Inflicts Paralysis (30%)." },
    { id:'needle_sword', name:"Needle Sword", anime:'Hunter x Hunter', cost:360, atk:52, statusId:'confusion', statusChance:0.30,
      desc:"A blade as thin as a needle — precision strikes. Inflicts Confusion (30%)." },
];

const POTIONS = [
    // ── Restoratives ─────────────────────────────────────────────
    { id: 'health_pot',  name: 'Health Potion',  cost: 50,  hp: 50,     desc: 'Restores 50 HP' },
    { id: 'hi_pot',      name: 'Hi-Potion',      cost: 100, hp: 100,    desc: 'Restores 100 HP' },
    { id: 'mp_pot',      name: 'MP Potion',       cost: 65,  mp: 60,     desc: 'Restores 60 MP' },
    { id: 'elixir',      name: 'Elixir',          cost: 220, full: true, desc: 'Fully restores HP and MP' },
    // ── Curatives ────────────────────────────────────────────────
    { id: 'antidote',    name: 'Antidote',        cost: 40,  cure: ['poison', 'bleed'],   desc: 'Cures Poison and Bleed' },
    { id: 'burn_salve',  name: 'Burn Salve',      cost: 45,  cure: ['burn'],              desc: 'Cures Burn' },
    { id: 'echo_herb',   name: 'Echo Herb',        cost: 55,  cure: ['sleep', 'freeze'],  desc: 'Cures Sleep and Freeze' },
    { id: 'dispel',      name: 'Dispel',           cost: 80,  cure: ['stun', 'paralysis', 'fear', 'confusion', 'petrify'], desc: 'Cures Stun, Paralysis, Fear, Confusion, Petrify' },
    { id: 'remedy',      name: 'Remedy',           cost: 160, cureAll: true,              desc: 'Cures ALL negative status effects' },
    // ── Buffs ─────────────────────────────────────────────────────
    { id: 'hero_brew',   name: "Hero's Brew",      cost: 120, buff: 'bravery', desc: 'Grants Bravery — +50% ATK for 3 turns' },
    { id: 'swift_tonic', name: 'Swift Tonic',      cost: 110, buff: 'haste',   desc: 'Grants Haste — +30% ATK for 2 turns' },
    // ── Naruto ───────────────────────────────────────────────────
    { id:'chakra_pill',   name:'Chakra Recovery Pill',   cost:80,  mp:100,   desc:'Restores 100 MP' },
    { id:'soldier_pill',  name:'Soldier Pill',            cost:100, buff:'bravery', desc:'Combat stimulant — grants Bravery (+50% ATK 3 turns)' },
    { id:'mystical_palm', name:'Mystical Palm Salve',     cost:150, hp:180,   desc:'Medical ninjutsu in a bottle — restores 180 HP' },
    { id:'seal_elixir',   name:'Sealing Elixir',          cost:260, full:true, desc:'Uzumaki seal vial — fully restores HP and MP' },
    // ── Bleach ───────────────────────────────────────────────────
    { id:'spirit_water',  name:'Spirit Particle Water',   cost:75,  mp:90,    desc:'Restores 90 MP' },
    { id:'hollow_frag',   name:'Hollow Mask Fragment',    cost:120, buff:'bravery', desc:'Hollow power infusion — grants Bravery for 3 turns' },
    { id:'gigai_extract', name:'Gigai Extract',           cost:100, hp:110,   desc:'Restores 110 HP' },
    { id:'hogyoku_shard', name:'Hōgyoku Shard',           cost:280, full:true, desc:'Sōsuke Aizen\'s orb fragment — fully restores HP and MP' },
    // ── One Piece ────────────────────────────────────────────────
    { id:'haki_tonic',    name:'Haki Tonic',              cost:110, buff:'bravery', desc:'Grants Bravery for 3 turns' },
    { id:'sea_cure',      name:'Sea-Stone Antidote',      cost:55,  cure:['poison','burn'], desc:'Cures Poison and Burn' },
    { id:'rumble_ball',   name:'Rumble Ball',             cost:170, hp:200,   desc:"Chopper's power-up drug — restores 200 HP" },
    { id:'transponder_stim', name:'Transponder Stimulant', cost:90, buff:'haste', desc:'Den Den Mushi signal boost — grants Haste for 2 turns' },
    { id:'mera_flask',    name:'Flame Fruit Flask',       cost:65,  mp:75,    desc:'Restores 75 MP' },
    // ── Demon Slayer ─────────────────────────────────────────────
    { id:'wisteria_tonic', name:'Wisteria Tonic',         cost:60,  cure:['poison'], desc:'Cures Poison' },
    { id:'conc_pill',     name:'Total Concentration Pill', cost:130, mp:120,  desc:'Total Concentration Breathing — restores 120 MP' },
    { id:'nichirin_polish', name:'Nichirin Polish',       cost:110, buff:'haste', desc:'Blade treatment boost — grants Haste for 2 turns' },
    { id:'sun_essence',   name:'Sun Breathing Essence',   cost:200, hp:220,   desc:'Restores 220 HP' },
    // ── Jujutsu Kaisen ───────────────────────────────────────────
    { id:'cursed_vial',   name:'Cursed Energy Vial',      cost:80,  mp:90,    desc:'Restores 90 MP' },
    { id:'jjk_antidote',  name:'Jujutsu Antidote',        cost:50,  cure:['poison','bleed'], desc:'Cures Poison and Bleed' },
    { id:'binding_vow',   name:'Binding Vow Amplifier',   cost:140, buff:'bravery', desc:'Power through binding vow — grants Bravery' },
    { id:'reverse_cursed', name:'Reverse Cursed Technique', cost:180, hp:210, desc:'Restores 210 HP' },
    { id:'six_eyes_clarity', name:'Six Eyes Clarity Drop', cost:300, full:true, desc:"Gojo's limitless clarity — fully restores HP and MP" },
    // ── My Hero Academia ─────────────────────────────────────────
    { id:'stamina_drink', name:'Hero Stamina Drink',      cost:85,  hp:90,    desc:'Restores 90 HP' },
    { id:'support_beta',  name:'Support Item Beta',       cost:130, mp:110,   desc:'Restores 110 MP' },
    { id:'rewind_quirk',  name:'Rewind Quirk Vial',       cost:280, full:true, desc:"Eri's Rewind — fully restores HP and MP" },
    // ── Dragon Ball Z ────────────────────────────────────────────
    { id:'senzu_bean',    name:'Senzu Bean',              cost:300, full:true, desc:'Full restoration of HP and MP' },
    { id:'ki_restore',    name:'Ki Restoration Pill',     cost:85,  mp:95,    desc:'Restores 95 MP' },
    { id:'saiyan_herb',   name:'Saiyan Saga Herb',        cost:60,  cure:['stun','paralysis'], desc:'Cures Stun and Paralysis' },
    { id:'gravity_tonic', name:'Gravity Training Tonic',  cost:150, buff:'bravery', desc:'Grants Bravery for 3 turns' },
    { id:'zenkai_boost',  name:'Zenkai Boost Serum',      cost:200, hp:240,   desc:'Restores 240 HP' },
    // ── Hunter x Hunter ──────────────────────────────────────────
    { id:'nen_extract',   name:'Nen Extract',             cost:90,  mp:100,   desc:'Restores 100 MP' },
    { id:'assassin_anti', name:'Zoldyck Antidote',        cost:65,  cure:['poison','bleed','burn'], desc:'Cures Poison, Bleed, and Burn' },
    { id:'york_elixir',   name:'Yorknew Elixir',          cost:190, hp:220,   desc:'Restores 220 HP' },
    { id:'netero_tonic',  name:'Netero Discipline Tonic', cost:150, buff:'bravery', desc:'Grants Bravery for 3 turns' },
];

const EQUIP_SLOTS = ['head','chest','arms','legs','weapon1','weapon2'];

const ACCESSORY_SLOTS = 5;

const EQUIPMENT_DATA = [
  {id:'head_ninja_band', slot:'head', name:'Shinobi Headband', cost:120, bon:{ag:2,rs:1}, desc:'+AGI and RESIST. Good early speed gear.'},
  {id:'head_soul_crown', slot:'head', name:'Soul Pressure Crown', cost:260, bon:{mp:25,ma:3,md:2}, desc:'Caster headgear for spiritual builds.'},
  {id:'chest_flak', slot:'chest', name:'Reinforced Battle Coat', cost:180, bon:{hp:35,pd:4}, desc:'Reliable defensive chest armor.'},
  {id:'chest_cursed_cloak', slot:'chest', name:'Cursed Energy Cloak', cost:340, bon:{mp:35,md:4,rs:3}, desc:'Anti-magic cloak for domain-style fights.'},
  {id:'arms_giant_gauntlets', slot:'arms', name:'Giant Iron Gauntlets', cost:280, bon:{pa:5,pd:2}, desc:'Heavy arm gear for physical builds.'},
  {id:'arms_kido_wraps', slot:'arms', name:'Kido Casting Wraps', cost:300, bon:{ma:5,mp:20}, desc:'Arm wraps for magic and spirit casters.'},
  {id:'legs_sky_boots', slot:'legs', name:'Skypiean Cloud Boots', cost:220, bon:{ag:5,sp:1}, desc:'Fast boots made for mobile combat.'},
  {id:'legs_ackerman_gear', slot:'legs', name:'ODM Combat Harness', cost:380, bon:{ag:6,pa:2}, desc:'High-speed leg gear for challenge fights.'},
  {id:'w1_katana', slot:'weapon1', name:'One-Handed Zanpakuto', cost:250, atk:9, bon:{pa:3,ag:1}, desc:'One-handed weapon. Balanced and fast.'},
  {id:'w1_cursed_dagger', slot:'weapon1', name:'Cursed Tool Dagger', cost:300, atk:7, bon:{pa:2,sp:3}, statusId:'bleed', statusChance:0.25, desc:'One-handed weapon with bleed chance.'},
  {id:'w2_dragon_slayer_blade', slot:'weapon2', name:'Two-Handed Dragon Slayer Blade', cost:520, atk:17, bon:{pa:7,pd:2}, desc:'Two-handed weapon. Heavy physical damage.'},
  {id:'w2_raid_staff', slot:'weapon2', name:'Raid Archmage Staff', cost:520, atk:5, bon:{ma:8,mp:45}, desc:'Two-handed caster weapon for AoE builds.'},
  {id:'acc_chakra_seal', slot:'accessory', name:'Chakra Seal Ring', cost:160, bon:{mp:20,rs:1}, desc:'Accessory: extra MP and resistance.'},
  {id:'acc_haki_bead', slot:'accessory', name:'Haki Focus Bead', cost:190, bon:{pa:2,pd:1,rs:1}, desc:'Accessory: balanced combat focus.'},
  {id:'acc_scarlet_eye', slot:'accessory', name:'Scarlet Eye Charm', cost:260, bon:{ma:2,ag:2,sp:2}, desc:'Accessory: speed, magic, and special power.'},
  {id:'acc_titan_core', slot:'accessory', name:'Titan Core Fragment', cost:300, bon:{hp:45,pd:2}, desc:'Accessory: strong HP boost.'},
  {id:'acc_fairy_key', slot:'accessory', name:'Celestial Key Pendant', cost:300, bon:{mp:30,ma:3}, desc:'Accessory: caster support.'},
  {id:'acc_raid_badge', slot:'accessory', name:'Raid Challenger Badge', cost:420, bon:{hp:25,pa:2,ma:2,rs:2}, desc:'Accessory: all-around raid gear.'}
];

const ARMOR_EQUIP_SLOTS = ['head','chest','arms','legs'];

const EQUIPMENT_CATEGORIES = [
  {slot:'head', label:'Head'},
  {slot:'chest', label:'Chest'},
  {slot:'arms', label:'Arms'},
  {slot:'legs', label:'Legs'},
  {slot:'accessory', label:'Accessories'}
];

const EQUIPMENT_CATEGORY_SUFFIXES = {
  head:['Acolyte','Adept','Veteran','Elite','Mythic'],
  chest:['Acolyte','Adept','Veteran','Elite','Mythic'],
  arms:['Acolyte','Adept','Veteran','Elite','Mythic'],
  legs:['Acolyte','Adept','Veteran','Elite','Mythic'],
  accessory:['I','II','III','IV','V']
};

const EQUIPMENT_NAME_PARTS = {
  naruto:{head:'Forehead Protector',chest:'Chakra Guard Vest',arms:'Shinobi Bracers',legs:'Silent Step Sandals',accessory:'Sealing Tag Charm', stat:'chakra control'},
  bleach:{head:'Reiatsu Circlet',chest:'Shihakusho Mantle',arms:'Kido Casting Wraps',legs:'Shunpo Greaves',accessory:'Soul Chain Charm', stat:'spiritual pressure'},
  onepiece:{head:'Captain Bandana',chest:'Haki Battle Coat',arms:'Sea-Prism Bracers',legs:'Sky-Walk Boots',accessory:'Log Pose Pendant', stat:'haki focus'},
  demonslayer:{head:'Hashira Headguard',chest:'Wisteria Haori',arms:'Breathing Armguards',legs:'Total Concentration Greaves',accessory:'Nichirin Charm', stat:'breathing rhythm'},
  jjk:{head:'Binding Vow Mask',chest:'Cursed Energy Coat',arms:'Cursed Tool Bracers',legs:'Black Flash Boots',accessory:'Domain Talisman', stat:'cursed energy flow'},
  mha:{head:'Hero Visor',chest:'Support Suit Chestplate',arms:'Quirk Stabilizer Gauntlets',legs:'Recipro Boots',accessory:'Hero License Badge', stat:'quirk output'},
  dbz:{head:'Scouter Crown',chest:'Battle Armor Shell',arms:'Ki Control Gloves',legs:'Flight Training Boots',accessory:'Senzu Capsule Charm', stat:'ki output'},
  hxh:{head:'Nen Focus Hood',chest:'Hunter Battle Jacket',arms:'Ko Reinforcement Wraps',legs:'Rhythm Echo Boots',accessory:'Hunter License Charm', stat:'nen efficiency'},
  various:{head:'Relic Halo',chest:'Worldline Cloak',arms:'Dimensional Bracers',legs:'Gatewalker Boots',accessory:'Multiverse Relic', stat:'cross-world resonance'}
};
