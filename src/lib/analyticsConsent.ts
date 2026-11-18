type AnalyticsChoice = 'allow' | 'decline';

const choiceKey = 'coresolutions.analytics-consent';
const choiceLifetime = 180 * 24 * 60 * 60 * 1000;
const scriptId = 'core-solutions-gtm';
const denied = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
};

const analyticsWindow = () => window as Window & {
  dataLayer?: unknown[];
  'ga-disable-G-MBPRCG2KGY'?: boolean;
};

function gtag(..._command: unknown[]) {
  (analyticsWindow().dataLayer ??= []).push(arguments);
}

export function readAnalyticsChoice(): AnalyticsChoice | null {
  try {
    const saved = window.localStorage.getItem(choiceKey);
    if (!saved) return null;
    const { choice, expiresAt } = JSON.parse(saved);
    if (expiresAt > Date.now() && (choice === 'allow' || choice === 'decline')) return choice;
    window.localStorage.removeItem(choiceKey);
    clearAnalyticsCookies();
  } catch {
    // When storage is unavailable, ask again on the next visit.
  }
  return null;
}

export function loadAnalytics() {
  const alreadyLoaded = document.getElementById(scriptId);
  if (!alreadyLoaded) gtag('consent', 'default', denied);
  analyticsWindow()['ga-disable-G-MBPRCG2KGY'] = false;
  gtag('consent', 'update', { ...denied, analytics_storage: 'granted' });
  if (alreadyLoaded) return;
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'allow_enhanced_conversions', false);
  gtag('set', 'allow_google_signals', false);
  gtag('set', 'allow_ad_personalization_signals', false);
  analyticsWindow().dataLayer?.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WMSNWHWJ';
  document.head.append(script);
}

function clearAnalyticsCookies() {
  const names = document.cookie.split(';').map((cookie) => cookie.trim().split('=')[0]);
  const scope = window.location.hostname === 'coresolutionsglobal.com' ||
    window.location.hostname.endsWith('.coresolutionsglobal.com');
  for (const name of names) {
    if (!/^_ga(?:_[A-Za-z0-9]+)?$/.test(name)) continue;
    const expired = `${name}=; Max-Age=0; Path=/`;
    document.cookie = expired;
    if (scope) document.cookie = `${expired}; Domain=coresolutionsglobal.com`;
  }
}

export function saveAnalyticsChoice(choice: AnalyticsChoice) {
  let persisted = false;
  try {
    window.localStorage.setItem(choiceKey, JSON.stringify({ choice, expiresAt: Date.now() + choiceLifetime }));
    persisted = true;
  } catch {
    // The choice still applies on this page when storage is unavailable.
  }

  if (choice === 'allow') {
    loadAnalytics();
    return;
  }

  stopAnalytics(persisted);
}

function stopAnalytics(reload: boolean) {
  const active = document.getElementById(scriptId);
  if (active) {
    analyticsWindow()['ga-disable-G-MBPRCG2KGY'] = true;
    gtag('consent', 'update', denied);
  }
  clearAnalyticsCookies();
  if (active && reload) window.location.reload();
}

export function syncAnalyticsChoice(event: StorageEvent) {
  if (event.storageArea !== window.localStorage || (event.key !== choiceKey && event.key !== null)) return;
  const choice = readAnalyticsChoice();
  if (choice !== 'allow') stopAnalytics(true);
  return choice;
}
