import { byId, titleCase } from "../core/utils.js";
import { SKILLS } from "../data/skills.js";

const WEAPON_SETS = {
  blade: ["Sword", "Katana", "Dagger", "Rapier"],
  heavy: ["Greatsword", "Axe", "Hammer", "Polearm"],
  ranged: ["Bow", "Crossbow", "Throwing Knife"],
  magic: ["Staff", "Wand", "Catalyst", "Tome"],
  holy: ["Mace", "Shield", "Staff", "Relic"],
  natural: ["Claws", "Fangs", "Unarmed", "Spear"],
  light: ["Dagger", "Shortsword", "Bow", "Charm"],
  craft: ["Bombs", "Tools", "Catalyst", "Dagger"],
  shield: ["Shield", "Spear", "Mace", "Sword"],
  voice: ["Instrument", "Dagger", "Charm", "Tome"],
  simple: ["Simple Weapons", "Dagger", "Staff"]
};

const SPELL_SCHOOLS = {
  fire: ["Fire", "Destruction", "Infernal"],
  ice: ["Ice", "Control", "Wardcraft"],
  storm: ["Wind", "Lightning", "Storm"],
  holy: ["Light", "Healing", "Protection"],
  dark: ["Dark", "Curse", "Necromancy"],
  nature: ["Nature", "Beast", "Earth"],
  arcane: ["Arcane", "Rune", "Mana"],
  poison: ["Poison", "Alchemy", "Plague"],
  none: ["None preferred"],
  flexible: ["Universal", "Utility", "Support"]
};

function textOf(item) {
  return `${item?.name ?? ""} ${item?.category ?? ""} ${(item?.strengths ?? []).join(" ")} ${(item?.weaknesses ?? []).join(" ")} ${item?.description ?? ""}`.toLowerCase();
}

function pickWeaponKey(item) {
  const text = textOf(item);
  if (/bard|song|singer|skald|music|voice|dirge/.test(text)) return "voice";
  if (/cleric|priest|paladin|bishop|holy|celestial|seraph/.test(text)) return "holy";
  if (/mage|wizard|sorcer|witch|arcan|rune|spell|sage|oracle/.test(text)) return "magic";
  if (/ranger|archer|sniper|hunter|bow|gunner|shooter/.test(text)) return "ranged";
  if (/rogue|assassin|shadow|thief|ninja|duelist/.test(text)) return "light";
  if (/guardian|fortress|sentinel|shield|knight|warden/.test(text)) return "shield";
  if (/berserk|ogre|giant|titan|mauler|brute|axe|hammer|crusher/.test(text)) return "heavy";
  if (/monk|beast|claw|fang|martial|ki|fist/.test(text)) return "natural";
  if (/alchemist|doctor|bomb|plague|craft|engineer/.test(text)) return "craft";
  if (/fighter|warrior|samurai|sword|blade|weapon/.test(text)) return "blade";
  return "simple";
}

function pickSpellSchoolKey(item) {
  const text = textOf(item);
  if (/fire|flame|ember|infernal|hell|demon|dragon/.test(text)) return "fire";
  if (/ice|frost|snow|winter/.test(text)) return "ice";
  if (/storm|wind|lightning|thunder|sylph|cloud/.test(text)) return "storm";
  if (/holy|light|priest|cleric|angel|seraph|celestial|heal|mend/.test(text)) return "holy";
  if (/dark|shadow|undead|lich|grave|death|curse|hex|demon/.test(text)) return "dark";
  if (/nature|forest|beast|wild|earth|stone|druid|plant|thorn/.test(text)) return "nature";
  if (/poison|plague|toxic|venom|alchem/.test(text)) return "poison";
  if (/magic|mage|arcane|rune|spell|mana|sage|oracle/.test(text)) return "arcane";
  return "flexible";
}

function pickRole(item) {
  const text = textOf(item);
  if (/heal|support|bard|cleric|priest|oracle|tamer|summon/.test(text)) return "Support";
  if (/guardian|fortress|shield|sentinel|tank|paladin|knight/.test(text)) return "Defender";
  if (/mage|wizard|sorcer|arcan|spell|elementalist|warlock/.test(text)) return "Caster";
  if (/rogue|assassin|shadow|ninja|thief|sniper|ranger/.test(text)) return "Skirmisher";
  if (/alchemist|doctor|bomb|plague|engineer/.test(text)) return "Tactician";
  if (/fighter|warrior|berserk|monk|sword|samurai|weapon/.test(text)) return "Striker";
  return "Hybrid Adventurer";
}

function allowedSkillTypesForRole(role, item) {
  const text = textOf(item);
  const values = new Set();
  if (/fighter|warrior|rogue|ranger|monk|guardian|knight|samurai|berserk|physical|blade|weapon|shield/.test(text)) values.add("Physical Skills");
  if (/mage|spell|arcane|rune|cleric|priest|witch|warlock|oracle|magic|mana|sorcer/.test(text)) values.add("Magic Spells");
  if (/bard|support|healer|tamer|summoner|guardian|paladin|cleric/.test(text) || ["Support", "Defender"].includes(role)) values.add("Support Arts");
  if (/alchemist|poison|plague|bomb|trap|rogue|assassin|doctor/.test(text)) values.add("Tactical Techniques");
  if (!values.size) values.add("General Skills");
  return [...values];
}

function firstSkillName(item) {
  const id = (item?.startingSkills ?? [])[0] || (item?.learns ?? [])[0]?.skillId;
  return byId(SKILLS, id)?.name ?? (id ? titleCase(id) : "Unwritten Technique");
}

export function getRaceIdentity(race) {
  const name = race?.name ?? "Unknown Race";
  const category = titleCase(race?.category ?? "Origin");
  const focus = pickSpellSchoolKey(race);
  const intrinsicName = firstSkillName(race);
  return {
    passiveTrait: race?.passiveTrait ?? `${name} Instinct — starts with a natural ${category.toLowerCase()} adaptation that reinforces its strongest Basic Ability and gives the race a unique opening identity.`,
    intrinsicSkill: race?.intrinsicSkill ?? intrinsicName,
    evolutionBonus: race?.evolutionBonus ?? `When this race evolves, its current visible Basic Abilities reset to I 0 while its hidden stacked totals remain, and its ${category} identity gains a stronger specialty bonus.`,
    limitation: race?.limitation ?? (race?.weaknesses?.[0] ? `${race.weaknesses[0]} This limitation shapes how the race should choose jobs and equipment.` : "Has no free universal answer; it must cover its weak matchups through job choice, gear, and party support."),
    uniqueUnlockPath: race?.uniqueUnlockPath ?? `Advance by reaching the race level cap, clearing race-themed quests, and proving the bloodline/species identity through dungeon achievements.`,
    tags: [category, titleCase(race?.tier ?? "base"), titleCase(focus)]
  };
}

export function getJobIdentity(job) {
  const name = job?.name ?? "Unknown Job";
  const role = job?.mainRole ?? pickRole(job);
  const weaponKey = pickWeaponKey(job);
  const schoolKey = pickSpellSchoolKey(job);
  const signature = job?.signatureAbility ?? firstSkillName(job);
  return {
    mainRole: role,
    allowedSkillTypes: job?.allowedSkillTypes ?? allowedSkillTypesForRole(role, job),
    preferredWeapons: job?.preferredWeapons ?? WEAPON_SETS[weaponKey],
    preferredSpellSchools: job?.preferredSpellSchools ?? SPELL_SCHOOLS[schoolKey],
    passiveMasteryBonus: job?.passiveMasteryBonus ?? `${name} Mastery — improves the job's ${role.toLowerCase()} identity as job levels rise and makes its preferred tools more reliable.`,
    upgradePath: job?.upgradePath ?? `Unlock stronger forms by reaching the job cap, completing job quests, and meeting role-specific combat requirements.`,
    signatureAbility: signature,
    tags: [role, titleCase(job?.tier ?? "base"), ...allowedSkillTypesForRole(role, job).slice(0, 2)]
  };
}

export function getEnemyIdentity(enemy, floor = 1) {
  const text = `${enemy?.name ?? ""} ${enemy?.element ?? ""}`.toLowerCase();
  let race = "Wildkin";
  if (/goblin|bandit/.test(text)) race = "Goblinoid";
  if (/wolf|beast/.test(text)) race = "Beastkin";
  if (/bone|lich|grave|undead/.test(text)) race = "Undead";
  if (/imp|demon|hell/.test(text)) race = "Demonkin";
  if (/wisp|rune|arcane/.test(text)) race = "Spirit";
  if (/stone|golem|mauler/.test(text)) race = "Construct";
  if (/ogre|brakk/.test(text)) race = "Ogre";
  let job = "Striker";
  if (/mage|wisp|lich|arcane|rune/.test(text)) job = "Caster";
  if (/guard|knight|ogre|stone/.test(text)) job = "Defender";
  if (/goblin|wolf|bandit/.test(text)) job = floor >= 8 ? "Skirmisher" : "Raider";
  const tier = floor >= 12 ? "Veteran" : floor >= 6 ? "Trained" : "Novice";
  return { race, job, tier, label: `${tier} ${race} ${job}` };
}
