import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'dark';
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) {
  const styles = {
    primary: 'bg-primary text-white border-primary hover:bg-steel',
    secondary: 'bg-card text-text border-border hover:border-primary hover:text-primary',
    dark: 'bg-text text-white border-text hover:bg-graphite',
  };

  const classes = `inline-flex min-h-11 items-center justify-center rounded-card border px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`;

  if (href.startsWith('mailto:') || href.startsWith('http') || href === '#') {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}

