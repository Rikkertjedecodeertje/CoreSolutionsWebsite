import { ChevronDown } from 'lucide-react';
import type { Project } from '@/data/projects';
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
  const featured = featuredSources.flatMap((source) => {
    const mention = mentions.find((item) => item.source === source);
    return mention ? [mention] : [];
  });
  const selected = new Set(featured);
  for (const mention of mentions) {
    if (mention.featured && !selected.has(mention)) {
      featured.push(mention);
      selected.add(mention);
    }
  }
  const remaining = mentions.filter((mention) => !selected.has(mention));
  const nl = locale === 'nl';

  if (featured.length === 0) return <MediaCards mentions={mentions} />;

  return (
    <div>
      <MediaCarousel locale={locale}>
        {featured.map((mention) => <MediaCard mention={mention} featured key={getMediaCardKey(mention)} />)}
      </MediaCarousel>
      {remaining.length > 0 && (
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
          <MediaCards mentions={remaining} />
        </details>
      )}
    </div>
  );
}
