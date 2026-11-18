'use client';

import { useEffect, useState } from 'react';
import {
  analyticsOptOutKey,
  initializeWebsiteAnalytics,
  isAnalyticsOptedOut,
  setAnalyticsOptOut,
  syncWebsiteAnalytics,
} from '@/lib/websiteAnalytics';

export function WebsiteAnalytics() {
  useEffect(() => {
    initializeWebsiteAnalytics();

    function syncAcrossTabs(event: StorageEvent) {
      if (event.key === analyticsOptOutKey || event.key === null) syncWebsiteAnalytics();
    }

    window.addEventListener('storage', syncAcrossTabs);
    return () => window.removeEventListener('storage', syncAcrossTabs);
  }, []);

  return null;
}

export function AnalyticsOptOut({ locale }: { locale: 'nl' | 'en' }) {
  const [optedOut, setOptedOut] = useState<boolean | null>(null);
  const nl = locale === 'nl';

  useEffect(() => {
    function updateChoice() {
      setOptedOut(isAnalyticsOptedOut());
    }

    updateChoice();
    window.addEventListener('storage', updateChoice);
    return () => window.removeEventListener('storage', updateChoice);
  }, []);

  return (
    <button
      type="button"
      disabled={optedOut === null}
      onClick={() => {
        setAnalyticsOptOut(!optedOut);
        setOptedOut(!optedOut);
      }}
      className="mt-3 rounded-md border border-steel px-4 py-2 font-semibold text-steel hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50"
    >
      {nl
        ? (optedOut ? 'Webstatistieken weer aanzetten' : 'Webstatistieken uitzetten')
        : (optedOut ? 'Turn website analytics back on' : 'Turn off website analytics')}
    </button>
  );
}
