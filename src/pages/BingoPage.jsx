import { projects } from '@/data/projects';
import Tag from '@/components/ui/Tag';
import { useEffect } from 'react';
import PageMeta from '@/components/PageMeta';

export default function BingoPage() {
  const project = projects.find(p => p.id === 'bingo');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="animate-fade-in-up">
      <PageMeta title={project.name} description={project.description} />
      <header className="mb-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-sm font-bold tracking-wider text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
            {project.status}
          </span>
          <span className="text-sm font-medium text-text-secondary bg-border/50 px-3 py-1 rounded-full">
            {project.type}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          {project.name}
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary font-medium mb-8">
          {project.title}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map(tech => (
            <Tag key={tech} className="bg-bg-surface">{tech}</Tag>
          ))}
        </div>
      </header>

      <div className="rounded-2xl overflow-hidden border border-border mb-16 bg-border/20 aspect-video flex items-center justify-center">
        {project.screenshot ? (
          <img src={project.screenshot} alt="Bingo Application Interface" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
        ) : (
          <span className="text-text-secondary">Screenshot coming soon</span>
        )}
      </div>

      <div className="space-y-16 text-lg text-text-secondary leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Overview</h2>
          <p>
            The Bingo Application is an interactive, web-based game built to provide a seamless and engaging digital Bingo experience. It focuses on clean user interfaces and real-time interactive components.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Internship Context</h2>
          <p>
            This project was developed during my software engineering internship at <strong>Ennlite Academy</strong> (February–May 2025). I collaborated closely within a team of eight software engineering students, simulating a real-world agile development environment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">My Role</h2>
          <p>
            Operating as a <strong>Frontend Developer</strong> on the team, my primary responsibility was turning design requirements into functional, responsive code using React and Tailwind CSS.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Frontend Work & Components</h2>
          <p className="mb-4">
            I focused heavily on the user-facing interface elements that players interact with directly. Key contributions included:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Interactive Bingo Cards:</strong> Developed the core Bingo card component, handling dynamic number generation, user selection state, and win-condition visual feedback.
            </li>
            <li>
              <strong>Reusable UI Elements:</strong> Built a library of consistent buttons, modals, and indicators that were used across the application to maintain design system integrity.
            </li>
            <li>
              <strong>Application Layout:</strong> Contributed to the overall responsive layout of related application pages, ensuring a fluid experience across desktop and mobile devices.
            </li>
          </ul>
        </section>

      </div>
    </article>
  );
}
