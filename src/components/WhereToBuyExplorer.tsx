'use client';

import { useMemo, useState } from 'react';
import {
  countries,
  products,
  retailPoints,
  salesChannels,
  type CountryKey,
  type ProductKey,
  type RetailPoint,
  type SalesChannel,
} from '@/data/whereToBuy';
import { assetPath } from '@/lib/sitePath';

type ProductFilter = ProductKey | 'all';

const channelLogos: Partial<Record<SalesChannel['channel'], { src: string; alt: string; className: string }>> = {
  Bol: { src: '/images/bol-logo.png', alt: 'bol logo', className: 'h-11 w-auto object-contain' },
  Amazon: { src: '/images/amazon-logo.png', alt: 'Amazon logo', className: 'h-10 w-auto max-w-full object-contain' },
  Kaufland: { src: '/images/kaufland-logo.png', alt: 'Kaufland logo', className: 'h-11 w-auto object-contain' },
};

function productMatches(filter: ProductFilter, product: ProductKey) {
  return filter === 'all' || filter === product;
}

function postcodeScore(input: string, point: RetailPoint) {
  const typed = input.toUpperCase().replace(/[^0-9A-Z]/g, '');
  const typedDigits = typed.match(/d{4}/)?.[0];
  const pointDigits = point.postcode.match(/d{4}/)?.[0];

  if (!typedDigits || !pointDigits) return null;

  const numericDistance = Math.abs(Number(typedDigits) - Number(pointDigits));
  const sameFirstTwo = typedDigits.slice(0, 2) === pointDigits.slice(0, 2) ? -350 : 0;
  const sameFirstThree = typedDigits.slice(0, 3) === pointDigits.slice(0, 3) ? -120 : 0;
  return Math.max(0, numericDistance + sameFirstTwo + sameFirstThree);
}

function scoreToLabel(score: number | null) {
  if (score === null) return null;
  if (score <= 8) return 'very close postcode area';
  if (score <= 45) return 'nearby postcode area';
  if (score <= 180) return 'regional match';
  return 'further away';
}

export function WhereToBuyExplorer() {
  const [product, setProduct] = useState<ProductFilter>('all');
  const [country, setCountry] = useState<CountryKey>('netherlands');
  const [zoom, setZoom] = useState(1);
  const [activePoint, setActivePoint] = useState<string | null>(retailPoints[0]?.name ?? null);
  const [postcode, setPostcode] = useState('');

  const visibleChannels = useMemo(
    () =>
      salesChannels.filter(
        (channel) => channel.country === country && productMatches(product, channel.product),
      ),
    [country, product],
  );

  const visibleRetailPoints = useMemo(() => {
    const points = retailPoints.filter(
      (point) => point.country === country && productMatches(product, point.product),
    );

    return [...points].sort((a, b) => {
      const scoreA = postcodeScore(postcode, a);
      const scoreB = postcodeScore(postcode, b);
      if (scoreA === null && scoreB === null) return 0;
      if (scoreA === null) return 1;
      if (scoreB === null) return -1;
      return scoreA - scoreB;
    });
  }, [country, postcode, product]);

  const selectedPoint = visibleRetailPoints.find((point) => point.name === activePoint) ?? visibleRetailPoints[0];
  const cityLabels = zoom >= 1.35;
  const streetLabels = zoom >= 1.85;

  return (
    <div className="space-y-10">
      <section className="rounded-card border border-border bg-card p-5">
        <div className="grid gap-5 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-muted">Brand</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {products.map((item) => (
                <button
                  className={`rounded-card border px-4 py-2 text-sm font-semibold transition ${
                    product === item.key
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-background text-muted hover:border-primary hover:text-primary'
                  }`}
                  key={item.key}
                  onClick={() => setProduct(item.key)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-muted">Country</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {countries.map((item) => (
                <button
                  className={`rounded-card border px-4 py-2 text-sm font-semibold transition ${
                    country === item.key
                      ? 'border-primary bg-primary text-white'
                      : 'border-border bg-background text-muted hover:border-primary hover:text-primary'
                  }`}
                  key={item.key}
                  onClick={() => setCountry(item.key)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-text">Online sales channels</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleChannels.length > 0 ? (
            visibleChannels.map((channel) => (
              <a
                className="rounded-card border border-border bg-card p-5 transition hover:border-primary hover:shadow-soft"
                href={channel.href}
                key={`${channel.product}-${channel.country}-${channel.channel}-${channel.title}`}
              >
                <div className="flex h-12 items-center">
                  {channelLogos[channel.channel] ? (
                    <img
                      alt={channelLogos[channel.channel]?.alt ?? channel.channel}
                      className={channelLogos[channel.channel]?.className}
                      src={assetPath(channelLogos[channel.channel]?.src ?? '')}
                    />
                  ) : (
                    <span className="text-2xl font-black tracking-tight text-text">{channel.channel}</span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text">{channel.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{channel.description}</p>
                {channel.note ? (
                  <p className="mt-4 text-xs font-semibold uppercase text-muted">{channel.note}</p>
                ) : null}
              </a>
            ))
          ) : (
            <div className="rounded-card border border-dashed border-border bg-card p-5 text-sm text-muted">
              No sales channels are listed for this combination yet.
            </div>
          )}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-card border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border p-4">
            <div>
              <h2 className="text-2xl font-semibold text-text">Retail map</h2>
              <p className="mt-1 text-sm text-muted">
                Static map-style view with zoom labels, pins and store popups.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                className="grid h-9 w-9 place-items-center rounded-card border border-border font-semibold text-text hover:border-primary hover:text-primary"
                onClick={() => setZoom((current) => Math.max(1, current - 0.25))}
                type="button"
              >
                -
              </button>
              <button
                className="grid h-9 w-9 place-items-center rounded-card border border-border font-semibold text-text hover:border-primary hover:text-primary"
                onClick={() => setZoom((current) => Math.min(2.25, current + 0.25))}
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <div className="relative h-[460px] overflow-hidden bg-[#cfe8ff]">
            <div
              className="absolute inset-0 transition-transform duration-300"
              style={{ transform: `scale(${zoom})`, transformOrigin: '46% 58%' }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,.22)_1px,transparent_1px)] bg-[length:42px_42px]" />
              <div className="absolute left-[22%] top-[12%] h-[76%] w-[55%] rounded-[45%_55%_48%_52%] bg-[#f8f7f3] shadow-inner" />
              <div className="absolute left-[14%] top-[9%] h-[74%] w-[18%] rounded-full bg-[#b8dbff]" />
              <div className="absolute left-[38%] top-[23%] h-[19%] w-[22%] rounded-[58%_42%_48%_52%] border border-primary/30 bg-white/80" />
              <div className="absolute left-[40%] top-[45%] h-[10%] w-[18%] rounded-[50%] border border-primary/30 bg-white/90" />
              <div className="absolute left-[37%] top-[58%] h-[16%] w-[21%] rounded-[45%_55%_48%_52%] border border-primary/30 bg-white/80" />
              <span className="absolute left-[43%] top-[33%] text-xs font-semibold text-muted">Den Haag</span>
              {cityLabels ? <span className="absolute left-[43%] top-[55%] text-xs font-semibold text-muted">Rijswijk</span> : null}
              {cityLabels ? <span className="absolute left-[41%] top-[70%] text-xs font-semibold text-muted">Delft</span> : null}
              {streetLabels ? <span className="absolute left-[51%] top-[45%] text-[10px] font-semibold text-muted">Javastraat</span> : null}
              {streetLabels ? <span className="absolute left-[35%] top-[60%] text-[10px] font-semibold text-muted">Herenstraat</span> : null}
              {streetLabels ? <span className="absolute left-[49%] top-[68%] text-[10px] font-semibold text-muted">Vestpoort</span> : null}
              {visibleRetailPoints.map((point) => (
                <button
                  className="absolute -translate-x-1/2 -translate-y-full"
                  key={point.name}
                  onClick={() => setActivePoint(point.name)}
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  type="button"
                >
                  <span className="relative grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-primary text-xs font-bold text-white shadow-soft">
                    iH
                    <span className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-2 rotate-45 bg-primary" />
                  </span>
                </button>
              ))}
            </div>
            {selectedPoint ? (
              <div className="absolute bottom-4 left-4 max-w-sm rounded-card border border-border bg-white p-4 shadow-soft">
                <h3 className="font-semibold text-text">{selectedPoint.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{selectedPoint.address.join(', ')}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a className="text-sm font-semibold text-primary" href={selectedPoint.moreInfoHref}>
                    More info
                  </a>
                  <a className="text-sm font-semibold text-primary" href={selectedPoint.directionsHref}>
                    Directions
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-text">Retail points</h2>
            <label className="mt-4 block text-sm font-semibold text-muted" htmlFor="postcode">
              Sort by Dutch postcode
            </label>
            <input
              className="mt-2 w-full rounded-card border border-border bg-card px-4 py-3 text-sm text-text outline-none transition focus:border-primary"
              id="postcode"
              onChange={(event) => setPostcode(event.target.value)}
              placeholder="Example: 2585 AG"
              value={postcode}
            />
            <p className="mt-2 text-xs leading-5 text-muted">
              Static postcode sorting uses postcode-prefix logic. It is a helpful estimate, not exact route distance.
            </p>
          </div>
          {visibleRetailPoints.length > 0 ? (
            visibleRetailPoints.map((point) => {
              const score = postcodeScore(postcode, point);
              return (
                <article className="rounded-card border border-border bg-card p-5" key={point.name}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-text">{point.name}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted">{point.address.join(', ')}</p>
                    </div>
                    {scoreToLabel(score) ? (
                      <span className="rounded-card bg-blue-50 px-3 py-1 text-xs font-semibold text-primary">
                        {scoreToLabel(score)}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      className="rounded-card border border-border px-3 py-2 text-sm font-semibold text-muted hover:border-primary hover:text-primary"
                      href={point.moreInfoHref}
                    >
                      More info
                    </a>
                    <a
                      className="rounded-card bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                      href={point.directionsHref}
                    >
                      Directions
                    </a>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="rounded-card border border-dashed border-border bg-card p-5 text-sm leading-6 text-muted">
              No physical retail points are listed for this combination yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

