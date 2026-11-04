export const waitlistPaths = {
  nl: '/portfolio/pillenpopper/wachtlijst/',
  en: '/portfolio/pillenpopper/waitlist/',
} as const;

export function getWaitlistLocale(pathname: string): 'nl' | 'en' | null {
  if (/^\/(nl\/)?portfolio\/pillenpopper\/wachtlijst\/?$/.test(pathname)) return 'nl';
  if (/^\/portfolio\/pillenpopper\/waitlist\/?$/.test(pathname)) return 'en';
  return null;
}
