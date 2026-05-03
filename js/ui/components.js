import { ITEMS } from "../data/items.js";
import { SKILLS } from "../data/skills.js";
import { byId, formatStat, titleCase } from "../core/utils.js";
import { STATUS_INFO } from "../systems/effects.js";

export function button(label, action, value = "", cls = "") {
  return `<button class="${cls}" data-action="${action}" data-value="${value}">${label}</button>`;
}

export function nav(state) {
  if (!state.player) return "";
  return `<nav class="navbar">
    ${button("Hub", "go", "hub", "secondary")}
    ${button("Status", "go", "status", "secondary")}
    ${button("Race/Job", "go", "progression", "secondary")}
    ${button("Skills", "go", "skills", "secondary")}
    ${button("Inventory", "go", "inventory", "secondary")}
    ${button("Shop", "go", "shop", "secondary")}
    ${button("Map", "go", "map", "secondary")}
    ${button("Save", "saveGame", "", "ghost")}
  </nav>`;
}

export function bar(label, current, max, type = "hp") {
  const safeMax = Math.max(1, max ?? 1);
  const pct = Math.max(0, Math.min(100, Math.round((current / safeMax) * 100)));
  return `<div class="small row between"><span>${label}</span><strong>${current}/${safeMax}</strong></div><div class="bar ${type}"><span style="width:${pct}%"></span></div>`;
}

export function statGrid(stats) {
  const keys = ["str", "dex", "int", "wis", "con", "cha", "attack", "magic", "defense", "speed"];
  return `<div class="stat-grid">${keys.map(key => `<div class="stat"><span>${formatStat(key)}</span><strong>${stats[key] ?? 0}</strong></div>`).join("")}</div>`;
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
    return `<div class="item-row card">
      <div><strong>${item.name}</strong> <span class="pill">x${qty}</span><p>${item.description}</p></div>
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
    const cost = skill.resource ? `${skill.cost} ${skill.resource}` : "Free";
    return `<div class="skill-row card">
      <div>
        <strong>${skill.name}</strong> <span class="pill">${skill.rank}</span> <span class="pill">${skill.element}</span>
        <p>${skill.description}</p>
        <div class="small">Cost: ${cost} · Cooldown: ${skill.cooldown} ${cd ? `· Current: ${cd}` : ""}</div>
      </div>
      ${mode === "battle" ? `<button ${disabled} data-action="skill" data-value="${skill.id}">Use</button>` : ""}
    </div>`;
  }).join("");
}

export function combatLog(state) {
  const lines = (state.log ?? []).slice(0, 18).map(l => `<div class="log-line">${l.text}</div>`).join("");
  return `<section class="card log"><h3>Combat Log</h3>${lines || `<div class="log-line">No log entries yet.</div>`}</section>`;
}
