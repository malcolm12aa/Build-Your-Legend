// ═══════════════════════════════════════════════════════════════
// Build Your Legend — Battle Tower Controller v0.57
// File: js/screens/battle-tower-screen.js
//
// Fixes:
// - avoids recursive hub / winBattle wrappers that can cause
//   "Maximum call stack size exceeded"
// - replaces the old v50 tower progression with one tower controller
// - keeps the battle tower code in its own screen file
// ═══════════════════════════════════════════════════════════════
(function installBattleTowerScreenV57(){
  "use strict";

  var VERSION = "v0.57-battle-tower-stack-fix";

  function isTowerMarked(fn){
    return !!(fn && fn.__BYL_TOWER_V57__);
  }

  // Preserve the real pre-tower functions once. This prevents wrapper-on-wrapper
  // recursion when GitHub Pages, Safari, or the player refresh loads this file again.
  var currentStartBattle = window.startBattle || (typeof startBattle === "function" ? startBattle : null);
  var currentWinBattle   = window.winBattle   || (typeof winBattle === "function" ? winBattle : null);
  var currentHub         = window.hub_world_screen || window.town_center || (typeof town_center === "function" ? town_center : null);

  if (!window.BYL_TOWER_BASE_START_BATTLE && currentStartBattle && !isTowerMarked(currentStartBattle)) {
    window.BYL_TOWER_BASE_START_BATTLE = currentStartBattle;
  }
  if (!window.BYL_TOWER_BASE_WIN_BATTLE && currentWinBattle && !isTowerMarked(currentWinBattle)) {
    window.BYL_TOWER_BASE_WIN_BATTLE = currentWinBattle;
  }
  if (!window.BYL_TOWER_BASE_HUB && currentHub && !isTowerMarked(currentHub)) {
    window.BYL_TOWER_BASE_HUB = currentHub;
  }

  var baseStartBattle = window.BYL_TOWER_BASE_START_BATTLE || currentStartBattle;
  var baseWinBattle   = window.BYL_TOWER_BASE_WIN_BATTLE || currentWinBattle;
  var baseHub         = window.BYL_TOWER_BASE_HUB || currentHub;

  var TOWERS = [
    { id:"ember", name:"Ember Tower", level:"Lv. 1–20", theme:"Fire / Warriors", modifier:"Scorched Air", maxFloor:10, minLevel:1, material:"Cinder Shard", desc:"A starter tower built around burn pressure, sword trials, and forge materials.", reward:"Fire materials · sword mastery · early tower clears", enemies:["Ashhound","Flame Raider","Cinder Knight","Forge Sentinel"], boss:"Ember Drake" },
    { id:"tidal", name:"Tidal Tower", level:"Lv. 15–35", theme:"Water / Healing", modifier:"Rain", maxFloor:10, minLevel:15, material:"Tide Pearl", desc:"A recovery-heavy tower where water spirits stall, heal, and punish low burst damage.", reward:"Water materials · healer gear · recovery items", enemies:["Mist Spirit","Tide Guardian","Shell Knight","River Wisp"], boss:"Abyssal Tideguard" },
    { id:"storm", name:"Storm Tower", level:"Lv. 30–50", theme:"Wind / Lightning", modifier:"Mana Storm", maxFloor:10, minLevel:30, material:"Storm Core", desc:"A fast tower full of airborne enemies, lightning bursts, and high-speed duels.", reward:"Lightning drops · wand mastery · speed gear", enemies:["Volt Harrier","Sky Rogue","Tempest Mage","Thunder Beast"], boss:"Storm Crown Roc" },
    { id:"shadow", name:"Shadow Tower", level:"Lv. 45–65", theme:"Dark / Rogue", modifier:"Darkness", maxFloor:10, minLevel:45, material:"Shadow Glass", desc:"A curse-and-ambush tower where assassin enemies try to end fights quickly.", reward:"Dark materials · dagger mastery · stealth rewards", enemies:["Night Stalker","Curse Knife","Shade Beast","Eclipse Watcher"], boss:"Umbral Executioner" },
    { id:"celestial", name:"Celestial Tower", level:"Lv. 60–80", theme:"Holy / Barrier", modifier:"Sacred Ground", maxFloor:10, minLevel:60, material:"Halo Fragment", desc:"A late tower of holy guardians, barrier mages, and defensive boss checks.", reward:"Holy materials · shield/staff rewards · boss unlocks", enemies:["Halo Guard","Barrier Saint","Sunblade Warden","Sacred Beast"], boss:"Seraphic Gatekeeper" },
    { id:"verdant", name:"Verdant Tower", level:"Lv. 35–60", theme:"Nature / Control", modifier:"Wild Growth", maxFloor:10, minLevel:35, material:"Verdant Root", desc:"A control tower where roots, poison, and regeneration test sustained builds.", reward:"Herbs · spear mastery · nature gear", enemies:["Rootling","Thorn Beast","Forest Knight","Bloom Witch"], boss:"Ancient Briarheart" },
    { id:"iron", name:"Iron Tower", level:"Lv. 40–70", theme:"Armor / Siege", modifier:"Armored Field", maxFloor:10, minLevel:40, material:"Iron Sigil", desc:"A defense-heavy tower with golems, forge guards, and armor-breaking checks.", reward:"Iron ore · heavy weapon mastery · tank gear", enemies:["Iron Golem","Forge Guard","Steel Brute","Shield Automaton"], boss:"The Living Furnace" },
    { id:"frost", name:"Frost Tower", level:"Lv. 50–75", theme:"Ice / Attrition", modifier:"Deep Freeze", maxFloor:10, minLevel:50, material:"Frost Crystal", desc:"An attrition tower that slows the run down with chill pressure and durable ice beasts.", reward:"Ice crystals · staff mastery · resistance gear", enemies:["Frost Imp","Ice Warden","Glacier Beast","Snowshade Mage"], boss:"Glacier Tyrant" },
    { id:"abyss", name:"Abyss Tower", level:"Lv. 65–90", theme:"Curse / Endurance", modifier:"Cursed Ground", maxFloor:10, minLevel:65, material:"Abyss Bone", desc:"A dangerous tower where cursed enemies trade pain for high-value rewards.", reward:"Cursed bones · catalyst mastery · rare drops", enemies:["Abyss Wisp","Doom Hound","Black Sigil","Void Acolyte"], boss:"The Hollow Omen" },
    { id:"world_crown", name:"World-Crown Spire", level:"Lv. 80–100", theme:"Mixed / Endgame", modifier:"World Flux", maxFloor:15, minLevel:80, material:"World-Crown Shard", desc:"The endgame tower. Every floor mixes enemy roles and the final boss checks your whole build.", reward:"World-Class drops · identity titles · ultimate progress", enemies:["World Judge","Mythic Ravager","Crown Warden","Apex Horror"], boss:"World-Crown Arbiter" }
  ];

  var EVENTS = [
    { id:"merchant", name:"Traveling Merchant", text:"A tower merchant trades broken monster parts for gold and supplies." },
    { id:"treasure", name:"Sealed Chest", text:"A locked chest hums with tower energy." },
    { id:"shrine", name:"Restoration Shrine", text:"A shrine offers recovery before the next climb." },
    { id:"training", name:"Training Master", text:"A veteran corrects your stance and sharpens your technique." },
    { id:"library", name:"Ancient Library", text:"A ruined library teaches tower lore and hidden routes." },
    { id:"ambush", name:"Ambush", text:"Enemies rush in before you can prepare." }
  ];

  function $(id){ return document.getElementById(id); }

  function esc(value){
    return String(value == null ? "" : value).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function clamp(n, min, max){
    n = Number(n);
    if (!Number.isFinite(n)) n = min;
    return Math.max(min, Math.min(max, n));
  }

  function pick(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function wait(ms){
    return new Promise(function(resolve){ setTimeout(resolve, ms); });
  }

  function addStyle(){
    if ($("byl-battle-tower-v57-style")) return;
    var st = document.createElement("style");
    st.id = "byl-battle-tower-v57-style";
    st.textContent = [
      ".byl-tower-card{border:1px solid #224062;background:linear-gradient(180deg,#071220,#050810);padding:12px;margin:9px 0;line-height:1.55}",
      ".byl-tower-title{color:#e8c84a;font-size:14px;font-weight:900;letter-spacing:.6px}",
      ".byl-tower-sub{color:#8fb0cd;font-size:11px;margin-top:3px}",
      ".byl-tower-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}",
      ".byl-tower-mini{border:1px solid #18324c;background:#070d15;padding:8px;font-size:11px;color:#bdd0e4}",
      ".byl-tower-mini b,.byl-tower-card b{color:#e8c84a}",
      ".byl-tower-chip{display:inline-block;padding:2px 7px;margin:2px 5px 0 0;border:1px solid rgba(232,200,74,.28);background:rgba(232,200,74,.08);color:#e8c84a;font-size:10px}",
      ".byl-tower-progress{height:8px;border:1px solid #18324c;background:#05070c;overflow:hidden;margin-top:5px}",
      ".byl-tower-progress span{display:block;height:100%;background:linear-gradient(90deg,#1f4d7a,#e8c84a)}",
      "@media(max-width:640px){.byl-tower-grid{grid-template-columns:1fr}}"
    ].join("\n");
    document.head.appendChild(st);
  }

  function clearScreen(){
    try {
      if (typeof clearOutput === "function") clearOutput();
      else if ($("output")) $("output").innerHTML = "";
    } catch(e) {
      if ($("output")) $("output").innerHTML = "";
    }
    try { if (typeof showBattlePanel === "function") showBattlePanel(false); } catch(e2) {}
    if ($("choices")) $("choices").innerHTML = "";
  }

  function say(text, cls){
    try {
      if (typeof print === "function") print(text, cls || "narrator");
      else if ($("output")) {
        var p = document.createElement("p");
        p.className = cls || "narrator";
        p.textContent = text;
        $("output").appendChild(p);
      }
    } catch(e) {}
  }

  function setChoices(list){
    var ch = $("choices");
    if (!ch) return;
    ch.innerHTML = "";
    list.forEach(function(item){
      var btn = document.createElement("button");
      btn.textContent = item[0];
      btn.disabled = !!item[2];
      btn.onclick = function(){
        try {
          item[1]();
        } catch(err) {
          console.error("[BYL Tower v57] choice error", err);
          clearScreen();
          say("Tower action error: " + (err && err.message ? err.message : err), "danger");
          setChoices([["Back to Battle Towers", battle_towers_screen], ["Hub World", openHubWorld]]);
        }
      };
      ch.appendChild(btn);
    });
  }

  function card(html){
    var out = $("output");
    if (!out) return;
    var div = document.createElement("div");
    div.className = "byl-tower-card";
    div.innerHTML = html;
    out.appendChild(div);
  }

  function playerLevel(){
    try { return Number(G.total_lv || G.level || 0); } catch(e) { return 0; }
  }

  function ensureTowerState(){
    if (!window.G) return;
    if (!G.tower_records || typeof G.tower_records !== "object") G.tower_records = {};
    if (!G.materials || typeof G.materials !== "object") G.materials = {};
    if (!G.quest_progress || typeof G.quest_progress !== "object") G.quest_progress = {};
    if (!G.achievements || typeof G.achievements !== "object") G.achievements = { flags: [] };
    if (!Array.isArray(G.achievements.flags)) G.achievements.flags = [];
  }

  function towerById(id){
    return TOWERS.find(function(t){ return t.id === id; }) || TOWERS[0];
  }

  function currentRun(){
    ensureTowerState();
    if (!window.G || !G.tower_run || !G.tower_run.id) return null;
    var t = towerById(G.tower_run.id);
    G.tower_run.floor = clamp(G.tower_run.floor || 1, 1, t.maxFloor);
    G.tower_run.battlesWon = Number(G.tower_run.battlesWon) || 0;
    G.tower_run.eventsSeen = Number(G.tower_run.eventsSeen) || 0;
    G.tower_run.rewards = Number(G.tower_run.rewards) || 0;
    return G.tower_run;
  }

  function towerProgressHtml(t){
    var rec = G.tower_records && G.tower_records[t.id] ? G.tower_records[t.id] : {};
    var best = Number(rec.bestFloor || 0);
    var clears = Number(rec.clears || 0);
    var pct = clamp(Math.round((best / t.maxFloor) * 100), 0, 100);
    return '<div class="byl-tower-progress"><span style="width:'+pct+'%"></span></div>'+
           '<div class="byl-tower-sub">Best floor: <b>'+best+'</b> / '+t.maxFloor+' · Clears: <b>'+clears+'</b></div>';
  }

  function battle_towers_screen(){
    addStyle();
    ensureTowerState();
    clearScreen();
    say("— BATTLE TOWERS —", "highlight");
    say("Battle Towers now use the v0.57 controller. Each clear routes to one checkpoint, so Continue always advances correctly.", "narrator");
    say("Your level: " + playerLevel() + " · Higher towers are allowed, but they scale harder.", "info");

    TOWERS.forEach(function(t){
      var softLocked = playerLevel() < t.minLevel;
      card(
        '<div class="byl-tower-title">'+esc(t.name)+'</div>'+
        '<div class="byl-tower-sub">'+esc(t.level)+' · '+esc(t.theme)+' · Modifier: '+esc(t.modifier)+'</div>'+
        '<div class="byl-tower-grid">'+
          '<div class="byl-tower-mini"><b>Description</b><br>'+esc(t.desc)+'</div>'+
          '<div class="byl-tower-mini"><b>Rewards</b><br>'+esc(t.reward)+'</div>'+
        '</div>'+
        '<div style="margin-top:7px">'+
          '<span class="byl-tower-chip">Max Floor '+t.maxFloor+'</span>'+
          '<span class="byl-tower-chip">Recommended '+esc(t.level)+'</span>'+
          (softLocked ? '<span class="byl-tower-chip">High Risk</span>' : '<span class="byl-tower-chip">Ready</span>')+
        '</div>'+
        towerProgressHtml(t)
      );
    });

    var choices = TOWERS.map(function(t){
      return ["Enter " + t.name + (playerLevel() < t.minLevel ? " ⚠" : ""), function(){ startTowerRun(t.id); }];
    });
    choices.push(["Hub World", openHubWorld]);
    setChoices(choices);
  }

  function startTowerRun(id){
    addStyle();
    ensureTowerState();
    var t = towerById(id);
    G.tower_run = {
      id: t.id,
      floor: 1,
      battlesWon: 0,
      eventsSeen: 0,
      rewards: 0,
      startedAt: Date.now()
    };

    clearScreen();
    say("You enter " + t.name + ".", "highlight");
    say("Floor progression is now controlled by the tower checkpoint screen.", "narrator");
    card(
      '<div class="byl-tower-title">'+esc(t.name)+' Run Started</div>'+
      '<div class="byl-tower-sub">Goal: clear Floor '+t.maxFloor+' · Modifier: '+esc(t.modifier)+'</div>'+
      '<div class="byl-tower-mini" style="margin-top:8px"><b>Rule</b><br>Win a floor, then press Continue to move forward exactly one floor.</div>'
    );
    setChoices([["Begin Floor 1", enterTowerFloor], ["Leave Tower", leaveTowerRun]]);
  }

  function enterTowerFloor(){
    addStyle();
    ensureTowerState();
    var run = currentRun();
    if (!run) return battle_towers_screen();

    var t = towerById(run.id);
    if (run.floor > t.maxFloor) return finishTowerRun();

    clearScreen();
    var isBoss = run.floor % 5 === 0 || run.floor === t.maxFloor;
    var progressPct = clamp(Math.round(((run.floor - 1) / t.maxFloor) * 100), 0, 100);

    say("— " + t.name.toUpperCase() + " · FLOOR " + run.floor + " / " + t.maxFloor + " —", "highlight");
    card(
      '<div class="byl-tower-title">'+esc(t.name)+' Run</div>'+
      '<div class="byl-tower-sub">Battles won: <b>'+run.battlesWon+'</b> · Events: <b>'+run.eventsSeen+'</b> · Rewards: <b>'+run.rewards+'</b></div>'+
      '<div class="byl-tower-progress"><span style="width:'+progressPct+'%"></span></div>'+
      '<div class="byl-tower-mini" style="margin-top:8px"><b>Floor Modifier</b><br>'+esc(t.modifier)+(isBoss ? " · Boss floor" : "")+'</div>'
    );

    if (isBoss) {
      say("A boss blocks the stairway.", "danger");
      setChoices([
        ["Challenge Floor " + run.floor + " Boss", function(){ startTowerBattle(true); }],
        ["Camp Before Boss", camp_screen],
        ["Leave Tower", leaveTowerRun]
      ]);
      return;
    }

    if (run.floor % 3 === 0) {
      setChoices([
        ["Scout Floor Event", function(){ handleTowerEvent(pick(EVENTS)); }],
        ["Push Into Battle", function(){ startTowerBattle(false); }],
        ["Leave Tower", leaveTowerRun]
      ]);
      return;
    }

    setChoices([
      ["Start Floor Battle", function(){ startTowerBattle(false); }],
      ["Open Camp", camp_screen],
      ["Leave Tower", leaveTowerRun]
    ]);
  }

  function handleTowerEvent(evt){
    ensureTowerState();
    var run = currentRun();
    if (!run) return battle_towers_screen();
    var t = towerById(run.id);

    clearScreen();
    say("— TOWER EVENT · FLOOR " + run.floor + " —", "highlight");
    say(evt.name + ": " + evt.text, "narrator");
    run.eventsSeen++;

    if (evt.id === "ambush") {
      say("The event becomes a battle. Clear it to claim the floor.", "danger");
      setChoices([["Fight Ambush", function(){ startTowerBattle(false, "ambush"); }], ["Leave Tower", leaveTowerRun]]);
      return;
    }

    var rewardText = "";
    if (evt.id === "merchant") {
      var gold = 35 + run.floor * 5;
      G.gold = (Number(G.gold) || 0) + gold;
      rewardText = "You trade tower scraps and gain " + gold + " gold.";
    } else if (evt.id === "treasure") {
      var mats = 1 + Math.floor(run.floor / 4);
      grantTowerMaterial(t, mats);
      var chestGold = 20 + run.floor * 4;
      G.gold = (Number(G.gold) || 0) + chestGold;
      rewardText = "The chest gives " + chestGold + " gold and " + mats + " " + t.material + ".";
    } else if (evt.id === "shrine") {
      G.hp = G.max_hp || G.hp;
      G.mp = G.max_mp || G.mp;
      if (typeof G.max_stamina === "number") G.stamina = G.max_stamina;
      rewardText = "HP, MP, and Stamina are restored.";
    } else if (evt.id === "training") {
      G.stat_pts = (Number(G.stat_pts) || 0) + 1;
      rewardText = "You gain +1 free Stat Point from training.";
    } else if (evt.id === "library") {
      G.quest_progress.tower_lore = (Number(G.quest_progress.tower_lore) || 0) + 1;
      rewardText = "Tower lore increased. Hidden route knowledge improved.";
    }

    run.rewards++;
    try { if (typeof updateStats === "function") updateStats(); } catch(e) {}
    say(rewardText || "You gain minor tower progress.", "success");
    towerCheckpoint("event");
  }

  function grantTowerMaterial(tower, amount){
    ensureTowerState();
    amount = Number(amount) || 1;
    var key = tower.material || "Tower Material";
    G.materials[key] = (Number(G.materials[key]) || 0) + amount;
  }

  function buildTowerEnemy(floor, boss, eventTag){
    var run = currentRun();
    var t = towerById(run ? run.id : "ember");
    var level = playerLevel();
    var scale = 1 + Math.max(0, floor - 1) * 0.11 + Math.max(0, level - 1) * 0.015;
    if (boss) scale += 0.45;
    if (eventTag === "ambush") scale += 0.10;

    var nm = boss ? t.boss : pick(t.enemies);
    return {
      name: (boss ? "Boss " : "") + nm,
      emoji: boss ? "👑" : "⚔️",
      hp: Math.floor((70 + floor * 18 + (boss ? 120 : 0)) * scale),
      atk: Math.floor((12 + floor * 3 + (boss ? 12 : 0)) * (1 + Math.max(0, floor - 1) * 0.025)),
      exp: Math.floor(28 + floor * 10 + (boss ? 70 : 0)),
      gold: Math.floor(18 + floor * 8 + (boss ? 55 : 0)),
      isBoss: !!boss,
      lore: boss ? "A tower boss strengthened by " + t.modifier + "." : "A tower enemy shaped by " + t.theme + ".",
      moves: [
        { name:"Strike", status:null },
        { name: boss ? "Tower Breaker" : "Pressure Skill", status: null },
        { name:"Elemental Surge", status: t.id === "ember" ? "burn" : (t.id === "frost" ? "freeze" : null), statusChance:0.18 }
      ]
    };
  }

  function startTowerBattle(isBoss, eventTag){
    ensureTowerState();
    var run = currentRun();
    if (!run) return battle_towers_screen();

    var enemies = [buildTowerEnemy(run.floor, !!isBoss, eventTag)];
    if (!isBoss && run.floor % 2 === 0) {
      enemies.push(buildTowerEnemy(run.floor, false, eventTag));
    }

    try { _lastZone = towerCheckpoint; } catch(e) {}

    if (!baseStartBattle || isTowerMarked(baseStartBattle)) {
      clearScreen();
      say("Battle system is not loaded correctly, so the tower cannot start a fight.", "danger");
      setChoices([["Back to Battle Towers", battle_towers_screen], ["Hub World", openHubWorld]]);
      return;
    }

    baseStartBattle(enemies);

    try {
      if (typeof B !== "undefined" && B) {
        B.bylTowerV57 = {
          id: run.id,
          floor: run.floor,
          isBoss: !!isBoss,
          eventTag: eventTag || ""
        };
      }
    } catch(e) {}
  }

  function isTowerBattleActive(){
    try {
      return !!(window.G && G.tower_run && typeof B !== "undefined" && B && B.enemies && B.enemies.length && B.bylTowerV57);
    } catch(e) {
      return false;
    }
  }

  async function towerWinBattle(){
    try {
      if (!isTowerBattleActive()) {
        if (baseWinBattle && baseWinBattle !== towerWinBattle && !isTowerMarked(baseWinBattle)) {
          return baseWinBattle.apply(this, arguments);
        }
        return;
      }

      var enemies = [];
      try { enemies = B.enemies ? B.enemies.slice() : []; } catch(e) {}

      var run = currentRun();
      var t = towerById(run ? run.id : "ember");
      var floor = run ? run.floor : 1;
      var boss = enemies.some(function(e){ return !!e.isBoss; });

      clearScreen();
      say("— FLOOR " + floor + " CLEARED —", "highlight");

      grantBattleRewards(enemies, t, floor, boss);

      if (run) {
        run.battlesWon++;
        run.rewards++;
        if (boss) run.lastBossFloor = floor;
      }

      try { if (typeof endBattle === "function") endBattle(); }
      catch(e2) {
        try { B = null; } catch(e3) {}
        try { if (typeof showBattlePanel === "function") showBattlePanel(false); } catch(e4) {}
      }

      await wait(250);

      if (run && floor >= t.maxFloor) finishTowerRun();
      else towerCheckpoint(boss ? "boss" : "battle");
    } catch(err) {
      console.error("[BYL Tower v57] winBattle error", err);
      try { if (typeof endBattle === "function") endBattle(); } catch(e) {}
      clearScreen();
      say("Tower victory error: " + (err && err.message ? err.message : err), "danger");
      setChoices([["Back to Battle Towers", battle_towers_screen], ["Hub World", openHubWorld]]);
    }
  }
  towerWinBattle.__BYL_TOWER_V57__ = true;

  function grantBattleRewards(enemies, tower, floor, boss){
    enemies = Array.isArray(enemies) ? enemies : [];
    var totalExp = enemies.reduce(function(sum, e){ return sum + (Number(e.exp) || 0); }, 0);
    var totalGold = enemies.reduce(function(sum, e){ return sum + (Number(e.gold) || 0); }, 0);
    var bonusGold = Math.floor((boss ? 45 : 12) + floor * (boss ? 6 : 2));
    var matAmount = boss ? 3 : 1;

    G.exp = (Number(G.exp) || 0) + totalExp;
    G.gold = (Number(G.gold) || 0) + totalGold + bonusGold;
    grantTowerMaterial(tower, matAmount);

    say((enemies.length > 1 ? "All enemies defeated!" : ((enemies[0] && enemies[0].name) || "Enemy") + " was defeated!"), "success");
    say("Gained " + totalExp + " EXP, " + (totalGold + bonusGold) + " gold, and " + matAmount + " " + tower.material + ".", "b-system");

    try { if (typeof recordBattleAchievements === "function") recordBattleAchievements(enemies); } catch(e) {}

    while ((Number(G.exp) || 0) >= (Number(G.next_exp) || 100)) {
      if ((Number(G.total_lv) || 0) + (Number(G.level_pts) || 0) >= 100) {
        G.exp = Math.min(G.exp, Math.max(0, (Number(G.next_exp) || 100) - 1));
        say("★ Level cap reached: Total Level 100 is the maximum.", "b-system");
        break;
      }
      G.exp -= (Number(G.next_exp) || 100);
      G.level_pts = (Number(G.level_pts) || 0) + 1;
      G.stat_pts = (Number(G.stat_pts) || 0) + 10;
      G.next_exp = 30 + 10 * (Number(G.total_lv) || 0);
      say("★ Level Up! +1 Level Point +10 Stat Points — visit Character Status to spend them.", "b-system");
    }

    try { if (typeof updateStats === "function") updateStats(); } catch(e2) {}
  }

  function towerCheckpoint(reason){
    addStyle();
    ensureTowerState();
    var run = currentRun();
    if (!run) return battle_towers_screen();
    var t = towerById(run.id);

    if (run.floor >= t.maxFloor) return finishTowerRun();

    var next = run.floor + 1;
    clearScreen();
    say("— TOWER CHECKPOINT —", "highlight");
    say(t.name + " Floor " + run.floor + " is clear. The stairway to Floor " + next + " is open.", "narrator");

    card(
      '<div class="byl-tower-title">'+esc(t.name)+' Checkpoint</div>'+
      '<div class="byl-tower-sub">Cleared by: <b>'+esc(reason || "battle")+'</b> · Current floor: <b>'+run.floor+'</b> · Next floor: <b>'+next+'</b></div>'+
      '<div class="byl-tower-grid">'+
        '<div class="byl-tower-mini"><b>Run Progress</b><br>Battles: '+run.battlesWon+' · Events: '+run.eventsSeen+' · Rewards: '+run.rewards+'</div>'+
        '<div class="byl-tower-mini"><b>Next Step</b><br>Continue always moves forward exactly one floor.</div>'+
      '</div>'
    );

    setChoices([
      ["Continue to Floor " + next, advanceTowerFloor],
      ["Open Camp", camp_screen],
      ["Leave Tower", leaveTowerRun]
    ]);
  }

  function advanceTowerFloor(){
    var run = currentRun();
    if (!run) return battle_towers_screen();
    var t = towerById(run.id);
    run.floor = Math.min(t.maxFloor, run.floor + 1);
    enterTowerFloor();
  }

  function camp_screen(){
    addStyle();
    ensureTowerState();
    var run = currentRun();

    clearScreen();
    say("— TOWER CAMP —", "highlight");

    var hpGain = Math.max(1, Math.floor((G.max_hp || G.hp || 100) * 0.25));
    var mpGain = Math.max(1, Math.floor((G.max_mp || G.mp || 50) * 0.25));

    say("A temporary camp lets you recover before continuing.", "narrator");
    card(
      '<div class="byl-tower-title">Camp Options</div>'+
      '<div class="byl-tower-grid">'+
        '<div class="byl-tower-mini"><b>Rest</b><br>Recover '+hpGain+' HP and '+mpGain+' MP.</div>'+
        '<div class="byl-tower-mini"><b>Run</b><br>'+(run ? ("Current floor: "+run.floor) : "No active run")+'</div>'+
      '</div>'
    );

    var choices = [
      ["Rest", function(){
        G.hp = Math.min(G.max_hp || G.hp, (Number(G.hp) || 0) + hpGain);
        G.mp = Math.min(G.max_mp || G.mp, (Number(G.mp) || 0) + mpGain);
        if (typeof G.max_stamina === "number") G.stamina = Math.min(G.max_stamina, (Number(G.stamina) || 0) + Math.floor(G.max_stamina * 0.25));
        try { if (typeof updateStats === "function") updateStats(); } catch(e) {}
        camp_screen();
      }]
    ];

    if (run) choices.push(["Return to Checkpoint", function(){ towerCheckpoint("camp"); }]);
    choices.push(["Battle Towers", battle_towers_screen], ["Hub World", openHubWorld]);
    setChoices(choices);
  }

  function finishTowerRun(){
    addStyle();
    ensureTowerState();
    var run = currentRun();
    if (!run) return battle_towers_screen();
    var t = towerById(run.id);

    var rec = G.tower_records[t.id] || { bestFloor:0, clears:0 };
    rec.bestFloor = Math.max(Number(rec.bestFloor) || 0, t.maxFloor);
    rec.clears = (Number(rec.clears) || 0) + 1;
    rec.lastClear = new Date().toISOString();
    G.tower_records[t.id] = rec;

    grantTowerMaterial(t, 5);
    G.gold = (Number(G.gold) || 0) + 150 + t.maxFloor * 10;
    if (G.achievements && Array.isArray(G.achievements.flags)) {
      var flag = "tower_clear_" + t.id;
      if (G.achievements.flags.indexOf(flag) < 0) G.achievements.flags.push(flag);
    }

    G.tower_run = null;
    try { if (typeof updateStats === "function") updateStats(); } catch(e) {}

    clearScreen();
    say("— TOWER CLEARED —", "highlight");
    say("You cleared " + t.name + " and claimed its core reward.", "success");
    card(
      '<div class="byl-tower-title">'+esc(t.name)+' Complete</div>'+
      '<div class="byl-tower-sub">Reward: 150+ gold, bonus '+esc(t.material)+', and clear record saved.</div>'
    );
    setChoices([["Battle Towers", battle_towers_screen], ["Hub World", openHubWorld], ["Character Status", function(){ if (typeof character_screen === "function") character_screen(); else openHubWorld(); }]]);
  }

  function leaveTowerRun(){
    ensureTowerState();
    if (G) G.tower_run = null;
    openHubWorld();
  }

  function wireExistingTowerButtons(){
    try {
      var buttons = Array.prototype.slice.call(document.querySelectorAll("#choices button"));
      buttons.forEach(function(btn){
        var text = btn.textContent || "";
        if (/battle\s*towers|world\s*map|raid\s*map|show\s*map/i.test(text)) {
          btn.onclick = function(){ battle_towers_screen(); };
        }
      });
    } catch(e) {}
  }

  function renderFallbackHub(){
    clearScreen();
    say("— HUB WORLD —", "highlight");
    say("Choose your next destination.", "narrator");
    setChoices([
      ["Battle Towers", battle_towers_screen],
      ["Character Status", function(){ if (typeof character_screen === "function") character_screen(); }],
      ["Shops", function(){ if (typeof shops === "function") shops(); }],
      ["Save", function(){ if (typeof saveGame === "function") saveGame(); }]
    ]);
  }

  function openHubWorld(){
    try {
      if (baseHub && baseHub !== openHubWorld && !isTowerMarked(baseHub)) {
        var result = baseHub.apply(this, arguments);
        setTimeout(wireExistingTowerButtons, 0);
        return result;
      }
    } catch(e) {
      console.warn("[BYL Tower v57] base hub failed; using fallback hub", e);
    }
    renderFallbackHub();
  }
  openHubWorld.__BYL_TOWER_V57__ = true;

  function installGlobals(){
    addStyle();
    ensureTowerState();

    window.BYL_BATTLE_TOWER_VERSION = VERSION;
    window.BYL_TOWER_DATA = TOWERS;

    window.battle_towers_screen = battle_towers_screen;
    window.startTowerRun = startTowerRun;
    window.enterTowerFloor = enterTowerFloor;
    window.towerCheckpoint = towerCheckpoint;
    window.tower_post_battle_screen = towerCheckpoint;
    window.leaveTowerRun = leaveTowerRun;
    window.camp_screen = camp_screen;

    window.winBattle = towerWinBattle;
    window.hub_world_screen = openHubWorld;
    window.town_center = openHubWorld;

    window.map_screen = battle_towers_screen;
    window.raid_map_screen = battle_towers_screen;
    window.show_map = battle_towers_screen;

    try { battle_towers_screen = window.battle_towers_screen; } catch(e) {}
    try { startTowerRun = window.startTowerRun; } catch(e) {}
    try { enterTowerFloor = window.enterTowerFloor; } catch(e) {}
    try { tower_post_battle_screen = window.tower_post_battle_screen; } catch(e) {}
    try { leaveTowerRun = window.leaveTowerRun; } catch(e) {}
    try { camp_screen = window.camp_screen; } catch(e) {}
    try { winBattle = window.winBattle; } catch(e) {}
    try { hub_world_screen = window.hub_world_screen; } catch(e) {}
    try { town_center = window.town_center; } catch(e) {}
    try { map_screen = window.map_screen; } catch(e) {}
    try { raid_map_screen = window.raid_map_screen; } catch(e) {}
    try { show_map = window.show_map; } catch(e) {}

    setTimeout(wireExistingTowerButtons, 100);
  }

  installGlobals();
})();
