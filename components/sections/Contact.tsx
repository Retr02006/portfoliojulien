"use client";

import { CONTACT_LINKS, SITE } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeIn, Stagger, MotionItem } from "@/components/ui/Motion";

export function Contact() {
  return (
    <Section id="contact" variant="minimal">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
        <div>
          <SectionTitle
            label="Contact"
            title="Travaillons ensemble"
            description="Un projet, un stage ou une collaboration ? Écrivez-moi."
            accent="line"
          />
          <FadeIn delay={0.2}>
            <Stagger className="mt-8 flex flex-wrap gap-3">
              {CONTACT_LINKS.map((link) => (
                <MotionItem key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 font-[family-name:var(--font-ui)] text-sm text-secondary transition-all hover:border-accent/30 hover:text-cream"
                  >
                    {link.label}
                    {link.external && <span className="text-xs text-muted">↗</span>}
                  </a>
                </MotionItem>
              ))}
            </Stagger>
            <p className="mt-8 font-[family-name:var(--font-ui)] text-sm text-muted">
              <a
                href={`mailto:${SITE.email}`}
                className="text-accent hover:text-secondary transition-colors"
              >
                {SITE.email}
              </a>
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <GlassCard glow>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-[family-name:var(--font-ui)] text-xs font-medium text-muted"
                >
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[family-name:var(--font-ui)] text-sm text-cream placeholder:text-muted/60 outline-none transition-all focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-[family-name:var(--font-ui)] text-xs font-medium text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="vous@email.com"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[family-name:var(--font-ui)] text-sm text-cream placeholder:text-muted/60 outline-none transition-all focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-[family-name:var(--font-ui)] text-xs font-medium text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Décrivez votre projet..."
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[family-name:var(--font-ui)] text-sm text-cream placeholder:text-muted/60 outline-none transition-all focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
                />
              </div>
              <Button type="submit" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </GlassCard>
        </FadeIn>
      </div>
    </Section>
  );
}
