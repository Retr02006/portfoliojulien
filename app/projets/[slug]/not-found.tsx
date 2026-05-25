import Link from "next/link";
import { DetailLayout } from "@/components/detail/DetailLayout";

export default function ProjectNotFound() {
  return (
    <DetailLayout
      backHref="/#projets"
      backLabel="Retour aux projets"
      title="Projet introuvable"
      subtitle="Ce projet n'existe pas ou a été déplacé."
    >
      <Link
        href="/#projets"
        className="font-[family-name:var(--font-ui)] text-accent hover:text-secondary"
      >
        Voir tous les projets
      </Link>
    </DetailLayout>
  );
}
