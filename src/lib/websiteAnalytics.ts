export const analyticsOptOutKey = 'coresolutions.analytics-opt-out';
const legacyConsentKey = 'coresolutions.analytics-consent';
const scriptId = 'core-solutions-gtm';
const disabledFlag = 'ga-disable-G-MBPRCG2KGY';

const denied = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
};

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  [disabledFlag]?: boolean;
};

let localOverride: boolean | undefined;

export function isAnalyticsOptedOut(): boolean {
  if (localOverride !== undefined) return localOverride;
  try {
    const storage = window.localStorage;
    if (storage.getItem(analyticsOptOutKey) === 'true') return true;
    const legacy = storage.getItem(legacyConsentKey);
    if (legacy) {
      const decision = JSON.parse(legacy);
      return decision.choice === 'decline' && decision.expiresAt > Date.now();
    }
  } catch {
    // Browser storage can be blocked or inaccessible.
  }
  return false;
}

function removeLegacyAnalyticsCookies() {
  const host = window.location.hostname;
  const onCoreDomain = host === 'coresolutionsglobal.com' || host.endsWith('.coresolutionsglobal.com');

  try {
    for (const name of ['_ga', '_ga_MBPRCG2KGY']) {
      const expired = `${name}=; Max-Age=0; Path=/`;
      document.cookie = expired;
      if (onCoreDomain) document.cookie = `${expired}; Domain=coresolutionsglobal.com`;
    }
  } catch {
    // Some browser settings restrict cookie access.
  }
}

export function syncWebsiteAnalytics() {
  const target = window as AnalyticsWindow;
  target[disabledFlag] = isAnalyticsOptedOut();
  if (target[disabledFlag] || document.getElementById(scriptId)) return;

  const dataLayer = target.dataLayer ??= [];
  function gtag(..._command: unknown[]) {
    dataLayer.push(arguments);
  }

  gtag('consent', 'default', denied);
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', false);
  gtag('set', 'allow_enhanced_conversions', false);
  gtag('set', 'allow_google_signals', false);
  gtag('set', 'allow_ad_personalization_signals', false);
  dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WMSNWHWJ';
  document.head.append(script);
}

export function initializeWebsiteAnalytics() {
  removeLegacyAnalyticsCookies();
  syncWebsiteAnalytics();
}

export function setAnalyticsOptOut(optedOut: boolean) {
  try {
    if (optedOut) {
      window.localStorage.setItem(analyticsOptOutKey, 'true');
    } else {
      window.localStorage.removeItem(analyticsOptOutKey);
    }
    window.localStorage.removeItem(legacyConsentKey);
    localOverride = undefined;
  } catch {
    localOverride = optedOut;
  }
  syncWebsiteAnalytics();
  if (optedOut && localOverride === undefined && document.getElementById(scriptId)) {
    window.location.reload();
  }
}
