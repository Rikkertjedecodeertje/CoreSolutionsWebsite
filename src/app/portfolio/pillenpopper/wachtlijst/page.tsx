import type { Metadata } from 'next';
import { ArrowDown, ArrowRight, Check, ExternalLink, Mail } from 'lucide-react';
import { assetPath } from '@/lib/sitePath';
import styles from './waitlist.module.css';

export const metadata: Metadata = {
  title: 'PillenPopper wachtlijst | Zelf je pillen klaarzetten',
  description: 'Pillen uit een strip drukken, opvangen en geschikte pillen splitten. Ontdek de PillenPopper en ontvang bericht over de lancering, verkoop en crowdfunding.',
  alternates: { canonical: '/portfolio/pillenpopper/wachtlijst/', languages: { nl: '/portfolio/pillenpopper/wachtlijst/', en: '/portfolio/pillenpopper/waitlist/' } },
  openGraph: {
    title: 'Zelf je pillen klaarzetten met de PillenPopper',
    description: 'Ook met zwakke of pijnlijke handen. Meld je vrijblijvend aan voor de wachtlijst.',
    url: '/portfolio/pillenpopper/wachtlijst/', locale: 'nl_NL',
    images: [{ url: '/images/pillenpopper-wachtlijst/uitdrukken.jpg', width: 1448, height: 1086, alt: 'Pillen uit een strip drukken met de PillenPopper' }],
  },
};
const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScYbL7pi9GWUlsYyJu5UQgV9Uf7MewXLauiP2DHtGiDV8huWw/viewform';
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
          <h1 id="waitlist-title">Zelf je pillen<br />klaarzetten.<br /><span>Ook met pijnlijke handen.</span></h1>
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
            <div className={styles.stepImage}><img src={assetPath('/images/pillenpopper-wachtlijst/' + item.image)} alt={item.alt} width="1200" height="900" loading="lazy" /><span>{item.number}</span></div>
            <h3>{item.title}</h3><p>{item.text}</p>
          </article>)}
        </div>
        <p className={styles.splitNote}>Split alleen pillen die daarvoor geschikt zijn. Controleer de bijsluiter of vraag je apotheker.</p>
      </section>
      <section className={styles.signup} id="wachtlijst" aria-labelledby="signup-title">
        <div className={styles.signupCopy}>
          <span className={styles.mailIcon}><Mail size={25} aria-hidden="true" /></span>
          <p className={styles.eyebrow}>BLIJF OP DE HOOGTE</p>
          <h2 id="signup-title">Een seintje als<br />de PillenPopper<br />beschikbaar is?</h2>
          <p>Laat je e-mailadres achter. Dan hoor je van ons zodra de PillenPopper te bestellen is of de crowdfunding start.</p>
          <ul><li><Check size={18} aria-hidden="true" /> Nieuws over de lancering</li><li><Check size={18} aria-hidden="true" /> Bericht bij de start van de verkoop of crowdfunding</li><li><Check size={18} aria-hidden="true" /> Vrijblijvend en zonder aankoopverplichting</li></ul>
          <p className={styles.unsubscribe}>Je kunt je altijd afmelden via <a href="mailto:contact@coresolutionsglobal.com">contact@coresolutionsglobal.com</a>.</p>
        </div>
        <div className={styles.formPanel}>
          <div className={styles.formHead}><h3>Meld je aan voor de wachtlijst</h3><a href={formUrl} target="_blank" rel="noopener noreferrer">Open apart <ExternalLink size={14} aria-hidden="true" /></a></div>
          <iframe src={formUrl + '?embedded=true&hl=nl'} title="Aanmelden voor de PillenPopper wachtlijst" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          <p className={styles.privacy}>Je inschrijving wordt verwerkt via Google Forms. <a href="/nl/privacy-policy/">Lees het privacybeleid</a>.</p>
        </div>
      </section>
    </div>
  );
}
