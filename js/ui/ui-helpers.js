// UI HELPERS
// ═══════════════════════════════════════════════════════════════
function updateStats() {
    document.getElementById('s-name').textContent  = G.name  || '—';
    document.getElementById('s-class').textContent = G.jobs.length ? JOB_DATA[G.jobs[0].id].name : '—';
    const pts = (G.level_pts > 0 ? ' [Lv+' + G.level_pts + ']' : '') + (G.stat_pts > 0 ? ' [Sp+' + G.stat_pts + ']' : '');
    document.getElementById('s-level').textContent = G.total_lv + pts;
    document.getElementById('s-hp').textContent    = G.hp + '/' + G.max_hp;
    document.getElementById('s-mp').textContent    = G.mp + '/' + G.max_mp;
    document.getElementById('s-gold').textContent  = G.gold;
}

function updateBattlePanel() {
    if (!B) return;
    // Rebuild enemy area
    const area = document.getElementById('b-enemy-area');
    area.innerHTML = '';
    B.enemies.forEach((en, i) => {
        const hp  = B.enemy_hps[i];
        const pct = Math.max(0, (hp / en.hp) * 100);
        const dead = hp <= 0;
        const isCurrent = (i === B.enemy_idx);
        const row = document.createElement('div');
        row.className = 'bp-row enemy-row';
        row.style.opacity = dead ? '0.35' : '1';
        row.innerHTML =
            '<div class="bp-emoji"' + (i === 0 ? ' id="b-e-emoji"' : '') + '>' + en.emoji + '</div>' +
            '<div class="bp-info">' +
              '<div class="bp-name enemy-col"' + (i === 0 ? ' id="b-e-name"' : '') + '>' +
                (B.enemies.length > 1 ? (isCurrent ? '▶ ' : '  ') : '') + en.name + (dead ? '  [DEFEATED]' : '') +
              '</div>' +
              '<div class="bar-label">HP</div>' +
              '<div class="bar-track"><div class="bar-fill bar-hp-e"' + (i === 0 ? ' id="b-e-bar"' : '') +
                ' style="width:' + pct + '%"></div></div>' +
              '<div class="bar-text"' + (i === 0 ? ' id="b-e-hp"' : '') + '>' + hp + ' / ' + en.hp + '</div>' +
              '<div class="sfx-row"' + (i === 0 ? ' id="b-e-sfx"' : '') + '></div>' +
            '</div>';
        area.appendChild(row);
        if (i === 0) renderBadges(B.e_fxs[0], 'b-e-sfx');
    });

    const pHPct = Math.max(0, (G.hp / G.max_hp) * 100);
    const pMPct = Math.max(0, (G.mp / G.max_mp) * 100);
    document.getElementById('b-p-name').textContent     = G.name + '  (Lv.' + G.level + ')';
    document.getElementById('b-p-hp-bar').style.width   = pHPct + '%';
    document.getElementById('b-p-hp').textContent       = G.hp + ' / ' + G.max_hp;
    document.getElementById('b-p-mp-bar').style.width   = pMPct + '%';
    document.getElementById('b-p-mp').textContent       = G.mp + ' / ' + G.max_mp;
    const hpBar = document.getElementById('b-p-hp-bar');
    hpBar.style.background = pHPct > 50 ? '#27ae60' : pHPct > 25 ? '#e67e22' : '#c0392b';
    renderBadges(B.p_fx, 'b-p-sfx');
    renderRecruitBattlePanel();
}

function renderRecruitBattlePanel() {
    const area = document.getElementById('b-recruit-area');
    if (!area) return;
    area.innerHTML = '';
    if (!B) return;
    ensureRecruitBattleState();
    const active = getActiveRecruits();
    if (!active.length) return;
    active.forEach(r => {
        const max = B.recruit_max_hps[r.id] || recruitMaxHp(r);
        const hp = Math.max(0, Math.min(max, B.recruit_hps[r.id] ?? max));
        const pct = Math.max(0, Math.min(100, (hp / max) * 100));
        const used = B.recruit_used && B.recruit_used[r.id];
        const ko = hp <= 0;
        const row = document.createElement('div');
        row.className = 'bp-row recruit-row' + (ko ? ' recruit-ko' : '');
        row.innerHTML =
            '<div class="bp-emoji">' + r.emoji + '</div>' +
            '<div class="bp-info">' +
              '<div class="bp-name recruit-col">' + r.name + '  <span style="font-size:10px;color:#5a7a98">[' + r.anime + ' · ' + r.role + ']' + (used ? ' · ASSIST USED' : '') + (ko ? ' · KO' : '') + '</span></div>' +
              '<div class="bar-label">RECRUIT HP</div>' +
              '<div class="bar-track"><div class="bar-fill bar-hp-r" style="width:' + pct + '%"></div></div>' +
              '<div class="bar-text">' + hp + ' / ' + max + '</div>' +
            '</div>';
        area.appendChild(row);
    });
}

function showBattlePanel(on) {
    document.getElementById('battle-panel').style.display = on ? 'block' : 'none';
}

const $out = document.getElementById('output');
function print(text, cls = 'narrator') {
    const p = document.createElement('p');
    p.className = cls;
    p.textContent = text;
    $out.appendChild(p);
    $out.scrollTop = $out.scrollHeight;
}
function clearOutput() { $out.innerHTML = ''; }

const $ch = document.getElementById('choices');
function showChoices(list) {
    $ch.innerHTML = '';
    list.forEach(([label, fn]) => {
        const b = document.createElement('button');
        b.textContent = label;
        b.onclick = fn;
        $ch.appendChild(b);
    });
}
function disableAll() { $ch.querySelectorAll('button').forEach(b => b.disabled = true); }

function showBattleMenu() {
    $ch.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'btn-row';
    [['⚔  Attack', doAttack], ['✨  Skills', doSkillMenu], ['🤝  Allies', doRecruitAssistMenu], ['🎒  Items', doItemMenu], ['🏃  Run', doRun]]
        .forEach(([lbl, fn]) => {
            const b = document.createElement('button');
            b.className = 'battle-btn';
            b.textContent = lbl;
            b.onclick = fn;
            if (lbl.includes('Allies') && getBattleReadyRecruits().length === 0) b.disabled = true;
            row.appendChild(b);
        });
    $ch.appendChild(row);
}

function showNameInput(cb) {
    $ch.innerHTML = `<div id="name-form">
        <input type="text" id="ni" placeholder="Enter your name..." maxlength="24"/>
        <button id="ni-btn">Confirm</button></div>`;
    const go = () => { const v = document.getElementById('ni').value.trim(); if (v) cb(v); };
    document.getElementById('ni-btn').onclick = go;
    document.getElementById('ni').addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    document.getElementById('ni').focus();
}

const delay = ms => new Promise(r => setTimeout(r, ms));

// ═══════════════════════════════════════════════════════════════
// SETTINGS SYSTEM
// ═══════════════════════════════════════════════════════════════
let ENEMY_TURN_DELAY = 750;

function toggleSettings() {
    const panel = document.getElementById('settings-panel');
    const opening = !panel.classList.contains('open');
    panel.classList.toggle('open');
    if (opening) refreshLvlCtrl();
}


function closeSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    if (panel) panel.classList.remove('open');
}

// Keeps Help from accidentally advancing the intro / race / job flow.
// When Help is opened during character creation, Back returns to the exact
// unfinished step instead of Town Center or Character Status.
function getSafeHelpReturnScreen() {
    if (!G.race_id) return pick_race;
    if (!Array.isArray(G.jobs) || !G.jobs.length) return pick_job;
    if (!G.name) return your_character;
    if (B) return () => { updateBattlePanel(); };
    return town_center;
}

function returnFromHelp() {
    closeSettingsPanel();
    const fn = getSafeHelpReturnScreen();
    if (typeof fn === 'function') fn();
}

function openHelpFromSettings() {
    closeSettingsPanel();
    help_screen();
}

function openRaceUpdateFromSettings() {
    closeSettingsPanel();
    race_update_help_screen();
}

function openBuildGuideFromSettings() {
    closeSettingsPanel();
    yggdrasil_build_guide_screen();
}

function applyTextSize(v) {
    document.getElementById('output').style.fontSize = v + 'px';
    document.getElementById('sz-val').textContent = v + 'px';
}
function applyFont(v) {
    document.getElementById('output').style.fontFamily = v;
}
function applyOutputHeight(v) {
    document.getElementById('output').style.maxHeight = v + 'px';
    document.getElementById('oh-val').textContent = v + 'px';
}
function applyBattleSpeed(v) {
    ENEMY_TURN_DELAY = v;
    document.getElementById('spd-val').textContent = (v / 1000).toFixed(2) + 's';
}

// ── Level Control ─────────────────────────────────────────────
function refreshLvlCtrl() {
    const area = document.getElementById('lvl-ctrl-area');
    if (!area) return;
    area.innerHTML = '';
    const race = RACE_DATA[G.race_id];
    if (race) {
        area.appendChild(makeLvlRow(
            'Race Lv  (max ' + (race.max_lv || 25) + ')',
            G.race_lv,
            () => { if (G.race_lv < (race.max_lv||25)) { G.race_lv++; G.total_lv++; G.level++; applyStats(); updateStats(); refreshLvlCtrl(); } },
            () => { if (G.race_lv > 0) { G.race_lv--; G.total_lv--; G.level--; applyStats(); updateStats(); refreshLvlCtrl(); } }
        ));
    }
    G.jobs.forEach(job => {
        const jd = JOB_DATA[job.id];
        if (!jd) return;
        area.appendChild(makeLvlRow(
            jd.name + ' Lv  (max ' + (jd.max_lv||50) + ')',
            job.lv,
            () => { if (job.lv < (jd.max_lv||50)) { job.lv++; G.total_lv++; G.level++; applyStats(); updateStats(); refreshLvlCtrl(); } },
            () => { if (job.lv > 0) { job.lv--; G.total_lv--; G.level--; applyStats(); updateStats(); refreshLvlCtrl(); } }
        ));
    });
    if (!race && G.jobs.length === 0)
        area.innerHTML = '<p style="color:#5a7a98;font-size:11px">Start a game first.</p>';
}

function makeLvlRow(label, cur, onPlus, onMinus) {
    const d = document.createElement('div');
    d.className = 'lvl-ctrl';
    const lbl = document.createElement('label'); lbl.textContent = label;
    const m = document.createElement('button'); m.textContent = '−'; m.onclick = onMinus;
    const v = document.createElement('span');   v.className = 'lv-num'; v.textContent = cur;
    const p = document.createElement('button'); p.textContent = '+'; p.onclick = onPlus;
    d.append(lbl, m, v, p);
    return d;
}

function devGold(n)    { G.gold = Math.max(0, G.gold + n); updateStats(); }
function devFillHP()   { G.hp = G.max_hp; G.mp = G.max_mp; updateStats(); }
function devGiveExp(n) {
    G.exp += n;
    while (G.exp >= G.next_exp) {
        if (G.total_lv + G.level_pts >= 100) { G.exp = Math.min(G.exp, Math.max(0, G.next_exp - 1)); break; }
        G.exp -= G.next_exp; G.level_pts++; G.stat_pts += 10;
        G.next_exp = 30 + 10 * G.total_lv;
    }
    updateStats();
}
