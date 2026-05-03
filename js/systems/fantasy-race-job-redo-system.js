// v0.7 FANTASY RACE + JOB REDO
// Replaces anime-origin races/jobs with fantasy base races, race evolution
// branches, and requirement-locked job evolution branches.
// ═══════════════════════════════════════════════════════════════
(function installFantasyRaceJobRedoV07(){
  const V07_VERSION = 'v0.7-fantasy-race-job-redo';
  const MAX_BASE_RACE_LEVEL = 15;
  const BRANCH_STAGE_CAPS = { Advanced:10, Specialist:10, Rare:5, Hidden:5 };
  const TIER_ORDER_V07 = { Base:0, Advanced:1, Specialist:2, Rare:3, Hidden:4 };

  function cleanName(name){ return String(name || '').replace(/\s+/g,' ').trim(); }
  function slug(name){ return cleanName(name).toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,''); }
  function includesAny(name, arr){ const n = cleanName(name).toLowerCase(); return arr.some(x => n.includes(x)); }
  function clone(o){ return JSON.parse(JSON.stringify(o)); }
  function cap(s){ s=String(s||''); return s ? s.charAt(0).toUpperCase()+s.slice(1) : s; }
  function singularRaceName(name){
    const n = cleanName(name).split('/')[0].trim();
    const map = {
      'Elves':'Elf','Dark Elves':'Dark Elf','Dwarves':'Dwarf','Halflings':'Halfling','Halfings':'Halfling','Gnomes':'Gnome','Fairies':'Fairy','Spirits':'Spirit','Angels':'Angel','Demons':'Demon','Devils':'Devil','Beastmen':'Beastman','Beastkin':'Beastkin','Goblins':'Goblin','Hobgoblins':'Hobgoblin','Orcs':'Orc','Ogres':'Ogre','Trolls':'Troll','Giants':'Giant','Cyclopes':'Cyclops','Slimes':'Slime','Vampires':'Vampire','Werewolves':'Werewolf','Dragons':'Dragon','Immortals':'Immortal','Celestials':'Celestial','Minotaurs':'Minotaur','Centaurs':'Centaur','Minks':'Mink'
    };
    if (map[n]) return map[n];
    if (n.endsWith('ies')) return n.slice(0,-3)+'y';
    if (n.endsWith('ves')) return n.slice(0,-3)+'f';
    if (n.endsWith('s') && !n.endsWith('ss')) return n.slice(0,-1);
    return n;
  }

  const STAT_PRESETS = {
    balanced: { base:{hp:85,mp:60,pa:9,pd:8,ag:8,ma:8,md:8,rs:8,sp:6}, per:{hp:4,mp:3,pa:1,pd:1,ag:1,ma:1,md:1,rs:1,sp:1} },
    martial:  { base:{hp:105,mp:40,pa:13,pd:10,ag:8,ma:5,md:7,rs:8,sp:5}, per:{hp:5,mp:2,pa:2,pd:2,ag:1,ma:0,md:1,rs:1,sp:0} },
    tank:     { base:{hp:120,mp:35,pa:11,pd:14,ag:4,ma:5,md:10,rs:10,sp:4}, per:{hp:6,mp:1,pa:2,pd:3,ag:0,ma:0,md:2,rs:2,sp:0} },
    agile:    { base:{hp:75,mp:55,pa:10,pd:6,ag:14,ma:8,md:7,rs:7,sp:8}, per:{hp:3,mp:2,pa:1,pd:1,ag:2,ma:1,md:1,rs:1,sp:1} },
    magic:    { base:{hp:65,mp:105,pa:5,pd:5,ag:8,ma:14,md:12,rs:11,sp:9}, per:{hp:3,mp:5,pa:0,pd:1,ag:1,ma:2,md:2,rs:2,sp:1} },
    divine:   { base:{hp:90,mp:95,pa:9,pd:9,ag:8,ma:12,md:13,rs:12,sp:9}, per:{hp:4,mp:4,pa:1,pd:1,ag:1,ma:2,md:2,rs:2,sp:1} },
    dark:     { base:{hp:90,mp:90,pa:10,pd:8,ag:8,ma:13,md:9,rs:12,sp:10}, per:{hp:4,mp:4,pa:1,pd:1,ag:1,ma:2,md:1,rs:2,sp:2} },
    beast:    { base:{hp:105,mp:40,pa:13,pd:9,ag:12,ma:5,md:6,rs:8,sp:7}, per:{hp:5,mp:1,pa:2,pd:1,ag:2,ma:0,md:1,rs:1,sp:1} },
    aquatic:  { base:{hp:90,mp:70,pa:9,pd:9,ag:10,ma:10,md:9,rs:10,sp:8}, per:{hp:4,mp:3,pa:1,pd:1,ag:1,ma:2,md:1,rs:2,sp:1} },
    undead:   { base:{hp:95,mp:85,pa:9,pd:10,ag:6,ma:12,md:11,rs:14,sp:8}, per:{hp:4,mp:4,pa:1,pd:2,ag:0,ma:2,md:2,rs:2,sp:1} },
    construct:{ base:{hp:115,mp:55,pa:11,pd:14,ag:5,ma:7,md:12,rs:13,sp:6}, per:{hp:5,mp:2,pa:2,pd:3,ag:0,ma:1,md:2,rs:2,sp:0} },
    dragon:   { base:{hp:125,mp:85,pa:14,pd:13,ag:8,ma:13,md:12,rs:13,sp:10}, per:{hp:6,mp:4,pa:2,pd:2,ag:1,ma:2,md:2,rs:2,sp:1} },
    tiny:     { base:{hp:65,mp:70,pa:7,pd:5,ag:14,ma:10,md:8,rs:8,sp:10}, per:{hp:3,mp:3,pa:1,pd:0,ag:2,ma:1,md:1,rs:1,sp:2} }
  };
  function racePreset(name, category){
    if (includesAny(name,['dragon','dragonewt','qilin','kirin'])) return 'dragon';
    if (includesAny(name,['angel','kami','celestial','garuda','yaksha'])) return 'divine';
    if (includesAny(name,['demon','devil','rakshasa','asura','dark elf'])) return 'dark';
    if (includesAny(name,['vampire','undead','skeleton','zombie','lich','wraith','ghost'])) return 'undead';
    if (includesAny(name,['golem','automata','living doll','homunculi','tsukumogami'])) return 'construct';
    if (includesAny(name,['giant','cyclop','minotaur','orc','ogre','oni','troll','bearfolk','dwarf'])) return 'tank';
    if (includesAny(name,['catfolk','dogfolk','foxfolk','rabbitfolk','lionfolk','tigerfolk','minks','beastmen','beastkin','werewolf'])) return 'beast';
    if (includesAny(name,['halfling','fairy','harpy','birdfolk','tengu','centaur'])) return 'agile';
    if (includesAny(name,['merfolk','mermaid','fishmen','kappa','naga','snakefolk','lamia'])) return 'aquatic';
    if (includesAny(name,['elf','gnome','spirit','yōkai','yokai','kitsune','tanuki','yuki-onna','nekomata','bakeneko','shikigami','ayakashi','immortal'])) return 'magic';
    if (includesAny(name,['slime','arachne','lizardfolk'])) return 'balanced';
    return 'balanced';
  }
  function statusForPreset(preset){
    return ({martial:'bleed', tank:'stun', agile:'haste', magic:'weaken', divine:'bravery', dark:'fear', beast:'bleed', aquatic:'freeze', undead:'doom', construct:'guard', dragon:'burn', tiny:'confusion', balanced:'vulnerable'})[preset] || 'vulnerable';
  }
  function statKeyForPreset(preset){
    return ({martial:'pa', tank:'pd', agile:'ag', magic:'ma', divine:'rs', dark:'sp', beast:'pa', aquatic:'md', undead:'rs', construct:'pd', dragon:'sp', tiny:'ag', balanced:'hp'})[preset] || 'hp';
  }
  function bonusFor(stat, amount){ const b={}; b[stat]=amount; return b; }
  function raceSkillTree(name, preset){
    const root = singularRaceName(name);
    const stat = statKeyForPreset(preset);
    const st = statusForPreset(preset);
    return [
      [1,  [{id:'race_'+slug(name)+'_blood_1', name: root+' Instinct', type:'p', bon: bonusFor(stat, 4), desc:'Passive: awakens the natural instincts of the '+name+' bloodline.'}]],
      [5,  [{id:'race_'+slug(name)+'_art_5', name: root+' Art: First Form', type:'a', mp:12, pow:42, st:st, sc:0.35, desc:'Active: a signature racial technique that pressures the enemy.'}]],
      [10, [{id:'race_'+slug(name)+'_body_10', name: root+' Bloodline Body', type:'p', bon:{hp:22, rs:3}, desc:'Passive: racial body refinement improves survival and resistance.'}]],
      [15, [{id:'race_'+slug(name)+'_limit_15', name: root+' Limit Release', type:'a', mp:28, pow:78, st:st, sc:0.45, buf:(preset==='divine'?'bravery':preset==='agile'?'haste':preset==='tank'?'guard':null), desc:'Active: unleashes the complete base-race form. This also marks the race as evolution-ready.'}]]
    ];
  }
  function evoSkillTree(name, tier, preset, stage){
    const stat = statKeyForPreset(preset), st=statusForPreset(preset);
    const lv1 = 1;
    const cap = BRANCH_STAGE_CAPS[tier] || 5;
    const mid = cap >= 10 ? 5 : 3;
    return [
      [lv1, [{id:'evo_'+slug(name)+'_core', name:name+' Core', type:'p', bon: bonusFor(stat, 5+stage*2), desc:'Passive: core evolution bonus for the '+tier+' racial path.'}]],
      [mid, [{id:'evo_'+slug(name)+'_tech', name:name+' Technique', type:'a', mp:18+stage*6, pow:62+stage*18, st:st, sc:0.35+stage*0.04, desc:'Active: unique evolved racial art.'}]],
      [cap, [{id:'evo_'+slug(name)+'_apex', name:name+' Apex Trait', type:'p', bon:{hp:18+stage*8, mp:10+stage*5, sp:2+stage}, desc:'Passive: capstone trait gained by mastering this evolution stage.'}]]
    ];
  }
  const RACE_INPUT = [
    ['Human','Common Fantasy','Balanced adaptability, heroic growth, and flexible class synergy.'],
    ['Elves','Common Fantasy','Long-lived forest people with high magic affinity and precision.'],
    ['Dark Elves','Common Fantasy','Drow-like elves with shadow magic, stealth, and curse affinity.'],
    ['Dwarves','Common Fantasy','Stocky craftsmen with armor mastery, durability, and forge talent.'],
    ['Halflings','Common Fantasy','Small, nimble folk with luck, stealth, and survival instincts.'],
    ['Gnomes','Common Fantasy','Inventive smallfolk with illusion, gadget, and arcane craft talent.'],
    ['Fairies','Common Fantasy','Tiny winged beings with flight, charm, and nature magic.'],
    ['Spirits','Common Fantasy','Nonphysical beings tied to elements, souls, and contracts.'],
    ['Angels','Common Fantasy','Holy beings with light, healing, barriers, and divine judgment.'],
    ['Demons / Devils','Common Fantasy','Infernal beings with contracts, curses, fire, and temptation.'],
    ['Beastmen / Beastkin','Beastfolk','Animal-human hybrids with physical instincts and tribal power.'],
    ['Catfolk / Nekomimi','Beastfolk','Agile feline people with stealth, claws, and night senses.'],
    ['Dogfolk / Inumimi','Beastfolk','Loyal canine people with tracking, teamwork, and endurance.'],
    ['Foxfolk / Kitsune','Beastfolk','Fox people and spirits with illusion, wisdom, and charm.'],
    ['Rabbitfolk','Beastfolk','Quick, evasive beastfolk with leaping speed and sharp senses.'],
    ['Bearfolk','Beastfolk','Powerful, durable beastfolk with warrior culture.'],
    ['Lionfolk','Beastfolk','Proud beastfolk with leadership, courage, and kingly pressure.'],
    ['Tigerfolk','Beastfolk','Predator beastfolk with explosive speed and ferocity.'],
    ['Birdfolk / Harpies','Beastfolk','Winged people with flight, talons, and wind affinity.'],
    ['Lizardfolk','Beastfolk','Scaled reptilian people with claws, regeneration, and terrain survival.'],
    ['Dragonfolk / Dragonewts','Beastfolk','Humanoids with dragon blood, horns, scales, and breath attacks.'],
    ['Snakefolk / Lamia','Beastfolk','Serpentine people with poison, charm magic, and constriction.'],
    ['Minotaurs','Beastfolk','Bull-headed humanoids with brute strength and charge attacks.'],
    ['Centaurs','Beastfolk','Horse-bodied people with speed, archery, and cavalry tactics.'],
    ['Merfolk / Mermaids','Beastfolk','Aquatic people with song magic, water magic, and sea kingdoms.'],
    ['Fishmen','Beastfolk','Strong aquatic humanoids with gills and sea combat.'],
    ['Minks','Beastfolk','Animal humanoids with electro-style shock abilities.'],
    ['Arachne','Beastfolk','Spider-human race with webbing, poison, and traps.'],
    ['Goblins','Monster Races','Small, numerous, cunning tribal monsterfolk.'],
    ['Hobgoblins','Monster Races','Stronger, smarter goblin evolution with military instincts.'],
    ['Orcs','Monster Races','Large warrior-like monsterfolk with brute force.'],
    ['Ogres','Monster Races','Bigger and stronger than orcs, often horned.'],
    ['Oni','Monster Races','Japanese ogre/demon race with horns, clubs, and immense strength.'],
    ['Trolls','Monster Races','Large regenerative brutes with savage durability.'],
    ['Giants','Monster Races','Huge humanoids with immense strength.'],
    ['Cyclopes','Monster Races','One-eyed giant race with focused brute power.'],
    ['Slimes','Monster Races','Gelatinous monsters with absorption and regeneration.'],
    ['Treants / Ents','Monster Races','Living tree people with nature magic and root control.'],
    ['Golems','Monster Races','Artificial bodies made of stone, clay, metal, or magic.'],
    ['Homunculi','Monster Races','Artificial humans and alchemical creations.'],
    ['Automata / Living Dolls','Monster Races','Magical machines, dolls, and artificial beings.'],
    ['Undead','Monster Races','Dead beings animated by magic.'],
    ['Skeletons','Monster Races','Undead bones, often warriors or mages.'],
    ['Zombies','Monster Races','Reanimated corpses powered by infection or necromancy.'],
    ['Liches','Monster Races','Immortal undead mages.'],
    ['Vampires','Monster Races','Blood-drinkers with immortality, charm, and regeneration.'],
    ['Werewolves','Monster Races','Human-wolf shapeshifters with moon and rage themes.'],
    ['Wraiths / Ghosts','Monster Races','Spirits of the dead with possession and curses.'],
    ['Yōkai','Japanese Mythology','Supernatural spirits or monsters.'],
    ['Kitsune','Japanese Mythology','Fox spirits with illusion, shapeshifting, and wisdom.'],
    ['Tanuki','Japanese Mythology','Raccoon-dog spirits with transformation and trickery.'],
    ['Tengu','Japanese Mythology','Bird-like mountain spirits with martial arts and wind.'],
    ['Kappa','Japanese Mythology','Turtle/frog-like water yōkai with river power.'],
    ['Yuki-Onna','Japanese Mythology','Snow woman spirit with ice magic and cold aura.'],
    ['Nekomata / Bakeneko','Japanese Mythology','Cat yōkai with shapeshifting and spirit power.'],
    ['Tsukumogami','Japanese Mythology','Objects that became spirits after many years.'],
    ['Shikigami','Japanese Mythology','Summoned spirit familiars.'],
    ['Kami','Japanese Mythology','Divine spirits of nature, places, or concepts.'],
    ['Ayakashi','Japanese Mythology','General supernatural monsters and spirits.'],
    ['Dragons','Eastern / Cultivation','Divine beasts, shapeshifters, and elemental rulers.'],
    ['Dragonkin','Eastern / Cultivation','Humanoids with dragon traits and bloodline power.'],
    ['Celestials','Eastern / Cultivation','Heavenly beings with divine cultivation and immortality.'],
    ['Immortals','Eastern / Cultivation','Humans or spirits who achieved eternal life.'],
    ['Asura','Eastern / Cultivation','War-like divine/demonic race.'],
    ['Rakshasa','Eastern / Cultivation','Demonic warrior spirits.'],
    ['Naga','Eastern / Cultivation','Serpent divine race with water, poison, and mystic power.'],
    ['Garuda','Eastern / Cultivation','Bird divine beings with sky and sun themes.'],
    ['Yaksha','Eastern / Cultivation','Guardian spirits and warrior spirits.'],
    ['Qilin / Kirin','Eastern / Cultivation','Auspicious holy beast race with purity and omen power.']
  ];

  const SPECIFIC_RACE_BRANCHES = {
    'Human': [['High Human','Hero Bloodline','Saint Hero','Divine Champion'], ['Rune Human','Origin Bloodline','World Sage','Administrator Candidate']],
    'Elves': [['High Elf','Ancient Elf','Spirit Elf','World Tree Apostle'], ['Moon Elf','Star Elf','Astral Elf','Elder Star Apostle']],
    'Goblins': [['Hobgoblin','Goblin Knight','Goblin Lord','Goblin King'], ['Goblin Shaman','Goblin Hexer','Goblin Sage','Goblin Prophet']],
    'Oni': [['Red Oni','War Oni','Oni Lord','Kishin Oni'], ['Blue Oni','Mystic Oni','Oni Sage','Calamity Oni']],
    'Slimes': [['Greater Slime','Predator Slime','Demon Slime','True Demon Slime'], ['Mystic Slime','Sage Slime','Star Slime','Origin Slime']],
    'Beastmen / Beastkin': [['Apex Beastkin','Beast Warrior','Beast King','Divine Beastkin'], ['Totem Beastkin','Beast Shaman','Primal Lord','Mythic Beastkin']],
    'Demons / Devils': [['Greater Demon','Archdemon','Demon Duke','Demon Lord'], ['Greater Devil','Infernal Baron','Hell Duke','Archdevil Sovereign']],
    'Angels': [['High Angel','Archangel','Seraph','Divine Executor'], ['Virtue Angel','Dominion','Throne','Heavenly Judge']],
    'Vampires': [['Noble Vampire','True Vampire','Vampire Lord','Progenitor'], ['Night Vampire','Blood Marquis','Crimson Duke','Blood Sovereign']],
    'Dragonkin': [['Lesser Dragon','Ancient Dragon','Dragon Lord','True Dragon'], ['Dragon Apostle','Elder Dragonewt','Wyrm Sovereign','Primordial Dragonkin']],
    'Dragonfolk / Dragonewts': [['Lesser Dragonewt','Ancient Dragonewt','Dragon Lord','True Dragonkin'], ['Dragon Apostle','Elder Dragonfolk','Wyrm Sovereign','Primordial Dragonewt']],
    'Dragons': [['Lesser Dragon','Ancient Dragon','Dragon Lord','True Dragon'], ['Sky Dragon','Elder Wyrm','Dragon Sovereign','Primordial Dragon']]
  };
  function genericRaceBranches(name){
    const root = singularRaceName(name);
    return [['High '+root, root+' Champion', root+' Lord', 'Mythic '+root], ['Awakened '+root, root+' Mystic', 'Ancient '+root, 'Hidden '+root+' Sovereign']];
  }

  const BASE_JOB_INPUT = [
    ['Warrior','Combat','Frontline fighter with weapon power and staying force.'],
    ['Swordsman','Combat','Fast blade specialist and classic hero-type attacker.'],
    ['Knight','Combat','Tank and protector using armor, shields, and noble codes.'],
    ['Paladin','Holy','Holy tank with healing, barriers, and anti-demon power.'],
    ['Fighter','Combat','Balanced combatant trained with many weapons.'],
    ['Spearman','Combat','Reach fighter using thrusts, sweeps, and anti-charge pressure.'],
    ['Lancer','Combat','Piercing spear fighter with burst movement.'],
    ['Monk','Martial Arts','Fist fighter with ki and spiritual discipline.'],
    ['Berserker','Combat','Rage fighter with high attack and pain tolerance.'],
    ['Mage','Magic','Elemental and arcane magic attacker.'],
    ['Wizard','Magic','Scholar mage using books, rituals, and formulas.'],
    ['Sorcerer','Magic','Innate magic user born with strong talent or bloodline power.'],
    ['Elementalist','Magic','Controls fire, water, wind, earth, lightning, and ice.'],
    ['Witch','Dark','Potion, curse, ritual, familiar, and nature magic.'],
    ['Summoner','Summoner / Tamer','Calls spirits, monsters, demons, familiars, or beasts.'],
    ['Barrier Mage','Magic','Creates shields, domains, wards, and seals.'],
    ['Healer','Support','Restores HP and cures conditions.'],
    ['Cleric','Holy','Healer and divine caster using blessings and purification.'],
    ['Priest','Holy','Church magic, exorcism, barriers, and holy support.'],
    ['Bard','Support','Music, buffs, debuffs, illusion, and morale.'],
    ['Dancer','Support','Movement buffs, evasion, charm, and performance magic.'],
    ['Strategist','Support','Tactical commands and party buffs.'],
    ['Cook','Support','Food-based buffs and survival support.'],
    ['Buffer','Support','Raises ally stats and battle tempo.'],
    ['Archer','Ranged','Bow user with ranged pressure and tracking.'],
    ['Hunter','Ranged','Monster killer with traps, bows, and survival skills.'],
    ['Ranger','Ranged','Wilderness fighter with archery, scouting, and nature skills.'],
    ['Sniper','Ranged','Long-range precision attacker.'],
    ['Gunslinger','Ranged','Dual pistols, trick shots, and fast draw.'],
    ['Magic Gunner','Ranged','Shoots magic bullets and elemental ammunition.'],
    ['Rogue','Rogue','Stealth, evasion, traps, and critical hits.'],
    ['Thief','Rogue','Lockpicking, stealing, scouting, and escape.'],
    ['Assassin','Rogue','Stealth killer with poison and burst damage.'],
    ['Ninja','Rogue','Stealth, tools, clones, and elemental arts.'],
    ['Scout','Rogue','Reconnaissance, tracking, and initiative control.'],
    ['Spy','Rogue','Disguise, infiltration, and information gathering.'],
    ['Trickster','Rogue','Illusions, traps, misdirection, and luck abuse.'],
    ['Blacksmith','Crafting','Crafts weapons, armor, and magical gear.'],
    ['Alchemist','Crafting','Potions, bombs, transmutation, and item creation.'],
    ['Enchanter','Crafting','Adds magical effects to items and buffs allies.'],
    ['Engineer','Crafting','Machines, traps, vehicles, and gadgets.'],
    ['Tailor','Crafting','Creates robes, cloaks, magical clothing, and set gear.'],
    ['Chef','Crafting','Food buffs, monster cooking, and survival meals.'],
    ['Appraiser','Crafting','Identifies item value, rarity, and hidden effects.'],
    ['Merchant','Crafting','Trading, negotiation, money skills, and rare item access.'],
    ['Saint','Holy','Holy miracle user, healer, and purifier.'],
    ['Exorcist','Holy','Banishes demons, ghosts, curses, and evil spirits.'],
    ['Templar','Holy','Holy warrior of a church or sacred order.'],
    ['Oracle','Holy','Receives divine visions and prophecy.'],
    ['Necromancer','Dark','Controls undead, bones, souls, and death magic.'],
    ['Warlock','Dark','Gains power through contracts with demons, spirits, or eldritch beings.'],
    ['Dark Knight','Dark','Sacrifices HP or morality for cursed power.'],
    ['Curse Mage','Dark','Uses hexes, bad luck, pain, and weakening spells.'],
    ['Blood Mage','Dark','Uses blood as fuel, weapons, curses, or healing.'],
    ['Reaper','Dark','Death-themed executioner class.'],
    ['Demon Lord','Monster','Ruler of demons or monsters.'],
    ['Vampire Lord','Monster','High-ranking vampire with charm and regeneration.'],
    ['Oni Warrior','Monster','Horned brute warrior using raw physical power.'],
    ['Goblin Champion','Monster','Strongest goblin fighter and tribal champion.'],
    ['Slime Predator','Monster','Absorbs enemies and gains traits.'],
    ['Dragon Apostle','Monster','Servant of a dragon with draconic techniques.'],
    ['Samurai','Japanese Fantasy','Katana warrior with discipline and iai slashes.'],
    ['Onmyoji','Japanese Fantasy','Yin-yang mage using talismans, shikigami, and exorcism.'],
    ['Miko','Japanese Fantasy','Shrine maiden with purification, barriers, and sacred rites.'],
    ['Cultivator','Cultivation / Murim','Trains body, spirit, and energy to ascend.'],
    ['Esper','Modern Fantasy','Psychic power user.'],
    ['Hero Student','Modern Fantasy','Superhero academy trainee.'],
    ['Pro Hero','Modern Fantasy','Licensed superhero job.'],
    ['Adventurer','Guild Jobs','Quest taker, dungeon delver, and monster hunter.'],
    ['Villager','Guild Jobs','Basic starter job with surprising growth potential.'],
    ['Farmer','Guild Jobs','Low-level production class that can become powerful through persistence.'],
    ['Mercenary','Guild Jobs','Paid fighter with flexible combat skills.'],
    ['Bounty Hunter','Guild Jobs','Tracks wanted criminals and monsters.']
  ];

  const JOB_PRESETS = {
    Combat:{base:{hp:95,mp:35,pa:12,pd:9,ag:8,ma:4,md:6,rs:7,sp:4}, per:{hp:5,mp:1,pa:2,pd:1,ag:1,ma:0,md:1,rs:1,sp:0}, stat:'pa', status:'bleed'},
    'Martial Arts':{base:{hp:90,mp:45,pa:11,pd:8,ag:12,ma:5,md:7,rs:8,sp:6}, per:{hp:4,mp:2,pa:2,pd:1,ag:2,ma:0,md:1,rs:1,sp:1}, stat:'ag', status:'stun'},
    Magic:{base:{hp:60,mp:105,pa:4,pd:5,ag:7,ma:14,md:10,rs:9,sp:8}, per:{hp:2,mp:5,pa:0,pd:1,ag:1,ma:2,md:2,rs:1,sp:1}, stat:'ma', status:'weaken'},
    Holy:{base:{hp:80,mp:85,pa:8,pd:9,ag:6,ma:11,md:12,rs:12,sp:8}, per:{hp:4,mp:4,pa:1,pd:1,ag:0,ma:2,md:2,rs:2,sp:1}, stat:'rs', status:'bravery'},
    Support:{base:{hp:75,mp:80,pa:5,pd:7,ag:8,ma:10,md:10,rs:9,sp:10}, per:{hp:3,mp:4,pa:0,pd:1,ag:1,ma:1,md:2,rs:1,sp:2}, stat:'sp', status:'guard'},
    Ranged:{base:{hp:70,mp:55,pa:11,pd:6,ag:12,ma:7,md:6,rs:7,sp:8}, per:{hp:3,mp:2,pa:2,pd:1,ag:2,ma:1,md:1,rs:1,sp:1}, stat:'ag', status:'marked'},
    Rogue:{base:{hp:70,mp:50,pa:10,pd:5,ag:14,ma:6,md:6,rs:7,sp:8}, per:{hp:3,mp:2,pa:1,pd:0,ag:2,ma:1,md:1,rs:1,sp:1}, stat:'ag', status:'poison'},
    Crafting:{base:{hp:80,mp:65,pa:7,pd:8,ag:6,ma:9,md:9,rs:8,sp:11}, per:{hp:4,mp:3,pa:1,pd:1,ag:0,ma:1,md:1,rs:1,sp:2}, stat:'sp', status:'vulnerable'},
    Dark:{base:{hp:80,mp:90,pa:9,pd:7,ag:7,ma:13,md:8,rs:11,sp:10}, per:{hp:4,mp:4,pa:1,pd:1,ag:1,ma:2,md:1,rs:2,sp:1}, stat:'ma', status:'fear'},
    Monster:{base:{hp:110,mp:55,pa:13,pd:10,ag:7,ma:8,md:8,rs:10,sp:7}, per:{hp:5,mp:2,pa:2,pd:2,ag:1,ma:1,md:1,rs:2,sp:1}, stat:'pa', status:'stun'},
    'Japanese Fantasy':{base:{hp:80,mp:70,pa:10,pd:7,ag:11,ma:9,md:9,rs:9,sp:8}, per:{hp:4,mp:3,pa:2,pd:1,ag:2,ma:1,md:1,rs:1,sp:1}, stat:'ag', status:'paralysis'},
    'Cultivation / Murim':{base:{hp:90,mp:75,pa:11,pd:9,ag:9,ma:10,md:10,rs:11,sp:8}, per:{hp:4,mp:3,pa:2,pd:1,ag:1,ma:1,md:1,rs:2,sp:1}, stat:'rs', status:'focus'},
    'Modern Fantasy':{base:{hp:75,mp:70,pa:8,pd:7,ag:10,ma:10,md:8,rs:8,sp:10}, per:{hp:3,mp:3,pa:1,pd:1,ag:1,ma:2,md:1,rs:1,sp:2}, stat:'sp', status:'confusion'},
    'Guild Jobs':{base:{hp:82,mp:52,pa:8,pd:8,ag:8,ma:7,md:7,rs:8,sp:9}, per:{hp:4,mp:2,pa:1,pd:1,ag:1,ma:1,md:1,rs:1,sp:1}, stat:'sp', status:'haste'},
    'Summoner / Tamer':{base:{hp:75,mp:90,pa:6,pd:7,ag:7,ma:11,md:10,rs:9,sp:11}, per:{hp:3,mp:4,pa:1,pd:1,ag:1,ma:2,md:1,rs:1,sp:2}, stat:'sp', status:'marked'}
  };
  function jobPreset(category){ return JOB_PRESETS[category] || JOB_PRESETS['Guild Jobs']; }
  function jobSkillTree(name, category, tier){
    const p = jobPreset(category); const cap = tier==='Base'?15:(BRANCH_STAGE_CAPS[tier]||5); const mid = cap>=10?5:3;
    const powBase = tier==='Base'?44:(tier==='Advanced'?64:tier==='Specialist'?82:tier==='Rare'?108:135);
    const mpBase = tier==='Base'?10:(tier==='Advanced'?18:tier==='Specialist'?26:tier==='Rare'?38:52);
    const bonusAmt = tier==='Base'?4:(tier==='Advanced'?6:tier==='Specialist'?9:tier==='Rare'?13:18);
    return [
      [1, [{id:'job_'+slug(name)+'_form', name:name+' Form', type:'p', bon: bonusFor(p.stat, bonusAmt), desc:'Passive: core stance for the '+name+' path.'}]],
      [mid, [{id:'job_'+slug(name)+'_art', name:name+' Art', type:'a', mp:mpBase, pow:powBase, st:p.status, sc:0.36, desc:'Active: signature technique of the '+name+' class.'}]],
      [cap, [{id:'job_'+slug(name)+'_mastery', name:name+' Mastery', type:'p', bon:{hp:10+bonusAmt, mp:8+bonusAmt, sp:Math.max(1,Math.floor(bonusAmt/3))}, desc:'Passive: class mastery bonus from fully training this path.'}]]
    ];
  }
  const SPECIFIC_JOB_BRANCHES = {
    Warrior: [['Knight','Royal Knight','Holy Knight','Divine Guardian'], ['Berserker','Warlord','Champion','World Breaker']],
    Swordsman: [['Sword Expert','Sword Master','Sword Saint','Heavenly Sword'], ['Samurai','Ronin','War God Blade','Heavenly Blade']],
    Mage: [['Elementalist','High Mage','Grand Mage','Archmage'], ['Dark Mage','Curse Mage','Abyss Mage','Forbidden Sage']],
    Healer: [['Cleric','High Priest','Saint','Divine Apostle'], ['Purifier','Blessing Caster','Miracle Worker','World Savior']],
    Thief: [['Rogue','Assassin','Shadow Assassin','Phantom Blade'], ['Phantom Thief','Trickster','Nightblade','Master of Shadows']],
    Rogue: [['Assassin','Shadow Assassin','Silent Blade','Phantom Blade'], ['Phantom Thief','Trickster','Nightblade','Master of Shadows']],
    Archer: [['Ranger','Magic Archer','Spirit Archer','Heavenly Marksman'], ['Sniper','Marksman','Demon Hunter','Godshot Saint']],
    Summoner: [['Spirit Summoner','Contract Master','Spirit King’s Contractor','Spirit King’s Apostle'], ['Demon Summoner','Devil Summoner','Eldritch Apostle','Abyss Caller']],
    Tamer: [['Beast Tamer','Monster Tamer','Beast Lord','Mythic Beast King'], ['Dragon Tamer','Familiar Master','Dungeon Monster Commander','Dragon King Tamer']],
    Blacksmith: [['Master Smith','Magic Smith','Runesmith','Divine Blacksmith'], ['Armorer','Weaponsmith','Artificer','Legendary Forge Lord']],
    Alchemist: [['Potion Master','Transmuter','Philosopher','Divine Alchemist'], ['Herbalist','Plague Doctor','Blood Alchemist','Homunculus Creator']],
    Ninja: [['Shadow Ninja','Demon Shinobi','Phantom Kage','Void Kage'], ['Shinobi','Kunoichi Arts','Silent Blade','Moonless Assassin']],
    Scout: [['Ninja','Shadow Ninja','Demon Shinobi','Phantom Kage'], ['Spy','Agent','Information Broker','Spy Master']],
    Samurai: [['Ronin','Sword Saint','War God Blade','Heavenly Sword'], ['Yokai Hunter','Demon Slayer','Shrine Guardian','Blade of Heaven']],
    Adventurer: [['Hero Candidate','Chosen Hero','Legendary Hero','World Savior'], ['Dungeon Explorer','Dungeon Raider','Raid Boss Slayer','Legend Seeker']],
    Cultivator: [['Qi Refiner','Foundation Builder','Core Formation Expert','Nascent Soul Master'], ['Martial Disciple','Martial Master','Grandmaster','Daoist Sage']],
    Esper: [['Telekinetic','Psychic Soldier','Spirit Detective','Reality Warper'], ['Telepath','Occult Detective','Curse Breaker','Administrator']],
    Knight: [['Guardian','Shield Bearer','Royal Guard','Divine Guardian'], ['Rune Knight','Dragon Knight','Templar','Angel Knight']],
    Paladin: [['Holy Knight','Crusader','Templar','Divine Apostle'], ['Purifier','Miracle Worker','Saint','Divine Executor']],
    Necromancer: [['Grim Knight','Lich','Lich King','Undead Overlord'], ['Soul Eater','Reaper','Abyss Mage','Death Sovereign']],
    Warlock: [['Demon Contractor','Devil Summoner','Eldritch Apostle','Abyssal Patron'], ['Hexer','Curse Mage','Forbidden Scholar','Forbidden Sage']]
  };
  function genericJobBranches(name){ return [['Advanced '+name, name+' Master', name+' Lord', 'Transcendent '+name], [name+' Adept', name+' Specialist', 'Mythic '+name, 'Hidden '+name+' Sovereign']]; }

  function makeFantasyData(){
    const newRaces = {}, newRacePaths = {}, newJobs = {};
    let raceId = 1;
    RACE_INPUT.forEach(([name, category, desc]) => {
      const preset = racePreset(name, category), p = STAT_PRESETS[preset];
      newRaces[raceId] = { name, anime: category, max_lv: MAX_BASE_RACE_LEVEL, desc, base: clone(p.base), per_lv: clone(p.per), skills: raceSkillTree(name, preset), v07Preset:preset };
      const branches = SPECIFIC_RACE_BRANCHES[name] || genericRaceBranches(name);
      newRacePaths[name] = branches.map((arr, bIdx) => ({ branch: bIdx===0?'Heritage Path':'Mythic Path', raceId, stages: arr.map((stageName, idx) => ({ name:stageName, tier:['Advanced','Specialist','Rare','Hidden'][idx], stage:idx, branch:bIdx })) }));
      raceId++;
    });
    let jobId = 1000;
    const jobNameToBaseId = {};
    BASE_JOB_INPUT.forEach(([name, category, desc]) => {
      const p = jobPreset(category);
      newJobs[jobId] = { name, anime: category, class_tier:'Base', max_lv:15, desc, base: clone(p.base), per_lv: clone(p.per), skills: jobSkillTree(name, category, 'Base'), v07:true, v07Category:category };
      jobNameToBaseId[name] = jobId;
      jobId++;
    });
    Object.entries(jobNameToBaseId).forEach(([baseName, baseId]) => {
      const base = newJobs[baseId];
      const branches = SPECIFIC_JOB_BRANCHES[baseName] || genericJobBranches(baseName);
      branches.forEach((arr, bIdx) => {
        let prevId = baseId;
        arr.forEach((stageName, idx) => {
          const tier = ['Advanced','Specialist','Rare','Hidden'][idx];
          const id = jobId++;
          const pp = jobPreset(base.anime);
          const stageBoost = idx+1;
          const bbase = clone(pp.base), per = clone(pp.per);
          Object.keys(bbase).forEach(k => bbase[k] += (k==='hp'?stageBoost*10:k==='mp'?stageBoost*6:stageBoost));
          Object.keys(per).forEach(k => per[k] += (idx>=2 && ['pa','ma','sp','rs'].includes(k)) ? 1 : 0);
          newJobs[id] = {
            name: stageName, anime: base.anime, class_tier:tier, max_lv:BRANCH_STAGE_CAPS[tier],
            desc: tier+' evolution of '+baseName+' on the '+(bIdx===0?'main':'alternate')+' path. Unlock it through class mastery requirements.',
            base:bbase, per_lv:per, skills:jobSkillTree(stageName, base.anime, tier), v07:true,
            req:{ jobBranch:true, baseJobId:baseId, previousJobId:prevId, stage:idx, branch:bIdx }
          };
          prevId = id;
        });
      });
    });
    let evoJobId = 10000;
    Object.entries(newRacePaths).forEach(([raceName, branches]) => {
      const raceObj = Object.values(newRaces).find(r=>r.name===raceName); const preset = raceObj.v07Preset;
      branches.forEach((branch, bIdx) => {
        let prev = null;
        branch.stages.forEach((stg, idx) => {
          const tier = stg.tier, id = evoJobId++;
          newJobs[id] = {
            name: stg.name, anime:'Race Evolution', class_tier:tier, max_lv:BRANCH_STAGE_CAPS[tier], hidden:tier==='Hidden',
            desc: tier+' racial evolution for '+raceName+' via the '+branch.branch+'.',
            base: clone(STAT_PRESETS[preset].base), per_lv: clone(STAT_PRESETS[preset].per), skills:evoSkillTree(stg.name, tier, preset, idx), v07:true,
            req:{ raceEvolution:true, raceName, raceId:branch.raceId, previousJobId:prev, stage:idx, branch:bIdx, keySkill:'race_'+slug(raceName)+'_limit_15' }
          };
          newRacePaths[raceName][bIdx].stages[idx].jobId = id;
          prev = id;
        });
      });
    });
    return { races:newRaces, jobs:newJobs, racePaths:newRacePaths };
  }

  const data = makeFantasyData();
  Object.keys(RACE_DATA).forEach(k => delete RACE_DATA[k]);
  Object.assign(RACE_DATA, data.races);
  Object.keys(JOB_DATA).forEach(k => delete JOB_DATA[k]);
  Object.assign(JOB_DATA, data.jobs);
  if (typeof RACE_EVOLUTION_PATHS !== 'undefined') { Object.keys(RACE_EVOLUTION_PATHS).forEach(k => delete RACE_EVOLUTION_PATHS[k]); Object.assign(RACE_EVOLUTION_PATHS, data.racePaths); }

  window.FANTASY_RACE_PATHS_V07 = data.racePaths;
  window.FANTASY_JOB_VERSION = V07_VERSION;

  function isV07BaseJob(j){ return !!j && (j.class_tier || 'Base') === 'Base' && !j.req; }
  isBaseJob = function(j){ return isV07BaseJob(j); };
  canStartWithJob = function(id,j){ return isV07BaseJob(j || JOB_DATA[id]); };
  function hasSkillId(id){ return Array.isArray(G.learned_skills) && G.learned_skills.some(s => s && s.id === id); }
  function maxedJob(jobId){ const j=JOB_DATA[jobId]; return !!j && getJobLevel(jobId) >= j.max_lv; }
  function v07UnlockState(id, j){
    j = j || JOB_DATA[id]; if (!j) return {ok:false, why:'Unknown job path.'};
    if (ownsJob(Number(id))) return {ok:false, why:'Already owned.'};
    if (isV07BaseJob(j)) return {ok:true, why:'Base job unlocked at character creation.'};
    const r = j.req || {};
    if (r.raceEvolution) {
      const race = RACE_DATA[r.raceId];
      if (G.race_id !== r.raceId) return {ok:false, why:'Requires base race: '+r.raceName+'.'};
      if (r.stage === 0) {
        if (!race || G.race_lv < race.max_lv) return {ok:false, why:'Max your base race first: '+r.raceName+' Lv.'+(race?race.max_lv:'?')+'.'};
        if (!hasSkillId(r.keySkill)) return {ok:false, why:'Requires the race capstone skill from maxing '+r.raceName+'.'};
        return {ok:true, why:'Race maxed and evolution key skill learned.'};
      }
      if (!maxedJob(r.previousJobId)) return {ok:false, why:'Requires previous evolution maxed: '+(JOB_DATA[r.previousJobId]?.name || 'previous stage')+'.'};
      if (j.class_tier === 'Hidden' && ((G.achievements?.secret_research||0) < 1) && ((G.achievements?.totalKills||0) < 25)) return {ok:false, why:'Hidden evolution requires Secret Research 1 or 25 total kills.'};
      return {ok:true, why:'Previous evolution mastered.'};
    }
    if (r.jobBranch) {
      const base = JOB_DATA[r.baseJobId];
      if (!maxedJob(r.previousJobId)) {
        const prev = JOB_DATA[r.previousJobId];
        return {ok:false, why:'Requires '+(prev?prev.name:'previous job')+' mastered at Lv.'+(prev?prev.max_lv:'?')+'.'};
      }
      if (j.class_tier === 'Specialist' && G.total_lv < 25) return {ok:false, why:'Requires Total Level 25+.'};
      if (j.class_tier === 'Rare' && G.total_lv < 40) return {ok:false, why:'Requires Total Level 40+.'};
      if (j.class_tier === 'Rare' && ((G.achievements?.totalKills||0) < 10)) return {ok:false, why:'Requires 10 total kills.'};
      if (j.class_tier === 'Hidden' && G.total_lv < 60) return {ok:false, why:'Requires Total Level 60+.'};
      if (j.class_tier === 'Hidden' && ((G.achievements?.secret_research||0) < 2) && ((G.achievements?.totalKills||0) < 35)) return {ok:false, why:'Hidden job requires Secret Research 2 or 35 total kills.'};
      return {ok:true, why:'Requirement met through '+(base?base.name:'base job')+' mastery path.'};
    }
    return {ok:false, why:'Unknown requirement. Continue leveling, fighting, and researching.'};
  }
  genericJobUnlockState = function(id,j){ return v07UnlockState(Number(id), j); };
  canAddJob = function(id){ id=Number(id); const j=JOB_DATA[id]; return !!j && !ownsJob(id) && v07UnlockState(id,j).ok; };
  jobRequirementList = function(j){
    if (!j) return ['Unknown requirement.'];
    if (isV07BaseJob(j)) return ['Base job: available during character creation.'];
    const r = j.req || {};
    if (r.raceEvolution) {
      if (r.stage === 0) return ['Choose '+r.raceName+' as your base race.', 'Raise the base race to Lv.'+MAX_BASE_RACE_LEVEL+'.', 'Learn the base race capstone skill.', 'Then add this racial evolution path.'];
      return ['Master the previous racial evolution: '+(JOB_DATA[r.previousJobId]?.name || 'previous stage')+'.', j.class_tier==='Hidden'?'Hidden stage also needs Secret Research 1 or 25 total kills.':'Then add this evolution stage.'];
    }
    if (r.jobBranch) {
      const prev = JOB_DATA[r.previousJobId]; const base = JOB_DATA[r.baseJobId];
      const list = ['Own and master '+(prev?prev.name:'the previous job')+' to Lv.'+(prev?prev.max_lv:'?')+'.'];
      if (j.class_tier === 'Specialist') list.push('Reach Total Level 25+.');
      if (j.class_tier === 'Rare') list.push('Reach Total Level 40+ and defeat 10 total enemies.');
      if (j.class_tier === 'Hidden') list.push('Reach Total Level 60+ and complete Secret Research 2 or defeat 35 total enemies.');
      list.push('Branch base: '+(base?base.name:'Unknown')+'.');
      return list;
    }
    return ['Continue leveling, fighting, researching, and mastering earlier paths.'];
  };
  classTierLabel = function(j){ const tier = j.class_tier || 'Base'; return tier.toUpperCase()+' CLASS · max '+j.max_lv+' levels'; };
  jobPrereqText = function(id,j){ return (jobRequirementList(j||JOB_DATA[id])[0] || 'Requirement unknown.'); };
  checkJobUnlocks = function(silent){
    ensureGameCollections(); const found=[];
    Object.entries(JOB_DATA).forEach(([id,j]) => { id=Number(id); if (G.class_unlocks.includes(id) || ownsJob(id)) return; const st=v07UnlockState(id,j); if (st.ok) { G.class_unlocks.push(id); found.push(j.name); } });
    if (!silent && found.length) found.slice(0,8).forEach(n => print('◆ Job path unlocked: '+n, 'b-system'));
    return found;
  };
  discoverAvailableHiddenJobs = function(silent){ return checkJobUnlocks(silent); };

  function renderHeader(text, color){ const hdr=document.createElement('div'); hdr.style.cssText='margin:12px 0 4px;padding:6px 10px;background:linear-gradient(90deg,#12082a,#090e1c);border-left:3px solid '+(color||'#e8c84a')+';font-family:"Cinzel Decorative",serif;font-size:11px;color:'+(color||'#e8c84a')+';letter-spacing:2px'; hdr.textContent=text; $ch.appendChild(hdr); }

  pick_race = function(){
    clearOutput(); showBattlePanel(false);
    print('YGGDRASIL — FANTASY RACE REDO', 'highlight');
    print('Anime-origin races have been replaced with fantasy base races. Each base race now has two evolution branches: Advanced → Specialist → Rare → Hidden.', 'narrator');
    print('— STEP 1: CHOOSE YOUR BASE RACE —', 'highlight');
    $ch.innerHTML='';
    const groups={}; Object.entries(RACE_DATA).forEach(([id,r]) => { if(!groups[r.anime]) groups[r.anime]=[]; groups[r.anime].push([id,r]); });
    Object.entries(groups).forEach(([cat,entries]) => { renderHeader('— '+cat.toUpperCase()+' RACES —','#e8c84a'); entries.forEach(([id,r]) => {
      const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.style.lineHeight='1.55';
      b.textContent = r.name+' · Base Race max '+r.max_lv+'\nHP:'+r.base.hp+' MP:'+r.base.mp+' PHY.ATK:'+r.base.pa+' PHY.DEF:'+r.base.pd+' AGI:'+r.base.ag+' MAG.ATK:'+r.base.ma+' RESIST:'+r.base.rs+' SPECIAL:'+r.base.sp+'\n'+r.desc+'\nEvolution: 2 unique branches after maxing this base race.';
      b.onclick=()=>{ G.race_id=Number(id); pick_job(); };
      $ch.appendChild(b);
    }); });
  };
  pick_job = function(){
    clearOutput(); showBattlePanel(false); const race=RACE_DATA[G.race_id];
    print('Race: '+(race?race.name:'Unknown')+' ['+(race?race.anime:'')+']','highlight');
    print('— STEP 2: CHOOSE YOUR STARTING BASE JOB —','highlight');
    print('Only Base jobs are available at the start. Every Advanced, Specialist, Rare, and Hidden job is unlocked by mastering earlier paths and meeting requirements.','narrator');
    $ch.innerHTML=''; const groups={}; Object.entries(JOB_DATA).forEach(([id,j]) => { if(!isV07BaseJob(j)) return; if(!groups[j.anime]) groups[j.anime]=[]; groups[j.anime].push([id,j]); });
    Object.entries(groups).forEach(([cat,entries]) => { renderHeader('— '+cat.toUpperCase()+' BASE JOBS —','#a78bfa'); entries.sort((a,b)=>a[1].name.localeCompare(b[1].name)).forEach(([id,j]) => {
      const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.style.lineHeight='1.55';
      b.textContent = j.name+' · '+classTierLabel(j)+'\nHP:'+j.base.hp+' MP:'+j.base.mp+' PHY.ATK:'+j.base.pa+' PHY.DEF:'+j.base.pd+' AGI:'+j.base.ag+' MAG.ATK:'+j.base.ma+' RESIST:'+j.base.rs+' SPECIAL:'+j.base.sp+'\n'+j.desc+'\nBranches: 2 evolution paths after maxing this base job.';
      b.onclick=()=>{ G.jobs=[{id:Number(id), lv:1}]; your_character(); };
      $ch.appendChild(b);
    }); });
    const req=document.createElement('button'); req.textContent='📘 View Job Requirement System'; req.onclick=job_requirement_screen; $ch.appendChild(req);
    const back=document.createElement('button'); back.textContent='← Back to Race Selection'; back.onclick=pick_race; $ch.appendChild(back);
  };

  addJobPath = function(id){
    id=Number(id); const j=JOB_DATA[id]; clearOutput(); showBattlePanel(false);
    if (!j) { print('Unknown job path.', 'danger'); return; }
    if (ownsJob(id)) { print('You already own '+j.name+'.','info'); showChoices([['Character Status', character_screen], ['Class Registry', class_registry_screen]]); return; }
    const st=v07UnlockState(id,j); if(!st.ok){ print('LOCKED JOB PATH — '+j.name,'danger'); print(st.why,'narrator'); jobRequirementList(j).forEach(req=>print('• '+req,'info')); showChoices([['📜 Class Registry', class_registry_screen], ['🧬 Race Evolution', race_evolution_screen], ['← Character Status', character_screen]]); return; }
    G.jobs.push({id, lv:0}); if(!G.class_unlocks.includes(id)) G.class_unlocks.push(id); applyStats(); updateStats();
    print('⊕ Job path added: '+j.name+' ['+j.class_tier+']','success'); print('It starts at Lv.0. Spend a Level Point on it to reach Lv.1 and unlock its first skill.','narrator');
    showChoices([['Spend Level Points', character_screen], ['Class Registry', class_registry_screen], ['Town Center', town_center]]);
  };

  race_evolution_screen = function(){
    ensureGameCollections(); checkJobUnlocks(true); clearOutput(); showBattlePanel(false); const race=RACE_DATA[G.race_id];
    print('RACE EVOLUTION PATHS v0.7','highlight');
    if(!race){ print('Choose a race first.','danger'); showChoices([['← Race Selection', pick_race]]); return; }
    print(race.name+' ['+race.anime+'] — Base Race Lv.'+G.race_lv+' / '+race.max_lv,'info');
    print('Rule: max your base race to unlock the first evolution stage. Each race has TWO unique branches. Each branch goes Advanced → Specialist → Rare → Hidden. Later stages require the previous stage maxed.','narrator');
    $ch.innerHTML=''; const branches=(window.FANTASY_RACE_PATHS_V07[race.name]||[]);
    branches.forEach((branch,idx)=>{ renderHeader('— '+branch.branch.toUpperCase()+' —', idx?'#00b4d8':'#e8c84a'); branch.stages.forEach(stg=>{
      const j=JOB_DATA[stg.jobId]; if(!j) return; const st=v07UnlockState(stg.jobId,j); const owned=ownsJob(stg.jobId); const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.style.lineHeight='1.5';
      b.textContent=(owned?'[OWNED] ':st.ok?'[READY] ':'[LOCKED] ')+j.name+' — '+classTierLabel(j)+'\nRequirement: '+st.why+'\n'+jobRequirementList(j).map(x=>'• '+x).join('\n');
      b.disabled=owned || !st.ok; b.onclick=()=>addJobPath(stg.jobId); $ch.appendChild(b);
    }); });
    const reg=document.createElement('button'); reg.textContent='📜 Full Class Registry'; reg.onclick=class_registry_screen; $ch.appendChild(reg); const back=document.createElement('button'); back.textContent='← Character Status'; back.onclick=character_screen; $ch.appendChild(back);
  };

  class_registry_screen = function(){
    ensureGameCollections(); checkJobUnlocks(true); clearOutput(); showBattlePanel(false);
    print('FULL CLASS REGISTRY v0.7 — REQUIREMENT LOCKED','highlight');
    print('Base jobs start unlocked. Advanced, Specialist, Rare, Hidden, and Race Evolution paths must be earned by mastering earlier paths.','narrator');
    print('Gold: '+G.gold+' · Total Level: '+G.total_lv+' / 100 · Kills: '+((G.achievements&&G.achievements.totalKills)||0)+' · Research: '+((G.achievements&&G.achievements.secret_research)||0),'info');
    $ch.innerHTML='';
    const guide=document.createElement('button'); guide.textContent='📘 Job Requirement Guide'; guide.onclick=job_requirement_screen; $ch.appendChild(guide);
    const evo=document.createElement('button'); evo.textContent='🧬 Race Evolution Paths'; evo.onclick=race_evolution_screen; $ch.appendChild(evo);
    const groups={}; Object.entries(JOB_DATA).forEach(([id,j])=>{ if(!groups[j.anime]) groups[j.anime]=[]; groups[j.anime].push([id,j]); });
    Object.entries(groups).forEach(([cat,list])=>{ renderHeader('— '+cat.toUpperCase()+' —', cat==='Race Evolution'?'#e8c84a':'#a78bfa'); list.sort((a,b)=>(TIER_ORDER_V07[a[1].class_tier||'Base']-TIER_ORDER_V07[b[1].class_tier||'Base']) || a[1].name.localeCompare(b[1].name)).forEach(([id,j])=>{
      const owned=ownsJob(Number(id)), st=v07UnlockState(Number(id),j); const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.style.lineHeight='1.42';
      b.textContent=(owned?'[OWNED] ':st.ok?'[UNLOCKED] ':'[LOCKED] ')+j.name+' — '+classTierLabel(j)+'\nRequirement: '+(owned?'Already owned.':st.why)+'\n'+j.desc;
      b.disabled=owned || !st.ok; if(st.ok && !owned) b.onclick=()=>addJobPath(id); $ch.appendChild(b);
    }); });
    const back=document.createElement('button'); back.textContent='← Character Status'; back.onclick=character_screen; $ch.appendChild(back); const town=document.createElement('button'); town.textContent='← Town Center'; town.onclick=town_center; $ch.appendChild(town);
  };

  job_requirement_screen = function(){
    clearOutput(); showBattlePanel(false);
    print('v0.7 JOB + RACE REQUIREMENT SYSTEM','highlight');
    print('This redo removes anime-origin races/jobs and replaces them with fantasy base races and fantasy job categories.','narrator');
    print('RACE RULES','highlight');
    print('• Pick one base race. Base races max at Lv.'+MAX_BASE_RACE_LEVEL+'.','info');
    print('• Every base race has TWO unique evolution branches.','info');
    print('• Each branch has Advanced → Specialist → Rare → Hidden stages.','info');
    print('• You can only begin race evolution after maxing your base race and learning its capstone skill.','info');
    print('JOB RULES','highlight');
    print('• Only Base jobs are unlocked during character creation.','info');
    print('• Advanced jobs require the base job maxed.','info');
    print('• Specialist jobs require previous stage maxed and Total Level 25+.','info');
    print('• Rare jobs require previous stage maxed, Total Level 40+, and 10 kills.','info');
    print('• Hidden jobs require previous stage maxed, Total Level 60+, plus Secret Research 2 or 35 kills.','info');
    print('EXAMPLES','highlight');
    print('• Human → High Human → Hero Bloodline → Saint Hero → Divine Champion','narrator');
    print('• Elf → High Elf → Ancient Elf → Spirit Elf → World Tree Apostle','narrator');
    print('• Warrior → Knight → Royal Knight → Holy Knight → Divine Guardian','narrator');
    print('• Mage → Elementalist → High Mage → Grand Mage → Archmage','narrator');
    showChoices([['🧬 Race Evolution', race_evolution_screen], ['📜 Class Registry', class_registry_screen], ['← Back', returnFromHelp]]);
  };

  const _character_screen_v07_prev = character_screen;
  character_screen = function(){
    ensureGameCollections(); checkJobUnlocks(true); _character_screen_v07_prev();
    const nav=document.createElement('div'); nav.className='cs-exp-row'; nav.innerHTML='<div class="cs-exp-label" style="color:#e8c84a">v0.7 FANTASY PROGRESSION</div><div style="font-size:11px;color:#8aaac8;line-height:1.5">Fantasy race evolution and requirement-locked job branches are active. Base race/job first; evolution comes through mastery.</div>';
    const evoBtn=document.createElement('button'); evoBtn.textContent='🧬 Race Evolution Branches'; evoBtn.onclick=race_evolution_screen; nav.appendChild(evoBtn);
    const reqBtn=document.createElement('button'); reqBtn.textContent='📘 Job / Race Requirements'; reqBtn.onclick=job_requirement_screen; nav.appendChild(reqBtn);
    const regBtn=document.createElement('button'); regBtn.textContent='📜 Full Class Registry'; regBtn.onclick=class_registry_screen; nav.appendChild(regBtn); $ch.appendChild(nav);
  };
  expansion_update_screen = function(){
    clearOutput(); showBattlePanel(false); print('UPDATE v0.7 — FANTASY RACE + JOB REDO','highlight');
    print('All anime-origin races were replaced with fantasy base races: humans, elves, dwarves, beastfolk, monster races, yōkai, undead, constructs, dragonkin, celestials, and cultivation-style beings.','success');
    print('Every base race now has two unique evolution branches: Advanced → Specialist → Rare → Hidden.','success');
    print('All anime jobs were replaced with fantasy RPG jobs across Combat, Magic, Support, Rogue, Ranged, Crafting, Holy, Dark, Monster, Japanese Fantasy, Cultivation, Modern Fantasy, and Guild categories.','success');
    print('Only Base jobs are unlocked at the start. Higher jobs are earned through mastery, total level, kills, and hidden research.','info');
    showChoices([['📘 Requirements', job_requirement_screen], ['🧬 Race Evolution', race_evolution_screen], ['📜 Class Registry', class_registry_screen], ['← Town Center', town_center]]);
  };
  yggdrasil_build_guide_screen = function(){
    clearOutput(); showBattlePanel(false); print('YGGDRASIL BUILD GUIDE v0.7','highlight');
    print('A strong build is layered, not one class pushed to 100. Use race levels, base jobs, evolved jobs, equipment sets, and hidden paths together.','narrator');
    print('• Base Race: max at Lv.'+MAX_BASE_RACE_LEVEL+' before race evolution.','info');
    print('• Base Job: max at Lv.15 to unlock Advanced branches.','info');
    print('• Advanced: max Lv.10. Specialist: max Lv.10. Rare: max Lv.5. Hidden: max Lv.5.','info');
    print('• Keep stacking paths until Total Level 100.','success');
    showChoices([['📘 Requirements', job_requirement_screen], ['🧬 Race Evolution', race_evolution_screen], ['← Back', returnFromHelp]]);
  };

  function injectV07Settings(){
    const panel=document.getElementById('settings-panel'); if(!panel || document.getElementById('v07-settings-section')) return;
    const saveSection=[...panel.querySelectorAll('.sp-section')].find(s=>/Save \/ Load/.test(s.textContent));
    const div=document.createElement('div'); div.className='sp-section'; div.id='v07-settings-section';
    div.innerHTML='<h3>Update v0.7</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Fantasy race/job redo is active. Anime races/jobs were replaced with base fantasy races and requirement-locked class branches.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); expansion_update_screen()">🆕 Update Notes</button><button class="sp-btn" onclick="closeSettingsPanel(); yggdrasil_build_guide_screen()">📘 Build Guide</button><button class="sp-btn" onclick="closeSettingsPanel(); job_requirement_screen()">📋 Requirements</button></div>';
    if(saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
  }
  injectV07Settings();

  const _saveGame_v07_prev = saveGame;
  saveGame = function(){ ensureGameCollections(); if(!G.save_meta) G.save_meta={}; G.save_meta.version=V07_VERSION; return _saveGame_v07_prev(); };
  const _loadGame_v07_prev = loadGame;
  loadGame = function(){ const r=_loadGame_v07_prev(); ensureGameCollections(); G.jobs=(G.jobs||[]).filter(j=>JOB_DATA[j.id]); if(G.race_id && !RACE_DATA[G.race_id]) G.race_id=0; checkJobUnlocks(true); applyStats(); updateStats(); return r; };

  // Fresh-session safety: ensure no old anime save fragments leak into the new data tables.
  ensureGameCollections(); checkJobUnlocks(true);
})();


// ═══════════════════════════════════════════════════════════════
