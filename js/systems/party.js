import { CONFIG } from "../config.js";
import { RECRUITS } from "../data/recruits.js";
import { addLog, byId, choice, deepClone } from "../core/utils.js";

export function randomRecruit() {
  return deepClone(choice(RECRUITS));
}

export function recruitMember(state, recruitId) {
  const recruit = byId(RECRUITS, recruitId) ?? state.ui.offeredRecruit;
  if (!recruit) return;
  if ((state.player.party ?? []).length >= CONFIG.partyLimit) {
    addLog(state, "Your party is full. Remove or replace party members in a later update.");
    state.screen = "map";
    return;
  }
  state.player.party.push(deepClone(recruit));
  addLog(state, `${recruit.name} joins your party for this legend.`);
  state.screen = "map";
}

export function prepareRecruitOffer(state) {
  state.ui.offeredRecruit = randomRecruit();
  return state.ui.offeredRecruit;
}
