import { GlassCard } from "@/components/ui/GlassCard";
import type { DetailContent as DetailContentType } from "@/lib/types";

interface DetailContentProps {
  content: DetailContentType;
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
      {prose && (
        <p className="leading-relaxed text-muted">{prose}</p>
      )}
      {items && (
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

export function DetailContent({ content }: DetailContentProps) {
  return (
    <>
      <GlassCard>
        <Block title="Contexte" prose={content.context} />
      </GlassCard>

      <GlassCard>
        <Block title="Objectif" prose={content.objective} />
      </GlassCard>

      <GlassCard>
        <Block title="Technologies" items={content.technologies} />
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

      <GlassCard>
        <Block title="Missions réalisées" items={content.missions} />
      </GlassCard>

      <GlassCard>
        <Block title="Difficultés rencontrées" items={content.challenges} />
      </GlassCard>

      <GlassCard>
        <Block title="Solutions apportées" items={content.solutions} />
      </GlassCard>

      <GlassCard glow>
        <Block title="Compétences développées" items={content.skillsDeveloped} />
      </GlassCard>

      {content.gallery && content.gallery.length > 0 && (
        <div>
          <h2 className="mb-4 font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-accent">
            Galerie
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.gallery.map((img) => (
              <div
                key={img.src}
                className="aspect-video rounded-xl border border-white/[0.08] bg-primary/30 bg-cover bg-center"
                style={{ backgroundImage: `url(${img.src})` }}
                role="img"
                aria-label={img.alt}
              />
            ))}
          </div>
        </div>
      )}

      {content.source && (
        <p className="font-[family-name:var(--font-ui)] text-xs text-muted italic">
          Source : {content.source}
        </p>
      )}
    </>
  );
}
