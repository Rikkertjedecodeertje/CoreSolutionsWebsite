'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronDown,
  Clock3,
  Crosshair,
  ExternalLink,
  Globe2,
  LocateFixed,
  MapPin,
  Navigation,
  Phone,
  Search,
  Store,
  X,
} from 'lucide-react';
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
type SearchOrigin = { lat: number; lon: number; label: string };
type MapBundle = {
  map: import('leaflet').Map;
  markers: Map<string, import('leaflet').Marker>;
};

const copy = {
  en: {
    storePhotoMissing: 'Store photo not yet supplied',
    initialSearch: 'Enter a Dutch postcode or use your current location.',
    checkingLocation: 'Checking whether your browser location is available…',
    yourLocation: 'Your location',
    locationShown: 'Your location is shown on the map; stores are sorted by distance.',
    locationUnavailable:
      'Browser location was not available. Enter a postcode to place your location pin.',
    invalidPostcode: 'Enter a complete Dutch postcode, for example 2585 AG.',
    locatingPostcode: 'Locating postcode…',
    postcodeNotFound: 'That postcode could not be located. Check it and try again.',
    postcodeUnavailable: 'Postcode search is temporarily unavailable. Please try again later.',
    locationUnsupported: 'Location services are not supported by this browser.',
    findingLocation: 'Finding your location…',
    locationSorted: 'Stores are sorted by straight-line distance from your location.',
    permissionUnavailable: 'Location permission was not available. Try a postcode instead.',
    brand: 'Brand',
    country: 'Country',
    allBrands: 'All brands',
    shopOnline: 'Shop online',
    onlineChannels: 'Online sales channels',
    linkSoon: 'Link coming soon',
    visitChannel: 'Visit channel',
    noChannels: 'No sales channels are listed for this combination yet.',
    storeLocator: 'Store locator',
    findRetailer: 'Find a physical retailer',
    locatorDescription:
      'Search by postcode, use your location or select a pin. Distances are straight-line estimates; the route button opens your maps application.',
    searchPostcode: 'Search near a Dutch postcode',
    postcodeExample: 'Example: 2585 AG',
    find: 'Find',
    useLocation: 'Use my location',
    clear: 'Clear',
    noRetailers: 'No physical retailers listed',
    noRetailersHint: 'Try iHeel® in the Netherlands or use an online channel.',
    selectedRetailer: 'Selected retailer',
    storeWebsite: 'Store website',
    openingHours: 'Opening hours',
    expand: 'Expand',
    collapse: 'Collapse',
    directions: 'Directions',
    hoursWarning: 'Opening hours can change. Check with the retailer before travelling.',
    selectRetailer: 'Select a listed retailer to see details.',
    mapCredit: 'Map and postcode lookup data by OpenStreetMap contributors and Nominatim.',
    postcodeDistance: (postcode: string) =>
      `Stores are sorted by straight-line distance from ${postcode}.`,
  },
  nl: {
    storePhotoMissing: 'Winkelfoto nog niet aangeleverd',
    initialSearch: 'Voer een Nederlandse postcode in of gebruik je huidige locatie.',
    checkingLocation: 'Controleren of je browserlocatie beschikbaar is…',
    yourLocation: 'Jouw locatie',
    locationShown: 'Jouw locatie staat op de kaart; winkels zijn op afstand gesorteerd.',
    locationUnavailable:
      'Je browserlocatie was niet beschikbaar. Voer een postcode in om je locatiepin te plaatsen.',
    invalidPostcode: 'Voer een volledige Nederlandse postcode in, bijvoorbeeld 2585 AG.',
    locatingPostcode: 'Postcode zoeken…',
    postcodeNotFound: 'Deze postcode kon niet worden gevonden. Controleer hem en probeer opnieuw.',
    postcodeUnavailable: 'Postcode zoeken is tijdelijk niet beschikbaar. Probeer het later opnieuw.',
    locationUnsupported: 'Locatieservices worden niet door deze browser ondersteund.',
    findingLocation: 'Jouw locatie bepalen…',
    locationSorted: 'Winkels zijn gesorteerd op hemelsbrede afstand vanaf jouw locatie.',
    permissionUnavailable: 'Locatietoestemming was niet beschikbaar. Probeer een postcode.',
    brand: 'Merk',
    country: 'Land',
    allBrands: 'Alle merken',
    shopOnline: 'Online kopen',
    onlineChannels: 'Online verkoopkanalen',
    linkSoon: 'Link volgt binnenkort',
    visitChannel: 'Bekijk verkoopkanaal',
    noChannels: 'Voor deze combinatie zijn nog geen verkoopkanalen vermeld.',
    storeLocator: 'Winkelzoeker',
    findRetailer: 'Vind een fysieke winkel',
    locatorDescription:
      'Zoek op postcode, gebruik je locatie of selecteer een pin. Afstanden zijn hemelsbrede schattingen; de routeknop opent je kaarten-app.',
    searchPostcode: 'Zoek bij een Nederlandse postcode',
    postcodeExample: 'Voorbeeld: 2585 AG',
    find: 'Zoeken',
    useLocation: 'Gebruik mijn locatie',
    clear: 'Wissen',
    noRetailers: 'Geen fysieke winkels vermeld',
    noRetailersHint: 'Probeer iHeel® in Nederland of gebruik een online verkoopkanaal.',
    selectedRetailer: 'Geselecteerde winkel',
    storeWebsite: 'Website van winkel',
    openingHours: 'Openingstijden',
    expand: 'Uitklappen',
    collapse: 'Inklappen',
    directions: 'Route',
    hoursWarning: 'Openingstijden kunnen wijzigen. Controleer dit bij de winkel voor vertrek.',
    selectRetailer: 'Selecteer een vermelde winkel om details te bekijken.',
    mapCredit: 'Kaart- en postcodegegevens van OpenStreetMap-bijdragers en Nominatim.',
    postcodeDistance: (postcode: string) =>
      `Winkels zijn gesorteerd op hemelsbrede afstand vanaf ${postcode}.`,
  },
};

const countryLabelsNl: Record<CountryKey, string> = {
  netherlands: 'Nederland',
  belgium: 'België',
  germany: 'Duitsland',
  italy: 'Italië',
  france: 'Frankrijk',
  slovakia: 'Slowakije',
  czechia: 'Tsjechië',
  poland: 'Polen',
  austria: 'Oostenrijk',
};

const dayLabelsNl: Record<string, string> = {
  Monday: 'Maandag',
  Tuesday: 'Dinsdag',
  Wednesday: 'Woensdag',
  Thursday: 'Donderdag',
  Friday: 'Vrijdag',
  Saturday: 'Zaterdag',
  Sunday: 'Zondag',
};

function localizedChannel(channel: SalesChannel, locale: 'en' | 'nl') {
  if (locale === 'en') {
    return {
      title: channel.title,
      description: channel.description,
      note: channel.note,
    };
  }

  if (channel.channel === 'iHeelpads.com') {
    return {
      title: 'Super Value 10-Pack',
      description:
        'Exclusief aanbod in de eigen webshop voor vaste klanten: de Super Value 10-Pack met 20 stuks.',
      note: undefined,
    };
  }

  if (channel.product === 'batbox') {
    return {
      title: 'BATBOX® Tester',
      description: 'Beschikbaar in Nederland en België.',
      note: channel.note ? 'Marketplace-link wordt toegevoegd.' : undefined,
    };
  }

  return {
    title: `iHeel® bij ${channel.channel}`,
    description:
      channel.channel === 'Bol'
        ? 'Beschikbaar via Bol in Nederland en België.'
        : channel.channel === 'Amazon'
          ? 'Beschikbaar via Amazon in geselecteerde markten.'
          : 'Beschikbaar via Kaufland Marketplace in dit land.',
    note: channel.note ? 'Landspecifieke marketplace-link wordt toegevoegd.' : undefined,
  };
}

const channelLogos: Partial<
  Record<SalesChannel['channel'], { src: string; alt: string; className: string }>
> = {
  Bol: {
    src: '/images/bol-logo.png',
    alt: 'bol logo',
    className: 'h-11 w-auto object-contain',
  },
  Amazon: {
    src: '/images/amazon-logo.png',
    alt: 'Amazon logo',
    className: 'h-10 w-auto max-w-full object-contain',
  },
  Kaufland: {
    src: '/images/kaufland-logo.png',
    alt: 'Kaufland logo',
    className: 'h-11 w-auto object-contain',
  },
  'iHeelpads.com': {
    src: '/images/iheel-logo.svg',
    alt: 'iHeel logo',
    className: 'h-12 w-40 object-contain object-left',
  },
};

function productMatches(filter: ProductFilter, product: ProductKey) {
  return filter === 'all' || filter === product;
}

function distanceInKm(origin: SearchOrigin, point: RetailPoint) {
  const radius = 6371;
  const lat1 = (origin.lat * Math.PI) / 180;
  const lat2 = (point.lat * Math.PI) / 180;
  const deltaLat = ((point.lat - origin.lat) * Math.PI) / 180;
  const deltaLon = ((point.lon - origin.lon) * Math.PI) / 180;
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
  return radius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function routeUrl(point: RetailPoint) {
  const destination = encodeURIComponent(`${point.lat},${point.lon}`);
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
}

function StorePhoto({ point, locale }: { point: RetailPoint; locale: 'en' | 'nl' }) {
  if (point.photo) {
    return (
      <img
        alt={point.photoAlt ?? point.name}
        className="h-44 w-full object-cover"
        src={assetPath(point.photo)}
      />
    );
  }

  return (
    <div className="grid h-44 place-items-center bg-background">
      <div className="text-center">
        <img
          alt=""
          className="mx-auto h-16 w-16 object-contain opacity-70"
          src={assetPath('/images/core-solutions-logo.png')}
        />
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          {copy[locale].storePhotoMissing}
        </p>
      </div>
    </div>
  );
}

export function WhereToBuyExplorer({ locale = 'en' }: { locale?: 'en' | 'nl' }) {
  const text = copy[locale];
  const [product, setProduct] = useState<ProductFilter>('all');
  const [country, setCountry] = useState<CountryKey>('netherlands');
  const [activePointId, setActivePointId] = useState<string | null>(
    retailPoints[0]?.id ?? null,
  );
  const [postcode, setPostcode] = useState('');
  const [searchOrigin, setSearchOrigin] = useState<SearchOrigin | null>(null);
  const [searchMessage, setSearchMessage] = useState(text.initialSearch);
  const [searching, setSearching] = useState(false);
  const mapElementRef = useRef<HTMLDivElement>(null);
  const mapBundleRef = useRef<MapBundle | null>(null);
  const autoLocateAttemptedRef = useRef(false);

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
    if (!searchOrigin) return points;
    return [...points].sort(
      (a, b) => distanceInKm(searchOrigin, a) - distanceInKm(searchOrigin, b),
    );
  }, [country, product, searchOrigin]);

  const visiblePointKey = visibleRetailPoints.map((point) => point.id).join('|');
  const selectedPoint =
    visibleRetailPoints.find((point) => point.id === activePointId) ?? visibleRetailPoints[0];

  useEffect(() => {
    if (!visibleRetailPoints.some((point) => point.id === activePointId)) {
      setActivePointId(visibleRetailPoints[0]?.id ?? null);
    }
  }, [activePointId, visiblePointKey, visibleRetailPoints]);

  useEffect(() => {
    if (autoLocateAttemptedRef.current || !navigator.geolocation) return;
    autoLocateAttemptedRef.current = true;
    setSearching(true);
    setSearchMessage(text.checkingLocation);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSearchOrigin({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          label: text.yourLocation,
        });
        setSearchMessage(text.locationShown);
        setSearching(false);
      },
      () => {
        setSearchMessage(text.locationUnavailable);
        setSearching(false);
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 },
    );
  }, [text]);

  useEffect(() => {
    let cancelled = false;

    async function buildMap() {
      const element = mapElementRef.current;
      if (!element) return;

      const L = await import('leaflet');
      if (cancelled) return;

      mapBundleRef.current?.map.remove();

      const map = L.map(element, {
        scrollWheelZoom: true,
        zoomControl: true,
      }).setView([52.05, 4.33], 11);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const markers = new Map<string, import('leaflet').Marker>();
      visibleRetailPoints.forEach((point, index) => {
        const markerIcon = L.divIcon({
          className: 'store-marker-shell',
          html: `<span class="store-marker"><span class="store-marker-number">${index + 1}</span></span>`,
          iconAnchor: [21, 42],
          iconSize: [42, 42],
          tooltipAnchor: [0, -38],
        });
        const marker = L.marker([point.lat, point.lon], { icon: markerIcon })
          .addTo(map)
          .bindTooltip(point.name, { direction: 'top', offset: [0, -8] });
        marker.on('click', () => setActivePointId(point.id));
        markers.set(point.id, marker);
      });

      const locations = visibleRetailPoints.map(
        (point) => [point.lat, point.lon] as [number, number],
      );

      if (searchOrigin) {
        const originIcon = L.divIcon({
          className: '',
          html: '<span class="search-origin-marker"><span class="search-origin-dot"></span></span>',
          iconAnchor: [12, 12],
          iconSize: [24, 24],
        });
        L.marker([searchOrigin.lat, searchOrigin.lon], { icon: originIcon })
          .addTo(map)
          .bindTooltip(searchOrigin.label, { direction: 'top' });
        locations.push([searchOrigin.lat, searchOrigin.lon]);
      }

      if (locations.length > 0) {
        map.fitBounds(L.latLngBounds(locations), {
          padding: [42, 42],
          maxZoom: searchOrigin ? 13 : 12,
        });
      }

      mapBundleRef.current = { map, markers };
      window.setTimeout(() => map.invalidateSize(), 0);
    }

    void buildMap();

    return () => {
      cancelled = true;
      mapBundleRef.current?.map.remove();
      mapBundleRef.current = null;
    };
  }, [searchOrigin, visiblePointKey, visibleRetailPoints]);

  useEffect(() => {
    if (!activePointId || !mapBundleRef.current) return;
    const marker = mapBundleRef.current.markers.get(activePointId);
    if (!marker) return;
    mapBundleRef.current.map.panTo(marker.getLatLng());
    marker.openTooltip();
  }, [activePointId]);

  async function searchPostcode(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = postcode.trim().toUpperCase();

    if (!/^\d{4}\s?[A-Z]{2}$/.test(normalized)) {
      setSearchMessage(text.invalidPostcode);
      return;
    }

    setSearching(true);
    setSearchMessage(text.locatingPostcode);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&countrycodes=nl&limit=1&q=${encodeURIComponent(
          `${normalized}, Netherlands`,
        )}`,
        { headers: { Accept: 'application/json' } },
      );

      if (!response.ok) throw new Error('Postcode service unavailable');
      const results = (await response.json()) as Array<{
        lat: string;
        lon: string;
        display_name: string;
      }>;
      const match = results[0];
      if (!match) {
        setSearchMessage(text.postcodeNotFound);
        return;
      }

      setSearchOrigin({
        lat: Number(match.lat),
        lon: Number(match.lon),
        label: normalized,
      });
      setSearchMessage(text.postcodeDistance(normalized));
    } catch {
      setSearchMessage(text.postcodeUnavailable);
    } finally {
      setSearching(false);
    }
  }

  function useCurrentLocation() {
    if (!navigator.geolocation) {
      setSearchMessage(text.locationUnsupported);
      return;
    }

    setSearching(true);
    setSearchMessage(text.findingLocation);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setSearchOrigin({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          label: text.yourLocation,
        });
        setSearchMessage(text.locationSorted);
        setSearching(false);
      },
      () => {
        setSearchMessage(text.permissionUnavailable);
        setSearching(false);
      },
      { enableHighAccuracy: false, timeout: 10000 },
    );
  }

  function clearLocation() {
    setPostcode('');
    setSearchOrigin(null);
    setSearchMessage(text.initialSearch);
  }

  return (
    <div className="space-y-12">
      <section className="rounded-card border border-border bg-card p-5">
        <div className="grid gap-6 lg:grid-cols-[0.62fr_1.38fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{text.brand}</p>
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
                  {locale === 'nl' && item.key === 'all' ? text.allBrands : item.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">{text.country}</p>
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
                  {locale === 'nl' ? countryLabelsNl[item.key] : item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
              {text.shopOnline}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-text">{text.onlineChannels}</h2>
          </div>
          <Globe2 aria-hidden="true" className="hidden h-8 w-8 text-steel sm:block" />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visibleChannels.length > 0 ? (
            visibleChannels.map((channel) => {
              const logo = channelLogos[channel.channel];
              const localized = localizedChannel(channel, locale);
              const content = (
                <>
                  <div className="flex h-14 items-center">
                    {logo ? (
                      <img
                        alt={logo.alt}
                        className={logo.className}
                        src={assetPath(logo.src)}
                      />
                    ) : (
                      <span className="text-2xl font-black text-text">{channel.channel}</span>
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text">{localized.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{localized.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {channel.href === '#' ? text.linkSoon : text.visitChannel}
                    {channel.href === '#' ? null : (
                      <ExternalLink aria-hidden="true" className="h-4 w-4" />
                    )}
                  </span>
                  {localized.note ? (
                    <p className="mt-3 text-xs leading-5 text-muted">{localized.note}</p>
                  ) : null}
                </>
              );

              const key = `${channel.product}-${channel.country}-${channel.channel}-${channel.title}`;
              return channel.href === '#' ? (
                <article className="rounded-card border border-border bg-card p-5" key={key}>
                  {content}
                </article>
              ) : (
                <a
                  className="rounded-card border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary hover:shadow-soft"
                  href={channel.href}
                  key={key}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content}
                </a>
              );
            })
          ) : (
            <div className="rounded-card border border-dashed border-border bg-card p-5 text-sm text-muted">
              {text.noChannels}
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="store-locator-title">
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
            {text.storeLocator}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-text" id="store-locator-title">
            {text.findRetailer}
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-muted">
            {text.locatorDescription}
          </p>
        </div>

        <div className="overflow-hidden rounded-card border border-border bg-card shadow-soft">
          <div className="grid border-b border-border lg:grid-cols-[1.1fr_0.9fr]">
            <form className="border-b border-border p-5 lg:border-b-0 lg:border-r" onSubmit={searchPostcode}>
              <label className="text-sm font-semibold text-text" htmlFor="postcode">
                {text.searchPostcode}
              </label>
              <div className="mt-3 flex gap-2">
                <div className="relative flex-1">
                  <Search
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                  />
                  <input
                    autoComplete="postal-code"
                    className="min-h-11 w-full rounded-card border border-border bg-background py-3 pl-10 pr-4 text-sm text-text outline-none transition focus:border-primary"
                    id="postcode"
                    onChange={(event) => setPostcode(event.target.value)}
                    placeholder={text.postcodeExample}
                    value={postcode}
                  />
                </div>
                <button
                  className="inline-flex min-h-11 items-center gap-2 rounded-card bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-steel disabled:opacity-60"
                  disabled={searching}
                  type="submit"
                >
                  <LocateFixed aria-hidden="true" className="h-4 w-4" />
                  {text.find}
                </button>
              </div>
              <p aria-live="polite" className="mt-3 text-xs leading-5 text-muted">
                {searchMessage}
              </p>
            </form>

            <div className="flex flex-wrap items-center gap-3 p-5">
              <button
                className="inline-flex min-h-11 items-center gap-2 rounded-card border border-border bg-background px-4 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary disabled:opacity-60"
                disabled={searching}
                onClick={useCurrentLocation}
                type="button"
              >
                <Crosshair aria-hidden="true" className="h-4 w-4" />
                {text.useLocation}
              </button>
              {searchOrigin ? (
                <button
                  className="inline-flex min-h-11 items-center gap-2 rounded-card px-3 py-2 text-sm font-semibold text-muted hover:text-primary"
                  onClick={clearLocation}
                  type="button"
                >
                  <X aria-hidden="true" className="h-4 w-4" />
                  {text.clear}
                </button>
              ) : null}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative min-h-[520px] border-b border-border lg:border-b-0 lg:border-r">
              <div className="absolute inset-0" ref={mapElementRef} />
              {visibleRetailPoints.length === 0 ? (
                <div className="pointer-events-none absolute inset-0 z-[400] grid place-items-center bg-background/80 p-6 text-center backdrop-blur-sm">
                  <div>
                    <Store aria-hidden="true" className="mx-auto h-8 w-8 text-secondary" />
                    <p className="mt-3 font-semibold text-text">{text.noRetailers}</p>
                    <p className="mt-2 text-sm text-muted">
                      {text.noRetailersHint}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="min-h-[520px]">
              {selectedPoint ? (
                <article>
                  <StorePhoto locale={locale} point={selectedPoint} />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                           {text.selectedRetailer}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-text">
                          {selectedPoint.name}
                        </h3>
                      </div>
                      {searchOrigin ? (
                        <span className="shrink-0 rounded-card bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">
                          {distanceInKm(searchOrigin, selectedPoint).toFixed(1)} km
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-4 flex gap-3 text-sm leading-6 text-muted">
                      <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                      <span>{selectedPoint.address.join(', ')}</span>
                    </p>

                    <div className="mt-5 grid gap-3">
                      {selectedPoint.phone ? (
                        <a
                          className="inline-flex items-center gap-3 text-sm font-semibold text-text hover:text-primary"
                          href={`tel:${selectedPoint.phone.replace(/[^+\d]/g, '')}`}
                        >
                          <Phone aria-hidden="true" className="h-4 w-4 text-secondary" />
                          {selectedPoint.phone}
                        </a>
                      ) : null}
                      {selectedPoint.website ? (
                        <a
                          className="inline-flex items-center gap-3 text-sm font-semibold text-text hover:text-primary"
                          href={selectedPoint.website}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <Globe2 aria-hidden="true" className="h-4 w-4 text-secondary" />
                           {text.storeWebsite}
                        </a>
                      ) : null}
                    </div>

                    <details className="group mt-5 border-y border-border py-4">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-text">
                        <span className="flex items-center gap-3">
                          <Clock3 aria-hidden="true" className="h-4 w-4 text-secondary" />
                           {text.openingHours}
                        </span>
                        <span className="flex items-center gap-2 text-xs font-semibold text-steel">
                           <span className="group-open:hidden">{text.expand}</span>
                           <span className="hidden group-open:inline">{text.collapse}</span>
                          <ChevronDown
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform group-open:rotate-180"
                          />
                        </span>
                      </summary>
                      <dl className="mt-4 space-y-2 text-xs">
                        {selectedPoint.hours.map((item) => (
                          <div className="flex justify-between gap-5" key={item.day}>
                            <dt className="text-muted">
                              {locale === 'nl' ? dayLabelsNl[item.day] ?? item.day : item.day}
                            </dt>
                            <dd className="font-semibold text-text">
                              {locale === 'nl' && item.hours === 'Closed' ? 'Gesloten' : item.hours}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </details>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      <a
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-card bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-steel"
                        href={routeUrl(selectedPoint)}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Navigation aria-hidden="true" className="h-4 w-4" />
                         {text.directions}
                      </a>
                      <a
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-card border border-border bg-background px-4 py-3 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
                        href={selectedPoint.detailsSource}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <ExternalLink aria-hidden="true" className="h-4 w-4" />
                         {locale === 'nl' ? 'Bron winkelgegevens' : selectedPoint.detailsSourceLabel}
                      </a>
                    </div>
                    <p className="mt-4 text-[11px] leading-5 text-muted">
                       {text.hoursWarning}
                    </p>
                  </div>
                </article>
              ) : (
                <div className="grid min-h-[520px] place-items-center p-6 text-center">
                   <p className="text-sm text-muted">{text.selectRetailer}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {visibleRetailPoints.length > 0 ? (
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {visibleRetailPoints.map((point, index) => (
              <button
                className={`flex items-start gap-4 rounded-card border p-4 text-left transition ${
                  selectedPoint?.id === point.id
                    ? 'border-primary bg-card shadow-sm'
                    : 'border-border bg-background hover:border-steel'
                }`}
                key={point.id}
                onClick={() => setActivePointId(point.id)}
                type="button"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                  {index + 1}
                </span>
                <span>
                  <span className="block text-sm font-semibold leading-5 text-text">{point.name}</span>
                  <span className="mt-1 block text-xs text-muted">
                    {point.city}
                    {searchOrigin
                      ? ` · ${distanceInKm(searchOrigin, point).toFixed(1)} km`
                      : ''}
                  </span>
                </span>
              </button>
            ))}
          </div>
        ) : null}

        <p className="mt-4 flex items-center gap-2 text-[11px] leading-5 text-muted">
          <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
          {text.mapCredit}
        </p>
      </section>
    </div>
  );
}
