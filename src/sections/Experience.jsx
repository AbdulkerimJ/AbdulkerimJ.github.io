import { useScrollReveal } from '@/hooks/useScrollReveal';
import Tag from '@/components/ui/Tag';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-accent/60" />
          <span className="text-accent text-xs font-bold uppercase tracking-[0.18em]">Experience</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight mb-14">
          Where I've worked.
        </h2>

        {/* Timeline entry */}
        <div className="relative pl-10 md:pl-16">

          {/* Timeline track */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-accent via-accent/20 to-transparent" />

          {/* Glowing node */}
          <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_16px_rgba(16,185,129,0.8)]" />

          <div className="card-glass rounded-2xl border border-white/[0.07] p-8 md:p-10 relative overflow-hidden group hover:border-accent/25 transition-all duration-500">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
              <div>
                <h3 className="text-xl md:text-2xl font-black text-text-primary mb-1">
                  Frontend Developer Intern
                </h3>
                <div className="flex items-center gap-2 text-sm text-text-secondary font-semibold">
                  <span className="text-accent">Ennlite Academy</span>
                  <span className="text-text-muted">·</span>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
              <span className="flex-shrink-0 text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full w-fit">
                Feb 2025 – May 2025
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-3.5">
              {[
                'Contributed to the frontend development of a web-based Bingo application within an 8-person engineering student team.',
                'Built user-facing interface elements and interactive game components using React and Tailwind CSS.',
                'Developed reusable UI components for the main game interface and related application pages.',
                'Collaborated on component integration and ensured layout consistency across the application.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/70 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Tech used */}
            <div className="flex flex-wrap gap-2 mt-7 pt-7 border-t border-white/[0.05]">
              {['React', 'Tailwind CSS', 'JavaScript'].map(t => (
                <Tag key={t} size="sm">
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
