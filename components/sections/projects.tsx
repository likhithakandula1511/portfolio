import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { Particles } from "@/components/ui/particles";
import { Waves } from "@/components/ui/waves";
import portfolioData from "@/data/portfolio";

export function Projects() {
  const { projects } = portfolioData;
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="bg-ambient section-padding bg-alt">
      <Waves />
      <Particles />
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built"
            description="A selection of projects that showcase my technical skills and approach to problem-solving."
          />
        </Reveal>

        {featured && (
          <Reveal delay={80}>
            <div className="glass-strong mt-10 overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="p-8 sm:p-10">
                  <p className="text-xs font-medium uppercase tracking-widest text-accent">
                    Featured Project
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-text-primary sm:text-3xl">
                    {featured.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {featured.shortDescription}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/projects/${featured.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:brightness-110"
                    >
                      View Project
                    </Link>
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <div className="relative aspect-video lg:aspect-auto lg:h-full lg:min-h-[280px]">
                  <Image
                    src={featured.image}
                    alt={`${featured.name} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
