import { SKILLS } from "../data/skills.js";
import { ITEMS } from "../data/items.js";
import { byId, randInt, chance, addLog, clamp, choice } from "../core/utils.js";
import { computeStats, syncResourcesToStats } from "./leveling.js";
import { applyStatus, damageModsFromStatuses, getElementMultiplier, isTurnSkipped, tickStatuses } from "./effects.js";
import { grantBattleRewards } from "./rewards.js";
import { useItem } from "./inventory.js";
import { endRunDefeat } from "./run-manager.js";

function createEnemyIntent(enemy) {
  const skillId = choice(enemy.skills ?? []);
  const skill = byId(SKILLS, skillId);
  if (skill && chance(72)) {
    const statusEffect = (skill.effects ?? []).find(effect => effect.type === "status");
    return {
      type: "skill",
      skillId: skill.id,
      name: skill.name,
      element: skill.element,
      text: statusEffect
        ? `${enemy.name} is preparing ${skill.name} and may inflict ${statusEffect.status}.`
        : `${enemy.name} is preparing ${skill.name}.`
    };
  }
  return { type: "attack", name: "Basic Attack", element: "physical", text: `${enemy.name} intends to attack directly.` };
}

export function startBattle(state, enemy, battleType = "normal") {
  syncResourcesToStats(state.player);
  state.combat = {
    type: battleType,
    enemy,
    turn: "player",
    round: 1,
    enemyIntent: createEnemyIntent(enemy),
    message: `${enemy.name} blocks the path!`
  };
  state.screen = "battle";
  addLog(state, `<strong>${battleType.toUpperCase()} battle:</strong> ${enemy.name} appears.`);
}

export function playerBasicAttack(state) {
  if (!state.combat || state.combat.turn !== "player") return;
  const playerStats = computeStats(state.player);
  const enemy = state.combat.enemy;
  const base = randInt(4, 8) + playerStats.attack;
  const damage = dealDamage(state.player, enemy, base, "physical", playerStats, enemy.stats);
  addLog(state, `<span class="player-name">${state.player.name}</span> attacks for <strong>${damage}</strong> damage.`);
  afterPlayerAction(state);
}

export function playerUseSkill(state, skillId) {
  if (!state.combat || state.combat.turn !== "player") return;
  const skill = byId(SKILLS, skillId);
  if (!skill) return addLog(state, "That skill is not available yet.");
  if ((state.player.cooldowns?.[skill.id] ?? 0) > 0) return addLog(state, `${skill.name} is still on cooldown.`);
  if (!payResource(state.player, skill)) return addLog(state, `Not enough ${skill.resource}.`);
  state.player.cooldowns[skill.id] = skill.cooldown;
  executeSkill(state, state.player, state.combat.enemy, skill, true);
  afterPlayerAction(state);
}

export function playerUseItem(state, itemId) {
  if (!state.combat || state.combat.turn !== "player") return;
  const item = byId(ITEMS, itemId);
  if (!item || item.type !== "consumable") return;
  if (useItem(state, itemId, true)) afterPlayerAction(state);
}

function afterPlayerAction(state) {
  if (checkBattleEnd(state)) return;
  partyAct(state);
  if (checkBattleEnd(state)) return;
  state.combat.turn = "enemy";
  enemyTurn(state);
}

function partyAct(state) {
  for (const member of state.player.party ?? []) {
    if (state.combat.enemy.hp <= 0) return;
    const skill = byId(SKILLS, member.skill) ?? byId(SKILLS, "power_strike");
    const stats = member.stats;
    const base = Math.floor((skill.power ?? 10) * 0.65 + (stats.str ?? 2) + (stats.dex ?? 2) + (stats.int ?? 0));
    const damage = dealDamage(member, state.combat.enemy, base, skill.element, stats, state.combat.enemy.stats);
    addLog(state, `${member.name} uses ${skill.name} for ${damage} damage.`);
    if (skill.effects?.some(e => e.type === "heal") && chance(40)) {
      const playerStats = computeStats(state.player);
      const heal = Math.floor(playerStats.maxHp * 0.18);
      state.player.hp = clamp(state.player.hp + heal, 0, playerStats.maxHp);
      addLog(state, `${member.name} heals you for ${heal} HP.`);
    }
    if (member.role === "Support" && chance(30)) {
      applyStatus(state.player, "focus", 2);
      addLog(state, `${member.name}'s support grants Focus.`);
    }
  }
}

function enemyTurn(state) {
  const enemy = state.combat.enemy;
  const player = state.player;
  const playerStats = computeStats(player);
  for (const msg of tickStatuses(enemy, { maxHp: enemy.maxHp })) addLog(state, msg);
  if (checkBattleEnd(state)) return;
  const skip = isTurnSkipped(enemy);
  if (skip) {
    addLog(state, `${enemy.name} is ${skip} and loses the turn.`);
    startPlayerTurn(state);
    return;
  }
  const intent = state.combat.enemyIntent ?? createEnemyIntent(enemy);
  if (intent.type === "skill") {
    const skill = byId(SKILLS, intent.skillId);
    if (skill) executeSkill(state, enemy, player, skill, false);
  } else {
    const base = randInt(3, 7) + Math.floor((enemy.stats.str ?? 2) * 1.8);
    let damage = dealDamage(enemy, player, base, "physical", enemy.stats, playerStats);
    const tank = (player.party ?? []).find(member => member.role === "Tank");
    if (tank && chance(35)) {
      const blocked = Math.max(1, Math.floor(damage * 0.18));
      player.hp = clamp(player.hp + blocked, 0, playerStats.maxHp);
      damage -= blocked;
      addLog(state, `${tank.name} intercepts ${blocked} damage.`);
    }
    addLog(state, `<span class="enemy-name">${enemy.name}</span> attacks for <strong>${damage}</strong> damage.`);
  }
  for (const msg of tickStatuses(player, playerStats)) addLog(state, msg);
  if (checkBattleEnd(state)) return;
  startPlayerTurn(state);
}

function startPlayerTurn(state) {
  for (const key of Object.keys(state.player.cooldowns ?? {})) {
    state.player.cooldowns[key] = Math.max(0, state.player.cooldowns[key] - 1);
  }
  state.player.stamina = clamp(state.player.stamina + 8, 0, computeStats(state.player).maxStamina);
  state.combat.turn = "player";
  state.combat.round += 1;
  state.combat.enemyIntent = createEnemyIntent(state.combat.enemy);
}

function executeSkill(state, attacker, defender, skill, isPlayer) {
  const attackerStats = isPlayer ? computeStats(attacker) : attacker.stats;
  const defenderStats = isPlayer ? defender.stats : computeStats(defender);
  let totalDamage = 0;
  if (skill.power > 0) {
    const offensive = skill.kind === "spell" ? (attackerStats.magic ?? attackerStats.int ?? 3) : (attackerStats.attack ?? attackerStats.str ?? 3);
    const base = randInt(2, 8) + skill.power + Math.floor(offensive * 0.9);
    totalDamage = dealDamage(attacker, defender, base, skill.element, attackerStats, defenderStats);
    addLog(state, `${attacker.name} uses <strong>${skill.name}</strong> for <strong>${totalDamage}</strong> ${skill.element} damage.`);
  } else {
    addLog(state, `${attacker.name} uses <strong>${skill.name}</strong>.`);
  }
  for (const effect of skill.effects ?? []) {
    if (effect.type === "status" && chance(effect.chance ?? 100)) {
      applyStatus(defender, effect.status, effect.duration ?? 2);
      addLog(state, `${defender.name} is afflicted with ${effect.status}.`);
    }
    if (effect.type === "statusSelf" && chance(effect.chance ?? 100)) {
      applyStatus(attacker, effect.status, effect.duration ?? 2);
      addLog(state, `${attacker.name} gains ${effect.status}.`);
    }
    if (effect.type === "heal") {
      const targetStats = isPlayer ? computeStats(attacker) : attacker.stats;
      const maxHp = targetStats.maxHp ?? attacker.maxHp ?? 80;
      const heal = Math.floor(maxHp * effect.scale);
      attacker.hp = clamp(attacker.hp + heal, 0, maxHp);
      addLog(state, `${attacker.name} heals for ${heal} HP.`);
    }
    if (effect.type === "drain" && totalDamage > 0) {
      const maxHp = isPlayer ? computeStats(attacker).maxHp : attacker.maxHp;
      const heal = Math.floor(totalDamage * effect.ratio);
      attacker.hp = clamp(attacker.hp + heal, 0, maxHp);
      addLog(state, `${attacker.name} drains ${heal} HP.`);
    }
    if (effect.type === "restore") {
      const stats = isPlayer ? computeStats(attacker) : attacker.stats;
      const max = effect.resource === "mana" ? stats.maxMana : stats.maxStamina;
      attacker[effect.resource] = clamp((attacker[effect.resource] ?? 0) + effect.amount, 0, max ?? 999);
      addLog(state, `${attacker.name} restores ${effect.amount} ${effect.resource}.`);
    }
  }
}

function payResource(player, skill) {
  if (!skill.resource || skill.resource === "none") return true;
  if ((player[skill.resource] ?? 0) < skill.cost) return false;
  player[skill.resource] -= skill.cost;
  return true;
}

function dealDamage(attacker, defender, base, element, attackerStats, defenderStats) {
  const defense = Math.floor((defenderStats.defense ?? defenderStats.con ?? 0) * 0.6);
  let damage = Math.max(1, base - defense);
  damage *= getElementMultiplier(element, defender);
  damage *= damageModsFromStatuses(attacker, defender);
  damage = Math.max(1, Math.floor(damage));
  defender.hp = clamp(defender.hp - damage, 0, defender.maxHp ?? defenderStats.maxHp ?? 9999);
  return damage;
}

function checkBattleEnd(state) {
  const enemy = state.combat.enemy;
  if (enemy.hp <= 0) {
    addLog(state, `<strong>${enemy.name} defeated.</strong>`);
    state.meta.enemyKills = (state.meta.enemyKills ?? 0) + 1;
    if (state.combat.type === "elite") state.meta.eliteKills = (state.meta.eliteKills ?? 0) + 1;
    if (state.combat.type === "boss") {
      state.meta.bossKills += 1;
      if (!state.player.defeatedBosses.includes(enemy.id)) state.player.defeatedBosses.push(enemy.id);
      addLog(state, `<strong>Boss defeated:</strong> secret class requirements may have changed.`);
    }
    grantBattleRewards(state, enemy);
    state.run.roomsCleared += 1;
    state.combat = null;
    state.screen = "map";
    return true;
  }
  if (state.player.hp <= 0) {
    endRunDefeat(state);
    return true;
  }
  return false;
}
