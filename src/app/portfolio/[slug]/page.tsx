import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/ButtonLink';
import { FeatureList } from '@/components/FeatureList';
import { GalleryGrid } from '@/components/GalleryGrid';
import { MediaSection } from '@/components/MediaSection';
import { SalesChannelButton } from '@/components/SalesChannelButton';
import { SectionHeader } from '@/components/SectionHeader';
import { SplitCta } from '@/components/SplitCta';
import { getProjectBySlug, projects } from '@/data/projects';
import { assetPath } from '@/lib/sitePath';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) return {};

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url: `/portfolio/${project.slug}/`,
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

function IheelInfographic() {
  return (
    <div className="overflow-hidden rounded-card border border-border bg-background p-5">
      <svg className="h-auto w-full" viewBox="0 0 980 360" role="img" aria-label="iHeel benefits infographic">
        <rect width="980" height="360" rx="8" fill="#F6F5F2" />
        <rect x="40" y="42" width="900" height="276" rx="8" fill="#FFFFFF" stroke="#D8DDE1" />
        <path d="M155 238C155 158 220 93 300 93H665C682 93 692 113 681 126L553 278C525 311 484 330 441 330H241C193 330 155 291 155 238Z" fill="#E8EEEA" stroke="#4F6D8A" strokeWidth="8" />
        <path d="M245 231C245 185 283 147 329 147H562" stroke="#0D1B2A" strokeWidth="18" strokeLinecap="round" />
        <circle cx="720" cy="118" r="34" fill="#DCE4EA" />
        <circle cx="720" cy="203" r="34" fill="#E3EBE5" />
        <circle cx="720" cy="288" r="34" fill="#ECEDEB" />
        <text x="770" y="110" fill="#0D1B2A" fontSize="24" fontWeight="700">Improves heel fit</text>
        <text x="770" y="137" fill="#4F6D8A" fontSize="16">Self-adhesive pad placed inside the heel</text>
        <text x="770" y="195" fill="#0D1B2A" fontSize="24" fontWeight="700">Reduces slip and rubbing</text>
        <text x="770" y="222" fill="#4F6D8A" fontSize="16">Soft foam and fabric improve walking comfort</text>
        <text x="770" y="280" fill="#0D1B2A" fontSize="24" fontWeight="700">Discreet shoe protection</text>
        <text x="770" y="307" fill="#4F6D8A" fontSize="16">Helps protect the inner heel lining</text>
        <text x="710" y="126" textAnchor="middle" fill="#4F6D8A" fontSize="28" fontWeight="800">1</text>
        <text x="720" y="211" textAnchor="middle" fill="#6C8F7A" fontSize="28" fontWeight="800">2</text>
        <text x="720" y="296" textAnchor="middle" fill="#0D1B2A" fontSize="28" fontWeight="800">3</text>
      </svg>
    </div>
  );
}

function AchievementBand({ items }: { items: string[] }) {
  return (
    <div className="rounded-card border border-border bg-card p-6">
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((item, index) => (
          <div className="rounded-card border border-border bg-background p-5 text-center" key={item}>
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-secondary/10 text-2xl font-black text-primary">
              {index === 0 ? 'WIN' : index === 1 ? '9x' : index === 2 ? 'OMNI' : 'OK'}
            </div>
            <p className="mt-4 text-sm font-semibold leading-6 text-text">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const isIheel = project.slug === 'iheel';

  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1fr_0.9fr] md:items-center lg:px-8">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {[project.category, ...(project.extraTags ?? [])].map((tag) => (
                <span className="rounded-card border border-border bg-background px-3 py-1 text-xs font-semibold text-muted" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            {isIheel ? (
              <img className="h-20 w-auto max-w-full object-contain object-left" src={assetPath('/images/iheel-logo.svg')} alt="iHeel logo" />
            ) : (
              <h1 className="hero-title font-semibold text-text">{project.name}</h1>
            )}
            {project.status ? (
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">{project.status}</p>
            ) : null}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{project.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#sales-channels">Sales channels</ButtonLink>
              <ButtonLink href="/where-to-buy/" variant="secondary">Where to buy</ButtonLink>
              <ButtonLink href="/contact/" variant="secondary">Contact</ButtonLink>
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
          <h2 className="text-2xl font-semibold text-text">Problem</h2>
          <p className="mt-4 leading-7 text-muted">{project.problem}</p>
        </article>
        <article className="rounded-card border border-border bg-card p-6">
          <h2 className="text-2xl font-semibold text-text">Solution</h2>
          <p className="mt-4 leading-7 text-muted">{project.solution}</p>
        </article>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionHeader description={project.longDescription} eyebrow={project.shortName} title="Brand overview" />
          <div className="mt-8">
            {isIheel ? <IheelInfographic /> : <FeatureList columns items={project.features} />}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        {isIheel ? (
          <>
            <SectionHeader title="Achievements" />
            <div className="mt-8"><AchievementBand items={project.achievements} /></div>
          </>
        ) : (
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionHeader title="Target users" />
              <div className="mt-8"><FeatureList items={project.targetUsers} /></div>
            </div>
            <div>
              <SectionHeader title="Achievements" />
              <div className="mt-8"><FeatureList items={project.achievements} /></div>
            </div>
          </div>
        )}
      </section>

      <section className="border-y border-border bg-card" id="sales-channels">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionHeader
            description="Explore available sales channels, own webshop options and retail opportunities for this brand."
            title="Sales channels"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.salesChannels.map((channel) => (
              <SalesChannelButton channel={channel} key={channel.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader title="Gallery" />
        <div className="mt-8"><GalleryGrid items={project.gallery} /></div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <MediaSection mentions={project.mediaMentions} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
        <SectionHeader title="FAQ" />
        <div className="mt-8 divide-y divide-border rounded-card border border-border bg-card">
          {project.faqs.map((faq) => (
            <details className="group p-5" key={faq.question}>
              <summary className="cursor-pointer font-semibold text-text">{faq.question}</summary>
              <p className="mt-3 whitespace-pre-line leading-7 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <SplitCta />
    </>
  );
}

