// ── Zone helper — builds a simple zone screen ─────────────────
function makeZone(title, anime, loreLines, enemies, selfFn) {
    clearOutput();
    print(title + '  [' + anime + ']', 'highlight');
    loreLines.forEach(l => print(l, 'narrator'));
    print('');
    print('Total Level: ' + G.total_lv + ' / 100', 'info');
    showChoices([
        ['Enter (random encounter)', () => zone_encounter(enemies, selfFn)],
        ['← World Map', show_map],
    ]);
}

// ── TIER 0 — Level 1 Starting Zones ──────────────────────────
function forest() { makeZone('Western Forest','Dark Souls',
    ['Twisted trees close in around you. The air smells of ash and old blood.',
     '"MONSTERS PAST THIS POINT — COME PREPARED"',
     'Enemies: Lost Souls • Forest Goblins • Hollow Warriors • Shadow Beasts • Death Knights'],
    FOREST_ENEMIES, forest); }

function naruto_village() { makeZone('Hidden Leaf Village Outskirts','Naruto',
    ['The village walls are close — but the roads beyond them are anything but safe.',
     'Rogue-nin and Akatsuki scouts roam the nearby forest. A genin patrol is missing.',
     'Enemies: Academy Genin • Rogue Ninja • Chunin Guard • Missing-nin • Akatsuki Scout'],
    NARUTO_ENEMIES, naruto_village); }

function starter_cove() { makeZone('Training Cove','Various',
    ['A port settlement at the edge of known space. Every anime world\'s worst arrives here first.',
     'Bandits, pirates, and mercenaries fight over what little there is.',
     'Enemies: Harbor Bandits • Pirate Scouts • Mercenaries • Smugglers • Crime Lords'],
    STARTER_COVE_ENEMIES, starter_cove); }

// ── TIER 1 — Level 10 Zones ───────────────────────────────────
function coast() { makeZone('Pirate Coast','One Piece',
    ['Salt wind and cannon smoke fill the air. Ships crowd the harbour.',
     'Marines patrol one side; pirate crews rule the other.',
     'Enemies: Marine Grunts • Fishman Pirates • Krieg Soldiers • CP9 Agents • Yonko Underlings'],
    COAST_ENEMIES, coast); }

function fairy_outskirts() { makeZone('Magnolia Outskirts','Fairy Tail',
    ['The fields beyond Magnolia are alive with mana and danger.',
     'Dark guild scouts and wild magical beasts make every road treacherous.',
     'Enemies: Vulcan Beasts • Dark Mage Initiates • Phantom Lord Soldiers • Sub-Dragons'],
    FAIRY_OUTSKIRTS_ENEMIES, fairy_outskirts); }

function rukongai() { makeZone('Rukongai District','Bleach',
    ['A Senkaimon tears open and you step into the world of souls.',
     'Hollows pour through the cracks in the Rukon district — and stronger things follow.',
     'Enemies: Hollow Fragments • Gillian Menos • Adjuchas • Fraccion • Espada Remnants'],
    RUKONGAI_ENEMIES, rukongai); }

// ── TIER 2 — Level 20 Zones ───────────────────────────────────
function demon_mountain() { makeZone('Demon Mountain','Demon Slayer',
    ['The mountain is still. Too still. Every villager near here has gone missing.',
     'As night falls the air turns cold — and Muzan\'s demons emerge.',
     'Enemies: Temple Demons • Swamp Demons • Mutant Demons • Upper Moon Demon • Kokushibo Remnant'],
    DEMON_ENEMIES, demon_mountain); }

function ua_zone() { makeZone('UA Training Zone','My Hero Academia',
    ['Villain attacks on the UA training grounds have become more coordinated.',
     'League of Villains scouts. Nomu experiments. Stain disciples — all converging here.',
     'Enemies: Villain Scouts • Nomu Experiments • Stain Disciples • League Vanguard'],
    UA_ENEMIES, ua_zone); }

function heavens_arena() { makeZone("Heaven's Arena","Hunter x Hunter",
    ['The world\'s greatest martial arts tower. 200 floors of increasingly lethal opponents.',
     'Above floor 150, Nen is mandatory. Below that — it just helps.',
     'Enemies: Floor Fighters • Nen Warriors • Gido Clones • Kastro Shadows • Hisoka Shadows'],
    HEAVENS_ARENA_ENEMIES, heavens_arena); }

// ── TIER 3 — Level 30 Zones ───────────────────────────────────
function saiyan_badlands() { makeZone('Saiyan Badlands','Dragon Ball Z',
    ['The planet craters under each clash. Power levels blur the air.',
     'Frieza Force scouts, android remnants, and worse patrol these wastelands.',
     'Enemies: Saibamen • Frieza Soldiers • Cell Jr. • Android 19 • Majin Buu Fragment'],
    SAIYAN_ENEMIES, saiyan_badlands); }

function cursed_zone() { makeZone('Cursed Territory','Jujutsu Kaisen',
    ['Negative energy saturates the air. The ground pulses like a heartbeat.',
     'Cursed spirits materialise from the shadows — drawn to your presence.',
     'Enemies: Grade 4 Curses • Finger Bearers • Mahito • Jogo Fragment • Special Grade'],
    CURSE_ENEMIES, cursed_zone); }

function amestris_ruins() { makeZone('Amestris Ruins','Fullmetal Alchemist: Brotherhood',
    ['The ruins of Xerxes stretch beneath crumbling state architecture.',
     'Mannequin soldiers. Homunculus shards. Alchemy warped by the Philosopher\'s Stone.',
     'Enemies: Mannequin Soldiers • Ishvalan Rebels • State Alchemists • Envy Fragments • Homunculus Shards'],
    AMESTRIS_ENEMIES, amestris_ruins); }

// ── TIER 4 — Level 40 Zones ───────────────────────────────────
function guild_wars() { makeZone('Fairy Tail Guild Wars','Fairy Tail',
    ['Magic fills the air like electricity before a storm. Dark guilds have declared war.',
     'The Spriggan 12 march — and Acnologia circles overhead.',
     'Enemies: Dark Mages • Etherion Soldiers • Spriggan Elites • Acnologia Fragment'],
    GUILD_ENEMIES, guild_wars); }

function soul_society() { makeZone('Soul Society — Seireitei','Bleach',
    ['The gates of Seireitei stand open — and they should not.',
     'Hollows flood the 13 Court Guard Squad barracks. Even Arrancar have been sighted.',
     'Enemies: Hollows • Gillian Menos • Arrancar • Grand Fisher • Vasto Lorde'],
    SOUL_ENEMIES, soul_society); }

function clover_kingdom() { makeZone('Clover Kingdom Dungeon','Black Clover',
    ['A dungeon from the land of the Spade Kingdom has appeared above the border.',
     'Devil Vessels and Dark Triad knights guard its depths alongside ancient mana beasts.',
     'Enemies: Midnight Sun Mages • Devil Vessels • Diamond Kingdom • Spade Knights • Megicula Fragment'],
    CLOVER_ENEMIES, clover_kingdom); }

// ── TIER 5 — Level 50 Zones ───────────────────────────────────
function mugen_train() { makeZone('Mugen Train','Demon Slayer',
    ['The Mugen Train runs endlessly into a cursed dream. Lower Moon One awaits inside.',
     'Dreams trap you. Demons devour your core. Escape requires absolute will.',
     'Enemies: Dream Soldiers • Lower Moon Demons • Nightmare Constructs • Enhanced Lower Moons • Muzan Clones'],
    MUGEN_ENEMIES, mugen_train); }

function marineford() { makeZone('Marineford War','One Piece',
    ['The greatest naval battle in history echoes here still. The bay runs red.',
     'Admirals, Vice Admirals, and Pacifistas engage anyone with the nerve to arrive.',
     'Enemies: Vice Admirals • Admiral Fragments • Pacifistas • CP0 Agents • Akainu Clone'],
    MARINEFORD_ENEMIES, marineford); }

function chimera_nest() { makeZone('Chimera Ant Palace','Hunter x Hunter',
    ['The NGL forest hides a palace of fused monsters who have surpassed human limits.',
     'Royal Guards and Officer Ants patrol every corridor. The King\'s aura fills the air.',
     'Enemies: Chimera Soldiers • Officer Ants • Ikalgo Fragment • Youpi Shard • Meruem Fragment'],
    CHIMERA_ENEMIES, chimera_nest); }

// ── TIER 6 — Level 60 Zones ───────────────────────────────────
function cell_arena() { makeZone('Cell Games Arena','Dragon Ball Z',
    ['Cell built this ring and invited Earth\'s strongest. Most never left.',
     'Clones of Perfect Cell and Android fragments patrol the arena endlessly.',
     'Enemies: Cell Jr. • Semi-Perfect Cell • Android Fragments • Perfect Cell Clones • Cell Perfect Form'],
    CELL_ENEMIES, cell_arena); }

function monster_association() { makeZone('Monster Association HQ','One Punch Man',
    ['The Monster Association\'s underground fortress. Every Dragon-level threat is here.',
     'Orochi. Garou. Psykos. The S-Class heroes couldn\'t hold them all — can you?',
     'Enemies: Dragon-Level Monsters • Elder Centipede Shards • Psykos Fragment • Garou • Orochi Clone'],
    MONSTER_ENEMIES, monster_association); }

function infinity_fortress() { makeZone('Infinity Fortress','Demon Slayer',
    ['Nakime\'s fortress shifts endlessly. The Upper Moons have gathered here.',
     'This is the final battlefield before Muzan himself. Every step forward is earned.',
     'Enemies: Upper Moon Fragments • Nakime Remnant • Hantengu Clone • Gyokko Shard • Doma Fragment'],
    INFINITY_ENEMIES, infinity_fortress); }

// ── Endgame — Level 80 ────────────────────────────────────────
function castle_gate() {
    clearOutput();
    print('The Castle Gate', 'highlight');
    print('Massive iron doors loom against a grey sky. A guard in heavy armour blocks the entrance.', 'narrator');
    print('');
    if (G.total_lv < 80) {
        print('Guard: "Turn back, ' + G.name + '. You\'re not ready for what\'s inside."', 'danger');
        print('Guard: "Only those of Total Level 80 or higher may enter."', 'danger');
        print('Your level: ' + G.total_lv + ' / 80', 'narrator');
        showChoices([['← World Map', show_map]]);
    } else {
        print('The guard looks you over slowly, then steps aside.', 'success');
        print('Guard: "The king has been waiting for someone like you. Go in."', 'success');
        showChoices([['Enter the Castle →', castle]]);
    }
}

function castle() {
    clearOutput();
    print('The Grand Hall', 'highlight');
    print('Torches flicker along stone walls. Banners from a dozen worlds hang from the ceiling.', 'narrator');
    print('One banner bears a Jolly Roger. Another shows the Leaf Village symbol.', 'narrator');
    print('A figure sits on the throne at the far end...', 'narrator');
    print('');
    print('(Castle area — coming soon)', 'info');
    showChoices([['← World Map', show_map]]);
}

// ── World Map ─────────────────────────────────────────────────
function show_map() {
    clearOutput();
    showBattlePanel(false);
    print('WORLD MAP', 'highlight');
    print('Portals scatter across this crossroads world — each leads to a different anime realm.', 'narrator');
    print('Total Level: ' + G.total_lv + ' / 100', 'info');
    print('');

    const tiers = [
        { label: '— STARTING ZONES  (Level 1) —', color: '#2ecc71', zones: [
            { name: 'Western Forest',          req: 1,  anime: 'Dark Souls',                   emoji: '🌲', fn: forest,
              desc: 'Twisted hollows and shadow beasts haunt these cursed woods.' },
            { name: 'Hidden Leaf Outskirts',   req: 1,  anime: 'Naruto',                        emoji: '🍃', fn: naruto_village,
              desc: 'Rogue-nin and Akatsuki scouts patrol the roads beyond the village gates.' },
            { name: 'Training Cove',           req: 1,  anime: 'Various',                       emoji: '⚓', fn: starter_cove,
              desc: 'A port settlement where every world\'s worst arrives first.' },
        ]},
        { label: '— TIER I  (Level 10) —', color: '#48cae4', zones: [
            { name: 'Pirate Coast',            req: 10, anime: 'One Piece',                     emoji: '☠', fn: coast,
              desc: 'Marine patrols clash with pirate crews along a treacherous harbour.' },
            { name: 'Magnolia Outskirts',      req: 10, anime: 'Fairy Tail',                    emoji: '🐉', fn: fairy_outskirts,
              desc: 'Dark guilds and wild magic beasts roam beyond the guild towns.' },
            { name: 'Rukongai District',       req: 10, anime: 'Bleach',                        emoji: '👻', fn: rukongai,
              desc: 'Hollows flood the outer districts. Gillian Menos have been sighted.' },
        ]},
        { label: '— TIER II  (Level 20) —', color: '#7f5af0', zones: [
            { name: 'Demon Mountain',          req: 20, anime: 'Demon Slayer',                  emoji: '🏔', fn: demon_mountain,
              desc: 'Night falls and demons emerge. The Upper Moons have claimed this peak.' },
            { name: 'UA Training Zone',        req: 20, anime: 'My Hero Academia',              emoji: '🏫', fn: ua_zone,
              desc: 'League of Villains and Nomu experiments have overrun the training grounds.' },
            { name: "Heaven's Arena",          req: 20, anime: 'Hunter x Hunter',               emoji: '🏯', fn: heavens_arena,
              desc: '200 floors of lethal Nen combat. Hisoka is somewhere above floor 150.' },
        ]},
        { label: '— TIER III  (Level 30) —', color: '#e8c84a', zones: [
            { name: 'Saiyan Badlands',         req: 30, anime: 'Dragon Ball Z',                 emoji: '💥', fn: saiyan_badlands,
              desc: 'Planet-cracking power levels. Frieza Force and androids patrol the wastes.' },
            { name: 'Cursed Territory',        req: 30, anime: 'Jujutsu Kaisen',                emoji: '🌀', fn: cursed_zone,
              desc: 'Negative energy saturates everything. Cursed spirits hunt the living.' },
            { name: 'Amestris Ruins',          req: 30, anime: 'Fullmetal Alchemist',           emoji: '⚗', fn: amestris_ruins,
              desc: 'Philosopher\'s Stone experiments gone wrong — Homunculus shards stalk the rubble.' },
        ]},
        { label: '— TIER IV  (Level 40) —', color: '#ff6b6b', zones: [
            { name: 'Fairy Tail Guild Wars',   req: 40, anime: 'Fairy Tail',                    emoji: '⚜', fn: guild_wars,
              desc: 'The Spriggan 12 march. Acnologia circles. Dark guilds wage total war.' },
            { name: 'Seireitei',               req: 40, anime: 'Bleach',                        emoji: '⛩', fn: soul_society,
              desc: 'The inner sanctum of Soul Society. Arrancar and Vasto Lorde breach the walls.' },
            { name: 'Clover Kingdom Dungeon',  req: 40, anime: 'Black Clover',                  emoji: '♠', fn: clover_kingdom,
              desc: 'Devil Vessels and Spade Kingdom knights guard this ancient dungeon.' },
        ]},
        { label: '— TIER V  (Level 50) —', color: '#fd9644', zones: [
            { name: 'Mugen Train',             req: 50, anime: 'Demon Slayer',                  emoji: '🚂', fn: mugen_train,
              desc: 'The cursed dream train. Lower Moon demons and Muzan clones devour souls.' },
            { name: 'Marineford War',          req: 50, anime: 'One Piece',                     emoji: '🌊', fn: marineford,
              desc: 'The great naval war never ended here. Admirals and Pacifistas hold the bay.' },
            { name: 'Chimera Ant Palace',      req: 50, anime: 'Hunter x Hunter',               emoji: '🐜', fn: chimera_nest,
              desc: 'Royal Guards and Officer Ants patrol this palace at the edge of the world.' },
        ]},
        { label: '— TIER VI  (Level 60) —', color: '#fc5c65', zones: [
            { name: 'Cell Games Arena',        req: 60, anime: 'Dragon Ball Z',                 emoji: '🌟', fn: cell_arena,
              desc: 'Cell\'s personal ring. Perfect Cell clones and Android fragments never stop.' },
            { name: 'Monster Association HQ',  req: 60, anime: 'One Punch Man',                 emoji: '🏙', fn: monster_association,
              desc: 'Dragon-level threats and the Hero Hunter guard this underground fortress.' },
            { name: 'Infinity Fortress',       req: 60, anime: 'Demon Slayer',                  emoji: '🌑', fn: infinity_fortress,
              desc: 'The shifting fortress of the Upper Moons. Every floor is a death sentence.' },
        ]},
        { label: '— ENDGAME  (Level 80) —', color: '#e74c3c', zones: [
            { name: 'Castle Gate',             req: 80, anime: 'Final Area',                    emoji: '🏰', fn: castle_gate,
              desc: 'The last gate. Whatever waits inside has been waiting a very long time.' },
        ]},
    ];

    $ch.innerHTML = '';

    tiers.forEach(tier => {
        const tierHdr = document.createElement('div');
        tierHdr.style.cssText = 'margin:12px 0 5px;padding:5px 10px;background:linear-gradient(90deg,#07090f,transparent);border-left:3px solid ' + tier.color + ';font-size:10px;font-weight:700;letter-spacing:2px;color:' + tier.color;
        tierHdr.textContent = tier.label;
        $ch.appendChild(tierHdr);

        tier.zones.forEach(z => {
            const unlocked = G.total_lv >= z.req;
            const mapRow = document.createElement('div');
            mapRow.style.cssText = 'display:flex;align-items:center;gap:12px;padding:10px 14px;background:#07090f;border:1px solid ' + (unlocked ? '#1c3354' : '#0e1420') + ';margin-bottom:4px;opacity:' + (unlocked ? '1' : '0.4') + ';transition:border-color 0.14s';

            const emojiSpan = document.createElement('span');
            emojiSpan.style.cssText = 'font-size:26px;min-width:34px;text-align:center';
            emojiSpan.textContent = z.emoji;

            const infoDiv = document.createElement('div');
            infoDiv.style.cssText = 'flex:1';
            infoDiv.innerHTML =
                '<div style="color:' + (unlocked ? '#e8c84a' : '#4a6a88') + ';font-weight:700;font-size:13px">' + z.name + '</div>' +
                '<div style="color:#3a5a78;font-size:9px;letter-spacing:2px;margin:1px 0">[' + z.anime.toUpperCase() + ']</div>' +
                '<div style="color:#8aaac8;font-size:11px">' + z.desc + '</div>';

            const reqSpan = document.createElement('span');
            reqSpan.style.cssText = 'font-size:10px;font-weight:700;min-width:72px;text-align:right;' + (unlocked ? 'color:#2ecc71' : 'color:#e74c3c');
            reqSpan.textContent = unlocked ? '✓ OPEN' : 'LV ' + z.req + ' REQ';

            mapRow.appendChild(emojiSpan);
            mapRow.appendChild(infoDiv);
            mapRow.appendChild(reqSpan);

            if (unlocked) {
                mapRow.style.cursor = 'pointer';
                mapRow.onmouseenter = () => { mapRow.style.borderColor = '#e8c84a'; };
                mapRow.onmouseleave = () => { mapRow.style.borderColor = '#1c3354'; };
                mapRow.onclick = z.fn;
            }

            $ch.appendChild(mapRow);
        });
    });

    const back = document.createElement('button');
    back.textContent = '← Return to Town Center';
    back.onclick = town_center;
    back.style.marginTop = '10px';
    $ch.appendChild(back);
}




// ═══════════════════════════════════════════════════════════════
