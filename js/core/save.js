import { CONFIG } from "../config.js";
import { hydrateState } from "./state.js";

export function saveGame(state) {
  localStorage.setItem(CONFIG.storageKey, JSON.stringify(state));
}

export function loadGame() {
  const raw = localStorage.getItem(CONFIG.storageKey);
  if (!raw) return null;
  try {
    return hydrateState(JSON.parse(raw));
  } catch (error) {
    console.error("Save file could not be loaded", error);
    return null;
  }
}

export function deleteSave() {
  localStorage.removeItem(CONFIG.storageKey);
}

export function hasSave() {
  return Boolean(localStorage.getItem(CONFIG.storageKey));
}
