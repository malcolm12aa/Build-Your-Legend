// ═══════════════════════════════════════════════════════════════
// v0.52 — Build Notes + Character Status Level-Up UI
// Appended override patch. Load after 11_v50_1_requested_fixes.js.
// - Race cards and job cards share one full card layout.
// - Race/job build notes are generated from each path's own name,
//   world/category, role keywords, stats, weapons, and starter abilities.
// - Character Status shows race/job level-up controls above the status block.
// - Stat spending moves into small + buttons on the right side of each stat row.
// ═══════════════════════════════════════════════════════════════
(function installV52BuildNotesAndCharacterStatus(){
  "use strict";

  var VERSION = "v0.52-build-notes-character-status";
  var STAT_KEYS = ["hp","mp","pa","pd","ag","ma","md","rs","sp"];
  var STAT_LABELS = {
    hp:"HP", mp:"MP", pa:"PHY.ATK", pd:"PHY.DEF", ag:"AGI",
    ma:"MAG.ATK", md:"MAG.DEF", rs:"RESIST", sp:"SPECIAL"
  };
  var STAT_LONG = {
    hp:"Hit Points", mp:"Mana Points", pa:"Physical Attack", pd:"Physical Defense",
    ag:"Agility", ma:"Magic Attack", md:"Magic Defense", rs:"Resistance", sp:"Special"
  };

  function $(id){ return document.getElementById(id); }
  function out(){ return $("output"); }
  function ch(){ return $("choices"); }
  function hasFn(fn){ return typeof fn === "function"; }
  function esc(x){
    return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }
  function lower(x){ return String(x || "").toLowerCase(); }
  function cap(x){ return String(x || "").replace(/[_-]/g," ").replace(/\b\w/g,function(c){ return c.toUpperCase(); }); }
  function clamp(n,a,b){ return Math.max(a, Math.min(b, n)); }
  function safeClear(){
    try { if (typeof window.clearOutput === "function") window.clearOutput(); else if (out()) out().innerHTML = ""; } catch(e){ if (out()) out().innerHTML = ""; }
    if (ch()) ch().innerHTML = "";
  }
  function panelOff(){ try { if (typeof window.showBattlePanel === "function") window.showBattlePanel(false); } catch(e){} }
  function say(text, cls){ try { if (typeof window.print === "function") window.print(text, cls || "narrator"); } catch(e){} }
  function safeApply(){
    try { if (typeof window.applyStats === "function") window.applyStats(); } catch(e){}
    try { if (typeof window.updateStats === "function") window.updateStats(); } catch(e){}
  }
  function setChoices(list){
    var c = ch(); if (!c) return;
    c.innerHTML = "";
    list.forEach(function(item){
      var b = document.createElement("button");
      b.textContent = item[0];
      b.onclick = item[1];
      c.appendChild(b);
    });
  }
  function goBack(){
    if (hasFn(window.v501_goBack)) return window.v501_goBack();
    if (hasFn(window.hub_world_screen)) return window.hub_world_screen();
    try { if (typeof window.town_center === "function" && G && G.name) return window.town_center(); } catch(e){}
    try { if (typeof window.main_menu === "function") return window.main_menu(); } catch(e){}
  }

  function addStyle(){
    if ($("v52-build-status-style")) return;
    var st = document.createElement("style");
    st.id = "v52-build-status-style";
    st.textContent = `
      .v52-section{
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
      .v52-card-btn,
      .v52-card{
        width:100%;
        text-align:left!important;
        white-space:normal!important;
        border:1px solid #224062;
        background:linear-gradient(180deg,#071220,#050810);
        padding:12px;
        margin:9px 0;
        line-height:1.55;
        box-sizing:border-box;
      }
      .v52-card-btn{
        cursor:pointer;
        display:block!important;
      }
      .v52-card-btn:hover,
      .v52-card-btn:focus{
        border-color:#e8c84a;
        box-shadow:0 0 0 1px rgba(232,200,74,.3), 0 0 18px rgba(232,200,74,.08);
      }
      .v52-card-title{
        color:#e8c84a;
        font-weight:900;
        font-size:15px;
        letter-spacing:.6px;
        margin-bottom:2px;
      }
      .v52-card-meta{
        color:#48cae4;
        font-size:11px;
        margin-bottom:8px;
      }
      .v52-desc{
        color:#c0d0e0;
        font-size:11px;
        line-height:1.6;
        margin:7px 0;
      }
      .v52-grid{
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:8px;
        margin-top:8px;
      }
      .v52-field{
        background:#070d15;
        border:1px solid #18324c;
        padding:8px;
        color:#bdd0e4;
        font-size:11px;
        line-height:1.55;
      }
      .v52-field b{
        display:block;
        color:#e8c84a;
        font-size:10px;
        text-transform:uppercase;
        letter-spacing:.8px;
        margin-bottom:3px;
      }
      .v52-stat-layout{
        border:1px solid #18324c;
        background:#050810;
        padding:9px;
        margin:9px 0;
      }
      .v52-stat-row{
        display:grid;
        grid-template-columns:minmax(82px,118px) minmax(0,1fr) minmax(38px,auto) minmax(28px,auto);
        align-items:center;
        gap:7px;
        border:1px solid #12283d;
        background:#060b13;
        padding:6px 7px;
        margin:5px 0;
      }
      .v52-stat-label{
        color:#8fb0cd;
        font-size:10px;
        font-weight:800;
        letter-spacing:.7px;
        text-transform:uppercase;
      }
      .v52-stat-track{
        height:9px;
        border:1px solid #193451;
        background:#05060a;
        overflow:hidden;
      }
      .v52-stat-fill{
        height:100%;
        background:linear-gradient(90deg,#274d7a,#e8c84a);
      }
      .v52-stat-value{
        color:#e8c84a;
        font-weight:900;
        font-size:11px;
        text-align:right;
      }
      .v52-plus{
        width:26px!important;
        min-width:26px!important;
        height:24px!important;
        min-height:24px!important;
        padding:0!important;
        margin:0!important;
        border-radius:4px!important;
        text-align:center!important;
        font-size:15px!important;
        line-height:22px!important;
        color:#050810!important;
        background:#e8c84a!important;
        border:1px solid #ffe680!important;
        box-shadow:none!important;
      }
      .v52-plus:disabled{
        opacity:.35;
        filter:grayscale(.5);
        cursor:not-allowed;
      }
      .v52-level-btn{
        width:100%;
        text-align:left!important;
        white-space:normal!important;
        padding:9px 10px!important;
        margin:5px 0!important;
        border:1px solid #2a4b6e!important;
        background:linear-gradient(180deg,#0a1626,#060b13)!important;
      }
      .v52-level-btn b{ color:#e8c84a; }
      .v52-small{
        color:#8fb0cd;
        font-size:10px;
        line-height:1.45;
        margin-top:5px;
      }
      .v52-pill-row{
        display:flex;
        flex-wrap:wrap;
        gap:5px;
        margin-top:7px;
      }
      .v52-pill{
        display:inline-block;
        border:1px solid #18324c;
        background:#050810;
        color:#bdd0e4;
        padding:3px 6px;
        font-size:10px;
        line-height:1.2;
      }
      @media(max-width:700px){
        .v52-grid{grid-template-columns:1fr}
        .v52-card,.v52-card-btn{padding:10px}
        .v52-stat-row{
          grid-template-columns:minmax(72px,92px) minmax(0,1fr) minmax(34px,auto) minmax(28px,auto);
          gap:5px;
        }
      }
    `;
    document.head.appendChild(st);
  }

  function entryText(e){ return lower((e && e.name) + " " + (e && e.desc) + " " + (e && e.anime) + " " + (e && e.class_tier)); }

  function roleFor(e, kind){
    var b = entryText(e);
    if (/angel|saint|cleric|priest|holy|heal|miko|oracle|paladin|light/.test(b)) return "Holy Support";
    if (/dwarf|golem|stone|iron|armor|armou?r|shield|guardian|tank|defender|wall|titan/.test(b)) return "Defensive Vanguard";
    if (/orc|giant|oni|berserk|warrior|fighter|brute|dragon|beast|wolf|martial|brawler|monk/.test(b)) return "Physical Powerhouse";
    if (/rogue|thief|assassin|ninja|scout|ranger|hunter|archer|cat|fox|goblin|halfling|step|speed|shadow/.test(b)) return "Agile Striker";
    if (/elf|fairy|spirit|mage|magic|spell|arcane|wizard|sorcerer|witch|mana|element/.test(b)) return "Mystic Caster";
    if (/demon|devil|dark|curse|abyss|undead|vampire|hollow|death|blood|necromancer|warlock/.test(b)) return "Dark Hybrid";
    if (/craft|forge|artificer|alchemist|engineer|invent|seal|sigil/.test(b)) return "Technical Builder";
    if (/human|hero|adapt|balanced|adventurer/.test(b)) return "Flexible All-Rounder";
    return kind === "race" ? "Fantasy Origin" : "Hybrid Adventurer";
  }

  function weaponList(e){
    var b = entryText(e), w = [];
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

  function statPackage(e){
    var outStats = {}, base = (e && e.base) || {}, per = (e && e.per_lv) || {}, lv = Number((e && e.max_lv) || 1);
    STAT_KEYS.forEach(function(k){
      var b = Number(base[k] || 0);
      var p = Number(per[k] || 0);
      outStats[k] = Math.max(0, Math.round(b + p * Math.max(1, lv)));
    });
    return outStats;
  }

  function statTotal(stats){
    return STAT_KEYS.reduce(function(sum,k){ return sum + Number(stats[k] || 0); }, 0);
  }
  function topStats(stats, n){
    return STAT_KEYS.slice().sort(function(a,b){ return (stats[b]||0) - (stats[a]||0); }).slice(0,n || 3);
  }
  function lowStats(stats, n){
    return STAT_KEYS.slice().sort(function(a,b){ return (stats[a]||0) - (stats[b]||0); }).slice(0,n || 2);
  }
  function labelList(keys){ return keys.map(function(k){ return STAT_LABELS[k]; }).join(", "); }

  function statRowsHTML(stats, allowPlus){
    var max = Math.max.apply(null, STAT_KEYS.map(function(k){ return Number(stats[k] || 0); }).concat([1]));
    var html = '<div class="v52-stat-layout"><div class="v52-field" style="margin-bottom:7px"><b>Status Layout</b>Cap-scaled contribution from this path.</div>';
    STAT_KEYS.forEach(function(k){
      var v = Number(stats[k] || 0);
      var pct = clamp(Math.round((v / max) * 100), 3, 100);
      html += '<div class="v52-stat-row">' +
        '<div class="v52-stat-label">'+STAT_LABELS[k]+'</div>' +
        '<div class="v52-stat-track"><div class="v52-stat-fill" style="width:'+pct+'%"></div></div>' +
        '<div class="v52-stat-value">'+v+'</div>' +
        (allowPlus ? '<button class="v52-plus" data-v52-stat="'+k+'" '+((G && G.stat_pts > 0) ? '' : 'disabled')+'>+</button>' : '<span></span>') +
        '</div>';
    });
    html += '<div class="v52-small">BST: '+statTotal(stats)+'</div></div>';
    return html;
  }

  function skillsAtLevel(e, level){
    var found = [];
    try {
      (e.skills || []).forEach(function(tier){
        if (Number(tier[0]) === Number(level)) {
          (tier[1] || []).forEach(function(sk){ found.push(sk); });
        }
      });
    } catch(err){}
    return found;
  }

  function abilityNames(list, markStarting){
    if (!list || !list.length) return "None listed";
    return list.map(function(sk){
      var type = sk && sk.type === "p" ? "Passive" : ((sk && sk.mp) ? "Skill/Spell" : "Skill");
      return (markStarting ? "* " : "") + esc(sk && sk.name ? sk.name : "Unnamed Ability") + " [" + type + "]";
    }).join(" / ");
  }

  function nextAbilityText(e){
    var tiers = [];
    try {
      (e.skills || []).forEach(function(t){ if (Number(t[0]) > 1) tiers.push(Number(t[0])); });
    } catch(err){}
    tiers.sort(function(a,b){ return a-b; });
    if (!tiers.length) return "No later tier listed";
    var lv = tiers[0];
    return "Lv." + lv + ": " + abilityNames(skillsAtLevel(e, lv), false);
  }

  function evolutionText(r){
    var paths = null;
    try { paths = window.FANTASY_RACE_PATHS_V07 && window.FANTASY_RACE_PATHS_V07[r.name]; } catch(e){}
    if (!paths || !paths.length) return "Two evolution branches unlock after maxing this base race.";
    return paths.map(function(p){
      var names = (p.stages || []).map(function(s){ return s.name; }).join(" → ");
      return esc(p.branch || "Evolution Path") + ": " + esc(names);
    }).join("<br>");
  }

  function uniqueHook(e, kind, role){
    var b = entryText(e), name = e && e.name ? e.name : (kind === "race" ? "This race" : "This job");
    if (/human|adapt|balanced|adventurer/.test(b)) return name + " rewards flexible builds that pivot after seeing your first rare unlocks.";
    if (/elf|forest|fairy|spirit|nature/.test(b)) return name + " wants clean tempo: control the fight, preserve MP, and let precision or magic decide the battle.";
    if (/dark|drow|shadow|curse|abyss|demon|devil|vampire|undead|hollow/.test(b)) return name + " plays best when you stack pressure, debuffs, and resistance instead of chasing pure defense.";
    if (/dwarf|forge|craft|golem|iron|stone|armor|shield/.test(b)) return name + " is a foundation for slow, safe wins: armor, mitigation, crafting value, and front-line control.";
    if (/orc|giant|oni|berserk|dragon|beast|wolf|brute/.test(b)) return name + " wants momentum: raise damage first, then add enough defense that you can keep swinging.";
    if (/halfling|goblin|cat|fox|rogue|thief|assassin|ninja|scout|hunter|archer/.test(b)) return name + " benefits from speed, setup, and burst windows rather than trading hits fairly.";
    if (/angel|holy|saint|cleric|priest|heal|barrier|paladin|oracle/.test(b)) return name + " shines when you turn survivability into advantage through healing, barriers, and clean counters.";
    if (/mage|wizard|sorcerer|witch|arcane|spell|mana|element/.test(b)) return name + " scales hardest with MP and MAG.ATK, but needs protection from fast physical enemies.";
    if (/seal|sigil|artificer|alchemist|engineer|invent|trap/.test(b)) return name + " is strongest when played as a planner: invest in SPECIAL, utility, and support paths that multiply each turn.";
    return name + " is a " + role.toLowerCase() + " path; commit to its best stats early, then use later paths to patch its weakest matchup.";
  }

  function raceBuildNote(r, stats){
    var role = roleFor(r, "race");
    var top = topStats(stats, 3), low = lowStats(stats, 2);
    var start = abilityNames(skillsAtLevel(r, 1), true);
    var hook = uniqueHook(r, "race", role);
    return hook + " Build around " + labelList(top) + ", then use your first job to cover " + labelList(low) +
      ". Maxing the base race is worth it before evolution because it preserves the identity of " + esc(r.name) +
      " while opening stronger branch choices. Starting ability: " + start + ".";
  }

  function jobBuildNote(j, stats){
    var role = roleFor(j, "job");
    var top = topStats(stats, 3), low = lowStats(stats, 2);
    var weapons = weaponList(j).join(" / ");
    var tier = j.class_tier || j.tier || "Base";
    var start = abilityNames(skillsAtLevel(j, 1), true);
    var hook = uniqueHook(j, "job", role);
    return hook + " As a " + esc(tier) + " job, it should push " + labelList(top) +
      " while your race or next class covers " + labelList(low) + ". Favor " + esc(weapons) +
      " and abilities that reinforce " + esc(role) + ". Starting ability: " + start +
      ". Next growth: " + nextAbilityText(j) + ".";
  }

  function raceCard(id, r){
    var stats = statPackage(r), role = roleFor(r, "race"), top = topStats(stats,2), low = lowStats(stats,2);
    return '' +
      '<div class="v52-card-title">▸ '+esc(r.name)+'</div>' +
      '<div class="v52-card-meta">Base Race · '+esc(r.anime || "Fantasy")+' · Max Level: '+esc(r.max_lv || "?")+' · Role: '+esc(role)+' · BST '+statTotal(stats)+'</div>' +
      statRowsHTML(stats, false) +
      '<div class="v52-desc"><b>Unique Description:</b> '+esc(r.desc || "")+'</div>' +
      '<div class="v52-grid">' +
        '<div class="v52-field"><b>Evolution Paths</b>'+evolutionText(r)+'</div>' +
        '<div class="v52-field"><b>Core Identity</b>'+esc(role)+' origin with '+labelList(top)+' as its natural lead stats.</div>' +
        '<div class="v52-field"><b>Strengths</b>Excels at '+labelList(top)+'.</div>' +
        '<div class="v52-field"><b>Weaknesses</b>Lower '+labelList(low)+'.</div>' +
        '<div class="v52-field"><b>Starting Ability</b>'+abilityNames(skillsAtLevel(r, 1), true)+'</div>' +
        '<div class="v52-field"><b>Next Ability</b>'+nextAbilityText(r)+'</div>' +
      '</div>' +
      '<div class="v52-field" style="margin-top:8px"><b>Unique Build Note</b>'+raceBuildNote(r, stats)+'</div>';
  }

  function jobCard(id, j){
    var stats = statPackage(j), role = roleFor(j, "job"), top = topStats(stats,2), low = lowStats(stats,2);
    var tier = j.class_tier || j.tier || "Base";
    return '' +
      '<div class="v52-card-title">▸ '+esc(j.name)+'</div>' +
      '<div class="v52-card-meta">'+esc(tier)+' Job · '+esc(j.anime || "Fantasy")+' · Max Level: '+esc(j.max_lv || "?")+' · Role: '+esc(role)+' · BST '+statTotal(stats)+'</div>' +
      statRowsHTML(stats, false) +
      '<div class="v52-desc"><b>Unique Description:</b> '+esc(j.desc || "")+'</div>' +
      '<div class="v52-grid">' +
        '<div class="v52-field"><b>Weapon/s</b>'+esc(weaponList(j).join(" / "))+'</div>' +
        '<div class="v52-field"><b>Starter Skills / Spells</b>'+abilityNames(skillsAtLevel(j, 1), true)+'</div>' +
        '<div class="v52-field"><b>Strengths</b>'+esc(role)+' focused; excels at '+labelList(top)+'.</div>' +
        '<div class="v52-field"><b>Weaknesses</b>Lower '+labelList(low)+'.</div>' +
        '<div class="v52-field"><b>Next Ability</b>'+nextAbilityText(j)+'</div>' +
        '<div class="v52-field"><b>Class Role</b>'+esc(role)+' · '+esc(tier)+' path.</div>' +
      '</div>' +
      '<div class="v52-field" style="margin-top:8px"><b>Unique Build Note</b>'+jobBuildNote(j, stats)+'</div>';
  }

  function groups(data, filter){
    var g = {};
    Object.entries(data || {}).forEach(function(pair){
      var id = pair[0], e = pair[1];
      if (filter && !filter(id, e)) return;
      var key = e.anime || e.category || "Fantasy";
      if (!g[key]) g[key] = [];
      g[key].push([id, e]);
    });
    return g;
  }

  function isBaseJobV52(id, j){
    if (!j) return false;
    var tier = lower(j.class_tier || j.tier || "Base");
    var b = entryText(j);
    if (/race evolution/.test(b)) return false;
    if (/advanced|specialist|rare|hidden|evolution/.test(tier)) return false;
    var req = j.req || j.prereq || {};
    if (req && typeof req === "object" && Object.keys(req).length > 0) return false;
    return !tier || tier === "base";
  }

  function pickRaceV52(){
    addStyle();
    safeClear();
    panelOff();
    say("RACE SELECTION — BASE PROFILE", "highlight");
    say("Choose your starting race. Race cards now use the same full layout as job selection.", "narrator");
    var c = ch(); if (!c) return;
    c.innerHTML = "";
    Object.entries(groups(RACE_DATA)).forEach(function(group){
      var h = document.createElement("div");
      h.className = "v52-section";
      h.textContent = "— " + group[0] + " Races —";
      c.appendChild(h);
      group[1].forEach(function(pair){
        var id = pair[0], r = pair[1];
        var b = document.createElement("button");
        b.className = "v52-card-btn";
        b.innerHTML = raceCard(id, r);
        b.onclick = function(){
          G.race_id = Number(id);
          pickJobV52();
        };
        c.appendChild(b);
      });
    });
  }

  function pickJobV52(){
    addStyle();
    safeClear();
    panelOff();
    var race = RACE_DATA && RACE_DATA[G.race_id] ? RACE_DATA[G.race_id] : null;
    say("Race: " + (race ? race.name : "Unknown") + " [" + (race ? race.anime : "—") + "]", "highlight");
    say("JOB SELECTION — BASE JOBS ONLY", "highlight");
    say("Choose your starting base job. Job cards use the same full layout as race cards.", "narrator");
    var c = ch(); if (!c) return;
    c.innerHTML = "";
    Object.entries(groups(JOB_DATA, isBaseJobV52)).forEach(function(group){
      var h = document.createElement("div");
      h.className = "v52-section";
      h.textContent = "— " + group[0] + " Base Jobs —";
      c.appendChild(h);
      group[1].forEach(function(pair){
        var id = pair[0], j = pair[1];
        var b = document.createElement("button");
        b.className = "v52-card-btn";
        b.innerHTML = jobCard(id, j);
        b.onclick = function(){
          G.jobs = [{id:Number(id), lv:1}];
          if (typeof window.your_character === "function") window.your_character();
        };
        c.appendChild(b);
      });
    });
    var back = document.createElement("button");
    back.textContent = "← Back to Race Selection";
    back.onclick = pickRaceV52;
    c.appendChild(back);
  }

  function classRegistryV52(){
    addStyle();
    safeClear();
    panelOff();
    say("FULL CLASS REGISTRY — ALL JOBS", "highlight");
    say("Every job path uses the updated card layout and unique build note. Owned paths are marked; available paths can be added.", "narrator");
    var c = ch(); if (!c) return;
    c.innerHTML = "";
    Object.entries(groups(JOB_DATA)).forEach(function(group){
      var h = document.createElement("div");
      h.className = "v52-section";
      h.textContent = "— " + group[0] + " Jobs —";
      c.appendChild(h);
      group[1].forEach(function(pair){
        var id = Number(pair[0]), j = pair[1];
        var owned = false, available = true;
        try { owned = typeof window.ownsJob === "function" ? window.ownsJob(id) : (G.jobs || []).some(function(x){ return Number(x.id) === id; }); } catch(e){}
        try { available = typeof window.canAddJob === "function" ? window.canAddJob(id) : !owned; } catch(e){ available = !owned; }
        var b = document.createElement("button");
        b.className = "v52-card-btn";
        b.innerHTML = '<div class="v52-card-meta">'+(owned ? "[OWNED]" : (available ? "[AVAILABLE]" : "[LOCKED]"))+'</div>' + jobCard(id, j);
        b.disabled = !available;
        if (available) {
          b.onclick = function(){
            if (typeof window.addJobPath === "function") return window.addJobPath(id);
            G.jobs = G.jobs || [];
            G.jobs.push({id:id, lv:0});
            safeApply();
            charStatusV52();
          };
        }
        c.appendChild(b);
      });
    });
    var back = document.createElement("button");
    back.textContent = "← Back to Character Status";
    back.onclick = charStatusV52;
    c.appendChild(back);
  }

  function currentRace(){
    try { return G && G.race_id && RACE_DATA ? RACE_DATA[G.race_id] : null; } catch(e){ return null; }
  }
  function jobEntries(){
    try { return (G.jobs || []).map(function(j, idx){ return {idx:idx, state:j, data:JOB_DATA[j.id]}; }).filter(function(x){ return !!x.data; }); } catch(e){ return []; }
  }
  function currentWeaponText(){
    try { return G.weapon && G.weapon.name ? G.weapon.name : "Unarmed"; } catch(e){ return "Unarmed"; }
  }

  function renderCard(html){
    var d = document.createElement("div");
    d.className = "v52-card";
    d.innerHTML = html;
    if (out()) out().appendChild(d);
    return d;
  }

  function renderLevelButtons(){
    var race = currentRace();
    var jobs = jobEntries();
    var pts = Number((G && G.level_pts) || 0);
    var total = Number((G && G.total_lv) || 0);
    var html = '<div class="v52-card-title">Race & Job Level Up</div>' +
      '<div class="v52-card-meta">Level Points: '+pts+' · Total Level: '+total+' / 100</div>';
    var div = renderCard(html);
    if (!div) return;

    if (!pts || total >= 100) {
      div.innerHTML += '<div class="v52-small">No level points available right now. Earn EXP to gain level points, then return here to raise your race or job paths.</div>';
      return;
    }

    var made = false;
    if (race && Number(G.race_lv || 0) < Number(race.max_lv || 0)) {
      made = true;
      var rb = document.createElement("button");
      rb.className = "v52-level-btn";
      rb.innerHTML = '<b>Race:</b> '+esc(race.name)+' Lv.'+(G.race_lv || 0)+' → Lv.'+(Number(G.race_lv || 0)+1)+' <span class="v52-small">(max '+esc(race.max_lv)+')</span>';
      rb.onclick = function(){
        if ((G.level_pts || 0) < 1 || (G.total_lv || 0) >= 100) return;
        G.race_lv = Number(G.race_lv || 0) + 1;
        G.level_pts = Number(G.level_pts || 0) - 1;
        try { if (typeof window.checkSkillTier === "function") window.checkSkillTier("race", race, G.race_lv); } catch(e){}
        safeApply();
        charStatusV52();
      };
      div.appendChild(rb);
    }

    jobs.forEach(function(entry){
      var jd = entry.data, js = entry.state;
      if (!jd || Number(js.lv || 0) >= Number(jd.max_lv || 0)) return;
      made = true;
      var jb = document.createElement("button");
      jb.className = "v52-level-btn";
      jb.innerHTML = '<b>Job:</b> '+esc(jd.name)+' Lv.'+(js.lv || 0)+' → Lv.'+(Number(js.lv || 0)+1)+' <span class="v52-small">(max '+esc(jd.max_lv)+')</span>';
      jb.onclick = function(){
        if ((G.level_pts || 0) < 1 || (G.total_lv || 0) >= 100) return;
        G.jobs[entry.idx].lv = Number(G.jobs[entry.idx].lv || 0) + 1;
        G.level_pts = Number(G.level_pts || 0) - 1;
        try { if (typeof window.checkSkillTier === "function") window.checkSkillTier(js.id, jd, G.jobs[entry.idx].lv); } catch(e){}
        safeApply();
        charStatusV52();
      };
      div.appendChild(jb);
    });

    if (!made) {
      div.innerHTML += '<div class="v52-small">All current race/job paths are capped. Add another class path from the Class Registry to spend more level points.</div>';
    }
  }

  function renderPendingPicks(){
    try {
      if (!Array.isArray(G.pending_skill_picks) || !G.pending_skill_picks.length) return;
      G.pending_skill_picks.forEach(function(pick, pickIdx){
        var sourceName = pick.src === "race" ? (currentRace() && currentRace().name) : (JOB_DATA[pick.src] && JOB_DATA[pick.src].name);
        var div = renderCard('<div class="v52-card-title">Choose Skill / Spell</div><div class="v52-card-meta">Lv.'+esc(pick.tier)+' · '+esc(sourceName || "Unknown Path")+'</div>');
        (pick.opts || []).forEach(function(sk){
          var b = document.createElement("button");
          b.className = "v52-level-btn";
          b.innerHTML = '<b>'+esc(sk.name)+'</b><br><span class="v52-small">'+esc(sk.type === "p" ? "Passive" : ((sk.mp || 0) + " MP"))+' · '+esc(sk.desc || "")+'</span>';
          b.onclick = function(){
            G.learned_skills = G.learned_skills || [];
            if (!G.learned_skills.some(function(x){ return x && x.id === sk.id; })) G.learned_skills.push(sk);
            G.pending_skill_picks.splice(pickIdx, 1);
            safeApply();
            charStatusV52();
          };
          div.appendChild(b);
        });
      });
    } catch(e){}
  }

  function renderBuildInfo(){
    var race = currentRace();
    var jobs = jobEntries();
    var jobText = jobs.length ? jobs.map(function(x){
      return esc(x.data.name)+' Lv.'+esc(x.state.lv || 0)+' / '+esc(x.data.max_lv || "?")+' ['+esc(x.data.anime || "Fantasy")+']';
    }).join("<br>") : "No job selected";
    renderCard(
      '<div class="v52-card-title">'+esc((G && G.name) || "Hero")+'</div>' +
      '<div class="v52-card-meta">Race and Job Information</div>' +
      '<div class="v52-grid">' +
        '<div class="v52-field"><b>Race</b>'+(race ? esc(race.name)+' Lv.'+esc(G.race_lv || 0)+' / '+esc(race.max_lv || "?")+'<br>'+esc(race.anime || "Fantasy") : "None")+'</div>' +
        '<div class="v52-field"><b>Jobs</b>'+jobText+'</div>' +
        '<div class="v52-field"><b>Total Build</b>Total Level '+esc(G.total_lv || 0)+' / 100<br>Race Levels '+esc(G.race_lv || 0)+' · Job Levels '+esc(jobs.reduce(function(s,x){ return s + Number(x.state.lv || 0); },0))+'</div>' +
        '<div class="v52-field"><b>Resources</b>EXP '+esc(G.exp || 0)+' / '+esc(G.next_exp || 0)+'<br>Level Points '+esc(G.level_pts || 0)+' · Stat Points '+esc(G.stat_pts || 0)+'<br>Weapon: '+esc(currentWeaponText())+'</div>' +
      '</div>'
    );
  }

  function spendStatKey(key){
    if (!G || (G.stat_pts || 0) < 1) return;
    if (!G.bonus || typeof G.bonus !== "object") G.bonus = {hp:0,mp:0,pa:0,pd:0,ag:0,ma:0,md:0,rs:0,sp:0};
    G.bonus[key] = Number(G.bonus[key] || 0) + 1;
    G.stat_pts = Number(G.stat_pts || 0) - 1;
    safeApply();
    charStatusV52();
  }

  function renderStatusBlock(){
    var stats = {
      hp: G.max_hp || 0, mp: G.max_mp || 0, pa: G.phy_atk || 0, pd: G.phy_def || 0,
      ag: G.agi || 0, ma: G.mag_atk || 0, md: G.mag_def || 0, rs: G.resist || 0, sp: G.special || 0
    };
    var div = renderCard(
      '<div class="v52-card-title">Character Status</div>' +
      '<div class="v52-card-meta">Small + buttons spend stat points directly into that stat. Unspent Stat Points: '+esc(G.stat_pts || 0)+'</div>' +
      statRowsHTML(stats, true) +
      '<div class="v52-pill-row">'+STAT_KEYS.map(function(k){ return '<span class="v52-pill">'+STAT_LABELS[k]+' bonus: '+esc((G.bonus && G.bonus[k]) || 0)+'</span>'; }).join("")+'</div>'
    );
    Array.prototype.slice.call(div.querySelectorAll("[data-v52-stat]")).forEach(function(btn){
      btn.onclick = function(ev){
        ev.preventDefault();
        spendStatKey(btn.getAttribute("data-v52-stat"));
      };
    });
  }

  function renderUtilityButtons(){
    var buttons = [
      ["Review Your Build","Race path, job path, role, weapons, strongest stats, and next goals.", window.build_summary_screen],
      ["Skills & Spells","Review learned Physical Skills, Magic Spells, passives, and ability shops.", window.skill_screen],
      ["Unlock Tracker","See which Unique and Ultimate abilities you are close to unlocking.", window.unlock_tracker_screen],
      ["Class Registry","Add class paths and inspect every job card with its unique build note.", classRegistryV52],
      ["Titles","Equip unlocked title prefixes.", window.title_screen],
      ["Set Collection","Track set pieces, bonuses, sources, and build recommendations.", window.set_collection_screen],
      ["Encyclopedia","Read about stats, ranks, tiers, races, jobs, Battle Towers, saves, and more.", window.encyclopedia_screen]
    ];
    buttons.forEach(function(row){
      var fn = hasFn(row[2]) ? row[2] : null;
      if (!fn) return;
      var d = document.createElement("div");
      d.className = "v52-card-btn";
      d.tabIndex = 0;
      d.setAttribute("role","button");
      d.innerHTML = '<div class="v52-card-title">'+esc(row[0])+'</div><div class="v52-desc">'+esc(row[1])+'</div>';
      d.onclick = fn;
      d.onkeydown = function(e){ if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } };
      if (out()) out().appendChild(d);
    });
  }

  function charStatusV52(){
    addStyle();
    safeApply();
    safeClear();
    panelOff();
    say("— CHARACTER STATUS —", "highlight");
    say("Level up race/job paths above the status block. Spend stat points with the small + buttons on each stat row.", "narrator");

    renderPendingPicks();
    renderLevelButtons();
    renderBuildInfo();
    renderStatusBlock();

    try {
      if (typeof window.appendMiniClassRegistry === "function") window.appendMiniClassRegistry();
    } catch(e){}

    renderUtilityButtons();
    setChoices([["← Back", goBack]]);
  }

  function rerenderOldRaceIfNeeded(){
    try {
      var o = out(), c = ch();
      if (!o || !c) return;
      var txt = (o.textContent || "") + " " + (c.textContent || "");
      var hasOldRace = /YGGDRASIL\s+—\s+FANTASY RACE REDO|STEP 1:\s*CHOOSE YOUR BASE RACE|CHOOSE YOUR RACE/i.test(txt);
      var hasNewCard = !!c.querySelector(".v52-card-btn,.v501-select");
      var gameStarted = !!(G && G.name && G.race_id && Array.isArray(G.jobs) && G.jobs.length);
      if (hasOldRace && !hasNewCard && !gameStarted) pickRaceV52();
    } catch(e){}
  }

  // Export overrides.
  window.v52_race_card_html = raceCard;
  window.v52_job_card_html = jobCard;
  window.pick_race = pickRaceV52;
  window.pick_job = pickJobV52;
  window.character_screen = charStatusV52;
  window.character_status_v50 = charStatusV52;
  window.class_registry_screen = classRegistryV52;
  try { pick_race = pickRaceV52; } catch(e){}
  try { pick_job = pickJobV52; } catch(e){}
  try { character_screen = charStatusV52; } catch(e){}
  try { class_registry_screen = classRegistryV52; } catch(e){}

  addStyle();
  setTimeout(rerenderOldRaceIfNeeded, 0);
  setTimeout(rerenderOldRaceIfNeeded, 150);
})();
