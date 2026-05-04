import { CONFIG } from "../config.js";
import { RACES, RACE_PATHS } from "../data/races.js";
import { JOBS, JOB_PATHS } from "../data/jobs.js";
import { SKILLS } from "../data/skills.js";
import { ITEMS, EQUIPMENT_SLOTS, SET_BONUSES } from "../data/items.js";
import { SHOPS } from "../data/shops.js";
import { MAPS } from "../data/maps.js";
import { ACHIEVEMENTS } from "../data/achievements.js";
import { UPDATE_NOTES } from "../data/updates.js";
import { getSaveSlots } from "../core/save.js";
import { byId, titleCase, formatStat } from "../core/utils.js";
import { computeStats, computeCreationPreview, getTotalLevel, xpToNext, getAvailableAdvancements, getActiveSynergies, getEquippedSetBonuses } from "../systems/leveling.js";
import { isAchievementUnlocked } from "../systems/achievements.js";
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
        ${button("Load Game", "openLoadMenu", "", "secondary")}
        ${button("Update Notes", "go", "updates", "secondary")}
      </div>
    </div>
    ${newsCard()}
  </section>`;
}

function newsCard() {
  return `<section class="card">
    <h2>Improvement Build</h2>
    <p>Total Level = Race Levels + Job Levels. This version adds 5 save slots, class trees, synergies, set bonuses, achievements, enemy intent, expanded events, recruit personality, and update notes.</p>
  </section>`;
}

export function saveMenu(state) {
  const mode = state.ui.saveMenuMode ?? "load";
  const slots = getSaveSlots();
  const backTarget = state.player ? "hub" : "main-menu";
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Save / Load Menu</h1><p class="subtitle">Five browser save slots are stored with localStorage on this device/browser. Current mode: <span class="kpi">${titleCase(mode)}</span>.</p></div>
    <div class="actions">
      ${button("Save Mode", "openSaveMenu", "", mode === "save" ? "ghost" : "secondary")}
      ${button("Load Mode", "openLoadMenu", "", mode === "load" ? "ghost" : "secondary")}
      ${button("Back", "go", backTarget, "secondary")}
    </div>
    <section class="grid auto">${slots.map(slot => saveSlotCard(slot, mode, Boolean(state.player))).join("")}</section>
    ${combatLog(state)}
  </section>`;
}

function saveSlotCard(slot, mode, canSave) {
  const date = slot.savedAt ? new Date(slot.savedAt).toLocaleString() : "Never";
  const detail = slot.exists
    ? `<p><strong>${escapeHtml(slot.title ? `${slot.title} ` : "")}${escapeHtml(slot.name)}</strong></p><p class="small">Lv ${slot.totalLevel} · ${escapeHtml(slot.raceName)} / ${escapeHtml(slot.jobName)} · ${slot.gold} gold · Floor ${slot.floor}</p><p class="small">Saved: ${date}</p>`
    : `<p><strong>Empty Slot</strong></p><p class="small">No save data found here.</p>`;
  const primary = mode === "save"
    ? button(canSave ? "Save Here" : "Create Character First", "saveSlot", slot.slot, canSave ? "" : "ghost")
    : button(slot.exists ? "Load Slot" : "Empty", "loadSlot", slot.slot, slot.exists ? "" : "ghost");
  return `<article class="card save-slot ${slot.exists ? "filled" : ""}">
    <h3>Slot ${slot.slot}</h3>${detail}
    <div class="actions">${primary}${button("Delete", "deleteSlot", slot.slot, "danger")}</div>
  </article>`;
}

export function characterCreate(state) {
  const cc = state.characterCreation;
  return `<section class="screen">
    <div class="hero"><h1>Create Your Legend</h1><p class="subtitle">Choose 1 starting race and 1 starting job. The preview updates instantly so each build feels different before you begin.</p></div>
    <section class="grid two"><div class="card"><label>Character Name</label><input data-input="characterName" value="${escapeHtml(cc.name)}" maxlength="24" /></div>${creationPreview(cc)}</section>
    <h2>Starting Races</h2><div class="grid auto">${RACES.map(raceCard(cc.raceId, "selectRace")).join("")}</div>
    <h2>Starting Jobs</h2><div class="grid auto">${JOBS.map(jobCard(cc.jobId, "selectJob")).join("")}</div>
    <div class="actions">${button("Begin Legend", "startCharacter")} ${button("Back", "go", "main-menu", "secondary")}</div>
  </section>`;
}

function creationPreview(cc) {
  const preview = computeCreationPreview(cc.raceId, cc.jobId);
  const skills = preview.skillIds.map(id => byId(SKILLS, id)?.name ?? titleCase(id)).join(", ");
  const synergyText = preview.synergies.length
    ? preview.synergies.map(s => `<span class="pill synergy">${s.name}</span>`).join(" ")
    : `<span class="pill">No special synergy</span>`;
  return `<div class="card preview-card"><h2>Build Preview</h2>
    <p><strong>${preview.race.name}</strong> + <strong>${preview.job.name}</strong></p>
    ${statGrid(preview.stats)}
    <p class="small"><strong>Starting Skills:</strong> ${skills}</p>
    <p class="small"><strong>Synergy:</strong> ${synergyText}</p>
  </div>`;
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
  const synergies = getActiveSynergies(p);
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Guild Hub</h1><p class="subtitle">Prepare, spend class levels, recruit allies, buy supplies, or enter the shifting tower.</p></div>
    <section class="grid two">
      <div class="card"><h2>${escapeHtml(p.title)} ${escapeHtml(p.name)}</h2><p>Total Level <span class="kpi">${getTotalLevel(p)}</span> · Gold <span class="kpi">${p.gold}</span> · Relic Dust <span class="kpi">${state.meta.relicDust}</span></p>${resourceBars(p, stats)}</div>
      <div class="card"><h2>Next Goal</h2><p>Gain XP in the dungeon, then spend class points on race or job levels. Maxed base classes can unlock advanced paths.</p><p class="small"><strong>Active Synergies:</strong> ${synergies.length ? synergies.map(s => s.name).join(", ") : "None"}</p><div class="actions">${button("Enter Dungeon", "startRun")} ${button("Progression", "go", "progression", "secondary")}</div></div>
    </section>
    ${partyCard(p)}
    ${combatLog(state)}
  </section>`;
}

function resourceBars(p, stats) {
  return `${bar("HP", p.hp, stats.maxHp, "hp")}${bar("Mana", p.mana, stats.maxMana, "mp")}${bar("Stamina", p.stamina, stats.maxStamina, "stamina")}${bar("XP", p.xp, xpToNext(p), "xp")}`;
}

function partyCard(player) {
  if (!player.party?.length) return `<section class="card"><h2>Party</h2><p class="small">No recruits yet. Dungeon events can offer party members.</p></section>`;
  return `<section class="card"><h2>Party</h2><div class="grid auto">${player.party.map(member => `<article class="mini-card"><h3>${member.name}</h3><p><span class="pill">${member.role}</span></p><p class="small">${member.passive ?? "No passive listed."}</p></article>`).join("")}</div></section>`;
}

export function statusScreen(state) {
  const p = state.player;
  const stats = computeStats(p);
  const synergies = getActiveSynergies(p);
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Character Status</h1><p class="subtitle">Overall Level ${getTotalLevel(p)} = ${p.raceLevels.reduce((a,c)=>a+c.level,0)} race levels + ${p.jobLevels.reduce((a,c)=>a+c.level,0)} job levels.</p></div>
    <section class="grid two">
      <div class="card"><h2>${escapeHtml(p.title)} ${escapeHtml(p.name)}</h2>${resourceBars(p, stats)}<p>Status: ${statusPills(p.statusEffects)}</p></div>
      <div class="card"><h2>Stats</h2>${statGrid(stats)}</div>
    </section>
    <section class="card"><h2>Current Build</h2>${classRows(p.raceLevels, "Race")}${classRows(p.jobLevels, "Job")}</section>
    <section class="card"><h2>Build Synergies</h2>${synergies.length ? synergies.map(s => `<article class="mini-card"><h3>${s.name}</h3><p>${s.description}</p><p class="small">Bonus: ${statsText(s.stats)}</p></article>`).join("") : `<p class="small">No active race/job synergy yet.</p>`}</section>
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
    <section class="grid two">
      <div class="card"><h2>Race Evolution Tree</h2>${classTree(RACES, RACE_PATHS, p.raceLevels)}</div>
      <div class="card"><h2>Job Class Tree</h2>${classTree(JOBS, JOB_PATHS, p.jobLevels)}</div>
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

function classTree(baseList, paths, knownLevels) {
  const known = new Set((knownLevels ?? []).map(cls => cls.id));
  return `<div class="tree-list">${baseList.map(base => {
    const children = paths.filter(path => path.from === base.id);
    return `<div class="tree-node ${known.has(base.id) ? "known" : ""}"><strong>${base.name}</strong> <span class="pill">${base.tier}</span>
      <div class="tree-children">${children.map(child => `<div class="tree-child ${known.has(child.id) ? "known" : "locked"}">↳ ${child.name} <span class="pill">${child.tier}</span><div class="small">Req: ${reqText(child.requirements)}</div></div>`).join("") || `<div class="small">No listed path yet.</div>`}</div>
    </div>`;
  }).join("")}</div>`;
}

export function skillsScreen(state) {
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Skills & Spells</h1><p class="subtitle">Physical skills use stamina. Magic spells use mana. Cooldowns matter in long boss fights.</p></div>${skillList(state.player)}</section>`;
}

export function inventoryScreen(state) {
  const p = state.player;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Inventory & Equipment</h1><p class="subtitle">Equip gear to modify stats. Wearing multiple pieces from a set unlocks set bonuses.</p></div>
    <section class="grid two"><div class="card"><h2>Equipment</h2>${equipmentRows(p)}</div><div class="card"><h2>Inventory</h2>${inventoryList(p)}</div></section>
    <section class="card"><h2>Set Bonuses</h2>${setBonusRows(p)}</section>
  </section>`;
}

function equipmentRows(p) {
  return EQUIPMENT_SLOTS.map(slot => {
    const item = byId(ITEMS, p.equipment?.[slot]);
    const set = item?.set ? `<span class="pill">${titleCase(item.set)}</span>` : "";
    return `<div class="item-row"><div><strong>${titleCase(slot)}</strong><p class="small">${item ? `${item.name} ${set}` : "Empty"}</p></div>${item ? button("Unequip", "unequipSlot", slot, "secondary") : ""}</div>`;
  }).join("");
}

function setBonusRows(player) {
  const active = getEquippedSetBonuses(player);
  const counts = {};
  for (const itemId of Object.values(player.equipment ?? {})) {
    const item = byId(ITEMS, itemId);
    if (item?.set) counts[item.set] = (counts[item.set] ?? 0) + 1;
  }
  return SET_BONUSES.map(set => `<article class="mini-card"><h3>${set.name} <span class="pill">${counts[set.id] ?? 0} pieces</span></h3>${set.thresholds.map(t => `<p class="small ${active.some(a => a.setId === set.id && a.pieces >= t.pieces) ? "active-bonus" : ""}">${t.pieces} pieces: ${t.description}</p>`).join("")}</article>`).join("");
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
  const set = item.set ? `<span class="pill">Set: ${titleCase(item.set)}</span>` : "";
  return `<div class="item-row card"><div><strong>${item.name}</strong> <span class="pill">${item.price} gold</span> ${set}<p>${item.description}</p></div>${button(gold >= item.price ? "Buy" : "Too Expensive", "buyItem", item.id, gold >= item.price ? "" : "ghost")}</div>`;
}

export function mapScreen(state) {
  const map = byId(MAPS, state.run?.mapId) ?? MAPS[0];
  if (!state.run) {
    return `<section class="screen">${nav(state)}<div class="hero"><h1>Map / Dungeon</h1><p class="subtitle">No run active. Start a run from the hub.</p></div><div class="actions">${button("Start Run", "startRun")}</div></section>`;
  }
  return `<section class="screen">${nav(state)}<div class="hero"><h1>${map.name}</h1><p class="subtitle">Floor ${state.run.floor}/${map.maxFloor}. Boss floors: ${map.bossFloors.join(", ")}.</p></div>
    <section class="grid two"><div class="card"><h2>Run Progress</h2><p>Rooms cleared: <span class="kpi">${state.run.roomsCleared}</span></p><p>Possible rooms: battles, elites, bosses, merchants, shrines, portals, traps, lore discoveries, training rooms, and recruit events.</p></div><div class="card"><h2>Actions</h2><div class="actions">${button("Explore Next Floor", "explore")} ${button("Rest Briefly", "rest", "", "secondary")} ${button("Leave Run", "leaveRun", "", "ghost")}</div></div></section>
    ${combatLog(state)}
  </section>`;
}

export function battleScreen(state) {
  const p = state.player;
  const stats = computeStats(p);
  const enemy = state.combat.enemy;
  const intent = state.combat.enemyIntent;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Battle</h1><p class="subtitle">Round ${state.combat.round}. Turn: <span class="kpi">${state.combat.turn}</span></p></div>
    <section class="combat-layout">
      <div class="card"><h2 class="player-name">${p.name}</h2>${resourceBars(p, stats)}<p>${statusPills(p.statusEffects)}</p><div class="actions">${button("Attack", "attack")} ${button("Inventory", "go", "inventory", "secondary")}</div><h3>Skills</h3>${skillList(p, "battle")}</div>
      <div class="card"><h2 class="enemy-name">${enemy.name}</h2>${bar("HP", enemy.hp, enemy.maxHp, "hp")}<p><span class="pill">${enemy.element}</span> ${statusPills(enemy.statusEffects)}</p><p class="small">Weak: ${(enemy.weaknessesElements ?? []).join(", ") || "Unknown"} · Resist: ${(enemy.resists ?? []).join(", ") || "None"}</p><div class="intent-card"><h3>Enemy Intent</h3><p>${intent?.text ?? "The enemy is watching you."}</p><span class="pill">${intent?.element ?? "unknown"}</span></div><h3>Battle Items</h3>${inventoryList(p, "battle")}</div>
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
    <section class="card"><h2>${recruit.name}</h2><p>${recruit.description}</p><p><span class="pill">${recruit.role}</span></p><p class="small"><strong>Personality:</strong> ${recruit.personality ?? "Unknown"}</p><p class="small"><strong>Passive:</strong> ${recruit.passive ?? "No passive listed."}</p><div class="actions">${button("Recruit", "recruit", recruit.id)} ${button("Continue Alone", "skipRecruit", "", "secondary")}</div></section>
  </section>`;
}

export function achievementsScreen(state) {
  const p = state.player;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Achievements & Titles</h1><p class="subtitle">Unlocked achievements grant titles. Current title: <span class="kpi">${escapeHtml(p.title ?? "Wanderer")}</span></p></div>
    <section class="grid auto">${ACHIEVEMENTS.map(a => achievementCard(p, a)).join("")}</section>
  </section>`;
}

function achievementCard(player, achievement) {
  const unlocked = isAchievementUnlocked(player, achievement.id);
  return `<article class="card ${unlocked ? "selected" : "locked-card"}"><h3>${achievement.name}</h3><p>${achievement.description}</p><p><span class="pill">Title: ${achievement.title}</span></p>${unlocked ? button(player.title === achievement.title ? "Equipped" : "Equip Title", "selectTitle", achievement.id, player.title === achievement.title ? "ghost" : "secondary") : `<p class="small">Locked</p>`}</article>`;
}

export function updatesScreen(state) {
  const backTarget = state.player ? "hub" : "main-menu";
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Update Notes</h1><p class="subtitle">Versioned change log for testers and future GitHub Pages updates.</p></div>
    ${UPDATE_NOTES.map(update => `<section class="card"><h2>${update.version}</h2><p class="small">${update.date}</p><ul>${update.notes.map(note => `<li>${note}</li>`).join("")}</ul></section>`).join("")}
    <div class="actions">${button("Back", "go", backTarget, "secondary")}</div>
  </section>`;
}

function statsText(stats = {}) {
  return Object.entries(stats).map(([key, value]) => `${value >= 0 ? "+" : ""}${value} ${formatStat(key)}`).join(", ") || "None";
}

export function notFound(state) {
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Unknown Screen</h1><p>Something tried to open a missing screen.</p></div>${button("Return Hub", "go", state.player ? "hub" : "main-menu")}</section>`;
}
