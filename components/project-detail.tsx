import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { ArrowLeftIcon, ExternalLinkIcon } from "@/components/ui/icons";
import type { Project } from "@/types/portfolio";

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
      <div className="mt-3 text-base leading-relaxed text-text-secondary">
        {children}
      </div>
    </div>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const { detail } = project;

  return (
    <article className="section-container section-padding">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover"
      >
        <ArrowLeftIcon />
        Back to projects
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {project.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={project.liveUrl} external variant="primary">
            <ExternalLinkIcon />
            Live Demo
          </LinkButton>
        </div>
      </header>

      <div className="relative mt-10 aspect-video w-full overflow-hidden glass rounded-2xl shadow-card">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <DetailBlock title="Overview">{detail.overview}</DetailBlock>
        <DetailBlock title="My Role">{detail.role}</DetailBlock>
        <DetailBlock title="The Problem">{detail.problem}</DetailBlock>
        <DetailBlock title="The Solution">{detail.solution}</DetailBlock>
      </div>

      <div className="mt-12 glass rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-text-primary">
          Technology Stack
        </h2>
        <dl className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Frontend
            </dt>
            <dd className="mt-1 text-sm text-text-secondary">
              {detail.frontend}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Backend
            </dt>
            <dd className="mt-1 text-sm text-text-secondary">
              {detail.backend}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              Database / Storage
            </dt>
            <dd className="mt-1 text-sm text-text-secondary">
              {detail.database}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-text-muted">
              APIs / Integrations
            </dt>
            <dd className="mt-1 text-sm text-text-secondary">
              {detail.apis}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">
            Main Features
          </h2>
          <ul className="mt-4 space-y-2">
            {detail.mainFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-text-primary">
            User Workflow
          </h2>
          <ol className="mt-4 space-y-2">
            {detail.userWorkflow.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3 text-sm text-text-secondary"
              >
                <span className="glass flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-accent">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {project.screenshots.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-text-primary">
            Screenshots
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {project.screenshots.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative aspect-video overflow-hidden glass rounded-xl shadow-card"
              >
                <Image
                  src={src}
                  alt={`${project.name} screenshot ${index + 1}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-text-primary">
          Architecture / Workflow Diagram
        </h2>
        <div className="relative mt-6 aspect-video w-full overflow-hidden glass rounded-xl shadow-card">
          <Image
            src={detail.architectureDiagram}
            alt={`${project.name} architecture diagram`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}
