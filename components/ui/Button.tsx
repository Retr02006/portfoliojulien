import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent/90 text-cream font-[family-name:var(--font-ui)] font-medium shadow-[0_2px_20px_rgba(14,101,169,0.35)] hover:bg-accent hover:shadow-[0_4px_28px_rgba(14,101,169,0.45)] active:scale-[0.98]",
  secondary:
    "bg-white/[0.04] text-cream font-[family-name:var(--font-ui)] font-medium border border-white/10 hover:bg-white/[0.08] hover:border-white/20 active:scale-[0.98]",
  ghost:
    "text-secondary font-[family-name:var(--font-ui)] hover:text-cream hover:bg-white/5",
  outline:
    "border border-secondary/25 text-secondary font-[family-name:var(--font-ui)] hover:border-accent/50 hover:text-cream hover:bg-accent/10",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm tracking-wide transition-all duration-300 ease-out";

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
