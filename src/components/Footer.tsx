import Link from 'next/link';
import { Building2, Mail, MapPin } from 'lucide-react';
import { LinkedInIcon } from '@/components/LinkedInIcon';
import { assetPath } from '@/lib/sitePath';

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
    <footer className="footer-sheen border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex items-center gap-4 border-b border-text/15 pb-10 sm:gap-7">
          <img
            alt="Core Solutions logo"
            className="h-20 w-20 shrink-0 object-contain sm:h-28 sm:w-28"
            src={assetPath('/images/core-solutions-logo.png')}
          />
          <div aria-hidden="true" className="h-20 w-px shrink-0 bg-steel/60 sm:h-24" />
          <div className="min-w-0">
            <p className="text-3xl font-medium leading-none text-text sm:text-5xl">Core Solutions</p>
            <p className="mt-3 text-[11px] font-medium tracking-[0.06em] text-graphite sm:text-base sm:tracking-[0.08em]">
              Physical Product Studio &amp; Brand Portfolio
            </p>
          </div>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <div className="space-y-4 text-sm text-graphite">
              <a
                className="flex items-center gap-3 transition hover:text-primary"
                href="mailto:contact@coresolutionsglobal.com"
              >
                <Mail aria-hidden="true" className="h-4 w-4 text-secondary" />
                contact@coresolutionsglobal.com
              </a>
              <p className="flex items-center gap-3">
                <Building2 aria-hidden="true" className="h-4 w-4 text-secondary" />
                KvK: 78279070
              </p>
              <p className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 text-secondary" />
                <span>
                  The Hague, Netherlands
                  <span className="mt-1 block text-xs text-muted">Not a visitor address.</span>
                </span>
              </p>
            </div>
            <p className="mt-7 max-w-md text-xs leading-6 text-muted">
              Product information is for general informational purposes. Availability and
              specifications may change.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="font-semibold text-text">{group.title}</p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-muted">
                  {group.links.map((link) => (
                    <Link className="transition hover:text-primary" href={link.href} key={link.href}>
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
                className="mt-4 inline-grid h-11 w-11 place-items-center rounded-card bg-primary text-white transition hover:bg-steel"
                href="https://www.linkedin.com/in/rikvwieren/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-text/15 pt-5 text-sm text-muted">
          © 2026 Core Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
