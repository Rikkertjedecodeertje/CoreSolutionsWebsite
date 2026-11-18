'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { getWaitlistLocale } from '@/lib/pillenpopperWaitlist';
import { loadAnalytics, readAnalyticsChoice, saveAnalyticsChoice, syncAnalyticsChoice } from '@/lib/analyticsConsent';

const openSettingsEvent = 'open-analytics-settings';

const copy = {
  nl: {
    title: 'Statistieken',
    text: 'Met jouw toestemming gebruiken we Google Analytics om te zien welke pagina’s worden bezocht en hoe we de site kunnen verbeteren. We bewaren je keuze in deze browser.',
    policy: 'Lees het cookiebeleid',
    accept: 'Statistieken toestaan',
    reject: 'Statistieken weigeren',
    settings: 'Cookie-instellingen',
  },
  en: {
    title: 'Website analytics',
    text: 'With your permission, we use Google Analytics to understand which pages people visit and how we can improve the site. We save your choice in this browser.',
    policy: 'Read the cookie policy',
    accept: 'Allow analytics',
    reject: 'Decline analytics',
    settings: 'Cookie settings',
  },
};

export function AnalyticsSettingsButton({ isNl }: { isNl: boolean }) {
  return (
    <button
      className="self-start text-left transition hover:text-primary hover:underline"
      onClick={() => window.dispatchEvent(new Event(openSettingsEvent))}
      type="button"
    >
      {copy[isNl ? 'nl' : 'en'].settings}
    </button>
  );
}

export function AnalyticsConsent() {
  const pathname = usePathname() || '/';
  const isNl = getWaitlistLocale(pathname) === 'nl' || pathname === '/nl' || pathname.startsWith('/nl/');
  const labels = copy[isNl ? 'nl' : 'en'];
  const [visible, setVisible] = useState(false);
  const settingsTrigger = useRef<HTMLElement | null>(null);
  const title = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const choice = readAnalyticsChoice();
    if (choice === 'allow') loadAnalytics();
    setVisible(choice === null);

    function openSettings() {
      settingsTrigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setVisible(true);
      title.current?.focus();
    }

    function syncChoice(event: StorageEvent) {
      const updated = syncAnalyticsChoice(event);
      if (updated === undefined) return;
      if (updated === 'allow') loadAnalytics();
      setVisible(updated === null);
    }

    window.addEventListener(openSettingsEvent, openSettings);
    window.addEventListener('storage', syncChoice);
    return () => {
      window.removeEventListener(openSettingsEvent, openSettings);
      window.removeEventListener('storage', syncChoice);
    };
  }, []);

  useEffect(() => {
    if (visible && settingsTrigger.current) title.current?.focus();
  }, [visible]);

  function choose(choice: 'allow' | 'decline') {
    saveAnalyticsChoice(choice);
    setVisible(false);
    settingsTrigger.current?.focus();
    settingsTrigger.current = null;
  }

  if (!visible) return null;

  const buttonClass = 'rounded-lg border border-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800';

  return (
    <section aria-labelledby="analytics-consent-title" lang={isNl ? 'nl' : 'en'} className="fixed inset-x-3 bottom-3 z-[1001] mx-auto max-w-3xl rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 shadow-xl sm:p-5">
      <h2 className="font-semibold" id="analytics-consent-title" ref={title} tabIndex={-1}>{labels.title}</h2>
      <p className="mt-2 text-sm leading-6">
        {labels.text}{' '}
        <Link className="underline underline-offset-2" href={isNl ? '/nl/cookie-policy/' : '/cookie-policy/'}>
          {labels.policy}
        </Link>
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button className={buttonClass} onClick={() => choose('decline')} type="button">{labels.reject}</button>
        <button className={buttonClass} onClick={() => choose('allow')} type="button">{labels.accept}</button>
      </div>
    </section>
  );
}
