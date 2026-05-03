// v0.18 — Fantasy Recruitment Hall Redo
// ═══════════════════════════════════════════════════════════════
(function installV18RecruitmentSettingsNote(){
  function injectV18Settings(){
    var panel = document.getElementById('settings-panel');
    if (!panel || document.getElementById('v18-settings-section')) return;
    var saveSection = Array.prototype.slice.call(panel.querySelectorAll('.sp-section')).find(function(s){ return /Save \/ Load/.test(s.textContent || ''); });
    var div = document.createElement('div');
    div.className = 'sp-section';
    div.id = 'v18-settings-section';
    div.innerHTML = '<h3>Update v0.18</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">Recruitment Hall rebuilt with fantasy companions. Anime characters were removed. Every recruit now shows Level, Race, Job, bonus, and battle assist.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); recruitment_hall()">🤝 Recruitment Hall</button></div>';
    if (saveSection) panel.insertBefore(div, saveSection); else panel.appendChild(div);
  }
  injectV18Settings();
})();

// ═══════════════════════════════════════════════════════════════
