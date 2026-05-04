import { createInitialState, hydrateState } from "./core/state.js";
import { handleAction, handleInput } from "./core/game-loop.js";
import { render } from "./ui/render.js";
import { addLog } from "./core/utils.js";

window.__BYL_MODULE_LOADED__ = true;

let state = createInitialState();

function errorHtml(error) {
  const message = String(error?.message ?? error ?? "Unknown error");
  const stack = String(error?.stack ?? "");
  const localWarning = location.protocol === "file:"
    ? `<p class="warn"><strong>Local file warning:</strong> Modern browsers often block JavaScript modules when you open index.html directly from Files. Upload it to GitHub Pages or run a local server.</p>`
    : "";
  return `<section class="screen">
    <div class="hero"><h1>Game Action Error</h1><p class="subtitle">The game caught an error instead of going blank.</p></div>
    <section class="card danger-card">${localWarning}<p><strong>Error:</strong> ${escapeForHtml(message)}</p><pre>${escapeForHtml(stack)}</pre></section>
    <div class="actions"><button data-action="go" data-value="main-menu">Main Menu</button></div>
  </section>`;
}

function escapeForHtml(text = "") {
  return String(text).replace(/[&<>'"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[ch]));
}

function showBootError(error) {
  const root = document.querySelector("#app");
  if (root) root.innerHTML = errorHtml(error);
  console.error(error);
}

function rerender() {
  try {
    render(state);
  } catch (error) {
    showBootError(error);
  }
}

window.addEventListener("error", event => showBootError(event.error ?? event.message));
window.addEventListener("unhandledrejection", event => showBootError(event.reason));

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button || button.disabled) return;
  const action = button.dataset.action;
  const value = button.dataset.value ?? "";
  try {
    state = hydrateState(handleAction(state, action, value));
    rerender();
  } catch (error) {
    addLog(state, `<strong>Game action error:</strong> ${escapeForHtml(error.message ?? error)}`);
    showBootError(error);
  }
});

function handleDataInputEvent(event) {
  const input = event.target.closest("[data-input]");
  if (!input) return;
  try {
    state = handleInput(state, input.dataset.input, input.value);
    if (input.dataset.input?.startsWith("registry.") || input.dataset.input?.startsWith("creation.")) rerender();
  } catch (error) {
    showBootError(error);
  }
}

document.addEventListener("input", handleDataInputEvent);
document.addEventListener("change", handleDataInputEvent);

rerender();
