// v0.13 — Separate Race Evolution + Job Upgrade Tracks
// Fix:
// - Race evolution is unlocked only by maxing the current race/evolution stage.
// - Job upgrades are unlocked only by maxing the current NON-race job/class.
// - A new race evolution path no longer blocks job upgrades.
// ═══════════════════════════════════════════════════════════════
(function installV13SeparateRaceJobProgression(){
  var V13_VERSION = 'v0.13-separate-race-job-progression';

  function isRaceEvolutionJobV13(j){
    var r = (j && j.req) || {};
    return !!(j && (r.raceEvolution || j.race_evolution || String(j.anime || '') === 'Race Evolution'));
  }
  function isJobBranchV13(j){
    var r = (j && j.req) || {};
    return !!(j && r.jobBranch && !isRaceEvolutionJobV13(j));
  }
  function isBaseJobV13(j){
    if (!j || isRaceEvolutionJobV13(j)) return false;
    var tier = String(j.class_tier || j.tier || 'Base').toLowerCase();
    return !j.req && tier === 'base';
  }
  function ownsJobIdV13(id){
    id = Number(id);
    return Array.isArray(G.jobs) && G.jobs.some(function(e){ return Number(e.id) === id; });
  }
  function jobEntryV13(id){
    id = Number(id);
    return (G.jobs || []).find(function(e){ return Number(e.id) === id; }) || null;
  }
  function jobLevelV13(id){
    var e = jobEntryV13(id);
    return e ? (Number(e.lv) || 0) : 0;
  }
  function jobMaxV13(id){
    var j = JOB_DATA[Number(id)];
    return j ? (Number(j.max_lv) || 0) : 0;
  }
  function isOwnedJobMaxedV13(id){
    return ownsJobIdV13(id) && jobLevelV13(id) >= jobMaxV13(id);
  }
  function normalJobEntriesV13(){
    ensureGameCollections();
    return (G.jobs || []).filter(function(e){ return !isRaceEvolutionJobV13(JOB_DATA[Number(e.id)]); });
  }
  function raceEvolutionEntriesV13(){
    ensureGameCollections();
    return (G.jobs || []).filter(function(e){ return isRaceEvolutionJobV13(JOB_DATA[Number(e.id)]); });
  }
  function currentRaceEvolutionEntryV13(){
    var currentRaceId = Number(G.race_id);
    var unmaxed = raceEvolutionEntriesV13().find(function(e){
      var j = JOB_DATA[Number(e.id)], r = (j && j.req) || {};
      return j && Number(r.raceId) === currentRaceId && (Number(e.lv) || 0) < (Number(j.max_lv) || 0);
    });
    return unmaxed || null;
  }
  function currentRaceEvolutionGateTextV13(){
    var cur = currentRaceEvolutionEntryV13();
    if (!cur) return '';
    var j = JOB_DATA[Number(cur.id)];
    return 'Max your current race evolution first: ' + (j ? j.name : 'current evolution') + ' Lv.' + (Number(cur.lv) || 0) + ' / ' + (j ? j.max_lv : '?') + '.';
  }
  function raceEvolutionTrackClearV13(){
    return !currentRaceEvolutionEntryV13();
  }
  function currentNormalJobEntryV13(){
    var normal = normalJobEntriesV13();
    var unmaxed = normal.find(function(e){
      var j = JOB_DATA[Number(e.id)];
      return j && (Number(e.lv) || 0) < (Number(j.max_lv) || 0);
    });
    if (unmaxed) return unmaxed;
    return normal.length ? normal[normal.length - 1] : null;
  }
  function normalJobsMasteredV13(){
    return !normalJobEntriesV13().some(function(e){
      var j = JOB_DATA[Number(e.id)];
      return j && (Number(e.lv) || 0) < (Number(j.max_lv) || 0);
    });
  }
  function currentNormalJobGateTextV13(){
    var cur = currentNormalJobEntryV13();
    if (!cur) return 'Choose your first Base job.';
    var j = JOB_DATA[Number(cur.id)];
    if (!j) return 'Current job data is missing.';
    if ((Number(cur.lv) || 0) >= (Number(j.max_lv) || 0)) return j.name + ' is mastered at Lv.' + j.max_lv + '. You may take the next job upgrade or another base job.';
    return 'Max your current job first: ' + j.name + ' Lv.' + (Number(cur.lv) || 0) + ' / ' + j.max_lv + '.';
  }
  function hasSkillIdV13(id){
    return Array.isArray(G.learned_skills) && G.learned_skills.some(function(sk){ return sk && sk.id === id; });
  }
  function hasRaceCapstoneSkillV13(raceName){
    var capId = 'race_' + String(raceName || '').toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'') + '_limit_15';
    return hasSkillIdV13(capId) || (Array.isArray(G.learned_skills) && G.learned_skills.some(function(sk){
      return sk && /limit|capstone|apex/i.test(String(sk.name || '')) && String(sk.id || '').indexOf(capId.replace('_limit_15','')) !== -1;
    }));
  }
  function raceEvolutionUnlockStateV13(id, j){
    j = j || JOB_DATA[Number(id)];
    var r = (j && j.req) || {};
    var race = RACE_DATA[G.race_id];
    if (!j || !r.raceEvolution) return {ok:false, why:'Not a race evolution path.'};
    if (!race || Number(r.raceId) !== Number(G.race_id)) return {ok:false, why:'Requires base race: ' + (r.raceName || 'another race') + '.'};
    if (ownsJobIdV13(id)) return {ok:false, why:'Already owned.'};
    if (!raceEvolutionTrackClearV13()) return {ok:false, why:currentRaceEvolutionGateTextV13()};
    if (Number(r.stage) === 0) {
      if ((Number(G.race_lv) || 0) < (Number(race.max_lv) || 0)) return {ok:false, why:'Max your current race first: ' + race.name + ' Lv.' + (Number(G.race_lv) || 0) + ' / ' + race.max_lv + '.'};
      if (r.keySkill && !hasSkillIdV13(r.keySkill) && !hasRaceCapstoneSkillV13(race.name)) return {ok:false, why:'Race is maxed, but you still need the race capstone skill.'};
      return {ok:true, why:'Ready — current race is maxed.'};
    }
    var prevId = Number(r.previousJobId);
    var prev = JOB_DATA[prevId];
    if (!isOwnedJobMaxedV13(prevId)) return {ok:false, why:'Max your current race evolution first: ' + (prev ? prev.name : 'previous evolution') + ' Lv.' + jobLevelV13(prevId) + ' / ' + (prev ? prev.max_lv : '?') + '.'};
    if (String(j.class_tier || '') === 'Hidden' && (((G.achievements && G.achievements.secret_research) || 0) < 1) && (((G.achievements && G.achievements.totalKills) || 0) < 25)) {
      return {ok:false, why:'Current evolution is maxed. Hidden evolution also needs Secret Research 1 or 25 total kills.'};
    }
    return {ok:true, why:'Ready — current race evolution is maxed.'};
  }
  function jobUnlockStateV13(id, j){
    id = Number(id);
    j = j || JOB_DATA[id];
    if (!j) return {ok:false, why:'Unknown job path.'};
    if (ownsJobIdV13(id)) return {ok:false, why:'Already owned.'};
    if (isRaceEvolutionJobV13(j)) return raceEvolutionUnlockStateV13(id, j);
    if (isBaseJobV13(j)) {
      if (!normalJobsMasteredV13()) return {ok:false, why:currentNormalJobGateTextV13()};
      return {ok:true, why:'Base job available because your current job is mastered.'};
    }
    var r = j.req || {};
    if (r.jobBranch) {
      var prevId = Number(r.previousJobId);
      var prev = JOB_DATA[prevId];
      if (!isOwnedJobMaxedV13(prevId)) return {ok:false, why:'Master your current job first: ' + (prev ? prev.name : 'previous job') + ' Lv.' + jobLevelV13(prevId) + ' / ' + (prev ? prev.max_lv : '?') + '.'};
      if (!normalJobsMasteredV13()) return {ok:false, why:currentNormalJobGateTextV13()};
      if (String(j.class_tier || '') === 'Specialist' && (Number(G.total_lv) || 0) < 25) return {ok:false, why:'Current job mastered. Reach Total Level 25+ for this Specialist path.'};
      if (String(j.class_tier || '') === 'Rare') {
        if ((Number(G.total_lv) || 0) < 40) return {ok:false, why:'Current job mastered. Reach Total Level 40+ for this Rare path.'};
        if (((G.achievements && G.achievements.totalKills) || 0) < 10) return {ok:false, why:'Current job mastered. Defeat 10 total enemies for this Rare path.'};
      }
      if (String(j.class_tier || '') === 'Hidden') {
        if ((Number(G.total_lv) || 0) < 60) return {ok:false, why:'Current job mastered. Reach Total Level 60+ to reveal this Hidden path.'};
        if ((((G.achievements && G.achievements.secret_research) || 0) < 2) && (((G.achievements && G.achievements.totalKills) || 0) < 35)) return {ok:false, why:'Current job mastered. Hidden path needs Secret Research 2 or 35 total kills.'};
      }
      return {ok:true, why:'Ready — current job is maxed.'};
    }
    return {ok:false, why:'Continue leveling, fighting, and mastering earlier paths.'};
  }

  // Replace the old global gates. Do not call the older canAddJob/genericJobUnlockState,
  // because v0.10 treated race evolutions as normal jobs and blocked job upgrades.
  genericJobUnlockState = function(id, j){ return jobUnlockStateV13(Number(id), j || JOB_DATA[Number(id)]); };
  canAddJob = function(id){ var j = JOB_DATA[Number(id)]; return !!j && jobUnlockStateV13(Number(id), j).ok; };
  jobPrereqText = function(id, j){ var st = jobUnlockStateV13(Number(id), j || JOB_DATA[Number(id)]); return (st.ok ? 'Unlocked — ' : 'Locked — ') + st.why; };
  if (typeof isBaseJob === 'function') {
    isBaseJob = function(j){ return isBaseJobV13(j); };
  }

  var _oldAddJobPathV13 = addJobPath;
  addJobPath = function(id){
    id = Number(id);
    var j = JOB_DATA[id];
    clearOutput();
    showBattlePanel(false);
    if (!j) { print('Unknown path.', 'danger'); return; }
    if (ownsJobIdV13(id)) {
      print('You already own ' + j.name + '.', 'info');
      showChoices([['⚔ Character Status', character_screen], ['📜 Base Job Registry', class_registry_screen], ['← Town Center', town_center]]);
      return;
    }
    var st = jobUnlockStateV13(id, j);
    if (!st.ok) {
      print((isRaceEvolutionJobV13(j) ? 'RACE EVOLUTION LOCKED — ' : 'JOB UPGRADE LOCKED — ') + j.name, 'danger');
      print(st.why, 'narrator');
      if (typeof jobRequirementList === 'function') jobRequirementList(j).forEach(function(req){ print('• ' + req, 'info'); });
      showChoices([['⚔ Character Status', character_screen], ['🧬 Race Evolution', race_evolution_screen], ['📜 Base Job Registry', class_registry_screen]]);
      return;
    }
    G.jobs.push({id:id, lv:0});
    if (!Array.isArray(G.class_unlocks)) G.class_unlocks = [];
    if (G.class_unlocks.indexOf(id) === -1) G.class_unlocks.push(id);
    applyStats();
    updateStats();
    if (typeof saveGame === 'function') { try { saveGame(); } catch(e){} }
    print('⊕ ' + (isRaceEvolutionJobV13(j) ? 'Race evolution added: ' : 'Job path added: ') + j.name + ' [' + (j.class_tier || 'Base') + ']', 'success');
    print('It starts at Lv.0. Spend Level Points to train it. Race evolutions and job upgrades now progress separately.', 'narrator');
    showChoices([['Spend Level Points', character_screen], ['← Character Status', character_screen], ['← Town Center', town_center]]);
  };

  checkJobUnlocks = function(silent){
    ensureGameCollections();
    var found = [];
    Object.entries(JOB_DATA).forEach(function(pair){
      var id = Number(pair[0]), j = pair[1];
      if (ownsJobIdV13(id) || (Array.isArray(G.class_unlocks) && G.class_unlocks.indexOf(id) !== -1)) return;
      var st = jobUnlockStateV13(id, j);
      if (st.ok) {
        G.class_unlocks.push(id);
        found.push(j.name);
        if (!silent) print('◆ Path unlocked: ' + j.name, 'b-system');
      }
    });
    G.class_unlocks = Array.from(new Set((G.class_unlocks || []).map(Number).filter(function(n){ return !Number.isNaN(n); })));
    return found;
  };
  discoverAvailableHiddenJobs = function(silent){ return checkJobUnlocks(silent); };

  function pathLabelV13(j){ return isRaceEvolutionJobV13(j) ? 'Race Evolution' : (isJobBranchV13(j) ? 'Job Upgrade' : 'Base Job'); }
  function tierRankV13(j){ var t = String((j && (j.class_tier || j.tier)) || 'Base'); return ({Base:0,Advanced:1,Specialist:2,Rare:3,Hidden:4})[t] || 0; }
  function raceCandidatesV13(){
    var race = RACE_DATA[G.race_id];
    if (!race) return [];
    return Object.entries(JOB_DATA).filter(function(pair){
      var id = Number(pair[0]), j = pair[1], r = (j && j.req) || {};
      if (!isRaceEvolutionJobV13(j) || ownsJobIdV13(id) || Number(r.raceId) !== Number(G.race_id)) return false;
      if (Number(r.stage) === 0) return (Number(G.race_lv) || 0) >= (Number(race.max_lv) || 0);
      return r.previousJobId && isOwnedJobMaxedV13(r.previousJobId);
    }).sort(function(a,b){ var ar=(a[1].req||{}), br=(b[1].req||{}); return (Number(ar.stage)-Number(br.stage)) || (Number(ar.branch)-Number(br.branch)) || a[1].name.localeCompare(b[1].name); });
  }
  function jobUpgradeCandidatesV13(){
    var cur = currentNormalJobEntryV13();
    if (!cur) return {current:null, candidates:[]};
    var curDef = JOB_DATA[Number(cur.id)];
    if (!curDef || (Number(cur.lv) || 0) < (Number(curDef.max_lv) || 0)) return {current:cur, candidates:[]};
    var out = Object.entries(JOB_DATA).filter(function(pair){
      var id = Number(pair[0]), j = pair[1], r = (j && j.req) || {};
      return isJobBranchV13(j) && !ownsJobIdV13(id) && Number(r.previousJobId) === Number(cur.id);
    }).sort(function(a,b){ return (tierRankV13(a[1])-tierRankV13(b[1])) || Number((a[1].req||{}).branch || 0) - Number((b[1].req||{}).branch || 0) || a[1].name.localeCompare(b[1].name); });
    return {current:cur, candidates:out};
  }
  function addPathButtonV13(parent, pair){
    var id = Number(pair[0]), j = pair[1], st = jobUnlockStateV13(id, j);
    var b = document.createElement('button');
    b.className = 'btn-levelup';
    b.style.cssText = 'width:100%;margin-top:5px;text-align:left;white-space:pre-wrap;line-height:1.45';
    b.textContent = (st.ok ? '[READY] ' : '[NEXT] ') + pathLabelV13(j) + ': ' + j.name + ' — ' + classTierLabel(j) + '\nStatus: ' + st.why + '\n' + (j.desc || 'New progression path.');
    b.disabled = !st.ok;
    if (st.ok) b.onclick = function(){ addJobPath(id); };
    parent.appendChild(b);
  }
  function addV13ProgressionPanel(){
    if (document.getElementById('v13-separate-progression-panel')) return;
    if (typeof checkJobUnlocks === 'function') checkJobUnlocks(true);
    var race = RACE_DATA[G.race_id];
    var raceList = raceCandidatesV13();
    var jobInfo = jobUpgradeCandidatesV13();
    var curJobDef = jobInfo.current ? JOB_DATA[Number(jobInfo.current.id)] : null;
    var curJobMaxed = !!(jobInfo.current && curJobDef && (Number(jobInfo.current.lv) || 0) >= (Number(curJobDef.max_lv) || 0));
    var raceReadyToShow = race && (Number(G.race_lv) || 0) >= (Number(race.max_lv) || 0) && raceList.length;
    if (!raceReadyToShow && !curJobMaxed) return;
    var div = document.createElement('div');
    div.className = 'cs-exp-row';
    div.id = 'v13-separate-progression-panel';
    div.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">NEXT RACE / JOB PROGRESSION</div>' +
      '<div style="font-size:11px;color:#8aaac8;line-height:1.5;margin-bottom:6px">Race evolution and job upgrades are separate. Race evolution checks only the current race/evolution chain. Job upgrades check only your current job/class chain.</div>';
    if (raceReadyToShow) {
      var rt = document.createElement('div');
      rt.style.cssText = 'margin-top:6px;font-size:11px;font-weight:700;color:#48cae4;letter-spacing:1px;text-transform:uppercase';
      rt.textContent = 'Race Evolution from ' + race.name + ' Lv.' + G.race_lv + ' / ' + race.max_lv;
      div.appendChild(rt);
      raceList.forEach(function(pair){ addPathButtonV13(div, pair); });
    }
    if (curJobMaxed) {
      var jt = document.createElement('div');
      jt.style.cssText = 'margin-top:8px;font-size:11px;font-weight:700;color:#a78bfa;letter-spacing:1px;text-transform:uppercase';
      jt.textContent = 'Job Upgrade from ' + curJobDef.name + ' Lv.' + jobInfo.current.lv + ' / ' + curJobDef.max_lv;
      div.appendChild(jt);
      if (jobInfo.candidates.length) jobInfo.candidates.forEach(function(pair){ addPathButtonV13(div, pair); });
      else {
        var none = document.createElement('div');
        none.style.cssText = 'font-size:11px;color:#8aaac8;line-height:1.5;margin-top:5px';
        none.textContent = 'This job is mastered and has no direct upgrade. You may choose another Base job from the registry because your current job is maxed.';
        div.appendChild(none);
      }
    }
    $ch.appendChild(div);
  }

  appendMiniClassRegistry = function(){
    if ((G.level_pts || 0) <= 0) return;
    var div = document.createElement('div');
    div.className = 'cs-exp-row';
    div.id = 'v13-current-job-gate-panel';
    div.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">CURRENT JOB MASTERY GATE</div>' +
      '<div style="font-size:11px;color:#8aaac8;line-height:1.5;margin-bottom:6px">New job upgrades require your current normal job/class to be maxed. Race evolutions are handled separately above and must also be maxed one stage at a time.</div>';
    if (!normalJobsMasteredV13()) {
      var note = document.createElement('div');
      note.style.cssText = 'font-size:11px;color:#8aaac8;line-height:1.5;margin-top:5px';
      note.textContent = currentNormalJobGateTextV13();
      div.appendChild(note);
    } else {
      var info = document.createElement('div');
      info.style.cssText = 'font-size:11px;color:#8aaac8;line-height:1.5;margin-top:5px';
      info.textContent = 'Your current job is maxed. Use the Next Race / Job Progression panel or the Base Job Registry for your next normal job.';
      div.appendChild(info);
      var reg = document.createElement('button');
      reg.className = 'btn-levelup';
      reg.style.cssText = 'width:100%;margin-top:6px';
      reg.textContent = '📜 Open Base Job Registry';
      reg.onclick = class_registry_screen;
      div.appendChild(reg);
    }
    $ch.appendChild(div);
  };

  class_registry_screen = function(){
    ensureGameCollections();
    clearOutput();
    showBattlePanel(false);
    print('BASE JOB REGISTRY — SEPARATE JOB TRACK', 'highlight');
    print('Only Base jobs are listed here. You can add another Base job only when your current normal job/class is maxed. Race evolution levels do not block job upgrades.', 'narrator');
    print(currentNormalJobGateTextV13(), normalJobsMasteredV13() ? 'success' : 'info');
    print('Gold: ' + G.gold + ' · Total Level: ' + G.total_lv + ' / 100 · Level Points: ' + (G.level_pts || 0), 'info');
    $ch.innerHTML = '';
    var groups = {};
    Object.entries(JOB_DATA).forEach(function(pair){
      var id = Number(pair[0]), j = pair[1];
      if (!isBaseJobV13(j)) return;
      var cat = j.anime || j.v07Category || 'Jobs';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push([id,j]);
    });
    Object.entries(groups).forEach(function(group){
      var cat = group[0], list = group[1].sort(function(a,b){ return a[1].name.localeCompare(b[1].name); });
      var hdr = document.createElement('div');
      hdr.style.cssText = 'margin:12px 0 4px;padding:6px 10px;background:linear-gradient(90deg,#12082a,#090e1c);border-left:3px solid #a78bfa;font-family:"Cinzel Decorative",serif;font-size:11px;color:#a78bfa;letter-spacing:2px';
      hdr.textContent = '— ' + cat.toUpperCase() + ' BASE JOBS —';
      $ch.appendChild(hdr);
      list.forEach(function(pair){
        var id = pair[0], j = pair[1], owned = ownsJobIdV13(id), st = jobUnlockStateV13(id,j);
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

  var _character_screen_v13_prev = character_screen;
  character_screen = function(){
    _character_screen_v13_prev();
    Array.prototype.slice.call($ch.querySelectorAll('.cs-exp-row')).forEach(function(panel){
      var txt = panel.textContent || '';
      if (/NEXT EVOLUTION \/ JOB UPGRADE|CURRENT JOB MASTERY GATE/.test(txt) || panel.id === 'v12-next-progression-panel' || panel.id === 'v10-current-job-gate-panel') panel.remove();
    });
    addV13ProgressionPanel();
    if ((G.level_pts || 0) > 0 && !document.getElementById('v13-current-job-gate-panel')) appendMiniClassRegistry();
  };

  var _job_requirement_screen_v13_prev = job_requirement_screen;
  job_requirement_screen = function(){
    _job_requirement_screen_v13_prev();
    print('', 'narrator');
    print('v0.13 CLARIFICATION — SEPARATE TRACKS', 'highlight');
    print('• Race evolution requires only the current race/evolution stage to be maxed.', 'info');
    print('• Job upgrades require only the current normal job/class to be maxed.', 'info');
    print('• Race evolution jobs no longer block job upgrades.', 'success');
  };

  function injectV13Settings(){
    var panel = document.getElementById('settings-panel');
    if (!panel || document.getElementById('v13-settings-section')) return;
    var saveSection = Array.prototype.slice.call(panel.querySelectorAll('.sp-section')).find(function(s){ return /Save \/ Load/.test(s.textContent || ''); });
    var div = document.createElement('div');
    div.className = 'sp-section';
    div.id = 'v13-settings-section';
    div.innerHTML = '<h3>Update v0.13</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Race evolution and job upgrades now progress separately. Race evolutions no longer block job upgrades.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); character_screen()">⚔ Character Status</button><button class="sp-btn" onclick="closeSettingsPanel(); job_requirement_screen()">📋 Requirements</button></div>';
    if (saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
  }
  injectV13Settings();

  ensureGameCollections();
  if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = {};
  G.save_meta.version = V13_VERSION;
})();


// ═══════════════════════════════════════════════════════════════
