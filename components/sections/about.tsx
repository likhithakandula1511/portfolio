import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Particles } from "@/components/ui/particles";
import { Waves } from "@/components/ui/waves";
import portfolioData from "@/data/portfolio";

export function About() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="bg-ambient section-padding bg-bg">
      <Waves />
      <Particles />
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="Get to know me"
            description={personal.aboutIntro}
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal delay={100}>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden glass rounded-2xl shadow-card">
              <Image
                src={personal.profileImage}
                alt={`${personal.displayName} profile`}
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2">
            <Reveal delay={150}>
              <div className="glass rounded-2xl p-6 shadow-card">
                <h3 className="text-lg font-semibold text-text-primary">
                  Career Interests
                </h3>
                <ul className="mt-4 space-y-2">
                  {personal.careerInterests.map((interest) => (
                    <li
                      key={interest}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="glass rounded-2xl p-6 shadow-card">
                <h3 className="text-lg font-semibold text-text-primary">
                  Professional Strengths
                </h3>
                <ul className="mt-4 space-y-2">
                  {personal.strengths.map((strength) => (
                    <li
                      key={strength}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
