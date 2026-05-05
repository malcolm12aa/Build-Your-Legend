import { QUESTS, QUEST_CATEGORIES } from "../data/quests.js";
import { addInventory, addLog } from "../core/utils.js";
import { gainXp } from "./leveling.js";

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function ensureQuestState(state) {
  state.quests ??= {};
  state.quests.claimed ??= [];
  state.quests.daily ??= { date: todayKey(), roomsCleared: 0, enemyKills: 0 };
  if (state.quests.daily.date !== todayKey()) {
    state.quests.daily = { date: todayKey(), roomsCleared: 0, enemyKills: 0 };
    state.quests.claimed = (state.quests.claimed ?? []).filter(id => !QUESTS.find(q => q.id === id)?.daily);
  }
  return state.quests;
}

export function trackQuestProgress(state, type, amount = 1) {
  ensureQuestState(state);
  if (type === "room") state.quests.daily.roomsCleared = (state.quests.daily.roomsCleared ?? 0) + amount;
  if (type === "enemy") state.quests.daily.enemyKills = (state.quests.daily.enemyKills ?? 0) + amount;
  if (type === "goldSpent") state.meta.goldSpent = (state.meta.goldSpent ?? 0) + amount;
}

function totalInventory(player) {
  return Object.values(player?.inventory ?? {}).reduce((sum, qty) => sum + Number(qty ?? 0), 0);
}

function highestLevel(list = []) {
  return Math.max(0, ...list.map(item => item.level ?? 0));
}

export function getQuestProgress(state, quest) {
  ensureQuestState(state);
  const player = state.player;
  const meta = state.meta ?? {};
  const target = quest.target ?? { type: "unknown", amount: 1 };
  let current = 0;
  switch (target.type) {
    case "roomsCleared": current = Math.max(meta.roomsCleared ?? 0, state.run?.roomsCleared ?? 0); break;
    case "highestFloor": current = meta.highestFloor ?? 0; break;
    case "bossKills": current = meta.bossKills ?? 0; break;
    case "eliteKills": current = meta.eliteKills ?? 0; break;
    case "enemyKills": current = meta.enemyKills ?? 0; break;
    case "dailyRooms": current = state.quests.daily.roomsCleared ?? 0; break;
    case "dailyKills": current = state.quests.daily.enemyKills ?? 0; break;
    case "goldSpent": current = meta.goldSpent ?? 0; break;
    case "gold": current = player?.gold ?? 0; break;
    case "relicDust": current = meta.relicDust ?? 0; break;
    case "highestRaceLevel": current = highestLevel(player?.raceLevels); break;
    case "highestJobLevel": current = highestLevel(player?.jobLevels); break;
    case "raceStages": current = player?.raceLevels?.length ?? 0; break;
    case "jobStages": current = player?.jobLevels?.length ?? 0; break;
    case "partySize": current = player?.party?.length ?? 0; break;
    case "inventoryCount": current = totalInventory(player); break;
    case "secretProgress": current = ((meta.bossKills ?? 0) >= 2 && (meta.relicDust ?? 0) >= 3) ? 1 : 0; break;
    default: current = 0;
  }
  const required = target.amount ?? 1;
  return { current, required, complete: current >= required, pct: Math.max(0, Math.min(100, Math.floor((current / Math.max(1, required)) * 100))) };
}

export function getQuestBoard(state, category = "All") {
  ensureQuestState(state);
  return QUESTS
    .filter(quest => category === "All" || quest.category === category)
    .filter(quest => quest.visibility !== "secret" || getQuestProgress(state, quest).complete || (state.meta?.bossKills ?? 0) > 0 || (state.meta?.relicDust ?? 0) > 0)
    .map(quest => ({
      ...quest,
      displayName: quest.visibility === "secret" && !getQuestProgress(state, quest).complete ? quest.name : (quest.revealedName ?? quest.name),
      progress: getQuestProgress(state, quest),
      claimed: (state.quests.claimed ?? []).includes(quest.id)
    }));
}

export function claimQuestReward(state, questId) {
  ensureQuestState(state);
  const quest = QUESTS.find(item => item.id === questId);
  if (!quest) return addLog(state, "Quest not found.");
  const progress = getQuestProgress(state, quest);
  if (!progress.complete) return addLog(state, `${quest.revealedName ?? quest.name} is not complete yet.`);
  if (state.quests.claimed.includes(quest.id)) return addLog(state, "Quest reward already claimed.");
  const rewards = quest.rewards ?? {};
  if (rewards.gold) state.player.gold += rewards.gold;
  if (rewards.xp) gainXp(state, rewards.xp);
  if (rewards.relicDust) state.meta.relicDust = (state.meta.relicDust ?? 0) + rewards.relicDust;
  for (const [itemId, qty] of Object.entries(rewards.items ?? {})) addInventory(state.player, itemId, qty);
  state.quests.claimed.push(quest.id);
  addLog(state, `<strong>Quest complete:</strong> ${quest.revealedName ?? quest.name}. Rewards claimed.`);
}

export { QUEST_CATEGORIES };
