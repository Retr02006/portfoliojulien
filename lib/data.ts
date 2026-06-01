import { PROJECTS, STAGES } from "@/lib/constants";
import { enrichAllProjects, enrichProjectWithImages } from "@/lib/project-images";
import type { Project, Stage } from "@/lib/types";

const PROJECTS_WITH_MEDIA = enrichAllProjects(PROJECTS);

export function getProjects(): Project[] {
  return PROJECTS_WITH_MEDIA;
}

export function getProjectBySlug(slug: string): Project | undefined {
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return undefined;
  return enrichProjectWithImages(project);
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
