import type { MediaMention } from '@/data/projects';

export function MediaSection({ mentions }: { mentions: MediaMention[] }) {
  if (mentions.length === 0) {
    return (
      <div className="rounded-card border border-dashed border-border bg-card p-6">
        <p className="font-semibold text-text">In the media</p>
        <p className="mt-3 text-muted">Media mentions and publications will be added here.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {mentions.map((mention) => (
        <article className="rounded-card border border-border bg-card p-5" key={mention.title}>
          <h3 className="font-semibold text-text">{mention.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{mention.description}</p>
        </article>
      ))}
    </div>
  );
}

