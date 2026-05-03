// EXPANSION UPDATE v0.3 — Skill Trees, Equipment, Raids, Challenges
// ═══════════════════════════════════════════════════════════════
const EXPANSION_VERSION = '0.3.0-skill-equipment-raids';

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

function emptyEquipment(){ return {head:null,chest:null,arms:null,legs:null,weapon1:null,weapon2:null,accessories:[null,null,null,null,null]}; }
function getEquip(id){ return EQUIPMENT_DATA.find(i => i.id === id); }
function getOwnedEquipment(){ ensureExpansionState(); return G.equipment_inventory.map(getEquip).filter(Boolean); }
function equipBonuses(){
  ensureExpansionState();
  const out = {hp:0,mp:0,pa:0,pd:0,ag:0,ma:0,md:0,rs:0,sp:0,atk:0};
  const ids = [];
  EQUIP_SLOTS.forEach(s => { if (G.equipment[s]) ids.push(G.equipment[s]); });
  (G.equipment.accessories || []).forEach(id => { if (id) ids.push(id); });
  ids.map(getEquip).filter(Boolean).forEach(it => {
    if (it.atk) out.atk += it.atk;
    Object.entries(it.bon || {}).forEach(([k,v]) => out[k] = (out[k] || 0) + v);
  });
  return out;
}

const _ensureGameCollections_expansion_base = ensureGameCollections;
ensureGameCollections = function(){
  _ensureGameCollections_expansion_base();
  ensureExpansionState();
};

function ensureExpansionState(){
  if (!G.equipment || typeof G.equipment !== 'object') G.equipment = emptyEquipment();
  EQUIP_SLOTS.forEach(s => { if (!(s in G.equipment)) G.equipment[s] = null; });
  if (!Array.isArray(G.equipment.accessories)) G.equipment.accessories = [null,null,null,null,null];
  while (G.equipment.accessories.length < ACCESSORY_SLOTS) G.equipment.accessories.push(null);
  G.equipment.accessories = G.equipment.accessories.slice(0, ACCESSORY_SLOTS);
  if (!Array.isArray(G.equipment_inventory)) G.equipment_inventory = [];
  if (!Array.isArray(G.challenge_log)) G.challenge_log = [];
  if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = { version: EXPANSION_VERSION, saves: 0, lastSaved: null };
  if (!Array.isArray(G.unlocked_maps)) G.unlocked_maps = [];
  G.equipment_inventory = [...new Set(G.equipment_inventory)];
}

const _applyStats_expansion_base = applyStats;
applyStats = function(){
  _applyStats_expansion_base();
  ensureExpansionState();
  const b = equipBonuses();
  G.max_hp += b.hp || 0; G.max_mp += b.mp || 0;
  G.phy_atk += b.pa || 0; G.phy_def += b.pd || 0; G.agi += b.ag || 0;
  G.mag_atk += b.ma || 0; G.mag_def += b.md || 0; G.resist += b.rs || 0; G.special += b.sp || 0;
  G.atk = G.phy_atk + (b.atk || 0); G.int_stat = G.mag_atk;
  G.hp = Math.min(G.hp || G.max_hp, G.max_hp); G.mp = Math.min(G.mp || G.max_mp, G.max_mp);
};

function raceSkillTemplate(r){
  const n = r.name;
  const low = n.toLowerCase();
  const magic = low.includes('quincy') || low.includes('shinigami') || low.includes('gojo') || low.includes('kamo') || low.includes('celestial') || low.includes('god') || low.includes('fullbringer') || low.includes('otsutsuki');
  const tank = low.includes('titan') || low.includes('giant') || low.includes('uzumaki') || low.includes('senju') || low.includes('chimera') || low.includes('etherious');
  const speed = low.includes('ackerman') || low.includes('zoldyck') || low.includes('hyuga') || low.includes('skypiean') || low.includes('uchiha') || low.includes('visored');
  const stat = magic ? {ma:8,mp:35,md:3} : tank ? {hp:70,pd:5,rs:3} : speed ? {ag:7,pa:4,sp:2} : {pa:4,ma:4,rs:2};
  const status = magic ? 'weaken' : tank ? 'stun' : speed ? 'bleed' : 'vulnerable';
  return [
    [1, [{id:'race_'+r.name.replace(/\W+/g,'_')+'_a1', name:n+' Signature Strike', type:'a', mp:8, pow:34, st:status, sc:0.28, desc:'Starter active skill for the '+n+' race tree.'}]],
    [5, [{id:'race_'+r.name.replace(/\W+/g,'_')+'_p5', name:n+' Bloodline Foundation', type:'p', bon:stat, desc:'Passive race growth bonus for '+n+'.'},
         {id:'race_'+r.name.replace(/\W+/g,'_')+'_a5', name:n+' Pressure Burst', type:'a', mp:18, pow:62, st:status, sc:0.38, desc:'A stronger active technique that applies race pressure.'}]],
    [10,[{id:'race_'+r.name.replace(/\W+/g,'_')+'_a10', name:n+' Advanced Art', type:'a', mp:30, pow:92, hits:speed?3:1, st:status, sc:0.42, desc:'Mid-tree active skill unlocked by race investment.'},
         {id:'race_'+r.name.replace(/\W+/g,'_')+'_p10', name:n+' Combat Adaptation', type:'p', bon: magic ? {ma:6,rs:4,sp:3} : tank ? {hp:80,pd:5} : {pa:5,ag:5}, desc:'Passive specialization bonus.'}]],
    [15,[{id:'race_'+r.name.replace(/\W+/g,'_')+'_a15', name:n+' Awakening', type:'a', mp:44, pow:122, buf: tank?'guard':(speed?'haste':'bravery'), desc:'Race awakening attack that also grants a buff.'}]],
    [20,[{id:'race_'+r.name.replace(/\W+/g,'_')+'_p20', name:n+' True Lineage', type:'p', bon: magic ? {mp:55,ma:10,sp:5} : tank ? {hp:120,pd:8,rs:5} : {pa:8,ag:8,sp:4}, desc:'High-level passive capstone.'},
         {id:'race_'+r.name.replace(/\W+/g,'_')+'_a20', name:n+' Ultimate Technique', type:'a', mp:65, pow:170, aoe: magic || tank, st:status, sc:0.50, desc:'Ultimate active race skill. Some races hit all enemies.'}]],
    [25,[{id:'race_'+r.name.replace(/\W+/g,'_')+'_a25', name:n+' Mythic Release', type:'a', mp:82, pow:210, hits:speed?4:2, drain:tank, st:'doom', sc:0.12, desc:'Mythic late-tree release technique.'}]],
    [30,[{id:'race_'+r.name.replace(/\W+/g,'_')+'_p30', name:n+' Apex Bloodline', type:'p', bon:{hp:80,mp:50,pa:6,pd:4,ag:4,ma:6,md:4,rs:4,sp:6}, desc:'Final race-tree passive capstone.'}]]
  ];
}
function installFullRaceSkillTrees(){
  Object.values(RACE_DATA).forEach(r => {
    if (!Array.isArray(r.skills) || r.skills.length === 0) r.skills = raceSkillTemplate(r);
  });
}
installFullRaceSkillTrees();

function equipment_screen(){
  ensureExpansionState(); applyStats(); updateStats(); clearOutput(); showBattlePanel(false);
  print('EQUIPMENT SCREEN', 'highlight');
  print('Slots: Head, Chest, Arms, Legs, Weapon 1, Weapon 2, and 5 Accessories. Weapon 1 is for one-handed weapons. Weapon 2 is for two-handed weapons or staves.', 'narrator');
  const b = equipBonuses();
  print('Current gear bonus: HP +' + b.hp + ' · MP +' + b.mp + ' · ATK +' + ((b.pa||0)+(b.atk||0)) + ' · MAG +' + b.ma + ' · DEF +' + b.pd + ' · AGI +' + b.ag + ' · RES +' + b.rs + ' · SP +' + b.sp, 'info');
  $ch.innerHTML = '';
  const renderSlot = (label, slot, idx) => {
    const id = slot === 'accessory' ? G.equipment.accessories[idx] : G.equipment[slot];
    const it = id ? getEquip(id) : null;
    const row = document.createElement('div');
    row.className = 'cs-exp-row';
    row.innerHTML = '<div class="cs-exp-label">' + label + '</div><div style="color:#e8c84a;font-size:13px">' + (it ? it.name : 'Empty') + '</div><div style="color:#8aaac8;font-size:11px">' + (it ? it.desc : 'No item equipped.') + '</div>';
    $ch.appendChild(row);
  };
  renderSlot('HEAD','head'); renderSlot('CHEST','chest'); renderSlot('ARMS','arms'); renderSlot('LEGS','legs'); renderSlot('WEAPON 1 — ONE HANDED','weapon1'); renderSlot('WEAPON 2 — TWO HANDED','weapon2');
  for (let i=0;i<ACCESSORY_SLOTS;i++) renderSlot('ACCESSORY ' + (i+1), 'accessory', i);
  const shop = document.createElement('button'); shop.textContent = '🛒 Open Equipment Shop'; shop.onclick = equipment_shop; $ch.appendChild(shop);
  const change = document.createElement('button'); change.textContent = '⚙ Change Equipped Items'; change.onclick = equipment_change_screen; $ch.appendChild(change);
  const back = document.createElement('button'); back.textContent = '← Town Center'; back.onclick = town_center; $ch.appendChild(back);
}
function equipment_shop(){
  ensureExpansionState(); clearOutput(); showBattlePanel(false);
  print('EQUIPMENT SHOP', 'highlight'); print('Gold: ' + G.gold, 'info'); $ch.innerHTML = '';
  EQUIPMENT_DATA.forEach(it => {
    const owned = G.equipment_inventory.includes(it.id); const price = priceOf(it);
    const btn = document.createElement('button'); btn.style.whiteSpace = 'pre-wrap';
    btn.textContent = (owned ? '[OWNED] ' : '') + it.name + ' — ' + it.slot.toUpperCase() + ' — ' + price + 'g\n' + it.desc + '\nBonus: ' + JSON.stringify(it.bon || {}) + (it.atk ? ' · ATK +' + it.atk : '');
    btn.disabled = owned || G.gold < price;
    btn.onclick = () => { G.gold -= price; G.equipment_inventory.push(it.id); saveGame(); equipment_shop(); };
    $ch.appendChild(btn);
  });
  const back = document.createElement('button'); back.textContent = '← Equipment Screen'; back.onclick = equipment_screen; $ch.appendChild(back);
}
function equipment_change_screen(){
  ensureExpansionState(); clearOutput(); showBattlePanel(false); print('CHANGE EQUIPMENT', 'highlight');
  print('Tap a slot, then choose an owned item for that slot.', 'narrator'); $ch.innerHTML = '';
  const slots = [['Head','head'],['Chest','chest'],['Arms','arms'],['Legs','legs'],['Weapon 1','weapon1'],['Weapon 2','weapon2']];
  slots.forEach(([label, slot]) => { const b=document.createElement('button'); b.textContent = label + ': ' + (G.equipment[slot] ? getEquip(G.equipment[slot]).name : 'Empty'); b.onclick=()=>chooseEquipForSlot(slot); $ch.appendChild(b); });
  for (let i=0;i<ACCESSORY_SLOTS;i++){ const b=document.createElement('button'); const id=G.equipment.accessories[i]; b.textContent='Accessory '+(i+1)+': '+(id?getEquip(id).name:'Empty'); b.onclick=()=>chooseEquipForSlot('accessory',i); $ch.appendChild(b); }
  const back=document.createElement('button'); back.textContent='← Equipment Screen'; back.onclick=equipment_screen; $ch.appendChild(back);
}
function chooseEquipForSlot(slot, idx){
  clearOutput(); print('EQUIP: ' + (slot === 'accessory' ? 'Accessory '+(idx+1) : slot.toUpperCase()), 'highlight'); $ch.innerHTML='';
  const clear=document.createElement('button'); clear.textContent='Unequip / Empty Slot'; clear.onclick=()=>{ if(slot==='accessory') G.equipment.accessories[idx]=null; else G.equipment[slot]=null; applyStats(); updateStats(); equipment_change_screen(); }; $ch.appendChild(clear);
  getOwnedEquipment().filter(it => it.slot === slot).forEach(it => { const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.textContent=it.name+'\n'+it.desc; b.onclick=()=>{ if(slot==='accessory') G.equipment.accessories[idx]=it.id; else G.equipment[slot]=it.id; applyStats(); updateStats(); equipment_change_screen(); }; $ch.appendChild(b); });
  const back=document.createElement('button'); back.textContent='← Back'; back.onclick=equipment_change_screen; $ch.appendChild(back);
}

const RAID_BOSSES = [
  {name:'Nine-Tails Raid Manifestation', emoji:'🦊', hp:520, atk:42, exp:260, gold:320, lore:'A chakra disaster tears open a raid gate.', moves:[{name:'Tailed Beast Claw'},{name:'Bijuu Roar'},{name:'Chakra Bomb'}]},
  {name:'Soul King Fragment', emoji:'👑', hp:650, atk:48, exp:340, gold:430, lore:'A divine fragment bends the battlefield with spiritual pressure.', moves:[{name:'Royal Pressure'},{name:'Spirit Rend'},{name:'Judgment Pulse'}]},
  {name:'Founding Titan Echo', emoji:'🦴', hp:780, atk:55, exp:440, gold:520, lore:'A raid-class Titan echo rises beyond the walls.', moves:[{name:'Coordinate Crush'},{name:'Titan Command'},{name:'Bone Spear'}]},
  {name:'Chimera Ant King Shadow', emoji:'🐜', hp:900, atk:62, exp:600, gold:700, lore:'A king-level shadow adapts to every attack.', moves:[{name:'Royal Guard Blitz'},{name:'Nen Pressure'},{name:'Predator Strike'}]}
];
function raid_map_screen(){
  clearOutput(); showBattlePanel(false); print('RAID MAP — BOSS GATES', 'highlight');
  print('Raid bosses are high-HP enemies designed for finished builds, active recruits, gear, and race/class skill synergy.', 'narrator');
  $ch.innerHTML='';
  RAID_BOSSES.forEach((boss,i)=>{ const req=i*8; const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.textContent=boss.emoji+' '+boss.name+' — Recommended Lv '+req+'+\n'+boss.lore; b.disabled=G.total_lv<req; b.onclick=()=>startRaidBattle(boss); $ch.appendChild(b); });
  const back=document.createElement('button'); back.textContent='← Town Center'; back.onclick=town_center; $ch.appendChild(back);
}
function startRaidBattle(boss){ _lastZone = raid_map_screen; startBattle({...boss}); }

const CHALLENGE_ENEMIES = [
  {name:'Mirror Build Duelist', emoji:'🪞', hp:260, atk:32, exp:120, gold:120, lore:'A PvP-style mirror opponent built to test your current stats.', moves:[{name:'Mirror Strike'},{name:'Counter Build'},{name:'Burst Window'}]},
  {name:'Speed Meta Challenger', emoji:'⚡', hp:220, atk:38, exp:140, gold:140, lore:'A fast PvP-style opponent that punishes slow builds.', moves:[{name:'Tempo Break'},{name:'Quick Combo'},{name:'Pressure Dash'}]},
  {name:'Raid Tank Simulacrum', emoji:'🛡️', hp:420, atk:30, exp:160, gold:160, lore:'A defensive challenge dummy for testing sustained damage.', moves:[{name:'Shield Bash'},{name:'Guard Crush'},{name:'Attrition'}]}
];
function challenge_mode_screen(){
  clearOutput(); showBattlePanel(false); print('PvP / CHALLENGE MODES', 'highlight');
  print('This is simulated PvP for now: fight challenge builds, test damage, and compare your race/job/equipment setup.', 'narrator');
  print('Challenge clears are saved in your challenge log.', 'info'); $ch.innerHTML='';
  CHALLENGE_ENEMIES.forEach(e=>{ const b=document.createElement('button'); b.textContent='⚔ Challenge: '+e.name; b.onclick=()=>{ _lastZone=challenge_mode_screen; startBattle({...e}); }; $ch.appendChild(b); });
  const log=document.createElement('button'); log.textContent='📜 View Challenge Log'; log.onclick=challenge_log_screen; $ch.appendChild(log);
  const back=document.createElement('button'); back.textContent='← Town Center'; back.onclick=town_center; $ch.appendChild(back);
}
function challenge_log_screen(){ ensureExpansionState(); clearOutput(); print('CHALLENGE LOG', 'highlight'); if(!G.challenge_log.length) print('No challenge clears yet.', 'narrator'); else G.challenge_log.slice(-12).forEach(x=>print('✓ '+x, 'success')); showChoices([['← Challenge Modes', challenge_mode_screen], ['← Town Center', town_center]]); }

const _winBattle_expansion_base = winBattle;
winBattle = function(){
  if (B && B.enemy && CHALLENGE_ENEMIES.some(e => e.name === B.enemy.name)) { ensureExpansionState(); G.challenge_log.push(new Date().toLocaleString() + ' — defeated ' + B.enemy.name + ' at Lv ' + G.total_lv); }
  return _winBattle_expansion_base();
};

function class_planner_screen(){
  ensureGameCollections(); clearOutput(); showBattlePanel(false);
  print('EXPANDED CLASS PLANNER', 'highlight');
  print('The improved job system now groups builds by tier and recommends synergy. Base classes build foundations, Advanced classes refine them, Specialist classes define playstyle, Rare classes spike power, and Hidden classes are capstones.', 'narrator');
  const tiers = ['Base','Advanced','Specialist','Rare','Hidden'];
  $ch.innerHTML='';
  tiers.forEach(t=>{
    const list=Object.values(JOB_DATA).filter(j => (j.class_tier || 'Base') === t);
    const div=document.createElement('div'); div.className='cs-exp-row'; div.innerHTML='<div class="cs-exp-label">'+t.toUpperCase()+' JOBS</div><div style="color:#8aaac8;font-size:11px">'+list.length+' paths. Cap: '+(t==='Base'?15:t==='Rare'||t==='Hidden'?5:10)+' levels.</div>'; $ch.appendChild(div);
  });
  const reg=document.createElement('button'); reg.textContent='📜 Open Full Class Registry'; reg.onclick=class_registry_screen; $ch.appendChild(reg);
  const ch=document.createElement('button'); ch.textContent='⚔ Test Build in Challenge Mode'; ch.onclick=challenge_mode_screen; $ch.appendChild(ch);
  const back=document.createElement('button'); back.textContent='← Town Center'; back.onclick=town_center; $ch.appendChild(back);
}

function expansion_update_screen(){
  clearOutput(); showBattlePanel(false); print('UPDATE v0.3 — SYSTEM EXPANSION', 'highlight');
  print('Added full race skill trees with active and passive skills for every race.', 'success');
  print('Expanded class system with a Class Planner and clearer tier roles.', 'success');
  print('Added raid-style boss gates through the Raid Map.', 'success');
  print('Added equipment: Head, Chest, Arms, Legs, Weapon 1, Weapon 2, and 5 Accessories.', 'success');
  print('Added simulated PvP / Challenge Modes for build testing.', 'success');
  print('Improved save/load with version metadata, autosave helpers, export, and import.', 'success');
  showChoices([['Equipment Screen', equipment_screen], ['Raid Map', raid_map_screen], ['Challenge Modes', challenge_mode_screen], ['Class Planner', class_planner_screen], ['← Back', returnFromHelp]]);
}

function exportSave(){
  ensureExpansionState(); G.save_meta.version = EXPANSION_VERSION; G.save_meta.lastSaved = new Date().toISOString();
  const data = btoa(unescape(encodeURIComponent(JSON.stringify(G))));
  clearOutput(); print('EXPORT SAVE', 'highlight'); print('Copy this code and keep it somewhere safe:', 'narrator');
  const box=document.createElement('textarea'); box.value=data; box.style.cssText='width:100%;min-height:120px;background:#050810;color:#e8c84a;border:1px solid #1c3354;padding:10px'; $ch.innerHTML=''; $ch.appendChild(box);
  const back=document.createElement('button'); back.textContent='← Town Center'; back.onclick=town_center; $ch.appendChild(back);
}
function importSave(){
  clearOutput(); print('IMPORT SAVE', 'highlight'); print('Paste an exported save code below.', 'narrator'); $ch.innerHTML='';
  const box=document.createElement('textarea'); box.placeholder='Paste save code...'; box.style.cssText='width:100%;min-height:120px;background:#050810;color:#e8c84a;border:1px solid #1c3354;padding:10px'; $ch.appendChild(box);
  const btn=document.createElement('button'); btn.textContent='Import Save'; btn.onclick=()=>{ try{ const obj=JSON.parse(decodeURIComponent(escape(atob(box.value.trim())))); Object.keys(obj).forEach(k=>G[k]=obj[k]); ensureGameCollections(); installFullRaceSkillTrees(); applyStats(); updateStats(); saveGame(); town_center(); }catch(e){ print('Import failed: '+e.message, 'danger'); } }; $ch.appendChild(btn);
  const back=document.createElement('button'); back.textContent='← Town Center'; back.onclick=town_center; $ch.appendChild(back);
}

const _saveGame_expansion_base = saveGame;
saveGame = function(){
  ensureExpansionState(); G.save_meta.version = EXPANSION_VERSION; G.save_meta.lastSaved = new Date().toISOString(); G.save_meta.saves = (G.save_meta.saves || 0) + 1;
  try { localStorage.setItem('animeRPG_v2', JSON.stringify(G)); localStorage.setItem('animeRPG_v1', JSON.stringify(G)); showSaveMsg('✓ Saved v' + EXPANSION_VERSION + ' at ' + new Date().toLocaleTimeString(), '#2ecc71'); }
  catch(e){ showSaveMsg('Save failed: ' + e.message, '#ff4757'); }
};
loadGame = function(){
  const raw = localStorage.getItem('animeRPG_v2') || localStorage.getItem('animeRPG_v1');
  if (!raw) { showSaveMsg('No save file found.', '#ff4757'); return; }
  try { const saved=JSON.parse(raw); Object.keys(saved).forEach(k=>G[k]=saved[k]); ensureGameCollections(); installFullRaceSkillTrees(); applyStats(); updateStats(); showSaveMsg('✓ Loaded save successfully!', '#2ecc71'); if (G.name && G.race_id && G.jobs && G.jobs.length) town_center(); }
  catch(e){ showSaveMsg('Load failed: ' + e.message, '#ff4757'); }
};

const _town_center_expansion_base = town_center;
town_center = function(){
  clearOutput(); showBattlePanel(false); applyStats(); updateStats();
  print('Town Center  —  Total Level ' + G.total_lv + ' / 100' + (G.level_pts ? '  [' + G.level_pts + ' Level Point(s) to spend!]' : ''), 'highlight');
  print('A crossroads between worlds. New raid gates, challenge arenas, class planning rooms, and equipment vendors are now open.', 'narrator');
  print('Update v0.3: full race skill trees, expanded jobs, raid bosses, equipment, challenge modes, and improved saves.', 'info');
  showChoices([
    ['Inn', inn], ['Shops', shops], ['🛡 Equipment Screen', equipment_screen], ['🧭 Expanded Class Planner', class_planner_screen],
    ['🤝 Recruitment Hall', recruitment_hall], ['📜 Class Registry', class_registry_screen], ['📘 YGGDRASIL Build Guide', yggdrasil_build_guide_screen],
    ['⚔ Character Status', character_screen], ['📖 Skill Screen', skill_screen], ['🗺 World Map', show_map], ['👑 Raid Map', raid_map_screen], ['⚔ PvP / Challenge Modes', challenge_mode_screen], ['🆕 Update Notes', expansion_update_screen]
  ]);
};

function injectExpansionSettings(){
  const panel=document.getElementById('settings-panel'); if(!panel || document.getElementById('expansion-settings-section')) return;
  const saveSection=[...panel.querySelectorAll('.sp-section')].find(s => /Save \/ Load/.test(s.textContent));
  const div=document.createElement('div'); div.className='sp-section'; div.id='expansion-settings-section';
  div.innerHTML='<h3>Expansion v0.3</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Skill trees, expanded jobs, raids, equipment, challenge modes, and save export/import.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); expansion_update_screen()">🆕 Update Notes</button><button class="sp-btn" onclick="closeSettingsPanel(); equipment_screen()">🛡 Equipment</button><button class="sp-btn" onclick="closeSettingsPanel(); raid_map_screen()">👑 Raids</button><button class="sp-btn" onclick="closeSettingsPanel(); challenge_mode_screen()">⚔ Challenges</button><button class="sp-btn" onclick="exportSave()">⬆ Export Save</button><button class="sp-btn" onclick="importSave()">⬇ Import Save</button></div>';
  if(saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
}
injectExpansionSettings();


// ─────────────────────────────────────────────────────────────
// MENU CLEANUP UPDATE — requested navigation reorganization
// ─────────────────────────────────────────────────────────────
// Equipment Shop now belongs to Shops.
// Skill Screen + Equipment Screen now belong to Character Status.
// World Map + Raid Map now belong to Map Screen.
// Update Notes + YGGDRASIL Build Guide now belong to Settings.

function map_screen(){
  clearOutput(); showBattlePanel(false);
  print('MAP SCREEN', 'highlight');
  print('Choose where you want to travel. The World Map is for normal zones. The Raid Map is for boss gates and high-HP raid encounters.', 'narrator');
  print('Total Level: ' + G.total_lv + ' / 100', 'info');
  showChoices([
    ['🗺 World Map — normal zones', show_map],
    ['👑 Raid Map — boss gates', raid_map_screen],
    ['← Town Center', town_center],
  ]);
}

// Rebuild Raid Map with a Map Screen back button instead of Town Center.
raid_map_screen = function(){
  clearOutput(); showBattlePanel(false); print('RAID MAP — BOSS GATES', 'highlight');
  print('Raid bosses are high-HP enemies designed for finished builds, active recruits, gear, and race/class skill synergy.', 'narrator');
  print('Raid bosses are accessed from the Map Screen.', 'info');
  $ch.innerHTML='';
  RAID_BOSSES.forEach((boss,i)=>{ const req=i*8; const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.textContent=boss.emoji+' '+boss.name+' — Recommended Lv '+req+'+\n'+boss.lore; b.disabled=G.total_lv<req; b.onclick=()=>startRaidBattle(boss); $ch.appendChild(b); });
  const back=document.createElement('button'); back.textContent='← Map Screen'; back.onclick=map_screen; $ch.appendChild(back);
};
startRaidBattle = function(boss){ _lastZone = raid_map_screen; startBattle({...boss}); };

// Rebuild Equipment Screen without the Equipment Shop button.
equipment_screen = function(){
  ensureExpansionState(); applyStats(); updateStats(); clearOutput(); showBattlePanel(false);
  print('EQUIPMENT SCREEN', 'highlight');
  print('Manage your current gear here. Buy new equipment from Shops → Equipment Shop.', 'narrator');
  print('Slots: Head, Chest, Arms, Legs, Weapon 1, Weapon 2, and 5 Accessories. Weapon 1 is for one-handed weapons. Weapon 2 is for two-handed weapons or staves.', 'narrator');
  const b = equipBonuses();
  print('Current gear bonus: HP +' + b.hp + ' · MP +' + b.mp + ' · ATK +' + ((b.pa||0)+(b.atk||0)) + ' · MAG +' + b.ma + ' · DEF +' + b.pd + ' · AGI +' + b.ag + ' · RES +' + b.rs + ' · SP +' + b.sp, 'info');
  $ch.innerHTML = '';
  const renderSlot = (label, slot, idx) => {
    const id = slot === 'accessory' ? G.equipment.accessories[idx] : G.equipment[slot];
    const it = id ? getEquip(id) : null;
    const row = document.createElement('div');
    row.className = 'cs-exp-row';
    row.innerHTML = '<div class="cs-exp-label">' + label + '</div><div style="color:#e8c84a;font-size:13px">' + (it ? it.name : 'Empty') + '</div><div style="color:#8aaac8;font-size:11px">' + (it ? it.desc : 'No item equipped.') + '</div>';
    $ch.appendChild(row);
  };
  renderSlot('HEAD','head'); renderSlot('CHEST','chest'); renderSlot('ARMS','arms'); renderSlot('LEGS','legs'); renderSlot('WEAPON 1 — ONE HANDED','weapon1'); renderSlot('WEAPON 2 — TWO HANDED','weapon2');
  for (let i=0;i<ACCESSORY_SLOTS;i++) renderSlot('ACCESSORY ' + (i+1), 'accessory', i);
  const change = document.createElement('button'); change.textContent = '⚙ Change Equipped Items'; change.onclick = equipment_change_screen; $ch.appendChild(change);
  const shopHint = document.createElement('button'); shopHint.textContent = '🛒 Go to Shops / Equipment Shop'; shopHint.onclick = shops; $ch.appendChild(shopHint);
  const back = document.createElement('button'); back.textContent = '← Character Status'; back.onclick = character_screen; $ch.appendChild(back);
};

equipment_shop = function(){
  ensureExpansionState(); clearOutput(); showBattlePanel(false);
  print('EQUIPMENT SHOP', 'highlight'); print('Gold: ' + G.gold, 'info'); print('Buy gear here, then equip it from Character Status → Equipment Screen.', 'narrator'); $ch.innerHTML = '';
  EQUIPMENT_DATA.forEach(it => {
    const owned = G.equipment_inventory.includes(it.id); const price = priceOf(it);
    const btn = document.createElement('button'); btn.style.whiteSpace = 'pre-wrap';
    btn.textContent = (owned ? '[OWNED] ' : '') + it.name + ' — ' + it.slot.toUpperCase() + ' — ' + price + 'g\n' + it.desc + '\nBonus: ' + JSON.stringify(it.bon || {}) + (it.atk ? ' · ATK +' + it.atk : '');
    btn.disabled = owned || G.gold < price;
    btn.onclick = () => { G.gold -= price; G.equipment_inventory.push(it.id); saveGame(); equipment_shop(); };
    $ch.appendChild(btn);
  });
  const back = document.createElement('button'); back.textContent = '← Back to Shops'; back.onclick = shops; $ch.appendChild(back);
};

// Make Change Equipment return to Equipment Screen, which now lives under Character Status.
equipment_change_screen = function(){
  ensureExpansionState(); clearOutput(); showBattlePanel(false); print('CHANGE EQUIPMENT', 'highlight');
  print('Tap a slot, then choose an owned item for that slot.', 'narrator'); $ch.innerHTML = '';
  const slots = [['Head','head'],['Chest','chest'],['Arms','arms'],['Legs','legs'],['Weapon 1','weapon1'],['Weapon 2','weapon2']];
  slots.forEach(([label, slot]) => { const b=document.createElement('button'); b.textContent = label + ': ' + (G.equipment[slot] ? getEquip(G.equipment[slot]).name : 'Empty'); b.onclick=()=>chooseEquipForSlot(slot); $ch.appendChild(b); });
  for (let i=0;i<ACCESSORY_SLOTS;i++){ const b=document.createElement('button'); const id=G.equipment.accessories[i]; b.textContent='Accessory '+(i+1)+': '+(id?getEquip(id).name:'Empty'); b.onclick=()=>chooseEquipForSlot('accessory',i); $ch.appendChild(b); }
  const back=document.createElement('button'); back.textContent='← Equipment Screen'; back.onclick=equipment_screen; $ch.appendChild(back);
};

// Rebuild Shops and add Equipment Shop there.
shops = function() {
    clearOutput();
    print('The Market District', 'highlight');
    print('Merchants shout over each other in four separate stalls.', 'narrator');
    print('Gold: ' + G.gold, 'info');
    if (G.weapon) print('Equipped weapon: ' + G.weapon.name + ' (+' + G.weapon.atk + ' ATK)', 'info');
    print('Equipment Shop is now here. Equipment Screen is only for changing gear.', 'success');
    print('');
    showChoices([
        ['⚔  Blacksmith    — ' + WEAPON_SHOPS.length + ' anime shops · ' + WEAPONS.length + ' total weapons', blacksmith_selector],
        ['🛡  Equipment Shop — head, chest, arms, legs, weapons, accessories', equipment_shop],
        ['✨  Skill Library — ' + SPELL_SHOPS.length + ' anime shops · ' + SPELLS.length + ' total skills',   spell_shop_selector],
        ['⚗  Alchemy Shop  — ' + POTION_SHOPS.length + ' anime shops · ' + POTIONS.length + ' total items',  alchemy_selector],
        ['←  Leave', town_center],
    ]);
};

// Character Status becomes the home for Skills, Equipment, and Class Planner.
const _character_screen_menu_cleanup_base = character_screen;
character_screen = function(){
  _character_screen_menu_cleanup_base();
  const nav = document.createElement('div');
  nav.className = 'cs-exp-row';
  nav.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">CHARACTER MENU</div><div style="font-size:11px;color:#8aaac8;line-height:1.5">Skills, equipment, and build planning now live here.</div>';
  const skill = document.createElement('button'); skill.textContent = '📖 Skill Screen'; skill.onclick = skill_screen; nav.appendChild(skill);
  const equip = document.createElement('button'); equip.textContent = '🛡 Equipment Screen'; equip.onclick = equipment_screen; nav.appendChild(equip);
  const planner = document.createElement('button'); planner.textContent = '🧭 Expanded Class Planner'; planner.onclick = class_planner_screen; nav.appendChild(planner);
  $ch.appendChild(nav);
};

// Rebuild Town Center as the cleaned main hub.
town_center = function(){
  clearOutput(); showBattlePanel(false); applyStats(); updateStats();
  print('Town Center  —  Total Level ' + G.total_lv + ' / 100' + (G.level_pts ? '  [' + G.level_pts + ' Level Point(s) to spend!]' : ''), 'highlight');
  print('A crossroads between worlds. Shops, recruitment, character management, maps, and challenge arenas are open.', 'narrator');
  print('Update notes and the YGGDRASIL Build Guide are now inside the Settings menu.', 'info');
  showChoices([
    ['Inn', inn],
    ['Shops', shops],
    ['⚔ Character Status', character_screen],
    ['🗺 Map Screen', map_screen],
    ['🤝 Recruitment Hall', recruitment_hall],
    ['📜 Class Registry', class_registry_screen],
    ['⚔ PvP / Challenge Modes', challenge_mode_screen],
  ]);
};

// Update Notes should not route people into moved screens.
expansion_update_screen = function(){
  clearOutput(); showBattlePanel(false); print('UPDATE v0.3 — SYSTEM EXPANSION', 'highlight');
  print('Added full race skill trees with active and passive skills for every race.', 'success');
  print('Expanded class system with a Class Planner and clearer tier roles.', 'success');
  print('Added raid-style boss gates through the new Map Screen → Raid Map.', 'success');
  print('Added equipment: Head, Chest, Arms, Legs, Weapon 1, Weapon 2, and 5 Accessories.', 'success');
  print('Moved Equipment Shop to Shops. Equipment Screen now lives under Character Status.', 'info');
  print('Moved Skill Screen and Equipment Screen to Character Status.', 'info');
  print('Moved World Map and Raid Map to the new Map Screen.', 'info');
  print('Moved Update Notes and YGGDRASIL Build Guide to Settings.', 'info');
  print('Added simulated PvP / Challenge Modes for build testing.', 'success');
  print('Improved save/load with version metadata, autosave helpers, export, and import.', 'success');
  showChoices([['← Back', returnFromHelp], ['⚙ Close / Return to Town', town_center]]);
};

// Replace the expansion Settings section with update/help/save tools only.
injectExpansionSettings = function(){
  const panel=document.getElementById('settings-panel'); if(!panel) return;
  const old=document.getElementById('expansion-settings-section'); if(old) old.remove();
  const saveSection=[...panel.querySelectorAll('.sp-section')].find(s => /Save \/ Load/.test(s.textContent));
  const div=document.createElement('div'); div.className='sp-section'; div.id='expansion-settings-section';
  div.innerHTML='<h3>Expansion v0.3</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Update notes and the YGGDRASIL Build Guide are kept here so they do not interrupt character creation or town navigation.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); expansion_update_screen()">🆕 Update Notes</button><button class="sp-btn" onclick="closeSettingsPanel(); yggdrasil_build_guide_screen()">📘 YGGDRASIL Build Guide</button><button class="sp-btn" onclick="exportSave()">⬆ Export Save</button><button class="sp-btn" onclick="importSave()">⬇ Import Save</button></div>';
  if(saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
};
injectExpansionSettings();


// ═══════════════════════════════════════════════════════════════
// EQUIPMENT SHOP v0.4.1 — Armor/Accessory Anime Shops
// Moves all non-weapon gear into 9 anime shops with category screens.
// Weapons are handled by the Blacksmith only.
// ═══════════════════════════════════════════════════════════════
const ARMOR_EQUIP_SLOTS = ['head','chest','arms','legs'];
const EQUIPMENT_CATEGORIES = [
  {slot:'head', label:'Head'},
  {slot:'chest', label:'Chest'},
  {slot:'arms', label:'Arms'},
  {slot:'legs', label:'Legs'},
  {slot:'accessory', label:'Accessories'}
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
function equipmentSlotBonus(slot, tier, key){
  const t = Number(tier) || 1;
  const magicKeys = ['bleach','jjk','dbz','various'];
  const speedKeys = ['naruto','onepiece','demonslayer','hxh','mha'];
  const magic = magicKeys.includes(key), speed = speedKeys.includes(key);
  if (slot === 'head') return magic ? {mp:12*t, ma:1+t, md:t} : {ag:t, rs:t, sp:Math.ceil(t/2)};
  if (slot === 'chest') return {hp:22*t, pd:1+t, rs:Math.ceil(t/2)};
  if (slot === 'arms') return magic ? {ma:2+t, mp:8*t} : {pa:2+t, pd:t};
  if (slot === 'legs') return speed ? {ag:2+t, sp:Math.ceil(t/2)} : {ag:t, pd:t, rs:t};
  return magic ? {mp:10*t, ma:t, sp:t} : speed ? {ag:t, pa:t, sp:t} : {hp:12*t, rs:t, sp:t};
}
function installAnimeEquipmentShops(){
  // Remove the old equipment-shop weapon entries; Blacksmith owns weapon buying.
  for (let i = EQUIPMENT_DATA.length - 1; i >= 0; i--) {
    if (EQUIPMENT_DATA[i].slot === 'weapon1' || EQUIPMENT_DATA[i].slot === 'weapon2') EQUIPMENT_DATA.splice(i, 1);
  }
  EQUIPMENT_SHOPS.forEach(shop => {
    EQUIPMENT_CATEGORIES.forEach(cat => {
      const baseName = EQUIPMENT_NAME_PARTS[shop.key][cat.slot];
      const suffixes = EQUIPMENT_CATEGORY_SUFFIXES[cat.slot];
      suffixes.forEach((suffix, idx) => {
        const tier = idx + 1;
        const id = 'eq_' + shop.key + '_' + cat.slot + '_' + tier;
        if (EQUIPMENT_DATA.some(it => it.id === id)) return;
        const priceBase = cat.slot === 'accessory' ? 115 : 135;
        EQUIPMENT_DATA.push({
          id,
          slot: cat.slot,
          anime: shop.anime,
          shop: shop.name,
          tier,
          name: shop.anime + ' ' + baseName + ' ' + suffix,
          cost: priceBase * tier + (tier * tier * 25),
          bon: equipmentSlotBonus(cat.slot, tier, shop.key),
          desc: cat.label + ' gear from ' + shop.name + '. Focus: ' + EQUIPMENT_NAME_PARTS[shop.key].stat + '. Tier ' + tier + '/5.'
        });
      });
    });
  });
}
installAnimeEquipmentShops();

emptyEquipment = function(){ return {head:null,chest:null,arms:null,legs:null,accessories:[null,null,null,null,null]}; };
ensureExpansionState = function(){
  if (!G.equipment || typeof G.equipment !== 'object') G.equipment = emptyEquipment();
  ARMOR_EQUIP_SLOTS.forEach(s => { if (!(s in G.equipment)) G.equipment[s] = null; });
  delete G.equipment.weapon1;
  delete G.equipment.weapon2;
  if (!Array.isArray(G.equipment.accessories)) G.equipment.accessories = [null,null,null,null,null];
  while (G.equipment.accessories.length < ACCESSORY_SLOTS) G.equipment.accessories.push(null);
  G.equipment.accessories = G.equipment.accessories.slice(0, ACCESSORY_SLOTS);
  if (!Array.isArray(G.equipment_inventory)) G.equipment_inventory = [];
  if (!Array.isArray(G.challenge_log)) G.challenge_log = [];
  if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = { version: EXPANSION_VERSION, saves: 0, lastSaved: null };
  if (!Array.isArray(G.unlocked_maps)) G.unlocked_maps = [];
  G.equipment_inventory = [...new Set(G.equipment_inventory)].filter(id => { const it = getEquip(id); return it && it.slot !== 'weapon1' && it.slot !== 'weapon2'; });
};

equipBonuses = function(){
  ensureExpansionState();
  const out = {hp:0,mp:0,pa:0,pd:0,ag:0,ma:0,md:0,rs:0,sp:0,atk:0};
  const ids = [];
  ARMOR_EQUIP_SLOTS.forEach(s => { if (G.equipment[s]) ids.push(G.equipment[s]); });
  (G.equipment.accessories || []).forEach(id => { if (id) ids.push(id); });
  ids.map(getEquip).filter(Boolean).forEach(it => {
    Object.entries(it.bon || {}).forEach(([k,v]) => out[k] = (out[k] || 0) + v);
  });
  return out;
};

equipment_screen = function(){
  ensureExpansionState(); applyStats(); updateStats(); clearOutput(); showBattlePanel(false);
  print('EQUIPMENT SCREEN', 'highlight');
  print('Armor/accessory slots: Head, Chest, Arms, Legs, and 5 Accessories. Weapons are handled by the Blacksmith and your normal weapon slot.', 'narrator');
  const b = equipBonuses();
  print('Current gear bonus: HP +' + b.hp + ' · MP +' + b.mp + ' · ATK +' + (b.pa||0) + ' · MAG +' + b.ma + ' · DEF +' + b.pd + ' · AGI +' + b.ag + ' · RES +' + b.rs + ' · SP +' + b.sp, 'info');
  $ch.innerHTML = '';
  const renderSlot = (label, slot, idx) => {
    const id = slot === 'accessory' ? G.equipment.accessories[idx] : G.equipment[slot];
    const it = id ? getEquip(id) : null;
    const row = document.createElement('div');
    row.className = 'cs-exp-row';
    row.innerHTML = '<div class="cs-exp-label">' + label + '</div><div style="color:#e8c84a;font-size:13px">' + (it ? it.name : 'Empty') + '</div><div style="color:#8aaac8;font-size:11px">' + (it ? it.desc : 'No item equipped.') + '</div>';
    $ch.appendChild(row);
  };
  renderSlot('HEAD','head'); renderSlot('CHEST','chest'); renderSlot('ARMS','arms'); renderSlot('LEGS','legs');
  for (let i=0;i<ACCESSORY_SLOTS;i++) renderSlot('ACCESSORY ' + (i+1), 'accessory', i);
  const change = document.createElement('button'); change.textContent = '⚙ Change Equipped Items'; change.onclick = equipment_change_screen; $ch.appendChild(change);
  const shopHint = document.createElement('button'); shopHint.textContent = '🛒 Go to Shops / Equipment Shop'; shopHint.onclick = equipment_shop; $ch.appendChild(shopHint);
  const back = document.createElement('button'); back.textContent = '← Character Status'; back.onclick = character_screen; $ch.appendChild(back);
};

equipment_change_screen = function(){
  ensureExpansionState(); clearOutput(); showBattlePanel(false); print('CHANGE EQUIPMENT', 'highlight');
  print('Tap a slot, then choose an owned armor/accessory item. Weapons are changed at the Blacksmith weapon system.', 'narrator'); $ch.innerHTML = '';
  const slots = [['Head','head'],['Chest','chest'],['Arms','arms'],['Legs','legs']];
  slots.forEach(([label, slot]) => { const b=document.createElement('button'); b.textContent = label + ': ' + (G.equipment[slot] ? getEquip(G.equipment[slot]).name : 'Empty'); b.onclick=()=>chooseEquipForSlot(slot); $ch.appendChild(b); });
  for (let i=0;i<ACCESSORY_SLOTS;i++){ const b=document.createElement('button'); const id=G.equipment.accessories[i]; b.textContent='Accessory '+(i+1)+': '+(id?getEquip(id).name:'Empty'); b.onclick=()=>chooseEquipForSlot('accessory',i); $ch.appendChild(b); }
  const back=document.createElement('button'); back.textContent='← Equipment Screen'; back.onclick=equipment_screen; $ch.appendChild(back);
};

chooseEquipForSlot = function(slot, idx){
  clearOutput(); showBattlePanel(false); print('EQUIP: ' + (slot === 'accessory' ? 'Accessory '+(idx+1) : slot.toUpperCase()), 'highlight'); $ch.innerHTML='';
  const clear=document.createElement('button'); clear.textContent='Unequip / Empty Slot'; clear.onclick=()=>{ if(slot==='accessory') G.equipment.accessories[idx]=null; else G.equipment[slot]=null; applyStats(); updateStats(); equipment_change_screen(); }; $ch.appendChild(clear);
  const owned = getOwnedEquipment().filter(it => it.slot === slot);
  if (!owned.length) print('You do not own any ' + (slot === 'accessory' ? 'accessories' : slot + ' gear') + ' yet. Buy gear from Shops → Equipment Shop.', 'narrator');
  owned.forEach(it => { const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.textContent=it.name+' ['+(it.anime || 'Gear')+']\n'+it.desc+'\nBonus: '+JSON.stringify(it.bon || {}); b.onclick=()=>{ if(slot==='accessory') G.equipment.accessories[idx]=it.id; else G.equipment[slot]=it.id; applyStats(); updateStats(); equipment_change_screen(); }; $ch.appendChild(b); });
  const shop=document.createElement('button'); shop.textContent='🛒 Go to Equipment Shop'; shop.onclick=equipment_shop; $ch.appendChild(shop);
  const back=document.createElement('button'); back.textContent='← Back'; back.onclick=equipment_change_screen; $ch.appendChild(back);
};

function equipmentShopCount(shop, slot){ return EQUIPMENT_DATA.filter(it => it.anime === shop.anime && it.slot === slot).length; }
equipment_shop = function(){
  ensureExpansionState(); clearOutput(); showBattlePanel(false);
  print('EQUIPMENT SHOP — ANIME GEAR DISTRICT', 'highlight');
  print('Gold: ' + G.gold, 'info');
  print('Choose one of 9 anime equipment shops. Each shop has Head, Chest, Arms, Legs, and Accessories categories with 5 items each. Weapons were removed from this shop and stay in the Blacksmith.', 'narrator');
  $ch.innerHTML = '';
  EQUIPMENT_SHOPS.forEach((shop, idx) => {
    const b = document.createElement('button'); b.style.whiteSpace='pre-wrap';
    b.textContent = shop.name + ' — ' + shop.anime + '\nHead 5 · Chest 5 · Arms 5 · Legs 5 · Accessories 5';
    b.onclick = () => equipment_shop_categories(idx);
    $ch.appendChild(b);
  });
  const back = document.createElement('button'); back.textContent = '← Back to Shops'; back.onclick = shops; $ch.appendChild(back);
};
function equipment_shop_categories(shopIdx){
  ensureExpansionState(); clearOutput(); showBattlePanel(false);
  const shop = EQUIPMENT_SHOPS[shopIdx];
  print(shop.name.toUpperCase(), 'highlight');
  print(shop.anime + ' equipment categories. Gold: ' + G.gold, 'info');
  $ch.innerHTML = '';
  EQUIPMENT_CATEGORIES.forEach(cat => {
    const count = equipmentShopCount(shop, cat.slot);
    const b = document.createElement('button');
    b.textContent = cat.label + ' — ' + count + ' items';
    b.onclick = () => equipment_shop_items(shopIdx, cat.slot);
    $ch.appendChild(b);
  });
  const back = document.createElement('button'); back.textContent = '← Equipment Shops'; back.onclick = equipment_shop; $ch.appendChild(back);
}
function equipment_shop_items(shopIdx, slot){
  ensureExpansionState(); clearOutput(); showBattlePanel(false);
  const shop = EQUIPMENT_SHOPS[shopIdx];
  const cat = EQUIPMENT_CATEGORIES.find(c => c.slot === slot);
  print(shop.name.toUpperCase() + ' — ' + (cat ? cat.label.toUpperCase() : slot.toUpperCase()), 'highlight');
  print('Gold: ' + G.gold, 'info');
  $ch.innerHTML = '';
  const items = EQUIPMENT_DATA.filter(it => it.anime === shop.anime && it.slot === slot).sort((a,b)=>(a.tier||0)-(b.tier||0));
  items.forEach(it => {
    const owned = G.equipment_inventory.includes(it.id); const price = priceOf(it);
    const b = document.createElement('button'); b.style.whiteSpace='pre-wrap';
    b.textContent = (owned ? '[OWNED] ' : '') + it.name + ' — ' + price + 'g\n' + it.desc + '\nBonus: ' + JSON.stringify(it.bon || {});
    b.disabled = owned || G.gold < price;
    b.onclick = () => { G.gold -= price; G.equipment_inventory.push(it.id); saveGame(); equipment_shop_items(shopIdx, slot); };
    $ch.appendChild(b);
  });
  const back = document.createElement('button'); back.textContent = '← ' + shop.name; back.onclick = () => equipment_shop_categories(shopIdx); $ch.appendChild(back);
}

shops = function() {
    clearOutput();
    print('The Market District', 'highlight');
    print('Merchants shout over each other in four separate stalls.', 'narrator');
    print('Gold: ' + G.gold, 'info');
    if (G.weapon) print('Equipped weapon: ' + G.weapon.name + ' (+' + G.weapon.atk + ' ATK)', 'info');
    print('Equipment Shop now has 9 anime shops with 5 Head, 5 Chest, 5 Arms, 5 Legs, and 5 Accessory items each. Weapons stay at the Blacksmith.', 'success');
    showChoices([
        ['⚔  Blacksmith    — ' + WEAPON_SHOPS.length + ' anime shops · ' + WEAPONS.length + ' total weapons', blacksmith_selector],
        ['🛡  Equipment Shop — ' + EQUIPMENT_SHOPS.length + ' anime shops · armor/accessory gear', equipment_shop],
        ['✨  Skill Library — ' + SPELL_SHOPS.length + ' anime shops · ' + SPELLS.length + ' total skills',   spell_shop_selector],
        ['⚗  Alchemy Shop  — ' + POTION_SHOPS.length + ' anime shops · ' + POTIONS.length + ' total items',  alchemy_selector],
        ['←  Leave', town_center],
    ]);
};

expansion_update_screen = function(){
  clearOutput(); showBattlePanel(false); print('UPDATE v0.4.1 — EQUIPMENT SHOP REWORK', 'highlight');
  print('Equipment Shop now has 9 anime shops, matching the other shop style.', 'success');
  print('Each anime equipment shop has 5 Head items, 5 Chest items, 5 Arms items, 5 Legs items, and 5 Accessories.', 'success');
  print('Weapon gear was removed from the Equipment Shop because weapons are handled by the Blacksmith.', 'success');
  print('Equipment Screen now focuses on armor/accessory slots only: Head, Chest, Arms, Legs, and 5 Accessories.', 'info');
  print('Previous v0.3 systems are still active: full race skill trees, expanded class planning, raid maps, challenge modes, and improved saves.', 'info');
  showChoices([['← Back', returnFromHelp], ['⚙ Close / Return to Town', town_center]]);
};




// ═══════════════════════════════════════════════════════════════
