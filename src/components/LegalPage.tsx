import Link from 'next/link';
import { legalContent, type LegalLocale, type PolicyKind } from '@/data/legal';
const policyPaths: Record<PolicyKind, string> = { privacy: '/privacy-policy/', terms: '/terms-and-conditions/', cookie: '/cookie-policy/' };
export function LegalPage({ locale, kind }: { locale: LegalLocale; kind: PolicyKind }) {
  const policy = legalContent[locale][kind];
  const prefix = locale === 'nl' ? '/nl' : '';
  return (
    <article className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
      <header className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase text-steel">{locale === 'nl' ? 'Juridisch' : 'Legal'}</p>
        <h1 className="text-3xl font-semibold leading-tight text-text">{policy.title}</h1>
        <p className="mt-4 leading-7 text-muted">{policy.description}</p>
        <p className="mt-4 text-sm text-muted">{locale === 'nl' ? 'Laatst bijgewerkt: ' : 'Last updated: '}<time dateTime="2026-10-07">{locale === 'nl' ? '7 oktober 2026' : '7 October 2026'}</time></p>
      </header>
      <div className="mt-8 space-y-8 rounded-card border border-border bg-card p-6 text-sm leading-7 text-muted sm:p-8">
        {policy.sections.map(section => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold leading-7 text-text">{section.heading}</h2>
            <div className="mt-3 space-y-3">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
            {section.table ? (
              <div className="mt-4 overflow-x-auto rounded-md border border-border" role="region" aria-label={section.heading} tabIndex={0}>
                <table className="w-full min-w-[640px] border-collapse text-left text-sm leading-6">
                  <caption className="sr-only">{section.heading}</caption>
                  <thead className="bg-background text-text"><tr>{section.table.headers.map(header => <th className="px-4 py-3 align-top font-semibold" scope="col" key={header}>{header}</th>)}</tr></thead>
                  <tbody>{section.table.rows.map(row => <tr className="border-t border-border" key={row[0]}>{row.map((cell, index) => index === 0 ? <th className="px-4 py-3 align-top font-medium text-text" scope="row" key={index}>{cell}</th> : <td className="px-4 py-3 align-top" key={index}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            ) : null}
            {section.links ? <ul className="mt-4 list-disc space-y-2 pl-5">{section.links.map(link => <li key={link.href}><a className="break-words font-medium text-steel underline underline-offset-4 hover:text-primary" href={link.href} rel="noopener noreferrer" target="_blank">{link.label}</a></li>)}</ul> : null}
          </section>
        ))}
      </div>
      <aside className="mt-8 space-y-4 border-t border-border pt-6 text-sm leading-7 text-muted">
        <p>{locale === 'nl' ? 'Vragen? Mail ' : 'Questions? Email '}<a className="break-all font-semibold text-steel underline underline-offset-4 hover:text-primary" href="mailto:contact@coresolutionsglobal.com">contact@coresolutionsglobal.com</a>.</p>
        <nav aria-label={locale === 'nl' ? "Gerelateerde juridische pagina's" : 'Related legal pages'} className="flex flex-wrap gap-x-6 gap-y-2">
          {(Object.keys(policyPaths) as PolicyKind[]).filter(item => item !== kind).map(item => <Link className="font-semibold text-steel underline underline-offset-4 hover:text-primary" href={prefix + policyPaths[item]} key={item}>{legalContent[locale][item].title}</Link>)}
        </nav>
      </aside>
    </article>
  );
}
