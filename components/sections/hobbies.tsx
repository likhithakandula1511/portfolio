import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Particles } from "@/components/ui/particles";
import { Waves } from "@/components/ui/waves";
import portfolioData from "@/data/portfolio";

export function Hobbies() {
  const { hobbies } = portfolioData;

  return (
    <section id="hobbies" className="bg-ambient section-padding bg-bg">
      <Waves />
      <Particles />
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Hobbies & Interests"
            title="Outside of work"
            description="A few things I enjoy beyond software development."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, index) => (
            <Reveal key={hobby.title} delay={index * 80}>
              <div className="glass h-full rounded-2xl p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
                <h3 className="text-base font-semibold text-text-primary">
                  {hobby.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {hobby.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
