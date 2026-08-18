import { twMerge } from 'tailwind-merge';

export default function Tag({ children, className }) {
  return (
    <span
      className={twMerge(
        'px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 cursor-default',
        'bg-bg-primary/60 text-text-secondary border-border/60',
        'hover:border-accent/40 hover:text-accent hover:shadow-[0_0_8px_rgba(16,185,129,0.15)]',
        className
      )}
    >
      {children}
    </span>
  );
}
