"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/sections/HeroVisual";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen scroll-mt-28 overflow-hidden pt-[72px]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="flex flex-col justify-center text-left">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-[family-name:var(--font-ui)] text-xs font-medium text-secondary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {SITE.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-[family-name:var(--font-title)] text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
          >
            {SITE.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted md:text-xl"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#projets">Explorer les projets</Button>
            <Button href="#cv" variant="secondary">
              Mon parcours
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-14 flex items-center gap-8 border-t border-white/[0.06] pt-8"
          >
            {["Web", "Applicatif", "Réseau & SI"].map((item) => (
              <span
                key={item}
                className="font-[family-name:var(--font-ui)] text-sm text-muted"
              >
                <span className="text-secondary">—</span> {item}
              </span>
            ))}
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
