import { createPlayer } from "../core/state.js";
import { addLog } from "../core/utils.js";

export function finalizeCharacter(state) {
  const { name, raceId, jobId } = state.characterCreation;
  state.player = createPlayer(name, raceId, jobId);
  state.screen = "hub";
  addLog(state, `<strong>${state.player.name}</strong> enters the first guild hall.`);
}
