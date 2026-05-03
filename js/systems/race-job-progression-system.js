// v0.6 — RACE EVOLUTION + LOCKED JOB REQUIREMENT SYSTEM
// Big progression update requested by Malcolm.
// - Only Base jobs are selectable at character creation.
// - Advanced/Specialist/Rare/Hidden jobs require unlock conditions.
// - Every base race has a unique Specialist → Rare evolution path.
// - Race evolutions unlock only after the base race is maxed and the required skill is learned.
// ═══════════════════════════════════════════════════════════════
const PROGRESSION_VERSION = 'v0.6-race-job-evolution';

const REQUIREMENT_GUIDE = {
  soul: [
    'Worldline Stabilization — gain EXP and clear a normal World Map zone before spending major level milestones.',
    'Cross-World Adaptation — defeat enemies from 3 anime categories before every 10th total level.',
    'Isekai Body Sync — heal to full HP/MP at the Inn after earning enough EXP.',
    'Limit Calibration — levels 25, 50, 75, and 100 require Challenge Mode clears.'
  ],
  race: [
    'Bloodline Proof — use at least one racial skill before each race level-up.',
    'Heritage Synchronization — equip at least one item from the same anime as your race.',
    'True Form Spark — every 5 race levels, defeat an enemy above your current level.',
    'Ancestral Boss Mark — every 10 race levels, defeat a raid/challenge enemy connected to your race anime.'
  ],
  jobs: {
    Base: [
      'Starter Art Practice — use the job\'s Level 1 skill 5 times.',
      'Base Identity Test — win 3 battles with that job equipped.',
      'Fundamental Mastery — spend at least 3 stat points in the job\'s main stat.',
      'Lv.15 Base Capstone — defeat a Challenge Mode enemy.'
    ],
    Advanced: [
      'Path Specialization — own at least one related Base job.',
      'Advanced Skill Chain — use a Base job skill and Advanced job skill in the same battle.',
      'Elite Combat Test — defeat an enemy while under a negative status.',
      'Lv.10 Advanced Capstone — clear a raid or defeat an enemy with 500+ HP.'
    ],
    Specialist: [
      'Narrow Build Rule — win 3 battles using the same combat style.',
      'Specialist Combo — use one job skill, one spell, and one gear skill in the same battle.',
      'Role Lock Trial — prove the role: support keeps recruits alive, attack finishes enemies, defense survives 5 turns.',
      'Specialist Gear Proof — activate any equipment skill.'
    ],
    Rare: [
      'Rare Class Deed — complete 1 raid.',
      'Rare Set Sync — activate a full anime set bonus.',
      'Rare Combat Record — defeat 25 total enemies.',
      'Rare Capstone Trial — defeat a raid boss with all active recruits alive.'
    ],
    Hidden: [
      'Secret Research Gate — spend gold on Hidden Class Research.',
      'Low HP Awakening — win with HP below 20%.',
      'Forbidden Setup — equip cursed/dark/rare gear and win a battle.',
      'Hidden Capstone — defeat a raid boss using a Hidden job skill, equipment skill, or set skill.'
    ]
  }
};

const SPECIFIC_JOB_REQUIREMENTS = {
  'Chakra Duelist':'Dodge/survive a hit, then land the finishing blow.',
  'Seal Artificer':'Inflict stun, marked, vulnerable, or weaken.',
  'Medical Striker':'Heal yourself or a recruit before winning.',
  'Summon Handler':'Win with at least one active recruit alive.',
  'ANBU Operative':'Defeat an enemy before turn 4.',
  'Zanpakuto Duelist':'Win using both a physical skill and MP skill.',
  'Kido Scholar':'Spend 100 MP across battles.',
  'Hoho Scout':'Win while haste is active.',
  'Soul Medic':'Restore HP or cleanse a status.',
  'Reishi Archer':'Defeat an enemy while focus is active.',
  'Haki Brawler':'Win without purchased spells.',
  'Sea Chef':'Use an item or heal before winning.',
  'Navigator Tactician':'Clear 3 different map zones.',
  'Shipwright Defender':'Survive 5 turns while guard is active.',
  'Sniper Trickshot':'Defeat a marked or vulnerable enemy.',
  'ODM Vanguard':'Win a battle in under 5 turns.',
  'Thunder Spear Lancer':'Defeat a high-HP enemy or boss.',
  'Field Commander':'Win with all active recruits alive.',
  'Wall Artillery Crew':'Use an AoE skill.',
  'Scout Medic':'Heal a recruit after they fall below 50% HP.',
  'Barrier Architect':'Block/survive damage while guard is active.',
  'Cursed Tool Duelist':'Equip a weapon and land a finishing blow.',
  'Shikigami Handler':'Win with 2 or more recruits active.',
  'Reverse Technique Medic':'Recover HP during battle.',
  'Simple Domain Guard':'Survive a raid boss ultimate-style move.',
  'Ki Striker':'Win using only physical/energy attacks.',
  'Energy Blaster':'Defeat an enemy with a high MP skill.',
  'Martial Monk':'Win without equipment skills.',
  'Capsule Engineer':'Buy or equip new gear before leveling.',
  'Fusion Dancer':'Win with a recruit from a different anime.',
  'Elemental Caster':'Inflict burn, freeze, paralysis, poison, or weaken.',
  'Requip Knight':'Change equipment, then win a battle.',
  'Script Mage':'Inflict marked or vulnerable.',
  'Celestial Contractor':'Win with a recruit alive.',
  'Guild Tactician':'Win with 3 active recruits.',
  'Aura Striker':'Win with focus active.',
  'Contract Specialist':'Perform Hidden Class Research.',
  'Beast Keeper':'Win with a recruit landing the finishing blow.',
  'Assassin Footwork':'Defeat an enemy quickly.',
  'Hunter Examiner':'Clear 3 Challenge Mode battles.'
};

const RACE_EVOLUTION_PATHS = {
  'Uchiha Clan': [{name:'Sharingan User', tier:'Specialist', skill:'Sharingan Skill', max:10, focus:'genjutsu prediction and copied arts'}, {name:'Mangekyō Sharingan User', tier:'Rare', skill:'Mangekyō Sharingan Skill', max:5, focus:'black flames, Susanoo pressure, and eye technique sacrifice'}],
  'Hyuga Clan': [{name:'Byakugan Adept', tier:'Specialist', skill:'Byakugan Skill', max:10, focus:'chakra-point sight and defensive palm rotation'}, {name:'Gentle Fist Master', tier:'Rare', skill:'Eight Trigrams Skill', max:5, focus:'perfect tenketsu shutdown and palm-field control'}],
  'Uzumaki Clan': [{name:'Sealing Chain User', tier:'Specialist', skill:'Adamantine Chain Skill', max:10, focus:'binding chains and survival sealing'}, {name:'Grand Seal Keeper', tier:'Rare', skill:'Grand Uzumaki Seal Skill', max:5, focus:'forbidden seals and huge chakra vitality'}],
  'Otsutsuki Clan': [{name:'Celestial Vessel', tier:'Specialist', skill:'Celestial Chakra Skill', max:10, focus:'divine chakra circulation and alien dojutsu'}, {name:'Rinne-Sharingan Heir', tier:'Rare', skill:'Rinne-Sharingan Skill', max:5, focus:'godlike eye arts and dimensional pressure'}],
  'Senju Clan': [{name:'Wood Release Sprout', tier:'Specialist', skill:'Wood Release Skill', max:10, focus:'battlefield roots, endurance, and terrain control'}, {name:'Sage of the Forest', tier:'Rare', skill:'Sage Forest Skill', max:5, focus:'Asura vitality and natural-energy dominance'}],
  'Shinigami': [{name:'Shikai Bearer', tier:'Specialist', skill:'Shikai Skill', max:10, focus:'zanpakuto release and flash-step pressure'}, {name:'Bankai Master', tier:'Rare', skill:'Bankai Skill', max:5, focus:'final release and overwhelming reiatsu'}],
  'Hollow': [{name:'Menos Hunter', tier:'Specialist', skill:'Hollow Mask Skill', max:10, focus:'hierro durability and predatory cero'}, {name:'Vasto Lorde', tier:'Rare', skill:'Vasto Lorde Skill', max:5, focus:'apex hollow pressure and regeneration'}],
  'Quincy': [{name:'Sternritter Candidate', tier:'Specialist', skill:'Reishi Bow Skill', max:10, focus:'reishi bows and spiritual sniping'}, {name:'Schrift Bearer', tier:'Rare', skill:'Schrift Skill', max:5, focus:'lettered powers and absolute reishi control'}],
  'Fullbringer': [{name:'Object Soul User', tier:'Specialist', skill:'Fullbring Skill', max:10, focus:'object soul manipulation'}, {name:'Fullbring Sovereign', tier:'Rare', skill:'Sovereign Fullbring Skill', max:5, focus:'personal object domain control'}],
  'Arrancar': [{name:'Resurrección User', tier:'Specialist', skill:'Resurrección Skill', max:10, focus:'sealed hollow release'}, {name:'Segunda Etapa', tier:'Rare', skill:'Segunda Etapa Skill', max:5, focus:'second release and despair pressure'}],
  'Visored': [{name:'Masked Shinigami', tier:'Specialist', skill:'Hollow Mask Control Skill', max:10, focus:'hollow mask bursts over shinigami fundamentals'}, {name:'Inner Hollow Master', tier:'Rare', skill:'Inner Hollow Mastery Skill', max:5, focus:'stable hybrid Bankai-mask output'}],
  'Giants': [{name:'Elbaf Warrior', tier:'Specialist', skill:'Giant Warrior Skill', max:10, focus:'colossal physique and shield-breaking blows'}, {name:'War Giant Champion', tier:'Rare', skill:'War Giant Skill', max:5, focus:'island-shaking strength'}],
  'Skypieans': [{name:'Mantra Adept', tier:'Specialist', skill:'Mantra Skill', max:10, focus:'prediction, sky movement, and aerial spacing'}, {name:'Sky Lord', tier:'Rare', skill:'Sky Lord Skill', max:5, focus:'cloud-field control and divine sky pressure'}],
  'Ackerman Clan': [{name:'Awakened Ackerman', tier:'Specialist', skill:'Ackerman Awakening Skill', max:10, focus:'battle memory and instant physical optimization'}, {name:'Humanity\'s Blade', tier:'Rare', skill:'Humanity Blade Skill', max:5, focus:'anti-titan execution chains'}],
  'The Founding Titan': [{name:'Coordinate Vessel', tier:'Specialist', skill:'Coordinate Skill', max:10, focus:'command pressure and titan resonance'}, {name:'Founder Sovereign', tier:'Rare', skill:'Founding Titan Skill', max:5, focus:'royal coordinate dominance'}],
  'The Armored Titan': [{name:'Hardened Shifter', tier:'Specialist', skill:'Hardening Skill', max:10, focus:'armor plating and charge defense'}, {name:'Fortress Titan', tier:'Rare', skill:'Fortress Titan Skill', max:5, focus:'near-unstoppable hardening'}],
  'The Attack Titan': [{name:'Forward Shifter', tier:'Specialist', skill:'Attack Titan Skill', max:10, focus:'relentless offense and future-will pressure'}, {name:'Freedom Titan', tier:'Rare', skill:'Freedom Titan Skill', max:5, focus:'berserker momentum'}],
  'The Beast Titan': [{name:'Primal Shifter', tier:'Specialist', skill:'Beast Titan Skill', max:10, focus:'throwing power and animalized instinct'}, {name:'Apex Beast Titan', tier:'Rare', skill:'Apex Beast Skill', max:5, focus:'royal beast tactics'}],
  'The Cart Titan': [{name:'Endurance Shifter', tier:'Specialist', skill:'Cart Titan Skill', max:10, focus:'mobility, stamina, and logistics'}, {name:'War Cart Titan', tier:'Rare', skill:'War Cart Skill', max:5, focus:'siege endurance'}],
  'The Colossus Titan': [{name:'Steam Titan', tier:'Specialist', skill:'Colossus Steam Skill', max:10, focus:'heat, steam, and pressure'}, {name:'Colossal Cataclysm', tier:'Rare', skill:'Cataclysm Titan Skill', max:5, focus:'explosive transformation force'}],
  'The Female Titan': [{name:'Adaptive Shifter', tier:'Specialist', skill:'Female Titan Skill', max:10, focus:'mixed martial shifter arts'}, {name:'Crystallized Titan', tier:'Rare', skill:'Crystallization Skill', max:5, focus:'crystal defense and mimic adaptation'}],
  'The Jaw Titan': [{name:'Rending Shifter', tier:'Specialist', skill:'Jaw Titan Skill', max:10, focus:'speed, bite, and claw pressure'}, {name:'Porco Apex Jaw', tier:'Rare', skill:'Apex Jaw Skill', max:5, focus:'armor-rending burst speed'}],
  'The War Hammer Titan': [{name:'War Hammer Forger', tier:'Specialist', skill:'War Hammer Skill', max:10, focus:'construct weapons and hardened terrain'}, {name:'Crystal Arsenal Titan', tier:'Rare', skill:'Crystal Arsenal Skill', max:5, focus:'battlefield weapon creation'}],
  'Zenin Clan': [{name:'Cursed Tool Heir', tier:'Specialist', skill:'Cursed Tool Skill', max:10, focus:'weaponized cursed energy and clan technique politics'}, {name:'Heavenly Restriction Master', tier:'Rare', skill:'Heavenly Restriction Skill', max:5, focus:'body-over-curse assassination'}],
  'Gojo Clan': [{name:'Limitless Inheritor', tier:'Specialist', skill:'Limitless Skill', max:10, focus:'space control and defensive infinity'}, {name:'Six Eyes Supreme', tier:'Rare', skill:'Six Eyes Skill', max:5, focus:'near-perfect cursed energy efficiency'}],
  'Kamo Clan': [{name:'Blood Manipulation Adept', tier:'Specialist', skill:'Blood Manipulation Skill', max:10, focus:'blood shaping and piercing pressure'}, {name:'Crimson Convergence Master', tier:'Rare', skill:'Crimson Convergence Skill', max:5, focus:'high-pressure blood artillery'}],
  'Celestial Spirit': [{name:'Zodiac Contract Spirit', tier:'Specialist', skill:'Celestial Contract Skill', max:10, focus:'star contracts and spirit gates'}, {name:'Celestial King Envoy', tier:'Rare', skill:'Celestial King Skill', max:5, focus:'king-level celestial authority'}],
  'Demon Slayer': [{name:'Demon Slayer Mage', tier:'Specialist', skill:'Demon Slayer Magic Skill', max:10, focus:'anti-demon elemental devouring'}, {name:'Demon King Bane', tier:'Rare', skill:'Demon Bane Skill', max:5, focus:'forbidden anti-demon magic'}],
  'Dragon Slayer': [{name:'Dragon Force User', tier:'Specialist', skill:'Dragon Force Skill', max:10, focus:'dragon element and body transformation'}, {name:'Dragon King', tier:'Rare', skill:'Dragon King Skill', max:5, focus:'apex dragon slayer magic'}],
  'Etherious': [{name:'Demon Script Vessel', tier:'Specialist', skill:'Etherious Curse Skill', max:10, focus:'curse power and demonic body'}, {name:'Book of Zeref Avatar', tier:'Rare', skill:'Zeref Avatar Skill', max:5, focus:'forbidden book-origin curse'}],
  'God Slayer': [{name:'God Flame Adept', tier:'Specialist', skill:'God Slayer Magic Skill', max:10, focus:'black divine element consumption'}, {name:'Divine Slayer', tier:'Rare', skill:'Divine Slayer Skill', max:5, focus:'anti-god elemental supremacy'}],
  'Chimera Ant': [{name:'Squadron Leader', tier:'Specialist', skill:'Chimera Adaptation Skill', max:10, focus:'rapid adaptation and predatory instinct'}, {name:'Royal Guard Candidate', tier:'Rare', skill:'Royal Guard Skill', max:5, focus:'near-royal ant pressure'}],
  'Zoldyck Family': [{name:'Assassin Heir', tier:'Specialist', skill:'Zoldyck Assassin Skill', max:10, focus:'assassination rhythm and poison conditioning'}, {name:'Lightning Assassin', tier:'Rare', skill:'Lightning Assassin Skill', max:5, focus:'godspeed-like execution'}],
  'Kurta Clan': [{name:'Scarlet Eyes User', tier:'Specialist', skill:'Scarlet Eyes Skill', max:10, focus:'emotional aura amplification'}, {name:'Emperor Time Specialist', tier:'Rare', skill:'Emperor Time Skill', max:5, focus:'all-category nen pressure'}]
};

function evoSlug(name){ return String(name).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, ''); }
function tierMax(tier){ return tier === 'Rare' ? 5 : tier === 'Specialist' ? 10 : tier === 'Advanced' ? 10 : tier === 'Hidden' ? 5 : 15; }
function evoStats(stage, race){
  const base = race && race.base ? race.base : {hp:70,mp:60,pa:8,pd:8,ag:8,ma:8,md:8,rs:8,sp:5};
  const mod = stage === 0 ? 0.18 : 0.26;
  return {
    hp: Math.max(35, Math.floor((base.hp||70)*mod)), mp: Math.max(25, Math.floor((base.mp||50)*mod)),
    pa: Math.max(5, Math.floor((base.pa||8)*mod)+4), pd: Math.max(4, Math.floor((base.pd||8)*mod)+3),
    ag: Math.max(4, Math.floor((base.ag||8)*mod)+3), ma: Math.max(5, Math.floor((base.ma||8)*mod)+4),
    md: Math.max(4, Math.floor((base.md||8)*mod)+3), rs: Math.max(4, Math.floor((base.rs||8)*mod)+3), sp: Math.max(3, Math.floor((base.sp||6)*mod)+2)
  };
}
function evoPerLv(stage){ return stage === 0 ? {hp:4,mp:3,pa:2,pd:1,ag:2,ma:2,md:1,rs:1,sp:1} : {hp:6,mp:4,pa:3,pd:2,ag:2,ma:3,md:2,rs:2,sp:2}; }
function evoJobSkills(raceName, evo, stage){
  const slug = evoSlug(raceName + '_' + evo.name);
  const status = stage === 0 ? 'marked' : 'doom';
  const buff = stage === 0 ? 'focus' : 'bravery';
  const nextSkill = (RACE_EVOLUTION_PATHS[raceName] && RACE_EVOLUTION_PATHS[raceName][stage+1]) ? RACE_EVOLUTION_PATHS[raceName][stage+1].skill : null;
  const arr = [
    [1, [{id:'evo_'+slug+'_a1', name:evo.name+' Opening Art', type:'a', mp:18 + stage*14, pow:70 + stage*40, st:status, sc:0.35, desc:'Evolution art for '+evo.name+': '+evo.focus+'.'}]],
    [Math.min(5, evo.max), [{id:'evo_'+slug+'_p_mid', name:evo.name+' Adaptation', type:'p', bon: stage===0 ? {hp:35,mp:25,pa:6,ma:6,ag:4,sp:3} : {hp:55,mp:35,pa:9,ma:9,ag:5,sp:5}, desc:'Passive evolution growth for '+evo.name+'.'}]],
    [evo.max, [{id:'evo_'+slug+'_cap', name: nextSkill || (evo.name+' Capstone Skill'), type:'a', mp: stage===0 ? 42 : 68, pow: stage===0 ? 132 : 195, hits: stage===0 ? 2 : 3, buf:buff, st:status, sc: stage===0 ? 0.45 : 0.22, desc:(nextSkill ? 'Capstone key skill needed to unlock the next race evolution: '+nextSkill+'. ' : 'Rare evolution capstone. ')+evo.focus+'.'}]]
  ];
  return arr;
}
function installRaceEvolutionJobs(){
  let nextId = 9001;
  Object.entries(RACE_EVOLUTION_PATHS).forEach(([raceName, path]) => {
    const raceEntry = Object.entries(RACE_DATA).find(([,r]) => r.name === raceName);
    if (!raceEntry) return;
    const race = raceEntry[1];
    path.forEach((evo, stage) => {
      const id = String(nextId++);
      evo.jobId = id;
      if (JOB_DATA[id]) return;
      JOB_DATA[id] = {
        name: evo.name,
        anime: race.anime,
        max_lv: evo.max,
        unlock_lv: stage === 0 ? (race.max_lv || 20) : (race.max_lv || 20) + 5,
        desc: 'RACE EVOLUTION PATH for '+raceName+'. '+evo.tier+' Class. Focus: '+evo.focus+'. Requirement: '+evolutionRequirementText(raceName, stage)+'.',
        base: evoStats(stage, race),
        per_lv: evoPerLv(stage),
        skills: evoJobSkills(raceName, evo, stage),
        class_tier: evo.tier,
        tier: evo.tier.toLowerCase(),
        hidden: false,
        race_evolution: true,
        evolution_stage: stage + 1,
        evolution_base_race: raceName,
        prereq: { raceName: raceName, evolutionStage: stage + 1 }
      };
    });
  });
}
function installRaceEvolutionKeySkills(){
  Object.entries(RACE_EVOLUTION_PATHS).forEach(([raceName, path]) => {
    const race = Object.values(RACE_DATA).find(r => r.name === raceName);
    if (!race) return;
    if (!Array.isArray(race.skills)) race.skills = [];
    const maxLv = race.max_lv || 20;
    let tier = race.skills.find(t => t[0] === maxLv);
    if (!tier) { tier = [maxLv, []]; race.skills.push(tier); }
    if (!tier[1].some(sk => sk.name === path[0].skill)) {
      tier[1].push({id:'race_evo_key_'+evoSlug(raceName+'_'+path[0].skill), name:path[0].skill, type:'p', bon:{sp:4,rs:3}, desc:'Evolution key skill. Required to evolve '+raceName+' into '+path[0].name+'.'});
    }
  });
}
function hasSkillNamed(name){ return Array.isArray(G.learned_skills) && G.learned_skills.some(sk => sk && sk.name === name); }
function grantSkillByNameFromData(data, name){
  if (!data || !Array.isArray(data.skills) || hasSkillNamed(name)) return false;
  for (const tier of data.skills) {
    const sk = (tier[1] || []).find(x => x.name === name);
    if (sk) { G.learned_skills.push(sk); return true; }
  }
  return false;
}
function grantEarnedEvolutionKeySkills(){
  const race = RACE_DATA[G.race_id];
  if (!race) return;
  const path = RACE_EVOLUTION_PATHS[race.name];
  if (!path) return;
  if (G.race_lv >= (race.max_lv || 20)) grantSkillByNameFromData(race, path[0].skill);
  const stage1 = path[0];
  if (stage1 && getJobLevel(stage1.jobId) >= stage1.max) grantSkillByNameFromData(JOB_DATA[stage1.jobId], path[1].skill);
}
function evolutionRequirementText(raceName, stage){
  const path = RACE_EVOLUTION_PATHS[raceName] || [];
  if (stage === 0) return 'Max '+raceName+' racial level and learn '+(path[0] ? path[0].skill : 'the racial key skill');
  return 'Max '+(path[0] ? path[0].name : 'the first evolution')+' and learn '+(path[1] ? path[1].skill : 'the rare key skill');
}
function evolutionUnlockState(raceName, stage){
  ensureGameCollections(); grantEarnedEvolutionKeySkills();
  const race = Object.values(RACE_DATA).find(r => r.name === raceName);
  const path = RACE_EVOLUTION_PATHS[raceName] || [];
  const evo = path[stage];
  if (!race || !evo) return {ok:false, why:'Unknown evolution.'};
  if (!G.race_id || !RACE_DATA[G.race_id] || RACE_DATA[G.race_id].name !== raceName) return {ok:false, why:'Your current base race is not '+raceName+'.'};
  if (stage === 0) {
    if (G.race_lv < (race.max_lv || 20)) return {ok:false, why:'Race must be maxed first: '+G.race_lv+' / '+race.max_lv+'.'};
    if (!hasSkillNamed(evo.skill)) return {ok:false, why:'Missing required skill: '+evo.skill+'.'};
    return {ok:true, why:'Ready to evolve into '+evo.name+'.'};
  }
  const previous = path[stage-1];
  if (!previous || getJobLevel(previous.jobId) < previous.max) return {ok:false, why:'Max '+previous.name+' first: '+getJobLevel(previous.jobId)+' / '+previous.max+'.'};
  if (!hasSkillNamed(evo.skill)) return {ok:false, why:'Missing required skill: '+evo.skill+'.'};
  return {ok:true, why:'Ready to evolve into '+evo.name+'.'};
}
function checkRaceEvolutionUnlocks(silent){
  ensureGameCollections(); grantEarnedEvolutionKeySkills();
  const race = RACE_DATA[G.race_id];
  if (!race) return [];
  const path = RACE_EVOLUTION_PATHS[race.name] || [];
  const found = [];
  path.forEach((evo, stage) => {
    const st = evolutionUnlockState(race.name, stage);
    if (st.ok && !G.class_unlocks.includes(Number(evo.jobId))) {
      G.class_unlocks.push(Number(evo.jobId));
      if (!G.race_evolutions.includes(evo.name)) G.race_evolutions.push(evo.name);
      found.push(evo.name);
      if (!silent) print('◆ Race evolution unlocked: '+evo.name+'!', 'b-system');
    }
  });
  return found;
}

installRaceEvolutionKeySkills();
installRaceEvolutionJobs();

const _ensureGameCollections_v06_base = ensureGameCollections;
ensureGameCollections = function(){
  _ensureGameCollections_v06_base();
  if (!Array.isArray(G.race_evolutions)) G.race_evolutions = [];
  if (!Array.isArray(G.unlocked_jobs)) G.unlocked_jobs = [];
  if (!G.progress_flags || typeof G.progress_flags !== 'object') G.progress_flags = { version: PROGRESSION_VERSION };
  G.progress_flags.version = PROGRESSION_VERSION;
  G.race_evolutions = [...new Set(G.race_evolutions)];
  G.unlocked_jobs = [...new Set(G.unlocked_jobs.map(Number).filter(n => !Number.isNaN(n)))];
};

function jobTierName(j){ return (j && (j.class_tier || j.tier)) ? String(j.class_tier || j.tier).replace(/^./, c => c.toUpperCase()) : 'Base'; }
function isBaseJob(j){ return jobTierName(j).toLowerCase() === 'base'; }
function ownsBaseJobForAnime(anime){ return G.jobs.some(x => { const jd = JOB_DATA[x.id]; return jd && jd.anime === anime && isBaseJob(jd); }); }
function ownsAdvancedJobForAnime(anime){ return G.jobs.some(x => { const jd = JOB_DATA[x.id]; return jd && jd.anime === anime && jobTierName(jd).toLowerCase() === 'advanced'; }); }
function highestJobTierLevel(anime, tier){ return G.jobs.reduce((best,x) => { const jd = JOB_DATA[x.id]; return jd && jd.anime === anime && jobTierName(jd).toLowerCase() === tier.toLowerCase() ? Math.max(best, x.lv || 0) : best; }, 0); }
function challengeClears(){ return Array.isArray(G.challenge_log) ? G.challenge_log.length : 0; }
function raidClears(){ return (G.achievements && G.achievements.defeated) ? Object.keys(G.achievements.defeated).filter(k => /Raid|Fragment|Echo|Manifestation|King Shadow|Boss/i.test(k)).length : 0; }
function hasFullSetBonusActive(){ return typeof getFullSetBonus === 'function' ? !!getFullSetBonus() : false; }
function jobRequirementList(j){
  const tier = jobTierName(j);
  const list = (REQUIREMENT_GUIDE.jobs[tier] || []).slice();
  if (SPECIFIC_JOB_REQUIREMENTS[j.name]) list.unshift(j.name+' — '+SPECIFIC_JOB_REQUIREMENTS[j.name]);
  if (j.race_evolution) list.unshift('Race Evolution — '+evolutionRequirementText(j.evolution_base_race, (j.evolution_stage||1)-1));
  return list;
}
function genericJobUnlockState(id, j){
  ensureGameCollections();
  const tier = jobTierName(j);
  if (isBaseJob(j)) return {ok:true, why:'Base jobs are unlocked at character creation.'};
  if (j.race_evolution) return evolutionUnlockState(j.evolution_base_race, (j.evolution_stage||1)-1);
  if (G.class_unlocks.includes(Number(id)) || G.unlocked_jobs.includes(Number(id))) return {ok:true, why:'Requirement already completed.'};
  const kills = (G.achievements && G.achievements.totalKills) || 0;
  if (tier === 'Advanced') {
    if (!ownsBaseJobForAnime(j.anime)) return {ok:false, why:'Requires a related Base job from '+j.anime+'.'};
    if (G.total_lv < 5) return {ok:false, why:'Requires Total Level 5+.'};
    if (kills < 3) return {ok:false, why:'Requires 3 battle victories / kills. Current: '+kills+'.'};
    return {ok:true, why:'Advanced requirements met.'};
  }
  if (tier === 'Specialist') {
    if (!ownsBaseJobForAnime(j.anime) && !ownsAdvancedJobForAnime(j.anime)) return {ok:false, why:'Requires a related Base or Advanced job from '+j.anime+'.'};
    if (highestJobTierLevel(j.anime, 'Base') < 10 && highestJobTierLevel(j.anime, 'Advanced') < 5) return {ok:false, why:'Requires Base Lv.10+ or Advanced Lv.5+ in '+j.anime+'.'};
    if (kills < 8 && challengeClears() < 1) return {ok:false, why:'Requires 8 kills or 1 Challenge clear. Kills: '+kills+', Challenges: '+challengeClears()+'.'};
    return {ok:true, why:'Specialist requirements met.'};
  }
  if (tier === 'Rare') {
    if (!ownsBaseJobForAnime(j.anime) && !ownsAdvancedJobForAnime(j.anime)) return {ok:false, why:'Requires investment in '+j.anime+' job paths.'};
    if (kills < 15 && raidClears() < 1 && !hasFullSetBonusActive()) return {ok:false, why:'Requires 15 kills, a raid clear, or a full anime set bonus. Kills: '+kills+'.'};
    return {ok:true, why:'Rare requirements met.'};
  }
  if (tier === 'Hidden') {
    const research = (G.achievements && G.achievements.secret_research) || 0;
    if (research < 1) return {ok:false, why:'Requires Hidden Class Research at least once.'};
    if (kills < 20 && challengeClears() < 1 && raidClears() < 1) return {ok:false, why:'Requires 20 kills, a Challenge clear, or a Raid clear after research.'};
    return {ok:true, why:'Hidden requirements met.'};
  }
  return {ok:false, why:'Unknown job tier requirement.'};
}
function checkJobUnlocks(silent){
  ensureGameCollections(); checkRaceEvolutionUnlocks(silent);
  const newly=[];
  Object.entries(JOB_DATA).forEach(([id,j]) => {
    if (isBaseJob(j) || ownsJob(id) || G.class_unlocks.includes(Number(id))) return;
    const st = genericJobUnlockState(id,j);
    if (st.ok) { G.class_unlocks.push(Number(id)); newly.push(j.name); if (!silent) print('◆ Job path unlocked: '+j.name+'!', 'b-system'); }
  });
  G.class_unlocks = [...new Set(G.class_unlocks.map(Number))];
  return newly;
}

canStartWithJob = function(id, j){ return !!j && isBaseJob(j); };
canAddJob = function(id){
  id = Number(id);
  const j = JOB_DATA[id];
  if (!j || ownsJob(id)) return false;
  return genericJobUnlockState(id, j).ok;
};
jobPrereqText = function(id, j){
  if (!j) return 'Unknown job.';
  const st = genericJobUnlockState(id, j);
  return (st.ok ? 'Unlocked — ' : 'Locked — ') + st.why;
};
canViewHiddenJob = function(id, j){ return !!j; };

addJobPath = function(id){
  id = Number(id);
  const j = JOB_DATA[id];
  clearOutput(); showBattlePanel(false);
  if (!j) { print('Unknown job path.', 'danger'); return; }
  const st = genericJobUnlockState(id,j);
  if (ownsJob(id)) { print('You already own '+j.name+'.', 'info'); showChoices([['Character Status', character_screen], ['Class Registry', class_registry_screen]]); return; }
  if (!st.ok) {
    print('LOCKED JOB PATH — '+j.name, 'danger');
    print(st.why, 'narrator');
    jobRequirementList(j).forEach(req => print('• '+req, 'info'));
    showChoices([['📜 Class Registry', class_registry_screen], ['🧬 Race Evolution', race_evolution_screen], ['← Character Status', character_screen]]);
    return;
  }
  G.jobs.push({ id, lv: 0 });
  if (!G.class_unlocks.includes(id)) G.class_unlocks.push(id);
  applyStats(); updateStats(); saveGame();
  print('⊕ Class path added: '+j.name+' ['+j.anime+']', 'success');
  print('It starts at Lv.0. Spend a Level Point on it to reach Lv.1 and unlock its starting skill.', 'narrator');
  showChoices([['Spend Level Points', character_screen], ['Class Registry', class_registry_screen], ['Town Center', town_center]]);
};

pick_job = function(){
  clearOutput(); showBattlePanel(false);
  const race = RACE_DATA[G.race_id];
  print('Race: '+race.name+'  ['+race.anime+']', 'highlight');
  print('— STEP 2: CHOOSE YOUR STARTING BASE JOB —', 'highlight');
  print('Only Base jobs are unlocked at the start. Advanced, Specialist, Rare, Hidden, and Race Evolution jobs must be earned through requirements.', 'narrator');
  print('', 'narrator');
  $ch.innerHTML = '';
  const groups = {};
  Object.entries(JOB_DATA).forEach(([id,j]) => { if (!isBaseJob(j)) return; if (!groups[j.anime]) groups[j.anime]=[]; groups[j.anime].push([id,j]); });
  Object.entries(groups).forEach(([anime, entries]) => {
    const hdr = document.createElement('div');
    hdr.style.cssText = 'margin:10px 0 4px;padding:6px 10px;background:linear-gradient(90deg,#12082a,#090e1c);border-left:3px solid #7f5af0;font-family:"Cinzel Decorative",serif;font-size:11px;color:#a78bfa;letter-spacing:2px';
    hdr.textContent = '— '+anime.toUpperCase()+' BASE JOBS —';
    $ch.appendChild(hdr);
    entries.forEach(([id,j]) => {
      const b = document.createElement('button'); b.style.lineHeight='1.65'; b.style.whiteSpace='pre-wrap';
      b.textContent = j.name+'  ·  '+classTierLabel(j)+'\nHP:'+j.base.hp+'  MP:'+j.base.mp+'  PHY.ATK:'+j.base.pa+'  PHY.DEF:'+j.base.pd+'  AGI:'+j.base.ag+'  MAG.ATK:'+j.base.ma+'  RESIST:'+j.base.rs+'  SPECIAL:'+j.base.sp+'\n'+j.desc+'\nRequirement: Base job unlocked at start.';
      b.onclick = () => { G.jobs = [{id:Number(id), lv:1}]; your_character(); };
      $ch.appendChild(b);
    });
  });
  const req = document.createElement('button'); req.textContent='📘 View Job Requirement System'; req.onclick=job_requirement_screen; $ch.appendChild(req);
  const back = document.createElement('button'); back.textContent='← Back to Race Selection'; back.onclick=pick_race; $ch.appendChild(back);
};

class_registry_screen = function(){
  ensureGameCollections(); checkJobUnlocks(true); clearOutput(); showBattlePanel(false);
  print('FULL CLASS REGISTRY — REQUIREMENT LOCKED JOBS', 'highlight');
  print('Base jobs are unlocked from the start. Advanced, Specialist, Rare, Hidden, and Race Evolution jobs unlock by meeting their requirements.', 'narrator');
  print('Gold: '+G.gold+' · Total Level: '+G.total_lv+' / 100 · Kills: '+((G.achievements&&G.achievements.totalKills)||0)+' · Research depth: '+((G.achievements&&G.achievements.secret_research)||0), 'info');
  $ch.innerHTML = '';
  const guide = document.createElement('button'); guide.textContent='📘 Job Requirement Guide'; guide.onclick=job_requirement_screen; $ch.appendChild(guide);
  const evo = document.createElement('button'); evo.textContent='🧬 Race Evolution Paths'; evo.onclick=race_evolution_screen; $ch.appendChild(evo);
  const research = document.createElement('button'); research.textContent='🔎 Research Hidden Classes — '+hiddenResearchCost()+'g'; research.onclick=doHiddenResearch; $ch.appendChild(research);
  const groups = {};
  Object.entries(JOB_DATA).forEach(([id,j]) => { if (!groups[j.anime]) groups[j.anime]=[]; groups[j.anime].push([id,j]); });
  Object.entries(groups).forEach(([anime,list]) => {
    const hdr=document.createElement('div'); hdr.style.cssText='margin:12px 0 4px;padding:6px 10px;background:linear-gradient(90deg,#12082a,#090e1c);border-left:3px solid #e8c84a;font-family:"Cinzel Decorative",serif;font-size:11px;color:#e8c84a;letter-spacing:2px'; hdr.textContent='— '+anime.toUpperCase()+' —'; $ch.appendChild(hdr);
    list.sort((a,b)=>tierOrder(jobTierName(a[1]))-tierOrder(jobTierName(b[1])) || a[1].name.localeCompare(b[1].name)).forEach(([id,j]) => {
      const owned=ownsJob(id), available=canAddJob(Number(id));
      const st=genericJobUnlockState(id,j);
      const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.style.lineHeight='1.45';
      const status = owned ? '[OWNED]' : available ? '[UNLOCKED]' : '[LOCKED]';
      b.textContent = status+' '+j.name+' — '+classTierLabel(j)+'\nRequirement: '+st.why+'\n'+jobRequirementList(j).slice(0,3).map(x=>'• '+x).join('\n')+'\n'+j.desc;
      b.disabled = !available || owned;
      if (available && !owned) b.onclick=()=>addJobPath(id);
      $ch.appendChild(b);
    });
  });
  const back=document.createElement('button'); back.textContent='← Character Status'; back.onclick=character_screen; $ch.appendChild(back);
  const town=document.createElement('button'); town.textContent='← Town Center'; town.onclick=town_center; $ch.appendChild(town);
};
function tierOrder(t){ return {Base:0, Advanced:1, Specialist:2, Rare:3, Hidden:4}[t] ?? 9; }

function race_evolution_screen(){
  ensureGameCollections(); checkRaceEvolutionUnlocks(true); clearOutput(); showBattlePanel(false);
  const race = RACE_DATA[G.race_id];
  print('RACE EVOLUTION PATHS', 'highlight');
  if (!race) { print('Choose a race first.', 'danger'); showChoices([['← Race Selection', pick_race]]); return; }
  const path = RACE_EVOLUTION_PATHS[race.name] || [];
  print(race.name+' ['+race.anime+'] — Race Lv.'+G.race_lv+' / '+race.max_lv, 'info');
  print('Evolution rule: max your base race, learn the evolution key skill, then unlock the Specialist evolution. Max that Specialist evolution to unlock the Rare evolution.', 'narrator');
  $ch.innerHTML = '';
  path.forEach((evo, stage) => {
    const st = evolutionUnlockState(race.name, stage);
    const owned = ownsJob(evo.jobId);
    const job = JOB_DATA[evo.jobId];
    const b=document.createElement('button'); b.style.whiteSpace='pre-wrap'; b.style.lineHeight='1.5';
    b.textContent = (owned?'[OWNED] ':st.ok?'[READY] ':'[LOCKED] ')+evo.name+' — '+evo.tier+' Class · max '+evo.max+'\nRequirement: '+evolutionRequirementText(race.name, stage)+'\nStatus: '+st.why+'\nFocus: '+evo.focus;
    b.disabled = owned || !st.ok;
    b.onclick = () => addJobPath(evo.jobId);
    $ch.appendChild(b);
  });
  const all = document.createElement('button'); all.textContent='📜 View Full Class Registry'; all.onclick=class_registry_screen; $ch.appendChild(all);
  const back=document.createElement('button'); back.textContent='← Character Status'; back.onclick=character_screen; $ch.appendChild(back);
}

function job_requirement_screen(){
  clearOutput(); showBattlePanel(false);
  print('JOB + LEVEL REQUIREMENT SYSTEM', 'highlight');
  print('This update changes progression from “everything unlocked” to “earn the path.”', 'narrator');
  print('STARTING RULE: only Base jobs appear during character creation. Every other job path must be unlocked.', 'success');
  print('', 'narrator');
  print('SOUL LEVEL REQUIREMENTS', 'highlight'); REQUIREMENT_GUIDE.soul.forEach(x=>print('• '+x, 'info'));
  print('RACE LEVEL REQUIREMENTS', 'highlight'); REQUIREMENT_GUIDE.race.forEach(x=>print('• '+x, 'info'));
  Object.entries(REQUIREMENT_GUIDE.jobs).forEach(([tier,list]) => { print(tier.toUpperCase()+' JOB REQUIREMENTS', 'highlight'); list.forEach(x=>print('• '+x, 'info')); });
  print('SPECIFIC JOB EXAMPLES', 'highlight'); Object.entries(SPECIFIC_JOB_REQUIREMENTS).slice(0,14).forEach(([k,v])=>print('• '+k+' — '+v, 'narrator'));
  showChoices([['📜 Class Registry', class_registry_screen], ['🧬 Race Evolution', race_evolution_screen], ['← Back', returnFromHelp]]);
}

// Add Race Evolution and Requirement screens into Character Status without replacing the whole status renderer.
const _character_screen_v06_base = character_screen;
character_screen = function(){
  ensureGameCollections(); checkJobUnlocks(true); grantEarnedEvolutionKeySkills();
  _character_screen_v06_base();
  const nav = document.createElement('div'); nav.className='cs-exp-row';
  nav.innerHTML = '<div class="cs-exp-label" style="color:#e8c84a">v0.6 PROGRESSION</div><div style="font-size:11px;color:#8aaac8;line-height:1.5">Race Evolution and locked job requirements are now active. Base jobs start unlocked; higher tiers must be earned.</div>';
  const evoBtn=document.createElement('button'); evoBtn.textContent='🧬 Race Evolution Path'; evoBtn.onclick=race_evolution_screen; nav.appendChild(evoBtn);
  const reqBtn=document.createElement('button'); reqBtn.textContent='📘 Job / Level Requirements'; reqBtn.onclick=job_requirement_screen; nav.appendChild(reqBtn);
  const regBtn=document.createElement('button'); regBtn.textContent='📜 Requirement-Locked Class Registry'; regBtn.onclick=class_registry_screen; nav.appendChild(regBtn);
  $ch.appendChild(nav);
};

const _saveGame_v06_base = saveGame;
saveGame = function(){ ensureGameCollections(); if (!G.save_meta) G.save_meta={}; G.save_meta.version = PROGRESSION_VERSION; return _saveGame_v06_base(); };
const _loadGame_v06_base = loadGame;
loadGame = function(){ const r = _loadGame_v06_base(); ensureGameCollections(); installRaceEvolutionKeySkills(); installRaceEvolutionJobs(); checkJobUnlocks(true); return r; };

// Make hidden research immediately re-check locked paths.
const _doHiddenResearch_v06_base = doHiddenResearch;
doHiddenResearch = function(){ _doHiddenResearch_v06_base(); checkJobUnlocks(false); };

// Settings menu receives the v0.6 notes and requirement guide.
function injectProgressionSettings(){
  const panel=document.getElementById('settings-panel'); if(!panel || document.getElementById('progression-settings-section')) return;
  const saveSection=[...panel.querySelectorAll('.sp-section')].find(s => /Save \/ Load/.test(s.textContent));
  const div=document.createElement('div'); div.className='sp-section'; div.id='progression-settings-section';
  div.innerHTML='<h3>Progression v0.6</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Race evolutions and locked job requirements are active. Only Base jobs are unlocked at character creation.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); expansion_update_screen()">🆕 Update Notes</button><button class="sp-btn" onclick="closeSettingsPanel(); job_requirement_screen()">📘 Requirements</button><button class="sp-btn" onclick="closeSettingsPanel(); race_evolution_screen()">🧬 Race Evolutions</button></div>';
  if(saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
}
injectProgressionSettings();

const _expansion_update_screen_v06_base = expansion_update_screen;
expansion_update_screen = function(){
  clearOutput(); showBattlePanel(false); print('UPDATE v0.6 — RACE EVOLUTION + JOB REQUIREMENTS', 'highlight');
  print('Race Evolution added: every base race now has a unique Specialist → Rare evolution path.', 'success');
  print('Evolution rule: max your race, learn the race key skill, unlock the Specialist evolution, then max that to unlock the Rare evolution.', 'info');
  print('Job system changed: only Base jobs are unlocked at character creation.', 'success');
  print('Advanced, Specialist, Rare, and Hidden jobs now show requirement text and unlock through battle, class, gear, raid, challenge, and research milestones.', 'success');
  print('Class Registry now displays [LOCKED], [UNLOCKED], and [OWNED] states with requirement notes.', 'info');
  print('Race Evolution and Job Requirement screens were added to Character Status and Settings.', 'info');
  showChoices([['📘 Requirements', job_requirement_screen], ['🧬 Race Evolution', race_evolution_screen], ['← Town Center', town_center]]);
};


// ═══════════════════════════════════════════════════════════════
