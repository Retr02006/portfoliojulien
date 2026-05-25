import { PROJECTS, STAGES } from "@/lib/constants";
import type { Project, Stage } from "@/lib/types";

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getStageBySlug(slug: string): Stage | undefined {
  return STAGES.find((s) => s.slug === slug);
}

export function getProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export function getStageSlugs(): string[] {
  return STAGES.map((s) => s.slug);
}
