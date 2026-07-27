import type { SalesChannel } from '@/data/projects';

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function SalesChannelButton({
  channel,
  locale = 'en',
}: {
  channel: SalesChannel;
  locale?: 'en' | 'nl';
}) {
  const isContact = channel.href === '/contact/' || channel.href.startsWith('mailto:');
  const href =
    locale === 'nl' && channel.href.startsWith('/') ? `/nl${channel.href}` : channel.href;

  return (
    <a
      className="flex min-h-40 flex-col rounded-card border border-border bg-card p-5 transition hover:border-primary hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      href={href}
    >
      <span className="font-semibold text-text">{channel.label}</span>
      {channel.note ? <span className="mt-2 block text-sm leading-6 text-muted">{channel.note}</span> : null}
      <span className="mt-auto pt-5">
        {isContact ? (
          <span className="inline-flex min-h-10 items-center gap-2 rounded-card bg-steel px-4 py-2 text-sm font-semibold text-white hover:bg-primary">
            <MailIcon />
            Contact
          </span>
        ) : channel.isPlaceholder ? (
          <span className="text-xs font-semibold uppercase text-steel">
            {locale === 'nl' ? 'Link wordt toegevoegd' : 'Link to be added'}
          </span>
        ) : (
          <span className="text-sm font-semibold text-steel">
            {locale === 'nl' ? 'Openen' : 'Open'}
          </span>
        )}
      </span>
    </a>
  );
}
