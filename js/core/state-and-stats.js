// ═══════════════════════════════════════════════════════════════
// PLAYER STATE
// ═══════════════════════════════════════════════════════════════
const G = {
    name: '',
    // ── Overlord character system ────────────────────────────
    race_id: 0,
    jobs: [],           // [{id, lv}] — YGGDRASIL-style multi-class build paths
    race_lv: 0,
    total_lv: 0,        // race_lv + sum(jobs[].lv)  ·  max 100
    level: 0,           // alias for total_lv — keeps zone gating working
    level_pts: 0,       // unspent level points (earned from EXP)
    stat_pts: 0,        // free stat points — 10 per level-up, spend anywhere
    bonus: { hp:0, mp:0, pa:0, pd:0, ag:0, ma:0, md:0, rs:0, sp:0 },
    learned_skills: [],       // array of learned skill objects
    pending_skill_picks: [],  // [{src:'race'|jobId, tier:lv, opts:[...]}]
    achievements: { flags: [], defeated: {}, totalKills: 0, secret_research: 0 },
    class_unlocks: [],     // discovered hidden / rare job ids
    exp: 0, next_exp: 100,
    gold: 0,
    // ── 9 Overlord stats (computed by applyStats) ───────────
    hp: 80, max_hp: 80,
    mp: 40, max_mp: 40,
    phy_atk: 5, phy_def: 5,
    agi: 5,
    mag_atk: 5, mag_def: 5,
    resist: 5, special: 5,
    // ── Battle system compat aliases ─────────────────────────
    atk: 5, int_stat: 5,
    weapon: null,
    spells: [],
    inventory: [],
    recruits: [],          // purchased anime companions by id
    active_recruits: [],   // up to 3 support companions active in battle
};

// Active battle state — null when not fighting
let B = null;
// Persists the zone return function across endBattle (which nulls B)
let _lastZone = null;

function ensureGameCollections() {
    if (!Array.isArray(G.recruits)) G.recruits = [];
    if (!Array.isArray(G.active_recruits)) G.active_recruits = [];
    if (!G.achievements || typeof G.achievements !== 'object') G.achievements = {};
    if (!Array.isArray(G.achievements.flags)) G.achievements.flags = [];
    if (!G.achievements.defeated || typeof G.achievements.defeated !== 'object') G.achievements.defeated = {};
    if (typeof G.achievements.totalKills !== 'number') G.achievements.totalKills = 0;
    if (typeof G.achievements.secret_research !== 'number') G.achievements.secret_research = 0;
    if (!Array.isArray(G.class_unlocks)) G.class_unlocks = [];
    G.recruits = [...new Set(G.recruits)];
    G.active_recruits = [...new Set(G.active_recruits)].filter(id => G.recruits.includes(id)).slice(0, 3);
    G.achievements.flags = [...new Set(G.achievements.flags)];
    G.class_unlocks = [...new Set(G.class_unlocks.map(Number).filter(n => !Number.isNaN(n)))];
}

function getRecruit(id) {
    return RECRUIT_DATA.find(r => r.id === id);
}

function getActiveRecruits() {
    ensureGameCollections();
    return G.active_recruits.map(getRecruit).filter(Boolean);
}

function recruitMaxHp(r) {
    const b = r && r.bonus ? r.bonus : {};
    const roleBonus = (b.hp || 0) + Math.floor(((b.pd || 0) + (b.rs || 0)) * 2.5) + Math.floor((b.sp || 0) * 1.5);
    return Math.max(70, Math.floor(95 + (r.req || 1) * 3 + roleBonus + (r.cost || 0) / 35));
}

function recruitDamageTakenMult(r) {
    const b = r && r.bonus ? r.bonus : {};
    const armor = (b.pd || 0) + (b.rs || 0) + Math.floor((b.hp || 0) / 10);
    return Math.max(0.45, 1 - armor * 0.018);
}

function getBattleReadyRecruits() {
    const active = getActiveRecruits();
    if (!B || !B.recruit_hps) return active;
    return active.filter(r => (B.recruit_hps[r.id] ?? recruitMaxHp(r)) > 0);
}

function chooseRecruitTarget() {
    const living = getBattleReadyRecruits();
    if (!living.length) return null;
    return Math.random() < 0.30 ? living[Math.floor(Math.random() * living.length)] : null;
}

function buildRecruitBattleState() {
    const hps = {}, max = {};
    getActiveRecruits().forEach(r => {
        max[r.id] = recruitMaxHp(r);
        hps[r.id] = max[r.id];
    });
    return { hps, max };
}

function ensureRecruitBattleState() {
    if (!B) return;
    if (!B.recruit_hps) B.recruit_hps = {};
    if (!B.recruit_max_hps) B.recruit_max_hps = {};
    getActiveRecruits().forEach(r => {
        if (!B.recruit_max_hps[r.id]) B.recruit_max_hps[r.id] = recruitMaxHp(r);
        if (typeof B.recruit_hps[r.id] !== 'number') B.recruit_hps[r.id] = B.recruit_max_hps[r.id];
    });
}

// ── YGGDRASIL build / hidden class helpers ─────────────────────
function getPassiveScalar(key) {
    ensureGameCollections();
    return G.learned_skills.reduce((sum, sk) => sum + (Number(sk[key]) || 0), 0);
}

function priceOf(item) {
    const discount = Math.min(0.35, getPassiveScalar('craftDiscount'));
    return Math.max(1, Math.floor((item.cost || 0) * (1 - discount)));
}

function hasStatusImmunity(target, statusId) {
    if (target !== 'p') return false;
    return G.learned_skills.some(sk => sk.type === 'p' && Array.isArray(sk.immune) && sk.immune.includes(statusId));
}

function hasAchievement(flag) {
    ensureGameCollections();
    return G.achievements.flags.includes(flag);
}

function grantAchievement(flag, label) {
    ensureGameCollections();
    if (G.achievements.flags.includes(flag)) return false;
    G.achievements.flags.push(flag);
    if (label) print('◆ Achievement unlocked: ' + label, 'b-system');
    return true;
}

function grantResearchFlags() {
    const n = G.achievements.secret_research || 0;
    if (n >= 1) grantAchievement('secret_research_1');
    if (n >= 3) grantAchievement('secret_research_3');
    if (n >= 5) grantAchievement('secret_research_5');
}

function recordBattleAchievements(enemies) {
    ensureGameCollections();
    enemies.forEach(en => {
        G.achievements.totalKills++;
        G.achievements.defeated[en.name] = (G.achievements.defeated[en.name] || 0) + 1;
    });
    if (G.achievements.totalKills >= 5)  grantAchievement('monster_slayer_5',  'Monster Slayer I — 5 enemies defeated');
    if (G.achievements.totalKills >= 10) grantAchievement('monster_slayer_10', 'Monster Slayer II — 10 enemies defeated');
    if (G.achievements.totalKills >= 25) grantAchievement('monster_slayer_25', 'Monster Slayer III — 25 enemies defeated');
    discoverAvailableHiddenJobs(true);
}

function getJobLevel(jobId) {
    const id = Number(jobId);
    const entry = G.jobs.find(j => Number(j.id) === id);
    return entry ? entry.lv : 0;
}

function getAnimeJobLevelTotal(anime) {
    return G.jobs.reduce((sum, j) => {
        const jd = JOB_DATA[j.id];
        return jd && jd.anime === anime ? sum + j.lv : sum;
    }, 0);
}

function getHighestAnimeJobLevel(anime) {
    return G.jobs.reduce((best, j) => {
        const jd = JOB_DATA[j.id];
        return jd && jd.anime === anime ? Math.max(best, j.lv) : best;
    }, 0);
}

function ownsJob(jobId) {
    return G.jobs.some(j => Number(j.id) === Number(jobId));
}

function classTierLabel(j) {
    const tier = j.class_tier || 'Base';
    return tier.toUpperCase() + ' CLASS · max ' + j.max_lv + ' levels';
}

function jobPrereqText(id, j) {
    // All jobs are intentionally unlocked from the start.
    // Keep old prerequisite data in JOB_DATA for flavor/future use, but do not block play.
    return 'Unlocked at start — no prerequisite required.';
}

function meetsJobPrereqs(id, j) {
    ensureGameCollections();
    const p = j.prereq || {};
    if (G.total_lv < (j.unlock_lv || 0)) return false;
    if (p.raceAnime && (!RACE_DATA[G.race_id] || RACE_DATA[G.race_id].anime !== p.raceAnime)) return false;
    if (p.anySameAnimeJobLevel && getHighestAnimeJobLevel(j.anime) < p.anySameAnimeJobLevel) return false;
    if (p.sameAnimeJobLevelTotal && getAnimeJobLevelTotal(j.anime) < p.sameAnimeJobLevelTotal) return false;
    if (p.totalKills && (G.achievements.totalKills || 0) < p.totalKills) return false;
    if (Array.isArray(p.achievements) && p.achievements.some(flag => !hasAchievement(flag))) return false;
    return true;
}

function canViewHiddenJob(id, j) {
    // User setting: every job/class path is visible from the beginning.
    return !!j;
}

function canAddJob(id) {
    // User setting: every job/class path is unlocked at the start.
    // Ownership is the only restriction; level caps still apply when spending points.
    const j = JOB_DATA[id];
    return !!j && !ownsJob(id);
}

function canStartWithJob(id, j) {
    // Starting job selection now allows Base, Advanced, Specialist, Rare, and Hidden jobs.
    return !!j;
}

function discoverAvailableHiddenJobs(silent) {
    ensureGameCollections();
    grantResearchFlags();
    const found = [];
    Object.entries(JOB_DATA).forEach(([id, j]) => {
        const nid = Number(id);
        if (!j.hidden || G.class_unlocks.includes(nid)) return;
        if (meetsJobPrereqs(nid, j)) {
            G.class_unlocks.push(nid);
            found.push(j.name);
        }
    });
    if (found.length && !silent) {
        found.forEach(name => print('◆ Hidden class discovered: ' + name, 'b-system'));
    }
    return found;
}

function hiddenResearchCost() {
    const base = 250 + (G.achievements.secret_research || 0) * 125;
    const detectionDiscount = Math.min(0.20, getPassiveScalar('detection') * 0.05);
    const craftDiscount = Math.min(0.25, getPassiveScalar('craftDiscount'));
    return Math.max(75, Math.floor(base * (1 - detectionDiscount - craftDiscount)));
}

function doHiddenResearch() {
    ensureGameCollections();
    const cost = hiddenResearchCost();
    clearOutput();
    showBattlePanel(false);
    print('SECRET BUILD RESEARCH', 'highlight');
    if (G.gold < cost) {
        print('You need ' + cost + ' gold to research hidden class paths. Current gold: ' + G.gold, 'danger');
        showChoices([['← Class Registry', class_registry_screen], ['← Character Status', character_screen]]);
        return;
    }
    G.gold -= cost;
    G.achievements.secret_research++;
    grantResearchFlags();
    const found = discoverAvailableHiddenJobs(false);
    updateStats();
    print('You spend ' + cost + ' gold studying hidden YGGDRASIL build notes.', 'info');
    print('Research depth: ' + G.achievements.secret_research + '  ·  Hidden flags: ' + G.achievements.flags.filter(f => f.startsWith('secret_research')).join(', '), 'success');
    if (!found.length) {
        print('No new hidden class fully unlocked yet. Build deeper prerequisites, defeat more monsters, or raise related class levels.', 'narrator');
    }
    showChoices([['Open Class Registry', class_registry_screen], ['Character Status', character_screen], ['Town Center', town_center]]);
}

function addJobPath(id) {
    id = Number(id);
    const j = JOB_DATA[id];
    if (!canAddJob(id)) return;
    G.jobs.push({ id, lv: 0 });
    applyStats(); updateStats();
    clearOutput();
    print('⊕ Class path added: ' + j.name + ' [' + j.anime + ']', 'success');
    print('It starts at Lv.0. Spend a Level Point on it to reach Lv.1 and unlock its starting skill.', 'narrator');
    showChoices([['Spend Level Points', character_screen], ['Class Registry', class_registry_screen], ['Town Center', town_center]]);
}

function appendMiniClassRegistry() {
    discoverAvailableHiddenJobs(true);
    const available = Object.entries(JOB_DATA).filter(([id]) => canAddJob(Number(id)));
    const div = document.createElement('div');
    div.className = 'cs-exp-row';
    div.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">⊕ CLASS PATHS / HIDDEN BUILDS</div>' +
        '<div style="font-size:11px;color:#8aaac8;margin-bottom:6px">YGGDRASIL builds stack many capped classes: Base 15, Advanced 10, Specialist 10, Rare 5, Hidden 5. Every job path is unlocked from the start; add any path, then spend Level Points to level it.</div>';
    if (available.length) {
        available.slice(0, 8).forEach(([id, j]) => {
            const b = document.createElement('button');
            b.className = 'btn-levelup';
            b.style.cssText = 'width:100%;margin-top:4px;text-align:left';
            b.textContent = '⊕ ' + j.name + ' — ' + classTierLabel(j) + ' [' + j.anime + ']';
            b.onclick = () => addJobPath(id);
            div.appendChild(b);
        });
        if (available.length > 8) {
            const note = document.createElement('div');
            note.style.cssText = 'font-size:10px;color:#8aaac8;margin-top:5px';
            note.textContent = '+' + (available.length - 8) + ' more available in the full registry.';
            div.appendChild(note);
        }
    } else {
        div.innerHTML += '<div style="font-size:11px;color:#8aaac8">No unowned class paths remain. You already added every job path.</div>';
    }
    const full = document.createElement('button');
    full.className = 'btn-levelup';
    full.style.cssText = 'width:100%;margin-top:6px';
    full.textContent = '📜 Open Full Class Registry';
    full.onclick = class_registry_screen;
    div.appendChild(full);
    const research = document.createElement('button');
    research.className = 'btn-levelup';
    research.style.cssText = 'width:100%;margin-top:4px';
    research.textContent = '🔎 Research Hidden Classes — ' + hiddenResearchCost() + 'g';
    research.onclick = doHiddenResearch;
    div.appendChild(research);
    $ch.appendChild(div);
}

function class_registry_screen() {
    ensureGameCollections();
    discoverAvailableHiddenJobs(true);
    clearOutput();
    showBattlePanel(false);
    print('FULL CLASS REGISTRY — ALL JOBS UNLOCKED', 'highlight');
    print('Build shape: 15 levels in a base race or class → 10 levels in an advanced class → 10 levels in another specialist class → 5 levels in a rare class → keep stacking capped paths until Level 100. All job paths are unlocked from the start.', 'narrator');
    print('Gold: ' + G.gold + '  ·  Total Level: ' + G.total_lv + ' / 100  ·  Research depth: ' + (G.achievements.secret_research || 0) + '  ·  Kills: ' + (G.achievements.totalKills || 0), 'info');
    print('');
    $ch.innerHTML = '';

    const guide = document.createElement('button');
    guide.textContent = '📘 YGGDRASIL Build Guide — base 15 / advanced 10 / specialist 10 / rare 5';
    guide.onclick = yggdrasil_build_guide_screen;
    $ch.appendChild(guide);

    const research = document.createElement('button');
    research.textContent = '🔎 Research Hidden Classes — ' + hiddenResearchCost() + 'g';
    research.onclick = doHiddenResearch;
    $ch.appendChild(research);

    const groups = {};
    Object.entries(JOB_DATA).forEach(([id, j]) => {
        if (!groups[j.anime]) groups[j.anime] = [];
        groups[j.anime].push([id, j]);
    });

    Object.entries(groups).forEach(([anime, list]) => {
        const hdr = document.createElement('div');
        hdr.style.cssText = 'margin:12px 0 4px;padding:6px 10px;background:linear-gradient(90deg,#12082a,#090e1c);border-left:3px solid #e8c84a;font-family:"Cinzel Decorative",serif;font-size:11px;color:#e8c84a;letter-spacing:2px';
        hdr.textContent = '— ' + anime.toUpperCase() + ' —';
        $ch.appendChild(hdr);

        list.forEach(([id, j]) => {
            const owned = ownsJob(id);
            const available = canAddJob(Number(id));
            const visible = canViewHiddenJob(Number(id), j);
            const b = document.createElement('button');
            b.style.whiteSpace = 'pre-wrap';
            b.style.lineHeight = '1.45';
            if (!visible) {
                b.textContent = '??? Hidden Class  ·  max ? levels\nPrerequisite: unknown. Research hidden paths or gain Detection passives to reveal more.';
                b.disabled = true;
            } else {
                const status = owned ? '[OWNED]' : available ? '[AVAILABLE]' : '[LOCKED]';
                b.textContent =
                    status + ' ' + j.name + ' — ' + classTierLabel(j) + '\n' +
                    'Prereq: ' + jobPrereqText(id, j) + '\n' +
                    j.desc;
                b.disabled = !available;
                if (available) b.onclick = () => addJobPath(id);
            }
            $ch.appendChild(b);
        });
    });

    const back = document.createElement('button');
    back.textContent = '← Return to Character Status';
    back.onclick = character_screen;
    $ch.appendChild(back);

    const town = document.createElement('button');
    town.textContent = '← Return to Town Center';
    town.onclick = town_center;
    $ch.appendChild(town);
}

function yggdrasil_build_guide_screen() {
    clearOutput();
    showBattlePanel(false);
    print('YGGDRASIL BUILD STRUCTURE', 'highlight');
    print('A powerful build is not one class pushed to Level 100. It is a layered build made from several capped paths.', 'narrator');
    print('• 15 levels in a base race or class', 'info');
    print('• 10 levels in an advanced class', 'info');
    print('• 10 levels in another specialist class', 'info');
    print('• 5 levels in a rare class', 'info');
    print('• and so on until reaching Level 100', 'info');
    print('', 'narrator');
    print('The game uses this as the class-path rule: Base jobs cap at 15, Advanced jobs cap at 10, Specialist jobs cap at 10, Rare jobs cap at 5, and Hidden jobs cap at 5.', 'success');
    print('You can technically spread levels very widely, but strong builds come from class synergy, prerequisites, hidden class unlocks, and passives that support the same combat style.', 'narrator');

    // Safety fix: if the guide is opened from Settings during character creation,
    // do not expose Town / Character / Registry buttons yet because those skip setup.
    if (!G.race_id || !Array.isArray(G.jobs) || !G.jobs.length || !G.name) {
        const backLabel = !G.race_id ? '← Back to Race Selection' :
            ((!Array.isArray(G.jobs) || !G.jobs.length) ? '← Back to Job Selection' :
            (!G.name ? '← Back to Character Preview' : '← Back'));
        showChoices([
            [backLabel, returnFromHelp],
            ['❓ Full Help', help_screen],
            ['🧬 Race Update', race_update_help_screen],
        ]);
        return;
    }

    showChoices([
        ['📜 Open Class Registry', class_registry_screen],
        ['⚔ Character Status', character_screen],
        ['← Town Center', town_center],
    ]);
}

// Recompute all 9 stats from current racial + job level investments
function applyStats() {
    ensureGameCollections();
    const race = RACE_DATA[G.race_id];
    let hp=0, mp=0, pa=0, pd=0, ag=0, ma=0, md=0, rs=0, sp=0;
    if (race) {
        const b=race.base, p=race.per_lv, lv=G.race_lv;
        hp+=b.hp+p.hp*lv; mp+=b.mp+p.mp*lv; pa+=b.pa+p.pa*lv;
        pd+=b.pd+p.pd*lv; ag+=b.ag+p.ag*lv; ma+=b.ma+p.ma*lv;
        md+=b.md+p.md*lv; rs+=b.rs+p.rs*lv; sp+=b.sp+p.sp*lv;
    }
    G.jobs.forEach(job => {
        const jd=JOB_DATA[job.id];
        if (!jd || job.lv<=0) return;
        const b=jd.base, p=jd.per_lv, lv=job.lv;
        hp+=b.hp+p.hp*lv; mp+=b.mp+p.mp*lv; pa+=b.pa+p.pa*lv;
        pd+=b.pd+p.pd*lv; ag+=b.ag+p.ag*lv; ma+=b.ma+p.ma*lv;
        md+=b.md+p.md*lv; rs+=b.rs+p.rs*lv; sp+=b.sp+p.sp*lv;
    });
    hp+=G.bonus.hp; mp+=G.bonus.mp; pa+=G.bonus.pa;
    pd+=G.bonus.pd; ag+=G.bonus.ag; ma+=G.bonus.ma;
    md+=G.bonus.md; rs+=G.bonus.rs; sp+=G.bonus.sp;
    // passive skill bonuses
    G.learned_skills.forEach(sk => {
        if (sk.type !== 'p' || !sk.bon) return;
        const b = sk.bon;
        if (b.hp) hp+=b.hp; if (b.mp) mp+=b.mp; if (b.pa) pa+=b.pa;
        if (b.pd) pd+=b.pd; if (b.ag) ag+=b.ag; if (b.ma) ma+=b.ma;
        if (b.md) md+=b.md; if (b.rs) rs+=b.rs; if (b.sp) sp+=b.sp;
    });
    // Active recruits grant small passive support bonuses.
    getActiveRecruits().forEach(r => {
        const b = r.bonus || {};
        if (b.hp) hp+=b.hp; if (b.mp) mp+=b.mp; if (b.pa) pa+=b.pa;
        if (b.pd) pd+=b.pd; if (b.ag) ag+=b.ag; if (b.ma) ma+=b.ma;
        if (b.md) md+=b.md; if (b.rs) rs+=b.rs; if (b.sp) sp+=b.sp;
    });
    G.max_hp=Math.floor(hp); G.max_mp=Math.floor(mp);
    G.phy_atk=Math.floor(pa); G.phy_def=Math.floor(pd);
    G.agi=Math.floor(ag);
    G.mag_atk=Math.floor(ma); G.mag_def=Math.floor(md);
    G.resist=Math.floor(rs); G.special=Math.floor(sp);
    G.atk=G.phy_atk; G.int_stat=G.mag_atk;
    G.hp=Math.min(G.hp, G.max_hp);
    G.mp=Math.min(G.mp, G.max_mp);
    G.total_lv = G.race_lv + G.jobs.reduce((s,j)=>s+j.lv, 0);
    G.level = G.total_lv;
}

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════
// stat keys: hp, mp, pa=PHY.ATK, pd=PHY.DEF, ag=AGI, ma=MAG.ATK, md=MAG.DEF, rs=RESIST, sp=SPECIAL
