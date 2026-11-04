import type { Metadata } from 'next';
import { ArrowDown, ArrowRight, Check, ExternalLink, Mail } from 'lucide-react';
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
const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfhYgxX2t9pPDu5atJ91slB44yTtPvc7q9kFONZnGRmdcQCQA/viewform';
const functions = [
  { number: '01', title: 'Press pills out of the pack', image: 'uitdrukken.jpg', alt: 'A user presses the PillenPopper lever with her palm to remove a pill from a blister pack.', text: 'Slide the blister strip into the clip. Press the lever with your palm or forearm, instead of pushing the pill with your fingers.' },
  { number: '02', title: 'Collect them in the tray', image: 'opvangen.jpg', alt: 'The removable purple collection tray of the PillenPopper holding whole and split pills.', text: 'The pills fall into the removable tray. Ready to take or organise in your pill box.' },
  { number: '03', title: 'Split suitable pills', image: 'splitten.jpg', alt: 'A user presses the PillenPopper with her palm to split a suitable pill.', text: 'Place a suitable pill in the splitting mechanism and press the arm. It uses pressure points, without a sharp blade.' },
];

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
      <section className={styles.how} id="how-it-works" aria-labelledby="how-title">
        <div className={styles.sectionHead}>
          <div><p className={styles.eyebrow}>HOW THE PILLENPOPPER WORKS</p><h2 id="how-title">Remove. Collect. Split.</h2></div>
          <p>For when you have limited strength, painful hands or difficulty with fine movements.</p>
        </div>
        <div className={styles.steps}>
          {functions.map((item) => <article className={styles.step} key={item.number}>
            <div className={styles.stepImage}><img src={assetPath('/images/pillenpopper-wachtlijst/' + item.image)} alt={item.alt} width="1200" height="900" loading="lazy" /><span>{item.number}</span></div>
            <h3>{item.title}</h3><p>{item.text}</p>
          </article>)}
        </div>
        <p className={styles.splitNote}>Only split pills that are suitable for splitting. Check the patient information leaflet or ask your pharmacist.</p>
      </section>
      <section className={styles.signup} id="waitlist" aria-labelledby="signup-title">
        <div className={styles.signupCopy}>
          <span className={styles.mailIcon}><Mail size={25} aria-hidden="true" /></span>
          <p className={styles.eyebrow}>STAY IN THE LOOP</p>
          <h2 id="signup-title">Want to know when<br />the PillenPopper<br />is available?</h2>
          <p>Leave your email address. We will let you know when you can order the PillenPopper or when crowdfunding starts.</p>
          <ul><li><Check size={18} aria-hidden="true" /> News about the launch</li><li><Check size={18} aria-hidden="true" /> Get notified when sales or crowdfunding start</li><li><Check size={18} aria-hidden="true" /> No commitment or obligation to buy</li></ul>
          <p className={styles.unsubscribe}>You can unsubscribe at any time by emailing <a href="mailto:contact@coresolutionsglobal.com">contact@coresolutionsglobal.com</a>.</p>
        </div>
        <div className={styles.formPanel}>
          <div className={styles.formHead}><h3>Sign up for the waitlist</h3><a href={formUrl} target="_blank" rel="noopener noreferrer">Open separately <ExternalLink size={14} aria-hidden="true" /></a></div>
          <iframe src={formUrl + '?embedded=true&hl=en'} title="Join the PillenPopper waitlist" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          <p className={styles.privacy}>Your sign-up is processed through Google Forms. <a href="/privacy-policy/">Read the privacy policy</a>.</p>
        </div>
      </section>
    </div>
  );
}
