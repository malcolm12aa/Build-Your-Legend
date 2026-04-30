
// ═══════════════════════════════════════════════════════════════
// v0.55 — Final UI Cleanup + Character Status Fix
// Load after 11_v50_1_requested_fixes.js.
// Replaces the broken v52/v54 patches with one valid final override.
// ═══════════════════════════════════════════════════════════════
(function installBYLV55FinalUICleanup(){
  "use strict";

  var VERSION = "v0.55-final-ui-cleanup";

  var STAT_KEYS = ["hp","mp","pa","pd","ag","ma","md","rs","sp"];
  var STAT_LABELS = {
    hp:"HP", mp:"MP", pa:"PHY.ATK", pd:"PHY.DEF", ag:"AGI",
    ma:"MAG.ATK", md:"MAG.DEF", rs:"RESIST", sp:"SPECIAL"
  };
  var STAT_VALUE_KEYS = {
    hp:"max_hp", mp:"max_mp", pa:"phy_atk", pd:"phy_def", ag:"agi",
    ma:"mag_atk", md:"mag_def", rs:"resist", sp:"special"
  };

  function byId(id){ return document.getElementById(id); }
  function output(){ return byId("output"); }
  function choices(){ return byId("choices"); }
  function isFn(fn){ return typeof fn === "function"; }
  function esc(x){
    return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }
  function lower(x){ return String(x || "").toLowerCase(); }
  function num(x){ return Number(x || 0); }

  function safeClear(){
    try { if (isFn(window.clearOutput)) window.clearOutput(); else if (output()) output().innerHTML = ""; }
    catch(e){ if (output()) output().innerHTML = ""; }
    if (choices()) choices().innerHTML = "";
  }
  function battleOff(){
    try { if (isFn(window.showBattlePanel)) window.showBattlePanel(false); } catch(e){}
  }
  function say(text, cls){
    try { if (isFn(window.print)) window.print(text, cls || "narrator"); }
    catch(e){}
  }
  function safeApply(){
    try { if (isFn(window.ensureGameCollections)) window.ensureGameCollections(); } catch(e){}
    try { if (isFn(window.applyStats)) window.applyStats(); } catch(e){}
    try { if (isFn(window.updateStats)) window.updateStats(); } catch(e){}
  }
  function setChoices(list){
    var c = choices();
    if (!c) return;
    c.innerHTML = "";
    list.forEach(function(row){
      if (!row || !row[0] || !isFn(row[1])) return;
      var b = document.createElement("button");
      b.textContent = row[0];
      b.onclick = row[1];
      c.appendChild(b);
    });
  }

  function addStyle(){
    if (byId("byl-v55-final-ui-style")) return;
    var st = document.createElement("style");
    st.id = "byl-v55-final-ui-style";
    st.textContent = `
      .v55-card{
        border:1px solid #224062;
        background:linear-gradient(180deg,#071220,#050810);
        padding:10px 12px;
        margin:9px 0;
        line-height:1.55;
        box-sizing:border-box;
      }
      .v55-section{
        margin:12px 0 6px;
        padding:8px 10px;
        background:linear-gradient(90deg,#12082a,#07101d);
        border-left:4px solid #e8c84a;
        color:#e8c84a;
        font-family:"Cinzel Decorative",serif;
        font-size:11px;
        letter-spacing:2px;
        text-transform:uppercase;
      }
      .v55-title{color:#e8c84a;font-size:15px;font-weight:900;letter-spacing:.7px}
      .v55-sub{color:#8fb0cd;font-size:11px;margin-top:2px}
      .v55-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
      .v55-field{background:#070d15;border:1px solid #18324c;padding:8px;color:#bdd0e4;font-size:11px;line-height:1.55}
      .v55-field b{display:block;color:#e8c84a;font-size:10px;text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px}
      .v55-level-btn{
        width:100%!important;
        text-align:left!important;
        white-space:normal!important;
        padding:9px 10px!important;
        margin:5px 0!important;
        border:1px solid #2a4b6e!important;
        background:linear-gradient(180deg,#0a1626,#060b13)!important;
      }
      .v55-level-btn b{color:#e8c84a}
      .v55-level-btn:disabled{opacity:.45;filter:grayscale(.45);cursor:not-allowed}
      .v55-stat-table{border:1px solid #18324c;background:#050810;padding:8px;margin-top:8px}
      .v55-stat-row{
        display:grid;
        grid-template-columns:minmax(78px,112px) minmax(0,1fr) minmax(40px,auto) 30px;
        align-items:center;
        gap:7px;
        border:1px solid #12283d;
        background:#060b13;
        padding:6px 7px;
        margin:5px 0;
      }
      .v55-stat-label{color:#8fb0cd;font-size:10px;font-weight:800;letter-spacing:.7px;text-transform:uppercase}
      .v55-stat-track{height:9px;border:1px solid #193451;background:#05060a;overflow:hidden}
      .v55-stat-fill{height:100%;background:linear-gradient(90deg,#274d7a,#e8c84a)}
      .v55-stat-value{color:#e8c84a;font-weight:900;font-size:11px;text-align:right}
      .v55-plus{
        width:26px!important;
        min-width:26px!important;
        max-width:26px!important;
        height:24px!important;
        min-height:24px!important;
        padding:0!important;
        margin:0!important;
        border-radius:4px!important;
        text-align:center!important;
        font-size:15px!important;
        line-height:21px!important;
        color:#050810!important;
        background:#e8c84a!important;
        border:1px solid #ffe680!important;
        box-shadow:none!important;
      }
      .v55-plus:disabled{opacity:.35;filter:grayscale(.6);cursor:not-allowed}
      .v55-pill-row{display:flex;flex-wrap:wrap;gap:5px;margin-top:7px}
      .v55-pill{display:inline-block;border:1px solid #18324c;background:#050810;color:#bdd0e4;padding:3px 6px;font-size:10px;line-height:1.2}
      .v55-card-btn{
        display:block!important;width:100%!important;text-align:left!important;white-space:normal!important;
        border:1px solid #224062!important;background:linear-gradient(180deg,#071220,#050810)!important;
        padding:12px!important;margin:9px 0!important;line-height:1.55!important;box-sizing:border-box!important;
      }
      .v55-card-btn:hover,.v55-card-btn:focus{border-color:#e8c84a!important;box-shadow:0 0 0 1px rgba(232,200,74,.28)}
      @media(max-width:700px){
        .v55-grid{grid-template-columns:1fr}
        .v55-stat-row{grid-template-columns:minmax(70px,92px) minmax(0,1fr) minmax(34px,auto) 28px;gap:5px}
      }
    `;
    document.head.appendChild(st);
  }

  function raceData(){ try { return window.RACE_DATA || RACE_DATA || {}; } catch(e){ return {}; } }
  function jobData(){ try { return window.JOB_DATA || JOB_DATA || {}; } catch(e){ return {}; } }
  function player(){ try { return window.G || G; } catch(e){ return null; } }

  function currentRace(){
    var g = player(), rd = raceData();
    return g && g.race_id && rd ? rd[g.race_id] : null;
  }
  function currentJobs(){
    var g = player(), jd = jobData();
    if (!g || !Array.isArray(g.jobs)) return [];
    return g.jobs.map(function(j, idx){
      return { idx:idx, state:j, data:jd[j.id] };
    }).filter(function(x){ return !!x.data; });
  }
  function statPackage(entry){
    var stats = {};
    var base = (entry && entry.base) || {};
    var per = (entry && entry.per_lv) || {};
    var lv = Math.max(1, num(entry && entry.max_lv));
    STAT_KEYS.forEach(function(k){ stats[k] = Math.max(0, Math.round(num(base[k]) + num(per[k]) * lv)); });
    return stats;
  }
  function topStats(stats, n){
    return STAT_KEYS.slice().sort(function(a,b){ return num(stats[b]) - num(stats[a]); }).slice(0, n || 3);
  }
  function lowStats(stats, n){
    return STAT_KEYS.slice().sort(function(a,b){ return num(stats[a]) - num(stats[b]); }).slice(0, n || 2);
  }
  function labels(keys){ return keys.map(function(k){ return STAT_LABELS[k]; }).join(", "); }
  function totalStats(stats){ return STAT_KEYS.reduce(function(s,k){ return s + num(stats[k]); }, 0); }

  function entryBlob(entry){
    return lower([entry && entry.name, entry && entry.desc, entry && entry.anime, entry && entry.class_tier].join(" "));
  }
  function roleFor(entry, kind){
    var b = entryBlob(entry);
    if (/angel|saint|cleric|priest|holy|heal|miko|oracle|paladin|light/.test(b)) return "Holy Support";
    if (/dwarf|golem|stone|iron|armor|armour|shield|guardian|tank|defender|wall|titan/.test(b)) return "Defensive Vanguard";
    if (/orc|giant|oni|berserk|warrior|fighter|brute|dragon|beast|wolf|martial|brawler|monk/.test(b)) return "Physical Powerhouse";
    if (/rogue|thief|assassin|ninja|scout|ranger|hunter|archer|cat|fox|goblin|halfling|speed|shadow/.test(b)) return "Agile Striker";
    if (/elf|fairy|spirit|mage|magic|spell|arcane|wizard|sorcerer|witch|mana|element/.test(b)) return "Mystic Caster";
    if (/demon|devil|dark|curse|abyss|undead|vampire|hollow|death|blood|necromancer|warlock/.test(b)) return "Dark Hybrid";
    if (/craft|forge|artificer|alchemist|engineer|invent|seal|sigil/.test(b)) return "Technical Builder";
    if (/human|hero|adapt|balanced|adventurer/.test(b)) return "Flexible All-Rounder";
    return kind === "race" ? "Fantasy Origin" : "Hybrid Adventurer";
  }
  function weaponList(entry){
    var b = entryBlob(entry), w = [];
    function add(list){ list.forEach(function(x){ if (w.indexOf(x) < 0) w.push(x); }); }
    if (/samurai|katana/.test(b)) add(["Katana","Bow"]);
    if (/sword|duelist|blade|warrior|fighter|knight|paladin|hero/.test(b)) add(["Sword"]);
    if (/axe|berserk|orc|brute/.test(b)) add(["Axe","Heavy Weapon"]);
    if (/hammer|forge|blacksmith|mace|cleric|priest/.test(b)) add(["Mace / Hammer"]);
    if (/spear|lance|dragoon|polearm/.test(b)) add(["Spear / Polearm"]);
    if (/dagger|rogue|thief|assassin|ninja|scout|shadow|goblin/.test(b)) add(["Dagger","Short Sword"]);
    if (/bow|archer|ranger|hunter|sniper|quincy/.test(b)) add(["Bow"]);
    if (/shield|guardian|tank|defender|paladin/.test(b)) add(["Shield"]);
    if (/monk|martial|brawler|fist|unarmed/.test(b)) add(["Unarmed","Staff"]);
    if (/mage|wizard|sorcerer|witch|spell|arcane|summon|necromancer|warlock|miko|oracle|healer|saint|barrier|spirit|fairy|elf/.test(b)) add(["Staff","Wand / Tome","Catalyst"]);
    if (!w.length) add(["Short Sword","Dagger","Staff"]);
    return w.slice(0,4);
  }
  function skillsAt(entry, lv){
    var out = [];
    if (!entry) return out;
    if (Array.isArray(entry.skills)) {
      entry.skills.forEach(function(sk){ if (num(sk.lv || sk.level || 1) === lv) out.push(sk); });
    }
    if (Array.isArray(entry.spells)) {
      entry.spells.forEach(function(sk){ if (num(sk.lv || sk.level || 1) === lv) out.push(sk); });
    }
    return out;
  }
  function abilityNameList(list, starting){
    if (!list || !list.length) return starting ? "No starter ability listed." : "No ability listed.";
    return list.map(function(sk){ return (starting ? "* " : "") + (sk.name || sk.id || "Unnamed Ability"); }).join(", ");
  }
  function nextAbility(entry){
    var found = [];
    if (entry && Array.isArray(entry.skills)) found = found.concat(entry.skills);
    if (entry && Array.isArray(entry.spells)) found = found.concat(entry.spells);
    found = found.filter(function(sk){ return num(sk.lv || sk.level || 1) > 1; })
      .sort(function(a,b){ return num(a.lv || a.level || 1) - num(b.lv || b.level || 1); });
    if (!found.length) return "No later ability listed yet.";
    return "Lv." + num(found[0].lv || found[0].level || 1) + " — " + (found[0].name || "Unnamed Ability");
  }
  function buildNote(entry, kind, stats){
    var role = roleFor(entry, kind);
    var top = labels(topStats(stats, 3));
    var low = labels(lowStats(stats, 2));
    var start = abilityNameList(skillsAt(entry, 1), true);
    if (kind === "race") {
      return (entry.name || "This race") + " works best when you build around " + top +
        ". Use its origin as your foundation, then choose jobs that cover " + low +
        " or double down on the " + role + " identity. Starter: " + start;
    }
    return (entry.name || "This job") + " should be treated as a " + role +
      " path. Pair it with " + weaponList(entry).join(" / ") +
      " and race stats that support " + top + ". Cover " + low +
      " with later classes, gear, or stat points. Starter: " + start + ".";
  }
  function statRows(stats, spendable){
    var max = Math.max.apply(null, STAT_KEYS.map(function(k){ return num(stats[k]); }).concat([1]));
    var g = player();
    var can = !!(spendable && g && num(g.stat_pts) > 0);
    return '<div class="v55-stat-table">' + STAT_KEYS.map(function(k){
      var pct = Math.max(3, Math.min(100, Math.round(num(stats[k]) / max * 100)));
      var bonus = g && g.bonus ? num(g.bonus[k]) : 0;
      return '<div class="v55-stat-row">' +
        '<div class="v55-stat-label">' + STAT_LABELS[k] + '</div>' +
        '<div class="v55-stat-track"><div class="v55-stat-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="v55-stat-value">' + esc(stats[k]) + (spendable ? '<span style="color:#607d99"> +' + bonus + '</span>' : '') + '</div>' +
        '<button class="v55-plus" data-v55-stat="' + k + '"' + (can ? '' : ' disabled') + '>+</button>' +
      '</div>';
    }).join("") + '</div>';
  }
  function levelStatRows(stats){
    var max = Math.max.apply(null, STAT_KEYS.map(function(k){ return num(stats[k]); }).concat([1]));
    return '<div class="v55-stat-table">' + STAT_KEYS.map(function(k){
      var pct = Math.max(3, Math.min(100, Math.round(num(stats[k]) / max * 100)));
      return '<div class="v55-stat-row" style="grid-template-columns:minmax(78px,112px) minmax(0,1fr) minmax(40px,auto);">' +
        '<div class="v55-stat-label">' + STAT_LABELS[k] + '</div>' +
        '<div class="v55-stat-track"><div class="v55-stat-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="v55-stat-value">' + esc(stats[k]) + '</div>' +
      '</div>';
    }).join("") + '</div>';
  }

  function raceCardHTML(id, r){
    var stats = statPackage(r), role = roleFor(r, "race"), top = topStats(stats, 2), low = lowStats(stats, 2);
    return '<div class="v55-title">▸ ' + esc(r.name) + '</div>' +
      '<div class="v55-sub">Base Race · ' + esc(r.anime || "Fantasy") + ' · Max Level ' + esc(r.max_lv || "?") + ' · Role: ' + esc(role) + ' · BST ' + totalStats(stats) + '</div>' +
      levelStatRows(stats) +
      '<div class="v55-grid">' +
        '<div class="v55-field"><b>Unique Description</b>' + esc(r.desc || "") + '</div>' +
        '<div class="v55-field"><b>Core Identity</b>' + esc(role) + ' origin built around ' + labels(top) + '.</div>' +
        '<div class="v55-field"><b>Strengths</b>Excels at ' + labels(top) + '.</div>' +
        '<div class="v55-field"><b>Weaknesses</b>Lower ' + labels(low) + '.</div>' +
        '<div class="v55-field"><b>Starting Skill / Spell</b>' + esc(abilityNameList(skillsAt(r,1), true)) + '</div>' +
        '<div class="v55-field"><b>Next Ability</b>' + esc(nextAbility(r)) + '</div>' +
      '</div>' +
      '<div class="v55-field" style="margin-top:8px"><b>Unique Build Note</b>' + esc(buildNote(r, "race", stats)) + '</div>';
  }
  function jobCardHTML(id, j){
    var stats = statPackage(j), role = roleFor(j, "job"), top = topStats(stats, 2), low = lowStats(stats, 2);
    var tier = j.class_tier || j.tier || "Base";
    return '<div class="v55-title">▸ ' + esc(j.name) + '</div>' +
      '<div class="v55-sub">' + esc(tier) + ' Job · ' + esc(j.anime || "Fantasy") + ' · Max Level ' + esc(j.max_lv || "?") + ' · Role: ' + esc(role) + ' · BST ' + totalStats(stats) + '</div>' +
      levelStatRows(stats) +
      '<div class="v55-grid">' +
        '<div class="v55-field"><b>Unique Description</b>' + esc(j.desc || "") + '</div>' +
        '<div class="v55-field"><b>Weapon/s</b>' + esc(weaponList(j).join(" / ")) + '</div>' +
        '<div class="v55-field"><b>Starter Skills / Spells</b>' + esc(abilityNameList(skillsAt(j,1), true)) + '</div>' +
        '<div class="v55-field"><b>Strengths</b>' + esc(role) + '; excels at ' + labels(top) + '.</div>' +
        '<div class="v55-field"><b>Weaknesses</b>Lower ' + labels(low) + '.</div>' +
        '<div class="v55-field"><b>Next Ability</b>' + esc(nextAbility(j)) + '</div>' +
      '</div>' +
      '<div class="v55-field" style="margin-top:8px"><b>Unique Build Note</b>' + esc(buildNote(j, "job", stats)) + '</div>';
  }

  function groups(data, filter){
    var g = {};
    Object.keys(data || {}).forEach(function(id){
      var e = data[id];
      if (filter && !filter(id, e)) return;
      var key = e.anime || e.category || "Fantasy";
      if (!g[key]) g[key] = [];
      g[key].push([id, e]);
    });
    return g;
  }
  function isBaseJob(id, j){
    if (!j) return false;
    var tier = lower(j.class_tier || j.tier || "Base");
    var blob = entryBlob(j);
    var req = j.req || j.prereq || {};
    if (/race evolution/.test(blob)) return false;
    if (/advanced|specialist|rare|hidden|evolution/.test(tier)) return false;
    if (req && typeof req === "object" && Object.keys(req).length > 0) return false;
    return !tier || tier === "base";
  }

  function pickRaceV55(){
    var g = player(), rd = raceData();
    addStyle();
    safeClear();
    battleOff();
    say("RACE SELECTION — BASE PROFILE", "highlight");
    say("Choose your starting race. Race cards now use the same full card layout as job cards.", "narrator");
    var c = choices();
    if (!c) return;
    Object.keys(groups(rd)).forEach(function(groupName){
      var h = document.createElement("div");
      h.className = "v55-section";
      h.textContent = "— " + groupName + " Races —";
      c.appendChild(h);
      groups(rd)[groupName].forEach(function(pair){
        var id = pair[0], r = pair[1];
        var b = document.createElement("button");
        b.className = "v55-card-btn";
        b.innerHTML = raceCardHTML(id, r);
        b.onclick = function(){
          if (!g) return;
          g.race_id = Number(id);
          pickJobV55();
        };
        c.appendChild(b);
      });
    });
  }
  function pickJobV55(){
    var g = player(), rd = raceData(), jd = jobData();
    addStyle();
    safeClear();
    battleOff();
    var race = g && g.race_id ? rd[g.race_id] : null;
    say("Race: " + (race ? race.name : "Unknown") + " [" + (race ? race.anime : "—") + "]", "highlight");
    say("JOB SELECTION — BASE JOBS ONLY", "highlight");
    say("Choose your starting base job. Job cards use the same full layout as race cards.", "narrator");
    var c = choices();
    if (!c) return;
    Object.keys(groups(jd, isBaseJob)).forEach(function(groupName){
      var h = document.createElement("div");
      h.className = "v55-section";
      h.textContent = "— " + groupName + " Base Jobs —";
      c.appendChild(h);
      groups(jd, isBaseJob)[groupName].forEach(function(pair){
        var id = pair[0], j = pair[1];
        var b = document.createElement("button");
        b.className = "v55-card-btn";
        b.innerHTML = jobCardHTML(id, j);
        b.onclick = function(){
          if (!g) return;
          g.jobs = [{ id:Number(id), lv:1 }];
          if (isFn(window.your_character)) return window.your_character();
        };
        c.appendChild(b);
      });
    });
    var back = document.createElement("button");
    back.textContent = "← Back to Race Selection";
    back.onclick = pickRaceV55;
    c.appendChild(back);
  }

  function renderCard(html){
    var c = choices();
    if (!c) return null;
    var d = document.createElement("div");
    d.className = "v55-card";
    d.innerHTML = html;
    c.appendChild(d);
    return d;
  }

  function renderPendingPicks(){
    var g = player(), jd = jobData();
    if (!g || !Array.isArray(g.pending_skill_picks) || !g.pending_skill_picks.length) return;
    g.pending_skill_picks.slice().forEach(function(pick, pickIdx){
      var sourceName = pick.src === "race" ? (currentRace() && currentRace().name) : (jd[pick.src] && jd[pick.src].name);
      var div = renderCard('<div class="v55-title">Choose Skill / Spell</div><div class="v55-sub">Lv.' + esc(pick.tier) + ' · ' + esc(sourceName || "Unknown Path") + '</div>');
      (pick.opts || []).forEach(function(sk){
        var b = document.createElement("button");
        b.className = "v55-level-btn";
        b.innerHTML = '<b>' + esc(sk.name || "Unnamed Ability") + '</b><br>' + esc(sk.type === "p" ? "Passive" : ((sk.mp || 0) + " MP")) + ' · ' + esc(sk.desc || "");
        b.onclick = function(){
          g.learned_skills = g.learned_skills || [];
          if (!g.learned_skills.some(function(x){ return x && x.id === sk.id; })) g.learned_skills.push(sk);
          g.pending_skill_picks.splice(pickIdx, 1);
          safeApply();
          characterStatusV55();
        };
        div.appendChild(b);
      });
    });
  }

  function spendLevelRace(){
    var g = player(), race = currentRace();
    if (!g || !race || num(g.level_pts) < 1 || num(g.total_lv) >= 100) return;
    if (num(g.race_lv) >= num(race.max_lv)) return;
    g.race_lv = num(g.race_lv) + 1;
    g.level_pts = num(g.level_pts) - 1;
    try { if (isFn(window.checkSkillTier)) window.checkSkillTier("race", race, g.race_lv); } catch(e){}
    safeApply();
    characterStatusV55();
  }
  function spendLevelJob(idx){
    var g = player(), jobs = currentJobs();
    var entry = jobs.filter(function(x){ return x.idx === idx; })[0];
    if (!g || !entry || num(g.level_pts) < 1 || num(g.total_lv) >= 100) return;
    if (num(entry.state.lv) >= num(entry.data.max_lv)) return;
    g.jobs[idx].lv = num(g.jobs[idx].lv) + 1;
    g.level_pts = num(g.level_pts) - 1;
    try { if (isFn(window.checkSkillTier)) window.checkSkillTier(entry.state.id, entry.data, g.jobs[idx].lv); } catch(e){}
    safeApply();
    characterStatusV55();
  }
  function renderLevelUpBlock(){
    var g = player(), race = currentRace(), jobs = currentJobs();
    if (!g) return;
    var pts = num(g.level_pts);
    var div = renderCard('<div class="v55-title">Race & Job Level Up</div><div class="v55-sub">Level Points: ' + pts + ' · Total Level: ' + num(g.total_lv) + ' / 100</div>');
    if (!div) return;
    if (pts < 1) {
      div.innerHTML += '<div class="v55-field" style="margin-top:8px"><b>No Level Points</b>Earn EXP to gain level points, then return here to raise your race or job paths.</div>';
      return;
    }
    if (num(g.total_lv) >= 100) {
      div.innerHTML += '<div class="v55-field" style="margin-top:8px"><b>Level Cap Reached</b>You are already at Total Level 100.</div>';
      return;
    }
    var made = false;
    if (race && num(g.race_lv) < num(race.max_lv)) {
      made = true;
      var rb = document.createElement("button");
      rb.className = "v55-level-btn";
      rb.innerHTML = '<b>Race:</b> ' + esc(race.name) + ' Lv.' + num(g.race_lv) + ' → Lv.' + (num(g.race_lv) + 1) + ' <span style="color:#8fb0cd">(max ' + esc(race.max_lv) + ')</span>';
      rb.onclick = spendLevelRace;
      div.appendChild(rb);
    }
    jobs.forEach(function(entry){
      if (num(entry.state.lv) >= num(entry.data.max_lv)) return;
      made = true;
      var jb = document.createElement("button");
      jb.className = "v55-level-btn";
      jb.innerHTML = '<b>Job:</b> ' + esc(entry.data.name) + ' Lv.' + num(entry.state.lv) + ' → Lv.' + (num(entry.state.lv) + 1) + ' <span style="color:#8fb0cd">(max ' + esc(entry.data.max_lv) + ')</span>';
      jb.onclick = function(){ spendLevelJob(entry.idx); };
      div.appendChild(jb);
    });
    if (!made) {
      div.innerHTML += '<div class="v55-field" style="margin-top:8px"><b>Current Paths Capped</b>Add another class path from the Class Registry to spend more level points.</div>';
    }
  }

  function renderBuildInfo(){
    var g = player(), race = currentRace(), jobs = currentJobs();
    var jobText = jobs.length ? jobs.map(function(x){
      return esc(x.data.name) + ' Lv.' + esc(x.state.lv || 0) + ' / ' + esc(x.data.max_lv || "?") + ' [' + esc(x.data.anime || "Fantasy") + ']';
    }).join("<br>") : "No job selected";
    renderCard(
      '<div class="v55-title">' + esc((g && g.name) || "Hero") + '</div>' +
      '<div class="v55-sub">Race and Job Information</div>' +
      '<div class="v55-grid">' +
        '<div class="v55-field"><b>Race</b>' + (race ? esc(race.name) + ' Lv.' + esc(g.race_lv || 0) + ' / ' + esc(race.max_lv || "?") + '<br>' + esc(race.anime || "Fantasy") : "None") + '</div>' +
        '<div class="v55-field"><b>Jobs</b>' + jobText + '</div>' +
        '<div class="v55-field"><b>Total Build</b>Total Level ' + esc(g.total_lv || 0) + ' / 100<br>Race Levels ' + esc(g.race_lv || 0) + ' · Job Levels ' + esc(jobs.reduce(function(s,x){ return s + num(x.state.lv); },0)) + '</div>' +
        '<div class="v55-field"><b>Resources</b>EXP ' + esc(g.exp || 0) + ' / ' + esc(g.next_exp || 0) + '<br>Level Points ' + esc(g.level_pts || 0) + ' · Stat Points ' + esc(g.stat_pts || 0) + '<br>Gold ' + esc(g.gold || 0) + '</div>' +
      '</div>'
    );
  }
  function spendStat(key){
    var g = player();
    if (!g || num(g.stat_pts) < 1) return;
    if (!g.bonus || typeof g.bonus !== "object") g.bonus = {hp:0,mp:0,pa:0,pd:0,ag:0,ma:0,md:0,rs:0,sp:0};
    g.bonus[key] = num(g.bonus[key]) + 1;
    g.stat_pts = num(g.stat_pts) - 1;
    safeApply();
    characterStatusV55();
  }
  function renderStatusBlock(){
    var g = player();
    if (!g) return;
    var stats = {};
    STAT_KEYS.forEach(function(k){ stats[k] = num(g[STAT_VALUE_KEYS[k]]); });
    var div = renderCard(
      '<div class="v55-title">Character Status</div>' +
      '<div class="v55-sub">Small + buttons spend stat points directly into that stat. Unspent Stat Points: ' + esc(g.stat_pts || 0) + '</div>' +
      statRows(stats, true) +
      '<div class="v55-pill-row">' + STAT_KEYS.map(function(k){
        return '<span class="v55-pill">' + STAT_LABELS[k] + ' bonus: ' + esc((g.bonus && g.bonus[k]) || 0) + '</span>';
      }).join("") + '</div>'
    );
    if (!div) return;
    Array.prototype.slice.call(div.querySelectorAll("[data-v55-stat]")).forEach(function(btn){
      btn.onclick = function(ev){
        ev.preventDefault();
        spendStat(btn.getAttribute("data-v55-stat"));
      };
    });
  }
  function renderMiniClassRegistry(){
    try { if (isFn(window.appendMiniClassRegistry)) window.appendMiniClassRegistry(); } catch(e){}
  }
  function renderUtilityButtons(){
    var rows = [
      ["Review Your Build", window.build_summary_screen],
      ["Skills & Spells", window.skill_screen],
      ["Unlock Tracker", window.unlock_tracker_screen],
      ["Class Registry", window.class_registry_screen],
      ["Titles", window.title_screen],
      ["Set Collection", window.set_collection_screen],
      ["Encyclopedia", window.encyclopedia_screen]
    ];
    rows.forEach(function(row){
      if (!isFn(row[1])) return;
      var b = document.createElement("button");
      b.className = "v55-level-btn";
      b.textContent = row[0];
      b.onclick = row[1];
      choices().appendChild(b);
    });
  }
  function goBack(){
    if (isFn(window.v501_goBack)) return window.v501_goBack();
    if (isFn(window.hub_world_screen)) return window.hub_world_screen();
    if (isFn(window.town_center)) return window.town_center();
    if (isFn(window.main_menu)) return window.main_menu();
  }

  function characterStatusV55(){
    addStyle();
    safeApply();
    safeClear();
    battleOff();
    say("— CHARACTER STATUS —", "highlight");
    say("Level up race/job paths above the status block. Spend stat points with the small + button on each stat row.", "narrator");
    renderPendingPicks();
    renderLevelUpBlock();
    renderBuildInfo();
    renderStatusBlock();
    renderMiniClassRegistry();
    renderUtilityButtons();
    setChoices([["← Back", goBack]]);
  }

  function classRegistryV55(){
    var jd = jobData();
    addStyle();
    safeClear();
    battleOff();
    say("FULL CLASS REGISTRY — ALL JOBS", "highlight");
    say("Every job path uses the updated card layout and unique build note.", "narrator");
    var c = choices();
    Object.keys(groups(jd)).forEach(function(groupName){
      var h = document.createElement("div");
      h.className = "v55-section";
      h.textContent = "— " + groupName + " Jobs —";
      c.appendChild(h);
      groups(jd)[groupName].forEach(function(pair){
        var id = Number(pair[0]), j = pair[1];
        var owned = false, available = true;
        try { owned = isFn(window.ownsJob) ? window.ownsJob(id) : (player().jobs || []).some(function(x){ return Number(x.id) === id; }); } catch(e){}
        try { available = isFn(window.canAddJob) ? window.canAddJob(id) : !owned; } catch(e){ available = !owned; }
        var b = document.createElement("button");
        b.className = "v55-card-btn";
        b.innerHTML = '<div class="v55-sub">' + (owned ? "[OWNED]" : (available ? "[AVAILABLE]" : "[LOCKED]")) + '</div>' + jobCardHTML(id, j);
        b.disabled = !available;
        if (available) {
          b.onclick = function(){
            if (isFn(window.addJobPath)) return window.addJobPath(id);
            var g = player();
            if (g) {
              g.jobs = g.jobs || [];
              g.jobs.push({id:id, lv:0});
              safeApply();
            }
            characterStatusV55();
          };
        }
        c.appendChild(b);
      });
    });
    var back = document.createElement("button");
    back.textContent = "← Back to Character Status";
    back.onclick = characterStatusV55;
    c.appendChild(back);
  }

  function oldSpendButtonsPresent(){
    var c = choices();
    if (!c) return false;
    return /SPEND STAT POINTS|Spend \+1|\+1\s+HP|\+1\s+PHY\.ATK|\+1\s+MAG\.ATK/i.test(c.textContent || "");
  }
  function looksLikeOldCharacterStatus(){
    var o = output(), c = choices();
    var txt = ((o && o.textContent) || "") + " " + ((c && c.textContent) || "");
    return /CHARACTER STATUS|YGGDRASIL BUILD TEMPLATE|Level Breakdown/i.test(txt) && oldSpendButtonsPresent();
  }
  function looksLikeOldRace(){
    var o = output(), c = choices();
    var txt = ((o && o.textContent) || "") + " " + ((c && c.textContent) || "");
    var gameStarted = false;
    try { gameStarted = !!(player() && player().name && player().race_id && Array.isArray(player().jobs) && player().jobs.length); } catch(e){}
    return !gameStarted && /YGGDRASIL\s+—\s+FANTASY RACE REDO|STEP 1:\s*CHOOSE YOUR BASE RACE|CHOOSE YOUR RACE/i.test(txt);
  }
  function safetyPass(){
    try {
      if (looksLikeOldCharacterStatus()) characterStatusV55();
      else if (looksLikeOldRace()) pickRaceV55();
    } catch(e){}
  }

  // Public exports / hard overrides.
  window.byl_v55_version = VERSION;
  window.byl_v55_character_screen = characterStatusV55;
  window.byl_v55_pick_race = pickRaceV55;
  window.byl_v55_pick_job = pickJobV55;
  window.v55_race_card_html = raceCardHTML;
  window.v55_job_card_html = jobCardHTML;

  window.character_screen = characterStatusV55;
  window.character_status_v50 = characterStatusV55;
  window.pick_race = pickRaceV55;
  window.pick_job = pickJobV55;
  window.class_registry_screen = classRegistryV55;

  try { character_screen = characterStatusV55; } catch(e){}
  try { character_status_v50 = characterStatusV55; } catch(e){}
  try { pick_race = pickRaceV55; } catch(e){}
  try { pick_job = pickJobV55; } catch(e){}
  try { class_registry_screen = classRegistryV55; } catch(e){}

  addStyle();
  setTimeout(safetyPass, 0);
  setTimeout(safetyPass, 150);
  setTimeout(safetyPass, 600);

  if (!window.__byl_v55_observer) {
    window.__byl_v55_observer = true;
    try {
      var obs = new MutationObserver(function(){ clearTimeout(window.__byl_v55_timer); window.__byl_v55_timer = setTimeout(safetyPass, 30); });
      if (choices()) obs.observe(choices(), {childList:true, subtree:true, characterData:true});
      if (output()) obs.observe(output(), {childList:true, subtree:true, characterData:true});
    } catch(e){}
  }
})();
