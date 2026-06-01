export interface GalleryItem {
  src: string;
  alt: string;
  /** Utilise un dégradé Tailwind (classe bg-gradient) au lieu d'une image */
  gradient?: boolean;
}

export interface DetailContent {
  context: string;
  objective: string;
  technologies: string[];
  missions: string[];
  /** Fonctionnalités principales (projets web type Locaboard) */
  features?: string[];
  challenges: string[];
  solutions: string[];
  skillsDeveloped: string[];
  gallery?: GalleryItem[];
  source?: string;
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  shortDescription: string;
  stack: string[];
  /** Classes Tailwind gradient — fallback si pas de coverImage */
  image: string;
  /** Vignette carte projet (ex. /images/projets/fa-1.png) */
  coverImage?: string;
  github: string | null;
  demo: string | null;
  featured: boolean;
  /** URL de démo live — affiche le bouton « Visualiser le projet » si définie */
  liveUrl?: string | null;
  detail: DetailContent;
}

export interface Stage {
  slug: string;
  period: string;
  company: string;
  location: string;
  role: string;
  shortDescription: string;
  tags: string[];
  detail: DetailContent;
}

export interface VeilleTimelineItem {
  date: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl?: string;
  impact: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  period: string;
  title: string;
  org: string;
  location: string;
  description: string;
}
