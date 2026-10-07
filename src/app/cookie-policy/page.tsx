import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookies, browser storage and external map services on the Core Solutions website.",
  alternates: { canonical: '/cookie-policy/', languages: { en: '/cookie-policy/', nl: '/nl/cookie-policy/' } },
  openGraph: { title: "Cookie Policy | Core Solutions", description: "Cookies, browser storage and external map services on the Core Solutions website.", url: '/cookie-policy/' },
};
export default function PolicyPage() { return <LegalPage locale="en" kind="cookie" />; }
