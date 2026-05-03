import { CONFIG } from "../config.js";
import { RACES } from "../data/races.js";
import { JOBS } from "../data/jobs.js";
import { ITEMS, EQUIPMENT_SLOTS } from "../data/items.js";
import { SHOPS } from "../data/shops.js";
import { MAPS } from "../data/maps.js";
import { byId, titleCase } from "../core/utils.js";
import { computeStats, getTotalLevel, xpToNext, getAvailableAdvancements, getKnownClassData } from "../systems/leveling.js";
import { prepareRecruitOffer } from "../systems/party.js";
import { button, nav, bar, statGrid, statusPills, inventoryList, skillList, combatLog } from "./components.js";
import { escapeHtml } from "./dom.js";

export function mainMenu(state) {
  return `<section class="screen">
    <div class="hero">
      <p class="version">${CONFIG.version}</p>
      <h1 class="title">${CONFIG.title}</h1>
      <p class="subtitle">An original fantasy text RPG with light anime-style class progression, roguelike dungeon runs, and YGGDRASIL-inspired race/job levels.</p>
      <div class="actions">
        ${button("New Game", "newGame")}
        ${button("Load Save", "loadGame", "", "secondary")}
        ${button("Delete Save", "deleteSave", "", "danger")}
      </div>
    </div>
    ${newsCard()}
  </section>`;
}

function newsCard() {
  return `<section class="card">
    <h2>Foundation Build</h2>
    <p>Total Level = Race Levels + Job Levels. Dungeon defeat resets your current run and costs a little gold, but permanent character growth remains.</p>
  </section>`;
}

export function characterCreate(state) {
  const cc = state.characterCreation;
  return `<section class="screen">
    <div class="hero"><h1>Create Your Legend</h1><p class="subtitle">Choose 1 starting race and 1 starting job. You can unlock advanced paths later by maxing classes and meeting secret requirements.</p></div>
    <section class="card"><label>Character Name</label><input data-input="characterName" value="${escapeHtml(cc.name)}" maxlength="24" /></section>
    <h2>Starting Races</h2><div class="grid auto">${RACES.map(raceCard(cc.raceId, "selectRace")).join("")}</div>
    <h2>Starting Jobs</h2><div class="grid auto">${JOBS.map(jobCard(cc.jobId, "selectJob")).join("")}</div>
    <div class="actions">${button("Begin Legend", "startCharacter")} ${button("Back", "go", "main-menu", "secondary")}</div>
  </section>`;
}

function raceCard(selectedId, action) {
  return item => `<article class="card ${selectedId === item.id ? "selected" : ""}">
    <h3>${item.name}</h3><p>${item.description}</p>
    <p><span class="pill">Base cap ${item.maxLevel}</span></p>
    <p class="small"><strong>Strong:</strong> ${item.strengths.join(", ")}</p>
    <p class="small"><strong>Weak:</strong> ${item.weaknesses.join(", ")}</p>
    ${button(selectedId === item.id ? "Selected" : "Choose", action, item.id, selectedId === item.id ? "ghost" : "secondary")}
  </article>`;
}
const jobCard = raceCard;

export function hub(state) {
  const p = state.player;
  const stats = computeStats(p);
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Guild Hub</h1><p class="subtitle">Prepare, spend class levels, recruit allies, buy supplies, or enter the shifting tower.</p></div>
    <section class="grid two">
      <div class="card"><h2>${p.name}</h2><p>Total Level <span class="kpi">${getTotalLevel(p)}</span> · Gold <span class="kpi">${p.gold}</span> · Relic Dust <span class="kpi">${state.meta.relicDust}</span></p>${resourceBars(p, stats)}</div>
      <div class="card"><h2>Next Goal</h2><p>Gain XP in the dungeon, then spend class points on race or job levels. Maxed base classes can unlock advanced paths.</p><div class="actions">${button("Enter Dungeon", "startRun")} ${button("Progression", "go", "progression", "secondary")}</div></div>
    </section>
    ${combatLog(state)}
  </section>`;
}

function resourceBars(p, stats) {
  return `${bar("HP", p.hp, stats.maxHp, "hp")}${bar("Mana", p.mana, stats.maxMana, "mp")}${bar("Stamina", p.stamina, stats.maxStamina, "stamina")}${bar("XP", p.xp, xpToNext(p), "xp")}`;
}

export function statusScreen(state) {
  const p = state.player;
  const stats = computeStats(p);
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Character Status</h1><p class="subtitle">Overall Level ${getTotalLevel(p)} = ${p.raceLevels.reduce((a,c)=>a+c.level,0)} race levels + ${p.jobLevels.reduce((a,c)=>a+c.level,0)} job levels.</p></div>
    <section class="grid two">
      <div class="card"><h2>${p.name}</h2>${resourceBars(p, stats)}<p>Status: ${statusPills(p.statusEffects)}</p></div>
      <div class="card"><h2>Stats</h2>${statGrid(stats)}</div>
    </section>
    <section class="card"><h2>Current Build</h2>${classRows(p.raceLevels, "Race")}${classRows(p.jobLevels, "Job")}</section>
  </section>`;
}

function classRows(classes, label) {
  return `<h3>${label} Levels</h3>${classes.map(cls => `<div class="class-row"><div><strong>${cls.name}</strong> <span class="pill">${cls.tier}</span><div class="small">Level ${cls.level}/${cls.maxLevel}</div></div></div>`).join("")}`;
}

export function progressionScreen(state) {
  const p = state.player;
  const raceAdv = getAvailableAdvancements(state, "race");
  const jobAdv = getAvailableAdvancements(state, "job");
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Race / Job Progression</h1><p class="subtitle">Unspent class levels: <span class="kpi">${p.unspentClassLevels}</span>. Base max is 15, Advanced/Specialist max is 10, Rare/Hidden max is 5.</p></div>
    <section class="grid two">
      <div class="card"><h2>Race Levels</h2>${progressRows(p.raceLevels, "race")}</div>
      <div class="card"><h2>Job Levels</h2>${progressRows(p.jobLevels, "job")}</div>
    </section>
    <section class="grid two">
      <div class="card"><h2>Race Unlocks</h2>${advancementRows(raceAdv, "race")}</div>
      <div class="card"><h2>Job Unlocks</h2>${advancementRows(jobAdv, "job")}</div>
    </section>
  </section>`;
}

function progressRows(classes, track) {
  return classes.map((cls, index) => `<div class="class-row card">
    <div><strong>${cls.name}</strong> <span class="pill">${cls.tier}</span><p class="small">Level ${cls.level}/${cls.maxLevel}</p></div>
    ${button("+ Level", "spendPoint", `${track}:${index}`, cls.level >= cls.maxLevel ? "ghost" : "secondary")}
  </div>`).join("");
}

function reqText(req = {}) {
  const parts = [];
  if (req.classLevel) parts.push(`source level ${req.classLevel}`);
  if (req.gold) parts.push(`${req.gold} gold`);
  if (req.bossKills) parts.push(`${req.bossKills} boss kills`);
  if (req.relicDust) parts.push(`${req.relicDust} relic dust`);
  return parts.join(", ") || "none";
}

function advancementRows(paths, track) {
  if (!paths.length) return `<p class="small">No visible paths yet. Max your current classes or defeat bosses to reveal more.</p>`;
  return paths.map(path => `<article class="card">
    <h3>${path.name} <span class="pill">${path.tier}</span></h3><p>${path.description}</p>
    <p class="small">From: ${path.sourceName} · Requirements: ${reqText(path.requirements)}</p>
    ${button(path.canUnlock ? "Unlock Path" : "Locked", "addClass", `${track}:${path.id}`, path.canUnlock ? "" : "ghost")}
  </article>`).join("");
}

export function skillsScreen(state) {
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Skills & Spells</h1><p class="subtitle">Physical skills use stamina. Magic spells use mana. Cooldowns matter in long boss fights.</p></div>${skillList(state.player)}</section>`;
}

export function inventoryScreen(state) {
  const p = state.player;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Inventory & Equipment</h1><p class="subtitle">Equip gear to modify stats. Consumables work in and out of battle.</p></div>
    <section class="grid two"><div class="card"><h2>Equipment</h2>${equipmentRows(p)}</div><div class="card"><h2>Inventory</h2>${inventoryList(p)}</div></section>
  </section>`;
}

function equipmentRows(p) {
  return EQUIPMENT_SLOTS.map(slot => {
    const item = byId(ITEMS, p.equipment?.[slot]);
    return `<div class="item-row"><div><strong>${titleCase(slot)}</strong><p class="small">${item ? item.name : "Empty"}</p></div>${item ? button("Unequip", "unequipSlot", slot, "secondary") : ""}</div>`;
  }).join("");
}

export function shopScreen(state) {
  const shop = byId(SHOPS, state.ui.selectedShop) ?? SHOPS[0];
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Shop</h1><p class="subtitle">Gold: <span class="kpi">${state.player.gold}</span>. Shops can appear during dungeon runs too.</p></div>
    <div class="actions">${SHOPS.map(s => button(s.name, "selectShop", s.id, s.id === shop.id ? "ghost" : "secondary")).join("")}</div>
    <section class="card"><h2>${shop.name}</h2><p>${shop.description}</p>${shop.stock.map(itemId => shopItem(itemId, state.player.gold)).join("")}</section>
  </section>`;
}

function shopItem(itemId, gold) {
  const item = byId(ITEMS, itemId);
  return `<div class="item-row card"><div><strong>${item.name}</strong> <span class="pill">${item.price} gold</span><p>${item.description}</p></div>${button(gold >= item.price ? "Buy" : "Too Expensive", "buyItem", item.id, gold >= item.price ? "" : "ghost")}</div>`;
}

export function mapScreen(state) {
  const map = byId(MAPS, state.run?.mapId) ?? MAPS[0];
  if (!state.run) {
    return `<section class="screen">${nav(state)}<div class="hero"><h1>Map / Dungeon</h1><p class="subtitle">No run active. Start a run from the hub.</p></div><div class="actions">${button("Start Run", "startRun")}</div></section>`;
  }
  return `<section class="screen">${nav(state)}<div class="hero"><h1>${map.name}</h1><p class="subtitle">Floor ${state.run.floor}/${map.maxFloor}. Boss floors: ${map.bossFloors.join(", ")}.</p></div>
    <section class="grid two"><div class="card"><h2>Run Progress</h2><p>Rooms cleared: <span class="kpi">${state.run.roomsCleared}</span></p><p>Next floors may include random encounters, events, shops, elites, rest points, or bosses.</p></div><div class="card"><h2>Actions</h2><div class="actions">${button("Explore Next Floor", "explore")} ${button("Rest Briefly", "rest", "", "secondary")} ${button("Leave Run", "leaveRun", "", "ghost")}</div></div></section>
    ${combatLog(state)}
  </section>`;
}

export function battleScreen(state) {
  const p = state.player;
  const stats = computeStats(p);
  const enemy = state.combat.enemy;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Battle</h1><p class="subtitle">Round ${state.combat.round}. Turn: <span class="kpi">${state.combat.turn}</span></p></div>
    <section class="combat-layout">
      <div class="card"><h2 class="player-name">${p.name}</h2>${resourceBars(p, stats)}<p>${statusPills(p.statusEffects)}</p><div class="actions">${button("Attack", "attack")} ${button("Inventory", "go", "inventory", "secondary")}</div><h3>Skills</h3>${skillList(p, "battle")}</div>
      <div class="card"><h2 class="enemy-name">${enemy.name}</h2>${bar("HP", enemy.hp, enemy.maxHp, "hp")}<p><span class="pill">${enemy.element}</span> ${statusPills(enemy.statusEffects)}</p><p class="small">Weak: ${(enemy.weaknessesElements ?? []).join(", ") || "Unknown"} · Resist: ${(enemy.resists ?? []).join(", ") || "None"}</p><h3>Battle Items</h3>${inventoryList(p, "battle")}</div>
    </section>
    ${combatLog(state)}
  </section>`;
}

export function eventScreen(state) {
  const event = state.ui.currentEvent;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>${event?.name ?? "Dungeon Event"}</h1><p class="subtitle">${event?.text ?? "The dungeon shifts around you."}</p></div><div class="actions">${button("Continue", "go", "map")}</div>${combatLog(state)}</section>`;
}

export function recruitScreen(state) {
  const recruit = state.ui.offeredRecruit ?? prepareRecruitOffer(state);
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Recruit Encounter</h1><p class="subtitle">A party member can help in battle. Current party size: ${state.player.party.length}/${CONFIG.partyLimit}</p></div>
    <section class="card"><h2>${recruit.name}</h2><p>${recruit.description}</p><p><span class="pill">${recruit.role}</span></p><div class="actions">${button("Recruit", "recruit", recruit.id)} ${button("Continue Alone", "skipRecruit", "", "secondary")}</div></section>
  </section>`;
}

export function notFound(state) {
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Unknown Screen</h1><p>Something tried to open a missing screen.</p></div>${button("Return Hub", "go", "hub")}</section>`;
}
