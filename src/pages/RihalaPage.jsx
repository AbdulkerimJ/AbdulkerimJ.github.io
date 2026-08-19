import { projects } from '@/data/projects';
import Tag from '@/components/ui/Tag';
import { ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import PageMeta from '@/components/PageMeta';

export default function RihalaPage() {
  const project = projects.find(p => p.id === 'rihala');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="animate-fade-in-up">
      <PageMeta title={project.name} description={project.description} />
      {/* Header */}
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

        {project.liveUrl && (
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors"
          >
            Visit Live Demo <ArrowUpRight className="w-5 h-5" />
          </a>
        )}
      </header>

      {/* Main Image */}
      <div className="rounded-2xl overflow-hidden border border-border mb-16 bg-border/20 aspect-video flex items-center justify-center">
        {project.screenshot ? (
          <img src={project.screenshot} alt="Rihala Dashboard" className="w-full h-full object-contain" onError={(e) => e.target.style.display = 'none'} />
        ) : (
          <span className="text-text-secondary">Screenshot coming soon</span>
        )}
      </div>

      {/* Content Sections */}
      <div className="space-y-16 text-lg text-text-secondary leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Overview</h2>
          <p>
            Rihala is a comprehensive, full-stack management system tailored specifically for furniture workshops. It centralizes and digitizes day-to-day operations, bringing structure to previously manual processes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">The Problem</h2>
          <p>
            Furniture workshops often rely on paper records or basic spreadsheets to track everything from raw material purchases to customer orders and worker payments. This manual tracking is error-prone, makes it difficult to understand true profitability, and lacks the proper access controls needed for different staff roles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">The Solution</h2>
          <p>
            I built Rihala to provide a unified platform that handles the complete workshop lifecycle. It allows owners to track expenses, manage workers, process purchases from suppliers, and fulfill customer orders in one place, backed by robust authentication and authorization.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">My Role</h2>
          <p>
            As a solo project, I was responsible for the entire software development lifecycle. This included:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Designing the system architecture and database schema.</li>
            <li>Developing a secure RESTful API with Node.js and Express.</li>
            <li>Implementing authentication and Role-Based Access Control (RBAC).</li>
            <li>Building a responsive, dynamic frontend using React and Tailwind CSS.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-surface p-6 rounded-xl border border-border">
              <h3 className="font-bold text-text-primary mb-2">Purchasing Workflow</h3>
              <p className="text-base">A technically robust system for tracking raw material purchases from suppliers, managing inventory costs, and handling payment statuses.</p>
            </div>
            <div className="bg-bg-surface p-6 rounded-xl border border-border">
              <h3 className="font-bold text-text-primary mb-2">Order Management</h3>
              <p className="text-base">End-to-end tracking of customer orders, from initial deposit to final delivery and payment.</p>
            </div>
            <div className="bg-bg-surface p-6 rounded-xl border border-border">
              <h3 className="font-bold text-text-primary mb-2">RBAC & Security</h3>
              <p className="text-base">Secure JWT authentication with distinct roles (e.g., Owner, Manager) ensuring users only access authorized modules.</p>
            </div>
            <div className="bg-bg-surface p-6 rounded-xl border border-border">
              <h3 className="font-bold text-text-primary mb-2">Worker & Expense Tracking</h3>
              <p className="text-base">Modules for logging daily operational expenses and managing worker profiles and payments.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Architecture & Technical Decisions</h2>
          <p className="mb-4">
            The application follows a modular architecture separating business logic from route handlers. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Database:</strong> MongoDB with Mongoose was chosen for its flexibility in handling documents like orders and purchases which have varying line items.</li>
            <li><strong>Validation:</strong> Zod is used extensively on the backend to validate incoming payloads and ensure data integrity before database insertion.</li>
            <li><strong>Frontend:</strong> React paired with Vite ensures a fast development cycle and optimized production build, while Tailwind CSS handles the design system.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Challenges & Lessons Learned</h2>
          <p>
            Designing the purchasing workflow was particularly challenging. It required careful state management on the frontend and transaction-like logic on the backend to ensure that supplier balances, inventory records, and payment logs remained perfectly synchronized. This project significantly deepened my understanding of data modeling and API design for complex business logic.
          </p>
        </section>

      </div>
    </article>
  );
}
