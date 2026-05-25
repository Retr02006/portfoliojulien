"use client";

import { VEILLE, VEILLE_TIMELINE } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn, MotionItem, Stagger } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

export function Veille() {
  return (
    <Section id="veille" variant="elevated">
      <SectionTitle
        label="Veille technologique"
        title="Le langage Rust"
        description={VEILLE.problematique}
        accent="pill"
        align="center"
        className="text-center [&_p]:mx-auto"
      />

      <FadeIn className="mx-auto max-w-3xl">
        <GlassCard className="text-center">
          <p className="text-sm leading-relaxed text-muted md:text-base">
            <strong className="text-secondary">Définition :</strong>{" "}
            {VEILLE.definition}
          </p>
        </GlassCard>
      </FadeIn>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <GlassCard>
            <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-accent">
              Objectifs de la veille
            </h3>
            <ul className="mt-4 space-y-2">
              {VEILLE.objectives.map((obj) => (
                <li
                  key={obj}
                  className="flex gap-2 text-sm text-muted leading-relaxed"
                >
                  <span className="text-accent">•</span>
                  {obj}
                </li>
              ))}
            </ul>
          </GlassCard>
        </FadeIn>

        <FadeIn delay={0.1}>
          <GlassCard>
            <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-accent">
              Méthode de collecte
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {VEILLE.collectionMethod}
            </p>
            <h4 className="mt-6 font-[family-name:var(--font-ui)] text-xs font-semibold uppercase text-secondary">
              Critères de sélection
            </h4>
            <ul className="mt-3 space-y-2">
              {VEILLE.selectionCriteria.map((c) => (
                <li key={c} className="text-sm text-muted">
                  — {c}
                </li>
              ))}
            </ul>
          </GlassCard>
        </FadeIn>
      </div>

      <FadeIn className="mt-12">
        <h3 className="mb-6 text-center font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-secondary">
          Axes d&apos;analyse
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VEILLE.axes.map((axis) => (
            <GlassCard key={axis.title} className="h-full">
              <h4 className="font-[family-name:var(--font-title)] text-lg text-cream">
                {axis.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {axis.content}
              </p>
            </GlassCard>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-12">
        <GlassCard>
          <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-accent">
            Sources & outils de veille
          </h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-3 font-[family-name:var(--font-ui)] text-xs uppercase text-muted">
                Sources
              </p>
              <ul className="space-y-2">
                {VEILLE.sources.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-ui)] text-sm text-secondary hover:text-cream transition-colors"
                    >
                      {s.name} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-[family-name:var(--font-ui)] text-xs uppercase text-muted">
                Outils
              </p>
              <ul className="space-y-2">
                {VEILLE.tools.map((t) => (
                  <li
                    key={t}
                    className="font-[family-name:var(--font-ui)] text-sm text-muted"
                  >
                    — {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </FadeIn>

      <div className="relative mx-auto mt-20 max-w-4xl">
        <h3 className="mb-12 text-center font-[family-name:var(--font-title)] text-3xl text-cream">
          Timeline des actualités
        </h3>
        <div className="absolute left-1/2 top-16 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/40 to-transparent md:block" />

        <Stagger className="space-y-10 md:space-y-14">
          {VEILLE_TIMELINE.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <MotionItem
                key={item.title}
                className={cn(
                  "relative w-full md:w-[calc(50%-2rem)]",
                  isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                )}
              >
                <span className="absolute left-1/2 top-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background-deep shadow-[0_0_14px_rgba(14,101,169,0.5)] md:block" />

                <GlassCard glow>
                  <span className="font-[family-name:var(--font-ui)] text-xs font-medium text-accent">
                    {item.date}
                  </span>
                  <h4 className="mt-2 font-[family-name:var(--font-title)] text-xl text-cream">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.06] pt-4">
                    {item.sourceUrl ? (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-[family-name:var(--font-ui)] text-xs text-secondary hover:text-cream"
                      >
                        {item.source} ↗
                      </a>
                    ) : (
                      <span className="font-[family-name:var(--font-ui)] text-xs text-muted">
                        {item.source}
                      </span>
                    )}
                    <span className="rounded-full bg-accent/15 px-3 py-1 font-[family-name:var(--font-ui)] text-[10px] text-secondary">
                      {item.impact}
                    </span>
                  </div>
                </GlassCard>
              </MotionItem>
            );
          })}
        </Stagger>
      </div>

      <div className="mx-auto mt-20 max-w-3xl space-y-8">
        <FadeIn>
          <GlassCard glow>
            <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-accent">
              Synthèse
            </h3>
            <p className="mt-4 leading-relaxed text-muted">{VEILLE.synthesis}</p>
          </GlassCard>
        </FadeIn>
        <FadeIn delay={0.1}>
          <GlassCard>
            <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-accent">
              Conclusion personnelle
            </h3>
            <p className="mt-4 leading-relaxed text-muted">{VEILLE.conclusion}</p>
          </GlassCard>
        </FadeIn>
      </div>
    </Section>
  );
}
