import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Core Solutions handles personal data when you visit this website, use the store locator or contact us.",
  alternates: { canonical: '/privacy-policy/', languages: { en: '/privacy-policy/', nl: '/nl/privacy-policy/' } },
  openGraph: { title: "Privacy Policy | Core Solutions", description: "How Core Solutions handles personal data when you visit this website, use the store locator or contact us.", url: '/privacy-policy/' },
};
export default function PolicyPage() { return <LegalPage locale="en" kind="privacy" />; }
