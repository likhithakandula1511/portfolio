import Link from "next/link";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold text-text-primary">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <LinkButton href="/" variant="primary" className="mt-6">
        Back to Home
      </LinkButton>
      <Link
        href="/#projects"
        className="mt-4 text-sm font-medium text-accent hover:text-accent-hover"
      >
        View projects instead
      </Link>
    </main>
  );
}
