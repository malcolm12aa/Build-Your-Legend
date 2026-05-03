import { createInitialState } from "./core/state.js";
import { handleAction, handleInput } from "./core/game-loop.js";
import { render } from "./ui/render.js";

let state = createInitialState();

function rerender() {
  render(state);
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  const value = button.dataset.value ?? "";
  state = handleAction(state, action, value);
  rerender();
});

document.addEventListener("input", (event) => {
  const input = event.target.closest("[data-input]");
  if (!input) return;
  state = handleInput(state, input.dataset.input, input.value);
});

rerender();
