import portfolioData from "@/data/portfolio";
import { LinkedInIcon, EmailIcon } from "@/components/ui/icons";

export function Footer() {
  const { personal, social } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge bg-bg-footer">
      <div className="section-container flex flex-col items-center gap-6 py-12 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div>
          <p className="text-lg font-bold text-text-primary">
            {personal.displayName}
          </p>
          <p className="mt-2 max-w-sm text-sm text-text-muted">
            {personal.headline}
          </p>
          <p className="mt-3 text-sm font-medium text-accent">
            Python &bull; FastAPI &bull; Database &bull; REST API
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <div className="flex gap-3">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-md p-2 text-text-muted transition-colors hover:text-accent"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${social.email}`}
              aria-label="Send an email"
              className="rounded-md p-2 text-text-muted transition-colors hover:text-accent"
            >
              <EmailIcon />
            </a>
          </div>
          <p className="text-sm text-text-muted">
            &copy; {year} {personal.displayName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
