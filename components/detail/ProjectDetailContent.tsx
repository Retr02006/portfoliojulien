import { GlassCard } from "@/components/ui/GlassCard";
import { ProjectLiveButton } from "@/components/detail/ProjectLiveButton";
import type { DetailContent, GalleryItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectDetailContentProps {
  content: DetailContent;
  liveUrl?: string | null;
}

function GalleryScreenshot({ img }: { img: GalleryItem }) {
  const isImage = img.src.startsWith("/");

  return (
    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-primary/20">
      <div
        className={cn(
          "aspect-video bg-cover bg-center",
          img.gradient && `bg-gradient-to-br ${img.src}`
        )}
        style={isImage ? { backgroundImage: `url(${img.src})` } : undefined}
        role="img"
        aria-label={img.alt}
      >
        {img.gradient && (
          <div className="flex h-full items-center justify-center p-6 text-center">
            <span className="font-[family-name:var(--font-ui)] text-sm text-muted">
              {img.alt}
            </span>
          </div>
        )}
      </div>
      <p className="border-t border-white/[0.06] px-4 py-2 font-[family-name:var(--font-ui)] text-xs text-muted">
        {img.alt}
      </p>
    </div>
  );
}

function Block({
  title,
  items,
  prose,
}: {
  title: string;
  items?: string[];
  prose?: string;
}) {
  return (
    <section>
      <h2 className="mb-4 font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-accent">
        {title}
      </h2>
      {prose && <p className="leading-relaxed text-muted">{prose}</p>}
      {items && items.length > 0 && (
        <ul className="mt-3 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-muted"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-secondary" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function ProjectDetailContent({
  content,
  liveUrl,
}: ProjectDetailContentProps) {
  const showLiveButton = liveUrl != null && liveUrl !== "";

  return (
    <>
      <GlassCard>
        <Block title="Contexte" prose={content.context} />
      </GlassCard>

      <GlassCard>
        <Block title="Objectifs" prose={content.objective} />
      </GlassCard>

      {content.features && content.features.length > 0 && (
        <GlassCard>
          <Block title="Fonctionnalités principales" items={content.features} />
        </GlassCard>
      )}

      <GlassCard>
        <Block title="Technologies utilisées" items={content.technologies} />
        <div className="mt-4 flex flex-wrap gap-2">
          {content.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-[family-name:var(--font-ui)] text-xs text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>

      {content.missions.length > 0 && (
        <GlassCard>
          <Block title="Missions réalisées" items={content.missions} />
        </GlassCard>
      )}

      {content.gallery && content.gallery.length > 0 && (
        <div>
          <h2 className="mb-4 font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-accent">
            Captures d&apos;écran
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.gallery.map((img) => (
              <GalleryScreenshot key={img.alt} img={img} />
            ))}
          </div>
        </div>
      )}

      <GlassCard>
        <Block title="Difficultés rencontrées" items={content.challenges} />
      </GlassCard>

      <GlassCard>
        <Block title="Solutions apportées" items={content.solutions} />
      </GlassCard>

      <GlassCard glow>
        <Block title="Compétences développées" items={content.skillsDeveloped} />
      </GlassCard>

      {content.source && (
        <p className="font-[family-name:var(--font-ui)] text-xs text-muted italic">
          Source : {content.source}
        </p>
      )}

      {showLiveButton && <ProjectLiveButton liveUrl={liveUrl} />}
    </>
  );
}
