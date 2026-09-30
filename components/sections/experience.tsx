import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Particles } from "@/components/ui/particles";
import { Waves } from "@/components/ui/waves";
import portfolioData from "@/data/portfolio";

export function Experience() {
  const { experience, projects } = portfolioData;

  return (
    <section id="experience" className="bg-ambient section-padding bg-bg">
      <Waves />
      <Particles />
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            description="My professional journey and the roles that have shaped my expertise."
          />
        </Reveal>

        <div className="relative mt-12 space-y-10 border-l border-edge pl-8 sm:pl-10">
          {experience.map((entry, index) => (
            <Reveal key={`${entry.company}-${entry.startDate}`} delay={index * 100}>
              <div className="glass relative rounded-2xl p-6 shadow-card sm:p-8">
                <span className="absolute -left-[calc(2rem+29px)] top-8 h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-glow sm:-left-[calc(2.5rem+37px)]" />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {entry.company}
                    </h3>
                    <p className="text-sm font-semibold text-accent">
                      {entry.role} &middot; {entry.location}
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-sm font-medium text-text-muted">
                    {entry.startDate} &ndash; {entry.endDate}
                  </p>
                </div>

                {entry.projectSlugs.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                      Projects
                    </p>
                    <div className="mt-3 space-y-4">
                      {projects
                        .filter((project) => entry.projectSlugs.includes(project.slug))
                        .map((project) => (
                          <div
                            key={project.slug}
                            className="rounded-xl border border-edge bg-bg/40 p-4 sm:p-5"
                          >
                            <h4 className="text-base font-semibold text-accent-blue">
                              {project.isPrivate ? (
                                project.name
                              ) : (
                                <Link
                                  href={`/projects/${project.slug}`}
                                  className="hover:underline"
                                >
                                  {project.name}
                                </Link>
                              )}
                            </h4>
                            <p className="mt-1 text-sm text-text-secondary">
                              {project.shortDescription}
                            </p>
                            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
                              What I Did
                            </p>
                            <ul className="mt-2 space-y-1.5">
                              {project.whatIDid.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-text-secondary"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {entry.responsibilities.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                      Responsibilities
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {entry.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {entry.achievements.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                      Achievements
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {entry.achievements.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {entry.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
