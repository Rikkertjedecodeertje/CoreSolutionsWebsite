import Link from 'next/link';
import { assetPath } from '@/lib/sitePath';

type IconName = 'mail' | 'id' | 'location' | 'linkedin';

function Icon({ name }: { name: IconName }) {
  const common = {
    className: 'h-4 w-4',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 2,
    viewBox: '0 0 24 24',
  };

  if (name === 'mail') {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === 'id') {
    return (
      <svg aria-hidden="true" {...common}>
        <rect height="14" rx="2" width="18" x="3" y="5" />
        <path d="M7 10h4" />
        <path d="M7 14h8" />
        <path d="M15 10h2" />
      </svg>
    );
  }

  if (name === 'location') {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.98H3.88V20h3.06V8.98ZM5.41 4a1.78 1.78 0 1 0 0 3.56A1.78 1.78 0 0 0 5.41 4Zm15.02 9.7c0-3.05-1.63-4.47-3.8-4.47a3.27 3.27 0 0 0-2.96 1.63h-.04V8.98h-2.94V20h3.06v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.06v-6.3h-.21Z" />
    </svg>
  );
}

const footerGroups = [
  {
    title: 'Company',
    links: [
      { href: '/about/', label: 'About' },
      { href: '/contact/', label: 'Contact' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { href: '/portfolio/iheel/', label: 'iHeel® pads' },
      { href: '/portfolio/batbox-battery-tester/', label: 'BATBOX® Tester' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy/', label: 'Privacy Policy' },
      { href: '/terms-and-conditions/', label: 'Terms and Conditions' },
      { href: '/cookie-policy/', label: 'Cookie Policy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_2fr]">
          <div>
            <div className="flex items-center gap-4">
              <img
                alt="Core Solutions logo"
                className="h-14 w-14 rounded-full object-contain"
                src={assetPath('/images/core-solutions-logo.png')}
              />
              <div className="text-left">
                <p className="text-lg font-semibold text-text">Core Solutions</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
                  Product Development Studio & Brand Portfolio
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-muted">
              <p className="flex items-center gap-3">
                <Icon name="mail" />
                <a className="hover:text-primary" href="mailto:contact@coresolutionsglobal.com">
                  contact@coresolutionsglobal.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Icon name="id" />
                <span>KvK: 78279070</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="mt-0.5">
                  <Icon name="location" />
                </span>
                <span>
                  The Hague, Netherlands
                  <span className="mt-1 block text-xs text-muted/70">Not a visitor address.</span>
                </span>
              </p>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-6 text-muted">
              Product information is for general informational purposes. Availability and
              specifications may change.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="font-semibold text-text">{group.title}</p>
                <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
                  {group.links.map((link) => (
                    <Link className="hover:text-primary" href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="font-semibold text-text">Connect</p>
              <a
                aria-label="LinkedIn profile of Rik van Wieren"
                className="mt-3 inline-grid h-10 w-10 place-items-center rounded-card border border-border text-muted transition hover:border-primary hover:text-primary"
                href="https://www.linkedin.com/in/rikvwieren/"
              >
                <Icon name="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-5 text-sm text-muted">
          © 2026 Core Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

