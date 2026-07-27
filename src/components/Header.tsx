'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Languages, Menu, X } from 'lucide-react';
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
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isNl = pathname === '/nl' || pathname.startsWith('/nl/');
  const paths = languagePaths(pathname);

  useEffect(() => {
    document.documentElement.lang = isNl ? 'nl' : 'en';
    setMobileMenuOpen(false);
  }, [isNl, pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <nav
        aria-label={isNl ? 'Hoofdnavigatie' : 'Main navigation'}
        className="mx-auto flex max-w-7xl flex-wrap items-center px-5 py-2.5 lg:flex-nowrap lg:justify-between lg:px-8 lg:py-4"
      >
        <div className="flex w-full items-center gap-2 lg:hidden">
          <button
            aria-controls="mobile-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen
                ? isNl
                  ? 'Menu sluiten'
                  : 'Close menu'
                : isNl
                  ? 'Menu openen'
                  : 'Open menu'
            }
            className="grid h-10 w-10 shrink-0 place-items-center rounded-card border border-border bg-card text-text transition hover:border-steel hover:text-steel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setMobileMenuOpen((open) => !open)}
            type="button"
          >
            {mobileMenuOpen ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>

          <Link
            className="flex min-w-0 flex-1 items-center gap-2 font-semibold text-text"
            href={isNl ? '/nl/' : '/'}
          >
            <img
              alt="Core Solutions logo"
              className="h-9 w-9 shrink-0 object-contain"
              src={assetPath('/images/core-solutions-logo.png')}
            />
            <span className="truncate text-sm tracking-[0.01em]">Core Solutions</span>
          </Link>

          <label className="relative flex h-10 shrink-0 items-center rounded-card border border-border bg-card pl-2 text-steel">
            <Languages aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">{isNl ? 'Taal kiezen' : 'Choose language'}</span>
            <select
              aria-label={isNl ? 'Taal kiezen' : 'Choose language'}
              className="h-full appearance-none bg-transparent py-1 pl-1.5 pr-6 text-xs font-bold text-text outline-none"
              onChange={(event) => router.push(event.target.value)}
              value={isNl ? paths.dutch : paths.english}
            >
              <option value={paths.english}>EN</option>
              <option value={paths.dutch}>NL</option>
            </select>
            <span aria-hidden="true" className="pointer-events-none absolute right-2 text-[10px]">
              ▾
            </span>
          </label>
        </div>

        {mobileMenuOpen ? (
          <div
            className="mt-2 grid w-full gap-1 border-t border-border pt-2 lg:hidden"
            id="mobile-navigation"
          >
            {navItems[isNl ? 'nl' : 'en'].map((item) => (
              <Link
                className="rounded-card px-3 py-2.5 text-sm font-semibold text-muted transition hover:bg-card hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}

        <div className="hidden w-full items-center justify-between lg:flex">
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

          <div className="flex items-center gap-2">
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
        </div>
      </nav>
    </header>
  );
}
