"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { sectionHref } from "@/lib/navigation";

export function Footer() {
  const year = new Date().getFullYear();
  const onHome = usePathname() === "/";

  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:px-10">
        <div className="text-center md:text-left">
          <p className="font-[family-name:var(--font-title)] text-xl text-cream">
            {SITE.name}
          </p>
          <p className="mt-1 font-[family-name:var(--font-ui)] text-sm text-muted">
            {SITE.role}
          </p>
          <p className="mt-1 font-[family-name:var(--font-ui)] text-xs text-muted/80">
            {SITE.school}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={sectionHref(link.href, onHome)}
              className="font-[family-name:var(--font-ui)] text-sm text-muted transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="font-[family-name:var(--font-ui)] text-xs text-muted">
          © {year}
        </p>
      </div>
    </footer>
  );
}
