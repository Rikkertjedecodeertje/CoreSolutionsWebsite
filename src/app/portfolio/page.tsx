import type { Metadata } from 'next';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeader } from '@/components/SectionHeader';
import { SplitCta } from '@/components/SplitCta';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore the product brands developed and commercialized by Core Solutions.',
  openGraph: {
    title: 'Portfolio | Core Solutions',
    description: 'Explore the product brands developed and commercialized by Core Solutions.',
    url: '/portfolio/',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          description="Explore the product brands developed and commercialized by Core Solutions."
          eyebrow="Current brands"
          title="Portfolio"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <SplitCta />
    </>
  );
}
