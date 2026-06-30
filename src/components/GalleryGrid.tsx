import type { GalleryItem } from '@/data/projects';
import { assetPath } from '@/lib/sitePath';

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <figure className="overflow-hidden rounded-card border border-border bg-card" key={item.src}>
          <img alt={item.alt} className="h-64 w-full object-cover" src={assetPath(item.src)} />
          <figcaption className="border-t border-border p-4 text-sm text-muted">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

