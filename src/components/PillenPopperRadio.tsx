import { assetPath } from '@/lib/sitePath';

const recordings = [
  {
    id: 'radio-west',
    title: 'West Wordt Wakker · Omroep West',
    dateTime: '2026-11-06',
    date: { nl: '6 november 2026', en: '6 November 2026' },
    duration: '5:32',
    source: '/audio/pillenpopper-radio-west-2026-11-06.mp3',
  },
  {
    id: 'omroep-delft',
    title: 'Omroep Delft',
    dateTime: '2026-11-04',
    date: { nl: '4 november 2026', en: '4 November 2026' },
    duration: '14:54',
    source: '/audio/pillenpopper-omroep-delft-2026-11-04.mp3',
  },
];

export function PillenPopperRadio({ locale }: { locale: 'nl' | 'en' }) {
  const nl = locale === 'nl';

  return (
    <section className="mx-auto max-w-3xl px-5 py-14 sm:px-8" aria-labelledby="radio-title">
      <a className="text-sm font-semibold text-primary underline" href={assetPath(nl ? '/nl/portfolio/pillenpopper/' : '/portfolio/pillenpopper/')}>
        {nl ? 'Terug naar de PillenPopper' : 'Back to the PillenPopper'}
      </a>
      <h1 id="radio-title" className="mb-6 mt-4 text-3xl font-semibold text-text sm:text-4xl">
        {nl ? 'De PillenPopper op de radio' : 'The PillenPopper on the radio'}
      </h1>
      <div className="grid gap-4">
        {recordings.map(({ id, title, dateTime, date, duration, source }) => (
          <article className="scroll-mt-28 rounded-card border border-border bg-card p-5 shadow-soft sm:p-6" id={id} key={id} aria-labelledby={id + '-title'}>
            <h2 className="text-xl font-semibold text-text" id={id + '-title'}>{title}</h2>
            <p className="mt-1 text-sm text-muted">
              <time dateTime={dateTime}>{date[locale]}</time> · {duration}{!nl && ' · In Dutch'}
            </p>
            <audio aria-labelledby={id + '-title'} className="mt-4 w-full" controls preload="none" src={assetPath(source)} />
            <a className="mt-3 inline-block text-sm font-semibold text-primary underline" href={assetPath(source)} download>
              {nl ? 'Download de mp3' : 'Download the MP3'}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
