import { ButtonLink } from './ButtonLink';

type CtaBlockProps = {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CtaBlock({ title, description, buttonLabel, buttonHref }: CtaBlockProps) {
  return (
    <section className="bg-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
          {description ? <p className="mt-4 leading-7 text-slate-300">{description}</p> : null}
        </div>
        <ButtonLink className="border-white bg-white text-dark hover:bg-slate-100" href={buttonHref} variant="secondary">
          {buttonLabel}
        </ButtonLink>
      </div>
    </section>
  );
}

