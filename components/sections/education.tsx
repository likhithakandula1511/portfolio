import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Particles } from "@/components/ui/particles";
import { Waves } from "@/components/ui/waves";
import portfolioData from "@/data/portfolio";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="bg-ambient section-padding bg-alt">
      <Waves />
      <Particles />
      <div className="section-container">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic background" />
        </Reveal>

        <div className="mt-12 space-y-6">
          {education.map((entry, index) => (
            <Reveal key={`${entry.institution}-${entry.startDate}`} delay={index * 100}>
              <div className="glass rounded-2xl p-6 shadow-card sm:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {entry.degree}
                    </h3>
                    <p className="text-sm font-semibold text-accent">
                      {entry.institution} &middot; {entry.location}
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-sm font-medium text-text-muted">
                    {entry.startDate} &ndash; {entry.endDate}
                  </p>
                </div>

                {entry.details.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {entry.details.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
