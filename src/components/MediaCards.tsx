import type { MediaMention } from '@/data/projects';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { assetPath } from '@/lib/sitePath';
import styles from './MediaCards.module.css';

const images: Record<string, string> = {
  'The Hague Online': '/images/media-hague-online.jpg',
  ImpactCity: '/images/media-impactcity.jpg',
  'Den Haag FM': '/images/pillenpopper-product.webp',
  AD: '/images/pillenpopper-product.webp',
  'Omroep Delft': '/images/pillenpopper-blister.jpg',
  'Haagse Dingen': '/images/media-haagse-dingen.jpg',
};

const sourceLogos: Record<string, string> = {
  AD: '/images/press-logos/ad-logo.png',
  'Omroep Delft': '/images/press-logos/omroep-delft-logo.png',
  'De Nieuwe Haagse Courant': '/images/press-logos/dnhc-logo.png',
  'Den Haag FM': '/images/press-logos/den-haag-fm-logo.png',
  'The Hague Online': '/images/press-logos/hague-online-logo.png',
  ImpactCity: '/images/press-logos/impactcity-logo.png',
  'Haagse Dingen': '/images/press-logos/haagse-dingen-logo.png',
};

export function MediaCards({ mentions }: { mentions: MediaMention[] }) {
  return (
    <div className={styles.grid}>
      {mentions.map((mention) => {
        const logo = sourceLogos[mention.source ?? ''];
        const links = [
          ...(mention.href && mention.linkLabel
            ? [{ label: mention.linkLabel, href: mention.href }]
            : []),
          ...(mention.additionalLinks ?? []),
        ];
        const image = (
          <ResponsiveImage
            src={assetPath(images[mention.source ?? ''] ?? '/images/pillenpopper-blister.jpg')}
            alt=""
            sizes="(min-width: 1280px) 290px, (min-width: 768px) 45vw, calc(100vw - 40px)"
            className={styles.image}
            loading="lazy"
          />
        );

        return (
          <article className={styles.card} key={mention.title}>
            {links.length > 0 || !mention.href ? (
              <div className={styles.mainContent}>
                {image}
                <div className={styles.copy}>
                  <h3>{mention.title}</h3>
                  {links.length > 0 && (
                    <div className={styles.links}>
                      {links.map((link) => (
                        <a
                          className={styles.extraLink}
                          href={link.href}
                          key={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <a className={styles.mainLink} href={mention.href} target="_blank" rel="noopener noreferrer">
                {image}
                <div className={styles.copy}><h3>{mention.title}</h3></div>
              </a>
            )}
            <div className={styles.footer}>
              {mention.date && <p className={styles.date}>{mention.date}</p>}
              <div className={styles.source}>
                {logo ? (
                  <ResponsiveImage
                    src={assetPath(logo)}
                    alt={mention.source ?? ''}
                    className={styles.sourceLogo}
                    sizes="124px"
                    loading="lazy"
                  />
                ) : mention.source}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
