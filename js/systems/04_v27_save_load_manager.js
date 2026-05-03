(function installV27SaveLoadManager(){
  "use strict";
  var V27_VERSION = "v0.27-save-load-manager";
  var SAVE_PREFIX = "BYL_v27_slot_";
  var BACKUP_PREFIX = "BYL_v27_backup_";
  var AUTOSAVE_KEY = "BYL_v27_autosave";
  var AUTOSAVE_BACKUP_KEY = "BYL_v27_autosave_backup";
  var ACTIVE_SLOT_KEY = "BYL_v27_active_slot";
  var LEGACY_KEYS = ["animeRPG_slot_1","animeRPG_slot_2","animeRPG_slot_3","animeRPG_v2","animeRPG_v1"];
  var SLOTS = [1,2,3];

  var base = {
    main_menu: typeof main_menu === "function" ? main_menu : null,
    toggleSettings: typeof toggleSettings === "function" ? toggleSettings : null,
    updates_screen: typeof updates_screen === "function" ? updates_screen : null,
    winBattle: typeof winBattle === "function" ? winBattle : null,
    inn: typeof inn === "function" ? inn : null
  };

  function $(id){ return document.getElementById(id); }
  function esc(x){ return String(x == null ? "" : x).replace(/[&<>"']/g,function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
  function clearOut(){ try{ if(typeof clearOutput==="function") clearOutput(); }catch(e){} }
  function panelOff(){ try{ if(typeof showBattlePanel==="function") showBattlePanel(false); }catch(e){} }
  function pr(t,c){ try{ if(typeof print==="function") print(t,c||"narrator"); }catch(e){} }
  function choices(a){ try{ if(typeof showChoices==="function") showChoices(a); }catch(e){} }
  function now(){ return new Date().toISOString(); }
  function fmt(t){ try{ return t ? new Date(t).toLocaleString() : "Never"; }catch(e){ return String(t||"Never"); } }
  function kb(s){ return Math.max(1, Math.ceil(String(s||"").length/1024)); }
  function slotKey(n){ return SAVE_PREFIX+n; }
  function backupKey(n){ return BACKUP_PREFIX+n; }
  function raw(k){ try{return localStorage.getItem(k);}catch(e){return null;} }
  function set(k,v){ localStorage.setItem(k,v); }
  function del(k){ try{localStorage.removeItem(k);}catch(e){} }
  function clone(o){ return JSON.parse(JSON.stringify(o)); }
  function encode(o){ return btoa(unescape(encodeURIComponent(JSON.stringify(o)))); }
  function decode(s){ return JSON.parse(decodeURIComponent(escape(atob(String(s||"").trim())))); }
  function activeSlot(){ var n=parseInt(raw(ACTIVE_SLOT_KEY)||"1",10); return SLOTS.indexOf(n)>=0?n:1; }
  function setActive(n){ if(SLOTS.indexOf(Number(n))>=0) set(ACTIVE_SLOT_KEY,String(Number(n))); }
  function storageOK(){ try{localStorage.setItem("__byl_test__","1");localStorage.removeItem("__byl_test__");return true;}catch(e){return false;} }

  function addStyle(){
    if($("v27-save-style")) return;
    var st=document.createElement("style"); st.id="v27-save-style";
    st.textContent = `
      .save-manager-v27{display:grid;grid-template-columns:1fr;gap:10px;margin:8px 0}
      .save-card-v27{border:1px solid #1c3354;background:linear-gradient(180deg,#07101d,#050810);padding:12px;line-height:1.5}
      .save-card-v27.active{border-color:#e8c84a;box-shadow:0 0 18px rgba(232,200,74,.08) inset}
      .save-card-title-v27{color:#e8c84a;font-weight:900;font-size:14px;letter-spacing:.8px}
      .save-card-sub-v27{color:#8aaac8;font-size:11px;margin-top:3px}
      .save-grid-v27{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px;margin:8px 0}
      .save-field-v27{background:#07090f;border:1px solid #111d2e;padding:6px 8px;color:#8aaac8;font-size:11px}
      .save-field-v27 b{display:block;color:#48cae4;font-size:10px;letter-spacing:.7px;text-transform:uppercase}
      .save-actions-v27{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
      .save-actions-v27 button{width:auto!important;margin:0!important;padding:7px 10px!important;font-size:11px!important}
      .save-danger-v27{color:#ff6b6b!important;border-color:#7a2631!important}
      .save-good-v27{color:#57cc99!important;border-color:#2e7d5b!important}
      .save-warn-v27{color:#ffd166!important;border-color:#7a5c1d!important}
      .save-code-v27{width:100%;min-height:160px;background:#050810;color:#e8c84a;border:1px solid #1c3354;padding:10px;font-family:monospace;font-size:11px;box-sizing:border-box}
      .save-preview-v27{border:1px solid #365d8f;background:#060c18;padding:10px;margin:8px 0}
      .save-msg-v27{font-size:12px;min-height:18px;margin:6px 0;color:#8aaac8}
      @media(max-width:620px){.save-grid-v27{grid-template-columns:1fr}.save-actions-v27{display:grid;grid-template-columns:1fr 1fr}.save-actions-v27 button{width:100%!important}}
    `;
    document.head.appendChild(st);
  }

  function readObj(key){
    var r=raw(key); if(!r) return null;
    try{return JSON.parse(r);}catch(e){try{return decode(r);}catch(e2){return {__corrupt:true,error:e.message};}}
  }
  function raceName(o){ try{return o&&o.race_id&&typeof RACE_DATA!=="undefined"&&RACE_DATA[o.race_id]?RACE_DATA[o.race_id].name:"—";}catch(e){return "—";} }
  function jobName(o){ try{ if(!o||!o.jobs||!o.jobs.length||typeof JOB_DATA==="undefined") return "—"; var j=JOB_DATA[o.jobs[o.jobs.length-1].id]||JOB_DATA[o.jobs[0].id]; return j?j.name:"—"; }catch(e){return "—";} }
  function summary(o){
    if(!o||o.__corrupt) return null;
    return {name:o.name||"Unnamed",race:raceName(o),job:jobName(o),level:o.total_lv||o.level||1,gold:o.gold||0,version:(o.save_meta&&o.save_meta.version)||o.version||"Unknown",time:(o.save_meta&&o.save_meta.lastSaved)||o.lastSaved||null,repaired:!!(o.save_meta&&o.save_meta.repairedByV27),size:kb(JSON.stringify(o))};
  }

  function repair(o){
    if(!o||typeof o!=="object"||o.__corrupt) throw new Error("Invalid or corrupted save object.");
    var changed=false;
    function def(path,val){
      var cur=o;
      for(var i=0;i<path.length-1;i++){ if(!cur[path[i]]||typeof cur[path[i]]!=="object"){cur[path[i]]={};changed=true;} cur=cur[path[i]]; }
      var k=path[path.length-1];
      if(cur[k]===undefined||cur[k]===null){cur[k]=typeof val==="function"?val():val;changed=true;}
    }
    def(["name"],""); def(["level"],1); def(["total_lv"],o.level||1); def(["gold"],0); def(["race_lv"],1);
    def(["jobs"],[]); def(["inventory"],[]); def(["spells"],[]); def(["learned_skills"],[]); def(["learned_abilities"],[]);
    def(["ability_cooldowns"],{}); def(["ability_uses"],{}); def(["status_applications"],{}); def(["enemy_encounters"],{}); def(["codex_unlocked"],{});
    def(["recruit_stats"],{}); def(["recruit_skillbooks"],{}); def(["recruits"],[]); def(["active_recruits"],[]);
    def(["recruit_exp"],{}); def(["recruit_level"],{}); def(["recruit_uses"],{}); def(["recruit_bonds"],{}); def(["recruit_story_flags"],{});
    def(["achievements"],{}); def(["achievements","flags"],[]); def(["achievements","defeated"],{}); def(["achievements","totalKills"],0);
    def(["equipment_inventory"],[]); def(["equipment"],{}); def(["equipment","head"],null); def(["equipment","chest"],null); def(["equipment","arms"],null); def(["equipment","legs"],null); def(["equipment","weapon1"],null); def(["equipment","weapon2"],null); def(["equipment","accessories"],function(){return [null,null,null,null,null];});
    if(!Array.isArray(o.equipment.accessories)){o.equipment.accessories=[null,null,null,null,null]; changed=true;}
    while(o.equipment.accessories.length<5){o.equipment.accessories.push(null); changed=true;}
    def(["bonus"],{}); ["hp","mp","pa","pd","ag","ma","md","rs","sp"].forEach(function(k){def(["bonus",k],0);});
    def(["max_stamina"],60); def(["stamina"],o.max_stamina||60);
    o.max_stamina=Number(o.max_stamina)||60; o.stamina=Math.max(0,Math.min(Number(o.stamina)||o.max_stamina,o.max_stamina));
    def(["save_meta"],{});
    var old=o.save_meta.version||o.version||"Unknown";
    o.save_meta.previousVersion=o.save_meta.previousVersion||old;
    o.save_meta.version=V27_VERSION; o.save_meta.game="Build Your Legend";
    o.save_meta.repairedByV27=changed||!!o.save_meta.repairedByV27;
    o.save_meta.lastRepairCheck=now();
    return o;
  }

  function current(){
    var o=clone(G);
    if(!o.save_meta||typeof o.save_meta!=="object") o.save_meta={};
    o.save_meta.version=V27_VERSION; o.save_meta.lastSaved=now(); o.save_meta.game="Build Your Legend"; o.save_meta.activeSlot=activeSlot();
    return repair(o);
  }
  function apply(o){
    o=repair(o);
    Object.keys(G).forEach(function(k){delete G[k];});
    Object.keys(o).forEach(function(k){G[k]=o[k];});
    try{ if(typeof ensureGameCollections==="function") ensureGameCollections(); }catch(e){}
    try{ if(typeof ensureV26State==="function") ensureV26State(); }catch(e){}
    try{ if(typeof applyStats==="function") applyStats(); }catch(e){}
    try{ if(typeof updateStats==="function") updateStats(); }catch(e){}
    return o;
  }
  function msg(m,type){
    var color=type==="good"?"#57cc99":type==="bad"?"#ff6b6b":type==="warn"?"#ffd166":"#8aaac8";
    try{ if(typeof showSaveMsg==="function") showSaveMsg(m,color); }catch(e){}
    var el=$("save-manager-msg-v27"); if(el){el.textContent=m;el.style.color=color;}
  }
  function autosaveGlow(){
    var el=$("autosave-indicator");
    if(!el){ var h=$("game-header"); if(!h) return; el=document.createElement("span"); el.id="autosave-indicator"; el.style.cssText="position:absolute;right:70px;top:9px;z-index:60;font-size:11px;color:#57cc99;opacity:0;transition:opacity .2s;font-family:'Rajdhani',monospace"; h.appendChild(el); }
    el.textContent="✓ autosaved"; el.style.opacity="1"; clearTimeout(el._t); el._t=setTimeout(function(){el.style.opacity="0";},1800);
  }

  function writeSlot(n,o,silent){
    n=Number(n); if(SLOTS.indexOf(n)<0) throw new Error("Invalid slot.");
    var ex=raw(slotKey(n)); if(ex) set(backupKey(n),ex);
    o=repair(o||current()); o.save_meta.slot=n; o.save_meta.lastSaved=now(); o.save_meta.version=V27_VERSION;
    set(slotKey(n),JSON.stringify(o)); setActive(n);
    if(!silent) msg("✓ Saved to Slot "+n,"good");
  }
  function writeAuto(o,reason){
    var ex=raw(AUTOSAVE_KEY); if(ex) set(AUTOSAVE_BACKUP_KEY,ex);
    o=repair(o||current()); o.save_meta.slot="autosave"; o.save_meta.autosaveReason=reason||"autosave"; o.save_meta.lastSaved=now();
    set(AUTOSAVE_KEY,JSON.stringify(o)); autosaveGlow();
  }
  function loadSlot(n){
    try{ var o=readObj(slotKey(n)); if(!o) return msg("Slot "+n+" is empty.","bad"); if(o.__corrupt) throw new Error(o.error||"Corrupted slot."); var old=(o.save_meta&&o.save_meta.version)||"Unknown"; apply(o); setActive(n); msg("✓ Loaded Slot "+n+(old!==V27_VERSION?" — repaired from "+old:""),"good"); if(typeof town_center==="function") town_center(); }catch(e){msg("✗ Load failed: "+e.message,"bad");}
  }
  function loadAuto(){
    try{ var o=readObj(AUTOSAVE_KEY); if(!o) return msg("No autosave found.","bad"); if(o.__corrupt) throw new Error(o.error||"Corrupted autosave."); apply(o); msg("✓ Loaded Autosave","good"); if(typeof town_center==="function") town_center(); }catch(e){msg("✗ Autosave failed: "+e.message,"bad");}
  }

  function card(label,o,bak,active,kind){
    var corrupt=o&&o.__corrupt, s=(!o||corrupt)?null:summary(o), bs=bak&&!bak.__corrupt?summary(bak):null;
    return '<div class="save-card-v27 '+(active?'active':'')+'"><div class="save-card-title-v27">'+esc(label)+(active?'  ★ Active':'')+'</div>'+
      (corrupt?'<div class="save-card-sub-v27" style="color:#ff6b6b">Corrupted save: '+esc(o.error||"Unknown")+'</div>':s?'<div class="save-card-sub-v27">'+esc(s.name)+' · '+esc(s.race)+' · '+esc(s.job)+'</div>':'<div class="save-card-sub-v27">Empty slot.</div>')+
      (s?'<div class="save-grid-v27"><div class="save-field-v27"><b>Total Level</b>'+esc(s.level)+'</div><div class="save-field-v27"><b>Gold</b>'+esc(s.gold)+'</div><div class="save-field-v27"><b>Last Saved</b>'+esc(fmt(s.time))+'</div><div class="save-field-v27"><b>Version</b>'+esc(s.version)+'</div><div class="save-field-v27"><b>Size</b>'+esc(s.size)+' KB</div><div class="save-field-v27"><b>Repair Status</b>'+(s.repaired?'Repaired / migrated':'Clean')+'</div></div>':'')+
      '<div class="save-card-sub-v27">Backup: '+(bs?esc(bs.name+' · Lv.'+bs.level+' · '+fmt(bs.time)):'None')+'</div><div class="save-actions-v27" data-kind="'+kind+'"></div></div>';
  }
  function action(t,fn,cls){ var b=document.createElement("button"); b.textContent=t; if(cls)b.className=cls; b.onclick=fn; return b; }

  function render(){
    addStyle(); clearOut(); panelOff();
    pr("SAVE / LOAD MANAGER","highlight");
    pr("Manual saves use 3 slots. Autosave is separate, so it will not overwrite your manual slots.","narrator");
    pr("Active Slot: "+activeSlot()+" · Storage: "+(storageOK()?"Available":"Blocked")+" · Current Version: "+V27_VERSION,"info");
    $ch.innerHTML='<div id="save-manager-msg-v27" class="save-msg-v27"></div>';
    var wrap=document.createElement("div"); wrap.className="save-manager-v27";
    SLOTS.forEach(function(n){wrap.insertAdjacentHTML("beforeend",card("Manual Slot "+n,readObj(slotKey(n)),readObj(backupKey(n)),activeSlot()===n,"slot"+n));});
    wrap.insertAdjacentHTML("beforeend",card("Autosave Slot",readObj(AUTOSAVE_KEY),readObj(AUTOSAVE_BACKUP_KEY),false,"autosave"));
    var legacy=LEGACY_KEYS.map(function(k){return {key:k,obj:readObj(k)};}).filter(function(x){return x.obj&&!x.obj.__corrupt;});
    if(legacy.length){
      var leg=document.createElement("div"); leg.className="save-card-v27"; leg.innerHTML='<div class="save-card-title-v27">Legacy Saves Found</div><div class="save-card-sub-v27">Older save keys were detected. Import one into a manual slot to migrate it safely.</div>';
      legacy.forEach(function(x){
        var sum=summary(repair(clone(x.obj)));
        var info=document.createElement("div"); info.className="save-card-sub-v27"; info.textContent=x.key+" — "+sum.name+" · "+sum.race+" · Lv."+sum.level; leg.appendChild(info);
        var acts=document.createElement("div"); acts.className="save-actions-v27";
        SLOTS.forEach(function(n){ acts.appendChild(action("Import to Slot "+n,function(){writeSlot(n,x.obj,true);msg("✓ Imported legacy save into Slot "+n,"good");render();})); });
        leg.appendChild(acts);
      });
      wrap.appendChild(leg);
    }
    var debug=document.createElement("div"); debug.className="save-card-v27";
    debug.innerHTML='<div class="save-card-title-v27">Save Debug Info</div><div class="save-grid-v27"><div class="save-field-v27"><b>Active Slot</b>'+activeSlot()+'</div><div class="save-field-v27"><b>Autosave</b>'+(readObj(AUTOSAVE_KEY)?"Exists":"Missing")+'</div><div class="save-field-v27"><b>Backup Slot 1</b>'+(readObj(backupKey(1))?"Exists":"Missing")+'</div><div class="save-field-v27"><b>Backup Slot 2</b>'+(readObj(backupKey(2))?"Exists":"Missing")+'</div><div class="save-field-v27"><b>Backup Slot 3</b>'+(readObj(backupKey(3))?"Exists":"Missing")+'</div><div class="save-field-v27"><b>Browser Storage</b>'+(storageOK()?"OK":"Blocked / Private")+'</div></div>';
    wrap.appendChild(debug); $ch.appendChild(wrap);

    SLOTS.forEach(function(n){
      var a=$ch.querySelector('.save-actions-v27[data-kind="slot'+n+'"]'); if(!a)return;
      var load=action("📂 Load",function(){loadSlot(n);}); load.disabled=!readObj(slotKey(n));
      var delB=action("🗑 Delete",function(){ if(confirm("Delete Slot "+n+"? A backup will remain.")){var ex=raw(slotKey(n)); if(ex)set(backupKey(n),ex); del(slotKey(n)); msg("Deleted Slot "+n+". Backup kept.","warn"); render();}},"save-danger-v27"); delB.disabled=!readObj(slotKey(n));
      var rest=action("↩ Restore Backup",function(){var b=raw(backupKey(n)); if(!b)return msg("No backup found.","bad"); var cur=raw(slotKey(n)); if(cur)set(backupKey(n)+"_pre_restore",cur); set(slotKey(n),b); msg("✓ Restored backup into Slot "+n,"good"); render();},"save-warn-v27"); rest.disabled=!readObj(backupKey(n));
      a.appendChild(action("💾 Save Here",function(){writeSlot(n,current());render();},"save-good-v27")); a.appendChild(load); a.appendChild(delB); a.appendChild(rest);
    });
    var aa=$ch.querySelector('.save-actions-v27[data-kind="autosave"]');
    if(aa){ var la=action("📂 Load Autosave",loadAuto); la.disabled=!readObj(AUTOSAVE_KEY); var da=action("🗑 Delete Autosave",function(){if(confirm("Delete Autosave?")){var ex=raw(AUTOSAVE_KEY);if(ex)set(AUTOSAVE_BACKUP_KEY,ex);del(AUTOSAVE_KEY);msg("Deleted autosave. Backup kept.","warn");render();}},"save-danger-v27"); da.disabled=!readObj(AUTOSAVE_KEY); var ra=action("↩ Restore Auto Backup",function(){var b=raw(AUTOSAVE_BACKUP_KEY);if(!b)return msg("No autosave backup found.","bad");set(AUTOSAVE_KEY,b);msg("✓ Restored autosave backup","good");render();},"save-warn-v27"); ra.disabled=!readObj(AUTOSAVE_BACKUP_KEY); aa.appendChild(la);aa.appendChild(da);aa.appendChild(ra);}
    choices([["💾 Quick Save to Active Slot",function(){writeSlot(activeSlot(),current());render();}],["📂 Load Autosave",loadAuto],["⬆ Export Save",exportSave],["⬇ Import Save",importSave],["🗑 New Game",confirmNewGame],["← Main Menu",typeof main_menu==="function"?main_menu:town_center],["← Town Center",town_center]]);
  }

  exportSave=function(){
    addStyle(); clearOut(); panelOff(); pr("EXPORT SAVE","highlight"); pr("Copy this save code and keep it somewhere safe.","narrator"); $ch.innerHTML="";
    var code; try{code=encode(current());}catch(e){code="EXPORT FAILED: "+e.message;}
    var box=document.createElement("textarea"); box.className="save-code-v27"; box.value=code; $ch.appendChild(box);
    var m=document.createElement("div"); m.className="save-msg-v27"; m.textContent="Length: "+code.length+" characters"; $ch.appendChild(m);
    choices([["📋 Copy to Clipboard",function(){ if(navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(function(){m.textContent="✓ Copied save code.";}); else{box.select();document.execCommand("copy");m.textContent="✓ Copied save code.";}}],["← Save Manager",render]]);
  };
  var pending=null;
  importSave=function(){
    addStyle(); clearOut(); panelOff(); pr("IMPORT SAVE","highlight"); pr("Paste a Build Your Legend export code. It will not replace anything until you choose a slot.","narrator"); $ch.innerHTML="";
    var box=document.createElement("textarea"); box.className="save-code-v27"; box.placeholder="Paste save code here..."; $ch.appendChild(box);
    var prev=document.createElement("div"); prev.className="save-preview-v27"; prev.innerHTML='<div class="save-card-sub-v27">No import checked yet.</div>'; $ch.appendChild(prev);
    function importTo(n){ if(!pending)return msg("Check the import code first.","bad"); writeSlot(n,pending,true); msg("✓ Imported save to Slot "+n,"good"); render(); }
    choices([["🔍 Check Import",function(){try{pending=repair(decode(box.value));var s=summary(pending);prev.innerHTML='<div class="save-card-title-v27">Imported Save Found</div><div class="save-grid-v27"><div class="save-field-v27"><b>Name</b>'+esc(s.name)+'</div><div class="save-field-v27"><b>Race</b>'+esc(s.race)+'</div><div class="save-field-v27"><b>Job</b>'+esc(s.job)+'</div><div class="save-field-v27"><b>Total Level</b>'+esc(s.level)+'</div><div class="save-field-v27"><b>Gold</b>'+esc(s.gold)+'</div><div class="save-field-v27"><b>Version</b>'+esc(s.version)+'</div></div><div class="save-card-sub-v27">Choose a slot below to import this save.</div>';}catch(e){pending=null;prev.innerHTML='<div class="save-card-sub-v27" style="color:#ff6b6b">Import failed: '+esc(e.message)+'</div>';}}],["Import to Slot 1",function(){importTo(1);}],["Import to Slot 2",function(){importTo(2);}],["Import to Slot 3",function(){importTo(3);}],["← Save Manager",render]]);
  };

  saveGame=function(){ try{writeSlot(activeSlot(),current());}catch(e){msg("✗ Save failed: "+e.message,"bad");} };
  loadGame=function(){ render(); };
  autoSave=function(reason){ try{writeAuto(current(),reason||"autosave");}catch(e){console.warn("Autosave failed:",e);} };
  confirmNewGame=function(){
    clearOut(); panelOff(); pr("NEW GAME","highlight"); pr("Choose how you want to start over. Backups and other slots can be kept.","narrator"); $ch.innerHTML="";
    choices([["Start New Game — Clear Active Slot",function(){if(!confirm("Start new game and clear active Slot "+activeSlot()+"?"))return;var n=activeSlot(),ex=raw(slotKey(n));if(ex)set(backupKey(n),ex);del(slotKey(n));try{sessionStorage.setItem("byl_start_new","1");}catch(e){}location.reload();}],["Start New Game — Keep Saves",function(){if(!confirm("Start a new game without deleting save slots?"))return;try{sessionStorage.setItem("byl_start_new","1");}catch(e){}location.reload();}],["Delete ALL Saves",function(){if(!confirm("Delete ALL v0.27 manual saves, autosave, and backups?"))return;SLOTS.forEach(function(n){del(slotKey(n));del(backupKey(n));});del(AUTOSAVE_KEY);del(AUTOSAVE_BACKUP_KEY);msg("All v0.27 saves deleted.","warn");render();}],["Cancel",render]]);
  };

  window.save_load_manager_screen=render;
  window.save_manager_screen=render;
  window.loadAutosaveV27=loadAuto;
  window.saveToSlotV27=function(n){writeSlot(n,current());render();};
  window.loadSlotV27=loadSlot;

  if(base.main_menu){
    main_menu=function(){ var ret=base.main_menu.apply(this,arguments); setTimeout(function(){Array.prototype.slice.call(document.querySelectorAll(".main-menu-btn,button")).forEach(function(b){if(/Load Save/i.test(b.textContent||"")){b.disabled=false;b.onclick=render;b.textContent="📂 Load Save / Save Manager";}});},0); return ret; };
  }
  function injectSettings(){
    var p=$("settings-panel"); if(!p||$("v27-save-settings-section"))return;
    var saveSec=Array.prototype.slice.call(p.querySelectorAll(".sp-section")).find(function(s){return /Save \/ Load/i.test(s.textContent||"");});
    var div=document.createElement("div"); div.className="sp-section"; div.id="v27-save-settings-section";
    div.innerHTML='<h3>Save / Load Manager</h3><div style="font-size:11px;color:#8aaac8;line-height:1.55;margin-bottom:8px">v0.27 adds manual slots, autosave, backups, repair, import/export, and safer new game handling.</div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="sp-btn" onclick="closeSettingsPanel(); save_load_manager_screen()">📂 Save Manager</button><button class="sp-btn" onclick="saveGame()">💾 Quick Save</button><button class="sp-btn" onclick="closeSettingsPanel(); loadAutosaveV27()">📂 Load Autosave</button><button class="sp-btn" onclick="closeSettingsPanel(); exportSave()">⬆ Export</button><button class="sp-btn" onclick="closeSettingsPanel(); importSave()">⬇ Import</button></div>';
    if(saveSec)p.insertBefore(div,saveSec); else p.appendChild(div);
  }
  if(base.toggleSettings&&!toggleSettings._v27SaveWrapped){toggleSettings=function(){var r=base.toggleSettings.apply(this,arguments);setTimeout(injectSettings,0);return r;};toggleSettings._v27SaveWrapped=true;}
  if(base.winBattle&&!winBattle._v27SaveWrapped){winBattle=async function(){var r=await base.winBattle.apply(this,arguments);setTimeout(function(){autoSave("battle_win");},300);return r;};winBattle._v27SaveWrapped=true;}
  if(base.inn&&!inn._v27SaveWrapped){inn=function(){var r=base.inn.apply(this,arguments);setTimeout(function(){Array.prototype.slice.call(document.querySelectorAll("#choices button")).forEach(function(b){if(/Rest/i.test(b.textContent||"")&&!b._v27RestAutosave){b._v27RestAutosave=true;var old=b.onclick;b.onclick=function(){var rr=old&&old.apply(this,arguments);setTimeout(function(){autoSave("inn_rest");},200);return rr;};}});},0);return r;};inn._v27SaveWrapped=true;}
  document.addEventListener("click",function(e){var b=e.target&&e.target.closest?e.target.closest("button"):null;if(!b)return;var t=b.textContent||"";if(/(buy|learn|hire|recruit|equip|change equipped|rest|evolve|upgrade|level up)/i.test(t))setTimeout(function(){autoSave("action");},450);},true);
  if(base.updates_screen&&!updates_screen._v27SaveWrapped){updates_screen=function(){var r=base.updates_screen.apply(this,arguments);try{var card=document.createElement("div");card.className="update-card";card.innerHTML='<div class="update-card-title">v0.27 — Save / Load Manager Update</div><div class="update-card-date">Save System Update</div><ul><li>Rebuilt save/load into a cleaner Save Manager.</li><li>Added 3 manual save slots with detailed slot cards.</li><li>Added a separate autosave slot.</li><li>Added backup saves before overwriting or deleting slots.</li><li>Added repair/migration for old saves.</li><li>Improved import/export with validation and preview.</li><li>Added delete and restore backup options.</li><li>Improved mobile save/load layout.</li><li>Made New Game safer.</li><li>Main menu Load Save now opens the Save Manager screen.</li></ul>';if($ch&&$ch.firstChild)$ch.insertBefore(card,$ch.firstChild);else if($ch)$ch.appendChild(card);}catch(e){}return r;};updates_screen._v27SaveWrapped=true;}

  addStyle(); injectSettings();
  try{ if(typeof G!=="undefined") repair(G); }catch(e){}
  try{ if(typeof updateStats==="function") updateStats(); }catch(e){}
})();
