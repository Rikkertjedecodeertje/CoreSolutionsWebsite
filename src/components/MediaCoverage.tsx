import { ChevronDown } from 'lucide-react';
import type { MediaMention } from '@/data/projects';
import { MediaCards } from '@/components/MediaCards';
import styles from './MediaCoverage.module.css';

const featuredSources = ['AD', 'Omroep Delft', 'De Ondernemer'];

export function MediaCoverage({
  mentions,
  locale = 'en',
}: {
  mentions: MediaMention[];
  locale?: 'en' | 'nl';
}) {
  const featured = featuredSources.flatMap((source) => {
    const mention = mentions.find((item) => item.source === source);
    return mention ? [mention] : [];
  });
  const selected = new Set(featured);
  const remaining = mentions.filter((mention) => !selected.has(mention));
  const nl = locale === 'nl';

  if (featured.length === 0) return <MediaCards mentions={mentions} />;

  return (
    <div>
      <MediaCards
        mentions={featured}
        featured
        label={nl ? 'Uitgelichte media: AD, Omroep Delft en De Ondernemer' : 'Featured coverage: AD, Omroep Delft and De Ondernemer'}
      />
      <p className={styles.swipeHint}>
        {nl ? 'Veeg om de uitgelichte artikelen te bekijken.' : 'Swipe to explore the featured stories.'}
      </p>
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
