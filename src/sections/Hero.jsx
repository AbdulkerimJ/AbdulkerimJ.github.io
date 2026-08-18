import { ArrowUpRight, MapPin, Globe } from 'lucide-react';

/* ── Small reusable decorative chip ── */
function Chip({ label, icon }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-medium text-text-secondary">
      {icon && <span className="text-accent flex items-center">{icon}</span>}
      {label}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Ambient blooms ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* top-right emerald glow */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)]" />
        {/* bottom-left subtle emerald glow */}
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1fr_auto] gap-16 items-center pt-28 pb-20 relative z-10">

        {/* ── LEFT — Text ── */}
        <div className="max-w-2xl">

          {/* eyebrow */}
          <div className="fade-up-1 flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-accent/60" />
            <span className="text-accent font-bold tracking-[0.18em] text-xs uppercase">
              Software Engineer & Full-Stack Developer
            </span>
          </div>

          {/* headline */}
          <h1 className="fade-up-2 font-black text-[clamp(2.6rem,6vw,4.2rem)] leading-[1.05] tracking-tight text-text-primary mb-6">
            I build software<br />
            that solves{' '}
            <span className="relative inline-block">
              <span className="text-gradient">real problems.</span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-accent/60 to-transparent" />
            </span>
          </h1>

          {/* sub */}
          <p className="fade-up-3 text-[1.1rem] text-text-secondary leading-relaxed mb-10 max-w-lg">
            Software Engineering graduate focused on building practical web applications
            and backend systems. I care about clean architecture and useful software.
          </p>

          {/* CTAs */}
          <div className="fade-up-4 flex flex-wrap items-center gap-4 mb-10">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="
                group relative px-7 py-3.5 rounded-xl font-bold text-sm text-black overflow-hidden
                bg-accent hover:bg-accent-bright
                shadow-lg hover:shadow-xl
                hover:-translate-y-0.5 active:scale-[0.97]
                transition-all duration-300
              "
            >
              <span className="relative z-10 flex items-center gap-2 font-bold">
                View my work
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </span>
            </button>

            <a
              href="https://github.com/AbdulkerimJ"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm
                text-text-secondary border border-white/10
                hover:border-accent/40 hover:text-text-primary hover:bg-accent/8
                hover:-translate-y-0.5 active:scale-[0.97]
                transition-all duration-300 backdrop-blur-sm
              "
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Meta chips */}
          <div className="fade-up-4 flex flex-wrap gap-2">
            <Chip icon={<MapPin className="w-3.5 h-3.5 text-accent" />} label="Ethiopia" />
            <Chip icon={<Globe className="w-3.5 h-3.5 text-accent" />} label="Open to remote" />
          </div>
        </div>

        {/* ── RIGHT — Profile photo with clean backdrop ── */}
        <div className="hidden md:flex items-center justify-center relative w-[320px] flex-shrink-0">

          {/* spinning ring decoration */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-accent/8 pointer-events-none"
            style={{ animation: 'spin-slow 40s linear infinite' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-accent/5 pointer-events-none"
            style={{ animation: 'spin-slow 28s linear infinite reverse' }}
          />

          {/* Outer glow ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
          </div>

          {/* Photo frame */}
          <div className="relative">
            <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-accent/25 shadow-[0_0_50px_rgba(16,185,129,0.15),0_24px_60px_rgba(0,0,0,0.5)] bg-bg-card relative">
              {/* Placeholder avatar */}
              <img
                src="/assets/abdulkerim-profile-photo.jpg"
                alt="Abdulkerim Jemal"
                className="w-full h-full object-cover object-top"
                onError={e => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback initials */}
              <div
                style={{ display: 'none' }}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 to-bg-card"
              >
                <span className="text-6xl font-black text-accent/50 select-none">AJ</span>
              </div>
              {/* Shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card/40 via-transparent to-white/[0.04] pointer-events-none" />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#09090b] to-transparent" />
    </section>
  );
}
