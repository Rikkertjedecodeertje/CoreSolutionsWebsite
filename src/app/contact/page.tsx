import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { SectionHeader } from '@/components/SectionHeader';
import { assetPath } from '@/lib/sitePath';

function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Core Solutions for collaborations, retail opportunities and general inquiries.',
  openGraph: {
    title: 'Contact | Core Solutions',
    description: 'Get in touch with Core Solutions by email for retail or collaboration inquiries.',
    url: '/contact/',
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-3 sm:grid-cols-[160px_1fr] sm:items-start">

          <div className="text-center sm:text-left">
            <img
              alt="Rik van Wieren"
              className="mx-auto h-28 w-28 rounded-full border border-border object-cover shadow-sm sm:mx-0"
              src={assetPath('/images/rik-van-wieren-profile.png')}
            />
            <h2 className="mt-4 whitespace-nowrap text-lg font-semibold text-text">Rik van Wieren</h2>
            <p className="mt-1 max-w-40 text-xs font-semibold uppercase text-muted">Founder @ Core Solutions</p>
            <a
              className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-card border border-border bg-card px-5 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
              href="https://www.linkedin.com/in/rikvwieren/"
            >
              <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 8.98H3.88V20h3.06V8.98ZM5.41 4a1.78 1.78 0 1 0 0 3.56A1.78 1.78 0 0 0 5.41 4Zm15.02 9.7c0-3.05-1.63-4.47-3.8-4.47a3.27 3.27 0 0 0-2.96 1.63h-.04V8.98h-2.94V20h3.06v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.06v-6.3h-.21Z" />
              </svg>
              Connect
            </a>
          </div>

          <div>

            <SectionHeader

              description="For collaborations, retail opportunities and general inquiries, contact Rik van Wieren directly by email."

              eyebrow="Contact"

              title="Get in touch"

            />

            <div className="mt-8 flex items-center">

              <ButtonLink href="mailto:contact@coresolutionsglobal.com?subject=Core%20Solutions%20inquiry">

                Email Rik van Wieren

              </ButtonLink>

            </div>

          </div>

        </div>


        <div className="rounded-card border border-border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-text">Core Solutions</h2>
          <p className="mt-2 text-sm font-semibold uppercase text-muted">
            Product Development Studio & Brand Portfolio
          </p>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-sm font-semibold uppercase text-muted">Email</dt>
              <dd className="mt-2 text-text">
                <a
                  className="font-semibold text-primary hover:text-blue-700"
                  href="mailto:contact@coresolutionsglobal.com"
                >
                  contact@coresolutionsglobal.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase text-muted">KvK</dt>
              <dd className="mt-2 text-text">78279070</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-card border border-border bg-card shadow-sm">
        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
          <div className="p-6">
            <div className="flex items-center gap-3 text-primary">
              <PinIcon />
              <p className="text-sm font-semibold uppercase">The Hague, Netherlands</p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-text">
              Core Solutions operates from The Hague, the Netherlands.
            </h2>
          </div>
          <img
            alt="The Hague skyline"
            className="h-72 w-full object-cover md:h-full"
            src={assetPath('/images/the-hague-skyline.png')}
          />
        </div>
      </div>
    </section>
  );
}
