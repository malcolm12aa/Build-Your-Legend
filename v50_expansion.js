(function installBuildYourLegendV50(){
  'use strict';

  var VERSION = 'v0.50-systems-expansion';
  var old = {
    town_center: typeof town_center === 'function' ? town_center : null,
    character_screen: typeof character_screen === 'function' ? character_screen : null,
    shops: typeof shops === 'function' ? shops : null,
    recruitment_hall: typeof recruitment_hall === 'function' ? recruitment_hall : null,
    updates_screen: typeof updates_screen === 'function' ? updates_screen : null,
    startBattle: typeof startBattle === 'function' ? startBattle : null,
    updateBattlePanel: typeof updateBattlePanel === 'function' ? updateBattlePanel : null,
    enemyTurn: typeof enemyTurn === 'function' ? enemyTurn : null,
    winBattle: typeof winBattle === 'function' ? winBattle : null,
    saveGame: typeof saveGame === 'function' ? saveGame : null,
    loadGame: typeof loadGame === 'function' ? loadGame : null,
    pick_race: typeof pick_race === 'function' ? pick_race : null,
    physical_skill_shop: typeof physical_skill_shop === 'function' ? physical_skill_shop : null,
    magic_spell_shop: typeof magic_spell_shop === 'function' ? magic_spell_shop : null,
    skill_screen: typeof skill_screen === 'function' ? skill_screen : null,
    map_screen: typeof map_screen === 'function' ? map_screen : null,
    raid_map_screen: typeof raid_map_screen === 'function' ? raid_map_screen : null,
    show_map: typeof show_map === 'function' ? show_map : null,
    applyStats: typeof applyStats === 'function' ? applyStats : null,
    updateStats: typeof updateStats === 'function' ? updateStats : null
  };

  function $(id){ return document.getElementById(id); }
  function qsa(sel, root){ return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(x){ return String(x == null ? '' : x).replace(/[&<>"']/g, function(c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; }); }
  function cap(s){ return String(s||'').replace(/[_-]/g,' ').replace(/\b\w/g, function(c){ return c.toUpperCase(); }); }
  function slug(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,''); }
  function clamp(n,a,b){ return Math.max(a, Math.min(b, n)); }
  function chance(p){ return Math.random() < p; }
  function pick(arr){ return arr[Math.floor(Math.random() * arr.length)]; }
  function isFn(fn){ return typeof fn === 'function'; }
  function say(text, cls){ try { print(text, cls || 'narrator'); } catch(e){} }
  function clear(){ try { clearOutput(); } catch(e){} }
  function safeChoices(list){ try { showChoices(list); renameTownCenterText(); } catch(e){} }
  function showCard(html){ if (!$('output')) return; var d = document.createElement('div'); d.className = 'v50-card'; d.innerHTML = html; $('output').appendChild(d); }

  function addStyle(){
    if ($('v50-style')) return;
    var st = document.createElement('style');
    st.id = 'v50-style';
    st.textContent = `
      .v50-card{border:1px solid #224062;background:linear-gradient(180deg,#071220,#050810);padding:10px 12px;margin:9px 0;line-height:1.55}
      .v50-title{color:#e8c84a;font-size:14px;font-weight:900;letter-spacing:.6px}
      .v50-sub{color:#8fb0cd;font-size:11px;margin-top:3px}
      .v50-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
      .v50-mini{border:1px solid #18324c;background:#070d15;padding:8px;font-size:11px;color:#bdd0e4}
      .v50-mini b,.v50-card b{color:#e8c84a}
      .v50-row{display:flex;justify-content:space-between;gap:10px;padding:4px 0;border-top:1px solid #132334;font-size:11px;color:#bdd0e4}
      .v50-row:first-child{border-top:0}
      .v50-chip{display:inline-block;padding:2px 7px;margin:2px 5px 0 0;border:1px solid rgba(232,200,74,.28);background:rgba(232,200,74,.08);color:#e8c84a;font-size:10px}
      .v50-chip.alt{border-color:rgba(114,201,255,.28);background:rgba(114,201,255,.08);color:#72c9ff}
      .v50-bars{margin-top:6px}
      .v50-bar{margin:6px 0}
      .v50-barlabel{font-size:10px;color:#8fb0cd;margin-bottom:2px}
      .v50-track{height:8px;border:1px solid #18324c;background:#05070c;overflow:hidden}
      .v50-fill{height:100%;background:linear-gradient(90deg,#1f4d7a,#e8c84a)}
      .v50-badge{display:inline-block;padding:2px 7px;margin:2px 4px 0 0;background:#0b1624;border:1px solid #193451;color:#89add2;font-size:10px}
      .v50-intent{font-size:10px;color:#ffd166;margin-top:3px;line-height:1.35}
      .v50-hub{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
      .v50-hub button{white-space:pre-wrap}
      @media(max-width:640px){.v50-grid,.v50-hub{grid-template-columns:1fr}}
    `;
    document.head.appendChild(st);
  }

  // ------------------------------------------------------------
  // Data builders
  // ------------------------------------------------------------
  var DIFFICULTY_DATA = {
    Story:{enemyHp:0.85, enemyAtk:0.85, rewards:0.9, desc:'Easier enemies and lighter map pressure.'},
    Normal:{enemyHp:1, enemyAtk:1, rewards:1, desc:'Standard balance.'},
    Hard:{enemyHp:1.15, enemyAtk:1.15, rewards:1.15, desc:'Tougher enemies and sharper scaling.'},
    Legend:{enemyHp:1.28, enemyAtk:1.22, rewards:1.35, desc:'Hard fights with better rewards.'},
    Roguelike:{enemyHp:1.2, enemyAtk:1.25, rewards:1.45, desc:'Harsh tower rules, stronger rewards, heavier attrition.'}
  };

  var TOWER_DATA = [
    {id:'ember', name:'Ember Tower', level:'Lv. 1–20', theme:'Fire / Warriors', modifier:'Scorched Air', desc:'A beginner-friendly tower full of burning foes, sword trials, and smithing drops.', reward:'Fire materials · sword mastery · burn quests'},
    {id:'tidal', name:'Tidal Tower', level:'Lv. 15–35', theme:'Water / Healing', modifier:'Rain', desc:'A wet tower of healers, spirits, and tide beasts. Good for staffs and healing mastery.', reward:'Water materials · healer gear · recovery items'},
    {id:'storm', name:'Storm Tower', level:'Lv. 30–50', theme:'Wind / Lightning', modifier:'Mana Storm', desc:'Fast enemies, magic bursts, and airborne threats.', reward:'Lightning drops · wand mastery · speed gear'},
    {id:'shadow', name:'Shadow Tower', level:'Lv. 45–65', theme:'Dark / Rogue', modifier:'Darkness', desc:'An assassin-heavy tower with curses, ambushes, and hidden routes.', reward:'Dark mats · dagger mastery · stealth rewards'},
    {id:'celestial', name:'Celestial Tower', level:'Lv. 60–80', theme:'Holy / Barrier', modifier:'Sacred Ground', desc:'Holy guardians, barrier mages, and boss gauntlets.', reward:'Holy materials · shield/staff rewards · boss unlocks'},
    {id:'world_crown', name:'World-Crown Spire', level:'Lv. 80–100', theme:'Mixed / Endgame', modifier:'World Flux', desc:'Late-game mixed-element tower with elite bosses and mythic loot.', reward:'World-Class drops · identity titles · ultimate unlocks'}
  ];

  var MAP_EVENTS = [
    {id:'merchant', name:'Traveling Merchant', text:'A wandering merchant offers supplies and strange relics.'},
    {id:'treasure', name:'Treasure Chest', text:'A chest rests in the shadows. It might contain gold, gear, or materials.'},
    {id:'ambush', name:'Ambush', text:'Enemies spring from cover and force a quick battle.'},
    {id:'shrine', name:'Shrine', text:'A shrine radiates power. You can pray for recovery or mastery growth.'},
    {id:'recruit', name:'Wandering Recruit', text:'A potential ally offers to travel with you if you prove yourself.'},
    {id:'weather', name:'Weather Shift', text:'The air changes suddenly, strengthening some techniques and weakening others.'},
    {id:'secret', name:'Secret Path', text:'A hidden route offers a safer path or a stronger reward.'},
    {id:'warning', name:'Boss Warning', text:'The area rumbles. A stronger enemy is close.'},
    {id:'altar', name:'Cursed Altar', text:'Dark power flows from the altar. Risk and reward are both high.'},
    {id:'master', name:'Training Master', text:'A seasoned warrior or mage offers temporary training.'},
    {id:'library', name:'Ancient Library', text:'Old tomes grant insight into spell schools and legendary builds.'}
  ];

  var TITLE_POOL = [
    {id:'slayer', name:'Slayer', cond:function(){ return (G.achievements && G.achievements.totalKills || 0) >= 25; }, bonus:'Small bonus vs bosses'},
    {id:'scholar', name:'Scholar', cond:function(){ return totalSpellMastery() >= 12; }, bonus:'Small mana bonus'},
    {id:'seeker', name:'Seeker', cond:function(){ return completedQuestCount() >= 3; }, bonus:'Small discovery bonus'},
    {id:'veteran', name:'Veteran', cond:function(){ return (G.total_lv || 0) >= 20; }, bonus:'Small all-stat bonus'},
    {id:'legend', name:'Legend', cond:function(){ return (G.total_lv || 0) >= 50; }, bonus:'Improved rewards'},
    {id:'world_crowned', name:'World-Crowned', cond:function(){ return (G.tower_clears && G.tower_clears.world_crown || 0) >= 1; }, bonus:'Build identity aura'}
  ];

  function makePhysicalGroup(spec){
    return [
      {id:'v50_'+slug(spec.weapon)+'_1', name:spec.prefix+' Initiation', kind:'skill', rank:'Common', tier:10, resource:'stamina', cost:6, cooldown:1, weapon:[spec.weapon,'Universal'], school:null, group:spec.weapon, roles:spec.roles, description:'A basic '+spec.weapon.toLowerCase()+' technique that starts this weapon path.', tags:['Physical','Starter',spec.weapon], power:30},
      {id:'v50_'+slug(spec.weapon)+'_2', name:spec.prefix+' Rush', kind:'skill', rank:'Common', tier:8, resource:'stamina', cost:10, cooldown:2, weapon:[spec.weapon,'Universal'], group:spec.weapon, roles:spec.roles, description:'A faster pressure skill for aggressive turns.', tags:['Physical','Burst',spec.weapon], power:42},
      {id:'v50_'+slug(spec.weapon)+'_3', name:spec.prefix+' Crest Art', kind:'skill', rank:'Extra', tier:6, resource:'stamina', cost:15, cooldown:3, weapon:[spec.weapon,'Universal'], group:spec.weapon, roles:spec.roles, description:'A stronger signature art for skilled users.', tags:['Physical','Extra',spec.weapon], power:58},
      {id:'v50_'+slug(spec.weapon)+'_4', name:spec.unique, kind:'skill', rank:'Unique', tier:3, resource:'stamina', cost:22, cooldown:4, weapon:[spec.weapon,'Universal'], group:spec.weapon, roles:spec.roles, description:'A rare technique with strict build requirements.', tags:['Physical','Unique',spec.weapon], power:82, requirements:[{type:'known',id:'v50_'+slug(spec.weapon)+'_3'},{type:'totalLevel',value:18}]},
      {id:'v50_'+slug(spec.weapon)+'_5', name:spec.ultimate, kind:'skill', rank:'Ultimate', tier:1, resource:'stamina', cost:30, cooldown:5, weapon:[spec.weapon,'Universal'], group:spec.weapon, roles:spec.roles, description:'The ultimate expression of '+spec.weapon.toLowerCase()+' mastery.', tags:['Physical','Ultimate',spec.weapon], power:110, requirements:[{type:'known',id:'v50_'+slug(spec.weapon)+'_4'},{type:'totalLevel',value:35}]}
    ];
  }

  function makeMagicGroup(spec){
    return [
      {id:'v50_'+slug(spec.school)+'_1', name:spec.prefix+' Spark', kind:'spell', rank:'Common', tier:10, resource:'mana', cost:7, cooldown:1, school:spec.school, magicWeapon:spec.magicWeapon, roles:spec.roles, description:'A starter '+spec.school.toLowerCase()+' spell.', tags:['Magic','Starter',spec.school], power:28},
      {id:'v50_'+slug(spec.school)+'_2', name:spec.prefix+' Wave', kind:'spell', rank:'Common', tier:8, resource:'mana', cost:11, cooldown:2, school:spec.school, magicWeapon:spec.magicWeapon, roles:spec.roles, description:'A broader school spell with better scaling.', tags:['Magic','Burst',spec.school], power:42},
      {id:'v50_'+slug(spec.school)+'_3', name:spec.prefix+' Sigil', kind:'spell', rank:'Extra', tier:6, resource:'mana', cost:16, cooldown:3, school:spec.school, magicWeapon:spec.magicWeapon, roles:spec.roles, description:'A specialized spell for dedicated casters.', tags:['Magic','Extra',spec.school], power:60},
      {id:'v50_'+slug(spec.school)+'_4', name:spec.unique, kind:'spell', rank:'Unique', tier:3, resource:'mana', cost:24, cooldown:4, school:spec.school, magicWeapon:spec.magicWeapon, roles:spec.roles, description:'A rare spell with build requirements.', tags:['Magic','Unique',spec.school], power:86, requirements:[{type:'known',id:'v50_'+slug(spec.school)+'_3'},{type:'totalLevel',value:18}]},
      {id:'v50_'+slug(spec.school)+'_5', name:spec.ultimate, kind:'spell', rank:'Ultimate', tier:1, resource:'mana', cost:34, cooldown:5, school:spec.school, magicWeapon:spec.magicWeapon, roles:spec.roles, description:'The ultimate spell of the '+spec.school.toLowerCase()+' school.', tags:['Magic','Ultimate',spec.school], power:118, requirements:[{type:'known',id:'v50_'+slug(spec.school)+'_4'},{type:'totalLevel',value:35}]}
    ];
  }

  var NEW_PHYSICAL_ABILITIES = [].concat(
    makePhysicalGroup({weapon:'Sword', prefix:'Blade', unique:'Kingsguard Severance', ultimate:'Worldsplitter Edge', roles:['warrior','knight','hybrid']}),
    makePhysicalGroup({weapon:'Axe', prefix:'Waraxe', unique:'Bloodbreak Maul', ultimate:'Titan Rend Execution', roles:['warrior','berserker','hybrid']}),
    makePhysicalGroup({weapon:'Spear', prefix:'Lancer', unique:'Skypierce Rotation', ultimate:'Heaven-Piercing Phalanx', roles:['warrior','knight','hybrid']}),
    makePhysicalGroup({weapon:'Dagger', prefix:'Shadowfang', unique:'Phantom Step Art', ultimate:'Night-Crowned Assassination', roles:['rogue','hybrid']}),
    makePhysicalGroup({weapon:'Bow', prefix:'Longshot', unique:'Stormfeather Volley', ultimate:'Starfall Arrow Dominion', roles:['archer','rogue','hybrid']}),
    makePhysicalGroup({weapon:'Shield', prefix:'Bulwark', unique:'Guardian Wall Counter', ultimate:'World Bastion Protocol', roles:['knight','tank','hybrid']}),
    makePhysicalGroup({weapon:'Staff', prefix:'Mystic Staff', unique:'Spellstaff Breaker', ultimate:'Grand Magus Orbit', roles:['mage','cleric','hybrid']}),
    makePhysicalGroup({weapon:'Unarmed', prefix:'Iron Fist', unique:'Heavenstep Combo', ultimate:'Worldbreaker Martial Soul', roles:['monk','rogue','hybrid']}),
    makePhysicalGroup({weapon:'Heavy Weapon', prefix:'Colossus', unique:'Siegebreak Overrun', ultimate:'Mountain-Crushing Finale', roles:['warrior','tank']}),
    makePhysicalGroup({weapon:'Catalyst', prefix:'Focus Core', unique:'Arcflash Conductor', ultimate:'Cosmic Catalyst Surge', roles:['mage','hybrid']})
  );

  var NEW_MAGIC_ABILITIES = [].concat(
    makeMagicGroup({school:'Fire', prefix:'Flame', unique:'World Flame Sigil', ultimate:'Phoenix Crown Apocalypse', magicWeapon:['Staff','Wand','Catalyst'], roles:['mage','cleric','hybrid']}),
    makeMagicGroup({school:'Ice', prefix:'Frost', unique:'Absolute Zero Seal', ultimate:'Eternal Glacier Palace', magicWeapon:['Staff','Wand','Catalyst'], roles:['mage','hybrid']}),
    makeMagicGroup({school:'Lightning', prefix:'Volt', unique:'Emperor Thunder Circuit', ultimate:'Storm Kingdom Descent', magicWeapon:['Staff','Wand','Catalyst'], roles:['mage','hybrid']}),
    makeMagicGroup({school:'Earth', prefix:'Stone', unique:'Kingdom Bedrock Ward', ultimate:'World Pillar Genesis', magicWeapon:['Staff','Catalyst'], roles:['mage','cleric','hybrid']}),
    makeMagicGroup({school:'Wind', prefix:'Gale', unique:'Phantom Tempest Step', ultimate:'Sky Dominion Hurricane', magicWeapon:['Staff','Wand'], roles:['mage','archer','hybrid']}),
    makeMagicGroup({school:'Water', prefix:'Tide', unique:'Abyssal Fountain Rite', ultimate:'Ocean Throne Deluge', magicWeapon:['Staff','Wand'], roles:['mage','cleric','hybrid']}),
    makeMagicGroup({school:'Holy', prefix:'Radiant', unique:'Saint Halo Decree', ultimate:'World Cathedral Miracle', magicWeapon:['Staff','Wand','Catalyst'], roles:['cleric','paladin','mage']}),
    makeMagicGroup({school:'Dark', prefix:'Shade', unique:'Abyss Sovereign Mark', ultimate:'Night Emperor Cataclysm', magicWeapon:['Staff','Wand','Catalyst'], roles:['mage','rogue','hybrid']}),
    makeMagicGroup({school:'Arcane', prefix:'Aether', unique:'Astral Code Archive', ultimate:'World Script Overwrite', magicWeapon:['Staff','Wand','Catalyst'], roles:['mage','hybrid']}),
    makeMagicGroup({school:'Healing', prefix:'Mend', unique:'Grand Vital Liturgy', ultimate:'Legend Rebirth Canon', magicWeapon:['Staff','Wand','Catalyst'], roles:['cleric','mage','hybrid']})
  );

  var EXTRA_SCHOOLS = ['Barrier','Curse','Summoning'];

  var INTRINSIC_ABILITIES = [
    {id:'v50_intrinsic_primal_body', name:'Primal Body', kind:'skill', rank:'Intrinsic', tier:7, resource:'passive', cost:0, cooldown:0, tags:['Intrinsic','Passive'], description:'A racial body trait that boosts physical resilience.', passive:{hp:10, phy_def:2}},
    {id:'v50_intrinsic_arcane_core', name:'Arcane Core', kind:'spell', rank:'Intrinsic', tier:7, resource:'passive', cost:0, cooldown:0, tags:['Intrinsic','Passive'], description:'A racial mana core that boosts spell performance.', passive:{max_mp:12, mag_atk:3}},
    {id:'v50_intrinsic_hunter_instinct', name:'Hunter Instinct', kind:'skill', rank:'Intrinsic', tier:8, resource:'passive', cost:0, cooldown:0, tags:['Intrinsic','Passive'], description:'Sharpens initiative and pursuit.', passive:{agi:3, phy_atk:1}},
    {id:'v50_intrinsic_holy_breath', name:'Holy Breath', kind:'spell', rank:'Intrinsic', tier:7, resource:'mana', cost:12, cooldown:3, school:'Holy', tags:['Intrinsic','Holy'], description:'A racial holy burst usable from the start.'},
    {id:'v50_intrinsic_shadow_skin', name:'Shadow Skin', kind:'skill', rank:'Intrinsic', tier:7, resource:'passive', cost:0, cooldown:0, tags:['Intrinsic','Passive'], description:'Improves resistance and stealth.', passive:{resist:2, agi:2}},
    {id:'v50_intrinsic_dragon_breath', name:'Dragon Breath', kind:'spell', rank:'Intrinsic', tier:6, resource:'mana', cost:16, cooldown:3, school:'Fire', tags:['Intrinsic','Fire'], description:'A racial cone of elemental force.'}
  ];

  var ALL_NEW_ABILITIES = NEW_PHYSICAL_ABILITIES.concat(NEW_MAGIC_ABILITIES).concat(INTRINSIC_ABILITIES);
  window.BYL_V50_ABILITIES = ALL_NEW_ABILITIES;

  var SETS = [
    {id:'ember_knight', name:'Ember Knight Set', pieces:['Helm','Chest','Arms','Legs'], bonus:'Burn resistance + sword damage', source:'Ember Tower', build:'Warrior / Knight / Fire hybrid'},
    {id:'tideseer', name:'Tideseer Set', pieces:['Circlet','Robe','Gloves','Boots'], bonus:'Healing boost + mana sustain', source:'Tidal Tower', build:'Cleric / Water / Healing'},
    {id:'shadow_hunt', name:'Shadow Hunt Set', pieces:['Mask','Cloak','Bracers','Greaves'], bonus:'Agility + crit pressure', source:'Shadow Tower', build:'Rogue / Bow / Dagger'},
    {id:'celestial_guard', name:'Celestial Guard Set', pieces:['Crown','Armor','Gauntlets','Sabatons'], bonus:'Barrier + holy defense', source:'Celestial Tower', build:'Holy Knight / Cleric'},
    {id:'world_magus', name:'World Magus Set', pieces:['Diadem','Vestment','Sleeves','Shoes'], bonus:'Ultimate spell boost', source:'World-Crown Spire', build:'Endgame caster'}
  ];

  var QUEST_TEMPLATES = {
    main:[
      {id:'main_hub_open', name:'First Legend Step', goal:'Clear any Battle Tower floor.', reward:'120 gold · 1 title progress', type:'tower_floor', target:1},
      {id:'main_identity', name:'Forge Your Identity', goal:'Unlock a build identity.', reward:'200 gold · title unlock', type:'build_identity', target:1}
    ],
    side:[
      {id:'side_buy_skill', name:'Expand Your Arsenal', goal:'Learn 3 new skills or spells.', reward:'90 gold · ability progress', type:'known_abilities', target:3},
      {id:'side_gear', name:'Armed Adventurer', goal:'Win 3 battles with a weapon equipped.', reward:'Iron Ore x3 · mastery xp', type:'battle_wins', target:3}
    ],
    daily:[
      {id:'daily_battle', name:'Daily Battle Drill', goal:'Win 2 battles.', reward:'60 gold', type:'battle_wins', target:2},
      {id:'daily_camp', name:'Daily Camp Routine', goal:'Use Camp once.', reward:'Meal ration', type:'camp_visit', target:1}
    ],
    race:[
      {id:'race_master', name:'Bloodline Trial', goal:'Use your race path to shape your build.', reward:'Race unlock progress', type:'total_level', target:10}
    ],
    job:[
      {id:'job_signature', name:'Signature Discipline', goal:'Reach weapon or spell mastery level 3.', reward:'Starter ability upgrade', type:'mastery_any', target:3}
    ],
    recruit:[
      {id:'recruit_bond', name:'Battle Companionship', goal:'Raise a recruit bond to Trusted Companion.', reward:'Bond bonus', type:'recruit_bond', target:2}
    ],
    hunting:[
      {id:'hunt_elite', name:'Elite Hunt', goal:'Defeat 5 tower enemies.', reward:'Material cache', type:'battle_wins', target:5}
    ],
    collection:[
      {id:'collect_set', name:'Set Collector', goal:'Own 2 tracked set pieces.', reward:'Set info cache', type:'set_pieces', target:2}
    ],
    boss:[
      {id:'boss_trial', name:'Boss Trial', goal:'Defeat 1 boss enemy.', reward:'Legend fragment', type:'boss_kills', target:1}
    ],
    secret:[
      {id:'secret_path', name:'Hidden Route', goal:'Trigger a Secret Path or Ancient Library event.', reward:'Secret quest progress', type:'special_event', target:1}
    ]
  };

  // ------------------------------------------------------------
  // State defaults and helpers
  // ------------------------------------------------------------
  function ensureObj(obj, key, fallback){ if (obj[key] == null) obj[key] = fallback; return obj[key]; }

  var _v50EnsuringState = false;
  function ensureV50State(){
    if (_v50EnsuringState) return;
    _v50EnsuringState = true;
    try {
      if (typeof ensureGameCollections === 'function') ensureGameCollections();
    ensureObj(G, 'save_meta', {}); G.save_meta.version = VERSION;
    ensureObj(G, 'difficulty', 'Normal');
    ensureObj(G, 'difficulty_selected', false);
    ensureObj(G, 'quest_log', {});
    ensureObj(G, 'quest_progress', {});
    ensureObj(G, 'quest_completed', {});
    ensureObj(G, 'weapon_mastery', {});
    ensureObj(G, 'spell_mastery', {});
    ensureObj(G, 'title_system', { unlocked: [], equipped: '' });
    ensureObj(G, 'build_identity', 'Unformed Adventurer');
    ensureObj(G, 'tower_clears', {});
    ensureObj(G, 'tower_progress', {});
    ensureObj(G, 'tower_run', null);
    ensureObj(G, 'materials', {});
    ensureObj(G, 'recruit_bonds', {});
    ensureObj(G, 'set_collection', {});
    ensureObj(G, 'encyclopedia_seen', {});
    ensureObj(G, 'unlock_tracker_seen', {});
    ensureObj(G, 'most_used_weapons', {});
    ensureObj(G, 'most_used_schools', {});
    ensureObj(G, 'most_used_skill_types', {});
    ensureObj(G, 'last_battle_summary', {});
    ensureObj(G, 'legend_flags', {});
    ensureObj(G, 'camp_visits', 0);
    ensureObj(G, 'crafting_stats', { forged:0, brewed:0 });
    ensureObj(G, 'known_v50_abilities', true);
    if (!Array.isArray(G.learned_abilities)) G.learned_abilities = [];
    if (!Array.isArray(G.jobs)) G.jobs = [];
    if (!Array.isArray(G.recruits)) G.recruits = [];

    ['Sword','Axe','Spear','Dagger','Bow','Shield','Staff','Unarmed','Heavy Weapon','Wand','Catalyst'].forEach(function(k){ if (typeof G.weapon_mastery[k] !== 'number') G.weapon_mastery[k] = 0; });
    ['Fire','Ice','Lightning','Earth','Wind','Water','Holy','Dark','Arcane','Healing','Barrier','Curse','Summoning'].forEach(function(k){ if (typeof G.spell_mastery[k] !== 'number') G.spell_mastery[k] = 0; });
    SETS.forEach(function(s){ if (!G.set_collection[s.id]) G.set_collection[s.id] = { owned:0, pieces:[], completed:false }; });
    Object.keys(QUEST_TEMPLATES).forEach(function(cat){ if (!G.quest_log[cat]) G.quest_log[cat] = {}; QUEST_TEMPLATES[cat].forEach(function(q){ if (!G.quest_log[cat][q.id]) G.quest_log[cat][q.id] = 'available'; if (typeof G.quest_progress[q.id] !== 'number') G.quest_progress[q.id] = 0; }); });
    TITLE_POOL.forEach(function(t){ if (t.cond() && G.title_system.unlocked.indexOf(t.id) < 0) G.title_system.unlocked.push(t.id); });
    ensureStarterAbilities();
    } finally {
      _v50EnsuringState = false;
    }
  }

  function inferWeaponType(){
    var w = G.weapon;
    var blob = (w ? (w.name || '') + ' ' + (w.type || '') + ' ' + (w.slot || '') : '').toLowerCase();
    if (/heavy|great|hammer|maul/.test(blob)) return 'Heavy Weapon';
    if (/axe/.test(blob)) return 'Axe';
    if (/spear|lance|halberd|pole/.test(blob)) return 'Spear';
    if (/dagger|knife|kunai/.test(blob)) return 'Dagger';
    if (/bow|arrow/.test(blob)) return 'Bow';
    if (/shield/.test(blob)) return 'Shield';
    if (/staff/.test(blob)) return 'Staff';
    if (/wand/.test(blob)) return 'Wand';
    if (/catalyst|focus|orb|talisman/.test(blob)) return 'Catalyst';
    if (/sword|blade|katana/.test(blob)) return 'Sword';
    return 'Unarmed';
  }

  function currentRaceName(){ return (typeof RACE_DATA !== 'undefined' && G.race_id && RACE_DATA[G.race_id]) ? RACE_DATA[G.race_id].name : 'Unknown'; }
  function currentJobNames(){ return (G.jobs || []).map(function(j){ return (typeof JOB_DATA !== 'undefined' && JOB_DATA[j.id]) ? JOB_DATA[j.id].name : ('Job '+j.id); }); }
  function currentMainJob(){ var arr = G.jobs || []; if (!arr.length || typeof JOB_DATA === 'undefined') return 'Adventurer'; var j = arr.slice().sort(function(a,b){ return (b.lv||0) - (a.lv||0); })[0]; return JOB_DATA[j.id] ? JOB_DATA[j.id].name : 'Adventurer'; }

  function inferRole(){
    var text = currentJobNames().join(' ').toLowerCase();
    if (/cleric|priest|saint|miko|healer|oracle/.test(text)) return 'Support';
    if (/mage|wizard|sorcerer|witch|warlock|necromancer/.test(text)) return 'Caster';
    if (/rogue|thief|assassin|ninja|scout/.test(text)) return 'Rogue';
    if (/knight|paladin|guardian|templar|tank/.test(text)) return 'Tank';
    if (/archer|hunter|ranger|sniper|gunner/.test(text)) return 'Ranged';
    if (/monk|martial/.test(text)) return 'Martial';
    return 'Warrior';
  }

  function getRaceIdentity(){
    var race = currentRaceName();
    var blob = race.toLowerCase();
    if (/dragon/.test(blob)) return { passive:'Dragon Scales (+DEF, +RES)', active:'Dragon Breath', evo:'Ancient drake evolution line', weakness:'Slower stamina recovery', unlock:'Reach high level and clear boss quests' };
    if (/elf|fairy|spirit/.test(blob)) return { passive:'Arcane Sight (+MAG, +SPECIAL)', active:'Arcane Core', evo:'Highborn mana evolution', weakness:'Lower HP', unlock:'Study spell schools and clear magic quests' };
    if (/demon|oni|devil/.test(blob)) return { passive:'Hellfire Affinity (+MAG, +ATK)', active:'Shadow Skin', evo:'Demonic ascension', weakness:'Holy vulnerability theme', unlock:'Dark quest chain and boss clears' };
    if (/beast|wolf|fox|cat|harpy|chimera|mink/.test(blob)) return { passive:'Predator Instinct (+AGI)', active:'Hunter Instinct', evo:'Alpha or mythic beast route', weakness:'Lower magic efficiency', unlock:'Hunting quest chain' };
    if (/undead|vampire|skeleton|zombie|ghost|wraith/.test(blob)) return { passive:'Deathless Frame (+HP, +RES)', active:'Shadow Skin', evo:'Deathlord or lich route', weakness:'Holy weakness theme', unlock:'Dark tower progression' };
    return { passive:'Balanced Lineage', active:'Primal Body', evo:'Race evolution through level milestones', weakness:'No extreme specialization', unlock:'Follow race quest and class path' };
  }

  function inferStarterAbilityIds(){
    var starters = [];
    var jobText = currentJobNames().join(' ').toLowerCase();
    if (/mage|wizard|sorcerer|witch|warlock/.test(jobText)) starters.push('v50_arcane_1');
    if (/cleric|priest|saint|miko|healer/.test(jobText)) starters.push('v50_healing_1');
    if (/knight|guardian|paladin|tank/.test(jobText)) starters.push('v50_shield_1');
    if (/rogue|assassin|thief|ninja|scout/.test(jobText)) starters.push('v50_dagger_1');
    if (/archer|hunter|ranger|sniper/.test(jobText)) starters.push('v50_bow_1');
    if (/monk|martial|brawler/.test(jobText)) starters.push('v50_unarmed_1');
    if (/lancer|spearman|dragoon/.test(jobText)) starters.push('v50_spear_1');
    if (/warrior|fighter|soldier|samurai/.test(jobText)) starters.push('v50_sword_1');
    if (!starters.length) starters.push('v50_sword_1');

    var raceBlob = currentRaceName().toLowerCase();
    if (/dragon/.test(raceBlob)) starters.push('v50_intrinsic_dragon_breath');
    else if (/elf|fairy|spirit/.test(raceBlob)) starters.push('v50_intrinsic_arcane_core');
    else if (/demon|undead/.test(raceBlob)) starters.push('v50_intrinsic_shadow_skin');
    else if (/beast|wolf|fox|cat|chimera/.test(raceBlob)) starters.push('v50_intrinsic_hunter_instinct');
    else starters.push('v50_intrinsic_primal_body');
    return starters;
  }

  function ensureStarterAbilities(){
    inferStarterAbilityIds().forEach(function(id){ if (G.learned_abilities.indexOf(id) < 0) G.learned_abilities.push(id); });
  }

  function allKnownAbilities(){
    var base = Array.isArray(window.BYL_ABILITIES_V26) ? window.BYL_ABILITIES_V26.slice() : [];
    var combo = base.concat(ALL_NEW_ABILITIES);
    var map = {};
    combo.forEach(function(a){ map[a.id] = a; });
    return { list: Object.keys(map).map(function(k){ return map[k]; }), map: map };
  }

  function abilityById(id){ var pack = allKnownAbilities(); return pack.map[id] || null; }
  function knownAbilityObjects(){ return G.learned_abilities.map(abilityById).filter(Boolean); }
  function knownByType(type){ return knownAbilityObjects().filter(function(a){ return a.kind === type; }); }

  function abilityReqMet(req){
    if (!req) return true;
    if (req.type === 'known') return G.learned_abilities.indexOf(req.id) >= 0;
    if (req.type === 'totalLevel') return (G.total_lv || 0) >= req.value;
    return false;
  }
  function abilityUnlocked(a){ return !a.requirements || a.requirements.every(abilityReqMet); }
  function learnAbility(id){ if (G.learned_abilities.indexOf(id) < 0) G.learned_abilities.push(id); }

  function totalSpellMastery(){ return Object.keys(G.spell_mastery || {}).reduce(function(s,k){ return s + (G.spell_mastery[k] || 0); }, 0); }
  function completedQuestCount(){ return Object.keys(G.quest_completed || {}).filter(function(k){ return G.quest_completed[k]; }).length; }

  function refreshBuildIdentity(){
    var strongest = [
      ['STR/ATK', G.phy_atk || 0],
      ['DEF', G.phy_def || 0],
      ['AGI', G.agi || 0],
      ['MAG', G.mag_atk || 0],
      ['RES', G.resist || 0],
      ['SPECIAL', G.special || 0]
    ].sort(function(a,b){ return b[1]-a[1]; });
    var role = inferRole();
    var weapon = inferWeaponType();
    var bestSchool = Object.keys(G.spell_mastery || {}).sort(function(a,b){ return (G.spell_mastery[b]||0) - (G.spell_mastery[a]||0); })[0] || 'Arcane';
    var label = 'Adventurer';
    if (role === 'Tank' && /Sword|Shield/.test(weapon)) label = 'Sword Guardian';
    else if (role === 'Caster' && bestSchool === 'Fire') label = 'Fire Mage';
    else if (role === 'Rogue' && /Dagger|Bow/.test(weapon)) label = 'Shadow Rogue';
    else if (role === 'Tank' && bestSchool === 'Holy') label = 'Holy Knight';
    else if (role === 'Warrior' && /Axe|Heavy Weapon/.test(weapon) && /dragon/i.test(currentRaceName())) label = 'Dragon Berserker';
    else if (role === 'Ranged' && bestSchool === 'Arcane') label = 'Arcane Archer';
    else if (bestSchool === 'Dark') label = 'Blood Reaver';
    else if (role === 'Support' && bestSchool === 'Lightning') label = 'Storm Cleric';
    else label = role + ' ' + weapon;
    G.build_identity = label;
    G.legend_flags.build_identity = true;
    TITLE_POOL.forEach(function(t){ if (t.cond() && G.title_system.unlocked.indexOf(t.id) < 0) G.title_system.unlocked.push(t.id); });
  }

  // ------------------------------------------------------------
  // Text replacement / hooks
  // ------------------------------------------------------------
  function renameTownCenterText(root){
    root = root || document;
    qsa('button, p, div, span, h1, h2, h3, h4, h5, h6', root).forEach(function(el){
      if (el.children.length) return;
      if (!el.textContent) return;
      el.textContent = el.textContent.replace(/Town Center/g, 'Hub World');
    });
  }

  function afterScreen(){ setTimeout(function(){ renameTownCenterText(); }, 0); }

  // ------------------------------------------------------------
  // Difficulty selection
  // ------------------------------------------------------------
  function difficulty_select_screen(next){
    ensureV50State();
    clear();
    say('— SELECT DIFFICULTY —', 'highlight');
    say('Choose your starting difficulty. You can still view it later from Character Status.', 'narrator');
    showCard('<div class="v50-title">Difficulty Settings</div><div class="v50-sub">Story is easier, Legend is richer, Roguelike is harsher.</div>');
    safeChoices(Object.keys(DIFFICULTY_DATA).map(function(key){
      return [key + ' — ' + DIFFICULTY_DATA[key].desc, function(){ G.difficulty = key; G.difficulty_selected = true; if (isFn(next)) next(); else if (old.pick_race) old.pick_race(); }];
    }).concat([[ '← Main Menu', function(){ if (typeof main_menu === 'function') main_menu(); } ]]));
  }

  // ------------------------------------------------------------
  // Hub World and main screens
  // ------------------------------------------------------------
  function hub_world_screen(){
    ensureV50State();
    clear();
    refreshBuildIdentity();
    say('— HUB WORLD —', 'highlight');
    say('This is the new central travel and progression hub. From here, you can enter Battle Towers, take quests, camp, craft, and review your build.', 'narrator');
    var rid = getRaceIdentity();
    showCard(
      '<div class="v50-title">'+esc((G.title_system.equipped ? ('['+getTitleName(G.title_system.equipped)+'] ') : '') + (G.name || 'Unnamed Hero'))+'</div>'+
      '<div class="v50-sub">Build Identity: <b>'+esc(G.build_identity)+'</b> · Difficulty: <b>'+esc(G.difficulty)+'</b> · Race: <b>'+esc(currentRaceName())+'</b> · Main Job: <b>'+esc(currentMainJob())+'</b></div>'+
      '<div class="v50-grid">'+
        '<div class="v50-mini"><b>Race Passive</b><br>'+esc(rid.passive)+'</div>'+
        '<div class="v50-mini"><b>Intrinsic Active</b><br>'+esc(rid.active)+'</div>'+
        '<div class="v50-mini"><b>Evolution Bonus</b><br>'+esc(rid.evo)+'</div>'+
        '<div class="v50-mini"><b>Weakness / Limitation</b><br>'+esc(rid.weakness)+'</div>'+
      '</div>'
    );
    safeChoices([
      ['🗼 Battle Towers', battle_towers_screen],
      ['📜 Quest Board', quest_board_screen],
      ['📊 Character Status', character_status_v50],
      ['🛒 Shops', function(){ if (old.shops) old.shops(); else hub_world_screen(); afterScreen(); }],
      ['🤝 Recruitment Hall', function(){ if (old.recruitment_hall) old.recruitment_hall(); else hub_world_screen(); afterScreen(); }],
      ['🏕 Camp', camp_screen],
      ['⚒ Crafting / Forge', crafting_hub_screen],
      ['🧰 Equipment', function(){ if (typeof equipment_screen === 'function') equipment_screen(); else hub_world_screen(); afterScreen(); }],
      ['🧩 Set Collection', set_collection_screen],
      ['🧠 Build Summary', build_summary_screen],
      ['🔓 Unlock Tracker', unlock_tracker_screen],
      ['📘 Encyclopedia', encyclopedia_screen],
      ['💾 Save / Load Manager', function(){ if (typeof save_load_manager_screen === 'function') save_load_manager_screen(); else hub_world_screen(); afterScreen(); }],
      ['📝 Updates', function(){ if (old.updates_screen) old.updates_screen(); else hub_world_screen(); afterScreen(); }]
    ]);
  }

  function battle_towers_screen(){
    ensureV50State();
    clear();
    say('— BATTLE TOWERS —', 'highlight');
    say('Battle Towers replace the old world-map flow with roguelike combat paths.', 'narrator');
    TOWER_DATA.forEach(function(t){
      showCard('<div class="v50-title">'+esc(t.name)+'</div><div class="v50-sub">'+esc(t.level)+' · '+esc(t.theme)+' · Modifier: <b>'+esc(t.modifier)+'</b></div><div class="v50-mini" style="margin-top:8px"><b>Description</b><br>'+esc(t.desc)+'</div><div class="v50-mini" style="margin-top:8px"><b>Rewards</b><br>'+esc(t.reward)+'</div>');
    });
    safeChoices(TOWER_DATA.map(function(t){ return ['Enter '+t.name, function(){ startTowerRun(t.id); }]; }).concat([[ '← Hub World', hub_world_screen ]]));
  }

  function startTowerRun(id){
    ensureV50State();
    var tower = TOWER_DATA.find(function(t){ return t.id === id; }) || TOWER_DATA[0];
    G.tower_run = { id:id, floor:1, battlesWon:0, eventsSeen:0, rewards:0 };
    clear();
    say('You enter '+tower.name+'. The run begins.', 'highlight');
    say('Roguelike rules: progression is floor-based and each floor can bring battles, events, or bosses.', 'narrator');
    safeChoices([
      ['Begin Floor 1', function(){ enterTowerFloor(); }],
      ['Leave Tower', function(){ G.tower_run = null; hub_world_screen(); }]
    ]);
  }

  function towerCurrent(){ return G.tower_run ? TOWER_DATA.find(function(t){ return t.id === G.tower_run.id; }) : null; }

  function enterTowerFloor(){
    ensureV50State();
    if (!G.tower_run) return battle_towers_screen();
    var tower = towerCurrent();
    clear();
    say('— '+tower.name.toUpperCase()+' · FLOOR '+G.tower_run.floor+' —', 'highlight');
    if (G.tower_run.floor % 5 === 0) {
      say('A boss presence can be felt ahead.', 'danger');
      startTowerBattle(true);
      return;
    }
    if (G.tower_run.floor % 3 === 0 && chance(0.55)) {
      var evt = pick(MAP_EVENTS);
      handleMapEvent(evt);
      return;
    }
    startTowerBattle(false);
  }

  function handleMapEvent(evt){
    ensureV50State();
    clear();
    say('— MAP EVENT —', 'highlight');
    say(evt.name + ': ' + evt.text, 'narrator');
    G.tower_run.eventsSeen++;
    if (evt.id === 'merchant') {
      G.gold += 40;
      say('You trade and gain 40 gold.', 'success');
      safeChoices([['Continue', function(){ G.tower_run.floor++; enterTowerFloor(); }], ['Return to Hub World', leaveTowerRun]]);
      return;
    }
    if (evt.id === 'treasure') {
      grantMaterials(['Iron Ore','Mana Crystal','Beast Hide'], 2);
      G.gold += 30;
      say('The chest grants gold and materials.', 'success');
      safeChoices([['Continue', function(){ G.tower_run.floor++; enterTowerFloor(); }], ['Return to Hub World', leaveTowerRun]]);
      return;
    }
    if (evt.id === 'shrine') {
      G.hp = G.max_hp; G.mp = G.max_mp; if (typeof G.max_stamina === 'number') G.stamina = G.max_stamina;
      say('The shrine restores your HP, Mana, and Stamina.', 'success');
      safeChoices([['Continue', function(){ G.tower_run.floor++; enterTowerFloor(); }], ['Return to Hub World', leaveTowerRun]]);
      return;
    }
    if (evt.id === 'master') {
      var wt = inferWeaponType(); G.weapon_mastery[wt] = (G.weapon_mastery[wt] || 0) + 1;
      say('Training raises '+wt+' mastery.', 'success');
      safeChoices([['Continue', function(){ G.tower_run.floor++; enterTowerFloor(); }], ['Return to Hub World', leaveTowerRun]]);
      return;
    }
    if (evt.id === 'library') {
      var school = pick(['Fire','Ice','Lightning','Arcane','Healing','Dark']);
      G.spell_mastery[school] = (G.spell_mastery[school] || 0) + 1;
      G.quest_progress.secret_path = (G.quest_progress.secret_path || 0) + 1;
      say('Ancient texts deepen your '+school+' school mastery.', 'success');
      safeChoices([['Continue', function(){ G.tower_run.floor++; enterTowerFloor(); }], ['Return to Hub World', leaveTowerRun]]);
      return;
    }
    if (evt.id === 'ambush') {
      say('The event turns into a sudden battle!', 'danger');
      startTowerBattle(false);
      return;
    }
    if (evt.id === 'recruit') {
      if (Array.isArray(G.recruits) && G.recruits.length) {
        var r = G.recruits[0]; G.recruit_bonds[r] = (G.recruit_bonds[r] || 0) + 1;
        say('A recruit interaction strengthens a bond.', 'success');
      } else {
        G.gold += 20; say('No recruit is with you, so you gain scouting information instead.', 'narrator');
      }
      safeChoices([['Continue', function(){ G.tower_run.floor++; enterTowerFloor(); }], ['Return to Hub World', leaveTowerRun]]);
      return;
    }
    // default: special path / warning / altar / weather
    if (evt.id === 'altar') { G.gold += 70; G.hp = Math.max(1, G.hp - Math.floor(G.max_hp * 0.15)); say('You sacrifice health for a reward cache.', 'danger'); }
    if (evt.id === 'warning') say('A boss waits deeper within.', 'danger');
    if (evt.id === 'weather') say('The next battle will carry a field modifier.', 'narrator');
    if (evt.id === 'secret') { G.quest_progress.secret_path = (G.quest_progress.secret_path || 0) + 1; say('You uncover a hidden route.', 'success'); }
    safeChoices([['Continue', function(){ G.tower_run.floor++; enterTowerFloor(); }], ['Return to Hub World', leaveTowerRun]]);
  }

  function buildTowerEnemy(floor, boss){
    var tower = towerCurrent() || TOWER_DATA[0];
    var baseLv = Math.max(1, floor * 2 + (boss ? 6 : 0));
    var hp = Math.floor(60 + floor * 14 + (boss ? 90 : 0));
    var atk = Math.floor(12 + floor * 3 + (boss ? 10 : 0));
    var namesByTower = {
      ember:['Ashhound','Flame Raider','Forge Sentinel','Ember Drake'],
      tidal:['Mist Spirit','Tide Guardian','Shell Knight','River Wisp'],
      storm:['Volt Harrier','Sky Rogue','Tempest Mage','Thunder Beast'],
      shadow:['Night Stalker','Curse Knife','Shade Beast','Eclipse Watcher'],
      celestial:['Halo Guard','Barrier Saint','Sunblade Warden','Sacred Beast'],
      world_crown:['World Judge','Mythic Ravager','Crown Warden','Apex Horror']
    };
    var nm = pick(namesByTower[tower.id] || namesByTower.ember);
    return {
      name:(boss ? ('Boss ' + nm) : nm),
      emoji: boss ? '👑' : '👹',
      hp: hp,
      atk: atk,
      exp: Math.floor(28 + floor * 9 + (boss ? 55 : 0)),
      gold: Math.floor(20 + floor * 7 + (boss ? 45 : 0)),
      isBoss: boss,
      lore: boss ? 'A powerful tower boss with layered mechanics.' : 'A tower enemy formed by the floor\'s theme.',
      moves:[
        {name:'Strike', status:null},
        {name:'Charged Blow', status:null},
        {name: boss ? 'Phase Skill' : 'Pressure Skill', status: chance(0.4) ? 'burn' : null, statusChance:0.22}
      ]
    };
  }

  function startTowerBattle(isBoss){
    ensureV50State();
    var floor = G.tower_run.floor;
    var enemies = isBoss ? [buildTowerEnemy(floor, true)] : [buildTowerEnemy(floor, false)];
    if (!isBoss && floor % 2 === 0) enemies.push(buildTowerEnemy(floor, false));
    _lastZone = tower_post_battle_screen;
    old.startBattle ? old.startBattle(enemies) : startBattle(enemies);
  }

  function tower_post_battle_screen(){
    ensureV50State();
    if (!G.tower_run) return battle_towers_screen();
    clear();
    var tower = towerCurrent();
    say('— TOWER PROGRESSION —', 'highlight');
    say('You stand between floors in '+tower.name+'.', 'narrator');
    safeChoices([
      ['Continue Deeper', function(){ G.tower_run.floor++; enterTowerFloor(); }],
      ['Open Camp', camp_screen],
      ['Leave Tower', leaveTowerRun]
    ]);
  }

  function leaveTowerRun(){ G.tower_run = null; hub_world_screen(); }

  function quest_board_screen(){
    ensureV50State();
    clear();
    say('— QUEST BOARD —', 'highlight');
    say('Choose a quest category. Quests provide clear goals and progression rewards.', 'narrator');
    safeChoices(Object.keys(QUEST_TEMPLATES).map(function(cat){ return [cap(cat)+' Quests', function(){ quest_category_screen(cat); }]; }).concat([[ '← Hub World', hub_world_screen ]]));
  }

  function quest_category_screen(cat){
    ensureV50State();
    clear();
    say('— '+cap(cat).toUpperCase()+' QUESTS —', 'highlight');
    QUEST_TEMPLATES[cat].forEach(function(q){
      var prog = G.quest_progress[q.id] || 0;
      var status = G.quest_completed[q.id] ? 'Completed' : (G.quest_log[cat][q.id] || 'available');
      var pct = Math.min(100, Math.round((prog / q.target) * 100));
      showCard('<div class="v50-title">'+esc(q.name)+'</div><div class="v50-sub">'+esc(q.goal)+' · Reward: <b>'+esc(q.reward)+'</b></div><div class="v50-bars"><div class="v50-bar"><div class="v50-barlabel">Progress: '+prog+' / '+q.target+' · '+status+'</div><div class="v50-track"><div class="v50-fill" style="width:'+pct+'%"></div></div></div></div>');
    });
    safeChoices(QUEST_TEMPLATES[cat].map(function(q){
      return [ (G.quest_completed[q.id] ? '✓ ' : '') + q.name, function(){ claimOrTrackQuest(cat, q); } ];
    }).concat([[ '← Quest Board', quest_board_screen ]]));
  }

  function claimOrTrackQuest(cat, q){
    ensureV50State();
    var prog = G.quest_progress[q.id] || 0;
    if (!G.quest_completed[q.id] && prog >= q.target) {
      G.quest_completed[q.id] = true;
      G.gold += 75;
      say('Quest completed: '+q.name+'! Rewards granted.', 'success');
      if (q.type === 'boss_kills') grantMaterials(['Legend Fragment'], 1);
      if (q.type === 'mastery_any') grantRandomAbilityUpgrade();
      if (q.id === 'main_identity') refreshBuildIdentity();
    } else {
      say('Quest tracked: '+q.name+'.', 'narrator');
    }
    quest_category_screen(cat);
  }

  function camp_screen(){
    ensureV50State();
    clear();
    say('— CAMP —', 'highlight');
    say('Camp is separate from the Inn and supports recovery, bonding, and preparation.', 'narrator');
    showCard('<div class="v50-title">Camp Actions</div><div class="v50-grid"><div class="v50-mini"><b>Resting</b><br>Recover HP, Mana, and Stamina.</div><div class="v50-mini"><b>Recruits</b><br>Talk to recruits and raise bond levels.</div><div class="v50-mini"><b>Cooking</b><br>Gain temporary buffs from meals.</div><div class="v50-mini"><b>Training / Study</b><br>Practice weapon and spell mastery.</div></div>');
    safeChoices([
      ['🛌 Rest', function(){ G.hp = G.max_hp; G.mp = G.max_mp; if (typeof G.max_stamina === 'number') G.stamina = G.max_stamina; G.camp_visits++; G.quest_progress.daily_camp = 1; say('You rest and recover fully.', 'success'); camp_screen(); }],
      ['💬 Talk to Recruits', recruit_bond_screen],
      ['🍲 Cook Meal', cook_meal_screen],
      ['⚔ Train Weapon Mastery', train_weapon_mastery_screen],
      ['📚 Study Spell Mastery', study_spell_mastery_screen],
      ['📘 Review Codex', encyclopedia_screen],
      ['🗺 Prepare Next Map', function(){ if (G.tower_run) tower_post_battle_screen(); else battle_towers_screen(); }],
      ['← Hub World', hub_world_screen]
    ]);
  }

  function recruitBondLabel(v){ if (v >= 5) return 'Legend Companion'; if (v >= 4) return 'Oathbound'; if (v >= 3) return 'Battle Partner'; if (v >= 2) return 'Trusted Companion'; return 'Ally'; }
  function recruit_bond_screen(){
    ensureV50State();
    clear();
    say('— RECRUIT BONDS —', 'highlight');
    if (!G.recruits.length) { say('No recruits hired yet. Visit the Recruitment Hall first.', 'narrator'); return safeChoices([[ '← Camp', camp_screen ], ['← Hub World', hub_world_screen ]]); }
    G.recruits.forEach(function(id){
      var name = (typeof getRecruit === 'function' && getRecruit(id)) ? getRecruit(id).name : ('Recruit '+id);
      var bond = G.recruit_bonds[id] || 1;
      showCard('<div class="v50-title">'+esc(name)+'</div><div class="v50-sub">Bond Level: <b>'+bond+'</b> · Rank: <b>'+recruitBondLabel(bond)+'</b></div><div class="v50-mini" style="margin-top:8px"><b>Unlocks</b><br>Personal quests · stronger assists · passive bonuses · story scenes</div>');
    });
    var choices = G.recruits.map(function(id){
      var name = (typeof getRecruit === 'function' && getRecruit(id)) ? getRecruit(id).name : ('Recruit '+id);
      return ['Talk with '+name, function(){ G.recruit_bonds[id] = (G.recruit_bonds[id] || 1) + 1; G.quest_progress.recruit_bond = Math.max(G.quest_progress.recruit_bond || 0, G.recruit_bonds[id]); say(name+' bond increased to '+recruitBondLabel(G.recruit_bonds[id])+'.', 'success'); recruit_bond_screen(); }];
    });
    safeChoices(choices.concat([[ '← Camp', camp_screen ]]));
  }

  function cook_meal_screen(){
    ensureV50State();
    clear();
    say('— CAMP COOKING —', 'highlight');
    say('Meals give temporary prep buffs before the next push.', 'narrator');
    safeChoices([
      ['Hearty Stew (+HP focus)', function(){ G.hp = Math.min(G.max_hp, G.hp + Math.floor(G.max_hp * 0.2)); say('You eat a hearty stew and feel tougher.', 'success'); camp_screen(); }],
      ['Mana Tea (+Mana focus)', function(){ G.mp = Math.min(G.max_mp, G.mp + Math.floor(G.max_mp * 0.25)); say('Mana flows more smoothly after the tea.', 'success'); camp_screen(); }],
      ['Runner Meal (+Stamina focus)', function(){ if (typeof G.max_stamina === 'number') G.stamina = Math.min(G.max_stamina, (G.stamina || 0) + Math.floor(G.max_stamina * 0.3)); say('Your body feels lighter and faster.', 'success'); camp_screen(); }],
      ['← Camp', camp_screen]
    ]);
  }

  function train_weapon_mastery_screen(){
    ensureV50State();
    clear();
    say('— WEAPON TRAINING —', 'highlight');
    ['Sword','Axe','Spear','Dagger','Bow','Shield','Staff','Unarmed','Heavy Weapon','Wand','Catalyst'].forEach(function(w){ showCard('<div class="v50-row"><span>'+esc(w)+'</span><span>Mastery Lv. '+(G.weapon_mastery[w] || 0)+'</span></div>'); });
    safeChoices(['Sword','Axe','Spear','Dagger','Bow','Shield','Staff','Unarmed','Heavy Weapon','Wand','Catalyst'].map(function(w){ return ['Train '+w, function(){ G.weapon_mastery[w] = (G.weapon_mastery[w] || 0) + 1; G.quest_progress.job_signature = Math.max(G.quest_progress.job_signature || 0, G.weapon_mastery[w]); say(w+' mastery increased.', 'success'); train_weapon_mastery_screen(); }]; }).concat([[ '← Camp', camp_screen ]]));
  }

  function study_spell_mastery_screen(){
    ensureV50State();
    clear();
    say('— SPELL SCHOOL STUDY —', 'highlight');
    ['Fire','Ice','Lightning','Earth','Wind','Water','Holy','Dark','Arcane','Healing','Barrier','Curse','Summoning'].forEach(function(s){ showCard('<div class="v50-row"><span>'+esc(s)+'</span><span>Mastery Lv. '+(G.spell_mastery[s] || 0)+'</span></div>'); });
    safeChoices(['Fire','Ice','Lightning','Earth','Wind','Water','Holy','Dark','Arcane','Healing','Barrier','Curse','Summoning'].map(function(s){ return ['Study '+s, function(){ G.spell_mastery[s] = (G.spell_mastery[s] || 0) + 1; G.quest_progress.job_signature = Math.max(G.quest_progress.job_signature || 0, G.spell_mastery[s]); say(s+' mastery increased.', 'success'); study_spell_mastery_screen(); }]; }).concat([[ '← Camp', camp_screen ]]));
  }

  function crafting_hub_screen(){
    ensureV50State();
    clear();
    say('— CRAFTING & FORGING —', 'highlight');
    say('Blacksmithing and Alchemy have been expanded into broader crafting systems.', 'narrator');
    showMaterialsCard();
    safeChoices([
      ['⚒ Blacksmith Forge', blacksmith_crafting_screen],
      ['🧪 Alchemy Lab', alchemy_crafting_screen],
      ['← Hub World', hub_world_screen]
    ]);
  }

  function showMaterialsCard(){
    var names = Object.keys(G.materials || {});
    showCard('<div class="v50-title">Materials</div><div class="v50-sub">Enemy and map rewards are tracked here.</div><div class="v50-grid">'+(names.length ? names.map(function(k){ return '<div class="v50-mini"><b>'+esc(k)+'</b><br>x'+(G.materials[k]||0)+'</div>'; }).join('') : '<div class="v50-mini"><b>No materials yet.</b><br>Battle Towers, bosses, and map events drop materials.</div>')+'</div>');
  }

  function blacksmith_crafting_screen(){
    ensureV50State();
    clear();
    say('— BLACKSMITH FORGE —', 'highlight');
    showMaterialsCard();
    var current = G.weapon ? (G.weapon.name || 'Equipped Weapon') : 'No Weapon Equipped';
    showCard('<div class="v50-title">Forge Options</div><div class="v50-grid"><div class="v50-mini"><b>Upgrade Weapon</b><br>Add attack power to your currently equipped weapon.</div><div class="v50-mini"><b>Add Rune Slot</b><br>Track rune potential on weapons.</div><div class="v50-mini"><b>Improve Scaling</b><br>Mark the weapon as better aligned to your build.</div><div class="v50-mini"><b>Craft Set Piece</b><br>Progress one tracked set collection piece.</div></div><div class="v50-sub" style="margin-top:8px">Current weapon: <b>'+esc(current)+'</b></div>');
    safeChoices([
      ['Upgrade Weapon (Iron Ore x2 + 50g)', function(){ if ((G.materials['Iron Ore']||0) < 2 || (G.gold||0) < 50 || !G.weapon) { say('Need Iron Ore x2, 50 gold, and an equipped weapon.', 'danger'); return blacksmith_crafting_screen(); } G.materials['Iron Ore'] -= 2; G.gold -= 50; G.weapon.atk = (G.weapon.atk || 0) + 3; G.crafting_stats.forged++; say('Weapon upgraded! +3 ATK added.', 'success'); blacksmith_crafting_screen(); }],
      ['Add Rune Slot (Mana Crystal x2 + 60g)', function(){ if ((G.materials['Mana Crystal']||0) < 2 || (G.gold||0) < 60 || !G.weapon) { say('Need Mana Crystal x2, 60 gold, and an equipped weapon.', 'danger'); return blacksmith_crafting_screen(); } G.materials['Mana Crystal'] -= 2; G.gold -= 60; G.weapon.runeSlots = (G.weapon.runeSlots || 0) + 1; G.crafting_stats.forged++; say('A rune slot has been added.', 'success'); blacksmith_crafting_screen(); }],
      ['Improve Scaling (Beast Hide x1 + 40g)', function(){ if ((G.materials['Beast Hide']||0) < 1 || (G.gold||0) < 40 || !G.weapon) { say('Need Beast Hide x1, 40 gold, and an equipped weapon.', 'danger'); return blacksmith_crafting_screen(); } G.materials['Beast Hide'] -= 1; G.gold -= 40; G.weapon.scalingNote = 'Improved scaling'; G.crafting_stats.forged++; say('The weapon scaling has been refined.', 'success'); blacksmith_crafting_screen(); }],
      ['Craft Set Piece (Legend Fragment x1)', function(){ if ((G.materials['Legend Fragment']||0) < 1) { say('Need a Legend Fragment.', 'danger'); return blacksmith_crafting_screen(); } G.materials['Legend Fragment'] -= 1; grantSetPiece(); G.crafting_stats.forged++; blacksmith_crafting_screen(); }],
      ['← Crafting Hub', crafting_hub_screen]
    ]);
  }

  function alchemy_crafting_screen(){
    ensureV50State();
    clear();
    say('— ALCHEMY LAB —', 'highlight');
    showMaterialsCard();
    showCard('<div class="v50-title">Alchemy Products</div><div class="v50-grid"><div class="v50-mini"><b>Potions</b><br>Recover HP</div><div class="v50-mini"><b>Elixirs</b><br>Recover Mana</div><div class="v50-mini"><b>Stamina Tonics</b><br>Recover Stamina</div><div class="v50-mini"><b>Bombs / Cures</b><br>Battle-use support tools</div></div>');
    safeChoices([
      ['Craft Potion (Herb x2)', function(){ if ((G.materials['Herb']||0) < 2) { say('Need Herb x2.', 'danger'); return alchemy_crafting_screen(); } G.materials['Herb'] -= 2; addInventoryItem('Potion', 1); G.crafting_stats.brewed++; say('Potion crafted.', 'success'); alchemy_crafting_screen(); }],
      ['Craft Mana Crystal (Mana Crystal x1 + Herb x1)', function(){ if ((G.materials['Mana Crystal']||0) < 1 || (G.materials['Herb']||0) < 1) { say('Need Mana Crystal x1 and Herb x1.', 'danger'); return alchemy_crafting_screen(); } G.materials['Mana Crystal'] -= 1; G.materials['Herb'] -= 1; addInventoryItem('Mana Crystal', 1); G.crafting_stats.brewed++; say('Mana crystal refined.', 'success'); alchemy_crafting_screen(); }],
      ['Craft Stamina Tonic (Beast Hide x1 + Herb x1)', function(){ if ((G.materials['Beast Hide']||0) < 1 || (G.materials['Herb']||0) < 1) { say('Need Beast Hide x1 and Herb x1.', 'danger'); return alchemy_crafting_screen(); } G.materials['Beast Hide'] -= 1; G.materials['Herb'] -= 1; addInventoryItem('Stamina Tonic', 1); G.crafting_stats.brewed++; say('Stamina tonic crafted.', 'success'); alchemy_crafting_screen(); }],
      ['← Crafting Hub', crafting_hub_screen]
    ]);
  }

  function addInventoryItem(name, qty){
    if (!Array.isArray(G.inventory)) G.inventory = [];
    var item = G.inventory.find(function(x){ return x && x.name === name; });
    if (!item) { item = { name:name, qty:0, type:'consumable' }; G.inventory.push(item); }
    item.qty += qty;
  }

  function grantMaterials(list, amount){
    amount = amount || 1;
    list.forEach(function(name){ G.materials[name] = (G.materials[name] || 0) + amount; });
  }

  function grantSetPiece(){
    var set = pick(SETS);
    var piece = set.pieces[(G.set_collection[set.id].owned || 0) % set.pieces.length];
    if (G.set_collection[set.id].pieces.indexOf(piece) < 0) G.set_collection[set.id].pieces.push(piece);
    G.set_collection[set.id].owned = G.set_collection[set.id].pieces.length;
    G.set_collection[set.id].completed = G.set_collection[set.id].owned >= set.pieces.length;
    G.quest_progress.collect_set = Object.keys(G.set_collection).reduce(function(s,k){ return s + (G.set_collection[k].owned || 0); }, 0);
    say('Crafted or found set piece: '+set.name+' — '+piece+'.', 'success');
  }

  function set_collection_screen(){
    ensureV50State();
    clear();
    say('— SET COLLECTION —', 'highlight');
    say('Track set pieces, bonuses, drop sources, and recommended builds.', 'narrator');
    SETS.forEach(function(set){
      var st = G.set_collection[set.id] || { owned:0, pieces:[] };
      var pct = Math.min(100, Math.round((st.owned / set.pieces.length) * 100));
      showCard('<div class="v50-title">'+esc(set.name)+'</div><div class="v50-sub">'+esc(set.source)+' · Recommended: <b>'+esc(set.build)+'</b></div><div class="v50-grid"><div class="v50-mini"><b>Pieces Owned</b><br>'+st.owned+' / '+set.pieces.length+'<br>'+(st.pieces.length ? st.pieces.map(esc).join(', ') : 'None yet')+'</div><div class="v50-mini"><b>Set Bonus</b><br>'+esc(set.bonus)+'</div></div><div class="v50-bars"><div class="v50-bar"><div class="v50-barlabel">Collection Progress</div><div class="v50-track"><div class="v50-fill" style="width:'+pct+'%"></div></div></div></div>');
    });
    safeChoices([[ '← Hub World', hub_world_screen ], ['⚒ Craft Set Piece', blacksmith_crafting_screen ]]);
  }

  function build_summary_screen(){
    ensureV50State();
    refreshBuildIdentity();
    clear();
    var stats = [ ['HP', G.max_hp||0], ['MP', G.max_mp||0], ['PHY ATK', G.phy_atk||0], ['PHY DEF', G.phy_def||0], ['AGI', G.agi||0], ['MAG ATK', G.mag_atk||0], ['MAG DEF', G.mag_def||0], ['RESIST', G.resist||0], ['SPECIAL', G.special||0] ].sort(function(a,b){ return b[1] - a[1]; });
    var strongest = stats.slice(0,3).map(function(x){ return x[0]+' '+x[1]; }).join(' · ');
    var weakest = stats.slice(-2).map(function(x){ return x[0]+' '+x[1]; }).join(' · ');
    var bestSchool = Object.keys(G.spell_mastery).sort(function(a,b){ return G.spell_mastery[b]-G.spell_mastery[a]; })[0] || 'None';
    var uniques = knownAbilityObjects().filter(function(a){ return a.rank === 'Unique'; }).map(function(a){ return a.name; });
    var ultimates = knownAbilityObjects().filter(function(a){ return a.rank === 'Ultimate'; }).map(function(a){ return a.name; });
    showCard('<div class="v50-title">Build Summary</div><div class="v50-sub">Use this screen to understand what your current character is becoming.</div><div class="v50-grid"><div class="v50-mini"><b>Race Path</b><br>'+esc(currentRaceName())+'</div><div class="v50-mini"><b>Job Path</b><br>'+esc(currentJobNames().join(', ') || 'None')+'</div><div class="v50-mini"><b>Main Role</b><br>'+esc(inferRole())+'</div><div class="v50-mini"><b>Weapon Type</b><br>'+esc(inferWeaponType())+'</div><div class="v50-mini"><b>Main Skill Type</b><br>'+esc(inferWeaponType())+' techniques</div><div class="v50-mini"><b>Main Spell School</b><br>'+esc(bestSchool)+'</div><div class="v50-mini"><b>Strongest Stats</b><br>'+esc(strongest)+'</div><div class="v50-mini"><b>Weakest Stats</b><br>'+esc(weakest)+'</div></div>');
    showCard('<div class="v50-title">Identity & Abilities</div><div class="v50-grid"><div class="v50-mini"><b>Build Identity</b><br>'+esc(G.build_identity)+'</div><div class="v50-mini"><b>Equipped Title</b><br>'+esc(getTitleName(G.title_system.equipped) || 'None')+'</div><div class="v50-mini"><b>Unique Abilities</b><br>'+(uniques.length ? uniques.map(esc).join(', ') : 'None yet')+'</div><div class="v50-mini"><b>Ultimate Abilities</b><br>'+(ultimates.length ? ultimates.map(esc).join(', ') : 'None yet')+'</div></div><div class="v50-mini" style="margin-top:8px"><b>Recommended Next Goals</b><br>'+esc(recommendNextGoals())+'</div>');
    safeChoices([
      ['🏷 Title Screen', title_screen],
      ['🔓 Unlock Tracker', unlock_tracker_screen],
      ['← Hub World', hub_world_screen]
    ]);
  }

  function recommendNextGoals(){
    var goals = [];
    if ((G.total_lv||0) < 20) goals.push('Raise Total Level toward 20');
    if (completedQuestCount() < 3) goals.push('Complete more quests');
    if ((G.weapon_mastery[inferWeaponType()]||0) < 3) goals.push('Train '+inferWeaponType()+' mastery');
    var bestSchool = Object.keys(G.spell_mastery).sort(function(a,b){ return G.spell_mastery[b]-G.spell_mastery[a]; })[0];
    if (bestSchool && (G.spell_mastery[bestSchool]||0) < 3) goals.push('Study '+bestSchool+' mastery');
    if (!goals.length) goals.push('Push deeper into Battle Towers and unlock more Unique / Ultimate abilities');
    return goals.join('; ');
  }

  function unlock_tracker_screen(){
    ensureV50State();
    clear();
    say('— UNLOCK TRACKER —', 'highlight');
    say('This shows abilities and systems you are close to unlocking.', 'narrator');
    var tracked = ALL_NEW_ABILITIES.filter(function(a){ return (a.rank === 'Unique' || a.rank === 'Ultimate') && G.learned_abilities.indexOf(a.id) < 0; }).slice(0, 16);
    tracked.forEach(function(a){
      var lines = (a.requirements || []).map(function(r){
        if (r.type === 'known') { var ok = G.learned_abilities.indexOf(r.id) >= 0; return (ok ? '✓ ' : '• ') + 'Know ' + ((abilityById(r.id) && abilityById(r.id).name) || r.id); }
        if (r.type === 'totalLevel') { return ((G.total_lv||0) >= r.value ? '✓ ' : '• ') + 'Total Level ' + r.value + ' (current '+(G.total_lv||0)+')'; }
        return '• Special requirement';
      }).join('<br>');
      showCard('<div class="v50-title">'+esc(a.name)+'</div><div class="v50-sub">'+esc(a.rank)+' '+esc(a.kind)+' · '+esc(a.school || (a.weapon && a.weapon[0]) || 'General')+'</div><div class="v50-mini" style="margin-top:8px"><b>Requirements</b><br>'+lines+'</div>');
    });
    showCard('<div class="v50-title">Examples</div><div class="v50-mini"><b>World Flame Sigil</b><br>Requires Flame Sigil and Total Level 18.</div><div class="v50-mini" style="margin-top:8px"><b>Phantom Step Art</b><br>Requires Shadowfang Crest Art and Total Level 18.</div>');
    safeChoices([[ '← Build Summary', build_summary_screen ], ['← Hub World', hub_world_screen ]]);
  }

  function title_screen(){
    ensureV50State();
    clear();
    say('— TITLES & PREFIXES —', 'highlight');
    TITLE_POOL.forEach(function(t){
      var unlocked = G.title_system.unlocked.indexOf(t.id) >= 0;
      showCard('<div class="v50-row"><span>'+(unlocked ? '✓ ' : '🔒 ')+esc(t.name)+'</span><span>'+(G.title_system.equipped === t.id ? 'Equipped' : (unlocked ? 'Unlocked' : 'Locked'))+'</span></div><div class="v50-sub">'+esc(t.bonus)+'</div>');
    });
    safeChoices(TITLE_POOL.filter(function(t){ return G.title_system.unlocked.indexOf(t.id) >= 0; }).map(function(t){ return ['Equip '+t.name, function(){ G.title_system.equipped = t.id; say('Equipped title: '+t.name+'.', 'success'); title_screen(); }]; }).concat([[ 'Unequip Title', function(){ G.title_system.equipped = ''; title_screen(); } ], [ '← Build Summary', build_summary_screen ]]));
  }

  function getTitleName(id){ var t = TITLE_POOL.find(function(x){ return x.id === id; }); return t ? t.name : ''; }

  function encyclopedia_screen(){
    ensureV50State();
    clear();
    say('— ENCYCLOPEDIA —', 'highlight');
    say('An in-game help reference for your updated systems.', 'narrator');
    var sections = {
      'Stats':'HP = health, MP = mana, Stamina = physical skill fuel. Physical stats support weapon arts; magic stats support spells.',
      'Race Evolution':'Each race has a passive trait, an intrinsic active, an evolution bonus, a weakness, and a unique unlock path.',
      'Job Upgrades':'Base jobs define main role, preferred weapons, spell schools, signature ability, and future class paths.',
      'Skills':'Physical Skills use Stamina and usually depend on a weapon type.',
      'Spells':'Magic Spells use Mana and are grouped by spell school.',
      'Ranks & Tiers':'Intrinsic, Common, Extra, Unique, and Ultimate. Tier 1 is strongest; Tier 10 is weakest.',
      'Resources':'Stamina fuels physical techniques. Mana fuels spells.',
      'Equipment':'Weapons, armor, accessories, set pieces, and affixes all shape your build.',
      'Weapons':'Sword, Axe, Spear, Dagger, Bow, Shield, Staff, Unarmed, Heavy Weapon, Wand, Catalyst.',
      'Recruits':'Recruits can bond with you, unlock stories, and improve assists.',
      'Maps':'Battle Towers replace the older world-map direction for combat progression.',
      'Status Effects':'Burn, poison, stun, and other effects appear in battle as part of strategic play.',
      'Save System':'Save/load remains local-storage friendly and GitHub Pages compatible.',
      'Achievements & Titles':'Titles are cosmetic or lightly beneficial identity rewards.',
      'Enemy Codex':'Enemy information continues to build as you encounter new foes.'
    };
    Object.keys(sections).forEach(function(k){ showCard('<div class="v50-title">'+esc(k)+'</div><div class="v50-sub">'+esc(sections[k])+'</div>'); });
    safeChoices([[ '← Hub World', hub_world_screen ]]);
  }

  function skill_screen_v50(){
    ensureV50State();
    clear();
    say('— SKILLS & SPELLS —', 'highlight');
    say('This updated screen shows learned Intrinsic, Physical, and Magic abilities using the new rank and tier logic.', 'narrator');
    var known = knownAbilityObjects().sort(function(a,b){
      var rankOrder = {Intrinsic:0, Common:1, Extra:2, Unique:3, Ultimate:4};
      return (rankOrder[a.rank]||99) - (rankOrder[b.rank]||99) || (a.tier||99) - (b.tier||99) || String(a.name).localeCompare(String(b.name));
    });
    if (!known.length) showCard('<div class="v50-title">No learned abilities yet.</div><div class="v50-sub">Visit the Physical Skill Shop or Magic Spell Shop.</div>');
    known.forEach(function(a){
      showCard('<div class="v50-title">'+esc(a.name)+'</div><div class="v50-sub">'+esc(a.rank)+' '+esc(a.kind)+' · Tier '+esc(a.tier)+' · '+esc(a.school || (a.weapon && a.weapon[0]) || 'Intrinsic')+'</div><div class="v50-mini" style="margin-top:8px"><b>Cost</b>: '+esc(a.resource === 'passive' ? 'Passive' : (a.cost + ' ' + String(a.resource).toUpperCase()))+'<br><b>Description</b>: '+esc(a.description || 'Ability description pending.')+'</div>');
    });
    safeChoices([
      ['💪 Physical Skill Shop', physical_skill_shop_v50],
      ['🔮 Magic Spell Shop', magic_spell_shop_v50],
      ['← Character Status', character_status_v50],
      ['← Hub World', hub_world_screen]
    ]);
  }

  function physical_skill_shop_v50(){
    ensureV50State();
    clear();
    say('— PHYSICAL SKILL SHOP —', 'highlight');
    say('Physical Skills cost gold to learn and use Stamina in battle.', 'narrator');
    var list = NEW_PHYSICAL_ABILITIES.slice().sort(function(a,b){ return a.tier - b.tier; });
    list.forEach(function(a){
      var known = G.learned_abilities.indexOf(a.id) >= 0;
      var price = 40 + (11 - a.tier) * 12;
      var unlocked = abilityUnlocked(a);
      showCard('<div class="v50-title">'+esc(a.name)+'</div><div class="v50-sub">'+esc(a.rank)+' Skill · Tier '+a.tier+' · Weapon: <b>'+esc((a.weapon && a.weapon[0]) || 'Any')+'</b></div><div class="v50-mini" style="margin-top:8px"><b>Price</b>: '+price+' gold<br><b>Status</b>: '+(known ? 'Known' : (unlocked ? 'Available' : 'Locked'))+'<br><b>Description</b>: '+esc(a.description)+'</div>');
    });
    safeChoices(list.map(function(a){
      var price = 40 + (11 - a.tier) * 12;
      return [ (G.learned_abilities.indexOf(a.id) >= 0 ? '✓ ' : '') + a.name + ' ('+price+'g)', function(){
        if (G.learned_abilities.indexOf(a.id) >= 0) { say('You already know '+a.name+'.', 'narrator'); return physical_skill_shop_v50(); }
        if (!abilityUnlocked(a)) { say('Requirements not met yet.', 'danger'); return physical_skill_shop_v50(); }
        if ((G.gold||0) < price) { say('Not enough gold.', 'danger'); return physical_skill_shop_v50(); }
        G.gold -= price; learnAbility(a.id); G.quest_progress.side_buy_skill = (G.quest_progress.side_buy_skill || 0) + 1; say('Learned '+a.name+'!', 'success'); physical_skill_shop_v50();
      }];
    }).concat([[ '← Skills Screen', skill_screen_v50 ]]));
  }

  function magic_spell_shop_v50(){
    ensureV50State();
    clear();
    say('— MAGIC SPELL SHOP —', 'highlight');
    say('Magic Spells cost gold to learn and use Mana in battle.', 'narrator');
    var list = NEW_MAGIC_ABILITIES.slice().sort(function(a,b){ return a.tier - b.tier; });
    list.forEach(function(a){
      var known = G.learned_abilities.indexOf(a.id) >= 0;
      var price = 42 + (11 - a.tier) * 13;
      var unlocked = abilityUnlocked(a);
      showCard('<div class="v50-title">'+esc(a.name)+'</div><div class="v50-sub">'+esc(a.rank)+' Spell · Tier '+a.tier+' · School: <b>'+esc(a.school || 'Arcane')+'</b></div><div class="v50-mini" style="margin-top:8px"><b>Price</b>: '+price+' gold<br><b>Magic Weapons</b>: '+esc((a.magicWeapon || ['Staff','Wand','Catalyst']).join(', '))+'<br><b>Status</b>: '+(known ? 'Known' : (unlocked ? 'Available' : 'Locked'))+'</div>');
    });
    safeChoices(list.map(function(a){
      var price = 42 + (11 - a.tier) * 13;
      return [ (G.learned_abilities.indexOf(a.id) >= 0 ? '✓ ' : '') + a.name + ' ('+price+'g)', function(){
        if (G.learned_abilities.indexOf(a.id) >= 0) { say('You already know '+a.name+'.', 'narrator'); return magic_spell_shop_v50(); }
        if (!abilityUnlocked(a)) { say('Requirements not met yet.', 'danger'); return magic_spell_shop_v50(); }
        if ((G.gold||0) < price) { say('Not enough gold.', 'danger'); return magic_spell_shop_v50(); }
        G.gold -= price; learnAbility(a.id); G.quest_progress.side_buy_skill = (G.quest_progress.side_buy_skill || 0) + 1; say('Learned '+a.name+'!', 'success'); magic_spell_shop_v50();
      }];
    }).concat([[ '← Skills Screen', skill_screen_v50 ]]));
  }

  function character_status_v50(){
    ensureV50State();
    clear();
    refreshBuildIdentity();
    say('— CHARACTER STATUS —', 'highlight');
    say('The Character Status screen now acts as the main build-management screen.', 'narrator');
    var scaleStats = [ ['HP', G.max_hp||0, 400], ['MP', G.max_mp||0, 300], ['PHY ATK', G.phy_atk||0, 200], ['PHY DEF', G.phy_def||0, 200], ['AGI', G.agi||0, 200], ['MAG ATK', G.mag_atk||0, 200], ['MAG DEF', G.mag_def||0, 200], ['RESIST', G.resist||0, 200], ['SPECIAL', G.special||0, 200] ];
    var rows = scaleStats.map(function(s){ return '<div class="v50-bar"><div class="v50-barlabel">'+s[0]+': '+s[1]+'</div><div class="v50-track"><div class="v50-fill" style="width:'+Math.min(100, Math.round((s[1]/s[2])*100))+'%"></div></div></div>'; }).join('');
    showCard('<div class="v50-title">Stat Step Scope + Comparative Scale</div><div class="v50-sub">Spend your stat points here and compare your current build direction.</div><div class="v50-mini"><b>Unspent Level Points</b>: '+(G.level_pts||0)+'<br><b>Unspent Stat Points</b>: '+(G.stat_pts||0)+'<br><b>Build Identity</b>: '+esc(G.build_identity)+'</div><div class="v50-bars">'+rows+'</div>');
    showCard('<div class="v50-title">Race / Job Path</div><div class="v50-grid"><div class="v50-mini"><b>Race Path</b><br>'+esc(currentRaceName())+'<br>'+esc(getRaceIdentity().unlock)+'</div><div class="v50-mini"><b>Job Path</b><br>'+esc(currentJobNames().join(', ') || 'None')+'<br>Main Role: '+esc(inferRole())+'</div><div class="v50-mini"><b>Preferred Weapons</b><br>'+esc(preferredWeaponsText())+'</div><div class="v50-mini"><b>Preferred Spell Schools</b><br>'+esc(preferredSchoolsText())+'</div></div>');
    showCard('<div class="v50-title">Job Identity Snapshot</div><div class="v50-grid"><div class="v50-mini"><b>Main Role</b><br>'+esc(inferRole())+'</div><div class="v50-mini"><b>Signature Ability</b><br>'+esc(signatureAbilityText())+'</div><div class="v50-mini"><b>Allowed Skill Types</b><br>'+esc(allowedSkillTypesText())+'</div><div class="v50-mini"><b>Upgrade Path</b><br>Base → Advanced → Specialist → Rare / Hidden</div></div>');
    var statButtons = [1,5,10].map(function(n){ return ['Spend '+n+' to PHY ATK', function(){ spendStats('phy_atk', n); }]; })
      .concat([ ['Spend 1 to PHY DEF', function(){ spendStats('phy_def',1); }], ['Spend 1 to AGI', function(){ spendStats('agi',1); }], ['Spend 1 to MAG ATK', function(){ spendStats('mag_atk',1); }], ['Spend 1 to MAG DEF', function(){ spendStats('mag_def',1); }], ['Spend 1 to RESIST', function(){ spendStats('resist',1); }], ['Spend 1 to SPECIAL', function(){ spendStats('special',1); }] ]);
    safeChoices([
      ['📚 Skills & Spells', skill_screen_v50],
      ['🧠 Build Summary', build_summary_screen],
      ['🔓 Unlock Tracker', unlock_tracker_screen],
      ['📘 Encyclopedia', encyclopedia_screen],
      ['🏷 Titles', title_screen],
      ['🧩 Set Collection', set_collection_screen],
      ['← Hub World', hub_world_screen]
    ].concat(statButtons));
  }

  function spendStats(stat, amount){
    ensureV50State();
    amount = amount || 1;
    if ((G.stat_pts||0) < amount) { say('Not enough stat points.', 'danger'); return character_status_v50(); }
    var bonusKey = { hp:'hp', max_hp:'hp', mp:'mp', max_mp:'mp', phy_atk:'pa', phy_def:'pd', agi:'ag', mag_atk:'ma', mag_def:'md', resist:'rs', special:'sp' }[stat];
    if (!bonusKey) bonusKey = 'sp';
    if (!G.bonus) G.bonus = { hp:0, mp:0, pa:0, pd:0, ag:0, ma:0, md:0, rs:0, sp:0 };
    G.bonus[bonusKey] = (G.bonus[bonusKey] || 0) + amount;
    G.stat_pts -= amount;
    if (old.applyStats) old.applyStats();
    if (old.updateStats) old.updateStats();
    character_status_v50();
  }

  function preferredWeaponsText(){
    var role = inferRole();
    if (role === 'Caster') return 'Staff, Wand, Catalyst';
    if (role === 'Support') return 'Staff, Shield, Wand';
    if (role === 'Rogue') return 'Dagger, Bow';
    if (role === 'Tank') return 'Sword, Shield, Spear';
    if (role === 'Ranged') return 'Bow, Dagger';
    if (role === 'Martial') return 'Unarmed, Staff';
    return 'Sword, Axe, Spear';
  }
  function preferredSchoolsText(){
    var role = inferRole();
    if (role === 'Caster') return 'Arcane, Fire, Ice, Lightning';
    if (role === 'Support') return 'Healing, Holy, Barrier';
    if (role === 'Rogue') return 'Dark, Wind';
    if (role === 'Tank') return 'Holy, Earth';
    if (role === 'Ranged') return 'Wind, Lightning';
    return 'Fire, Earth';
  }
  function signatureAbilityText(){
    var role = inferRole();
    if (role === 'Caster') return 'School Focus spell';
    if (role === 'Support') return 'Restorative liturgy';
    if (role === 'Rogue') return 'Burst assassination art';
    if (role === 'Tank') return 'Guardian stance';
    if (role === 'Ranged') return 'Precision volley';
    return 'Weapon mastery art';
  }
  function allowedSkillTypesText(){
    var role = inferRole();
    if (role === 'Caster') return 'Mostly spells; a few physical utility skills';
    if (role === 'Support') return 'Support spells, barriers, limited physical defense skills';
    if (role === 'Rogue') return 'Physical skills plus limited dark / wind spells';
    if (role === 'Tank') return 'Physical skills plus limited holy / barrier magic';
    return 'Mostly physical skills; some hybrid classes can use select spells';
  }

  // ------------------------------------------------------------
  // Battle wrappers: intentions, modifiers, boss mechanics, rewards
  // ------------------------------------------------------------
  function getBattleModifier(){
    if (G.tower_run) {
      var tower = towerCurrent();
      return tower ? tower.modifier : pick(['Rain','Darkness','Sacred Ground','Mana Storm']);
    }
    return pick(['Rain','Darkness','Sacred Ground','Mana Storm']);
  }

  function difficultyConfig(){ return DIFFICULTY_DATA[G.difficulty] || DIFFICULTY_DATA.Normal; }

  function makeIntent(enemy){
    var intents = [
      {name:'Heavy Strike', hint:'Preparing a stronger physical hit.'},
      {name:'Charge Attack', hint:'Charging power for the next action.'},
      {name:'Shield Phase', hint:'Bolstering defenses.'},
      {name:'Summon Call', hint:'Likely to call reinforcements.'},
      {name:'Magic Barrier', hint:'Preparing magical protection.'},
      {name:'Status Art', hint:'May inflict a status effect.'}
    ];
    if (enemy && enemy.isBoss) intents.push({name:'Boss Mechanic', hint:'A special phase mechanic is approaching.'});
    return pick(intents);
  }

  function applyDifficultyToEnemy(en){
    var cfg = difficultyConfig();
    en.hp = Math.max(1, Math.floor(en.hp * cfg.enemyHp));
    en.atk = Math.max(1, Math.floor(en.atk * cfg.enemyAtk));
    en.exp = Math.max(1, Math.floor(en.exp * cfg.rewards));
    en.gold = Math.max(1, Math.floor(en.gold * cfg.rewards));
    return en;
  }

  function noteBattleUsage(){
    var wt = inferWeaponType();
    G.most_used_weapons[wt] = (G.most_used_weapons[wt] || 0) + 1;
    if (G.spell_mastery) {
      var best = Object.keys(G.spell_mastery).sort(function(a,b){ return G.spell_mastery[b] - G.spell_mastery[a]; })[0];
      if (best) G.most_used_schools[best] = (G.most_used_schools[best] || 0) + 1;
    }
  }

  function processBossMechanics(){
    if (!window.B || !B.enemies || !B.enemies.length) return;
    if (!B.v50Boss) B.v50Boss = {};
    B.enemies.forEach(function(en, idx){
      if (!en || !en.isBoss || B.enemy_hps[idx] <= 0) return;
      var flags = B.v50Boss[idx] || (B.v50Boss[idx] = {});
      var ratio = B.enemy_hps[idx] / en.hp;
      if (ratio <= 0.7 && !flags.shield) {
        flags.shield = true;
        B.enemy_hps[idx] = Math.min(en.hp, B.enemy_hps[idx] + Math.floor(en.hp * 0.12));
        say(en.name + ' enters a shield phase and restores some HP behind a barrier!', 'danger');
      }
      if (ratio <= 0.5 && !flags.summon) {
        flags.summon = true;
        B.enemies.push({ name:'Boss Summon', emoji:'🌀', hp:Math.max(28, Math.floor(en.hp * 0.22)), atk:Math.max(8, Math.floor(en.atk * 0.65)), exp:16, gold:12, lore:'A summoned helper.', moves:[{name:'Pester', status:null}] });
        B.enemy_hps.push(Math.max(28, Math.floor(en.hp * 0.22)));
        B.e_fxs.push({});
        say(en.name + ' summons reinforcements!', 'danger');
      }
      if (ratio <= 0.35 && !flags.enrage) {
        flags.enrage = true;
        en.atk = Math.floor(en.atk * 1.25);
        say(en.name + ' enters an enrage phase!', 'danger');
      }
      if (ratio <= 0.25 && !flags.cleanse) {
        flags.cleanse = true;
        B.e_fxs[idx] = {};
        say(en.name + ' cleanses statuses and shifts into a weakness phase.', 'narrator');
      }
    });
  }

  function injectBattleInfo(){
    if (!window.B || !B.enemies) return;
    var area = $('b-enemy-area');
    if (!area) return;
    qsa('.enemy-row', area).forEach(function(row, i){
      var wrap = row.querySelector('.bp-info');
      if (!wrap || row.querySelector('.v50-intent')) return;
      var info = document.createElement('div');
      info.className = 'v50-intent';
      var intent = B.v50_intents && B.v50_intents[i] ? B.v50_intents[i] : null;
      var enemy = B.enemies[i];
      var enemyType = (enemy && enemy.isBoss) ? 'Boss' : 'Standard';
      info.innerHTML = '<b>Type:</b> '+enemyType + (intent ? ' · <b>Intent:</b> ' + esc(intent.name) + ' — ' + esc(intent.hint) : '');
      wrap.appendChild(info);
    });
    if (!$('v50-battle-mod') && $('battle-panel')) {
      var box = document.createElement('div');
      box.id = 'v50-battle-mod';
      box.className = 'v50-card';
      box.style.marginTop = '8px';
      box.innerHTML = '<div class="v50-title">Battle Modifier</div><div class="v50-sub">'+esc(B.v50_modifier || 'None')+'</div>';
      $('battle-panel').appendChild(box);
    } else if ($('v50-battle-mod')) {
      $('v50-battle-mod').innerHTML = '<div class="v50-title">Battle Modifier</div><div class="v50-sub">'+esc(B.v50_modifier || 'None')+'</div>';
    }
  }

  function rewardPostBattle(enemies){
    noteBattleUsage();
    var wt = inferWeaponType();
    G.weapon_mastery[wt] = (G.weapon_mastery[wt] || 0) + 1;
    var school = Object.keys(G.spell_mastery).sort(function(a,b){ return (G.spell_mastery[b]||0) - (G.spell_mastery[a]||0); })[0] || 'Arcane';
    G.spell_mastery[school] = (G.spell_mastery[school] || 0) + 1;
    grantMaterials(['Iron Ore','Herb'], 1);
    if (chance(0.45)) grantMaterials(['Mana Crystal'], 1);
    if (chance(0.35)) grantMaterials(['Beast Hide'], 1);
    if ((enemies || []).some(function(e){ return e.isBoss; })) { grantMaterials(['Legend Fragment'], 1); G.quest_progress.boss_trial = (G.quest_progress.boss_trial || 0) + 1; }
    if (G.tower_run) {
      G.tower_run.battlesWon++;
      G.quest_progress.main_hub_open = Math.max(G.quest_progress.main_hub_open || 0, G.tower_run.battlesWon);
      G.quest_progress.hunt_elite = (G.quest_progress.hunt_elite || 0) + 1;
      if ((enemies || []).some(function(e){ return e.isBoss; })) G.tower_clears[G.tower_run.id] = (G.tower_clears[G.tower_run.id] || 0) + 1;
    }
    G.quest_progress.daily_battle = (G.quest_progress.daily_battle || 0) + 1;
    G.quest_progress.side_gear = (G.quest_progress.side_gear || 0) + 1;
    G.quest_progress.job_signature = Math.max(G.quest_progress.job_signature || 0, G.weapon_mastery[wt], G.spell_mastery[school]);
    G.quest_progress.main_identity = G.build_identity ? 1 : 0;
    refreshBuildIdentity();
  }

  function grantRandomAbilityUpgrade(){
    var candidate = ALL_NEW_ABILITIES.find(function(a){ return (a.rank === 'Unique' || a.rank === 'Ultimate') && abilityUnlocked(a) && G.learned_abilities.indexOf(a.id) < 0; });
    if (candidate) { learnAbility(candidate.id); say('Unlocked '+candidate.name+' through quest rewards!', 'success'); }
  }

  // ------------------------------------------------------------
  // Wrappers
  // ------------------------------------------------------------
  if (old.pick_race) {
    window.pick_race = function(){ ensureV50State(); if (!G.difficulty_selected) return difficulty_select_screen(old.pick_race); var r = old.pick_race.apply(this, arguments); afterScreen(); return r; };
    try { pick_race = window.pick_race; } catch(e){}
  }

  if (old.startBattle) {
    window.startBattle = function(enemyOrArr){
      ensureV50State();
      var arr = Array.isArray(enemyOrArr) ? enemyOrArr.map(function(e){ return applyDifficultyToEnemy(Object.assign({}, e)); }) : [applyDifficultyToEnemy(Object.assign({}, enemyOrArr))];
      var ret = old.startBattle.call(this, arr);
      if (window.B) {
        B.v50_modifier = getBattleModifier();
        B.v50_intents = B.enemies.map(makeIntent);
      }
      afterScreen();
      return ret;
    };
    try { startBattle = window.startBattle; } catch(e){}
  }

  if (old.updateBattlePanel) {
    window.updateBattlePanel = function(){ processBossMechanics(); var ret = old.updateBattlePanel.apply(this, arguments); injectBattleInfo(); return ret; };
    try { updateBattlePanel = window.updateBattlePanel; } catch(e){}
  }

  if (old.enemyTurn) {
    window.enemyTurn = async function(){ if (window.B && B.v50_intents) { B.v50_intents = B.enemies.map(makeIntent); B.v50_intents.forEach(function(x, i){ if (B.enemy_hps[i] > 0) say((B.enemies[i].name || 'Enemy') + ' intent: ' + x.name + ' — ' + x.hint, 'b-system'); }); } var ret = await old.enemyTurn.apply(this, arguments); return ret; };
    try { enemyTurn = window.enemyTurn; } catch(e){}
  }

  if (old.winBattle) {
    window.winBattle = async function(){
      var enemies = window.B && B.enemies ? B.enemies.slice() : [];
      rewardPostBattle(enemies);
      var ret = await old.winBattle.apply(this, arguments);
      setTimeout(function(){
        if (G.tower_run) {
          safeChoices([
            ['Continue Tower', tower_post_battle_screen],
            ['Camp', camp_screen],
            ['Return to Hub World', leaveTowerRun]
          ]);
        } else {
          renameTownCenterText();
        }
      }, 650);
      return ret;
    };
    try { winBattle = window.winBattle; } catch(e){}
  }

  if (old.saveGame) {
    window.saveGame = function(){ ensureV50State(); refreshBuildIdentity(); return old.saveGame.apply(this, arguments); };
    try { saveGame = window.saveGame; } catch(e){}
  }

  if (old.loadGame) {
    window.loadGame = function(){ var ret = old.loadGame.apply(this, arguments); setTimeout(function(){ ensureV50State(); refreshBuildIdentity(); renameTownCenterText(); }, 0); return ret; };
    try { loadGame = window.loadGame; } catch(e){}
  }

  if (old.applyStats) {
    window.applyStats = function(){ var ret = old.applyStats.apply(this, arguments); ensureV50State(); refreshBuildIdentity(); return ret; };
    try { applyStats = window.applyStats; } catch(e){}
  }

  if (old.updateStats) {
    window.updateStats = function(){ var ret = old.updateStats.apply(this, arguments); ensureV50State(); refreshBuildIdentity(); return ret; };
    try { updateStats = window.updateStats; } catch(e){}
  }

  // Redirect map screens to Battle Towers.
  if (typeof map_screen === 'function') { window.map_screen = battle_towers_screen; try { map_screen = battle_towers_screen; } catch(e){} }
  if (typeof raid_map_screen === 'function') { window.raid_map_screen = battle_towers_screen; try { raid_map_screen = battle_towers_screen; } catch(e){} }
  if (typeof show_map === 'function') { window.show_map = battle_towers_screen; try { show_map = battle_towers_screen; } catch(e){} }

  // Override key screens with new system screens.
  window.hub_world_screen = hub_world_screen;
  window.town_center = hub_world_screen; try { town_center = hub_world_screen; } catch(e){}
  window.skill_screen = skill_screen_v50; try { skill_screen = skill_screen_v50; } catch(e){}
  window.physical_skill_shop = physical_skill_shop_v50; try { physical_skill_shop = physical_skill_shop_v50; } catch(e){}
  window.magic_spell_shop = magic_spell_shop_v50; try { magic_spell_shop = magic_spell_shop_v50; } catch(e){}
  window.character_status_v50 = character_status_v50;
  window.quest_board_screen = quest_board_screen;
  window.battle_towers_screen = battle_towers_screen;
  window.camp_screen = camp_screen;
  window.crafting_hub_screen = crafting_hub_screen;
  window.set_collection_screen = set_collection_screen;
  window.build_summary_screen = build_summary_screen;
  window.unlock_tracker_screen = unlock_tracker_screen;
  window.encyclopedia_screen = encyclopedia_screen;
  window.title_screen = title_screen;

  if (old.character_screen) {
    window.character_screen = character_status_v50;
    try { character_screen = character_status_v50; } catch(e){}
  }

  // Startup
  addStyle();
  ensureV50State();
  renameTownCenterText();
  refreshBuildIdentity();

  // In case the game is already on-screen.
  setTimeout(function(){ renameTownCenterText(); }, 100);
})();
