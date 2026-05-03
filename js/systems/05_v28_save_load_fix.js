// ═══════════════════════════════════════════════════════════════
// v0.28 — Save / Load Manager Fix
// Fixes the main-menu Load Save button and replaces the broken
// Save Manager render flow so save cards are not erased by showChoices.
// Keeps v0.27 save keys so existing saves still appear.
// ═══════════════════════════════════════════════════════════════
(function installV28SaveLoadFix(){
  "use strict";

  var VERSION = "v0.28-save-load-manager-fix";

  // Keep the same v0.27 keys so saves from the previous build are preserved.
  var SAVE_PREFIX = "BYL_v27_slot_";
  var BACKUP_PREFIX = "BYL_v27_backup_";
  var AUTOSAVE_KEY = "BYL_v27_autosave";
  var AUTOSAVE_BACKUP_KEY = "BYL_v27_autosave_backup";
  var ACTIVE_SLOT_KEY = "BYL_v27_active_slot";
  var MANUAL_SLOTS = [1, 2, 3];
  var LEGACY_KEYS = [
    "BYL_v27_slot_1",
    "BYL_v27_slot_2",
    "BYL_v27_slot_3",
    "animeRPG_slot_1",
    "animeRPG_slot_2",
    "animeRPG_slot_3",
    "animeRPG_v2",
    "animeRPG_v1"
  ];

  var previousMainMenu = null;
  try {
    previousMainMenu = window.main_menu || (typeof main_menu === "function" ? main_menu : null);
  } catch(e) {
    previousMainMenu = window.main_menu || null;
  }

  function byId(id){ return document.getElementById(id); }
  function outEl(){ return byId("output"); }
  function choicesEl(){ return byId("choices"); }

  function esc(x){
    return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function safePrint(text, cls){
    try {
      if (typeof print === "function") print(text, cls || "narrator");
    } catch(e) {}
  }

  function clearScreens(){
    try {
      if (typeof clearOutput === "function") clearOutput();
      else if (outEl()) outEl().innerHTML = "";
    } catch(e) {
      if (outEl()) outEl().innerHTML = "";
    }

    try {
      if (typeof showBattlePanel === "function") showBattlePanel(false);
    } catch(e) {}

    var ch = choicesEl();
    if (ch) ch.innerHTML = "";
  }

  function setChoices(list){
    var ch = choicesEl();
    if (!ch) return;
    ch.innerHTML = "";
    list.forEach(function(item){
      var b = document.createElement("button");
      b.textContent = item[0];
      b.onclick = item[1];
      if (item[2]) b.disabled = true;
      ch.appendChild(b);
    });
  }

  function nowISO(){ return new Date().toISOString(); }

  function formatTime(value){
    try {
      return value ? new Date(value).toLocaleString() : "Never";
    } catch(e) {
      return String(value || "Never");
    }
  }

  function storageWorks(){
    try {
      localStorage.setItem("__byl_v28_test__", "1");
      localStorage.removeItem("__byl_v28_test__");
      return true;
    } catch(e) {
      return false;
    }
  }

  function readRaw(key){
    try { return localStorage.getItem(key); }
    catch(e) { return null; }
  }

  function writeRaw(key, value){
    localStorage.setItem(key, value);
  }

  function removeRaw(key){
    try { localStorage.removeItem(key); } catch(e) {}
  }

  function slotKey(slot){ return SAVE_PREFIX + slot; }
  function backupKey(slot){ return BACKUP_PREFIX + slot; }

  function activeSlot(){
    var n = parseInt(readRaw(ACTIVE_SLOT_KEY) || "1", 10);
    return MANUAL_SLOTS.indexOf(n) >= 0 ? n : 1;
  }

  function setActiveSlot(slot){
    if (MANUAL_SLOTS.indexOf(Number(slot)) >= 0) {
      writeRaw(ACTIVE_SLOT_KEY, String(Number(slot)));
    }
  }

  function clone(obj){
    return JSON.parse(JSON.stringify(obj));
  }

  function encodeSave(obj){
    return btoa(unescape(encodeURIComponent(JSON.stringify(obj))));
  }

  function decodeSave(code){
    return JSON.parse(decodeURIComponent(escape(atob(String(code || "").trim()))));
  }

  function readObjectFromKey(key){
    var raw = readRaw(key);
    if (!raw) return null;

    try {
      return JSON.parse(raw);
    } catch(e1) {
      try {
        return decodeSave(raw);
      } catch(e2) {
        return { __corrupt: true, error: e1.message || e2.message || "Unreadable save data" };
      }
    }
  }

  function raceNameOf(obj){
    try {
      if (obj && obj.race_id && typeof RACE_DATA !== "undefined" && RACE_DATA[obj.race_id]) {
        return RACE_DATA[obj.race_id].name;
      }
    } catch(e) {}
    return "—";
  }

  function jobNameOf(obj){
    try {
      if (!obj || !Array.isArray(obj.jobs) || !obj.jobs.length || typeof JOB_DATA === "undefined") return "—";
      var last = obj.jobs[obj.jobs.length - 1];
      var first = obj.jobs[0];
      var j = JOB_DATA[last.id] || JOB_DATA[first.id];
      return j ? j.name : "—";
    } catch(e) {
      return "—";
    }
  }

  function saveSummary(obj){
    if (!obj || obj.__corrupt) return null;
    return {
      name: obj.name || "Unnamed",
      race: raceNameOf(obj),
      job: jobNameOf(obj),
      level: obj.total_lv || obj.level || 1,
      gold: obj.gold || 0,
      hp: obj.hp || 0,
      maxHp: obj.max_hp || 0,
      stamina: obj.stamina || 0,
      maxStamina: obj.max_stamina || 0,
      mp: obj.mp || 0,
      maxMp: obj.max_mp || 0,
      version: (obj.save_meta && obj.save_meta.version) || obj.version || "Unknown",
      lastSaved: (obj.save_meta && obj.save_meta.lastSaved) || obj.lastSaved || null,
      repaired: !!(obj.save_meta && obj.save_meta.repairedByV28),
      sizeKB: Math.max(1, Math.ceil(JSON.stringify(obj).length / 1024))
    };
  }

  function repairSave(obj){
    if (!obj || typeof obj !== "object" || obj.__corrupt) {
      throw new Error("Invalid or corrupted save object.");
    }

    var changed = false;

    function def(path, value){
      var cur = obj;
      for (var i = 0; i < path.length - 1; i++) {
        if (!cur[path[i]] || typeof cur[path[i]] !== "object") {
          cur[path[i]] = {};
          changed = true;
        }
        cur = cur[path[i]];
      }

      var k = path[path.length - 1];
      if (cur[k] === undefined || cur[k] === null) {
        cur[k] = typeof value === "function" ? value() : value;
        changed = true;
      }
    }

    def(["name"], "");
    def(["level"], 1);
    def(["total_lv"], obj.level || 1);
    def(["gold"], 0);
    def(["race_lv"], 1);
    def(["jobs"], []);
    def(["inventory"], []);
    def(["spells"], []);
    def(["learned_skills"], []);
    def(["learned_abilities"], []);
    def(["ability_cooldowns"], {});
    def(["ability_uses"], {});
    def(["status_applications"], {});
    def(["enemy_encounters"], {});
    def(["codex_unlocked"], {});
    def(["recruit_stats"], {});
    def(["recruit_skillbooks"], {});
    def(["recruits"], []);
    def(["active_recruits"], []);
    def(["recruit_exp"], {});
    def(["recruit_level"], {});
    def(["recruit_uses"], {});
    def(["recruit_bonds"], {});
    def(["recruit_story_flags"], {});
    def(["achievements"], {});
    def(["achievements", "flags"], []);
    def(["achievements", "defeated"], {});
    def(["achievements", "totalKills"], 0);
    def(["equipment_inventory"], []);
    def(["equipment"], {});
    def(["equipment", "head"], null);
    def(["equipment", "chest"], null);
    def(["equipment", "arms"], null);
    def(["equipment", "legs"], null);
    def(["equipment", "weapon1"], null);
    def(["equipment", "weapon2"], null);
    def(["equipment", "accessories"], function(){ return [null,null,null,null,null]; });

    if (!Array.isArray(obj.equipment.accessories)) {
      obj.equipment.accessories = [null,null,null,null,null];
      changed = true;
    }

    while (obj.equipment.accessories.length < 5) {
      obj.equipment.accessories.push(null);
      changed = true;
    }

    def(["bonus"], {});
    ["hp","mp","pa","pd","ag","ma","md","rs","sp"].forEach(function(k){
      def(["bonus", k], 0);
    });

    def(["max_stamina"], 60);
    def(["stamina"], obj.max_stamina || 60);

    obj.max_stamina = Number(obj.max_stamina) || 60;
    obj.stamina = Math.max(0, Math.min(Number(obj.stamina) || obj.max_stamina, obj.max_stamina));

    def(["save_meta"], {});

    var oldVersion = obj.save_meta.version || obj.version || "Unknown";
    obj.save_meta.previousVersion = obj.save_meta.previousVersion || oldVersion;
    obj.save_meta.version = VERSION;
    obj.save_meta.game = "Build Your Legend";
    obj.save_meta.repairedByV28 = changed || !!obj.save_meta.repairedByV28;
    obj.save_meta.lastRepairCheck = nowISO();

    return obj;
  }

  function currentSaveObject(){
    if (typeof G === "undefined") {
      throw new Error("Game state was not found.");
    }

    var obj = clone(G);
    if (!obj.save_meta || typeof obj.save_meta !== "object") obj.save_meta = {};

    obj.save_meta.game = "Build Your Legend";
    obj.save_meta.version = VERSION;
    obj.save_meta.lastSaved = nowISO();
    obj.save_meta.activeSlot = activeSlot();

    return repairSave(obj);
  }

  function applyLoadedSave(obj){
    obj = repairSave(obj);

    Object.keys(G).forEach(function(k){ delete G[k]; });
    Object.keys(obj).forEach(function(k){ G[k] = obj[k]; });

    try { if (typeof ensureGameCollections === "function") ensureGameCollections(); } catch(e) {}
    try { if (typeof ensureV26State === "function") ensureV26State(); } catch(e) {}
    try { if (typeof applyStats === "function") applyStats(); } catch(e) {}
    try { if (typeof updateStats === "function") updateStats(); } catch(e) {}

    return obj;
  }

  function message(text, type){
    var color = type === "good" ? "#57cc99" : type === "bad" ? "#ff6b6b" : type === "warn" ? "#ffd166" : "#8aaac8";
    var msg = byId("save-msg-v28");

    if (msg) {
      msg.textContent = text;
      msg.style.color = color;
    }

    try {
      if (typeof showSaveMsg === "function") showSaveMsg(text, color);
    } catch(e) {}
  }

  function showAutosaveIndicator(){
    var el = byId("autosave-indicator");

    if (!el) {
      var head = byId("game-header");
      if (!head) return;

      el = document.createElement("span");
      el.id = "autosave-indicator";
      el.style.cssText = "position:absolute;right:70px;top:9px;z-index:60;font-size:11px;color:#57cc99;opacity:0;transition:opacity .2s;font-family:'Rajdhani',monospace";
      head.appendChild(el);
    }

    el.textContent = "✓ autosaved";
    el.style.opacity = "1";
    clearTimeout(el._v28t);
    el._v28t = setTimeout(function(){ el.style.opacity = "0"; }, 1800);
  }

  function backupBeforeOverwrite(slot){
    var existing = readRaw(slotKey(slot));
    if (existing) writeRaw(backupKey(slot), existing);
  }

  function backupAutosaveBeforeOverwrite(){
    var existing = readRaw(AUTOSAVE_KEY);
    if (existing) writeRaw(AUTOSAVE_BACKUP_KEY, existing);
  }

  function saveToSlot(slot, obj, silent){
    slot = Number(slot);
    if (MANUAL_SLOTS.indexOf(slot) < 0) throw new Error("Invalid save slot.");

    backupBeforeOverwrite(slot);

    obj = repairSave(obj || currentSaveObject());
    obj.save_meta.slot = slot;
    obj.save_meta.lastSaved = nowISO();
    obj.save_meta.version = VERSION;

    writeRaw(slotKey(slot), JSON.stringify(obj));
    setActiveSlot(slot);

    if (!silent) message("✓ Saved to Slot " + slot, "good");
    return obj;
  }

  function saveAutosave(reason){
    backupAutosaveBeforeOverwrite();

    var obj = currentSaveObject();
    obj.save_meta.slot = "autosave";
    obj.save_meta.autosaveReason = reason || "autosave";
    obj.save_meta.lastSaved = nowISO();

    writeRaw(AUTOSAVE_KEY, JSON.stringify(obj));
    showAutosaveIndicator();
    return obj;
  }

  function loadFromSlot(slot){
    try {
      var obj = readObjectFromKey(slotKey(slot));
      if (!obj) {
        message("Slot " + slot + " is empty.", "bad");
        return;
      }

      if (obj.__corrupt) throw new Error(obj.error || "Corrupted save.");

      var oldVersion = (obj.save_meta && obj.save_meta.version) || "Unknown";
      applyLoadedSave(obj);
      setActiveSlot(slot);

      message("✓ Loaded Slot " + slot + (oldVersion !== VERSION ? " — repaired from " + oldVersion : ""), "good");

      if (typeof town_center === "function") town_center();
    } catch(e) {
      message("✗ Load failed: " + e.message, "bad");
    }
  }

  function loadAutosave(){
    try {
      var obj = readObjectFromKey(AUTOSAVE_KEY);
      if (!obj) {
        message("No autosave found.", "bad");
        return;
      }

      if (obj.__corrupt) throw new Error(obj.error || "Corrupted autosave.");

      applyLoadedSave(obj);
      message("✓ Loaded Autosave", "good");

      if (typeof town_center === "function") town_center();
    } catch(e) {
      message("✗ Autosave failed: " + e.message, "bad");
    }
  }

  function deleteSlot(slot){
    if (!confirm("Delete Slot " + slot + "? A backup will be kept if this slot has data.")) return;

    var existing = readRaw(slotKey(slot));
    if (existing) writeRaw(backupKey(slot), existing);

    removeRaw(slotKey(slot));
    message("Deleted Slot " + slot + ". Backup kept.", "warn");
    renderSaveManager();
  }

  function restoreBackup(slot){
    var backup = readRaw(backupKey(slot));
    if (!backup) {
      message("No backup found for Slot " + slot + ".", "bad");
      return;
    }

    var current = readRaw(slotKey(slot));
    if (current) writeRaw(backupKey(slot) + "_pre_restore", current);

    writeRaw(slotKey(slot), backup);
    message("✓ Restored backup into Slot " + slot, "good");
    renderSaveManager();
  }

  function deleteAutosave(){
    if (!confirm("Delete Autosave? A backup will be kept if autosave has data.")) return;

    var existing = readRaw(AUTOSAVE_KEY);
    if (existing) writeRaw(AUTOSAVE_BACKUP_KEY, existing);

    removeRaw(AUTOSAVE_KEY);
    message("Deleted autosave. Backup kept.", "warn");
    renderSaveManager();
  }

  function restoreAutosaveBackup(){
    var backup = readRaw(AUTOSAVE_BACKUP_KEY);
    if (!backup) {
      message("No autosave backup found.", "bad");
      return;
    }

    var current = readRaw(AUTOSAVE_KEY);
    if (current) writeRaw(AUTOSAVE_BACKUP_KEY + "_pre_restore", current);

    writeRaw(AUTOSAVE_KEY, backup);
    message("✓ Restored autosave backup.", "good");
    renderSaveManager();
  }

  function makeButton(label, fn, className, disabled){
    var b = document.createElement("button");
    b.textContent = label;
    b.onclick = fn;
    if (className) b.className = className;
    if (disabled) b.disabled = true;
    return b;
  }

  function saveCard(title, obj, backupObj, active, kind){
    var card = document.createElement("div");
    card.className = "save-card-v28" + (active ? " active" : "");

    var corrupt = obj && obj.__corrupt;
    var s = (!obj || corrupt) ? null : saveSummary(obj);
    var bs = backupObj && !backupObj.__corrupt ? saveSummary(backupObj) : null;

    var html = '<div class="save-card-title-v28">' + esc(title) + (active ? "  ★ Active" : "") + '</div>';

    if (corrupt) {
      html += '<div class="save-card-sub-v28" style="color:#ff6b6b">Corrupted save: ' + esc(obj.error || "Unknown error") + '</div>';
    } else if (s) {
      html += '<div class="save-card-sub-v28">' + esc(s.name) + ' · ' + esc(s.race) + ' · ' + esc(s.job) + '</div>';
      html += '<div class="save-grid-v28">';
      html += '<div class="save-field-v28"><b>Total Level</b>' + esc(s.level) + '</div>';
      html += '<div class="save-field-v28"><b>Gold</b>' + esc(s.gold) + '</div>';
      html += '<div class="save-field-v28"><b>Resources</b>HP ' + esc(s.hp) + '/' + esc(s.maxHp) + ' · STA ' + esc(s.stamina) + '/' + esc(s.maxStamina) + ' · MP ' + esc(s.mp) + '/' + esc(s.maxMp) + '</div>';
      html += '<div class="save-field-v28"><b>Last Saved</b>' + esc(formatTime(s.lastSaved)) + '</div>';
      html += '<div class="save-field-v28"><b>Version</b>' + esc(s.version) + '</div>';
      html += '<div class="save-field-v28"><b>Size</b>' + esc(s.sizeKB) + ' KB</div>';
      html += '<div class="save-field-v28"><b>Repair Status</b>' + (s.repaired ? "Repaired / migrated" : "Clean") + '</div>';
      html += '</div>';
    } else {
      html += '<div class="save-card-sub-v28">Empty slot.</div>';
    }

    html += '<div class="save-card-sub-v28">Backup: ' + (bs ? esc(bs.name + " · Lv." + bs.level + " · " + formatTime(bs.lastSaved)) : "None") + '</div>';

    card.innerHTML = html;

    var actions = document.createElement("div");
    actions.className = "save-actions-v28";

    if (kind === "slot") {
      var slot = Number(card.getAttribute("data-slot") || 0);
      actions.appendChild(makeButton("💾 Save Here", function(){
        saveToSlot(slot, currentSaveObject());
        renderSaveManager();
      }, "save-good-v28"));

      actions.appendChild(makeButton("📂 Load", function(){ loadFromSlot(slot); }, "", !obj || corrupt));

      actions.appendChild(makeButton("🗑 Delete", function(){ deleteSlot(slot); }, "save-danger-v28", !obj));

      actions.appendChild(makeButton("↩ Restore Backup", function(){ restoreBackup(slot); }, "save-warn-v28", !backupObj || backupObj.__corrupt));
    }

    if (kind === "autosave") {
      actions.appendChild(makeButton("📂 Load Autosave", loadAutosave, "", !obj || corrupt));
      actions.appendChild(makeButton("🗑 Delete Autosave", deleteAutosave, "save-danger-v28", !obj));
      actions.appendChild(makeButton("↩ Restore Auto Backup", restoreAutosaveBackup, "save-warn-v28", !backupObj || backupObj.__corrupt));
    }

    card.appendChild(actions);
    return card;
  }

  function appendSlotCard(wrap, slot){
    var c = saveCard(
      "Manual Slot " + slot,
      readObjectFromKey(slotKey(slot)),
      readObjectFromKey(backupKey(slot)),
      activeSlot() === slot,
      "slot"
    );
    c.setAttribute("data-slot", String(slot));

    // Rebuild actions after data-slot exists.
    c.querySelector(".save-actions-v28").innerHTML = "";
    var actions = c.querySelector(".save-actions-v28");
    var obj = readObjectFromKey(slotKey(slot));
    var backupObj = readObjectFromKey(backupKey(slot));
    var corrupt = obj && obj.__corrupt;

    actions.appendChild(makeButton("💾 Save Here", function(){
      saveToSlot(slot, currentSaveObject());
      renderSaveManager();
    }, "save-good-v28"));

    actions.appendChild(makeButton("📂 Load", function(){ loadFromSlot(slot); }, "", !obj || corrupt));

    actions.appendChild(makeButton("🗑 Delete", function(){ deleteSlot(slot); }, "save-danger-v28", !obj));

    actions.appendChild(makeButton("↩ Restore Backup", function(){ restoreBackup(slot); }, "save-warn-v28", !backupObj || backupObj.__corrupt));

    wrap.appendChild(c);
  }

  function findLegacySaves(){
    var found = [];

    LEGACY_KEYS.forEach(function(key){
      // Do not list the main v27 slots as legacy in addition to normal cards.
      if (/^BYL_v27_slot_/.test(key)) return;

      var obj = readObjectFromKey(key);
      if (obj && !obj.__corrupt) {
        found.push({ key: key, obj: obj });
      }
    });

    return found;
  }

  function importLegacyToSlot(key, slot){
    try {
      var obj = readObjectFromKey(key);
      if (!obj || obj.__corrupt) throw new Error("Legacy save is corrupted.");

      saveToSlot(slot, obj, true);
      message("✓ Imported legacy save into Slot " + slot, "good");
      renderSaveManager();
    } catch(e) {
      message("Legacy import failed: " + e.message, "bad");
    }
  }

  function renderLegacySection(wrap){
    var legacy = findLegacySaves();
    if (!legacy.length) return;

    var card = document.createElement("div");
    card.className = "save-card-v28";
    card.innerHTML = '<div class="save-card-title-v28">Legacy Saves Found</div><div class="save-card-sub-v28">Older save keys were detected. Import one into a manual slot to migrate it safely.</div>';

    legacy.forEach(function(item){
      var repaired = null;
      try { repaired = repairSave(clone(item.obj)); } catch(e) { repaired = null; }

      var s = repaired ? saveSummary(repaired) : null;

      var row = document.createElement("div");
      row.className = "save-card-sub-v28";
      row.textContent = s ? (item.key + " — " + s.name + " · " + s.race + " · Lv." + s.level) : item.key;
      card.appendChild(row);

      var actions = document.createElement("div");
      actions.className = "save-actions-v28";
      MANUAL_SLOTS.forEach(function(slot){
        actions.appendChild(makeButton("Import to Slot " + slot, function(){ importLegacyToSlot(item.key, slot); }));
      });
      card.appendChild(actions);
    });

    wrap.appendChild(card);
  }

  function renderDebugCard(wrap){
    var card = document.createElement("div");
    card.className = "save-card-v28";
    card.innerHTML =
      '<div class="save-card-title-v28">Save Debug Info</div>' +
      '<div class="save-grid-v28">' +
      '<div class="save-field-v28"><b>Active Slot</b>' + esc(activeSlot()) + '</div>' +
      '<div class="save-field-v28"><b>Autosave</b>' + (readObjectFromKey(AUTOSAVE_KEY) ? "Exists" : "Missing") + '</div>' +
      '<div class="save-field-v28"><b>Backup Slot 1</b>' + (readObjectFromKey(backupKey(1)) ? "Exists" : "Missing") + '</div>' +
      '<div class="save-field-v28"><b>Backup Slot 2</b>' + (readObjectFromKey(backupKey(2)) ? "Exists" : "Missing") + '</div>' +
      '<div class="save-field-v28"><b>Backup Slot 3</b>' + (readObjectFromKey(backupKey(3)) ? "Exists" : "Missing") + '</div>' +
      '<div class="save-field-v28"><b>Browser Storage</b>' + (storageWorks() ? "OK" : "Blocked / Private") + '</div>' +
      '</div>';
    wrap.appendChild(card);
  }

  function renderSaveManager(){
    addStyle();
    clearScreens();

    var out = outEl();
    if (!out) return;

    var title = document.createElement("p");
    title.className = "highlight";
    title.textContent = "SAVE / LOAD MANAGER";
    out.appendChild(title);

    var note = document.createElement("p");
    note.className = "narrator";
    note.textContent = "Manual saves use 3 slots. Autosave is separate, so it will not overwrite your manual slots.";
    out.appendChild(note);

    var info = document.createElement("p");
    info.className = "info";
    info.textContent = "Active Slot: " + activeSlot() + " · Storage: " + (storageWorks() ? "Available" : "Blocked") + " · Current Version: " + VERSION;
    out.appendChild(info);

    var msg = document.createElement("div");
    msg.id = "save-msg-v28";
    msg.className = "save-msg-v28";
    out.appendChild(msg);

    var wrap = document.createElement("div");
    wrap.className = "save-manager-v28";
    out.appendChild(wrap);

    MANUAL_SLOTS.forEach(function(slot){
      appendSlotCard(wrap, slot);
    });

    var autosaveCard = saveCard(
      "Autosave Slot",
      readObjectFromKey(AUTOSAVE_KEY),
      readObjectFromKey(AUTOSAVE_BACKUP_KEY),
      false,
      "autosave"
    );
    wrap.appendChild(autosaveCard);

    renderLegacySection(wrap);
    renderDebugCard(wrap);

    setChoices([
      ["💾 Quick Save to Active Slot", function(){
        saveToSlot(activeSlot(), currentSaveObject());
        renderSaveManager();
      }],
      ["📂 Load Autosave", loadAutosave],
      ["⬆ Export Save", exportSave],
      ["⬇ Import Save", importSave],
      ["🗑 New Game", confirmNewGame],
      ["← Main Menu", function(){
        if (typeof main_menu === "function") main_menu();
        else if (window.main_menu) window.main_menu();
      }],
      ["← Town Center", function(){
        if (typeof town_center === "function") town_center();
      }]
    ]);
  }

  function exportSave(){
    addStyle();
    clearScreens();

    var out = outEl();
    if (!out) return;

    var title = document.createElement("p");
    title.className = "highlight";
    title.textContent = "EXPORT SAVE";
    out.appendChild(title);

    var note = document.createElement("p");
    note.className = "narrator";
    note.textContent = "Copy this save code and keep it somewhere safe. You can import it from the Save Manager.";
    out.appendChild(note);

    var code = "";
    try {
      code = encodeSave(currentSaveObject());
    } catch(e) {
      code = "EXPORT FAILED: " + e.message;
    }

    var box = document.createElement("textarea");
    box.className = "save-code-v28";
    box.value = code;
    out.appendChild(box);

    var msg = document.createElement("div");
    msg.className = "save-msg-v28";
    msg.textContent = "Length: " + code.length + " characters";
    out.appendChild(msg);

    setChoices([
      ["📋 Copy to Clipboard", function(){
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(function(){ msg.textContent = "✓ Copied save code."; });
        } else {
          box.select();
          document.execCommand("copy");
          msg.textContent = "✓ Copied save code.";
        }
      }],
      ["← Save Manager", renderSaveManager]
    ]);
  }

  var pendingImport = null;

  function importSave(){
    addStyle();
    clearScreens();

    var out = outEl();
    if (!out) return;

    var title = document.createElement("p");
    title.className = "highlight";
    title.textContent = "IMPORT SAVE";
    out.appendChild(title);

    var note = document.createElement("p");
    note.className = "narrator";
    note.textContent = "Paste a Build Your Legend export code. Nothing is replaced until you choose an import slot.";
    out.appendChild(note);

    var box = document.createElement("textarea");
    box.className = "save-code-v28";
    box.placeholder = "Paste save code here...";
    out.appendChild(box);

    var preview = document.createElement("div");
    preview.className = "save-preview-v28";
    preview.innerHTML = '<div class="save-card-sub-v28">No import checked yet.</div>';
    out.appendChild(preview);

    function importToSlot(slot){
      if (!pendingImport) {
        preview.innerHTML = '<div class="save-card-sub-v28" style="color:#ff6b6b">Check the import code first.</div>';
        return;
      }

      try {
        saveToSlot(slot, pendingImport, true);
        pendingImport = null;
        message("✓ Imported save to Slot " + slot, "good");
        renderSaveManager();
      } catch(e) {
        preview.innerHTML = '<div class="save-card-sub-v28" style="color:#ff6b6b">Import failed: ' + esc(e.message) + '</div>';
      }
    }

    setChoices([
      ["🔍 Check Import", function(){
        try {
          pendingImport = repairSave(decodeSave(box.value));
          var s = saveSummary(pendingImport);

          preview.innerHTML =
            '<div class="save-card-title-v28">Imported Save Found</div>' +
            '<div class="save-grid-v28">' +
            '<div class="save-field-v28"><b>Name</b>' + esc(s.name) + '</div>' +
            '<div class="save-field-v28"><b>Race</b>' + esc(s.race) + '</div>' +
            '<div class="save-field-v28"><b>Job</b>' + esc(s.job) + '</div>' +
            '<div class="save-field-v28"><b>Total Level</b>' + esc(s.level) + '</div>' +
            '<div class="save-field-v28"><b>Gold</b>' + esc(s.gold) + '</div>' +
            '<div class="save-field-v28"><b>Version</b>' + esc(s.version) + '</div>' +
            '</div>' +
            '<div class="save-card-sub-v28">Choose a slot below to import this save.</div>';
        } catch(e) {
          pendingImport = null;
          preview.innerHTML = '<div class="save-card-sub-v28" style="color:#ff6b6b">Import failed: ' + esc(e.message) + '</div>';
        }
      }],
      ["Import to Slot 1", function(){ importToSlot(1); }],
      ["Import to Slot 2", function(){ importToSlot(2); }],
      ["Import to Slot 3", function(){ importToSlot(3); }],
      ["← Save Manager", renderSaveManager]
    ]);
  }

  function confirmNewGame(){
    clearScreens();

    var out = outEl();
    if (!out) return;

    var title = document.createElement("p");
    title.className = "highlight";
    title.textContent = "NEW GAME";
    out.appendChild(title);

    var note = document.createElement("p");
    note.className = "narrator";
    note.textContent = "Choose how you want to start over. Backups and other slots can be kept.";
    out.appendChild(note);

    setChoices([
      ["Start New Game — Clear Active Slot", function(){
        if (!confirm("Start a new game and clear active Slot " + activeSlot() + "? Other slots and backups remain.")) return;

        var slot = activeSlot();
        var existing = readRaw(slotKey(slot));
        if (existing) writeRaw(backupKey(slot), existing);
        removeRaw(slotKey(slot));

        try { sessionStorage.setItem("byl_start_new", "1"); } catch(e) {}
        location.reload();
      }],
      ["Start New Game — Keep Saves", function(){
        if (!confirm("Start a new game without deleting save slots?")) return;

        try { sessionStorage.setItem("byl_start_new", "1"); } catch(e) {}
        location.reload();
      }],
      ["Delete ALL v0.27/v0.28 Saves", function(){
        if (!confirm("Delete ALL manual saves, autosave, and backups? This cannot be undone.")) return;

        MANUAL_SLOTS.forEach(function(slot){
          removeRaw(slotKey(slot));
          removeRaw(backupKey(slot));
        });

        removeRaw(AUTOSAVE_KEY);
        removeRaw(AUTOSAVE_BACKUP_KEY);
        message("All v0.27/v0.28 saves deleted.", "warn");
        renderSaveManager();
      }],
      ["Cancel", renderSaveManager]
    ]);
  }

  function saveGame(){
    try {
      saveToSlot(activeSlot(), currentSaveObject());
    } catch(e) {
      message("✗ Save failed: " + e.message, "bad");
    }
  }

  function loadGame(){
    renderSaveManager();
  }

  function autoSave(reason){
    try {
      saveAutosave(reason || "autosave");
    } catch(e) {
      console.warn("Autosave failed:", e);
    }
  }

  function patchCurrentMainMenuLoadButton(){
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".main-menu-btn, #choices button, button"));

    buttons.forEach(function(btn){
      var text = btn.textContent || "";

      if (/Load Save|Save Manager/i.test(text)) {
        btn.disabled = false;
        btn.textContent = "📂 Load Save / Save Manager";
        btn.onclick = renderSaveManager;
      }
    });

    var msg = byId("menu-msg");
    if (msg) {
      msg.textContent = "Use Load Save / Save Manager to view manual slots, autosave, backups, import, and export.";
      msg.style.color = "#8aaac8";
    }
  }

  function patchMainMenu(){
    var oldMain = previousMainMenu || window.main_menu || null;

    if (oldMain && !oldMain._v28SaveWrapped) {
      var wrapped = function(){
        var result = oldMain.apply(this, arguments);
        setTimeout(patchCurrentMainMenuLoadButton, 0);
        return result;
      };
      wrapped._v28SaveWrapped = true;

      window.main_menu = wrapped;
      try { main_menu = wrapped; } catch(e) {}
    }

    setTimeout(patchCurrentMainMenuLoadButton, 0);
  }

  function patchSettings(){
    var panel = byId("settings-panel");
    if (!panel || byId("v28-save-settings-section")) return;

    var saveSection = Array.prototype.slice.call(panel.querySelectorAll(".sp-section")).find(function(section){
      return /Save \/ Load/i.test(section.textContent || "");
    });

    var div = document.createElement("div");
    div.className = "sp-section";
    div.id = "v28-save-settings-section";
    div.innerHTML =
      '<h3>Save / Load Manager</h3>' +
      '<div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">v0.28 fixes the main-menu Load Save button and repairs the Save Manager screen so save slots display correctly.</div>' +
      '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
      '<button class="sp-btn" onclick="closeSettingsPanel(); save_load_manager_screen()">📂 Save Manager</button>' +
      '<button class="sp-btn" onclick="saveGame()">💾 Quick Save</button>' +
      '<button class="sp-btn" onclick="closeSettingsPanel(); loadAutosaveV28()">📂 Load Autosave</button>' +
      '<button class="sp-btn" onclick="closeSettingsPanel(); exportSave()">⬆ Export</button>' +
      '<button class="sp-btn" onclick="closeSettingsPanel(); importSave()">⬇ Import</button>' +
      '</div>';

    if (saveSection) panel.insertBefore(div, saveSection);
    else panel.appendChild(div);
  }

  function addStyle(){
    if (byId("v28-save-style")) return;

    var style = document.createElement("style");
    style.id = "v28-save-style";
    style.textContent = `
      .save-manager-v28{display:grid;grid-template-columns:1fr;gap:10px;margin:8px 0}
      .save-card-v28{border:1px solid #1c3354;background:linear-gradient(180deg,#07101d,#050810);padding:12px;line-height:1.5}
      .save-card-v28.active{border-color:#e8c84a;box-shadow:0 0 18px rgba(232,200,74,.08) inset}
      .save-card-title-v28{color:#e8c84a;font-weight:900;font-size:14px;letter-spacing:.8px}
      .save-card-sub-v28{color:#8aaac8;font-size:11px;margin-top:3px}
      .save-grid-v28{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px;margin:8px 0}
      .save-field-v28{background:#07090f;border:1px solid #111d2e;padding:6px 8px;color:#8aaac8;font-size:11px}
      .save-field-v28 b{display:block;color:#48cae4;font-size:10px;letter-spacing:.7px;text-transform:uppercase}
      .save-actions-v28{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
      .save-actions-v28 button{width:auto!important;margin:0!important;padding:7px 10px!important;font-size:11px!important}
      .save-danger-v28{color:#ff6b6b!important;border-color:#7a2631!important}
      .save-good-v28{color:#57cc99!important;border-color:#2e7d5b!important}
      .save-warn-v28{color:#ffd166!important;border-color:#7a5c1d!important}
      .save-code-v28{width:100%;min-height:160px;background:#050810;color:#e8c84a;border:1px solid #1c3354;padding:10px;font-family:monospace;font-size:11px;box-sizing:border-box}
      .save-preview-v28{border:1px solid #365d8f;background:#060c18;padding:10px;margin:8px 0}
      .save-msg-v28{font-size:12px;min-height:18px;margin:6px 0;color:#8aaac8}
      @media(max-width:620px){
        .save-grid-v28{grid-template-columns:1fr}
        .save-actions-v28{display:grid;grid-template-columns:1fr 1fr}
        .save-actions-v28 button{width:100%!important}
      }
    `;
    document.head.appendChild(style);
  }

  function patchUpdateScreen(){
    try {
      var oldUpdates = window.updates_screen || (typeof updates_screen === "function" ? updates_screen : null);
      if (!oldUpdates || oldUpdates._v28SaveWrapped) return;

      var wrapped = function(){
        var result = oldUpdates.apply(this, arguments);
        setTimeout(function(){
          try {
            if (!window.$ch && !byId("choices")) return;
            var ch = choicesEl();
            var out = outEl();
            if (!out || byId("v28-update-entry")) return;

            var card = document.createElement("div");
            card.id = "v28-update-entry";
            card.className = "update-card";
            card.innerHTML =
              '<div class="update-card-title">v0.28 — Save / Load Manager Fix</div>' +
              '<div class="update-card-date">Save Fix Update</div>' +
              '<ul>' +
              '<li>Fixed the main-menu Load Save button.</li>' +
              '<li>Rebuilt the Save Manager screen so slot cards display in the main text area and do not get erased by the choice buttons.</li>' +
              '<li>Kept existing v0.27 save keys so old v0.27 slots still appear.</li>' +
              '<li>Improved import, export, autosave, backup restore, and old-save repair flow.</li>' +
              '</ul>';

            out.insertBefore(card, out.firstChild);
          } catch(e) {}
        }, 0);
        return result;
      };

      wrapped._v28SaveWrapped = true;
      window.updates_screen = wrapped;
      try { updates_screen = wrapped; } catch(e) {}
    } catch(e) {}
  }

  // Expose fixed functions globally.
  window.save_load_manager_screen = renderSaveManager;
  window.save_manager_screen = renderSaveManager;
  window.saveGame = saveGame;
  window.loadGame = loadGame;
  window.autoSave = autoSave;
  window.exportSave = exportSave;
  window.importSave = importSave;
  window.confirmNewGame = confirmNewGame;
  window.loadAutosaveV28 = loadAutosave;

  try { saveGame = window.saveGame; } catch(e) {}
  try { loadGame = window.loadGame; } catch(e) {}
  try { autoSave = window.autoSave; } catch(e) {}
  try { exportSave = window.exportSave; } catch(e) {}
  try { importSave = window.importSave; } catch(e) {}
  try { confirmNewGame = window.confirmNewGame; } catch(e) {}

  // Autosave after major actions.
  document.addEventListener("click", function(e){
    var btn = e.target && e.target.closest ? e.target.closest("button") : null;
    if (!btn) return;

    var text = btn.textContent || "";
    if (/(buy|learn|hire|recruit|equip|change equipped|rest|evolve|upgrade|level up|save here)/i.test(text)) {
      setTimeout(function(){ autoSave("action"); }, 500);
    }
  }, true);

  addStyle();
  patchMainMenu();
  patchSettings();
  patchUpdateScreen();

  try {
    if (typeof G !== "undefined") {
      repairSave(G);
      if (typeof updateStats === "function") updateStats();
    }
  } catch(e) {}
})();
