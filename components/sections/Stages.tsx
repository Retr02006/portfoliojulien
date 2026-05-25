"use client";

import Link from "next/link";
import { STAGES } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn, Stagger, MotionItem } from "@/components/ui/Motion";
import { motion } from "framer-motion";

export function Stages() {
  return (
    <Section id="stages" variant="minimal" className="overflow-hidden">
      <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />

      <SectionTitle
        label="Expériences"
        title="Stages PEP64"
        description="Deux stages au PEP64 de Billère — réseau sécurisé RADIUS puis portail intranet ASP.NET Core MVC."
        accent="line"
      />

      <Stagger className="relative space-y-6">
        {STAGES.map((stage, index) => (
          <MotionItem key={stage.slug}>
            <Link href={`/stages/${stage.slug}`} className="block">
              <motion.div
                className="group relative flex flex-col gap-6 rounded-2xl border border-white/[0.06] bg-gradient-to-r from-white/[0.04] to-transparent p-8 backdrop-blur-sm transition-colors hover:border-accent/25 md:flex-row md:items-center md:justify-between"
                whileHover={{ x: index % 2 === 0 ? 6 : -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="md:max-w-[65%]">
                  <span className="font-[family-name:var(--font-ui)] text-sm font-medium text-accent">
                    {stage.period}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-title)] text-2xl text-cream group-hover:text-secondary transition-colors">
                    {stage.role}
                  </h3>
                  <p className="mt-1 font-[family-name:var(--font-ui)] text-secondary">
                    {stage.company} — {stage.location}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {stage.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex font-[family-name:var(--font-ui)] text-sm text-accent">
                    Lire le rapport détaillé →
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 md:max-w-[35%] md:justify-end">
                  {stage.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 font-[family-name:var(--font-ui)] text-xs text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          </MotionItem>
        ))}
      </Stagger>

      <FadeIn delay={0.2} className="mt-12">
        <p className="text-center font-[family-name:var(--font-ui)] text-sm text-muted">
          Sources : rapport de stage 2025 et journal de bord stage 2026 — Julien Vielle.
        </p>
      </FadeIn>
    </Section>
  );
}
