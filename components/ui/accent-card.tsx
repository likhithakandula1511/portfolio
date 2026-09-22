import type { ComponentType, SVGProps } from "react";
import type { AccentColor } from "@/types/portfolio";
import { ArrowRightIcon } from "@/components/ui/icons";

export const ACCENT_STYLES: Record<
  AccentColor,
  { border: string; iconBg: string; arrow: string }
> = {
  purple: {
    border: "#8B5CF6",
    iconBg: "linear-gradient(135deg, #A78BFA, #7C3AED)",
    arrow: "#A78BFA",
  },
  red: {
    border: "#F43F5E",
    iconBg: "linear-gradient(135deg, #FB7185, #E11D48)",
    arrow: "#FB7185",
  },
  teal: {
    border: "#2DD4BF",
    iconBg: "linear-gradient(135deg, #5EEAD4, #0D9488)",
    arrow: "#5EEAD4",
  },
  gold: {
    border: "#F59E0B",
    iconBg: "linear-gradient(135deg, #FBBF24, #D97706)",
    arrow: "#FBBF24",
  },
  blue: {
    border: "#3B82F6",
    iconBg: "linear-gradient(135deg, #60A5FA, #2563EB)",
    arrow: "#60A5FA",
  },
};

interface AccentCardProps {
  accent: AccentColor;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export function AccentCard({
  accent,
  icon: Icon,
  title,
  description,
}: AccentCardProps) {
  const styles = ACCENT_STYLES[accent];

  return (
    <div
      className="glass relative flex h-full flex-col rounded-2xl p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-glow"
      style={{ borderLeft: `3px solid ${styles.border}` }}
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-xl text-bg-inverse"
        style={{ background: styles.iconBg }}
      >
        <Icon width={20} height={20} />
      </span>

      <h3 className="mt-4 text-base font-semibold text-text-primary">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-text-secondary">{description}</p>

      <span
        className="mt-4 self-end"
        style={{ color: styles.arrow }}
        aria-hidden="true"
      >
        <ArrowRightIcon width={18} height={18} />
      </span>
    </div>
  );
}
