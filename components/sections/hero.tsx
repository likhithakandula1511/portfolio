import Image from "next/image";
import { LinkButton } from "@/components/ui/button";
import {
  CodeBracketsIcon,
  BoltIcon,
  DatabaseIcon,
  CloudIcon,
} from "@/components/ui/icons";
import portfolioData from "@/data/portfolio";

const HERO_BADGES = [
  {
    label: "Python",
    icon: CodeBracketsIcon,
    iconBg: "linear-gradient(135deg, #22D3EE, #3B82F6)",
    style: { top: "22%", left: "0%" },
  },
  {
    label: "FastAPI",
    icon: BoltIcon,
    iconBg: "linear-gradient(135deg, #34D399, #22D3EE)",
    style: { top: "30%", right: "0%" },
  },
  {
    label: "PostgreSQL",
    icon: DatabaseIcon,
    iconBg: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
    style: { bottom: "22%", left: "6%" },
  },
  {
    label: "REST APIs",
    icon: CloudIcon,
    iconBg: "linear-gradient(135deg, #3B82F6, #22D3EE)",
    style: { bottom: "14%", right: "6%" },
  },
];

function DeveloperOrbit() {
  return (
    <div
      className="relative mx-auto aspect-[560/520] w-full"
      style={{ maxWidth: "min(560px, 100%)" }}
    >
      {/* Wide elliptical orbit ring */}
      <div
        aria-hidden="true"
        className="animate-spin-slow absolute left-1/2 top-1/2 h-[78%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(34,211,238,0.3), rgba(59,130,246,0.22), rgba(139,92,246,0.2), rgba(34,211,238,0.3))",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[62%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-accent/25"
      />

      {/* Central glassmorphism card */}
      <div
        className="absolute left-1/2 top-1/2 flex w-[61%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl px-[7%] py-[7%] text-center"
        style={{
          maxWidth: "340px",
          background:
            "linear-gradient(160deg, rgba(15,23,42,0.85), rgba(5,8,22,0.9))",
          border: "1px solid rgba(34, 211, 238, 0.35)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow:
            "0 0 40px 6px rgba(34, 211, 238, 0.14), 0 0 70px 14px rgba(139, 92, 246, 0.12), 0 12px 40px rgba(0, 0, 0, 0.45)",
        }}
      >
        <span
          className="mb-4 text-accent"
          style={{
            fontSize: "26px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            textShadow: "0 0 14px rgba(34,211,238,0.4)",
          }}
        >
          {"</>"}
        </span>

        <p className="text-center font-sans">
          <span
            className="block"
            style={{
              fontSize: "32px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
              color: "#F8FAFC",
            }}
          >
            Software
          </span>
          <span
            className="block"
            style={{
              fontSize: "32px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.5px",
              backgroundImage:
                "linear-gradient(90deg, #22D3EE 0%, #3B82F6 50%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Developer
          </span>
        </p>

        <p
          className="mt-3"
          style={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "#B8C4D9",
          }}
        >
          Building scalable solutions, one line of code at a time.
        </p>
      </div>

      {/* Technology badges */}
      {HERO_BADGES.map(({ label, icon: Icon, iconBg, style }) => (
        <div
          key={label}
          className="absolute flex items-center gap-2.5 rounded-full py-2 pl-2 pr-4"
          style={{
            ...style,
            background: "rgba(5, 8, 22, 0.88)",
            border: "1px solid rgba(34, 211, 238, 0.3)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow:
              "0 0 16px 2px rgba(34, 211, 238, 0.12), 0 0 24px 4px rgba(59, 130, 246, 0.08)",
          }}
        >
          <span
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-bg-inverse"
            style={{ background: iconBg }}
          >
            <Icon width={15} height={15} />
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#F8FAFC",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        </div>
      ))}

      {/* Floating decorations */}
      <span
        aria-hidden="true"
        className="animate-float absolute -left-4 top-2 h-3 w-3 rounded-full opacity-70"
        style={{
          background: "#22D3EE",
          boxShadow: "0 0 10px 2px rgba(34,211,238,0.5)",
        }}
      />
      <span
        aria-hidden="true"
        className="animate-float-slow absolute -right-3 bottom-6 h-4 w-4 rotate-45 opacity-50"
        style={{
          border: "1px solid rgba(139,92,246,0.5)",
          background: "rgba(139,92,246,0.1)",
        }}
      />
      <span
        aria-hidden="true"
        className="animate-float absolute -bottom-3 left-8 h-0 w-0 opacity-50"
        style={{
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderBottom: "10px solid rgba(59,130,246,0.4)",
        }}
      />
    </div>
  );
}

export function Hero() {
  const { personal } = portfolioData;
  const [firstName, ...rest] = personal.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div
        aria-hidden="true"
        className="animate-bg-drift pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.55] saturate-[0.85]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-bg/45" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-bg" />

      <div className="section-container grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="animate-fade-in-up text-center lg:text-left">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
            Welcome to my portfolio
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-text-primary">{firstName}</span>
            {lastName && (
              <>
                {" "}
                <span className="text-gradient-brand">{lastName}</span>
              </>
            )}
          </h1>
          <p className="mt-4 text-xl font-semibold text-text-secondary sm:text-2xl">
            {personal.headline}
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base font-normal leading-relaxed text-text-secondary lg:mx-0">
            {personal.shortIntro}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <LinkButton href="#projects" variant="primary">
              View My Work
            </LinkButton>
            <LinkButton href={personal.resumeUrl} variant="secondary" external>
              Download Resume
            </LinkButton>
            <LinkButton href="#contact" variant="outline">
              Contact Me
            </LinkButton>
          </div>
        </div>

        <div className="animate-scale-in hidden h-full w-full items-center justify-center lg:flex">
          <DeveloperOrbit />
        </div>
      </div>
    </section>
  );
}
