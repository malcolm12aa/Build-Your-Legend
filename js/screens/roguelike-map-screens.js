// v0.19 — Roguelike World Map + Raid Map Redo
// ═══════════════════════════════════════════════════════════════
(function installV19RoguelikeMaps(){
  var V19_VERSION = 'v0.19-roguelike-map-redo';

  var ROGUE_NODE = {
    battle:  { icon:'⚔', label:'Battle', color:'#48cae4' },
    elite:   { icon:'💀', label:'Elite Battle', color:'#ff6b81' },
    treasure:{ icon:'💰', label:'Treasure', color:'#e8c84a' },
    camp:    { icon:'🔥', label:'Camp', color:'#2ecc71' },
    shrine:  { icon:'🔮', label:'Shrine', color:'#a78bfa' },
    event:   { icon:'❔', label:'Event', color:'#8aaac8' },
    boss:    { icon:'👑', label:'Boss', color:'#ff4757' }
  };

  var ROGUE_WORLD_MAPS = [
    {tier:'Lv 1-9', req:1, maps:[
      {name:'Greenmarch Road', emoji:'🌿', theme:'bandits, wolves, wild goblins', biome:'Forest road', tags:['Wolf','Goblin','Bandit'], boss:'Greenmarch Hobgoblin'},
      {name:'Misty Hollow', emoji:'🌫', theme:'sprites, slimes, haunted trees', biome:'Fog woodland', tags:['Sprite','Slime','Treant'], boss:'Mistwood Elder'},
      {name:'Old Quarry Trail', emoji:'⛏', theme:'kobolds, bats, cracked golems', biome:'Ruined quarry', tags:['Kobold','Bat Swarm','Clay Golem'], boss:'Quarry Brute'}
    ]},
    {tier:'Lv 10-19', req:10, maps:[
      {name:'Goblin Warrens', emoji:'🕳', theme:'goblin packs, traps, cave beasts', biome:'Cave dungeon', tags:['Goblin Scout','Hobgoblin Guard','Cave Spider'], boss:'Goblin Bannerlord'},
      {name:'Glasswood Grove', emoji:'💎', theme:'crystal beasts and spell-thorn vines', biome:'Crystal forest', tags:['Crystal Wolf','Glass Slime','Thorn Dryad'], boss:'Glassbark Matriarch'},
      {name:'Bandit Lowlands', emoji:'🏕', theme:'raiders, thieves, mercenary deserters', biome:'Open hills', tags:['Cutpurse','Raid Archer','Iron Bandit'], boss:'Lowland Bandit Captain'}
    ]},
    {tier:'Lv 20-29', req:20, maps:[
      {name:'Moonlit Mire', emoji:'🌙', theme:'poison frogs, lamia scouts, drowned undead', biome:'Poison swamp', tags:['Mire Zombie','Lamia Scout','Bog Troll'], boss:'Moonmire Lamia'},
      {name:'Ashen Quarry', emoji:'🌋', theme:'fire imps, ash golems, molten lizards', biome:'Volcanic mine', tags:['Fire Imp','Ash Golem','Lava Lizard'], boss:'Ashen Mine Tyrant'},
      {name:'Tempest Ridge', emoji:'⛈', theme:'harpies, thunder beasts, cliff predators', biome:'Storm cliffs', tags:['Harpie Diver','Thunder Roc','Windfang Beast'], boss:'Ridge Stormcaller'}
    ]},
    {tier:'Lv 30-39', req:30, maps:[
      {name:'Sunken Aqueduct', emoji:'🌊', theme:'fishmen, merfolk duelists, water spirits', biome:'Ancient waterway', tags:['Fishman Raider','Water Wraith','Merfolk Duelist'], boss:'Aqueduct Leviathan'},
      {name:'Gravebloom Fields', emoji:'🪦', theme:'skeleton knights, cursed flowers, wraiths', biome:'Haunted fields', tags:['Skeleton Knight','Gravebloom Vine','Wraith'], boss:'Field Lich Acolyte'},
      {name:'Runebreak Canyon', emoji:'🪨', theme:'rune golems, ogres, broken mage circles', biome:'Rune canyon', tags:['Rune Golem','Ogre Breaker','Canyon Mage'], boss:'Runebreak Colossus'}
    ]},
    {tier:'Lv 40-49', req:40, maps:[
      {name:'Frostspire Pass', emoji:'❄', theme:'ice spirits, yeti, yuki-onna shades', biome:'Frozen pass', tags:['Ice Spirit','Yeti Mauler','Yuki-Onna Shade'], boss:'Frostspire Queen'},
      {name:'Crimson Orchard', emoji:'🍎', theme:'vampire thralls, blood vines, nightmare bats', biome:'Cursed orchard', tags:['Blood Bat','Vampire Thrall','Crimson Treant'], boss:'Orchard Vampire Noble'},
      {name:'Ironroot Depths', emoji:'🌳', theme:'living roots, dwarven automata, earth spirits', biome:'Root dungeon', tags:['Ironroot Golem','Dwarf Automaton','Earth Spirit'], boss:'Ironroot Guardian'}
    ]},
    {tier:'Lv 50-59', req:50, maps:[
      {name:'Wyvern Skyway', emoji:'🐉', theme:'wyverns, dragonkin, sky raiders', biome:'Floating cliffs', tags:['Wyvern Whelp','Dragonkin Spear','Sky Raider'], boss:'Skyway Wyvern Lord'},
      {name:'Dreadfen Labyrinth', emoji:'🧪', theme:'plague beasts, trolls, toxic oozes', biome:'Toxic maze', tags:['Plague Ooze','Fen Troll','Venom Arachne'], boss:'Dreadfen Plague Doctor'},
      {name:'Obsidian Bastion', emoji:'🏯', theme:'dark knights, demons, cursed armor', biome:'Black fortress', tags:['Cursed Armor','Demon Squire','Dark Knight'], boss:'Obsidian Castellan'}
    ]},
    {tier:'Lv 60-69', req:60, maps:[
      {name:'Eclipse Desert', emoji:'🌑', theme:'sunless spirits, naga, mirage assassins', biome:'Black desert', tags:['Mirage Assassin','Naga Mystic','Eclipse Wraith'], boss:'Eclipse Naga Oracle'},
      {name:'Stormlord Coast', emoji:'🌩', theme:'sea giants, storm mages, drowned captains', biome:'Storm coast', tags:['Storm Mage','Drowned Captain','Sea Giant'], boss:'Stormlord of the Breaker Reef'},
      {name:'Bone Cathedral', emoji:'⛪', theme:'liches, bone priests, undead choirs', biome:'Undead cathedral', tags:['Bone Priest','Choir Wraith','Lich Adept'], boss:'Cathedral Lich'}
    ]},
    {tier:'Lv 70-79', req:70, maps:[
      {name:'Astral Wilds', emoji:'✨', theme:'star beasts, celestials, warped spirits', biome:'Astral forest', tags:['Star Beast','Celestial Scout','Warped Kami'], boss:'Astral Kirin'},
      {name:'Dragonbone Steps', emoji:'🦴', theme:'ancient dragons, bone wyrms, dragon cultists', biome:'Dragon grave', tags:['Bone Wyrm','Dragon Cultist','Ancient Drake'], boss:'Dragonbone Ancient'},
      {name:'Void Lantern Woods', emoji:'🏮', theme:'void walkers, ayakashi, shadow beasts', biome:'Void forest', tags:['Void Walker','Ayakashi Stalker','Shadow Beast'], boss:'Lantern Voidlord'}
    ]},
    {tier:'Lv 80-89', req:80, maps:[
      {name:'Celestial Ruins', emoji:'🏛', theme:'fallen angels, divine constructs, seraphic echoes', biome:'Heaven ruins', tags:['Fallen Angel','Divine Construct','Seraphic Echo'], boss:'Ruined Seraph'},
      {name:'Abyssal Forge', emoji:'⚒', theme:'archdemons, living weapons, infernal smiths', biome:'Demon forge', tags:['Infernal Smith','Living Weapon','Archdemon'], boss:'Abyssal Forgemaster'},
      {name:'Worldscar Vale', emoji:'🌌', theme:'reality fractures, primal monsters, world-eaters', biome:'Reality wound', tags:['Worldscar Beast','Fracture Slime','Reality Maw'], boss:'Worldscar Devourer'}
    ]},
    {tier:'Lv 90-100', req:90, maps:[
      {name:'Crownless Throne', emoji:'👑', theme:'fallen kings, tyrants, ancient champions', biome:'Endgame throne', tags:['Fallen King','Tyrant Guard','Ancient Champion'], boss:'The Crownless King'},
      {name:'Endless Dungeon', emoji:'🌀', theme:'boss-class monsters and impossible rooms', biome:'Endless dungeon', tags:['Dungeon Boss','Mimic Lord','Labyrinth Hydra'], boss:'The Endless Warden'},
      {name:'Genesis Spire', emoji:'🗼', theme:'celestial dragons, immortals, final guardians', biome:'World spire', tags:['Immortal Guard','Celestial Dragonkin','Genesis Automaton'], boss:'Genesis Gatekeeper'}
    ]}
  ];

  var ROGUE_RAID_MAPS = [
    {name:'Goblin King Raid', req:10, emoji:'👑', theme:'goblin warbands and banner chiefs', boss:'Goblin King'},
    {name:'Ogre Lord Raid', req:20, emoji:'👹', theme:'ogre champions and war drums', boss:'Ogre Lord'},
    {name:'Vampire Court Raid', req:30, emoji:'🧛', theme:'noble vampires and blood knights', boss:'Vampire Count'},
    {name:'Lich Tower Raid', req:40, emoji:'💀', theme:'undead mages and bone sentries', boss:'Tower Lich'},
    {name:'Dragon Nest Raid', req:50, emoji:'🐲', theme:'dragonkin elites and wyverns', boss:'Ancient Dragon'},
    {name:'Demon Gate Raid', req:60, emoji:'🔥', theme:'archdemons and infernal knights', boss:'Demon Duke'},
    {name:'Celestial Trial Raid', req:70, emoji:'☀', theme:'angelic judges and divine constructs', boss:'Seraph Judge'},
    {name:'Abyss Crown Raid', req:80, emoji:'🌑', theme:'abyss knights and void beasts', boss:'Abyss Crown'},
    {name:'World Tree Raid', req:90, emoji:'🌳', theme:'ancient spirits and world roots', boss:'World Tree Avatar'},
    {name:'True End Raid', req:100, emoji:'⚜', theme:'final guardians and reality rulers', boss:'True Final Monarch'}
  ];

  var ROGUE_RUN = null;
  window.ROGUE_RUN = ROGUE_RUN;

  function rand(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
  function clamp(n,min,max){ return Math.max(min, Math.min(max, n)); }
  function pct(n){ return Math.max(1, Math.floor(n)); }

  function mapTierUnlocked(req){ return Math.max(1, G.total_lv || 1) >= req; }

  function runLengthFor(map, isRaid){
    if (isRaid) return 4;
    return 5 + Math.min(3, Math.floor((map.req || 1) / 30));
  }

  function enemyStatScale(map, nodeType, floor, isRaid){
    var req = map.req || 1;
    var lv = Math.max(req, G.total_lv || req || 1);
    var mult = nodeType === 'boss' ? 2.8 : nodeType === 'elite' ? 1.65 : 1.0;
    if (isRaid) mult *= nodeType === 'boss' ? 1.8 : 1.35;
    return {
      hp: Math.floor((85 + req * 14 + floor * 18 + lv * 5) * mult),
      atk: Math.floor((10 + req * 1.4 + floor * 2.2 + lv * 0.45) * (nodeType === 'boss' ? 1.35 : nodeType === 'elite' ? 1.18 : 1)),
      exp: Math.floor((35 + req * 7 + floor * 14) * (nodeType === 'boss' ? 3.2 : nodeType === 'elite' ? 1.8 : 1)),
      gold: Math.floor((25 + req * 5 + floor * 9) * (nodeType === 'boss' ? 2.8 : nodeType === 'elite' ? 1.7 : 1))
    };
  }

  function generateRogueEnemy(map, nodeType, floor, isRaid){
    var s = enemyStatScale(map, nodeType, floor, isRaid);
    var tag = nodeType === 'boss' ? (map.boss || 'Rift Boss') : rand(map.tags || ['Rogue Beast','Wild Monster','Dungeon Raider']);
    var prefix = nodeType === 'elite' ? rand(['Elite','Dire','Veteran','Cursed','Apex']) + ' ' : '';
    var name = nodeType === 'boss' ? tag : prefix + tag;
    var statuses = ['bleed','poison','weaken','stun','fear','vulnerable'];
    var status = rand(statuses);
    return {
      name: name,
      emoji: nodeType === 'boss' ? '👑' : nodeType === 'elite' ? '💀' : rand(['🐺','🗡','🕷','👹','🦇','🧟','🧌','🐉']),
      hp: s.hp,
      atk: s.atk,
      exp: s.exp,
      gold: s.gold,
      lore: (isRaid ? 'Raid room ' : 'Roguelike room ') + (floor + 1) + ' of ' + (ROGUE_RUN ? ROGUE_RUN.length : '?') + ' inside ' + map.name + '. Theme: ' + (map.theme || 'unknown threats') + '.',
      moves: [
        {name: rand(['Savage Strike','Rift Claw','Crushing Blow','Mana Bite','Ruin Slash']), status: Math.random()<0.45?status:null, statusChance:0.22},
        {name: rand(['Guard Break','Hexed Rush','Predator Pounce','Shadow Feint','Arcane Burst']), status: Math.random()<0.35?status:null, statusChance:0.25},
        {name: rand(['Heavy Combo','Blood Howl','Grave Touch','Storm Fang','Abyssal Roar']), status: Math.random()<0.30?status:null, statusChance:0.28}
      ]
    };
  }

  function generateRogueGroup(map, nodeType, floor, isRaid){
    var count = nodeType === 'boss' ? 1 : nodeType === 'elite' ? (Math.random()<0.35?2:1) : (Math.random()<0.55?1:Math.random()<0.85?2:3);
    var arr = [];
    for (var i=0;i<count;i++) arr.push(generateRogueEnemy(map, nodeType, floor, isRaid));
    return arr;
  }

  function nodeName(type){
    var names = {
      battle:['Monster Ambush','Forked Battle Room','Hunting Grounds','Guarded Passage','Roving Patrol'],
      elite:['Elite Gate','Champion Room','Cursed Sentinel','Apex Predator','Named Enemy'],
      treasure:['Locked Relic Chest','Old Adventurer Cache','Glittering Hoard','Forgotten Supply Room','Runic Treasure Vault'],
      camp:['Safe Campfire','Abandoned Shrine Camp','Wandering Healer Camp','Quiet Rest Point','Moonlit Shelter'],
      shrine:['Stat Shrine','Oath Altar','Spirit Blessing','Fate Stone','Ancient Trial Shrine'],
      event:['Strange Encounter','Risky Shortcut','Lost Merchant','Cursed Fountain','Mystery Door'],
      boss:['Map Boss','Raid Boss','Final Gatekeeper','Dungeon Ruler','Run End Boss']
    };
    return rand(names[type] || ['Unknown Room']);
  }

  function buildNodeChoices(){
    if (!ROGUE_RUN) return [];
    var floor = ROGUE_RUN.floor;
    var last = floor >= ROGUE_RUN.length - 1;
    if (last) return [{type:'boss', name:nodeName('boss'), desc:'The final room of this run. Win to clear the map.', danger:'BOSS'}];
    var pool = ROGUE_RUN.isRaid ?
      ['elite','battle','shrine','camp','elite','treasure'] :
      ['battle','battle','elite','treasure','camp','shrine','event'];
    var choices = [];
    for (var i=0;i<3;i++){
      var t = rand(pool);
      choices.push({
        type:t,
        name:nodeName(t),
        desc:describeNode(t),
        danger:t==='elite'?'HIGH':t==='battle'?'NORMAL':t==='event'?'RANDOM':'SAFE'
      });
    }
    return choices;
  }

  function describeNode(t){
    var d={
      battle:'A standard battle room. Clear it for EXP, gold, and a chance at a run relic.',
      elite:'A harder enemy with better rewards and a guaranteed relic bonus.',
      treasure:'No fight. Gain gold, items, or a relic reward.',
      camp:'Rest and recover HP/MP before the next room.',
      shrine:'Choose a blessing. Usually grants a permanent stat point bonus.',
      event:'A roguelike event with risk and reward.',
      boss:'Final boss of the run. Victory clears the map and grants a large reward.'
    };
    return d[t] || 'Unknown room.';
  }

  function startRoguelikeRun(map, isRaid){
    ROGUE_RUN = {
      active:true,
      isRaid:!!isRaid,
      map:map,
      floor:0,
      length:runLengthFor(map, !!isRaid),
      relics:[],
      score:0,
      pendingNode:null,
      currentChoices:null,
      startedAt:new Date().toISOString()
    };
    window.ROGUE_RUN = ROGUE_RUN;
    G.roguelike = G.roguelike || { runs:0, clears:0, raidClears:0, bestScore:0 };
    G.roguelike.runs++;
    rogueRunScreen();
  }

  function abandonRogueRun(){
    ROGUE_RUN = null;
    window.ROGUE_RUN = null;
    clearOutput(); showBattlePanel(false);
    print('RUN ABANDONED', 'danger');
    print('You step back through the portal before the map can collapse around you.', 'narrator');
    showChoices([['🗺 Map Screen', map_screen], ['Town Center', town_center]]);
  }
  window.abandonRogueRun = abandonRogueRun;

  function rogueHeader(){
    var map = ROGUE_RUN.map;
    print((ROGUE_RUN.isRaid ? 'RAID RUN' : 'WORLD ROGUELIKE RUN') + ' — ' + map.name, 'highlight');
    print(map.emoji + ' ' + (map.biome || 'Raid Gate') + ' · ' + (map.theme || 'unknown threats'), 'narrator');
    print('Room ' + (ROGUE_RUN.floor + 1) + ' / ' + ROGUE_RUN.length + ' · Score ' + ROGUE_RUN.score + ' · Relics: ' + (ROGUE_RUN.relics.length ? ROGUE_RUN.relics.join(', ') : 'none'), 'info');
    print('HP ' + G.hp + ' / ' + G.max_hp + ' · MP ' + G.mp + ' / ' + G.max_mp, 'info');
    print('');
  }

  function rogueRunScreen(){
    if (!ROGUE_RUN || !ROGUE_RUN.active) { map_screen(); return; }
    clearOutput(); showBattlePanel(false); applyStats(); updateStats();
    if (ROGUE_RUN.floor >= ROGUE_RUN.length) { completeRogueRun(); return; }
    rogueHeader();
    print('Choose one of three paths. Battles award EXP and gold; safe rooms help you survive deeper into the run.', 'narrator');
    if (!ROGUE_RUN.currentChoices) ROGUE_RUN.currentChoices = buildNodeChoices();
    $ch.innerHTML='';
    ROGUE_RUN.currentChoices.forEach(function(node, idx){
      var meta = ROGUE_NODE[node.type] || ROGUE_NODE.event;
      var b = document.createElement('button');
      b.style.whiteSpace='pre-wrap';
      b.style.lineHeight='1.45';
      b.style.borderColor = meta.color;
      b.textContent = meta.icon + ' Path ' + (idx+1) + ': ' + node.name + ' [' + meta.label + ']' + '\nDanger: ' + node.danger + '\n' + node.desc;
      b.onclick=function(){ chooseRogueNode(node); };
      $ch.appendChild(b);
    });
    var leave=document.createElement('button');
    leave.textContent='Abandon Run';
    leave.onclick=abandonRogueRun;
    $ch.appendChild(leave);
  }
  window.rogueRunScreen = rogueRunScreen;

  function chooseRogueNode(node){
    if (!ROGUE_RUN) return;
    ROGUE_RUN.pendingNode = node;
    ROGUE_RUN.currentChoices = null;
    if (node.type === 'battle' || node.type === 'elite' || node.type === 'boss'){
      var group = generateRogueGroup(ROGUE_RUN.map, node.type, ROGUE_RUN.floor, ROGUE_RUN.isRaid);
      _lastZone = function(){ afterRogueBattle(); };
      startBattle(group);
      return;
    }
    resolveSafeRogueNode(node);
  }

  function addRunRelic(source){
    if (!ROGUE_RUN) return;
    var relics = ['Iron Vow', 'Mana Seed', 'Hunter Mark', 'Lucky Tooth', 'Phoenix Ash', 'Glass Dagger', 'Ward Charm', 'King Coin', 'Traveler Boot', 'Fate Thread'];
    var r = rand(relics);
    ROGUE_RUN.relics.push(r);
    print('Relic gained from ' + source + ': ' + r + '.', 'success');
  }

  function grantRogueGoldExp(gold, exp){
    G.gold += Math.floor(gold || 0);
    G.exp += Math.floor(exp || 0);
    print('Run reward: +' + Math.floor(exp||0) + ' EXP, +' + Math.floor(gold||0) + ' gold.', 'b-system');
    while (G.exp >= G.next_exp) {
      if (G.total_lv + G.level_pts >= 100) { G.exp = Math.min(G.exp, Math.max(0, G.next_exp - 1)); break; }
      G.exp -= G.next_exp;
      G.level_pts++;
      G.stat_pts += 10;
      G.next_exp = 30 + 10 * G.total_lv;
      print('★ Level Up! +1 Level Point and +10 Stat Points.', 'b-system');
    }
    updateStats();
  }

  function resolveSafeRogueNode(node){
    clearOutput(); showBattlePanel(false); rogueHeader();
    var req = ROGUE_RUN.map.req || 1;
    if (node.type === 'treasure'){
      var gold = 50 + req * 7 + ROGUE_RUN.floor * 15;
      grantRogueGoldExp(gold, 15 + req * 2);
      if (Math.random()<0.70) addRunRelic('treasure');
    } else if (node.type === 'camp'){
      var hp = Math.floor(G.max_hp * 0.40), mp = Math.floor(G.max_mp * 0.35);
      G.hp = Math.min(G.max_hp, G.hp + hp);
      G.mp = Math.min(G.max_mp, G.mp + mp);
      print('You rest at a safe campfire. HP +' + hp + ', MP +' + mp + '.', 'success');
      updateStats();
    } else if (node.type === 'shrine'){
      var keys = ['hp','mp','pa','pd','ag','ma','md','rs','sp'];
      var key = rand(keys);
      var amount = (key === 'hp' || key === 'mp') ? 8 + Math.floor(req/10) : 1;
      G.bonus[key] = (G.bonus[key] || 0) + amount;
      applyStats(); updateStats();
      print('A shrine brands your soul. Permanent bonus: +' + amount + ' ' + key.toUpperCase() + '.', 'success');
      if (Math.random()<0.25) addRunRelic('shrine');
    } else {
      var roll = Math.random();
      if (roll < 0.35){
        var dmg = Math.floor(G.max_hp * 0.12);
        G.hp = Math.max(1, G.hp - dmg);
        print('A cursed shortcut bites back. You lose ' + dmg + ' HP, but skip danger.', 'danger');
        grantRogueGoldExp(25 + req * 3, 20 + req * 3);
      } else if (roll < 0.70){
        addRunRelic('mysterious event');
        grantRogueGoldExp(20 + req * 4, 20 + req * 2);
      } else {
        var mp = Math.floor(G.max_mp * 0.22);
        G.mp = Math.min(G.max_mp, G.mp + mp);
        print('A wandering spirit restores ' + mp + ' MP and whispers a route through the dungeon.', 'success');
      }
      updateStats();
    }
    ROGUE_RUN.score += 15 + req + ROGUE_RUN.floor * 5;
    ROGUE_RUN.floor++;
    saveGame();
    showChoices([['Continue Run', rogueRunScreen], ['Abandon Run', abandonRogueRun], ['Map Screen', map_screen]]);
  }

  function afterRogueBattle(){
    if (!ROGUE_RUN || !ROGUE_RUN.pendingNode) { map_screen(); return; }
    clearOutput(); showBattlePanel(false);
    var node = ROGUE_RUN.pendingNode;
    rogueHeader();
    var req = ROGUE_RUN.map.req || 1;
    if (node.type === 'elite') addRunRelic('elite battle');
    if (node.type === 'boss') addRunRelic('boss victory');
    var bonusGold = (node.type === 'boss' ? 120 : node.type === 'elite' ? 70 : 35) + req * (node.type === 'boss' ? 7 : 3);
    var bonusExp = (node.type === 'boss' ? 100 : node.type === 'elite' ? 55 : 25) + req * (node.type === 'boss' ? 5 : 2);
    grantRogueGoldExp(bonusGold, bonusExp);
    ROGUE_RUN.score += (node.type === 'boss' ? 100 : node.type === 'elite' ? 55 : 25) + req + ROGUE_RUN.floor * 8;
    ROGUE_RUN.pendingNode = null;
    ROGUE_RUN.floor++;
    saveGame();
    if (ROGUE_RUN.floor >= ROGUE_RUN.length) {
      showChoices([['Claim Clear Reward', completeRogueRun], ['Map Screen', map_screen]]);
    } else {
      showChoices([['Continue Run', rogueRunScreen], ['Abandon Run', abandonRogueRun], ['Map Screen', map_screen]]);
    }
  }
  window.afterRogueBattle = afterRogueBattle;

  function completeRogueRun(){
    if (!ROGUE_RUN) { map_screen(); return; }
    clearOutput(); showBattlePanel(false);
    var map = ROGUE_RUN.map, req = map.req || 1;
    print((ROGUE_RUN.isRaid ? 'RAID CLEARED' : 'MAP CLEARED') + ' — ' + map.name, 'highlight');
    print('You survived every room and collapsed the roguelike route behind you.', 'success');
    var clearGold = (ROGUE_RUN.isRaid ? 450 : 220) + req * (ROGUE_RUN.isRaid ? 12 : 7) + ROGUE_RUN.relics.length * 25;
    var clearExp = (ROGUE_RUN.isRaid ? 360 : 180) + req * (ROGUE_RUN.isRaid ? 10 : 6) + ROGUE_RUN.relics.length * 15;
    grantRogueGoldExp(clearGold, clearExp);
    G.roguelike = G.roguelike || { runs:0, clears:0, raidClears:0, bestScore:0 };
    G.roguelike.clears++;
    if (ROGUE_RUN.isRaid) G.roguelike.raidClears++;
    G.roguelike.bestScore = Math.max(G.roguelike.bestScore || 0, ROGUE_RUN.score || 0);
    print('Final score: ' + ROGUE_RUN.score + ' · Best score: ' + G.roguelike.bestScore, 'info');
    print('Relics found: ' + (ROGUE_RUN.relics.length ? ROGUE_RUN.relics.join(', ') : 'none'), 'narrator');
    ROGUE_RUN = null;
    window.ROGUE_RUN = null;
    saveGame();
    showChoices([['🗺 Map Screen', map_screen], ['World Map', show_map], ['Raid Map', raid_map_screen], ['Town Center', town_center]]);
  }
  window.completeRogueRun = completeRogueRun;

  var _winBattleV19Prev = winBattle;
  winBattle = async function(){
    if (!ROGUE_RUN || !ROGUE_RUN.active || !ROGUE_RUN.pendingNode) {
      return _winBattleV19Prev.apply(this, arguments);
    }
    var totalExp  = B.enemies.reduce(function(s,e){ return s + e.exp; }, 0);
    var totalGold = B.enemies.reduce(function(s,e){ return s + e.gold; }, 0);
    if (B.enemies.length > 1) print('All enemies defeated!', 'success');
    else print(B.enemies[0].name + ' was defeated!', 'success');
    G.exp += totalExp; G.gold += totalGold;
    print('Gained ' + totalExp + ' EXP and ' + totalGold + ' gold!', 'b-system');
    recordBattleAchievements(B.enemies);
    updateStats();
    while (G.exp >= G.next_exp) {
      if (G.total_lv + G.level_pts >= 100) {
        G.exp = Math.min(G.exp, Math.max(0, G.next_exp - 1));
        print('★ Level cap reached: Total Level 100 is the maximum.', 'b-system');
        break;
      }
      G.exp -= G.next_exp;
      G.level_pts++;
      G.stat_pts += 10;
      G.next_exp = 30 + 10 * G.total_lv;
      print('★ Level Up! +1 Level Point +10 Stat Points — visit Character screen to spend them.', 'b-system');
      updateStats();
    }
    endBattle();
    await delay(500);
    showChoices([['Continue Run', afterRogueBattle], ['Abandon Run', abandonRogueRun], ['Return to Map Screen', map_screen]]);
  };

  map_screen = function(){
    clearOutput(); showBattlePanel(false); applyStats(); updateStats();
    print('ROGUELIKE MAP SCREEN', 'highlight');
    print('Every route is now a short roguelike run. Choose a World Map for normal progression or a Raid Map for boss-focused gauntlets.', 'narrator');
    print('World Map rule: 3 maps unlock every 10 levels up to Level 100.', 'info');
    var stats = G.roguelike || {runs:0, clears:0, raidClears:0, bestScore:0};
    print('Runs: ' + (stats.runs||0) + ' · Clears: ' + (stats.clears||0) + ' · Raid Clears: ' + (stats.raidClears||0) + ' · Best Score: ' + (stats.bestScore||0), 'info');
    showChoices([
      ['🗺 World Map — roguelike routes', show_map],
      ['👑 Raid Map — roguelike boss gauntlets', raid_map_screen],
      ['← Town Center', town_center]
    ]);
  };

  show_map = function(){
    clearOutput(); showBattlePanel(false); applyStats(); updateStats();
    print('WORLD MAP — ROGUELIKE ROUTES', 'highlight');
    print('Each level band has 3 fantasy maps. Start a run, choose one of three paths each room, survive the boss, and claim the clear reward.', 'narrator');
    print('Total Level: ' + G.total_lv + ' / 100', 'info');
    $ch.innerHTML='';
    ROGUE_WORLD_MAPS.forEach(function(tier){
      var hdr=document.createElement('div');
      var open = mapTierUnlocked(tier.req);
      hdr.style.cssText='margin:12px 0 5px;padding:6px 10px;background:linear-gradient(90deg,#07090f,transparent);border-left:3px solid '+(open?'#e8c84a':'#2e5070')+';font-size:10px;font-weight:700;letter-spacing:2px;color:'+(open?'#e8c84a':'#5a7a98');
      hdr.textContent='— '+tier.tier.toUpperCase()+' · 3 MAPS —';
      $ch.appendChild(hdr);
      tier.maps.forEach(function(m){
        var unlocked = mapTierUnlocked(tier.req);
        m.req = tier.req;
        var b=document.createElement('button');
        b.style.whiteSpace='pre-wrap';
        b.style.lineHeight='1.45';
        b.disabled = !unlocked;
        b.textContent = m.emoji+' '+m.name+' — '+tier.tier+' ['+(unlocked?'OPEN':'LOCKED')+']\nBiome: '+m.biome+'\nThreats: '+m.theme+'\nRun: '+runLengthFor(m,false)+' rooms · Boss: '+m.boss+(unlocked?'':'\nRequires Total Level '+tier.req);
        b.onclick=function(){ startRoguelikeRun(m,false); };
        $ch.appendChild(b);
      });
    });
    var back=document.createElement('button'); back.textContent='← Map Screen'; back.onclick=map_screen; $ch.appendChild(back);
  };

  raid_map_screen = function(){
    clearOutput(); showBattlePanel(false); applyStats(); updateStats();
    print('RAID MAP — ROGUELIKE BOSS GAUNTLETS', 'highlight');
    print('Raid runs are shorter but harder. Expect elite rooms, fewer safe choices, and a high-HP raid boss at the end.', 'narrator');
    print('Total Level: ' + G.total_lv + ' / 100', 'info');
    $ch.innerHTML='';
    ROGUE_RAID_MAPS.forEach(function(m){
      var unlocked = mapTierUnlocked(m.req);
      var raidMap = { name:m.name, req:m.req, emoji:m.emoji, theme:m.theme, biome:'Raid Gate', tags:['Raid Elite','Gate Warden','Boss Guard'], boss:m.boss };
      var b=document.createElement('button');
      b.style.whiteSpace='pre-wrap';
      b.style.lineHeight='1.45';
      b.disabled = !unlocked;
      b.textContent = m.emoji+' '+m.name+' — Recommended Lv '+m.req+'+ ['+(unlocked?'OPEN':'LOCKED')+']\nTheme: '+m.theme+'\nRun: '+runLengthFor(raidMap,true)+' raid rooms · Final Boss: '+m.boss+(unlocked?'':'\nRequires Total Level '+m.req);
      b.onclick=function(){ startRoguelikeRun(raidMap,true); };
      $ch.appendChild(b);
    });
    var back=document.createElement('button'); back.textContent='← Map Screen'; back.onclick=map_screen; $ch.appendChild(back);
  };

  function injectV19Settings(){
    var panel = document.getElementById('settings-panel');
    if (!panel || document.getElementById('v19-settings-section')) return;
    var saveSection = Array.prototype.slice.call(panel.querySelectorAll('.sp-section')).find(function(s){ return /Save \/ Load/.test(s.textContent || ''); });
    var div = document.createElement('div');
    div.className = 'sp-section';
    div.id = 'v19-settings-section';
    div.innerHTML = '<h3>Update v0.19</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">World Map and Raid Map rebuilt as roguelike runs. World Map now has 3 maps for every 10 levels up to Level 100.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); map_screen()">🗺 Map Screen</button><button class="sp-btn" onclick="closeSettingsPanel(); show_map()">🌍 World Map</button><button class="sp-btn" onclick="closeSettingsPanel(); raid_map_screen()">👑 Raid Map</button></div>';
    if (saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
  }
  injectV19Settings();

  if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = {};
  G.save_meta.version = V19_VERSION;
})();



// ═══════════════════════════════════════════════════════════════
// v0.20.1 — Safe Cohesion Text Patch
// This version does NOT replace the main menu, job menus, race menus,
// registry logic, or map logic. It only improves descriptions and notes.
// ═══════════════════════════════════════════════════════════════
(function installV201SafeCohesionTextPatch(){
  var V201_VERSION = 'v0.20.1-safe-cohesion-text-patch';

  function statIdentityV201(base){
    if (!base) return 'balanced growth';
    var pairs = [
      ['HP', base.hp || 0], ['MP', base.mp || 0],
      ['Physical Attack', base.pa || 0], ['Physical Defense', base.pd || 0],
      ['Agility', base.ag || 0], ['Magic Attack', base.ma || 0],
      ['Magic Defense', base.md || 0], ['Resistance', base.rs || 0],
      ['Special', base.sp || 0]
    ].sort(function(a,b){ return b[1]-a[1]; });
    return pairs.slice(0,3).map(function(p){ return p[0]; }).join(', ');
  }

  function raceLineageV201(name){
    var n = String(name || '').toLowerCase();
    if (/angel|kami|celestial|divine|qilin|kirin|garuda|yaksha/.test(n)) return 'divine lineage';
    if (/demon|devil|oni|asura|rakshasa|abyss/.test(n)) return 'infernal lineage';
    if (/undead|skeleton|zombie|lich|vampire|wraith|ghost/.test(n)) return 'undead lineage';
    if (/dragon|dragonewt|dragonkin/.test(n)) return 'draconic lineage';
    if (/cat|dog|fox|kitsune|rabbit|bear|lion|tiger|bird|harp|lizard|snake|lamia|minotaur|centaur|beast|mink|fish|mer|arachne/.test(n)) return 'beastfolk lineage';
    if (/elf|dwarf|halfling|gnome|fairy|spirit|human/.test(n)) return 'mortal folk lineage';
    if (/goblin|orc|ogre|troll|giant|cyclop|slime|treant|ent|golem|homunc|automata|doll/.test(n)) return 'monster or construct lineage';
    if (/yōkai|yokai|tanuki|tengu|kappa|yuki|nekomata|bakeneko|tsukumogami|shikigami|ayakashi/.test(n)) return 'spirit myth lineage';
    return 'fantasy lineage';
  }

  function jobRoleV201(name, category){
    var n = (String(name || '') + ' ' + String(category || '')).toLowerCase();
    if (/blacksmith|smith|alchemist|tailor|chef|engineer|enchanter|appraiser|merchant|craft|scribe|jeweler|herbalist/.test(n)) return 'crafting and economy';
    if (/cleric|priest|saint|paladin|oracle|templar|exorcist|healer|purifier|holy/.test(n)) return 'holy support';
    if (/mage|wizard|sorcerer|witch|warlock|necromancer|curse|blood|dark|elementalist|barrier|summoner/.test(n)) return 'magic and occult';
    if (/rogue|thief|assassin|ninja|scout|spy|trickster|bandit/.test(n)) return 'stealth and utility';
    if (/archer|hunter|ranger|sniper|gunner|gunslinger|marksman|bow/.test(n)) return 'ranged survival';
    if (/monk|brawler|martial|fighter|warrior|swordsman|knight|lancer|berserker|samurai|blade|spear/.test(n)) return 'martial frontline';
    return 'adventuring';
  }

  function improveRaceDescriptionsV201(){
    if (typeof RACE_DATA !== 'object') return;
    Object.keys(RACE_DATA).forEach(function(id){
      var r = RACE_DATA[id];
      if (!r || r._v201_desc_done) return;
      var original = r.desc || 'A fantasy ancestry with room to grow.';
      if (original.indexOf('Build note:') === -1) {
        r.desc = original + ' Build note: this ' + raceLineageV201(r.name) +
          ' favors ' + statIdentityV201(r.base) +
          '. Max the current race stage to reveal its next evolution path.';
      }
      r._v201_desc_done = true;
    });
  }

  function improveJobDescriptionsV201(){
    if (typeof JOB_DATA !== 'object') return;
    Object.keys(JOB_DATA).forEach(function(id){
      var j = JOB_DATA[id];
      if (!j || j._v201_desc_done) return;
      var original = j.desc || 'A fantasy job with its own combat role.';
      if (original.indexOf('Build note:') === -1) {
        j.desc = original + ' Build note: this job supports a ' +
          jobRoleV201(j.name, j.anime || j.v07Category) +
          ' playstyle and favors ' + statIdentityV201(j.base) +
          '. Max your current job before taking its next upgrade.';
      }
      j._v201_desc_done = true;
    });
  }

  function improveSkillDescriptionsV201(){
    if (typeof RACE_DATA === 'object') {
      Object.keys(RACE_DATA).forEach(function(id){
        var r = RACE_DATA[id];
        if (!r || !Array.isArray(r.skills)) return;
        r.skills.forEach(function(tier){
          if (!Array.isArray(tier) || !Array.isArray(tier[1])) return;
          tier[1].forEach(function(sk){
            if (!sk || sk._v201_desc_done) return;
            var original = sk.desc || 'A racial technique.';
            if (original.indexOf('Use case:') === -1) {
              sk.desc = original + ' Use case: a ' + (sk.type === 'p' ? 'passive racial trait' : 'racial active skill') +
                ' that helps define the ' + r.name + ' path.';
            }
            sk._v201_desc_done = true;
          });
        });
      });
    }

    if (typeof JOB_DATA === 'object') {
      Object.keys(JOB_DATA).forEach(function(id){
        var j = JOB_DATA[id];
        if (!j || !Array.isArray(j.skills)) return;
        j.skills.forEach(function(tier){
          if (!Array.isArray(tier) || !Array.isArray(tier[1])) return;
          tier[1].forEach(function(sk){
            if (!sk || sk._v201_desc_done) return;
            var original = sk.desc || 'A job technique.';
            if (original.indexOf('Use case:') === -1) {
              var details = [];
              if (sk.mp) details.push(sk.mp + ' MP');
              if (sk.pow) details.push('Power ' + sk.pow);
              if (sk.hits) details.push(sk.hits + ' hits');
              if (sk.st) details.push('can inflict ' + sk.st);
              if (sk.buf) details.push('can grant ' + sk.buf);
              sk.desc = original + ' Use case: a ' + (sk.type === 'p' ? 'passive mastery skill' : 'combat skill') +
                ' for the ' + j.name + ' path' + (details.length ? ' (' + details.join(', ') + ')' : '') + '.';
            }
            sk._v201_desc_done = true;
          });
        });
      });
    }
  }

  function injectSafeV201SettingsNote(){
    var panel = document.getElementById('settings-panel');
    if (!panel || document.getElementById('v201-settings-section')) return;
    var saveSection = Array.prototype.slice.call(panel.querySelectorAll('.sp-section')).find(function(s){
      return /Save \/ Load/.test(s.textContent || '');
    });
    var div = document.createElement('div');
    div.className = 'sp-section';
    div.id = 'v201-settings-section';
    div.innerHTML =
      '<h3>Update v0.20.1</h3>' +
      '<div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">' +
      'Safe description polish. Race, job, and skill descriptions were improved without replacing the main menu, job menus, registry, or map logic.' +
      '</div>' +
      '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
      '<button class="sp-btn" onclick="closeSettingsPanel(); help_screen()">❓ Help</button>' +
      '<button class="sp-btn" onclick="closeSettingsPanel(); yggdrasil_build_guide_screen()">📘 Build Guide</button>' +
      '</div>';
    if (saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
  }

  function applySafeCohesionV201(){
    improveRaceDescriptionsV201();
    improveJobDescriptionsV201();
    improveSkillDescriptionsV201();
    injectSafeV201SettingsNote();
    if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = {};
    G.save_meta.version = V201_VERSION;
  }

  applySafeCohesionV201();

  var prevUpdateStats = updateStats;
  updateStats = function(){
    applySafeCohesionV201();
    return prevUpdateStats.apply(this, arguments);
  };
})();


// ═══════════════════════════════════════════════════════════════
