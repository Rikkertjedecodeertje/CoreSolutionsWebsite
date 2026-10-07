import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms for using the Core Solutions portfolio website and its product and retailer information.",
  alternates: { canonical: '/terms-and-conditions/', languages: { en: '/terms-and-conditions/', nl: '/nl/terms-and-conditions/' } },
  openGraph: { title: "Terms and Conditions | Core Solutions", description: "Terms for using the Core Solutions portfolio website and its product and retailer information.", url: '/terms-and-conditions/' },
};
export default function PolicyPage() { return <LegalPage locale="en" kind="terms" />; }
