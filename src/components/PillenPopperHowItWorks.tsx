import { ResponsiveImage } from '@/components/ResponsiveImage';
import { assetPath } from '@/lib/sitePath';
import styles from './PillenPopperHowItWorks.module.css';

const copy = {
  nl: {
    id: 'zo-werkt-het',
    label: 'Zo werkt de PillenPopper',
    title: 'Uitdrukken. Opvangen. Splitten.',
    intro: 'Voor als je weinig kracht hebt, je handen pijn doen of fijne bewegingen lastig zijn.',
    steps: [
      {
        title: 'Druk pillen uit de strip',
        image: 'uitdrukken.jpg',
        alt: 'Een gebruiker drukt met haar handpalm op de arm van de PillenPopper om een pil uit de strip te drukken.',
        description: 'Schuif de strip in de klem. Druk met je handpalm of onderarm op de hendel, in plaats van met je vingers op de pil.',
      },
      {
        title: 'Vang ze op in het bakje',
        image: 'opvangen.jpg',
        alt: 'Het uitneembare paarse opvangbakje van de PillenPopper met daarin hele en gesplitste pillen.',
        description: 'De pillen vallen in het uitneembare bakje. Klaar om in te nemen of in je pillendoos te verdelen.',
      },
      {
        title: 'Split geschikte pillen',
        image: 'splitten.jpg',
        alt: 'Een gebruiker drukt met haar handpalm op de PillenPopper om een geschikte pil te splitten.',
        description: 'Leg een geschikte pil in het splitmechaniek en druk op de arm. Het mechaniek werkt met drukpunten, zonder scherp mes.',
      },
    ],
    splitDetails: [
      'Gebruiker legt de pil op het onderste splitblok',
      'De pil ligt op zijn plek in het splitmechaniek',
    ],
    splitNote: 'Split alleen pillen die daarvoor geschikt zijn. Controleer de bijsluiter of vraag je apotheker.',
  },
  en: {
    id: 'how-it-works',
    label: 'How the PillenPopper works',
    title: 'Remove. Collect. Split.',
    intro: 'For when you have limited strength, painful hands or difficulty with fine movements.',
    steps: [
      {
        title: 'Press pills out of the pack',
        image: 'uitdrukken.jpg',
        alt: 'A user presses the PillenPopper lever with her palm to remove a pill from a blister pack.',
        description: 'Slide the blister strip into the clip. Press the lever with your palm or forearm, instead of pushing the pill with your fingers.',
      },
      {
        title: 'Collect them in the tray',
        image: 'opvangen.jpg',
        alt: 'The removable purple collection tray of the PillenPopper holding whole and split pills.',
        description: 'The pills fall into the removable tray. Ready to take or organise in your pill box.',
      },
      {
        title: 'Split suitable pills',
        image: 'splitten.jpg',
        alt: 'A user presses the PillenPopper with her palm to split a suitable pill.',
        description: 'Place a suitable pill in the splitting mechanism and press the arm. It uses pressure points, without a sharp blade.',
      },
    ],
    splitDetails: [
      'A user places the pill on the lower splitting block',
      'The pill is positioned inside the splitting mechanism',
    ],
    splitNote: 'Only split pills that are suitable for splitting. Check the patient information leaflet or ask your pharmacist.',
  },
};

const splitImages = ['/images/split-detail-place.jpg', '/images/split-detail-ready.jpg'];

export function PillenPopperHowItWorks({ locale }: { locale: 'en' | 'nl' }) {
  const content = copy[locale];

  return (
    <section className={styles.section} id={content.id} aria-labelledby="how-title">
      <div className={styles.sectionHead}>
        <div>
          <p className={styles.label}>{content.label}</p>
          <h2 id="how-title">{content.title}</h2>
        </div>
        <p>{content.intro}</p>
      </div>
      <div className={styles.steps}>
        {content.steps.map((step, index) => (
          <article className={styles.step} key={step.image}>
            <div className={styles.stepImage}>
              <img
                src={assetPath(`/images/pillenpopper-wachtlijst/${step.image}`)}
                alt={step.alt}
                width={1200}
                height={900}
                loading="lazy"
              />
              <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span>
              {step.image === 'splitten.jpg' && (
                <div className={styles.detailInsets}>
                  {splitImages.map((src, detailIndex) => (
                    <figure key={src}>
                      <ResponsiveImage
                        src={assetPath(src)}
                        alt={content.splitDetails[detailIndex]}
                        sizes="480px"
                        loading="lazy"
                      />
                      <figcaption>{detailIndex + 1}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
      <p className={styles.splitNote}>{content.splitNote}</p>
    </section>
  );
}
