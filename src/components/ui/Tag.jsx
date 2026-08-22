import { twMerge } from 'tailwind-merge';

export default function Tag({ children, className, size = 'md' }) {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px]',
    md: 'px-3 py-1 text-xs',
  };

  return (
    <span
      className={twMerge(
        'inline-flex items-center font-semibold rounded-lg border transition-all duration-200 cursor-default',
        'bg-white/[0.04] text-text-secondary border-white/[0.07]',
        'hover:border-accent/40 hover:text-accent hover:bg-accent/5',
        'active:border-accent/40 active:text-accent active:bg-accent/10 active:scale-95',
        sizeClasses[size] || sizeClasses.md,
        className
      )}
    >
      {children}
    </span>
  );
}
