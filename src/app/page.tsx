import type { Metadata } from 'next';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { MetricCard } from '@/components/MetricCard';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { SplitCta } from '@/components/SplitCta';
import { editableMetrics, mediaHighlights, projects } from '@/data/projects';
import { assetPath } from '@/lib/sitePath';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { en: '/', nl: '/nl/' },
  },
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-16 lg:px-8">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase text-steel">Product portfolio</p>
            <h1 className="hero-title max-w-4xl font-semibold text-text">
              Creating physical products in a digital-first world.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Core Solutions exists to turn everyday problems into useful products people can actually use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/portfolio/">View portfolio</ButtonLink>
              <ButtonLink href="/contact/" variant="secondary">Contact</ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-border bg-card shadow-soft">
            <img
              alt="Core Solutions product portfolio with shoes, heel pad and BATBOX battery tester"
              className="h-full min-h-80 w-full object-cover"
              src={assetPath('/images/core-solutions-products-hero.png')}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Portfolio" title="Featured product brands" />
          <Link className="font-semibold text-steel hover:text-primary" href="/portfolio/">View all</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionHeader
            eyebrow="Approach"
            title="From idea to market"
            description="Core Solutions brings product ideas from problem discovery to validation, design, testing, branding, production and commercialization. Each project starts with a practical problem and is developed into a clear product proposition."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {editableMetrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          eyebrow="In the media"
          title="Coverage, mentions and product stories"
          description="A curated place for articles, interviews, videos and public mentions that build credibility around the Core Solutions portfolio."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mediaHighlights.map((item) => (
            <article className="rounded-card border border-border bg-card p-5" key={item.title}>
              <h3 className="font-semibold text-text">{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <SplitCta />
    </>
  );
}
