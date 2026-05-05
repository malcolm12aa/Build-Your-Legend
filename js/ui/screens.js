import { CONFIG } from "../config.js";
import { RACES, RACE_PATHS } from "../data/races.js";
import { JOBS, JOB_PATHS } from "../data/jobs.js";
import { SKILLS, SKILL_SHOP_LIBRARIES } from "../data/skills.js";
import { ITEMS, EQUIPMENT_SLOTS, SET_BONUSES } from "../data/items.js";
import { SHOPS } from "../data/shops.js";
import { MAPS } from "../data/maps.js";
import { ACHIEVEMENTS } from "../data/achievements.js";
import { UPDATE_NOTES } from "../data/updates.js";
import { QUEST_CATEGORIES } from "../data/quests.js";
import { CLASS_REGISTRY, REGISTRY_TOTALS, REGISTRY_CATEGORIES, REGISTRY_KINDS, REGISTRY_TIERS } from "../data/class-registry.js";
import { getSaveSlots } from "../core/save.js";
import { getRaceIdentity, getJobIdentity, getEnemyIdentity } from "../systems/identity.js";
import { getQuestBoard } from "../systems/quests.js";
import { byId, titleCase, formatStat } from "../core/utils.js";
import { computeStats, computeCreationPreview, getTotalLevel, xpToNext, getAvailableAdvancements, getActiveSynergies, getEquippedSetBonuses, getEquippedTitleBonus } from "../systems/leveling.js";
import { canSeeRegistryEntry, getRequirementText, getUnlockRequirementMarkup, getUnlockStatus, getVisibleTreeForPlayer } from "../systems/unlocks.js";
import { isAchievementUnlocked } from "../systems/achievements.js";
import { prepareRecruitOffer } from "../systems/party.js";
import { button, nav, bar, statGrid, statusPills, inventoryList, skillList, combatLog } from "./components.js";
import { escapeHtml } from "./dom.js";

const CREATION_FILTER_DEFAULTS = {
  raceSearch: "",
  raceCategory: "all",
  raceTier: "all",
  raceFocus: "all",
  jobSearch: "",
  jobCategory: "all",
  jobTier: "all",
  jobFocus: "all"
};

const FOCUS_OPTIONS = ["all", "physical", "magic", "defense", "speed", "support", "balanced"];

function uniqueSorted(values) {
  return ["all", ...[...new Set(values.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b)))];
}

const RACE_CATEGORY_OPTIONS = uniqueSorted(RACES.map(item => item.category));
const RACE_TIER_OPTIONS = uniqueSorted(RACES.map(item => item.tier));
const JOB_CATEGORY_OPTIONS = uniqueSorted(JOBS.map(item => item.category));
const JOB_TIER_OPTIONS = uniqueSorted(JOBS.map(item => item.tier));

export function mainMenu(state) {
  return `<section class="screen">
    <div class="hero">
      <p class="version">${CONFIG.version}</p>
      <h1 class="title">${CONFIG.title}</h1>
      <p class="subtitle">An original fantasy text RPG with light anime-style class progression, roguelike dungeon runs, and YGGDRASIL-inspired race/job levels.</p>
      <div class="actions">
        ${button("Open Full New Game Builder", "go", "character-create")}
        ${button("Load Game", "openLoadMenu", "", "secondary")}
        ${button("Class Registry", "go", "class-registry", "secondary")}
        ${button("Update Notes", "go", "updates", "secondary")}
      </div>
    </div>
    ${newGameQuickBuilder(state)}
    ${newsCard()}
  </section>`;
}

function newsCard() {
  return `<section class="card">
    <h2>Improvement Build</h2>
    <p>Total Level = Race Levels + Job Levels. This version adds the Excel race/job data import, 5 save slots, class trees, synergies, set bonuses, achievements, enemy intent, expanded events, recruit personality, update notes, v0.4.0 real unlock conditions, and v0.6.1 polished naming/shop tabs, v0.6.2 Basic Abilities, and v0.6.3 race/job layout polish, and v0.7.0 quest/identity/boss systems.</p>
  </section>`;
}

function newGameQuickBuilder(state) {
  // This is the same filter system used by Character Creation, exposed directly on
  // the Main Menu so players can find a race/job before committing to New Game.
  const cc = state.characterCreation;
  const filters = { ...CREATION_FILTER_DEFAULTS, ...(state.ui.creationFilters ?? {}) };
  const filteredRaces = filterCreationChoices(RACES, filters, "race");
  const filteredJobs = filterCreationChoices(JOBS, filters, "job");
  const raceLimit = 8;
  const jobLimit = 8;
  const selectedRaceVisible = filteredRaces.some(item => item.id === cc.raceId);
  const selectedJobVisible = filteredJobs.some(item => item.id === cc.jobId);

  return `<section class="card new-game-quick-builder">
    <div class="row between">
      <div>
        <h2>New Game Quick Builder</h2>
        <p class="small">Search and filter the imported Excel races/jobs before starting. The Main Menu shows compact results; open the full builder for larger cards and more detail.</p>
      </div>
      <span class="pill">Selected build ready</span>
    </div>
    <section class="grid two">
      <div class="card"><label>Character Name</label><input data-input="characterName" value="${escapeHtml(cc.name)}" maxlength="24" /></div>
      ${creationPreview(cc)}
    </section>
    <section class="card quick-filter-card">
      <div class="row between"><h3>Race Filters</h3><span class="pill">${filteredRaces.length}/${RACES.length} shown</span></div>
      ${creationFilterPanel("race", filters, filteredRaces.length, RACES.length)}
    </section>
    ${selectedRaceVisible ? "" : selectedChoiceNotice("race", cc.raceId, RACES)}
    <div class="grid auto compact-choice-grid">
      ${filteredRaces.slice(0, raceLimit).map(compactChoiceCard(cc.raceId, "selectRace", "race")).join("") || emptyFilterCard("races")}
    </div>
    ${filteredRaces.length > raceLimit ? `<p class="small">Showing first ${raceLimit} race matches on the Main Menu. Use search/filter more or open the full builder to browse everything.</p>` : ""}
    <section class="card quick-filter-card">
      <div class="row between"><h3>Job Filters</h3><span class="pill">${filteredJobs.length}/${JOBS.length} shown</span></div>
      ${creationFilterPanel("job", filters, filteredJobs.length, JOBS.length)}
    </section>
    ${selectedJobVisible ? "" : selectedChoiceNotice("job", cc.jobId, JOBS)}
    <div class="grid auto compact-choice-grid">
      ${filteredJobs.slice(0, jobLimit).map(compactChoiceCard(cc.jobId, "selectJob", "job")).join("") || emptyFilterCard("jobs")}
    </div>
    ${filteredJobs.length > jobLimit ? `<p class="small">Showing first ${jobLimit} job matches on the Main Menu. Use search/filter more or open the full builder to browse everything.</p>` : ""}
    <div class="actions">
      ${button("Start Selected Build", "startCharacter")}
      ${button("Open Full Builder", "go", "character-create", "secondary")}
      ${button("Reset Filters", "resetCreationFilters", "", "ghost")}
    </div>
  </section>`;
}

function compactChoiceCard(selectedId, action, type) {
  return item => classProfileCard(item, {
    type,
    selected: selectedId === item.id,
    compact: true,
    action,
    actionLabel: selectedId === item.id ? "Selected" : `Choose ${titleCase(type)}`
  });
}

function classProfileCard(item, { type = "race", selected = false, compact = false, action = "", actionLabel = "Choose", level = null } = {}) {
  const isJob = type === "job" || String(item.kind ?? "").toLowerCase().includes("job");
  const headingLabel = isJob ? "Job" : "Race";
  const identity = isJob ? getJobIdentity(item) : getRaceIdentity(item);
  const tags = getDisplayTags(item, isJob, identity);
  const maxLevel = item.maxLevel ?? item.maxLv ?? "?";
  const description = item.description || `${headingLabel} option from the imported class data.`;
  const status = getStatusSummary(item);
  const weapons = isJob ? (identity.preferredWeapons ?? getWeaponOptions(item).split(", ")).join(", ") : "";
  const strengths = formatTraitList(item.strengths, isJob ? "Specializes in a focused combat role." : "Flexible growth path with clear identity.");
  const weaknesses = formatTraitList(item.weaknesses, isJob ? "Requires the right weapons and resource support." : "Needs careful class pairing to cover weak points.");
  const levelLine = level ? `<span class="pill">Level ${level.level}/${level.maxLevel}</span>` : "";
  const actionButton = action ? button(actionLabel, action, item.id, selected ? "ghost" : "secondary") : "";
  const identityBlock = isJob
    ? `<div class="identity-grid">
        <div class="class-profile-section"><strong>Main Role</strong><p>${escapeHtml(identity.mainRole)}</p></div>
        <div class="class-profile-section"><strong>Allowed Skill Types</strong><p>${escapeHtml(identity.allowedSkillTypes.join(", "))}</p></div>
        <div class="class-profile-section"><strong>Preferred Spell Schools</strong><p>${escapeHtml(identity.preferredSpellSchools.join(", "))}</p></div>
        <div class="class-profile-section"><strong>Passive Mastery Bonus</strong><p>${escapeHtml(identity.passiveMasteryBonus)}</p></div>
        <div class="class-profile-section"><strong>Upgrade Path</strong><p>${escapeHtml(identity.upgradePath)}</p></div>
        <div class="class-profile-section"><strong>Signature Ability</strong><p>${escapeHtml(identity.signatureAbility)}</p></div>
      </div>`
    : `<div class="identity-grid">
        <div class="class-profile-section"><strong>Passive Trait</strong><p>${escapeHtml(identity.passiveTrait)}</p></div>
        <div class="class-profile-section"><strong>Intrinsic Skill / Spell</strong><p>${escapeHtml(identity.intrinsicSkill)}</p></div>
        <div class="class-profile-section"><strong>Evolution Bonus</strong><p>${escapeHtml(identity.evolutionBonus)}</p></div>
        <div class="class-profile-section"><strong>Weakness / Limitation</strong><p>${escapeHtml(identity.limitation)}</p></div>
        <div class="class-profile-section"><strong>Unique Unlock Path</strong><p>${escapeHtml(identity.uniqueUnlockPath)}</p></div>
      </div>`;
  return `<article class="card class-profile-card ${compact ? "compact-choice" : ""} ${selected ? "selected" : ""}">
    <div class="class-profile-header">
      <div><span class="layout-label">${headingLabel}</span><h3>${escapeHtml(item.name)}</h3></div>
      <div class="class-profile-meta"><span class="pill">Max Level ${escapeHtml(maxLevel)}</span>${levelLine}</div>
    </div>
    <div class="class-profile-section"><strong>Status</strong><p>${escapeHtml(status)}</p></div>
    ${isJob ? `<div class="class-profile-section"><strong>Weapon/s</strong><p>${escapeHtml(weapons)}</p></div>` : ""}
    <div class="class-profile-section"><strong>Tags</strong><p>${tags}</p></div>
    ${identityBlock}
    <div class="class-profile-section"><strong>Unique Description</strong><p>${escapeHtml(description)}</p></div>
    <div class="class-profile-traits">
      <div><strong>Strengths</strong><ul>${strengths}</ul></div>
      <div><strong>Weaknesses</strong><ul>${weaknesses}</ul></div>
    </div>
    ${actionButton}
  </article>`;
}

function formatTraitList(list = [], fallback = "None listed.") {
  const values = (list ?? []).filter(Boolean);
  return (values.length ? values : [fallback]).map(text => `<li>${escapeHtml(text)}</li>`).join("");
}

function getDisplayTags(item, isJob, identity = null) {
  const tags = [
    item.category ?? "Uncategorized",
    titleCase(item.tier ?? "base"),
    `Focus: ${titleCase(getBuildFocus(item))}`,
    item.balanceTemplate ? `Template: ${titleCase(item.balanceTemplate)}` : "",
    item.roleIdentity ? `Role: ${titleCase(item.roleIdentity)}` : "",
    item.overlapGroup ? `Group: ${titleCase(item.overlapGroup)}` : "",
    isJob ? "Weapon Locked" : "Bloodline / Species",
    ...(identity?.tags ?? [])
  ].filter(Boolean);
  return tags.slice(0, 7).map(tag => `<span class="pill">${escapeHtml(tag)}</span>`).join(" ");
}

function getStatusSummary(item) {
  const scores = getBasicAbilityBias(item);
  const top = Object.entries(scores).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const labelMap = { strength: "Strength", endurance: "Endurance", dexterity: "Dexterity", agility: "Agility", magic: "Magic" };
  const topText = top.map(([key, value]) => `${labelMap[key]} +${value}`).join(" · ");
  const legacy = statsText(item.stats ?? {});
  return `${topText || "Balanced Basic Ability growth"}${legacy !== "None" ? ` | Legacy bias: ${legacy}` : ""}`;
}

function getBasicAbilityBias(item) {
  const stats = item.stats ?? {};
  const growth = item.levelGrowth ?? {};
  const source = {
    str: (stats.str ?? 0) + (growth.str ?? 0) * 3,
    dex: (stats.dex ?? 0) + (growth.dex ?? 0) * 3,
    int: (stats.int ?? 0) + (growth.int ?? 0) * 3,
    wis: (stats.wis ?? 0) + (growth.wis ?? 0) * 3,
    con: (stats.con ?? 0) + (growth.con ?? 0) * 3,
    cha: (stats.cha ?? 0) + (growth.cha ?? 0) * 3
  };
  return {
    strength: Math.max(0, Math.floor(source.str * 36 + source.con * 8 + source.dex * 5 + source.cha * 2)),
    endurance: Math.max(0, Math.floor(source.con * 42 + source.str * 8 + source.wis * 5)),
    dexterity: Math.max(0, Math.floor(source.dex * 36 + source.str * 6 + source.int * 5 + source.wis * 2)),
    agility: Math.max(0, Math.floor(source.dex * 28 + source.cha * 8 + source.wis * 5 + source.str * 2)),
    magic: Math.max(0, Math.floor(source.int * 34 + source.wis * 18 + source.cha * 5))
  };
}

function getWeaponOptions(item) {
  const text = `${item.name} ${item.category ?? ""} ${item.description ?? ""} ${(item.strengths ?? []).join(" ")} ${(item.tags ?? []).join(" ")}`.toLowerCase();
  if (text.match(/(berserker|barbarian|brute|crusher|destroyer|titan|giant|maul|rage)/)) return "Greatsword, Greataxe, Maul, Heavy Club";
  if (text.match(/(knight|paladin|guardian|sentinel|fortress|shield|defender|templar)/)) return "Sword, Mace, Spear, Shield";
  if (text.match(/(ranger|archer|sniper|hunter|bow|marksman|scout)/)) return "Bow, Crossbow, Dagger, Shortsword";
  if (text.match(/(rogue|assassin|thief|ninja|shadow|trickster|duelist)/)) return "Dagger, Shortsword, Rapier, Throwing Knives";
  if (text.match(/(monk|martial|ki|fist|open hand|brawler|pugilist)/)) return "Unarmed, Fist Wraps, Quarterstaff, Prayer Beads";
  if (text.match(/(alchemist|plague|doctor|bomb|potion|chemist|artificer|engineer)/)) return "Dagger, Alchemy Tools, Bomb Satchel, Catalyst";
  if (text.match(/(bard|skald|singer|song|dancer|performer|lore keeper)/)) return "Rapier, Dagger, Instrument, Light Crossbow";
  if (text.match(/(cleric|priest|bishop|oracle|healer|exorcist|saint|holy)/)) return "Mace, Staff, Wand, Holy Catalyst, Shield";
  if (text.match(/(mage|wizard|sorcerer|arcanist|witch|warlock|sage|necromancer|elementalist|spell|caster)/)) return "Staff, Wand, Grimoire, Catalyst";
  if (text.match(/(spellblade|rune knight|hex|aether|samurai|magic sword|arcane blade)/)) return "Sword, Katana, Dagger, Wand, Catalyst";
  if (text.match(/(tamer|summoner|beast master|pack|companion)/)) return "Whip, Staff, Dagger, Taming Charm";
  if (text.match(/(death|grave|lich|reaper|undead|dark)/)) return "Scythe, Staff, Dagger, Dark Catalyst";
  if (text.match(/(fighter|warrior|soldier|weapon|mercenary|vanguard)/)) return "Sword, Axe, Spear, Shield";
  return "Simple Weapons, Dagger, Staff, Sidearm";
}

export function saveMenu(state) {
  const mode = state.ui.saveMenuMode ?? "load";
  const slots = getSaveSlots();
  const backTarget = state.player ? "hub" : "main-menu";
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Save / Load Menu</h1><p class="subtitle">Five browser save slots are stored with localStorage on this device/browser. Current mode: <span class="kpi">${titleCase(mode)}</span>.</p></div>
    <div class="actions">
      ${button("Save Mode", "openSaveMenu", "", mode === "save" ? "ghost" : "secondary")}
      ${button("Load Mode", "openLoadMenu", "", mode === "load" ? "ghost" : "secondary")}
      ${button("Back", "go", backTarget, "secondary")}
    </div>
    <section class="grid auto">${slots.map(slot => saveSlotCard(slot, mode, Boolean(state.player))).join("")}</section>
    ${combatLog(state)}
  </section>`;
}

function saveSlotCard(slot, mode, canSave) {
  const date = slot.savedAt ? new Date(slot.savedAt).toLocaleString() : "Never";
  const detail = slot.exists
    ? `<p><strong>${escapeHtml(slot.title ? `${slot.title} ` : "")}${escapeHtml(slot.name)}</strong></p><p class="small">Lv ${slot.totalLevel} · ${escapeHtml(slot.raceName)} / ${escapeHtml(slot.jobName)} · ${slot.gold} gold · Floor ${slot.floor}</p><p class="small">Saved: ${date}</p>`
    : `<p><strong>Empty Slot</strong></p><p class="small">No save data found here.</p>`;
  const primary = mode === "save"
    ? button(canSave ? "Save Here" : "Create Character First", "saveSlot", slot.slot, canSave ? "" : "ghost")
    : button(slot.exists ? "Load Slot" : "Empty", "loadSlot", slot.slot, slot.exists ? "" : "ghost");
  return `<article class="card save-slot ${slot.exists ? "filled" : ""}">
    <h3>Slot ${slot.slot}</h3>${detail}
    <div class="actions">${primary}${button("Delete", "deleteSlot", slot.slot, "danger")}</div>
  </article>`;
}

export function characterCreate(state) {
  const cc = state.characterCreation;
  const filters = { ...CREATION_FILTER_DEFAULTS, ...(state.ui.creationFilters ?? {}) };
  const filteredRaces = filterCreationChoices(RACES, filters, "race");
  const filteredJobs = filterCreationChoices(JOBS, filters, "job");
  const selectedRaceVisible = filteredRaces.some(item => item.id === cc.raceId);
  const selectedJobVisible = filteredJobs.some(item => item.id === cc.jobId);
  return `<section class="screen">
    <div class="hero"><h1>Create Your Legend</h1><p class="subtitle">Choose 1 starting race and 1 starting job. Use filters to search the imported Excel race/job list by name, category, tier, or build focus.</p></div>
    <section class="grid two"><div class="card"><label>Character Name</label><input data-input="characterName" value="${escapeHtml(cc.name)}" maxlength="24" /></div>${creationPreview(cc)}</section>
    <section class="card">
      <h2>Race Filters</h2>
      ${creationFilterPanel("race", filters, filteredRaces.length, RACES.length)}
    </section>
    ${selectedRaceVisible ? "" : selectedChoiceNotice("race", cc.raceId, RACES)}
    <h2>Starting Races <span class="pill">${filteredRaces.length}/${RACES.length} shown</span></h2>
    <div class="grid auto">${filteredRaces.map(raceCard(cc.raceId, "selectRace")).join("") || emptyFilterCard("races")}</div>
    <section class="card">
      <h2>Job Filters</h2>
      ${creationFilterPanel("job", filters, filteredJobs.length, JOBS.length)}
    </section>
    ${selectedJobVisible ? "" : selectedChoiceNotice("job", cc.jobId, JOBS)}
    <h2>Starting Jobs <span class="pill">${filteredJobs.length}/${JOBS.length} shown</span></h2>
    <div class="grid auto">${filteredJobs.map(jobCard(cc.jobId, "selectJob")).join("") || emptyFilterCard("jobs")}</div>
    <div class="actions">${button("Begin Legend", "startCharacter")} ${button("Reset Filters", "resetCreationFilters", "", "secondary")} ${button("Back", "go", "main-menu", "ghost")}</div>
  </section>`;
}

function creationPreview(cc) {
  const preview = computeCreationPreview(cc.raceId, cc.jobId);
  const skills = preview.skillIds.map(id => byId(SKILLS, id)?.name ?? titleCase(id)).join(", ");
  const synergyText = preview.synergies.length
    ? preview.synergies.map(s => `<span class="pill synergy">${s.name}</span>`).join(" ")
    : `<span class="pill">No special synergy</span>`;
  return `<div class="card preview-card"><h2>Build Preview</h2>
    <p><strong>${preview.race.name}</strong> + <strong>${preview.job.name}</strong></p>
    ${statGrid(preview.stats)}
    <p class="small"><strong>Starting Skills:</strong> ${skills}</p>
    <p class="small"><strong>Synergy:</strong> ${synergyText}</p>
  </div>`;
}

function creationFilterPanel(type, filters, shown, total) {
  const prefix = type === "race" ? "race" : "job";
  const categoryOptions = type === "race" ? RACE_CATEGORY_OPTIONS : JOB_CATEGORY_OPTIONS;
  const tierOptions = type === "race" ? RACE_TIER_OPTIONS : JOB_TIER_OPTIONS;
  return `<div class="filter-grid creation-filter-grid">
    <label>Search ${titleCase(type)}<input data-input="creation.${prefix}Search" value="${escapeHtml(filters[`${prefix}Search`] ?? "")}" placeholder="Search name, description, strength..." /></label>
    ${selectField("Category", `creation.${prefix}Category`, categoryOptions, filters[`${prefix}Category`] ?? "all")}
    ${selectField("Tier", `creation.${prefix}Tier`, tierOptions, filters[`${prefix}Tier`] ?? "all")}
    ${selectField("Build Focus", `creation.${prefix}Focus`, FOCUS_OPTIONS, filters[`${prefix}Focus`] ?? "all")}
    <div class="filter-count"><strong>${shown}</strong><span class="small">of ${total} ${type === "race" ? "races" : "jobs"}</span></div>
  </div>`;
}

function filterCreationChoices(list, filters, type) {
  const prefix = type === "race" ? "race" : "job";
  const search = String(filters[`${prefix}Search`] ?? "").trim().toLowerCase();
  const category = filters[`${prefix}Category`] ?? "all";
  const tier = filters[`${prefix}Tier`] ?? "all";
  const focus = filters[`${prefix}Focus`] ?? "all";
  return list.filter(item => {
    if (item.registryVisible === false || item.deprecatedOverlap) return false;
    if (category !== "all" && item.category !== category) return false;
    if (tier !== "all" && item.tier !== tier) return false;
    if (focus !== "all" && getBuildFocus(item) !== focus) return false;
    if (search) {
      const haystack = `${item.name} ${item.category ?? ""} ${item.tier ?? ""} ${item.description ?? ""} ${(item.strengths ?? []).join(" ")} ${(item.weaknesses ?? []).join(" ")}`.toLowerCase();
      if (!matchesSearchText(haystack, search)) return false;
    }
    return true;
  });
}

function normalizeSearchText(text = "") {
  return String(text).toLowerCase()
    .replace(/elves/g, "elf")
    .replace(/dwarves/g, "dwarf")
    .replace(/fairies/g, "fairy")
    .replace(/halflings/g, "halfling")
    .replace(/gnomes/g, "gnome")
    .replace(/spirits/g, "spirit")
    .replace(/angels/g, "angel")
    .replace(/demons/g, "demon")
    .replace(/devils/g, "devil")
    .replace(/orcs/g, "orc")
    .replace(/ogres/g, "ogre")
    .replace(/goblins/g, "goblin")
    .replace(/kobolds/g, "kobold")
    .replace(/giants/g, "giant")
    .replace(/titans/g, "titan")
    .replace(/mages/g, "mage");
}

function matchesSearchText(haystack, search) {
  const normalizedSearch = normalizeSearchText(search).replace(/[^a-z0-9]+/g, " ").trim();
  if (!normalizedSearch) return true;
  const normalizedHaystack = normalizeSearchText(haystack).replace(/[^a-z0-9]+/g, " ").trim();
  if (normalizedHaystack.includes(normalizedSearch)) return true;
  const tokens = normalizedHaystack.split(/\s+/).filter(Boolean);
  const searchTokens = normalizedSearch.split(/\s+/).filter(Boolean);
  return searchTokens.every(searchToken =>
    tokens.some(token => token === searchToken || token.startsWith(searchToken))
  );
}

export function getBuildFocus(item) {
  const stats = item.stats ?? {};
  const growth = item.levelGrowth ?? {};
  const score = key => (stats[key] ?? 0) + (growth[key] ?? 0);
  const str = score("str");
  const dex = score("dex");
  const int = score("int");
  const wis = score("wis");
  const con = score("con");
  const cha = score("cha");
  const text = `${item.name} ${item.category ?? ""} ${(item.strengths ?? []).join(" ")} ${item.description ?? ""}`.toLowerCase();

  // Name/category heuristics make the Excel import easier to browse even when many imported
  // races/jobs share similar starter stat templates.
  if (text.match(/\b(heal|healer|support|bard|cleric|priest|tamer|summoner|summon|oracle|charm|inspire|celestial|celestian|spirit|spirits|kitsune)\b/)) return "support";
  if (text.match(/\b(golem|golemforged|dwarf|dwarves|troll|turtle|fortress|guardian|knight|shield|stone|iron|armor|armored|construct)\b/)) return "defense";
  if (text.match(/\b(beast|beastfolk|beastkin|wolf|cat|catfolk|fox|rabbit|bird|harpy|sylph|wind|ninja|rogue|assassin|scout|archer|ranger)\b/)) return "speed";
  if (text.match(/\b(mage|wizard|sorcerer|sorcer|witch|elf|elve|elves|fairy|fairies|fae|fey|demon|demons|devil|devils|oni|yokai|tengu|kappa|tanuki|vampire|undead|lich|dragon|dragonoid|mermaid|siren|arcane|cultivation|cultivator|qi|sage)\b/)) return "magic";
  if (text.match(/\b(warrior|fighter|swordsman|orc|orcs|ogre|ogres|goblin|goblins|kobold|kobolds|lizard|lizardman|lizardmen|giant|giants|titan|titans|minotaur|centaur|berserker|brawler|monk|martial|dragonkin)\b/)) return "physical";

  const maxOtherForCha = Math.max(str, dex, int, wis, con);
  if (cha > maxOtherForCha && cha >= 3) return "support";
  if (con >= Math.max(str, dex, int, wis, cha) && con >= 3) return "defense";
  if (dex >= Math.max(str, int, wis, con, cha) && dex >= 3) return "speed";
  if (int + wis >= str + dex + con && (int >= 3 || wis >= 3)) return "magic";
  if (str + dex >= int + wis + cha && (str >= 3 || dex >= 3)) return "physical";
  return "balanced";
}

function selectedChoiceNotice(type, selectedId, list) {
  const item = byId(list, selectedId);
  if (!item) return "";
  return `<section class="card selected-choice-warning"><p><strong>Selected ${type} is hidden by your filters:</strong> ${escapeHtml(item.name)}. It is still selected unless you choose another ${type}.</p></section>`;
}

function emptyFilterCard(label) {
  return `<article class="card"><h3>No matching ${label}</h3><p>Try clearing search, changing category, or using All for build focus.</p></article>`;
}

function raceCard(selectedId, action) {
  return item => classProfileCard(item, {
    type: "race",
    selected: selectedId === item.id,
    action,
    actionLabel: selectedId === item.id ? "Selected" : "Choose Race"
  });
}

function jobCard(selectedId, action) {
  return item => classProfileCard(item, {
    type: "job",
    selected: selectedId === item.id,
    action,
    actionLabel: selectedId === item.id ? "Selected" : "Choose Job"
  });
}

export function hub(state) {
  const p = state.player;
  const stats = computeStats(p);
  const synergies = getActiveSynergies(p);
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Guild Hub</h1><p class="subtitle">Prepare, spend class levels, recruit allies, buy supplies, or enter the shifting tower.</p></div>
    <section class="grid two">
      <div class="card"><h2>${escapeHtml(p.title)} ${escapeHtml(p.name)}</h2><p>Total Level <span class="kpi">${getTotalLevel(p)}</span> · Gold <span class="kpi">${p.gold}</span> · Relic Dust <span class="kpi">${state.meta.relicDust}</span></p>${resourceBars(p, stats)}</div>
      <div class="card"><h2>Next Goal</h2><p>Gain XP in the dungeon, then spend class points on race or job levels. Maxed base classes can unlock advanced paths.</p><p class="small"><strong>Active Synergies:</strong> ${synergies.length ? synergies.map(s => s.name).join(", ") : "None"}</p><div class="actions">${button("Enter Dungeon", "startRun")} ${button("Quest Board", "go", "quests", "secondary")} ${button("Status / Class", "go", "status", "secondary")}</div></div>
    </section>
    ${partyCard(p)}
    ${combatLog(state)}
  </section>`;
}

function resourceBars(p, stats) {
  return `${bar("HP", p.hp, stats.maxHp, "hp")}${bar("Mana", p.mana, stats.maxMana, "mp")}${bar("Stamina", p.stamina, stats.maxStamina, "stamina")}${bar("XP", p.xp, xpToNext(p), "xp")}`;
}

function partyCard(player) {
  if (!player.party?.length) return `<section class="card"><h2>Party</h2><p class="small">No recruits yet. Dungeon events can offer party members.</p></section>`;
  return `<section class="card"><h2>Party</h2><div class="grid auto">${player.party.map(member => `<article class="mini-card"><h3>${member.name}</h3><p><span class="pill">${member.role}</span></p><p class="small">${member.passive ?? "No passive listed."}</p></article>`).join("")}</div></section>`;
}

export function statusScreen(state) {
  const p = state.player;
  const stats = computeStats(p);
  const synergies = getActiveSynergies(p);
  const titleBonus = getEquippedTitleBonus(p);
  const raceAdv = getAvailableAdvancements(state, "race");
  const jobAdv = getAvailableAdvancements(state, "job");
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Status / Race & Job Progression</h1><p class="subtitle">Overall Level ${getTotalLevel(p)} = ${p.raceLevels.reduce((a,c)=>a+c.level,0)} race levels + ${p.jobLevels.reduce((a,c)=>a+c.level,0)} job levels. Unspent class levels: <span class="kpi">${p.unspentClassLevels}</span>.</p></div>
    <section class="grid two">
      <div class="card"><h2>${escapeHtml(p.title)} ${escapeHtml(p.name)}</h2>${resourceBars(p, stats)}<p>Status: ${statusPills(p.statusEffects)}</p></div>
      <div class="card"><h2>Basic Abilities</h2><p class="small">Visible values reset to I 0 after each race evolution or job upgrade. Stacked totals stay in the background and power derived combat stats.</p>${statGrid(stats)}${titleBonus ? `<p class="small"><strong>Equipped title bonus:</strong> ${escapeHtml(titleBonus.title)} (${escapeHtml(titleCase(titleBonus.difficulty))}) · ${escapeHtml(statsText(titleBonus.stats))}</p>` : `<p class="small"><strong>Equipped title bonus:</strong> None yet.</p>`}</div>
    </section>
    <section class="card"><h2>Current Build</h2>${classRows(p.raceLevels, "Race")}${classRows(p.jobLevels, "Job")}</section>
    <section class="card"><h2>Build Synergies</h2>${synergies.length ? synergies.map(s => `<article class="mini-card"><h3>${s.name}</h3><p>${s.description}</p><p class="small">Bonus: ${statsText(s.stats)}</p></article>`).join("") : `<p class="small">No active race/job synergy yet.</p>`}</section>
    <section class="grid two">
      <div class="card"><h2>Spend Race Levels</h2>${progressRows(p.raceLevels, "race")}</div>
      <div class="card"><h2>Spend Job Levels</h2>${progressRows(p.jobLevels, "job")}</div>
    </section>
    <section class="grid two">
      <div class="card"><h2>Valid Race Upgrades</h2>${advancementRows(raceAdv, "race")}</div>
      <div class="card"><h2>Valid Job Upgrades</h2>${advancementRows(jobAdv, "job")}</div>
    </section>
    <section class="grid two">
      <div class="card"><h2>Race Evolution Tree</h2>${classTree(state, "race")}</div>
      <div class="card"><h2>Job Class Tree</h2>${classTree(state, "job")}</div>
    </section>
  </section>`;
}

function classRows(classes, label) {
  const type = label.toLowerCase() === "job" ? "job" : "race";
  return `<h3>${label} Levels</h3><div class="class-row-stack">${classes.map(cls => {
    const data = [...RACES, ...RACE_PATHS, ...JOBS, ...JOB_PATHS].find(item => item.id === cls.id) ?? cls;
    const abilityNames = [
      ...(data?.startingSkills ?? []),
      ...(data?.learns ?? []).map(learn => learn.skillId)
    ].slice(0, 6).map(id => byId(SKILLS, id)?.name ?? titleCase(id)).join(", ");
    return `${classProfileCard({ ...data, name: cls.name, tier: cls.tier, maxLevel: cls.maxLevel }, { type, level: cls })}<div class="linked-abilities-note small"><strong>Linked abilities:</strong> ${escapeHtml(abilityNames || "None")}</div>`;
  }).join("")}</div>`;
}

export function progressionScreen(state) {
  // v0.5.0: Race/Job progression was merged into the Status screen.
  return statusScreen(state);
}

function progressRows(classes, track) {
  return classes.map((cls, index) => `<div class="class-row card">
    <div><strong>${cls.name}</strong> <span class="pill">${cls.tier}</span><p class="small">Level ${cls.level}/${cls.maxLevel}</p></div>
    ${button("+ Level", "spendPoint", `${track}:${index}`, cls.level >= cls.maxLevel ? "ghost" : "secondary")}
  </div>`).join("");
}

function reqText(req = {}) {
  return getRequirementText(req);
}

function advancementRows(paths, track) {
  if (!paths.length) return `<p class="small">No valid upgrades right now. Level your current ${track} classes to their requirement caps, defeat bosses, or gather Relic Dust to reveal more paths.</p>`;
  return paths.map(path => `<article class="card unlock-card">
    <h3>${escapeHtml(path.name)} <span class="pill">${escapeHtml(path.tier)}</span></h3><p>${escapeHtml(path.description)}</p>
    <p class="small">From: ${escapeHtml(path.sourceName)} · Requirements: ${escapeHtml(reqText(path.requirements))}</p>
    <div class="requirement-list">${getUnlockRequirementMarkup(path.unlockStatus)}</div>
    ${button("Unlock Path", "addClass", `${track}:${path.id}`)}
  </article>`).join("");
}


function classTree(state, track) {
  const rows = getVisibleTreeForPlayer(state, track);
  if (!rows.length) return `<p class="small">No class tree available yet.</p>`;
  return `<div class="tree-list current-tree">${rows.map(node => {
    const sourceData = node.data ?? {};
    const children = node.children ?? [];
    return `<div class="tree-node known"><strong>${escapeHtml(node.name)}</strong> <span class="pill">${escapeHtml(node.tier)}</span><div class="small">Level ${node.level}/${node.maxLevel}</div>
      <div class="tree-children">
        ${children.length ? children.map(child => {
          if (child.mystery) return `<div class="tree-child secret locked">↳ ???? <span class="pill">Hidden</span><div class="small">${escapeHtml(child.requirement)}</div></div>`;
          const status = child.unlockStatus ?? getUnlockStatus(state, track, child);
          return `<div class="tree-child ${status.met ? "unlockable" : "locked"}">↳ ${escapeHtml(child.name)} <span class="pill">${escapeHtml(child.tier)}</span><div class="small">${status.met ? "Ready to unlock" : `Req: ${escapeHtml(reqText(child.requirements))}`}</div></div>`;
        }).join("") : `<div class="small">No visible path from this class yet.</div>`}
      </div>
    </div>`;
  }).join("")}</div>`;
}


function selectField(label, inputName, values, selected) {
  return `<label>${label}<select data-input="${inputName}">${values.map(value => `<option value="${escapeHtml(value)}" ${String(value) === String(selected) ? "selected" : ""}>${escapeHtml(value === "all" ? "All" : titleCase(value))}</option>`).join("")}</select></label>`;
}

function registryRequirementText(entry) {
  const req = entry.requirements ?? {};
  const text = getRequirementText(req, { fallback: "Excel requirement converted into v0.4 unlock checks" });
  return text || "none";
}


function registryStatsText(entry) {
  const data = [...RACES, ...RACE_PATHS, ...JOBS, ...JOB_PATHS].find(item => item.id === entry.id);
  return statsText(data?.stats ?? {});
}


function registryAbilityText(entry) {
  const data = [...RACES, ...RACE_PATHS, ...JOBS, ...JOB_PATHS].find(item => item.id === entry.id);
  const ids = [
    ...(data?.startingSkills ?? []),
    ...(data?.learns ?? []).map(learn => learn.skillId)
  ];
  const names = [...new Set(ids)].slice(0, 6).map(id => byId(SKILLS, id)?.name ?? titleCase(id));
  return names.join(", ") || "No linked ability yet";
}

function registryCard(entry) {
  const data = [...RACES, ...RACE_PATHS, ...JOBS, ...JOB_PATHS].find(item => item.id === entry.id) ?? entry;
  const isJob = entry.track === "job" || String(entry.kind).toLowerCase().includes("job");
  return `<article class="card registry-card">
    <div class="row between"><span class="pill">Excel ${escapeHtml(entry.excelId)}</span><span class="pill">${escapeHtml(entry.kind)}</span></div>
    ${classProfileCard({ ...entry, ...data, kind: entry.kind }, { type: isJob ? "job" : "race" })}
    <p class="small"><strong>Abilities:</strong> ${escapeHtml(registryAbilityText(entry))}</p>
    <p class="small"><strong>Requirement:</strong> ${escapeHtml(registryRequirementText(entry))}</p>
  </article>`;
}

export function classRegistryScreen(state) {
  const filters = { search: "", kind: "all", category: "all", tier: "all", ...(state.ui.registryFilters ?? {}) };
  const search = filters.search.trim().toLowerCase();
  const hiddenTotal = CLASS_REGISTRY.filter(entry => String(entry.tier).toLowerCase() === "hidden").length;
  const filtered = CLASS_REGISTRY.filter(entry => {
    if (!canSeeRegistryEntry(state, entry)) return false;
    if (filters.kind !== "all" && entry.kind !== filters.kind) return false;
    if (filters.category !== "all" && entry.category !== filters.category) return false;
    if (filters.tier !== "all" && entry.tier !== filters.tier) return false;
    if (search) {
      const haystack = `${entry.name} ${entry.category} ${entry.kind} ${entry.tier} ${entry.description}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });
  const visible = filtered.slice(0, 120);
  const backTarget = state.player ? "hub" : "main-menu";
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Class Registry</h1><p class="subtitle">Excel import loaded: <span class="kpi">${REGISTRY_TOTALS.races}</span> races, <span class="kpi">${REGISTRY_TOTALS.racePaths}</span> race evolutions, <span class="kpi">${REGISTRY_TOTALS.baseJobs}</span> base jobs, and <span class="kpi">${REGISTRY_TOTALS.jobPaths}</span> job paths. Showing ${visible.length} of ${filtered.length} matching entries. Hidden/secret classes stay concealed until their unlock requirements are met. Concealed hidden entries: <span class="kpi">${hiddenTotal}</span>. Exact duplicate/overlap cleanup entries are hidden from normal browsing.</p></div>
    <section class="card">
      <h2>Filters</h2>
      <div class="filter-grid">
        <label>Search<input data-input="registry.search" value="${escapeHtml(filters.search)}" placeholder="Search race, job, category, tier..." /></label>
        ${selectField("Type", "registry.kind", REGISTRY_KINDS, filters.kind)}
        ${selectField("Tier", "registry.tier", REGISTRY_TIERS, filters.tier)}
        ${selectField("Category / World", "registry.category", REGISTRY_CATEGORIES, filters.category)}
      </div>
      <div class="actions">${button("Reset Filters", "resetRegistryFilters", "", "secondary")} ${button("Back", "go", backTarget, "ghost")}</div>
    </section>
    ${filtered.length > visible.length ? `<section class="card"><p class="small">Large result set capped at 120 cards for mobile performance. Use search or filters to narrow the registry.</p></section>` : ""}
    <section class="grid auto">${visible.map(registryCard).join("") || `<article class="card"><h3>No matches</h3><p>Try a different search or reset the filters.</p></article>`}</section>
  </section>`;
}


export function skillsScreen(state) {
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Skills & Spells</h1><p class="subtitle">Physical skills use stamina. Magic spells use mana. Cooldowns matter in long boss fights.</p></div>${skillList(state.player)}</section>`;
}

export function inventoryScreen(state) {
  const p = state.player;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Inventory & Equipment</h1><p class="subtitle">Equip gear to modify stats. Wearing multiple pieces from a set unlocks set bonuses.</p></div>
    <section class="grid two"><div class="card"><h2>Equipment</h2>${equipmentRows(p)}</div><div class="card"><h2>Inventory</h2>${inventoryList(p)}</div></section>
    <section class="card"><h2>Set Bonuses</h2>${setBonusRows(p)}</section>
  </section>`;
}

function equipmentRows(p) {
  return EQUIPMENT_SLOTS.map(slot => {
    const item = byId(ITEMS, p.equipment?.[slot]);
    const set = item?.set ? `<span class="pill">${titleCase(item.set)}</span>` : "";
    return `<div class="item-row"><div><strong>${titleCase(slot)}</strong><p class="small">${item ? `${item.name} ${set}` : "Empty"}</p></div>${item ? button("Unequip", "unequipSlot", slot, "secondary") : ""}</div>`;
  }).join("");
}

function setBonusRows(player) {
  const active = getEquippedSetBonuses(player);
  const counts = {};
  for (const itemId of Object.values(player.equipment ?? {})) {
    const item = byId(ITEMS, itemId);
    if (item?.set) counts[item.set] = (counts[item.set] ?? 0) + 1;
  }
  return SET_BONUSES.map(set => `<article class="mini-card"><h3>${set.name} <span class="pill">${counts[set.id] ?? 0} pieces</span></h3>${set.thresholds.map(t => `<p class="small ${active.some(a => a.setId === set.id && a.pieces >= t.pieces) ? "active-bonus" : ""}">${t.pieces} pieces: ${t.description}</p>`).join("")}</article>`).join("");
}

export function shopScreen(state) {
  const shop = byId(SHOPS, state.ui.selectedShop) ?? SHOPS[0];
  const shopBody = shop.abilityShop
    ? abilityShopSection(state)
    : `<section class="card"><h2>${shop.name}</h2><p>${shop.description}</p>${shop.stock.map(itemId => shopItem(itemId, state.player.gold)).join("")}</section>`;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Shop</h1><p class="subtitle">Gold: <span class="kpi">${state.player.gold}</span>. Pick a shop tab below to buy supplies, gear, or Excel-imported abilities.</p></div>
    <div class="actions shop-tabs">${SHOPS.map(s => button(s.name, "selectShop", s.id, s.id === shop.id ? "ghost" : "secondary")).join("")}</div>
    ${shopBody}
  </section>`;
}

function abilityShopSection(state) {
  const filters = { search: "", library: "all", kind: "all", rank: "all", ...(state.ui.abilityFilters ?? {}) };
  const libraryOptions = ["all", ...SKILL_SHOP_LIBRARIES.map(lib => lib.id)];
  const kindOptions = ["all", ...[...new Set(SKILLS.filter(s => Number(s.price ?? 0) > 0).map(s => s.kind))].sort()];
  const rankOptions = ["all", ...[...new Set(SKILLS.filter(s => Number(s.price ?? 0) > 0).map(s => s.rank))].sort()];
  const stockIds = new Set(SKILL_SHOP_LIBRARIES
    .filter(lib => filters.library === "all" || lib.id === filters.library)
    .flatMap(lib => lib.stock ?? []));
  const search = String(filters.search ?? "").trim();
  const filtered = SKILLS.filter(skill => {
    if (!stockIds.has(skill.id)) return false;
    if (Number(skill.price ?? 0) <= 0) return false;
    if (filters.kind !== "all" && skill.kind !== filters.kind) return false;
    if (filters.rank !== "all" && skill.rank !== filters.rank) return false;
    if (search) {
      const haystack = `${skill.name} ${skill.kind} ${skill.rank} ${skill.element} ${skill.description} ${skill.source ?? ""} ${(skill.tags ?? []).join(" ")}`;
      if (!matchesSearchText(haystack, search)) return false;
    }
    return true;
  });
  const visible = filtered.slice(0, 80);
  return `<section class="card ability-shop">
    <div class="row between"><div><h2>Skill / Spell Shop Libraries</h2><p class="small">Imported from the Excel Ability Shops sheet. Physical skills use stamina. Magic spells use mana. Passive/intrinsic abilities are shown when available.</p></div><span class="pill">${visible.length}/${filtered.length} shown</span></div>
    <div class="filter-grid">
      <label>Search Abilities<input data-input="ability.search" value="${escapeHtml(filters.search)}" placeholder="fire, sword, heal, passive..." /></label>
      ${selectField("Library", "ability.library", libraryOptions, filters.library)}
      ${selectField("Kind", "ability.kind", kindOptions, filters.kind)}
      ${selectField("Rank", "ability.rank", rankOptions, filters.rank)}
    </div>
    <div class="actions">${button("Reset Ability Filters", "resetAbilityFilters", "", "secondary")}</div>
    <p class="small"><strong>Active filters:</strong> Search “${escapeHtml(filters.search || "any")}” · Library ${escapeHtml(titleCase(filters.library))} · Kind ${escapeHtml(titleCase(filters.kind))} · Rank ${escapeHtml(titleCase(filters.rank))}</p>
    ${filtered.length > visible.length ? `<p class="small">Large ability list capped at 80 cards for mobile performance. Use filters to narrow it down.</p>` : ""}
    <div class="grid auto">${visible.map(skill => abilityShopCard(skill, state.player)).join("") || `<article class="card"><h3>No abilities found</h3><p>Try a different search, library, kind, or rank filter.</p></article>`}</div>
  </section>`;
}

function abilityShopCard(skill, player) {
  const known = player.skills?.includes(skill.id);
  const price = Number(skill.price ?? 0);
  const tags = (skill.tags ?? []).slice(0, 4).map(tag => `<span class="pill">${escapeHtml(tag)}</span>`).join(" ");
  return `<article class="card skill-shop-card ${known ? "selected" : ""}">
    <h3>${escapeHtml(skill.name)}</h3>
    <p><span class="pill">${escapeHtml(skill.kind)}</span> <span class="pill">${escapeHtml(skill.rank)}</span> <span class="pill">${escapeHtml(skill.element)}</span> <span class="pill">${price} gold</span></p>
    <p>${escapeHtml(skill.description)}</p>
    <p class="small">Cost: ${skill.resource === "none" ? "Passive" : `${skill.cost} ${skill.resource}`} · Cooldown: ${skill.cooldown} · Source: ${escapeHtml(skill.source ?? "Ability Library")}</p>
    <p class="small">${tags}</p>
    ${known ? `<span class="pill">Known</span>` : button(player.gold >= price ? "Buy Ability" : "Too Expensive", "buyAbility", skill.id, player.gold >= price ? "" : "ghost")}
  </article>`;
}

function shopItem(itemId, gold) {
  const item = byId(ITEMS, itemId);
  const set = item.set ? `<span class="pill">Set: ${titleCase(item.set)}</span>` : "";
  return `<div class="item-row card"><div><strong>${item.name}</strong> <span class="pill">${item.price} gold</span> ${set}<p>${item.description}</p></div>${button(gold >= item.price ? "Buy" : "Too Expensive", "buyItem", item.id, gold >= item.price ? "" : "ghost")}</div>`;
}

export function mapScreen(state) {
  const map = byId(MAPS, state.run?.mapId) ?? MAPS[0];
  if (!state.run) {
    return `<section class="screen">${nav(state)}<div class="hero"><h1>Map / Dungeon</h1><p class="subtitle">No run active. Start a run from the hub.</p></div><div class="actions">${button("Start Run", "startRun")}</div></section>`;
  }
  const modifier = state.run.battleModifier;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>${map.name}</h1><p class="subtitle">Floor ${state.run.floor}/${map.maxFloor}. Boss floors: ${map.bossFloors.join(", ")}.</p></div>
    <section class="grid two"><div class="card"><h2>Run Progress</h2><p>Rooms cleared: <span class="kpi">${state.run.roomsCleared}</span></p><p>Possible rooms: battles, elites, bosses, merchants, shrines, portals, traps, lore discoveries, training rooms, and recruit events.</p>${modifier ? `<div class="modifier-card"><h3>Current Battle Modifier</h3><p><strong>${escapeHtml(modifier.name)}</strong> — ${escapeHtml(modifier.description)}</p></div>` : ""}</div><div class="card"><h2>Actions</h2><div class="actions">${button("Explore Next Floor", "explore")} ${button("Rest Briefly", "rest", "", "secondary")} ${button("Leave Run", "leaveRun", "", "ghost")}</div></div></section>
    ${combatLog(state)}
  </section>`;
}

export function battleScreen(state) {
  const p = state.player;
  const stats = computeStats(p);
  const enemy = state.combat.enemy;
  const intent = state.combat.enemyIntent;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Battle</h1><p class="subtitle">Round ${state.combat.round}. Turn: <span class="kpi">${state.combat.turn}</span></p></div>
    <section class="combat-layout">
      <div class="card"><h2 class="player-name">${p.name}</h2>${resourceBars(p, stats)}<p>${statusPills(p.statusEffects)}</p><div class="actions">${button("Attack", "attack")} ${button("Inventory", "go", "inventory", "secondary")}</div><h3>Skills</h3>${skillList(p, "battle")}</div>
      <div class="card"><h2 class="enemy-name">${enemy.name}</h2>${bar("HP", enemy.hp, enemy.maxHp, "hp")}<p><span class="pill">${enemy.element}</span> <span class="pill">${escapeHtml(enemy.enemyType ?? "Enemy")}</span> <span class="pill">${escapeHtml(enemy.enemyIdentity?.label ?? getEnemyIdentity(enemy, state.run?.floor ?? 1).label)}</span> ${statusPills(enemy.statusEffects)}</p><p class="small">Weak: ${(enemy.weaknessesElements ?? []).join(", ") || "Unknown"} · Resist: ${(enemy.resists ?? []).join(", ") || "None"}</p>${state.combat.modifier ? `<div class="modifier-card"><h3>Battle Modifier</h3><p><strong>${escapeHtml(state.combat.modifier.name)}</strong> — ${escapeHtml(state.combat.modifier.description)}</p></div>` : ""}${enemy.bossMechanics ? bossMechanicsCard(enemy) : ""}<div class="intent-card"><h3>Enemy Intent</h3><p>${intent?.text ?? "The enemy is watching you."}</p><span class="pill">${intent?.element ?? "unknown"}</span></div><h3>Battle Items</h3>${inventoryList(p, "battle")}</div>
    </section>
    ${combatLog(state)}
  </section>`;
}

function bossMechanicsCard(enemy) {
  const mechanics = enemy.bossMechanics ?? [];
  if (!mechanics.length) return "";
  return `<div class="boss-mechanics-card"><h3>Boss Mechanics</h3>${mechanics.map(mech => `<p class="small"><strong>${escapeHtml(mech.name)}</strong>: ${escapeHtml(mech.description)}</p>`).join("")}</div>`;
}

export function questBoardScreen(state) {
  const filters = state.ui.questFilters ?? { category: "All" };
  const category = filters.category ?? "All";
  const categoryOptions = ["All", ...QUEST_CATEGORIES];
  const quests = getQuestBoard(state, category);
  const grouped = category === "All" ? QUEST_CATEGORIES.map(cat => [cat, quests.filter(q => q.category === cat)]).filter(([, list]) => list.length) : [[category, quests]];
  return `<section class="screen">${nav(state)}
    <div class="hero"><h1>Quest Board</h1><p class="subtitle">Main, side, daily, race, job, recruit, hunting, collection, boss, and secret quests give clear goals and rewards for normal gameplay.</p></div>
    <section class="card"><h2>Quest Filters</h2><div class="filter-grid">${selectField("Quest Type", "quest.category", categoryOptions, category)}</div></section>
    ${grouped.map(([cat, list]) => `<section class="card"><div class="row between"><h2>${escapeHtml(cat)}</h2><span class="pill">${list.length} quest(s)</span></div><div class="quest-list">${list.map(questCard).join("")}</div></section>`).join("") || `<section class="card"><h2>No quests shown</h2><p>Change the filter or progress farther in the tower.</p></section>`}
  </section>`;
}

function questCard(quest) {
  const rewardText = Object.entries(quest.rewards ?? {}).map(([key, value]) => `${value} ${titleCase(key)}`).join(" · ") || "No listed reward";
  const action = quest.claimed ? `<span class="pill active-bonus">Claimed</span>` : quest.progress.complete ? button("Claim Reward", "claimQuest", quest.id) : `<span class="pill">In Progress</span>`;
  return `<article class="mini-card quest-card ${quest.progress.complete ? "complete" : ""}">
    <div class="row between"><h3>${escapeHtml(quest.displayName ?? quest.name)}</h3><span class="pill">${escapeHtml(quest.category)}</span></div>
    <p>${escapeHtml(quest.description)}</p>
    <div class="ability-meter quest-meter"><span style="width:${quest.progress.pct}%"></span></div>
    <p class="small">Progress: ${quest.progress.current}/${quest.progress.required} · Rewards: ${escapeHtml(rewardText)}</p>
    <div class="actions">${action}</div>
  </article>`;
}

export function eventScreen(state) {
  const event = state.ui.currentEvent;
  return `<section class="screen">${nav(state)}<div class="hero"><h1>${event?.name ?? "Dungeon Event"}</h1><p class="subtitle">${event?.text ?? "The dungeon shifts around you."}</p></div><div class="actions">${button("Continue", "go", "map")}</div>${combatLog(state)}</section>`;
}

export function recruitScreen(state) {
  const recruit = state.ui.offeredRecruit ?? prepareRecruitOffer(state);
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Recruit Encounter</h1><p class="subtitle">A party member can help in battle. Current party size: ${state.player.party.length}/${CONFIG.partyLimit}</p></div>
    <section class="card"><h2>${recruit.name}</h2><p>${recruit.description}</p><p><span class="pill">${recruit.role}</span></p><p class="small"><strong>Personality:</strong> ${recruit.personality ?? "Unknown"}</p><p class="small"><strong>Passive:</strong> ${recruit.passive ?? "No passive listed."}</p><div class="actions">${button("Recruit", "recruit", recruit.id)} ${button("Continue Alone", "skipRecruit", "", "secondary")}</div></section>
  </section>`;
}

export function achievementsScreen(state) {
  const p = state.player;
  const titleBonus = getEquippedTitleBonus(p);
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Achievements & Titles</h1><p class="subtitle">Unlocked achievements grant titles with stat bonuses. Harder achievements give stronger title bonuses. Current title: <span class="kpi">${escapeHtml(p.title ?? "Wanderer")}</span>${titleBonus ? ` · Bonus: ${escapeHtml(statsText(titleBonus.stats))}` : ""}</p></div>
    <section class="grid auto">${ACHIEVEMENTS.map(a => achievementCard(p, a)).join("")}</section>
  </section>`;
}

function achievementCard(player, achievement) {
  const unlocked = isAchievementUnlocked(player, achievement.id);
  return `<article class="card ${unlocked ? "selected" : "locked-card"}"><h3>${achievement.name}</h3><p>${achievement.description}</p><p><span class="pill">Title: ${achievement.title}</span> <span class="pill">${titleCase(achievement.difficulty ?? "common")}</span></p><p class="small"><strong>Title Bonus:</strong> ${escapeHtml(statsText(achievement.bonus ?? {}))}</p>${unlocked ? button(player.title === achievement.title ? "Equipped" : "Equip Title", "selectTitle", achievement.id, player.title === achievement.title ? "ghost" : "secondary") : `<p class="small">Locked</p>`}</article>`;
}

export function updatesScreen(state) {
  const backTarget = state.player ? "hub" : "main-menu";
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Update Notes</h1><p class="subtitle">Versioned change log for testers and future GitHub Pages updates.</p></div>
    ${UPDATE_NOTES.map(update => `<section class="card"><h2>${update.version}</h2><p class="small">${update.date}</p><ul>${update.notes.map(note => `<li>${note}</li>`).join("")}</ul></section>`).join("")}
    <div class="actions">${button("Back", "go", backTarget, "secondary")}</div>
  </section>`;
}

function statsText(stats = {}) {
  const names = {
    str: "Strength",
    con: "Endurance",
    dex: "Dexterity/Agility",
    int: "Magic",
    wis: "Magic/Endurance",
    cha: "Agility/Magic",
    strength: "Strength",
    endurance: "Endurance",
    dexterity: "Dexterity",
    agility: "Agility",
    magic: "Magic"
  };
  return Object.entries(stats).map(([key, value]) => `${value >= 0 ? "+" : ""}${value} ${names[key] ?? formatStat(key)}`).join(", ") || "None";
}

export function notFound(state) {
  return `<section class="screen">${nav(state)}<div class="hero"><h1>Unknown Screen</h1><p>Something tried to open a missing screen.</p></div>${button("Return Hub", "go", state.player ? "hub" : "main-menu")}</section>`;
}
