// ═══════════════════════════════════════════════════════════════
// v0.31.1 — Base Job Selection Filter
// Fixes the job selection screen so it only shows starting/base jobs.
// Full Class Registry still shows advanced/specialist/rare/hidden paths.
// ═══════════════════════════════════════════════════════════════
(function installV311BaseJobSelectionFilter(){
  "use strict";

  function addStyle(){
    if (document.getElementById("v311-base-job-filter-style")) return;
    var style = document.createElement("style");
    style.id = "v311-base-job-filter-style";
    style.textContent = `
      .v311-filter-note{
        border:1px solid #1c3354;
        background:#060c18;
        color:#8aaac8;
        font-size:11px;
        line-height:1.55;
        padding:9px 11px;
        margin:8px 0;
      }
      .v311-filter-note b{color:#e8c84a}
    `;
    document.head.appendChild(style);
  }

  function esc(x){
    return String(x == null ? "" : x).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function isBaseStartingJob(id, job){
    if (!job) return false;

    var tier = String(job.class_tier || "Base").toLowerCase();
    var anime = String(job.anime || "").toLowerCase();
    var name = String(job.name || "").toLowerCase();
    var desc = String(job.desc || "").toLowerCase();

    // Never show race evolution entries in starting job selection.
    if (/race evolution/.test(anime) || /race evolution/.test(desc)) return false;

    // Hide obvious non-base tiers.
    if (/advanced|specialist|rare|hidden|evolution/.test(tier)) return false;

    // Most generated upgrade jobs have prerequisite objects.
    if (job.req && typeof job.req === "object") {
      if (job.req.jobBranch) return false;
      if (job.req.baseJobId !== undefined) return false;
      if (job.req.requiresJob !== undefined) return false;
      if (job.req.requiredJob !== undefined) return false;
      if (job.req.parentJob !== undefined) return false;
      if (job.req.raceEvolution) return false;
      if (job.req.hidden) return false;
    }

    // Hide names that clearly came from upgrade generation.
    if (/\b(vanguard|adept|paragon|sovereign|world-crowned|hidden origin|eclipse|mythic)\b/.test(name)) return false;

    // Base jobs are usually tier Base or no class_tier.
    if (tier && tier !== "base") return false;

    return true;
  }

  function groupBaseJobs(){
    var groups = {};
    Object.entries(JOB_DATA).forEach(function(entry){
      var id = entry[0];
      var job = entry[1];

      if (!isBaseStartingJob(id, job)) return;

      // Keep the game's existing start restrictions if they exist.
      try {
        if (typeof canStartWithJob === "function" && !canStartWithJob(Number(id), job)) return;
      } catch(e) {}

      var key = job.anime || "Fantasy";
      if (!groups[key]) groups[key] = [];
      groups[key].push([id, job]);
    });
    return groups;
  }

  function fallbackJobCardHtml(id, j){
    var maxLv = j.max_lv || 15;
    return (
      '<div class="v31-card-title">' + esc(j.name) + '</div>' +
      '<div class="v31-card-meta">Base Job · ' + esc(j.anime || "Fantasy") + ' · Max Level: ' + esc(maxLv) + '</div>' +
      '<div class="v31-card-desc"><b>Unique Description:</b> ' + esc(j.desc || "A starting base job path.") + '</div>' +
      '<div class="v31-card-desc"><b>Starting Job:</b> This is a base job available during character creation. Advanced, Specialist, Rare, and Hidden jobs unlock later through progression.</div>'
    );
  }

  function jobCardHtml(id, j){
    // Use the v0.31 rich card function if it exists in the page scope.
    try {
      if (typeof jobButtonHtml === "function") return jobButtonHtml(id, j, "");
    } catch(e) {}
    return fallbackJobCardHtml(id, j);
  }

  function pickBaseJobOnly(){
    addStyle();

    clearOutput();
    if (typeof showBattlePanel === "function") showBattlePanel(false);

    var race = null;
    try { race = RACE_DATA[G.race_id]; } catch(e) {}

    print("Race: " + (race ? race.name : "Unknown") + "  [" + (race ? race.anime : "—") + "]", "highlight");
    print("JOB SELECTION — BASE JOBS ONLY", "highlight");
    print("Choose your starting base job. Advanced, Specialist, Rare, and Hidden jobs are hidden here and unlock later through class progression.", "narrator");

    $ch.innerHTML = "";

    var note = document.createElement("div");
    note.className = "v311-filter-note";
    note.innerHTML = "<b>Base Job Rule:</b> Only base jobs appear during character creation. Job upgrades become available after you max your current job and meet the required unlock conditions.";
    $ch.appendChild(note);

    var groups = groupBaseJobs();
    var groupEntries = Object.entries(groups);

    if (!groupEntries.length) {
      var warn = document.createElement("div");
      warn.className = "v311-filter-note";
      warn.innerHTML = "<b>No base jobs found.</b> The filter could not find starting jobs. Returning to the previous job screen may be required.";
      $ch.appendChild(warn);
    }

    groupEntries.forEach(function(group){
      var anime = group[0];
      var entries = group[1];

      var hdr = document.createElement("div");
      hdr.className = "v31-section-header";
      hdr.style.borderLeftColor = "#7f5af0";
      hdr.style.color = "#a78bfa";
      hdr.textContent = "— " + anime + " Base Jobs —";
      $ch.appendChild(hdr);

      entries.forEach(function(entry){
        var id = entry[0];
        var job = entry[1];

        var b = document.createElement("button");
        b.className = "v31-card-btn";
        b.innerHTML = jobCardHtml(id, job);
        b.onclick = function(){
          G.jobs = [{id: Number(id), lv: 1}];
          your_character();
        };
        $ch.appendChild(b);
      });
    });

    var back = document.createElement("button");
    back.textContent = "← Back to Race Selection";
    back.onclick = pick_race;
    $ch.appendChild(back);
  }

  function patchUpdateEntry(){
    try {
      var oldUpdates = window.updates_screen || (typeof updates_screen === "function" ? updates_screen : null);
      if (!oldUpdates || oldUpdates._v311BaseJobFilter) return;

      var wrapped = function(){
        var result = oldUpdates.apply(this, arguments);

        setTimeout(function(){
          try {
            var out = document.getElementById("output");
            if (!out || document.getElementById("v311-update-entry")) return;

            var card = document.createElement("div");
            card.id = "v311-update-entry";
            card.className = "update-card";
            card.innerHTML =
              '<div class="update-card-title">v0.31.1 — Base Job Selection Filter</div>' +
              '<div class="update-card-date">Job Selection Fix</div>' +
              '<ul>' +
              '<li>Fixed the job selection screen so it only shows base jobs during character creation.</li>' +
              '<li>Advanced, Specialist, Rare, Hidden, and Race Evolution jobs no longer appear on the starting job screen.</li>' +
              '<li>The Full Class Registry still shows the larger job tree after the game starts.</li>' +
              '</ul>';

            out.insertBefore(card, out.firstChild);
          } catch(e) {}
        }, 0);

        return result;
      };

      wrapped._v311BaseJobFilter = true;
      window.updates_screen = wrapped;
      try { updates_screen = wrapped; } catch(e) {}
    } catch(e) {}
  }

  addStyle();

  window.pick_job = pickBaseJobOnly;
  try { pick_job = pickBaseJobOnly; } catch(e) {}

  patchUpdateEntry();
})();
