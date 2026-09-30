import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftIcon } from "@/components/ui/icons";
import { PrivateBadge } from "@/components/ui/private-badge";
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
      <h2 className="text-xl font-semibold uppercase tracking-wide text-accent-blue">{title}</h2>
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
        {project.isPrivate && (
          <div className="mb-4">
            <PrivateBadge />
          </div>
        )}
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
        <h2 className="text-xl font-semibold uppercase tracking-wide text-accent-blue">
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
          <h2 className="text-xl font-semibold uppercase tracking-wide text-accent-blue">
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
          <h2 className="text-xl font-semibold uppercase tracking-wide text-accent-blue">
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

      <div className="mt-12">
        <h2 className="text-xl font-semibold uppercase tracking-wide text-accent-blue">
          Process Flow
        </h2>
        <ol className="mt-6 flex flex-col items-center gap-3 lg:flex-row lg:flex-wrap">
          {detail.processFlow.map((step, index) => (
            <li
              key={step}
              className="flex w-full flex-col items-center gap-3 lg:w-auto lg:flex-row"
            >
              <div className="glass w-full rounded-xl px-5 py-4 text-center shadow-card lg:w-52">
                <span className="block text-xs font-semibold uppercase tracking-wide text-accent-blue">
                  Step {index + 1}
                </span>
                <span className="mt-1 block text-sm text-text-secondary">
                  {step}
                </span>
              </div>
              {index < detail.processFlow.length - 1 && (
                <span
                  aria-hidden="true"
                  className="rotate-90 text-2xl text-accent-blue lg:rotate-0"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
