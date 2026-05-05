import { CONFIG } from "../config.js";
import { RACES, RACE_PATHS } from "../data/races.js";
import { JOBS, JOB_PATHS } from "../data/jobs.js";
import { SKILLS } from "../data/skills.js";
import { SYNERGIES } from "../data/synergies.js";
import { EQUIPMENT_SLOTS } from "../data/items.js";
import { byId, deepClone } from "./utils.js";
import { computeStats } from "../systems/leveling.js";

function baseMeta() {
  return { totalRuns: 0, bossKills: 0, eliteKills: 0, enemyKills: 0, highestFloor: 0, relicDust: 0 };
}

export function createInitialState() {
  return {
    version: CONFIG.version,
    screen: "main-menu",
    characterCreation: { name: "Wanderer", raceId: RACES[0].id, jobId: JOBS[0].id },
    player: null,
    run: null,
    combat: null,
    ui: {
      selectedShop: "general_store",
      lastReward: null,
      saveMenuMode: "load",
      currentEvent: null,
      offeredRecruit: null,
      registryFilters: { search: "", kind: "all", category: "all", tier: "all" },
      abilityFilters: { search: "", library: "all", kind: "all", rank: "all" },
      questFilters: { category: "All" },
      devMenuOpen: false,
      creationFilters: {
        raceSearch: "", raceCategory: "all", raceTier: "all", raceFocus: "all",
        jobSearch: "", jobCategory: "all", jobTier: "all", jobFocus: "all"
      }
    },
    meta: baseMeta(),
    quests: { claimed: [], daily: { date: new Date().toISOString().slice(0, 10), roomsCleared: 0, enemyKills: 0 } },
    log: []
  };
}

function startingSynergySkills(raceId, jobId) {
  return SYNERGIES
    .filter(s => (s.raceIds ?? []).includes(raceId) && (s.jobIds ?? []).includes(jobId))
    .flatMap(s => s.skills ?? []);
}

export function createPlayer(name, raceId, jobId) {
  const race = byId(RACES, raceId) ?? RACES[0];
  const job = byId(JOBS, jobId) ?? JOBS[0];
  const equipment = Object.fromEntries(EQUIPMENT_SLOTS.map(slot => [slot, null]));
  const skillIds = [...new Set([...(race.startingSkills ?? []), ...(job.startingSkills ?? []), ...startingSynergySkills(race.id, job.id), "basic_focus"])]
    .filter(id => id === "basic_focus" || byId(SKILLS, id));
  const player = {
    name: name?.trim() || "Wanderer",
    title: "Wanderer",
    achievements: [],
    raceLevels: [{ id: race.id, name: race.name, tier: race.tier, level: 1, maxLevel: race.maxLevel }],
    jobLevels: [{ id: job.id, name: job.name, tier: job.tier, level: 1, maxLevel: job.maxLevel }],
    xp: 0,
    unspentClassLevels: 0,
    gold: CONFIG.startingGold,
    hp: 1,
    mana: 1,
    stamina: 1,
    baseStats: { str: 4, dex: 4, int: 4, wis: 4, con: 4, cha: 4 },
    inventory: { minor_potion: 3, mana_vial: 1, stamina_tonic: 1, camp_ration: 2 },
    equipment,
    skills: skillIds,
    cooldowns: {},
    statusEffects: [],
    party: [],
    defeatedBosses: []
  };
  const stats = computeStats(player);
  player.hp = stats.maxHp;
  player.mana = stats.maxMana;
  player.stamina = stats.maxStamina;
  return player;
}

function syncSavedClassLabels(player) {
  const raceData = [...RACES, ...RACE_PATHS];
  const jobData = [...JOBS, ...JOB_PATHS];
  for (const cls of player.raceLevels ?? []) {
    const data = byId(raceData, cls.id);
    if (!data) continue;
    cls.name = data.name;
    cls.tier = data.tier;
    cls.maxLevel = data.maxLevel;
  }
  for (const cls of player.jobLevels ?? []) {
    const data = byId(jobData, cls.id);
    if (!data) continue;
    cls.name = data.name;
    cls.tier = data.tier;
    cls.maxLevel = data.maxLevel;
  }
}

export function hydrateState(raw) {
  const state = { ...createInitialState(), ...deepClone(raw) };
  state.version = CONFIG.version;
  state.ui = { ...createInitialState().ui, ...(state.ui ?? {}) };
  state.ui.registryFilters = { ...createInitialState().ui.registryFilters, ...(state.ui.registryFilters ?? {}) };
  state.ui.abilityFilters = { ...createInitialState().ui.abilityFilters, ...(state.ui.abilityFilters ?? {}) };
  state.ui.questFilters = { ...createInitialState().ui.questFilters, ...(state.ui.questFilters ?? {}) };
  state.ui.devMenuOpen ??= false;
  state.ui.creationFilters = { ...createInitialState().ui.creationFilters, ...(state.ui.creationFilters ?? {}) };
  state.meta = { ...baseMeta(), ...(state.meta ?? {}) };
  state.quests = { claimed: [], daily: { date: new Date().toISOString().slice(0, 10), roomsCleared: 0, enemyKills: 0 }, ...(state.quests ?? {}) };
  state.quests.claimed ??= [];
  state.quests.daily ??= { date: new Date().toISOString().slice(0, 10), roomsCleared: 0, enemyKills: 0 };
  if (state.player) {
    state.player.inventory ??= {};
    state.player.cooldowns ??= {};
    state.player.statusEffects ??= [];
    state.player.party ??= [];
    state.player.defeatedBosses ??= [];
    state.player.achievements ??= [];
    state.player.title ??= "Wanderer";
    state.player.unspentClassLevels ??= 0;
    state.player.equipment ??= Object.fromEntries(EQUIPMENT_SLOTS.map(slot => [slot, null]));
    for (const slot of EQUIPMENT_SLOTS) state.player.equipment[slot] ??= null;
    syncSavedClassLabels(state.player);
  }
  state.log ??= [];
  return state;
}
