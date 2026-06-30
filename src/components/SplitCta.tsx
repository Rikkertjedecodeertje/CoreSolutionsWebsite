import { ButtonLink } from './ButtonLink';

export function SplitCta() {
  return (
    <section className="bg-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-px px-5 py-14 md:grid-cols-2 lg:px-8">
        <div className="border-b border-slate-700 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10">
          <h2 className="text-3xl font-semibold leading-tight">Interested in a product?</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Explore current product brands and available sales channels.
          </p>
          <div className="mt-6">
            <ButtonLink
              className="border-white bg-white text-dark hover:bg-slate-100"
              href="/where-to-buy/"
              variant="secondary"
            >
              Where to buy
            </ButtonLink>
          </div>
        </div>
        <div className="pt-8 md:pl-10 md:pt-0">
          <h2 className="text-3xl font-semibold leading-tight">
            Interested in a collaboration or retail opportunity?
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Contact Core Solutions for product, retail and partnership inquiries.
          </p>
          <div className="mt-6">
            <ButtonLink
              className="border-white bg-white text-dark hover:bg-slate-100"
              href="/contact/"
              variant="secondary"
            >
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

