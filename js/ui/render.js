import { app } from "./dom.js";
import { mainMenu, characterCreate, hub, statusScreen, progressionScreen, skillsScreen, inventoryScreen, shopScreen, mapScreen, battleScreen, eventScreen, recruitScreen, notFound } from "./screens.js";

const screens = {
  "main-menu": mainMenu,
  "character-create": characterCreate,
  hub,
  status: statusScreen,
  progression: progressionScreen,
  skills: skillsScreen,
  inventory: inventoryScreen,
  shop: shopScreen,
  map: mapScreen,
  battle: battleScreen,
  event: eventScreen,
  recruit: recruitScreen
};

export function render(state) {
  const root = app();
  const screen = screens[state.screen] ?? notFound;
  root.innerHTML = screen(state);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
