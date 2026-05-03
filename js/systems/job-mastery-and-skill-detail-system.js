// v0.10 — Sequential job mastery gate
// Requested change:
// - You can only take/add a new job after maxing the job you currently have.
// - Level-up path panels now show the current job gate instead of offering new paths early.
// ═══════════════════════════════════════════════════════════════
(function installV10SequentialJobMasteryPatch(){
  var V10_VERSION = 'v0.10-sequential-job-mastery-gate';

  function jobDefV10(entry){ return entry && JOB_DATA ? JOB_DATA[entry.id] : null; }
  function jobMaxV10(entry){ var j = jobDefV10(entry); return j ? (j.max_lv || 1) : 1; }
  function jobLvV10(entry){ return entry ? (entry.lv || 0) : 0; }
  function isJobEntryMaxedV10(entry){ var j = jobDefV10(entry); if (!entry || !j) return true; return jobLvV10(entry) >= jobMaxV10(entry); }
  function getUnmaxedJobsV10(){ ensureGameCollections(); return (G.jobs || []).filter(function(entry){ return !isJobEntryMaxedV10(entry); }); }
  function getCurrentJobV10(){ ensureGameCollections(); var unmaxed = getUnmaxedJobsV10(); if (unmaxed.length) return unmaxed[0]; if (G.jobs && G.jobs.length) return G.jobs[G.jobs.length - 1]; return null; }
  function allOwnedJobsMaxedV10(){ return getUnmaxedJobsV10().length === 0; }
  function currentJobGateTextV10(){
    var current = getCurrentJobV10();
    if (!current) return 'No current job yet. Choose your first Base job.';
    var j = jobDefV10(current);
    if (!j) return 'Your current job data is missing.';
    if (isJobEntryMaxedV10(current)) return j.name + ' is mastered at Lv.' + jobMaxV10(current) + '. You may choose a new job path.';
    return 'Max your current job first: ' + j.name + ' Lv.' + jobLvV10(current) + ' / ' + jobMaxV10(current) + '.';
  }
  function isBaseRegistryJobV10(j){ if (!j) return false; var tier = String(j.class_tier || j.tier || 'Base').toLowerCase(); return !j.req && tier === 'base'; }
  function pathKindV10(j){ var r = j && j.req ? j.req : {}; if (r.raceEvolution || j.race_evolution) return 'Race Evolution'; if (r.jobBranch) return 'Job/Class Evolution'; return 'Class Path'; }
  function tierValueV10(j){ var tier = String((j && (j.class_tier || j.tier)) || 'Base'); var order = {Base:0, Advanced:1, Specialist:2, Rare:3, Hidden:4, advanced:1, specialist:2, rare:3, hidden:4}; return order[tier] === undefined ? 9 : order[tier]; }
  function renderHeaderV10(text, color){ var hdr = document.createElement('div'); hdr.style.cssText = 'margin:12px 0 4px;padding:6px 10px;background:linear-gradient(90deg,#12082a,#090e1c);border-left:3px solid ' + (color || '#e8c84a') + ';font-family:"Cinzel Decorative",serif;font-size:11px;color:' + (color || '#e8c84a') + ';letter-spacing:2px'; hdr.textContent = text; $ch.appendChild(hdr); }
  function baseUnlockStateV10(id, j){ if (ownsJob(Number(id))) return {ok:false, why:'Already owned.'}; if (!allOwnedJobsMaxedV10()) return {ok:false, why:currentJobGateTextV10()}; return {ok:true, why:'Available because your current job is mastered.'}; }
  function availableNewPathsV10(){
    ensureGameCollections();
    if (typeof checkJobUnlocks === 'function') checkJobUnlocks(true);
    if (!allOwnedJobsMaxedV10()) return [];
    return Object.entries(JOB_DATA).filter(function(pair){ var id = Number(pair[0]); var j = pair[1]; if (!j || isBaseRegistryJobV10(j) || ownsJob(id)) return false; return typeof canAddJob === 'function' && canAddJob(id); })
      .sort(function(a,b){ var ak = pathKindV10(a[1]); var bk = pathKindV10(b[1]); if (ak !== bk) return ak.localeCompare(bk); return (tierValueV10(a[1]) - tierValueV10(b[1])) || String(a[1].anime || '').localeCompare(String(b[1].anime || '')) || a[1].name.localeCompare(b[1].name); });
  }

  var _genericJobUnlockState_v10_prev = genericJobUnlockState;
  genericJobUnlockState = function(id, j){
    var base = _genericJobUnlockState_v10_prev ? _genericJobUnlockState_v10_prev(id, j) : {ok:false, why:'Missing unlock checker.'};
    if (!j || ownsJob(Number(id))) return base;
    if (!allOwnedJobsMaxedV10()) return {ok:false, why:currentJobGateTextV10()};
    return base;
  };

  var _canAddJob_v10_prev = canAddJob;
  canAddJob = function(id){
    id = Number(id);
    var j = JOB_DATA[id];
    if (!j || ownsJob(id)) return false;
    if (!allOwnedJobsMaxedV10()) return false;
    return _canAddJob_v10_prev ? _canAddJob_v10_prev(id) : false;
  };

  var _jobPrereqText_v10_prev = jobPrereqText;
  jobPrereqText = function(id, j){
    if (!j) return 'Unknown job.';
    if (!ownsJob(Number(id)) && !allOwnedJobsMaxedV10()) return 'Locked — ' + currentJobGateTextV10();
    return _jobPrereqText_v10_prev ? _jobPrereqText_v10_prev(id, j) : 'Requirement unknown.';
  };

  var _addJobPath_v10_prev = addJobPath;
  addJobPath = function(id){
    id = Number(id);
    var j = JOB_DATA[id];
    if (!j) { clearOutput(); showBattlePanel(false); print('Unknown job path.', 'danger'); return; }
    if (ownsJob(id)) return _addJobPath_v10_prev(id);
    if (!allOwnedJobsMaxedV10()) {
      clearOutput(); showBattlePanel(false);
      print('JOB LOCKED — MASTER CURRENT JOB FIRST', 'danger');
      print(currentJobGateTextV10(), 'narrator');
      print('Rule: you can only take a new job after the job you currently have reaches its max level.', 'info');
      showChoices([['⚔ Character Status', character_screen], ['📜 Base Job Registry', class_registry_screen], ['← Town Center', town_center]]);
      return;
    }
    return _addJobPath_v10_prev(id);
  };

  appendMiniClassRegistry = function(){
    if ((G.level_pts || 0) <= 0) return;
    var div = document.createElement('div');
    div.className = 'cs-exp-row';
    div.id = 'v10-current-job-gate-panel';
    div.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">CURRENT JOB MASTERY GATE</div>' + '<div style="font-size:11px;color:#8aaac8;line-height:1.5;margin-bottom:6px">New jobs only appear after your current job is maxed. Spend Level Points on your current job until it reaches its cap.</div>';
    if (!allOwnedJobsMaxedV10()) {
      var note = document.createElement('div');
      note.style.cssText = 'font-size:11px;color:#8aaac8;line-height:1.5;margin-top:5px';
      note.textContent = currentJobGateTextV10();
      div.appendChild(note);
      $ch.appendChild(div);
      return;
    }
    var available = availableNewPathsV10();
    if (!available.length) {
      var none = document.createElement('div');
      none.style.cssText = 'font-size:11px;color:#8aaac8;line-height:1.5;margin-top:5px';
      none.textContent = 'Your current job is mastered, but no higher paths are unlocked yet. Meet more requirements, clear battles, research hidden classes, or open the Base Job Registry.';
      div.appendChild(none);
      var reg = document.createElement('button');
      reg.className = 'btn-levelup';
      reg.style.cssText = 'width:100%;margin-top:6px';
      reg.textContent = '📜 Open Base Job Registry';
      reg.onclick = class_registry_screen;
      div.appendChild(reg);
    } else {
      available.forEach(function(pair){
        var id = pair[0]; var j = pair[1];
        var b = document.createElement('button');
        b.className = 'btn-levelup';
        b.style.cssText = 'width:100%;margin-top:4px;text-align:left;white-space:pre-wrap;line-height:1.45';
        b.textContent = pathKindV10(j) + ': ' + j.name + ' — ' + classTierLabel(j) + '\nRequirement met: ' + jobPrereqText(id,j) + '\nTap to add this as your next job path.';
        b.onclick = function(){ addJobPath(id); };
        div.appendChild(b);
      });
    }
    $ch.appendChild(div);
  };

  class_registry_screen = function(){
    ensureGameCollections();
    clearOutput();
    showBattlePanel(false);
    print('BASE JOB REGISTRY — SEQUENTIAL JOB RULE', 'highlight');
    print('Only Base jobs are listed here. You can only add a new job after your current job reaches max level.', 'narrator');
    print(currentJobGateTextV10(), allOwnedJobsMaxedV10() ? 'success' : 'info');
    print('Gold: ' + G.gold + ' · Total Level: ' + G.total_lv + ' / 100 · Level Points: ' + (G.level_pts || 0), 'info');
    $ch.innerHTML = '';
    var baseEntries = Object.entries(JOB_DATA).filter(function(pair){ return isBaseRegistryJobV10(pair[1]); }).sort(function(a,b){ return String(a[1].anime || '').localeCompare(String(b[1].anime || '')) || a[1].name.localeCompare(b[1].name); });
    var groups = {};
    baseEntries.forEach(function(pair){ var cat = pair[1].anime || pair[1].v07Category || 'Jobs'; if (!groups[cat]) groups[cat] = []; groups[cat].push(pair); });
    Object.entries(groups).forEach(function(group){
      var cat = group[0], list = group[1];
      renderHeaderV10('— ' + cat.toUpperCase() + ' BASE JOBS —', '#a78bfa');
      list.forEach(function(pair){
        var id = pair[0]; var j = pair[1]; var owned = ownsJob(Number(id)); var st = baseUnlockStateV10(id, j);
        var b = document.createElement('button');
        b.style.whiteSpace = 'pre-wrap';
        b.style.lineHeight = '1.42';
        b.textContent = (owned ? '[OWNED] ' : st.ok ? '[AVAILABLE] ' : '[LOCKED] ') + j.name + ' — ' + classTierLabel(j) + '\nCategory: ' + (j.anime || 'Base Jobs') + '\nRule: ' + (owned ? 'Already owned.' : st.why) + '\n' + j.desc;
        b.disabled = owned || !st.ok;
        if (!owned && st.ok) b.onclick = function(){ addJobPath(id); };
        $ch.appendChild(b);
      });
    });
    var req = document.createElement('button'); req.textContent = '📘 Requirements / How Evolutions Unlock'; req.onclick = job_requirement_screen; $ch.appendChild(req);
    var back = document.createElement('button'); back.textContent = '← Character Status'; back.onclick = character_screen; $ch.appendChild(back);
    var town = document.createElement('button'); town.textContent = '← Town Center'; town.onclick = town_center; $ch.appendChild(town);
  };

  var _character_screen_v10_prev = character_screen;
  character_screen = function(){
    _character_screen_v10_prev();
    Array.prototype.slice.call($ch.querySelectorAll('.cs-exp-row')).forEach(function(panel){ var txt = panel.textContent || ''; if (/AVAILABLE UNLOCKS FROM THIS LEVEL-UP/.test(txt)) panel.remove(); });
    if ((G.level_pts || 0) > 0 && !document.getElementById('v10-current-job-gate-panel')) appendMiniClassRegistry();
  };

  expansion_update_screen = function(){
    clearOutput(); showBattlePanel(false);
    print('UPDATE v0.10 — SEQUENTIAL JOB MASTERY', 'highlight');
    print('You can now only take a new job after your current job reaches its max level.', 'success');
    print('The Character Status level-up panel now shows the current job mastery gate instead of offering future jobs too early.', 'success');
    print('The Base Job Registry still lists Base jobs, but locked jobs cannot be added until your current job is mastered.', 'info');
    showChoices([['⚔ Character Status', character_screen], ['📜 Base Job Registry', class_registry_screen], ['📘 Requirements', job_requirement_screen], ['← Back', returnFromHelp]]);
  };

  var _job_requirement_screen_v10_prev = job_requirement_screen;
  job_requirement_screen = function(){
    _job_requirement_screen_v10_prev();
    print('', 'narrator');
    print('SEQUENTIAL JOB RULE', 'highlight');
    print('• You may only add a new job when your current job is maxed.', 'info');
    print('• Your first Base job is chosen during character creation.', 'info');
    print('• After that, master the current job before choosing another Base, Advanced, Specialist, Rare, Hidden, or Race Evolution job.', 'info');
  };

  function injectV10Settings(){
    var panel = document.getElementById('settings-panel');
    if (!panel || document.getElementById('v10-settings-section')) return;
    var sections = Array.prototype.slice.call(panel.querySelectorAll('.sp-section'));
    var saveSection = sections.find(function(s){ return /Save \/ Load/.test(s.textContent); });
    var div = document.createElement('div');
    div.className = 'sp-section';
    div.id = 'v10-settings-section';
    div.innerHTML = '<h3>Update v0.10</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Sequential job mastery is active: max your current job before taking a new one.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); expansion_update_screen()">🆕 Update Notes</button><button class="sp-btn" onclick="closeSettingsPanel(); class_registry_screen()">📜 Base Registry</button><button class="sp-btn" onclick="closeSettingsPanel(); job_requirement_screen()">📋 Requirements</button></div>';
    if (saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
  }
  injectV10Settings();

  ensureGameCollections();
  if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = {};
  G.save_meta.version = V10_VERSION;
})();



// ═══════════════════════════════════════════════════════════════
// UPDATE v0.11 — Detailed Unique Skill Pass
// Rewrites generated race/job/shop skill text into richer, more unique RPG/anime-fantasy abilities.
// ═══════════════════════════════════════════════════════════════
(function installDetailedUniqueSkillsV11(){
  const V11_VERSION = 'v0.11-detailed-unique-skills';

  function clean(text){ return String(text || '').replace(/\s+/g,' ').trim(); }
  function slug(text){ return clean(text).toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,''); }
  function titleCase(text){ return clean(text).replace(/\b\w/g, function(c){ return c.toUpperCase(); }); }
  function has(name, words){ const n = clean(name).toLowerCase(); return words.some(function(w){ return n.indexOf(w) !== -1; }); }
  function statText(bon){ return Object.entries(bon || {}).map(function(e){ return e[0].toUpperCase() + ' +' + e[1]; }).join(' · ') || 'no stat bonus'; }
  function capTier(tier){ tier = tier || 'Base'; return String(tier).charAt(0).toUpperCase() + String(tier).slice(1); }

  const STATUS_WORDS_V11 = {
    burn:'Burn', poison:'Poison', bleed:'Bleed', stun:'Stun', sleep:'Sleep', freeze:'Freeze', paralysis:'Paralysis',
    fear:'Fear', doom:'Doom', petrify:'Petrify', weaken:'Weaken', bravery:'Bravery', haste:'Haste', confusion:'Confusion',
    guard:'Guard', regen:'Regen', focus:'Focus', thorns:'Thorns', vulnerable:'Vulnerable', marked:'Marked'
  };
  function statusName(id){ return STATUS_WORDS_V11[id] || titleCase(id || 'None'); }

  const RACE_STYLE_V11 = {
    balanced:{label:'Adaptive Bloodline', motif:'versatile survival instincts, quick learning, and flexible class synergy', active:'Adaptive Counter Pattern', body:'Unbroken Mortal Frame', capstone:'Limit Break: Many-Path Soul', stat:'hp', status:'vulnerable', buff:'focus'},
    martial:{label:'Battleborn Heritage', motif:'weapon instincts, disciplined violence, and pressure-point timing', active:'Linebreaker Assault', body:'War-Bred Tendons', capstone:'Battle Instinct Overdrive', stat:'pa', status:'bleed', buff:'bravery'},
    tank:{label:'Colossus Heritage', motif:'heavy frames, stone-like endurance, and formation-breaking strength', active:'Titan Step Crash', body:'Mountainhide Constitution', capstone:'Colossus Limit Release', stat:'pd', status:'stun', buff:'guard'},
    agile:{label:'Windstep Heritage', motif:'light feet, sharp senses, aerial turns, and evasion chains', active:'Gale-Step Ripper', body:'Feather-Nerve Reflexes', capstone:'Blinking Mirage Form', stat:'ag', status:'paralysis', buff:'haste'},
    magic:{label:'Arcane Spiritline', motif:'mana sensitivity, runic memory, and natural spell-shaping', active:'Glyphborne Cascade', body:'Mana-Threaded Soul', capstone:'Elder Arcana Release', stat:'ma', status:'weaken', buff:'focus'},
    divine:{label:'Consecrated Bloodline', motif:'holy light, oath pressure, cleansing radiance, and protective miracles', active:'Halo Verdict', body:'Sanctified Vessel', capstone:'Divine Mandate Release', stat:'rs', status:'fear', buff:'guard'},
    dark:{label:'Abyssal Heritage', motif:'curses, contracts, hunger, and forbidden resilience', active:'Abyss Brand Rend', body:'Nightbound Constitution', capstone:'Infernal Crown Release', stat:'sp', status:'fear', buff:'bravery'},
    beast:{label:'Primal Bloodline', motif:'predator instincts, claws, pack rhythm, and explosive pursuit', active:'Predator Pounce Chain', body:'Apex Sinew Growth', capstone:'Primal King Awakening', stat:'pa', status:'bleed', buff:'haste'},
    aquatic:{label:'Tideborn Heritage', motif:'pressure control, fluid motion, water magic, and deep-sea endurance', active:'Riptide Spiral Crush', body:'Abyssal Lung Adaptation', capstone:'Sea-King Current Release', stat:'md', status:'freeze', buff:'regen'},
    undead:{label:'Deathless Lineage', motif:'necrotic persistence, soul anchors, fear aura, and corpse-cold magic', active:'Gravebind Drain', body:'Hollow Immortality Frame', capstone:'Deathless Sovereign Release', stat:'rs', status:'doom', buff:'thorns'},
    construct:{label:'Runeforged Body', motif:'artificial cores, armor plating, repair magic, and command protocols', active:'Golem Protocol Strike', body:'Self-Repairing Frame', capstone:'Ancient Core Overclock', stat:'pd', status:'stun', buff:'guard'},
    dragon:{label:'Draconic Bloodline', motif:'scales, breath organs, ancient pride, and elemental domination', active:'Dragonbreath Breaker', body:'Wyrm-Scale Metabolism', capstone:'True Dragon Pulse', stat:'sp', status:'burn', buff:'bravery'},
    tiny:{label:'Fae-Touched Heritage', motif:'luck, misdirection, charm, speed, and impossible angles', active:'Pixie Trick Barrage', body:'Small Miracle Reflex', capstone:'Fae Court Limit Release', stat:'ag', status:'confusion', buff:'haste'}
  };
  function raceStyle(r){ return RACE_STYLE_V11[(r && r.v07Preset) || 'balanced'] || RACE_STYLE_V11.balanced; }

  function levelLabelFromSkill(sk){
    const id = String(sk && sk.id || '');
    if (/_blood_1|_core|_form/.test(id)) return 'Foundation';
    if (/_art_5|_tech|_art/.test(id)) return 'Technique';
    if (/_body_10|_mastery/.test(id)) return 'Mastery';
    if (/_limit_15|_apex/.test(id)) return 'Capstone';
    return 'Skill';
  }
  function effectSummary(sk){
    const out = [];
    if (sk.type === 'p') out.push('Passive'); else out.push('Active');
    if (sk.mp) out.push(sk.mp + ' MP');
    if (sk.pow) out.push('Power ' + sk.pow);
    if (sk.hits && sk.hits > 1) out.push(sk.hits + ' hits');
    if (sk.aoe) out.push('hits all enemies');
    if (sk.st) out.push('can inflict ' + statusName(sk.st) + ' (' + Math.round((sk.sc || 0.3) * 100) + '%)');
    if (sk.buf) out.push('grants ' + statusName(sk.buf));
    if (sk.heal) out.push('heals ' + Math.round(sk.heal * 100) + '% max HP');
    if (sk.drain) out.push('drains HP');
    if (sk.cleanse) out.push('cleanses negative effects');
    if (sk.mpRestorePct) out.push('restores ' + Math.round(sk.mpRestorePct * 100) + '% max MP');
    if (sk.mpRestore) out.push('restores ' + sk.mpRestore + ' MP');
    if (sk.hpCostPct) out.push('costs ' + Math.round(sk.hpCostPct * 100) + '% max HP');
    if (sk.execute) out.push('execution bonus below ' + Math.round(sk.execute * 100) + '% enemy HP');
    if (sk.bon) out.push('bonus: ' + statText(sk.bon));
    return out.join(' · ');
  }

  function setActiveFlavor(sk, opts){
    opts = opts || {};
    sk.type = 'a';
    if (opts.mp != null) sk.mp = opts.mp;
    if (opts.pow != null) sk.pow = opts.pow;
    if (opts.st) sk.st = opts.st;
    if (opts.sc != null) sk.sc = opts.sc;
    if (opts.buf) sk.buf = opts.buf;
    if (opts.hits != null) sk.hits = opts.hits;
    if (opts.aoe != null) sk.aoe = opts.aoe;
    if (opts.drain != null) sk.drain = opts.drain;
    if (opts.heal != null) sk.heal = opts.heal;
    if (opts.cleanse != null) sk.cleanse = opts.cleanse;
    if (opts.mpRestorePct != null) sk.mpRestorePct = opts.mpRestorePct;
    if (opts.hpCostPct != null) sk.hpCostPct = opts.hpCostPct;
    if (opts.execute != null) sk.execute = opts.execute;
    return sk;
  }

  function rewriteRaceSkills(){
    Object.entries(RACE_DATA || {}).forEach(function(pair){
      const race = pair[1]; if (!race || !Array.isArray(race.skills)) return;
      const style = raceStyle(race); const raceName = race.name;
      race.skills.forEach(function(tierArr){
        const lvl = tierArr[0], list = tierArr[1] || [];
        list.forEach(function(sk){
          if (!sk) return;
          if (lvl === 1) {
            sk.name = raceName + ' Birthright: ' + style.label;
            sk.type = 'p';
            sk.desc = 'Passive birthright. Your ' + raceName + ' origin awakens ' + style.motif + '. This is the first racial identity skill and it makes the race feel different before jobs are added. Effect: ' + effectSummary(sk) + '.';
          } else if (lvl === 5) {
            sk.name = raceName + ' Art: ' + style.active;
            setActiveFlavor(sk, {mp:sk.mp || 12, pow:sk.pow || 44, st:sk.st || style.status, sc:Math.max(sk.sc || 0.35, 0.36), buf:sk.buf || null, hits:has(raceName,['cat','tiger','rabbit','fairy','harpy','bird','tengu']) ? 2 : (has(raceName,['slime','arachne','goblin','kobold']) ? 3 : sk.hits), drain:has(raceName,['vampire','undead','wraith','ghost','lich']) || !!sk.drain});
            sk.desc = 'Active racial technique. ' + style.active + ' converts the natural traits of the ' + raceName + ' into a battle art: ' + style.motif + '. It gives this race a recognizable combat button instead of a generic attack. Effect: ' + effectSummary(sk) + '. Combo note: best used after an enemy is marked, weakened, or vulnerable.';
          } else if (lvl === 10) {
            sk.name = raceName + ' Adaptation: ' + style.body;
            sk.type = 'p';
            sk.desc = 'Passive racial adaptation. ' + style.body + ' refines the body/soul structure of the ' + raceName + ', improving survival while reinforcing the race fantasy. Effect: ' + effectSummary(sk) + '. Build note: this passive makes the race scale better before evolution.';
          } else if (lvl === 15) {
            sk.name = raceName + ' Capstone: ' + style.capstone;
            setActiveFlavor(sk, {mp:sk.mp || 28, pow:Math.max(sk.pow || 78, 82), st:sk.st || style.status, sc:Math.max(sk.sc || 0.45, 0.45), buf:sk.buf || style.buff, aoe:has(raceName,['dragon','giant','angel','demon','kami','storm','treant','world','slime']), drain:has(raceName,['vampire','undead','lich','demon','devil']) || !!sk.drain});
            sk.desc = 'Active racial capstone and evolution key. ' + style.capstone + ' releases the complete base-race pattern of the ' + raceName + '. Mastering this skill proves the base race is ready to evolve into an Advanced racial path. Effect: ' + effectSummary(sk) + '. Progression note: this capstone is required for your first race evolution.';
          }
          sk.v11Detail = true;
        });
      });
    });
  }

  function jobRoleProfile(job){
    const cat = clean(job && (job.v07Category || job.anime || 'Guild Jobs'));
    const name = clean(job && job.name);
    let p = {role:'Adventurer', stance:'versatile dungeon tempo', art:'Questbreaker Technique', mastery:'Guild Legend', stat:'sp', status:'vulnerable', buff:'focus', desc:'balanced dungeon utility, monster knowledge, and flexible tactics'};
    const profiles = {
      Combat:{role:'Frontline Combatant', stance:'weapon tempo, guard breaks, and clean footwork', art:'Formation Breaker', mastery:'Veteran Battle Rhythm', stat:'pa', status:'bleed', buff:'bravery', desc:'melee pressure, armor-breaking hits, and battlefield momentum'},
      'Martial Arts':{role:'Body Arts Fighter', stance:'breath control, footwork, and impact timing', art:'Pressure Point Chain', mastery:'Tempered Body Doctrine', stat:'ag', status:'stun', buff:'focus', desc:'hand-to-hand control, body refinement, and spiritual force'},
      Magic:{role:'Arcane Caster', stance:'spell-circle setup and mana economy', art:'Runic Overcast', mastery:'Grand Formula Memory', stat:'ma', status:'weaken', buff:'focus', desc:'spell shaping, elemental theory, and burst casting'},
      Holy:{role:'Divine Specialist', stance:'oaths, sacred light, and anti-corruption wards', art:'Consecrated Verdict', mastery:'Sanctuary Doctrine', stat:'rs', status:'weaken', buff:'guard', desc:'healing, purification, barriers, and anti-undead pressure'},
      Support:{role:'Battlefield Support', stance:'commands, morale, timing windows, and rescue routes', art:'Rallying Intervention', mastery:'Perfect Team Rhythm', stat:'sp', status:'marked', buff:'guard', desc:'ally buffs, tempo control, and party survival'},
      Ranged:{role:'Ranged Specialist', stance:'sight lines, range control, and weak-point calls', art:'Deadeye Release', mastery:'Perfect Trajectory Sense', stat:'ag', status:'marked', buff:'focus', desc:'precision, tracking, sniping, and ranged pressure'},
      Rogue:{role:'Stealth Specialist', stance:'angles, misdirection, traps, and critical timing', art:'Shadow Entry Cut', mastery:'Vanishing Point Method', stat:'ag', status:'poison', buff:'haste', desc:'stealth, ambushes, poison, and critical damage'},
      Crafting:{role:'Production Specialist', stance:'prepared tools, field repairs, and crafted advantages', art:'Emergency Workbench Trick', mastery:'Masterwork Routine', stat:'sp', status:'vulnerable', buff:'guard', desc:'item creation, gear support, appraisal, and battlefield utility'},
      Dark:{role:'Forbidden Arts User', stance:'risk-reward casting, curses, and soul pressure', art:'Black Oath Invocation', mastery:'Taboo Knowledge Seal', stat:'ma', status:'fear', buff:'bravery', desc:'curses, sacrifice magic, shadows, and dangerous burst power'},
      Monster:{role:'Monster-Class Fighter', stance:'predatory body mechanics and boss-like pressure', art:'Monstrous Breakthrough', mastery:'Boss Creature Instinct', stat:'pa', status:'stun', buff:'thorns', desc:'raw stats, intimidation, monster traits, and brutal trades'},
      'Japanese Fantasy':{role:'Spiritual Warrior', stance:'talismans, sword forms, seals, and yokai tactics', art:'Talisman Blade Form', mastery:'Shrine-Kept Secret Art', stat:'ag', status:'paralysis', buff:'focus', desc:'exorcism, barriers, iai timing, and supernatural hunting'},
      'Cultivation / Murim':{role:'Cultivation Practitioner', stance:'meridian cycling, qi circulation, and dao insight', art:'Meridian Burst Palm', mastery:'Inner World Refinement', stat:'rs', status:'focus', buff:'bravery', desc:'qi control, body tempering, and staged ascension'},
      'Modern Fantasy':{role:'Modern Supernatural Operative', stance:'psychic angles, investigation, and tactical devices', art:'Urban Anomaly Strike', mastery:'Casefile Combat Logic', stat:'sp', status:'confusion', buff:'haste', desc:'esper tricks, occult investigation, and modern-fantasy control'},
      'Guild Jobs':{role:'Guild Adventurer', stance:'quest pacing, survival instincts, and practical teamwork', art:'Dungeon-Clearing Maneuver', mastery:'Veteran Quest Record', stat:'sp', status:'vulnerable', buff:'focus', desc:'general RPG versatility, quest knowledge, and adaptable growth'},
      'Summoner / Tamer':{role:'Contract Specialist', stance:'summon timing, beast commands, and pact circles', art:'Contract Circle Command', mastery:'Master Pact Ledger', stat:'sp', status:'marked', buff:'guard', desc:'familiars, spirits, beasts, and command-based pressure'}
    };
    Object.keys(profiles).forEach(function(k){ if (cat === k) p = profiles[k]; });
    if (has(name,['healer','cleric','priest','saint','medic','cook','maid','butler'])) { p = Object.assign({}, p, {role:'Recovery Support', art:'Life Thread Reversal', mastery:'Emergency Miracle Routine', status:'weaken', buff:'regen', desc:p.desc + ', emergency healing, and condition recovery'}); }
    if (has(name,['assassin','ninja','shinobi','thief','rogue','spy','trickster','phantom'])) { p = Object.assign({}, p, {role:'Ambush Specialist', art:'Blindspot Execution', mastery:'Perfect Vanish Method', status:'poison', buff:'haste', desc:p.desc + ', ambush setup, escape angles, and critical windows'}); }
    if (has(name,['dragon','wyrm'])) { p = Object.assign({}, p, {role:'Draconic Specialist', art:'Dragonline Breaker', mastery:'Wyrm Oath Mastery', status:'burn', buff:'bravery', desc:p.desc + ', dragon power, scale pressure, and breath-like bursts'}); }
    if (has(name,['demon','devil','abyss','warlock','lich','necromancer','reaper','blood','curse'])) { p = Object.assign({}, p, {role:'Dark Contract User', art:'Soul-Debt Severance', mastery:'Forbidden Contract Clause', status:'fear', buff:'bravery', desc:p.desc + ', soul debt, curses, and high-risk power'}); }
    if (has(name,['king','queen','emperor','commander','warlord','general','noble','royal'])) { p = Object.assign({}, p, {role:'Command Authority', art:'Sovereign Order', mastery:'Battlefield Mandate', status:'marked', buff:'bravery', desc:p.desc + ', command pressure, authority, and formation buffs'}); }
    return p;
  }

  function activeOptionsFor(job, sk, role, stageIndex){
    const tier = capTier(job.class_tier || 'Base');
    const powBoost = tier === 'Hidden' ? 22 : tier === 'Rare' ? 15 : tier === 'Specialist' ? 10 : tier === 'Advanced' ? 6 : 0;
    const opts = {mp: sk.mp || (10 + stageIndex * 8), pow: (sk.pow || 44) + powBoost, st: sk.st || role.status, sc: Math.max(sk.sc || 0.36, 0.36), buf: sk.buf || null};
    const cat = clean(job.v07Category || job.anime || 'Guild Jobs');
    const n = clean(job.name).toLowerCase();
    if (cat === 'Combat' || /warrior|fighter|sword|knight|samurai|lancer|gladiator|champion|vanguard/.test(n)) { opts.hits = Math.max(sk.hits || 1, tier === 'Base' ? 2 : 3); }
    if (cat === 'Magic' || /mage|wizard|sorcerer|element|archmage|spell|rune|arcane/.test(n)) { opts.aoe = tier === 'Specialist' || tier === 'Rare' || tier === 'Hidden' || !!sk.aoe; opts.buf = opts.buf || 'focus'; }
    if (cat === 'Holy' || /healer|cleric|priest|saint|oracle|purifier|miracle/.test(n)) { opts.heal = /healer|cleric|priest|saint|miracle|medic/.test(n) ? 0.18 + Math.min(stageIndex,3)*0.04 : sk.heal; opts.cleanse = /purifier|saint|priest|cleric|exorcist|miracle/.test(n) || !!sk.cleanse; opts.buf = opts.buf || 'guard'; }
    if (cat === 'Support' || /bard|dancer|strategist|commander|teacher|cook|buffer|maid|butler/.test(n)) { opts.buf = opts.buf || role.buff || 'guard'; opts.mpRestorePct = /bard|dancer|strategist|teacher|librarian|sage/.test(n) ? 0.08 : sk.mpRestorePct; }
    if (cat === 'Rogue' || /rogue|thief|assassin|ninja|spy|trickster|phantom|shadow/.test(n)) { opts.hits = Math.max(sk.hits || 1, 3); opts.execute = Math.max(sk.execute || 0, tier === 'Hidden' ? 0.35 : 0.25); }
    if (cat === 'Ranged' || /archer|hunter|sniper|gun|marksman|rifle|bullet|bow/.test(n)) { opts.st = 'marked'; opts.hits = Math.max(sk.hits || 1, 2); }
    if (cat === 'Dark' || /dark|curse|blood|reaper|abyss|lich|warlock|witch|hex|soul/.test(n)) { opts.drain = true; opts.hpCostPct = tier === 'Rare' || tier === 'Hidden' ? 0.06 : sk.hpCostPct; }
    if (cat === 'Crafting' || /smith|alchemist|artificer|engineer|merchant|appraiser|chef|tailor|scribe/.test(n)) { opts.buf = opts.buf || 'guard'; opts.st = opts.st || 'vulnerable'; opts.cleanse = /alchemist|potion|herbalist|chef/.test(n) || !!sk.cleanse; }
    if (cat === 'Summoner / Tamer' || /summon|tamer|contract|familiar|golem|beast|dragon/.test(n)) { opts.aoe = tier !== 'Base' || !!sk.aoe; opts.st = opts.st || 'marked'; opts.buf = opts.buf || 'guard'; }
    if (cat === 'Monster' || /monster|demon lord|boss|chimera|slime|vampire|werebeast|oni|goblin|orc/.test(n)) { opts.drain = /vampire|slime|predator|soul/.test(n) || !!sk.drain; opts.buf = opts.buf || 'thorns'; }
    return opts;
  }

  function rewriteJobSkills(){
    Object.entries(JOB_DATA || {}).forEach(function(pair){
      const job = pair[1]; if (!job || !Array.isArray(job.skills)) return;
      const role = jobRoleProfile(job); const tier = capTier(job.class_tier || 'Base');
      const branchNote = job.req && job.req.branch != null ? (job.req.branch === 0 ? 'main branch' : 'alternate branch') : 'base path';
      job.skills.forEach(function(tierArr, index){
        const list = tierArr[1] || [];
        list.forEach(function(sk){
          if (!sk) return;
          const label = levelLabelFromSkill(sk);
          if (sk.type === 'p' && /form|core/i.test(sk.id || sk.name || '') && label !== 'Mastery' && label !== 'Capstone') {
            sk.name = job.name + ' Discipline: ' + role.stance;
            sk.desc = 'Passive ' + tier + ' class identity. ' + job.name + ' trains ' + role.desc + '. This skill defines the path before the active attack arrives. Effect: ' + effectSummary(sk) + '. Path: ' + branchNote + '.';
          } else if (sk.type === 'a' || /art|tech/i.test(sk.id || sk.name || '')) {
            sk.name = job.name + ' Art: ' + role.art;
            setActiveFlavor(sk, activeOptionsFor(job, sk, role, index));
            sk.desc = 'Active ' + tier + ' technique. ' + role.art + ' turns the ' + job.name + ' role into a signature combat option: ' + role.desc + '. Effect: ' + effectSummary(sk) + '. Combo note: use it to create the opening your next job path wants. Path: ' + branchNote + '.';
          } else {
            sk.name = job.name + ' Mastery: ' + role.mastery;
            sk.type = 'p';
            sk.desc = 'Passive mastery capstone. ' + role.mastery + ' represents full training in the ' + job.name + ' path and makes the class feel completed instead of generic. Effect: ' + effectSummary(sk) + '. Progression note: mastering this job is required before taking a new job under the sequential job rule.';
          }
          sk.v11Detail = true;
        });
      });
    });
  }

  function rewriteShopSkills(){
    if (Array.isArray(SPELLS)) {
      SPELLS.forEach(function(sp, idx){
        if (!sp) return;
        const school = clean(sp.anime || 'Fantasy Art');
        const castShape = sp.aoe ? 'area-control spell that pressures every enemy' : 'focused single-target technique';
        const extras = [sp.status && ('inflicts ' + statusName(sp.status)), sp.selfBuff && ('grants ' + statusName(sp.selfBuff)), sp.power && ('Power ' + sp.power), sp.mp && (sp.mp + ' MP')].filter(Boolean).join(' · ');
        sp.desc = school + ' library technique. ' + sp.name + ' is a ' + castShape + ' built for fantasy adventurers instead of anime-source shops. Effect: ' + extras + '. Use it as a purchased spell option that complements, not replaces, your race/job skill tree.';
        sp.v11Detail = true;
      });
    }
    if (Array.isArray(EQUIPMENT_DATA)) {
      const slotVerb = {head:'Insight', chest:'Bulwark', arms:'Technique', legs:'Footwork', accessory:'Resonance'};
      EQUIPMENT_DATA.forEach(function(it){
        if (!it) return;
        const tier = it.tier || 1;
        const setName = clean(it.setName || it.anime || 'Adventurer Set');
        const slotWord = slotVerb[it.slot] || 'Technique';
        const skillTitle = setName.replace(/ Set$/,'') + ' ' + slotWord + ' ' + ['I','II','III','IV','V'][Math.max(0,Math.min(4,tier-1))];
        it.skill = it.skill || {};
        it.skill.name = skillTitle;
        it.skill.desc = 'Equipment skill. ' + skillTitle + ' is tied to the ' + clean(it.name) + ' and improves the set fantasy through ' + statText(it.bon) + '. Full set identity: ' + clean(it.setSkill || 'Set Mastery') + '. This is a gear-based skill, separate from race/job leveling.';
        it.desc = clean(it.name) + ' — ' + clean(it.anime || 'Fantasy Gear') + '. Slot: ' + clean(it.slot) + '. Tier ' + tier + '/5. Bonuses: ' + statText(it.bon) + '. Gear skill: ' + it.skill.name + '. Full set bonus: ' + clean(it.setSkill || 'Set Mastery') + '.';
        it.v11Detail = true;
      });
    }
    if (Array.isArray(POTIONS)) {
      POTIONS.forEach(function(p){
        if (!p) return;
        const effects = [p.hp && ('HP +' + p.hp), p.mp && ('MP +' + p.mp), p.full && 'full HP/MP restore', p.cure && ('cures ' + p.cure.map(statusName).join(', ')), p.cureAll && 'cures all negative effects', p.buff && ('grants ' + statusName(p.buff))].filter(Boolean).join(' · ');
        p.desc = clean(p.desc) + ' Tactical use: ' + (effects || 'utility item') + '. Best used when a boss or raid encounter forces resource management.';
      });
    }
    if (Array.isArray(WEAPONS)) {
      WEAPONS.forEach(function(w){
        if (!w) return;
        w.desc = clean(w.desc) + ' Weapon identity: this blacksmith item is built around ' + statusName(w.statusId) + ' pressure and gives physical builds a distinct combat flavor.';
      });
    }
  }

  function allSkillSourcesV11(){
    const map = {};
    function collectFrom(data){
      Object.values(data || {}).forEach(function(obj){
        (obj.skills || []).forEach(function(t){ (t[1] || []).forEach(function(sk){ if (sk && sk.id) map[sk.id] = sk; }); });
      });
    }
    collectFrom(RACE_DATA); collectFrom(JOB_DATA); return map;
  }
  function reapplyLearnedSkillDetailsV11(){
    if (!G) return;
    const map = allSkillSourcesV11();
    if (Array.isArray(G.learned_skills)) {
      G.learned_skills = G.learned_skills.map(function(sk){
        if (!sk || !sk.id || !map[sk.id]) return sk;
        return Object.assign({}, sk, map[sk.id]);
      });
    }
    if (Array.isArray(G.pending_skill_picks)) {
      G.pending_skill_picks.forEach(function(pick){
        if (!pick || !Array.isArray(pick.opts)) return;
        pick.opts = pick.opts.map(function(sk){ return sk && sk.id && map[sk.id] ? Object.assign({}, sk, map[sk.id]) : sk; });
      });
    }
  }

  rewriteRaceSkills();
  rewriteJobSkills();
  rewriteShopSkills();

  const _ensureGameCollections_v11_prev = ensureGameCollections;
  ensureGameCollections = function(){
    _ensureGameCollections_v11_prev();
    reapplyLearnedSkillDetailsV11();
    if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = {};
    G.save_meta.version = V11_VERSION;
  };

  const _skill_screen_v11_prev = typeof skill_screen === 'function' ? skill_screen : null;
  if (_skill_screen_v11_prev) {
    skill_screen = function(){
      reapplyLearnedSkillDetailsV11();
      _skill_screen_v11_prev();
    };
  }

  const _expansion_update_screen_v11_prev = expansion_update_screen;
  expansion_update_screen = function(){
    clearOutput(); showBattlePanel(false);
    print('UPDATE v0.11 — DETAILED UNIQUE SKILLS', 'highlight');
    print('Race skills now have clearer racial identities, capstone wording, and evolution notes.', 'success');
    print('Job skills now have role-specific names, richer descriptions, and more distinct active/passive effects.', 'success');
    print('Purchased spells, gear skills, potion descriptions, and weapon descriptions were also rewritten with fantasy detail.', 'info');
    print('Existing saves will refresh learned skill names/descriptions when loaded.', 'info');
    showChoices([['⚔ Character Status', character_screen], ['📚 Skill Screen', skill_screen], ['📜 Base Job Registry', class_registry_screen], ['← Back', returnFromHelp]]);
  };

  function injectV11Settings(){
    var panel = document.getElementById('settings-panel');
    if (!panel || document.getElementById('v11-settings-section')) return;
    var sections = Array.prototype.slice.call(panel.querySelectorAll('.sp-section'));
    var saveSection = sections.find(function(s){ return /Save \/ Load/.test(s.textContent); });
    var div = document.createElement('div');
    div.className = 'sp-section';
    div.id = 'v11-settings-section';
    div.innerHTML = '<h3>Update v0.11</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Detailed unique skill pass: race skills, job skills, shop spells, equipment skills, potions, and weapon descriptions now have stronger fantasy identity.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); expansion_update_screen()">🆕 Update Notes</button><button class="sp-btn" onclick="closeSettingsPanel(); skill_screen()">📚 Skill Screen</button></div>';
    if (saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
  }
  injectV11Settings();
  ensureGameCollections();
  window.FANTASY_SKILL_DETAIL_VERSION = V11_VERSION;
})();

// ── Mobile startup safety helpers ─────────────────────────────
window.addEventListener('error', function (event) {
    var out = document.getElementById('output');
    if (!out) return;
    var msg = document.createElement('p');
    msg.className = 'danger';
    msg.textContent = 'Startup error: ' + (event.message || 'unknown error') + '. Try refreshing the page.';
    out.appendChild(msg);
});
window.addEventListener('unhandledrejection', function (event) {
    var out = document.getElementById('output');
    if (!out) return;
    var msg = document.createElement('p');
    msg.className = 'danger';
    msg.textContent = 'Game action error: ' + ((event.reason && event.reason.message) || event.reason || 'unknown error') + '.';
    out.appendChild(msg);
});
(function enableTouchButtons(){
    document.addEventListener('touchend', function(e){
        var btn = e.target && e.target.closest ? e.target.closest('button') : null;
        if (!btn || btn.disabled) return;
        btn.blur();
    }, {passive:true});
})();

// ── Start ───────────────────────────────────────────────
var qlfb = document.getElementById('quicklook-fallback');
if (qlfb) qlfb.remove();
updateStats();
pick_race();

// ═══════════════════════════════════════════════════════════════
// v0.12 — Next Evolution / Job Upgrade Preview on Character Status
// Requested change:
// - When the base race or current job is maxed, show the next available
//   race evolution and job/class upgrade directly on Character Status.
// - Do not show the full class path all the time; only show the immediate
//   next step created by the thing the player just mastered.
// ═══════════════════════════════════════════════════════════════
(function installV12NextProgressionPreview(){
  var V12_VERSION = 'v0.12-next-evolution-status-preview';

  function ownedJobIds(){
    ensureGameCollections();
    return (G.jobs || []).map(function(j){ return Number(j.id); });
  }
  function ownsJobId(id){
    id = Number(id);
    return ownedJobIds().indexOf(id) !== -1;
  }
  function jobEntry(id){
    id = Number(id);
    return (G.jobs || []).find(function(j){ return Number(j.id) === id; }) || null;
  }
  function jobLevel(id){
    var e = jobEntry(id);
    return e ? (Number(e.lv) || 0) : 0;
  }
  function jobMax(id){
    var j = JOB_DATA[Number(id)];
    return j ? (Number(j.max_lv) || 0) : 0;
  }
  function isOwnedJobMaxed(id){
    var j = JOB_DATA[Number(id)];
    return !!j && ownsJobId(id) && jobLevel(id) >= jobMax(id);
  }
  function getCurrentJobEntryV12(){
    ensureGameCollections();
    var unmaxed = (G.jobs || []).find(function(entry){
      var j = JOB_DATA[Number(entry.id)];
      return j && (Number(entry.lv) || 0) < (Number(j.max_lv) || 0);
    });
    if (unmaxed) return unmaxed;
    if (G.jobs && G.jobs.length) return G.jobs[G.jobs.length - 1];
    return null;
  }
  function allOwnedJobsMaxedV12(){
    ensureGameCollections();
    return !(G.jobs || []).some(function(entry){
      var j = JOB_DATA[Number(entry.id)];
      return j && (Number(entry.lv) || 0) < (Number(j.max_lv) || 0);
    });
  }
  function hasSkillIdV12(id){
    return Array.isArray(G.learned_skills) && G.learned_skills.some(function(sk){ return sk && sk.id === id; });
  }
  function tierRankV12(j){
    var t = String((j && (j.class_tier || j.tier)) || 'Base');
    var order = {Base:0, Advanced:1, Specialist:2, Rare:3, Hidden:4};
    return order[t] === undefined ? 99 : order[t];
  }
  function pathTypeV12(j){
    var r = (j && j.req) || {};
    if (r.raceEvolution || j.race_evolution) return 'Race Evolution';
    if (r.jobBranch) return 'Job Upgrade';
    return 'Class Path';
  }
  function canAddPathV12(id, j){
    try { return typeof canAddJob === 'function' && canAddJob(Number(id)); }
    catch(e){ return false; }
  }
  function stateForRaceEvolutionV12(id, j){
    var r = (j && j.req) || {};
    var race = RACE_DATA[G.race_id];
    if (!race || !r.raceEvolution) return {ready:false, text:'Not a race evolution.'};
    if (Number(r.raceId) !== Number(G.race_id)) return {ready:false, text:'Requires base race: ' + (r.raceName || 'another race') + '.'};
    if (r.stage === 0) {
      if ((Number(G.race_lv) || 0) < (Number(race.max_lv) || 0)) return {ready:false, text:'Max your base race first: Lv.' + G.race_lv + ' / ' + race.max_lv + '.'};
      if (r.keySkill && !hasSkillIdV12(r.keySkill)) return {ready:false, text:'Race is maxed, but you still need to choose/learn the capstone skill above.'};
      if (!allOwnedJobsMaxedV12()) return {ready:false, text:'Race evolution is ready, but your current job must be mastered before adding a new path.'};
      return {ready:true, text:'Ready — base race mastered and capstone learned.'};
    }
    if (!isOwnedJobMaxed(r.previousJobId)) return {ready:false, text:'Master previous evolution first: ' + ((JOB_DATA[r.previousJobId] && JOB_DATA[r.previousJobId].name) || 'previous stage') + '.'};
    if (String(j.class_tier || '') === 'Hidden' && (((G.achievements && G.achievements.secret_research) || 0) < 1) && (((G.achievements && G.achievements.totalKills) || 0) < 25)) {
      return {ready:false, text:'Previous evolution mastered. Hidden stage also needs Secret Research 1 or 25 total kills.'};
    }
    if (!allOwnedJobsMaxedV12()) return {ready:false, text:'Evolution requirement met, but your current job must be mastered before adding a new path.'};
    return {ready:true, text:'Ready — previous race evolution mastered.'};
  }
  function stateForJobUpgradeV12(id, j){
    var r = (j && j.req) || {};
    if (!r.jobBranch) return {ready:false, text:'Not a job upgrade.'};
    var prev = JOB_DATA[r.previousJobId];
    if (!isOwnedJobMaxed(r.previousJobId)) return {ready:false, text:'Master ' + (prev ? prev.name : 'the previous job') + ' first.'};
    if (String(j.class_tier || '') === 'Specialist' && (Number(G.total_lv) || 0) < 25) return {ready:false, text:'Previous job mastered. Reach Total Level 25+ to unlock this Specialist path.'};
    if (String(j.class_tier || '') === 'Rare') {
      if ((Number(G.total_lv) || 0) < 40) return {ready:false, text:'Previous job mastered. Reach Total Level 40+ to unlock this Rare path.'};
      if (((G.achievements && G.achievements.totalKills) || 0) < 10) return {ready:false, text:'Previous job mastered. Defeat 10 total enemies to unlock this Rare path.'};
    }
    if (String(j.class_tier || '') === 'Hidden') {
      if ((Number(G.total_lv) || 0) < 60) return {ready:false, text:'Previous job mastered. Reach Total Level 60+ to reveal the Hidden path.'};
      if ((((G.achievements && G.achievements.secret_research) || 0) < 2) && (((G.achievements && G.achievements.totalKills) || 0) < 35)) return {ready:false, text:'Previous job mastered. Hidden path needs Secret Research 2 or 35 total kills.'};
    }
    if (!allOwnedJobsMaxedV12()) return {ready:false, text:'Upgrade requirement met, but another owned job is not mastered yet.'};
    return {ready:true, text:'Ready — current job mastered and upgrade requirement met.'};
  }
  function candidateRaceEvolutionsV12(){
    var out = [];
    var race = RACE_DATA[G.race_id];
    if (!race) return out;
    Object.entries(JOB_DATA).forEach(function(pair){
      var id = Number(pair[0]), j = pair[1], r = (j && j.req) || {};
      if (!j || !r.raceEvolution || ownsJobId(id)) return;
      if (Number(r.raceId) !== Number(G.race_id)) return;
      if (r.stage === 0) {
        if ((Number(G.race_lv) || 0) >= (Number(race.max_lv) || 0)) out.push([id,j]);
      } else if (r.previousJobId && isOwnedJobMaxed(r.previousJobId)) {
        out.push([id,j]);
      }
    });
    return out.sort(function(a,b){
      var ar = (a[1].req || {}), br = (b[1].req || {});
      return (Number(ar.stage) - Number(br.stage)) || (Number(ar.branch) - Number(br.branch)) || a[1].name.localeCompare(b[1].name);
    });
  }
  function candidateJobUpgradesV12(){
    var current = getCurrentJobEntryV12();
    if (!current) return {current:null, candidates:[]};
    var currentDef = JOB_DATA[Number(current.id)];
    if (!currentDef || (Number(current.lv) || 0) < (Number(currentDef.max_lv) || 0)) return {current:current, candidates:[]};
    var out = [];
    Object.entries(JOB_DATA).forEach(function(pair){
      var id = Number(pair[0]), j = pair[1], r = (j && j.req) || {};
      if (!j || !r.jobBranch || ownsJobId(id)) return;
      if (Number(r.previousJobId) === Number(current.id)) out.push([id,j]);
    });
    out.sort(function(a,b){ return (tierRankV12(a[1]) - tierRankV12(b[1])) || Number((a[1].req||{}).branch || 0) - Number((b[1].req||{}).branch || 0) || a[1].name.localeCompare(b[1].name); });
    return {current:current, candidates:out};
  }
  function renderCandidateButtonV12(parent, pair, kind){
    var id = Number(pair[0]), j = pair[1];
    var st = kind === 'race' ? stateForRaceEvolutionV12(id, j) : stateForJobUpgradeV12(id, j);
    var addReady = canAddPathV12(id, j);
    var b = document.createElement('button');
    b.className = 'btn-levelup';
    b.style.cssText = 'width:100%;margin-top:5px;text-align:left;white-space:pre-wrap;line-height:1.45';
    b.textContent = (addReady ? '[READY] ' : '[NEXT] ') + pathTypeV12(j) + ': ' + j.name + ' — ' + classTierLabel(j) + '\n' +
      'Status: ' + (addReady ? 'Can be added now.' : st.text) + '\n' +
      'Effect Focus: ' + (j.desc || 'A new path for your build.');
    b.disabled = !addReady;
    if (addReady) b.onclick = function(){ addJobPath(id); };
    parent.appendChild(b);
  }
  function addNextProgressionPanelV12(){
    if (document.getElementById('v12-next-progression-panel')) return;
    ensureGameCollections();
    if (typeof checkJobUnlocks === 'function') checkJobUnlocks(true);

    var race = RACE_DATA[G.race_id];
    var raceCandidates = candidateRaceEvolutionsV12();
    var jobInfo = candidateJobUpgradesV12();
    var hasRaceReadyToShow = race && (Number(G.race_lv) || 0) >= (Number(race.max_lv) || 0) && raceCandidates.length > 0;
    var currentJobDef = jobInfo.current ? JOB_DATA[Number(jobInfo.current.id)] : null;
    var currentJobIsMaxed = !!(jobInfo.current && currentJobDef && (Number(jobInfo.current.lv) || 0) >= (Number(currentJobDef.max_lv) || 0));
    var hasJobReadyToShow = currentJobIsMaxed;

    if (!hasRaceReadyToShow && !hasJobReadyToShow) return;

    var div = document.createElement('div');
    div.className = 'cs-exp-row';
    div.id = 'v12-next-progression-panel';
    div.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">NEXT EVOLUTION / JOB UPGRADE</div>' +
      '<div style="font-size:11px;color:#8aaac8;line-height:1.5;margin-bottom:6px">This panel only appears when your base race or current job is maxed. It shows the immediate next step, not the full class tree.</div>';

    if (hasRaceReadyToShow) {
      var title = document.createElement('div');
      title.style.cssText = 'margin-top:6px;font-size:11px;font-weight:700;color:#48cae4;letter-spacing:1px;text-transform:uppercase';
      title.textContent = 'Race Evolution unlocked from ' + race.name + ' Lv.' + G.race_lv + ' / ' + race.max_lv;
      div.appendChild(title);
      raceCandidates.forEach(function(pair){ renderCandidateButtonV12(div, pair, 'race'); });
    }

    if (hasJobReadyToShow) {
      var jt = document.createElement('div');
      jt.style.cssText = 'margin-top:8px;font-size:11px;font-weight:700;color:#a78bfa;letter-spacing:1px;text-transform:uppercase';
      jt.textContent = 'Job Upgrade from ' + currentJobDef.name + ' Lv.' + jobInfo.current.lv + ' / ' + currentJobDef.max_lv;
      div.appendChild(jt);
      if (jobInfo.candidates.length) {
        jobInfo.candidates.forEach(function(pair){ renderCandidateButtonV12(div, pair, 'job'); });
      } else {
        var none = document.createElement('div');
        none.style.cssText = 'font-size:11px;color:#8aaac8;line-height:1.5;margin-top:5px';
        none.textContent = 'This job is fully mastered and has no direct next upgrade. Choose another Base job from the registry once all owned jobs are mastered.';
        div.appendChild(none);
      }
    }

    $ch.appendChild(div);
  }

  var _character_screen_v12_prev = character_screen;
  character_screen = function(){
    _character_screen_v12_prev();
    addNextProgressionPanelV12();
  };

  var _job_requirement_screen_v12_prev = job_requirement_screen;
  job_requirement_screen = function(){
    _job_requirement_screen_v12_prev();
    print('v0.12 NOTE', 'highlight');
    print('When your base race or current job is maxed, Character Status now shows the immediate next race evolution or job upgrade panel.', 'success');
  };

  function injectV12Settings(){
    var panel = document.getElementById('settings-panel');
    if (!panel || document.getElementById('v12-settings-section')) return;
    var saveSection = Array.prototype.slice.call(panel.querySelectorAll('.sp-section')).find(function(s){ return /Save \/ Load/.test(s.textContent || ''); });
    var div = document.createElement('div');
    div.className = 'sp-section';
    div.id = 'v12-settings-section';
    div.innerHTML = '<h3>Update v0.12</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Character Status now shows the next race evolution or job upgrade whenever the current race/job is maxed.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); character_screen()">⚔ Character Status</button><button class="sp-btn" onclick="closeSettingsPanel(); job_requirement_screen()">📋 Requirements</button></div>';
    if (saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
  }
  injectV12Settings();

  ensureGameCollections();
  if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = {};
  G.save_meta.version = V12_VERSION;
})();


// ═══════════════════════════════════════════════════════════════
