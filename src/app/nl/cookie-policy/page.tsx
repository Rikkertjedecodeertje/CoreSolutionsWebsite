import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Cookiebeleid',
  description: 'Tijdelijke pagina voor het cookiebeleid van Core Solutions.',
  alternates: {
    canonical: '/nl/cookie-policy/',
    languages: { en: '/cookie-policy/', nl: '/nl/cookie-policy/' },
  },
  openGraph: {
    title: 'Cookiebeleid | Core Solutions',
    description: 'Tijdelijke pagina voor het cookiebeleid van Core Solutions.',
    url: '/nl/cookie-policy/',
    locale: 'nl_NL',
  },
};

export default function DutchCookiePolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Juridisch"
        title="Cookiebeleid"
        description="Deze pagina is een tijdelijke plek voor het definitieve cookiebeleid van Core Solutions."
      />
      <div className="mt-8 rounded-card border border-border bg-card p-6 text-sm leading-7 text-muted">
        <p>
          De huidige site gebruikt geen analytics- of trackingcookies. Werk dit beleid bij wanneer
          later analytics, ingesloten media of marketingtools worden toegevoegd.
        </p>
      </div>
    </section>
  );
}
