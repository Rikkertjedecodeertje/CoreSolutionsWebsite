import Link from 'next/link';
import styles from './PillenPopperSignup.module.css';

const forms = {
  nl: {
    action: 'https://docs.google.com/forms/d/e/1FAIpQLScYbL7pi9GWUlsYyJu5UQgV9Uf7MewXLauiP2DHtGiDV8huWw/formResponse',
    consent: 'Ik geef Core Solutions toestemming om mij per e-mail te informeren over de ontwikkeling van de PillenPopper.. Ik kan deze toestemming altijd intrekken.',
    title: 'Een seintje zodra je kunt bestellen?',
    description: 'Laat je e-mailadres achter voor nieuws over de lancering en crowdfunding.',
    label: 'E-mailadres', placeholder: 'jij@voorbeeld.nl', button: 'Aanmelden',
    note: 'Met je aanmelding geef je toestemming voor e-mails over de PillenPopper. Afmelden kan altijd.',
    privacy: 'Privacybeleid',
  },
  en: {
    action: 'https://docs.google.com/forms/d/e/1FAIpQLSfhYgxX2t9pPDu5atJ91slB44yTtPvc7q9kFONZnGRmdcQCQA/formResponse',
    consent: 'I consent to receiving emails from Core Solutions about the development of the PillenPopper. I can withdraw my consent at any time.',
    title: 'Get notified when you can order.',
    description: 'Leave your email for news about the launch and crowdfunding.',
    label: 'Email address', placeholder: 'you@example.com', button: 'Sign up',
    note: 'By signing up, you agree to receive emails about the PillenPopper. You can unsubscribe at any time.',
    privacy: 'Privacy policy',
  },
};

export function PillenPopperSignup({ locale = 'en', id = 'updates' }: { locale?: 'en' | 'nl'; id?: string }) {
  const text = forms[locale];
  return (
    <section className={styles.section} id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{text.title}</h2>
      <p className={styles.description}>{text.description}</p>
      {/* Native submission shows Google's actual confirmation rather than assuming
          that an opaque cross-origin request was successfully recorded. */}
      <form action={`${text.action}?hl=${locale}`} method="post" acceptCharset="UTF-8" className={styles.form}>
        <label htmlFor={`${id}-email`}>{text.label}</label>
        <div className={styles.fields}>
          <input id={`${id}-email`} name="emailAddress" type="email" autoComplete="email" inputMode="email" required maxLength={254} placeholder={text.placeholder} />
          <button type="submit">{text.button}</button>
        </div>
        <input type="hidden" name="entry.1738661748" value={text.consent} />
        <input type="hidden" name="entry.1738661748_sentinel" value="" />
        <input type="hidden" name="fvv" value="1" />
        <input type="hidden" name="pageHistory" value="0" />
        <p className={styles.note}>{text.note} <Link href={locale === 'nl' ? '/nl/privacy-policy/' : '/privacy-policy/'}>{text.privacy}</Link>.</p>
      </form>
    </section>
  );
}
