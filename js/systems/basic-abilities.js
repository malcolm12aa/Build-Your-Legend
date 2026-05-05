export const BASIC_ABILITIES = [
  { id: "strength", name: "Strength", short: "STR", scaling: "Physical attack, stamina pressure, and heavy weapon power." },
  { id: "endurance", name: "Endurance", short: "END", scaling: "Maximum HP, defense, and stamina durability." },
  { id: "dexterity", name: "Dexterity", short: "DEX", scaling: "Accuracy, technical weapon damage, item handling, and precision skills." },
  { id: "agility", name: "Agility", short: "AGI", scaling: "Speed, evasion flavor, turn pressure, and light-weapon rhythm." },
  { id: "magic", name: "Magic", short: "MAG", scaling: "Maximum mana, spell power, healing force, and arcane scaling." }
];

export const BASIC_ABILITY_RANKS = [
  { rank: "I", min: 0, max: 99 },
  { rank: "H", min: 100, max: 199 },
  { rank: "G", min: 200, max: 299 },
  { rank: "F", min: 300, max: 399 },
  { rank: "E", min: 400, max: 499 },
  { rank: "D", min: 500, max: 599 },
  { rank: "C", min: 600, max: 699 },
  { rank: "B", min: 700, max: 799 },
  { rank: "A", min: 800, max: 899 },
  { rank: "S", min: 900, max: 999 }
];

export const EMPTY_BASIC_ABILITIES = Object.freeze({
  strength: 0,
  endurance: 0,
  dexterity: 0,
  agility: 0,
  magic: 0
});

export function emptyBasicAbilities() {
  return { ...EMPTY_BASIC_ABILITIES };
}

export function getAbilityRank(value = 0) {
  const capped = Math.max(0, Math.min(999, Math.floor(value)));
  return BASIC_ABILITY_RANKS.find(entry => capped >= entry.min && capped <= entry.max)?.rank ?? "I";
}

export function formatBasicAbility(value = 0) {
  const capped = Math.max(0, Math.min(999, Math.floor(value)));
  return `${getAbilityRank(capped)} ${capped}`;
}

export function addBasicAbilityPoints(target, source = {}, multiplier = 1) {
  for (const ability of BASIC_ABILITIES) {
    target[ability.id] = Math.max(0, (target[ability.id] ?? 0) + Math.floor((source[ability.id] ?? 0) * multiplier));
  }
  return target;
}

export function legacyStatsToBasicAbilities(stats = {}, multiplier = 1) {
  const str = Number(stats.str ?? 0);
  const dex = Number(stats.dex ?? 0);
  const int = Number(stats.int ?? 0);
  const wis = Number(stats.wis ?? 0);
  const con = Number(stats.con ?? 0);
  const cha = Number(stats.cha ?? 0);

  // The imported Excel/data sheets still use the older STR/DEX/INT/WIS/CON/CHA template.
  // This converter turns those templates into five Falna-style Basic Abilities.
  return {
    strength: Math.max(0, Math.floor((str * 36 + con * 8 + dex * 5 + cha * 2) * multiplier)),
    endurance: Math.max(0, Math.floor((con * 42 + str * 8 + wis * 5) * multiplier)),
    dexterity: Math.max(0, Math.floor((dex * 36 + str * 6 + int * 5 + wis * 2) * multiplier)),
    agility: Math.max(0, Math.floor((dex * 28 + cha * 8 + wis * 5 + str * 2) * multiplier)),
    magic: Math.max(0, Math.floor((int * 34 + wis * 18 + cha * 5) * multiplier))
  };
}

export function buildBasicAbilityPacket({ total = {}, current = {}, external = {} } = {}) {
  const fullTotal = emptyBasicAbilities();
  const currentStage = emptyBasicAbilities();
  addBasicAbilityPoints(fullTotal, total);
  addBasicAbilityPoints(fullTotal, external);
  addBasicAbilityPoints(currentStage, current);

  const rows = BASIC_ABILITIES.map(ability => {
    const currentValue = Math.max(0, Math.min(999, currentStage[ability.id] ?? 0));
    const totalValue = Math.max(0, Math.floor(fullTotal[ability.id] ?? 0));
    return {
      ...ability,
      currentValue,
      currentRank: getAbilityRank(currentValue),
      totalValue,
      totalDisplay: formatBasicAbility(totalValue),
      totalRank: getAbilityRank(totalValue)
    };
  });

  return {
    current: Object.fromEntries(rows.map(row => [row.id, row.currentValue])),
    total: Object.fromEntries(rows.map(row => [row.id, row.totalValue])),
    rows
  };
}

export function scaleDerivedStatsFromBasicAbilities(basicAbilities, overallLevel = 1) {
  const total = basicAbilities?.total ?? EMPTY_BASIC_ABILITIES;
  const strength = total.strength ?? 0;
  const endurance = total.endurance ?? 0;
  const dexterity = total.dexterity ?? 0;
  const agility = total.agility ?? 0;
  const magic = total.magic ?? 0;

  return {
    maxHp: Math.floor(75 + endurance * 0.32 + strength * 0.1 + overallLevel * 7),
    maxMana: Math.floor(35 + magic * 0.33 + overallLevel * 4),
    maxStamina: Math.floor(45 + endurance * 0.12 + strength * 0.11 + agility * 0.15 + dexterity * 0.1 + overallLevel * 4),
    attack: Math.floor(6 + strength * 0.028 + dexterity * 0.014 + overallLevel * 1.0),
    magic: Math.floor(6 + magic * 0.035 + dexterity * 0.006 + overallLevel * 0.85),
    defense: Math.floor(3 + endurance * 0.026 + magic * 0.004 + overallLevel * 0.45),
    speed: Math.floor(3 + agility * 0.028 + dexterity * 0.008 + overallLevel * 0.55)
  };
}

export function basicAbilityScalingSummary(stats) {
  const basic = stats?.basicAbilities;
  if (!basic?.rows) return [];
  return basic.rows.map(row => `${row.name}: ${row.currentRank} ${row.currentValue} / stacked ${row.totalValue}`);
}
