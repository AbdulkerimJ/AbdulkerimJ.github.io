import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      {/* Section dividers */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-accent/60" />
          <span className="text-accent text-xs font-bold uppercase tracking-[0.18em]">Selected Work</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight">
            Projects I've built to<br />
            <span className="text-gradient">solve real problems.</span>
          </h2>
          <p className="text-text-secondary text-sm max-w-xs leading-relaxed md:text-right">
            Full-stack systems, backend APIs, and frontend applications built across solo and team projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
