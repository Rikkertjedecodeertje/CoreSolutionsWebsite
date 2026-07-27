import { ButtonLink } from './ButtonLink';

export function SplitCta({ locale = 'en' }: { locale?: 'en' | 'nl' }) {
  const isNl = locale === 'nl';
  const prefix = isNl ? '/nl' : '';

  return (
    <section className="bg-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-px px-5 py-14 md:grid-cols-2 lg:px-8">
        <div className="border-b border-white/15 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10">
          <h2 className="text-3xl font-semibold leading-tight">
            {isNl ? 'Interesse in een product?' : 'Interested in a product?'}
          </h2>
          <p className="mt-4 leading-7 text-white/65">
            {isNl
              ? 'Bekijk de huidige productmerken en beschikbare verkoopkanalen.'
              : 'Explore current product brands and available sales channels.'}
          </p>
          <div className="mt-6">
            <ButtonLink
              className="border-white bg-white text-dark hover:border-secondary hover:bg-background"
              href={`${prefix}/where-to-buy/`}
              variant="secondary"
            >
              {isNl ? 'Waar te koop' : 'Where to buy'}
            </ButtonLink>
          </div>
        </div>
        <div className="pt-8 md:pl-10 md:pt-0">
          <h2 className="text-3xl font-semibold leading-tight">
            {isNl
              ? 'Interesse in een samenwerking of retailmogelijkheid?'
              : 'Interested in a collaboration or retail opportunity?'}
          </h2>
          <p className="mt-4 leading-7 text-white/65">
            {isNl
              ? 'Neem contact op met Core Solutions voor product-, retail- en samenwerkingsvragen.'
              : 'Contact Core Solutions for product, retail and partnership inquiries.'}
          </p>
          <div className="mt-6">
            <ButtonLink
              className="border-white bg-white text-dark hover:border-secondary hover:bg-background"
              href={`${prefix}/contact/`}
              variant="secondary"
            >
              {isNl ? 'Neem contact op' : 'Get in touch'}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

