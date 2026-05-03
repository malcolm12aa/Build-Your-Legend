// ═══════════════════════════════════════════════════════════════
// v0.31 — Race & Job Layout Redo
// Rebuilds race/job display cards with Max Level, Status/BST,
// unique descriptions, strengths/weaknesses, job weapons,
// build notes, and starter skills.
// ═══════════════════════════════════════════════════════════════
(function installV31RaceJobLayoutRedo(){
  "use strict";

  var STAT_KEYS = ["hp","mp","pa","pd","ag","ma","md","rs","sp"];
  var STAT_LABELS = {
    hp:"HP",
    mp:"MP",
    pa:"PHY.ATK",
    pd:"PHY.DEF",
    ag:"AGI",
    ma:"MAG.ATK",
    md:"MAG.DEF",
    rs:"RESIST",
    sp:"SPECIAL"
  };

  function addV31Style(){
    if (document.getElementById("v31-race-job-layout-style")) return;

    var style = document.createElement("style");
    style.id = "v31-race-job-layout-style";
    style.textContent = `
      .v31-section-header{
        margin:12px 0 6px;
        padding:7px 10px;
        background:linear-gradient(90deg,#12082a,#090e1c);
        border-left:3px solid #e8c84a;
        color:#e8c84a;
        font-family:"Cinzel Decorative",serif;
        font-size:11px;
        letter-spacing:2px;
        text-transform:uppercase;
      }

      .v31-card-btn{
        display:block !important;
        width:100% !important;
        text-align:left !important;
        white-space:normal !important;
        line-height:1.45 !important;
        padding:12px !important;
        margin:7px 0 !important;
        border:1px solid #1c3354 !important;
        background:linear-gradient(180deg,#07101d,#050810) !important;
      }

      .v31-card-title{
        color:#e8c84a;
        font-weight:900;
        font-size:15px;
        letter-spacing:.6px;
        margin-bottom:3px;
      }

      .v31-card-meta{
        color:#48cae4;
        font-size:11px;
        margin-bottom:7px;
      }

      .v31-card-desc{
        color:#c0d0e0;
        font-size:11px;
        line-height:1.55;
        margin:6px 0;
      }

      .v31-grid{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:5px;
        margin:8px 0;
      }

      .v31-field{
        background:#07090f;
        border:1px solid #111d2e;
        padding:6px 7px;
        color:#8aaac8;
        font-size:11px;
      }

      .v31-field b{
        display:block;
        color:#e8c84a;
        font-size:10px;
        letter-spacing:.7px;
        text-transform:uppercase;
        margin-bottom:2px;
      }

      .v31-stat-grid{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:5px;
        margin:8px 0;
      }

      .v31-stat{
        background:#050810;
        border:1px solid #111d2e;
        padding:6px;
      }

      .v31-stat-top{
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:6px;
        color:#8aaac8;
        font-size:10px;
      }

      .v31-stat-val{
        color:#e8c84a;
        font-weight:900;
      }

      .v31-bar{
        height:6px;
        margin-top:4px;
        background:#05060a;
        border:1px solid #1c3354;
        overflow:hidden;
      }

      .v31-bar span{
        display:block;
        height:100%;
        background:linear-gradient(90deg,#4a2e87,#e8c84a);
      }

      .v31-pill{
        display:inline-block;
        margin:2px 4px 2px 0;
        padding:2px 7px;
        border:1px solid rgba(232,200,74,.28);
        background:rgba(232,200,74,.06);
        color:#e8c84a;
        font-size:10px;
        letter-spacing:.4px;
      }

      .v31-note{
        color:#9fb9d8;
        font-size:11px;
        line-height:1.55;
        margin-top:5px;
      }

      .v31-warning{
        color:#ffd166;
        font-size:10px;
        line-height:1.45;
        margin-top:4px;
      }

      @media(max-width:720px){
        .v31-grid,
        .v31-stat-grid{
          grid-template-columns:1fr;
        }

        .v31-card-btn{
          padding:10px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function esc(x){
    return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function hashText(str){
    str = String(str || "");
    var h = 2166136261;
    for (var i = 0; i < str.length; i++){
      h ^= str.charCodeAt(i);
      h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
    }
    return Math.abs(h >>> 0);
  }

  function statValue(base, key){
    if (!base) return 1;
    if (typeof base[key] === "number") return Math.max(1, base[key]);
    if (key === "md" && typeof base.rs === "number") return Math.max(1, base.rs);
    return 1;
  }

  function themeMods(name, desc, kind){
    var blob = (String(name || "") + " " + String(desc || "")).toLowerCase();
    var mods = {hp:0,mp:0,pa:0,pd:0,ag:0,ma:0,md:0,rs:0,sp:0};

    function add(key, val){ mods[key] += val; }

    if (/tank|guard|guardian|shield|armor|stone|dwarf|golem|iron|knight|wall|defense/.test(blob)) add("hp",8), add("pd",8), add("rs",4);
    if (/warrior|fighter|sword|axe|berserk|dragon|oni|orc|giant|martial|duelist|blade/.test(blob)) add("pa",8), add("hp",4), add("ag",2);
    if (/rogue|assassin|ninja|scout|thief|hunter|archer|step|speed|fang|beast|predator/.test(blob)) add("ag",9), add("pa",4), add("sp",3);
    if (/mage|magic|spell|arcane|wizard|sorcerer|witch|mana|chakra|spirit|elf|sigil/.test(blob)) add("mp",8), add("ma",9), add("sp",4);
    if (/cleric|priest|holy|angel|saint|heal|barrier|support|miko|restoration/.test(blob)) add("md",7), add("rs",7), add("mp",4);
    if (/demon|dark|curse|abyss|undead|vampire|hollow|death|blood|shadow/.test(blob)) add("ma",5), add("rs",6), add("sp",5);
    if (/slime|adaptive|evolve|mutation|chimera|monster/.test(blob)) add("hp",5), add("rs",5), add("sp",7);
    if (/sealing|seal|control|strategy|tactician|craft|forge|alchemy|engineer/.test(blob)) add("sp",8), add("md",4), add("rs",3);

    if (kind === "job") {
      // Jobs should push harder into their role than races.
      Object.keys(mods).forEach(function(k){ mods[k] = Math.floor(mods[k] * 1.25); });
    }

    return mods;
  }

  function normalizedProfile(entity, target, seed, kind){
    var base = entity.base || {};
    var mods = themeMods(entity.name, entity.desc, kind);
    var hash = hashText(seed + "|" + entity.name + "|" + entity.desc + "|" + kind);
    var weights = {};

    STAT_KEYS.forEach(function(key, idx){
      var jitter = ((hash >> ((idx % 8) * 3)) & 7) - 2;
      weights[key] = Math.max(4, statValue(base, key) + mods[key] + jitter);
    });

    // Keep HP/MP from completely eating the entire BST.
    weights.hp = Math.max(8, Math.floor(weights.hp * 0.55));
    weights.mp = Math.max(8, Math.floor(weights.mp * 0.55));

    var totalWeight = STAT_KEYS.reduce(function(sum, key){ return sum + weights[key]; }, 0);
    var out = {};
    var used = 0;

    STAT_KEYS.forEach(function(key){
      out[key] = Math.max(8, Math.floor(weights[key] / totalWeight * target));
      used += out[key];
    });

    var remainder = target - used;
    var order = STAT_KEYS.slice().sort(function(a,b){ return weights[b] - weights[a]; });
    var pos = 0;
    while (remainder > 0) {
      out[order[pos % order.length]]++;
      remainder--;
      pos++;
    }

    while (remainder < 0) {
      var k = order[order.length - 1 - (pos % order.length)];
      if (out[k] > 8) {
        out[k]--;
        remainder++;
      }
      pos++;
    }

    return out;
  }

  function bst(stats){
    return STAT_KEYS.reduce(function(sum, key){ return sum + (stats[key] || 0); }, 0);
  }

  function topStats(stats, count){
    return STAT_KEYS.slice()
      .sort(function(a,b){ return (stats[b] || 0) - (stats[a] || 0); })
      .slice(0, count || 2);
  }

  function lowStats(stats, count){
    return STAT_KEYS.slice()
      .sort(function(a,b){ return (stats[a] || 0) - (stats[b] || 0); })
      .slice(0, count || 2);
  }

  function statsHtml(stats, target){
    var max = Math.max.apply(null, STAT_KEYS.map(function(k){ return stats[k] || 0; }));
    var html = '<div class="v31-stat-grid">';

    STAT_KEYS.forEach(function(key){
      var value = stats[key] || 0;
      var pct = Math.max(4, Math.round(value / Math.max(1, max) * 100));
      html +=
        '<div class="v31-stat">' +
          '<div class="v31-stat-top"><span>' + esc(STAT_LABELS[key]) + '</span><span class="v31-stat-val">' + esc(value) + '</span></div>' +
          '<div class="v31-bar"><span style="width:' + pct + '%"></span></div>' +
        '</div>';
    });

    html += '</div>';
    html += '<span class="v31-pill">BST: ' + bst(stats) + (target ? ' / ' + target : '') + '</span>';
    return html;
  }

  function raceIdentity(r, stats){
    var tops = topStats(stats, 3).map(function(k){ return STAT_LABELS[k]; });
    return 'A unique ' + r.name + ' lineage profile focused on ' + tops.join(', ') + '. ' + (r.desc || 'This race has a distinct racial identity and evolution route.');
  }

  function raceStrengths(r, stats){
    var top = topStats(stats, 2);
    var low = lowStats(stats, 2);
    return {
      strengths: 'Excels at ' + STAT_LABELS[top[0]] + ' and ' + STAT_LABELS[top[1]] + ', making this race naturally suited for builds that lean into those stats.',
      weaknesses: 'Weaker in ' + STAT_LABELS[low[0]] + ' and ' + STAT_LABELS[low[1]] + ', so equipment, jobs, or passives may be needed to cover those gaps.'
    };
  }

  function jobTierTarget(j){
    var tier = String(j.class_tier || "Base").toLowerCase();
    if (/hidden|rare/.test(tier)) return 600;
    if (/specialist/.test(tier)) return 520;
    if (/advanced/.test(tier)) return 460;
    if (/race evolution/.test(String(j.anime || "").toLowerCase())) return 600;
    return 420;
  }

  function classTierText(j){
    try {
      if (typeof classTierLabel === "function") return classTierLabel(j);
    } catch(e) {}
    return (j.class_tier || "Base") + " Class · max " + (j.max_lv || "?") + " levels";
  }

  function roleFromJob(j){
    var blob = (String(j.name || "") + " " + String(j.desc || "") + " " + String(j.anime || "")).toLowerCase();

    if (/cleric|priest|holy|saint|heal|miko|oracle|paladin/.test(blob)) return "Holy Support";
    if (/mage|wizard|sorcerer|witch|spell|arcane|element|mana/.test(blob)) return "Magic Caster";
    if (/dark|curse|blood|warlock|necromancer|reaper|abyss|demon/.test(blob)) return "Dark Caster";
    if (/guardian|knight|shield|tank|defender|armor|wall/.test(blob)) return "Tank / Defender";
    if (/rogue|thief|assassin|ninja|scout|shadow/.test(blob)) return "Rogue / Mobility";
    if (/archer|hunter|ranger|sniper|bow|gunner/.test(blob)) return "Ranged Physical";
    if (/summon|tamer|contract|beast/.test(blob)) return "Summoner / Tamer";
    if (/craft|forge|blacksmith|alchemy|engineer/.test(blob)) return "Crafting / Utility";
    if (/warrior|fighter|sword|duelist|berserk|martial|monk|samurai|blade|brawler/.test(blob)) return "Physical Combat";
    return "Hybrid Adventurer";
  }

  function jobWeapons(j){
    var blob = (String(j.name || "") + " " + String(j.desc || "") + " " + String(j.anime || "")).toLowerCase();
    var weapons = [];

    function add(list){
      list.forEach(function(w){
        if (weapons.indexOf(w) < 0) weapons.push(w);
      });
    }

    if (/samurai|katana/.test(blob)) add(["Katana", "Bow"]);
    if (/sword|duelist|blade|warrior|fighter|knight|paladin|hero/.test(blob)) add(["Sword"]);
    if (/axe|berserk|orc|brute/.test(blob)) add(["Axe", "Heavy Weapon"]);
    if (/hammer|forge|blacksmith|mace|cleric|priest/.test(blob)) add(["Mace / Hammer"]);
    if (/spear|lance|dragoon|polearm/.test(blob)) add(["Spear / Polearm"]);
    if (/dagger|rogue|thief|assassin|ninja|scout|shadow/.test(blob)) add(["Dagger", "Short Sword"]);
    if (/bow|archer|ranger|hunter|sniper/.test(blob)) add(["Bow"]);
    if (/gun|gunner|rifle|pistol/.test(blob)) add(["Gun / Crossbow"]);
    if (/shield|guardian|tank|defender/.test(blob)) add(["Shield"]);
    if (/monk|martial|brawler|fist|taijutsu|gentle fist/.test(blob)) add(["Unarmed", "Staff"]);
    if (/mage|wizard|sorcerer|witch|spell|arcane|summon|necromancer|warlock|miko|oracle|healer|saint|barrier/.test(blob)) add(["Staff", "Wand / Tome"]);
    if (/alchemy|engineer|craft/.test(blob)) add(["Dagger", "Tool Hammer", "Staff"]);

    if (!weapons.length) add(["Short Sword", "Dagger", "Staff"]);

    return weapons.slice(0, 4);
  }

  function jobStrengths(j, stats){
    var top = topStats(stats, 2);
    var low = lowStats(stats, 2);
    var role = roleFromJob(j);

    return {
      strengths: role + ' class that excels at ' + STAT_LABELS[top[0]] + ' and ' + STAT_LABELS[top[1]] + '.',
      weaknesses: 'Lower ' + STAT_LABELS[low[0]] + ' and ' + STAT_LABELS[low[1]] + ' mean this job needs gear, race synergy, or party support to cover those weak points.'
    };
  }

  function jobBuildNotes(j, stats, weapons){
    var top = topStats(stats, 3).map(function(k){ return STAT_LABELS[k]; });
    var role = roleFromJob(j);

    return 'Best used as a ' + role + ' path. Build around ' + top.join(', ') + ', equip ' + weapons.join(' / ') + ', and choose skills or spells that scale with those stats.';
  }

  function starterSkills(j){
    var skills = [];

    try {
      (j.skills || []).forEach(function(tier){
        var lv = Array.isArray(tier) ? tier[0] : null;
        var list = Array.isArray(tier) ? tier[1] : [];
        if (lv === 1 && Array.isArray(list)) {
          list.forEach(function(sk){
            if (sk && sk.name) skills.push(sk.name);
          });
        }
      });
    } catch(e) {}

    if (skills.length) return skills.slice(0, 3);

    var role = roleFromJob(j);
    if (/Magic|Caster/.test(role)) return [j.name + " Spark", j.name + " Mana Guard"];
    if (/Holy|Support/.test(role)) return [j.name + " Mend", j.name + " Ward"];
    if (/Tank|Defender/.test(role)) return [j.name + " Guard", j.name + " Shield Bash"];
    if (/Rogue|Mobility/.test(role)) return [j.name + " Step", j.name + " Ambush Cut"];
    if (/Ranged/.test(role)) return [j.name + " Shot", j.name + " Mark"];
    return [j.name + " Strike", j.name + " Focus"];
  }

  function raceButtonHtml(id, r){
    var stats = normalizedProfile(r, 600, "race-" + id, "race");
    var sw = raceStrengths(r, stats);

    return (
      '<div class="v31-card-title">' + esc(r.name) + '</div>' +
      '<div class="v31-card-meta">Race · ' + esc(r.anime || "Fantasy") + ' · Max Level: ' + esc(r.max_lv || "?") + ' · BST: 600</div>' +

      '<div class="v31-card-desc"><b>Unique Description:</b> ' + esc(raceIdentity(r, stats)) + '</div>' +

      '<div class="v31-grid">' +
        '<div class="v31-field"><b>Race</b>' + esc(r.name) + '</div>' +
        '<div class="v31-field"><b>Max Level</b>' + esc(r.max_lv || "?") + '</div>' +
        '<div class="v31-field"><b>Status Total</b>BST 600</div>' +
      '</div>' +

      '<div class="v31-note"><b>Status Layout</b></div>' +
      statsHtml(stats, 600) +

      '<div class="v31-card-desc"><b>Strengths:</b> ' + esc(sw.strengths) + '</div>' +
      '<div class="v31-card-desc"><b>Weaknesses:</b> ' + esc(sw.weaknesses) + '</div>' +
      '<div class="v31-warning">Note: This is the race identity status profile. Combat balance still uses the game’s internal stat formulas.</div>'
    );
  }

  function jobButtonHtml(id, j, status){
    var target = jobTierTarget(j);
    var stats = normalizedProfile(j, target, "job-" + id, "job");
    var weapons = jobWeapons(j);
    var sw = jobStrengths(j, stats);
    var starters = starterSkills(j);
    var role = roleFromJob(j);

    return (
      '<div class="v31-card-title">' + esc((status ? status + " " : "") + j.name) + '</div>' +
      '<div class="v31-card-meta">Job · ' + esc(j.anime || "Fantasy") + ' · ' + esc(classTierText(j)) + ' · Role: ' + esc(role) + ' · BST: ' + esc(target) + '</div>' +

      '<div class="v31-card-desc"><b>Unique Description:</b> ' + esc(j.desc || "A unique job path with its own role, weapons, and build identity.") + '</div>' +

      '<div class="v31-grid">' +
        '<div class="v31-field"><b>Job</b>' + esc(j.name) + '</div>' +
        '<div class="v31-field"><b>Max Level</b>' + esc(j.max_lv || "?") + '</div>' +
        '<div class="v31-field"><b>Status Total</b>BST ' + esc(target) + '</div>' +
        '<div class="v31-field"><b>Weapon/s</b>' + esc(weapons.join(" / ")) + '</div>' +
        '<div class="v31-field"><b>Role</b>' + esc(role) + '</div>' +
        '<div class="v31-field"><b>Starter Skills</b>' + esc(starters.join(" / ")) + '</div>' +
      '</div>' +

      '<div class="v31-note"><b>Status Layout</b></div>' +
      statsHtml(stats, target) +

      '<div class="v31-card-desc"><b>Strengths:</b> ' + esc(sw.strengths) + '</div>' +
      '<div class="v31-card-desc"><b>Weaknesses:</b> ' + esc(sw.weaknesses) + '</div>' +
      '<div class="v31-card-desc"><b>Unique Build Notes:</b> ' + esc(jobBuildNotes(j, stats, weapons)) + '</div>'
    );
  }

  function groupBySource(data){
    var groups = {};
    Object.entries(data).forEach(function(entry){
      var id = entry[0];
      var obj = entry[1];
      var key = obj.anime || "Fantasy";
      if (!groups[key]) groups[key] = [];
      groups[key].push([id, obj]);
    });
    return groups;
  }

  function v31PickRace(){
    addV31Style();
    clearOutput();
    if (typeof showBattlePanel === "function") showBattlePanel(false);

    print("RACE SELECTION — STATUS PROFILE REDO", "highlight");
    print("Choose your starting race. Every race now displays a unique status layout with a normalized Race BST of 600.", "narrator");
    print("Each card shows Race, Max Level, Status, Unique Description, Strengths, and Weaknesses.", "info");
    print("");

    $ch.innerHTML = "";

    var groups = groupBySource(RACE_DATA);

    Object.entries(groups).forEach(function(group){
      var anime = group[0];
      var entries = group[1];

      var hdr = document.createElement("div");
      hdr.className = "v31-section-header";
      hdr.textContent = "— " + anime + " —";
      $ch.appendChild(hdr);

      entries.forEach(function(entry){
        var id = entry[0];
        var r = entry[1];

        var b = document.createElement("button");
        b.className = "v31-card-btn";
        b.innerHTML = raceButtonHtml(id, r);
        b.onclick = function(){
          G.race_id = Number(id);
          pick_job();
        };
        $ch.appendChild(b);
      });
    });
  }

  function v31PickJob(){
    addV31Style();
    clearOutput();
    if (typeof showBattlePanel === "function") showBattlePanel(false);

    var race = RACE_DATA[G.race_id];

    print("Race: " + (race ? race.name : "Unknown") + "  [" + (race ? race.anime : "—") + "]", "highlight");
    print("JOB SELECTION — STATUS PROFILE REDO", "highlight");
    print("Choose your starting job. Each job now shows Max Level, Status BST, allowed Weapon/s, Unique Description, Strengths, Weaknesses, Build Notes, and Starter Skills.", "narrator");
    print("");

    $ch.innerHTML = "";

    var groups = groupBySource(JOB_DATA);

    Object.entries(groups).forEach(function(group){
      var anime = group[0];
      var entries = group[1];

      var hdr = document.createElement("div");
      hdr.className = "v31-section-header";
      hdr.style.borderLeftColor = "#7f5af0";
      hdr.style.color = "#a78bfa";
      hdr.textContent = "— " + anime + " —";
      $ch.appendChild(hdr);

      entries.forEach(function(entry){
        var id = entry[0];
        var j = entry[1];
        var locked = false;

        try {
          locked = typeof canStartWithJob === "function" ? !canStartWithJob(Number(id), j) : false;
        } catch(e) {
          locked = false;
        }

        var b = document.createElement("button");
        b.className = "v31-card-btn";
        b.innerHTML = jobButtonHtml(id, j, locked ? "[LOCKED]" : "");
        b.disabled = locked;
        b.onclick = function(){
          G.jobs = [{id: Number(id), lv: 1}];
          your_character();
        };
        $ch.appendChild(b);
      });
    });

    var back = document.createElement("button");
    back.textContent = "← Back to Race Selection";
    back.onclick = pick_race;
    $ch.appendChild(back);
  }

  function v31ClassRegistry(){
    addV31Style();

    if (typeof ensureGameCollections === "function") ensureGameCollections();
    if (typeof discoverAvailableHiddenJobs === "function") discoverAvailableHiddenJobs(true);

    clearOutput();
    if (typeof showBattlePanel === "function") showBattlePanel(false);

    print("FULL CLASS REGISTRY — JOB STATUS PROFILES", "highlight");
    print("Every job path now displays its Max Level, Status BST, allowed Weapon/s, Unique Description, Strengths, Weaknesses, Build Notes, and Starter Skills.", "narrator");
    print("Gold: " + G.gold + "  ·  Total Level: " + G.total_lv + " / 100", "info");
    print("");

    $ch.innerHTML = "";

    var guide = document.createElement("button");
    guide.textContent = "📘 YGGDRASIL Build Guide — base 15 / advanced 10 / specialist 10 / rare 5";
    guide.onclick = yggdrasil_build_guide_screen;
    $ch.appendChild(guide);

    if (typeof hiddenResearchCost === "function" && typeof doHiddenResearch === "function") {
      var research = document.createElement("button");
      research.textContent = "🔎 Research Hidden Classes — " + hiddenResearchCost() + "g";
      research.onclick = doHiddenResearch;
      $ch.appendChild(research);
    }

    var groups = groupBySource(JOB_DATA);

    Object.entries(groups).forEach(function(group){
      var anime = group[0];
      var list = group[1];

      var hdr = document.createElement("div");
      hdr.className = "v31-section-header";
      hdr.textContent = "— " + anime + " —";
      $ch.appendChild(hdr);

      list.forEach(function(entry){
        var id = entry[0];
        var j = entry[1];

        var owned = false;
        var available = true;
        var visible = true;

        try { owned = typeof ownsJob === "function" ? ownsJob(id) : false; } catch(e) {}
        try { available = typeof canAddJob === "function" ? canAddJob(Number(id)) : true; } catch(e) {}
        try { visible = typeof canViewHiddenJob === "function" ? canViewHiddenJob(Number(id), j) : true; } catch(e) {}

        var b = document.createElement("button");
        b.className = "v31-card-btn";

        if (!visible) {
          b.innerHTML =
            '<div class="v31-card-title">??? Hidden Class</div>' +
            '<div class="v31-card-meta">Hidden Job · Max Level: ? · BST: ?</div>' +
            '<div class="v31-card-desc">Prerequisite unknown. Research hidden paths or gain Detection passives to reveal more.</div>';
          b.disabled = true;
        } else {
          var status = owned ? "[OWNED]" : available ? "[AVAILABLE]" : "[LOCKED]";
          b.innerHTML = jobButtonHtml(id, j, status);
          b.disabled = !available;
          if (available && typeof addJobPath === "function") {
            b.onclick = function(){ addJobPath(id); };
          }
        }

        $ch.appendChild(b);
      });
    });

    var back = document.createElement("button");
    back.textContent = "← Return to Character Status";
    back.onclick = character_screen;
    $ch.appendChild(back);

    var town = document.createElement("button");
    town.textContent = "← Return to Town Center";
    town.onclick = town_center;
    $ch.appendChild(town);
  }

  function patchUpdateEntry(){
    try {
      var oldUpdates = window.updates_screen || (typeof updates_screen === "function" ? updates_screen : null);
      if (!oldUpdates || oldUpdates._v31RaceJobLayout) return;

      var wrapped = function(){
        var result = oldUpdates.apply(this, arguments);

        setTimeout(function(){
          try {
            var out = document.getElementById("output");
            if (!out || document.getElementById("v31-update-entry")) return;

            var card = document.createElement("div");
            card.id = "v31-update-entry";
            card.className = "update-card";
            card.innerHTML =
              '<div class="update-card-title">v0.31 — Race & Job Layout Redo</div>' +
              '<div class="update-card-date">Race / Job UI Update</div>' +
              '<ul>' +
              '<li>Redesigned Race Selection cards with Race, Max Level, Status, BST 600, Unique Description, Strengths, and Weaknesses.</li>' +
              '<li>Redesigned Job Selection cards with Job, Max Level, Status BST, allowed Weapon/s, Unique Description, Strengths, Weaknesses, Build Notes, and Starter Skills.</li>' +
              '<li>Added unique normalized status profiles so every race and job has a clearer identity.</li>' +
              '<li>Updated the Full Class Registry to use the new job card layout.</li>' +
              '</ul>';

            out.insertBefore(card, out.firstChild);
          } catch(e) {}
        }, 0);

        return result;
      };

      wrapped._v31RaceJobLayout = true;
      window.updates_screen = wrapped;
      try { updates_screen = wrapped; } catch(e) {}
    } catch(e) {}
  }

  addV31Style();

  window.pick_race = v31PickRace;
  window.pick_job = v31PickJob;
  window.class_registry_screen = v31ClassRegistry;

  try { pick_race = v31PickRace; } catch(e) {}
  try { pick_job = v31PickJob; } catch(e) {}
  try { class_registry_screen = v31ClassRegistry; } catch(e) {}

  patchUpdateEntry();
})();
