import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { LinkedInIcon } from '@/components/LinkedInIcon';
import { HowWeWorkSystem, WhatWeDoSystem } from '@/components/ProcessSystems';
import { SplitCta } from '@/components/SplitCta';
import { assetPath } from '@/lib/sitePath';

export const metadata: Metadata = {
  title: 'Over ons',
  description:
    'Core Solutions is het product- en merkenportfolio van Rik van Wieren, gericht op praktische consumentenproducten.',
  alternates: {
    canonical: '/nl/about/',
    languages: { en: '/about/', nl: '/nl/about/' },
  },
  openGraph: {
    title: 'Over ons | Core Solutions',
    description:
      'Lees hoe Core Solutions praktische productmerken ontwikkelt vanuit echte alledaagse problemen.',
    url: '/nl/about/',
    locale: 'nl_NL',
  },
};

const story = [
  {
    label: 'De studio',
    text: 'Core Solutions is het product- en merkenportfolio van Rik van Wieren. Het bedrijf richt zich op praktische consumentenproducten die vanuit echte gebruikersproblemen worden ontworpen, in de markt worden getest en online en fysiek worden gecommercialiseerd.',
  },
  {
    label: 'Vroege start',
    text: 'Rik begon op zijn veertiende met ondernemen uit frustratie over dure USB-C-kabels. Een eerste leveranciersbestelling van €80 leerde hem over inkoop, prijsstelling, klantfeedback en het verkopen van producten die mensen echt nodig hebben.',
  },
  {
    label: 'Affiniteit met zorg',
    text: 'Tijdens de coronaperiode ontwikkelde Rik Neusbruggetje, een praktisch hulpmiddel om beslagen brillen bij het dragen van een mondkapje te verminderen. De respons bracht hem in contact met de zorgsector en praktische problemen in kwetsbare omgevingen.',
  },
  {
    label: 'Richting',
    text: 'Dat perspectief leidde later tot onderzoek naar circulairder plasticgebruik in de zorg. Het project werd gepauzeerd, maar maakte de richting van Core Solutions scherper: tastbare producten voor echte alledaagse problemen.',
  },
];

export default function DutchAboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Over ons</p>
          <h1 className="hero-title mt-4 font-semibold text-text">Core Solutions</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            Een fysieke productstudio en merkenportfolio rond bruikbare ideeën, echte feedback en
            duidelijke commerciële uitvoering.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-stretch">
            <div className="grid gap-4 sm:grid-cols-2">
              {story.map((item, index) => (
                <article
                  className="relative overflow-hidden rounded-card border border-border bg-background p-6"
                  key={item.label}
                >
                  <span className="absolute right-5 top-4 text-4xl font-light text-steel/20">
                    0{index + 1}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                    {item.label}
                  </p>
                  <p className="mt-5 leading-7 text-muted">{item.text}</p>
                </article>
              ))}
              <p className="rounded-card border border-secondary/30 bg-secondary/10 p-6 leading-7 text-text sm:col-span-2">
                Vandaag omvat het portfolio merken zoals iHeel® en BATBOX®. Ieder product wordt
                gebouwd rond praktisch gebruik, echte feedback en duidelijke commerciële uitvoering.
              </p>
            </div>

            <aside className="flex h-full flex-col justify-between rounded-card border border-text/10 bg-dark p-6 text-white shadow-soft">
              <div>
                <img
                  alt="Rik van Wieren, oprichter van Core Solutions"
                  className="mx-auto aspect-square w-full max-w-[190px] rounded-card object-cover sm:max-w-[220px] lg:max-w-none"
                  src={assetPath('/images/rik-van-wieren-profile.png')}
                />
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                  Oprichter
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Rik van Wieren</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">Oprichter @ Core Solutions</p>
              </div>
              <div className="mt-8 grid gap-3">
                <a
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-card border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-secondary hover:text-secondary"
                  href="https://www.linkedin.com/in/rikvwieren/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  Verbinden via LinkedIn
                </a>
                <ButtonLink
                  className="w-full border-secondary bg-secondary text-white hover:bg-secondary/85"
                  href="/nl/contact/"
                  variant="secondary"
                >
                  <Mail aria-hidden="true" className="mr-2 h-4 w-4" />
                  Contact met Rik
                </ButtonLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <WhatWeDoSystem locale="nl" />
        <HowWeWorkSystem locale="nl" />
      </div>

      <SplitCta locale="nl" />
    </>
  );
}
