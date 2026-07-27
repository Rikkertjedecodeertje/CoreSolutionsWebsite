import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description: 'Tijdelijke pagina voor het privacybeleid van Core Solutions.',
  alternates: {
    canonical: '/nl/privacy-policy/',
    languages: { en: '/privacy-policy/', nl: '/nl/privacy-policy/' },
  },
  openGraph: {
    title: 'Privacybeleid | Core Solutions',
    description: 'Tijdelijke pagina voor het privacybeleid van Core Solutions.',
    url: '/nl/privacy-policy/',
    locale: 'nl_NL',
  },
};

export default function DutchPrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Juridisch"
        title="Privacybeleid"
        description="Deze pagina is een tijdelijke plek voor het definitieve privacybeleid van Core Solutions."
      />
      <div className="mt-8 rounded-card border border-border bg-card p-6 text-sm leading-7 text-muted">
        <p>
          Voeg hier vóór de definitieve lancering het privacybeleid toe, inclusief de verwerking
          van contactmails, analytics, cookies en eventuele toekomstige formulieren.
        </p>
      </div>
    </section>
  );
}
