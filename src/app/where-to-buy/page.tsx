import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { SplitCta } from '@/components/SplitCta';
import { WhereToBuyExplorer } from '@/components/WhereToBuyExplorer';

export const metadata: Metadata = {
  title: 'Where to Buy',
  description:
    'Find where to buy Core Solutions product brands online and through selected retail points.',
  alternates: {
    canonical: '/where-to-buy/',
    languages: { en: '/where-to-buy/', nl: '/nl/where-to-buy/' },
  },
  openGraph: {
    title: 'Where to Buy | Core Solutions',
    description: 'Filter by brand and country to find online channels and selected retail points.',
    url: '/where-to-buy/',
  },
};

export default function WhereToBuyPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Where to buy"
          title="Find Core Solutions brands online and nearby"
          description="Filter by brand and country, explore online marketplaces, or find the nearest selected physical retailer on an interactive map."
        />
        <p className="mt-6 rounded-card border border-border bg-card p-5 text-sm leading-6 text-muted">
          PillenPopper® is still being prepared for launch.{' '}
          <Link className="font-semibold text-steel hover:text-primary" href="/portfolio/pillenpopper/">
            View its current status and collaboration opportunities.
          </Link>
        </p>
        <div className="mt-10">
          <WhereToBuyExplorer />
        </div>
      </section>
      <SplitCta />
    </>
  );
}
