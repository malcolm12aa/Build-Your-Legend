import { createInitialState } from "./state.js";
import { saveGame, loadGame, deleteSave } from "./save.js";
import { addLog } from "./utils.js";
import { finalizeCharacter } from "../systems/character-creation.js";
import { startRun, leaveRun } from "../systems/run-manager.js";
import { exploreNextFloor, restAtCamp } from "../systems/map.js";
import { playerBasicAttack, playerUseSkill, playerUseItem } from "../systems/battle.js";
import { useItem, equipItem, unequipSlot } from "../systems/inventory.js";
import { buyItem } from "../systems/shop.js";
import { spendClassPoint, addAdvancedClass } from "../systems/leveling.js";
import { recruitMember, prepareRecruitOffer } from "../systems/party.js";
import { checkAchievements } from "../systems/achievements.js";
import { ACHIEVEMENTS } from "../data/achievements.js";

export function handleAction(state, action, value) {
  switch (action) {
    case "newGame":
      state = createInitialState();
      state.screen = "character-create";
      break;
    case "openSaveMenu":
      state.ui.saveMenuMode = "save";
      state.screen = "save-menu";
      break;
    case "openLoadMenu":
      state.ui.saveMenuMode = "load";
      state.screen = "save-menu";
      break;
    case "loadGame":
    case "loadSlot": {
      const loaded = loadGame(value || 1);
      if (loaded) state = loaded;
      else addLog(state, `No save file found in slot ${value || 1}.`);
      break;
    }
    case "saveGame":
    case "saveSlot":
      if (!state.player) {
        addLog(state, "Create a character before saving.");
      } else if (saveGame(state, value || 1)) {
        addLog(state, `Game saved to slot ${value || 1}.`);
      } else addLog(state, "Save failed. Your browser may be blocking localStorage.");
      break;
    case "deleteSave":
    case "deleteSlot":
      if (deleteSave(value || 1)) addLog(state, `Save slot ${value || 1} deleted from this browser.`);
      else addLog(state, "Could not delete save. Your browser may be blocking localStorage.");
      break;
    case "go":
      state.screen = value;
      if (value === "recruit" && !state.ui.offeredRecruit) prepareRecruitOffer(state);
      break;
    case "selectRace":
      state.characterCreation.raceId = value;
      break;
    case "selectJob":
      state.characterCreation.jobId = value;
      break;
    case "startCharacter":
      finalizeCharacter(state);
      break;
    case "startRun":
      startRun(state);
      break;
    case "leaveRun":
      leaveRun(state);
      break;
    case "explore":
      exploreNextFloor(state);
      break;
    case "rest":
      restAtCamp(state);
      break;
    case "attack":
      playerBasicAttack(state);
      break;
    case "skill":
      playerUseSkill(state, value);
      break;
    case "battleItem":
      playerUseItem(state, value);
      break;
    case "useItem":
      useItem(state, value, false);
      break;
    case "equipItem":
      equipItem(state, value);
      break;
    case "unequipSlot":
      unequipSlot(state, value);
      break;
    case "buyItem":
      buyItem(state, value);
      break;
    case "selectShop":
      state.ui.selectedShop = value;
      break;
    case "spendPoint": {
      const [track, index] = value.split(":");
      spendClassPoint(state, track, index);
      break;
    }
    case "addClass": {
      const [track, pathId] = value.split(":");
      addAdvancedClass(state, track, pathId);
      break;
    }
    case "recruit":
      recruitMember(state, value);
      state.ui.offeredRecruit = null;
      break;
    case "skipRecruit":
      addLog(state, "You continue without recruiting anyone.");
      state.ui.offeredRecruit = null;
      state.screen = "map";
      break;
    case "selectTitle": {
      const achievement = ACHIEVEMENTS.find(a => a.id === value);
      if (achievement && state.player?.achievements?.includes(value)) {
        state.player.title = achievement.title;
        addLog(state, `Title equipped: ${achievement.title}.`);
      }
      break;
    }
    case "resetRegistryFilters":
      state.ui.registryFilters = { search: "", kind: "all", category: "all", tier: "all" };
      break;
    case "resetCreationFilters":
      state.ui.creationFilters = {
        raceSearch: "", raceCategory: "all", raceTier: "all", raceFocus: "all",
        jobSearch: "", jobCategory: "all", jobTier: "all", jobFocus: "all"
      };
      break;
    default:
      console.warn("Unknown action", action, value);
  }
  checkAchievements(state);
  return state;
}

export function handleInput(state, name, value) {
  if (name === "characterName") state.characterCreation.name = value;
  if (name?.startsWith("registry.")) {
    const key = name.split(".")[1];
    state.ui.registryFilters ??= { search: "", kind: "all", category: "all", tier: "all" };
    state.ui.registryFilters[key] = value;
  }
  if (name?.startsWith("creation.")) {
    const key = name.split(".")[1];
    state.ui.creationFilters ??= {
      raceSearch: "", raceCategory: "all", raceTier: "all", raceFocus: "all",
      jobSearch: "", jobCategory: "all", jobTier: "all", jobFocus: "all"
    };
    state.ui.creationFilters[key] = value;
  }
  return state;
}
