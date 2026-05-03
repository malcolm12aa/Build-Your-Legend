// ── Save / Load ───────────────────────────────────────────────
function saveGame() {
    try {
        localStorage.setItem('animeRPG_v1', JSON.stringify(G));
        showSaveMsg('✓ Saved at ' + new Date().toLocaleTimeString(), '#2ecc71');
    } catch(e) { showSaveMsg('Save failed: ' + e.message, '#ff4757'); }
}
function loadGame() {
    const raw = localStorage.getItem('animeRPG_v1');
    if (!raw) { showSaveMsg('No save file found.', '#ff4757'); return; }
    try {
        const saved = JSON.parse(raw);
        Object.keys(saved).forEach(k => { G[k] = saved[k]; });
        ensureGameCollections();
        applyStats(); updateStats();
        showSaveMsg('✓ Loaded successfully!', '#2ecc71');
    } catch(e) { showSaveMsg('Load failed: ' + e.message, '#ff4757'); }
}
function confirmNewGame() {
    if (!confirm('Start a new game? All unsaved progress will be lost.')) return;
    localStorage.removeItem('animeRPG_v1');
    location.reload();
}
function showSaveMsg(txt, color) {
    const el = document.getElementById('save-msg');
    if (!el) return;
    el.textContent = txt; el.style.color = color;
    setTimeout(() => { if (el) el.textContent = ''; }, 3500);
}

// ═══════════════════════════════════════════════════════════════
// MUSIC SYSTEM  (Web Audio API — no external files needed)
// ═══════════════════════════════════════════════════════════════
// Note format: [frequency_hz, beats]  — 0 hz = rest
const MUSIC_TRACKS = {
    naruto: { name:'Hidden Leaf Village', bpm:92, wave:'sine', notes:[
        [330,2],[294,1],[262,1],[294,2],[0,1],[330,1],[294,2],
        [262,2],[294,1],[330,1],[294,4],[0,2],
        [392,2],[440,1],[392,1],[330,2],[0,1],[294,1],[330,2],
        [262,4],[0,4]
    ]},
    bleach: { name:'Soul Society', bpm:70, wave:'sine', notes:[
        [440,2],[392,1],[349,1],[330,4],[0,2],
        [392,2],[349,1],[330,1],[294,4],[0,2],
        [330,2],[392,1],[440,1],[494,2],[0,1],[440,1],[392,2],
        [349,4],[0,4]
    ]},
    onepiece: { name:'Grand Line Adventure', bpm:118, wave:'square', notes:[
        [523,1],[587,1],[659,1],[523,1],[659,2],[784,2],
        [523,1],[587,1],[659,1],[784,1],[880,2],[0,2],
        [784,1],[659,1],[587,1],[523,1],[587,2],[523,2],
        [494,2],[440,2],[494,4],[0,2]
    ]},
    demonslayer: { name:'Wisteria Breeze', bpm:84, wave:'sine', notes:[
        [294,2],[349,1],[392,1],[440,2],[0,1],[392,1],[349,2],[0,2],
        [294,3],[0,1],[294,2],[349,1],[392,1],[0,1],
        [523,2],[440,1],[392,1],[349,4],[0,4],
        [294,4],[0,4]
    ]},
    jjk: { name:'Cursed Domain', bpm:96, wave:'sine', notes:[
        [220,2],[247,1],[262,1],[247,2],[0,1],[220,1],[247,2],[0,2],
        [262,2],[294,1],[330,1],[294,4],[0,2],
        [330,2],[294,1],[262,1],[247,2],[0,1],[220,1],[247,2],[0,2],
        [220,4],[0,4]
    ]},
    mha: { name:'Hero Rising', bpm:132, wave:'square', notes:[
        [659,1],[784,1],[880,1],[784,1],[659,2],[784,2],[0,2],
        [523,1],[659,1],[784,1],[880,1],[1047,4],[0,2],
        [880,2],[784,2],[659,4],[0,2],
        [784,2],[659,2],[523,4],[0,4]
    ]},
    dbz: { name:'Power Level Rising', bpm:104, wave:'sawtooth', notes:[
        [262,1],[262,1],[330,2],[392,2],[523,2],[0,2],
        [523,1],[523,1],[659,2],[784,2],[1047,2],[0,2],
        [784,1],[659,1],[523,2],[392,2],[330,2],[0,2],
        [262,4],[0,4]
    ]},
    hxh: { name:"Hunter's Journey", bpm:128, wave:'square', notes:[
        [523,1],[659,1],[784,1],[659,1],[523,2],[659,2],
        [523,1],[587,1],[659,1],[587,1],[523,2],[0,2],
        [440,1],[523,1],[587,1],[659,1],[784,2],[880,2],
        [659,4],[0,4]
    ]},
    battle: { name:'Battle Theme', bpm:144, wave:'sawtooth', notes:[
        [330,1],[330,1],[0,1],[330,1],[262,2],[330,2],[0,2],
        [392,2],[0,2],[294,2],[330,2],[0,2],
        [523,1],[523,1],[0,1],[523,1],[440,2],[494,2],[0,2],
        [523,4],[0,4]
    ]},
    town: { name:'Peaceful Town', bpm:74, wave:'sine', notes:[
        [523,2],[587,2],[659,4],[0,2],
        [659,2],[698,2],[784,4],[0,2],
        [784,2],[698,2],[659,2],[587,2],[523,4],[0,4],
        [440,2],[494,2],[523,4],[0,2],
        [523,2],[440,2],[392,4],[0,4]
    ]},
};

const MusicSystem = {
    ctx: null, masterGain: null,
    playing: false, trackId: null,
    volume: 0.05, noteIdx: 0, nextNoteTime: 0, timerId: null,

    _init() {
        if (this.ctx) return;
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = this.volume;
        this.masterGain.connect(this.ctx.destination);
    },

    play(id) {
        this._init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        this.stop();
        this.trackId = id; this.noteIdx = 0; this.playing = true;
        this.nextNoteTime = this.ctx.currentTime + 0.05;
        this._tick();
        document.querySelectorAll('[data-track]').forEach(b =>
            b.classList.toggle('active', b.dataset.track === id));
        const np = document.getElementById('now-playing');
        if (np) np.textContent = '♪  ' + (MUSIC_TRACKS[id]?.name || id);
    },

    stop() {
        this.playing = false;
        if (this.timerId) { clearTimeout(this.timerId); this.timerId = null; }
        document.querySelectorAll('[data-track]').forEach(b => b.classList.remove('active'));
        const np = document.getElementById('now-playing');
        if (np) np.textContent = 'No music';
    },

    setVolume(pct) {
        this.volume = pct / 100 * 0.25;   // map 0-100 → 0-0.25 master gain
        if (this.masterGain)
            this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.02);
    },

    _tick() {
        if (!this.playing) return;
        const track = MUSIC_TRACKS[this.trackId];
        if (!track) return;
        const lookahead = 0.35;
        while (this.nextNoteTime < this.ctx.currentTime + lookahead) {
            const [freq, beats] = track.notes[this.noteIdx];
            const dur = beats * (60 / track.bpm);
            if (freq > 0) this._note(freq, dur, track.wave || 'sine');
            this.nextNoteTime += dur;
            this.noteIdx = (this.noteIdx + 1) % track.notes.length;
        }
        this.timerId = setTimeout(() => this._tick(), 100);
    },

    _note(freq, dur, wave) {
        const osc  = this.ctx.createOscillator();
        const env  = this.ctx.createGain();
        osc.connect(env); env.connect(this.masterGain);
        osc.type = wave; osc.frequency.value = freq;
        const t = this.nextNoteTime;
        env.gain.setValueAtTime(0, t);
        env.gain.linearRampToValueAtTime(0.6, t + 0.015);
        env.gain.setValueAtTime(0.6, t + dur * 0.68);
        env.gain.linearRampToValueAtTime(0, t + dur * 0.94);
        osc.start(t); osc.stop(t + dur);
    },
};

// ═══════════════════════════════════════════════════════════════
// STATUS EFFECT DEFINITIONS
// ═══════════════════════════════════════════════════════════════
const STATUS = {
    // DoT — deals % of max HP per turn
    burn:      { icon: '🔥', label: 'Burn',      dotPct: 0.10, turns: 3, neg: true  },
    poison:    { icon: '☠',  label: 'Poison',    dotPct: 0.08, turns: 4, neg: true  },
    bleed:     { icon: '🩸', label: 'Bleed',     dotPct: 0.12, turns: 3, neg: true  },
    // Incapacitation — skip target's turn
    stun:      { icon: '⚡', label: 'Stun',      skip: true,    turns: 1, neg: true  },
    sleep:     { icon: '💤', label: 'Sleep',     skip: true,    turns: 3, neg: true, wakeOnHit: true },
    freeze:    { icon: '❄',  label: 'Freeze',    skip: true,    turns: 2, neg: true, vulnMult: 1.5   },
    paralysis: { icon: '⚡', label: 'Paralysis', skipChance: 0.5, turns: 3, neg: true },
    fear:      { icon: '😱', label: 'Fear',      skip: true,    turns: 2, neg: true  },
    petrify:   { icon: '🪨', label: 'Petrify',  skip: true,    turns: 3, neg: true, vulnMult: 2.0   },
    // Behavioral
    confusion: { icon: '🌀', label: 'Confusion', confuse: true, turns: 2, neg: true  },
    // Stat mods — buff or debuff ATK multiplier
    weaken:    { icon: '⬇',  label: 'Weaken',    atkMult: 0.5,  turns: 3, neg: true  },
    bravery:   { icon: '⚔',  label: 'Bravery',   atkMult: 1.5,  turns: 3, neg: false },
    haste:     { icon: '💨', label: 'Haste',     atkMult: 1.3,  turns: 2, neg: false },
    guard:     { icon: '🛡', label: 'Guard',     dmgTakenMult: 0.60, turns: 2, neg: false },
    regen:     { icon: '✚',  label: 'Regen',     regenPct: 0.08, turns: 3, neg: false },
    focus:     { icon: '🎯', label: 'Focus',     atkMult: 1.25, turns: 3, neg: false },
    thorns:    { icon: '🌹', label: 'Thorns',    thornsPct: 0.20, turns: 3, neg: false },
    vulnerable:{ icon: '🔻', label: 'Vulnerable',vulnMult: 1.35, turns: 3, neg: true  },
    marked:    { icon: '印', label: 'Marked',    vulnMult: 1.25, turns: 3, neg: true  },
    // Fatal
    doom:      { icon: '💀', label: 'Doom',      fatal: true,   turns: 3, neg: true  },
};

// ── Status helpers ────────────────────────────────────────────
// Render status badges into a sfx-row element
function renderBadges(fx, elId) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.innerHTML = Object.entries(fx)
        .filter(([, t]) => t > 0)
        .map(([id, t]) => {
            const s = STATUS[id];
            return '<span class="sfx sfx-' + id + '">' + s.icon + ' ' + s.label + ' ' + t + '</span>';
        }).join('');
}

// Apply a status to player ('p') or enemy ('e')
function applyFx(target, id) {
    if (!STATUS[id]) return;
    const fx   = target === 'p' ? B.p_fx : B.e_fx;
    const name = target === 'p' ? G.name : B.enemy.name;
    const st   = STATUS[id];
    if (hasStatusImmunity(target, id)) {
        print('✦ ' + name + ' is immune to ' + st.label + ' through class growth!', target === 'p' ? 'success' : 'b-system');
        updateBattlePanel();
        return;
    }
    // Don't overwrite if more turns remain
    fx[id] = Math.max(fx[id] || 0, st.turns);
    print(st.icon + ' ' + name + ' is afflicted with ' + st.label + '! (' + st.turns + ' turns)',
          target === 'p' ? 'danger' : 'b-system');
    updateBattlePanel();
}

// Apply a buff status to player ('p') or enemy ('e')
function applyBuff(target, id) {
    if (!STATUS[id]) return;
    const fx   = target === 'p' ? B.p_fx : B.e_fx;
    const name = target === 'p' ? G.name : B.enemy.name;
    const st   = STATUS[id];
    fx[id] = st.turns;
    print(st.icon + ' ' + name + ' gains ' + st.label + '! (' + st.turns + ' turns)', 'success');
    updateBattlePanel();
}

// Wake a sleeping/frozen target when hit — returns true if woken
function wakeOnHit(target) {
    const fx   = target === 'p' ? B.p_fx : B.e_fx;
    const name = target === 'p' ? G.name : B.enemy.name;
    let woke = false;
    if (fx.sleep)  { delete fx.sleep;  print(name + ' woke up!',          'info'); woke = true; }
    if (fx.freeze) { delete fx.freeze; print(name + ' thawed out!',       'info'); woke = true; }
    if (woke) updateBattlePanel();
    return woke;
}

// Vulnerability multiplier (freeze / petrify)
function vulnMult(target) {
    const fx = target === 'p' ? B.p_fx : B.e_fx;
    let m = 1;
    if (fx.petrify)   m *= STATUS.petrify.vulnMult;
    if (fx.freeze)    m *= STATUS.freeze.vulnMult;
    if (fx.vulnerable)m *= STATUS.vulnerable.vulnMult;
    if (fx.marked)    m *= STATUS.marked.vulnMult;
    return m;
}

// ATK multiplier for the acting party (bravery/haste buff, weaken debuff)
function atkMult(target) {
    const fx = target === 'p' ? B.p_fx : B.e_fx;
    let m = 1;
    if (fx.bravery) m *= STATUS.bravery.atkMult;
    if (fx.haste)   m *= STATUS.haste.atkMult;
    if (fx.focus)   m *= STATUS.focus.atkMult;
    if (fx.weaken)  m *= STATUS.weaken.atkMult;
    return m;
}

// Process one turn-start for target: tick DoT/doom, then check skip.
// Returns 'dead' | 'skip' | 'act'
function processTurnStart(target) {
    const fx    = target === 'p' ? B.p_fx : B.e_fx;
    const name  = target === 'p' ? G.name  : B.enemy.name;
    const maxHp = target === 'p' ? G.max_hp : B.enemy.hp;
    let died = false;

    // ── DoT (burn / poison / bleed) ──────────────────────────────
    for (const id of ['burn', 'poison', 'bleed']) {
        if (!fx[id]) continue;
        const dmg = Math.max(1, Math.floor(maxHp * STATUS[id].dotPct));
        if (target === 'p') { G.hp        = Math.max(0, G.hp        - dmg); if (G.hp        === 0) died = true; }
        else                { B.enemy_hp  = Math.max(0, B.enemy_hp  - dmg); if (B.enemy_hp  === 0) died = true; }
        print(STATUS[id].icon + ' ' + name + ' takes ' + dmg + ' ' + STATUS[id].label + ' damage!',
              target === 'p' ? 'danger' : 'success');
        if (--fx[id] <= 0) delete fx[id];
    }

    // ── Regeneration ───────────────────────────────────────────────
    if (fx.regen) {
        const heal = Math.max(1, Math.floor(maxHp * STATUS.regen.regenPct));
        if (target === 'p') G.hp = Math.min(G.max_hp, G.hp + heal);
        else B.enemy_hp = Math.min(B.enemy.hp, B.enemy_hp + heal);
        print(STATUS.regen.icon + ' ' + name + ' regenerates ' + heal + ' HP!', target === 'p' ? 'success' : 'danger');
    }

    // ── Doom countdown ────────────────────────────────────────────
    if (fx.doom) {
        if (fx.doom === 1) {
            print('💀 DOOM! ' + name + ' is obliterated!', 'danger');
            if (target === 'p') G.hp = 0; else B.enemy_hp = 0;
            died = true;
        } else {
            print('💀 Doom: ' + (fx.doom - 1) + ' turn(s) remaining...', 'danger');
        }
        if (--fx.doom <= 0) delete fx.doom;
    }

    updateStats();
    updateBattlePanel();
    if (died) return 'dead';

    // ── Skip statuses (hard skip) ─────────────────────────────────
    for (const id of ['stun', 'sleep', 'freeze', 'fear', 'petrify']) {
        if (!fx[id]) continue;
        print(STATUS[id].icon + ' ' + name + ' is ' + STATUS[id].label + 'ed — cannot act!', 'danger');
        if (--fx[id] <= 0) delete fx[id];
        updateBattlePanel();
        return 'skip';
    }

    // ── Paralysis (50% skip chance) ───────────────────────────────
    if (fx.paralysis) {
        if (--fx.paralysis <= 0) delete fx.paralysis;
        if (Math.random() < 0.5) {
            print('⚡ ' + name + ' is paralyzed — cannot move!', 'danger');
            updateBattlePanel();
            return 'skip';
        }
    }

    // ── Confusion (50% chance — self-attack) ─────────────────────
    if (fx.confusion) {
        if (--fx.confusion <= 0) delete fx.confusion;
        if (Math.random() < 0.5) {
            const selfDmg = Math.floor((target === 'p' ? G.atk : B.enemy.atk) * 0.6);
            if (target === 'p') { G.hp        = Math.max(0, G.hp        - selfDmg); if (G.hp        === 0) died = true; }
            else                { B.enemy_hp  = Math.max(0, B.enemy_hp  - selfDmg); if (B.enemy_hp  === 0) died = true; }
            print('🌀 ' + name + ' is confused and attacks itself for ' + selfDmg + '!', 'danger');
            updateStats();
            updateBattlePanel();
            return died ? 'dead' : 'skip';
        }
    }

    // ── Stat mods tick when their holder acts ────────────────────
    for (const id of ['bravery', 'haste', 'weaken', 'guard', 'regen', 'focus', 'thorns', 'vulnerable', 'marked']) {
        if (!fx[id]) continue;
        if (--fx[id] <= 0) { delete fx[id]; print(STATUS[id].icon + ' ' + STATUS[id].label + ' wore off.', 'narrator'); }
    }
    updateBattlePanel();
    return 'act';
}

// ═══════════════════════════════════════════════════════════════
