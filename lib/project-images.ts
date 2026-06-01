import type { GalleryItem, Project } from "@/lib/types";

const BASE = "/images/projets";

/**
 * Registre des images par slug de projet.
 * Convention de nommage : `{prefixe}-{numéro}.png`
 * — fa-* → projet-fa
 * — locaboard-* → locaboard
 * — nps-* → documentation-radius
 * Ajoutez ici les nouveaux fichiers placés dans public/images/projets/.
 */
export const PROJECT_IMAGE_FILES: Record<string, string[]> = {
  "projet-fa": [`${BASE}/fa-1.png`],
  locaboard: [`${BASE}/locaboard-1.png`],
  "documentation-radius": [`${BASE}/nps-1.png`, `${BASE}/nps-2.png`],
};

const IMAGE_ALTS: Record<string, string[]> = {
  "projet-fa": [
    "Page d'accueil — site de billetterie du parc archéologique",
  ],
  locaboard: [
    "Interface Locaboard — tableau de bord et gestion des locations",
  ],
  "documentation-radius": [
    "Documentation RADIUS/NPS — page d'accueil du site documentaire",
    "Documentation RADIUS/NPS — configuration et procédures NPS",
  ],
};

function toGallery(slug: string, paths: string[]): GalleryItem[] {
  const alts = IMAGE_ALTS[slug] ?? [];
  return paths.map((src, index) => ({
    src,
    alt: alts[index] ?? `Capture d'écran — ${index + 1}`,
  }));
}

export function enrichProjectWithImages(project: Project): Project {
  const paths = PROJECT_IMAGE_FILES[project.slug];
  if (!paths?.length) return project;

  const gallery = toGallery(project.slug, paths);

  return {
    ...project,
    coverImage: paths[0],
    detail: {
      ...project.detail,
      gallery,
    },
  };
}

export function enrichAllProjects(projects: Project[]): Project[] {
  return projects.map(enrichProjectWithImages);
}
