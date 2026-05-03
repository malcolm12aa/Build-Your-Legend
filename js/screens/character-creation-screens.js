// SCREENS
// ═══════════════════════════════════════════════════════════════
function pick_race() {
    clearOutput();
    print('YGGDRASIL — ANIME MULTIVERSE RPG', 'highlight');
    print('A fan RPG built on the level system from Overlord. Race + Job = max level 100.', 'narrator');
    print('');
    print('— STEP 1: CHOOSE YOUR RACE —', 'highlight');
    print('Your racial class is tied to your anime origin. Racial levels have a hard cap — the rest go into jobs.', 'narrator');
    print('');
    $ch.innerHTML = '';
    // Group races by anime
    const raceGroups = {};
    Object.entries(RACE_DATA).forEach(([id, r]) => {
        if (!raceGroups[r.anime]) raceGroups[r.anime] = [];
        raceGroups[r.anime].push([id, r]);
    });
    Object.entries(raceGroups).forEach(([anime, entries]) => {
        const hdr = document.createElement('div');
        hdr.style.cssText = 'margin:10px 0 4px;padding:6px 10px;background:linear-gradient(90deg,#12082a,#090e1c);border-left:3px solid #e8c84a;font-family:"Cinzel Decorative",serif;font-size:11px;color:#e8c84a;letter-spacing:2px';
        hdr.textContent = '— ' + anime.toUpperCase() + ' —';
        $ch.appendChild(hdr);
        entries.forEach(([id, r]) => {
            const b = document.createElement('button');
            b.textContent =
                r.name + '  ·  Racial max: ' + r.max_lv + ' levels\n' +
                'HP:' + r.base.hp + '  MP:' + r.base.mp + '  PHY.ATK:' + r.base.pa +
                '  PHY.DEF:' + r.base.pd + '  AGI:' + r.base.ag +
                '  MAG.ATK:' + r.base.ma + '  RESIST:' + r.base.rs + '  SPECIAL:' + r.base.sp + '\n' +
                r.desc;
            b.style.lineHeight = '1.65';
            b.style.whiteSpace = 'pre-wrap';
            b.onclick = () => { G.race_id = Number(id); pick_job(); };
            $ch.appendChild(b);
        });
    });
}

function pick_job() {
    clearOutput();
    const race = RACE_DATA[G.race_id];
    print('Race: ' + race.name + '  [' + race.anime + ']', 'highlight');
    print('— STEP 2: CHOOSE YOUR STARTING JOB —', 'highlight');
    print('Your job defines your fighting style. All jobs are unlocked from the start, including Advanced, Specialist, Rare, and Hidden paths.', 'narrator');
    print('');
    $ch.innerHTML = '';
    // Group all jobs by anime
    const jobGroups = {};
    Object.entries(JOB_DATA).forEach(([id, j]) => {
        if (!jobGroups[j.anime]) jobGroups[j.anime] = [];
        jobGroups[j.anime].push([id, j]);
    });
    Object.entries(jobGroups).forEach(([anime, entries]) => {
        const hdr = document.createElement('div');
        hdr.style.cssText = 'margin:10px 0 4px;padding:6px 10px;background:linear-gradient(90deg,#12082a,#090e1c);border-left:3px solid #7f5af0;font-family:"Cinzel Decorative",serif;font-size:11px;color:#a78bfa;letter-spacing:2px';
        hdr.textContent = '— ' + anime.toUpperCase() + ' —';
        $ch.appendChild(hdr);
        entries.forEach(([id, j]) => {
            const locked = !canStartWithJob(Number(id), j);
            const b = document.createElement('button');
            b.textContent =
                j.name + '  ·  ' + classTierLabel(j) + '\n' +
                'HP:' + j.base.hp + '  MP:' + j.base.mp + '  PHY.ATK:' + j.base.pa +
                '  PHY.DEF:' + j.base.pd + '  AGI:' + j.base.ag +
                '  MAG.ATK:' + j.base.ma + '  RESIST:' + j.base.rs + '  SPECIAL:' + j.base.sp + '\n' +
                j.desc;
            b.style.lineHeight = '1.65';
            b.style.whiteSpace = 'pre-wrap';
            b.onclick = () => { G.jobs = [{id: Number(id), lv: 1}]; your_character(); };
            $ch.appendChild(b);
        });
    });
    const back = document.createElement('button');
    back.textContent = '← Back to Race Selection';
    back.onclick = pick_race;
    $ch.appendChild(back);
}

function your_character() {
    G.race_lv = 1;
    G.exp = 0; G.next_exp = 100; G.level_pts = 0; G.stat_pts = 0;
    G.bonus = { hp:0, mp:0, pa:0, pd:0, ag:0, ma:0, md:0, rs:0, sp:0 };
    G.gold = 0;
    G.learned_skills = []; G.pending_skill_picks = [];
    G.achievements = { flags: [], defeated: {}, totalKills: 0, secret_research: 0 };
    G.class_unlocks = [];
    G.recruits = []; G.active_recruits = [];
    // Auto-grant lv 1 skills for race and starting job
    const race = RACE_DATA[G.race_id];
    const job  = JOB_DATA[G.jobs[0].id];
    if (race) checkSkillTier('race', race, 1);
    G.jobs.forEach(j => {
        const jd = JOB_DATA[j.id];
        if (jd) checkSkillTier(j.id, jd, 1);
    });
    applyStats();
    G.hp = G.max_hp; G.mp = G.max_mp;
    clearOutput();
    print(race.name + '  [' + race.anime + ']  ×  ' + job.name + '  [' + job.anime + ']', 'highlight');
    print(race.desc, 'narrator');
    print(job.desc, 'narrator');
    print('');
    print('Starting Stats  (Race Lv.' + G.race_lv + ' + ' + job.name + ' Lv.' + G.jobs[0].lv + ' = Total Lv.' + G.total_lv + ')', 'info');
    print('HP:' + G.max_hp + '  MP:' + G.max_mp + '  PHY.ATK:' + G.phy_atk + '  PHY.DEF:' + G.phy_def, 'info');
    print('AGI:' + G.agi + '  MAG.ATK:' + G.mag_atk + '  MAG.DEF:' + G.mag_def + '  RESIST:' + G.resist + '  SPECIAL:' + G.special, 'info');
    print('');
    print('Max Level: 100  ·  Racial max: ' + race.max_lv + '  ·  Job max: ' + job.max_lv, 'narrator');
    updateStats();
    showChoices([
        ['Begin your journey →', intro],
        ['← Change Job',   pick_job],
        ['← Change Race',  pick_race],
    ]);
}

function intro() {
    clearOutput();
    print('In this world, everyone is born with a role — and that role is theirs for life.', 'narrator');
    print("But you're different. You get to forge your own path. This is where your story begins.", 'narrator');
    print('');
    print("You wake up on a cold floor. An inn. You don't remember anything — only the sensation of falling.", 'narrator');
    print("An innkeeper leans over you. \"You're alive. Good. What's your name?\"", 'narrator');
    showNameInput(name => {
        G.name = name;
        clearOutput();
        print('"' + G.name + '," you say slowly, as if hearing it for the first time.', 'highlight');
        print('The innkeeper nods and slides a worn pouch across the counter.', 'narrator');
        print('"You had this on you when they brought you in."', 'narrator');
        G.gold += 100;
        updateStats();
        print('You received 100 gold.', 'success');
        print('"There are answers at the castle," the innkeeper says. "But you\'re not ready yet."', 'narrator');
        print('You pocket the gold and step outside.', 'narrator');
        showChoices([['Head to Town Center →', town_center]]);
    });
}

function town_center() {
    clearOutput();
    print('Town Center  —  Total Level ' + G.total_lv + ' / 100' + (G.level_pts ? '  [' + G.level_pts + ' Level Point(s) to spend!]' : ''), 'highlight');
    print('A crossroads between worlds. Strange portals shimmer at the edge of town.', 'narrator');
    print('');
    print('  Inn — rest for free  ·  Shops — weapons, spells, potions', 'info');
    print('  World Map — explore all zones based on your level', 'info');
    print('');
    showChoices([
        ['Inn',                              inn],
        ['Shops',                            shops],
        ['🤝  Recruitment Hall',             recruitment_hall],
        ['📜  Class Registry',               class_registry_screen],
        ['📘  YGGDRASIL Build Guide',        yggdrasil_build_guide_screen],
        ['⚔  Character Status',             character_screen],
        ['📖  Skill Screen',                skill_screen],
        ['🗺  World Map  — choose a zone',  show_map],
    ]);
}


function recruitCategoryName(r) {
    return r.category || r.anime || 'Fantasy Recruits';
}

function recruitGroups() {
    const groups = {};
    RECRUIT_DATA.forEach(r => {
        const cat = recruitCategoryName(r);
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(r);
    });
    return groups;
}

function recruitBonusText(r) {
    return Object.entries(r.bonus || {}).map(([k,v]) => '+' + v + ' ' + k.toUpperCase()).join('  ');
}

function recruitAssistText(r) {
    const a = r.assist || {};
    const parts = [];
    if (a.kind) parts.push(a.kind.toUpperCase());
    if (a.pow) parts.push('Power ' + a.pow);
    if (a.healPct) parts.push('Heal ' + Math.round(a.healPct * 100) + '%');
    if (a.mpRestorePct) parts.push('MP +' + Math.round(a.mpRestorePct * 100) + '%');
    if (a.status) parts.push('inflicts ' + a.status);
    if (a.buff) parts.push('grants ' + a.buff);
    if (a.cleanse) parts.push('cleanse');
    return a.name + ' — ' + parts.join(' · ');
}

function recruitment_hall() {
    ensureGameCollections();
    clearOutput();
    showBattlePanel(false);
    const active = getActiveRecruits();
    print('RECRUITMENT HALL', 'highlight');
    print('Spend gold to recruit fantasy companions as support allies. Each recruit has a level, race, and job. You can keep everyone you hire, but only 3 can be active at once.', 'narrator');
    print('Active allies give small stat bonuses and can each use one assist per battle.', 'narrator');
    print('');
    print('Gold: ' + G.gold + '   |   Recruited: ' + G.recruits.length + ' / ' + RECRUIT_DATA.length + '   |   Active: ' + active.length + ' / 3', 'info');
    if (active.length) print('Active: ' + active.map(r => r.emoji + ' ' + r.name).join('  ·  '), 'success');
    print('');

    const groups = recruitGroups();
    $ch.innerHTML = '';
    Object.entries(groups).forEach(([anime, list]) => {
        const owned = list.filter(r => G.recruits.includes(r.id)).length;
        const b = document.createElement('button');
        b.textContent = anime + ' — fantasy allies  (' + owned + '/' + list.length + ' recruited)';
        b.onclick = () => recruit_category(anime);
        $ch.appendChild(b);
    });

    const manage = document.createElement('button');
    manage.textContent = '⚙ Manage Active Recruits';
    manage.onclick = recruit_manage;
    $ch.appendChild(manage);

    const back = document.createElement('button');
    back.textContent = '← Return to Town Center';
    back.onclick = town_center;
    $ch.appendChild(back);
}

function recruit_category(anime) {
    ensureGameCollections();
    clearOutput();
    showBattlePanel(false);
    print(anime.toUpperCase() + ' — RECRUITS', 'highlight');
    print('Fantasy companions from this recruitment board. Each ally has a Level, Race, Job, passive bonus, and one battle assist.', 'narrator');
    print('Gold: ' + G.gold + '   |   Total Level: ' + G.total_lv + '   |   Active: ' + G.active_recruits.length + ' / 3', 'info');
    print('');

    const list = RECRUIT_DATA.filter(r => recruitCategoryName(r) === anime);
    $ch.innerHTML = '';
    list.forEach(r => {
        const owned = G.recruits.includes(r.id);
        const active = G.active_recruits.includes(r.id);
        const canBuy = !owned && G.gold >= r.cost && G.total_lv >= r.req;
        const b = document.createElement('button');
        b.style.whiteSpace = 'pre-wrap';
        b.style.lineHeight = '1.55';
        b.textContent =
            (owned ? (active ? '[ACTIVE] ' : '[RECRUITED] ') : '[HIRE] ') +
            r.emoji + '  ' + r.name + ' — ' + r.role + '\n' +
            'Level: ' + (r.level || r.req || 1) + '  ·  Race: ' + (r.race || 'Unknown') + '  ·  Job: ' + (r.job || r.role || 'Adventurer') + '\n' +
            'Cost: ' + r.cost + 'g  ·  Level Req: ' + r.req + '  ·  Bonus: ' + recruitBonusText(r) + '\n' +
            'Assist: ' + recruitAssistText(r) + '\n' +
            r.desc;

        if (!owned) {
            b.disabled = !canBuy;
            b.onclick = () => {
                G.gold -= r.cost;
                G.recruits.push(r.id);
                if (G.active_recruits.length < 3) G.active_recruits.push(r.id);
                applyStats(); updateStats();
                clearOutput();
                print(r.emoji + ' ' + r.name + ' joined your roster!', 'success');
                print('They were added to active support because there was an open slot.', 'info');
                showChoices([
                    ['← Back to ' + anime + ' recruits', () => recruit_category(anime)],
                    ['Recruitment Hall', recruitment_hall],
                    ['Town Center', town_center],
                ]);
            };
        } else {
            b.onclick = () => toggle_recruit_active(r.id, () => recruit_category(anime));
        }
        $ch.appendChild(b);
    });

    const hall = document.createElement('button');
    hall.textContent = '← Recruitment Hall';
    hall.onclick = recruitment_hall;
    $ch.appendChild(hall);
}

function toggle_recruit_active(id, returnFn) {
    ensureGameCollections();
    const r = getRecruit(id);
    if (!r || !G.recruits.includes(id)) return;
    const idx = G.active_recruits.indexOf(id);
    if (idx >= 0) {
        G.active_recruits.splice(idx, 1);
        applyStats(); updateStats();
        returnFn();
        return;
    }
    if (G.active_recruits.length >= 3) {
        clearOutput();
        print('Active recruit slots are full.', 'danger');
        print('Remove one active recruit before adding ' + r.name + '.', 'narrator');
        showChoices([
            ['Manage Active Recruits', recruit_manage],
            ['← Back', returnFn],
        ]);
        return;
    }
    G.active_recruits.push(id);
    applyStats(); updateStats();
    returnFn();
}

function recruit_manage() {
    ensureGameCollections();
    clearOutput();
    showBattlePanel(false);
    print('MANAGE ACTIVE RECRUITS', 'highlight');
    print('Choose up to 3 recruited characters to support you in battle.', 'narrator');
    print('Active: ' + G.active_recruits.length + ' / 3', 'info');
    print('');

    $ch.innerHTML = '';
    if (!G.recruits.length) {
        const p = document.createElement('p');
        p.className = 'narrator';
        p.textContent = 'No recruits yet. Hire fantasy companions from a recruitment board first.';
        $ch.appendChild(p);
    } else {
        G.recruits.map(getRecruit).filter(Boolean).forEach(r => {
            const active = G.active_recruits.includes(r.id);
            const b = document.createElement('button');
            b.style.whiteSpace = 'pre-wrap';
            b.textContent =
                (active ? '[ACTIVE] ' : '[BENCH] ') + r.emoji + ' ' + r.name + ' — Lv.' + (r.level || r.req || 1) + ' ' + (r.race || 'Unknown') + ' ' + (r.job || r.role || 'Adventurer') + '\n' +
                'Board: ' + recruitCategoryName(r) + '\n' +
                'Bonus: ' + recruitBonusText(r) + '\nAssist: ' + recruitAssistText(r);
            b.onclick = () => toggle_recruit_active(r.id, recruit_manage);
            $ch.appendChild(b);
        });
    }

    const hall = document.createElement('button');
    hall.textContent = '← Recruitment Hall';
    hall.onclick = recruitment_hall;
    $ch.appendChild(hall);

    const back = document.createElement('button');
    back.textContent = '← Return to Town Center';
    back.onclick = town_center;
    $ch.appendChild(back);
}

function skill_screen() {
    clearOutput();
    showBattlePanel(false);
    print('SKILL SCREEN', 'highlight');
    print(G.name + '  ·  Total Level ' + G.total_lv + '  ·  Skills learned: ' + G.learned_skills.length, 'info');
    print('');
    $ch.innerHTML = '';
    const actives  = G.learned_skills.filter(s => s.type === 'a');
    const passives = G.learned_skills.filter(s => s.type === 'p');
    if (G.learned_skills.length === 0) {
        const msg = document.createElement('p');
        msg.className = 'narrator';
        msg.textContent = 'No skills learned yet. Level up your Race and Job to unlock skills.';
        $ch.appendChild(msg);
    } else {
        if (actives.length > 0) {
            const hdr = document.createElement('div');
            hdr.className = 'cs-exp-row';
            hdr.innerHTML = '<div class="cs-exp-label" style="color:#48cae4">⚔ ACTIVE SKILLS  (' + actives.length + ')  — use in battle</div>';
            actives.forEach(sk => {
                const fxParts = [];
                if (sk.mp)   fxParts.push(sk.mp + ' MP');
                if (sk.pow)  fxParts.push('Power: ' + sk.pow);
                if (sk.hits && sk.hits > 1) fxParts.push('x' + sk.hits + ' hits');
                if (sk.st)   fxParts.push('→ ' + sk.st + ' (' + Math.round((sk.sc||0)*100) + '%)');
                if (sk.drain) fxParts.push('DRAIN 35%');
                if (sk.heal)  fxParts.push('HEAL ' + Math.round(sk.heal*100) + '% HP');
                if (sk.buf)   fxParts.push('self: ' + sk.buf);
                if (sk.cleanse) fxParts.push('CLEANSE');
                if (sk.mpRestore) fxParts.push('MP +' + sk.mpRestore);
                if (sk.mpRestorePct) fxParts.push('MP +' + Math.round(sk.mpRestorePct*100) + '%');
                if (sk.hpCostPct) fxParts.push('Blood Price ' + Math.round(sk.hpCostPct*100) + '% HP');
                if (sk.execute) fxParts.push('EXECUTE below ' + Math.round(sk.execute*100) + '% HP');
                const row = document.createElement('div');
                row.style.cssText = 'padding:6px 0;border-bottom:1px solid #111d2e';
                row.innerHTML = '<span style="color:#e8c84a;font-weight:700">' + sk.name + '</span>' +
                    (fxParts.length ? '  <span style="color:#48cae4;font-size:11px">' + fxParts.join('  ') + '</span>' : '') +
                    '<br><span style="color:#8aaac8;font-size:11px">' + sk.desc + '</span>';
                hdr.appendChild(row);
            });
            $ch.appendChild(hdr);
        }
        if (passives.length > 0) {
            const hdr2 = document.createElement('div');
            hdr2.className = 'cs-exp-row';
            hdr2.innerHTML = '<div class="cs-exp-label" style="color:#a78bfa">✦ PASSIVE SKILLS  (' + passives.length + ')  — always active</div>';
            passives.forEach(sk => {
                const bonParts = sk.bon ? Object.entries(sk.bon).map(([k,v]) => '+'+v+' '+k.toUpperCase()) : [];
                if (Array.isArray(sk.immune)) bonParts.push('IMMUNE: ' + sk.immune.join(', '));
                if (sk.spellBoost) bonParts.push('SPELL DMG +' + Math.round(sk.spellBoost * 100) + '%');
                if (sk.summonBoost) bonParts.push('RECRUIT ASSIST +' + Math.round(sk.summonBoost * 100) + '%');
                if (sk.craftDiscount) bonParts.push('SHOP DISCOUNT ' + Math.round(sk.craftDiscount * 100) + '%');
                if (sk.detection) bonParts.push('DETECTION +' + sk.detection);
                const row = document.createElement('div');
                row.style.cssText = 'padding:6px 0;border-bottom:1px solid #111d2e';
                row.innerHTML = '<span style="color:#a78bfa;font-weight:700">' + sk.name + '</span>' +
                    (bonParts.length ? '  <span style="color:#2ecc71;font-size:11px">' + bonParts.join('  ') + '</span>' : '') +
                    '<br><span style="color:#8aaac8;font-size:11px">' + sk.desc + '</span>';
                hdr2.appendChild(row);
            });
            $ch.appendChild(hdr2);
        }
    }
    const back = document.createElement('button');
    back.textContent = '← Return to Town Center';
    back.onclick = town_center;
    back.style.marginTop = '8px';
    $ch.appendChild(back);
}

function race_update_help_screen() {
    clearOutput();
    showBattlePanel(false);
    print('HELP — LATEST RACE UPDATE', 'highlight');
    print('The race list has been rebuilt around the new anime race groups. Pick a race at the start, then level that race alongside your YGGDRASIL-style job paths.', 'narrator');
    print('');
    $ch.innerHTML = '';

    const groups = [
        ['Naruto', ['Uchiha Clan', 'Hyuga Clan', 'Uzumaki Clan', 'Otsutsuki Clan', 'Senju Clan']],
        ['Bleach', ['Shinigami', 'Hollow', 'Quincy', 'Fullbringer', 'Arrancar', 'Visored']],
        ['One Piece', ['Giants', 'Skypieans']],
        ['Attack on Titan', ['Ackerman Clan', 'Founding Titan', 'Armored Titan', 'Attack Titan', 'Beast Titan', 'Cart Titan', 'Colossus Titan', 'Female Titan', 'Jaw Titan', 'War Hammer Titan']],
        ['Jujutsu Kaisen', ['Zenin Clan', 'Gojo Clan', 'Kamo Clan']],
        ['Fairy Tail', ['Celestial Spirit', 'Demon Slayer', 'Dragon Slayer', 'Etherious', 'God Slayer']],
        ['Hunter x Hunter', ['Chimera Ant', 'Zoldyck Family', 'Kurta Clan']],
    ];

    const div = document.createElement('div');
    div.className = 'cs-exp-row';
    div.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">🧬 UPDATED RACE LIST</div>';
    groups.forEach(([anime, races]) => {
        div.innerHTML += '<div style="margin-top:8px;color:#48cae4;font-size:12px;font-weight:700;letter-spacing:1px">' + anime + '</div>' +
            '<div style="font-size:11px;color:#c0d0e0;line-height:1.6">' + races.join(' · ') + '</div>';
    });
    $ch.appendChild(div);

    const note = document.createElement('div');
    note.className = 'cs-exp-row';
    note.innerHTML = '<div class="cs-exp-label" style="color:#a78bfa">WHAT CHANGED</div>' +
        '<div style="font-size:11px;color:#c0d0e0;line-height:1.7">' +
        '• Sky Islander was renamed to Skypieans.<br>' +
        '• Attack on Titan races were replaced with Ackerman Clan and the Nine Titan paths.<br>' +
        '• JJK Sorcerer Clan was replaced with Zenin, Gojo, and Kamo clan choices.<br>' +
        '• Fairy Tail races were replaced with Celestial Spirit, Demon Slayer, Dragon Slayer, Etherious, and God Slayer.<br>' +
        '• Mob Psycho 100, Demon Slayer, and Overlord race groups were replaced by Hunter x Hunter races.' +
        '</div>';
    $ch.appendChild(note);

    const backLabel = !G.race_id ? '← Back to Race Selection' :
        ((!Array.isArray(G.jobs) || !G.jobs.length) ? '← Back to Job Selection' :
        (!G.name ? '← Back to Character Preview' : '← Back'));
    showChoices([
        ['❓ Full Help', help_screen],
        [backLabel, returnFromHelp],
    ]);
}

function help_screen() {
    clearOutput();
    showBattlePanel(false);
    print('HELP — SETTINGS / CHARACTER GUIDE', 'highlight');
    print('');
    $ch.innerHTML = '';
    const sections = [
        { title: '── THE 9 STATS ──────────────────────────', color: '#e8c84a', items: [
            ['HP  (Hit Points)',    'Your life force. Reach 0 and you die. Higher HP means you survive more hits. Increased by race/job levels, stat points, and passive skills.'],
            ['MP  (Mana Points)',   'Energy used to cast purchased Spells and Class Skills. Spells and active skills cost MP per use. Restored fully at the Inn.'],
            ['PHY.ATK',            'Physical attack power. Scales damage for normal attacks and physical skills. Weapon ATK adds directly to this in battle calculations.'],
            ['PHY.DEF',            'Physical defence. Reduces incoming physical damage via diminishing returns — higher DEF means progressively better damage reduction.'],
            ['AGILITY',            'Speed and reaction. Determines crit chance in battle (AGI × 0.4% crit rate). Also improves overall evasion feel.'],
            ['MAG.ATK',            'Magical attack power. Scales Spell damage (power + MAG.ATK × 0.7). Boosts magic-type class skills.'],
            ['MAG.DEF',            'Magic defence. Reduces incoming magic damage similarly to PHY.DEF. Important against magic-heavy enemies.'],
            ['RESIST',             'Status resistance. Reduces enemy status effect proc chance by RESIST × 0.3% per point. 100 RESIST = 30% reduced chance.'],
            ['SPECIAL',            'Versatile combat stat. Boosts damage of special techniques and affects unique class abilities. Represents raw power beyond the physical/magic divide.'],
        ]},
        { title: '── THE LEVEL SYSTEM ─────────────────────', color: '#48cae4', items: [
            ['Total Level',        'Race Level + all Job Levels combined. Max is 100. Each new Total Level grants 1 Level Point and 10 Stat Points.'],
            ['Class Stacking',    'Powerful YGGDRASIL builds stack many capped classes instead of one class to 100: Base 15, Advanced 10, Specialist 10, Rare 5, Hidden 5.'],
            ['Level Points',       'Spend on your Race or any added Job path to increase that level. Adding a class path starts it at Lv.0; spending a point makes it Lv.1.'],
            ['Stat Points',        'Spend freely on any of the 9 stats on your Character Status screen. +1 to whichever stat you choose.'],
            ['Race Levels',        'Improve your racial base stats and unlock racial skills, resistances, and special identity features.'],
            ['Job Levels',         'Improve class stats and unlock active skills, passive skills, resistances, immunities, spell boosts, summon boosts, crafting discounts, and detection utility.'],
            ['Prerequisites',      'Advanced, Specialist, Rare, and Hidden jobs can require class levels, racial origin, hidden research, monster defeats, and secret build paths.'], 
        ]},
        { title: '── LATEST RACE UPDATE ───────────────────', color: '#a78bfa', items: [
            ['Naruto',             'Uchiha Clan, Hyuga Clan, Uzumaki Clan, Otsutsuki Clan, and Senju Clan.'],
            ['Bleach',             'Shinigami, Hollow, Quincy, Fullbringer, Arrancar, and Visored.'],
            ['One Piece',          'Giants added. Sky Islander replaced with Skypieans.'],
            ['Attack on Titan',    'Replaced with Ackerman Clan plus Founding, Armored, Attack, Beast, Cart, Colossus, Female, Jaw, and War Hammer Titan paths.'],
            ['JJK',                'Sorcerer Clan replaced with Zenin Clan, Gojo Clan, and Kamo Clan.'],
            ['Fairy Tail',         'Replaced with Celestial Spirit, Demon Slayer, Dragon Slayer, Etherious, and God Slayer.'],
            ['Hunter x Hunter',    'Mob Psycho 100, Demon Slayer, and Overlord race groups were replaced with Chimera Ant, Zoldyck Family, and Kurta Clan.'],
        ]},
        { title: '── STATUS EFFECTS (ENEMY) ───────────────', color: '#ff4757', items: [
            ['Poison',     'Deals 5% max HP per turn. Lasts until cured or battle ends.'],
            ['Bleed',      'Deals 4% max HP per turn. Stacks with Poison.'],
            ['Burn',       'Deals 6% max HP per turn. Inflicted by fire techniques.'],
            ['Stun',       'Enemy skips 1 turn. No action while stunned.'],
            ['Paralysis',  'Enemy skips turn with 60% chance each turn. Lasts 3 turns.'],
            ['Sleep',      'Enemy skips all turns until hit. Attack wakes them.'],
            ['Fear',       'Enemy ATK reduced by 30%. Lasts 3 turns.'],
            ['Confusion',  'Enemy attacks randomly — may hit themselves.'],
            ['Weaken',     'Enemy ATK and DEF reduced by 20%.'],
            ['Freeze',     'Enemy is frozen solid — skips 2 turns then breaks free.'],
            ['Petrify',    'Enemy turned to stone — skips all turns for 2 turns.'],
            ['Doom',       'Death countdown of 3 turns. Enemy dies when it reaches 0.'],
            ['Drain',      'Not a status — a skill property. Heals the caster for 35% of damage dealt.'],
        ]},
        { title: '── STATUS EFFECTS (SELF / BUFFS) ─────────', color: '#2ecc71', items: [
            ['Bravery',   '+50% ATK for 3 turns. Granted by certain skills and items.'],
            ['Haste',     '+30% ATK for 2 turns and move priority. Granted by speed techniques.'],
        ]},
        { title: '── BATTLE BASICS ────────────────────────', color: '#a78bfa', items: [
            ['Normal Attack',  'Deals PHY.ATK + weapon ATK − enemy PHY.DEF (with diminishing returns). Cheap but reliable.'],
            ['Spells',         'Purchased at Spell Shops. Use MP. Damage = power + MAG.ATK × 0.7.'],
            ['Skills',         'Learned by leveling Race and Job. Active skills use MP. Passive skills apply automatically.'],
            ['Flee',           '60% chance to escape. Fail and the enemy attacks immediately.'],
            ['Crit',           'AGI × 0.4% chance to deal 1.5× damage on a normal attack.'],
        ]},
    ];
    sections.forEach(sec => {
        const div = document.createElement('div');
        div.className = 'cs-exp-row';
        div.innerHTML = '<div class="cs-exp-label" style="color:' + sec.color + '">' + sec.title + '</div>';
        sec.items.forEach(([label, text]) => {
            div.innerHTML += '<div style="display:flex;gap:8px;padding:5px 0;border-bottom:1px solid #0a1220">' +
                '<span style="min-width:130px;font-size:11px;font-weight:700;color:#e8c84a">' + label + '</span>' +
                '<span style="font-size:11px;color:#c0d0e0;flex:1">' + text + '</span>' +
                '</div>';
        });
        $ch.appendChild(div);
    });
    const back = document.createElement('button');
    back.textContent = !G.race_id ? '← Back to Race Selection' :
        ((!Array.isArray(G.jobs) || !G.jobs.length) ? '← Back to Job Selection' :
        (!G.name ? '← Back to Character Preview' : '← Back'));
    back.onclick = returnFromHelp;
    back.style.marginTop = '8px';
    $ch.appendChild(back);
}

function character_screen() {
    clearOutput();
    showBattlePanel(false);
    const race = RACE_DATA[G.race_id];
    const expPct = Math.min(100, Math.floor((G.exp / G.next_exp) * 100));
    const jobLvTotal = G.jobs.reduce((s, j) => s + j.lv, 0);
    const racePct = Math.round((G.race_lv / 100) * 100);
    const jobPct  = Math.round((jobLvTotal  / 100) * 100);
    const pts = G.level_pts;

    // ── Header ──────────────────────────────────────────────────
    $ch.innerHTML = `
      <div class="cs-summary">
        <div>
          <div class="cs-char-name">${G.name}</div>
          <div class="cs-class-tag">${race.name} [${race.anime}]  ·  ${G.jobs.map(j=>JOB_DATA[j.id].name+' ['+JOB_DATA[j.id].anime+'] Lv.'+j.lv).join(' / ')}</div>
        </div>
        <div style="text-align:right">
          <div class="cs-soul-lv">Total Level ${G.total_lv} / 100</div>
          <div class="cs-soul-sub">${pts > 0 ? pts + ' Level Point'+(pts>1?'s':'')+' to spend!' : 'Race Lv.'+G.race_lv+' / '+race.max_lv}</div>
        </div>
      </div>
      <div class="cs-exp-row">
        <div class="cs-exp-label">Experience to next Level Point</div>
        <div class="cs-exp-track"><div class="cs-exp-fill" style="width:${expPct}%"></div></div>
        <div class="cs-exp-text">${G.exp} / ${G.next_exp} EXP &nbsp;·&nbsp; Gold: ${G.gold}</div>
      </div>`;

    // ── Level Breakdown bar (Racial vs Job) ─────────────────────
    const breakDiv = document.createElement('div');
    breakDiv.className = 'cs-exp-row';
    breakDiv.innerHTML =
        '<div class="cs-exp-label">Level Breakdown  —  Racial ' + G.race_lv + ' + Job ' + jobLvTotal + ' = ' + G.total_lv + ' / 100</div>' +
        '<div style="display:flex;height:10px;border:1px solid #1c3354;overflow:hidden;margin-top:3px">' +
        '  <div style="width:' + racePct + '%;background:linear-gradient(90deg,#7a0000,#ff4757)"></div>' +
        '  <div style="width:' + jobPct + '%;background:linear-gradient(90deg,#1a0050,#7f5af0)"></div>' +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;font-size:10px;color:#8aaac8;margin-top:3px">' +
        '  <span style="color:#ff4757">● Racial Levels: ' + G.race_lv + '</span>' +
        '  <span style="color:#7f5af0">Job Levels: ' + jobLvTotal + ' ●</span>' +
        '</div>';
    $ch.appendChild(breakDiv);

    const planDiv = document.createElement('div');
    planDiv.className = 'cs-exp-row';
    planDiv.innerHTML =
        '<div class="cs-exp-label" style="color:#e8c84a">YGGDRASIL BUILD TEMPLATE</div>' +
        '<div style="font-size:11px;color:#c0d0e0;line-height:1.6">15 levels in a base race or class → 10 levels in an advanced class → 10 levels in another specialist class → 5 levels in a rare class → continue stacking capped paths until Level 100.</div>';
    $ch.appendChild(planDiv);

    // ── Pending skill picks ──────────────────────────────────────
    G.pending_skill_picks.forEach((pick, pickIdx) => {
        const pickDiv = document.createElement('div');
        pickDiv.className = 'cs-exp-row';
        pickDiv.innerHTML = '<div class="cs-exp-label" style="color:#2ecc71">⚔ CHOOSE A SKILL  (Lv.' + pick.tier + ' ' + (pick.src === 'race' ? RACE_DATA[G.race_id].name : JOB_DATA[pick.src].name) + ')</div>';
        pick.opts.forEach(sk => {
            const sb = document.createElement('button');
            sb.className = 'btn-levelup';
            sb.style.cssText = 'width:100%;margin-top:4px;text-align:left';
            const typeTag = sk.type === 'p' ? '[PASSIVE]' : '[' + (sk.mp||0) + ' MP]';
            const fxTag   = sk.type === 'a' ? (sk.st ? '  →' + sk.st : '') + (sk.hits > 1 ? '  x'+sk.hits+' hits' : '') + (sk.drain ? '  DRAIN' : '') + (sk.heal ? '  HEAL' : '') : '';
            sb.textContent = typeTag + '  ' + sk.name + fxTag + '  —  ' + sk.desc;
            sb.onclick = () => {
                G.learned_skills.push(sk);
                G.pending_skill_picks.splice(pickIdx, 1);
                applyStats(); updateStats(); character_screen();
            };
            pickDiv.appendChild(sb);
        });
        $ch.appendChild(pickDiv);
    });

    // ── Level Point spending ─────────────────────────────────────
    if (pts > 0 && G.total_lv < 100) {
        const spendDiv = document.createElement('div');
        spendDiv.className = 'cs-exp-row';
        spendDiv.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">★ SPEND LEVEL POINT (' + pts + ' available)</div>';

        // Race option
        if (G.race_lv < race.max_lv) {
            const rb = document.createElement('button');
            rb.className = 'btn-levelup';
            rb.style.cssText = 'width:100%;margin-top:4px';
            rb.textContent = 'Race: ' + race.name + ' Lv.' + G.race_lv + ' → Lv.' + (G.race_lv + 1) + '  (max ' + race.max_lv + ')';
            rb.onclick = () => {
                if (G.total_lv >= 100) return;
                G.race_lv++; G.level_pts--;
                checkSkillTier('race', race, G.race_lv);
                applyStats(); updateStats(); character_screen();
            };
            spendDiv.appendChild(rb);
        }
        // Each job option
        G.jobs.forEach((job, idx) => {
            const jd = JOB_DATA[job.id];
            if (job.lv >= jd.max_lv) return;
            const jb = document.createElement('button');
            jb.className = 'btn-levelup';
            jb.style.cssText = 'width:100%;margin-top:4px';
            jb.textContent = jd.name + ' Lv.' + job.lv + ' → Lv.' + (job.lv + 1) + '  (max ' + jd.max_lv + ')';
            jb.onclick = () => {
                if (G.total_lv >= 100) return;
                G.jobs[idx].lv++; G.level_pts--;
                checkSkillTier(job.id, jd, G.jobs[idx].lv);
                applyStats(); updateStats(); character_screen();
            };
            spendDiv.appendChild(jb);
        });
        $ch.appendChild(spendDiv);
    }

    // ── YGGDRASIL Class Registry / hidden build paths ─────────────
    appendMiniClassRegistry();

    // ── Stat Point spending ──────────────────────────────────────
    if (G.stat_pts > 0) {
        const statSpendDiv = document.createElement('div');
        statSpendDiv.className = 'cs-exp-row';
        statSpendDiv.innerHTML = '<div class="cs-exp-label" style="color:#48cae4">⊕ SPEND STAT POINTS (' + G.stat_pts + ' available — +1 to any stat per point)</div>';
        const STAT_KEYS = [
            {key:'hp', label:'HP'},  {key:'mp', label:'MP'},
            {key:'pa', label:'PHY.ATK'}, {key:'pd', label:'PHY.DEF'},
            {key:'ag', label:'AGI'}, {key:'ma', label:'MAG.ATK'},
            {key:'md', label:'MAG.DEF'}, {key:'rs', label:'RESIST'},
            {key:'sp', label:'SPECIAL'},
        ];
        const spRow = document.createElement('div');
        spRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:5px;margin-top:6px';
        STAT_KEYS.forEach(({key, label}) => {
            const sb = document.createElement('button');
            sb.className = 'btn-levelup';
            sb.style.cssText = 'width:auto;padding:5px 10px;font-size:11px';
            sb.textContent = '+1 ' + label + ' (bonus: ' + G.bonus[key] + ')';
            sb.onclick = () => { G.bonus[key]++; G.stat_pts--; applyStats(); updateStats(); character_screen(); };
            spRow.appendChild(sb);
        });
        statSpendDiv.appendChild(spRow);
        $ch.appendChild(statSpendDiv);
    }

    // ── 9 Stat bars ─────────────────────────────────────────────
    const STAT_BARS = [
        { label: 'HP  [Hit Points]',      val: G.max_hp,  max: 600 },
        { label: 'MP  [Mana Points]',      val: G.max_mp,  max: 500 },
        { label: 'PHY.ATK',               val: G.phy_atk, max: 250 },
        { label: 'PHY.DEF',               val: G.phy_def, max: 200 },
        { label: 'AGILITY',               val: G.agi,     max: 200 },
        { label: 'MAG.ATK',               val: G.mag_atk, max: 250 },
        { label: 'MAG.DEF',               val: G.mag_def, max: 200 },
        { label: 'RESIST',                val: G.resist,  max: 150 },
        { label: 'SPECIAL',               val: G.special, max: 150 },
    ];
    const barsDiv = document.createElement('div');
    barsDiv.className = 'cs-exp-row';
    barsDiv.innerHTML = '<div class="cs-exp-label">STATUS  —  comparative scale</div>';
    STAT_BARS.forEach(sb => {
        const pct = Math.min(100, Math.round((sb.val / sb.max) * 100));
        barsDiv.innerHTML +=
            '<div style="display:flex;align-items:center;gap:8px;margin-top:5px">' +
            '  <span style="min-width:120px;font-size:10px;font-weight:700;color:#8aaac8;letter-spacing:0.5px">' + sb.label + '</span>' +
            '  <div style="flex:1;background:#07090f;height:10px;border:1px solid #1c3354;overflow:hidden">' +
            '    <div style="width:' + pct + '%;height:100%;background:linear-gradient(90deg,#3a1a6a,#a78bfa)"></div>' +
            '  </div>' +
            '  <span style="min-width:35px;text-align:right;font-size:11px;color:#48cae4;font-weight:700">' + sb.val + '</span>' +
            '</div>';
    });
    $ch.appendChild(barsDiv);

    const back = document.createElement('button');
    back.textContent = '← Return to Town Center';
    back.onclick = town_center;
    back.style.marginTop = '8px';
    $ch.appendChild(back);
}

function inn() {
    clearOutput();
    print('The Inn', 'highlight');
    print('Warm light. A crackling fire. The smell of old wood.', 'narrator');
    print('Innkeeper: "Back again, ' + G.name + '. Need to rest?"', 'narrator');
    print('');
    print('HP: ' + G.hp + ' / ' + G.max_hp + '   MP: ' + G.mp + ' / ' + G.max_mp, 'info');
    showChoices([
        ['Rest — fully restore HP and MP  (free)', () => {
            G.hp = G.max_hp; G.mp = G.max_mp;
            updateStats();
            clearOutput();
            print('You sleep deeply. When you wake, every wound is gone.', 'success');
            print('HP and MP fully restored.', 'success');
            showChoices([['Leave the Inn', town_center]]);
        }],
        ['Leave', town_center],
    ]);
}

function shops() {
    clearOutput();
    print('The Market District', 'highlight');
    print('Merchants shout over each other in three separate stalls.', 'narrator');
    print('Gold: ' + G.gold, 'info');
    if (G.weapon) print('Equipped weapon: ' + G.weapon.name + ' (+' + G.weapon.atk + ' ATK)', 'info');
    print('');
    showChoices([
        ['⚔  Blacksmith    — ' + WEAPON_SHOPS.length + ' anime shops · ' + WEAPONS.length + ' total weapons', blacksmith_selector],
        ['✨  Skill Library — ' + SPELL_SHOPS.length + ' anime shops · ' + SPELLS.length + ' total skills',   spell_shop_selector],
        ['⚗  Alchemy Shop  — ' + POTION_SHOPS.length + ' anime shops · ' + POTIONS.length + ' total items',  alchemy_selector],
        ['←  Leave',                                                                                           town_center],
    ]);
}

function blacksmith_selector() {
    clearOutput();
    print('BLACKSMITH', 'highlight');
    print('*clang* *clang*  Nine forges — each masters a different world\'s steel.', 'narrator');
    print('Gold: ' + G.gold + '   |   Equipped: ' + (G.weapon ? G.weapon.name + ' (+' + G.weapon.atk + ' ATK)' : 'none'), 'info');
    print('');
    $ch.innerHTML = '';
    WEAPON_SHOPS.forEach((shop, idx) => {
        const equippedHere = shop.ids.some(id => G.weapon && G.weapon.id === id);
        const b = document.createElement('button');
        b.textContent = shop.anime + ' — ' + shop.name + (equippedHere ? '  [equipped here]' : '');
        b.onclick = () => blacksmith_shop(idx);
        $ch.appendChild(b);
    });
    const back = document.createElement('button');
    back.textContent = '← Back to Shops';
    back.onclick = shops;
    $ch.appendChild(back);
}

function blacksmith_shop(shopIdx) {
    const shop = WEAPON_SHOPS[shopIdx];
    clearOutput();
    print(shop.anime.toUpperCase() + ' — ' + shop.name.toUpperCase(), 'highlight');
    print('Weapons forged from the finest materials of ' + shop.anime + '.', 'narrator');
    print('Gold: ' + G.gold + '   |   Equipped: ' + (G.weapon ? G.weapon.name + ' (+' + G.weapon.atk + ' ATK)' : 'none'), 'info');
    print('');
    $ch.innerHTML = '';
    shop.ids.forEach(wid => {
        const w = WEAPONS.find(x => x.id === wid);
        if (!w) return;
        const equipped = G.weapon && G.weapon.id === w.id;
        const price = priceOf(w);
        const canBuy   = !equipped && G.gold >= price;
        const b = document.createElement('button');
        b.textContent = (equipped ? '[equipped] ' : '') +
            w.name + '  +' + w.atk + ' ATK  —  ' + price + 'g' + (price < w.cost ? '  (discounted from ' + w.cost + 'g)' : '') + '\n' + w.desc;
        b.disabled = equipped || !canBuy;
        b.onclick = () => {
            G.gold -= price;
            G.weapon = w;
            updateStats();
            clearOutput();
            print('You purchased ' + w.name + '! (+' + w.atk + ' ATK)', 'success');
            print('"' + w.desc + '"', 'narrator');
            showChoices([
                ['← Back to ' + shop.name, () => blacksmith_shop(shopIdx)],
                ['← All Blacksmith Shops', blacksmith_selector],
                ['← Shops', shops],
            ]);
        };
        $ch.appendChild(b);
    });
    const back = document.createElement('button');
    back.textContent = '← Back to All Blacksmith Shops';
    back.onclick = blacksmith_selector;
    $ch.appendChild(back);
}

function spell_shop_selector() {
    clearOutput();
    print('SKILL LIBRARY', 'highlight');
    print('Nine specialty libraries — each devoted to a different anime\'s techniques.', 'narrator');
    print('Gold: ' + G.gold + '   |   Skills known: ' + G.spells.length + '   |   Skill damage = power + MAG.ATK × 0.7', 'info');
    print('');
    $ch.innerHTML = '';
    SPELL_SHOPS.forEach((shop, idx) => {
        const known = shop.ids.filter(id => G.spells.includes(id)).length;
        const b = document.createElement('button');
        b.textContent = shop.anime + ' — ' + shop.name + '  (' + known + '/5 learned)';
        b.onclick = () => spell_shop(idx);
        $ch.appendChild(b);
    });
    const back = document.createElement('button');
    back.textContent = '← Back to Shops';
    back.onclick = shops;
    $ch.appendChild(back);
}

function spell_shop(shopIdx) {
    const shop = SPELL_SHOPS[shopIdx];
    clearOutput();
    print(shop.anime.toUpperCase() + ' — ' + shop.name.toUpperCase(), 'highlight');
    print('Glowing tomes and scrolls line the shelves. The air hums with energy.', 'narrator');
    print('Gold: ' + G.gold + '   |   Skills known: ' + G.spells.length, 'info');
    print('Skill damage = skill power + (MAG.ATK × 0.7)', 'info');
    print('');

    $ch.innerHTML = '';
    shop.ids.forEach(sid => {
        const sp = SPELLS.find(s => s.id === sid);
        if (!sp) return;
        const learned = G.spells.includes(sp.id);
        const price = priceOf(sp);
        const canBuy  = !learned && G.gold >= price;
        const b = document.createElement('button');
        b.textContent = (learned ? '[learned] ' : '') +
            sp.name + '  ' + sp.mp + ' MP  —  ' + price + 'g' + (price < sp.cost ? '  (discounted from ' + sp.cost + 'g)' : '') + '\n' + sp.desc;
        b.disabled = learned || !canBuy;
        b.onclick = () => {
            G.gold -= price;
            G.spells.push(sp.id);
            updateStats();
            clearOutput();
            print('You learned ' + sp.name + '! (' + sp.anime + ')', 'success');
            print('"' + sp.desc + '"', 'narrator');
            showChoices([
                ['← Back to ' + shop.name, () => spell_shop(shopIdx)],
                ['← All Skill Libraries', spell_shop_selector],
                ['← Shops', shops],
            ]);
        };
        $ch.appendChild(b);
    });
    const back = document.createElement('button');
    back.textContent = '← Back to Skill Library';
    back.onclick = spell_shop_selector;
    $ch.appendChild(back);
}

function alchemy_selector() {
    clearOutput();
    print('ALCHEMY SHOP', 'highlight');
    print('Nine brewing stations — each stocked with a different world\'s remedies.', 'narrator');
    print('Gold: ' + G.gold, 'info');
    print('');
    $ch.innerHTML = '';
    POTION_SHOPS.forEach((shop, idx) => {
        const b = document.createElement('button');
        b.textContent = shop.anime + ' — ' + shop.name;
        b.onclick = () => alchemy_shop_fn(idx);
        $ch.appendChild(b);
    });
    const back = document.createElement('button');
    back.textContent = '← Back to Shops';
    back.onclick = shops;
    $ch.appendChild(back);
}

function alchemy_shop_fn(shopIdx) {
    const shop = POTION_SHOPS[shopIdx];
    clearOutput();
    print(shop.anime.toUpperCase() + ' — ' + shop.name.toUpperCase(), 'highlight');
    print('Bubbling potions and remedies from ' + shop.anime + '.', 'narrator');
    print('Gold: ' + G.gold, 'info');
    print('');
    $ch.innerHTML = '';
    shop.ids.forEach(pid => {
        const item  = POTIONS.find(x => x.id === pid);
        if (!item) return;
        const entry = G.inventory.find(i => i.id === item.id);
        const qty   = entry ? entry.qty : 0;
        const price = priceOf(item);
        const b = document.createElement('button');
        b.textContent = item.name + '  —  ' + price + 'g' + (price < item.cost ? '  (discounted from ' + item.cost + 'g)' : '') + '   ' + item.desc + '   (owned: ' + qty + ')';
        b.disabled = G.gold < price;
        b.onclick = () => {
            G.gold -= price;
            const inv = G.inventory.find(i => i.id === item.id);
            if (inv) inv.qty++;
            else G.inventory.push({ id: item.id, qty: 1 });
            updateStats();
            clearOutput();
            print('You bought ' + item.name + '!', 'success');
            showChoices([
                ['← Back to ' + shop.name, () => alchemy_shop_fn(shopIdx)],
                ['← All Alchemy Shops', alchemy_selector],
                ['← Shops', shops],
            ]);
        };
        $ch.appendChild(b);
    });
    const back = document.createElement('button');
    back.textContent = '← Back to All Alchemy Shops';
    back.onclick = alchemy_selector;
    $ch.appendChild(back);
}

// ── Generic zone helpers ──────────────────────────────────────
function zone_encounter(pool, returnFn) {
    _lastZone = returnFn;
    const tier   = Math.floor(G.total_lv / 25);
    const scaled = pool.filter((_, i) => i <= tier);
    const active = scaled.length ? scaled : [pool[0]];
    const rand   = () => ({ ...active[Math.floor(Math.random() * active.length)] });
    // 60% single, 30% double, 10% triple
    const roll = Math.random();
    let group;
    if (roll < 0.60)      group = [rand()];
    else if (roll < 0.90) group = [rand(), rand()];
    else                  group = [rand(), rand(), rand()];
    startBattle(group);
}

function afterFlee() {
    const fn = _lastZone || town_center;
    clearOutput();
    print('You retreat, heart pounding.', 'narrator');
    showChoices([
        ['Try again',             fn],
        ['Return to Town Center', town_center],
    ]);
}
