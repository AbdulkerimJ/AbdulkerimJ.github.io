import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-accent/60" />
          <span className="text-accent text-xs font-bold uppercase tracking-[0.18em]">Education</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight mb-14">
          Academic background.
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Degree */}
          <div className="group relative card-glass rounded-2xl border border-white/[0.07] p-8 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.07)] transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-text-muted mb-5 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
              Degree
            </span>

            <h3 className="text-xl font-black text-text-primary mb-1 leading-snug">
              Bachelor of Science in<br />Software Engineering
            </h3>
            <p className="text-accent/80 font-bold text-sm mb-5">Arba Minch University</p>

            <div className="flex items-center justify-between pt-5 border-t border-white/[0.05]">
              <span className="text-text-muted text-sm font-medium">2022 – 2026</span>
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            </div>
          </div>

          {/* Certificate */}
          <div className="group relative card-glass rounded-2xl border border-white/[0.07] p-8 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.07)] transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-text-muted mb-5 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
              Certificate
            </span>

            <h3 className="text-xl font-black text-text-primary mb-1 leading-snug">
              Programming Fundamentals<br />Nanodegree
            </h3>
            <p className="text-accent/80 font-bold text-sm mb-2">Udacity</p>
            <p className="text-text-muted text-xs leading-relaxed mb-5">
              Via the 5 Million Ethiopian Coders program.
            </p>

            <div className="flex items-center justify-between pt-5 border-t border-white/[0.05]">
              <span className="text-text-muted text-sm font-medium">September 2024</span>
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
