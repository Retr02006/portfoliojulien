"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getProjects } from "@/lib/data";
import type { Project } from "@/lib/types";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { FadeIn, Stagger, MotionItem } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

const projects = getProjects();

function ProjectCard({ project }: { project: Project }) {
  return (
    <MotionItem
      className={cn(
        "perspective-card group",
        project.featured && "md:col-span-2"
      )}
    >
      <Link href={`/projets/${project.slug}`} className="block h-full">
        <motion.article
          className={cn(
            "relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl",
            "shadow-[var(--shadow-card)] transition-shadow duration-500",
            "hover:shadow-[var(--shadow-card-hover)]"
          )}
          whileHover={{
            rotateX: 2,
            rotateY: -2,
            scale: 1.01,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className={cn(
              "relative",
              "h-44 sm:h-52",
              project.featured && "md:h-56"
            )}
          >
            <ProjectCover
              coverImage={project.coverImage}
              gradientClass={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full"
              priority={project.featured}
            />
            <span className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-background-deep/60 px-3 py-1 font-[family-name:var(--font-ui)] text-[10px] font-medium uppercase tracking-wider text-secondary backdrop-blur-md">
              {project.type}
            </span>
            <span className="absolute bottom-4 right-4 z-10 font-[family-name:var(--font-ui)] text-xs text-cream/80">
              Voir le détail →
            </span>
          </div>

          <div className="relative z-10 p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-title)] text-2xl text-cream md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              {project.shortDescription}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 font-[family-name:var(--font-ui)] text-[11px] text-secondary"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 6 && (
                <span className="font-[family-name:var(--font-ui)] text-[11px] text-muted">
                  +{project.stack.length - 6}
                </span>
              )}
            </div>
          </div>
        </motion.article>
      </Link>
    </MotionItem>
  );
}

export function Projects() {
  return (
    <Section id="projets">
      <SectionTitle
        label="Réalisations"
        title="Projets"
        description="Projets BTS SIO SLAM, stage PEP64 et portfolio personnel — cliquez pour le détail complet."
        accent="pill"
      />

      <Stagger className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Stagger>

      <FadeIn className="mt-12 text-center">
        <p className="font-[family-name:var(--font-ui)] text-sm text-muted">
          Chaque carte ouvre une page détaillée (contexte, missions, difficultés, solutions).
        </p>
      </FadeIn>
    </Section>
  );
}
