// ═══════════════════════════════════════════════════════════════
// Build Your Legend — Battle Tower Rewrite
// File: js/screens/battle-tower-screen.js
// Purpose: replaces the old v50 tower flow with one reliable tower
//          controller so every battle/event resolves through the same
//          "next floor" path.
// ═══════════════════════════════════════════════════════════════
(function installBattleTowerScreenV56(){
  "use strict";

  var VERSION = "v0.56-battle-tower-screen-rewrite";

  var baseStartBattle = typeof startBattle === "function" ? startBattle : null;
  var baseWinBattle = typeof winBattle === "function" ? winBattle : null;
  var baseHubWorld = window.hub_world_screen || (typeof town_center === "function" ? town_center : null);

  var TOWERS = [
    {
      id:"ember", name:"Ember Tower", level:"Lv. 1–20", theme:"Fire / Warriors", modifier:"Scorched Air",
      maxFloor:10, minLevel:1, material:"Cinder Shard",
      desc:"A starter tower built around burn pressure, sword trials, and forge materials.",
      reward:"Fire materials · sword mastery · early tower clears",
      enemies:["Ashhound","Flame Raider","Cinder Knight","Forge Sentinel"],
      boss:"Ember Drake"
    },
    {
      id:"tidal", name:"Tidal Tower", level:"Lv. 15–35", theme:"Water / Healing", modifier:"Rain",
      maxFloor:10, minLevel:15, material:"Tide Pearl",
      desc:"A recovery-heavy tower where water spirits stall, heal, and punish low burst damage.",
      reward:"Water materials · healer gear · recovery items",
      enemies:["Mist Spirit","Tide Guardian","Shell Knight","River Wisp"],
      boss:"Abyssal Tideguard"
    },
    {
      id:"storm", name:"Storm Tower", level:"Lv. 30–50", theme:"Wind / Lightning", modifier:"Mana Storm",
      maxFloor:10, minLevel:30, material:"Storm Core",
      desc:"A fast tower full of airborne enemies, lightning bursts, and high-speed duels.",
      reward:"Lightning drops · wand mastery · speed gear",
      enemies:["Volt Harrier","Sky Rogue","Tempest Mage","Thunder Beast"],
      boss:"Storm Crown Roc"
    },
    {
      id:"shadow", name:"Shadow Tower", level:"Lv. 45–65", theme:"Dark / Rogue", modifier:"Darkness",
      maxFloor:10, minLevel:45, material:"Shadow Glass",
      desc:"A curse-and-ambush tower where assassin enemies try to end fights quickly.",
      reward:"Dark materials · dagger mastery · stealth rewards",
      enemies:["Night Stalker","Curse Knife","Shade Beast","Eclipse Watcher"],
      boss:"Umbral Executioner"
    },
    {
      id:"celestial", name:"Celestial Tower", level:"Lv. 60–80", theme:"Holy / Barrier", modifier:"Sacred Ground",
      maxFloor:10, minLevel:60, material:"Halo Fragment",
      desc:"A late tower of holy guardians, barrier mages, and defensive boss checks.",
      reward:"Holy materials · shield/staff rewards · boss unlocks",
      enemies:["Halo Guard","Barrier Saint","Sunblade Warden","Sacred Beast"],
      boss:"Seraphic Gatekeeper"
    },
    {
      id:"verdant", name:"Verdant Tower", level:"Lv. 35–60", theme:"Nature / Control", modifier:"Wild Growth",
      maxFloor:10, minLevel:35, material:"Verdant Root",
      desc:"A control tower where roots, poison, and regeneration test sustained builds.",
      reward:"Herbs · spear mastery · nature gear",
      enemies:["Rootling","Thorn Beast","Forest Knight","Bloom Witch"],
      boss:"Ancient Briarheart"
    },
    {
      id:"iron", name:"Iron Tower", level:"Lv. 40–70", theme:"Armor / Siege", modifier:"Armored Field",
      maxFloor:10, minLevel:40, material:"Iron Sigil",
      desc:"A defense-heavy tower with golems, forge guards, and armor-breaking checks.",
      reward:"Iron ore · heavy weapon mastery · tank gear",
      enemies:["Iron Golem","Forge Guard","Steel Brute","Shield Automaton"],
      boss:"The Living Furnace"
    },
    {
      id:"frost", name:"Frost Tower", level:"Lv. 50–75", theme:"Ice / Attrition", modifier:"Deep Freeze",
      maxFloor:10, minLevel:50, material:"Frost Crystal",
      desc:"An attrition tower that slows the run down with chill pressure and durable ice beasts.",
      reward:"Ice crystals · staff mastery · resistance gear",
      enemies:["Frost Imp","Ice Warden","Glacier Beast","Snowshade Mage"],
      boss:"Glacier Tyrant"
    },
    {
      id:"abyss", name:"Abyss Tower", level:"Lv. 65–90", theme:"Curse / Endurance", modifier:"Cursed Ground",
      maxFloor:10, minLevel:65, material:"Abyss Bone",
      desc:"A dangerous tower where cursed enemies trade pain for high-value rewards.",
      reward:"Cursed bones · catalyst mastery · rare drops",
      enemies:["Abyss Wisp","Doom Hound","Black Sigil","Void Acolyte"],
      boss:"The Hollow Omen"
    },
    {
      id:"world_crown", name:"World-Crown Spire", level:"Lv. 80–100", theme:"Mixed / Endgame", modifier:"World Flux",
      maxFloor:15, minLevel:80, material:"World-Crown Shard",
      desc:"The endgame tower. Every floor mixes enemy roles and the final boss checks your whole build.",
      reward:"World-Class drops · identity titles · ultimate progress",
      enemies:["World Judge","Mythic Ravager","Crown Warden","Apex Horror"],
      boss:"World-Crown Arbiter"
    }
  ];

  var EVENTS = [
    {id:"merchant", name:"Traveling Merchant", text:"A tower merchant sells emergency supplies and buys monster parts."},
    {id:"treasure", name:"Sealed Chest", text:"A locked chest hums with tower energy."},
    {id:"shrine", name:"Restoration Shrine", text:"A shrine offers recovery before the next floor."},
    {id:"training", name:"Training Master", text:"A veteran challenges your stance and sharpens your technique."},
    {id:"library", name:"Ancient Library", text:"A ruined library teaches spell theory and hidden routes."},
    {id:"secret", name:"Secret Route", text:"A cracked wall reveals a shortcut and a reward cache."},
    {id:"ambush", name:"Ambush", text:"Enemies attack before you can prepare."}
  ];

  function $(id){ return document.getElementById(id); }

  function esc(value){
    return String(value == null ? "" : value).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function clamp(n, min, max){ return Math.max(min, Math.min(max, n)); }

  function pick(arr){ return arr[Math.floor(Math.random() * arr.length)]; }

  function clearScreen(){
    try {
      if (typeof clearOutput === "function") clearOutput();
      else if ($("output")) $("output").innerHTML = "";
    } catch(e) {
      if ($("output")) $("output").innerHTML = "";
    }
    try { if (typeof showBattlePanel === "function") showBattlePanel(false); } catch(e) {}
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
        try { item[1](); } catch(err) {
          console.error("[BYL Tower] choice error", err);
          clearScreen();
          say("Something went wrong opening that tower action.", "danger");
          setChoices([["Back to Battle Towers", battle_towers_screen], ["Hub World", hub_world_screen]]);
        }
      };
      ch.appendChild(btn);
    });
  }

  function card(html){
    var out = $("output");
    if (!out) return;
    var div = document.createElement("div");
    div.className = "byl-tower-card v50-card";
    div.innerHTML = html;
    out.appendChild(div);
  }

  function addStyle(){
    if ($("byl-battle-tower-style")) return;
    var st = document.createElement("style");
    st.id = "byl-battle-tower-style";
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
    if (!G.tower_run || !G.tower_run.id) return null;
    var t = towerById(G.tower_run.id);
    G.tower_run.floor = clamp(Number(G.tower_run.floor) || 1, 1, t.maxFloor);
    G.tower_run.battlesWon = Number(G.tower_run.battlesWon) || 0;
    G.tower_run.eventsSeen = Number(G.tower_run.eventsSeen) || 0;
    G.tower_run.rewards = Number(G.tower_run.rewards) || 0;
    if (!G.tower_run.clearedFloors || typeof G.tower_run.clearedFloors !== "object") G.tower_run.clearedFloors = {};
    return G.tower_run;
  }

  function playerLevel(){
    return Number(G.total_lv || G.level || 0);
  }

  function towerProgressHtml(t){
    var rec = G.tower_records && G.tower_records[t.id] ? G.tower_records[t.id] : {};
    var best = Number(rec.bestFloor || 0);
    var clears = Number(rec.clears || 0);
    var pct = clamp(Math.round((best / t.maxFloor) * 100), 0, 100);
    return '<div class="byl-tower-mini"><b>Progress</b><br>Best floor: '+best+' / '+t.maxFloor+' · Clears: '+clears+
      '<div class="byl-tower-progress"><span style="width:'+pct+'%"></span></div></div>';
  }

  function battle_towers_screen(){
    addStyle();
    ensureTowerState();
    clearScreen();
    say("— BATTLE TOWERS —", "highlight");
    say("Each tower now uses the rewritten floor controller. Battles, events, camps, and bosses all route through the same next-floor system.", "narrator");
    say("Your level: " + playerLevel() + " · You can enter any tower, but higher towers hit harder.", "info");

    TOWERS.forEach(function(t){
      var lockedSoft = playerLevel() < t.minLevel;
      card(
        '<div class="byl-tower-title">'+esc(t.name)+'</div>'+
        '<div class="byl-tower-sub">'+esc(t.level)+' · '+esc(t.theme)+' · Modifier: <b>'+esc(t.modifier)+'</b></div>'+
        '<div class="byl-tower-grid">'+
          '<div class="byl-tower-mini"><b>Description</b><br>'+esc(t.desc)+'</div>'+
          '<div class="byl-tower-mini"><b>Rewards</b><br>'+esc(t.reward)+'</div>'+
          '<div class="byl-tower-mini"><b>Floors</b><br>'+t.maxFloor+' floors · Boss every 5 floors'+(lockedSoft ? '<br><b>Warning:</b> recommended '+esc(t.level) : '')+'</div>'+
          towerProgressHtml(t)+
        '</div>'+
        '<div style="margin-top:7px">'+
          t.enemies.map(function(n){ return '<span class="byl-tower-chip">'+esc(n)+'</span>'; }).join("")+
          '<span class="byl-tower-chip">Boss: '+esc(t.boss)+'</span>'+
        '</div>'
      );
    });

    setChoices(TOWERS.map(function(t){
      var label = "Enter " + t.name + (playerLevel() < t.minLevel ? "  ⚠ high danger" : "");
      return [label, function(){ startTowerRun(t.id); }];
    }).concat([["← Hub World", hub_world_screen]]));
  }

  function startTowerRun(id){
    addStyle();
    ensureTowerState();
    var t = towerById(id);
    G.tower_run = {
      id:t.id,
      floor:1,
      maxFloor:t.maxFloor,
      battlesWon:0,
      eventsSeen:0,
      rewards:0,
      startedAt:Date.now(),
      clearedFloors:{}
    };
    clearScreen();
    say("You enter " + t.name + ".", "highlight");
    say("Goal: clear Floor " + t.maxFloor + ". Boss floors appear every 5 floors. You can leave safely between floors.", "narrator");
    card(
      '<div class="byl-tower-title">'+esc(t.name)+'</div>'+
      '<div class="byl-tower-sub">'+esc(t.theme)+' · Modifier: <b>'+esc(t.modifier)+'</b></div>'+
      '<div class="byl-tower-mini" style="margin-top:8px"><b>Run Rule</b><br>After every battle or event, the Continue button will always move to the next floor. This replaces the old mixed "Fight again" flow.</div>'
    );
    setChoices([
      ["Begin Floor 1", enterTowerFloor],
      ["Leave Tower", leaveTowerRun]
    ]);
  }

  function enterTowerFloor(){
    addStyle();
    ensureTowerState();
    var run = currentRun();
    if (!run) return battle_towers_screen();

    var t = towerById(run.id);
    clearScreen();

    if (run.floor > t.maxFloor) return finishTowerRun();

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
      say("A boss presence blocks the stairway.", "danger");
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
      rewardText = "You trade scraps and gain " + gold + " gold.";
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
      rewardText = "Tower lore increased. Hidden path progress improved.";
    } else if (evt.id === "secret") {
      grantTowerMaterial(t, 2);
      G.quest_progress.secret_path = (Number(G.quest_progress.secret_path) || 0) + 1;
      rewardText = "You find a shortcut cache: +2 " + t.material + ".";
    } else {
      var fallback = 25 + run.floor * 3;
      G.gold = (Number(G.gold) || 0) + fallback;
      rewardText = "You gain " + fallback + " gold from the event.";
    }

    run.rewards++;
    updateHeaderSafe();
    say(rewardText, "success");
    markFloorCleared("event");
  }

  function buildTowerEnemy(floor, boss, eventTag){
    var run = currentRun();
    var t = towerById(run ? run.id : "ember");
    var name = boss ? t.boss : pick(t.enemies);
    var danger = Math.max(1, t.minLevel);
    var scale = 1 + Math.max(0, danger - 1) / 140;
    var bossMult = boss ? 1.85 : 1;
    var eventMult = eventTag === "ambush" ? 1.12 : 1;

    var hp = Math.floor((55 + floor * 16 + danger * 2.2) * bossMult * eventMult * scale);
    var atk = Math.floor((10 + floor * 3 + danger * 0.55) * (boss ? 1.35 : 1) * eventMult);
    var exp = Math.floor(24 + floor * 9 + danger * 0.8 + (boss ? 65 : 0));
    var gold = Math.floor(18 + floor * 7 + danger * 0.45 + (boss ? 50 : 0));

    return {
      name: (boss ? "Boss " : "") + name,
      emoji: boss ? "👑" : "👹",
      hp: hp,
      atk: atk,
      exp: exp,
      gold: gold,
      isBoss: !!boss,
      towerId: t.id,
      towerFloor: floor,
      lore: boss
        ? "A tower boss empowered by " + t.modifier + "."
        : "A " + t.theme + " tower enemy shaped by " + t.modifier + ".",
      moves:[
        {name:"Strike", status:null},
        {name: boss ? "Boss Pressure" : "Tower Pressure", status:null},
        {name: t.modifier + " Burst", status: towerStatus(t), statusChance: boss ? 0.30 : 0.20}
      ]
    };
  }

  function towerStatus(t){
    if (/Fire|Ember|Scorched/i.test(t.theme + " " + t.modifier)) return "burn";
    if (/Frost|Ice|Freeze/i.test(t.theme + " " + t.modifier)) return "slow";
    if (/Shadow|Dark|Abyss|Curse/i.test(t.theme + " " + t.modifier)) return "curse";
    if (/Storm|Lightning|Mana/i.test(t.theme + " " + t.modifier)) return "shock";
    return null;
  }

  function startTowerBattle(isBoss, eventTag){
    ensureTowerState();
    var run = currentRun();
    if (!run) return battle_towers_screen();

    var enemies = [buildTowerEnemy(run.floor, !!isBoss, eventTag)];
    if (!isBoss && run.floor % 2 === 0) enemies.push(buildTowerEnemy(run.floor, false, eventTag));

    try { _lastZone = tower_post_battle_screen; } catch(e) {}

    if (!baseStartBattle && typeof startBattle === "function") baseStartBattle = startBattle;
    if (!baseStartBattle) {
      clearScreen();
      say("Battle system is not loaded, so the tower cannot start a fight.", "danger");
      setChoices([["Back to Battle Towers", battle_towers_screen], ["Hub World", hub_world_screen]]);
      return;
    }

    baseStartBattle(enemies);

    try {
      if (typeof B !== "undefined" && B) {
        B.bylTower = {
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
      return !!(window.G && G.tower_run && typeof B !== "undefined" && B && B.enemies && B.enemies.length);
    } catch(e) {
      return false;
    }
  }

  async function winBattle(){
    if (!isTowerBattleActive()) {
      if (baseWinBattle) return baseWinBattle.apply(this, arguments);
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
    catch(e) {
      try { B = null; } catch(err) {}
      try { if (typeof showBattlePanel === "function") showBattlePanel(false); } catch(err2) {}
    }

    await wait(250);
    markFloorCleared(boss ? "boss" : "battle");
  }

  function grantBattleRewards(enemies, tower, floor, boss){
    var totalExp = enemies.reduce(function(sum, e){ return sum + (Number(e.exp) || 0); }, 0);
    var totalGold = enemies.reduce(function(sum, e){ return sum + (Number(e.gold) || 0); }, 0);
    var bonusGold = Math.floor((boss ? 45 : 12) + floor * (boss ? 6 : 2));
    var matAmount = boss ? 3 : 1;

    G.exp = (Number(G.exp) || 0) + totalExp;
    G.gold = (Number(G.gold) || 0) + totalGold + bonusGold;
    grantTowerMaterial(tower, matAmount);

    say((enemies.length > 1 ? "All enemies defeated!" : enemies[0].name + " was defeated!"), "success");
    say("Gained " + totalExp + " EXP, " + (totalGold + bonusGold) + " gold, and " + matAmount + " " + tower.material + ".", "b-system");

    try { if (typeof recordBattleAchievements === "function") recordBattleAchievements(enemies); } catch(e) {}

    processTowerLevelUps();

    if (boss) {
      addAchievementFlag("tower_boss_" + tower.id + "_" + floor);
      say("Boss floor cleared: " + tower.name + " Floor " + floor + ".", "success");
    }

    updateHeaderSafe();
  }

  function processTowerLevelUps(){
    var leveled = 0;
    if (typeof G.next_exp !== "number" || G.next_exp <= 0) G.next_exp = 100;
    while ((Number(G.exp) || 0) >= G.next_exp) {
      if ((Number(G.total_lv) || 0) + (Number(G.level_pts) || 0) >= 100) {
        G.exp = Math.min(G.exp, Math.max(0, G.next_exp - 1));
        say("★ Level cap reached: Total Level 100 is the maximum.", "b-system");
        break;
      }
      G.exp -= G.next_exp;
      G.level_pts = (Number(G.level_pts) || 0) + 1;
      G.stat_pts = (Number(G.stat_pts) || 0) + 10;
      G.next_exp = 30 + 10 * (Number(G.total_lv) || Number(G.level) || 1);
      leveled++;
    }
    if (leveled) {
      say("★ Level Up! +" + leveled + " Level Point" + (leveled === 1 ? "" : "s") + " and +" + (leveled * 10) + " Stat Points.", "b-system");
    }
    updateHeaderSafe();
  }

  function grantTowerMaterial(tower, amount){
    ensureTowerState();
    var key = tower.material || "Tower Relic";
    G.materials[key] = (Number(G.materials[key]) || 0) + (amount || 1);
  }

  function addAchievementFlag(flag){
    ensureTowerState();
    if (G.achievements.flags.indexOf(flag) === -1) G.achievements.flags.push(flag);
  }

  function updateHeaderSafe(){
    try { if (typeof applyStats === "function") applyStats(); } catch(e) {}
    try { if (typeof updateStats === "function") updateStats(); } catch(e) {}
  }

  function wait(ms){
    if (typeof delay === "function") {
      try { return delay(ms); } catch(e) {}
    }
    return new Promise(function(resolve){ setTimeout(resolve, ms); });
  }

  function markFloorCleared(source){
    var run = currentRun();
    if (!run) return battle_towers_screen();
    var t = towerById(run.id);
    run.clearedFloors[String(run.floor)] = source || "clear";

    if (!G.tower_records[t.id]) G.tower_records[t.id] = { bestFloor:0, clears:0 };
    G.tower_records[t.id].bestFloor = Math.max(Number(G.tower_records[t.id].bestFloor) || 0, run.floor);

    if (run.floor >= t.maxFloor) {
      setChoices([
        ["Claim Tower Clear Reward", finishTowerRun],
        ["Open Camp First", camp_screen],
        ["Leave Tower", leaveTowerRun]
      ]);
      return;
    }

    tower_post_battle_screen();
  }

  function tower_post_battle_screen(){
    addStyle();
    ensureTowerState();
    var run = currentRun();
    if (!run) return battle_towers_screen();
    var t = towerById(run.id);
    var next = run.floor + 1;

    clearScreen();
    say("— TOWER PROGRESSION —", "highlight");
    say(t.name + " Floor " + run.floor + " is clear. The stairway to Floor " + next + " is open.", "narrator");

    card(
      '<div class="byl-tower-title">'+esc(t.name)+' Checkpoint</div>'+
      '<div class="byl-tower-sub">Current floor: <b>'+run.floor+'</b> · Next floor: <b>'+next+'</b> · Goal: <b>'+t.maxFloor+'</b></div>'+
      '<div class="byl-tower-grid">'+
        '<div class="byl-tower-mini"><b>Run Progress</b><br>Battles: '+run.battlesWon+' · Events: '+run.eventsSeen+' · Rewards: '+run.rewards+'</div>'+
        '<div class="byl-tower-mini"><b>Next Step</b><br>Continue Deeper always moves forward exactly one floor.</div>'+
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

    var hpGain = Math.max(1, Math.floor((Number(G.max_hp) || 100) * 0.35));
    var mpGain = Math.max(1, Math.floor((Number(G.max_mp) || 50) * 0.35));
    G.hp = Math.min(Number(G.max_hp) || G.hp || 1, (Number(G.hp) || 1) + hpGain);
    G.mp = Math.min(Number(G.max_mp) || G.mp || 0, (Number(G.mp) || 0) + mpGain);
    if (typeof G.max_stamina === "number") {
      G.stamina = Math.min(G.max_stamina, (Number(G.stamina) || 0) + Math.floor(G.max_stamina * 0.35));
    }
    updateHeaderSafe();

    say("You rest at camp and recover part of your HP, MP, and Stamina.", "success");

    if (!run) {
      setChoices([["Return to Hub World", hub_world_screen], ["Battle Towers", battle_towers_screen]]);
      return;
    }

    var t = towerById(run.id);
    var cleared = !!run.clearedFloors[String(run.floor)];
    setChoices([
      [cleared ? "Continue to Floor " + Math.min(t.maxFloor, run.floor + 1) : "Return to Floor " + run.floor, cleared ? advanceTowerFloor : enterTowerFloor],
      ["Leave Tower", leaveTowerRun]
    ]);
  }

  function finishTowerRun(){
    addStyle();
    ensureTowerState();
    var run = currentRun();
    if (!run) return battle_towers_screen();
    var t = towerById(run.id);

    clearScreen();
    say("— TOWER CLEARED —", "highlight");
    say("You cleared " + t.name + ".", "success");

    if (!G.tower_records[t.id]) G.tower_records[t.id] = { bestFloor:0, clears:0 };
    G.tower_records[t.id].bestFloor = Math.max(Number(G.tower_records[t.id].bestFloor) || 0, t.maxFloor);
    G.tower_records[t.id].clears = (Number(G.tower_records[t.id].clears) || 0) + 1;

    var clearGold = 100 + t.maxFloor * 20 + Math.floor(t.minLevel * 1.5);
    var clearExp = 80 + t.maxFloor * 18 + Math.floor(t.minLevel * 2);
    G.gold = (Number(G.gold) || 0) + clearGold;
    G.exp = (Number(G.exp) || 0) + clearExp;
    grantTowerMaterial(t, t.id === "world_crown" ? 8 : 5);
    addAchievementFlag("tower_clear_" + t.id);
    processTowerLevelUps();
    updateHeaderSafe();

    card(
      '<div class="byl-tower-title">'+esc(t.name)+' Clear Reward</div>'+
      '<div class="byl-tower-grid">'+
        '<div class="byl-tower-mini"><b>Gold</b><br>+'+clearGold+'</div>'+
        '<div class="byl-tower-mini"><b>EXP</b><br>+'+clearExp+'</div>'+
        '<div class="byl-tower-mini"><b>Material</b><br>+'+(t.id === "world_crown" ? 8 : 5)+' '+esc(t.material)+'</div>'+
        '<div class="byl-tower-mini"><b>Record</b><br>Clears: '+G.tower_records[t.id].clears+'</div>'+
      '</div>'
    );

    G.tower_run = null;

    setChoices([
      ["Battle Towers", battle_towers_screen],
      ["Hub World", hub_world_screen],
      ["Character Status", function(){ if (typeof character_screen === "function") character_screen(); else hub_world_screen(); }]
    ]);
  }

  function leaveTowerRun(){
    ensureTowerState();
    G.tower_run = null;
    hub_world_screen();
  }

  function hub_world_screen(){
    if (baseHubWorld && baseHubWorld !== hub_world_screen) {
      try {
        var result = baseHubWorld.apply(this, arguments);
        setTimeout(installHubTowerButton, 0);
        return result;
      } catch(e) {
        console.warn("[BYL Tower] Old hub failed; rendering fallback hub.", e);
      }
    }

    clearScreen();
    say("— HUB WORLD —", "highlight");
    say("Choose your next destination.", "narrator");
    setChoices([
      ["🗼 Battle Towers", battle_towers_screen],
      ["📊 Character Status", function(){ if (typeof character_screen === "function") character_screen(); }],
      ["🛒 Shops", function(){ if (typeof shops === "function") shops(); }],
      ["💾 Save", function(){ if (typeof saveGame === "function") saveGame(); }],
      ["Load", function(){ if (typeof loadGame === "function") loadGame(); }]
    ]);
  }

  function installHubTowerButton(){
    try {
      var buttons = Array.prototype.slice.call(document.querySelectorAll("#choices button"));
      buttons.forEach(function(btn){
        if (/battle\s*towers/i.test(btn.textContent || "")) {
          btn.onclick = function(){ battle_towers_screen(); };
        }
      });
    } catch(e) {}
  }

  function installGlobals(){
    addStyle();
    ensureTowerState();

    window.BYL_BATTLE_TOWER_VERSION = VERSION;
    window.BYL_TOWER_DATA = TOWERS;

    window.battle_towers_screen = battle_towers_screen;
    window.startTowerRun = startTowerRun;
    window.enterTowerFloor = enterTowerFloor;
    window.tower_post_battle_screen = tower_post_battle_screen;
    window.leaveTowerRun = leaveTowerRun;
    window.camp_screen = camp_screen;
    window.hub_world_screen = hub_world_screen;
    window.town_center = hub_world_screen;
    window.winBattle = winBattle;
    window.map_screen = battle_towers_screen;
    window.raid_map_screen = battle_towers_screen;
    window.show_map = battle_towers_screen;

    try { battle_towers_screen = window.battle_towers_screen; } catch(e) {}
    try { startTowerRun = window.startTowerRun; } catch(e) {}
    try { enterTowerFloor = window.enterTowerFloor; } catch(e) {}
    try { tower_post_battle_screen = window.tower_post_battle_screen; } catch(e) {}
    try { leaveTowerRun = window.leaveTowerRun; } catch(e) {}
    try { camp_screen = window.camp_screen; } catch(e) {}
    try { hub_world_screen = window.hub_world_screen; } catch(e) {}
    try { town_center = window.town_center; } catch(e) {}
    try { winBattle = window.winBattle; } catch(e) {}
    try { map_screen = window.map_screen; } catch(e) {}
    try { raid_map_screen = window.raid_map_screen; } catch(e) {}
    try { show_map = window.show_map; } catch(e) {}

    setTimeout(installHubTowerButton, 100);
  }

  installGlobals();
})();
