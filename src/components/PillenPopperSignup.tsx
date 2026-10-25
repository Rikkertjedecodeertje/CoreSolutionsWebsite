import Link from 'next/link';
import { CheckCircle2, ExternalLink, Mail } from 'lucide-react';

const forms = {
  nl: 'https://docs.google.com/forms/d/e/1FAIpQLScYbL7pi9GWUlsYyJu5UQgV9Uf7MewXLauiP2DHtGiDV8huWw/viewform',
  en: 'https://docs.google.com/forms/d/e/1FAIpQLSfhYgxX2t9pPDu5atJ91slB44yTtPvc7q9kFONZnGRmdcQCQA/viewform',
};

const copy = {
  nl: {
    eyebrow: 'PillenPopper updates',
    title: 'Volg de ontwikkeling. Blijf betrokken.',
    description: 'Wil je weten hoe de PillenPopper zich verder ontwikkelt? Laat je e-mailadres achter en ontvang updates van Core Solutions, rechtstreeks in je inbox.',
    benefits: ['Nieuws over de ontwikkeling', 'Updates rechtstreeks van Rik', 'Afmelden wanneer je wilt'],
    invitation: 'Schrijf je hieronder in',
    frameTitle: 'Inschrijven voor updates over de PillenPopper',
    formLink: 'Open het formulier in een apart venster',
    privacy: 'Je inschrijving wordt verwerkt via Google Forms.',
    privacyLink: 'Lees het privacybeleid',
    unsubscribe: 'Afmelden kan altijd via',
  },
  en: {
    eyebrow: 'PillenPopper updates',
    title: 'Follow the development. Stay involved.',
    description: 'Want to know how the PillenPopper is progressing? Leave your email address to receive development updates from Core Solutions, straight to your inbox.',
    benefits: ['News about the development', 'Updates directly from Rik', 'Unsubscribe whenever you like'],
    invitation: 'Sign up below',
    frameTitle: 'Sign up for updates about the PillenPopper',
    formLink: 'Open the form in a separate window',
    privacy: 'Your sign-up is processed through Google Forms.',
    privacyLink: 'Read the privacy policy',
    unsubscribe: 'You can unsubscribe at any time by emailing',
  },
};

export function PillenPopperSignup({ locale = 'en' }: { locale?: 'en' | 'nl' }) {
  const text = copy[locale];
  const formUrl = forms[locale];

  return (
    <section aria-labelledby="pillenpopper-updates-title" className="mt-12 scroll-mt-24 overflow-hidden rounded-card border border-border shadow-soft" id="updates">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative flex flex-col overflow-hidden bg-dark p-7 text-white sm:p-9 lg:p-10">
          <div aria-hidden="true" className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-steel/25 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative">
            <span className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-card border border-secondary/30 bg-secondary/15 text-secondary">
              <Mail aria-hidden="true" className="h-7 w-7" />
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">{text.eyebrow}</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight sm:text-4xl" id="pillenpopper-updates-title">{text.title}</h2>
            <p className="mt-5 max-w-md leading-7 text-white/75">{text.description}</p>
            <ul className="mt-8 space-y-4">
              {text.benefits.map((benefit) => (
                <li className="flex items-start gap-3 text-sm leading-6 text-white/85" key={benefit}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <p className="relative mt-10 pt-6 text-xs leading-6 text-white/60 lg:mt-auto">
            {text.unsubscribe}{' '}
            <a className="break-words underline underline-offset-4 hover:text-white" href="mailto:contact@coresolutionsglobal.com">contact@coresolutionsglobal.com</a>.
          </p>
        </div>
        <div className="min-w-0 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 sm:px-6">
            <h3 className="font-semibold text-text">{text.invitation}</h3>
            <a className="inline-flex items-center gap-1.5 text-xs font-semibold text-steel hover:text-primary" href={formUrl} rel="noopener noreferrer" target="_blank">
              {text.formLink}<ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>
          <iframe
            className="block h-[960px] w-full border-0 sm:h-[800px]"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={`${formUrl}?embedded=true&hl=${locale}`}
            title={text.frameTitle}
          />
          <p className="border-t border-border px-5 py-4 text-xs leading-6 text-muted sm:px-6">
            {text.privacy}{' '}
            <Link className="font-semibold text-steel underline underline-offset-4 hover:text-primary" href={locale === 'nl' ? '/nl/privacy-policy/' : '/privacy-policy/'}>{text.privacyLink}</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
