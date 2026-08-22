import { ArrowUpRight, MapPin, Globe } from 'lucide-react';
import SystemDesignViz from '../components/SystemDesignViz';
import GithubIcon from '../components/ui/GithubIcon';

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
    <section id="hero" className="relative md:min-h-screen flex items-center overflow-hidden pt-32 pb-16 md:pt-0 md:pb-0">

      {/* ── Ambient blooms ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* top-right emerald glow */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.12)_0%,transparent_70%)]" />
        {/* bottom-left subtle emerald glow */}
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.05)_0%,transparent_65%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid md:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center md:pt-28 md:pb-20 relative z-10">

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
              <GithubIcon className="w-4 h-4" />
              GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Meta chips */}
          <div className="fade-up-4 flex flex-wrap gap-2">
            <Chip icon={<MapPin className="w-3.5 h-3.5 text-accent" />} label="Ethiopia" />
            <Chip icon={<Globe className="w-3.5 h-3.5 text-accent" />} label="Open to remote" />
          </div>
        </div>

        {/* ── RIGHT — System Design Visualization ── */}
        <div className="hidden md:flex items-center justify-center relative flex-shrink-0 w-[360px]">

          <SystemDesignViz />
        </div>
      </div>
    </section>
  );
}
