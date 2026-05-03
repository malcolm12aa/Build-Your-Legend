// ═══════════════════════════════════════════════════════════════
// v0.25 — Skill & Spell System Redo
// Split abilities into stamina-based Physical Skills and mana-based
// Magic Spells. Adds ranks, reverse tiers, tags, cooldowns,
// stamina bar, requirements, safe old-save defaults, and battle menus.
// ═══════════════════════════════════════════════════════════════
(function installSkillSpellSystemRedoV25(){
  "use strict";

  var VERSION = "v0.25-skill-spell-system-redo";
  var orig = {
    applyStats: typeof applyStats === "function" ? applyStats : null,
    updateStats: typeof updateStats === "function" ? updateStats : null,
    updateBattlePanel: typeof updateBattlePanel === "function" ? updateBattlePanel : null,
    showBattleMenu: typeof showBattleMenu === "function" ? showBattleMenu : null,
    playerTurnStart: typeof playerTurnStart === "function" ? playerTurnStart : null,
    startBattle: typeof startBattle === "function" ? startBattle : null,
    skill_screen: typeof skill_screen === "function" ? skill_screen : null,
    spell_shop_selector: typeof spell_shop_selector === "function" ? spell_shop_selector : null,
    spell_shop: typeof spell_shop === "function" ? spell_shop : null,
    loadGame: typeof loadGame === "function" ? loadGame : null,
    loadSlotV25: typeof loadSlotV25 === "function" ? loadSlotV25 : null,
    saveGame: typeof saveGame === "function" ? saveGame : null,
    inn: typeof inn === "function" ? inn : null,
    updates_screen: typeof updates_screen === "function" ? updates_screen : null,
    help_screen: typeof help_screen === "function" ? help_screen : null,
    print: typeof print === "function" ? print : null,
    applyFx: typeof applyFx === "function" ? applyFx : null
  };

  function addStyle(){
    if (document.getElementById("v25-skill-spell-style")) return;
    var style = document.createElement("style");
    style.id = "v25-skill-spell-style";
    style.textContent = `
      .bar-stam-p{ background:linear-gradient(90deg,#7a4600,#ffd166); box-shadow:0 0 8px rgba(255,209,102,.45); }
      .bar-stam-p.low-stamina{ background:linear-gradient(90deg,#7a2400,#ff9f1c); animation:hp-pulse 1s ease-in-out infinite; }
      .ability-split-note{ color:#8aaac8;font-size:11px;line-height:1.5;margin:4px 0 8px; }
      .ability-card-v25{ border:1px solid #1c3354;background:linear-gradient(180deg,#07101d,#050810);padding:10px 12px;margin:7px 0;line-height:1.5; }
      .ability-card-v25.locked{ opacity:.48; filter:grayscale(.35); }
      .ability-name-v25{ color:#e8c84a;font-weight:800;font-size:13px;letter-spacing:.5px; }
      .ability-meta-v25{ color:#48cae4;font-size:11px;margin-top:2px; }
      .ability-desc-v25{ color:#9fb9d8;font-size:11px;margin-top:4px; }
      .ability-tag-v25{ display:inline-block;color:#e8c84a;border:1px solid rgba(232,200,74,.28);background:rgba(232,200,74,.06);padding:1px 6px;margin:2px 3px 0 0;font-size:10px;letter-spacing:.4px; }
      .ability-tag-v25.skill{ color:#ffd166;border-color:rgba(255,209,102,.35);background:rgba(255,209,102,.07); }
      .ability-tag-v25.spell{ color:#a78bfa;border-color:rgba(167,139,250,.35);background:rgba(167,139,250,.07); }
      .ability-section-v25{ border:1px solid #1c3354;background:#060c18;padding:9px 12px;margin:8px 0; }
      .ability-section-title-v25{ color:#e8c84a;font-size:10px;letter-spacing:1.8px;text-transform:uppercase;font-weight:800;margin-bottom:6px; }
      .ability-shop-grid-v25{ display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:8px 0; }
      @media(max-width:620px){ .ability-shop-grid-v25{ grid-template-columns:1fr; } }
    `;
    document.head.appendChild(style);
  }

  function esc(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
  function safePrint(text, cls){ try { if (typeof print === "function") print(text, cls || "narrator"); } catch(e){} }
  function clamp(n,min,max){ return Math.max(min, Math.min(max, n)); }
  function titleCase(s){ return String(s||"").replace(/_/g," ").replace(/\b\w/g,function(c){return c.toUpperCase();}); }
  function hasFlag(f){ return !!(G.achievements && Array.isArray(G.achievements.flags) && G.achievements.flags.indexOf(f) >= 0); }
  function addFlag(f){ if (!G.achievements) G.achievements = {flags:[]}; if (!Array.isArray(G.achievements.flags)) G.achievements.flags=[]; if (G.achievements.flags.indexOf(f)<0) G.achievements.flags.push(f); }

  // ── Ability Data ─────────────────────────────────────────────
  var ABILITY_LIBRARY = [
    // Common Physical Skills
    {id:"sk_quick_slash",name:"Quick Slash",kind:"skill",rank:"Common",tier:10,resource:"stamina",cost:7,cooldown:1,tags:["Physical","Melee","Damage","Weapon Art","Active"],description:"A fast, reliable weapon cut meant for conserving stamina while keeping pressure on one enemy.",effect:"damage",power:36,scaling:"physical",source:"Starter Skill / Skill Library"},
    {id:"sk_guard_stance",name:"Guard Stance",kind:"skill",rank:"Common",tier:10,resource:"stamina",cost:4,cooldown:2,tags:["Physical","Stance","Guard","Defensive","Buff","Active"],description:"Set your stance, reduce incoming damage, and recover extra stamina. A basic survival tool for physical builds.",effect:"buff",buff:"guard",staminaRestorePct:.18,source:"Starter Skill / Skill Library"},
    {id:"sk_power_strike",name:"Power Strike",kind:"skill",rank:"Common",tier:9,resource:"stamina",cost:12,cooldown:2,tags:["Physical","Melee","Damage","Burst","Break","Active"],description:"A committed heavy blow that deals higher physical damage than a basic attack.",effect:"damage",power:58,scaling:"physical",source:"Skill Library"},
    {id:"sk_shield_bash",name:"Shield Bash",kind:"skill",rank:"Common",tier:9,resource:"stamina",cost:10,cooldown:2,tags:["Physical","Melee","Damage","Guard","Stun","Control","Active"],description:"Drive a shield, weapon guard, or armored shoulder into the enemy. Deals damage and may stun.",effect:"damage",power:42,scaling:"defense",status:"stun",statusChance:.28,source:"Skill Library"},
    {id:"sk_hunter_step",name:"Hunter Step",kind:"skill",rank:"Common",tier:8,resource:"stamina",cost:11,cooldown:3,tags:["Physical","Mobility","Haste","Focus","Buff","Active"],description:"A trained evasive step that sharpens positioning, grants Haste, and restores a small burst of stamina.",effect:"buff",buff:"haste",staminaRestorePct:.12,source:"Skill Library"},

    // Common Magic Spells
    {id:"sp_fire_bolt",name:"Fire Bolt",kind:"spell",rank:"Common",tier:10,resource:"mana",cost:8,cooldown:1,tags:["Magic","Fire","Ranged","Damage","Burn","Active"],description:"A beginner fire spell that launches a compact bolt of flame with a small chance to burn.",effect:"damage",power:42,scaling:"magic",status:"burn",statusChance:.25,source:"Starter Spell / Skill Library"},
    {id:"sp_ice_needle",name:"Ice Needle",kind:"spell",rank:"Common",tier:10,resource:"mana",cost:8,cooldown:1,tags:["Magic","Ice","Ranged","Damage","Freeze","Control","Active"],description:"A thin spike of cold mana that deals ice damage and may freeze the target.",effect:"damage",power:38,scaling:"magic",status:"freeze",statusChance:.18,source:"Starter Spell / Skill Library"},
    {id:"sp_spark",name:"Spark",kind:"spell",rank:"Common",tier:10,resource:"mana",cost:7,cooldown:1,tags:["Magic","Lightning","Ranged","Damage","Paralysis","Active"],description:"A small lightning spell that is cheap to cast and can briefly paralyze an enemy.",effect:"damage",power:36,scaling:"magic",status:"paralysis",statusChance:.22,source:"Starter Spell / Skill Library"},
    {id:"sp_minor_heal",name:"Minor Heal",kind:"spell",rank:"Common",tier:9,resource:"mana",cost:12,cooldown:2,tags:["Magic","Holy","Healing","Support","Active"],description:"A low-tier recovery spell that restores a small portion of HP.",effect:"heal",healPct:.22,source:"Skill Library"},
    {id:"sp_mana_shield",name:"Mana Shield",kind:"spell",rank:"Common",tier:8,resource:"mana",cost:14,cooldown:3,tags:["Magic","Arcane","Barrier","Guard","Defensive","Buff","Active"],description:"Compress mana into a barrier around your body, granting Guard for a short time.",effect:"buff",buff:"guard",source:"Skill Library"},

    // Extra Physical Skills
    {id:"sk_twin_fang_rush",name:"Twin Fang Rush",kind:"skill",rank:"Extra",tier:7,resource:"stamina",cost:16,cooldown:2,tags:["Physical","Melee","Damage","Multi-Hit","Combo","Active"],description:"A two-hit rush that rewards aggressive physical builds.",effect:"damage",power:72,hits:2,scaling:"physical",source:"Advanced Skill Library"},
    {id:"sk_iron_counter",name:"Iron Counter",kind:"skill",rank:"Extra",tier:7,resource:"stamina",cost:15,cooldown:3,tags:["Physical","Counter","Guard","Defensive","Buff","Active"],description:"Brace yourself for impact and prepare to punish the next opening. Grants Guard and Focus.",effect:"multiBuff",buff:["guard","focus"],source:"Advanced Skill Library"},
    {id:"sk_bleeding_crescent",name:"Bleeding Crescent",kind:"skill",rank:"Extra",tier:6,resource:"stamina",cost:18,cooldown:3,tags:["Physical","Weapon Art","Melee","Damage","Bleed","Active"],description:"A crescent-shaped slash designed to open bleeding wounds.",effect:"damage",power:86,scaling:"physical",status:"bleed",statusChance:.50,source:"Advanced Skill Library"},
    {id:"sk_armor_breaker",name:"Armor Breaker",kind:"skill",rank:"Extra",tier:6,resource:"stamina",cost:18,cooldown:3,tags:["Physical","Break","Melee","Damage","Vulnerable","Debuff","Active"],description:"A targeted strike against armor, shell, stance, or guard. Applies Vulnerable when it lands cleanly.",effect:"damage",power:78,scaling:"physical",status:"vulnerable",statusChance:.60,source:"Advanced Skill Library"},
    {id:"sk_war_cry",name:"War Cry",kind:"skill",rank:"Extra",tier:6,resource:"stamina",cost:14,cooldown:4,tags:["Physical","Taunt","Bravery","Buff","Support","Active"],description:"A battle shout that hardens your resolve, draws attention, and grants Bravery.",effect:"buff",buff:"bravery",status:"marked",statusChance:.35,source:"Advanced Skill Library"},

    // Extra Magic Spells
    {id:"sp_fireball",name:"Fireball",kind:"spell",rank:"Extra",tier:7,resource:"mana",cost:20,cooldown:3,tags:["Magic","Fire","AoE","Damage","Burn","Burst","Active"],description:"A classic explosive fire spell that hits all enemies and may burn them.",effect:"damage",aoe:true,power:68,scaling:"magic",status:"burn",statusChance:.35,source:"Advanced Spell Library"},
    {id:"sp_frost_prison",name:"Frost Prison",kind:"spell",rank:"Extra",tier:6,resource:"mana",cost:22,cooldown:3,tags:["Magic","Ice","Control","Freeze","Debuff","Active"],description:"Bind the enemy in layered ice, dealing damage and attempting to freeze it.",effect:"damage",power:70,scaling:"magic",status:"freeze",statusChance:.45,source:"Advanced Spell Library"},
    {id:"sp_chain_lightning",name:"Chain Lightning",kind:"spell",rank:"Extra",tier:6,resource:"mana",cost:24,cooldown:3,tags:["Magic","Lightning","AoE","Damage","Paralysis","Multi-Hit","Active"],description:"Lightning jumps between enemies, striking the field with unstable arcs.",effect:"damage",aoe:true,power:60,hits:2,scaling:"magic",status:"paralysis",statusChance:.28,source:"Advanced Spell Library"},
    {id:"sp_regeneration",name:"Regeneration",kind:"spell",rank:"Extra",tier:6,resource:"mana",cost:20,cooldown:4,tags:["Magic","Healing","Regeneration","Support","Buff","Active"],description:"A restorative spell that heals immediately and applies Regen.",effect:"heal",healPct:.20,buff:"regen",source:"Advanced Spell Library"},
    {id:"sp_shadow_mark",name:"Shadow Mark",kind:"spell",rank:"Extra",tier:5,resource:"mana",cost:23,cooldown:3,tags:["Magic","Dark","Curse","Marked","Vulnerable","Debuff","Active"],description:"Etch a shadow sigil onto the enemy, making it easier to damage and track.",effect:"damage",power:48,scaling:"magic",status:"marked",statusChance:.75,secondaryStatus:"vulnerable",secondaryChance:.45,source:"Advanced Spell Library"},

    // Unique Physical Skills
    {id:"sk_dragon_rend",name:"Dragon Rend",kind:"skill",rank:"Unique",tier:4,resource:"stamina",cost:32,cooldown:4,tags:["Physical","Weapon Art","Burst","Damage","Piercing","Unique","Active"],description:"A monster-slaying art designed to split scales, armor, and draconic hide.",effect:"damage",power:150,scaling:"physical",status:"vulnerable",statusChance:.45,source:"Requirement Unlock",requirements:[{type:"stat",stat:"phy_atk",value:65},{type:"codexName",name:"Starfall Drake"}]},
    {id:"sk_phantom_step_art",name:"Phantom Step Art",kind:"skill",rank:"Unique",tier:4,resource:"stamina",cost:28,cooldown:4,tags:["Physical","Mobility","Haste","Counter","Unique","Active"],description:"A speed art that turns movement into afterimages, granting Haste and Focus.",effect:"multiBuff",buff:["haste","focus"],source:"Requirement Unlock",requirements:[{type:"stat",stat:"agi",value:70},{type:"known",id:"sk_hunter_step"},{type:"uses",id:"sk_hunter_step",value:10}]},
    {id:"sk_kings_guard",name:"King’s Guard",kind:"skill",rank:"Unique",tier:3,resource:"stamina",cost:30,cooldown:5,tags:["Physical","Guard","Counter","Defensive","Unique","Active"],description:"The defensive form of royal guardians. Converts a desperate defense into momentum.",effect:"multiBuff",buff:["guard","thorns"],staminaRestorePct:.20,source:"Guardian Path Requirement",requirements:[{type:"jobName",text:"guardian"},{type:"stat",stat:"phy_def",value:70}]},
    {id:"sk_blood_moon_reaver",name:"Blood Moon Reaver",kind:"skill",rank:"Unique",tier:3,resource:"stamina",cost:35,cooldown:5,tags:["Physical","Weapon Art","Bleed","Burst","Unique","Active"],description:"A forbidden reaving slash that grows more vicious against bleeding foes.",effect:"damage",power:180,scaling:"physical",status:"bleed",statusChance:.80,source:"Hidden Achievement Requirement",requirements:[{type:"known",id:"sk_bleeding_crescent"},{type:"statusCount",status:"bleed",value:15}]},
    {id:"sk_soul_bound_blade_art",name:"Soul-Bound Blade Art",kind:"skill",rank:"Unique",tier:2,resource:"stamina",cost:42,cooldown:5,tags:["Physical","Weapon Art","True Damage","Burst","Unique","Active"],description:"A rare blade art that synchronizes weapon, soul, and class mastery into one strike.",effect:"damage",power:230,scaling:"hybrid",source:"Rare Class / Special Weapon Requirement",requirements:[{type:"rareJob"},{type:"totalLevel",value:45}]},

    // Unique Magic Spells
    {id:"sp_world_flame_sigil",name:"World Flame Sigil",kind:"spell",rank:"Unique",tier:4,resource:"mana",cost:36,cooldown:4,tags:["Magic","Fire","Burn","AoE","Curse","Unique","Active"],description:"A fire sigil that brands the battlefield itself. Evolves from deep Fireball mastery.",effect:"damage",aoe:true,power:125,scaling:"magic",status:"burn",statusChance:.70,source:"Fireball Mastery Requirement",requirements:[{type:"known",id:"sp_fireball"},{type:"statusCount",status:"burn",value:25}]},
    {id:"sp_abyssal_chain",name:"Abyssal Chain",kind:"spell",rank:"Unique",tier:4,resource:"mana",cost:34,cooldown:4,tags:["Magic","Dark","Curse","Control","Fear","Unique","Active"],description:"Dark chains bind the target’s shadow, damaging and fearing it.",effect:"damage",power:110,scaling:"magic",status:"fear",statusChance:.65,source:"Dark Magic Requirement",requirements:[{type:"known",id:"sp_shadow_mark"},{type:"stat",stat:"mag_atk",value:65}]},
    {id:"sp_saints_restoration",name:"Saint’s Restoration",kind:"spell",rank:"Unique",tier:3,resource:"mana",cost:40,cooldown:5,tags:["Magic","Holy","Healing","Cleanse","Barrier","Unique","Active"],description:"A high holy restoration spell that heals, cleanses, and guards the caster.",effect:"heal",healPct:.55,buff:"guard",cleanse:true,source:"Holy Path Requirement",requirements:[{type:"known",id:"sp_minor_heal"},{type:"stat",stat:"resist",value:60}]},
    {id:"sp_storm_crown_invocation",name:"Storm Crown Invocation",kind:"spell",rank:"Unique",tier:3,resource:"mana",cost:42,cooldown:5,tags:["Magic","Lightning","AoE","Haste","Paralysis","Unique","Active"],description:"Call a crown of stormlight over the battlefield, shocking enemies and quickening your movement.",effect:"damage",aoe:true,power:115,scaling:"magic",status:"paralysis",statusChance:.45,buff:"haste",source:"Storm Requirement",requirements:[{type:"known",id:"sp_chain_lightning"},{type:"stat",stat:"special",value:60}]},
    {id:"sp_void_gate",name:"Void Gate",kind:"spell",rank:"Unique",tier:2,resource:"mana",cost:48,cooldown:6,tags:["Magic","Arcane","Dark","Control","Banish","Unique","Active"],description:"Open a short-lived gate into the void to crush, banish, or displace the enemy.",effect:"damage",power:210,scaling:"magic",status:"doom",statusChance:.18,source:"Secret Research Requirement",requirements:[{type:"flag",flag:"first_secret_discovery"},{type:"totalLevel",value:50}]},

    // Ultimate Physical Skills
    {id:"sk_heaven_splitting_lion_art",name:"Heaven-Splitting Lion Art",kind:"skill",rank:"Ultimate",tier:1,resource:"stamina",cost:70,cooldown:8,tags:["Physical","Ultimate","Weapon Art","Burst","Critical","Piercing","Active"],description:"A legendary single-target weapon art that cleaves with the pressure of a divine beast.",effect:"damage",power:420,scaling:"physical",status:"vulnerable",statusChance:.85,source:"Ultimate Evolution",requirements:[{type:"known",id:"sk_soul_bound_blade_art"},{type:"totalLevel",value:80}]},
    {id:"sk_aegis_last_king",name:"Aegis of the Last King",kind:"skill",rank:"Ultimate",tier:1,resource:"stamina",cost:60,cooldown:8,tags:["Physical","Ultimate","Guard","Counter","Defensive","Thorns","Active"],description:"The last royal guard stance. Raises an impossible defense and answers damage with judgment.",effect:"multiBuff",buff:["guard","thorns","bravery"],staminaRestorePct:.30,source:"Ultimate Evolution",requirements:[{type:"known",id:"sk_kings_guard"},{type:"totalLevel",value:80}]},
    {id:"sk_thousand_step_godspeed_reversal",name:"Thousand-Step Godspeed Reversal",kind:"skill",rank:"Ultimate",tier:1,resource:"stamina",cost:65,cooldown:8,tags:["Physical","Ultimate","Mobility","Counter","Multi-Hit","Haste","Active"],description:"An ultimate speed art that turns every step into a counterstrike.",effect:"damage",power:360,hits:5,scaling:"physical",buff:"haste",source:"Ultimate Evolution",requirements:[{type:"known",id:"sk_phantom_step_art"},{type:"stat",stat:"agi",value:100}]},

    // Ultimate Magic Spells
    {id:"sp_astraea_final_benediction",name:"Astraea’s Final Benediction",kind:"spell",rank:"Ultimate",tier:1,resource:"mana",cost:85,cooldown:9,tags:["Magic","Ultimate","Holy","Healing","Cleanse","Barrier","Support","Active"],description:"A world-class benediction that restores, cleanses, and protects in one miracle.",effect:"heal",healPct:1.00,buff:"guard",cleanse:true,source:"Ultimate Evolution",requirements:[{type:"known",id:"sp_saints_restoration"},{type:"totalLevel",value:80}]},
    {id:"sp_ragnarok_starfall_cataclysm",name:"Ragnarok Starfall Cataclysm",kind:"spell",rank:"Ultimate",tier:1,resource:"mana",cost:95,cooldown:9,tags:["Magic","Ultimate","AoE","Fire","Arcane","Burst","Damage","Active"],description:"Call down a storm of dying stars. A legendary AoE spell built for catastrophic damage.",effect:"damage",aoe:true,power:330,hits:3,scaling:"magic",status:"burn",statusChance:.80,source:"Ultimate Evolution",requirements:[{type:"known",id:"sp_world_flame_sigil"},{type:"totalLevel",value:85}]},
    {id:"sp_eclipse_archive_end_names",name:"Eclipse Archive: End of Names",kind:"spell",rank:"Ultimate",tier:1,resource:"mana",cost:90,cooldown:9,tags:["Magic","Ultimate","Dark","Arcane","Curse","Weaken","Marked","Damage","Active"],description:"Open a cursed archive that erases the enemy’s name from the world’s memory.",effect:"damage",aoe:true,power:260,scaling:"magic",status:"weaken",statusChance:.90,secondaryStatus:"marked",secondaryChance:.90,source:"Ultimate Evolution",requirements:[{type:"known",id:"sp_void_gate"},{type:"totalLevel",value:85}]},

    // Intrinsic Examples
    {id:"in_dragon_scales",name:"Dragon Scales",kind:"skill",rank:"Intrinsic",tier:6,resource:"passive",cost:0,cooldown:0,tags:["Intrinsic","Passive","Dragon","Guard","Defensive"],description:"A draconic body trait that reinforces defense and resistance.",effect:"passive",bon:{pd:4,rs:3},source:"Dragonkin / Dragon Race"},
    {id:"in_dragon_breath",name:"Dragon Breath",kind:"spell",rank:"Intrinsic",tier:5,resource:"mana",cost:28,cooldown:4,tags:["Intrinsic","Magic","Fire","AoE","Damage","Burn"],description:"Exhale destructive elemental force from a draconic core.",effect:"damage",aoe:true,power:95,scaling:"hybrid",status:"burn",statusChance:.45,source:"Dragonkin / Dragon Evolution"},
    {id:"in_arcane_sight",name:"Arcane Sight",kind:"spell",rank:"Intrinsic",tier:8,resource:"passive",cost:0,cooldown:0,tags:["Intrinsic","Passive","Arcane","Utility"],description:"An elven sense for mana currents, improving spell control and special perception.",effect:"passive",bon:{ma:2,sp:2},source:"Elf Lineage"},
    {id:"in_stoneblood",name:"Stoneblood",kind:"skill",rank:"Intrinsic",tier:8,resource:"passive",cost:0,cooldown:0,tags:["Intrinsic","Passive","Guard","Defensive"],description:"A dwarven body trait that hardens blood and bone against impact.",effect:"passive",bon:{hp:10,pd:3},source:"Dwarf Lineage"},
    {id:"in_hellfire_affinity",name:"Hellfire Affinity",kind:"spell",rank:"Intrinsic",tier:6,resource:"passive",cost:0,cooldown:0,tags:["Intrinsic","Passive","Fire","Dark","Magic"],description:"A demonic affinity that strengthens dark flame and curse spells.",effect:"passive",bon:{ma:3,rs:2},source:"Demon Lineage"},
    {id:"in_predator_instinct",name:"Predator Instinct",kind:"skill",rank:"Intrinsic",tier:8,resource:"passive",cost:0,cooldown:0,tags:["Intrinsic","Passive","Physical","Critical","Focus"],description:"A beastkin instinct for openings, movement, and pursuit.",effect:"passive",bon:{ag:3,pa:2},source:"Beastkin Lineage"},
    {id:"in_deathless_body",name:"Deathless Body",kind:"skill",rank:"Intrinsic",tier:6,resource:"passive",cost:0,cooldown:0,tags:["Intrinsic","Passive","Undead","Defensive"],description:"An undead body that endures wounds living flesh cannot.",effect:"passive",bon:{hp:14,rs:4},source:"Undead Lineage"},
    {id:"in_adaptive_body",name:"Adaptive Body",kind:"skill",rank:"Intrinsic",tier:8,resource:"passive",cost:0,cooldown:0,tags:["Intrinsic","Passive","Slime","Evolution","Utility"],description:"A slime body trait that adapts to shape, impact, and strange environments.",effect:"passive",bon:{hp:10,sp:3},source:"Slime Lineage"}
  ];
  var ABILITY_BY_ID = {};
  ABILITY_LIBRARY.forEach(function(a){ ABILITY_BY_ID[a.id] = a; });

  function ensureAbilityState(){
    if (typeof ensureGameCollections === "function") ensureGameCollections();
    if (!G.achievements || typeof G.achievements !== "object") G.achievements = {flags:[]};
    if (!Array.isArray(G.achievements.flags)) G.achievements.flags = [];
    if (!Array.isArray(G.learned_abilities)) G.learned_abilities = [];
    if (!G.ability_cooldowns || typeof G.ability_cooldowns !== "object") G.ability_cooldowns = {};
    if (!G.ability_uses || typeof G.ability_uses !== "object") G.ability_uses = {};
    if (!G.status_applications || typeof G.status_applications !== "object") G.status_applications = {};
    if (!G.ability_unlocks || typeof G.ability_unlocks !== "object") G.ability_unlocks = {};
    if (typeof G.max_stamina !== "number") G.max_stamina = 60;
    if (typeof G.stamina !== "number") G.stamina = G.max_stamina;
    if (!G.save_meta || typeof G.save_meta !== "object") G.save_meta = {};
    G.save_meta.version = VERSION;

    var starter = ["sk_quick_slash","sk_guard_stance","sp_fire_bolt","sp_ice_needle","sp_spark"];
    starter.forEach(function(id){ if (G.learned_abilities.indexOf(id) < 0) G.learned_abilities.push(id); });

    grantIntrinsicAbilities();
    refreshAbilityUnlocks(false);
  }

  function raceNameBlob(){
    var r = (typeof RACE_DATA !== "undefined" && G.race_id) ? RACE_DATA[G.race_id] : null;
    return ((r && r.name) || "") + " " + ((r && r.anime) || "") + " " + ((r && r.desc) || "");
  }

  function grantIntrinsicAbilities(){
    var blob = raceNameBlob().toLowerCase();
    var map = [
      [/dragon|dragonewt|dragonkin/,["in_dragon_scales","in_dragon_breath"]],
      [/elf|fairy|spirit/,["in_arcane_sight"]],
      [/dwarf|golem|stone/,["in_stoneblood"]],
      [/demon|devil|oni|asura|rakshasa/,["in_hellfire_affinity"]],
      [/beast|cat|dog|fox|kitsune|wolf|bear|lion|tiger|rabbit|mink|lizard|harpy|bird|centaur|minotaur/,["in_predator_instinct"]],
      [/undead|skeleton|zombie|lich|vampire|wraith|ghost/,["in_deathless_body"]],
      [/slime/,["in_adaptive_body"]]
    ];
    map.forEach(function(pair){
      if (pair[0].test(blob)) pair[1].forEach(function(id){ if (G.learned_abilities.indexOf(id) < 0) G.learned_abilities.push(id); });
    });
  }

  function statValue(name){
    if (name === "stamina") return G.stamina || 0;
    if (name === "mana") return G.mp || 0;
    return Number(G[name] || 0);
  }

  function playerHasJobName(text){
    text = String(text || "").toLowerCase();
    try {
      return (G.jobs || []).some(function(j){
        var jd = JOB_DATA[j.id];
        return jd && String(jd.name || "").toLowerCase().indexOf(text) >= 0;
      });
    } catch(e){ return false; }
  }

  function playerHasRareJob(){
    try {
      return (G.jobs || []).some(function(j){
        var jd = JOB_DATA[j.id];
        return jd && /rare|hidden/i.test(jd.class_tier || "");
      });
    } catch(e){ return false; }
  }

  function playerDefeatedName(name){
    return !!(G.codex_unlocked && G.codex_unlocked[name]) || !!(G.achievements && G.achievements.defeated && G.achievements.defeated[name]);
  }

  function requirementText(req){
    if (!req) return "";
    if (req.type === "stat") return (req.stat || "").toUpperCase() + " " + req.value + "+";
    if (req.type === "known") return "Know " + (ABILITY_BY_ID[req.id] ? ABILITY_BY_ID[req.id].name : req.id);
    if (req.type === "uses") return "Use " + (ABILITY_BY_ID[req.id] ? ABILITY_BY_ID[req.id].name : req.id) + " " + req.value + " times";
    if (req.type === "statusCount") return "Apply " + titleCase(req.status) + " " + req.value + " times";
    if (req.type === "codexName") return "Defeat/discover " + req.name;
    if (req.type === "jobName") return "Own a " + req.text + " job path";
    if (req.type === "rareJob") return "Own a Rare or Hidden job";
    if (req.type === "totalLevel") return "Total Level " + req.value + "+";
    if (req.type === "flag") return "Unlock achievement/flag " + req.flag;
    return "Special requirement";
  }

  function meetsRequirement(req){
    if (!req) return true;
    if (req.type === "stat") return statValue(req.stat) >= req.value;
    if (req.type === "known") return G.learned_abilities.indexOf(req.id) >= 0;
    if (req.type === "uses") return (G.ability_uses[req.id] || 0) >= req.value;
    if (req.type === "statusCount") return (G.status_applications[req.status] || 0) >= req.value;
    if (req.type === "codexName") return playerDefeatedName(req.name);
    if (req.type === "jobName") return playerHasJobName(req.text);
    if (req.type === "rareJob") return playerHasRareJob();
    if (req.type === "totalLevel") return (G.total_lv || 0) >= req.value;
    if (req.type === "flag") return hasFlag(req.flag);
    return false;
  }

  function requirementsMet(a){
    return !a.requirements || a.requirements.every(meetsRequirement);
  }

  function lockedReason(a){
    if (!a.requirements || !a.requirements.length) return "No special requirement.";
    var missing = a.requirements.filter(function(r){ return !meetsRequirement(r); }).map(requirementText);
    return missing.length ? missing.join(" · ") : "Requirements met.";
  }

  function refreshAbilityUnlocks(printNew){
    if (!Array.isArray(G.learned_abilities)) G.learned_abilities = [];
    ABILITY_LIBRARY.forEach(function(a){
      if (G.learned_abilities.indexOf(a.id) >= 0) return;
      if ((a.rank === "Unique" || a.rank === "Ultimate") && requirementsMet(a)) {
        G.learned_abilities.push(a.id);
        G.ability_unlocks[a.id] = true;
        if (printNew) safePrint("✦ " + a.rank + " " + (a.kind === "spell" ? "Spell" : "Skill") + " unlocked: " + a.name + "!", "b-system");
      }
    });
  }

  function learnedAbilities(kind){
    ensureAbilityState();
    return G.learned_abilities.map(function(id){ return ABILITY_BY_ID[id]; }).filter(function(a){ return a && (!kind || a.kind === kind); });
  }

  function passiveAbilities(){
    return learnedAbilities().filter(function(a){ return a.resource === "passive" || a.effect === "passive"; });
  }

  function applyAbilityPassives(){
    passiveAbilities().forEach(function(a){
      var bon = a.bon || {};
      Object.keys(bon).forEach(function(k){
        if (k === "hp") G.max_hp += bon[k];
        else if (k === "mp") G.max_mp += bon[k];
        else if (k === "pa") G.phy_atk += bon[k];
        else if (k === "pd") G.phy_def += bon[k];
        else if (k === "ag") G.agi += bon[k];
        else if (k === "ma") G.mag_atk += bon[k];
        else if (k === "md") G.mag_def += bon[k];
        else if (k === "rs") G.resist += bon[k];
        else if (k === "sp") G.special += bon[k];
      });
    });
  }

  function recalcResources(preserveRatio){
    var oldMax = typeof G.max_stamina === "number" ? G.max_stamina : 0;
    var oldNow = typeof G.stamina === "number" ? G.stamina : oldMax;
    var phys = (G.phy_atk || 0) * 1.2 + (G.phy_def || 0) * 0.9 + (G.agi || 0) * 1.1 + (G.special || 0) * 0.6;
    var newMax = Math.max(35, Math.floor(45 + phys + (G.total_lv || 0) * 1.5));
    G.max_stamina = newMax;
    if (!preserveRatio || !oldMax) G.stamina = Math.min(newMax, typeof G.stamina === "number" ? G.stamina : newMax);
    else G.stamina = Math.min(newMax, Math.max(0, Math.round(oldNow * (newMax / Math.max(1, oldMax)))));

    var manaBase = Math.floor(25 + (G.mag_atk || 0) * 1.1 + (G.mag_def || 0) * 0.75 + (G.resist || 0) * 0.55 + (G.special || 0) * 0.75);
    G.max_mp = Math.max(G.max_mp || 0, manaBase);
    G.mp = Math.min(G.mp || G.max_mp, G.max_mp);
  }

  if (orig.applyStats) {
    applyStats = function(){
      var oldMax = G.max_stamina, oldStam = G.stamina;
      var ret = orig.applyStats.apply(this, arguments);
      ensureAbilityState();
      applyAbilityPassives();
      recalcResources(true);
      if (typeof oldMax !== "number") G.stamina = G.max_stamina;
      else if (typeof oldStam === "number") G.stamina = Math.min(G.max_stamina, G.stamina);
      return ret;
    };
  }

  // ── Stamina Battle Bar ───────────────────────────────────────
  function ensureStaminaBar(){
    var hpText = document.getElementById("b-p-hp");
    if (!hpText || document.getElementById("b-p-stam-bar")) return;
    var label = document.createElement("div");
    label.className = "bar-label stamina-label-v25";
    label.textContent = "STAMINA";
    var track = document.createElement("div");
    track.className = "bar-track";
    track.innerHTML = '<div class="bar-fill bar-stam-p" id="b-p-stam-bar"></div>';
    var txt = document.createElement("div");
    txt.className = "bar-text";
    txt.id = "b-p-stam";
    txt.textContent = "0 / 0";
    hpText.insertAdjacentElement("afterend", txt);
    hpText.insertAdjacentElement("afterend", track);
    hpText.insertAdjacentElement("afterend", label);
  }

  function updateStaminaBar(){
    ensureStaminaBar();
    var bar = document.getElementById("b-p-stam-bar");
    var txt = document.getElementById("b-p-stam");
    if (!bar || !txt) return;
    var pct = Math.max(0, (G.stamina || 0) / Math.max(1, G.max_stamina || 1) * 100);
    bar.style.width = pct + "%";
    bar.classList.toggle("low-stamina", pct <= 25);
    txt.textContent = Math.floor(G.stamina || 0) + " / " + Math.floor(G.max_stamina || 0);
  }

  if (orig.updateBattlePanel) {
    updateBattlePanel = function(){
      var ret = orig.updateBattlePanel.apply(this, arguments);
      ensureAbilityState();
      updateStaminaBar();
      return ret;
    };
  }

  if (orig.startBattle) {
    startBattle = function(){
      ensureAbilityState();
      G.stamina = Math.min(G.max_stamina, Math.max(G.stamina || 0, Math.floor(G.max_stamina * 0.65)));
      var ret = orig.startBattle.apply(this, arguments);
      if (B) {
        if (!B.ability_cooldowns) B.ability_cooldowns = {};
        if (!B.ability_turn) B.ability_turn = 0;
      }
      updateStaminaBar();
      return ret;
    };
  }

  function tickAbilityCooldowns(){
    if (!B) return;
    if (!B.ability_cooldowns) B.ability_cooldowns = {};
    Object.keys(B.ability_cooldowns).forEach(function(id){
      B.ability_cooldowns[id] = Math.max(0, (B.ability_cooldowns[id] || 0) - 1);
      if (B.ability_cooldowns[id] <= 0) delete B.ability_cooldowns[id];
    });
  }

  function staminaRegenAmount(){
    var pct = 0.10;
    if (B && B.p_fx && B.p_fx.haste) pct += 0.04;
    if (B && B.p_fx && B.p_fx.focus) pct += 0.03;
    var flat = Math.floor((G.max_stamina || 0) * pct);
    return clamp(flat, 6, Math.max(8, Math.floor((G.max_stamina || 0) * 0.18)));
  }

  function regenStamina(extraPct){
    ensureAbilityState();
    var add = staminaRegenAmount();
    if (extraPct) add += Math.floor((G.max_stamina || 0) * extraPct);
    var before = G.stamina || 0;
    G.stamina = Math.min(G.max_stamina || 0, before + add);
    if (G.stamina > before && B) safePrint("Recovered " + (G.stamina - before) + " Stamina.", "info");
  }

  if (orig.playerTurnStart) {
    playerTurnStart = async function(){
      ensureAbilityState();
      if (B) {
        tickAbilityCooldowns();
        regenStamina(0);
        if (typeof updateStats === "function") updateStats();
        if (typeof updateBattlePanel === "function") updateBattlePanel();
      }
      return await orig.playerTurnStart.apply(this, arguments);
    };
  }

  // ── Ability Use Logic ────────────────────────────────────────
  function resourceLabel(a){ return a.resource === "stamina" ? "STA" : a.resource === "mana" ? "MP" : "PASSIVE"; }
  function typeLabel(a){ return (a.kind === "spell" ? "Spell" : "Skill"); }
  function costText(a){ return a.resource === "passive" ? "Passive" : a.cost + " " + resourceLabel(a); }
  function abilityCooldown(a){ return B && B.ability_cooldowns ? (B.ability_cooldowns[a.id] || 0) : 0; }
  function canPay(a){ return a.resource === "passive" || (a.resource === "stamina" ? (G.stamina || 0) >= a.cost : (G.mp || 0) >= a.cost); }
  function cannotText(a){
    var cd = abilityCooldown(a);
    if (cd > 0) return "Cooldown: " + cd + " turn" + (cd === 1 ? "" : "s");
    if (!canPay(a)) return a.resource === "stamina" ? "Not enough Stamina." : "Not enough Mana.";
    return "";
  }

  function payAbility(a){
    if (a.resource === "stamina") G.stamina = Math.max(0, (G.stamina || 0) - a.cost);
    if (a.resource === "mana") G.mp = Math.max(0, (G.mp || 0) - a.cost);
    if (!B.ability_cooldowns) B.ability_cooldowns = {};
    if (a.cooldown) B.ability_cooldowns[a.id] = a.cooldown;
    G.ability_uses[a.id] = (G.ability_uses[a.id] || 0) + 1;
    refreshAbilityUnlocks(true);
  }

  function scalingPower(a){
    var s = a.scaling || (a.kind === "skill" ? "physical" : "magic");
    var val = 0;
    if (s === "physical") val = (G.phy_atk || 0) * 0.95 + (G.agi || 0) * 0.35 + ((G.weapon && G.weapon.atk) || 0);
    else if (s === "defense") val = (G.phy_def || 0) * 0.9 + (G.phy_atk || 0) * 0.25;
    else if (s === "magic") val = (G.mag_atk || 0) * 1.0 + (G.special || 0) * 0.35;
    else if (s === "hybrid") val = (G.phy_atk || 0) * 0.45 + (G.mag_atk || 0) * 0.45 + (G.special || 0) * 0.45;
    else val = (G.phy_atk || 0) * 0.4 + (G.mag_atk || 0) * 0.4;
    return (a.power || 0) + val;
  }

  function applyAbilityStatus(a){
    if (!a.status || !B) return;
    if (Math.random() < (a.statusChance || 0.3)) {
      if (typeof applyFx === "function") applyFx("e", a.status);
      G.status_applications[a.status] = (G.status_applications[a.status] || 0) + 1;
    }
    if (a.secondaryStatus && Math.random() < (a.secondaryChance || 0.3)) {
      if (typeof applyFx === "function") applyFx("e", a.secondaryStatus);
      G.status_applications[a.secondaryStatus] = (G.status_applications[a.secondaryStatus] || 0) + 1;
    }
  }

  function applyAbilityBuff(a){
    if (!a.buff || !B) return;
    var buffs = Array.isArray(a.buff) ? a.buff : [a.buff];
    buffs.forEach(function(b){ if (typeof applyBuff === "function") applyBuff("p", b); });
  }

  function applyAbilityUtility(a){
    if (a.cleanse && typeof cleanseNegativeFx === "function") cleanseNegativeFx("p");
    if (a.staminaRestorePct) regenStamina(a.staminaRestorePct);
  }

  function dealAbilityDamage(a, targetIdx){
    if (!B) return 0;
    B.enemy_idx = targetIdx;
    var hits = a.hits || 1;
    var total = 0;
    for (var h=0; h<hits; h++) {
      var dmg = Math.floor((scalingPower(a) / hits) * (0.88 + Math.random() * 0.24) * (typeof vulnMult === "function" ? vulnMult("e") : 1) * (typeof atkMult === "function" ? atkMult("p") : 1));
      if (a.tags && a.tags.indexOf("True Damage") >= 0) dmg = Math.floor(dmg * 1.15);
      B.enemy_hp = Math.max(0, B.enemy_hp - dmg);
      total += dmg;
    }
    if (typeof wakeOnHit === "function") wakeOnHit("e");
    return total;
  }

  function executeAbility(a){
    ensureAbilityState();
    if (!B || !a) return;
    var fail = cannotText(a);
    if (fail) { safePrint(fail, "danger"); setTimeout(showBattleMenu, 700); return; }

    function finish(){
      applyAbilityBuff(a);
      applyAbilityUtility(a);
      if (typeof updateStats === "function") updateStats();
      if (typeof updateBattlePanel === "function") updateBattlePanel();
      if (typeof checkWin === "function" && checkWin()) return;
      if (typeof enemyTurn === "function") enemyTurn();
    }

    if (typeof disableAll === "function") disableAll();
    if (!B.stats) B.stats = {dealt:0,taken:0,skills:0,crits:0,statuses:0};
    B.stats.skills++;
    if (a.effect === "heal") B.usedHeal = true, B.streak = 0;
    payAbility(a);

    if (a.effect === "heal") {
      var healed = Math.floor((G.max_hp || 0) * (a.healPct || 0.2));
      G.hp = Math.min(G.max_hp, (G.hp || 0) + healed);
      safePrint(G.name + " casts " + a.name + "! Recovered " + healed + " HP.", "success");
      finish();
      return;
    }

    if (a.effect === "buff" || a.effect === "multiBuff" || a.effect === "passive") {
      safePrint(G.name + " uses " + a.name + "!", a.kind === "spell" ? "b-player" : "success");
      finish();
      return;
    }

    if (a.aoe) {
      safePrint(G.name + " uses " + a.name + " — ★ ALL ENEMIES", a.kind === "spell" ? "b-player" : "success");
      B.enemies.forEach(function(en, i){
        if (B.enemy_hps[i] <= 0) return;
        var dmg = dealAbilityDamage(a, i);
        safePrint("  " + en.name + ": " + dmg + " damage!", "b-player");
        applyAbilityStatus(a);
      });
      var living = B.enemy_hps.findIndex(function(hp){ return hp > 0; });
      B.enemy_idx = living >= 0 ? living : 0;
      finish();
      return;
    }

    if (typeof selectTarget === "function") {
      selectTarget(function(idx){
        if (typeof disableAll === "function") disableAll();
        var dmg = dealAbilityDamage(a, idx);
        var targetTag = B.enemies.length > 1 ? " [vs " + B.enemy.name + "]" : "";
        safePrint(G.name + " uses " + a.name + targetTag + "  [" + dmg + " damage]", a.kind === "spell" ? "b-player" : "success");
        applyAbilityStatus(a);
        finish();
      });
    }
  }

  // ── Battle Menus ─────────────────────────────────────────────
  function makeBattleButton(label, fn, disabled){
    var b = document.createElement("button");
    b.className = "battle-btn";
    b.textContent = label;
    b.onclick = fn;
    b.disabled = !!disabled;
    return b;
  }

  showBattleMenu = function(){
    ensureAbilityState();
    if (typeof $ch === "undefined") return;
    $ch.innerHTML = "";
    var row = document.createElement("div");
    row.className = "btn-row";
    row.appendChild(makeBattleButton("⚔ Attack", doAttack));
    row.appendChild(makeBattleButton("💪 Physical Skills", physical_skills_menu, learnedAbilities("skill").filter(function(a){ return a.resource !== "passive"; }).length === 0));
    row.appendChild(makeBattleButton("🔮 Magic Spells", magic_spells_menu, learnedAbilities("spell").filter(function(a){ return a.resource !== "passive"; }).length === 0));
    row.appendChild(makeBattleButton("🤝 Recruits / Support", doRecruitAssistMenu, typeof getBattleReadyRecruits === "function" ? getBattleReadyRecruits().length === 0 : false));
    row.appendChild(makeBattleButton("🎒 Items", doItemMenu));
    row.appendChild(makeBattleButton("🛡 Defend / Recover", defendRecover));
    row.appendChild(makeBattleButton("🏃 Run", doRun));
    $ch.appendChild(row);
  };

  window.physical_skills_menu = function(){
    abilityBattleList("skill");
  };
  window.magic_spells_menu = function(){
    abilityBattleList("spell");
  };

  function abilityBattleList(kind){
    ensureAbilityState();
    if (typeof $ch === "undefined") return;
    var list = learnedAbilities(kind).filter(function(a){ return a.resource !== "passive"; });
    $ch.innerHTML = "";
    var lbl = document.createElement("p");
    lbl.className = "b-system";
    lbl.textContent = kind === "skill" ? "— Physical Skills  [Stamina] —" : "— Magic Spells  [Mana] —";
    $ch.appendChild(lbl);
    if (!list.length) {
      var p = document.createElement("p");
      p.className = "danger";
      p.textContent = kind === "skill" ? "No Physical Skills learned." : "No Magic Spells learned.";
      $ch.appendChild(p);
    }
    list.sort(function(a,b){ return a.tier - b.tier || a.name.localeCompare(b.name); }).forEach(function(a){
      var reason = cannotText(a);
      var b = document.createElement("button");
      b.style.whiteSpace = "pre-wrap";
      b.textContent = a.name + " — " + a.cost + " " + resourceLabel(a) + " — CD " + a.cooldown +
        "\n" + a.rank + " " + typeLabel(a) + " · Tier " + a.tier + " · Tags: " + a.tags.join(", ") +
        (reason ? "\n" + reason : "\n" + a.description);
      b.disabled = !!reason;
      b.onclick = function(){ executeAbility(a); };
      $ch.appendChild(b);
    });
    var back = document.createElement("button");
    back.textContent = "← Back";
    back.onclick = showBattleMenu;
    $ch.appendChild(back);
  }

  window.defendRecover = function(){
    if (!B) return;
    if (typeof disableAll === "function") disableAll();
    if (typeof applyBuff === "function") applyBuff("p","guard");
    regenStamina(0.25);
    safePrint(G.name + " defends and recovers stamina.", "success");
    if (typeof updateStats === "function") updateStats();
    if (typeof updateBattlePanel === "function") updateBattlePanel();
    if (typeof enemyTurn === "function") enemyTurn();
  };

  // ── Skill / Spell Screen ─────────────────────────────────────
  function cardHtml(a, locked){
    var req = locked ? lockedReason(a) : (a.source || "Known");
    var tagHtml = (a.tags || []).map(function(t){
      var cls = a.kind === "spell" ? " spell" : " skill";
      return '<span class="skill-tag ability-tag-v25' + cls + '">' + esc(t) + '</span>';
    }).join("");
    return '<div class="skill-card ability-card-v25' + (locked ? ' locked' : '') + '">' +
      '<div class="skill-name ability-name-v25">' + esc(a.name) + '</div>' +
      '<div class="skill-meta ability-meta-v25">' + esc(typeLabel(a)) + ' · ' + esc(a.rank) + ' · Tier ' + esc(a.tier) + ' · ' + esc(a.resource === "mana" ? "Mana Cost" : a.resource === "stamina" ? "Stamina Cost" : "Resource") + ': ' + esc(costText(a)) + ' · Cooldown: ' + esc(a.cooldown || 0) + ' turn' + ((a.cooldown||0) === 1 ? "" : "s") + '</div>' +
      '<div class="skill-meta ability-meta-v25">Source / Requirement: ' + esc(req) + '</div>' +
      '<div class="skill-desc ability-desc-v25">' + esc(a.description) + '</div>' +
      '<div class="skill-tags">' + tagHtml + '</div>' +
    '</div>';
  }

  function appendAbilitySection(title, note, list, locked){
    var div = document.createElement("div");
    div.className = "ability-section-v25";
    div.innerHTML = '<div class="ability-section-title-v25">' + esc(title) + '</div>' +
      '<div class="ability-split-note">' + esc(note) + '</div>' +
      (list.length ? list.map(function(a){ return cardHtml(a, locked); }).join("") : '<div class="ability-split-note">Nothing in this section yet.</div>');
    $ch.appendChild(div);
  }

  skill_screen = function(){
    ensureAbilityState();
    refreshAbilityUnlocks(true);
    if (typeof clearOutput === "function") clearOutput();
    if (typeof showBattlePanel === "function") showBattlePanel(false);
    safePrint("SKILL & SPELL SCREEN — v0.25", "highlight");
    safePrint("Physical Skills use Stamina. Magic Spells use Mana. Lower tier number means stronger: Tier 1 is ultimate/world-class, Tier 10 is beginner/basic.", "narrator");
    safePrint("Stamina: " + Math.floor(G.stamina) + " / " + Math.floor(G.max_stamina) + "  ·  Mana: " + Math.floor(G.mp) + " / " + Math.floor(G.max_mp), "info");
    if (typeof $ch !== "undefined") $ch.innerHTML = "";

    var learned = learnedAbilities();
    var phys = learned.filter(function(a){ return a.kind === "skill" && a.resource !== "passive"; }).sort(function(a,b){ return a.tier-b.tier; });
    var spells = learned.filter(function(a){ return a.kind === "spell" && a.resource !== "passive"; }).sort(function(a,b){ return a.tier-b.tier; });
    var pass = learned.filter(function(a){ return a.resource === "passive" || a.effect === "passive"; }).sort(function(a,b){ return a.tier-b.tier; });
    var locked = ABILITY_LIBRARY.filter(function(a){ return learned.indexOf(a) < 0; }).sort(function(a,b){ return a.tier-b.tier; });

    appendAbilitySection("Physical Skills", "Stamina-based weapon arts, martial arts, mobility actions, counters, stances, taunts, and physical debuffs.", phys, false);
    appendAbilitySection("Magic Spells", "Mana-based elemental magic, healing, barriers, curses, summons, control, and magical buffs/debuffs.", spells, false);
    appendAbilitySection("Passive / Intrinsic Abilities", "Always-on racial traits, intrinsic awakenings, passive masteries, and build-defining non-button effects.", pass, false);
    appendAbilitySection("Locked / Requirement Abilities", "Unique and Ultimate abilities appear here until their requirements are met. Once requirements are met, they unlock automatically.", locked, true);

    showChoices([
      ["📚 Ability Library", spell_shop_selector],
      ["⚔ Character Status", character_screen],
      ["← Town Center", town_center]
    ]);
  };

  // ── Ability Store ────────────────────────────────────────────
  var STORE_CATS = [
    {key:"common_skill", title:"Common Physical Skills", desc:"Basic stamina skills sold for early physical builds.", filter:function(a){ return a.kind==="skill" && a.rank==="Common"; }},
    {key:"common_spell", title:"Common Magic Spells", desc:"Basic mana spells sold for early casters and hybrid builds.", filter:function(a){ return a.kind==="spell" && a.rank==="Common"; }},
    {key:"extra_skill", title:"Extra Physical Skills", desc:"Higher-level stamina skills. Available after Total Level 15.", filter:function(a){ return a.kind==="skill" && a.rank==="Extra"; }, req:function(){return (G.total_lv||0)>=15;}},
    {key:"extra_spell", title:"Extra Magic Spells", desc:"Higher-level mana spells. Available after Total Level 15.", filter:function(a){ return a.kind==="spell" && a.rank==="Extra"; }, req:function(){return (G.total_lv||0)>=15;}},
    {key:"unique", title:"Unique / Ultimate Requirement Archive", desc:"Not sold directly. Shows legendary abilities and their requirements.", filter:function(a){ return a.rank==="Unique" || a.rank==="Ultimate"; }, readonly:true}
  ];
  function abilityPrice(a){
    if (a.rank === "Common") return 120 + (10 - a.tier) * 30;
    if (a.rank === "Extra") return 700 + (10 - a.tier) * 140;
    if (a.rank === "Unique") return 5000;
    if (a.rank === "Ultimate") return 20000;
    return 250;
  }

  spell_shop_selector = function(){
    ensureAbilityState();
    if (typeof clearOutput === "function") clearOutput();
    if (typeof showBattlePanel === "function") showBattlePanel(false);
    safePrint("ABILITY LIBRARY — SKILLS & SPELLS", "highlight");
    safePrint("The store mainly sells Common Skills and Common Spells. Extra abilities appear in higher-level shelves. Unique and Ultimate abilities unlock through requirements.", "narrator");
    safePrint("Gold: " + (G.gold || 0) + "  ·  Known Abilities: " + G.learned_abilities.length, "info");
    if (typeof $ch !== "undefined") $ch.innerHTML = "";
    STORE_CATS.forEach(function(cat){
      var list = ABILITY_LIBRARY.filter(cat.filter);
      var known = list.filter(function(a){ return G.learned_abilities.indexOf(a.id) >= 0; }).length;
      var open = !cat.req || cat.req();
      var b = document.createElement("button");
      b.style.whiteSpace = "pre-wrap";
      b.textContent = cat.title + "  (" + known + "/" + list.length + " known)\n" + (open ? cat.desc : cat.desc + "  [LOCKED: Total Level 15 required]");
      b.disabled = !open;
      b.onclick = function(){ ability_shop_category(cat.key); };
      $ch.appendChild(b);
    });
    var back = document.createElement("button");
    back.textContent = "← Shops";
    back.onclick = shops;
    $ch.appendChild(back);
  };

  window.ability_shop_category = function(key){
    ensureAbilityState();
    var cat = STORE_CATS.find(function(c){ return c.key === key; }) || STORE_CATS[0];
    if (typeof clearOutput === "function") clearOutput();
    safePrint(cat.title.toUpperCase(), "highlight");
    safePrint(cat.desc, "narrator");
    safePrint("Gold: " + (G.gold || 0), "info");
    if (typeof $ch !== "undefined") $ch.innerHTML = "";
    ABILITY_LIBRARY.filter(cat.filter).sort(function(a,b){ return a.tier-b.tier || a.name.localeCompare(b.name); }).forEach(function(a){
      var known = G.learned_abilities.indexOf(a.id) >= 0;
      var locked = cat.readonly || (a.requirements && !requirementsMet(a));
      var price = abilityPrice(a);
      var b = document.createElement("button");
      b.style.whiteSpace = "pre-wrap";
      b.textContent = (known ? "[KNOWN] " : locked ? "[LOCKED] " : "[BUY] ") + a.name + " — " + a.rank + " " + typeLabel(a) + " · Tier " + a.tier + "\n" +
        costText(a) + " · Cooldown " + a.cooldown + " · Tags: " + a.tags.join(", ") + "\n" +
        (cat.readonly ? "Requirement: " + lockedReason(a) : "Cost: " + price + "g") + "\n" + a.description;
      b.disabled = known || locked || G.gold < price;
      b.onclick = function(){
        G.gold -= price;
        if (G.learned_abilities.indexOf(a.id) < 0) G.learned_abilities.push(a.id);
        if (typeof updateStats === "function") updateStats();
        if (typeof autoSave === "function") autoSave("ability_purchase");
        ability_shop_category(key);
      };
      $ch.appendChild(b);
    });
    var back = document.createElement("button");
    back.textContent = "← Ability Library";
    back.onclick = spell_shop_selector;
    $ch.appendChild(back);
  };

  spell_shop = function(){ spell_shop_selector(); };

  // ── Tracking wrappers / old save init ────────────────────────
  if (orig.applyFx) {
    applyFx = function(target, id){
      ensureAbilityState();
      if (target === "e" && id) G.status_applications[id] = (G.status_applications[id] || 0) + 1;
      var ret = orig.applyFx.apply(this, arguments);
      refreshAbilityUnlocks(true);
      return ret;
    };
  }

  if (orig.updateStats) {
    updateStats = function(){
      ensureAbilityState();
      var ret = orig.updateStats.apply(this, arguments);
      return ret;
    };
  }

  if (orig.loadSlotV25) {
    loadSlotV25 = function(){
      var ret = orig.loadSlotV25.apply(this, arguments);
      ensureAbilityState();
      if (typeof applyStats === "function") applyStats();
      if (typeof updateStats === "function") updateStats();
      return ret;
    };
  }
  if (orig.loadGame) {
    loadGame = function(){
      var ret = orig.loadGame.apply(this, arguments);
      setTimeout(function(){ ensureAbilityState(); if (typeof applyStats === "function") applyStats(); if (typeof updateStats === "function") updateStats(); }, 0);
      return ret;
    };
  }
  if (orig.saveGame) {
    saveGame = function(){
      ensureAbilityState();
      return orig.saveGame.apply(this, arguments);
    };
  }

  if (orig.inn) {
    inn = function(){
      var ret = orig.inn.apply(this, arguments);
      setTimeout(function(){
        try {
          Array.prototype.slice.call(document.querySelectorAll("#choices button")).forEach(function(b){
            if (/Rest/i.test(b.textContent || "") && !b._v25RestWrap) {
              b._v25RestWrap = true;
              var old = b.onclick;
              b.onclick = function(){
                var out = old && old.apply(this, arguments);
                G.stamina = G.max_stamina;
                if (typeof updateStats === "function") updateStats();
                return out;
              };
            }
          });
        } catch(e){}
      },0);
      return ret;
    };
  }

  if (orig.help_screen) {
    help_screen = function(){
      if (typeof clearOutput === "function") clearOutput();
      if (typeof showBattlePanel === "function") showBattlePanel(false);
      safePrint("HELP — SKILL & SPELL SYSTEM", "highlight");
      safePrint("Physical Skills use Stamina. Magic Spells use Mana. Passive and Intrinsic abilities are always-on traits.", "narrator");
      safePrint("Ranks: Intrinsic, Common, Extra, Unique, Ultimate.", "info");
      safePrint("Tiers: Tier 10 is basic. Tier 1 is ultimate/world-class.", "info");
      safePrint("Cooldowns tick down at the start of your turns. Stamina regenerates each turn; Mana is slower and mainly returns through rest, items, or special spells.", "info");
      showChoices([
        ["📖 Skill & Spell Screen", skill_screen],
        ["📚 Ability Library", spell_shop_selector],
        ["← Town Center", town_center]
      ]);
    };
  }

  if (orig.updates_screen) {
    updates_screen = function(){
      var ret = orig.updates_screen.apply(this, arguments);
      try {
        var card = document.createElement("div");
        card.className = "update-card";
        card.innerHTML =
          '<div class="update-card-title">v0.25 — Skill & Spell System Redo</div>' +
          '<div class="update-card-date">Ability System Update</div>' +
          '<ul>' +
          '<li>Added stamina bar between HP and MP.</li>' +
          '<li>Split abilities into Physical Skills and Magic Spells.</li>' +
          '<li>Added rank system: Intrinsic, Common, Extra, Unique, Ultimate.</li>' +
          '<li>Added Tier 1–10 system where lower tier number is stronger.</li>' +
          '<li>Added stamina costs, mana costs, cooldowns, tags, requirements, and new shop categories.</li>' +
          '</ul>';
        if ($ch && $ch.firstChild) $ch.insertBefore(card, $ch.firstChild);
        else if ($ch) $ch.appendChild(card);
      } catch(e){}
      return ret;
    };
  }

  function injectSettingsShortcut(){
    var panel = document.getElementById("settings-panel");
    if (!panel || document.getElementById("v25-skill-spell-settings")) return;
    var sec = document.createElement("div");
    sec.className = "sp-section";
    sec.id = "v25-skill-spell-settings";
    sec.innerHTML = '<h3>Skill & Spell System</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">v0.25 splits abilities into stamina Physical Skills and mana Magic Spells.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); skill_screen()">📖 Skill/Spell Screen</button><button class="sp-btn" onclick="closeSettingsPanel(); spell_shop_selector()">📚 Ability Library</button></div>';
    var saveSec = Array.prototype.slice.call(panel.querySelectorAll(".sp-section")).find(function(s){ return /Save \/ Load/i.test(s.textContent || ""); });
    if (saveSec) panel.insertBefore(sec, saveSec);
    else panel.appendChild(sec);
  }

  // Startup
  addStyle();
  ensureAbilityState();
  injectSettingsShortcut();
  if (typeof applyStats === "function") applyStats();
  G.stamina = Math.min(G.max_stamina, G.stamina || G.max_stamina);
  if (typeof updateStats === "function") updateStats();
})();
