import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LinkButton } from "@/components/ui/button";
import { DownloadIcon } from "@/components/ui/icons";
import { Particles } from "@/components/ui/particles";
import { Waves } from "@/components/ui/waves";
import { resumeFileExists } from "@/lib/resume";
import portfolioData from "@/data/portfolio";

export function Resume() {
  const hasResume = resumeFileExists();

  return (
    <section id="resume" className="bg-ambient section-padding bg-bg">
      <Waves />
      <Particles />
      <div className="section-container">
        <Reveal>
          <SectionHeading
            eyebrow="Resume"
            title="Download my resume"
            align="center"
            description="Get a full copy of my resume in PDF format."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="glass mx-auto mt-10 max-w-lg rounded-2xl p-8 text-center shadow-card">
            {hasResume ? (
              <>
                <p className="text-sm text-text-secondary">
                  My latest resume is ready to download.
                </p>
                <LinkButton
                  href={portfolioData.personal.resumeUrl}
                  external
                  variant="primary"
                  className="mt-6"
                >
                  <DownloadIcon />
                  Download Resume
                </LinkButton>
              </>
            ) : (
              <>
                <p className="text-sm text-text-secondary">
                  Resume coming soon. Add your PDF at{" "}
                  <code className="rounded bg-bg-elevated px-1.5 py-0.5 text-xs text-text-secondary">
                    /public/resume.pdf
                  </code>{" "}
                  to enable the download button.
                </p>
                <span
                  aria-disabled="true"
                  className="glass mt-6 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-text-muted opacity-60"
                >
                  <DownloadIcon />
                  Resume Not Available Yet
                </span>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
