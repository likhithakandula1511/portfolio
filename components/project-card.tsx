import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { PrivateBadge } from "@/components/ui/private-badge";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
      <div className="flex flex-1 flex-col p-6">
        {project.isPrivate && (
          <div className="mb-3">
            <PrivateBadge />
          </div>
        )}
        <h3 className="text-lg font-semibold text-text-primary">
          {project.name}
        </h3>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent-blue">
          About the Project
        </p>
        <p className="mt-1 text-sm text-text-secondary">
          {project.cardSummary}
        </p>

        <div className="flex-1">
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent-blue">
            What I Did
          </p>
          <ul className="mt-2 space-y-1.5">
            {project.cardHighlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-text-muted">
          Role: <span className="text-text-secondary">{project.role}</span>
        </p>

        {!project.isPrivate && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-4 py-2 text-sm font-semibold text-bg transition-all hover:brightness-110"
            >
              View Project
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
