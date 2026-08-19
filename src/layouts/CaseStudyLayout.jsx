import { Link, Outlet } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudyLayout() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-accent transition-colors duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to projects
        </Link>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-32">
        <Outlet />
      </div>
    </>
  );
}
