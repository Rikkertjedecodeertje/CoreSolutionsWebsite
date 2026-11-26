import type { Metadata } from 'next';
import { PillenPopperRadio } from '@/components/PillenPopperRadio';

export const metadata: Metadata = {
  title: 'The PillenPopper on the radio',
  description: 'Listen to the PillenPopper interviews on Omroep West and Omroep Delft.',
  alternates: {
    canonical: '/portfolio/pillenpopper/radio/',
    languages: { en: '/portfolio/pillenpopper/radio/', nl: '/nl/portfolio/pillenpopper/radio/' },
  },
};

export default function RadioPage() {
  return <PillenPopperRadio locale="en" />;
}
