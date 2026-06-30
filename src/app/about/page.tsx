import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { SectionHeader } from '@/components/SectionHeader';
import { SplitCta } from '@/components/SplitCta';
import { assetPath } from '@/lib/sitePath';

const whatWeDo = [
  'Problem validation',
  'Product concept development',
  'Prototyping and supplier coordination',
  'Branding and packaging',
  'Marketplace and e-commerce sales',
];

const howWeWork = [
  'Question every requirement',
  'Delete any part or process possible',
  'Simplify and optimize',
  'Accelerate cycle time',
  'Automate',
];

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.98H3.88V20h3.06V8.98ZM5.41 4a1.78 1.78 0 1 0 0 3.56A1.78 1.78 0 0 0 5.41 4Zm15.02 9.7c0-3.05-1.63-4.47-3.8-4.47a3.27 3.27 0 0 0-2.96 1.63h-.04V8.98h-2.94V20h3.06v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.06v-6.3h-.21Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Core Solutions is the product and brand portfolio of Rik van Wieren, focused on practical consumer products.',
  openGraph: {
    title: 'About | Core Solutions',
    description: 'Learn how Core Solutions develops practical product brands from real everyday problems.',
    url: '/about/',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.35fr_0.65fr] lg:items-start lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-primary">About</p>
            <h1 className="hero-title font-semibold text-text">Core Solutions</h1>
            <div className="mt-8 grid gap-5 text-base leading-7 text-muted md:grid-cols-2">
              <p className="rounded-card border border-border bg-background p-5">
                Core Solutions is the product and brand portfolio of Rik van Wieren. The company focuses on practical consumer products that are designed around real user problems, tested in the market, and commercialized online and offline.
              </p>
              <p className="rounded-card border border-border bg-background p-5">
                Rik started experimenting with entrepreneurship at 14 after becoming frustrated by expensive USB-C cables. A first €80 supplier batch taught him sourcing, pricing, customer feedback and selling products people actually need.
              </p>
              <p className="rounded-card border border-border bg-background p-5">
                During the COVID period, Rik developed Neusbruggetje, a practical aid designed to reduce fogged glasses while wearing a face mask. The response introduced him to the healthcare sector and practical problems in vulnerable environments.
              </p>
              <p className="rounded-card border border-border bg-background p-5">
                That perspective later led to research into making plastic use in healthcare more circular. The project was paused, but it sharpened the direction behind Core Solutions: tangible products for real everyday problems.
              </p>
            </div>
            <p className="mt-5 rounded-card border border-primary/20 bg-blue-50 p-5 leading-7 text-muted">
              Today, the portfolio includes brands such as iHeel® and BATBOX®, with each product built around practical use, real feedback and clear commercial execution.
            </p>
          </div>

          <aside className="rounded-card border border-border bg-background p-5 shadow-sm">
            <img
              alt="Rik van Wieren, founder of Core Solutions"
              className="mx-auto h-44 w-44 rounded-full object-cover"
              src={assetPath('/images/rik-van-wieren-profile.png')}
            />
            <div className="mt-5 text-center">
              <h2 className="text-2xl font-semibold text-text">Rik van Wieren</h2>
              <p className="mt-1 text-sm font-semibold uppercase text-muted">Founder @ Core Solutions</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a className="inline-flex min-h-11 items-center gap-2 rounded-card border border-border bg-card px-4 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary" href="https://www.linkedin.com/in/rikvwieren/">
                  <LinkedinIcon />
                  Connect
                </a>
                <ButtonLink href="/contact/" variant="primary">
                  <span className="inline-flex items-center gap-2"><MailIcon />Contact</span>
                </ButtonLink>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader
            description="A practical set of activities that take a product from idea to sales."
            title="What we do"
          />
          <div className="relative mt-10 overflow-hidden rounded-card border border-border bg-card p-6">
            <div className="absolute left-8 top-12 h-[calc(100%-6rem)] w-1 bg-blue-100" />
            <div className="space-y-6">
              {whatWeDo.map((item, index) => (
                <div className="relative flex gap-5" key={item}>
                  <span className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white shadow-sm">
                    {index + 1}
                  </span>
                  <div className="rounded-card border border-border bg-background px-4 py-3 shadow-sm">
                    <p className="font-semibold text-text">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <SectionHeader
            description="The operating rhythm is inspired by simplification, speed and repeatable execution."
            title="How we work"
          />
          <div className="mt-10 overflow-hidden rounded-card border border-border bg-card p-6">
            <div className="relative mx-auto flex min-h-[560px] max-w-md justify-center">
              <div className="absolute bottom-6 top-16 w-2 rounded-full bg-gradient-to-t from-blue-100 via-primary/30 to-primary" />
              <div className="absolute top-0 z-10 rounded-full bg-primary px-5 py-2 text-sm font-bold uppercase text-white shadow-soft">
                Launch
              </div>
              <div className="absolute top-12 z-10 h-32 w-24 rounded-t-full border border-border bg-white shadow-soft">
                <div className="mx-auto mt-8 h-11 w-11 rounded-full border-4 border-blue-100 bg-primary/15" />
                <div className="absolute -bottom-8 left-3 h-12 w-6 skew-y-12 rounded bg-primary/20" />
                <div className="absolute -bottom-8 right-3 h-12 w-6 -skew-y-12 rounded bg-primary/20" />
                <div className="absolute -bottom-16 left-1/2 h-16 w-10 -translate-x-1/2 rounded-b-full bg-gradient-to-b from-primary/70 to-transparent" />
              </div>
              <div className="relative z-20 mt-44 flex w-full flex-col-reverse gap-5">
                {howWeWork.map((item, index) => (
                  <div
                    className={`flex items-center gap-4 rounded-card border border-border bg-background p-4 shadow-sm ${
                      index % 2 === 0 ? 'mr-12' : 'ml-12'
                    }`}
                    key={item}
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-dark text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="font-semibold text-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>        </div>
      </section>

      <SplitCta />
    </>
  );
}
