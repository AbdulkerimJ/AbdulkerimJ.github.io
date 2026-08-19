import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Server, Network, Cloud, Bot } from 'lucide-react';

const interests = [
  { label: 'Backend Engineering', icon: <Server className="w-4 h-4 text-accent/80" /> },
  { label: 'System Design', icon: <Network className="w-4 h-4 text-accent/80" /> },
  { label: 'Cloud & Deployment', icon: <Cloud className="w-4 h-4 text-accent/80" /> },
  { label: 'AI Integration', icon: <Bot className="w-4 h-4 text-accent/80" /> },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-accent/60" />
          <span className="text-accent text-xs font-bold uppercase tracking-[0.18em]">About</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight mb-16">
          I enjoy turning problems<br className="hidden sm:block" />
          <span className="text-gradient"> into practical software.</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">

          {/* Left — text + stats */}
          <div className="space-y-8">
            <div className="space-y-4 text-[1.05rem] text-text-secondary leading-[1.85] border-l-2 border-accent/25 pl-6 relative">
              <div className="absolute top-0 left-[-1.5px] w-0.5 h-10 bg-accent rounded-full" />
              <p>
                I'm a Software Engineering graduate and full-stack developer based in Ethiopia.
                My focus is on building practical, scalable systems — applications that actually solve real problems
                rather than just looking good on paper.
              </p>
              <p>
                I'm most energized by backend work — API design, data modeling, authentication, and the kind of
                problems that require thinking about how systems hold together under load. That said, I build the
                full stack and take pride in clean, maintainable code on both ends.
              </p>
              <p>
                I'm looking for a software engineering role where I can contribute meaningfully,
                work alongside experienced engineers, and keep growing fast.
              </p>
            </div>

          </div>

          {/* Right — interests card */}
          <div className="card-glass rounded-2xl p-7 border border-white/[0.07] relative overflow-hidden">
            {/* card inner glow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

            <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-5">
              Areas of Interest
            </p>

            <div className="space-y-2.5">
              {interests.map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 group cursor-default"
                >
                  <span className="text-lg">{icon}</span>
                  <span className="text-sm font-semibold text-text-secondary group-hover:text-text-primary transition-colors">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
