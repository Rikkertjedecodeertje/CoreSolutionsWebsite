import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { SplitCta } from '@/components/SplitCta';
import { WhereToBuyExplorer } from '@/components/WhereToBuyExplorer';

export const metadata: Metadata = {
  title: 'Waar te koop',
  description:
    'Vind waar je Core Solutions-productmerken online en bij geselecteerde fysieke verkooppunten kunt kopen.',
  alternates: {
    canonical: '/nl/where-to-buy/',
    languages: { en: '/where-to-buy/', nl: '/nl/where-to-buy/' },
  },
  openGraph: {
    title: 'Waar te koop | Core Solutions',
    description:
      'Filter op merk en land om online verkoopkanalen en geselecteerde fysieke verkooppunten te vinden.',
    url: '/nl/where-to-buy/',
    locale: 'nl_NL',
  },
};

export default function DutchWhereToBuyPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Waar te koop"
          title="Vind Core Solutions-merken online en bij jou in de buurt"
          description="Filter op merk en land, bekijk online marketplaces of vind de dichtstbijzijnde geselecteerde winkel op de interactieve kaart."
        />
        <div className="mt-10">
          <WhereToBuyExplorer locale="nl" />
        </div>
      </section>
      <SplitCta locale="nl" />
    </>
  );
}
