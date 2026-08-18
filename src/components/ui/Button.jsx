import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  className,
  external = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary active:scale-[0.97]';

  const variants = {
    primary:
      'bg-accent hover:bg-accent-bright text-black font-bold px-6 py-3 hover:-translate-y-0.5 shadow-md hover:shadow-lg',
    secondary:
      'bg-border/50 hover:bg-border text-text-primary px-6 py-3 hover:-translate-y-0.5',
    outline:
      'border border-border hover:border-accent/60 text-text-secondary hover:text-text-primary px-6 py-3 hover:-translate-y-0.5 bg-bg-surface/40 backdrop-blur-sm',
  };

  const classes = twMerge(base, variants[variant], className);

  if (to) return <Link to={to} className={classes} onClick={onClick} {...props}>{children}</Link>;
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }
  return <button className={classes} onClick={onClick} {...props}>{children}</button>;
}
