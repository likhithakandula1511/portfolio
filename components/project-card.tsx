import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon } from "@/components/ui/icons";
import type { Project } from "@/types/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass group flex h-full flex-col overflow-hidden rounded-2xl shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
      <div className="relative aspect-video w-full overflow-hidden bg-bg-elevated">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(min-width: 1024px) 380px, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-text-primary">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm text-text-secondary">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-text-muted">
          Role: <span className="text-text-secondary">{project.role}</span>
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary px-4 py-2 text-sm font-semibold text-bg transition-all hover:brightness-110"
          >
            View Project
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} live demo`}
            className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-accent/50 hover:text-accent"
          >
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
