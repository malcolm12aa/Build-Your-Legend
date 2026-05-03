// v0.22 — Consolidated Updates Screen
// Moves update notes out of Settings and into one Updates screen.
// Settings now gets one Updates button instead of many update sections.
// ═══════════════════════════════════════════════════════════════
(function installV22UpdatesScreen(){
  var V22_VERSION = 'v0.22-updates-screen';

  var UPDATE_LOG_V22 = [
    {
      version: 'v0.24 — Main Menu Logo No-Clipping Fix',
      date: 'UI Fix',
      items: [
        'Fixed the main menu logo being pushed too high or clipped.',
        'Centered the full logo inside the main menu area.'
      ]
    },
    {
      version: 'v0.23 — Main Menu Logo Center Fix',
      date: 'UI Fix',
      items: [
        'Centered the main menu logo.',
        'Centered main menu title, subtitle, message text, and buttons for a cleaner landing screen.'
      ]
    },
    {
      version: 'v0.22 — Updates Screen Cleanup',
      date: 'Current',
      items: [
        'Moved old update notes out of the Settings menu.',
        'Added one Updates button in Settings.',
        'Created a dedicated Updates screen that lists the game update history.'
      ]
    },
    {
      version: 'v0.21 — Skill System Redo',
      date: 'Skill Update',
      items: [
        'Rebuilt the Skill Screen into Race Skills, Job Skills, Purchased Skills, Equipment Skills, Set Skills, and Legacy Skills.',
        'Added skill tags such as Active, Passive, Trait, Mastery, Equipment, Physical, Magic, Healing, Buff, Debuff, Ultimate, and Utility.',
        'Rebuilt the Skill Library into categories like Combat Arts, Magic Spells, Divine Skills, Dark Arts, Summoning, and Utility.'
      ]
    },
    {
      version: 'v0.20.1 — Safe Cohesion Text Patch',
      date: 'Polish Update',
      items: [
        'Improved race, job, and skill descriptions without replacing the main menu, job menus, registry, shops, or map logic.',
        'Added clearer build notes for race identity, job role, and skill use cases.'
      ]
    },
    {
      version: 'v0.19 — Roguelike Maps',
      date: 'Map Update',
      items: [
        'Rebuilt World Map into roguelike runs.',
        'Added three fantasy maps for every 10 levels up to Level 100.',
        'Rebuilt Raid Map into boss-focused gauntlet runs with rewards and clear tracking.'
      ]
    },
    {
      version: 'v0.18 — Fantasy Recruitment Hall',
      date: 'Recruit Update',
      items: [
        'Removed anime character recruits.',
        'Added fantasy companions with level, race, job, cost, passive bonuses, and battle assist abilities.',
        'Updated Recruitment Hall text to fit the fantasy RPG direction.'
      ]
    },
    {
      version: 'v0.17 — Auto-Sizing Text Box',
      date: 'UI Update',
      items: [
        'The main output text box now grows and shrinks based on the amount of text.',
        'Long screens still scroll so mobile and desktop remain usable.'
      ]
    },
    {
      version: 'v0.16 — Centered Main Menu',
      date: 'UI Update',
      items: [
        'Centered the logo, title, subtitle, text, and buttons on the main menu.',
        'Improved the main menu layout on mobile screens.'
      ]
    },
    {
      version: 'v0.15 — Full Window Layout',
      date: 'UI Update',
      items: [
        'Expanded the game shell to fit the full browser window.',
        'Improved desktop and mobile scaling.'
      ]
    },
    {
      version: 'v0.14 — Main Menu + Cookie Save',
      date: 'Main Menu Update',
      items: [
        'Added the Build Your Legend main menu.',
        'Added Start New Game, Load Save, and Settings options.',
        'Added cookie-based save support with local browser backup behavior.'
      ]
    },
    {
      version: 'v0.13 — Separate Race / Job Progression',
      date: 'Progression Fix',
      items: [
        'Race evolution and job upgrading now progress separately.',
        'Race evolution no longer blocks job upgrades.',
        'Job upgrades still require the current job/class to be maxed.'
      ]
    },
    {
      version: 'v0.12 — Next Evolution Preview',
      date: 'Progression UI',
      items: [
        'Character Status now shows the next race evolution when the current race stage is maxed.',
        'Character Status now shows the next job upgrade when the current job is maxed.',
        'Only the immediate next step is shown instead of the full tree.'
      ]
    },
    {
      version: 'v0.11 — Detailed Skill Descriptions',
      date: 'Skill Polish',
      items: [
        'Expanded race skill descriptions.',
        'Expanded job skill descriptions.',
        'Improved descriptions for library skills, equipment skills, potions, and weapons.'
      ]
    },
    {
      version: 'v0.10 — Sequential Job Mastery',
      date: 'Class Rule Update',
      items: [
        'You can only add or upgrade into a new job after maxing the current job.',
        'Base Job Registry locks new choices until the current job is mastered.'
      ]
    },
    {
      version: 'v0.9 — Focused Class Paths',
      date: 'Class UI Update',
      items: [
        'Full Class Registry now shows base jobs only.',
        'Character Status only shows race/job upgrades that are currently available.'
      ]
    },
    {
      version: 'v0.8 — Fantasy Shop Cleanup',
      date: 'Shop Update',
      items: [
        'Removed the old anime shop structure from the Blacksmith, Equipment Shop, Skill Library, and Alchemy Shop.',
        'Replaced shop items with fantasy weapons, armor, accessories, spells, and alchemy items.'
      ]
    },
    {
      version: 'v0.7 — Fantasy Race / Job Redo',
      date: 'System Redo',
      items: [
        'Replaced anime races with fantasy base races.',
        'Replaced anime jobs with fantasy RPG jobs.',
        'Added race evolution branches and job upgrade paths.'
      ]
    },
    {
      version: 'v0.6 — Race + Job Evolution',
      date: 'Progression Expansion',
      items: [
        'Added race evolution paths.',
        'Added job requirements and class unlock requirements.',
        'Added Race Evolution and Job Requirements screens.'
      ]
    },
    {
      version: 'v0.5 — Equipment Skills + Set Bonuses',
      date: 'Equipment Update',
      items: [
        'Equipment gained unique skills.',
        'Full armor sets gained set bonuses.'
      ]
    },
    {
      version: 'v0.4 — Unique Races + Jobs',
      date: 'Identity Update',
      items: [
        'Base races and jobs were given stronger stat identities.',
        'Descriptions and skill hooks were expanded to make paths feel more distinct.'
      ]
    },
    {
      version: 'v0.3 — Expansion Systems',
      date: 'Major Expansion',
      items: [
        'Added race skill trees, expanded jobs, raid bosses, equipment, challenge modes, and improved save tools.',
        'Added more screens and systems that later became the foundation for the current fantasy version.'
      ]
    }
  ];

  function escV22(x){
    return String(x == null ? '' : x).replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  window.updates_screen = function(){
    clearOutput();
    showBattlePanel(false);
    print('UPDATES — BUILD YOUR LEGEND', 'highlight');
    print('All update notes now live here instead of cluttering the Settings menu.', 'narrator');
    print('Current Build: ' + V22_VERSION, 'info');
    print('');
    $ch.innerHTML = '';

    UPDATE_LOG_V22.forEach(function(update){
      var card = document.createElement('div');
      card.className = 'update-card';
      card.innerHTML =
        '<div class="update-card-title">' + escV22(update.version) + '</div>' +
        '<div class="update-card-date">' + escV22(update.date) + '</div>' +
        '<ul>' + update.items.map(function(item){ return '<li>' + escV22(item) + '</li>'; }).join('') + '</ul>';
      $ch.appendChild(card);
    });

    showChoices([
      ['← Settings', function(){ toggleSettings(); }],
      ['🏠 Main Menu', (typeof main_menu === 'function' ? main_menu : town_center)],
      ['← Town Center', town_center]
    ]);
  };

  function sectionTitleV22(sec){
    var h = sec && sec.querySelector ? sec.querySelector('h3') : null;
    return h ? (h.textContent || '').trim() : '';
  }

  function isOldUpdateSectionV22(sec){
    if (!sec || sec.id === 'v22-settings-section') return false;
    var id = sec.id || '';
    var title = sectionTitleV22(sec);
    if (/^Update v/i.test(title)) return true;
    if (/^Expansion v/i.test(title)) return true;
    if (/^(v\d+|v201|v21|v20|v19|v18|v17|v16|v15|v14|v13|v12|v11|v10|v09|v08|v07|progression|expansion)-settings-section$/i.test(id)) return true;
    return false;
  }

  function cleanupSettingsUpdateSectionsV22(){
    var panel = document.getElementById('settings-panel');
    if (!panel) return;

    Array.prototype.slice.call(panel.querySelectorAll('.sp-section')).forEach(function(sec){
      if (isOldUpdateSectionV22(sec)) sec.remove();
    });

    Array.prototype.slice.call(panel.querySelectorAll('.sp-section')).forEach(function(sec){
      var title = sectionTitleV22(sec);
      if (/Help \/ Latest Update/i.test(title)) {
        var h = sec.querySelector('h3');
        if (h) h.textContent = 'Help / Game Info';
        var info = sec.querySelector('div[style*="font-size"]');
        if (info) {
          info.textContent = 'Open help, build guide, feedback, or the full update log. Update notes have been moved to their own screen.';
        }
        if (!sec.querySelector('[data-v22-updates-button="1"]')) {
          var row = sec.querySelector('div[style*="display:flex"]') || sec;
          var btn = document.createElement('button');
          btn.className = 'sp-btn';
          btn.setAttribute('data-v22-updates-button', '1');
          btn.textContent = '🆕 Updates';
          btn.onclick = function(){ closeSettingsPanel(); updates_screen(); };
          row.insertBefore(btn, row.firstChild);
        }
      }
    });

    if (!document.getElementById('v22-settings-section')) {
      var saveSection = Array.prototype.slice.call(panel.querySelectorAll('.sp-section')).find(function(s){
        return /Save \/ Load/.test(s.textContent || '');
      });
      var div = document.createElement('div');
      div.className = 'sp-section';
      div.id = 'v22-settings-section';
      div.innerHTML =
        '<h3>Updates</h3>' +
        '<div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">' +
        'View the full update history in one clean screen.' +
        '</div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
        '<button class="sp-btn" onclick="closeSettingsPanel(); updates_screen()">🆕 Open Updates Screen</button>' +
        '</div>';
      if (saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
    }
  }

  var oldToggleSettingsV22 = typeof toggleSettings === 'function' ? toggleSettings : null;
  if (oldToggleSettingsV22 && !toggleSettings._v22Wrapped) {
    toggleSettings = function(){
      var result = oldToggleSettingsV22.apply(this, arguments);
      setTimeout(cleanupSettingsUpdateSectionsV22, 0);
      return result;
    };
    toggleSettings._v22Wrapped = true;
  }

  var oldCloseSettingsPanelV22 = typeof closeSettingsPanel === 'function' ? closeSettingsPanel : null;
  if (oldCloseSettingsPanelV22 && !closeSettingsPanel._v22Wrapped) {
    closeSettingsPanel = function(){
      var result = oldCloseSettingsPanelV22.apply(this, arguments);
      setTimeout(cleanupSettingsUpdateSectionsV22, 0);
      return result;
    };
    closeSettingsPanel._v22Wrapped = true;
  }

  cleanupSettingsUpdateSectionsV22();

  try {
    var panel = document.getElementById('settings-panel');
    if (panel && window.MutationObserver) {
      var obs = new MutationObserver(function(){
        if (!obs._v22Busy) {
          obs._v22Busy = true;
          setTimeout(function(){ cleanupSettingsUpdateSectionsV22(); obs._v22Busy = false; }, 0);
        }
      });
      obs.observe(panel, {childList:true, subtree:false});
    }
  } catch(e){}

  if (!G.save_meta || typeof G.save_meta !== 'object') G.save_meta = {};
  G.save_meta.version = V22_VERSION;
})();
