import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/Motion";

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  accent?: "line" | "pill" | "number";
}

export function SectionTitle({
  label,
  title,
  description,
  align = "left",
  className,
  accent = "line",
}: SectionTitleProps) {
  return (
    <FadeIn className={cn("mb-14 md:mb-20", align === "center" && "text-center", className)}>
      {accent === "pill" && (
        <span className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-[family-name:var(--font-ui)] text-xs font-medium tracking-wider text-secondary uppercase">
          {label}
        </span>
      )}
      {accent === "line" && (
        <span className="mb-3 block font-[family-name:var(--font-ui)] text-xs font-medium tracking-[0.2em] text-accent uppercase">
          {label}
        </span>
      )}
      {accent === "number" && (
        <span className="mb-2 block font-[family-name:var(--font-ui)] text-6xl font-bold text-white/[0.06] md:text-7xl">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-[family-name:var(--font-title)] text-4xl font-medium tracking-tight text-cream md:text-5xl lg:text-6xl",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-xl text-muted leading-relaxed md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
