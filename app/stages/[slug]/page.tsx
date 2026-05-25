import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/detail/DetailLayout";
import { DetailContent } from "@/components/detail/DetailContent";
import { getStageBySlug, getStageSlugs } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getStageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const stage = getStageBySlug(slug);
  if (!stage) return { title: "Stage introuvable" };
  return {
    title: `${stage.role} — Julien Vielle`,
    description: stage.shortDescription,
  };
}

export default async function StageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const stage = getStageBySlug(slug);
  if (!stage) notFound();

  return (
    <DetailLayout
      backHref="/#stages"
      backLabel="Retour aux stages"
      badge={`${stage.company} — ${stage.location}`}
      title={stage.role}
      subtitle={`${stage.period} · ${stage.company}, ${stage.location}`}
    >
      <DetailContent content={stage.detail} />
    </DetailLayout>
  );
}
