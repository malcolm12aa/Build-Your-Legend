// ═══════════════════════════════════════════════════════════════
// v0.30 — Navigation Cleanup
// Removes "Town Center" from utility/pre-game screens where it can
// skip setup or jump out of save/load flows.
// ═══════════════════════════════════════════════════════════════
(function installV30NavigationCleanup(){
  "use strict";

  function hasStartedGame(){
    try {
      return !!(
        typeof G !== "undefined" &&
        G &&
        G.name &&
        G.race_id &&
        Array.isArray(G.jobs) &&
        G.jobs.length > 0
      );
    } catch(e) {
      return false;
    }
  }

  function getChoices(){
    return document.getElementById("choices");
  }

  function mainMenuFn(){
    try {
      if (typeof main_menu === "function") return main_menu;
    } catch(e) {}
    if (window.main_menu) return window.main_menu;
    return null;
  }

  function saveManagerFn(){
    if (window.save_load_manager_screen) return window.save_load_manager_screen;
    if (window.save_manager_screen) return window.save_manager_screen;
    try {
      if (typeof loadGame === "function") return loadGame;
    } catch(e) {}
    return mainMenuFn();
  }

  function removeTownCenterButtons(options){
    options = options || {};
    var force = !!options.force;
    var fallback = options.fallback || "main";
    var reason = options.reason || "";

    var choices = getChoices();
    if (!choices) return;

    var shouldClean = force || document.body.classList.contains("byl-utility-no-town") || !hasStartedGame();
    if (!shouldClean) return;

    var buttons = Array.prototype.slice.call(choices.querySelectorAll("button"));
    var hasMainMenuButton = buttons.some(function(btn){ return /Main Menu/i.test(btn.textContent || ""); });
    var hasSaveManagerButton = buttons.some(function(btn){ return /Save Manager/i.test(btn.textContent || ""); });
    var removedAny = false;

    buttons.forEach(function(btn){
      var text = btn.textContent || "";
      if (!/Town Center/i.test(text)) return;

      if (fallback === "save" && !hasSaveManagerButton) {
        btn.textContent = "← Save Manager";
        btn.onclick = function(){
          var fn = saveManagerFn();
          if (fn) fn();
        };
        hasSaveManagerButton = true;
      } else if (fallback === "main" && !hasMainMenuButton) {
        btn.textContent = "← Main Menu";
        btn.onclick = function(){
          var fn = mainMenuFn();
          if (fn) fn();
        };
        hasMainMenuButton = true;
      } else {
        btn.remove();
      }

      removedAny = true;
    });

    if (removedAny) {
      choices.setAttribute("data-v30-nav-cleaned", reason || "true");
    }
  }

  function runLater(fn){
    setTimeout(fn, 0);
    setTimeout(fn, 80);
    setTimeout(fn, 250);
  }

  function wrapUtilityAlways(name, fallback){
    var fn = window[name];
    try {
      if (!fn && typeof eval(name) === "function") fn = eval(name);
    } catch(e) {}

    if (!fn || fn._v30NavCleanup) return;

    var wrapped = function(){
      document.body.classList.add("byl-utility-no-town");
      var result = fn.apply(this, arguments);
      runLater(function(){ removeTownCenterButtons({force:true, fallback:fallback || "main", reason:name}); });
      return result;
    };

    wrapped._v30NavCleanup = true;
    window[name] = wrapped;
    try { eval(name + " = wrapped"); } catch(e) {}
  }

  function wrapUtilityIfNoGame(name, fallback){
    var fn = window[name];
    try {
      if (!fn && typeof eval(name) === "function") fn = eval(name);
    } catch(e) {}

    if (!fn || fn._v30NavCleanup) return;

    var wrapped = function(){
      var pregame = !hasStartedGame();
      if (pregame) document.body.classList.add("byl-utility-no-town");
      var result = fn.apply(this, arguments);
      runLater(function(){ removeTownCenterButtons({force:pregame, fallback:fallback || "main", reason:name}); });
      return result;
    };

    wrapped._v30NavCleanup = true;
    window[name] = wrapped;
    try { eval(name + " = wrapped"); } catch(e) {}
  }

  function patchClearOutput(){
    try {
      if (typeof clearOutput !== "function" || clearOutput._v30NavCleanup) return;
      var oldClear = clearOutput;
      clearOutput = function(){
        // Most normal screens should be allowed to decide their own navigation.
        // Utility wrappers re-add this class immediately before rendering.
        document.body.classList.remove("byl-utility-no-town");
        return oldClear.apply(this, arguments);
      };
      clearOutput._v30NavCleanup = true;
    } catch(e) {}
  }

  function patchCurrentScreenIfNeeded(){
    // Save/load and pre-game screens should never expose Town Center.
    var output = document.getElementById("output");
    var text = output ? (output.textContent || "") : "";

    if (/SAVE \/ LOAD MANAGER|EXPORT SAVE|IMPORT SAVE|NEW GAME/i.test(text)) {
      document.body.classList.add("byl-utility-no-town");
      removeTownCenterButtons({force:true, fallback:/EXPORT|IMPORT|NEW GAME/i.test(text) ? "save" : "main", reason:"current-save-utility"});
      return;
    }

    if (!hasStartedGame() && /HELP|BUILD GUIDE|YGGDRASIL|UPDATES/i.test(text)) {
      document.body.classList.add("byl-utility-no-town");
      removeTownCenterButtons({force:true, fallback:"main", reason:"pregame-utility"});
      return;
    }

    if (!hasStartedGame()) {
      removeTownCenterButtons({force:false, fallback:"main", reason:"pregame-general"});
    }
  }

  function installObserver(){
    if (window._v30NavCleanupObserver) return;

    var choices = getChoices();
    if (!choices || !window.MutationObserver) return;

    window._v30NavCleanupObserver = new MutationObserver(function(){
      patchCurrentScreenIfNeeded();
    });

    window._v30NavCleanupObserver.observe(choices, {childList:true, subtree:true});
  }

  function patchUpdatesEntry(){
    var oldUpdates = window.updates_screen;
    try {
      if (!oldUpdates && typeof updates_screen === "function") oldUpdates = updates_screen;
    } catch(e) {}

    if (!oldUpdates || oldUpdates._v30UpdateEntry) return;

    var wrapped = function(){
      var result = oldUpdates.apply(this, arguments);
      runLater(function(){
        try {
          var out = document.getElementById("output");
          if (!out || document.getElementById("v30-update-entry")) return;

          var card = document.createElement("div");
          card.id = "v30-update-entry";
          card.className = "update-card";
          card.innerHTML =
            '<div class="update-card-title">v0.30 — Navigation Cleanup</div>' +
            '<div class="update-card-date">UI / Flow Fix</div>' +
            '<ul>' +
            '<li>Removed Town Center from Save / Load Manager.</li>' +
            '<li>Removed Town Center from Export Save, Import Save, and New Game utility flows.</li>' +
            '<li>Removed Town Center from pre-game Help, Build Guide, Updates, and related utility screens.</li>' +
            '<li>Kept Town Center available on normal in-game screens after a character has started.</li>' +
            '</ul>';

          out.insertBefore(card, out.firstChild);
        } catch(e) {}
      });
      return result;
    };

    wrapped._v30UpdateEntry = true;
    window.updates_screen = wrapped;
    try { updates_screen = wrapped; } catch(e) {}
  }

  function init(){
    patchClearOutput();

    // Always remove Town Center from save/load utility screens.
    wrapUtilityAlways("save_load_manager_screen", "main");
    wrapUtilityAlways("save_manager_screen", "main");
    wrapUtilityAlways("loadGame", "main");
    wrapUtilityAlways("exportSave", "save");
    wrapUtilityAlways("importSave", "save");
    wrapUtilityAlways("confirmNewGame", "save");

    // Remove Town Center from these screens only when a character is not started.
    [
      "help_screen",
      "race_update_help_screen",
      "yggdrasil_build_guide_screen",
      "build_guide_screen",
      "guide_screen",
      "openBuildGuideFromSettings",
      "updates_screen",
      "job_requirement_screen",
      "race_evolution_screen"
    ].forEach(function(name){
      wrapUtilityIfNoGame(name, "main");
    });

    patchUpdatesEntry();
    installObserver();
    patchCurrentScreenIfNeeded();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
