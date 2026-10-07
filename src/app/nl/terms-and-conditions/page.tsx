import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "Voorwaarden voor het gebruik van de Core Solutions-portfoliosite en de product- en winkelinformatie.",
  alternates: { canonical: '/nl/terms-and-conditions/', languages: { en: '/terms-and-conditions/', nl: '/nl/terms-and-conditions/' } },
  openGraph: { title: "Algemene voorwaarden | Core Solutions", description: "Voorwaarden voor het gebruik van de Core Solutions-portfoliosite en de product- en winkelinformatie.", url: '/nl/terms-and-conditions/' },
};
export default function PolicyPage() { return <LegalPage locale="nl" kind="terms" />; }
