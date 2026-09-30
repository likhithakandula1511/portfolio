import { LockIcon } from "@/components/ui/icons";

export function PrivateBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-blue/40 bg-accent-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-blue">
      <LockIcon />
      Private Project
    </span>
  );
}
