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
};

const sourceLogos: Record<string, { src: string; width: number }> = {
  AD: { src: '/images/press-logos/ad-logo.png', width: 32 },
  'Omroep Delft': { src: '/images/press-logos/omroep-delft-logo.png', width: 146 },
  'De Nieuwe Haagse Courant': { src: '/images/press-logos/dnhc-logo.png', width: 126 },
  'Den Haag FM': { src: '/images/press-logos/den-haag-fm-logo.png', width: 44 },
  'The Hague Online': { src: '/images/press-logos/hague-online-logo.png', width: 146 },
  ImpactCity: { src: '/images/press-logos/impactcity-logo.png', width: 146 },
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
                    src={assetPath(logo.src)}
                    alt={mention.source ?? ''}
                    className={styles.sourceLogo}
                    sizes={`${logo.width}px`}
                    width={logo.width}
                    height={48}
                    style={{ width: logo.width }}
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
