'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Languages } from 'lucide-react';
import { assetPath } from '@/lib/sitePath';

const navItems = {
  en: [
    { href: '/', label: 'Home' },
    { href: '/portfolio/', label: 'Portfolio' },
    { href: '/where-to-buy/', label: 'Where to buy' },
    { href: '/about/', label: 'About' },
    { href: '/contact/', label: 'Contact' },
  ],
  nl: [
    { href: '/nl/', label: 'Home' },
    { href: '/nl/portfolio/', label: 'Portfolio' },
    { href: '/nl/where-to-buy/', label: 'Verkooppunten' },
    { href: '/nl/about/', label: 'Over ons' },
    { href: '/nl/contact/', label: 'Contact' },
  ],
};

function languagePaths(pathname: string) {
  const english = pathname === '/nl' || pathname === '/nl/' ? '/' : pathname.replace(/^\/nl/, '') || '/';
  const dutch = pathname.startsWith('/nl')
    ? pathname
    : pathname === '/'
      ? '/nl/'
      : `/nl${pathname}`;
  return { english, dutch };
}

export function Header() {
  const pathname = usePathname() || '/';
  const isNl = pathname === '/nl' || pathname.startsWith('/nl/');
  const paths = languagePaths(pathname);

  useEffect(() => {
    document.documentElement.lang = isNl ? 'nl' : 'en';
  }, [isNl]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <nav
        aria-label={isNl ? 'Hoofdnavigatie' : 'Main navigation'}
        className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8"
      >
        <Link
          className="flex items-center gap-3 font-semibold text-text"
          href={isNl ? '/nl/' : '/'}
        >
          <img
            alt="Core Solutions logo"
            className="h-11 w-11 object-contain"
            src={assetPath('/images/core-solutions-logo.png')}
          />
          <span className="text-base tracking-[0.02em]">Core Solutions</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {navItems[isNl ? 'nl' : 'en'].map((item) => (
            <Link
              className="rounded-card px-3 py-2 text-sm font-medium text-muted transition hover:bg-card hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}

          <div
            aria-label={isNl ? 'Taal kiezen' : 'Choose language'}
            className="ml-1 inline-flex items-center rounded-card border border-border bg-card p-1"
            role="group"
          >
            <Languages aria-hidden="true" className="mx-2 h-4 w-4 text-steel" />
            <Link
              aria-current={!isNl ? 'page' : undefined}
              className={`rounded-md px-2.5 py-1.5 text-xs font-bold transition ${
                !isNl ? 'bg-primary text-white' : 'text-muted hover:text-primary'
              }`}
              href={paths.english}
              hrefLang="en"
            >
              EN
            </Link>
            <Link
              aria-current={isNl ? 'page' : undefined}
              className={`rounded-md px-2.5 py-1.5 text-xs font-bold transition ${
                isNl ? 'bg-primary text-white' : 'text-muted hover:text-primary'
              }`}
              href={paths.dutch}
              hrefLang="nl"
            >
              NL
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
