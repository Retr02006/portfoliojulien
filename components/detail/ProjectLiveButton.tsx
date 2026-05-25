"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectLiveButtonProps {
  liveUrl: string;
}

export function ProjectLiveButton({ liveUrl }: ProjectLiveButtonProps) {
  const isPlaceholder = liveUrl === "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="pt-6"
    >
      <Link
        href={liveUrl}
        target={isPlaceholder ? undefined : "_blank"}
        rel={isPlaceholder ? undefined : "noopener noreferrer"}
        className="group relative block w-full overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/20 via-primary/40 to-accent/10 p-[1px] shadow-[var(--shadow-glow)]"
        onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
        aria-disabled={isPlaceholder ? true : undefined}
      >
        <span className="relative flex items-center justify-center gap-3 rounded-2xl bg-background-deep/80 px-8 py-5 backdrop-blur-xl transition-colors duration-300 group-hover:bg-accent/15 md:py-6">
          <span className="font-[family-name:var(--font-ui)] text-lg font-semibold tracking-wide text-cream transition-colors group-hover:text-white md:text-xl">
            Visualiser le projet
          </span>
          <motion.span
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/90 text-cream"
            whileHover={{ scale: 1.08, x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </motion.span>
          <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(14,101,169,0.2),transparent_70%)]" />
        </span>
      </Link>
      {isPlaceholder && (
        <p className="mt-3 text-center font-[family-name:var(--font-ui)] text-xs text-muted">
          URL à configurer dans{" "}
          <code className="text-secondary">liveUrl</code> (constants.ts)
        </p>
      )}
    </motion.div>
  );
}
