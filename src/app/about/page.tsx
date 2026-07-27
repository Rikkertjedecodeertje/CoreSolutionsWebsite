import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { LinkedInIcon } from '@/components/LinkedInIcon';
import { HowWeWorkSystem, WhatWeDoSystem } from '@/components/ProcessSystems';
import { SplitCta } from '@/components/SplitCta';
import { assetPath } from '@/lib/sitePath';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Core Solutions is the product and brand portfolio of Rik van Wieren, focused on practical consumer products.',
  alternates: {
    canonical: '/about/',
    languages: { en: '/about/', nl: '/nl/about/' },
  },
  openGraph: {
    title: 'About | Core Solutions',
    description:
      'Learn how Core Solutions develops practical product brands from real everyday problems.',
    url: '/about/',
  },
};

const story = [
  {
    label: 'The studio',
    text: 'Core Solutions is the product and brand portfolio of Rik van Wieren. The company focuses on practical consumer products that are designed around real user problems, tested in the market, and commercialized online and offline.',
  },
  {
    label: 'Early start',
    text: 'Rik started experimenting with entrepreneurship at 14 after becoming frustrated by expensive USB-C cables. A first €80 supplier batch taught him sourcing, pricing, customer feedback and selling products people actually need.',
  },
  {
    label: 'Healthcare affinity',
    text: 'During the COVID period, Rik developed Neusbruggetje, a practical aid designed to reduce fogged glasses while wearing a face mask. The response introduced him to the healthcare sector and practical problems in vulnerable environments.',
  },
  {
    label: 'Direction',
    text: 'That perspective later led to research into making plastic use in healthcare more circular. The project was paused, but it sharpened the direction behind Core Solutions: tangible products for real everyday problems.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">About</p>
          <h1 className="hero-title mt-4 font-semibold text-text">Core Solutions</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            A physical product studio and brand portfolio built around useful ideas, real feedback
            and clear commercial execution.
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
                Today, the portfolio includes brands such as iHeel® and BATBOX®, with each product
                built around practical use, real feedback and clear commercial execution.
              </p>
            </div>

            <aside className="flex h-full flex-col justify-between rounded-card border border-text/10 bg-dark p-6 text-white shadow-soft">
              <div>
                <img
                  alt="Rik van Wieren, founder of Core Solutions"
                  className="mx-auto aspect-square w-full max-w-[190px] rounded-full object-cover sm:max-w-[200px] lg:max-w-[200px]"
                  src={assetPath('/images/rik-van-wieren-profile.png')}
                />
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                  Founder
                </p>
                <h2 className="mt-2 text-2xl font-semibold">Rik van Wieren</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">Founder @ Core Solutions</p>
              </div>
              <div className="mt-8 grid gap-3">
                <a
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-card border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-secondary hover:text-secondary"
                  href="https://www.linkedin.com/in/rikvwieren/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
                <ButtonLink
                  className="w-full border-secondary bg-secondary text-white hover:bg-secondary/85"
                  href="/contact/"
                  variant="secondary"
                >
                  <Mail aria-hidden="true" className="mr-2 h-4 w-4" />
                  Contact Rik
                </ButtonLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl items-stretch gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <WhatWeDoSystem />
        <HowWeWorkSystem />
      </div>

      <SplitCta />
    </>
  );
}
