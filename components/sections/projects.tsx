import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/project-card";
import { Particles } from "@/components/ui/particles";
import { Waves } from "@/components/ui/waves";
import portfolioData from "@/data/portfolio";

export function Projects() {
  const { projects } = portfolioData;

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

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
