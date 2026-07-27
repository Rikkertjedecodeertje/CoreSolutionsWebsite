import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy placeholder for Core Solutions.',
  alternates: {
    canonical: '/privacy-policy/',
    languages: { en: '/privacy-policy/', nl: '/nl/privacy-policy/' },
  },
  openGraph: {
    title: 'Privacy Policy | Core Solutions',
    description: 'Privacy policy placeholder for Core Solutions.',
    url: '/privacy-policy/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page is a placeholder for the final Core Solutions privacy policy."
      />
      <div className="mt-8 rounded-card border border-border bg-card p-6 text-sm leading-7 text-muted">
        <p>
          Add the final privacy policy here before launch, including how contact emails,
          analytics, cookies and any future forms are handled.
        </p>
      </div>
    </section>
  );
}

