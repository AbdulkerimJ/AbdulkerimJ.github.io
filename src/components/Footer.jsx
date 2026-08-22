import { Mail } from 'lucide-react';
import GithubIcon from '@/components/ui/GithubIcon';

export default function Footer() {
  return (
    <footer className="relative">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 relative z-10">

        {/* Left */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div>
            <p className="font-bold text-text-primary text-sm">Abdulkerim Jemal</p>
            <p className="text-text-muted text-xs mt-0.5">Software Engineer & Full-Stack Developer</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/AbdulkerimJ"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-text-muted hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/20 transition-all duration-200"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:abdulkerimjemal.dev@gmail.com"
            className="p-2.5 rounded-xl text-text-muted hover:text-accent hover:bg-accent/10 border border-transparent hover:border-accent/20 transition-all duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <div className="w-px h-5 bg-white/10 mx-2" />
          <p className="text-text-muted text-xs">© {new Date().getFullYear()} Abdulkerim Jemal</p>
        </div>
      </div>
    </footer>
  );
}
