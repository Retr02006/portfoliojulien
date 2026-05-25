import { notFound } from "next/navigation";
import { DetailLayout } from "@/components/detail/DetailLayout";
import { ProjectDetailContent } from "@/components/detail/ProjectDetailContent";
import { getProjectBySlug, getProjectSlugs } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: `${project.title} — Julien Vielle`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <DetailLayout
      backHref="/#projets"
      backLabel="Retour aux projets"
      badge={project.type}
      title={project.title}
      subtitle={project.shortDescription}
    >
      <ProjectDetailContent
        content={project.detail}
        liveUrl={project.liveUrl}
      />
    </DetailLayout>
  );
}
