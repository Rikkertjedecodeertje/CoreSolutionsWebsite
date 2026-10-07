import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: "Cookies, browseropslag en externe kaartdiensten op de Core Solutions-website.",
  alternates: { canonical: '/nl/cookie-policy/', languages: { en: '/cookie-policy/', nl: '/nl/cookie-policy/' } },
  openGraph: { title: "Cookiebeleid | Core Solutions", description: "Cookies, browseropslag en externe kaartdiensten op de Core Solutions-website.", url: '/nl/cookie-policy/' },
};
export default function PolicyPage() { return <LegalPage locale="nl" kind="cookie" />; }
