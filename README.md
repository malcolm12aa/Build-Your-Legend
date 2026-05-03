# Build Your Legend — Multi-File GitHub Pages Build

This package is a safer multi-file version of the current **Build Your Legend** game.

The game still runs from `index.html`, but the large inline CSS and JavaScript have been moved into external files so future updates are easier to manage.

## Upload to GitHub Pages

Upload everything in this folder to the root of your GitHub repository:

```text
index.html
css/
js/
assets/
apple-touch-icon.png
favicon.png
icon-192.png
icon-512.png
site.webmanifest
README.md
```

Your GitHub Pages site should still open from:

```text
https://malcolm12aa.github.io/Build-Your-Legend/
```

## Current Safe Split

The current working game code was split like this:

```text
css/main.css
js/core/00_game_core.js
js/patches/01_v25_systems_patch.js
js/patches/02_v25_skill_spell_redo.js
js/patches/03_v26_equipment_recruit_codex.js
js/patches/04_v27_save_load_manager.js
js/patches/05_v28_save_load_fix.js
js/patches/06_v29_main_menu_mobile_fix.js
js/patches/07_v30_navigation_cleanup.js
js/patches/08_v31_race_job_layout_redo.js
js/patches/09_v31_1_base_job_selection_fix.js
js/patches/10_v50_systems_expansion.js
js/patches/11_v50_1_requested_fixes.js
```

This keeps the exact load order from the single-file version.

## Recommended Next Refactor

The folders below are included so you can gradually move code into cleaner files later:

```text
js/data/
js/systems/
js/screens/
```

Move code slowly:
1. CSS first.
2. Data files second.
3. Save manager third.
4. Screens fourth.
5. Systems last.

Do not move everything at once unless you are ready to test after every step.

## Important

Do not rename `index.html`.
GitHub Pages needs `index.html` at the root of the repo.
