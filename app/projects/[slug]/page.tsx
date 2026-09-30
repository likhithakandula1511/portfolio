import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectDetail } from "@/components/project-detail";
import portfolioData from "@/data/portfolio";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Private projects are shown only as cards; they get no detail page.
const publicProjects = portfolioData.projects.filter((p) => !p.isPrivate);

export function generateStaticParams() {
  return publicProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = publicProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.name,
    description: project.shortDescription,
    openGraph: {
      title: project.name,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = publicProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-ambient bg-bg">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
