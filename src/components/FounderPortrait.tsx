import { ResponsiveImage } from '@/components/ResponsiveImage';
import { assetPath } from '@/lib/sitePath';

export function FounderPortrait({ locale = 'en' }: { locale?: 'en' | 'nl' }) {
  return (
    <figure className="overflow-hidden rounded-card bg-card shadow-soft">
      <ResponsiveImage
        loading="eager"
        fetchPriority="high"
        alt={locale === 'nl' ? 'Rik van Wieren, oprichter van Core Solutions, met de PillenPopper' : 'Rik van Wieren, founder of Core Solutions, holding the PillenPopper'}
        className="aspect-[4/3] h-auto w-full object-cover"
        sizes="(min-width: 1280px) 560px, (min-width: 768px) 45vw, calc(100vw - 40px)"
        src={assetPath('/images/rik-van-wieren-founder.jpg')}
      />
      <figcaption className="border-t border-border px-5 py-4 text-sm leading-6 text-muted">
        <span className="font-semibold text-text">Rik van Wieren</span>
        {' | Founder @ Core Solutions'}
      </figcaption>
    </figure>
  );
}
