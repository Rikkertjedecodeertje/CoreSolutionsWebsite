import { PillenPopperSignup } from '@/components/PillenPopperSignup';
import { PillenPopperHowItWorks } from '@/components/PillenPopperHowItWorks';
import type { Metadata } from 'next';
import { ArrowDown, ArrowRight, Check } from 'lucide-react';
import { assetPath } from '@/lib/sitePath';
import styles from './waitlist.module.css';

export const metadata: Metadata = {
  title: 'PillenPopper wachtlijst | Zelf je pillen voorbereiden',
  description: 'Pillen uit een strip drukken, opvangen en geschikte pillen splitten. Ontdek de PillenPopper en ontvang bericht over de lancering, verkoop en crowdfunding.',
  alternates: { canonical: '/portfolio/pillenpopper/wachtlijst/', languages: { nl: '/portfolio/pillenpopper/wachtlijst/', en: '/portfolio/pillenpopper/waitlist/' } },
  openGraph: {
    title: 'Zelf je pillen voorbereiden met de PillenPopper',
    description: 'Ook met zwakke of pijnlijke handen. Meld je vrijblijvend aan voor de wachtlijst.',
    url: '/portfolio/pillenpopper/wachtlijst/', locale: 'nl_NL',
    images: [{ url: '/images/pillenpopper-wachtlijst/uitdrukken.jpg', width: 1448, height: 1086, alt: 'Pillen uit een strip drukken met de PillenPopper' }],
  },
};

export default function WaitlistPage() {
  return (
    <div className={styles.page} lang="nl">
      <section className={styles.hero} aria-labelledby="waitlist-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> PILLENPOPPER · MEER ZELFSTANDIGHEID</p>
          <h1 id="waitlist-title">Zelf je pillen<br />voorbereiden.<br /><span>Ook met pijnlijke handen.</span></h1>
          <p className={styles.intro}>Pillen uit de strip drukken en geschikte pillen splitten met je handpalm of onderarm. De PillenPopper helpt je het zelf te doen.</p>
          <a className={styles.button} href="#wachtlijst">Zet mij op de wachtlijst <ArrowRight size={19} aria-hidden="true" /></a>
          <p className={styles.micro}>Vrijblijvend. Ontvang bericht zodra je kunt bestellen.</p>
          <a className={styles.howLink} href="#zo-werkt-het">Bekijk hoe het werkt <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
        <figure className={styles.heroFigure}>
          <img className={styles.heroImage} src={assetPath('/images/pillenpopper-wachtlijst/uitdrukken.jpg')} alt="Een vrouw gebruikt de PillenPopper om met haar handpalm een pil uit de strip te drukken." width="1448" height="1086" fetchPriority="high" />
          <figcaption><span className={styles.captionDot} /> Kleine handeling. Groot verschil.</figcaption>
        </figure>
      </section>
      <div className={styles.trust}>
        <p><Check size={18} aria-hidden="true" /> Ontwikkeld met gebruikers en ergotherapeuten</p>
        <p><Check size={18} aria-hidden="true" /> Bedienen met handpalm of onderarm</p>
        <p><Check size={18} aria-hidden="true" /> Splitten zonder scherp mes</p>
      </div>
      <PillenPopperHowItWorks locale="nl" />
      <PillenPopperSignup locale="nl" id="wachtlijst" />
    </div>
  );
}
