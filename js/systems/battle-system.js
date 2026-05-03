// BATTLE SYSTEM  (Final Fantasy-style turn-based)
// ═══════════════════════════════════════════════════════════════

// Show target-selection menu; if only 1 living enemy, fires callback immediately
function selectTarget(onSelect) {
    const living = B.enemies.reduce((a, _, i) => { if (B.enemy_hps[i] > 0) a.push(i); return a; }, []);
    if (living.length <= 1) { onSelect(living[0] ?? 0); return; }
    $ch.innerHTML = '';
    const lbl = document.createElement('p');
    lbl.className = 'b-system'; lbl.textContent = '— Choose Target —';
    $ch.appendChild(lbl);
    living.forEach(i => {
        const en = B.enemies[i];
        const b = document.createElement('button');
        b.textContent = en.emoji + '  ' + en.name + '  (' + B.enemy_hps[i] + ' / ' + en.hp + ' HP)';
        b.onclick = () => onSelect(i);
        $ch.appendChild(b);
    });
    const back = document.createElement('button');
    back.textContent = '← Back';
    back.onclick = showBattleMenu;
    $ch.appendChild(back);
}

function startBattle(enemyOrArr) {
    const arr = Array.isArray(enemyOrArr) ? enemyOrArr : [enemyOrArr];
    const enemies  = arr.map(e => ({ ...e }));
    const hps      = enemies.map(e => e.hp);
    const fxs      = enemies.map(() => ({}));
    const recruitState = buildRecruitBattleState();
    B = {
        enemies,
        enemy_hps: hps,
        e_fxs:     fxs,
        enemy_idx: 0,
        p_fx: {},
        recruit_used: {},
        recruit_hps: recruitState.hps,
        recruit_max_hps: recruitState.max,
        get enemy()    { return this.enemies[this.enemy_idx]; },
        get enemy_hp() { return this.enemy_hps[this.enemy_idx]; },
        set enemy_hp(v){ this.enemy_hps[this.enemy_idx] = v; },
        get e_fx()     { return this.e_fxs[this.enemy_idx]; },
    };
    showBattlePanel(true);
    clearOutput();
    if (enemies.length === 1) {
        print('— ENCOUNTER —', 'b-system');
        print(enemies[0].emoji + '  ' + enemies[0].name + ' appeared!', 'danger');
        print(enemies[0].lore, 'narrator');
    } else {
        print('— GROUP ENCOUNTER  (' + enemies.length + ' enemies!) —', 'b-system');
        enemies.forEach(e => print(e.emoji + '  ' + e.name, 'danger'));
        print(enemies[0].lore, 'narrator');
    }
    print('');
    updateBattlePanel();
    showBattleMenu();
}

// ── Player actions ────────────────────────────────────────────
function doAttack() {
    selectTarget(idx => {
        B.enemy_idx = idx;
        disableAll();
        const base    = G.atk + (G.weapon ? G.weapon.atk : 0);
        const isCrit  = Math.random() < G.agi * 0.004;
        const dmg     = Math.floor(base * (0.85 + Math.random() * 0.3) * atkMult('p') * vulnMult('e') * (isCrit ? 1.5 : 1));
        B.enemy_hp = Math.max(0, B.enemy_hp - dmg);
        wakeOnHit('e');
        const targetTag = B.enemies.length > 1 ? ' [vs ' + B.enemy.name + ']' : '';
        const atkLabel = (G.weapon ? ' with ' + G.weapon.name : '') + targetTag + (isCrit ? ' — ★ CRITICAL HIT!' : '');
        print(G.name + ' attacks' + atkLabel + '  [' + dmg + ' damage]', isCrit ? 'highlight' : 'b-player');
        updateBattlePanel();
        if (G.weapon && G.weapon.statusId && Math.random() < (G.weapon.statusChance || 0.25))
            applyFx('e', G.weapon.statusId);
        if (checkWin()) return;
        enemyTurn();
    });
}

function doSkillMenu() {
    $ch.innerHTML = '';
    const activeSkills = G.learned_skills.filter(s => s.type === 'a');
    if (G.spells.length === 0 && activeSkills.length === 0) {
        print('No skills or spells. Buy skills at the Skill Library, or level up for class skills.', 'danger');
        setTimeout(showBattleMenu, 800);
        return;
    }
    if (activeSkills.length > 0) {
        const lbl = document.createElement('p');
        lbl.className = 'b-system'; lbl.textContent = '— Class Skills —';
        $ch.appendChild(lbl);
        activeSkills.forEach(sk => {
            const b = document.createElement('button');
            const tags = (sk.aoe ? '  ★ ALL ENEMIES' : '') +
                         (sk.st ? ' → ' + STATUS[sk.st].icon + STATUS[sk.st].label : '') +
                         (sk.buf ? '  self: ' + STATUS[sk.buf].icon + STATUS[sk.buf].label : '') +
                         (sk.hits > 1 ? '  x' + sk.hits : '') +
                         (sk.drain ? '  DRAIN' : '') +
                         (sk.cleanse ? '  CLEANSE' : '') +
                         (sk.mpRestore || sk.mpRestorePct ? '  MP RESTORE' : '') +
                         (sk.hpCostPct ? '  BLOOD PRICE' : '') +
                         (sk.execute ? '  EXECUTE' : '');
            b.textContent = sk.name + '  ' + (sk.mp || 0) + ' MP' + tags;
            b.disabled = G.mp < (sk.mp || 0);
            b.onclick = () => resolveSkill(sk);
            $ch.appendChild(b);
        });
    }
    if (G.spells.length > 0) {
        const lbl = document.createElement('p');
        lbl.className = 'b-system'; lbl.textContent = '— Purchased Spells —';
        $ch.appendChild(lbl);
        G.spells.forEach(sid => {
            const sp = SPELLS.find(s => s.id === sid);
            const tags = [sp.aoe && '★ ALL ENEMIES',
                          sp.status && ('→ ' + STATUS[sp.status].icon + STATUS[sp.status].label),
                          sp.selfBuff && ('self: ' + STATUS[sp.selfBuff].icon + STATUS[sp.selfBuff].label)]
                         .filter(Boolean).join('  ');
            const b = document.createElement('button');
            b.textContent = sp.name + ' [' + sp.anime + ']  ' + sp.mp + ' MP' + (tags ? '  ' + tags : '');
            b.disabled = G.mp < sp.mp;
            b.onclick = () => castSpell(sp);
            $ch.appendChild(b);
        });
    }
    const back = document.createElement('button');
    back.textContent = '← Back';
    back.onclick = showBattleMenu;
    $ch.appendChild(back);
}

function castSpell(sp) {
    const execute = () => {
        disableAll();
        G.mp = Math.max(0, G.mp - sp.mp);
        if (sp.aoe) {
            print(G.name + ' casts ' + sp.name + '! (' + sp.anime + ') — ★ ALL ENEMIES', 'b-player');
            B.enemies.forEach((en, i) => {
                if (B.enemy_hps[i] <= 0) return;
                B.enemy_idx = i;
                const dmg = Math.floor((sp.power + G.mag_atk * 0.7 + Math.random() * 12) * vulnMult('e') * (1 + getPassiveScalar('spellBoost')));
                B.enemy_hp = Math.max(0, B.enemy_hp - dmg);
                wakeOnHit('e');
                print('  ' + en.name + ':  ' + dmg + ' dmg!' + (sp.status ? '  ' + STATUS[sp.status].icon : ''), 'b-player');
                if (sp.status) applyFx('e', sp.status);
            });
            const fl = B.enemy_hps.findIndex(hp => hp > 0);
            B.enemy_idx = fl >= 0 ? fl : 0;
        } else {
            const dmg = Math.floor((sp.power + G.mag_atk * 0.7 + Math.random() * 12) * vulnMult('e') * (1 + getPassiveScalar('spellBoost')));
            B.enemy_hp = Math.max(0, B.enemy_hp - dmg);
            wakeOnHit('e');
            print(G.name + ' casts ' + sp.name + '! (' + sp.anime + ')', 'b-player');
            print('Deals ' + dmg + ' damage!', 'b-player');
            if (sp.status) applyFx('e', sp.status);
        }
        if (sp.selfBuff) applyBuff('p', sp.selfBuff);
        updateStats();
        updateBattlePanel();
        if (checkWin()) return;
        enemyTurn();
    };
    if (sp.aoe) execute();
    else selectTarget(idx => { B.enemy_idx = idx; execute(); });
}


function doRecruitAssistMenu() {
    const active = getActiveRecruits();
    if (!active.length) {
        print('No active recruits. Hire allies at the Recruitment Hall in town.', 'danger');
        setTimeout(showBattleMenu, 800);
        return;
    }
    $ch.innerHTML = '';
    const lbl = document.createElement('p');
    lbl.className = 'b-system';
    lbl.textContent = '— Recruit Assists  (once per battle each) —';
    $ch.appendChild(lbl);
    active.forEach(r => {
        const used = B.recruit_used && B.recruit_used[r.id];
        const ko = B && B.recruit_hps && (B.recruit_hps[r.id] ?? recruitMaxHp(r)) <= 0;
        const a = r.assist || {};
        const tags = [
            a.kind ? a.kind.toUpperCase() : 'ASSIST',
            a.status && ('→ ' + STATUS[a.status].icon + STATUS[a.status].label),
            a.buff && ('self: ' + STATUS[a.buff].icon + STATUS[a.buff].label),
            a.cleanse && 'CLEANSE',
            (a.healPct || a.mpRestorePct) && 'RESTORE'
        ].filter(Boolean).join('  ');
        const b = document.createElement('button');
        b.textContent = (ko ? '[KO] ' : used ? '[used] ' : '') + r.emoji + '  ' + r.name + ' — ' + a.name + '  ' + tags + '\n' + r.desc;
        b.disabled = used || ko;
        b.onclick = () => useRecruitAssist(r);
        $ch.appendChild(b);
    });
    const back = document.createElement('button');
    back.textContent = '← Back';
    back.onclick = showBattleMenu;
    $ch.appendChild(back);
}

function useRecruitAssist(r) {
    if (B && B.recruit_hps && (B.recruit_hps[r.id] ?? recruitMaxHp(r)) <= 0) {
        print(r.name + ' is knocked out and cannot assist this battle.', 'danger');
        setTimeout(showBattleMenu, 800);
        return;
    }
    const a = r.assist || {};
    const finish = () => {
        B.recruit_used[r.id] = true;
        applyStats(); updateStats(); updateBattlePanel();
        if (checkWin()) return;
        enemyTurn();
    };

    const doDamageToCurrent = (pow) => {
        const dmg = Math.floor((pow + G.total_lv * 2 + G.special * 0.8) * (1 + getPassiveScalar('summonBoost')) * (0.88 + Math.random() * 0.24) * vulnMult('e'));
        B.enemy_hp = Math.max(0, B.enemy_hp - dmg);
        wakeOnHit('e');
        return dmg;
    };

    disableAll();
    print(r.emoji + ' ' + r.name + ' uses ' + a.name + '!', 'b-system');

    if (a.kind === 'heal') {
        const hp = Math.floor(G.max_hp * (a.healPct || 0.25));
        G.hp = Math.min(G.max_hp, G.hp + hp);
        print('Recovered ' + hp + ' HP!', 'success');
        if (a.mpRestorePct) {
            const mp = Math.floor(G.max_mp * a.mpRestorePct);
            G.mp = Math.min(G.max_mp, G.mp + mp);
            print('Recovered ' + mp + ' MP!', 'success');
        }
        if (a.cleanse) cleanseNegativeFx('p');
        if (a.buff) applyBuff('p', a.buff);
        finish();
        return;
    }

    if (a.kind === 'buff') {
        if (a.buff) applyBuff('p', a.buff);
        else applyBuff('p', 'focus');
        finish();
        return;
    }

    if (a.kind === 'aoe') {
        B.enemies.forEach((en, i) => {
            if (B.enemy_hps[i] <= 0) return;
            B.enemy_idx = i;
            const dmg = doDamageToCurrent(a.pow || 45);
            print('  ' + en.name + ': ' + dmg + ' damage!', 'b-player');
            if (a.status && Math.random() < (a.statusChance || 0.35)) applyFx('e', a.status);
        });
        const fl = B.enemy_hps.findIndex(hp => hp > 0);
        B.enemy_idx = fl >= 0 ? fl : 0;
        finish();
        return;
    }

    // damage or status assist — choose target first when needed.
    const resolveTargeted = () => {
        const pow = a.kind === 'status' ? (a.pow || 28) : (a.pow || 65);
        const dmg = doDamageToCurrent(pow);
        print('Assist deals ' + dmg + ' damage!', 'b-player');
        if (a.status && Math.random() < (a.statusChance || 0.40)) applyFx('e', a.status);
        if (a.buff) applyBuff('p', a.buff);
        finish();
    };

    if (B.enemies.filter((_, i) => B.enemy_hps[i] > 0).length > 1) {
        selectTarget(idx => { B.enemy_idx = idx; disableAll(); resolveTargeted(); });
    } else {
        resolveTargeted();
    }
}

function doItemMenu() {
    const usable = G.inventory.filter(e => e.qty > 0);
    if (usable.length === 0) {
        print('You have no items.', 'danger');
        setTimeout(showBattleMenu, 800);
        return;
    }
    $ch.innerHTML = '';
    usable.forEach(entry => {
        const item = POTIONS.find(i => i.id === entry.id);
        const b = document.createElement('button');
        b.textContent = item.name + ' x' + entry.qty + '  —  ' + item.desc;
        b.onclick = () => useItem(item, entry);
        $ch.appendChild(b);
    });
    const back = document.createElement('button');
    back.textContent = '← Back';
    back.onclick = showBattleMenu;
    $ch.appendChild(back);
}

function useItem(item, entry) {
    disableAll();
    entry.qty--;
    // Restoration
    if (item.full) { G.hp = G.max_hp; G.mp = G.max_mp; }
    else {
        if (item.hp) G.hp = Math.min(G.max_hp, G.hp + item.hp);
        if (item.mp) G.mp = Math.min(G.max_mp, G.mp + item.mp);
    }
    // Curatives
    if (item.cure)    { item.cure.forEach(id => delete B.p_fx[id]); print('Status cured!', 'success'); }
    if (item.cureAll) {
        Object.keys(B.p_fx).forEach(id => { if (STATUS[id] && STATUS[id].neg) delete B.p_fx[id]; });
        print('All negative statuses cleared!', 'success');
    }
    // Buff
    if (item.buff) applyBuff('p', item.buff);
    print(G.name + ' used ' + item.name + '!', 'success');
    updateStats();
    updateBattlePanel();
    enemyTurn();
}

function doRun() {
    disableAll();
    if (Math.random() < 0.55) {
        print('You successfully fled from battle!', 'success');
        endBattle();
        setTimeout(afterFlee, 700);
    } else {
        print("Couldn't escape!", 'danger');
        enemyTurn();
    }
}

// ── Turn engine ───────────────────────────────────────────────
// Called at the start of every player turn
async function playerTurnStart() {
    if (!B) return;
    const dots = document.createElement('p');
    dots.className = 'narrator'; dots.textContent = '...';
    $out.appendChild(dots); $out.scrollTop = $out.scrollHeight;
    await delay(400);
    dots.remove();

    const r = processTurnStart('p');
    if (r === 'dead') {
        print('You succumb to your wounds...', 'danger');
        await delay(900); gameOver(); return;
    }
    if (r === 'skip') { await delay(400); enemyTurn(); return; }
    showBattleMenu();
}

async function enemyTurn() {
    if (!B) return;
    const dots = document.createElement('p');
    dots.className = 'narrator'; dots.textContent = '...';
    $out.appendChild(dots); $out.scrollTop = $out.scrollHeight;
    await delay(ENEMY_TURN_DELAY);
    dots.remove();

    // Each living enemy attacks in sequence
    for (let i = 0; i < B.enemies.length; i++) {
        if (B.enemy_hps[i] <= 0) continue;   // already dead — skip
        const en = B.enemies[i];
        B.enemy_idx = i;

        // Process this enemy's turn start (DoT / skip checks)
        const r = processTurnStart('e');
        if (r === 'dead') { setTimeout(winBattle, 400); return; }
        if (r === 'skip') continue;

        const move   = en.moves[Math.floor(Math.random() * en.moves.length)];
        const rawDmg = Math.floor(en.atk * (0.85 + Math.random() * 0.3) * atkMult('e') * vulnMult('p'));
        const allyTarget = chooseRecruitTarget();
        if (allyTarget) {
            ensureRecruitBattleState();
            const recMult = recruitDamageTakenMult(allyTarget);
            const recDmg = Math.max(1, Math.floor(rawDmg * recMult));
            const before = B.recruit_hps[allyTarget.id] ?? B.recruit_max_hps[allyTarget.id] ?? recruitMaxHp(allyTarget);
            B.recruit_hps[allyTarget.id] = Math.max(0, before - recDmg);
            updateBattlePanel();
            print(en.name + ' uses ' + move.name + ' against ' + allyTarget.name + '!  [' + recDmg + ' recruit damage]', 'b-enemy');
            if (B.recruit_hps[allyTarget.id] <= 0) print(allyTarget.name + ' is knocked out for the rest of this battle!', 'danger');
            await delay(350);
            continue;
        }
        const mit    = G.phy_def / (G.phy_def + 80);
        let dmg      = Math.max(1, Math.floor(rawDmg * (1 - mit)));
        if (B.p_fx.guard) dmg = Math.max(1, Math.floor(dmg * STATUS.guard.dmgTakenMult));
        G.hp = Math.max(0, G.hp - dmg);
        wakeOnHit('p');
        updateStats(); updateBattlePanel();
        print(en.name + ' uses ' + move.name + '!  [' + dmg + ' damage' + (mit > 0.05 ? ', -' + Math.floor(mit*100) + '% mitigated' : '') + (B.p_fx.guard ? ', guarded' : '') + ']', 'b-enemy');
        if (B.p_fx.thorns) {
            const thorn = Math.max(1, Math.floor(dmg * STATUS.thorns.thornsPct));
            B.enemy_hp = Math.max(0, B.enemy_hp - thorn);
            print('🌹 Thorns strike back for ' + thorn + ' damage!', 'success');
            updateBattlePanel();
            if (B.enemy_hp <= 0) { await delay(300); if (checkWin()) return; }
        }
        const resistMit = G.resist * 0.003;
        if (move.status && Math.random() < (move.statusChance || 0.25) * (1 - resistMit))
            applyFx('p', move.status);
        if (G.hp <= 0) {
            await delay(600); print('You have fallen...', 'danger');
            await delay(900); gameOver(); return;
        }
        await delay(350);
    }
    // Restore enemy_idx to first living enemy for player's turn
    const living = B.enemy_hps.findIndex(hp => hp > 0);
    if (living !== -1) B.enemy_idx = living;
    updateBattlePanel();
    playerTurnStart();
}

function checkWin() {
    if (B.enemy_hp <= 0) {
        // Advance to next living enemy
        const nextIdx = B.enemy_hps.findIndex((hp, i) => i > B.enemy_idx && hp > 0);
        if (nextIdx !== -1) {
            print(B.enemy.name + ' was defeated! Next enemy: ' + B.enemies[nextIdx].name, 'success');
            B.enemy_idx = nextIdx;
            updateBattlePanel();
            return false;
        }
        // All enemies dead
        setTimeout(winBattle, 550);
        return true;
    }
    return false;
}

async function winBattle() {
    const totalExp  = B.enemies.reduce((s, e) => s + e.exp, 0);
    const totalGold = B.enemies.reduce((s, e) => s + e.gold, 0);
    if (B.enemies.length > 1) {
        print('All enemies defeated!', 'success');
    } else {
        print(B.enemies[0].name + ' was defeated!', 'success');
    }
    G.exp += totalExp; G.gold += totalGold;
    print('Gained ' + totalExp + ' EXP  and  ' + totalGold + ' gold!', 'b-system');
    recordBattleAchievements(B.enemies);
    updateStats();
    while (G.exp >= G.next_exp) {
        if (G.total_lv + G.level_pts >= 100) {
            G.exp = Math.min(G.exp, Math.max(0, G.next_exp - 1));
            print('★ Level cap reached: Total Level 100 is the maximum.', 'b-system');
            break;
        }
        G.exp -= G.next_exp;
        G.level_pts++;
        G.stat_pts += 10;
        G.next_exp = 30 + 10 * G.total_lv;
        print('★  Level Up! +1 Level Point  +10 Stat Points — visit Character screen to spend them.  (Total Lv.' + G.total_lv + ')', 'b-system');
        updateStats();
    }
    const zone = _lastZone || town_center;
    endBattle();
    await delay(500);
    showChoices([
        ['Fight again', zone],
        ['Return to Town Center', town_center],
    ]);
}

function endBattle() { B = null; showBattlePanel(false); }

function gameOver() {
    endBattle(); clearOutput();
    print('Y O U   D I E D', 'danger');
    print('Your journey ends here, ' + G.name + '.', 'narrator');
    showChoices([['Start Over', () => location.reload()]]);
}


// ═══════════════════════════════════════════════════════════════
