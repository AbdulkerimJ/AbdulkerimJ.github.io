import { useEffect, useRef, useState } from 'react';

/* ── Node data ── */
const NODES = [
  { id: 'client',   label: 'Client',      sub: 'React / Next.js',    x: 50, y: 8,  color: '#60a5fa' },
  { id: 'gateway',  label: 'API Gateway', sub: 'REST API',            x: 50, y: 33, color: '#10b981' },
  { id: 'auth',     label: 'Auth',        sub: 'JWT / OAuth',         x: 18, y: 62, color: '#f59e0b' },
  { id: 'services', label: 'Services',    sub: 'Node.js / Express',   x: 50, y: 62, color: '#a78bfa' },
  { id: 'db',       label: 'Database',    sub: 'PostgreSQL / MongoDB', x: 50, y: 90, color: '#34d399' },
];

const EDGES = [
  { from: 'client',   to: 'gateway' },
  { from: 'gateway',  to: 'auth' },
  { from: 'gateway',  to: 'services' },
  { from: 'auth',     to: 'services' },
  { from: 'services', to: 'db' },
];

/* ── Animated data packet that travels along an edge ── */
function Packet({ x1, y1, x2, y2, delay, color }) {
  return (
    <circle r="2.5" fill={color} opacity="0.85">
      <animateMotion
        dur="2.4s"
        begin={`${delay}s`}
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.4 0 0.2 1"
        path={`M${x1},${y1} L${x2},${y2}`}
      />
    </circle>
  );
}

export default function SystemDesignViz() {
  const svgRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [positions, setPositions] = useState({});
  const [mounted, setMounted] = useState(false);

  /* Convert % positions to SVG coords (viewBox 0 0 300 320) */
  const toSvg = (px, py) => ({ x: (px / 100) * 300, y: (py / 100) * 320 });

  useEffect(() => {
    const pos = {};
    NODES.forEach(n => { pos[n.id] = toSvg(n.x, n.y); });
    setPositions(pos);
    setTimeout(() => setMounted(true), 80);
  }, []);

  return (
    <div
      className="relative w-full max-w-[340px] select-none"
      aria-hidden="true"
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(ellipse_at_50%_40%,rgba(16,185,129,0.08)_0%,transparent_70%)]" />

      {/* Glass card */}
      <div className="card-glass relative rounded-2xl overflow-hidden shadow-[0_32px_72px_rgba(0,0,0,0.5),0_0_0_1px_rgba(16,185,129,0.06)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block" />
          <span className="ml-2 text-xs font-mono text-white/25">system-architecture</span>
        </div>

        {/* SVG diagram */}
        <div className="px-4 py-5">
          <svg
            ref={svgRef}
            viewBox="0 0 300 320"
            width="100%"
            className="overflow-visible"
          >
            {/* Edge lines */}
            {Object.keys(positions).length > 0 && EDGES.map((e, i) => {
              const from = positions[e.from];
              const to   = positions[e.to];
              if (!from || !to) return null;
              const active = hovered === e.from || hovered === e.to;
              return (
                <g key={i}>
                  <line
                    x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                    stroke={active ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.07)'}
                    strokeWidth={active ? 1.5 : 1}
                    strokeDasharray={active ? 'none' : '4 4'}
                    className="transition-[stroke,stroke-width] duration-300"
                  />
                  {/* Packet animation */}
                  <Packet
                    x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                    delay={i * 0.35}
                    color={NODES.find(n => n.id === e.from)?.color ?? '#10b981'}
                  />
                </g>
              );
            })}

            {/* Nodes */}
            {NODES.map((node, i) => {
              const pos = positions[node.id];
              if (!pos) return null;
              const active = hovered === node.id;
              return (
                <g
                  key={node.id}
                  transform={`translate(${pos.x},${pos.y})`}
                  onMouseEnter={() => setHovered(node.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`cursor-default transition-opacity duration-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  {/* Glow halo on hover */}
                  {active && (
                    <circle
                      r="24"
                      fill={node.color}
                      opacity="0.1"
                    />
                  )}

                  {/* Node box */}
                  <rect
                    x="-38" y="-16"
                    width="76" height="32"
                    rx="8"
                    fill={active ? 'rgba(18,18,21,0.95)' : 'rgba(18,18,21,0.85)'}
                    stroke={active ? node.color : 'rgba(255,255,255,0.09)'}
                    strokeWidth={active ? 1.5 : 1}
                    className="transition-[stroke,stroke-width] duration-250"
                  />

                  {/* Color indicator bar */}
                  <rect
                    x="-38" y="-16"
                    width="4" height="32"
                    rx="4"
                    fill={node.color}
                    opacity={active ? 1 : 0.6}
                  />

                  {/* Label */}
                  <text
                    x="2" y="-3"
                    textAnchor="middle"
                    fontSize="8"
                    fontWeight="700"
                    fontFamily="'Manrope', sans-serif"
                    fill={active ? node.color : '#fafafa'}
                    className="transition-colors duration-250"
                  >
                    {node.label}
                  </text>
                  {/* Sub-label */}
                  <text
                    x="2" y="8"
                    textAnchor="middle"
                    fontSize="5.5"
                    fontFamily="'Manrope', monospace"
                    fill="rgba(161,161,170,0.7)"
                  >
                    {node.sub}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>


      </div>
    </div>
  );
}
