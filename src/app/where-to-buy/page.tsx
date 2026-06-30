import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { SplitCta } from '@/components/SplitCta';
import { WhereToBuyExplorer } from '@/components/WhereToBuyExplorer';

export const metadata: Metadata = {
  title: 'Where to Buy',
  description:
    'Find where to buy Core Solutions product brands online and through selected retail points.',
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
          title="Find Core Solutions brands by country"
          description="Filter by brand and country to see online marketplaces, own webshop options and selected physical retail points."
        />
        <div className="mt-10">
          <WhereToBuyExplorer />
        </div>
      </section>
      <SplitCta />
    </>
  );
}
