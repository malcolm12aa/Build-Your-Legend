import { ITEMS } from "../data/items.js";
import { SKILLS } from "../data/skills.js";
import { byId, formatStat, titleCase } from "../core/utils.js";
import { BASIC_ABILITIES, formatBasicAbility } from "../systems/basic-abilities.js";
import { STATUS_INFO } from "../systems/effects.js";

export function button(label, action, value = "", cls = "") {
  return `<button class="${cls}" data-action="${action}" data-value="${value}">${label}</button>`;
}

export function nav(state) {
  if (!state.player) return "";
  return `<nav class="navbar">
    ${button("Hub", "go", "hub", "secondary")}
    ${button("Status / Class", "go", "status", "secondary")}
    ${button("Registry", "go", "class-registry", "secondary")}
    ${button("Skills", "go", "skills", "secondary")}
    ${button("Inventory", "go", "inventory", "secondary")}
    ${button("Shop", "go", "shop", "secondary")}
    ${button("Map", "go", "map", "secondary")}
    ${button("Achievements", "go", "achievements", "secondary")}
    ${button("Updates", "go", "updates", "secondary")}
    ${button("Save/Load", "openSaveMenu", "", "ghost")}
  </nav>${devMenu(state)}`;
}

function devMenu(state) {
  const open = Boolean(state.ui?.devMenuOpen);
  return `<button class="dev-fab" data-action="toggleDevMenu" title="Open testing menu" aria-label="Open testing menu">⚙️</button>
  ${open ? `<aside class="dev-panel card">
    <div class="row between"><h3>Testing Menu</h3><button class="ghost mini-button" data-action="toggleDevMenu">✕</button></div>
    <p class="small">Use this for testing builds. It changes only the current character/save.</p>
    <h4>Money</h4>
    <div class="dev-actions">${button("+100 Gold", "devAdjust", "gold:100", "secondary")}${button("-100 Gold", "devAdjust", "gold:-100", "ghost")}${button("+1000 Gold", "devAdjust", "gold:1000", "secondary")}</div>
    <h4>EXP</h4>
    <div class="dev-actions">${button("+100 EXP", "devAdjust", "xp:100", "secondary")}${button("-100 EXP", "devAdjust", "xp:-100", "ghost")}${button("+1000 EXP", "devAdjust", "xp:1000", "secondary")}</div>
    <h4>Class Levels</h4>
    <div class="dev-actions">${button("+1 Level Point", "devAdjust", "level:1", "secondary")}${button("-1 Level", "devAdjust", "level:-1", "ghost")}${button("+10 Level Points", "devAdjust", "level:10", "secondary")}</div>
  </aside>` : ""}`;
}


export function bar(label, current, max, type = "hp") {
  const safeMax = Math.max(1, max ?? 1);
  const pct = Math.max(0, Math.min(100, Math.round((current / safeMax) * 100)));
  return `<div class="small row between"><span>${label}</span><strong>${current}/${safeMax}</strong></div><div class="bar ${type}"><span style="width:${pct}%"></span></div>`;
}

export function statGrid(stats) {
  const basicRows = stats.basicAbilities?.rows ?? BASIC_ABILITIES.map(ability => ({
    ...ability,
    currentValue: 0,
    currentRank: "I",
    totalValue: 0,
    totalDisplay: formatBasicAbility(0)
  }));
  const derivedKeys = [
    ["maxHp", "Max HP"],
    ["maxMana", "Max Mana"],
    ["maxStamina", "Max Stamina"],
    ["attack", "Attack"],
    ["magic", "Spell Power"],
    ["defense", "Defense"],
    ["speed", "Speed"]
  ];
  return `<div class="ability-grid">${basicRows.map(row => `<article class="ability-card">
    <div class="row between"><span>${row.name}</span><strong class="ability-rank">${row.currentRank} ${row.currentValue}</strong></div>
    <div class="ability-meter"><span style="width:${Math.max(0, Math.min(100, Math.floor((row.currentValue / 999) * 100)))}%"></span></div>
    <p class="small">Stacked background total: <strong>${row.totalValue}</strong> (${row.totalDisplay})</p>
    <p class="small">${row.scaling}</p>
  </article>`).join("")}</div>
  <div class="rank-key"><strong>Rank Key:</strong> I 0–99 · H 100–199 · G 200–299 · F 300–399 · E 400–499 · D 500–599 · C 600–699 · B 700–799 · A 800–899 · S 900–999</div>
  <h3>Derived Status Scaling</h3>
  <div class="stat-grid derived-grid">${derivedKeys.map(([key, label]) => `<div class="stat"><span>${label}</span><strong>${stats[key] ?? 0}</strong></div>`).join("")}</div>`;
}

export function statusPills(list = []) {
  if (!list.length) return `<span class="pill">No status effects</span>`;
  return list.map(s => `<span class="pill status">${STATUS_INFO[s.id]?.icon ?? "•"} ${STATUS_INFO[s.id]?.name ?? titleCase(s.id)} ${s.duration}</span>`).join(" ");
}

export function inventoryList(player, mode = "normal") {
  const entries = Object.entries(player.inventory ?? {});
  if (!entries.length) return `<p class="small">Inventory is empty.</p>`;
  return entries.map(([itemId, qty]) => {
    const item = byId(ITEMS, itemId);
    if (!item) return "";
    const action = item.type === "consumable" ? (mode === "battle" ? "battleItem" : "useItem") : item.type === "equipment" ? "equipItem" : "";
    const setText = item.set ? `<span class="pill">Set: ${titleCase(item.set)}</span>` : "";
    return `<div class="item-row card">
      <div><strong>${item.name}</strong> <span class="pill">x${qty}</span> ${setText}<p>${item.description}</p></div>
      ${action ? button(item.type === "equipment" ? "Equip" : "Use", action, item.id, "secondary") : `<span class="pill">Material</span>`}
    </div>`;
  }).join("");
}

export function skillList(player, mode = "normal") {
  const skills = (player.skills ?? []).map(id => byId(SKILLS, id)).filter(Boolean);
  if (!skills.length) return `<p class="small">No skills learned yet.</p>`;
  return skills.map(skill => {
    const cd = player.cooldowns?.[skill.id] ?? 0;
    const disabled = mode === "battle" && cd > 0 ? "disabled" : "";
    const isPassive = skill.kind === "passive" || skill.resource === "none";
    const cost = isPassive ? "Passive" : (skill.resource ? `${skill.cost} ${skill.resource}` : "Free");
    return `<div class="skill-row card">
      <div>
        <strong>${skill.name}</strong> <span class="pill">${skill.rank}</span> <span class="pill">${skill.element}</span>
        <p>${skill.description}</p>
        <div class="small">Cost: ${cost} · Cooldown: ${skill.cooldown} ${cd ? `· Current: ${cd}` : ""}</div>
      </div>
      ${mode === "battle" && !isPassive ? `<button ${disabled} data-action="skill" data-value="${skill.id}">Use</button>` : (isPassive ? `<span class="pill">Passive</span>` : "")}
    </div>`;
  }).join("");
}

export function combatLog(state) {
  const lines = (state.log ?? []).slice(0, 18).map(l => `<div class="log-line">${l.text}</div>`).join("");
  return `<section class="card log"><h3>Combat Log</h3>${lines || `<div class="log-line">No log entries yet.</div>`}</section>`;
}
