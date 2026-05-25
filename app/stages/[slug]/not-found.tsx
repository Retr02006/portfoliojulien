import Link from "next/link";
import { DetailLayout } from "@/components/detail/DetailLayout";

export default function StageNotFound() {
  return (
    <DetailLayout
      backHref="/#stages"
      backLabel="Retour aux stages"
      title="Stage introuvable"
      subtitle="Ce stage n'existe pas ou a été déplacé."
    >
      <Link
        href="/#stages"
        className="font-[family-name:var(--font-ui)] text-accent hover:text-secondary"
      >
        Voir tous les stages
      </Link>
    </DetailLayout>
  );
}
