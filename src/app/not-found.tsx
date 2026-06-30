import { ButtonLink } from '@/components/ButtonLink';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
      <p className="text-sm font-semibold uppercase text-primary">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-text">Page not found</h1>
      <p className="mt-4 leading-7 text-muted">
        The page you are looking for is not part of the current public Core Solutions
        Global website.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </section>
  );
}

