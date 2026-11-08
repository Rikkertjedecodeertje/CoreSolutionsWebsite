import { PillenPopperSignup } from '@/components/PillenPopperSignup';
import { ResponsiveImage } from '@/components/ResponsiveImage';
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
const functions = [
  { number: '01', title: 'Druk pillen uit de strip', image: 'uitdrukken.jpg', alt: 'Een gebruiker drukt met haar handpalm op de arm van de PillenPopper om een pil uit de strip te drukken.', text: 'Schuif de strip in de klem. Druk met je handpalm of onderarm op de hendel, in plaats van met je vingers op de pil.' },
  { number: '02', title: 'Vang ze op in het bakje', image: 'opvangen.jpg', alt: 'Het uitneembare paarse opvangbakje van de PillenPopper met daarin hele en gesplitste pillen.', text: 'De pillen vallen in het uitneembare bakje. Klaar om in te nemen of in je pillendoos te verdelen.' },
  { number: '03', title: 'Split geschikte pillen', image: 'splitten.jpg', alt: 'Een gebruiker drukt met haar handpalm op de PillenPopper om een geschikte pil te splitten.', text: 'Leg een geschikte pil in het splitmechaniek en druk op de arm. Het mechaniek werkt met drukpunten, zonder scherp mes.' },
];

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
      <section className={styles.how} id="zo-werkt-het" aria-labelledby="how-title">
        <div className={styles.sectionHead}>
          <div><p className={styles.eyebrow}>ZO WERKT DE PILLENPOPPER</p><h2 id="how-title">Uitdrukken. Opvangen. Splitten.</h2></div>
          <p>Voor als je weinig kracht hebt, je handen pijn doen of fijne bewegingen lastig zijn.</p>
        </div>
        <div className={styles.steps}>
          {functions.map((item) => <article className={styles.step} key={item.number}>
            <div className={styles.stepImage}><img src={assetPath('/images/pillenpopper-wachtlijst/' + item.image)} alt={item.alt} width="1200" height="900" loading="lazy" /><span className={styles.stepNumber}>{item.number}</span>{item.number === '03' && <div className={styles.detailInsets}>
              <figure><ResponsiveImage src={assetPath('/images/split-detail-place.jpg')} alt="Gebruiker legt de pil op het onderste splitblok" sizes="480px" loading="lazy" /><figcaption>1</figcaption></figure>
              <figure><ResponsiveImage src={assetPath('/images/split-detail-ready.jpg')} alt="De pil ligt op zijn plek in het splitmechaniek" sizes="480px" loading="lazy" /><figcaption>2</figcaption></figure>
            </div>}</div>
            <h3>{item.title}</h3><p>{item.text}</p>
          </article>)}
        </div>
        <p className={styles.splitNote}>Split alleen pillen die daarvoor geschikt zijn. Controleer de bijsluiter of vraag je apotheker.</p>
      </section>
      <PillenPopperSignup locale="nl" id="wachtlijst" />
    </div>
  );
}
