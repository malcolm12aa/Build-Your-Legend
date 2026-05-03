import { MAPS } from "../data/maps.js";
import { ENEMIES, ELITES, BOSSES } from "../data/enemies.js";
import { EVENTS } from "../data/events.js";
import { SHOPS } from "../data/shops.js";
import { byId, choice, deepClone, randInt, weightedChoice, addLog, clamp } from "../core/utils.js";
import { startBattle } from "./battle.js";
import { grantEventReward } from "./rewards.js";
import { applyStatus } from "./effects.js";
import { gainXp, computeStats } from "./leveling.js";

export function exploreNextFloor(state) {
  if (!state.run?.active) return;
  const map = byId(MAPS, state.run.mapId) ?? MAPS[0];
  if (state.run.floor >= map.maxFloor) {
    addLog(state, "You have cleared the current tower route. Start another run to keep growing.");
    state.screen = "hub";
    return;
  }
  state.run.floor += 1;
  state.run.highestFloor = Math.max(state.run.highestFloor, state.run.floor);
  const floor = state.run.floor;

  if (map.bossFloors.includes(floor)) {
    const boss = createBoss(floor);
    startBattle(state, boss, "boss");
    return;
  }
  if (floor % map.shopEvery === 0) {
    state.ui.selectedShop = choice(SHOPS).id;
    state.screen = "shop";
    addLog(state, `A temporary shop appears on floor ${floor}.`);
    return;
  }
  if (floor % map.restEvery === 0) {
    restAtCamp(state);
    state.screen = "map";
    return;
  }
  if (floor % map.eliteEvery === 0) {
    startBattle(state, createElite(floor), "elite");
    return;
  }

  const roll = Math.random();
  if (roll < 0.68) startBattle(state, createEnemyForFloor(floor), "normal");
  else resolveRandomEvent(state);
}

export function createEnemyForFloor(floor) {
  const choices = ENEMIES.filter(enemy => enemy.minFloor <= floor).map(enemy => ({ ...enemy, weight: enemy.weight ?? 1 }));
  const template = deepClone(weightedChoice(choices));
  return scaleEnemy(template, floor, 1);
}

function createElite(floor) {
  const elite = choice(ELITES);
  const base = deepClone(byId(ENEMIES, elite.base) ?? ENEMIES[0]);
  const enemy = scaleEnemy(base, floor, elite.multiplier);
  enemy.id = elite.id;
  enemy.name = elite.name;
  enemy.skills = [...new Set([...(enemy.skills ?? []), elite.bonusSkill])];
  enemy.rewardDust = elite.rewardDust;
  return enemy;
}

function createBoss(floor) {
  const boss = deepClone(BOSSES.find(b => b.floor === floor) ?? BOSSES.at(-1));
  return scaleEnemy(boss, floor, 1);
}

function scaleEnemy(enemy, floor, multiplier = 1) {
  const scale = 1 + floor * 0.09;
  enemy.maxHp = Math.floor((enemy.stats.hp ?? 50) * scale * multiplier);
  enemy.hp = enemy.maxHp;
  for (const key of ["str", "dex", "int", "wis", "con", "cha"]) enemy.stats[key] = Math.floor((enemy.stats[key] ?? 1) * (1 + floor * 0.045) * multiplier);
  enemy.xp = Math.floor((enemy.xp ?? 30) * (1 + floor * 0.08) * multiplier);
  enemy.gold = enemy.gold?.map(v => Math.floor(v * (1 + floor * 0.05) * multiplier));
  enemy.statusEffects = [];
  return enemy;
}

export function restAtCamp(state) {
  const stats = computeStats(state.player);
  state.player.hp = clamp(state.player.hp + Math.floor(stats.maxHp * 0.45), 1, stats.maxHp);
  state.player.mana = clamp(state.player.mana + Math.floor(stats.maxMana * 0.45), 0, stats.maxMana);
  state.player.stamina = clamp(state.player.stamina + Math.floor(stats.maxStamina * 0.55), 0, stats.maxStamina);
  addLog(state, "You find a safe camp and recover some HP, mana, and stamina.");
}

export function resolveRandomEvent(state) {
  const event = deepClone(weightedChoice(EVENTS));
  state.ui.currentEvent = event;
  addLog(state, `<strong>${event.name}:</strong> ${event.text}`);
  if (event.type === "risk") {
    const damage = randInt(event.damage[0], event.damage[1]);
    state.player.hp = Math.max(1, state.player.hp - damage);
    if (event.status) applyStatus(state.player, event.status, 3);
    addLog(state, `The trap deals ${damage} damage, but you still claim the reward.`);
  }
  if (event.type === "restore") {
    const stats = computeStats(state.player);
    state.player.hp = clamp(state.player.hp + (event.restore.hp ?? 0), 1, stats.maxHp);
    state.player.mana = clamp(state.player.mana + (event.restore.mana ?? 0), 0, stats.maxMana);
    state.player.stamina = clamp(state.player.stamina + (event.restore.stamina ?? 0), 0, stats.maxStamina);
  }
  if (event.type === "xp") gainXp(state, event.xp ?? 25);
  grantEventReward(state, event);
  if (event.type === "recruit") state.screen = "recruit";
  else state.screen = "event";
}
