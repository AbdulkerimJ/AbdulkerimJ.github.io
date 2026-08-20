import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const links = [
  { name: 'About', href: '/#about', id: 'about' },
  { name: 'Projects', href: '/#projects', id: 'projects' },
  { name: 'Experience', href: '/#experience', id: 'experience' },
  { name: 'Contact', href: '/#contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!isHome) {
        setActiveSection('');
        return;
      }

      // Check which section is currently in view
      const scrollPosition = window.scrollY + 220;
      const sectionIds = ['contact', 'experience', 'projects', 'about'];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }

      // If above all sections (in Hero)
      setActiveSection('');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const handleClick = (e, href) => {
    if (isHome && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.slice(2);
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <header className={twMerge(
      'fixed top-0 w-full z-50 transition-all duration-500',
      scrolled
        ? 'py-3 bg-[rgba(9,9,11,0.85)] backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
        : 'py-5 bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="font-bold text-text-primary text-lg tracking-tight group-hover:text-accent transition-colors duration-300">
            Abdulkerim
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => {
            const isActive = isHome && activeSection === l.id;
            return (
              <Link
                key={l.name}
                to={l.href}
                onClick={e => handleClick(e, l.href)}
                className={twMerge(
                  'relative px-4 py-2 text-sm font-medium transition-all duration-200 group rounded-lg',
                  isActive
                    ? 'text-accent bg-accent/10 font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                )}
              >
                {l.name}
                <span
                  className={twMerge(
                    'absolute bottom-1 left-4 right-4 h-0.5 bg-accent transition-all duration-300 origin-left rounded-full',
                    isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  )}
                />
              </Link>
            );
          })}
          <div className="w-px h-5 bg-white/10 mx-2" />
          <a
            href="https://github.com/AbdulkerimJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-bright px-4 py-2 rounded-lg border border-accent/20 hover:border-accent/40 hover:bg-accent/10 transition-all duration-200"
          >
            GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/[0.06] transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[rgba(9,9,11,0.97)] backdrop-blur-2xl border-b border-white/[0.06]">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map(l => {
              const isActive = isHome && activeSection === l.id;
              return (
                <Link
                  key={l.name}
                  to={l.href}
                  onClick={e => handleClick(e, l.href)}
                  className={twMerge(
                    'px-4 py-3 rounded-xl font-medium transition-all',
                    isActive
                      ? 'text-accent bg-accent/10 font-bold border-l-2 border-accent pl-3.5'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                  )}
                >
                  {l.name}
                </Link>
              );
            })}
            <a
              href="https://github.com/AbdulkerimJ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 px-4 py-3 rounded-xl text-accent font-semibold border border-accent/20 hover:bg-accent/10 transition-all"
            >
              GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
