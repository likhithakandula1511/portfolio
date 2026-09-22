import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Particles } from "@/components/ui/particles";
import { Waves } from "@/components/ui/waves";
import { ACCENT_STYLES } from "@/components/ui/accent-card";
import { CodeBracketsIcon } from "@/components/ui/icons";
import portfolioData from "@/data/portfolio";

export function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="bg-ambient section-padding bg-bg">
      <Waves />
      <Particles />
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What I work with"
            description="A categorized overview of the technologies and skills I bring to my work."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => {
            const styles = ACCENT_STYLES[category.accent];
            return (
              <Reveal key={category.category} delay={index * 80}>
                <div
                  className="glass h-full rounded-2xl p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-glow"
                  style={{ borderLeft: `3px solid ${styles.border}` }}
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-bg-inverse"
                    style={{ background: styles.iconBg }}
                  >
                    <CodeBracketsIcon width={20} height={20} />
                  </span>
                  <h3 className="mt-4 text-xs font-medium uppercase tracking-wider text-accent">
                    {category.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
