import { RACES, RACE_PATHS } from "./races.js";
import { JOBS, JOB_PATHS } from "./jobs.js";

function withKind(kind, track, entry) {
  return {
    kind,
    track,
    id: entry.id,
    excelId: entry.excelId ?? "",
    name: entry.name,
    category: entry.category ?? "Uncategorized",
    tier: entry.tier ?? "base",
    maxLevel: entry.maxLevel,
    from: entry.from ?? "",
    description: entry.description ?? "",
    strengths: entry.strengths ?? [],
    weaknesses: entry.weaknesses ?? [],
    startingSkills: entry.startingSkills ?? [],
    requirements: entry.requirements ?? {},
    registryRequirement: entry.registryRequirement ?? null,
    deprecatedOverlap: Boolean(entry.deprecatedOverlap),
    duplicateOf: entry.duplicateOf ?? "",
    registryVisible: entry.registryVisible !== false,
    balanceTemplate: entry.balanceTemplate ?? "",
    overlapGroup: entry.overlapGroup ?? "",
    roleIdentity: entry.roleIdentity ?? ""
  };
}

export const CLASS_REGISTRY = [
  ...RACES.map(entry => withKind("Race", "race", entry)),
  ...RACE_PATHS.map(entry => withKind("Race Evolution", "race", entry)),
  ...JOBS.map(entry => withKind("Job", "job", entry)),
  ...JOB_PATHS.map(entry => withKind("Job Path", "job", entry))
];

export const REGISTRY_TOTALS = Object.freeze({
  races: RACES.length,
  racePaths: RACE_PATHS.length,
  baseJobs: JOBS.length,
  jobPaths: JOB_PATHS.length,
  total: CLASS_REGISTRY.length
});

export const REGISTRY_TIERS = ["all", "base", "advanced", "specialist", "rare", "hidden"];
export const REGISTRY_KINDS = ["all", "Race", "Race Evolution", "Job", "Job Path"];
export const REGISTRY_CATEGORIES = [
  "all",
  ...Array.from(new Set(CLASS_REGISTRY.map(entry => entry.category))).sort((a, b) => a.localeCompare(b))
];
