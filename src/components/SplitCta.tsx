import { ButtonLink } from './ButtonLink';

export function SplitCta({ locale = 'en', prelaunch = false }: { locale?: 'en' | 'nl'; prelaunch?: boolean }) {
  const isNl = locale === 'nl';
  const prefix = isNl ? '/nl' : '';

  return (
    <section className="bg-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-px px-5 py-14 md:grid-cols-2 lg:px-8">
        <div className="flex h-full flex-col border-b border-white/15 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10">
          <h2 className="text-3xl font-semibold leading-tight">
            {prelaunch ? (isNl ? 'Interesse in de PillenPopper?' : 'Interested in the PillenPopper?') : (isNl ? 'Interesse in een product?' : 'Interested in a product?')}
          </h2>
          <p className="mt-4 leading-7 text-white/65">
            {prelaunch
              ? (isNl ? 'Neem contact op voor actuele productinformatie en nieuws over de marktintroductie.' : 'Contact us for current product information and launch updates.')
              : (isNl ? 'Bekijk de huidige productmerken en beschikbare verkoopkanalen.' : 'Explore current product brands and available sales channels.')}
          </p>
          <div className="mt-auto pt-6">
            <ButtonLink
              className="border-white bg-white text-dark hover:border-secondary hover:bg-background"
              href={prelaunch ? `${prefix}/contact/` : `${prefix}/where-to-buy/`}
              variant="secondary"
            >
              {prelaunch ? (isNl ? 'Vraag productinformatie' : 'Ask about the PillenPopper') : (isNl ? 'Waar te koop' : 'Where to buy')}
            </ButtonLink>
          </div>
        </div>
        <div className="flex h-full flex-col pt-8 md:pl-10 md:pt-0">
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
          <div className="mt-auto pt-6">
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

