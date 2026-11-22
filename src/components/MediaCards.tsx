import { ArrowUpRight } from 'lucide-react';
import type { MediaMention, Project } from '@/data/projects';
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
  'De Ondernemer': '/images/pillenpopper-product.webp',
};

const sourceLogos: Record<string, string> = {
  'Omroep West': 'https://s.regiogroei.cloud/img/brand-logos/resized/logo_west.svg',
  AD: '/images/press-logos/ad-logo.png',
  'Omroep Delft': '/images/press-logos/omroep-delft-logo.png',
  'De Nieuwe Haagse Courant': '/images/press-logos/dnhc-logo.png',
  'Den Haag FM': '/images/press-logos/den-haag-fm-logo.png',
  'The Hague Online': '/images/press-logos/hague-online-logo.png',
  ImpactCity: '/images/press-logos/impactcity-logo.png',
  'Haagse Dingen': '/images/press-logos/haagse-dingen-logo.png',
  'De Ondernemer': '/images/press-logos/de-ondernemer-logo.png',
  'Hofstad Radio': '/images/press-logos/hofstad-radio-logo.png',
  Dagblad070: '/images/press-logos/dagblad070-logo.png',
  'Duurzaam Ondernemen': '/images/press-logos/duurzaam-ondernemen-logo.png',
  'Zoetermeers Dagblad': '/images/press-logos/zoetermeers-dagblad-logo.png',
  'Rijswijks Dagblad': '/images/press-logos/rijswijks-dagblad-logo.png',
  'Voorburgs Dagblad': '/images/press-logos/voorburgs-dagblad-logo.webp',
  'Drimble': '/images/press-logos/drimble-logo.webp',
  'Essentially The Hague': '/images/press-logos/essentially-the-hague-logo.webp',
  'Parkinson Vereniging': '/images/press-logos/parkinson-vereniging-logo.webp',
};

export type MediaCardMention = MediaMention & { product?: Pick<Project, 'slug' | 'shortName' | 'cardImage'> };

export function getMediaCardKey(mention: MediaCardMention) {
  return `${mention.product?.slug}-${mention.source}-${mention.title}`;
}

export function MediaCard({ mention, featured = false }: { mention: MediaCardMention; featured?: boolean }) {
  const logo = sourceLogos[mention.source ?? ''];
  const separateLinks = !!mention.linkLabel || !!mention.additionalLinks?.length;
  const links = [
    ...(mention.href && mention.linkLabel ? [{ label: mention.linkLabel, href: mention.href }] : []),
    ...(mention.additionalLinks ?? []),
  ];
  const thumbnail = mention.product && mention.product.slug !== 'pillenpopper'
    ? mention.product.cardImage?.src
    : images[mention.source ?? ''] ?? '/images/pillenpopper-blister.jpg';
  const productLabel = mention.product && <span className={styles.productLabel}>{mention.product.shortName}</span>;
  const source = (
    <div className={featured ? styles.source : styles.compactSource} title={mention.source}>
      {logo ? (
        <ResponsiveImage
          src={assetPath(logo)}
          alt={mention.source ?? ''}
          className={featured ? styles.sourceLogo : styles.compactLogo}
          sizes={featured ? '112px' : '80px'}
          loading="lazy"
        />
      ) : <span>{mention.source}</span>}
    </div>
  );

  return (
    <article className={featured ? styles.featuredCard : styles.mention}>
      {featured ? (
        thumbnail && <div className={styles.thumbnail}>
          <ResponsiveImage
            src={assetPath(thumbnail)}
            alt=""
            sizes="(min-width: 1024px) 390px, (min-width: 640px) 45vw, calc(100vw - 40px)"
            className={styles.image}
            loading="lazy"
          />
        </div>
      ) : source}
      <div className={featured ? styles.content : styles.compactContent}>
        {featured && productLabel}
        <h3 className={featured ? styles.title : styles.compactTitle}>
          {mention.href && !separateLinks ? (
            <a className={styles.mainLink} href={mention.href} target="_blank" rel="noopener noreferrer">
              <span>{mention.title}</span>
              {!featured && <ArrowUpRight className={styles.external} size={16} aria-hidden="true" />}
            </a>
          ) : mention.title}
        </h3>
        {!featured && (mention.date || productLabel) && (
          <div className={styles.meta}>
            {mention.date && <p className={styles.date}>{mention.date}</p>}
            {productLabel}
          </div>
        )}
        {links.length > 0 && (
          <div className={styles.links}>
            {links.map((link) => (
              <a className={styles.extraLink} href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}<ArrowUpRight size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
        {featured && (
          <div className={styles.footer}>
            {source}
            {mention.date && <p className={styles.date}>{mention.date}</p>}
          </div>
        )}
      </div>
    </article>
  );
}

export function MediaCards({ mentions }: { mentions: MediaCardMention[] }) {
  return (
    <div className={styles.list}>
      {mentions.map((mention) => <MediaCard mention={mention} key={getMediaCardKey(mention)} />)}
    </div>
  );
}
