import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: "default" | "elevated" | "minimal";
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-28 py-28 md:py-36",
        variant === "elevated" && "bg-white/[0.02]",
        variant === "minimal" && "py-20",
        className
      )}
    >
      {variant === "default" && (
        <div className="section-divider absolute top-0 left-1/2 w-full max-w-3xl -translate-x-1/2" />
      )}
      <div
        className={cn(
          "relative z-10 mx-auto max-w-7xl px-6 md:px-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
