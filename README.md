# Build Your Legend — Organized Multi-File Build

This version removes the old `js/patches/` folder and places code into feature folders:

- `js/core/` — starting game state, stat math, helpers
- `js/data/` — races, jobs, shops, recruits, enemies, zones
- `js/systems/` — battle, save/load, abilities, equipment, progression, navigation, expanded systems
- `js/screens/` — main menu, character creation, maps, recruitment, updates, mobile flow screens
- `js/ui/` — UI helpers and mobile UI fixes
- `css/` — extracted styling
- `assets/` — icons, future images, future audio

`index.html` stays at the repository root so GitHub Pages can serve the game.

## Important

The files are loaded in the same order as the working single-file build. This keeps compatibility while making the code much easier to edit.

## Recommended editing examples

Battle code:
```text
js/systems/battle-system.js
js/screens/roguelike-map-screens.js
js/systems/expanded-game-systems.js
```

Race / job code:
```text
js/data/races-and-jobs.js
js/systems/race-job-progression-system.js
js/screens/race-job-layout-screens.js
js/systems/base-job-selection-system.js
```

Save/load code:
```text
js/systems/save-load-system.js
js/systems/save-manager-system.js
js/systems/save-manager-fix-system.js
```

UI code:
```text
js/ui/ui-helpers.js
js/ui/main-menu-mobile-ui.js
css/main.css
```

## GitHub Pages

Upload all files and folders to the root of your repo:

```text
index.html
css/
js/
assets/
site.webmanifest
README.md
```

Your site should still open from:

```text
https://malcolm12aa.github.io/Build-Your-Legend/
```
