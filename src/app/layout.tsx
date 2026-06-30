import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://coresolutionsglobal.com'),
  title: {
    default: 'Core Solutions | Practical Product Solutions',
    template: '%s | Core Solutions',
  },
  description:
    'Core Solutions develops and commercializes practical product brands, including iHeel® and BATBOX®.',
  openGraph: {
    title: 'Core Solutions | Practical Product Solutions',
    description:
      'Core Solutions develops and commercializes practical product brands, including iHeel® and BATBOX®.',
    url: 'https://coresolutionsglobal.com',
    siteName: 'Core Solutions',
    images: [
      {
        url: '/images/og-core-solutions.svg',
        width: 1200,
        height: 630,
        alt: 'Core Solutions portfolio website',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

