import type { MediaMention } from '@/data/projects';
import { MediaCards } from '@/components/MediaCards';

export function MediaSection({
  mentions,
  locale = 'en',
}: {
  mentions: MediaMention[];
  locale?: 'en' | 'nl';
}) {
  if (mentions.length === 0) {
    return (
      <div className="rounded-card border border-dashed border-border bg-card p-6">
        <p className="font-semibold text-text">{locale === 'nl' ? 'In de media' : 'In the media'}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-text">{locale === 'nl' ? 'In de media' : 'In the media'}</h2>
      <MediaCards mentions={mentions} />
    </div>
  );
}
