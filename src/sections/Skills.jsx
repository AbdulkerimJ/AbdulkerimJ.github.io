import { useScrollReveal } from '@/hooks/useScrollReveal';
import Tag from '@/components/ui/Tag';

const cats = [
  { title: 'Frontend', skills: ['JavaScript', 'React', 'Tailwind CSS', 'React Router', 'Axios'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Zod'] },
  { title: 'Database', skills: ['MongoDB', 'Mongoose', 'PostgreSQL'] },
  { title: 'Tools & Deployment', skills: ['Git', 'Vercel', 'Render'] },
  { title: 'Engineering Concepts', skills: ['System Design', 'API Design', 'Database Design', 'Auth & Authorization'] },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-16 md:py-32 relative" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-accent/60" />
          <span className="text-accent text-xs font-bold uppercase tracking-[0.18em]">Skills</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight">
            What I work with.
          </h2>
          <p className="text-text-secondary text-sm max-w-xs leading-relaxed md:text-right">
            Technologies I use regularly and concepts I apply when designing systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {cats.map(({ title, skills }) => (
            <div
              key={title}
              className="group card-glass rounded-2xl border border-white/[0.07] p-6 hover:border-accent/25 hover:shadow-[0_0_30px_rgba(16,185,129,0.07)] transition-all duration-400 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-2 mb-5">
                <div className="w-1.5 h-5 rounded-full bg-accent/60" />
                <h3 className="text-xs font-bold text-text-primary uppercase tracking-widest">{title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Tag key={skill}>
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
