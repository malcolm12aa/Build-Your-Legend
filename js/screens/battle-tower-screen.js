// ═══════════════════════════════════════════════════════════════
// Build Your Legend — Battle Tower Screen v0.59
// File: js/screens/battle-tower-screen.js
//
// This is the only active Battle Tower controller.
// Old tower state machines in v50/v501 were removed from their files.
// ═══════════════════════════════════════════════════════════════
(function installBattleTowerScreenV59(){
  "use strict";

  var VERSION = "v0.59-battle-tower-screen";

  function isFn(fn){ return typeof fn === "function"; }
  function byId(id){ return document.getElementById(id); }
  function out(){ return byId("output"); }
  function choices(){ return byId("choices"); }
  function esc(x){
    return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }
  function clear(){
    try { if (isFn(window.clearOutput)) window.clearOutput(); else if (out()) out().innerHTML = ""; }
    catch(e){ if (out()) out().innerHTML = ""; }
    if (choices()) choices().innerHTML = "";
  }
  function say(text, cls){
    try { if (isFn(window.print)) window.print(text, cls || "narrator"); }
    catch(e){}
  }
  function battleOff(){
    try { if (isFn(window.showBattlePanel)) window.showBattlePanel(false); }
    catch(e){}
  }
  function setChoices(list){
    var c = choices();
    if (!c) return;
    c.innerHTML = "";
    list.forEach(function(row){
      if (!row || !row[0] || !isFn(row[1])) return;
      var b = document.createElement("button");
      b.textContent = row[0];
      b.onclick = function(){
        try { row[1](); }
        catch(err) { say("Game action error: " + (err && err.message ? err.message : err), "danger"); }
      };
      c.appendChild(b);
    });
  }
  function card(html){
    if (!out()) return;
    var d = document.createElement("div");
    d.className = "byl-tower-card";
    d.innerHTML = html;
    out().appendChild(d);
  }
  function pick(arr){ return arr[Math.floor(Math.random() * arr.length)]; }
  function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

  var TOWERS = [
    { id:"ember", name:"Ember Tower", range:"Lv. 1–20", min:1, max:20, theme:"Fire / Warriors", mod:"Scorched Air",
      desc:"A beginner-friendly climb with burning beasts, sword trials, and forge drops.",
      reward:"Fire materials · sword mastery · burn quests",
      enemies:["Ashhound","Flame Raider","Cinder Knight","Forge Sentinel","Ember Drake"], mat:["Ember Shard","Iron Ore"] },
    { id:"tidal", name:"Tidal Tower", range:"Lv. 15–35", min:15, max:35, theme:"Water / Healing", mod:"Rain",
      desc:"Wet floors full of mist spirits, tide guards, shell knights, and healing tests.",
      reward:"Water materials · healer gear · recovery items",
      enemies:["Mist Spirit","Tide Guard","Shell Knight","River Wisp","Tidecaller"], mat:["Tidal Pearl","Healing Herb"] },
    { id:"storm", name:"Storm Tower", range:"Lv. 30–50", min:30, max:50, theme:"Wind / Lightning", mod:"Mana Storm",
      desc:"Fast enemies, burst magic, airborne threats, and speed-based rewards.",
      reward:"Lightning drops · wand mastery · speed gear",
      enemies:["Volt Harrier","Sky Rogue","Tempest Mage","Thunder Beast","Cloud Duelist"], mat:["Storm Core","Mana Crystal"] },
    { id:"shadow", name:"Shadow Tower", range:"Lv. 45–65", min:45, max:65, theme:"Dark / Rogue", mod:"Darkness",
      desc:"Assassins, curses, ambushes, and hidden routes punish slow builds.",
      reward:"Dark materials · dagger mastery · stealth rewards",
      enemies:["Night Stalker","Shade Beast","Curse Knife","Eclipse Watcher","Black Veil"], mat:["Shadow Thread","Cursed Bone"] },
    { id:"celestial", name:"Celestial Tower", range:"Lv. 60–80", min:60, max:80, theme:"Holy / Barrier", mod:"Sacred Ground",
      desc:"Holy guardians, barrier mages, and boss gauntlets test defense and sustain.",
      reward:"Holy materials · shield/staff rewards · boss unlocks",
      enemies:["Halo Guard","Sunblade Warden","Barrier Saint","Sacred Beast","Seraph Knight"], mat:["Holy Sigil","Barrier Stone"] },
    { id:"verdant", name:"Verdant Tower", range:"Lv. 70–90", min:70, max:90, theme:"Nature / Survival", mod:"Wild Growth",
      desc:"Roots, poison, beasts, and survival floors reward sturdy all-rounders.",
      reward:"Herbs · spear mastery · beast materials",
      enemies:["Rootling","Thorn Beast","Forest Knight","Venom Bloom","Ancient Stag"], mat:["Ancient Bark","Healing Herb"] },
    { id:"iron", name:"Iron Tower", range:"Lv. 75–95", min:75, max:95, theme:"Armor / Forge", mod:"Armored Field",
      desc:"Golems and forge guards favor builds with strong damage and armor piercing.",
      reward:"Iron Ore · heavy weapon mastery · forge drops",
      enemies:["Iron Golem","Forge Guard","Steel Brute","Anvil Knight","Chrome Warden"], mat:["Iron Ore","Steel Plate"] },
    { id:"frost", name:"Frost Tower", range:"Lv. 80–100", min:80, max:100, theme:"Ice / Control", mod:"Deep Freeze",
      desc:"Slows, ice magic, and control enemies test speed and resistance.",
      reward:"Ice crystals · staff mastery · control gear",
      enemies:["Frost Imp","Ice Warden","Glacier Beast","Snow Witch","White Dragon"], mat:["Frost Crystal","Mana Crystal"] },
    { id:"abyss", name:"Abyss Tower", range:"Lv. 90–100", min:90, max:100, theme:"Curse / Endgame", mod:"Cursed Ground",
      desc:"A punishing endgame route with curse effects and elite enemies.",
      reward:"Cursed bones · catalyst mastery · hidden path progress",
      enemies:["Abyss Wisp","Doom Hound","Black Sigil","Void Priest","Abyss Herald"], mat:["Cursed Bone","Void Dust"] },
    { id:"world_crown", name:"World-Crown Spire", range:"Lv. 95–100", min:95, max:100, theme:"World-Class", mod:"World Flux",
      desc:"The ultimate spire. Every floor is tuned like a boss check.",
      reward:"World-Class drops · ultimate progress",
      enemies:["Crown Warden","Mythic Ravager","World Judge","Apex Horror","Legend Eater"], mat:["World Fragment","Crown Relic"] }
  ];

  var EVENTS = [
    { id:"shrine", name:"Tower Shrine", text:"A quiet shrine restores your party.", apply:function(run){ if (window.G) { G.hp = G.max_hp || G.hp; G.mp = G.max_mp || G.mp; if (typeof G.max_stamina === "number") G.stamina = G.max_stamina; } say("HP, MP, and stamina restored.", "success"); } },
    { id:"treasure", name:"Sealed Chest", text:"A sealed chest opens after the floor accepts your strength.", apply:function(run){ grantMaterial(run.tower, 2); if (window.G) G.gold = (G.gold || 0) + 60; say("Gained tower materials and 60 gold.", "success"); } },
    { id:"merchant", name:"Wandering Merchant", text:"A merchant trades information for monster parts.", apply:function(run){ if (window.G) G.gold = (G.gold || 0) + 40; say("You gain 40 gold worth of supplies.", "success"); } },
    { id:"training", name:"Combat Memory", text:"An echo of past challengers sharpens your technique.", apply:function(run){ if (window.G) { if (!G.weapon_mastery) G.weapon_mastery = {}; var key = "Tower"; G.weapon_mastery[key] = (G.weapon_mastery[key] || 0) + 1; } say("Tower mastery increased.", "success"); } }
  ];

  function addStyle(){
    if (byId("byl-tower-v59-style")) return;
    var st = document.createElement("style");
    st.id = "byl-tower-v59-style";
    st.textContent = `
      .byl-tower-card{
        border:1px solid #224062;
        background:linear-gradient(180deg,#071220,#050810);
        padding:11px 12px;
        margin:9px 0;
        line-height:1.55;
        box-sizing:border-box;
      }
      .byl-tower-title{color:#e8c84a;font-size:15px;font-weight:900;letter-spacing:.7px}
      .byl-tower-sub{color:#48cae4;font-size:11px;margin:2px 0 7px}
      .byl-tower-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
      .byl-tower-field{background:#070d15;border:1px solid #18324c;padding:8px;color:#bdd0e4;font-size:11px}
      .byl-tower-field b{display:block;color:#e8c84a;font-size:10px;text-transform:uppercase;letter-spacing:.6px;margin-bottom:3px}
      .byl-tower-run{border-left:4px solid #e8c84a}
      @media(max-width:700px){.byl-tower-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(st);
  }

  function ensureState(){
    try {
      if (!window.G) return;
      if (!G.byl_tower_records || typeof G.byl_tower_records !== "object") G.byl_tower_records = {};
      if (G.tower_run) G.tower_run = null;
      if (G.v501_towers) G.v501_towers = null;
    } catch(e){}
  }

  function getTower(id){
    return TOWERS.find(function(t){ return t.id === id; }) || TOWERS[0];
  }

  function currentRun(){
    ensureState();
    try { return window.G && G.byl_tower_run ? G.byl_tower_run : null; }
    catch(e){ return null; }
  }

  function currentTower(){
    var run = currentRun();
    return run ? getTower(run.id) : null;
  }

  function recordBest(run){
    if (!window.G || !run) return;
    if (!G.byl_tower_records) G.byl_tower_records = {};
    var rec = G.byl_tower_records[run.id] || { clears:0, bestFloor:0, bestStreak:0 };
    rec.bestFloor = Math.max(rec.bestFloor || 0, run.floor || 0);
    rec.bestStreak = Math.max(rec.bestStreak || 0, run.battlesWon || 0);
    G.byl_tower_records[run.id] = rec;
  }

  function completeTower(){
    var run = currentRun();
    var tower = currentTower();
    if (!run || !tower) return battle_towers_screen();
    if (!window.G) return battle_towers_screen();

    if (!G.byl_tower_records) G.byl_tower_records = {};
    var rec = G.byl_tower_records[tower.id] || { clears:0, bestFloor:0, bestStreak:0 };
    rec.clears = (rec.clears || 0) + 1;
    rec.bestFloor = Math.max(rec.bestFloor || 0, tower.max);
    rec.bestStreak = Math.max(rec.bestStreak || 0, run.battlesWon || 0);
    rec.lastClear = new Date().toISOString();
    G.byl_tower_records[tower.id] = rec;

    grantMaterial(tower, 4);
    G.gold = (G.gold || 0) + 250;
    G.byl_tower_run = null;
    G.tower_run = null;

    clear();
    battleOff();
    say("— TOWER CLEARED —", "highlight");
    say("You cleared " + tower.name + ".", "success");
    say("Clear recorded. Bonus reward: 250 gold and rare tower materials.", "b-system");
    setChoices([
      ["Choose Another Tower", battle_towers_screen],
      ["Return to Hub World", backToHub]
    ]);
  }

  function grantMaterial(tower, amount){
    if (!window.G || !tower) return;
    if (!G.materials || typeof G.materials !== "object") G.materials = {};
    (tower.mat || ["Tower Fragment"]).forEach(function(m){
      G.materials[m] = (G.materials[m] || 0) + (amount || 1);
    });
  }

  function towerButtonLabel(tower){
    var rec = window.G && G.byl_tower_records ? G.byl_tower_records[tower.id] : null;
    var line = rec ? "\nRecord: " + (rec.clears || 0) + " clears · Best floor " + (rec.bestFloor || 0) : "\nRecord: No clears yet";
    return "Enter " + tower.name +
      "\n" + tower.range + " · " + tower.theme +
      "\nModifier: " + tower.mod +
      "\nRewards: " + tower.reward + line;
  }

  function battle_towers_screen(){
    addStyle();
    ensureState();
    clear();
    battleOff();
    say("— BATTLE TOWERS —", "highlight");
    say("Choose a tower. Tower progression now runs from this single file only.", "narrator");

    TOWERS.forEach(function(tower){
      card(
        '<div class="byl-tower-title">' + esc(tower.name) + '</div>' +
        '<div class="byl-tower-sub">' + esc(tower.range) + ' · ' + esc(tower.theme) + ' · Modifier: <b>' + esc(tower.mod) + '</b></div>' +
        '<div class="byl-tower-grid">' +
          '<div class="byl-tower-field"><b>Description</b>' + esc(tower.desc) + '</div>' +
          '<div class="byl-tower-field"><b>Rewards</b>' + esc(tower.reward) + '</div>' +
        '</div>'
      );
    });

    var list = TOWERS.map(function(tower){
      return [towerButtonLabel(tower), function(){ startTowerRun(tower.id); }];
    });
    list.push(["Return to Hub World", backToHub]);
    setChoices(list);
  }

  function startTowerRun(id){
    addStyle();
    ensureState();
    var tower = getTower(id);
    if (!window.G) return;
    G.tower_run = null;
    G.byl_tower_run = {
      id: tower.id,
      floor: tower.min,
      max: tower.max,
      battlesWon: 0,
      eventsSeen: 0,
      rewards: 0,
      inBattle: false,
      pendingBattle: false,
      startedAt: new Date().toISOString()
    };
    clear();
    battleOff();
    say("— " + tower.name.toUpperCase() + " —", "highlight");
    say("This run starts at floor " + tower.min + " and ends at floor " + tower.max + ".", "narrator");
    say("Old tower progression has been removed; this run uses the v0.59 tower controller.", "info");
    setChoices([
      ["Begin Floor " + tower.min, enterTowerFloor],
      ["Leave Tower", leaveTowerRun]
    ]);
  }

  function enterTowerFloor(){
    addStyle();
    ensureState();
    var run = currentRun();
    var tower = currentTower();
    if (!run || !tower) return battle_towers_screen();

    G.tower_run = null;
    run.inBattle = false;
    run.pendingBattle = false;
    recordBest(run);

    if (run.floor > tower.max) return completeTower();

    clear();
    battleOff();
    say("— " + tower.name.toUpperCase() + " · FLOOR " + run.floor + " —", "highlight");
    say("Modifier: " + tower.mod + ".", "narrator");

    var isBossFloor = run.floor >= tower.max || run.floor % 5 === 0;
    var eventFloor = !isBossFloor && run.floor % 3 === 0;

    if (eventFloor) return towerEventScreen();
    startTowerBattle(isBossFloor);
  }

  function towerEventScreen(){
    var run = currentRun();
    var tower = currentTower();
    if (!run || !tower) return battle_towers_screen();

    var evt = pick(EVENTS);
    run.eventsSeen = (run.eventsSeen || 0) + 1;

    clear();
    battleOff();
    say("— TOWER EVENT —", "highlight");
    say(evt.name + ": " + evt.text, "narrator");
    try { evt.apply(run); } catch(e) {}

    setChoices([
      ["Continue to Floor " + (run.floor + 1), function(){ advanceFloor(); }],
      ["Rest at Tower Camp", towerCampScreen],
      ["Leave Tower", leaveTowerRun]
    ]);
  }

  function buildEnemy(isBoss){
    var run = currentRun();
    var tower = currentTower();
    tower = tower || TOWERS[0];
    var floor = run ? run.floor : tower.min;
    var lvlScale = clamp(floor, 1, 100);
    var name = pick(tower.enemies || ["Tower Beast"]);
    var hp = Math.floor(70 + lvlScale * 9 + (isBoss ? 130 : 0));
    var atk = Math.floor(12 + lvlScale * 2.1 + (isBoss ? 16 : 0));
    var exp = Math.floor(22 + lvlScale * 5 + (isBoss ? 70 : 0));
    var gold = Math.floor(18 + lvlScale * 4 + (isBoss ? 65 : 0));
    return {
      name: (isBoss ? "Boss " : "") + name,
      emoji: isBoss ? "👑" : "👹",
      hp: hp,
      atk: atk,
      exp: exp,
      gold: gold,
      isBoss: !!isBoss,
      towerId: tower.id,
      lore: (isBoss ? "A tower boss" : "A tower enemy") + " shaped by " + tower.theme + ".",
      moves: [
        { name:"Strike", status:null },
        { name:isBoss ? "Tower Break" : "Tower Art", status:null },
        { name:tower.mod, status:null, statusChance:0.15 }
      ]
    };
  }

  function startTowerBattle(isBoss){
    var run = currentRun();
    var tower = currentTower();
    if (!run || !tower) return battle_towers_screen();

    run.inBattle = true;
    run.pendingBattle = true;
    run.battleFloor = run.floor;
    G.tower_run = null;

    try { _lastZone = towerCheckpoint; } catch(e) { window._lastZone = towerCheckpoint; }

    var enemies = [buildEnemy(!!isBoss)];
    if (!isBoss && run.floor % 2 === 0) enemies.push(buildEnemy(false));

    if (isFn(window.startBattle)) {
      window.startBattle(enemies);
    } else if (typeof startBattle === "function") {
      startBattle(enemies);
    } else {
      clear();
      say("Battle system is not available.", "danger");
      setChoices([["Return to Battle Towers", battle_towers_screen]]);
    }
  }

  function towerCheckpoint(){
    addStyle();
    ensureState();
    var run = currentRun();
    var tower = currentTower();
    if (!run || !tower) return battle_towers_screen();

    var resolvedFloor = run.battleFloor || run.floor;
    if (run.pendingBattle) {
      run.pendingBattle = false;
      run.inBattle = false;
      run.battlesWon = (run.battlesWon || 0) + 1;
      run.rewards = (run.rewards || 0) + 1;
      grantMaterial(tower, resolvedFloor >= tower.max ? 3 : 1);
      recordBest(run);
    }

    if (resolvedFloor >= tower.max || run.floor >= tower.max) {
      return completeTower();
    }

    clear();
    battleOff();
    say("— TOWER CHECKPOINT —", "highlight");
    say("Cleared floor " + resolvedFloor + " of " + tower.name + ".", "success");
    card(
      '<div class="byl-tower-title">Run Progress</div>' +
      '<div class="byl-tower-sub">' + esc(tower.name) + ' · Floor ' + esc(run.floor) + ' / ' + esc(tower.max) + '</div>' +
      '<div class="byl-tower-grid">' +
        '<div class="byl-tower-field"><b>Battles Won</b>' + esc(run.battlesWon || 0) + '</div>' +
        '<div class="byl-tower-field"><b>Events Seen</b>' + esc(run.eventsSeen || 0) + '</div>' +
      '</div>'
    );
    setChoices([
      ["Continue to Floor " + (run.floor + 1), advanceFloor],
      ["Rest at Tower Camp", towerCampScreen],
      ["Leave Tower", leaveTowerRun]
    ]);
  }

  function advanceFloor(){
    var run = currentRun();
    if (!run) return battle_towers_screen();
    run.floor += 1;
    run.inBattle = false;
    run.pendingBattle = false;
    enterTowerFloor();
  }

  function towerCampScreen(){
    var run = currentRun();
    var tower = currentTower();
    if (!run || !tower) return battle_towers_screen();
    clear();
    battleOff();
    say("— TOWER CAMP —", "highlight");
    say("You take a short rest without leaving the run.", "narrator");
    if (window.G) {
      G.hp = G.max_hp || G.hp;
      G.mp = G.max_mp || G.mp;
      if (typeof G.max_stamina === "number") G.stamina = G.max_stamina;
      try { if (isFn(window.updateStats)) window.updateStats(); } catch(e) {}
    }
    say("HP, MP, and stamina restored.", "success");
    setChoices([
      ["Continue to Floor " + (run.floor + 1), advanceFloor],
      ["Return to Checkpoint", towerCheckpoint],
      ["Leave Tower", leaveTowerRun]
    ]);
  }

  function leaveTowerRun(){
    ensureState();
    var run = currentRun();
    if (run) recordBest(run);
    if (window.G) {
      G.byl_tower_run = null;
      G.tower_run = null;
    }
    clear();
    battleOff();
    say("You leave the Battle Tower.", "narrator");
    setChoices([
      ["Battle Towers", battle_towers_screen],
      ["Return to Hub World", backToHub]
    ]);
  }

  function backToHub(){
    ensureState();
    battleOff();
    if (isFn(window.hub_world_screen) && window.hub_world_screen !== battle_towers_screen) {
      return window.hub_world_screen();
    }
    if (isFn(window.town_center) && window.town_center !== battle_towers_screen) {
      return window.town_center();
    }
    if (isFn(window.main_menu)) return window.main_menu();
  }

  function installWinBattleHook(){
    if (!isFn(window.winBattle)) return;
    if (window.winBattle.__BYL_TOWER_V59__) return;

    var baseWinBattle = window.winBattle;
    var wrapped = async function(){
      var wasTowerBattle = false;
      try {
        wasTowerBattle = !!(window.G && G.byl_tower_run && G.byl_tower_run.inBattle);
      } catch(e) {}

      var result = await baseWinBattle.apply(this, arguments);

      if (wasTowerBattle) {
        setTimeout(function(){
          try {
            if (window.G && G.byl_tower_run) towerCheckpoint();
          } catch(e) {
            say("Tower checkpoint error: " + (e && e.message ? e.message : e), "danger");
          }
        }, 760);
      }
      return result;
    };
    wrapped.__BYL_TOWER_V59__ = true;
    wrapped.__BYL_TOWER_BASE__ = baseWinBattle;
    window.winBattle = wrapped;
    try { winBattle = wrapped; } catch(e){}
  }

  function wireExistingTowerButtons(){
    var c = choices();
    if (!c) return;
    Array.prototype.slice.call(c.querySelectorAll("button")).forEach(function(btn){
      var t = btn.textContent || "";
      if (/battle\s*towers|tower/i.test(t) && !/floor|camp|leave|continue|begin|checkpoint/i.test(t)) {
        btn.onclick = battle_towers_screen;
      }
    });
  }

  function installGlobals(){
    addStyle();
    ensureState();
    installWinBattleHook();

    window.BYL_BATTLE_TOWER_VERSION = VERSION;
    window.BYL_TOWER_DATA = TOWERS;
    window.BYLBattleTowers = {
      version: VERSION,
      towers: TOWERS,
      screen: battle_towers_screen,
      start: startTowerRun,
      enterFloor: enterTowerFloor,
      checkpoint: towerCheckpoint,
      leave: leaveTowerRun
    };

    window.battle_towers_screen = battle_towers_screen;
    window.startTowerRun = startTowerRun;
    window.enterTowerFloor = enterTowerFloor;
    window.towerCheckpoint = towerCheckpoint;
    window.tower_post_battle_screen = towerCheckpoint;
    window.leaveTowerRun = leaveTowerRun;

    window.map_screen = battle_towers_screen;
    window.raid_map_screen = battle_towers_screen;
    window.show_map = battle_towers_screen;

    try { battle_towers_screen = window.battle_towers_screen; } catch(e){}
    try { startTowerRun = window.startTowerRun; } catch(e){}
    try { enterTowerFloor = window.enterTowerFloor; } catch(e){}
    try { tower_post_battle_screen = window.tower_post_battle_screen; } catch(e){}
    try { leaveTowerRun = window.leaveTowerRun; } catch(e){}
    try { map_screen = window.map_screen; } catch(e){}
    try { raid_map_screen = window.raid_map_screen; } catch(e){}
    try { show_map = window.show_map; } catch(e){}

    setTimeout(wireExistingTowerButtons, 100);
    setTimeout(wireExistingTowerButtons, 500);
  }

  installGlobals();
})();
