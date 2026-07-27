import type { Metadata } from 'next';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { SplitCta } from '@/components/SplitCta';
import { projectsNl } from '@/data/projects.nl';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Bekijk de productmerken die Core Solutions ontwikkelt en commercialiseert.',
  alternates: {
    canonical: '/nl/portfolio/',
    languages: { en: '/portfolio/', nl: '/nl/portfolio/' },
  },
  openGraph: {
    title: 'Portfolio | Core Solutions',
    description: 'Bekijk de productmerken die Core Solutions ontwikkelt en commercialiseert.',
    url: '/nl/portfolio/',
    locale: 'nl_NL',
  },
};

export default function DutchPortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          description="Bekijk de productmerken die Core Solutions ontwikkelt en commercialiseert."
          eyebrow="Huidige merken"
          title="Portfolio"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projectsNl.map((project) => (
            <ProjectCard key={project.slug} locale="nl" project={project} />
          ))}
        </div>
      </section>
      <SplitCta locale="nl" />
    </>
  );
}
