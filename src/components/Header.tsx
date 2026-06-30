import Link from 'next/link';
import { assetPath } from '@/lib/sitePath';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/where-to-buy/', label: 'Where to buy' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8"
      >
        <Link className="flex items-center gap-3 font-semibold text-text" href="/">
          <img
            alt="Core Solutions logo"
            className="h-10 w-10 rounded-full object-contain"
            src={assetPath('/images/core-solutions-logo.png')}
          />
          <span>Core Solutions</span>
        </Link>
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link
              className="rounded-card px-3 py-2 text-sm font-medium text-muted transition hover:bg-card hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

