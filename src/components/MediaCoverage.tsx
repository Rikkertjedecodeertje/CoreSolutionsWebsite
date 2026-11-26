import { ChevronDown } from 'lucide-react';
import type { Project } from '@/data/projects';
import { MediaAudio } from '@/components/MediaAudio';
import { getMediaCardKey, MediaCard, MediaCards, type MediaCardMention } from '@/components/MediaCards';
import { MediaCarousel } from '@/components/MediaCarousel';
import styles from './MediaCoverage.module.css';

const featuredSources = ['AD', 'Omroep Delft', 'De Ondernemer'];

export function getProjectMedia(projects: Project[]): MediaCardMention[] {
  return projects.flatMap(({ slug, shortName, cardImage, mediaMentions }) =>
    mediaMentions.map((mention) => ({ ...mention, product: { slug, shortName, cardImage } })),
  );
}

export function MediaCoverage({
  mentions,
  locale = 'en',
}: {
  mentions: MediaCardMention[];
  locale?: 'en' | 'nl';
}) {
  const sorted = [...mentions].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
  const preferred = new Set(featuredSources.map((source) =>
    sorted.find((mention) => mention.source === source && mention.featured !== false),
  ));
  const featured = sorted.filter((mention) => mention.featured || preferred.has(mention));
  const remaining = sorted.filter((mention) => !featured.includes(mention));
  const nl = locale === 'nl';
  const newestFirst = nl ? 'Nieuwste eerst' : 'Newest first';
  const order = (
    <p className={styles.order}>
      {newestFirst}
      <span className={styles.rowOrder}>{nl ? ' · Lees per rij van links naar rechts' : ' · Read each row from left to right'}</span>
    </p>
  );

  return (
    <MediaAudio locale={locale}>
      {featured.length > 0 ? (
        <>
          <div className={styles.heading}>
            <h3>{nl ? 'Uitgelicht' : 'Featured'}</h3>
            <span className={styles.order}>{newestFirst}</span>
          </div>
          <MediaCarousel locale={locale}>
            {featured.map((mention) => <MediaCard mention={mention} locale={locale} featured key={getMediaCardKey(mention)} />)}
          </MediaCarousel>
        </>
      ) : (
        <>
          {order}
          <MediaCards mentions={remaining} locale={locale} />
        </>
      )}
      {featured.length > 0 && remaining.length > 0 && (
        <details className={styles.more}>
          <summary className={styles.toggle}>
            <span className={styles.show}>
              {nl ? `Bekijk de overige ${remaining.length} vermeldingen` : `Show ${remaining.length} more media mentions`}
            </span>
            <span className={styles.hide}>
              {nl ? 'Minder vermeldingen tonen' : 'Show fewer media mentions'}
            </span>
            <ChevronDown className={styles.chevron} size={18} aria-hidden="true" />
          </summary>
          {order}
          <MediaCards mentions={remaining} locale={locale} />
        </details>
      )}
    </MediaAudio>
  );
}
