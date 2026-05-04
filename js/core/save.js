import { CONFIG } from "../config.js";
import { hydrateState } from "./state.js";
import { getTotalLevel } from "../systems/leveling.js";

function storageAvailable() {
  try {
    const key = `${CONFIG.storageKey}-test`;
    localStorage.setItem(key, "1");
    localStorage.removeItem(key);
    return true;
  } catch (_error) {
    return false;
  }
}

function normalizeSlot(slot = 1) {
  const number = Number(slot);
  if (!Number.isFinite(number)) return 1;
  return Math.max(1, Math.min(CONFIG.saveSlotCount ?? 5, Math.floor(number)));
}

function slotKey(slot = 1) {
  return `${CONFIG.storageKey}-slot-${normalizeSlot(slot)}`;
}

function summarizeSave(state, slot, savedAt) {
  const player = state.player;
  const raceName = player?.raceLevels?.[0]?.name ?? "No race";
  const jobName = player?.jobLevels?.[0]?.name ?? "No job";
  return {
    slot: normalizeSlot(slot),
    exists: Boolean(player),
    savedAt,
    version: state.version ?? CONFIG.version,
    name: player?.name ?? "Empty Slot",
    title: player?.title ?? "",
    totalLevel: player ? getTotalLevel(player) : 0,
    gold: player?.gold ?? 0,
    raceName,
    jobName,
    floor: state.run?.floor ?? 0,
    screen: state.screen ?? "main-menu"
  };
}

export function saveGame(state, slot = 1) {
  if (!storageAvailable()) return false;
  const fixedSlot = normalizeSlot(slot);
  const savedAt = new Date().toISOString();
  const payload = {
    savedAt,
    summary: summarizeSave(state, fixedSlot, savedAt),
    state
  };
  localStorage.setItem(slotKey(fixedSlot), JSON.stringify(payload));
  return true;
}

export function loadGame(slot = 1) {
  if (!storageAvailable()) return null;
  const fixedSlot = normalizeSlot(slot);
  const raw = localStorage.getItem(slotKey(fixedSlot)) ?? (fixedSlot === 1 ? localStorage.getItem(CONFIG.storageKey) : null);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return hydrateState(parsed.state ?? parsed);
  } catch (error) {
    console.warn("Save file could not be loaded.", error);
    return null;
  }
}

export function deleteSave(slot = 1) {
  if (!storageAvailable()) return false;
  const fixedSlot = normalizeSlot(slot);
  localStorage.removeItem(slotKey(fixedSlot));
  if (fixedSlot === 1) localStorage.removeItem(CONFIG.storageKey);
  return true;
}

export function getSaveSlots() {
  const count = CONFIG.saveSlotCount ?? 5;
  if (!storageAvailable()) {
    return Array.from({ length: count }, (_, index) => ({ slot: index + 1, exists: false, blocked: true }));
  }
  return Array.from({ length: count }, (_, index) => {
    const slot = index + 1;
    const raw = localStorage.getItem(slotKey(slot)) ?? (slot === 1 ? localStorage.getItem(CONFIG.storageKey) : null);
    if (!raw) return { slot, exists: false };
    try {
      const parsed = JSON.parse(raw);
      if (parsed.summary) return { ...parsed.summary, slot, exists: true };
      const loaded = hydrateState(parsed.state ?? parsed);
      return summarizeSave(loaded, slot, parsed.savedAt ?? null);
    } catch (_error) {
      return { slot, exists: false, corrupted: true };
    }
  });
}
