# Build Your Legend

A static, mobile-friendly, web-based text RPG with roguelike dungeon runs and an Overlord/YGGDRASIL-inspired race + job leveling system.

## Run locally

Because this project uses JavaScript ES modules, open it through a local server instead of double-clicking `index.html`.

Easy options:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## GitHub Pages

Upload the full folder contents to your GitHub repository. Make sure `index.html` is in the root of the repository or in the publishing folder selected in GitHub Pages settings.

## Current foundation systems

- Static HTML/CSS/JS only
- Modular file structure
- localStorage save/load
- 10 starting races
- 10 starting jobs
- Separate race levels and job levels
- Total Level = Race Levels + Job Levels
- Base/Advanced/Specialist/Rare/Hidden progression data
- Turn-based combat
- HP, Mana, Stamina
- Skills/spells with costs and cooldowns
- Elemental weaknesses/resistances
- Status effects
- Recruits/party support
- Procedural dungeon floor progression
- Random encounters, events, shops, elites, bosses, rewards
- Defeat penalty: dungeon progress reset and small gold loss
- Mobile-first UI

## Expansion notes

Add or edit content in `js/data/` first. Most systems read from the data files, so new races, jobs, skills, enemies, events, recruits, and items can be added without rewriting the core game loop.
