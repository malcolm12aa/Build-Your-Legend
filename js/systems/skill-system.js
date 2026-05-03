// SKILL SYSTEM
// ═══════════════════════════════════════════════════════════════
function checkSkillTier(src, data, newLv) {
    const tier = (data.skills || []).find(t => t[0] === newLv);
    if (!tier) return;
    if (tier[1].length === 1) {
        const sk = tier[1][0];
        if (!G.learned_skills.find(s => s.id === sk.id)) {
            G.learned_skills.push(sk);
            print('★ New skill unlocked: ' + sk.name + '!', 'b-system');
        }
    } else {
        G.pending_skill_picks.push({src, tier: newLv, opts: tier[1]});
    }
}

function cleanseNegativeFx(target) {
    const fx = target === 'p' ? B.p_fx : B.e_fx;
    let removed = 0;
    Object.keys(fx).forEach(id => {
        if (STATUS[id] && STATUS[id].neg) { delete fx[id]; removed++; }
    });
    if (removed) print('✨ Negative status effects cleansed!', 'success');
    return removed;
}

function paySkillExtraCost(sk) {
    if (!sk.hpCostPct) return;
    const hpCost = Math.max(1, Math.floor(G.max_hp * sk.hpCostPct));
    G.hp = Math.max(1, G.hp - hpCost);
    print('Blood price paid: ' + hpCost + ' HP.', 'danger');
}

function applySkillUtility(sk) {
    if (sk.cleanse) cleanseNegativeFx('p');
    if (sk.mpRestore) {
        const gain = Math.min(G.max_mp - G.mp, sk.mpRestore);
        G.mp = Math.min(G.max_mp, G.mp + sk.mpRestore);
        if (gain > 0) print('Recovered ' + gain + ' MP!', 'success');
    }
    if (sk.mpRestorePct) {
        const gain = Math.floor(G.max_mp * sk.mpRestorePct);
        G.mp = Math.min(G.max_mp, G.mp + gain);
        print('Recovered ' + gain + ' MP!', 'success');
    }
}

function skillDamageBase(sk) {
    let base = (sk.pow || 0) + G.phy_atk * 0.4 + G.mag_atk * 0.4;
    if (sk.hpCostPct) base *= 1.30;
    if (sk.execute && B.enemy && B.enemy_hp / B.enemy.hp <= sk.execute) base *= 1.75;
    return base;
}

function resolveSkill(sk) {
    const msg = G.name + ' uses ' + sk.name + '!';

    // Heal — no target needed
    if (sk.heal) {
        disableAll();
        G.mp = Math.max(0, G.mp - (sk.mp || 0));
        paySkillExtraCost(sk);
        const hp = Math.floor(G.max_hp * sk.heal);
        G.hp = Math.min(G.max_hp, G.hp + hp);
        print(msg + '  Recovered ' + hp + ' HP!', 'success');
        if (sk.buf) applyBuff('p', sk.buf);
        applySkillUtility(sk);
        updateStats(); updateBattlePanel();
        if (!B || B.enemy_hp <= 0) { if (checkWin()) return; }
        enemyTurn();
        return;
    }

    // AoE damage skill — hits all living enemies
    if (sk.aoe) {
        disableAll();
        G.mp = Math.max(0, G.mp - (sk.mp || 0));
        paySkillExtraCost(sk);
        print(msg + ' — ★ ALL ENEMIES', 'b-player');
        let totalDmg = 0;
        B.enemies.forEach((en, i) => {
            if (B.enemy_hps[i] <= 0) return;
            B.enemy_idx = i;
            const hits = sk.hits || 1;
            let dmgHere = 0;
            for (let h = 0; h < hits; h++) {
                const base = skillDamageBase(sk);
                const dmg  = Math.floor((base / hits) * (0.85 + Math.random() * 0.3) * vulnMult('e') * atkMult('p'));
                B.enemy_hp = Math.max(0, B.enemy_hp - dmg);
                dmgHere += dmg;
            }
            wakeOnHit('e');
            print('  ' + en.name + ':  ' + dmgHere + ' dmg!' + (sk.st ? '  ' + STATUS[sk.st].icon : ''), 'b-player');
            if (sk.drain) {
                const heal = Math.floor(dmgHere * 0.35);
                G.hp = Math.min(G.max_hp, G.hp + heal);
                print('  Drained ' + heal + ' HP!', 'success');
            }
            if (sk.st && Math.random() < (sk.sc || 0.3)) applyFx('e', sk.st);
            totalDmg += dmgHere;
        });
        const fl = B.enemy_hps.findIndex(hp => hp > 0);
        B.enemy_idx = fl >= 0 ? fl : 0;
        if (sk.buf) applyBuff('p', sk.buf);
        applySkillUtility(sk);
        updateStats(); updateBattlePanel();
        if (checkWin()) return;
        enemyTurn();
        return;
    }

    // Single-target damage skill — pick target first
    selectTarget(idx => {
        B.enemy_idx = idx;
        disableAll();
        G.mp = Math.max(0, G.mp - (sk.mp || 0));
        paySkillExtraCost(sk);
        const hits  = sk.hits || 1;
        let totalDmg = 0;
        for (let i = 0; i < hits; i++) {
            const base = skillDamageBase(sk);
            const dmg  = Math.floor((base / hits) * (0.85 + Math.random() * 0.3) * vulnMult('e') * atkMult('p'));
            B.enemy_hp = Math.max(0, B.enemy_hp - dmg);
            totalDmg  += dmg;
        }
        wakeOnHit('e');
        const targetTag = B.enemies.length > 1 ? ' [vs ' + B.enemy.name + ']' : '';
        print(msg + targetTag + (hits > 1 ? ' (' + hits + ' hits)' : '') + '  [' + totalDmg + ' damage]', 'b-player');
        if (sk.drain) {
            const heal = Math.floor(totalDmg * 0.35);
            G.hp = Math.min(G.max_hp, G.hp + heal);
            print('Drained ' + heal + ' HP!', 'success');
        }
        if (sk.st && Math.random() < (sk.sc || 0.3)) applyFx('e', sk.st);
        if (sk.buf) applyBuff('p', sk.buf);
        applySkillUtility(sk);
        updateStats(); updateBattlePanel();
        if (checkWin()) return;
        enemyTurn();
    });
}

// ═══════════════════════════════════════════════════════════════
