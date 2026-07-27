import type { Metadata } from 'next';
import { Building2, Mail, MapPin } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { LinkedInIcon } from '@/components/LinkedInIcon';
import { assetPath } from '@/lib/sitePath';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met Core Solutions voor samenwerkingen, retailmogelijkheden en algemene vragen.',
  alternates: {
    canonical: '/nl/contact/',
    languages: { en: '/contact/', nl: '/nl/contact/' },
  },
  openGraph: {
    title: 'Contact | Core Solutions',
    description:
      'Neem rechtstreeks per e-mail contact op met Core Solutions voor retail- of samenwerkingsvragen.',
    url: '/nl/contact/',
    locale: 'nl_NL',
  },
};

export default function DutchContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
        <article className="grid overflow-hidden rounded-card border border-border bg-card shadow-soft sm:grid-cols-[220px_1fr]">
          <div className="bg-dark p-6 text-white">
            <img
              alt="Rik van Wieren"
              className="mx-auto aspect-square w-full max-w-[190px] rounded-full object-cover sm:max-w-[200px] lg:max-w-[200px]"
              src={assetPath('/images/rik-van-wieren-profile.png')}
            />
            <h2 className="mt-5 text-xl font-semibold">Rik van Wieren</h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-secondary">
              Oprichter @ Core Solutions
            </p>
          </div>

          <div className="flex flex-col justify-between p-7 sm:p-9">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Contact</p>
              <h1 className="mt-4 text-4xl font-semibold text-text sm:text-5xl">
                Neem contact op
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
                Neem voor samenwerkingen, retailmogelijkheden en algemene vragen rechtstreeks
                contact op met Rik van Wieren.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="mailto:contact@coresolutionsglobal.com?subject=Core%20Solutions%20vraag">
                <Mail aria-hidden="true" className="mr-2 h-4 w-4" />
                E-mail Rik van Wieren
              </ButtonLink>
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-card border border-border bg-background px-5 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
                href="https://www.linkedin.com/in/rikvwieren/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon className="h-4 w-4" />
                Verbinden via LinkedIn
              </a>
            </div>
          </div>
        </article>

        <aside className="flex h-full flex-col justify-between rounded-card border border-border bg-background p-7">
          <div>
            <div className="flex items-center gap-4">
              <img
                alt=""
                className="h-16 w-16 object-contain"
                src={assetPath('/images/core-solutions-logo.png')}
              />
              <div aria-hidden="true" className="h-16 w-[2px] shrink-0 bg-graphite" />
              <div>
                <h2 className="text-2xl font-semibold text-text">Core Solutions</h2>
                <p className="mt-1 text-xs font-medium uppercase leading-5 tracking-[0.1em] text-muted">
                  Fysieke productstudio &amp; merkenportfolio
                </p>
              </div>
            </div>
            <dl className="mt-8 space-y-5 text-sm">
              <div className="flex gap-3">
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 text-secondary" />
                <div>
                  <dt className="font-semibold text-text">E-mail</dt>
                  <dd className="mt-1 text-muted">
                    <a className="hover:text-primary" href="mailto:contact@coresolutionsglobal.com">
                      contact@coresolutionsglobal.com
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Building2 aria-hidden="true" className="mt-0.5 h-4 w-4 text-secondary" />
                <div>
                  <dt className="font-semibold text-text">KvK</dt>
                  <dd className="mt-1 text-muted">78279070</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 text-secondary" />
                <div>
                  <dt className="font-semibold text-text">Gevestigd in</dt>
                  <dd className="mt-1 text-muted">Den Haag, Nederland</dd>
                </div>
              </div>
            </dl>
          </div>
          <p className="mt-8 border-t border-border pt-5 text-xs leading-6 text-muted">
            Vragen over producten, retail en samenwerkingen zijn welkom.
          </p>
        </aside>
      </div>

      <div className="mt-8 overflow-hidden rounded-card border border-border bg-card shadow-sm">
        <div className="grid md:grid-cols-[0.72fr_1.28fr] md:items-stretch">
          <div className="flex flex-col justify-center p-7">
            <div className="flex items-center gap-3 text-secondary">
              <MapPin aria-hidden="true" className="h-5 w-5" />
              <p className="text-xs font-bold uppercase tracking-[0.16em]">
                Den Haag, Nederland
              </p>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-text">
              Core Solutions opereert vanuit Den Haag.
            </h2>
          </div>
          <img
            alt="Skyline van Den Haag"
            className="h-72 w-full object-cover md:h-full"
            src={assetPath('/images/the-hague-skyline.png')}
          />
        </div>
      </div>
    </section>
  );
}
