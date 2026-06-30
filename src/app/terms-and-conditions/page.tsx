import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions placeholder for Core Solutions.',
  openGraph: {
    title: 'Terms and Conditions | Core Solutions',
    description: 'Terms and conditions placeholder for Core Solutions.',
    url: '/terms-and-conditions/',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <SectionHeader
        eyebrow="Legal"
        title="Terms and Conditions"
        description="This page is a placeholder for the final Core Solutions terms and conditions."
      />
      <div className="mt-8 rounded-card border border-border bg-card p-6 text-sm leading-7 text-muted">
        <p>
          Add the final legal terms here before launch, especially if direct sales,
          wholesale inquiries or downloadable materials are added to the website.
        </p>
      </div>
    </section>
  );
}

