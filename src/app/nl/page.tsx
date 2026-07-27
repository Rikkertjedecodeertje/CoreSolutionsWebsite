import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { MetricCard } from '@/components/MetricCard';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { SplitCta } from '@/components/SplitCta';
import { editableMetricsNl, mediaHighlightsNl, projectsNl } from '@/data/projects.nl';
import { assetPath } from '@/lib/sitePath';

export const metadata: Metadata = {
  title: 'Praktische productoplossingen',
  description:
    'Core Solutions ontwikkelt en commercialiseert praktische productmerken, waaronder iHeel® en BATBOX®.',
  alternates: {
    canonical: '/nl/',
    languages: { en: '/', nl: '/nl/' },
  },
  openGraph: {
    title: 'Core Solutions | Praktische productoplossingen',
    description:
      'Core Solutions ontwikkelt en commercialiseert praktische productmerken, waaronder iHeel® en BATBOX®.',
    url: '/nl/',
    locale: 'nl_NL',
  },
};

export default function DutchHomePage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16 lg:px-8">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase text-steel">Productportfolio</p>
            <h1 className="hero-title max-w-4xl font-semibold text-text">
              Fysieke producten creëren in een digital-first wereld.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Core Solutions vertaalt alledaagse problemen naar bruikbare producten die mensen
              echt kunnen gebruiken.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/nl/portfolio/">Bekijk portfolio</ButtonLink>
              <ButtonLink href="/nl/contact/" variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-border bg-card shadow-soft">
            <img
              alt="Core Solutions-productportfolio met schoenen, hielpad en BATBOX-batterijtester"
              className="h-full min-h-80 w-full object-cover"
              src={assetPath('/images/core-solutions-products-hero.png')}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Portfolio" title="Uitgelichte productmerken" />
          <Link className="font-semibold text-steel hover:text-primary" href="/nl/portfolio/">
            Bekijk alles
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projectsNl.map((project) => (
            <ProjectCard key={project.slug} locale="nl" project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            eyebrow="Aanpak"
            title="Van idee naar markt"
            description="Core Solutions brengt productideeën van probleemonderzoek naar validatie, ontwerp, testen, merkontwikkeling, productie en commercialisatie. Ieder project begint met een praktisch probleem en groeit uit tot een heldere productpropositie."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {editableMetricsNl.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          eyebrow="In de media"
          title="Aandacht, vermeldingen en productverhalen"
          description="Een samengestelde plek voor artikelen, interviews, video’s en openbare vermeldingen die de geloofwaardigheid van het Core Solutions-portfolio versterken."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mediaHighlightsNl.map((item) => (
            <article className="rounded-card border border-border bg-card p-5" key={item.title}>
              <h3 className="font-semibold text-text">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <SplitCta locale="nl" />
    </>
  );
}
