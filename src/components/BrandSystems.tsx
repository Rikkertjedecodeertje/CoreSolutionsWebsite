import {
  Battery,
  CheckCircle2,
  Gauge,
  Globe2,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Zap,
} from 'lucide-react';
import { assetPath } from '@/lib/sitePath';

type BrandKey = 'iheel' | 'batbox-battery-tester';
type Locale = 'en' | 'nl';

const overviewCopy = {
  en: {
    iheel: {
      eyebrow: 'Comfort system',
      title: 'A small product with a clear everyday effect',
      description:
        'iHeel® improves the contact between shoe and heel through three connected comfort benefits.',
      stages: [
        { title: 'Better fit', description: 'Fills excess space around the heel.', icon: Gauge },
        { title: 'Less friction', description: 'Reduces heel slip and rubbing.', icon: ShieldCheck },
        { title: 'More comfort', description: 'Supports confident, worry-free walking.', icon: Sparkles },
      ],
    },
    'batbox-battery-tester': {
      eyebrow: 'Household system',
      title: 'Know, separate and store with confidence',
      description:
        'BATBOX® turns an unorganized battery drawer into a simple, repeatable household routine.',
      stages: [
        { title: 'Test', description: 'Quickly check whether a battery still has usable power.', icon: Zap },
        { title: 'Separate', description: 'Keep usable and empty batteries clearly apart.', icon: CheckCircle2 },
        { title: 'Organize', description: 'Store batteries and the tester together neatly.', icon: PackageCheck },
      ],
    },
  },
  nl: {
    iheel: {
      eyebrow: 'Comfortsysteem',
      title: 'Een klein product met een duidelijk dagelijks effect',
      description:
        'iHeel® verbetert het contact tussen schoen en hiel met drie samenhangende comfortvoordelen.',
      stages: [
        { title: 'Betere pasvorm', description: 'Vult overtollige ruimte rond de hiel op.', icon: Gauge },
        { title: 'Minder wrijving', description: 'Vermindert schuiven en wrijving bij de hiel.', icon: ShieldCheck },
        { title: 'Meer comfort', description: 'Ondersteunt comfortabel en zorgeloos lopen.', icon: Sparkles },
      ],
    },
    'batbox-battery-tester': {
      eyebrow: 'Huishoudelijk systeem',
      title: 'Weet, scheid en bewaar met zekerheid',
      description:
        'BATBOX® verandert een rommelige batterijlade in een eenvoudige, herhaalbare routine.',
      stages: [
        { title: 'Testen', description: 'Controleer snel of een batterij nog bruikbare energie heeft.', icon: Zap },
        { title: 'Scheiden', description: 'Houd bruikbare en lege batterijen duidelijk uit elkaar.', icon: CheckCircle2 },
        { title: 'Ordenen', description: 'Bewaar batterijen en de tester veilig en overzichtelijk.', icon: PackageCheck },
      ],
    },
  },
} as const;

const achievementValues: Record<BrandKey, string[]> = {
  iheel: ['5,000+', '9', 'OMNI', 'RETAIL'],
  'batbox-battery-tester': ['READY', 'MARKET', 'IP', 'CORE'],
};

const achievementIcons = {
  iheel: [ShoppingBag, Globe2, Store, CheckCircle2],
  'batbox-battery-tester': [Battery, ShoppingBag, ShieldCheck, PackageCheck],
};

export function BrandOverviewSystem({
  brand,
  locale = 'en',
}: {
  brand: BrandKey;
  locale?: Locale;
}) {
  const copy = overviewCopy[locale][brand];
  const isIheel = brand === 'iheel';

  return (
    <div className="overflow-hidden rounded-card border border-text/10 bg-dark text-white shadow-soft">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative overflow-hidden border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-9">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-steel/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-secondary/20 blur-3xl"
          />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              {copy.eyebrow}
            </p>
            <div className="mt-8 inline-flex min-h-28 items-center rounded-card bg-white px-6 py-5 shadow-soft">
              {isIheel ? (
                <img
                  alt="iHeel logo"
                  className="h-16 w-auto max-w-[230px] object-contain"
                  src={assetPath('/images/iheel-logo.svg')}
                />
              ) : (
                <div className="h-16 w-[250px] overflow-hidden">
                  <img
                    alt="BATBOX logo"
                    className="h-16 w-[250px] origin-left -translate-x-9 scale-[1.28] object-contain object-left"
                    src={assetPath('/images/batbox-logo.svg')}
                  />
                </div>
              )}
            </div>
            <h3 className="mt-8 max-w-md text-3xl font-semibold leading-tight">{copy.title}</h3>
            <p className="mt-4 max-w-md leading-7 text-white/65">{copy.description}</p>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="grid h-full gap-4">
            {copy.stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <article
                  className="group grid grid-cols-[50px_46px_1fr] items-center gap-4 rounded-card border border-white/10 bg-white/[0.06] p-4 transition hover:border-secondary/60 hover:bg-white/[0.09]"
                  key={stage.title}
                >
                  <span className="text-3xl font-light text-white/30">0{index + 1}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-card bg-secondary/15 text-secondary transition group-hover:bg-secondary group-hover:text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">{stage.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-white/60">{stage.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AchievementSystem({
  brand,
  items,
}: {
  brand: BrandKey;
  items: string[];
}) {
  const values = achievementValues[brand];
  const icons = achievementIcons[brand];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => {
        const Icon = icons[index] ?? CheckCircle2;
        return (
          <article
            className="relative overflow-hidden rounded-card border border-border bg-card p-6 shadow-sm"
            key={item}
          >
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-steel/10 blur-2xl"
            />
            <div className="relative flex min-h-32 flex-col">
              <div className="flex items-start justify-between gap-4">
                <span className="achievement-glow text-2xl font-black leading-none text-steel">
                  {values[index] ?? 'OK'}
                </span>
                <Icon aria-hidden="true" className="h-5 w-5 text-secondary" />
              </div>
              <p className="mt-auto pt-8 text-sm font-semibold leading-6 text-text">{item}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
