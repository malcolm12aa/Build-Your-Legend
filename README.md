# Build Your Legend

A modular, static, mobile-friendly text RPG foundation for GitHub Pages with Excel-imported race/job registry data and Character Creation filters.

## v0.3.1 Race & Job Filter Update

Added Character Creation filters so the large Excel import is easier to use on phones and desktops.

New filters:

- Race search by name, description, category, strengths, or weaknesses
- Race category dropdown
- Race tier dropdown
- Race build-focus dropdown: physical, magic, defense, speed, support, balanced
- Job search by name, description, category, strengths, or weaknesses
- Job category dropdown
- Job tier dropdown
- Job build-focus dropdown
- Result counts for both race and job lists
- Warning card when the selected race/job is hidden by filters but still selected

## v0.3.0 Excel Data Import

This package imports the uploaded Excel race/job registry into the game foundation.

Included data import:

- 69 base races from `Races Summary`
- 552 race evolution paths from Excel race-evolution rows
- 73 base starting jobs from `Jobs Summary`
- 584 advanced/specialist/rare/hidden job paths
- A new in-game Class Registry screen
- Search, type, tier, and category/world filters for browsing large class lists

The full unlock conversion is intentionally staged for v0.4.0 so the game does not become unstable from all 1,209 job rows at once.

## Important setup

For GitHub Pages, `index.html` must be at the **root of your repository**. This fixed ZIP is already arranged that way:

```text
index.html
css/styles.css
js/main.js
js/core/...
js/data/...
js/systems/...
js/ui/...
```

Do **not** upload the whole ZIP as one file. Unzip it first, then upload the files and folders inside it.

## Local testing note

This version uses JavaScript modules. Many browsers block module imports when you double-click `index.html` from your computer or phone files. It should work normally on GitHub Pages. For local testing, use a simple web server, such as:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.


## v0.2.0 Improvement Pass

Added in this package:

- 5-slot save/load menu using browser `localStorage`
- Character creation stat preview
- Race evolution tree screen
- Job/class tree screen
- Race + job synergy bonuses
- Enemy intent display in battle
- More random dungeon events
- Equipment set bonus system
- Recruit roles, passives, and personality text
- Achievements and selectable titles
- Versioned update notes screen

Upload/replace the files in your GitHub repository root the same way as before. Keep `index.html` at the repository root.

## Current systems included

- Main menu, new game, load, save, delete save
- Mobile-first RPG interface
- Browser save/load through `localStorage`
- 69 imported starting races
- 73 imported base starting jobs
- Total Level = Race Levels + Job Levels
- Overlord/YGGDRASIL-inspired class caps:
  - Base: 15
  - Advanced: 10
  - Specialist: 10
  - Rare: 5
  - Hidden: 5
- Race/job stat bonuses, starting skills, descriptions, strengths, weaknesses, and unlock paths
- Turn-based battle system
- HP, mana, stamina
- Physical skills use stamina
- Magic spells use mana
- Skill cooldowns
- Elements, weaknesses, resistances
- Status effects
- Random encounters
- Random events
- Procedural dungeon floor progression
- Shops, elites, bosses, rewards
- Recruit/party support
- Defeat penalty: lose current dungeon run and a little gold
- Permanent growth: XP, class points, relic dust, boss kill progress

## Files to edit later

- `js/data/races.js` — races and race evolution paths
- `js/data/jobs.js` — jobs and job class paths
- `js/data/skills.js` — physical skills and magic spells
- `js/data/enemies.js` — normal enemies, elites, bosses
- `js/data/items.js` — consumables and equipment
- `js/data/shops.js` — shop stock
- `js/data/events.js` — random dungeon events
- `js/data/recruits.js` — party members
- `js/systems/battle.js` — combat rules
- `js/systems/leveling.js` — XP, class levels, unlock requirements
- `js/systems/map.js` — dungeon floor logic
- `js/ui/screens.js` — screen layouts
- `css/styles.css` — visual design

## What was fixed in this package

- Added `index.html` directly at the ZIP root so GitHub Pages can find it.
- Added a loading screen instead of a blank page.
- Added an on-screen error panel for JavaScript errors.
- Added a warning if the game is opened directly from files instead of hosted.
- Hardened save/load/delete save against blocked `localStorage`.
- Re-tested the main flow: menu → character creation → hub → status/progression/skills/inventory/shop/map → dungeon → battle.
