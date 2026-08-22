import { Mail, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import GithubIcon from '@/components/ui/GithubIcon';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-16 md:py-32 relative" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Ambient glow behind the card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-accent/60" />
          <span className="text-accent text-xs font-bold uppercase tracking-[0.18em]">Contact</span>
        </div>

        {/* Big CTA card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] bg-gradient-to-br from-bg-card/80 to-bg-surface/60 backdrop-blur-xl p-12 md:p-20 text-center shadow-[0_0_100px_rgba(0,0,0,0.6)]">

          {/* Top glow line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

          {/* Decorative corner blooms */}
          <div className="absolute -top-16 -left-16 w-56 h-56 bg-[radial-gradient(circle,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-black text-text-primary mb-5 tracking-tight">
            Let's build something{' '}
            <span className="text-gradient">useful.</span>
          </h2>

          <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed mb-12">
            I'm open to software engineering opportunities, collaborations,
            and interesting projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary — Email */}
            <a
              href="mailto:abdulkerimjemal.dev@gmail.com"
              className="
                group flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm text-black
                bg-accent hover:bg-accent-bright
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-1 active:scale-[0.97]
                transition-all duration-300
              "
            >
              <Mail className="w-5 h-5" />
              abdulkerimjemal.dev@gmail.com
              <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>

            {/* Secondary — GitHub */}
            <a
              href="https://github.com/AbdulkerimJ"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-sm
                text-text-secondary border border-white/10
                hover:border-accent/40 hover:text-text-primary hover:bg-accent/8
                hover:-translate-y-1 active:scale-[0.97]
                transition-all duration-300 backdrop-blur-sm
              "
            >
              <GithubIcon className="w-5 h-5" />
              GitHub
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
