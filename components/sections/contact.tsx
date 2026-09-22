import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";
import {
  LinkedInIcon,
  EmailIcon,
  WhatsAppIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { Particles } from "@/components/ui/particles";
import { Waves } from "@/components/ui/waves";
import portfolioData from "@/data/portfolio";

export function Contact() {
  const { social } = portfolioData;

  return (
    <section id="contact" className="bg-ambient section-padding bg-alt">
      <Waves />
      <Particles />
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="Have an opportunity or question? Reach out through any of the channels below."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={100}>
            <div className="space-y-4">
              <a
                href={`mailto:${social.email}`}
                className="flex items-center gap-4 glass rounded-2xl p-5 shadow-card transition-all hover:border-accent/40 hover:shadow-glow"
              >
                <span className="glass flex h-10 w-10 items-center justify-center rounded-full text-accent">
                  <EmailIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    Email
                  </p>
                  <p className="text-sm text-text-secondary">
                    {social.email}
                  </p>
                </div>
              </a>

              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 shadow-card transition-all hover:border-accent/40 hover:shadow-glow"
              >
                <span className="glass flex h-10 w-10 items-center justify-center rounded-full text-accent">
                  <WhatsAppIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    WhatsApp
                  </p>
                  <p className="text-sm text-text-secondary">
                    {social.phone}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${social.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 glass rounded-2xl p-5 shadow-card transition-all hover:border-accent/40 hover:shadow-glow"
              >
                <span className="glass flex h-10 w-10 items-center justify-center rounded-full text-accent">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    Phone
                  </p>
                  <p className="text-sm text-text-secondary">
                    {social.phone}
                  </p>
                </div>
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-2xl p-5 shadow-card transition-all hover:border-accent/40 hover:shadow-glow"
              >
                <span className="glass flex h-10 w-10 items-center justify-center rounded-full text-accent">
                  <LinkedInIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    LinkedIn
                  </p>
                  <p className="text-sm text-text-secondary">
                    Connect with me
                  </p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="glass rounded-2xl p-6 shadow-card sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
