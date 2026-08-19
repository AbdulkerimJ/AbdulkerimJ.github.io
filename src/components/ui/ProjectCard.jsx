import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Tag from './Tag';

function StatusDot({ color = 'accent' }) {
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
    </span>
  );
}

export default function ProjectCard({ project }) {
  const { name, title, status, type, description, stack, liveUrl, caseStudyPath, screenshot, featured } = project;

  if (featured) {
    return (
      <div className="group relative rounded-3xl overflow-hidden border border-white/[0.07] bg-bg-card/70 backdrop-blur-md transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.2),0_32px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(16,185,129,0.06)] hover:-translate-y-1.5 md:col-span-2">

          {/* Top reveal line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="grid md:grid-cols-[1.1fr_1fr]">
            {/* Image */}
            <div className="relative overflow-hidden min-h-[260px] md:min-h-[360px] bg-gradient-to-br from-bg-surface/60 to-bg-card flex items-center justify-center p-8 md:p-12">
              {screenshot && (
                <img
                  src={screenshot}
                  alt={`${name} preview`}
                  className="w-full h-full object-contain rounded-xl shadow-2xl border border-white/10 transition-all duration-700 group-hover:scale-[1.03] group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.25)] group-hover:border-accent/30"
                  onError={e => e.target.style.display = 'none'}
                />
              )}


              {/* Status badge over image */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-card/90 backdrop-blur-sm border border-white/10 text-xs font-bold text-text-secondary">
                <StatusDot />
                {status}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-text-muted mb-4">{type}</span>

              <h3 className="text-2xl md:text-3xl font-black text-text-primary mb-1 group-hover:text-accent-bright transition-colors duration-300">{name}</h3>
              <p className="text-sm font-semibold text-accent/80 mb-5">{title}</p>

              <p className="text-text-secondary text-sm leading-relaxed mb-7">{description}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {stack.map(t => (
                  <Tag key={t} size="sm">
                    {t}
                  </Tag>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to={caseStudyPath}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold bg-accent hover:bg-accent-bright text-black shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.97]"
                >
                  View Case Study
                </Link>
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
    );
  }

  /* ── Non-featured compact card ── */
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/[0.07] bg-bg-card/70 backdrop-blur-md flex flex-col transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.15),0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(16,185,129,0.06)] hover:-translate-y-1.5">

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-bg-surface/60 to-bg-card flex items-center justify-center p-5 sm:p-8">
        {screenshot && (
          <img
            src={screenshot}
            alt={`${name} preview`}
            className="w-full h-full object-contain rounded-lg shadow-xl border border-white/10 transition-all duration-700 group-hover:scale-[1.04] group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.2)] group-hover:border-accent/20"
            onError={e => e.target.style.display = 'none'}
          />
        )}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bg-card/90 backdrop-blur-sm border border-white/10 text-[10px] font-bold text-text-secondary">
          <StatusDot />
          {status}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-3">{type}</span>
        <h3 className="text-xl font-black text-text-primary mb-1 group-hover:text-accent-bright transition-colors duration-300">{name}</h3>
        <p className="text-xs font-semibold text-accent/70 mb-4">{title}</p>
        <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {stack.slice(0, 4).map(t => (
            <Tag key={t} size="sm">
              {t}
            </Tag>
          ))}
          {stack.length > 4 && (
            <Tag size="sm" className="text-text-muted">
              +{stack.length - 4}
            </Tag>
          )}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <Link
            to={caseStudyPath}
            className="flex-1 text-center px-4 py-2.5 rounded-xl text-sm font-bold border border-accent/25 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-200"
          >
            Case Study
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-white/[0.07] text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
