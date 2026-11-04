import { Newspaper } from 'lucide-react';
import type { MediaMention } from '@/data/projects';
import { ResponsiveImage } from '@/components/ResponsiveImage';
import { assetPath } from '@/lib/sitePath';
import styles from './MediaCards.module.css';

const images: Record<string, string> = {
  'The Hague Online': '/images/media-hague-online.jpg',
  ImpactCity: '/images/media-impactcity.jpg',
  'Den Haag FM': '/images/pillenpopper-product.webp',
};

export function MediaCards({ mentions }: { mentions: MediaMention[] }) {
  return <div className={styles.grid}>
    {mentions.map(mention => <article className={styles.card} key={mention.title}>
      <a className={styles.mainLink} href={mention.href} target="_blank" rel="noopener noreferrer">
        <ResponsiveImage src={assetPath(images[mention.source ?? ''] ?? '/images/pillenpopper-blister.jpg')} alt="" sizes="(min-width: 1280px) 290px, (min-width: 768px) 45vw, calc(100vw - 40px)" className={styles.image} loading="lazy" />
        <div className={styles.copy}><h3>{mention.title}</h3>{mention.date && <p className={styles.date}>{mention.date}</p>}</div>
      </a>
      <div className={styles.footer}>
        <p className={styles.source}><Newspaper size={15} aria-hidden="true" />{mention.source}</p>
        {mention.additionalLinks?.map(link => <a className={styles.extraLink} href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>)}
      </div>
    </article>)}
  </div>;
}
