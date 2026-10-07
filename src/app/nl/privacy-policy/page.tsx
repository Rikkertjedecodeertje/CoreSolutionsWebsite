import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Hoe Core Solutions persoonsgegevens verwerkt wanneer je deze website bezoekt, de winkelzoeker gebruikt of contact opneemt.",
  alternates: { canonical: '/nl/privacy-policy/', languages: { en: '/privacy-policy/', nl: '/nl/privacy-policy/' } },
  openGraph: { title: "Privacybeleid | Core Solutions", description: "Hoe Core Solutions persoonsgegevens verwerkt wanneer je deze website bezoekt, de winkelzoeker gebruikt of contact opneemt.", url: '/nl/privacy-policy/' },
};
export default function PolicyPage() { return <LegalPage locale="nl" kind="privacy" />; }
