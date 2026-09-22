const PARTICLE_COLORS = ["#22D3EE", "#3B82F6", "#8B5CF6"];

const PARTICLES = [
  { top: "12%", left: "8%", size: 3, color: 0, delay: 0 },
  { top: "22%", left: "88%", size: 2, color: 1, delay: 2 },
  { top: "68%", left: "92%", size: 3, color: 2, delay: 4 },
  { top: "80%", left: "6%", size: 2, color: 0, delay: 6 },
  { top: "45%", left: "50%", size: 2, color: 1, delay: 3 },
];

export function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {PARTICLES.map((p, index) => (
        <span
          key={index}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: PARTICLE_COLORS[p.color],
            boxShadow: `0 0 8px 2px ${PARTICLE_COLORS[p.color]}`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
