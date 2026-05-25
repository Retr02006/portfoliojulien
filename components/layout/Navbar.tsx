"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { sectionHref } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;

    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-background-deep/60 backdrop-blur-2xl backdrop-saturate-150"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href={sectionHref("#accueil", onHome)}
          className="group flex items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-white/[0.06] font-[family-name:var(--font-ui)] text-xs font-semibold text-cream ring-1 ring-white/10 transition-all duration-300 group-hover:ring-accent/40">
            <span className="relative z-10">{SITE.initials}</span>
            <span className="absolute inset-0 bg-accent/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1 backdrop-blur-xl lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = onHome && activeId === link.id;
            return (
              <li key={link.href} className="relative">
                <Link
                  href={sectionHref(link.href, onHome)}
                  className={cn(
                    "relative z-10 block rounded-full px-4 py-2 font-[family-name:var(--font-ui)] text-sm font-medium transition-colors duration-300",
                    isActive ? "text-cream" : "text-muted hover:text-secondary"
                  )}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <Link
          href={sectionHref("#contact", onHome)}
          className="hidden rounded-full bg-accent/90 px-5 py-2 font-[family-name:var(--font-ui)] text-sm font-medium text-cream shadow-[0_2px_16px_rgba(14,101,169,0.3)] transition-all hover:bg-accent lg:inline-flex"
        >
          Contact
        </Link>

        <button
          type="button"
          aria-label={mobileOpen ? "Fermer" : "Menu"}
          aria-expanded={mobileOpen}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-lg ring-1 ring-white/10 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span
            className={cn(
              "h-px w-4 bg-cream transition-all",
              mobileOpen && "translate-y-[5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-4 bg-cream transition-all",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-px w-4 bg-cream transition-all",
              mobileOpen && "-translate-y-[5px] -rotate-45"
            )}
          />
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden border-t border-white/[0.06] bg-background-deep/95 backdrop-blur-2xl lg:hidden"
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={sectionHref(link.href, onHome)}
                className={cn(
                  "block rounded-xl px-4 py-3 font-[family-name:var(--font-ui)] text-base font-medium transition-colors",
                  onHome && activeId === link.id
                    ? "bg-white/[0.06] text-cream"
                    : "text-muted hover:text-cream"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
