import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie policy placeholder for Core Solutions.',
  alternates: {
    canonical: '/cookie-policy/',
    languages: { en: '/cookie-policy/', nl: '/nl/cookie-policy/' },
  },
  openGraph: {
    title: 'Cookie Policy | Core Solutions',
    description: 'Cookie policy placeholder for Core Solutions.',
    url: '/cookie-policy/',
  },
};

export default function CookiePolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Legal"
        title="Cookie Policy"
        description="This page is a placeholder for the final Core Solutions cookie policy."
      />
      <div className="mt-8 rounded-card border border-border bg-card p-6 text-sm leading-7 text-muted">
        <p>
          The current site does not include analytics or tracking cookies. Update this
          policy if analytics, embedded media or marketing tools are added later.
        </p>
      </div>
    </section>
  );
}

