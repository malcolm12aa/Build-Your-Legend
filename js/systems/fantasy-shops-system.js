// v0.8 — Fantasy shop cleanup + level-up-only class paths
// Requested changes:
// - Class path panels only show while unspent Level Points exist.
// - Blacksmith, Equipment Shop, Skill Library, and Alchemy Shop now use fantasy shops/items.
// - The old 9 anime shops/items are replaced by fantasy market data.
// ═══════════════════════════════════════════════════════════════
(function installV08FantasyMarketPatch(){
  const V08_VERSION = 'v0.8-fantasy-shops-classpath-cleanup';

  function clearAndFill(arr, data){
    if (!Array.isArray(arr)) return;
    arr.splice(0, arr.length, ...data);
  }
  function slug(text){
    return String(text).toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');
  }
  function statLine(bon){
    return Object.entries(bon || {}).map(([k,v]) => k.toUpperCase() + ' +' + v).join(' · ') || 'No stat bonus';
  }

  // ── Replace the Blacksmith anime weapon districts with fantasy forges.
  const fantasyWeaponShopDefs = [
    {key:'ironbound', name:'Ironbound Forge', realm:'Guild Steel', theme:'practical adventurer steel', statusId:'stun', statusChance:0.24,
      weapons:[['Militia Arming Sword',14,70],['Tower Guard Mace',24,145],['Mercenary War Axe',34,245],['Champion Bastard Sword',48,390],['Vanguard Oathblade',64,590]]},
    {key:'dwarven', name:'Deep Anvil Hall', realm:'Dwarven Craft', theme:'heavy metalwork and armor-breaking edges', statusId:'weaken', statusChance:0.30,
      weapons:[['Tunnel Pick Hammer',16,85],['Runed Beard Axe',27,165],['Stonebreaker Maul',39,285],['Adamant Warhammer',55,450],['Mountain-King Greataxe',72,700]]},
    {key:'elven', name:'Moonleaf Armory', realm:'Elven Craft', theme:'light blades, bows, and elegant precision', statusId:'bleed', statusChance:0.28,
      weapons:[['Moonleaf Shortsword',13,75],['Silverthorn Rapier',25,160],['Starwood Longbow',36,265],['Elderwood Saber',50,420],['Lunar Warden Blade',67,640]]},
    {key:'arcane', name:'Arcane Armory', realm:'Mage Guild', theme:'enchanted weapons and spell-channeling rods', statusId:'marked', statusChance:0.35,
      weapons:[['Apprentice Focus Rod',12,80],['Spell-Etched Dagger',23,155],['Runebound Staff-Spear',35,275],['Manaforged Glaive',49,430],['Archmage Battle Staff',66,660]]},
    {key:'holy', name:'Sanctified Reliquary', realm:'Temple Forge', theme:'blessed arms against undead, fiends, and curses', statusId:'fear', statusChance:0.22,
      weapons:[['Novice Censer Mace',15,85],['Blessed War Pick',26,175],['Crusader Longsword',38,300],['Sainted Halberd',54,480],['Dawnbringer Greatsword',73,740]]},
    {key:'shadow', name:'Shadow Bazaar Blades', realm:'Underworld Market', theme:'silent knives, cursed edges, and poison channels', statusId:'poison', statusChance:0.36,
      weapons:[['Back-Alley Stiletto',13,70],['Nightglass Kukri',24,160],['Venomfang Dirk',36,280],['Grave-Silk Scythe',51,460],['Umbral Execution Blade',69,710]]},
    {key:'wild', name:'Beastkin Warworks', realm:'Frontier Tribes', theme:'claws, hunting spears, and predator weapons', statusId:'bleed', statusChance:0.34,
      weapons:[['Bone Hunting Spear',15,80],['Direfang Knuckles',27,175],['Raptor Talon Blades',40,305],['Apex Hunter Poleaxe',56,500],['Primal King Clawblade',74,760]]},
    {key:'dragon', name:'Dragonbone Crucible', realm:'Wyrm Relics', theme:'dragonbone, scale-metal, and breath-forged weapons', statusId:'burn', statusChance:0.38,
      weapons:[['Charred Wyrm Dagger',17,100],['Drakebone Saber',30,215],['Flame-Scale Lance',44,360],['Ancient Dragon Halberd',61,560],['True Dragon Slayer',82,880]]},
    {key:'relic', name:'Adventurer Relic Exchange', realm:'Ancient Ruins', theme:'recovered dungeon weapons with strange enchantments', statusId:'confusion', statusChance:0.30,
      weapons:[['Rust-Cleaned Relic Sword',14,75],['Mirror-Edge Falchion',25,170],['Labyrinth Pike',37,295],['Lost Hero Claymore',53,470],['World-Dungeon Calibur',76,820]]}
  ];
  const fantasyWeapons = [];
  const fantasyWeaponShops = [];
  fantasyWeaponShopDefs.forEach(shop => {
    const ids = [];
    shop.weapons.forEach((w, tierIdx) => {
      const id = 'fw_' + shop.key + '_' + slug(w[0]);
      ids.push(id);
      fantasyWeapons.push({
        id, name:w[0], anime:shop.realm, cost:w[2], atk:w[1],
        statusId:shop.statusId, statusChance:shop.statusChance,
        desc:'Fantasy weapon from ' + shop.name + '. Theme: ' + shop.theme + '. Inflicts ' + shop.statusId + ' (' + Math.round(shop.statusChance*100) + '%). Tier ' + (tierIdx+1) + '/5.'
      });
    });
    fantasyWeaponShops.push({key:shop.key, name:shop.name, anime:shop.realm, theme:shop.theme, ids});
  });
  clearAndFill(WEAPONS, fantasyWeapons);
  clearAndFill(WEAPON_SHOPS, fantasyWeaponShops);

  // ── Replace Skill Library anime technique shops with fantasy spell/technique libraries.
  const spellShopDefs = [
    {key:'arcane', name:'Arcane Archive', realm:'Arcane Arts', school:'formula magic and raw mana theory', status:'marked', buff:'focus', spells:[
      ['Mana Bolt',10,38,80,false],['Arcane Chains',18,58,160,false],['Runic Barrage',28,82,260,true],['Astral Lance',40,118,420,false],['Grand Arcana Nova',62,168,680,true]]},
    {key:'elemental', name:'Elemental Circle', realm:'Elemental Arts', school:'fire, ice, lightning, wind, earth, and water', status:'burn', buff:'haste', spells:[
      ['Ember Dart',9,34,75,false],['Frost Ring',18,55,150,true],['Lightning Spike',26,88,260,false],['Stormcall',42,122,430,true],['Elemental Cataclysm',68,180,730,true]]},
    {key:'divine', name:'Chapel of Miracles', realm:'Divine Arts', school:'healing light, warding prayers, and purification', status:'weaken', buff:'guard', spells:[
      ['Lesser Smite',10,32,70,false],['Blessed Barrier',20,50,155,false],['Radiant Pillar',30,84,270,true],['Saintfire Judgment',46,126,460,false],['Miracle Starfall',70,176,760,true]]},
    {key:'shadow', name:'Shadow Grimoire Vault', realm:'Forbidden Arts', school:'curses, darkness, fear, and forbidden bargains', status:'fear', buff:'bravery', spells:[
      ['Hex Needle',11,36,85,false],['Nightmare Veil',21,60,170,false],['Abyss Grasp',32,92,300,true],['Soul Rend',48,134,500,false],['Void Eclipse',72,190,820,true]]},
    {key:'nature', name:'Verdant Druidic Library', realm:'Nature Arts', school:'plants, beasts, poison, and terrain control', status:'poison', buff:'regen', spells:[
      ['Thorn Whip',9,33,70,false],['Root Snare',17,56,150,false],['Venom Bloom',28,82,280,true],['Forest Avatar',42,120,460,false],['Worldroot Dominion',66,174,760,true]]},
    {key:'martial', name:'Martial Dojo Scroll Wall', realm:'Body Arts', school:'ki, aura, pressure points, and body reinforcement', status:'stun', buff:'bravery', spells:[
      ['Ki Palm',8,35,70,false],['Iron Body Breath',18,54,150,false],['Pressure Point Flurry',30,86,275,false],['Dragon Fist Wave',44,124,470,true],['Heavenly Body Release',68,178,780,true]]},
    {key:'summon', name:'Summoner Sanctum', realm:'Contract Arts', school:'familiars, spirits, constructs, and pact circles', status:'confusion', buff:'guard', spells:[
      ['Lesser Familiar Bite',10,35,80,false],['Spirit Chain',20,60,170,false],['Golem Fist Call',32,90,300,true],['Dragonling Contract',50,138,540,false],['King Spirit Descent',76,198,860,true]]},
    {key:'trickster', name:'Trickster Theatre', realm:'Illusion Arts', school:'mirrors, sound, misdirection, and phantom doubles', status:'confusion', buff:'haste', spells:[
      ['Mirror Feint',9,31,65,false],['Phantom Step',18,54,150,false],['Hall of Echoes',30,84,285,true],['False Death Cut',44,126,480,false],['Dream-Cage Masquerade',70,184,790,true]]},
    {key:'war', name:'Royal War College', realm:'Battlefield Arts', school:'formations, war chants, siege magic, and command spells', status:'vulnerable', buff:'focus', spells:[
      ['Commanding Shout',8,30,65,false],['Shieldbreak Order',18,58,155,false],['Volley Signal',30,88,300,true],['Banner of Conquest',46,132,520,true],['Emperor’s War Mandate',72,192,840,true]]}
  ];
  const fantasySpells = [];
  const fantasySpellShops = [];
  spellShopDefs.forEach(shop => {
    const ids=[];
    shop.spells.forEach((s, idx) => {
      const id='fs_' + shop.key + '_' + slug(s[0]);
      ids.push(id);
      fantasySpells.push({
        id, name:s[0], anime:shop.realm, cost:s[3], mp:s[1], power:s[2], aoe:s[4],
        status: idx % 2 === 0 ? shop.status : null,
        selfBuff: idx === 1 || idx === 4 ? shop.buff : null,
        desc:'Fantasy skill from ' + shop.name + ': ' + shop.school + '. ' + (s[4] ? 'Hits all enemies. ' : 'Single-target technique. ') + (idx % 2 === 0 ? 'Can apply ' + shop.status + '. ' : '') + ((idx === 1 || idx === 4) ? 'Grants self ' + shop.buff + '. ' : '')
      });
    });
    fantasySpellShops.push({key:shop.key, name:shop.name, anime:shop.realm, school:shop.school, ids});
  });
  clearAndFill(SPELLS, fantasySpells);
  clearAndFill(SPELL_SHOPS, fantasySpellShops);

  // ── Replace Alchemy anime remedies with fantasy supplies.
  const potionShopDefs = [
    {key:'herbal', name:'Greenroot Herbalist', realm:'Herbal Remedies', items:[
      {name:'Greenroot Poultice', cost:45, hp:55, desc:'Restores 55 HP using crushed healing leaves.'},
      {name:'Mosswater Flask', cost:65, mp:65, desc:'Restores 65 MP with cool spring moss essence.'},
      {name:'Antitoxin Leafwrap', cost:55, cure:['poison','bleed'], desc:'Cures Poison and Bleed.'},
      {name:'Briar Guard Tonic', cost:115, buff:'guard', desc:'Grants Guard through hardened vine essence.'},
      {name:'Elderbloom Draught', cost:220, hp:210, desc:'Restores 210 HP with rare elderbloom nectar.'}]},
    {key:'battle', name:'Adventurer Battle Supplies', realm:'Guild Supplies', items:[
      {name:'Field Health Potion', cost:55, hp:70, desc:'Restores 70 HP.'},
      {name:'Field Mana Potion', cost:70, mp:75, desc:'Restores 75 MP.'},
      {name:'Rally Brew', cost:125, buff:'bravery', desc:'Grants Bravery before a hard fight.'},
      {name:'Swiftstep Vial', cost:115, buff:'haste', desc:'Grants Haste for fast turns.'},
      {name:'Guild Elixir', cost:260, full:true, desc:'Fully restores HP and MP.'}]},
    {key:'holy', name:'Temple Apothecary', realm:'Holy Remedies', items:[
      {name:'Blessed Water', cost:60, cure:['burn','poison'], desc:'Cures Burn and Poison.'},
      {name:'Prayer Bead Salve', cost:90, hp:110, desc:'Restores 110 HP.'},
      {name:'Purification Incense', cost:120, cure:['fear','confusion','sleep'], desc:'Cures Fear, Confusion, and Sleep.'},
      {name:'Saint’s Grace', cost:170, cureAll:true, desc:'Cures all negative status effects.'},
      {name:'Radiant Elixir', cost:300, full:true, desc:'Fully restores HP and MP with holy light.'}]},
    {key:'dark', name:'Midnight Tincture Stall', realm:'Forbidden Tonics', items:[
      {name:'Gravebloom Serum', cost:75, hp:80, desc:'Restores 80 HP. It smells terrible.'},
      {name:'Witchfire Draught', cost:95, mp:100, desc:'Restores 100 MP with dangerous warmth.'},
      {name:'Hexbreaker Ink', cost:85, cure:['doom','weaken','vulnerable','marked'], desc:'Cures Doom, Weaken, Vulnerable, and Marked.'},
      {name:'Blood-Iron Brew', cost:135, buff:'bravery', desc:'Grants Bravery through iron-rich blood magic.'},
      {name:'Night Queen’s Elixir', cost:320, full:true, desc:'Fully restores HP and MP through forbidden alchemy.'}]},
    {key:'elemental', name:'Elemental Salve Bar', realm:'Elemental Salves', items:[
      {name:'Fireproof Ointment', cost:50, cure:['burn'], desc:'Cures Burn.'},
      {name:'Warmstone Tea', cost:50, cure:['freeze','sleep'], desc:'Cures Freeze and Sleep.'},
      {name:'Grounding Salt', cost:60, cure:['stun','paralysis'], desc:'Cures Stun and Paralysis.'},
      {name:'Storm Mana Flask', cost:100, mp:120, desc:'Restores 120 MP.'},
      {name:'Elemental Balance Elixir', cost:240, cureAll:true, desc:'Cures all negative status effects.'}]},
    {key:'monster', name:'Monster Hunter Preserves', realm:'Monster Hunter Goods', items:[
      {name:'Trollfat Balm', cost:95, hp:130, desc:'Restores 130 HP.'},
      {name:'Basilisk Eye Drops', cost:80, cure:['petrify','fear'], desc:'Cures Petrify and Fear.'},
      {name:'Wyvern Venom Antidote', cost:75, cure:['poison'], desc:'Cures Poison.'},
      {name:'Giantbone Broth', cost:150, buff:'guard', desc:'Grants Guard with heavy mineral broth.'},
      {name:'Chimera Recovery Jelly', cost:290, full:true, desc:'Fully restores HP and MP.'}]},
    {key:'spirit', name:'Spirit Medium’s Tea House', realm:'Spirit Tonics', items:[
      {name:'Soulmend Tea', cost:80, hp:90, desc:'Restores 90 HP.'},
      {name:'Moonlit Mana Tea', cost:90, mp:110, desc:'Restores 110 MP.'},
      {name:'Exorcism Paper Ash', cost:85, cure:['fear','confusion','doom'], desc:'Cures Fear, Confusion, and Doom.'},
      {name:'Ancestor Focus Incense', cost:125, buff:'focus', desc:'Grants Focus through ancestral guidance.'},
      {name:'Spirit Spring Elixir', cost:270, full:true, desc:'Fully restores HP and MP.'}]},
    {key:'craft', name:'Craftsman’s Utility Counter', realm:'Crafting Supplies', items:[
      {name:'Repair Draught', cost:65, hp:75, desc:'Restores 75 HP.'},
      {name:'Runic Oil Flask', cost:75, mp:85, desc:'Restores 85 MP.'},
      {name:'Smoke-Clear Powder', cost:65, cure:['confusion','marked'], desc:'Cures Confusion and Marked.'},
      {name:'Quickgear Tonic', cost:120, buff:'haste', desc:'Grants Haste through gear-assisted stimulation.'},
      {name:'Masterwork Emergency Kit', cost:250, hp:250, desc:'Restores 250 HP.'}]},
    {key:'rare', name:'Rare Elixir Auction', realm:'Rare Elixirs', items:[
      {name:'Phoenix Drop', cost:180, hp:230, desc:'Restores 230 HP.'},
      {name:'Star Mana Ampoule', cost:190, mp:220, desc:'Restores 220 MP.'},
      {name:'Panacea Pearl', cost:210, cureAll:true, desc:'Cures all negative status effects.'},
      {name:'Hero-King Nectar', cost:260, buff:'bravery', desc:'Grants Bravery.'},
      {name:'Mythic Full Elixir', cost:420, full:true, desc:'Fully restores HP and MP.'}]}
  ];
  const fantasyPotions=[];
  const fantasyPotionShops=[];
  potionShopDefs.forEach(shop => {
    const ids=[];
    shop.items.forEach((it, idx) => {
      const id='fp_' + shop.key + '_' + slug(it.name);
      ids.push(id);
      fantasyPotions.push(Object.assign({id, anime:shop.realm, name:it.name, cost:it.cost}, it));
    });
    fantasyPotionShops.push({key:shop.key, name:shop.name, anime:shop.realm, ids});
  });
  clearAndFill(POTIONS, fantasyPotions);
  clearAndFill(POTION_SHOPS, fantasyPotionShops);

  // ── Replace Equipment anime gear shops with fantasy armor/accessory houses.
  const fantasyEquipShopDefs = [
    {key:'ironbound', name:'Ironbound Outfitters', anime:'Guild Steel', style:'balanced militia equipment', focus:'defense', setName:'Ironbound Vanguard Set', setBonus:{hp:70,pd:8,rs:4}, setSkill:'Shield Wall Command'},
    {key:'dwarven', name:'Dwarven Platehall', anime:'Dwarven Plate', style:'dense armor and deep-forged plating', focus:'fortitude', setName:'Deep Anvil Bulwark Set', setBonus:{hp:95,pd:10,rs:5}, setSkill:'Mountain Stance'},
    {key:'elven', name:'Elven Silkweaver', anime:'Elven Weave', style:'light robes, cloaks, and agile warding gear', focus:'agility', setName:'Moonleaf Wanderer Set', setBonus:{ag:9,md:5,sp:4}, setSkill:'Moonstep Evasion'},
    {key:'arcane', name:'Mage Atelier', anime:'Arcane Tailoring', style:'mana-thread clothing and focus jewelry', focus:'magic', setName:'Runescribe Adept Set', setBonus:{mp:80,ma:10,sp:5}, setSkill:'Spell Echo'},
    {key:'holy', name:'Holy Vestment Hall', anime:'Temple Vestments', style:'blessed armor and protective vestments', focus:'resistance', setName:'Dawn Chapel Set', setBonus:{hp:50,md:7,rs:9}, setSkill:'Sanctuary Pulse'},
    {key:'shadow', name:'Shadow Leatherworks', anime:'Underworld Leather', style:'stealth leathers and cursed trinkets', focus:'critical', setName:'Nightcloak Stalker Set', setBonus:{ag:8,pa:6,sp:7}, setSkill:'Backstab Window'},
    {key:'wild', name:'Beastkin Outfitters', anime:'Frontier Hide', style:'hide, fang, fur, and hunter charms', focus:'attack', setName:'Apex Hunter Set', setBonus:{hp:45,pa:9,ag:6}, setSkill:'Predator Rush'},
    {key:'dragon', name:'Dragonbone Wardrobe', anime:'Wyrm Relics', style:'scale, horn, bone, and emberproof mail', focus:'power', setName:'Drakeblood War Set', setBonus:{hp:80,pa:8,ma:8}, setSkill:'Dragonheart Flare'},
    {key:'relic', name:'Ancient Relic Wardrobe', anime:'Dungeon Relics', style:'strange relics recovered from forgotten floors', focus:'special', setName:'Labyrinth Relic Set', setBonus:{mp:55,sp:11,rs:5}, setSkill:'Dungeon Luck Surge'}
  ];
  const slotNames = {
    head:['Cap','Helm','Mask','Circlet','Crown'],
    chest:['Vest','Mail','Robe','Coat','Plate'],
    arms:['Gloves','Bracers','Gauntlets','Wristguards','Runed Sleeves'],
    legs:['Boots','Greaves','Trousers','Legguards','Sabatons'],
    accessory:['Ring','Charm','Amulet','Belt','Earring']
  };
  const focusBonus = {
    defense:{pd:2,hp:10}, fortitude:{pd:2,rs:1,hp:15}, agility:{ag:2,md:1}, magic:{ma:2,mp:12}, resistance:{rs:2,md:1},
    critical:{ag:1,pa:1,sp:1}, attack:{pa:2,hp:8}, power:{pa:1,ma:1,hp:10}, special:{sp:2,mp:8}
  };
  const categoryBonus = {
    head:{sp:1}, chest:{hp:18,pd:1}, arms:{pa:1,ma:1}, legs:{ag:1}, accessory:{mp:10,rs:1}
  };
  const fantasyEquipment=[];
  const fantasyEquipShops=[];
  fantasyEquipShopDefs.forEach(shop => {
    fantasyEquipShops.push({key:shop.key, name:shop.name, anime:shop.anime, setName:shop.setName, setBonus:shop.setBonus, setSkill:shop.setSkill});
    Object.entries(slotNames).forEach(([slot,names]) => {
      names.forEach((pieceName, idx) => {
        const tier = idx + 1;
        const bon = {};
        [focusBonus[shop.focus] || {}, categoryBonus[slot] || {}].forEach(src => Object.entries(src).forEach(([k,v]) => bon[k]=(bon[k]||0)+v*tier));
        const id = 'fe_' + shop.key + '_' + slot + '_' + tier;
        const itemName = shop.setName.replace(/ Set$/,'') + ' ' + pieceName;
        const skillName = ['Guard Shift','Mana Spark','Swift Step','Counter Sigil','Mythic Trigger'][idx];
        fantasyEquipment.push({
          id, name:itemName, slot, anime:shop.anime, tier, cost:70 + tier*65 + (slot === 'accessory' ? 35 : 0), bon,
          setKey:shop.key, setName:shop.setName, setBonus:shop.setBonus, setSkill:shop.setSkill,
          skill:{name:skillName, desc:'Equipment skill: ' + skillName + ' — a fantasy gear technique tied to ' + shop.style + '.'},
          desc:itemName + ' from ' + shop.name + '. Focus: ' + shop.focus + '. Skill: ' + skillName + '. Full set bonus: ' + shop.setSkill + '.'
        });
      });
    });
  });
  clearAndFill(EQUIPMENT_SHOPS, fantasyEquipShops);
  clearAndFill(EQUIPMENT_DATA, fantasyEquipment);

  // ── Save-state cleanup after replacing old anime shop inventory.
  const _ensureGameCollections_v08_prev = ensureGameCollections;
  ensureGameCollections = function(){
    _ensureGameCollections_v08_prev();
    if (Array.isArray(G.spells)) G.spells = [...new Set(G.spells)].filter(id => SPELLS.some(s => s.id === id));
    if (Array.isArray(G.inventory)) G.inventory = G.inventory.filter(x => x && POTIONS.some(p => p.id === x.id));
    if (Array.isArray(G.equipment_inventory)) G.equipment_inventory = [...new Set(G.equipment_inventory)].filter(id => EQUIPMENT_DATA.some(it => it.id === id));
    if (G.weapon && !WEAPONS.some(w => w.id === G.weapon.id)) G.weapon = null;
    if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = {};
    G.save_meta.version = V08_VERSION;
  };

  function getEquippedGearIdsV08(){
    ensureExpansionState();
    const ids=[];
    ['head','chest','arms','legs'].forEach(slot => { if (G.equipment[slot]) ids.push(G.equipment[slot]); });
    (G.equipment.accessories || []).forEach(id => { if (id) ids.push(id); });
    return ids;
  }
  window.getFullSetBonus = function(){
    ensureExpansionState();
    const armorSlots = ['head','chest','arms','legs'];
    const armorItems = armorSlots.map(slot => getEquip(G.equipment[slot])).filter(Boolean);
    if (armorItems.length !== armorSlots.length) return null;
    const key = armorItems[0].setKey;
    if (!key || !armorItems.every(it => it.setKey === key)) return null;
    const shop = EQUIPMENT_SHOPS.find(s => s.key === key);
    return shop ? {key, setName:shop.setName, bon:shop.setBonus || {}, skill:shop.setSkill || 'Full Set Mastery'} : null;
  };
  const _equipBonuses_v08_prev = equipBonuses;
  equipBonuses = function(){
    const out = _equipBonuses_v08_prev();
    const full = window.getFullSetBonus();
    if (full && full.bon) Object.entries(full.bon).forEach(([k,v]) => out[k] = (out[k] || 0) + v);
    return out;
  };

  // ── Class paths only appear when a level-up point is waiting.
  const _appendMiniClassRegistry_v08_prev = appendMiniClassRegistry;
  appendMiniClassRegistry = function(){
    if ((G.level_pts || 0) <= 0) return;
    return _appendMiniClassRegistry_v08_prev();
  };
  function pruneAlwaysOnClassPathPanels(){
    if ((G.level_pts || 0) > 0) return;
    [...$ch.querySelectorAll('.cs-exp-row')].forEach(panel => {
      const txt = panel.textContent || '';
      if (/CLASS PATHS|HIDDEN BUILDS|v0\.7 FANTASY PROGRESSION|Full Class Registry|Race Evolution Branches/.test(txt)) panel.remove();
    });
  }
  const _character_screen_v08_prev = character_screen;
  character_screen = function(){
    _character_screen_v08_prev();
    pruneAlwaysOnClassPathPanels();
    if ((G.level_pts || 0) > 0) {
      const hint = document.createElement('div');
      hint.className = 'cs-exp-row';
      hint.id = 'v08-levelup-path-hint';
      hint.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">LEVEL-UP CLASS PATHS AVAILABLE</div><div style="font-size:11px;color:#8aaac8;line-height:1.5">Class paths are shown here only while you have unspent Level Points. Spend a point, unlock new paths, then they hide again until your next level-up.</div>';
      const evoBtn=document.createElement('button'); evoBtn.textContent='🧬 Race Evolution Branches'; evoBtn.onclick=race_evolution_screen; hint.appendChild(evoBtn);
      const regBtn=document.createElement('button'); regBtn.textContent='📜 Class Registry / Unlocks'; regBtn.onclick=class_registry_screen; hint.appendChild(regBtn);
      const reqBtn=document.createElement('button'); reqBtn.textContent='📘 Requirements'; reqBtn.onclick=job_requirement_screen; hint.appendChild(reqBtn);
      $ch.appendChild(hint);
    }
  };
  const _town_center_v08_prev = town_center;
  town_center = function(){
    _town_center_v08_prev();
    [...$ch.querySelectorAll('button')].forEach(btn => {
      if ((G.level_pts || 0) <= 0 && /Class Registry/.test(btn.textContent || '')) btn.remove();
      if ((G.level_pts || 0) > 0 && /Class Registry/.test(btn.textContent || '')) btn.textContent = '📜 Level Up / Class Paths';
    });
  };

  // ── Fantasy shop screens.
  blacksmith_selector = function(){
    clearOutput(); showBattlePanel(false);
    print('BLACKSMITH — FANTASY FORGES', 'highlight');
    print('The anime weapon stalls have been replaced with fantasy forges: guild steel, dwarf craft, elven blades, holy relics, shadow weapons, dragonbone arms, and dungeon relics.', 'narrator');
    print('Gold: ' + G.gold + '   |   Equipped: ' + (G.weapon ? G.weapon.name + ' (+' + G.weapon.atk + ' ATK)' : 'none'), 'info');
    $ch.innerHTML='';
    WEAPON_SHOPS.forEach((shop, idx) => {
      const equippedHere = shop.ids.some(id => G.weapon && G.weapon.id === id);
      const b=document.createElement('button'); b.style.whiteSpace='pre-wrap';
      b.textContent = shop.name + ' — ' + shop.anime + (equippedHere ? '  [equipped here]' : '') + '\n' + (shop.theme || 'Fantasy weapon shop') + ' · 5 weapons';
      b.onclick=()=>blacksmith_shop(idx); $ch.appendChild(b);
    });
    const back=document.createElement('button'); back.textContent='← Back to Shops'; back.onclick=shops; $ch.appendChild(back);
  };
  blacksmith_shop = function(shopIdx){
    const shop=WEAPON_SHOPS[shopIdx]; clearOutput(); showBattlePanel(false);
    print(shop.name.toUpperCase(), 'highlight');
    print((shop.theme || 'Fantasy weapons') + '. Gold: ' + G.gold, 'narrator');
    print('Equipped: ' + (G.weapon ? G.weapon.name + ' (+' + G.weapon.atk + ' ATK)' : 'none'), 'info');
    $ch.innerHTML='';
    shop.ids.forEach(wid => {
      const w=WEAPONS.find(x=>x.id===wid); if(!w) return;
      const equipped=G.weapon && G.weapon.id===w.id; const price=priceOf(w); const b=document.createElement('button'); b.style.whiteSpace='pre-wrap';
      b.textContent=(equipped?'[EQUIPPED] ':'') + w.name + '  +' + w.atk + ' ATK  —  ' + price + 'g\n' + w.desc;
      b.disabled=equipped || G.gold < price;
      b.onclick=()=>{ G.gold-=price; G.weapon=w; ensureGameCollections(); updateStats(); saveGame(); blacksmith_shop(shopIdx); };
      $ch.appendChild(b);
    });
    const back=document.createElement('button'); back.textContent='← All Fantasy Forges'; back.onclick=blacksmith_selector; $ch.appendChild(back);
  };

  spell_shop_selector = function(){
    ensureGameCollections(); clearOutput(); showBattlePanel(false);
    print('SKILL LIBRARY — FANTASY ARCHIVES', 'highlight');
    print('The anime technique libraries have been replaced with fantasy schools of magic, body arts, contracts, command skills, and forbidden grimoires.', 'narrator');
    print('Gold: ' + G.gold + '   |   Skills known: ' + G.spells.length, 'info');
    $ch.innerHTML='';
    SPELL_SHOPS.forEach((shop, idx) => {
      const known=shop.ids.filter(id=>G.spells.includes(id)).length;
      const b=document.createElement('button'); b.style.whiteSpace='pre-wrap';
      b.textContent=shop.name + ' — ' + shop.anime + '  (' + known + '/5 learned)\n' + (shop.school || 'Fantasy skill school');
      b.onclick=()=>spell_shop(idx); $ch.appendChild(b);
    });
    const back=document.createElement('button'); back.textContent='← Back to Shops'; back.onclick=shops; $ch.appendChild(back);
  };
  spell_shop = function(shopIdx){
    const shop=SPELL_SHOPS[shopIdx]; ensureGameCollections(); clearOutput(); showBattlePanel(false);
    print(shop.name.toUpperCase(), 'highlight');
    print((shop.school || 'Fantasy skills') + '. Gold: ' + G.gold, 'narrator');
    print('Skill damage = skill power + (MAG.ATK × 0.7)', 'info');
    $ch.innerHTML='';
    shop.ids.forEach(sid => {
      const sp=SPELLS.find(s=>s.id===sid); if(!sp) return;
      const learned=G.spells.includes(sp.id); const price=priceOf(sp); const b=document.createElement('button'); b.style.whiteSpace='pre-wrap';
      const tags=[sp.aoe && 'ALL ENEMIES', sp.status && 'Status: '+sp.status, sp.selfBuff && 'Self Buff: '+sp.selfBuff].filter(Boolean).join(' · ');
      b.textContent=(learned?'[LEARNED] ':'') + sp.name + '  ' + sp.mp + ' MP  —  ' + price + 'g\n' + sp.desc + (tags ? '\n' + tags : '');
      b.disabled=learned || G.gold < price;
      b.onclick=()=>{ G.gold-=price; G.spells.push(sp.id); ensureGameCollections(); updateStats(); saveGame(); spell_shop(shopIdx); };
      $ch.appendChild(b);
    });
    const back=document.createElement('button'); back.textContent='← All Fantasy Libraries'; back.onclick=spell_shop_selector; $ch.appendChild(back);
  };

  alchemy_selector = function(){
    ensureGameCollections(); clearOutput(); showBattlePanel(false);
    print('ALCHEMY SHOP — FANTASY APOTHECARIES', 'highlight');
    print('The anime remedy stalls have been replaced with fantasy herbalists, temple apothecaries, monster-hunter preserves, spirit teas, and rare elixir auctions.', 'narrator');
    print('Gold: ' + G.gold, 'info');
    $ch.innerHTML='';
    POTION_SHOPS.forEach((shop, idx)=>{
      const b=document.createElement('button'); b.style.whiteSpace='pre-wrap';
      b.textContent=shop.name + ' — ' + shop.anime + '\n5 fantasy consumables';
      b.onclick=()=>alchemy_shop_fn(idx); $ch.appendChild(b);
    });
    const back=document.createElement('button'); back.textContent='← Back to Shops'; back.onclick=shops; $ch.appendChild(back);
  };
  alchemy_shop_fn = function(shopIdx){
    const shop=POTION_SHOPS[shopIdx]; ensureGameCollections(); clearOutput(); showBattlePanel(false);
    print(shop.name.toUpperCase(), 'highlight');
    print(shop.anime + '. Gold: ' + G.gold, 'narrator');
    $ch.innerHTML='';
    shop.ids.forEach(pid => {
      const item=POTIONS.find(x=>x.id===pid); if(!item) return;
      const entry=G.inventory.find(i=>i.id===item.id); const qty=entry ? entry.qty : 0; const price=priceOf(item);
      const b=document.createElement('button'); b.style.whiteSpace='pre-wrap';
      b.textContent=item.name + ' — ' + price + 'g  (owned: ' + qty + ')\n' + item.desc;
      b.disabled=G.gold < price;
      b.onclick=()=>{ G.gold-=price; const inv=G.inventory.find(i=>i.id===item.id); if(inv) inv.qty++; else G.inventory.push({id:item.id,qty:1}); ensureGameCollections(); updateStats(); saveGame(); alchemy_shop_fn(shopIdx); };
      $ch.appendChild(b);
    });
    const back=document.createElement('button'); back.textContent='← All Fantasy Apothecaries'; back.onclick=alchemy_selector; $ch.appendChild(back);
  };

  function equipmentShopCountV08(shop, slot){ return EQUIPMENT_DATA.filter(it => it.anime === shop.anime && it.slot === slot).length; }
  equipment_shop = function(){
    ensureExpansionState(); ensureGameCollections(); clearOutput(); showBattlePanel(false);
    print('EQUIPMENT SHOP — FANTASY ARMOR HALLS', 'highlight');
    print('Gold: ' + G.gold, 'info');
    print('The 9 anime gear shops were replaced with fantasy armor houses. Each has Head, Chest, Arms, Legs, and Accessories categories with 5 unique items each. Weapons stay in the Blacksmith.', 'narrator');
    $ch.innerHTML='';
    EQUIPMENT_SHOPS.forEach((shop, idx)=>{
      const b=document.createElement('button'); b.style.whiteSpace='pre-wrap';
      b.textContent=shop.name + ' — ' + shop.anime + '\nSet: ' + shop.setName + ' · Full Set Skill: ' + shop.setSkill + '\nHead 5 · Chest 5 · Arms 5 · Legs 5 · Accessories 5';
      b.onclick=()=>equipment_shop_categories(idx); $ch.appendChild(b);
    });
    const back=document.createElement('button'); back.textContent='← Back to Shops'; back.onclick=shops; $ch.appendChild(back);
  };
  equipment_shop_categories = function(shopIdx){
    ensureExpansionState(); clearOutput(); showBattlePanel(false);
    const shop=EQUIPMENT_SHOPS[shopIdx];
    print(shop.name.toUpperCase(), 'highlight');
    print(shop.anime + ' equipment. Full set: ' + shop.setName + ' — ' + statLine(shop.setBonus) + '. Skill: ' + shop.setSkill + '. Gold: ' + G.gold, 'info');
    $ch.innerHTML='';
    EQUIPMENT_CATEGORIES.forEach(cat => {
      const b=document.createElement('button');
      b.textContent=cat.label + ' — ' + equipmentShopCountV08(shop, cat.slot) + ' items';
      b.onclick=()=>equipment_shop_items(shopIdx, cat.slot); $ch.appendChild(b);
    });
    const back=document.createElement('button'); back.textContent='← Equipment Shops'; back.onclick=equipment_shop; $ch.appendChild(back);
  };
  equipment_shop_items = function(shopIdx, slot){
    ensureExpansionState(); clearOutput(); showBattlePanel(false);
    const shop=EQUIPMENT_SHOPS[shopIdx]; const cat=EQUIPMENT_CATEGORIES.find(c=>c.slot===slot);
    print(shop.name.toUpperCase() + ' — ' + (cat ? cat.label.toUpperCase() : slot.toUpperCase()), 'highlight');
    print('Gold: ' + G.gold + ' · Full set skill: ' + shop.setSkill, 'info');
    $ch.innerHTML='';
    const items=EQUIPMENT_DATA.filter(it=>it.anime===shop.anime && it.slot===slot).sort((a,b)=>(a.tier||0)-(b.tier||0));
    items.forEach(it => {
      const owned=G.equipment_inventory.includes(it.id); const price=priceOf(it); const b=document.createElement('button'); b.style.whiteSpace='pre-wrap';
      b.textContent=(owned?'[OWNED] ':'') + it.name + ' — ' + price + 'g\n' + it.desc + '\nBonus: ' + statLine(it.bon) + '\nGear Skill: ' + (it.skill ? it.skill.name + ' — ' + it.skill.desc : 'None') + '\nFull Set: ' + it.setName + ' → ' + it.setSkill;
      b.disabled=owned || G.gold < price;
      b.onclick=()=>{ G.gold-=price; G.equipment_inventory.push(it.id); ensureGameCollections(); saveGame(); equipment_shop_items(shopIdx, slot); };
      $ch.appendChild(b);
    });
    const back=document.createElement('button'); back.textContent='← ' + shop.name; back.onclick=()=>equipment_shop_categories(shopIdx); $ch.appendChild(back);
  };

  equipment_screen = function(){
    ensureExpansionState(); ensureGameCollections(); applyStats(); updateStats(); clearOutput(); showBattlePanel(false);
    print('EQUIPMENT SCREEN', 'highlight');
    print('Armor/accessory slots: Head, Chest, Arms, Legs, and 5 Accessories. Weapons are handled by the Blacksmith.', 'narrator');
    const b=equipBonuses();
    print('Current gear bonus: HP +' + (b.hp||0) + ' · MP +' + (b.mp||0) + ' · ATK +' + (b.pa||0) + ' · MAG +' + (b.ma||0) + ' · DEF +' + (b.pd||0) + ' · AGI +' + (b.ag||0) + ' · RES +' + (b.rs||0) + ' · SP +' + (b.sp||0), 'info');
    const full=window.getFullSetBonus();
    if(full) print('FULL SET ACTIVE: ' + full.setName + ' — ' + full.skill + ' · Bonus: ' + statLine(full.bon), 'success');
    else print('No full set active. Equip Head, Chest, Arms, and Legs from the same fantasy set to activate a set bonus.', 'narrator');
    $ch.innerHTML='';
    const renderSlot=(label, slot, idx)=>{
      const id=slot==='accessory'?G.equipment.accessories[idx]:G.equipment[slot]; const it=id?getEquip(id):null;
      const row=document.createElement('div'); row.className='cs-exp-row';
      row.innerHTML='<div class="cs-exp-label">'+label+'</div><div style="color:#e8c84a;font-size:13px">'+(it?it.name:'Empty')+'</div><div style="color:#8aaac8;font-size:11px;line-height:1.45">'+(it?(it.desc+'<br>Bonus: '+statLine(it.bon)+'<br>Skill: '+(it.skill?it.skill.name:'None')):'No item equipped.')+'</div>';
      $ch.appendChild(row);
    };
    renderSlot('HEAD','head'); renderSlot('CHEST','chest'); renderSlot('ARMS','arms'); renderSlot('LEGS','legs');
    for(let i=0;i<ACCESSORY_SLOTS;i++) renderSlot('ACCESSORY '+(i+1),'accessory',i);
    const change=document.createElement('button'); change.textContent='⚙ Change Equipped Items'; change.onclick=equipment_change_screen; $ch.appendChild(change);
    const shop=document.createElement('button'); shop.textContent='🛒 Go to Shops / Equipment Shop'; shop.onclick=shops; $ch.appendChild(shop);
    const back=document.createElement('button'); back.textContent='← Character Status'; back.onclick=character_screen; $ch.appendChild(back);
  };
  chooseEquipForSlot = function(slot, idx){
    clearOutput(); showBattlePanel(false); print('EQUIP: ' + (slot === 'accessory' ? 'Accessory '+(idx+1) : slot.toUpperCase()), 'highlight'); $ch.innerHTML='';
    const clear=document.createElement('button'); clear.textContent='Unequip / Empty Slot'; clear.onclick=()=>{ if(slot==='accessory') G.equipment.accessories[idx]=null; else G.equipment[slot]=null; applyStats(); updateStats(); equipment_change_screen(); }; $ch.appendChild(clear);
    const owned=getOwnedEquipment().filter(it=>it.slot===slot);
    if(!owned.length) print('You do not own any ' + (slot === 'accessory' ? 'accessories' : slot + ' gear') + ' yet. Buy gear from Shops → Equipment Shop.', 'narrator');
    owned.forEach(it=>{ const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.textContent=it.name+' ['+(it.setName || it.anime || 'Gear')+']\n'+it.desc+'\nBonus: '+statLine(it.bon)+'\nSkill: '+(it.skill?it.skill.name:'None'); b.onclick=()=>{ if(slot==='accessory') G.equipment.accessories[idx]=it.id; else G.equipment[slot]=it.id; applyStats(); updateStats(); equipment_change_screen(); }; $ch.appendChild(b); });
    const shop=document.createElement('button'); shop.textContent='🛒 Go to Equipment Shop'; shop.onclick=equipment_shop; $ch.appendChild(shop);
    const back=document.createElement('button'); back.textContent='← Back'; back.onclick=equipment_change_screen; $ch.appendChild(back);
  };

  shops = function(){
    ensureGameCollections(); clearOutput(); showBattlePanel(false);
    print('The Market District — Fantasy Edition', 'highlight');
    print('The old anime shops have been removed. The market now uses fantasy forges, armor halls, spell archives, and apothecaries.', 'narrator');
    print('Gold: ' + G.gold, 'info');
    if (G.weapon) print('Equipped weapon: ' + G.weapon.name + ' (+' + G.weapon.atk + ' ATK)', 'info');
    showChoices([
      ['⚔ Blacksmith — 9 fantasy forges · ' + WEAPONS.length + ' weapons', blacksmith_selector],
      ['🛡 Equipment Shop — 9 fantasy armor houses · set bonuses', equipment_shop],
      ['✨ Skill Library — 9 fantasy schools · ' + SPELLS.length + ' skills', spell_shop_selector],
      ['⚗ Alchemy Shop — 9 fantasy apothecaries · ' + POTIONS.length + ' items', alchemy_selector],
      ['← Leave', town_center]
    ]);
  };

  expansion_update_screen = function(){
    clearOutput(); showBattlePanel(false);
    print('UPDATE v0.8 — FANTASY SHOP CLEANUP', 'highlight');
    print('Class path panels now only appear when you have unspent Level Points. They no longer show all the time.', 'success');
    print('Blacksmith, Equipment Shop, Skill Library, and Alchemy Shop no longer use the old 9 anime shops.', 'success');
    print('All shop items were replaced with fantasy weapons, armor sets, gear skills, spell schools, and alchemy supplies.', 'success');
    print('Equipment sets now show fantasy full-set bonuses when Head, Chest, Arms, and Legs match.', 'info');
    showChoices([['📘 Requirements', job_requirement_screen], ['🛒 Shops', shops], ['← Back', returnFromHelp]]);
  };
  yggdrasil_build_guide_screen = function(){
    clearOutput(); showBattlePanel(false); print('YGGDRASIL BUILD GUIDE v0.8', 'highlight');
    print('A strong build is layered: base race, evolved race paths, base jobs, advanced/specialist/rare/hidden jobs, equipment sets, and fantasy shop skills.', 'narrator');
    print('• Class path panels only appear while you have unspent Level Points.', 'info');
    print('• Base Race: max at Lv.' + MAX_BASE_RACE_LEVEL + ' before race evolution.', 'info');
    print('• Base Job: max at Lv.15 to unlock Advanced branches.', 'info');
    print('• Advanced max Lv.10. Specialist max Lv.10. Rare max Lv.5. Hidden max Lv.5.', 'info');
    print('• Fantasy equipment sets activate when Head, Chest, Arms, and Legs match.', 'success');
    showChoices([['📘 Requirements', job_requirement_screen], ['🛒 Shops', shops], ['← Back', returnFromHelp]]);
  };

  function injectV08Settings(){
    const panel=document.getElementById('settings-panel'); if(!panel) return;
    const old=document.getElementById('v08-settings-section'); if(old) old.remove();
    const saveSection=[...panel.querySelectorAll('.sp-section')].find(s=>/Save \/ Load/.test(s.textContent));
    const div=document.createElement('div'); div.className='sp-section'; div.id='v08-settings-section';
    div.innerHTML='<h3>Update v0.8</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Fantasy shops are active. Class paths now appear only when you have unspent Level Points.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); expansion_update_screen()">🆕 Update Notes</button><button class="sp-btn" onclick="closeSettingsPanel(); yggdrasil_build_guide_screen()">📘 Build Guide</button><button class="sp-btn" onclick="closeSettingsPanel(); job_requirement_screen()">📋 Requirements</button></div>';
    if(saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
  }
  injectV08Settings();

  // Re-sanitize right away, including loaded/autosaved fragments from older versions.
  ensureGameCollections();
})();

// ═══════════════════════════════════════════════════════════════
// v0.9 — Focused class registry + level-up-only available paths
// Requested changes:
// - Full Class Registry now shows only fantasy Base jobs.
// - Character Status level-up area only shows the race/job options and unlockable paths currently available.
// ═══════════════════════════════════════════════════════════════
(function installV09FocusedRegistryPatch(){
  const V09_VERSION = 'v0.9-focused-registry-available-paths';

  function isBaseRegistryJob(j){
    return !!j && !j.req && (j.class_tier || 'Base') === 'Base';
  }
  function tierValue(j){
    const tier = (j && (j.class_tier || 'Base')) || 'Base';
    return (typeof TIER_ORDER_V07 !== 'undefined' && TIER_ORDER_V07[tier] !== undefined) ? TIER_ORDER_V07[tier] : 0;
  }
  function groupByCategoryV09(entries){
    const groups = {};
    entries.forEach(([id,j]) => {
      const cat = j.anime || j.v07Category || 'Jobs';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push([id,j]);
    });
    return groups;
  }
  function renderHeaderV09(text, color){
    const hdr = document.createElement('div');
    hdr.style.cssText = 'margin:12px 0 4px;padding:6px 10px;background:linear-gradient(90deg,#12082a,#090e1c);border-left:3px solid '+(color || '#e8c84a')+';font-family:"Cinzel Decorative",serif;font-size:11px;color:'+(color || '#e8c84a')+';letter-spacing:2px';
    hdr.textContent = text;
    $ch.appendChild(hdr);
  }
  function pathKindV09(j){
    const r = j && j.req ? j.req : {};
    if (r.raceEvolution) return 'Race Evolution';
    if (r.jobBranch) return 'Job/Class Evolution';
    return 'Class Path';
  }
  function getAvailableUnlockablePathsV09(){
    ensureGameCollections();
    if (typeof checkJobUnlocks === 'function') checkJobUnlocks(true);
    return Object.entries(JOB_DATA)
      .filter(([id,j]) => {
        id = Number(id);
        if (!j || isBaseRegistryJob(j) || ownsJob(id)) return false;
        if (typeof canAddJob !== 'function') return false;
        return canAddJob(id);
      })
      .sort((a,b) => {
        const ak = pathKindV09(a[1]), bk = pathKindV09(b[1]);
        if (ak !== bk) return ak.localeCompare(bk);
        return (tierValue(a[1]) - tierValue(b[1])) || String(a[1].anime || '').localeCompare(String(b[1].anime || '')) || a[1].name.localeCompare(b[1].name);
      });
  }

  appendMiniClassRegistry = function(){
    if ((G.level_pts || 0) <= 0) return;
    const available = getAvailableUnlockablePathsV09();
    const div = document.createElement('div');
    div.className = 'cs-exp-row';
    div.id = 'v09-available-paths-panel';
    div.innerHTML =
      '<div class="cs-exp-label" style="color:#e8c84a">AVAILABLE UNLOCKS FROM THIS LEVEL-UP</div>' +
      '<div style="font-size:11px;color:#8aaac8;line-height:1.5;margin-bottom:6px">Only paths you can actually unlock right now are shown here. Your race and already-owned jobs are leveled in the Spend Level Point section above.</div>';

    if (!available.length) {
      const note = document.createElement('div');
      note.style.cssText = 'font-size:11px;color:#8aaac8;line-height:1.5;margin-top:5px';
      note.textContent = 'No new race/job evolution paths are unlocked yet. Spend your Level Point on your current race or owned job, then check again after meeting mastery requirements.';
      div.appendChild(note);
    } else {
      available.forEach(([id,j]) => {
        const st = typeof v07UnlockState === 'function' ? v07UnlockState(Number(id), j) : {why:'Requirement met.'};
        const b = document.createElement('button');
        b.className = 'btn-levelup';
        b.style.cssText = 'width:100%;margin-top:4px;text-align:left;white-space:pre-wrap;line-height:1.45';
        b.textContent = pathKindV09(j) + ': ' + j.name + ' — ' + classTierLabel(j) + '\nRequirement met: ' + (st.why || jobPrereqText(id,j)) + '\nTap to add this path at Lv.0, then spend Level Points to train it.';
        b.onclick = () => addJobPath(id);
        div.appendChild(b);
      });
    }
    $ch.appendChild(div);
  };

  class_registry_screen = function(){
    ensureGameCollections();
    clearOutput();
    showBattlePanel(false);
    print('FULL CLASS REGISTRY — BASE JOBS ONLY', 'highlight');
    print('This registry now lists only the fantasy Base jobs. Advanced, Specialist, Rare, Hidden, and Race Evolution paths are hidden until they become available from leveling and requirements.', 'narrator');
    print('To unlock higher paths, master your current race/job paths. When you have unspent Level Points, Character Status will show only the paths currently available to you.', 'info');
    print('Gold: ' + G.gold + ' · Total Level: ' + G.total_lv + ' / 100 · Level Points: ' + (G.level_pts || 0), 'info');
    $ch.innerHTML = '';

    const baseEntries = Object.entries(JOB_DATA)
      .filter(([id,j]) => isBaseRegistryJob(j))
      .sort((a,b) => String(a[1].anime || '').localeCompare(String(b[1].anime || '')) || a[1].name.localeCompare(b[1].name));

    const groups = groupByCategoryV09(baseEntries);
    Object.entries(groups).forEach(([cat, list]) => {
      renderHeaderV09('— ' + cat.toUpperCase() + ' BASE JOBS —', '#a78bfa');
      list.forEach(([id,j]) => {
        const owned = ownsJob(Number(id));
        const b = document.createElement('button');
        b.style.whiteSpace = 'pre-wrap';
        b.style.lineHeight = '1.42';
        b.textContent =
          (owned ? '[OWNED] ' : '[BASE] ') + j.name + ' — ' + classTierLabel(j) + '\n' +
          'Category: ' + (j.anime || 'Base Jobs') + '\n' +
          j.desc;
        b.disabled = owned;
        if (!owned) b.onclick = () => addJobPath(id);
        $ch.appendChild(b);
      });
    });

    const req = document.createElement('button');
    req.textContent = '📘 Requirements / How Evolutions Unlock';
    req.onclick = job_requirement_screen;
    $ch.appendChild(req);

    const back = document.createElement('button');
    back.textContent = '← Character Status';
    back.onclick = character_screen;
    $ch.appendChild(back);

    const town = document.createElement('button');
    town.textContent = '← Town Center';
    town.onclick = town_center;
    $ch.appendChild(town);
  };

  const _character_screen_v09_prev = character_screen;
  character_screen = function(){
    _character_screen_v09_prev();

    // Remove the old v0.8 generic navigation hint so level-up only shows direct options.
    const oldHint = document.getElementById('v08-levelup-path-hint');
    if (oldHint) oldHint.remove();

    // Remove older always-on v0.7 nav panels if they survived from earlier patched versions.
    [...$ch.querySelectorAll('.cs-exp-row')].forEach(panel => {
      const txt = panel.textContent || '';
      if (/v0\.7 FANTASY PROGRESSION|Race Evolution Branches|Full Class Registry/.test(txt) && !/AVAILABLE UNLOCKS FROM THIS LEVEL-UP/.test(txt)) {
        panel.remove();
      }
    });

    // Add a small safe registry link only outside the level-up flow.
    if ((G.level_pts || 0) <= 0) {
      const reg = document.createElement('div');
      reg.className = 'cs-exp-row';
      reg.id = 'v09-base-registry-link';
      reg.innerHTML = '<div class="cs-exp-label" style="color:#8aaac8">BASE JOB REGISTRY</div><div style="font-size:11px;color:#8aaac8;line-height:1.5">Higher paths stay hidden until requirements are met. Open the registry to view or add base jobs only.</div>';
      const b = document.createElement('button');
      b.textContent = '📜 View Base Job Registry';
      b.onclick = class_registry_screen;
      reg.appendChild(b);
      $ch.appendChild(reg);
    }
  };

  expansion_update_screen = function(){
    clearOutput(); showBattlePanel(false);
    print('UPDATE v0.9 — FOCUSED CLASS PATHS', 'highlight');
    print('Full Class Registry now shows only fantasy Base jobs.', 'success');
    print('Advanced, Specialist, Rare, Hidden, and Race Evolution paths no longer appear in the registry by default.', 'success');
    print('When you have unspent Level Points, Character Status shows only the race/job leveling options and unlockable paths currently available to you.', 'success');
    print('Fantasy shops from v0.8 remain active.', 'info');
    showChoices([['📜 Base Job Registry', class_registry_screen], ['📘 Requirements', job_requirement_screen], ['← Back', returnFromHelp]]);
  };

  function injectV09Settings(){
    const panel = document.getElementById('settings-panel');
    if (!panel || document.getElementById('v09-settings-section')) return;
    const saveSection = [...panel.querySelectorAll('.sp-section')].find(s => /Save \/ Load/.test(s.textContent));
    const div = document.createElement('div');
    div.className = 'sp-section';
    div.id = 'v09-settings-section';
    div.innerHTML = '<h3>Update v0.9</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Focused progression is active: registry shows Base jobs only; level-up screens show only paths currently available.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); expansion_update_screen()">🆕 Update Notes</button><button class="sp-btn" onclick="closeSettingsPanel(); class_registry_screen()">📜 Base Registry</button><button class="sp-btn" onclick="closeSettingsPanel(); job_requirement_screen()">📋 Requirements</button></div>';
    if (saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
  }
  injectV09Settings();

  ensureGameCollections();
  if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = {};
  G.save_meta.version = V09_VERSION;
})();

// ═══════════════════════════════════════════════════════════════
