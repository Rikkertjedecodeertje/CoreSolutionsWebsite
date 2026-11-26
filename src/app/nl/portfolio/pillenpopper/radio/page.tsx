import type { Metadata } from 'next';
import { PillenPopperRadio } from '@/components/PillenPopperRadio';

export const metadata: Metadata = {
  title: 'De PillenPopper op de radio',
  description: 'Luister de interviews over de PillenPopper bij Omroep West en Omroep Delft terug.',
  alternates: {
    canonical: '/nl/portfolio/pillenpopper/radio/',
    languages: { en: '/portfolio/pillenpopper/radio/', nl: '/nl/portfolio/pillenpopper/radio/' },
  },
};

export default function RadioPage() {
  return <PillenPopperRadio locale="nl" />;
}
