import { PillenPopperSignup } from '@/components/PillenPopperSignup';
import { PillenPopperHowItWorks } from '@/components/PillenPopperHowItWorks';
import type { Metadata } from 'next';
import { ArrowDown, ArrowRight, Check } from 'lucide-react';
import { assetPath } from '@/lib/sitePath';
import styles from '../wachtlijst/waitlist.module.css';

export const metadata: Metadata = {
  title: 'PillenPopper waitlist | Prepare your own pills',
  description: 'Remove pills from blister packs, collect them and split suitable pills. Discover the PillenPopper and get updates about the launch, sales and crowdfunding.',
  alternates: { canonical: '/portfolio/pillenpopper/waitlist/', languages: { nl: '/portfolio/pillenpopper/wachtlijst/', en: '/portfolio/pillenpopper/waitlist/' } },
  openGraph: {
    title: 'Prepare your own pills with the PillenPopper',
    description: 'Even with weak or painful hands. Join the waitlist with no obligation.',
    url: '/portfolio/pillenpopper/waitlist/', locale: 'en_GB',
    images: [{ url: '/images/pillenpopper-wachtlijst/uitdrukken.jpg', width: 1448, height: 1086, alt: 'Removing pills from a blister pack with the PillenPopper' }],
  },
};

export default function WaitlistPage() {
  return (
    <div className={styles.page} lang="en">
      <section className={styles.hero} aria-labelledby="waitlist-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> PILLENPOPPER · EVERYDAY INDEPENDENCE</p>
          <h1 id="waitlist-title">Prepare your<br />own pills.<br /><span>Even with painful hands.</span></h1>
          <p className={styles.intro}>Remove pills from blister packs and split suitable pills with your palm or forearm. The PillenPopper helps you do it yourself.</p>
          <a className={styles.button} href="#waitlist">Join the waitlist <ArrowRight size={19} aria-hidden="true" /></a>
          <p className={styles.micro}>No commitment. Get notified when you can order.</p>
          <a className={styles.howLink} href="#how-it-works">See how it works <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
        <figure className={styles.heroFigure}>
          <img className={styles.heroImage} src={assetPath('/images/pillenpopper-wachtlijst/uitdrukken.jpg')} alt="A woman uses her palm to press a pill out of its blister pack with the PillenPopper." width="1448" height="1086" fetchPriority="high" />
          <figcaption><span className={styles.captionDot} /> Small action. Big difference.</figcaption>
        </figure>
      </section>
      <div className={styles.trust}>
        <p><Check size={18} aria-hidden="true" /> Developed with users and occupational therapists</p>
        <p><Check size={18} aria-hidden="true" /> Use your palm or forearm</p>
        <p><Check size={18} aria-hidden="true" /> Split without a sharp blade</p>
      </div>
      <PillenPopperHowItWorks locale="en" />
      <PillenPopperSignup locale="en" id="waitlist" />
    </div>
  );
}
