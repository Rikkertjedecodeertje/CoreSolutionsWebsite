import {
  ArrowUpRight,
  Box,
  Gauge,
  PackageCheck,
  Rocket,
  SearchCheck,
  Settings2,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';

const studioSteps = [
  {
    title: 'Problem validation',
    description: 'Confirm the problem, the user and the commercial reason to solve it.',
    icon: SearchCheck,
  },
  {
    title: 'Product concept development',
    description: 'Turn the insight into a focused proposition and a clear set of requirements.',
    icon: Target,
  },
  {
    title: 'Prototyping and supplier coordination',
    description: 'Build, test and refine with the right manufacturing partners.',
    icon: Box,
  },
  {
    title: 'Branding and packaging',
    description: 'Create a brand system that makes the product easy to understand and trust.',
    icon: Sparkles,
  },
  {
    title: 'Marketplace and e-commerce sales',
    description: 'Launch, learn and improve through online and offline distribution.',
    icon: PackageCheck,
  },
];

const studioStepsNl = [
  {
    title: 'Probleemvalidatie',
    description: 'Bevestig het probleem, de gebruiker en de commerciële reden om het op te lossen.',
    icon: SearchCheck,
  },
  {
    title: 'Productconcept ontwikkelen',
    description: 'Vertaal het inzicht naar een scherpe propositie en duidelijke vereisten.',
    icon: Target,
  },
  {
    title: 'Prototyping en leveranciers',
    description: 'Bouw, test en verfijn samen met de juiste productiepartners.',
    icon: Box,
  },
  {
    title: 'Merk en verpakking',
    description: 'Maak een merksysteem dat het product begrijpelijk en betrouwbaar maakt.',
    icon: Sparkles,
  },
  {
    title: 'Marketplace- en e-commerceverkoop',
    description: 'Lanceer, leer en verbeter via online en fysieke distributie.',
    icon: PackageCheck,
  },
];

const operatingSteps = [
  {
    title: 'Question every requirement',
    description: 'Make sure the requirement solves the right problem.',
    icon: Target,
  },
  {
    title: 'Delete any part or process possible',
    description: 'Remove before adding complexity.',
    icon: Zap,
  },
  {
    title: 'Simplify and optimize',
    description: 'Make the remaining solution clearer and stronger.',
    icon: Settings2,
  },
  {
    title: 'Accelerate cycle time',
    description: 'Shorten the path from decision to learning.',
    icon: Gauge,
  },
  {
    title: 'Automate',
    description: 'Automate only after the process deserves to scale.',
    icon: Rocket,
  },
];

const operatingStepsNl = [
  {
    title: 'Bevraag iedere vereiste',
    description: 'Controleer of de vereiste het juiste probleem oplost.',
    icon: Target,
  },
  {
    title: 'Verwijder elk mogelijk onderdeel',
    description: 'Schrap voordat je complexiteit toevoegt.',
    icon: Zap,
  },
  {
    title: 'Vereenvoudig en optimaliseer',
    description: 'Maak de overgebleven oplossing duidelijker en sterker.',
    icon: Settings2,
  },
  {
    title: 'Versnel de doorlooptijd',
    description: 'Verkort de weg van beslissing naar nieuwe inzichten.',
    icon: Gauge,
  },
  {
    title: 'Automatiseer',
    description: 'Automatiseer pas wanneer het proces klaar is om op te schalen.',
    icon: Rocket,
  },
];

const liftClasses = [
  'md:translate-y-[248px]',
  'md:translate-y-[190px]',
  'md:translate-y-[132px]',
  'md:translate-y-[74px]',
  'md:translate-y-[16px]',
];

export function WhatWeDoSystem({ locale = 'en' }: { locale?: 'en' | 'nl' }) {
  const isNl = locale === 'nl';
  const steps = isNl ? studioStepsNl : studioSteps;

  return (
    <section className="flex h-full flex-col" aria-labelledby="what-we-do-title">
      <div className="mb-8 lg:min-h-[168px]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
          {isNl ? 'Productstudiosysteem' : 'Product studio system'}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-text" id="what-we-do-title">
          {isNl ? 'Wat we doen' : 'What we do'}
        </h2>
        <p className="mt-3 max-w-xl leading-7 text-muted">
          {isNl
            ? 'Eén samenhangend systeem dat een praktisch probleem van bewijs naar markt brengt.'
            : 'One connected operating system that takes a real-world problem from evidence to market.'}
        </p>
      </div>

      <div className="flex-1 overflow-hidden rounded-card border border-text/10 bg-dark text-white shadow-soft lg:h-[620px] lg:flex-none">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">
            {isNl ? 'Ontdekking' : 'Discovery'}
          </span>
          <ArrowUpRight aria-hidden="true" className="h-5 w-5 text-secondary" />
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">
            {isNl ? 'Commercialisatie' : 'Commercialization'}
          </span>
        </div>

        <div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                className="group grid gap-4 border-b border-white/10 px-5 py-5 last:border-b-0 sm:grid-cols-[64px_48px_1fr] sm:items-center"
                key={step.title}
              >
                <span className="text-3xl font-light text-white/35">0{index + 1}</span>
                <span className="grid h-11 w-11 place-items-center rounded-card bg-white/10 text-secondary transition group-hover:bg-secondary group-hover:text-white">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/65">{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function HowWeWorkSystem({ locale = 'en' }: { locale?: 'en' | 'nl' }) {
  const isNl = locale === 'nl';
  const steps = isNl ? operatingStepsNl : operatingSteps;

  return (
    <section className="flex h-full flex-col" aria-labelledby="how-we-work-title">
      <div className="mb-8 lg:min-h-[168px]">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
          {isNl ? 'Lanceervolgorde' : 'Launch sequence'}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-text" id="how-we-work-title">
          {isNl ? 'Hoe we werken' : 'How we work'}
        </h2>
        <p className="mt-3 max-w-xl leading-7 text-muted">
          {isNl
            ? 'Vijf beslissingen in de juiste volgorde, van gevalideerde behoefte naar schaalbare lancering.'
            : 'Five decisions in the right order, rising from a validated need to a scalable launch.'}
        </p>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-card border border-border bg-card p-5 shadow-soft md:min-h-[620px] md:p-8 lg:h-[620px] lg:flex-none">
        <div className="flex items-center justify-between gap-4 md:absolute md:left-8 md:right-8 md:top-6">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
            {isNl ? '01 · Begin bij het probleem' : '01 · Start with the problem'}
          </span>
          <span className="flex items-center gap-3 text-primary">
            <span className="hidden text-xs font-bold uppercase tracking-[0.16em] sm:inline">
              {isNl ? '05 · Klaar voor lancering' : '05 · Ready to launch'}
            </span>
            <span className="launch-target grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-white shadow-soft">
              <Rocket aria-hidden="true" className="launch-target-icon h-6 w-6 -rotate-12" />
            </span>
          </span>
        </div>

        <span
          aria-hidden="true"
          className="rocket-flight pointer-events-none absolute right-[42px] top-[38px] z-30 hidden text-secondary md:block"
        >
          <Rocket className="h-6 w-6 -rotate-12" />
        </span>

        <div
          aria-hidden="true"
          className="absolute left-[8%] top-[61%] hidden h-0.5 w-[88%] origin-left -rotate-[20deg] bg-gradient-to-r from-steel/25 via-steel to-secondary md:block"
        />

        <div className="relative mt-6 grid gap-4 md:mt-0 md:grid-cols-5 md:gap-3 md:pt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                className={`relative z-10 border-l-2 border-secondary bg-background p-4 shadow-sm md:min-h-40 md:border-l-0 md:border-t-2 ${liftClasses[index]}`}
                key={step.title}
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-light text-steel/55">0{index + 1}</span>
                  <Icon aria-hidden="true" className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mt-5 text-sm font-semibold leading-5 text-text">{step.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
