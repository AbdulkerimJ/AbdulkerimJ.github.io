import { projects } from '@/data/projects';
import Tag from '@/components/ui/Tag';
import { useEffect } from 'react';
import PageMeta from '@/components/PageMeta';

export default function AcademicRecordsPage() {
  const project = projects.find(p => p.id === 'academic-records');

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
          <img src={project.screenshot} alt="Academic Records Dashboard" className="w-full h-full object-contain" onError={(e) => e.target.style.display = 'none'} />
        ) : (
          <span className="text-text-secondary">Screenshot coming soon</span>
        )}
      </div>

      <div className="space-y-16 text-lg text-text-secondary leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Overview</h2>
          <p>
            The Digital Academic Records & Verification System is a platform designed to streamline the issuance, management, sharing, and verification of academic credentials. It serves as a centralized hub for educational institutions and students to handle academic histories digitally.
          </p>
          <div className="mt-4 p-4 bg-accent/5 border border-accent/20 rounded-lg text-base">
            <strong>Note:</strong> This project utilized a simulated Fayda system for demonstration purposes and does not integrate with the real national Fayda infrastructure.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">The Problem</h2>
          <p>
            Traditional paper-based academic records are susceptible to loss, damage, and forgery. For institutions, issuing and manually verifying these documents is highly inefficient. For students, sharing verified credentials with employers or other institutions is often slow and cumbersome.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">The Solution</h2>
          <p>
            We developed a digital platform that replaces paper records with secure digital credentials. It provides administrators with tools to issue degrees and manage student histories, while giving students a self-service portal to share documents securely. Employers can instantly verify these credentials using a QR-based verification portal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">System Architecture</h2>
          <p>
            The application is built on a modern stack comprising a React frontend and a Node.js/Express backend. Data is stored securely in a PostgreSQL database hosted via Supabase, ensuring relational integrity for complex academic data structures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">My Role</h2>
          <p className="mb-4">
            Working within a team of four, I took the lead on <strong>System Design & Backend Development</strong>. My core responsibilities included:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Designing the overall system architecture and database schema.</li>
            <li>Making key technology stack decisions.</li>
            <li>Developing the REST API and core backend services.</li>
            <li>Implementing the role-based authorization system.</li>
            <li>Building audit trail features to track record modifications.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Key Contributions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-surface p-6 rounded-xl border border-border">
              <h3 className="font-bold text-text-primary mb-2">Role-Based Access</h3>
              <p className="text-base">Implemented a robust role-based authorization system to ensure strict separation of concerns between Students, Administrators, and Verifiers.</p>
            </div>
            <div className="bg-bg-surface p-6 rounded-xl border border-border">
              <h3 className="font-bold text-text-primary mb-2">Audit Trail</h3>
              <p className="text-base">Built comprehensive audit logging to track when and by whom academic records were created, modified, or accessed, ensuring system accountability.</p>
            </div>
            <div className="bg-bg-surface p-6 rounded-xl border border-border">
              <h3 className="font-bold text-text-primary mb-2">Digital Credentials</h3>
              <p className="text-base">Designed the backend workflow for generating and securely storing digital degrees linked to specific student profiles.</p>
            </div>
            <div className="bg-bg-surface p-6 rounded-xl border border-border">
              <h3 className="font-bold text-text-primary mb-2">Verification API</h3>
              <p className="text-base">Developed the endpoint logic for the QR-based verification system, allowing instant validation of credential authenticity.</p>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
