import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Particles } from "@/components/ui/particles";
import { Waves } from "@/components/ui/waves";
import { AccentCard } from "@/components/ui/accent-card";
import {
  DanceIcon,
  YouTubeIcon,
  MicrophoneIcon,
  CameraIcon,
  VideoEditIcon,
} from "@/components/ui/icons";
import portfolioData from "@/data/portfolio";

const HOBBY_ICONS: Record<string, typeof DanceIcon> = {
  Dance: DanceIcon,
  "YouTube Channel": YouTubeIcon,
  Singing: MicrophoneIcon,
  "Content Creation": CameraIcon,
  "Video Editing": VideoEditIcon,
};

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
              <AccentCard
                accent={hobby.accent}
                icon={HOBBY_ICONS[hobby.title] ?? DanceIcon}
                title={hobby.title}
                description={hobby.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
