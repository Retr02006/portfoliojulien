"use client";

import Link from "next/link";
import {
  CV_PDF_PATH,
  EDUCATION,
  EXPERIENCES,
  PROFILE,
  SKILL_GROUPS,
} from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn, Stagger, MotionItem } from "@/components/ui/Motion";

export function CV() {
  return (
    <Section id="cv" variant="elevated">
      <SectionTitle
        label="Parcours"
        title="Curriculum Vitae"
        description={PROFILE.summary}
        accent="line"
      />

      <FadeIn className="mb-10">
        <a href={CV_PDF_PATH} download>
          <Button variant="primary">Télécharger mon CV (PDF)</Button>
        </a>
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <FadeIn>
            <GlassCard>
              <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-accent">
                Formation
              </h3>
              <div className="mt-4">
                <p className="font-[family-name:var(--font-title)] text-xl text-cream">
                  {EDUCATION.diploma}
                </p>
                <p className="mt-1 font-[family-name:var(--font-ui)] text-secondary">
                  {EDUCATION.school} — {EDUCATION.city}
                </p>
                <p className="mt-1 font-[family-name:var(--font-ui)] text-sm text-accent">
                  {EDUCATION.period}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {EDUCATION.description}
                </p>
              </div>
            </GlassCard>
          </FadeIn>

          <Stagger className="space-y-4">
            <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-secondary">
              Expériences
            </h3>
            {EXPERIENCES.map((exp) => (
              <MotionItem key={exp.period + exp.title}>
                <GlassCard className="group relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-secondary/30 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="font-[family-name:var(--font-ui)] text-xs font-medium text-accent">
                    {exp.period}
                  </span>
                  <h4 className="mt-1 font-[family-name:var(--font-title)] text-lg text-cream">
                    {exp.title}
                  </h4>
                  <p className="font-[family-name:var(--font-ui)] text-sm text-secondary">
                    {exp.org} — {exp.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                  {exp.slug && (
                    <Link
                      href={`/stages/${exp.slug}`}
                      className="mt-4 inline-flex font-[family-name:var(--font-ui)] text-sm text-accent transition-colors hover:text-secondary"
                    >
                      Voir le détail du stage →
                    </Link>
                  )}
                </GlassCard>
              </MotionItem>
            ))}
          </Stagger>
        </div>

        <FadeIn className="lg:col-span-2" delay={0.15}>
          <GlassCard glow className="sticky top-32">
            <h3 className="font-[family-name:var(--font-ui)] text-sm font-semibold uppercase tracking-wider text-secondary">
              Compétences
            </h3>
            <div className="mt-6 space-y-6">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category}>
                  <p className="mb-2 font-[family-name:var(--font-ui)] text-sm font-medium text-cream">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 font-[family-name:var(--font-ui)] text-[11px] text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </FadeIn>
      </div>
    </Section>
  );
}
