import { app } from "./dom.js";
import { mainMenu, saveMenu, characterCreate, hub, statusScreen, progressionScreen, classRegistryScreen, skillsScreen, inventoryScreen, shopScreen, mapScreen, battleScreen, eventScreen, recruitScreen, achievementsScreen, questBoardScreen, updatesScreen, notFound } from "./screens.js";

const screens = {
  "main-menu": mainMenu,
  "save-menu": saveMenu,
  "character-create": characterCreate,
  hub,
  status: statusScreen,
  progression: progressionScreen,
  "class-registry": classRegistryScreen,
  skills: skillsScreen,
  inventory: inventoryScreen,
  shop: shopScreen,
  map: mapScreen,
  battle: battleScreen,
  event: eventScreen,
  recruit: recruitScreen,
  achievements: achievementsScreen,
  quests: questBoardScreen,
  updates: updatesScreen
};

export function render(state) {
  const root = app();
  const screen = screens[state.screen] ?? notFound;
  root.innerHTML = screen(state);
  // v0.6.1: do not force-scroll after every render.
  // This keeps filters, shop tabs, purchases, level buttons, and combat actions from jumping back to the top.
}
