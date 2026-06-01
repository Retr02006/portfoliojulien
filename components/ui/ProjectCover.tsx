import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCoverProps {
  coverImage?: string;
  gradientClass: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function ProjectCover({
  coverImage,
  gradientClass,
  alt,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: ProjectCoverProps) {
  if (coverImage) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={coverImage}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-deep/95 via-background-deep/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,211,240,0.08),transparent_50%)]" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative bg-gradient-to-br",
        gradientClass,
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,211,240,0.12),transparent_50%)]" />
    </div>
  );
}
