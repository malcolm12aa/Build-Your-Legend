(function installV501RequestedFixes(){
"use strict";
var oldPickRace=typeof pick_race==="function"?pick_race:null;
var oldStartBattle=typeof startBattle==="function"?startBattle:null;
var oldBuildSummary=window.build_summary_screen||null;
var oldSkillScreen=typeof skill_screen==="function"?skill_screen:null;
var oldUnlock=window.unlock_tracker_screen||null;
var oldEncy=window.encyclopedia_screen||null;
var oldTitle=window.title_screen||null;
var oldSet=window.set_collection_screen||null;
var oldClass=typeof class_registry_screen==="function"?class_registry_screen:null;

var STAT_KEYS=["hp","mp","pa","pd","ag","ma","md","rs","sp"];
var STAT_LABELS={hp:"HP",mp:"MP",pa:"PHY.ATK",pd:"PHY.DEF",ag:"AGI",ma:"MAG.ATK",md:"MAG.DEF",rs:"RESIST",sp:"SPECIAL"};
var THEMES=[
["Ember Trial","Scorched Air",["Ashhound","Flame Raider","Cinder Knight"],"Fire materials · Sword mastery"],
["Tidal Trial","Rain",["Mist Spirit","Tide Guard","Shell Knight"],"Water materials · Healing mastery"],
["Storm Trial","Mana Storm",["Volt Harrier","Sky Rogue","Thunder Beast"],"Lightning drops · Wand mastery"],
["Shadow Trial","Darkness",["Night Stalker","Shade Beast","Curse Knife"],"Dark materials · Dagger mastery"],
["Celestial Trial","Sacred Ground",["Halo Guard","Sunblade Warden","Barrier Saint"],"Holy materials · Shield mastery"],
["Verdant Trial","Wild Growth",["Rootling","Thorn Beast","Forest Knight"],"Herbs · Spear mastery"],
["Iron Trial","Armored Field",["Iron Golem","Forge Guard","Steel Brute"],"Iron Ore · Heavy Weapon mastery"],
["Frost Trial","Deep Freeze",["Frost Imp","Ice Warden","Glacier Beast"],"Ice crystals · Staff mastery"],
["Abyss Trial","Cursed Ground",["Abyss Wisp","Doom Hound","Black Sigil"],"Cursed bones · Catalyst mastery"],
["World-Crown Trial","World Flux",["Crown Warden","Mythic Ravager","World Judge"],"World-Class drops · Ultimate progress"]
];

function $(id){return document.getElementById(id);}
function out(){return $("output");}
function ch(){return $("choices");}
function esc(x){return String(x==null?"":x).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function say(t,c){try{print(t,c||"narrator");}catch(e){}}
function clear(){try{clearOutput();}catch(e){if(out())out().innerHTML="";if(ch())ch().innerHTML="";}}
function panelOff(){try{showBattlePanel(false);}catch(e){}}
function showChoicesSafe(list){try{showChoices(list);}catch(e){if(ch()){ch().innerHTML="";list.forEach(function(x){var b=document.createElement("button");b.textContent=x[0];b.onclick=x[1];ch().appendChild(b);});}}setTimeout(replaceHubButtons,0);}
function ensureState(){try{if(typeof ensureV50State==="function")ensureV50State();}catch(e){}try{if(!G.v501_nav)G.v501_nav=[];if(!G.v501_towers)G.v501_towers=null;}catch(e){}}
function hasGame(){try{return !!(G&&G.name&&G.race_id&&Array.isArray(G.jobs)&&G.jobs.length);}catch(e){return false;}}
function addStyle(){if($("v501-style"))return;var st=document.createElement("style");st.id="v501-style";st.textContent=`
.v501-card{border:1px solid #224062;background:linear-gradient(180deg,#071220,#050810);padding:11px 12px;margin:9px 0;line-height:1.55}
.v501-card-title{color:#e8c84a;font-size:15px;font-weight:900;letter-spacing:.6px}
.v501-card-meta{color:#48cae4;font-size:11px;margin:2px 0 7px}
.v501-desc{color:#c0d0e0;font-size:11px;line-height:1.55;margin:7px 0}
.v501-section{margin:12px 0 6px;padding:8px 10px;background:#07101d;border-left:3px solid #e8c84a;color:#e8c84a;font-size:11px;letter-spacing:1.4px;text-transform:uppercase}
.v501-touch,.v501-select{display:block;width:100%;text-align:left!important;white-space:normal!important;border:1px solid #224062;background:linear-gradient(180deg,#071220,#050810);padding:11px 12px;margin:8px 0;box-sizing:border-box;line-height:1.5;cursor:pointer}
.v501-touch:active,.v501-select:active{transform:scale(.99)}
.v501-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
.v501-field{background:#070d15;border:1px solid #18324c;padding:7px;color:#bdd0e4;font-size:11px}
.v501-field b{display:block;color:#e8c84a;font-size:10px;text-transform:uppercase;letter-spacing:.5px}
.v501-stat-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px;margin:8px 0}
.v501-stat{background:#050810;border:1px solid #15283c;padding:6px}
.v501-stat-top{display:flex;justify-content:space-between;gap:6px;color:#8fb0cd;font-size:10px}
.v501-stat-val{color:#e8c84a;font-weight:900}
.v501-track{height:7px;border:1px solid #193451;background:#05060a;margin-top:4px;overflow:hidden}
.v501-fill{height:100%;background:linear-gradient(90deg,#274d7a,#e8c84a)}
.v501-small{color:#8fb0cd;font-size:10px;line-height:1.45;margin-top:5px}
.v501-tower-btn{white-space:pre-wrap!important;text-align:left!important;line-height:1.45!important}
@media(max-width:700px){.v501-grid,.v501-stat-grid{grid-template-columns:1fr}.v501-card,.v501-touch,.v501-select{padding:10px}}
`;document.head.appendChild(st);}
function setPage(fn,args,replace){ensureState();if(!replace&&G.v501_current&&G.v501_current.fn!==fn)G.v501_nav.push(G.v501_current);G.v501_current={fn:fn,args:args||[]};}
function go(fn){return function(){setPage(fn,Array.prototype.slice.call(arguments),false);fn.apply(null,arguments);};}
function goBack(){ensureState();var last=G.v501_nav&&G.v501_nav.pop?G.v501_nav.pop():null;if(last&&typeof last.fn==="function"){G.v501_current=last;last.fn.apply(null,last.args||[]);}else if(hasGame()&&window.hub_world_screen)window.hub_world_screen();else if(typeof main_menu==="function")main_menu();}
window.v501_goBack=goBack;
function replaceHubButtons(){var c=ch();if(!c)return;Array.prototype.slice.call(c.querySelectorAll("button")).forEach(function(btn){var t=btn.textContent||"";if(/Hub World|Town Center|Return to Hub/i.test(t)){btn.textContent="← Back";btn.onclick=goBack;}});}
if(!window._v501Observer&&window.MutationObserver){window._v501Observer=new MutationObserver(replaceHubButtons);setTimeout(function(){if(ch())window._v501Observer.observe(ch(),{childList:true,subtree:true});},0);}
function hashText(s){s=String(s||"");var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h+=(h<<1)+(h<<4)+(h<<7)+(h<<8)+(h<<24);}return Math.abs(h>>>0);}
function mods(n,d,k){var b=(String(n||"")+" "+String(d||"")).toLowerCase(),m={hp:0,mp:0,pa:0,pd:0,ag:0,ma:0,md:0,rs:0,sp:0};function a(x,v){m[x]+=v;}if(/tank|guard|guardian|shield|armor|stone|dwarf|golem|iron|knight|wall|defense/.test(b))a("hp",8),a("pd",8),a("rs",4);if(/warrior|fighter|sword|axe|berserk|dragon|oni|orc|giant|martial|duelist|blade/.test(b))a("pa",8),a("hp",4),a("ag",2);if(/rogue|assassin|ninja|scout|thief|hunter|archer|step|speed|fang|beast|predator/.test(b))a("ag",9),a("pa",4),a("sp",3);if(/mage|magic|spell|arcane|wizard|sorcerer|witch|mana|spirit|elf|sigil/.test(b))a("mp",8),a("ma",9),a("sp",4);if(/cleric|priest|holy|angel|saint|heal|barrier|support|miko|restoration/.test(b))a("md",7),a("rs",7),a("mp",4);if(/demon|dark|curse|abyss|undead|vampire|hollow|death|blood|shadow/.test(b))a("ma",5),a("rs",6),a("sp",5);if(/slime|adaptive|evolve|mutation|chimera|monster/.test(b))a("hp",5),a("rs",5),a("sp",7);if(k==="job")Object.keys(m).forEach(function(x){m[x]=Math.floor(m[x]*1.25);});return m;}
function profile(e,target,seed,kind){var base=e.base||{},mo=mods(e.name,e.desc,kind),h=hashText(seed+"|"+e.name),w={},o={},used=0;STAT_KEYS.forEach(function(k,idx){var j=((h>>((idx%8)*3))&7)-2,v=typeof base[k]==="number"?base[k]:1;if(k==="md"&&typeof base.rs==="number")v=base.rs;w[k]=Math.max(4,v+mo[k]+j);});w.hp=Math.max(8,Math.floor(w.hp*.55));w.mp=Math.max(8,Math.floor(w.mp*.55));var tw=STAT_KEYS.reduce(function(s,k){return s+w[k];},0);STAT_KEYS.forEach(function(k){o[k]=Math.max(8,Math.floor(w[k]/tw*target));used+=o[k];});var rem=target-used,ord=STAT_KEYS.slice().sort(function(a,b){return w[b]-w[a];}),p=0;while(rem>0){o[ord[p%ord.length]]++;rem--;p++;}while(rem<0){var kk=ord[ord.length-1-(p%ord.length)];if(o[kk]>8){o[kk]--;rem++;}p++;}return o;}
function statHTML(s,target){var max=Math.max.apply(null,STAT_KEYS.map(function(k){return s[k]||0;})),html='<div class="v501-stat-grid">';STAT_KEYS.forEach(function(k){var v=s[k]||0,p=Math.max(4,Math.round(v/Math.max(1,max)*100));html+='<div class="v501-stat"><div class="v501-stat-top"><span>'+STAT_LABELS[k]+'</span><span class="v501-stat-val">'+v+'</span></div><div class="v501-track"><div class="v501-fill" style="width:'+p+'%"></div></div></div>';});return html+'</div><span class="v501-small">BST: '+STAT_KEYS.reduce(function(a,k){return a+(s[k]||0);},0)+' / '+target+'</span>';}
function top(s,n){return STAT_KEYS.slice().sort(function(a,b){return(s[b]||0)-(s[a]||0);}).slice(0,n||2);}
function low(s,n){return STAT_KEYS.slice().sort(function(a,b){return(s[a]||0)-(s[b]||0);}).slice(0,n||2);}
function raceCard(id,r){var st=profile(r,600,"race-"+id,"race"),t=top(st,2),l=low(st,2);return '<div class="v501-card-title">'+esc(r.name)+'</div><div class="v501-card-meta">Race · '+esc(r.anime||"Fantasy")+' · Max Level: '+esc(r.max_lv||"?")+' · BST 600</div><div class="v501-field"><b>Status Layout</b>'+statHTML(st,600)+'</div><div class="v501-desc"><b>Unique Description:</b> A unique '+esc(r.name)+' profile focused on '+STAT_LABELS[t[0]]+', '+STAT_LABELS[t[1]]+'. '+esc(r.desc||"")+'</div><div class="v501-grid"><div class="v501-field"><b>Strengths</b>Excels at '+STAT_LABELS[t[0]]+' and '+STAT_LABELS[t[1]]+'.</div><div class="v501-field"><b>Weaknesses</b>Lower '+STAT_LABELS[l[0]]+' and '+STAT_LABELS[l[1]]+'.</div></div>';}
function isBaseJob(id,j){if(!j)return false;var tier=String(j.class_tier||"Base").toLowerCase(),anime=String(j.anime||"").toLowerCase(),name=String(j.name||"").toLowerCase(),desc=String(j.desc||"").toLowerCase();if(/race evolution/.test(anime)||/race evolution/.test(desc))return false;if(/advanced|specialist|rare|hidden|evolution/.test(tier))return false;if(j.req&&typeof j.req==="object"&&(j.req.jobBranch||j.req.baseJobId!==undefined||j.req.requiresJob!==undefined||j.req.requiredJob!==undefined||j.req.parentJob!==undefined||j.req.raceEvolution||j.req.hidden))return false;if(/\b(vanguard|adept|paragon|sovereign|world-crowned|hidden origin|eclipse|mythic)\b/.test(name))return false;return !tier||tier==="base";}
function roleJob(j){var b=(String(j.name||"")+" "+String(j.desc||"")+" "+String(j.anime||"")).toLowerCase();if(/cleric|priest|holy|saint|heal|miko|oracle|paladin/.test(b))return"Holy Support";if(/mage|wizard|sorcerer|witch|spell|arcane|element|mana/.test(b))return"Magic Caster";if(/dark|curse|blood|warlock|necromancer|reaper|abyss|demon/.test(b))return"Dark Caster";if(/guardian|knight|shield|tank|defender|armor|wall/.test(b))return"Tank / Defender";if(/rogue|thief|assassin|ninja|scout|shadow/.test(b))return"Rogue / Mobility";if(/archer|hunter|ranger|sniper|bow|gunner/.test(b))return"Ranged Physical";if(/warrior|fighter|sword|duelist|berserk|martial|monk|samurai|blade|brawler/.test(b))return"Physical Combat";return"Hybrid Adventurer";}
function jobWeapons(j){var b=(String(j.name||"")+" "+String(j.desc||"")+" "+String(j.anime||"")).toLowerCase(),w=[];function add(a){a.forEach(function(x){if(w.indexOf(x)<0)w.push(x);});}if(/samurai|katana/.test(b))add(["Katana","Bow"]);if(/sword|duelist|blade|warrior|fighter|knight|paladin|hero/.test(b))add(["Sword"]);if(/axe|berserk|orc|brute/.test(b))add(["Axe","Heavy Weapon"]);if(/hammer|forge|blacksmith|mace|cleric|priest/.test(b))add(["Mace / Hammer"]);if(/spear|lance|dragoon|polearm/.test(b))add(["Spear / Polearm"]);if(/dagger|rogue|thief|assassin|ninja|scout|shadow/.test(b))add(["Dagger","Short Sword"]);if(/bow|archer|ranger|hunter|sniper/.test(b))add(["Bow"]);if(/shield|guardian|tank|defender/.test(b))add(["Shield"]);if(/monk|martial|brawler|fist/.test(b))add(["Unarmed","Staff"]);if(/mage|wizard|sorcerer|witch|spell|arcane|summon|necromancer|warlock|miko|oracle|healer|saint|barrier/.test(b))add(["Staff","Wand / Tome","Catalyst"]);if(!w.length)add(["Short Sword","Dagger","Staff"]);return w.slice(0,4);}
function starter(j){var r=roleJob(j);if(/Magic|Caster/.test(r))return["Mana Spark","Arcane Ward"];if(/Holy|Support/.test(r))return["Minor Heal","Sanctuary Guard"];if(/Tank|Defender/.test(r))return["Guard Stance","Shield Bash"];if(/Rogue|Mobility/.test(r))return["Hunter Step","Ambush Cut"];if(/Ranged/.test(r))return["Arrow Pin","Hunter Mark"];return["Quick Slash","Power Strike"];}
function jobCard(id,j){var st=profile(j,420,"job-"+id,"job"),t=top(st,2),l=low(st,2),w=jobWeapons(j),r=roleJob(j),stt=starter(j);return '<div class="v501-card-title">'+esc(j.name)+'</div><div class="v501-card-meta">Base Job · '+esc(j.anime||"Fantasy")+' · Max Level: '+esc(j.max_lv||15)+' · Role: '+esc(r)+' · BST 420</div><div class="v501-field"><b>Status Layout</b>'+statHTML(st,420)+'</div><div class="v501-desc"><b>Unique Description:</b> '+esc(j.desc||"A unique starting base job path.")+'</div><div class="v501-grid"><div class="v501-field"><b>Weapon/s</b>'+esc(w.join(" / "))+'</div><div class="v501-field"><b>Starter Skills</b>'+esc(stt.join(" / "))+'</div><div class="v501-field"><b>Strengths</b>'+r+' focused; excels at '+STAT_LABELS[t[0]]+' and '+STAT_LABELS[t[1]]+'.</div><div class="v501-field"><b>Weaknesses</b>Lower '+STAT_LABELS[l[0]]+' and '+STAT_LABELS[l[1]]+'.</div></div><div class="v501-desc"><b>Unique Build Notes:</b> Build around '+STAT_LABELS[t[0]]+', '+STAT_LABELS[t[1]]+', '+w.join(" / ")+' and abilities that match '+r+'.</div>';}
function group(data,filter){var g={};Object.entries(data).forEach(function(e){if(filter&&!filter(e[0],e[1]))return;var k=e[1].anime||"Fantasy";if(!g[k])g[k]=[];g[k].push(e);});return g;}
function pickRace(){addStyle();clear();panelOff();setPage(pickRace,[],true);say("RACE SELECTION — BASE PROFILE","highlight");say("Choose your starting race. This screen now matches the job selection card layout.","narrator");if(ch())ch().innerHTML="";Object.entries(group(RACE_DATA)).forEach(function(g){var h=document.createElement("div");h.className="v501-section";h.textContent="— "+g[0]+" Races —";ch().appendChild(h);g[1].forEach(function(e){var b=document.createElement("button");b.className="v501-select";b.innerHTML=raceCard(e[0],e[1]);b.onclick=function(){G.race_id=Number(e[0]);pickJob();};ch().appendChild(b);});});}
function pickJob(){addStyle();clear();panelOff();setPage(pickJob,[],true);var race=RACE_DATA&&RACE_DATA[G.race_id]?RACE_DATA[G.race_id]:null;say("Race: "+(race?race.name:"Unknown")+"  ["+(race?race.anime:"—")+"]","highlight");say("JOB SELECTION — BASE JOBS ONLY","highlight");say("Choose your starting base job. Job status is now listed above the description.","narrator");if(ch())ch().innerHTML="";Object.entries(group(JOB_DATA,function(id,j){try{if(!isBaseJob(id,j))return false;if(typeof canStartWithJob==="function"&&!canStartWithJob(Number(id),j))return false;}catch(e){}return true;})).forEach(function(g){var h=document.createElement("div");h.className="v501-section";h.textContent="— "+g[0]+" Base Jobs —";ch().appendChild(h);g[1].forEach(function(e){var b=document.createElement("button");b.className="v501-select";b.innerHTML=jobCard(e[0],e[1]);b.onclick=function(){G.jobs=[{id:Number(e[0]),lv:1}];your_character();};ch().appendChild(b);});});var back=document.createElement("button");back.textContent="← Back to Race Selection";back.onclick=pickRace;ch().appendChild(back);}
function raceName(){return G&&G.race_id&&RACE_DATA&&RACE_DATA[G.race_id]?RACE_DATA[G.race_id].name:"Unknown";}
function jobName(){try{if(!G.jobs||!G.jobs.length)return"None";var j=JOB_DATA[G.jobs[G.jobs.length-1].id]||JOB_DATA[G.jobs[0].id];return j?j.name:"None";}catch(e){return"None";}}
function inferWeapon(){try{var w=G.weapon||{},b=(w.name||"").toLowerCase();if(/axe/.test(b))return"Axe";if(/spear|lance/.test(b))return"Spear";if(/dagger|knife/.test(b))return"Dagger";if(/bow/.test(b))return"Bow";if(/shield/.test(b))return"Shield";if(/staff/.test(b))return"Staff";if(/wand/.test(b))return"Wand";if(/catalyst|orb|focus/.test(b))return"Catalyst";if(/heavy|great|hammer/.test(b))return"Heavy Weapon";if(/sword|blade/.test(b))return"Sword";}catch(e){}return"Unarmed";}
function block(html){var d=document.createElement("div");d.className="v501-card";d.innerHTML=html;out().appendChild(d);}
function touch(title,meta,body,fn){var d=document.createElement("div");d.className="v501-touch";d.tabIndex=0;d.setAttribute("role","button");d.innerHTML='<div class="v501-card-title">'+esc(title)+'</div><div class="v501-card-meta">'+esc(meta||"Tap to open")+'</div><div class="v501-desc">'+body+'</div>';d.onclick=fn;d.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();fn();}};out().appendChild(d);}
function spend(stat){ensureState();if((G.stat_pts||0)<1){say("Not enough stat points.","danger");return charStatus();}var key={phy_atk:"pa",phy_def:"pd",agi:"ag",mag_atk:"ma",mag_def:"md",resist:"rs",special:"sp"}[stat]||"sp";if(!G.bonus)G.bonus={hp:0,mp:0,pa:0,pd:0,ag:0,ma:0,md:0,rs:0,sp:0};G.bonus[key]=(G.bonus[key]||0)+1;G.stat_pts--;try{if(typeof applyStats==="function")applyStats();if(typeof updateStats==="function")updateStats();}catch(e){}charStatus();}
function charStatus(){addStyle();ensureState();clear();panelOff();setPage(charStatus,[],false);say("— CHARACTER STATUS —","highlight");say("Tap cards to open screens or spend stat points. Review Your Build has been moved here.","narrator");var stats=[["HP",G.max_hp||0,400],["MP",G.max_mp||0,300],["PHY ATK",G.phy_atk||0,200],["PHY DEF",G.phy_def||0,200],["AGI",G.agi||0,200],["MAG ATK",G.mag_atk||0,200],["MAG DEF",G.mag_def||0,200],["RESIST",G.resist||0,200],["SPECIAL",G.special||0,200]],statHtml=stats.map(function(s){return'<div class="v501-stat"><div class="v501-stat-top"><span>'+s[0]+'</span><span class="v501-stat-val">'+s[1]+'</span></div><div class="v501-track"><div class="v501-fill" style="width:'+Math.min(100,Math.round(s[1]/s[2]*100))+'%"></div></div></div>';}).join("");block('<div class="v501-card-title">'+esc(G.name||"Hero")+'</div><div class="v501-card-meta">Race: '+esc(raceName())+' · Job: '+esc(jobName())+' · Weapon: '+esc(inferWeapon())+'</div><div class="v501-stat-grid">'+statHtml+'</div><div class="v501-small">Tap stat cards below to spend points. Unspent Stat Points: '+(G.stat_pts||0)+'</div>');[["PHY ATK","phy_atk"],["PHY DEF","phy_def"],["AGI","agi"],["MAG ATK","mag_atk"],["MAG DEF","mag_def"],["RESIST","resist"],["SPECIAL","special"]].forEach(function(s){touch("Spend +1 "+s[0],"Touch stat spending","Adds one stat point to "+s[0]+".",function(){spend(s[1]);});});touch("Review Your Build","Build Summary moved here","Race path, job path, main role, weapon type, strongest stats, Unique/Ultimate abilities, and next goals.",go(window.build_summary_screen||oldBuildSummary||function(){}));touch("Skills & Spells","Known abilities and shops","Review Physical Skills, Magic Spells, Intrinsics, and open the ability shops.",go(window.skill_screen||oldSkillScreen||function(){}));touch("Unlock Tracker","Plan your next unlocks","See which Unique and Ultimate abilities you are close to unlocking.",go(window.unlock_tracker_screen||oldUnlock||function(){}));touch("Class Registry","Race and job path","Review available class paths and upgrade requirements.",go(window.class_registry_screen||oldClass||function(){}));touch("Titles","Cosmetic prefixes","Equip unlocked title prefixes.",go(window.title_screen||oldTitle||function(){}));touch("Set Collection","Equipment collection","Track set pieces, bonuses, sources, and build recommendations.",go(window.set_collection_screen||oldSet||function(){}));touch("Encyclopedia","Help and system guide","Read about stats, ranks, tiers, races, jobs, Battle Towers, saves, and more.",go(window.encyclopedia_screen||oldEncy||function(){}));showChoicesSafe([["← Back",goBack]]);}
function makeTowers(){ensureState();if(Array.isArray(G.v501_towers)&&G.v501_towers.length===10)return G.v501_towers;var themes=THEMES.slice();G.v501_towers=[];for(var i=0;i<10;i++){var idx=Math.floor(Math.random()*themes.length),t=themes.splice(idx,1)[0]||THEMES[i%THEMES.length],min=i*10+1,max=(i+1)*10;G.v501_towers.push({id:"tower_"+min+"_"+max,name:"Battle Tower "+min+"-"+max+": "+t[0],min:min,max:max,theme:t[0],mod:t[1],enemies:t[2],reward:t[3]});}return G.v501_towers;}
function towersScreen(){addStyle();ensureState();clear();panelOff();setPage(towersScreen,[],false);say("— BATTLE TOWERS —","highlight");say("Choose a tower. All tower information is now inside each touch-friendly button.","narrator");var list=makeTowers().map(function(t){return[t.name+"\nLevels: "+t.min+"-"+t.max+" · Theme: "+t.theme+"\nModifier: "+t.mod+" · Rewards: "+t.reward,function(){startTower(t);}];});list.push(["← Back",goBack]);showChoicesSafe(list);Array.prototype.slice.call(ch().querySelectorAll("button")).forEach(function(b){b.classList.add("v501-tower-btn");});}
function startTower(t){ensureState();setPage(startTower,[t],false);G.tower_run={id:t.id,floor:t.min,max:t.max,theme:t.theme,mod:t.mod,battlesWon:0};clear();panelOff();say("— "+t.name.toUpperCase()+" —","highlight");say("This Battle Tower runs from level "+t.min+" to "+t.max+".","narrator");showChoicesSafe([["Begin Floor "+t.min,enterTower],["← Back",goBack]]);}
function enemy(t,boss){var lvl=G.tower_run?G.tower_run.floor:t.min,n=t.enemies[Math.floor(Math.random()*t.enemies.length)];return{name:(boss?"Boss ":"")+n,emoji:boss?"👑":"👹",hp:70+lvl*9+(boss?90:0),atk:12+lvl*2+(boss?12:0),exp:20+lvl*5+(boss?45:0),gold:18+lvl*4+(boss?40:0),isBoss:!!boss,lore:"A "+t.theme+" enemy from a Battle Tower.",moves:[{name:"Strike",status:null},{name:"Tower Art",status:null}]};}
function enterTower(){ensureState();var t=makeTowers().find(function(x){return G.tower_run&&x.id===G.tower_run.id;})||makeTowers()[0],boss=G.tower_run.floor>=t.max||G.tower_run.floor%10===0;try{_lastZone=afterTower;window._lastZone=afterTower;}catch(e){}if(oldStartBattle)oldStartBattle([enemy(t,boss)]);else if(typeof startBattle==="function")startBattle([enemy(t,boss)]);}
function afterTower(){ensureState();clear();panelOff();var t=makeTowers().find(function(x){return G.tower_run&&x.id===G.tower_run.id;});if(!G.tower_run||!t)return towersScreen();G.tower_run.battlesWon=(G.tower_run.battlesWon||0)+1;say("— TOWER PATH —","highlight");say("You cleared floor "+G.tower_run.floor+" of "+t.name+".","narrator");if(G.tower_run.floor>=t.max){G.tower_clears=G.tower_clears||{};G.tower_clears[t.id]=(G.tower_clears[t.id]||0)+1;say("Tower completed! Clear progress recorded.","success");G.tower_run=null;showChoicesSafe([["Choose Another Tower",towersScreen],["← Back",goBack]]);return;}showChoicesSafe([["Continue to Floor "+(G.tower_run.floor+1),function(){G.tower_run.floor++;enterTower();}],["Leave Tower",function(){G.tower_run=null;goBack();}]]);}
function hub(){addStyle();ensureState();clear();panelOff();setPage(hub,[],true);say("— HUB WORLD —","highlight");say("Main travel area. Review Your Build was moved to Character Status.","narrator");block('<div class="v501-card-title">'+esc(G.name||"Hero")+'</div><div class="v501-card-meta">Race: '+esc(raceName())+' · Job: '+esc(jobName())+' · Weapon: '+esc(inferWeapon())+'</div>');showChoicesSafe([["🗼 Battle Towers",towersScreen],["📜 Quest Board",window.quest_board_screen||function(){}],["📊 Character Status",charStatus],["🏕 Camp",window.camp_screen||function(){}],["⚒ Crafting / Forge",window.crafting_hub_screen||function(){}],["🧩 Set Collection",window.set_collection_screen||function(){}],["📘 Encyclopedia",window.encyclopedia_screen||function(){}],["💾 Save / Load",window.save_load_manager_screen||window.loadGame||function(){}]]);}
addStyle();

/* v0.50.2 — Race/job build notes + character status stat-row buttons */
var V502_STAT_BONUS = {
  hp:"hp", mp:"mp", phy_atk:"pa", phy_def:"pd", agi:"ag",
  mag_atk:"ma", mag_def:"md", resist:"rs", special:"sp"
};

function addV502Style(){
  if ($("v502-style")) return;
  var st = document.createElement("style");
  st.id = "v502-style";
  st.textContent = `
    .v502-note{border:1px solid #2b4a68;background:linear-gradient(180deg,#081322,#050810);padding:8px 9px;margin-top:8px;color:#c9d8e8;font-size:11px;line-height:1.55}
    .v502-note b{display:block;color:#e8c84a;font-size:10px;text-transform:uppercase;letter-spacing:.6px;margin-bottom:2px}
    .v502-build-info{border:1px solid #224062;background:linear-gradient(180deg,#071220,#050810);padding:10px 11px;margin:8px 0 10px}
    .v502-info-title{color:#e8c84a;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:7px}
    .v502-info-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
    .v502-info-cell{background:#050b13;border:1px solid #18324c;padding:8px;color:#c0d0e0;font-size:11px;line-height:1.45}
    .v502-info-cell b{display:block;color:#48cae4;font-size:10px;text-transform:uppercase;letter-spacing:.6px;margin-bottom:3px}
    .v502-stat-panel{display:grid;grid-template-columns:1fr;gap:6px;margin-top:8px}
    .v502-stat-row{display:flex;align-items:center;gap:8px;background:#050810;border:1px solid #15283c;padding:7px 8px}
    .v502-stat-main{flex:1;min-width:0}
    .v502-stat-top{display:flex;justify-content:space-between;gap:8px;color:#8fb0cd;font-size:10px}
    .v502-stat-val{color:#e8c84a;font-weight:900}
    .v502-stat-spend{width:auto!important;min-width:34px!important;max-width:44px!important;min-height:26px!important;height:26px!important;margin:0!important;padding:2px 8px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;border:1px solid #e8c84a99!important;background:#10151e!important;color:#e8c84a!important;font-size:13px!important;font-weight:900!important;line-height:1!important;border-radius:0!important}
    .v502-stat-spend:disabled{opacity:.35!important;cursor:not-allowed!important;filter:grayscale(.5)}
    .v502-status-meta{display:flex;justify-content:space-between;gap:8px;color:#8fb0cd;font-size:10px;margin-top:7px;flex-wrap:wrap}
    @media(max-width:700px){.v502-info-grid{grid-template-columns:1fr}.v502-stat-row{padding:7px}.v502-stat-spend{min-width:32px!important}}
  `;
  document.head.appendChild(st);
}

function v502StatLabel(k){ return STAT_LABELS[k] || String(k||"").toUpperCase(); }

function v502PrimaryTags(name, desc, role){
  var b = (String(name||"")+" "+String(desc||"")+" "+String(role||"")).toLowerCase();
  var tags = [];
  function add(t){ if(tags.indexOf(t)<0) tags.push(t); }
  if(/uchiha|sharingan|genjutsu|illusion|fire/.test(b)) add("burst fire and control");
  if(/hyuga|byakugan|gentle fist|chakra point/.test(b)) add("precision pressure");
  if(/uzumaki|seal|vitality|chakra reserves/.test(b)) add("endurance and sealing");
  if(/otsutsuki|god|alien|dojutsu/.test(b)) add("late-game scaling");
  if(/shinigami|zanpakuto|kido|soul/.test(b)) add("spiritual swordplay");
  if(/hollow|arrancar|predatory|cero/.test(b)) add("monster aggression");
  if(/quincy|archer|ranged|sniper|bow/.test(b)) add("ranged burst");
  if(/titan|giant|colossal|armored/.test(b)) add("frontline durability");
  if(/demon|curse|abyss|undead|vampire|blood|shadow|hollow/.test(b)) add("attrition and dark pressure");
  if(/mage|magic|spell|wizard|sorcerer|witch|mana|arcane|caster/.test(b)) add("mana burst");
  if(/cleric|priest|holy|saint|heal|barrier|support|miko|oracle/.test(b)) add("support and protection");
  if(/rogue|assassin|ninja|scout|thief|hunter|speed|step/.test(b)) add("tempo and evasion");
  if(/warrior|fighter|sword|axe|berserk|martial|duelist|blade|brawler|samurai/.test(b)) add("physical pressure");
  if(/slime|adaptive|evolve|mutation|chimera/.test(b)) add("flexible evolution");
  if(!tags.length) add("hybrid growth");
  return tags.slice(0,2);
}

function v502AnimeAngle(anime){
  var a = String(anime||"").toLowerCase();
  if(/naruto/.test(a)) return "Use chakra-flavored growth: fast openings, control tools, and stat choices that support your bloodline.";
  if(/bleach/.test(a)) return "Lean into spiritual pressure: pair offense with enough RESIST/MAG.DEF to survive longer exchanges.";
  if(/one piece/.test(a)) return "Play for adventure durability: steady HP, weapon mastery, and momentum across long routes.";
  if(/attack on titan/.test(a)) return "Treat every fight like a brutal breakthrough: defense first, then punish with heavy physical turns.";
  if(/hunter/.test(a)) return "Build like a Nen specialist: pick one plan, then stack the stats that make that plan reliable.";
  if(/jujutsu/.test(a)) return "Exploit cursed-energy tempo: pressure enemies while keeping enough RESIST for dangerous effects.";
  if(/demon slayer/.test(a)) return "Use disciplined burst windows: speed, clean weapon damage, and careful sustain matter most.";
  if(/dragon ball/.test(a)) return "Scale toward explosive power: offense is the identity, but HP keeps the transformation fantasy alive.";
  if(/black clover|fairy tail/.test(a)) return "Commit to a magic identity: your best builds stack mana, spell power, and role synergy.";
  if(/my hero/.test(a)) return "Build around your signature power: specialize hard, then patch the weakest defensive stat.";
  if(/fate/.test(a)) return "Play around noble-phantasm style spikes: prepare, survive, then spend resources for decisive turns.";
  if(/berserk|dark souls/.test(a)) return "Expect harsh fights: defensive padding and reliable weapon damage beat fragile gimmicks.";
  return "Build around the source world’s fantasy, then reinforce the two stats this card naturally pushes highest.";
}

function v502BuildNote(entity, kind, st, role, weapons){
  var tops = top(st,3).map(v502StatLabel);
  var lows = low(st,2).map(v502StatLabel);
  var tags = v502PrimaryTags(entity.name, entity.desc, role).join(" + ");
  var anime = v502AnimeAngle(entity.anime);
  var cap = kind === "race"
    ? "Its racial cap means it works best as the foundation for jobs that continue the same stat pattern."
    : "Its class cap means it should either sharpen your main role or cover one weakness before you add the next path.";
  var gear = weapons && weapons.length ? " Favor " + weapons.slice(0,3).join(" / ") + " and abilities that reward " + (role || "this role") + "." : "";
  return entity.name + " is built for " + tags + ". Prioritize " + tops.join(", ") + "; do not ignore " + lows.join(" and ") + " as the build grows. " + anime + " " + cap + gear;
}

function v502RaceCard(id,r){
  addV502Style();
  var st=profile(r,600,"race-"+id,"race"),t=top(st,2),l=low(st,2),note=v502BuildNote(r,"race",st,"Racial Foundation",[]);
  return '<div class="v501-card-title">'+esc(r.name)+'</div>'+
    '<div class="v501-card-meta">Race · '+esc(r.anime||"Fantasy")+' · Max Level: '+esc(r.max_lv||"?")+' · BST 600</div>'+
    '<div class="v501-field"><b>Status Layout</b>'+statHTML(st,600)+'</div>'+
    '<div class="v501-desc"><b>Unique Description:</b> '+esc(r.desc||"A unique racial foundation.")+'</div>'+
    '<div class="v501-grid">'+
      '<div class="v501-field"><b>Strengths</b>Excels at '+v502StatLabel(t[0])+' and '+v502StatLabel(t[1])+'.</div>'+
      '<div class="v501-field"><b>Weaknesses</b>Lower '+v502StatLabel(l[0])+' and '+v502StatLabel(l[1])+'.</div>'+
    '</div>'+
    '<div class="v502-note"><b>Unique Build Note</b>'+esc(note)+'</div>';
}

function v502JobCard(id,j){
  addV502Style();
  var st=profile(j,420,"job-"+id,"job"),t=top(st,2),l=low(st,2),w=jobWeapons(j),r=roleJob(j),stt=starter(j),note=v502BuildNote(j,"job",st,r,w);
  return '<div class="v501-card-title">'+esc(j.name)+'</div>'+
    '<div class="v501-card-meta">Base Job · '+esc(j.anime||"Fantasy")+' · Max Level: '+esc(j.max_lv||15)+' · Role: '+esc(r)+' · BST 420</div>'+
    '<div class="v501-field"><b>Status Layout</b>'+statHTML(st,420)+'</div>'+
    '<div class="v501-desc"><b>Unique Description:</b> '+esc(j.desc||"A unique starting base job path.")+'</div>'+
    '<div class="v501-grid">'+
      '<div class="v501-field"><b>Weapon/s</b>'+esc(w.join(" / "))+'</div>'+
      '<div class="v501-field"><b>Starter Skills</b>'+esc(stt.join(" / "))+'</div>'+
      '<div class="v501-field"><b>Strengths</b>'+esc(r)+' focused; excels at '+v502StatLabel(t[0])+' and '+v502StatLabel(t[1])+'.</div>'+
      '<div class="v501-field"><b>Weaknesses</b>Lower '+v502StatLabel(l[0])+' and '+v502StatLabel(l[1])+'.</div>'+
    '</div>'+
    '<div class="v502-note"><b>Unique Build Note</b>'+esc(note)+'</div>';
}

raceCard = v502RaceCard;
jobCard = v502JobCard;

function v502RaceInfoHTML(){
  var race = (G && G.race_id && RACE_DATA && RACE_DATA[G.race_id]) ? RACE_DATA[G.race_id] : null;
  if(!race) return '<div class="v502-info-cell"><b>Race</b>Unknown</div>';
  return '<div class="v502-info-cell"><b>Race</b>'+esc(race.name)+' ['+esc(race.anime||"—")+']<br>Race Lv. '+esc(G.race_lv||0)+' / '+esc(race.max_lv||"?")+'<br>'+esc(race.desc||"")+'</div>';
}

function v502JobInfoHTML(){
  var jobs = (G && Array.isArray(G.jobs)) ? G.jobs : [];
  if(!jobs.length) return '<div class="v502-info-cell"><b>Job Path</b>No job selected.</div>';
  var lines = jobs.map(function(j){
    var data = JOB_DATA && JOB_DATA[j.id] ? JOB_DATA[j.id] : null;
    if(!data) return "Unknown Job Lv."+esc(j.lv||0);
    return esc(data.name)+' ['+esc(data.anime||"—")+'] Lv.'+esc(j.lv||0)+' / '+esc(data.max_lv||"?");
  }).join("<br>");
  var mainJob = JOB_DATA && JOB_DATA[jobs[0].id] ? JOB_DATA[jobs[0].id] : null;
  var role = mainJob ? roleJob(mainJob) : "Hybrid Adventurer";
  return '<div class="v502-info-cell"><b>Job Path</b>'+lines+'<br>Main Role: '+esc(role)+'</div>';
}

function v502SpendStat(statKey){
  ensureState();
  if((G.stat_pts||0)<1){
    say("Not enough stat points.","danger");
    return v502CharStatus();
  }
  var key = V502_STAT_BONUS[statKey] || statKey;
  if(!G.bonus) G.bonus={hp:0,mp:0,pa:0,pd:0,ag:0,ma:0,md:0,rs:0,sp:0};
  if(typeof G.bonus[key] !== "number") G.bonus[key]=0;
  G.bonus[key]+=1;
  G.stat_pts = Math.max(0,(G.stat_pts||0)-1);
  try{ if(typeof applyStats==="function") applyStats(); if(typeof updateStats==="function") updateStats(); }catch(e){}
  v502CharStatus();
}

function v502StatRow(def){
  var row = document.createElement("div");
  row.className = "v502-stat-row";
  var pct = Math.min(100, Math.round((def.value||0) / Math.max(1,def.max||200) * 100));
  row.innerHTML =
    '<div class="v502-stat-main">'+
      '<div class="v502-stat-top"><span>'+esc(def.label)+'</span><span class="v502-stat-val">'+esc(def.value||0)+'</span></div>'+
      '<div class="v501-track"><div class="v501-fill" style="width:'+pct+'%"></div></div>'+
    '</div>';
  var btn = document.createElement("button");
  btn.className = "v502-stat-spend";
  btn.type = "button";
  btn.title = (G.stat_pts||0) > 0 ? "Spend 1 stat point on "+def.label : "No stat points available";
  btn.textContent = "+";
  btn.disabled = (G.stat_pts||0) < 1;
  btn.onclick = function(){ v502SpendStat(def.key); };
  row.appendChild(btn);
  return row;
}

function v502CharStatus(){
  addStyle();
  addV502Style();
  ensureState();
  clear();
  panelOff();
  setPage(v502CharStatus,[],false);
  try{ if(typeof applyStats==="function") applyStats(); }catch(e){}
  say("— CHARACTER STATUS —","highlight");
  say("Race and job details are shown above the status block. Use the small + buttons beside each stat to spend points.","narrator");

  var card = document.createElement("div");
  card.className = "v501-card";
  card.innerHTML =
    '<div class="v501-card-title">'+esc(G.name||"Hero")+'</div>'+
    '<div class="v501-card-meta">Total Level '+esc(G.total_lv||0)+' / 100 · Gold: '+esc(G.gold||0)+' · Weapon: '+esc(inferWeapon())+'</div>'+
    '<div class="v502-build-info">'+
      '<div class="v502-info-title">Race & Job Information</div>'+
      '<div class="v502-info-grid">'+v502RaceInfoHTML()+v502JobInfoHTML()+'</div>'+
    '</div>'+
    '<div class="v502-info-title">Status</div>'+
    '<div class="v502-stat-panel"></div>'+
    '<div class="v502-status-meta"><span>Unspent Stat Points: '+esc(G.stat_pts||0)+'</span><span>Tap + beside a stat to improve it.</span></div>';

  var panel = card.querySelector(".v502-stat-panel");
  var defs = [
    {label:"HP", key:"hp", value:G.max_hp||0, max:400},
    {label:"MP", key:"mp", value:G.max_mp||0, max:300},
    {label:"PHY ATK", key:"phy_atk", value:G.phy_atk||0, max:200},
    {label:"PHY DEF", key:"phy_def", value:G.phy_def||0, max:200},
    {label:"AGI", key:"agi", value:G.agi||0, max:200},
    {label:"MAG ATK", key:"mag_atk", value:G.mag_atk||0, max:200},
    {label:"MAG DEF", key:"mag_def", value:G.mag_def||0, max:200},
    {label:"RESIST", key:"resist", value:G.resist||0, max:200},
    {label:"SPECIAL", key:"special", value:G.special||0, max:200}
  ];
  defs.forEach(function(def){ panel.appendChild(v502StatRow(def)); });
  if(out()) out().appendChild(card);

  touch("Review Your Build","Build Summary moved here","Race path, job path, main role, weapon type, strongest stats, Unique/Ultimate abilities, and next goals.",go(window.build_summary_screen||oldBuildSummary||function(){}));
  touch("Skills & Spells","Known abilities and shops","Review Physical Skills, Magic Spells, Intrinsics, and open the ability shops.",go(window.skill_screen||oldSkillScreen||function(){}));
  touch("Unlock Tracker","Plan your next unlocks","See which Unique and Ultimate abilities you are close to unlocking.",go(window.unlock_tracker_screen||oldUnlock||function(){}));
  touch("Class Registry","Race and job path","Review available class paths and upgrade requirements.",go(window.class_registry_screen||oldClass||function(){}));
  touch("Titles","Cosmetic prefixes","Equip unlocked title prefixes.",go(window.title_screen||oldTitle||function(){}));
  touch("Set Collection","Equipment collection","Track set pieces, bonuses, sources, and build recommendations.",go(window.set_collection_screen||oldSet||function(){}));
  touch("Encyclopedia","Help and system guide","Read about stats, ranks, tiers, races, jobs, Battle Towers, saves, and more.",go(window.encyclopedia_screen||oldEncy||function(){}));
  showChoicesSafe([["← Back",goBack]]);
}

charStatus = v502CharStatus;

function v502RefreshInitialRaceScreen(){
  try{
    var o = out(), c = ch();
    if(!o || !c) return;
    var txt = o.textContent || "";
    var oldRace = /STEP 1:\s*CHOOSE YOUR RACE/i.test(txt) || /YGGDRASIL\s+—\s+ANIME MULTIVERSE RPG/i.test(txt);
    var newRace = /RACE SELECTION\s+—\s+BASE PROFILE/i.test(txt) || !!c.querySelector(".v501-select");
    var started = !!(G && G.name && G.race_id && Array.isArray(G.jobs) && G.jobs.length);
    if(oldRace && !newRace && !started) pickRace();
  }catch(e){}
}
setTimeout(v502RefreshInitialRaceScreen,0);

window.pick_race=pickRace;try{pick_race=pickRace;}catch(e){}
window.pick_job=pickJob;try{pick_job=pickJob;}catch(e){}
window.character_status_v50=charStatus;window.character_screen=charStatus;try{character_screen=charStatus;}catch(e){}
window.battle_towers_screen=towersScreen;try{battle_towers_screen=towersScreen;}catch(e){}
window.hub_world_screen=hub;window.town_center=hub;try{town_center=hub;}catch(e){}
if(typeof map_screen==="function"){window.map_screen=towersScreen;try{map_screen=towersScreen;}catch(e){}}
if(typeof raid_map_screen==="function"){window.raid_map_screen=towersScreen;try{raid_map_screen=towersScreen;}catch(e){}}
setTimeout(replaceHubButtons,100);
})();
