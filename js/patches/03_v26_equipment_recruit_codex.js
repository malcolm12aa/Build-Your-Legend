// ═══════════════════════════════════════════════════════════════
// v0.26 — Skill, Spell, Equipment, Recruit, and Codex Update
// Safe patch layer. Does not rewrite the game from scratch.
// ═══════════════════════════════════════════════════════════════
(function installV26GameUpdate(){
  "use strict";

  var V26_VERSION = "v0.26-skill-spell-equipment-recruit-codex-update";

  var baseFns = {
    updateStats: typeof updateStats === "function" ? updateStats : null,
    applyStats: typeof applyStats === "function" ? applyStats : null,
    winBattle: typeof winBattle === "function" ? winBattle : null,
    startBattle: typeof startBattle === "function" ? startBattle : null,
    character_screen: typeof character_screen === "function" ? character_screen : null,
    town_center: typeof town_center === "function" ? town_center : null,
    equipment_screen: typeof equipment_screen === "function" ? equipment_screen : null,
    equipment_change_screen: typeof equipment_change_screen === "function" ? equipment_change_screen : null,
    skill_screen: typeof skill_screen === "function" ? skill_screen : null,
    shops: typeof shops === "function" ? shops : null,
    recruitment_hall: typeof recruitment_hall === "function" ? recruitment_hall : null,
    recruit_category: typeof recruit_category === "function" ? recruit_category : null,
    achievements_screen: typeof achievements_screen === "function" ? achievements_screen : null,
    codex_screen: typeof codex_screen === "function" ? codex_screen : null,
    showBattleMenu: typeof showBattleMenu === "function" ? showBattleMenu : null,
    physical_skills_menu: typeof physical_skills_menu === "function" ? physical_skills_menu : null,
    magic_spells_menu: typeof magic_spells_menu === "function" ? magic_spells_menu : null,
    updates_screen: typeof updates_screen === "function" ? updates_screen : null,
    loadGame: typeof loadGame === "function" ? loadGame : null,
    loadSlotV25: typeof loadSlotV25 === "function" ? loadSlotV25 : null,
    saveGame: typeof saveGame === "function" ? saveGame : null
  };

  function $(id){ return document.getElementById(id); }
  function esc(x){ return String(x == null ? "" : x).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
  function safePrint(t,c){ try{ if(typeof print==="function") print(t,c||"narrator"); }catch(e){} }
  function titleCase(s){ return String(s||"").replace(/[_-]/g," ").replace(/\b\w/g,function(c){return c.toUpperCase();}); }
  function clamp(n,a,b){ return Math.max(a, Math.min(b, n)); }
  function hasStatus(id){ return typeof STATUS !== "undefined" && STATUS[id]; }

  function addStyle(){
    if ($("v26-style")) return;
    var st = document.createElement("style");
    st.id = "v26-style";
    st.textContent = `
      #stats-bar.v26-header { grid-template-columns:repeat(8,minmax(0,1fr))!important; }
      #stats-bar .stat-cell .lbl { white-space:nowrap; }
      @media(max-width:720px){
        #stats-bar.v26-header { grid-template-columns:repeat(4,minmax(0,1fr))!important; }
        #stats-bar .stat-cell .lbl{font-size:8px}
        #stats-bar .stat-cell .val{font-size:13px}
      }
      .v26-card{border:1px solid #1c3354;background:linear-gradient(180deg,#07101d,#050810);padding:10px 12px;margin:8px 0;line-height:1.5}
      .v26-title{color:#e8c84a;font-weight:800;font-size:13px;letter-spacing:.7px}
      .v26-sub{color:#8aaac8;font-size:11px;margin-top:3px;line-height:1.55}
      .v26-row{display:flex;gap:8px;align-items:center;justify-content:space-between;border-top:1px solid #111d2e;padding:6px 0;font-size:11px;color:#8aaac8}
      .v26-row:first-child{border-top:0}
      .v26-chip{display:inline-block;margin:3px 4px 0 0;padding:1px 6px;border:1px solid rgba(232,200,74,.28);background:rgba(232,200,74,.06);color:#e8c84a;font-size:10px;letter-spacing:.4px}
      .v26-chip.skill{border-color:rgba(255,209,102,.35);background:rgba(255,209,102,.07);color:#ffd166}
      .v26-chip.spell{border-color:rgba(167,139,250,.35);background:rgba(167,139,250,.07);color:#a78bfa}
      .v26-ability{border:1px solid #1c3354;background:#050810;margin:8px 0;padding:10px}
      .v26-ability.locked{opacity:.55;filter:grayscale(.3)}
      .v26-ability-name{font-weight:900;color:#e8c84a;font-size:14px;letter-spacing:.5px}
      .v26-ability-kind{font-size:11px;color:#48cae4;margin:3px 0 6px}
      .v26-ability-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px;margin:6px 0}
      .v26-ability-field{background:#07090f;border:1px solid #111d2e;padding:5px 7px;font-size:11px;color:#8aaac8}
      .v26-ability-field b{color:#e8c84a}
      .v26-ability-desc{font-size:11px;color:#c0d0e0;line-height:1.55;margin-top:6px}
      .v26-shop-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
      .v26-stat-row{display:grid;grid-template-columns:120px 1fr 86px;gap:8px;align-items:center;margin:6px 0}
      .v26-scale{height:10px;border:1px solid #1c3354;background:#07090f;position:relative;overflow:hidden}
      .v26-scale > span{display:block;height:100%;background:linear-gradient(90deg,#3a1a6a,#e8c84a)}
      .v26-stepper{display:flex;gap:3px;justify-content:flex-end}
      .v26-stepper button{width:auto!important;padding:3px 7px!important;font-size:10px!important;margin:0!important}
      @media(max-width:620px){
        .v26-shop-grid,.v26-ability-grid{grid-template-columns:1fr}
        .v26-stat-row{grid-template-columns:1fr}
        .v26-stepper{justify-content:flex-start}
      }
    `;
    document.head.appendChild(st);
  }

  // ── State Defaults ───────────────────────────────────────────
  function ensureV26State(){
    if (typeof ensureGameCollections === "function") ensureGameCollections();
    if (!G.save_meta || typeof G.save_meta !== "object") G.save_meta = {};
    G.save_meta.version = V26_VERSION;

    if (!Array.isArray(G.learned_abilities)) G.learned_abilities = [];
    if (!G.ability_cooldowns || typeof G.ability_cooldowns !== "object") G.ability_cooldowns = {};
    if (!G.ability_uses || typeof G.ability_uses !== "object") G.ability_uses = {};
    if (!G.status_applications || typeof G.status_applications !== "object") G.status_applications = {};
    if (!G.enemy_encounters || typeof G.enemy_encounters !== "object") G.enemy_encounters = {};
    if (!G.recruit_stats || typeof G.recruit_stats !== "object") G.recruit_stats = {};
    if (!G.recruit_skillbooks || typeof G.recruit_skillbooks !== "object") G.recruit_skillbooks = {};
    if (!G.v26_renamed_paths) G.v26_renamed_paths = false;
    if (typeof G.max_stamina !== "number") G.max_stamina = 60;
    if (typeof G.stamina !== "number") G.stamina = G.max_stamina;

    ["sk_quick_slash","sk_guard_stance","sp_fire_bolt","sp_ice_needle","sp_spark"].forEach(function(id){
      if (G.learned_abilities.indexOf(id) < 0) G.learned_abilities.push(id);
    });

    grantIntrinsicByRace();
    unlockAvailableAbilities(false);
    initRecruitStats();
  }

  // ── Ability Data ─────────────────────────────────────────────
  var A = [
    // Common physical skills by weapon type
    {id:"sk_quick_slash",name:"Quick Slash",kind:"skill",rank:"Common",tier:10,resource:"stamina",cost:7,cooldown:1,weapon:["Sword","Dagger","Katana","Universal"],roles:["physical","hybrid","rogue","ranged"],tags:["Physical","Melee","Damage","Weapon Art","Active"],description:"A fast, reliable weapon cut that conserves stamina while keeping pressure on one enemy.",effect:"damage",power:36,scaling:"weapon"},
    {id:"sk_guard_stance",name:"Guard Stance",kind:"skill",rank:"Common",tier:10,resource:"stamina",cost:4,cooldown:2,weapon:["Universal","Shield"],roles:["physical","hybrid","tank","support"],tags:["Physical","Stance","Guard","Defensive","Buff","Active"],description:"Set your footing, reduce damage, and recover extra stamina.",effect:"buff",buff:"guard",staminaRestorePct:.20},
    {id:"sk_power_strike",name:"Power Strike",kind:"skill",rank:"Common",tier:9,resource:"stamina",cost:12,cooldown:2,weapon:["Sword","Axe","Hammer","Spear","Heavy","Universal"],roles:["physical","hybrid","tank"],tags:["Physical","Melee","Damage","Burst","Break","Active"],description:"A committed heavy attack that scales strongly with weapon power.",effect:"damage",power:58,scaling:"weapon"},
    {id:"sk_shield_bash",name:"Shield Bash",kind:"skill",rank:"Common",tier:9,resource:"stamina",cost:10,cooldown:2,weapon:["Shield","Universal"],roles:["physical","tank","hybrid"],tags:["Physical","Melee","Damage","Guard","Stun","Control","Active"],description:"Drive a shield, weapon guard, or armored shoulder into the enemy. May stun.",effect:"damage",power:42,scaling:"defense",status:"stun",statusChance:.28},
    {id:"sk_hunter_step",name:"Hunter Step",kind:"skill",rank:"Common",tier:8,resource:"stamina",cost:11,cooldown:3,weapon:["Dagger","Bow","Unarmed","Universal"],roles:["physical","rogue","ranged","hybrid"],tags:["Physical","Mobility","Haste","Focus","Buff","Active"],description:"An evasive step that grants Haste and restores a small burst of stamina.",effect:"buff",buff:"haste",staminaRestorePct:.12},
    {id:"sk_piercing_thrust",name:"Piercing Thrust",kind:"skill",rank:"Common",tier:9,resource:"stamina",cost:11,cooldown:2,weapon:["Spear","Polearm","Sword"],roles:["physical","ranged","hybrid"],tags:["Physical","Melee","Piercing","Damage","Weapon Art"],description:"A linear thrust meant to punch through guards and thick hides.",effect:"damage",power:52,scaling:"spear",status:"marked",statusChance:.25},
    {id:"sk_brutal_cleave",name:"Brutal Cleave",kind:"skill",rank:"Common",tier:8,resource:"stamina",cost:14,cooldown:3,weapon:["Axe","Heavy","Hammer"],roles:["physical","tank"],tags:["Physical","Melee","Damage","Break","AoE"],description:"A broad heavy-weapon swing that can pressure multiple enemies.",effect:"damage",aoe:true,power:45,scaling:"axe",status:"vulnerable",statusChance:.18},
    {id:"sk_arrow_pin",name:"Arrow Pin",kind:"skill",rank:"Common",tier:8,resource:"stamina",cost:12,cooldown:2,weapon:["Bow","Crossbow"],roles:["ranged","physical","hybrid"],tags:["Physical","Ranged","Marked","Damage","Control"],description:"A precise shot that pins movement and marks the target.",effect:"damage",power:50,scaling:"bow",status:"marked",statusChance:.45},
    {id:"sk_open_palm_break",name:"Open Palm Break",kind:"skill",rank:"Common",tier:8,resource:"stamina",cost:10,cooldown:2,weapon:["Unarmed","Universal"],roles:["physical","hybrid"],tags:["Physical","Martial Art","Stun","Break","Melee"],description:"A martial strike that disrupts posture and can stun weaker foes.",effect:"damage",power:48,scaling:"unarmed",status:"stun",statusChance:.24},

    // Common spells
    {id:"sp_fire_bolt",name:"Fire Bolt",kind:"spell",rank:"Common",tier:10,resource:"mana",cost:8,cooldown:1,school:"Fire",roles:["magic","hybrid","dark","support"],tags:["Magic","Fire","Ranged","Damage","Burn","Active"],description:"A beginner fire spell that launches a compact bolt of flame.",effect:"damage",power:42,scaling:"magic",status:"burn",statusChance:.25},
    {id:"sp_ice_needle",name:"Ice Needle",kind:"spell",rank:"Common",tier:10,resource:"mana",cost:8,cooldown:1,school:"Ice",roles:["magic","hybrid","support"],tags:["Magic","Ice","Ranged","Damage","Freeze","Control","Active"],description:"A thin spike of cold mana that can freeze the target.",effect:"damage",power:38,scaling:"magic",status:"freeze",statusChance:.18},
    {id:"sp_spark",name:"Spark",kind:"spell",rank:"Common",tier:10,resource:"mana",cost:7,cooldown:1,school:"Lightning",roles:["magic","hybrid","support"],tags:["Magic","Lightning","Ranged","Damage","Paralysis","Active"],description:"A cheap lightning spell that may paralyze an enemy.",effect:"damage",power:36,scaling:"magic",status:"paralysis",statusChance:.22},
    {id:"sp_minor_heal",name:"Minor Heal",kind:"spell",rank:"Common",tier:9,resource:"mana",cost:12,cooldown:2,school:"Healing",roles:["magic","holy","support","hybrid"],tags:["Magic","Holy","Healing","Support","Active"],description:"A low-tier recovery spell that restores a small portion of HP.",effect:"heal",healPct:.22},
    {id:"sp_mana_shield",name:"Mana Shield",kind:"spell",rank:"Common",tier:8,resource:"mana",cost:14,cooldown:3,school:"Barrier",roles:["magic","holy","support","hybrid"],tags:["Magic","Arcane","Barrier","Guard","Defensive","Buff","Active"],description:"Compress mana into a barrier, granting Guard.",effect:"buff",buff:"guard"},

    // Extra physical
    {id:"sk_twin_fang_rush",name:"Twin Fang Rush",kind:"skill",rank:"Extra",tier:7,resource:"stamina",cost:16,cooldown:2,weapon:["Dagger","Sword","Unarmed"],roles:["physical","rogue","hybrid"],tags:["Physical","Melee","Damage","Multi-Hit","Combo"],description:"A two-hit rush for aggressive melee builds.",effect:"damage",power:72,hits:2,scaling:"weapon"},
    {id:"sk_iron_counter",name:"Iron Counter",kind:"skill",rank:"Extra",tier:7,resource:"stamina",cost:15,cooldown:3,weapon:["Shield","Sword","Universal"],roles:["physical","tank","hybrid"],tags:["Physical","Counter","Guard","Defensive","Buff"],description:"Brace for impact and prepare to punish the next opening.",effect:"multiBuff",buff:["guard","focus"]},
    {id:"sk_bleeding_crescent",name:"Bleeding Crescent",kind:"skill",rank:"Extra",tier:6,resource:"stamina",cost:18,cooldown:3,weapon:["Sword","Katana","Dagger","Axe"],roles:["physical","rogue","hybrid"],tags:["Physical","Weapon Art","Melee","Damage","Bleed"],description:"A crescent slash designed to open bleeding wounds.",effect:"damage",power:86,scaling:"weapon",status:"bleed",statusChance:.50},
    {id:"sk_armor_breaker",name:"Armor Breaker",kind:"skill",rank:"Extra",tier:6,resource:"stamina",cost:18,cooldown:3,weapon:["Hammer","Axe","Spear","Heavy","Universal"],roles:["physical","tank","hybrid"],tags:["Physical","Break","Melee","Damage","Vulnerable"],description:"Strike armor, shell, stance, or guard. Applies Vulnerable.",effect:"damage",power:78,scaling:"weapon",status:"vulnerable",statusChance:.60},
    {id:"sk_war_cry",name:"War Cry",kind:"skill",rank:"Extra",tier:6,resource:"stamina",cost:14,cooldown:4,weapon:["Universal"],roles:["physical","tank","support","hybrid"],tags:["Physical","Taunt","Bravery","Buff","Support"],description:"A battle shout that grants Bravery and draws pressure.",effect:"buff",buff:"bravery",status:"marked",statusChance:.35},

    // Extra spells
    {id:"sp_fireball",name:"Fireball",kind:"spell",rank:"Extra",tier:7,resource:"mana",cost:20,cooldown:3,school:"Fire",roles:["magic","dark","hybrid"],tags:["Magic","Fire","AoE","Damage","Burn","Burst"],description:"An explosive fire spell that hits all enemies.",effect:"damage",aoe:true,power:68,scaling:"magic",status:"burn",statusChance:.35},
    {id:"sp_frost_prison",name:"Frost Prison",kind:"spell",rank:"Extra",tier:6,resource:"mana",cost:22,cooldown:3,school:"Ice",roles:["magic","support","hybrid"],tags:["Magic","Ice","Control","Freeze","Debuff"],description:"Bind the enemy in layered ice.",effect:"damage",power:70,scaling:"magic",status:"freeze",statusChance:.45},
    {id:"sp_chain_lightning",name:"Chain Lightning",kind:"spell",rank:"Extra",tier:6,resource:"mana",cost:24,cooldown:3,school:"Lightning",roles:["magic","hybrid"],tags:["Magic","Lightning","AoE","Damage","Paralysis","Multi-Hit"],description:"Lightning jumps between enemies.",effect:"damage",aoe:true,power:60,hits:2,scaling:"magic",status:"paralysis",statusChance:.28},
    {id:"sp_regeneration",name:"Regeneration",kind:"spell",rank:"Extra",tier:6,resource:"mana",cost:20,cooldown:4,school:"Healing",roles:["magic","holy","support","hybrid"],tags:["Magic","Healing","Regeneration","Support","Buff"],description:"Heal immediately and apply Regen.",effect:"heal",healPct:.20,buff:"regen"},
    {id:"sp_shadow_mark",name:"Shadow Mark",kind:"spell",rank:"Extra",tier:5,resource:"mana",cost:23,cooldown:3,school:"Dark",roles:["magic","dark","support","hybrid"],tags:["Magic","Dark","Curse","Marked","Vulnerable","Debuff"],description:"Etch a shadow sigil that makes the enemy easier to damage.",effect:"damage",power:48,scaling:"magic",status:"marked",statusChance:.75,secondaryStatus:"vulnerable",secondaryChance:.45},

    // Unique/Ultimate
    {id:"sk_dragon_rend",name:"Dragon Rend",kind:"skill",rank:"Unique",tier:4,resource:"stamina",cost:32,cooldown:4,weapon:["Sword","Spear","Axe","Heavy"],roles:["physical","hybrid"],tags:["Physical","Weapon Art","Burst","Damage","Piercing","Unique"],description:"A monster-slaying art built to split scales and armor.",effect:"damage",power:150,scaling:"weapon",status:"vulnerable",statusChance:.45,requirements:[{type:"stat",stat:"phy_atk",value:65},{type:"enemy",name:"Starfall Drake"}]},
    {id:"sk_phantom_step_art",name:"Phantom Step Art",kind:"skill",rank:"Unique",tier:4,resource:"stamina",cost:28,cooldown:4,weapon:["Dagger","Unarmed","Bow","Universal"],roles:["physical","rogue","ranged","hybrid"],tags:["Physical","Mobility","Haste","Counter","Unique"],description:"A speed art that turns movement into afterimages.",effect:"multiBuff",buff:["haste","focus"],requirements:[{type:"stat",stat:"agi",value:70},{type:"known",id:"sk_hunter_step"},{type:"uses",id:"sk_hunter_step",value:10}]},
    {id:"sk_kings_guard",name:"King’s Guard",kind:"skill",rank:"Unique",tier:3,resource:"stamina",cost:30,cooldown:5,weapon:["Shield","Heavy","Universal"],roles:["tank","physical","hybrid"],tags:["Physical","Guard","Counter","Defensive","Unique"],description:"The defensive form of royal guardians.",effect:"multiBuff",buff:["guard","thorns"],staminaRestorePct:.20,requirements:[{type:"jobRole",role:"tank"},{type:"stat",stat:"phy_def",value:70}]},
    {id:"sk_blood_moon_reaver",name:"Blood Moon Reaver",kind:"skill",rank:"Unique",tier:3,resource:"stamina",cost:35,cooldown:5,weapon:["Sword","Axe","Katana"],roles:["physical","rogue","hybrid"],tags:["Physical","Weapon Art","Bleed","Burst","Unique"],description:"A forbidden reaving slash that grows more vicious against bleeding foes.",effect:"damage",power:180,scaling:"weapon",status:"bleed",statusChance:.80,requirements:[{type:"known",id:"sk_bleeding_crescent"},{type:"status",status:"bleed",value:15}]},
    {id:"sk_soul_bound_blade_art",name:"Soul-Bound Blade Art",kind:"skill",rank:"Unique",tier:2,resource:"stamina",cost:42,cooldown:5,weapon:["Sword","Katana","Dagger"],roles:["physical","hybrid","rogue"],tags:["Physical","Weapon Art","True Damage","Burst","Unique"],description:"Synchronize weapon, soul, and class mastery into one strike.",effect:"damage",power:230,scaling:"weapon",requirements:[{type:"rareJob"},{type:"totalLevel",value:45}]},

    {id:"sp_world_flame_sigil",name:"World Flame Sigil",kind:"spell",rank:"Unique",tier:4,resource:"mana",cost:36,cooldown:4,school:"Fire",roles:["magic","dark","hybrid"],tags:["Magic","Fire","Burn","AoE","Curse","Unique"],description:"A battlefield fire sigil that evolves from Fireball mastery.",effect:"damage",aoe:true,power:125,scaling:"magic",status:"burn",statusChance:.70,requirements:[{type:"known",id:"sp_fireball"},{type:"status",status:"burn",value:25}]},
    {id:"sp_abyssal_chain",name:"Abyssal Chain",kind:"spell",rank:"Unique",tier:4,resource:"mana",cost:34,cooldown:4,school:"Dark",roles:["magic","dark","hybrid"],tags:["Magic","Dark","Curse","Control","Fear","Unique"],description:"Dark chains bind the target’s shadow.",effect:"damage",power:110,scaling:"magic",status:"fear",statusChance:.65,requirements:[{type:"known",id:"sp_shadow_mark"},{type:"stat",stat:"mag_atk",value:65}]},
    {id:"sp_saints_restoration",name:"Saint’s Restoration",kind:"spell",rank:"Unique",tier:3,resource:"mana",cost:40,cooldown:5,school:"Holy",roles:["holy","magic","support","hybrid"],tags:["Magic","Holy","Healing","Cleanse","Barrier","Unique"],description:"High holy restoration: heal, cleanse, and guard.",effect:"heal",healPct:.55,buff:"guard",cleanse:true,requirements:[{type:"known",id:"sp_minor_heal"},{type:"stat",stat:"resist",value:60}]},
    {id:"sp_storm_crown_invocation",name:"Storm Crown Invocation",kind:"spell",rank:"Unique",tier:3,resource:"mana",cost:42,cooldown:5,school:"Lightning",roles:["magic","hybrid"],tags:["Magic","Lightning","AoE","Haste","Paralysis","Unique"],description:"A crown of stormlight that shocks enemies and quickens you.",effect:"damage",aoe:true,power:115,scaling:"magic",status:"paralysis",statusChance:.45,buff:"haste",requirements:[{type:"known",id:"sp_chain_lightning"},{type:"stat",stat:"special",value:60}]},
    {id:"sp_void_gate",name:"Void Gate",kind:"spell",rank:"Unique",tier:2,resource:"mana",cost:48,cooldown:6,school:"Arcane",roles:["magic","dark","hybrid"],tags:["Magic","Arcane","Dark","Control","Banish","Unique"],description:"Open a short-lived gate into the void.",effect:"damage",power:210,scaling:"magic",status:"doom",statusChance:.18,requirements:[{type:"flag",flag:"first_secret_discovery"},{type:"totalLevel",value:50}]},

    {id:"sk_heaven_splitting_lion_art",name:"Heaven-Splitting Lion Art",kind:"skill",rank:"Ultimate",tier:1,resource:"stamina",cost:70,cooldown:8,weapon:["Sword","Axe","Spear","Heavy"],roles:["physical","hybrid"],tags:["Physical","Ultimate","Weapon Art","Burst","Critical","Piercing"],description:"A legendary single-target weapon art with the pressure of a divine beast.",effect:"damage",power:420,scaling:"weapon",status:"vulnerable",statusChance:.85,requirements:[{type:"known",id:"sk_soul_bound_blade_art"},{type:"totalLevel",value:80}]},
    {id:"sk_aegis_last_king",name:"Aegis of the Last King",kind:"skill",rank:"Ultimate",tier:1,resource:"stamina",cost:60,cooldown:8,weapon:["Shield","Heavy","Universal"],roles:["tank","physical"],tags:["Physical","Ultimate","Guard","Counter","Defensive","Thorns"],description:"The final royal guard stance. Impossible defense and retaliatory judgment.",effect:"multiBuff",buff:["guard","thorns","bravery"],staminaRestorePct:.30,requirements:[{type:"known",id:"sk_kings_guard"},{type:"totalLevel",value:80}]},
    {id:"sk_thousand_step_godspeed_reversal",name:"Thousand-Step Godspeed Reversal",kind:"skill",rank:"Ultimate",tier:1,resource:"stamina",cost:65,cooldown:8,weapon:["Dagger","Unarmed","Sword"],roles:["physical","rogue","hybrid"],tags:["Physical","Ultimate","Mobility","Counter","Multi-Hit","Haste"],description:"An ultimate speed art that turns every step into a counterstrike.",effect:"damage",power:360,hits:5,scaling:"weapon",buff:"haste",requirements:[{type:"known",id:"sk_phantom_step_art"},{type:"stat",stat:"agi",value:100}]},
    {id:"sp_astraea_final_benediction",name:"Astraea’s Final Benediction",kind:"spell",rank:"Ultimate",tier:1,resource:"mana",cost:85,cooldown:9,school:"Holy",roles:["holy","magic","support"],tags:["Magic","Ultimate","Holy","Healing","Cleanse","Barrier","Support"],description:"A world-class miracle that restores, cleanses, and protects.",effect:"heal",healPct:1.00,buff:"guard",cleanse:true,requirements:[{type:"known",id:"sp_saints_restoration"},{type:"totalLevel",value:80}]},
    {id:"sp_ragnarok_starfall_cataclysm",name:"Ragnarok Starfall Cataclysm",kind:"spell",rank:"Ultimate",tier:1,resource:"mana",cost:95,cooldown:9,school:"Arcane",roles:["magic"],tags:["Magic","Ultimate","AoE","Fire","Arcane","Burst","Damage"],description:"Call down a storm of dying stars.",effect:"damage",aoe:true,power:330,hits:3,scaling:"magic",status:"burn",statusChance:.80,requirements:[{type:"known",id:"sp_world_flame_sigil"},{type:"totalLevel",value:85}]},
    {id:"sp_eclipse_archive_end_names",name:"Eclipse Archive: End of Names",kind:"spell",rank:"Ultimate",tier:1,resource:"mana",cost:90,cooldown:9,school:"Dark",roles:["magic","dark"],tags:["Magic","Ultimate","Dark","Arcane","Curse","Weaken","Marked","Damage"],description:"Open a cursed archive that erases the enemy’s name.",effect:"damage",aoe:true,power:260,scaling:"magic",status:"weaken",statusChance:.90,secondaryStatus:"marked",secondaryChance:.90,requirements:[{type:"known",id:"sp_void_gate"},{type:"totalLevel",value:85}]},

    // Intrinsic passives/spells
    {id:"in_dragon_scales",name:"Dragon Scales",kind:"skill",rank:"Intrinsic",tier:6,resource:"passive",cost:0,cooldown:0,weapon:["Universal"],roles:["all"],tags:["Intrinsic","Passive","Dragon","Guard","Defensive"],description:"A draconic body trait that reinforces defense and resistance.",effect:"passive",bon:{pd:4,rs:3}},
    {id:"in_dragon_breath",name:"Dragon Breath",kind:"spell",rank:"Intrinsic",tier:5,resource:"mana",cost:28,cooldown:4,school:"Fire",roles:["all"],tags:["Intrinsic","Magic","Fire","AoE","Damage","Burn"],description:"Exhale destructive elemental force from a draconic core.",effect:"damage",aoe:true,power:95,scaling:"hybrid",status:"burn",statusChance:.45},
    {id:"in_arcane_sight",name:"Arcane Sight",kind:"spell",rank:"Intrinsic",tier:8,resource:"passive",cost:0,cooldown:0,school:"Arcane",roles:["all"],tags:["Intrinsic","Passive","Arcane","Utility"],description:"An elven sense for mana currents.",effect:"passive",bon:{ma:2,sp:2}},
    {id:"in_stoneblood",name:"Stoneblood",kind:"skill",rank:"Intrinsic",tier:8,resource:"passive",cost:0,cooldown:0,weapon:["Universal"],roles:["all"],tags:["Intrinsic","Passive","Guard","Defensive"],description:"A dwarven body trait that hardens blood and bone.",effect:"passive",bon:{hp:10,pd:3}},
    {id:"in_hellfire_affinity",name:"Hellfire Affinity",kind:"spell",rank:"Intrinsic",tier:6,resource:"passive",cost:0,cooldown:0,school:"Fire",roles:["all"],tags:["Intrinsic","Passive","Fire","Dark","Magic"],description:"A demonic affinity for dark flame and curses.",effect:"passive",bon:{ma:3,rs:2}},
    {id:"in_predator_instinct",name:"Predator Instinct",kind:"skill",rank:"Intrinsic",tier:8,resource:"passive",cost:0,cooldown:0,weapon:["Universal"],roles:["all"],tags:["Intrinsic","Passive","Physical","Critical","Focus"],description:"A beastkin instinct for pursuit and openings.",effect:"passive",bon:{ag:3,pa:2}},
    {id:"in_deathless_body",name:"Deathless Body",kind:"skill",rank:"Intrinsic",tier:6,resource:"passive",cost:0,cooldown:0,weapon:["Universal"],roles:["all"],tags:["Intrinsic","Passive","Undead","Defensive"],description:"An undead body that endures wounds living flesh cannot.",effect:"passive",bon:{hp:14,rs:4}},
    {id:"in_adaptive_body",name:"Adaptive Body",kind:"skill",rank:"Intrinsic",tier:8,resource:"passive",cost:0,cooldown:0,weapon:["Universal"],roles:["all"],tags:["Intrinsic","Passive","Slime","Evolution","Utility"],description:"A slime body trait that adapts to shape, impact, and strange environments.",effect:"passive",bon:{hp:10,sp:3}}
  ];
  var AB = {}; A.forEach(function(x){ AB[x.id]=x; });
  window.BYL_ABILITIES_V26 = A;

  function grantIntrinsicByRace(){
    if (!G || !G.race_id || typeof RACE_DATA === "undefined") return;
    var r = RACE_DATA[G.race_id] || {};
    var blob = ((r.name||"")+" "+(r.anime||"")+" "+(r.desc||"")).toLowerCase();
    var grants = [];
    if (/dragon|dragonewt|dragonkin/.test(blob)) grants.push("in_dragon_scales","in_dragon_breath");
    if (/elf|fairy|spirit/.test(blob)) grants.push("in_arcane_sight");
    if (/dwarf|golem|stone/.test(blob)) grants.push("in_stoneblood");
    if (/demon|devil|oni|asura|rakshasa/.test(blob)) grants.push("in_hellfire_affinity");
    if (/beast|cat|dog|fox|kitsune|wolf|bear|lion|tiger|rabbit|mink|lizard|harpy|bird|centaur|minotaur/.test(blob)) grants.push("in_predator_instinct");
    if (/undead|skeleton|zombie|lich|vampire|wraith|ghost/.test(blob)) grants.push("in_deathless_body");
    if (/slime/.test(blob)) grants.push("in_adaptive_body");
    grants.forEach(function(id){ if(G.learned_abilities.indexOf(id)<0) G.learned_abilities.push(id); });
  }

  // ── Header race/stamina cell ─────────────────────────────────
  function ensureHeaderRace(){
    var bar = $("stats-bar");
    if (!bar || $("s-race")) return;
    bar.classList.add("v26-header");
    var nameCell = $("s-name") ? $("s-name").closest(".stat-cell") : null;
    var jobCell = $("s-class") ? $("s-class").closest(".stat-cell") : null;
    if (nameCell) {
      var race = document.createElement("div");
      race.className = "stat-cell";
      race.innerHTML = '<span class="lbl">RACE</span><span class="val" id="s-race">—</span>';
      nameCell.insertAdjacentElement("afterend", race);
    }
    var hpCell = $("s-hp") ? $("s-hp").closest(".stat-cell") : null;
    if (hpCell && !$("s-stamina")) {
      var sta = document.createElement("div");
      sta.className = "stat-cell";
      sta.innerHTML = '<span class="lbl">STAMINA</span><span class="val" id="s-stamina">—</span>';
      hpCell.insertAdjacentElement("afterend", sta);
    }
  }
  function updateHeaderRace(){
    ensureHeaderRace();
    var r = $("s-race"), st = $("s-stamina");
    if (r) r.textContent = (G && G.race_id && RACE_DATA[G.race_id]) ? RACE_DATA[G.race_id].name : "—";
    if (st) st.textContent = (G && typeof G.stamina === "number") ? Math.floor(G.stamina) + "/" + Math.floor(G.max_stamina || 0) : "—";
  }

  // ── Path Renaming ────────────────────────────────────────────
  function stageName(base, tier, branch){
    var b = String(base || "Path");
    var main = branch === 0;
    if (tier === "Advanced") return main ? b + " Vanguard" : b + " Adept";
    if (tier === "Specialist") return main ? b + " Paragon" : "Eclipse " + b;
    if (tier === "Rare") return main ? b + " Sovereign" : "Mythic " + b;
    if (tier === "Hidden") return main ? "World-Crowned " + b : "Hidden Origin " + b;
    return b + " " + tier;
  }
  function raceStageName(base, tier, branch){
    var b = String(base || "Race").replace(/s$/,"");
    var main = branch === 0;
    if (tier === "Advanced") return main ? "Awakened " + b : b + " Bloodline";
    if (tier === "Specialist") return main ? "Elder " + b : "Mythic " + b;
    if (tier === "Rare") return main ? b + " Sovereign" : "Ancient " + b + " Avatar";
    if (tier === "Hidden") return main ? "Origin " + b : "World-Born " + b;
    return b + " " + tier;
  }
  function renameRaceAndJobPaths(){
    ensureV26State();
    if (G.v26_renamed_paths) return;
    try {
      if (typeof JOB_DATA !== "undefined") {
        Object.keys(JOB_DATA).forEach(function(id){
          var j = JOB_DATA[id];
          if (!j || !j.req || !j.req.jobBranch || !j.req.baseJobId || !JOB_DATA[j.req.baseJobId]) return;
          var base = JOB_DATA[j.req.baseJobId].name;
          var old = j.name;
          j.name = stageName(base, j.class_tier || "Advanced", j.req.branch || 0);
          j.desc = (j.class_tier || "Advanced") + " upgrade path of " + base + ". This unique v0.26 name replaces the older generic path name: " + old + ".";
          if (Array.isArray(j.skills)) {
            j.skills.forEach(function(t){
              if (!Array.isArray(t) || !Array.isArray(t[1])) return;
              t[1].forEach(function(sk){
                if (!sk) return;
                if (/Form|Art|Mastery/.test(sk.name || "")) sk.name = j.name + (sk.type === "p" ? " Mastery" : " Art");
                if (sk.desc) sk.desc += " This skill belongs to the " + j.name + " path.";
              });
            });
          }
        });
        Object.keys(JOB_DATA).forEach(function(id){
          var j = JOB_DATA[id];
          if (!j || !j.anime || j.anime !== "Race Evolution") return;
          var raceBase = "Race";
          var m = String(j.desc || "").match(/for (.*?) via/i);
          if (m) raceBase = m[1];
          var old = j.name;
          var branch = /Mythic Path/i.test(j.desc || "") ? 1 : 0;
          j.name = raceStageName(raceBase, j.class_tier || "Advanced", branch);
          j.desc = (j.class_tier || "Advanced") + " race evolution of " + raceBase + ". This unique v0.26 name replaces: " + old + ".";
        });
      }
      if (typeof RACE_EVOLUTION_PATHS !== "undefined") {
        Object.keys(RACE_EVOLUTION_PATHS).forEach(function(base){
          (RACE_EVOLUTION_PATHS[base] || []).forEach(function(path, bIdx){
            (path.stages || []).forEach(function(stg){
              stg.name = raceStageName(base, stg.tier || "Advanced", bIdx);
            });
          });
        });
      }
    } catch(e) { console.warn("v26 rename paths warning", e); }
    G.v26_renamed_paths = true;
  }

  // ── Roles / Restrictions ─────────────────────────────────────
  function currentJobRoles(){
    var roles = {};
    try {
      (G.jobs || []).forEach(function(ent){
        var j = JOB_DATA[ent.id];
        var blob = ((j && (j.name+" "+j.anime+" "+j.class_tier+" "+j.desc)) || "").toLowerCase();
        if (/knight|guardian|shield|paladin|templar|tank|defender/.test(blob)) roles.tank = true;
        if (/warrior|sword|fighter|spear|lancer|berserk|samurai|monk|martial|oni|dragon|mercenary|bounty|goblin|demon lord|vampire lord/.test(blob)) roles.physical = true;
        if (/rogue|thief|assassin|ninja|scout|spy|trickster/.test(blob)) roles.rogue = true;
        if (/archer|hunter|ranger|sniper|gunner|bow/.test(blob)) roles.ranged = true;
        if (/mage|wizard|sorcerer|witch|elementalist|barrier|warlock|necromancer|curse|blood|onmyoji|esper/.test(blob)) roles.magic = true;
        if (/cleric|priest|saint|healer|miko|oracle|holy|paladin|exorcist/.test(blob)) roles.holy = true, roles.magic = true, roles.support = true;
        if (/dark|curse|blood|reaper|demon|necromancer|warlock/.test(blob)) roles.dark = true, roles.magic = true;
        if (/support|bard|dancer|strategist|cook|buffer|enchanter|summoner|tamer/.test(blob)) roles.support = true;
        if (/summoner|tamer|beast|contract/.test(blob)) roles.summoner = true, roles.magic = true;
        if (/paladin|magic gunner|ranger|onmyoji|cultivator|hero|adventurer|enchanter|engineer|alchemist|miko|samurai/.test(blob)) roles.hybrid = true;
      });
    } catch(e){}
    if (!Object.keys(roles).length) roles.physical = true, roles.hybrid = true;
    roles.all = true;
    return roles;
  }
  function roleAllowed(a){
    if (!a || !a.roles || a.roles.indexOf("all") >= 0) return true;
    var roles = currentJobRoles();
    return a.roles.some(function(r){ return !!roles[r]; });
  }

  // ── Weapon Type / Requirements / Scaling ─────────────────────
  function itemNameById(id){
    if (!id) return "";
    try { var it = typeof getEquip === "function" ? getEquip(id) : null; return it ? it.name + " " + (it.desc||"") + " " + (it.slot||"") : ""; } catch(e){ return ""; }
  }
  function detectWeaponTypes(){
    var names = [];
    if (G.weapon) names.push((G.weapon.name||"") + " " + (G.weapon.desc||""));
    try {
      if (G.equipment) {
        names.push(itemNameById(G.equipment.weapon1));
        names.push(itemNameById(G.equipment.weapon2));
      }
    } catch(e){}
    var joined = names.join(" ").toLowerCase();
    var types = [];
    function add(t){ if(types.indexOf(t)<0) types.push(t); }
    if (/sword|blade|saber|cutlass|rapier|longsword|greatsword/.test(joined)) add("Sword");
    if (/katana|tachi|nodachi/.test(joined)) add("Katana"), add("Sword");
    if (/dagger|knife|dirk|stiletto/.test(joined)) add("Dagger");
    if (/axe|hatchet|greataxe/.test(joined)) add("Axe"), add("Heavy");
    if (/hammer|mace|maul|club/.test(joined)) add("Hammer"), add("Heavy");
    if (/spear|lance|polearm|halberd|glaive/.test(joined)) add("Spear"), add("Polearm");
    if (/bow|crossbow/.test(joined)) add("Bow"), add("Crossbow");
    if (/staff|wand|rod/.test(joined)) add("Staff");
    if (/shield|buckler/.test(joined)) add("Shield");
    if (/fist|glove|gauntlet|unarmed|knuckle/.test(joined)) add("Unarmed");
    if (!joined.trim()) add("Unarmed");
    add("Universal");
    return types;
  }
  function weaponReqText(a){
    if (!a || !a.weapon || a.weapon.indexOf("Universal") >= 0) return "Any / Universal";
    return a.weapon.join(" / ");
  }
  function weaponAllowed(a){
    if (!a || a.kind !== "skill") return true;
    if (!a.weapon || a.weapon.indexOf("Universal") >= 0) return true;
    var have = detectWeaponTypes();
    return a.weapon.some(function(w){ return have.indexOf(w) >= 0; });
  }
  function weaponAttackValue(){
    var total = 0;
    if (G.weapon && G.weapon.atk) total += G.weapon.atk;
    try {
      if (G.equipment) {
        [G.equipment.weapon1, G.equipment.weapon2].forEach(function(id){
          if (!id || typeof getEquip !== "function") return;
          var it = getEquip(id);
          if (it) total += (it.atk || 0) + ((it.bon && (it.bon.pa || it.bon.ma || 0)) || 0);
        });
      }
    } catch(e){}
    return total;
  }
  function weaponScalingPower(a){
    var wAtk = weaponAttackValue();
    var s = a.scaling || (a.kind === "spell" ? "magic" : "weapon");
    var pa = G.phy_atk || 0, pd = G.phy_def || 0, ag = G.agi || 0, ma = G.mag_atk || 0, md = G.mag_def || 0, rs = G.resist || 0, sp = G.special || 0;
    if (s === "magic") return (a.power||0) + ma*1.0 + md*.25 + rs*.25 + sp*.45;
    if (s === "hybrid") return (a.power||0) + pa*.45 + ma*.45 + ag*.25 + sp*.45 + wAtk;
    if (s === "defense") return (a.power||0) + pd*.9 + pa*.25 + wAtk*.6;
    if (s === "spear") return (a.power||0) + pa*.75 + ag*.45 + wAtk*1.15;
    if (s === "axe") return (a.power||0) + pa*.95 + pd*.30 + wAtk*1.25;
    if (s === "bow") return (a.power||0) + ag*.85 + pa*.45 + wAtk*1.2;
    if (s === "unarmed") return (a.power||0) + pa*.65 + ag*.65 + sp*.15 + wAtk;
    return (a.power||0) + pa*.85 + ag*.35 + wAtk*1.15;
  }

  // ── Requirements / Unlocks ───────────────────────────────────
  function getAbility(id){ return AB[id] || null; }
  function known(id){ return G.learned_abilities.indexOf(id) >= 0; }
  function defeatedEnemy(name){ return !!(G.enemy_encounters && G.enemy_encounters[name]) || !!(G.codex_unlocked && G.codex_unlocked[name]) || !!(G.achievements && G.achievements.defeated && G.achievements.defeated[name]); }
  function meetsReq(r){
    if (!r) return true;
    if (r.type === "stat") return Number(G[r.stat] || 0) >= r.value;
    if (r.type === "known") return known(r.id);
    if (r.type === "uses") return (G.ability_uses[r.id] || 0) >= r.value;
    if (r.type === "status") return (G.status_applications[r.status] || 0) >= r.value;
    if (r.type === "enemy") return defeatedEnemy(r.name);
    if (r.type === "jobRole") return !!currentJobRoles()[r.role];
    if (r.type === "rareJob") {
      return (G.jobs||[]).some(function(j){ var jd=JOB_DATA[j.id]; return jd && /rare|hidden/i.test(jd.class_tier||""); });
    }
    if (r.type === "totalLevel") return (G.total_lv||0) >= r.value;
    if (r.type === "flag") return !!(G.achievements && Array.isArray(G.achievements.flags) && G.achievements.flags.indexOf(r.flag)>=0);
    return false;
  }
  function reqText(r){
    if (!r) return "";
    if (r.type === "stat") return r.stat.toUpperCase() + " " + r.value + "+";
    if (r.type === "known") return "Know " + (getAbility(r.id) ? getAbility(r.id).name : r.id);
    if (r.type === "uses") return "Use " + (getAbility(r.id) ? getAbility(r.id).name : r.id) + " " + r.value + " times";
    if (r.type === "status") return "Apply " + titleCase(r.status) + " " + r.value + " times";
    if (r.type === "enemy") return "Encounter/defeat " + r.name;
    if (r.type === "jobRole") return "Requires " + titleCase(r.role) + " job";
    if (r.type === "rareJob") return "Requires Rare or Hidden job";
    if (r.type === "totalLevel") return "Total Level " + r.value + "+";
    if (r.type === "flag") return "Unlock flag/achievement: " + r.flag;
    return "Special requirement";
  }
  function abilityRequirementsMet(a){ return !a.requirements || a.requirements.every(meetsReq); }
  function lockedReason(a){
    var out = [];
    if (a.kind === "skill" && !weaponAllowed(a)) out.push("Requires weapon: " + weaponReqText(a));
    if (!roleAllowed(a)) out.push("Requires job role: " + (a.roles||[]).map(titleCase).join(" / "));
    (a.requirements || []).forEach(function(r){ if(!meetsReq(r)) out.push(reqText(r)); });
    return out.join(" · ");
  }
  function unlockAvailableAbilities(printIt){
    A.forEach(function(a){
      if (known(a.id)) return;
      if ((a.rank === "Unique" || a.rank === "Ultimate") && abilityRequirementsMet(a) && roleAllowed(a)) {
        G.learned_abilities.push(a.id);
        if (printIt) safePrint("✦ Unlocked " + a.rank + " " + (a.kind==="spell"?"Spell":"Skill") + ": " + a.name + "!", "b-system");
      }
    });
  }

  // ── Resource / Passive Application ───────────────────────────
  function applyAbilityPassives(){
    if (!Array.isArray(G.learned_abilities)) return;
    G.learned_abilities.forEach(function(id){
      var a = getAbility(id);
      if (!a || a.effect !== "passive" || !a.bon) return;
      Object.keys(a.bon).forEach(function(k){
        var v = a.bon[k];
        if (k === "hp") G.max_hp += v;
        else if (k === "mp") G.max_mp += v;
        else if (k === "pa") G.phy_atk += v;
        else if (k === "pd") G.phy_def += v;
        else if (k === "ag") G.agi += v;
        else if (k === "ma") G.mag_atk += v;
        else if (k === "md") G.mag_def += v;
        else if (k === "rs") G.resist += v;
        else if (k === "sp") G.special += v;
      });
    });
  }
  function recalcStamina(){
    var oldMax = G.max_stamina || 0, old = G.stamina || 0;
    var phys = (G.phy_atk||0)*1.25 + (G.phy_def||0)*.90 + (G.agi||0)*1.05 + (G.special||0)*.60;
    var newMax = Math.max(35, Math.floor(45 + phys + (G.total_lv||0)*1.5));
    G.max_stamina = newMax;
    if (!oldMax) G.stamina = newMax;
    else G.stamina = Math.min(newMax, Math.max(0, Math.round(old * (newMax/oldMax))));
  }
  if (baseFns.applyStats) {
    applyStats = function(){
      var ret = baseFns.applyStats.apply(this, arguments);
      ensureV26State();
      applyAbilityPassives();
      recalcStamina();
      return ret;
    };
  }
  if (baseFns.updateStats) {
    updateStats = function(){
      ensureHeaderRace();
      ensureV26State();
      var ret = baseFns.updateStats.apply(this, arguments);
      updateHeaderRace();
      return ret;
    };
  }

  // ── Battle Try Again Fix ─────────────────────────────────────
  if (baseFns.winBattle) {
    winBattle = async function(){
      var remembered = (typeof _lastZone === "function") ? _lastZone : null;
      var ret = await baseFns.winBattle.apply(this, arguments);
      setTimeout(function(){
        Array.prototype.slice.call(document.querySelectorAll("#choices button")).forEach(function(btn){
          var txt = btn.textContent || "";
          if (/try again|fight again/i.test(txt)) {
            btn.textContent = "Try Again — start a fresh encounter";
            btn.onclick = function(){
              try { B = null; } catch(e){}
              try { showBattlePanel(false); } catch(e){}
              if (remembered) remembered();
              else if (typeof map_screen === "function") map_screen();
              else town_center();
            };
          }
        });
      }, 75);
      return ret;
    };
  }

  // ── Battle Start Enemy Encounter Tracking ────────────────────
  function inferEnemyRaceJob(en){
    var name = ((en && en.name) || "").toLowerCase();
    var lore = ((en && en.lore) || "").toLowerCase();
    var blob = name + " " + lore;
    var race = /dragon|drake/.test(blob) ? "Dragon" : /goblin/.test(blob) ? "Goblin" : /hollow|wraith|ghost|undead|zombie|skeleton/.test(blob) ? "Undead" : /demon|devil|curse|abyss/.test(blob) ? "Demon" : /slime/.test(blob) ? "Slime" : /beast|wolf|bear|monster|chimera/.test(blob) ? "Beast" : /mage|magus|wizard|witch/.test(blob) ? "Humanoid" : "Unknown";
    var job = /mage|magus|wizard|witch|sorcerer/.test(blob) ? "Spellcaster" : /knight|guard|sentinel|shield/.test(blob) ? "Guardian" : /archer|sniper|gun/.test(blob) ? "Ranged Fighter" : /assassin|rogue|ninja|shadow/.test(blob) ? "Rogue" : /healer|priest|saint/.test(blob) ? "Support" : "Monster";
    return {race:race, job:job};
  }
  function recordEnemyEncounter(en){
    if (!en || !en.name) return;
    var rj = inferEnemyRaceJob(en);
    G.enemy_encounters[en.name] = {
      name: en.name, emoji: en.emoji || "👹", hp: en.hp || 0, atk: en.atk || 0,
      race: en.race || rj.race, job: en.job || rj.job, lore: en.lore || "",
      moves: (en.moves || []).map(function(m){ return m.name || String(m); }),
      seen: (G.enemy_encounters[en.name] ? G.enemy_encounters[en.name].seen + 1 : 1)
    };
  }
  if (baseFns.startBattle) {
    startBattle = function(enemyOrArr){
      ensureV26State();
      (Array.isArray(enemyOrArr) ? enemyOrArr : [enemyOrArr]).forEach(recordEnemyEncounter);
      var ret = baseFns.startBattle.apply(this, arguments);
      return ret;
    };
  }

  // ── Battle Menu + Ability Execution ─────────────────────────
  function tickCooldowns(){
    if (!B) return;
    if (!B.ability_cooldowns) B.ability_cooldowns = {};
    Object.keys(B.ability_cooldowns).forEach(function(id){
      B.ability_cooldowns[id] = Math.max(0, (B.ability_cooldowns[id]||0)-1);
      if (B.ability_cooldowns[id] <= 0) delete B.ability_cooldowns[id];
    });
  }
  function regenStamina(extra){
    var pct = .10 + (extra||0);
    if (B && B.p_fx && B.p_fx.haste) pct += .04;
    if (B && B.p_fx && B.p_fx.focus) pct += .03;
    var amt = clamp(Math.floor((G.max_stamina||0)*pct), 6, Math.max(8, Math.floor((G.max_stamina||0)*.28)));
    var old = G.stamina || 0;
    G.stamina = Math.min(G.max_stamina||0, old+amt);
    if (B && G.stamina > old) safePrint("Recovered " + (G.stamina-old) + " Stamina.", "info");
  }
  function cd(a){ return B && B.ability_cooldowns ? (B.ability_cooldowns[a.id]||0) : 0; }
  function canPay(a){ return a.resource==="passive" || (a.resource==="stamina" ? (G.stamina||0)>=a.cost : (G.mp||0)>=a.cost); }
  function costLabel(a){ return a.resource==="stamina" ? a.cost+" STA" : a.resource==="mana" ? a.cost+" MP" : "Passive"; }
  function disabledReason(a){
    if (!roleAllowed(a)) return "Requires job role: " + (a.roles||[]).map(titleCase).join(" / ");
    if (a.kind==="skill" && !weaponAllowed(a)) return "Requires weapon: " + weaponReqText(a);
    if (cd(a)>0) return "Cooldown: " + cd(a) + " turn" + (cd(a)===1?"":"s");
    if (!canPay(a)) return a.resource==="stamina" ? "Not enough Stamina." : "Not enough Mana.";
    return "";
  }
  function knownAbilities(kind){
    ensureV26State();
    unlockAvailableAbilities(false);
    return G.learned_abilities.map(function(id){ return getAbility(id); }).filter(function(a){ return a && (!kind || a.kind===kind); });
  }
  function showBattleMenuV26(){
    ensureV26State();
    if (typeof $ch === "undefined") return;
    $ch.innerHTML = "";
    var row = document.createElement("div");
    row.className = "btn-row";
    function add(label, fn, dis){ var b=document.createElement("button"); b.className="battle-btn"; b.textContent=label; b.onclick=fn; b.disabled=!!dis; row.appendChild(b); }
    add("⚔ Attack", doAttack);
    add("💪 Physical Skills", physical_skills_menu, knownAbilities("skill").filter(function(a){return a.resource!=="passive";}).length===0);
    add("🔮 Magic Spells", magic_spells_menu, knownAbilities("spell").filter(function(a){return a.resource!=="passive";}).length===0);
    add("🤝 Recruits / Support", doRecruitAssistMenu, typeof getBattleReadyRecruits === "function" ? getBattleReadyRecruits().length===0 : false);
    add("🎒 Items", doItemMenu);
    add("🛡 Defend / Recover", defendRecoverV26);
    add("🏃 Run", doRun);
    $ch.appendChild(row);
  }
  showBattleMenu = showBattleMenuV26;
  physical_skills_menu = function(){ abilityBattleMenu("skill"); };
  magic_spells_menu = function(){ abilityBattleMenu("spell"); };

  function abilityBattleMenu(kind){
    ensureV26State();
    $ch.innerHTML = "";
    var p = document.createElement("p");
    p.className = "b-system";
    p.textContent = kind==="skill" ? "— Physical Skills [Stamina] —" : "— Magic Spells [Mana] —";
    $ch.appendChild(p);
    knownAbilities(kind).filter(function(a){ return a.resource !== "passive"; }).sort(function(a,b){return a.tier-b.tier || a.name.localeCompare(b.name);}).forEach(function(a){
      var reason = disabledReason(a);
      var b = document.createElement("button");
      b.style.whiteSpace = "pre-wrap";
      b.textContent = a.name + " — " + costLabel(a) + " — CD " + a.cooldown +
        "\n" + a.rank + " " + (a.kind==="spell"?"Spell":"Skill") + " · Tier " + a.tier +
        (a.kind==="skill" ? " · Weapon: " + weaponReqText(a) : " · School: " + (a.school||"Arcane")) +
        "\nTags: " + a.tags.join(", ") + (reason ? "\n" + reason : "\n" + a.description);
      b.disabled = !!reason;
      b.onclick = function(){ executeAbilityV26(a); };
      $ch.appendChild(b);
    });
    var back = document.createElement("button");
    back.textContent = "← Back";
    back.onclick = showBattleMenu;
    $ch.appendChild(back);
  }
  function pay(a){
    if (a.resource==="stamina") G.stamina = Math.max(0, (G.stamina||0)-a.cost);
    if (a.resource==="mana") G.mp = Math.max(0, (G.mp||0)-a.cost);
    if (B) {
      if (!B.ability_cooldowns) B.ability_cooldowns = {};
      if (a.cooldown) B.ability_cooldowns[a.id]=a.cooldown;
    }
    G.ability_uses[a.id]=(G.ability_uses[a.id]||0)+1;
  }
  function applyStatus(a){
    if (!B) return;
    if (a.status && Math.random() < (a.statusChance || .3)) {
      if (typeof applyFx==="function") applyFx("e", a.status);
      G.status_applications[a.status]=(G.status_applications[a.status]||0)+1;
    }
    if (a.secondaryStatus && Math.random() < (a.secondaryChance || .3)) {
      if (typeof applyFx==="function") applyFx("e", a.secondaryStatus);
      G.status_applications[a.secondaryStatus]=(G.status_applications[a.secondaryStatus]||0)+1;
    }
  }
  function applyBuffs(a){
    var buffs = a.buff ? (Array.isArray(a.buff) ? a.buff : [a.buff]) : [];
    buffs.forEach(function(x){ if(typeof applyBuff==="function") applyBuff("p", x); });
    if (a.cleanse && typeof cleanseNegativeFx==="function") cleanseNegativeFx("p");
    if (a.staminaRestorePct) regenStamina(a.staminaRestorePct);
  }
  function dealDamage(a, idx){
    B.enemy_idx = idx;
    var hits = a.hits || 1, total=0;
    for (var i=0;i<hits;i++) {
      var dmg = Math.floor((weaponScalingPower(a)/hits) * (.88+Math.random()*.24) * (typeof vulnMult==="function"?vulnMult("e"):1) * (typeof atkMult==="function"?atkMult("p"):1));
      if (a.tags && a.tags.indexOf("True Damage")>=0) dmg = Math.floor(dmg*1.15);
      B.enemy_hp = Math.max(0, B.enemy_hp - dmg);
      total += dmg;
    }
    if (typeof wakeOnHit==="function") wakeOnHit("e");
    return total;
  }
  function finishTurn(a){
    applyBuffs(a);
    unlockAvailableAbilities(true);
    if (typeof updateStats==="function") updateStats();
    if (typeof updateBattlePanel==="function") updateBattlePanel();
    if (typeof checkWin==="function" && checkWin()) return;
    if (typeof enemyTurn==="function") enemyTurn();
  }
  function executeAbilityV26(a){
    var reason = disabledReason(a);
    if (reason){ safePrint(reason,"danger"); setTimeout(showBattleMenu,800); return; }
    if (typeof disableAll==="function") disableAll();
    if (B && !B.stats) B.stats = {dealt:0,taken:0,skills:0,crits:0,statuses:0};
    if (B && B.stats) B.stats.skills++;
    pay(a);
    if (a.effect === "heal") {
      B.usedHeal = true; B.streak = 0;
      var hp = Math.floor((G.max_hp||0)*(a.healPct||.2));
      G.hp = Math.min(G.max_hp, (G.hp||0)+hp);
      safePrint(G.name + " casts " + a.name + "! Recovered " + hp + " HP.", "success");
      finishTurn(a); return;
    }
    if (a.effect === "buff" || a.effect === "multiBuff" || a.effect === "passive") {
      safePrint(G.name + " uses " + a.name + "!", a.kind==="spell"?"b-player":"success");
      finishTurn(a); return;
    }
    if (a.aoe) {
      safePrint(G.name + " uses " + a.name + " — ★ ALL ENEMIES", a.kind==="spell"?"b-player":"success");
      B.enemies.forEach(function(en,i){
        if (B.enemy_hps[i] <= 0) return;
        var dmg = dealDamage(a,i);
        safePrint("  " + en.name + ": " + dmg + " damage!", "b-player");
        applyStatus(a);
      });
      var living = B.enemy_hps.findIndex(function(h){return h>0;});
      B.enemy_idx = living>=0 ? living : 0;
      finishTurn(a); return;
    }
    selectTarget(function(idx){
      if (typeof disableAll==="function") disableAll();
      var dmg = dealDamage(a,idx);
      safePrint(G.name + " uses " + a.name + (B.enemies.length>1?" [vs "+B.enemy.name+"]":"") + " [" + dmg + " damage]", a.kind==="spell"?"b-player":"success");
      applyStatus(a);
      finishTurn(a);
    });
  }
  window.defendRecoverV26 = function(){
    if (!B) return;
    if (typeof disableAll==="function") disableAll();
    if (typeof applyBuff==="function") applyBuff("p","guard");
    regenStamina(.25);
    safePrint(G.name + " defends and recovers stamina.", "success");
    if (typeof updateStats==="function") updateStats();
    if (typeof updateBattlePanel==="function") updateBattlePanel();
    if (typeof enemyTurn==="function") enemyTurn();
  };

  // Cooldowns tick at player turn start (wrap only if available)
  if (typeof playerTurnStart === "function" && !playerTurnStart._v26Wrapped) {
    var oldPTS = playerTurnStart;
    playerTurnStart = async function(){
      ensureV26State();
      if (B) {
        if (!B.ability_cooldowns) B.ability_cooldowns = {};
        Object.keys(B.ability_cooldowns).forEach(function(id){
          B.ability_cooldowns[id]=Math.max(0,(B.ability_cooldowns[id]||0)-1);
          if (B.ability_cooldowns[id]<=0) delete B.ability_cooldowns[id];
        });
        regenStamina(0);
      }
      return await oldPTS.apply(this, arguments);
    };
    playerTurnStart._v26Wrapped = true;
  }

  // ── Shops: Physical Skill Shop + Magic Spell Shop ───────────
  function shopButton(label, fn, disabled){
    var b=document.createElement("button"); b.style.whiteSpace="pre-wrap"; b.textContent=label; b.onclick=fn; b.disabled=!!disabled; $ch.appendChild(b);
  }
  shops = function(){
    clearOutput(); showBattlePanel(false);
    print("The Market District", "highlight");
    print("The old Skill Library has been split into two focused stores: Physical Skill Shop and Magic Spell Shop.", "narrator");
    print("Gold: " + G.gold, "info");
    showChoices([
      ["⚔ Blacksmith — weapons", blacksmith_selector],
      ["🛡 Equipment Shop — armor, accessories, gear", equipment_shop],
      ["💪 Physical Skill Shop — stamina skills by weapon type", physical_skill_shop],
      ["🔮 Magic Spell Shop — mana spells by school", magic_spell_shop],
      ["⚗ Alchemy Shop — potions and consumables", alchemy_selector],
      ["← Leave", town_center]
    ]);
  };
  var WEAPON_CATS = ["Universal","Sword","Axe","Spear","Dagger","Bow","Shield","Unarmed","Heavy"];
  var MAGIC_CATS = ["Fire","Ice","Lightning","Healing","Barrier","Dark","Holy","Arcane"];
  function canSell(a){ return a.rank==="Common" || a.rank==="Extra"; }
  function abilityPrice(a){ return a.rank==="Common" ? 120+(10-a.tier)*30 : 700+(10-a.tier)*140; }
  window.physical_skill_shop = function(){
    ensureV26State(); clearOutput(); showBattlePanel(false);
    print("PHYSICAL SKILL SHOP", "highlight");
    print("Stamina-based skills are separated by required weapon type. Equip the correct weapon to use weapon arts in battle.", "narrator");
    print("Gold: " + G.gold + " · Equipped weapon types: " + detectWeaponTypes().join(", "), "info");
    $ch.innerHTML="";
    WEAPON_CATS.forEach(function(cat){
      var list = A.filter(function(a){ return a.kind==="skill" && canSell(a) && a.weapon && (a.weapon.indexOf(cat)>=0 || (cat==="Universal" && a.weapon.indexOf("Universal")>=0)); });
      if (!list.length) return;
      shopButton("⚔ " + cat + " Skills (" + list.filter(function(a){return known(a.id);}).length + "/" + list.length + " known)", function(){ physical_skill_shop_category(cat); });
    });
    shopButton("← Shops", shops);
  };
  window.physical_skill_shop_category = function(cat){
    clearOutput(); print(cat.toUpperCase() + " PHYSICAL SKILLS", "highlight"); print("Gold: " + G.gold, "info"); $ch.innerHTML="";
    A.filter(function(a){ return a.kind==="skill" && canSell(a) && a.weapon && (a.weapon.indexOf(cat)>=0 || (cat==="Universal" && a.weapon.indexOf("Universal")>=0)); }).sort(function(a,b){return a.tier-b.tier;}).forEach(function(a){
      var price=abilityPrice(a), owned=known(a.id), blocked=!roleAllowed(a);
      shopButton((owned?"[KNOWN] ":blocked?"[JOB LOCKED] ":"[BUY] ") + a.name + " — " + price + "g\n" +
        a.rank + " Skill · Tier " + a.tier + " · " + costLabel(a) + " · CD " + a.cooldown + "\n" +
        "Requires Weapon: " + weaponReqText(a) + " · Job: " + (a.roles||[]).map(titleCase).join(" / ") + "\n" +
        "Tags: " + a.tags.join(", ") + "\n" + a.description,
        function(){ G.gold-=price; G.learned_abilities.push(a.id); updateStats(); if(typeof autoSave==="function") autoSave("skill_buy"); physical_skill_shop_category(cat); },
        owned || blocked || G.gold<price);
    });
    shopButton("← Physical Skill Shop", physical_skill_shop);
  };
  window.magic_spell_shop = function(){
    ensureV26State(); clearOutput(); showBattlePanel(false);
    print("MAGIC SPELL SHOP", "highlight");
    print("Mana-based spells are separated by magic school. Spell access depends on your job role.", "narrator");
    print("Gold: " + G.gold, "info");
    $ch.innerHTML="";
    MAGIC_CATS.forEach(function(cat){
      var list = A.filter(function(a){ return a.kind==="spell" && canSell(a) && ((a.school||"Arcane")===cat); });
      if (!list.length) return;
      shopButton("🔮 " + cat + " Spells (" + list.filter(function(a){return known(a.id);}).length + "/" + list.length + " known)", function(){ magic_spell_shop_category(cat); });
    });
    shopButton("← Shops", shops);
  };
  window.magic_spell_shop_category = function(cat){
    clearOutput(); print(cat.toUpperCase() + " MAGIC SPELLS", "highlight"); print("Gold: " + G.gold, "info"); $ch.innerHTML="";
    A.filter(function(a){ return a.kind==="spell" && canSell(a) && ((a.school||"Arcane")===cat); }).sort(function(a,b){return a.tier-b.tier;}).forEach(function(a){
      var price=abilityPrice(a), owned=known(a.id), blocked=!roleAllowed(a);
      shopButton((owned?"[KNOWN] ":blocked?"[JOB LOCKED] ":"[BUY] ") + a.name + " — " + price + "g\n" +
        a.rank + " Spell · Tier " + a.tier + " · " + costLabel(a) + " · CD " + a.cooldown + "\n" +
        "School: " + (a.school||"Arcane") + " · Job: " + (a.roles||[]).map(titleCase).join(" / ") + "\n" +
        "Tags: " + a.tags.join(", ") + "\n" + a.description,
        function(){ G.gold-=price; G.learned_abilities.push(a.id); updateStats(); if(typeof autoSave==="function") autoSave("spell_buy"); magic_spell_shop_category(cat); },
        owned || blocked || G.gold<price);
    });
    shopButton("← Magic Spell Shop", magic_spell_shop);
  };
  spell_shop_selector = function(){ clearOutput(); print("SKILL LIBRARY REPLACED", "highlight"); print("The old Skill Library has been split into separate shops.", "narrator"); showChoices([["💪 Physical Skill Shop", physical_skill_shop], ["🔮 Magic Spell Shop", magic_spell_shop], ["← Shops", shops]]); };

  // ── Ability Screen Layout ────────────────────────────────────
  function reqSummary(a){
    var parts = [];
    if (a.kind==="skill") parts.push("Weapon: " + weaponReqText(a));
    if (a.roles && a.roles.indexOf("all")<0) parts.push("Job: " + a.roles.map(titleCase).join(" / "));
    (a.requirements||[]).forEach(function(r){ parts.push(reqText(r)); });
    return parts.length ? parts.join(" · ") : "None";
  }
  function abilityCard(a, locked){
    return '<div class="v26-ability' + (locked?' locked':'') + '">' +
      '<div class="v26-ability-name">' + esc(a.name) + '</div>' +
      '<div class="v26-ability-kind">' + (a.kind==="spell"?"Magic Spell":"Physical Skill") + ' · ' + esc(a.rank) + ' · Tier ' + esc(a.tier) + '</div>' +
      '<div class="v26-ability-grid">' +
        '<div class="v26-ability-field"><b>Cost</b><br>' + esc(costLabel(a)) + '</div>' +
        '<div class="v26-ability-field"><b>Cooldown</b><br>' + esc(a.cooldown||0) + ' turn' + ((a.cooldown||0)===1?'':'s') + '</div>' +
        '<div class="v26-ability-field"><b>Scaling</b><br>' + esc(a.scaling || (a.kind==="spell"?"Magic Stats":"Weapon Stats")) + '</div>' +
        '<div class="v26-ability-field"><b>Requirement</b><br>' + esc(locked ? lockedReason(a) || reqSummary(a) : reqSummary(a)) + '</div>' +
      '</div>' +
      '<div>' + (a.tags||[]).map(function(t){return '<span class="v26-chip ' + (a.kind==="spell"?'spell':'skill') + '">' + esc(t) + '</span>';}).join("") + '</div>' +
      '<div class="v26-ability-desc"><b>Effect:</b> ' + esc(effectText(a)) + '</div>' +
      '<div class="v26-ability-desc">' + esc(a.description) + '</div>' +
    '</div>';
  }
  function effectText(a){
    var out = [];
    if (a.effect==="damage") out.push((a.aoe?"AoE ":"") + "damage, Power " + (a.power||0));
    if (a.effect==="heal") out.push("Heal " + Math.round((a.healPct||0)*100) + "% HP");
    if (a.buff) out.push("Buff: " + (Array.isArray(a.buff)?a.buff.join(", "):a.buff));
    if (a.status) out.push("Status: " + a.status + " " + Math.round((a.statusChance||0)*100) + "%");
    if (a.secondaryStatus) out.push("Secondary: " + a.secondaryStatus);
    if (a.staminaRestorePct) out.push("Restore " + Math.round(a.staminaRestorePct*100) + "% Stamina");
    if (a.cleanse) out.push("Cleanse negative statuses");
    return out.length ? out.join(" · ") : "Passive / utility effect";
  }
  skill_screen = function(){
    ensureV26State(); unlockAvailableAbilities(true);
    clearOutput(); showBattlePanel(false);
    print("SKILL & SPELL SCREEN — v0.26", "highlight");
    print("Physical Skills use Stamina. Magic Spells use Mana. Tier 1 is strongest; Tier 10 is beginner level.", "narrator");
    print("Stamina: " + Math.floor(G.stamina||0) + "/" + Math.floor(G.max_stamina||0) + " · Mana: " + Math.floor(G.mp||0) + "/" + Math.floor(G.max_mp||0), "info");
    $ch.innerHTML="";
    var knownList = G.learned_abilities.map(getAbility).filter(Boolean);
    function section(title, note, list, locked){
      var d=document.createElement("div"); d.className="v26-card";
      d.innerHTML = '<div class="v26-title">' + esc(title) + '</div><div class="v26-sub">' + esc(note) + '</div>' + (list.length?list.map(function(a){return abilityCard(a,locked);}).join(""):'<div class="v26-sub">None yet.</div>');
      $ch.appendChild(d);
    }
    section("Physical Skills", "Stamina-based weapon arts, martial arts, stances, counters, guard moves, and mobility.", knownList.filter(function(a){return a.kind==="skill" && a.resource!=="passive";}).sort(function(a,b){return a.tier-b.tier;}), false);
    section("Magic Spells", "Mana-based elemental magic, healing, barriers, curses, summons, buffs, and debuffs.", knownList.filter(function(a){return a.kind==="spell" && a.resource!=="passive";}).sort(function(a,b){return a.tier-b.tier;}), false);
    section("Passive / Intrinsic Abilities", "Always-on racial traits, passive awakenings, and intrinsic powers.", knownList.filter(function(a){return a.resource==="passive" || a.effect==="passive";}).sort(function(a,b){return a.tier-b.tier;}), false);
    section("Locked / Requirement Abilities", "Unique and Ultimate abilities unlock through stats, jobs, weapons, mastery, achievements, bosses, and research.", A.filter(function(a){return !known(a.id);}).sort(function(a,b){return a.tier-b.tier;}), true);
    showChoices([["💪 Physical Skill Shop", physical_skill_shop], ["🔮 Magic Spell Shop", magic_spell_shop], ["← Character Status", character_screen], ["← Town Center", town_center]]);
  };

  // ── Equipment Screen Enhancements ────────────────────────────
  equipment_screen = function(){
    ensureV26State(); applyStats(); updateStats(); clearOutput(); showBattlePanel(false);
    print("EQUIPMENT SCREEN", "highlight");
    print("Weapon slots are active and affect Physical Skill requirements and weapon scaling.", "narrator");
    print("Equipped weapon types: " + detectWeaponTypes().join(", "), "info");
    $ch.innerHTML="";
    function render(label, slot, idx){
      var id = slot==="accessory" ? (G.equipment && G.equipment.accessories ? G.equipment.accessories[idx] : null) : (G.equipment ? G.equipment[slot] : null);
      var it = id && typeof getEquip==="function" ? getEquip(id) : null;
      var d=document.createElement("div"); d.className="v26-card";
      d.innerHTML = '<div class="v26-title">' + esc(label) + '</div><div class="v26-sub">' + esc(it?it.name:"Empty") + '</div><div class="v26-sub">' + esc(it?it.desc:"No item equipped.") + '</div>' + (it?'<span class="v26-chip">Slot: '+esc(it.slot||slot)+'</span><span class="v26-chip">Weapon Type: '+esc(inferWeaponTypeFromText((it.name||"")+" "+(it.desc||"")))+'</span><span class="v26-chip">Scaling: '+esc(weaponScalingLabel(inferWeaponTypeFromText((it.name||"")+" "+(it.desc||""))))+'</span>':"");
      $ch.appendChild(d);
    }
    render("HEAD","head"); render("CHEST","chest"); render("ARMS","arms"); render("LEGS","legs");
    render("WEAPON 1 — ONE-HANDED / MAIN HAND","weapon1");
    render("WEAPON 2 — TWO-HANDED / OFF HAND / STAFF","weapon2");
    for (var i=0;i<(typeof ACCESSORY_SLOTS==="number"?ACCESSORY_SLOTS:5);i++) render("ACCESSORY " + (i+1), "accessory", i);
    var stats=document.createElement("div"); stats.className="v26-card";
    stats.innerHTML='<div class="v26-title">Weapon Stat Scaling</div><div class="v26-sub">Sword: Physical Attack + Agility · Axe/Hammer: Physical Attack + Defense · Spear: Physical Attack + Agility · Dagger: Agility + Crit pressure · Bow: Agility + Physical Attack · Staff: Magic Attack + Special · Shield: Physical Defense + HP · Unarmed: Physical Attack + Agility.</div>';
    $ch.appendChild(stats);
    showChoices([["⚙ Change Equipped Items", equipment_change_screen], ["🛒 Shops / Equipment Shop", shops], ["← Character Status", character_screen]]);
  };
  function inferWeaponTypeFromText(t){
    t=String(t||"").toLowerCase();
    if(/katana/.test(t)) return "Katana";
    if(/sword|blade|saber|rapier/.test(t)) return "Sword";
    if(/axe/.test(t)) return "Axe";
    if(/hammer|mace|maul/.test(t)) return "Hammer";
    if(/spear|lance|halberd|glaive|polearm/.test(t)) return "Spear";
    if(/dagger|knife/.test(t)) return "Dagger";
    if(/bow|crossbow/.test(t)) return "Bow";
    if(/staff|wand|rod/.test(t)) return "Staff";
    if(/shield|buckler/.test(t)) return "Shield";
    if(/fist|glove|gauntlet|knuckle/.test(t)) return "Unarmed";
    return "Universal";
  }
  function weaponScalingLabel(t){
    return {
      Sword:"Physical Attack + Agility", Katana:"Physical Attack + Agility + Critical", Axe:"Physical Attack + Physical Defense", Hammer:"Physical Attack + Physical Defense",
      Spear:"Physical Attack + Agility", Dagger:"Agility + Physical Attack", Bow:"Agility + Physical Attack", Staff:"Magic Attack + Special", Shield:"Physical Defense + HP", Unarmed:"Physical Attack + Agility", Universal:"General scaling"
    }[t] || "General scaling";
  }

  // ── Recruits: Stats, Race, Job, Skills, Spells ──────────────
  function computeRecruitStats(r){
    var lv = r.level || r.req || 1;
    var role = String(r.role || r.job || "").toLowerCase();
    var s = {hp:80+lv*12, stamina:45+lv*4, mana:30+lv*3, pa:8+lv, pd:7+Math.floor(lv*.8), ag:7+Math.floor(lv*.8), ma:7+Math.floor(lv*.8), md:7+Math.floor(lv*.7), rs:7+Math.floor(lv*.7), sp:6+Math.floor(lv*.6)};
    if(/shield|tank|guardian|knight|bearer/.test(role)){s.hp+=30;s.pd+=8;s.stamina+=20;}
    if(/mage|witch|summoner|cleric|priest|healer|oracle|miko/.test(role)){s.mana+=35;s.ma+=9;s.md+=5;}
    if(/rogue|thief|assassin|scout|ranger|archer/.test(role)){s.ag+=9;s.pa+=5;s.stamina+=12;}
    if(/cook|bard|support|strategist|dancer|buffer/.test(role)){s.sp+=8;s.rs+=4;s.mana+=14;}
    return s;
  }
  function recruitAbilities(r){
    var role = String(r.role || r.job || "").toLowerCase();
    var skills=[], spells=[];
    if(/shield|tank|guardian|knight|bearer/.test(role)) skills.push("Guard Stance","Shield Bash");
    if(/rogue|thief|assassin|scout/.test(role)) skills.push("Hunter Step","Twin Fang Rush");
    if(/archer|ranger|hunter|sniper/.test(role)) skills.push("Arrow Pin","Hunter Step");
    if(/warrior|fighter|sword|samurai|berserker/.test(role)) skills.push("Power Strike","Bleeding Crescent");
    if(/cook|bard|support|strategist/.test(role)) skills.push("War Cry");
    if(/mage|wizard|witch|sorcerer/.test(role)) spells.push("Fire Bolt","Ice Needle","Spark");
    if(/healer|cleric|priest|saint|oracle|miko|cook/.test(role)) spells.push("Minor Heal","Regeneration");
    if(/dark|warlock|curse|necromancer|reaper/.test(role)) spells.push("Shadow Mark","Abyssal Chain");
    if(/summoner|tamer/.test(role)) spells.push("Mana Shield","Shadow Mark");
    if(!skills.length) skills.push("Quick Slash");
    if(!spells.length && /magic|spell|mage|holy|dark|support|summon/.test(role)) spells.push("Mana Shield");
    return {skills:skills, spells:spells};
  }
  function initRecruitStats(){
    if (typeof RECRUIT_DATA === "undefined" || !Array.isArray(RECRUIT_DATA)) return;
    RECRUIT_DATA.forEach(function(r){
      if (!G.recruit_stats[r.id]) G.recruit_stats[r.id]=computeRecruitStats(r);
      if (!G.recruit_skillbooks[r.id]) G.recruit_skillbooks[r.id]=recruitAbilities(r);
      r.stats = G.recruit_stats[r.id];
      r.skills = G.recruit_skillbooks[r.id].skills;
      r.spells = G.recruit_skillbooks[r.id].spells;
    });
  }
  function recruitFullText(r){
    var s = G.recruit_stats[r.id] || computeRecruitStats(r);
    var ab = G.recruit_skillbooks[r.id] || recruitAbilities(r);
    return "Level: " + (r.level||r.req||1) + " · Race: " + (r.race||"Unknown") + " · Job: " + (r.job||r.role||"Adventurer") + "\n" +
      "Stats: HP " + s.hp + " · STA " + s.stamina + " · MP " + s.mana + " · PA " + s.pa + " · PD " + s.pd + " · AGI " + s.ag + " · MA " + s.ma + " · MD " + s.md + " · RES " + s.rs + " · SP " + s.sp + "\n" +
      "Skills: " + ab.skills.join(", ") + "\nSpells: " + (ab.spells.length?ab.spells.join(", "):"None");
  }
  if (baseFns.recruitment_hall) {
    recruitment_hall = function(){
      ensureV26State();
      var ret = baseFns.recruitment_hall.apply(this, arguments);
      try {
        var d=document.createElement("div"); d.className="v26-card";
        d.innerHTML='<div class="v26-title">Recruit Update</div><div class="v26-sub">Every recruit now has full stats, race, job, Physical Skills, and Magic Spells. Their battle assist system still works normally.</div>';
        $ch.insertBefore(d,$ch.firstChild);
      } catch(e){}
      return ret;
    };
  }
  if (baseFns.recruit_category) {
    recruit_category = function(cat){
      ensureV26State();
      var ret = baseFns.recruit_category.apply(this, arguments);
      try {
        Array.prototype.slice.call($ch.querySelectorAll("button")).forEach(function(btn){
          var text=btn.textContent||"";
          var r=(RECRUIT_DATA||[]).find(function(x){return text.indexOf(x.name)>=0;});
          if(r && text.indexOf("Stats: HP")<0) btn.textContent += "\n" + recruitFullText(r);
        });
      } catch(e){}
      return ret;
    };
  }

  // ── Achievements / Enemy Codex moved to Character Status ─────
  var ACHIEVEMENT_LIST = [
    ["kill_5","First Blood Trail","Defeat 5 enemies.","Slayer"],
    ["kill_10","Monster Breaker","Defeat 10 enemies.","Slayer"],
    ["kill_25","Grave March","Defeat 25 enemies.","Veteran"],
    ["kill_50","Battlefield Name","Defeat 50 enemies.","Veteran"],
    ["kill_100","Century Reaper","Defeat 100 enemies.","Legend"],
    ["level_10","Awakened Adventurer","Reach Total Level 10.","Iron"],
    ["level_25","Seasoned Delver","Reach Total Level 25.","Veteran"],
    ["level_50","Mythic Challenger","Reach Total Level 50.","Mythic"],
    ["level_100","World-Crowned Legend","Reach Total Level 100.","Legend"],
    ["first_bond","First Bond","Unlock your first recruit bond.","Bonded"],
    ["first_mastery","First Mastery","Master your first job.","Master"],
    ["first_secret_clear","Hidden Path Cleared","Clear your first secret zone.","Seeker"],
    ["first_recruit_ko","Companion's Fall","See a recruit's first KO story moment.","Iron"],
    ["first_streak","Momentum Hunter","Earn a kill streak gold bonus.","Swift"],
    ["first_secret_discovery","Secret Zone Discovered","Reveal your first secret zone.","Seeker"],
    ["no_heal_win","No-Heal Victory","Win a battle without using healing.","Iron"],
    ["ambush_survivor","Ambush Survivor","Win a 3-enemy ambush battle.","Survivor"],
    ["codex_20","Field Researcher","Discover 20 enemy codex entries.","Scholar"]
  ];
  achievements_screen = function(){
    ensureV26State(); clearOutput(); showBattlePanel(false);
    var flags=(G.achievements&&G.achievements.flags)||[];
    print("ACHIEVEMENTS", "highlight");
    print("All achievements are listed below. Locked achievements show their requirement.", "narrator");
    $ch.innerHTML="";
    ACHIEVEMENT_LIST.forEach(function(a){
      var earned=flags.indexOf(a[0])>=0;
      var d=document.createElement("div"); d.className="v26-card" + (earned?"":" locked");
      d.style.opacity = earned ? "1" : ".55";
      d.innerHTML='<div class="v26-title">' + (earned?"🏆 ":"🔒 ") + esc(a[1]) + '</div><div class="v26-sub">Status: ' + (earned?"Unlocked":"Locked") + '</div><div class="v26-sub">Requirement: ' + esc(a[2]) + '</div><span class="v26-chip">Title: ' + esc(a[3]) + '</span>';
      $ch.appendChild(d);
    });
    showChoices([["← Character Status", character_screen], ["← Town Center", town_center]]);
  };
  codex_screen = function(){
    ensureV26State(); clearOutput(); showBattlePanel(false);
    print("ENEMY CODEX", "highlight");
    print("Enemies you have encountered are listed with stats, race, job/type, moves, and lore.", "narrator");
    var entries=Object.values(G.enemy_encounters||{}).sort(function(a,b){return a.name.localeCompare(b.name);});
    print("Encountered: " + entries.length, "info");
    $ch.innerHTML="";
    if(!entries.length){ var p=document.createElement("p"); p.className="narrator"; p.textContent="No enemies encountered yet."; $ch.appendChild(p); }
    entries.forEach(function(e){
      var d=document.createElement("div"); d.className="v26-card";
      d.innerHTML='<div class="v26-title">' + esc(e.emoji||"👹") + " " + esc(e.name) + '</div>' +
        '<div class="v26-sub">Race: ' + esc(e.race||"Unknown") + ' · Job/Type: ' + esc(e.job||"Monster") + ' · Seen: ' + esc(e.seen||1) + '</div>' +
        '<span class="v26-chip">HP ' + esc(e.hp) + '</span><span class="v26-chip">ATK ' + esc(e.atk) + '</span>' +
        '<div class="v26-sub">Moves: ' + esc((e.moves||[]).join(", ") || "Unknown") + '</div>' +
        '<div class="v26-sub">' + esc(e.lore||"No lore recorded.") + '</div>';
      $ch.appendChild(d);
    });
    showChoices([["← Character Status", character_screen], ["← Town Center", town_center]]);
  };

  if (baseFns.character_screen) {
    character_screen = function(){
      ensureV26State(); renameRaceAndJobPaths();
      var ret = baseFns.character_screen.apply(this, arguments);
      try {
        var nav=document.createElement("div"); nav.className="v26-card";
        nav.innerHTML='<div class="v26-title">Character Records</div><div class="v26-sub">Achievements and Enemy Codex now live in Character Status.</div>';
        var ach=document.createElement("button"); ach.textContent="🏆 Achievements"; ach.onclick=achievements_screen; nav.appendChild(ach);
        var cod=document.createElement("button"); cod.textContent="📗 Enemy Codex"; cod.onclick=codex_screen; nav.appendChild(cod);
        $ch.appendChild(nav);
        appendV26StatStepper();
      } catch(e){}
      return ret;
    };
  }
  function appendV26StatStepper(){
    if (!$ch || !G.stat_pts || G.stat_pts<=0) return;
    var stats=[["phy_atk","PHY.ATK",250],["phy_def","PHY.DEF",220],["agi","AGI",220],["mag_atk","MAG.ATK",250],["mag_def","MAG.DEF",220],["resist","RESIST",180],["special","SPECIAL",180]];
    var d=document.createElement("div"); d.className="v26-card";
    d.innerHTML='<div class="v26-title">Stat Step Scale + Spend Box</div><div class="v26-sub">Spend stat points with the arrow buttons beside each overall stat number.</div>';
    stats.forEach(function(s){
      var row=document.createElement("div"); row.className="v26-stat-row";
      var val=G[s[0]]||0, pct=Math.min(100,Math.round(val/s[2]*100));
      row.innerHTML='<div class="v26-sub"><b>'+s[1]+'</b>: '+val+'</div><div class="v26-scale"><span style="width:'+pct+'%"></span></div><div class="v26-stepper"></div>';
      var box=row.querySelector(".v26-stepper");
      [1,5,10].forEach(function(n){
        var b=document.createElement("button"); b.textContent="+"+n+" →"; b.disabled=G.stat_pts<n; b.onclick=function(){ G.bonus[statToBonusKey(s[0])]+=n; G.stat_pts-=n; applyStats(); updateStats(); character_screen(); }; box.appendChild(b);
      });
      d.appendChild(row);
    });
    $ch.appendChild(d);
  }
  function statToBonusKey(prop){ return {phy_atk:"pa",phy_def:"pd",agi:"ag",mag_atk:"ma",mag_def:"md",resist:"rs",special:"sp"}[prop] || "sp"; }

  if (baseFns.town_center) {
    town_center = function(){
      var ret = baseFns.town_center.apply(this, arguments);
      try {
        Array.prototype.slice.call($ch.querySelectorAll("button")).forEach(function(b){
          if (/Achievements|Enemy Codex/i.test(b.textContent||"")) b.remove();
        });
      } catch(e){}
      return ret;
    };
  }

  // ── Update Screen Entry ──────────────────────────────────────
  if (baseFns.updates_screen) {
    updates_screen = function(){
      var ret = baseFns.updates_screen.apply(this, arguments);
      try {
        var card=document.createElement("div"); card.className="update-card";
        card.innerHTML='<div class="update-card-title">v0.26 — Skill, Spell, Equipment, Recruit, and Codex Update</div><div class="update-card-date">Current Game Update</div><ul><li>Fixed Try Again so it starts a fresh encounter instead of reusing a completed battle state.</li><li>Added Race to the top header and kept Stamina visible.</li><li>Split the old Skill Library into Physical Skill Shop and Magic Spell Shop.</li><li>Physical skills are separated by weapon type and check required equipped weapons.</li><li>Magic spells are separated by magic school.</li><li>Added weapon stat scaling and clearer equipment weapon slots.</li><li>Restricted skills and spells by job role.</li><li>Added full recruit stats, race, job, skills, and spells.</li><li>Moved Achievements and Enemy Codex into Character Status.</li><li>Redesigned skill/spell text cards for readability.</li><li>Renamed race evolutions and job upgrades into unique base-name paths.</li></ul>';
        if($ch && $ch.firstChild) $ch.insertBefore(card,$ch.firstChild); else if($ch) $ch.appendChild(card);
      } catch(e){}
      return ret;
    };
  }

  // ── Save/Load Safety ─────────────────────────────────────────
  if (baseFns.loadGame) {
    loadGame = function(){
      var ret = baseFns.loadGame.apply(this, arguments);
      setTimeout(function(){ ensureV26State(); renameRaceAndJobPaths(); applyStats(); updateStats(); },0);
      return ret;
    };
  }
  if (baseFns.loadSlotV25) {
    loadSlotV25 = function(){
      var ret = baseFns.loadSlotV25.apply(this, arguments);
      ensureV26State(); renameRaceAndJobPaths(); applyStats(); updateStats();
      return ret;
    };
  }
  if (baseFns.saveGame) {
    saveGame = function(){
      ensureV26State();
      return baseFns.saveGame.apply(this, arguments);
    };
  }

  // Startup
  addStyle();
  ensureHeaderRace();
  ensureV26State();
  renameRaceAndJobPaths();
  if (typeof applyStats==="function") applyStats();
  if (typeof updateStats==="function") updateStats();
})();
