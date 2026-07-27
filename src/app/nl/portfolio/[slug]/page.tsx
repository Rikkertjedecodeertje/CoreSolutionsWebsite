import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AchievementSystem, BrandOverviewSystem } from '@/components/BrandSystems';
import { ButtonLink } from '@/components/ButtonLink';
import { MediaSection } from '@/components/MediaSection';
import { SalesChannelButton } from '@/components/SalesChannelButton';
import { SectionHeader } from '@/components/SectionHeader';
import { SplitCta } from '@/components/SplitCta';
import { getProjectNlBySlug, projectsNl } from '@/data/projects.nl';
import { assetPath } from '@/lib/sitePath';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsNl.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectNlBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: {
      canonical: `/nl/portfolio/${project.slug}/`,
      languages: {
        en: `/portfolio/${project.slug}/`,
        nl: `/nl/portfolio/${project.slug}/`,
      },
    },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url: `/nl/portfolio/${project.slug}/`,
      locale: 'nl_NL',
      images: [
        {
          url: project.gallery[0]?.src ?? '/images/og-core-solutions.svg',
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default function DutchProjectPage({ params }: ProjectPageProps) {
  const project = getProjectNlBySlug(params.slug);
  if (!project) notFound();
  const isIheel = project.slug === 'iheel';
  const isBatbox = project.slug === 'batbox-battery-tester';

  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_0.9fr] md:items-center lg:px-8">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {[project.category, ...(project.extraTags ?? [])].map((tag) => (
                <span
                  className="rounded-card border border-border bg-background px-3 py-1 text-xs font-semibold text-muted"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            {isIheel ? (
              <img
                alt="iHeel logo"
                className="h-20 w-auto max-w-full object-contain object-left"
                src={assetPath('/images/iheel-logo.svg')}
              />
            ) : isBatbox ? (
              <div className="h-20 max-w-[300px] overflow-hidden">
                <img
                  alt="BATBOX logo"
                  className="h-20 w-[300px] origin-left -translate-x-10 scale-[1.28] object-contain object-left"
                  src={assetPath('/images/batbox-logo.svg')}
                />
              </div>
            ) : (
              <h1 className="hero-title font-semibold text-text">{project.name}</h1>
            )}
            {project.status ? (
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-steel">
                {project.status}
              </p>
            ) : null}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{project.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#sales-channels">Verkoopkanalen</ButtonLink>
              <ButtonLink href="/nl/where-to-buy/" variant="secondary">
                Waar te koop
              </ButtonLink>
              <ButtonLink href="/nl/contact/" variant="secondary">
                Contact
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-border bg-background">
            <img
              alt={project.gallery[0]?.alt ?? project.name}
              className="h-full min-h-80 w-full object-cover"
              src={assetPath(project.gallery[0]?.src ?? '/images/marketplace-placeholder.svg')}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-2 lg:px-8">
        <article className="rounded-card border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold text-text">Probleem</h2>
          <p className="mt-4 leading-7 text-muted">{project.problem}</p>
        </article>
        <article className="rounded-card border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold text-text">Oplossing</h2>
          <p className="mt-4 leading-7 text-muted">{project.solution}</p>
        </article>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionHeader
            description={project.longDescription}
            eyebrow={project.shortName}
            title="Merkoverzicht"
          />
          <div className="mt-8">
            <BrandOverviewSystem
              brand={isIheel ? 'iheel' : 'batbox-battery-tester'}
              locale="nl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader title="Prestaties" />
        <div className="mt-8">
          <AchievementSystem
            brand={isIheel ? 'iheel' : 'batbox-battery-tester'}
            items={project.achievements}
          />
        </div>
      </section>

      <section className="border-y border-border bg-card" id="sales-channels">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionHeader
            description="Bekijk beschikbare verkoopkanalen, de eigen webshop en retailmogelijkheden voor dit merk."
            title="Verkoopkanalen"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.salesChannels.map((channel) => (
              <SalesChannelButton channel={channel} key={channel.label} locale="nl" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <MediaSection locale="nl" mentions={project.mediaMentions} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <SectionHeader title="Veelgestelde vragen" />
        <div className="mt-8 divide-y divide-border rounded-card border border-border bg-card">
          {project.faqs.map((faq) => (
            <details className="group p-5" key={faq.question}>
              <summary className="cursor-pointer font-semibold text-text">{faq.question}</summary>
              <p className="mt-3 whitespace-pre-line leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <SplitCta locale="nl" />
    </>
  );
}
