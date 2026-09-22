export function Waves() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <svg
        className="animate-bg-drift absolute inset-x-0 top-0 h-40 w-full opacity-40"
        viewBox="0 0 1600 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120 C 300 40 500 180 800 90 S 1300 20 1600 100"
          stroke="#22D3EE"
          strokeOpacity="0.14"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0 160 C 350 100 550 220 900 130 S 1350 60 1600 150"
          stroke="#3B82F6"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      <svg
        className="animate-bg-drift absolute inset-x-0 bottom-0 h-40 w-full opacity-40"
        viewBox="0 0 1600 300"
        preserveAspectRatio="none"
      >
        <path
          d="M0 180 C 300 240 500 120 800 200 S 1300 260 1600 190"
          stroke="#3B82F6"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0 220 C 350 160 600 260 950 190 S 1400 120 1600 210"
          stroke="#8B5CF6"
          strokeOpacity="0.1"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
