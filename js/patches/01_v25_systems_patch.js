// ═══════════════════════════════════════════════════════════════
// v0.25 — Systems Expansion Patch
// Appended-only patch: soft caps, mastery, lore, secret zones,
// recruit leveling/bonds/stories, achievements, codex, battle stats,
// save slots, autosave, keyboard shortcuts, tooltips, and UI polish.
// ═══════════════════════════════════════════════════════════════
(function installV25SystemsPatch(){
  "use strict";

  var VERSION = "v0.25-systems-expansion";
  var orig = {
    applyStats: typeof applyStats === "function" ? applyStats : null,
    character_screen: typeof character_screen === "function" ? character_screen : null,
    show_map: typeof show_map === "function" ? show_map : null,
    startBattle: typeof startBattle === "function" ? startBattle : null,
    winBattle: typeof winBattle === "function" ? winBattle : null,
    checkWin: typeof checkWin === "function" ? checkWin : null,
    doAttack: typeof doAttack === "function" ? doAttack : null,
    resolveSkill: typeof resolveSkill === "function" ? resolveSkill : null,
    castSpell: typeof castSpell === "function" ? castSpell : null,
    enemyTurn: typeof enemyTurn === "function" ? enemyTurn : null,
    updateBattlePanel: typeof updateBattlePanel === "function" ? updateBattlePanel : null,
    useRecruitAssist: typeof useRecruitAssist === "function" ? useRecruitAssist : null,
    recruitment_hall: typeof recruitment_hall === "function" ? recruitment_hall : null,
    recruit_category: typeof recruit_category === "function" ? recruit_category : null,
    renderRecruitBattlePanel: typeof renderRecruitBattlePanel === "function" ? renderRecruitBattlePanel : null,
    town_center: typeof town_center === "function" ? town_center : null,
    main_menu: typeof main_menu === "function" ? main_menu : null,
    clearOutput: typeof clearOutput === "function" ? clearOutput : null,
    loadGame: typeof loadGame === "function" ? loadGame : null,
    saveGame: typeof saveGame === "function" ? saveGame : null,
    showBattleMenu: typeof showBattleMenu === "function" ? showBattleMenu : null,
    useItem: typeof useItem === "function" ? useItem : null,
    applyFx: typeof applyFx === "function" ? applyFx : null,
    print: typeof print === "function" ? print : null
  };

  var STAT_MAP = { hp:"max_hp", mp:"max_mp", pa:"phy_atk", pd:"phy_def", ag:"agi", ma:"mag_atk", md:"mag_def", rs:"resist", sp:"special" };
  var DEEP_STATS = ["phy_atk","mag_atk","phy_def","mag_def","agi","resist","special"];
  var STAT_LABELS = { phy_atk:"PHY.ATK", mag_atk:"MAG.ATK", phy_def:"PHY.DEF", mag_def:"MAG.DEF", agi:"AGI", resist:"RESIST", special:"SPECIAL", max_hp:"MAX HP", max_mp:"MAX MP" };

  function addStyle(){
    if (document.getElementById("v25-systems-style")) return;
    var style = document.createElement("style");
    style.id = "v25-systems-style";
    style.textContent = `
      @keyframes dmgFlashV25 { 0%{filter:drop-shadow(0 0 0 transparent)} 50%{filter:drop-shadow(0 0 18px rgba(255,71,87,.95)) brightness(1.65)} 100%{filter:drop-shadow(0 0 0 transparent)} }
      .dmg-flash{ animation:dmgFlashV25 450ms ease-out; }
      @keyframes floatDmgV25 { 0%{opacity:1;transform:translate(-50%,0) scale(1)} 100%{opacity:0;transform:translate(-50%,-44px) scale(1.12)} }
      .float-dmg-v25{ position:fixed; z-index:99999; pointer-events:none; font-family:'Rajdhani',monospace; font-weight:900; font-size:18px; color:#ff4757; text-shadow:0 0 10px rgba(0,0,0,.95); animation:floatDmgV25 700ms ease-out forwards; }
      .float-dmg-v25.crit{ color:#e8c84a; text-shadow:0 0 12px rgba(232,200,74,.85),0 0 10px #000; }
      #key-hint-v25{ position:fixed; right:10px; bottom:8px; z-index:9999; padding:5px 8px; border:1px solid rgba(80,135,210,.25); background:rgba(5,8,16,.68); color:#5a7a98; font-size:11px; font-family:'Rajdhani',monospace; pointer-events:none; }
      .fade-in-v25{ animation:fadeInV25 120ms ease-out; }
      @keyframes fadeInV25{ from{opacity:.35} to{opacity:1} }
      .tooltip-v25{ position:absolute; z-index:99999; background:#050810; border:1px solid #1c3354; box-shadow:0 8px 32px rgba(0,0,0,.8); padding:10px; color:#8aaac8; min-width:260px; max-width:min(92vw,460px); }
      .tooltip-grid-v25{ display:grid; grid-template-columns:repeat(3,1fr); gap:6px; }
      .tooltip-cell-v25{ border:1px solid #111d2e; background:#07090f; padding:6px; text-align:center; font-size:11px; }
      .tooltip-cell-v25 b{ display:block; color:#e8c84a; font-size:13px; }
      .v25-card{ border:1px solid #1c3354; background:linear-gradient(180deg,#07101d,#050810); padding:10px 12px; margin:8px 0; line-height:1.5; }
      .v25-title{ color:#e8c84a; font-weight:800; letter-spacing:.8px; font-size:13px; }
      .v25-sub{ color:#8aaac8; font-size:11px; margin-top:3px; }
      .v25-chip{ display:inline-block; margin:3px 4px 0 0; padding:1px 6px; border:1px solid rgba(232,200,74,.28); color:#e8c84a; background:rgba(232,200,74,.06); font-size:10px; }
      #autosave-indicator{ position:absolute; right:70px; top:9px; z-index:55; font-size:11px; color:#57cc99; opacity:0; transition:opacity .2s; font-family:'Rajdhani',monospace; }
      #autosave-indicator.show{ opacity:1; }
      .slot-grid-v25{ display:grid; grid-template-columns:1fr; gap:5px; margin-top:8px; }
      .slot-btn-v25{ width:100%; text-align:left!important; white-space:pre-wrap; }
      .slot-btn-v25.active{ border-color:#e8c84a!important; color:#e8c84a!important; }
      .ach-earned-v25{ border-color:rgba(232,200,74,.55); box-shadow:0 0 18px rgba(232,200,74,.06) inset; }
      .ach-locked-v25{ opacity:.52; filter:grayscale(.4); }
    `;
    document.head.appendChild(style);
  }

  function safePrint(txt, cls){ try { if (typeof print === "function") print(txt, cls || "narrator"); } catch(e){} }
  function esc(x){ return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
  function flags(){ ensureV25State(); return G.achievements.flags; }
  function hasFlag(flag){ return flags().indexOf(flag) >= 0; }
  function addFlag(flag){ var f = flags(); if (f.indexOf(flag) < 0) f.push(flag); }
  function stableClone(obj){ try { return JSON.parse(JSON.stringify(obj)); } catch(e){ return obj; } }

  function ensureV25State(){
    if (typeof ensureGameCollections === "function") ensureGameCollections();
    if (!G.achievements || typeof G.achievements !== "object") G.achievements = { flags:[], defeated:{}, totalKills:0, secret_research:0 };
    if (!Array.isArray(G.achievements.flags)) G.achievements.flags = [];
    if (!G.achievements.defeated || typeof G.achievements.defeated !== "object") G.achievements.defeated = {};
    if (typeof G.achievements.totalKills !== "number") G.achievements.totalKills = 0;
    if (!G.mastery_bonuses || typeof G.mastery_bonuses !== "object") G.mastery_bonuses = {};
    if (!G.race_lore || typeof G.race_lore !== "object") G.race_lore = {};
    if (!G.recruit_exp || typeof G.recruit_exp !== "object") G.recruit_exp = {};
    if (!G.recruit_level || typeof G.recruit_level !== "object") G.recruit_level = {};
    if (!G.recruit_uses || typeof G.recruit_uses !== "object") G.recruit_uses = {};
    if (!G.recruit_bonds || typeof G.recruit_bonds !== "object") G.recruit_bonds = {};
    if (!G.recruit_story_flags || typeof G.recruit_story_flags !== "object") G.recruit_story_flags = {};
    if (!G.codex_unlocked || typeof G.codex_unlocked !== "object") G.codex_unlocked = {};
    if (!G.save_meta || typeof G.save_meta !== "object") G.save_meta = {};
    G.save_meta.version = VERSION;
  }

  function parseVersion(v){
    var m = String(v || "").match(/v?(\d+)(?:\.(\d+))?(?:\.(\d+))?/i);
    return m ? [Number(m[1]||0), Number(m[2]||0), Number(m[3]||0)] : [0,0,0];
  }
  function versionOlder(a,b){
    var A = parseVersion(a), Bv = parseVersion(b);
    for (var i=0;i<3;i++){ if (A[i] < Bv[i]) return true; if (A[i] > Bv[i]) return false; }
    return false;
  }

  // ── Achievement System ───────────────────────────────────────
  var ACHIEVEMENTS = [
    ["kill_5","🗡","First Blood Trail","Defeat 5 enemies.","[Slayer]",10],
    ["kill_10","⚔","Monster Breaker","Defeat 10 enemies.","[Slayer]",20],
    ["kill_25","💀","Grave March","Defeat 25 enemies.","[Veteran]",35],
    ["kill_50","🔥","Battlefield Name","Defeat 50 enemies.","[Veteran]",55],
    ["kill_100","👑","Century Reaper","Defeat 100 enemies.","[Legend]",90],
    ["level_10","⭐","Awakened Adventurer","Reach Total Level 10.","[Iron]",15],
    ["level_25","🌟","Seasoned Delver","Reach Total Level 25.","[Veteran]",40],
    ["level_50","💫","Mythic Challenger","Reach Total Level 50.","[Mythic]",65],
    ["level_100","🌌","World-Crowned Legend","Reach Total Level 100.","[Legend]",100],
    ["first_bond","💛","First Bond","Unlock your first recruit bond.","[Bonded]",45],
    ["first_mastery","📜","First Mastery","Master your first job.","[Master]",50],
    ["first_secret_clear","🗝","Hidden Path Cleared","Clear your first secret zone.","[Seeker]",70],
    ["first_recruit_ko","💔","Companion's Fall","See a recruit's first KO story moment.","[Iron]",30],
    ["first_streak","⚡","Momentum Hunter","Earn a kill streak gold bonus.","[Swift]",48],
    ["first_secret_discovery","🔎","Secret Zone Discovered","Reveal your first secret zone.","[Seeker]",42],
    ["no_heal_win","🛡","No-Heal Victory","Win a battle without using healing.","[Iron]",32],
    ["ambush_survivor","🌑","Ambush Survivor","Win a 3-enemy ambush battle.","[Survivor]",38],
    ["codex_20","📗","Field Researcher","Discover 20 enemy codex entries.","[Scholar]",60]
  ];
  var ACH_MAP = {};
  ACHIEVEMENTS.forEach(function(a){ ACH_MAP[a[0]] = {flag:a[0],icon:a[1],title:a[2],desc:a[3],prefix:a[4],prio:a[5]}; });

  function grantAchievement(flag){
    ensureV25State();
    if (!ACH_MAP[flag] || hasFlag(flag)) return false;
    addFlag(flag);
    safePrint("◆ Achievement unlocked: " + ACH_MAP[flag].icon + " " + ACH_MAP[flag].title + " " + (ACH_MAP[flag].prefix || ""), "b-system");
    return true;
  }
  function checkMilestoneAchievements(){
    ensureV25State();
    var k = G.achievements.totalKills || 0;
    if (k >= 5) grantAchievement("kill_5");
    if (k >= 10) grantAchievement("kill_10");
    if (k >= 25) grantAchievement("kill_25");
    if (k >= 50) grantAchievement("kill_50");
    if (k >= 100) grantAchievement("kill_100");
    var lv = G.total_lv || G.level || 0;
    if (lv >= 10) grantAchievement("level_10");
    if (lv >= 25) grantAchievement("level_25");
    if (lv >= 50) grantAchievement("level_50");
    if (lv >= 100) grantAchievement("level_100");
    if (Object.keys(G.codex_unlocked || {}).length >= 20) grantAchievement("codex_20");
  }
  function currentTitlePrefix(){
    ensureV25State();
    var best = null;
    G.achievements.flags.forEach(function(f){
      var a = ACH_MAP[f];
      if (a && a.prefix && (!best || a.prio > best.prio)) best = a;
    });
    return best ? best.prefix : "";
  }

  window.achievements_screen = function(){
    ensureV25State();
    if (typeof clearOutput === "function") clearOutput();
    if (typeof showBattlePanel === "function") showBattlePanel(false);
    safePrint("ACHIEVEMENTS", "highlight");
    safePrint("Earned: " + G.achievements.flags.filter(function(f){ return ACH_MAP[f]; }).length + " / " + ACHIEVEMENTS.length + "  ·  Current Title: " + (currentTitlePrefix() || "None"), "info");
    if (typeof $ch !== "undefined") $ch.innerHTML = "";
    ACHIEVEMENTS.forEach(function(row){
      var a = ACH_MAP[row[0]], earned = hasFlag(a.flag);
      var div = document.createElement("div");
      div.className = "v25-card " + (earned ? "ach-earned-v25" : "ach-locked-v25");
      div.innerHTML = '<div class="v25-title">' + a.icon + " " + esc(earned ? a.title : "???") + (earned && a.prefix ? "  " + esc(a.prefix) : "") + '</div>' +
        '<div class="v25-sub">' + esc(earned ? a.desc : "Locked achievement.") + '</div>';
      $ch.appendChild(div);
    });
    showChoices([["← Town Center", town_center], ["📗 Enemy Codex", codex_screen]]);
  };

  // ── Enemy Codex ──────────────────────────────────────────────
  function getEnemyDatabase(){
    var names = ["FOREST_ENEMIES","COAST_ENEMIES","DEMON_ENEMIES","CURSE_ENEMIES","SOUL_ENEMIES","SAIYAN_ENEMIES","GUILD_ENEMIES","NARUTO_ENEMIES","STARTER_COVE_ENEMIES","FAIRY_OUTSKIRTS_ENEMIES","RUKONGAI_ENEMIES","UA_ENEMIES","HEAVENS_ARENA_ENEMIES","AMESTRIS_ENEMIES","CLOVER_ENEMIES","MUGEN_ENEMIES","MARINEFORD_ENEMIES","CHIMERA_ENEMIES","CELL_ENEMIES","MONSTER_ENEMIES","INFINITY_ENEMIES","CHALLENGE_ENEMIES"];
    var db = {};
    names.forEach(function(n){
      try {
        var arr = eval(n);
        if (Array.isArray(arr)) arr.forEach(function(e){ if (e && e.name && !db[e.name]) db[e.name] = e; });
      } catch(e){}
    });
    SECRET_ZONES.forEach(function(z){ z.enemies.forEach(function(e){ if (e && e.name && !db[e.name]) db[e.name] = e; }); });
    return db;
  }
  function unlockCodexForEnemies(enemies){
    ensureV25State();
    (enemies || []).forEach(function(e){
      if (!e || !e.name) return;
      if (!G.codex_unlocked[e.name]) {
        G.codex_unlocked[e.name] = true;
        safePrint("📗 Codex updated: " + e.name, "info");
      }
    });
    checkMilestoneAchievements();
  }
  window.codex_screen = function(){
    ensureV25State();
    var db = getEnemyDatabase();
    if (typeof clearOutput === "function") clearOutput();
    if (typeof showBattlePanel === "function") showBattlePanel(false);
    var total = Object.keys(db).length, found = Object.keys(G.codex_unlocked || {}).length;
    safePrint("ENEMY CODEX", "highlight");
    safePrint("Discovered: " + found + " / " + total + "  ·  Each first defeat adds an entry.", "info");
    if (typeof $ch !== "undefined") $ch.innerHTML = "";
    Object.keys(db).sort().forEach(function(name){
      var e = db[name], known = !!G.codex_unlocked[name];
      var div = document.createElement("div");
      div.className = "v25-card " + (known ? "" : "ach-locked-v25");
      div.innerHTML = known ?
        '<div class="v25-title">' + esc(e.emoji || "👹") + " " + esc(name) + '</div><div class="v25-sub">' + esc(e.lore || "No lore recorded.") + '</div><span class="v25-chip">Kills: ' + esc((G.achievements.defeated && G.achievements.defeated[name]) || 0) + '</span>' :
        '<div class="v25-title">❓ ???</div><div class="v25-sub">Undiscovered enemy. Defeat it once to reveal its entry.</div>';
      $ch.appendChild(div);
    });
    showChoices([["← Town Center", town_center], ["🏆 Achievements", achievements_screen]]);
  };

  // ── Race Lore Unlock ─────────────────────────────────────────
  function makeRaceLore(r){
    var a = (r && r.anime) ? r.anime : "the world";
    var desc = (r && r.desc) ? r.desc.replace(/\s+/g, " ") : "a lineage with forgotten power.";
    var name = r ? r.name : "Unknown Race";
    return [
      "The " + name + " blood remembers more than your mind does.",
      "Old records from " + a + " describe it as " + desc.slice(0, 120) + (desc.length > 120 ? "..." : ""),
      "By mastering this form, you have earned the right to chase its next evolution."
    ];
  }
  function unlockRaceLoreIfReady(printNow){
    ensureV25State();
    var r = RACE_DATA[G.race_id];
    if (!r || !G.race_id) return;
    var flag = "race_lore_" + G.race_id;
    if (G.race_lv >= r.max_lv && !hasFlag(flag)) {
      addFlag(flag);
      G.race_lore[G.race_id] = makeRaceLore(r);
      if (printNow) {
        safePrint("📜 Race Lore Unlocked — " + r.name, "b-system");
        G.race_lore[G.race_id].forEach(function(line){ safePrint(line, "narrator"); });
      }
    }
  }

  // ── Mastery Bonuses and Soft Caps ────────────────────────────
  function jobPrimaryStat(job){
    try {
      var cat = job.v07Category || job.category || job.anime || "Guild Jobs";
      if (typeof JOB_PRESETS !== "undefined" && JOB_PRESETS[cat] && JOB_PRESETS[cat].stat) return JOB_PRESETS[cat].stat;
    } catch(e){}
    var b = job.base || {};
    var order = [["pa",b.pa||0],["ma",b.ma||0],["pd",b.pd||0],["md",b.md||0],["ag",b.ag||0],["rs",b.rs||0],["sp",b.sp||0]];
    order.sort(function(a,b){ return b[1]-a[1]; });
    return order[0][0] || "sp";
  }
  function grantMasteries(){
    ensureV25State();
    (G.jobs || []).forEach(function(entry){
      var jd = JOB_DATA[entry.id];
      if (!jd || entry.lv < jd.max_lv) return;
      if (!G.mastery_bonuses[entry.id]) {
        var stat = jobPrimaryStat(jd);
        var bon = {}; bon[stat] = 5;
        G.mastery_bonuses[entry.id] = { jobId: entry.id, name: jd.name, stat: stat, bon: bon, earnedAt: Date.now() };
        grantAchievement("first_mastery");
        safePrint("◆ Mastery Bonus earned: " + jd.name + " +" + 5 + " " + stat.toUpperCase(), "b-system");
      }
    });
  }
  function applyBonusObj(bon){
    Object.keys(bon || {}).forEach(function(k){
      var prop = STAT_MAP[k] || k;
      if (typeof G[prop] === "number") G[prop] += bon[k];
    });
  }
  function bondBonusForRecruit(r){
    var role = String((r && (r.role || r.job || "")) || "").toLowerCase();
    var assistKind = String((r && r.assist && r.assist.kind) || "").toLowerCase();
    if (/heal|cleric|priest|saint|cook|medic/.test(role) || assistKind === "heal") return {hp:3};
    if (/mage|wizard|sorcerer|witch|warlock|summoner/.test(role)) return {ma:3};
    if (/tank|shield|guardian|knight|bearer|defender/.test(role)) return {pd:3};
    if (/support|bard|strategist|dancer|buffer|tactician/.test(role) || assistKind === "buff") return {sp:3};
    if (/ranger|archer|thief|rogue|scout|assassin/.test(role)) return {ag:3};
    return {pa:3};
  }
  function applyBondBonuses(){
    ensureV25State();
    Object.keys(G.recruit_bonds || {}).forEach(function(id){
      if (!G.recruit_bonds[id]) return;
      var r = typeof getRecruit === "function" ? getRecruit(id) : null;
      var bon = bondBonusForRecruit(r);
      applyBonusObj(bon);
    });
  }
  function applyMasteryBonuses(){
    ensureV25State();
    Object.keys(G.mastery_bonuses || {}).forEach(function(id){
      var m = G.mastery_bonuses[id];
      if (m && m.bon) applyBonusObj(m.bon);
    });
  }
  function softCapValue(v){
    if (v <= 80) return Math.floor(v);
    return Math.floor(80 + (v - 80) * 0.5);
  }
  function applySoftCaps(){
    G._soft_cap_raw = {};
    G._soft_capped = {};
    DEEP_STATS.forEach(function(prop){
      var raw = Number(G[prop] || 0);
      G._soft_cap_raw[prop] = raw;
      if (raw > 80) {
        G[prop] = softCapValue(raw);
        G._soft_capped[prop] = true;
      }
    });
    G.atk = G.phy_atk;
    G.int_stat = G.mag_atk;
    G.hp = Math.min(G.hp, G.max_hp);
    G.mp = Math.min(G.mp, G.max_mp);
  }

  if (orig.applyStats) {
    applyStats = function(){
      var ret = orig.applyStats.apply(this, arguments);
      ensureV25State();
      grantMasteries();
      applyMasteryBonuses();
      applyBondBonuses();
      applySoftCaps();
      unlockRaceLoreIfReady(false);
      checkMilestoneAchievements();
      return ret;
    };
  }

  // ── Battle Tracking, Flash, Floating Numbers ─────────────────
  function initBattleStats(){
    if (!B) return;
    if (!B.stats) B.stats = { dealt:0, taken:0, skills:0, crits:0, statuses:0 };
    B.streak = B.streak || 0;
    B.usedHeal = !!B.usedHeal;
    B._prevEnemyHps = (B.enemy_hps || []).slice();
    B._prevPlayerHp = G.hp;
    B._prevRecruitHps = Object.assign({}, B.recruit_hps || {});
    B._ambush = (B.enemies || []).length >= 3;
  }
  function getCurrentEnemyEmoji(){
    var area = document.getElementById("b-enemy-area");
    if (!area || !B) return document.getElementById("b-e-emoji");
    var rows = area.querySelectorAll(".enemy-row");
    var row = rows[B.enemy_idx] || rows[0];
    return row ? row.querySelector(".bp-emoji") : document.getElementById("b-e-emoji");
  }
  function floatDamage(amount, crit){
    var el = getCurrentEnemyEmoji();
    if (!el || !amount) return;
    var rect = el.getBoundingClientRect();
    var d = document.createElement("div");
    d.className = "float-dmg-v25" + (crit ? " crit" : "");
    d.textContent = (crit ? "★ " : "-") + amount;
    d.style.left = (rect.left + rect.width/2) + "px";
    d.style.top = (rect.top + 2) + "px";
    document.body.appendChild(d);
    setTimeout(function(){ if (d.parentNode) d.parentNode.removeChild(d); }, 760);
  }
  function trackHpDeltasAndFlash(){
    if (!B) return;
    initBattleStats();
    var prev = B._prevEnemyHps || [];
    (B.enemy_hps || []).forEach(function(hp, i){
      var before = typeof prev[i] === "number" ? prev[i] : hp;
      if (hp < before) {
        var diff = before - hp;
        B.stats.dealt += diff;
        B.streak = (B.streak || 0) + 1;
        var rows = document.querySelectorAll("#b-enemy-area .enemy-row");
        var emoji = rows[i] ? rows[i].querySelector(".bp-emoji") : getCurrentEnemyEmoji();
        if (emoji) {
          emoji.classList.remove("dmg-flash");
          void emoji.offsetWidth;
          emoji.classList.add("dmg-flash");
          setTimeout(function(){ if (emoji) emoji.classList.remove("dmg-flash"); }, 480);
        }
        floatDamage(diff, !!B._nextDamageCrit);
        B._nextDamageCrit = false;
      }
    });
    B._prevEnemyHps = (B.enemy_hps || []).slice();

    if (typeof B._prevPlayerHp === "number" && G.hp < B._prevPlayerHp) B.stats.taken += (B._prevPlayerHp - G.hp);
    B._prevPlayerHp = G.hp;

    var prevR = B._prevRecruitHps || {};
    Object.keys(B.recruit_hps || {}).forEach(function(id){
      var before = typeof prevR[id] === "number" ? prevR[id] : B.recruit_hps[id];
      if (B.recruit_hps[id] < before) B.stats.taken += (before - B.recruit_hps[id]);
    });
    B._prevRecruitHps = Object.assign({}, B.recruit_hps || {});
  }

  if (orig.print) {
    print = function(text, cls){
      if (B && typeof text === "string" && /CRITICAL HIT/i.test(text)) {
        initBattleStats();
        B.stats.crits++;
        B._nextDamageCrit = true;
      }
      return orig.print.apply(this, arguments);
    };
  }

  if (orig.applyFx) {
    applyFx = function(target, id){
      if (B && target === "e") {
        initBattleStats();
        B.stats.statuses++;
      }
      return orig.applyFx.apply(this, arguments);
    };
  }

  if (orig.startBattle) {
    startBattle = function(enemyOrArr){
      var ret = orig.startBattle.apply(this, arguments);
      ensureV25State();
      initBattleStats();
      if (window._v25PendingSecretZone) {
        B.secretZoneId = window._v25PendingSecretZone.id;
        B.secretZoneName = window._v25PendingSecretZone.name;
        window._v25PendingSecretZone = null;
      }
      return ret;
    };
  }

  if (orig.updateBattlePanel) {
    updateBattlePanel = function(){
      var ret = orig.updateBattlePanel.apply(this, arguments);
      if (B) {
        trackHpDeltasAndFlash();
        var prefix = currentTitlePrefix();
        var pName = document.getElementById("b-p-name");
        if (pName && prefix && pName.textContent.indexOf(prefix) < 0) pName.textContent = prefix + " " + pName.textContent;
        decorateRecruitBattleRows();
      }
      return ret;
    };
  }

  if (orig.doAttack) {
    doAttack = function(){
      if (B) { initBattleStats(); B._lastActor = "player_attack"; }
      return orig.doAttack.apply(this, arguments);
    };
  }
  if (orig.resolveSkill) {
    resolveSkill = function(sk){
      if (B) {
        initBattleStats();
        B.stats.skills++;
        B._lastActor = "player_skill";
        if (sk && (sk.heal || sk.cleanse || sk.mpRestore || sk.mpRestorePct)) {
          B.usedHeal = true;
          B.streak = 0;
        }
      }
      return orig.resolveSkill.apply(this, arguments);
    };
  }
  if (orig.castSpell) {
    castSpell = function(sp){
      if (B) { initBattleStats(); B.stats.skills++; B._lastActor = "player_spell"; }
      return orig.castSpell.apply(this, arguments);
    };
  }
  if (orig.useItem) {
    useItem = function(item, entry){
      if (B) { initBattleStats(); B.usedHeal = true; B.streak = 0; }
      return orig.useItem.apply(this, arguments);
    };
  }

  // ── Recruit Leveling, Bonds, Stories ─────────────────────────
  function recruitLevel(id){ ensureV25State(); return Number(G.recruit_level[id] || 0); }
  function recruitExp(id){ ensureV25State(); return Number(G.recruit_exp[id] || 0); }
  function recruitAssistMult(id){ return 1 + 0.15 * recruitLevel(id); }
  function bondLabel(id){ return G.recruit_bonds && G.recruit_bonds[id] ? " 💛 Bonded" : ""; }
  function roleBondText(r){
    var b = bondBonusForRecruit(r);
    return Object.keys(b).map(function(k){ return "+" + b[k] + " " + k.toUpperCase(); }).join(", ");
  }
  function unlockRecruitBond(r){
    ensureV25State();
    if (!r || G.recruit_bonds[r.id]) return;
    if ((G.recruit_uses[r.id] || 0) >= 5) {
      G.recruit_bonds[r.id] = true;
      grantAchievement("first_bond");
      safePrint("💛 Bond unlocked with " + r.name + "! Passive bonus: " + roleBondText(r), "b-system");
      if (typeof applyStats === "function") applyStats();
      if (typeof updateStats === "function") updateStats();
    }
  }
  function recruitStoryLines(r, type){
    var name = r ? r.name : "Your ally";
    var special = {
      "Mira Hearthstep": {
        ko:["Mira drops to one knee, lantern still burning. \"Not yet... someone has to keep the light up.\"","Her sword slips from her hand, but her eyes keep following the fight."],
        kill:["Mira plants her boot beside the fallen foe. \"See? A little courage still counts.\"","The lantern at her belt flares like it approves."]
      },
      "Borin Stonepan": {
        ko:["Borin crashes backward, clutching his cooking pan like a shield. \"Soup's... going to be late.\"","Even knocked down, he tries to shove a ration toward you."],
        kill:["Borin knocks the enemy flat with a cast-iron swing. \"Kitchen's closed!\"","The battlefield briefly smells like pepper and victory."]
      },
      "Tessa Lockwhistle": {
        ko:["Tessa vanishes in a puff of dust, then reappears face-down. \"Trap... was supposed to be under them.\"","Her lockpicks scatter like silver teeth."],
        kill:["Tessa flicks a dagger back into her sleeve. \"Told you every monster has a weak point.\"","A stolen trinket somehow lands in her palm."]
      },
      "Rurik Ironmug": {
        ko:["Rurik's shield hits the ground like a bell. \"Wall's cracked... not broken.\"","He stays between you and the enemy even while falling."],
        kill:["Rurik drives his shield forward. \"That is what a line looks like!\"","The impact rings through the arena."]
      },
      "Elowen Greenwake": {
        ko:["Elowen sinks into the grass, whispering to roots only she can hear. \"Wake me when the forest answers.\"","Leaves curl around her like a blanket."],
        kill:["Elowen's arrow blooms into vines inside the foe's shadow. \"The wild remembers its debts.\"","Green light fades from the bowstring."]
      }
    };
    if (special[name] && special[name][type]) return special[name][type];
    if (type === "ko") return [name + " falls back with a pained breath. \"I am not done... just down.\"", "Their presence fades from the formation, but not from the fight."];
    return [name + " lands the finishing blow. \"That one was mine.\"", "The party's bond tightens around the victory."];
  }
  function ensureRecruitStoryObj(id){
    ensureV25State();
    if (!G.recruit_story_flags[id]) G.recruit_story_flags[id] = {};
    return G.recruit_story_flags[id];
  }
  function printRecruitStory(r, type){
    if (!r) return;
    var st = ensureRecruitStoryObj(r.id);
    var key = type === "ko" ? "first_ko" : "first_kill";
    if (st[key]) return;
    st[key] = true;
    if (type === "ko") {
      grantAchievement("first_recruit_ko");
    }
    var lines = recruitStoryLines(r, type);
    lines.forEach(function(line){ safePrint("「" + line + "」", type === "ko" ? "danger" : "success"); });
  }
  function processRecruitExpAfterBattle(battle){
    ensureV25State();
    var active = (G.active_recruits || []).slice();
    active.forEach(function(id){
      var r = typeof getRecruit === "function" ? getRecruit(id) : null;
      if (!r) return;
      var hp = battle && battle.recruit_hps ? battle.recruit_hps[id] : 1;
      if (hp <= 0) return;
      G.recruit_exp[id] = (G.recruit_exp[id] || 0) + 1;
      var exp = G.recruit_exp[id];
      var oldLv = G.recruit_level[id] || 0;
      var newLv = exp >= 30 ? 3 : exp >= 15 ? 2 : exp >= 5 ? 1 : 0;
      if (newLv > oldLv) {
        G.recruit_level[id] = newLv;
        safePrint("⬆ " + r.name + " recruit level increased! Assist power +" + (newLv * 15) + "%.", "b-system");
      }
    });
  }

  if (orig.useRecruitAssist) {
    useRecruitAssist = function(r){
      ensureV25State();
      if (B && r) {
        initBattleStats();
        B._lastActor = "recruit:" + r.id;
        B._lastRecruitId = r.id;
        if (r.assist && r.assist.kind === "heal") {
          B.usedHeal = true;
          B.streak = 0;
        }
      }
      if (r) {
        G.recruit_uses[r.id] = (G.recruit_uses[r.id] || 0) + 1;
        unlockRecruitBond(r);
      }
      var restore = null;
      if (r && r.assist) {
        var m = recruitAssistMult(r.id);
        restore = { pow:r.assist.pow, healPct:r.assist.healPct, mpRestorePct:r.assist.mpRestorePct };
        if (typeof r.assist.pow === "number") r.assist.pow = Math.floor(r.assist.pow * m);
        if (typeof r.assist.healPct === "number") r.assist.healPct = Math.min(0.75, r.assist.healPct * m);
        if (typeof r.assist.mpRestorePct === "number") r.assist.mpRestorePct = Math.min(0.75, r.assist.mpRestorePct * m);
      }
      try { return orig.useRecruitAssist.apply(this, arguments); }
      finally {
        if (r && r.assist && restore) {
          r.assist.pow = restore.pow;
          r.assist.healPct = restore.healPct;
          r.assist.mpRestorePct = restore.mpRestorePct;
        }
      }
    };
  }

  if (orig.enemyTurn) {
    enemyTurn = async function(){
      var before = {};
      if (B && B.recruit_hps) Object.keys(B.recruit_hps).forEach(function(id){ before[id] = B.recruit_hps[id]; });
      var ret = await orig.enemyTurn.apply(this, arguments);
      ensureV25State();
      Object.keys(before).forEach(function(id){
        var now = B && B.recruit_hps ? B.recruit_hps[id] : before[id];
        if (before[id] > 0 && now <= 0) {
          var r = typeof getRecruit === "function" ? getRecruit(id) : null;
          printRecruitStory(r, "ko");
        }
      });
      return ret;
    };
  }

  function decorateRecruitBattleRows(){
    var rows = document.querySelectorAll("#b-recruit-area .recruit-row");
    var active = typeof getActiveRecruits === "function" ? getActiveRecruits() : [];
    rows.forEach(function(row, idx){
      var r = active[idx];
      if (!r) return;
      var name = row.querySelector(".bp-name");
      if (!name) return;
      if (name.getAttribute("data-v25") === "1") return;
      name.setAttribute("data-v25","1");
      name.innerHTML += ' <span style="font-size:10px;color:#e8c84a">Lv.' + (r.level || r.req || 1) + '+' + recruitLevel(r.id) + ' · EXP ' + recruitExp(r.id) + '/30' + bondLabel(r.id) + '</span>';
    });
  }

  if (orig.recruitment_hall) {
    recruitment_hall = function(){
      var ret = orig.recruitment_hall.apply(this, arguments);
      appendRecruitProgressSummary();
      return ret;
    };
  }
  if (orig.recruit_category) {
    recruit_category = function(anime){
      var ret = orig.recruit_category.apply(this, arguments);
      try {
        Array.prototype.slice.call($ch.querySelectorAll("button")).forEach(function(btn){
          var text = btn.textContent || "";
          var r = (RECRUIT_DATA || []).find(function(x){ return text.indexOf(x.name) >= 0; });
          if (!r || text.indexOf("Bond:") >= 0) return;
          btn.textContent += "\nProgress: Recruit Lv +" + recruitLevel(r.id) + " · EXP " + recruitExp(r.id) + "/30 · Uses " + (G.recruit_uses[r.id] || 0) + "/5 · Bond: " + (G.recruit_bonds[r.id] ? "💛 Bonded (" + roleBondText(r) + ")" : "Locked");
        });
      } catch(e){}
      return ret;
    };
  }
  function appendRecruitProgressSummary(){
    if (typeof $ch === "undefined" || !G.recruits || !G.recruits.length) return;
    var div = document.createElement("div");
    div.className = "v25-card";
    div.innerHTML = '<div class="v25-title">Recruit Growth</div><div class="v25-sub">Surviving recruits gain 1 EXP after a won battle. EXP milestones at 5, 15, and 30 raise assist power by 15% each. Five assist uses unlock a Bond passive.</div>';
    $ch.insertBefore(div, $ch.firstChild);
  }

  // ── Secret Zones ─────────────────────────────────────────────
  var SECRET_ZONES = [
    {
      id:"whispering_vault", name:"Whispering Vault", reqText:"25 total kills", emoji:"🗝", condition:function(){ return (G.achievements.totalKills || 0) >= 25; },
      lore:["A sealed stairway opens beneath the crossroads.","Names of fallen monsters whisper from the stone.","Only proven slayers can hear the vault unlock."],
      enemies:[
        {emoji:"🗿",name:"Vault Sentinel",hp:260,atk:42,exp:95,gold:90,lore:"A rune-bound guardian that remembers every intruder.",moves:[{name:"Rune Crush",status:"stun",statusChance:.22},{name:"Stone Verdict"}]},
        {emoji:"👁",name:"Echo Wraith",hp:220,atk:46,exp:105,gold:110,lore:"A ghost made from old battle cries and unfinished oaths.",moves:[{name:"Fear Echo",status:"fear",statusChance:.28},{name:"Soul Rake"}]},
        {emoji:"🧟",name:"Oathless Knight",hp:300,atk:50,exp:130,gold:140,lore:"A warrior who mastered a path and still lost their name.",moves:[{name:"Broken Oath",status:"weaken",statusChance:.30},{name:"Grave Cleave"}]}
      ]
    },
    {
      id:"eclipse_gate", name:"Eclipse Gate", reqText:"Own any Hidden-tier job", emoji:"🌘", condition:function(){ return (G.jobs || []).some(function(j){ var jd = JOB_DATA[j.id]; return jd && /hidden/i.test(jd.class_tier || ""); }); },
      lore:["The sun vanishes behind a black ring.","A door made of night opens where your shadow should be.","Only those who touched a hidden class may enter."],
      enemies:[
        {emoji:"🌑",name:"Eclipse Stalker",hp:360,atk:58,exp:180,gold:160,lore:"A hunter that moves between moments of darkness.",moves:[{name:"Blindside",status:"marked",statusChance:.32},{name:"Night Rend"}]},
        {emoji:"🦇",name:"Nocturne Familiar",hp:270,atk:54,exp:150,gold:130,lore:"A familiar without a master, feeding on forbidden class marks.",moves:[{name:"Wing Hex",status:"confusion",statusChance:.30},{name:"Blood Pin"}]},
        {emoji:"🕳",name:"Gate Aberration",hp:420,atk:62,exp:210,gold:190,lore:"Something that squeezed through the wrong side of the gate.",moves:[{name:"Void Pressure",status:"vulnerable",statusChance:.35},{name:"Abyss Slam"}]}
      ]
    },
    {
      id:"starfall_ruin", name:"Starfall Ruin", reqText:"Total Level 50", emoji:"☄", condition:function(){ return (G.total_lv || 0) >= 50; },
      lore:["A broken star sleeps in the crater beyond the final road.","Every shard hums with a different future.","Only legends halfway to the level cap can survive the ruin."],
      enemies:[
        {emoji:"☄",name:"Starfall Drake",hp:520,atk:72,exp:260,gold:240,lore:"A drake whose scales cooled from fallen starlight.",moves:[{name:"Meteor Bite",status:"burn",statusChance:.35},{name:"Crater Wing"}]},
        {emoji:"🔮",name:"Astral Magus",hp:430,atk:78,exp:280,gold:260,lore:"A mage who traded gravity for prophecy.",moves:[{name:"Comet Hex",status:"doom",statusChance:.16},{name:"Astral Lance"}]},
        {emoji:"🛡",name:"Ruin Colossus",hp:680,atk:66,exp:320,gold:310,lore:"The ruined star's defense system, still following ancient orders.",moves:[{name:"Gravity Stomp",status:"stun",statusChance:.30},{name:"Obsidian Palm"}]},
        {emoji:"👑",name:"Fallen Star Herald",hp:600,atk:84,exp:350,gold:360,lore:"A herald announcing the arrival of something larger than the sky.",moves:[{name:"Herald's Flame",status:"burn",statusChance:.38},{name:"Star Choir"}]}
      ]
    }
  ];

  function secretUnlocked(z){ try { return !!z.condition(); } catch(e){ return false; } }
  function checkSecretDiscovery(){
    SECRET_ZONES.forEach(function(z){
      if (secretUnlocked(z) && !hasFlag("secret_discovered_" + z.id)) {
        addFlag("secret_discovered_" + z.id);
        grantAchievement("first_secret_discovery");
      }
    });
  }
  function secretZoneScreen(z){
    ensureV25State();
    if (typeof clearOutput === "function") clearOutput();
    if (typeof showBattlePanel === "function") showBattlePanel(false);
    safePrint(z.emoji + " " + z.name.toUpperCase(), "highlight");
    z.lore.forEach(function(line){ safePrint(line, "narrator"); });
    safePrint("Secret zone enemies are stronger than normal level-tier enemies but reward more EXP, gold, codex entries, and achievement progress.", "info");
    showChoices([
      ["Enter Secret Encounter", function(){ secretZoneEncounter(z); }],
      ["← World Map", show_map]
    ]);
  }
  function secretZoneEncounter(z){
    _lastZone = function(){ secretZoneScreen(z); };
    var pool = z.enemies;
    var group = [stableClone(pool[Math.floor(Math.random()*pool.length)])];
    if (Math.random() < .45) group.push(stableClone(pool[Math.floor(Math.random()*pool.length)]));
    window._v25PendingSecretZone = z;
    startBattle(group);
  }

  if (orig.show_map) {
    show_map = function(){
      var ret = orig.show_map.apply(this, arguments);
      ensureV25State();
      checkSecretDiscovery();
      if (typeof $ch !== "undefined") {
        var hdr = document.createElement("div");
        hdr.style.cssText = "margin:14px 0 5px;padding:5px 10px;background:linear-gradient(90deg,#07090f,transparent);border-left:3px solid #e8c84a;font-size:10px;font-weight:700;letter-spacing:2px;color:#e8c84a";
        hdr.textContent = "— SECRET ZONES —";
        $ch.appendChild(hdr);
        SECRET_ZONES.forEach(function(z){
          var unlocked = secretUnlocked(z);
          var b = document.createElement("button");
          b.style.whiteSpace = "pre-wrap";
          b.textContent = unlocked ? (z.emoji + " " + z.name + "\n" + z.lore[0]) : ("❓ ???\nUnlock condition: " + z.reqText);
          b.disabled = !unlocked;
          b.onclick = function(){ secretZoneScreen(z); };
          $ch.appendChild(b);
        });
      }
      return ret;
    };
  }

  // ── Win Battle Wrapper: rewards, codex, stats, achievements ──
  if (orig.winBattle) {
    winBattle = async function(){
      var battle = B;
      if (battle) initBattleStats();
      var battleCopy = battle ? {
        enemies:(battle.enemies || []).map(function(e){ return stableClone(e); }),
        stats:Object.assign({}, battle.stats || {}),
        streak:battle.streak || 0,
        usedHeal:!!battle.usedHeal,
        ambush:!!battle._ambush,
        secretZoneId:battle.secretZoneId,
        secretZoneName:battle.secretZoneName,
        lastRecruitId:battle._lastRecruitId,
        lastActor:battle._lastActor,
        recruit_hps:Object.assign({}, battle.recruit_hps || {})
      } : null;

      var preGold = G.gold || 0;
      var ret = await orig.winBattle.apply(this, arguments);

      if (battleCopy) {
        unlockCodexForEnemies(battleCopy.enemies);
        processRecruitExpAfterBattle(battleCopy);
        if (battleCopy.lastActor && /^recruit:/.test(battleCopy.lastActor)) {
          var rid = battleCopy.lastRecruitId || battleCopy.lastActor.split(":")[1];
          var rr = typeof getRecruit === "function" ? getRecruit(rid) : null;
          printRecruitStory(rr, "kill");
        }
        if (battleCopy.streak >= 3) {
          var bonus = Math.max(1, Math.floor((G.gold - preGold) * 0.10));
          G.gold += bonus;
          safePrint("⚡ Kill Streak x" + battleCopy.streak + " — +10% gold!  +" + bonus + " gold.", "b-system");
          grantAchievement("first_streak");
        }
        if (!battleCopy.usedHeal) grantAchievement("no_heal_win");
        if (battleCopy.ambush) grantAchievement("ambush_survivor");
        if (battleCopy.secretZoneId) {
          addFlag("secret_clear_" + battleCopy.secretZoneId);
          grantAchievement("first_secret_clear");
          safePrint("🗝 Secret Zone Cleared: " + battleCopy.secretZoneName, "b-system");
        }
        safePrint("— Battle Statistics —", "highlight");
        safePrint("Damage Dealt: " + (battleCopy.stats.dealt || 0) + "  ·  Damage Taken: " + (battleCopy.stats.taken || 0), "info");
        safePrint("Skills/Spells Used: " + (battleCopy.stats.skills || 0) + "  ·  Crits: " + (battleCopy.stats.crits || 0) + "  ·  Statuses Applied: " + (battleCopy.stats.statuses || 0), "info");
      }

      checkMilestoneAchievements();
      if (typeof updateStats === "function") updateStats();
      autoSave("battle");
      return ret;
    };
  }

  // ── Character Screen Add-ons ─────────────────────────────────
  if (orig.character_screen) {
    character_screen = function(){
      var ret = orig.character_screen.apply(this, arguments);
      ensureV25State();
      unlockRaceLoreIfReady(true);
      appendSoftCapSection();
      appendMasterySection();
      appendRaceLoreSection();
      return ret;
    };
  }
  function appendSoftCapSection(){
    if (typeof $ch === "undefined") return;
    var capped = Object.keys(G._soft_capped || {});
    if (!capped.length) return;
    var div = document.createElement("div");
    div.className = "cs-exp-row";
    div.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">SOFT-CAPPED STATS</div>' +
      '<div style="font-size:11px;color:#8aaac8;line-height:1.55">Stats over 80 have diminishing returns. A ~ prefix means the displayed value is soft-capped at 50% value above 80.</div>' +
      capped.map(function(k){ return '<span class="v25-chip">~' + esc(STAT_LABELS[k] || k) + ': ' + esc(G[k]) + ' raw ' + esc(G._soft_cap_raw[k]) + '</span>'; }).join("");
    $ch.appendChild(div);
  }
  function appendMasterySection(){
    if (typeof $ch === "undefined") return;
    var list = Object.keys(G.mastery_bonuses || {}).map(function(id){ return G.mastery_bonuses[id]; }).filter(Boolean);
    if (!list.length) return;
    var div = document.createElement("div");
    div.className = "cs-exp-row";
    div.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">MASTERY BONUSES</div>' +
      list.map(function(m){ return '<div class="v25-sub">📜 ' + esc(m.name) + ' — +' + esc((m.bon && m.bon[m.stat]) || 5) + ' ' + esc(String(m.stat || "").toUpperCase()) + '</div>'; }).join("");
    $ch.appendChild(div);
  }
  function appendRaceLoreSection(){
    if (typeof $ch === "undefined") return;
    var lore = G.race_lore && G.race_lore[G.race_id];
    if (!Array.isArray(lore) || !lore.length) return;
    var r = RACE_DATA[G.race_id];
    var div = document.createElement("div");
    div.className = "cs-exp-row";
    div.innerHTML = '<div class="cs-exp-label" style="color:#48cae4">UNLOCKED RACE LORE — ' + esc(r ? r.name : "Race") + '</div>' +
      lore.map(function(line){ return '<div class="v25-sub">“' + esc(line) + '”</div>'; }).join("");
    $ch.appendChild(div);
  }

  // ── Town Center Links and Title Prefix ───────────────────────
  if (orig.town_center) {
    town_center = function(){
      var ret = orig.town_center.apply(this, arguments);
      ensureV25State();
      var prefix = currentTitlePrefix();
      if (prefix) safePrint("Current Title: " + prefix + " " + G.name, "b-system");
      if (typeof $ch !== "undefined") {
        var ach = document.createElement("button");
        ach.textContent = "🏆 Achievements";
        ach.onclick = achievements_screen;
        $ch.appendChild(ach);
        var cod = document.createElement("button");
        cod.textContent = "📗 Enemy Codex";
        cod.onclick = codex_screen;
        $ch.appendChild(cod);
      }
      return ret;
    };
  }

  // ── Quick Stat Tooltip ───────────────────────────────────────
  function toggleStatTooltip(ev){
    var old = document.getElementById("stat-tooltip-v25");
    if (old) { old.remove(); return; }
    var bar = document.getElementById("stats-bar");
    if (!bar) return;
    var rect = bar.getBoundingClientRect();
    var div = document.createElement("div");
    div.id = "stat-tooltip-v25";
    div.className = "tooltip-v25";
    div.style.left = Math.max(8, rect.left + 8) + "px";
    div.style.top = (rect.bottom + window.scrollY + 4) + "px";
    var stats = [
      ["PHY.ATK",G.phy_atk],["PHY.DEF",G.phy_def],["AGI",G.agi],
      ["MAG.ATK",G.mag_atk],["MAG.DEF",G.mag_def],["RESIST",G.resist],
      ["SPECIAL",G.special],["MAX HP",G.max_hp],["MAX MP",G.max_mp]
    ];
    div.innerHTML = '<div class="v25-title">Deep Stats</div><div class="tooltip-grid-v25">' +
      stats.map(function(s){ return '<div class="tooltip-cell-v25"><b>' + esc(s[1]) + '</b>' + esc(s[0]) + '</div>'; }).join("") +
      '</div>';
    document.body.appendChild(div);
    ev.stopPropagation();
  }
  var statsBar = document.getElementById("stats-bar");
  if (statsBar && !statsBar._v25Tip) {
    statsBar._v25Tip = true;
    statsBar.addEventListener("click", toggleStatTooltip);
    document.addEventListener("click", function(e){
      var tip = document.getElementById("stat-tooltip-v25");
      if (tip && !tip.contains(e.target) && !statsBar.contains(e.target)) tip.remove();
    });
  }

  // ── Keyboard Shortcuts and Screen Fade ───────────────────────
  if (!document.getElementById("key-hint-v25")) {
    var hint = document.createElement("div");
    hint.id = "key-hint-v25";
    hint.textContent = "1–9 select · ESC back";
    document.body.appendChild(hint);
  }
  if (!document._v25Keybinds) {
    document._v25Keybinds = true;
    document.addEventListener("keydown", function(e){
      if (/INPUT|TEXTAREA|SELECT/.test((e.target && e.target.tagName) || "")) return;
      var buttons = Array.prototype.slice.call(document.querySelectorAll("#choices button")).filter(function(b){ return !b.disabled && b.offsetParent !== null; });
      if (/^[1-9]$/.test(e.key)) {
        var btn = buttons[Number(e.key)-1];
        if (btn) { e.preventDefault(); btn.click(); }
      } else if (e.key === "Escape") {
        var back = buttons.find(function(b){ return (b.textContent || "").indexOf("←") >= 0; });
        if (back) { e.preventDefault(); back.click(); }
      }
    });
  }
  if (orig.clearOutput) {
    clearOutput = function(){
      var ret = orig.clearOutput.apply(this, arguments);
      var body = document.getElementById("game-body");
      if (body) {
        body.classList.remove("fade-in-v25");
        void body.offsetWidth;
        body.classList.add("fade-in-v25");
      }
      return ret;
    };
  }

  // ── Save Slots / Autosave / Version Warnings ────────────────
  var SLOT_PREFIX = "animeRPG_slot_";
  var ACTIVE_SLOT_KEY = "animeRPG_activeSlot";
  function activeSlot(){ var n = parseInt(localStorage.getItem(ACTIVE_SLOT_KEY) || "1", 10); return (n>=1 && n<=3) ? n : 1; }
  function setActiveSlot(n){ localStorage.setItem(ACTIVE_SLOT_KEY, String(n)); refreshSaveSlotsPanel(); }
  function slotKey(n){ return SLOT_PREFIX + n; }
  function readSlot(n){ try { var raw = localStorage.getItem(slotKey(n)); return raw ? JSON.parse(raw) : null; } catch(e){ return null; } }
  function slotSummary(n){
    var s = readSlot(n);
    if (!s) return "Slot " + n + "\\nEmpty";
    var r = s.race_id && typeof RACE_DATA !== "undefined" ? RACE_DATA[s.race_id] : null;
    return "Slot " + n + "\\n" + (s.name || "Unnamed") + " · Lv." + (s.total_lv || s.level || 0) + " · " + (r ? r.name : "Unknown Race");
  }
  function saveToSlot(n, silent){
    ensureV25State();
    G.save_meta.version = VERSION;
    G.save_meta.lastSaved = new Date().toISOString();
    localStorage.setItem(slotKey(n), JSON.stringify(G));
    localStorage.setItem(ACTIVE_SLOT_KEY, String(n));
    if (!silent && typeof showSaveMsg === "function") showSaveMsg("✓ Saved to Slot " + n, "#2ecc71");
    return true;
  }
  window.autoSave = function(reason){
    try {
      saveToSlot(activeSlot(), true);
      var el = document.getElementById("autosave-indicator");
      if (el) {
        el.textContent = "✓ autosaved";
        el.classList.add("show");
        clearTimeout(el._t);
        el._t = setTimeout(function(){ el.classList.remove("show"); }, 2000);
      }
    } catch(e){}
  };
  saveGame = function(){ return saveToSlot(activeSlot(), false); };
  loadGame = function(){ load_slots_screen(); };
  confirmNewGame = function(){
    if (!confirm("Start a new game? This clears the active save slot only.")) return;
    localStorage.removeItem(slotKey(activeSlot()));
    try { sessionStorage.setItem("byl_start_new","1"); } catch(e){}
    location.reload();
  };
  window.loadSlotV25 = function(n){
    var s = readSlot(n);
    if (!s) { if (typeof showSaveMsg === "function") showSaveMsg("Slot " + n + " is empty.", "#ff4757"); return; }
    var oldVersion = s.save_meta && s.save_meta.version;
    Object.keys(s).forEach(function(k){ G[k] = s[k]; });
    setActiveSlot(n);
    ensureV25State();
    if (typeof applyStats === "function") applyStats();
    if (typeof updateStats === "function") updateStats();
    if (typeof town_center === "function") town_center();
    if (!oldVersion || versionOlder(oldVersion, "v0.19")) {
      safePrint("⚠ This save is from an older version — some features may be missing. A fresh game is recommended.", "highlight");
    }
    if (typeof showSaveMsg === "function") showSaveMsg("✓ Loaded Slot " + n, "#2ecc71");
  };
  window.load_slots_screen = function(){
    if (typeof clearOutput === "function") clearOutput();
    if (typeof showBattlePanel === "function") showBattlePanel(false);
    safePrint("LOAD SAVE SLOT", "highlight");
    safePrint("Choose one of three browser save slots. Current active slot: " + activeSlot(), "info");
    if (typeof $ch !== "undefined") $ch.innerHTML = "";
    for (var i=1;i<=3;i++){
      (function(n){
        var btn = document.createElement("button");
        btn.className = "slot-btn-v25" + (activeSlot()===n ? " active" : "");
        btn.textContent = slotSummary(n);
        btn.disabled = !readSlot(n);
        btn.onclick = function(){ loadSlotV25(n); };
        $ch.appendChild(btn);
      })(i);
    }
    showChoices([["← Main Menu", typeof main_menu === "function" ? main_menu : town_center], ["← Town Center", town_center]]);
  };
  function refreshSaveSlotsPanel(){
    var panel = document.getElementById("settings-panel");
    if (!panel) return;
    var saveSec = Array.prototype.slice.call(panel.querySelectorAll(".sp-section")).find(function(s){ return /Save \/ Load/i.test(s.textContent || ""); });
    if (!saveSec) return;
    var existing = document.getElementById("save-slots-v25");
    if (existing) existing.remove();
    var div = document.createElement("div");
    div.id = "save-slots-v25";
    div.className = "slot-grid-v25";
    var html = '<div class="sp-label" style="min-width:100%;color:#e8c84a">Save Slots — active Slot ' + activeSlot() + '</div>';
    for (var i=1;i<=3;i++) {
      html += '<button class="sp-btn slot-btn-v25 ' + (activeSlot()===i?'active':'') + '" data-slot="' + i + '">' + esc(slotSummary(i)) + '</button>';
    }
    div.innerHTML = html;
    saveSec.appendChild(div);
    Array.prototype.slice.call(div.querySelectorAll("button[data-slot]")).forEach(function(b){
      b.onclick = function(){ setActiveSlot(Number(b.getAttribute("data-slot"))); };
    });
  }
  refreshSaveSlotsPanel();
  var oldToggleV25 = typeof toggleSettings === "function" ? toggleSettings : null;
  if (oldToggleV25 && !toggleSettings._v25Slots) {
    toggleSettings = function(){
      var ret = oldToggleV25.apply(this, arguments);
      setTimeout(refreshSaveSlotsPanel, 0);
      return ret;
    };
    toggleSettings._v25Slots = true;
  }
  if (!document.getElementById("autosave-indicator")) {
    var ind = document.createElement("span");
    ind.id = "autosave-indicator";
    ind.textContent = "✓ autosaved";
    var head = document.getElementById("game-header");
    if (head) head.appendChild(ind);
  }
  document.addEventListener("click", function(e){
    var b = e.target && e.target.closest ? e.target.closest("button") : null;
    if (!b) return;
    var txt = b.textContent || "";
    if (/(buy|bought|purchase|learn|hire|recruit|joined|equip|forge|brew)/i.test(txt)) {
      setTimeout(function(){ autoSave("shop"); }, 250);
    }
  }, true);

  // ── Main Menu Export Button ─────────────────────────────────
  if (orig.main_menu || typeof main_menu === "function") {
    var baseMain = orig.main_menu || main_menu;
    main_menu = function(){
      var ret = baseMain.apply(this, arguments);
      setTimeout(function(){
        var actions = document.querySelector(".main-menu-actions");
        if (actions && !document.getElementById("copy-save-v25")) {
          var btn = document.createElement("button");
          btn.id = "copy-save-v25";
          btn.className = "main-menu-btn ghost";
          btn.textContent = "💾 Copy Save to Clipboard";
          btn.onclick = function(){
            var code = "";
            try { code = btoa(unescape(encodeURIComponent(JSON.stringify(G)))); } catch(e){ code = JSON.stringify(G); }
            var done = function(){
              var msg = document.getElementById("menu-msg");
              if (msg) {
                var old = msg.textContent;
                msg.textContent = "✓ Save copied!";
                msg.style.color = "#2ecc71";
                setTimeout(function(){ msg.textContent = old; msg.style.color = "#8aaac8"; }, 2000);
              }
            };
            if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(done).catch(function(){ prompt("Copy save:", code); done(); });
            else { prompt("Copy save:", code); done(); }
          };
          actions.appendChild(btn);
        }
        var loadBtn = Array.prototype.slice.call(document.querySelectorAll(".main-menu-btn")).find(function(x){ return /Load Save/i.test(x.textContent || ""); });
        if (loadBtn) {
          var hasAny = !!(readSlot(1)||readSlot(2)||readSlot(3));
          loadBtn.disabled = !hasAny;
          loadBtn.onclick = load_slots_screen;
        }
      },0);
      return ret;
    };
  }

  // ── Settings link to achievements/codex/update note ─────────
  function injectV25Settings(){
    var panel = document.getElementById("settings-panel");
    if (!panel || document.getElementById("v25-settings-section")) return;
    var saveSec = Array.prototype.slice.call(panel.querySelectorAll(".sp-section")).find(function(s){ return /Save \/ Load/i.test(s.textContent || ""); });
    var div = document.createElement("div");
    div.className = "sp-section";
    div.id = "v25-settings-section";
    div.innerHTML = '<h3>Systems</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Achievements, Enemy Codex, save slots, autosave, secret zones, mastery, bonds, and stat soft caps.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); achievements_screen()">🏆 Achievements</button><button class="sp-btn" onclick="closeSettingsPanel(); codex_screen()">📗 Codex</button><button class="sp-btn" onclick="closeSettingsPanel(); load_slots_screen()">📂 Slots</button></div>';
    if (saveSec) panel.insertBefore(div, saveSec); else panel.appendChild(div);
  }
  injectV25Settings();

  // Final startup
  addStyle();
  ensureV25State();
  if (orig.applyStats && typeof applyStats === "function") applyStats();
  if (typeof updateStats === "function") updateStats();
})();
