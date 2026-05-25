"use client";

import { motion } from "framer-motion";
import { HERO_STATS, SITE, TECH_STACK } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";

const floatTransition = {
  duration: 6,
  repeat: Infinity,
  repeatType: "reverse" as const,
  ease: "easeInOut" as const,
};

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <motion.div
        className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-accent/20 blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40, rotateY: -8 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="perspective-card relative"
      >
        <GlassCard glow className="relative overflow-hidden p-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/5" />
          <div className="relative border-b border-white/[0.06] px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <span className="font-[family-name:var(--font-ui)] text-xs text-muted">
                profile.sys
              </span>
            </div>
          </div>

          <div className="relative px-6 py-8">
            <div className="flex items-start gap-5">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent/40 ring-1 ring-white/15">
                  <span className="font-[family-name:var(--font-title)] text-3xl text-cream">
                    {SITE.initials}
                  </span>
                </div>
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background-deep bg-emerald-500/80" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-title)] text-xl text-cream">
                  {SITE.name}
                </p>
                <p className="mt-1 font-[family-name:var(--font-ui)] text-sm text-secondary">
                  {SITE.role}
                </p>
                <p className="mt-2 font-[family-name:var(--font-ui)] text-xs text-muted">
                  {SITE.location}
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {HERO_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-3 text-center"
                >
                  <p className="font-[family-name:var(--font-ui)] text-lg font-semibold text-cream">
                    {stat.value}
                  </p>
                  <p className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        animate={{ y: [-6, 6] }}
        transition={floatTransition}
        className="absolute -left-6 top-1/3 hidden md:block"
      >
        <GlassCard className="px-4 py-3" hover={false}>
          <p className="font-[family-name:var(--font-ui)] text-[10px] uppercase tracking-widest text-muted">
            Stack
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5 max-w-[140px]">
            {TECH_STACK.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-accent/15 px-2 py-0.5 font-[family-name:var(--font-ui)] text-[10px] text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      <motion.div
        animate={{ y: [8, -8] }}
        transition={{ ...floatTransition, duration: 7 }}
        className="absolute -right-2 bottom-8 hidden lg:block"
      >
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-[family-name:var(--font-ui)] text-xs text-secondary">
              Disponible
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
