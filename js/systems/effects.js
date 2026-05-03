import { chance, clamp } from "../core/utils.js";

export const STATUS_INFO = {
  poison: { name: "Poison", icon: "☠️", text: "Loses HP each turn." },
  burn: { name: "Burn", icon: "🔥", text: "Loses HP and deals slightly less damage." },
  bleed: { name: "Bleed", icon: "🩸", text: "Loses HP from physical wounds." },
  stunned: { name: "Stun", icon: "💫", text: "May lose the turn." },
  frozen: { name: "Freeze", icon: "🧊", text: "May lose the turn." },
  weakened: { name: "Weakened", icon: "🔻", text: "Deals less damage." },
  guard: { name: "Guard", icon: "🛡️", text: "Takes less damage." },
  focus: { name: "Focus", icon: "✨", text: "Deals more damage." },
  haste: { name: "Haste", icon: "💨", text: "Improved speed." },
  lucky: { name: "Lucky", icon: "🍀", text: "Better reward chance." }
};

export function applyStatus(target, status, duration = 2) {
  target.statusEffects ??= [];
  const existing = target.statusEffects.find(s => s.id === status);
  if (existing) existing.duration = Math.max(existing.duration, duration);
  else target.statusEffects.push({ id: status, duration });
}

export function hasStatus(target, status) {
  return (target.statusEffects ?? []).some(s => s.id === status && s.duration > 0);
}

export function tickStatuses(target, stats) {
  const messages = [];
  for (const status of target.statusEffects ?? []) {
    if (status.id === "poison") {
      const dmg = Math.max(3, Math.floor((stats?.maxHp ?? target.maxHp ?? 50) * 0.05));
      target.hp = clamp(target.hp - dmg, 0, stats?.maxHp ?? target.maxHp ?? 9999);
      messages.push(`${target.name} suffers ${dmg} poison damage.`);
    }
    if (status.id === "burn") {
      const dmg = Math.max(3, Math.floor((stats?.maxHp ?? target.maxHp ?? 50) * 0.04));
      target.hp = clamp(target.hp - dmg, 0, stats?.maxHp ?? target.maxHp ?? 9999);
      messages.push(`${target.name} burns for ${dmg} damage.`);
    }
    if (status.id === "bleed") {
      const dmg = Math.max(2, Math.floor((stats?.maxHp ?? target.maxHp ?? 50) * 0.035));
      target.hp = clamp(target.hp - dmg, 0, stats?.maxHp ?? target.maxHp ?? 9999);
      messages.push(`${target.name} bleeds for ${dmg} damage.`);
    }
    status.duration -= 1;
  }
  target.statusEffects = (target.statusEffects ?? []).filter(s => s.duration > 0);
  return messages;
}

export function isTurnSkipped(target) {
  if (hasStatus(target, "stunned") && chance(65)) return "stunned";
  if (hasStatus(target, "frozen") && chance(55)) return "frozen";
  return null;
}

export function getElementMultiplier(element, defender) {
  let multiplier = 1;
  if ((defender.weaknessesElements ?? []).includes(element)) multiplier += 0.45;
  if ((defender.resists ?? []).includes(element)) multiplier -= 0.35;
  return clamp(multiplier, 0.35, 1.75);
}

export function damageModsFromStatuses(attacker, defender) {
  let mod = 1;
  if (hasStatus(attacker, "focus")) mod += 0.25;
  if (hasStatus(attacker, "weakened")) mod -= 0.25;
  if (hasStatus(attacker, "burn")) mod -= 0.1;
  if (hasStatus(defender, "guard")) mod -= 0.35;
  return clamp(mod, 0.25, 1.8);
}
