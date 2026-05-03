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

export function handleAction(state, action, value) {
  switch (action) {
    case "newGame":
      state = createInitialState();
      state.screen = "character-create";
      break;
    case "loadGame": {
      const loaded = loadGame();
      if (loaded) state = loaded;
      else addLog(state, "No save file found.");
      break;
    }
    case "saveGame":
      saveGame(state);
      addLog(state, "Game saved to this browser.");
      break;
    case "deleteSave":
      deleteSave();
      addLog(state, "Save file deleted from this browser.");
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
    default:
      console.warn("Unknown action", action, value);
  }
  return state;
}

export function handleInput(state, name, value) {
  if (name === "characterName") state.characterCreation.name = value;
  return state;
}
