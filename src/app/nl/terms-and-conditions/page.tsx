import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Algemene voorwaarden',
  description: 'Tijdelijke pagina voor de algemene voorwaarden van Core Solutions.',
  alternates: {
    canonical: '/nl/terms-and-conditions/',
    languages: { en: '/terms-and-conditions/', nl: '/nl/terms-and-conditions/' },
  },
  openGraph: {
    title: 'Algemene voorwaarden | Core Solutions',
    description: 'Tijdelijke pagina voor de algemene voorwaarden van Core Solutions.',
    url: '/nl/terms-and-conditions/',
    locale: 'nl_NL',
  },
};

export default function DutchTermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Juridisch"
        title="Algemene voorwaarden"
        description="Deze pagina is een tijdelijke plek voor de definitieve algemene voorwaarden van Core Solutions."
      />
      <div className="mt-8 rounded-card border border-border bg-card p-6 text-sm leading-7 text-muted">
        <p>
          Voeg hier vóór de definitieve lancering de juridische voorwaarden toe, vooral wanneer
          directe verkoop, groothandelsaanvragen of downloadbare materialen aan de website worden
          toegevoegd.
        </p>
      </div>
    </section>
  );
}
