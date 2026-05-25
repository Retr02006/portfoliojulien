import Link from "next/link";
import { AmbientBackground } from "@/components/backgrounds/AmbientBackground";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface DetailLayoutProps {
  children: React.ReactNode;
  backHref: string;
  backLabel: string;
  badge?: string;
  title: string;
  subtitle?: string;
}

export function DetailLayout({
  children,
  backHref,
  backLabel,
  badge,
  title,
  subtitle,
}: DetailLayoutProps) {
  return (
    <>
      <AmbientBackground />
      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main className="mx-auto max-w-4xl px-6 pb-24 pt-28 md:px-10 md:pt-32">
          <Link
            href={backHref}
            className="group mb-10 inline-flex items-center gap-2 font-[family-name:var(--font-ui)] text-sm text-muted transition-colors hover:text-cream"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            {backLabel}
          </Link>

          {badge && (
            <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 font-[family-name:var(--font-ui)] text-xs font-medium uppercase tracking-wider text-accent">
              {badge}
            </span>
          )}

          <h1 className="font-[family-name:var(--font-title)] text-4xl font-medium text-cream md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-secondary">{subtitle}</p>
          )}

          <div className="mt-12 space-y-10">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
