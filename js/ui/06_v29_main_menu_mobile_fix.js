// ═══════════════════════════════════════════════════════════════
// v0.29 — Main Menu Mobile Header + Logo Center Fix
// Hides the top-right header Settings button ONLY on the main menu
// and recenters the main menu logo inside the menu card.
// ═══════════════════════════════════════════════════════════════
(function installV29MainMenuMobileFix(){
  "use strict";

  function addV29Style(){
    if (document.getElementById("v29-main-menu-mobile-fix-style")) return;

    var style = document.createElement("style");
    style.id = "v29-main-menu-mobile-fix-style";
    style.textContent = `
      /* Keep the header gear compact everywhere it is allowed to show.
         Mobile global button rules were stretching it too wide. */
      #settings-btn {
        width: auto !important;
        min-width: 42px !important;
        max-width: 48px !important;
        min-height: 34px !important;
        height: 34px !important;
        padding: 5px 10px !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        box-sizing: border-box !important;
      }

      /* Hide top-right Settings ONLY while the main menu is active.
         The normal Settings button inside the main menu remains available. */
      body.byl-main-menu-active #settings-btn,
      #game.byl-main-menu-active #settings-btn {
        display: none !important;
      }

      /* Main menu card + logo centering cleanup */
      body.byl-main-menu-active #output {
        display: flex !important;
        justify-content: center !important;
        align-items: flex-start !important;
        overflow-x: hidden !important;
      }

      body.byl-main-menu-active .menu-shell {
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        box-sizing: border-box !important;
      }

      body.byl-main-menu-active .main-menu-card {
        width: min(92vw, 760px) !important;
        margin-left: auto !important;
        margin-right: auto !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        box-sizing: border-box !important;
      }

      body.byl-main-menu-active .main-menu-logo {
        position: relative !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        display: block !important;
        align-self: center !important;
        justify-self: center !important;
        width: min(82vw, 500px) !important;
        max-width: 100% !important;
        height: auto !important;
        max-height: 260px !important;
        object-fit: contain !important;
        object-position: center center !important;
        margin-top: 0 !important;
        margin-bottom: 18px !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      body.byl-main-menu-active .main-menu-title,
      body.byl-main-menu-active .main-menu-subtitle,
      body.byl-main-menu-active .main-menu-blurb,
      body.byl-main-menu-active #menu-msg,
      body.byl-main-menu-active .main-menu-actions,
      body.byl-main-menu-active .main-menu-note {
        align-self: center !important;
        margin-left: auto !important;
        margin-right: auto !important;
        text-align: center !important;
      }

      @media (max-width: 720px) {
        body.byl-main-menu-active .main-menu-card {
          width: min(92vw, 700px) !important;
          padding-left: 14px !important;
          padding-right: 14px !important;
        }

        body.byl-main-menu-active .main-menu-logo {
          width: min(76vw, 390px) !important;
          max-height: 210px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function setMainMenuActive(on){
    document.body.classList.toggle("byl-main-menu-active", !!on);

    var game = document.getElementById("game");
    if (game) game.classList.toggle("byl-main-menu-active", !!on);
  }

  function recenterMainMenuLogo(){
    var card = document.querySelector(".main-menu-card");
    var logo = document.querySelector(".main-menu-logo");

    if (!card || !logo) return;

    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.justifyContent = "center";
    card.style.textAlign = "center";

    logo.style.position = "relative";
    logo.style.left = "50%";
    logo.style.transform = "translateX(-50%)";
    logo.style.display = "block";
    logo.style.alignSelf = "center";
    logo.style.objectFit = "contain";
    logo.style.objectPosition = "center center";
  }

  function patchCurrentMainMenu(){
    setMainMenuActive(true);
    recenterMainMenuLogo();
  }

  // Any normal screen render starts by clearing the output, so remove
  // the main-menu-only class there. main_menu will add it back after render.
  try {
    if (typeof clearOutput === "function" && !clearOutput._v29MainMenuFix) {
      var oldClearOutput = clearOutput;
      clearOutput = function(){
        setMainMenuActive(false);
        return oldClearOutput.apply(this, arguments);
      };
      clearOutput._v29MainMenuFix = true;
    }
  } catch(e) {}

  function wrapMainMenu(){
    var oldMain = null;
    try {
      oldMain = window.main_menu || (typeof main_menu === "function" ? main_menu : null);
    } catch(e) {
      oldMain = window.main_menu || null;
    }

    if (!oldMain || oldMain._v29MainMenuFix) {
      setTimeout(patchCurrentMainMenu, 0);
      return;
    }

    var wrappedMainMenu = function(){
      var result = oldMain.apply(this, arguments);
      setTimeout(patchCurrentMainMenu, 0);
      setTimeout(patchCurrentMainMenu, 80);
      return result;
    };

    wrappedMainMenu._v29MainMenuFix = true;

    window.main_menu = wrappedMainMenu;
    try { main_menu = wrappedMainMenu; } catch(e) {}
  }

  // If the page is already sitting on the main menu when this patch loads,
  // activate the main-menu-only styling immediately.
  function detectExistingMainMenu(){
    if (document.querySelector(".main-menu-card")) {
      patchCurrentMainMenu();
    }
  }

  // Add an update entry if the Updates screen exists.
  try {
    var oldUpdates = window.updates_screen || (typeof updates_screen === "function" ? updates_screen : null);

    if (oldUpdates && !oldUpdates._v29MainMenuFix) {
      var wrappedUpdates = function(){
        var result = oldUpdates.apply(this, arguments);

        setTimeout(function(){
          try {
            var out = document.getElementById("output");
            if (!out || document.getElementById("v29-update-entry")) return;

            var card = document.createElement("div");
            card.id = "v29-update-entry";
            card.className = "update-card";
            card.innerHTML =
              '<div class="update-card-title">v0.29 — Main Menu Mobile Header + Logo Center Fix</div>' +
              '<div class="update-card-date">UI Fix</div>' +
              '<ul>' +
              '<li>Removed the top-right header Settings button only while on the main menu.</li>' +
              '<li>The Settings button inside the main menu remains available.</li>' +
              '<li>Recentered the main menu logo inside the main menu box on mobile.</li>' +
              '<li>Kept the top-right header Settings button available on non-main-menu screens.</li>' +
              '</ul>';

            out.insertBefore(card, out.firstChild);
          } catch(e) {}
        }, 0);

        return result;
      };

      wrappedUpdates._v29MainMenuFix = true;
      window.updates_screen = wrappedUpdates;
      try { updates_screen = wrappedUpdates; } catch(e) {}
    }
  } catch(e) {}

  addV29Style();
  wrapMainMenu();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", detectExistingMainMenu);
  } else {
    detectExistingMainMenu();
  }
})();
