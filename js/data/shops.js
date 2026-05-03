// Build Your Legend data split from js/core/00_game_core.js
// Keep loaded before the core systems file.

const WEAPON_SHOPS = [
    { name: 'Ninja Arsenal',          anime: 'Naruto',
      ids: ['kubikiribocho','hiramekarei','asuma_blades','minato_kunai','samehada'] },
    { name: 'Soul Cutter Armory',     anime: 'Bleach',
      ids: ['zangetsu','shinso','sode_shirayuki','suzumushi','ryujin_jakka'] },
    { name: 'Grand Line Forge',       anime: 'One Piece',
      ids: ['wado_ichimonji','sandai_kitetsu','yoru','gryphon_blade','nidai_kitetsu'] },
    { name: "Swordsmith's Village",   anime: 'Demon Slayer',
      ids: ['nichirin_thunder','tanjiro_black','rengoku_sword','gyomei_flail','mitsuri_whip'] },
    { name: 'Cursed Weapons Cache',   anime: 'Jujutsu Kaisen',
      ids: ['playful_cloud','split_soul_katana','inverted_spear','black_rope','death_painting'] },
    { name: 'Hero Support Armory',    anime: 'My Hero Academia',
      ids: ['dark_shadow_claw','explosion_grenade','recipro_boots','hardening_arm','one_for_all_smash'] },
    { name: 'Capsule Corp Armory',    anime: 'Dragon Ball Z',
      ids: ['power_pole','trunks_sword','z_sword','spirit_lance','divine_staff'] },
    { name: "Hunter's Cache",         anime: 'Hunter x Hunter',
      ids: ['kagura_yoyo','shadow_dagger','bungee_arm','illumi_needle','needle_sword'] },
    { name: 'Various Worlds Bazaar',  anime: 'Various Worlds',
      ids: ['bokuto','dragon_slayer','licht_sword','excalibur','chainsaw_arms'] },
];

const SPELL_SHOPS = [
    { name: 'Hidden Leaf Scrolls',        anime: 'Naruto',
      ids: ['rasengan','naruto_sc','naruto_8g','amaterasu','naruto_rn'] },
    { name: 'Soul Society Archive',       anime: 'Bleach',
      ids: ['bleach_sk','bleach_kd','bleach_gt','bleach_bk','bleach_mg'] },
    { name: 'Grand Line Techniques',      anime: 'One Piece',
      ids: ['op_gp','gear_second','op_hk','conquerors_haki','op_g3'] },
    { name: 'Wisteria Dojo',              anime: 'Demon Slayer',
      ids: ['flame_breath','ds_wb10','ds_tcf','ds_lb','ds_hk'] },
    { name: 'Jujutsu Sorcery Guild',      anime: 'Jujutsu Kaisen',
      ids: ['jjk_ces','jjk_df','black_flash','jjk_de','hollow_purple'] },
    { name: 'UA Academy Store',           anime: 'My Hero Academia',
      ids: ['detroit_smash','mha_fc','mha_exp','mha_eng','mha_is'] },
    { name: 'Capsule Corp Training',      anime: 'Dragon Ball Z',
      ids: ['dbz_kb','kamehameha','dbz_sb','dbz_ss','dbz_ff'] },
    { name: 'Hunter Association Vault',   anime: 'Hunter x Hunter',
      ids: ['hxh_en','nen_jajanken','hxh_em','hxh_lp','hxh_ns'] },
    { name: 'Rare Technique Exchange',    anime: 'Various Worlds',
      ids: ['transmutation','ninpo_flame','shinra_kick','ora_rush','fma_bc'] },
];

const POTION_SHOPS = [
    { name: 'Hidden Leaf Medic Store', anime: 'Naruto',
      ids: ['antidote','chakra_pill','soldier_pill','mystical_palm','seal_elixir'] },
    { name: 'Seireitei Pharmacy',      anime: 'Bleach',
      ids: ['dispel','spirit_water','hollow_frag','gigai_extract','hogyoku_shard'] },
    { name: 'Grand Line Apothecary',   anime: 'One Piece',
      ids: ['haki_tonic','sea_cure','rumble_ball','transponder_stim','mera_flask'] },
    { name: 'Wisteria Herbalist',      anime: 'Demon Slayer',
      ids: ['burn_salve','wisteria_tonic','conc_pill','nichirin_polish','sun_essence'] },
    { name: 'Jujutsu Remedies',        anime: 'Jujutsu Kaisen',
      ids: ['cursed_vial','jjk_antidote','binding_vow','reverse_cursed','six_eyes_clarity'] },
    { name: 'UA Medical Bay',          anime: 'My Hero Academia',
      ids: ['hero_brew','swift_tonic','stamina_drink','support_beta','rewind_quirk'] },
    { name: 'Capsule Corp Lab',        anime: 'Dragon Ball Z',
      ids: ['senzu_bean','ki_restore','saiyan_herb','gravity_tonic','zenkai_boost'] },
    { name: 'Hunter Provisions',       anime: 'Hunter x Hunter',
      ids: ['echo_herb','nen_extract','assassin_anti','york_elixir','netero_tonic'] },
    { name: "Traveler's Emporium",     anime: 'Various Worlds',
      ids: ['health_pot','hi_pot','mp_pot','elixir','remedy'] },
];

const EQUIPMENT_SHOPS = [
  {name:'Hidden Leaf Outfitter', anime:'Naruto', key:'naruto'},
  {name:'Soul Society Wardrobe', anime:'Bleach', key:'bleach'},
  {name:'Grand Line Outfitters', anime:'One Piece', key:'onepiece'},
  {name:'Demon Corps Clothier', anime:'Demon Slayer', key:'demonslayer'},
  {name:'Jujutsu Armory Annex', anime:'Jujutsu Kaisen', key:'jjk'},
  {name:'UA Support Gear Closet', anime:'My Hero Academia', key:'mha'},
  {name:'Capsule Corp Gear Lab', anime:'Dragon Ball Z', key:'dbz'},
  {name:'Hunter Association Outfitters', anime:'Hunter x Hunter', key:'hxh'},
  {name:'Various Worlds Relic Shop', anime:'Various Worlds', key:'various'}
];
