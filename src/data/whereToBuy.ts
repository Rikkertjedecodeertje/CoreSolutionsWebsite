export type ProductKey = 'iheel' | 'batbox';
export type CountryKey =
  | 'netherlands'
  | 'belgium'
  | 'germany'
  | 'italy'
  | 'france'
  | 'slovakia'
  | 'czechia'
  | 'poland'
  | 'austria';

export type SalesChannel = {
  product: ProductKey;
  country: CountryKey;
  channel: 'Bol' | 'Amazon' | 'Kaufland' | 'iHeelpads.com' | 'Retail';
  title: string;
  description: string;
  href: string;
  note?: string;
};

export type RetailPoint = {
  name: string;
  address: string[];
  postcode: string;
  city: string;
  product: ProductKey;
  country: CountryKey;
  x: number;
  y: number;
  lat: number;
  lon: number;
  moreInfoHref: string;
  directionsHref: string;
};

export const products = [
  { key: 'all', label: 'All brands' },
  { key: 'iheel', label: 'iHeel®' },
  { key: 'batbox', label: 'BATBOX®' },
] as const;

export const countries: { key: CountryKey; label: string }[] = [
  { key: 'netherlands', label: 'Netherlands' },
  { key: 'belgium', label: 'Belgium' },
  { key: 'germany', label: 'Germany' },
  { key: 'italy', label: 'Italy' },
  { key: 'france', label: 'France' },
  { key: 'slovakia', label: 'Slovakia' },
  { key: 'czechia', label: 'Czechia' },
  { key: 'poland', label: 'Poland' },
  { key: 'austria', label: 'Austria' },
];

const kauflandCountries: CountryKey[] = [
  'germany',
  'italy',
  'france',
  'slovakia',
  'czechia',
  'poland',
  'austria',
];

export const salesChannels: SalesChannel[] = [
  ...kauflandCountries.map((country) => ({
    product: 'iheel' as const,
    country,
    channel: 'Kaufland' as const,
    title: 'iHeel® on Kaufland',
    description: 'Available through Kaufland marketplace in this country.',
    href: '#',
    note: 'Add final country-specific Kaufland URL.',
  })),
  ...(['netherlands', 'belgium'] as CountryKey[]).map((country) => ({
    product: 'iheel' as const,
    country,
    channel: 'Bol' as const,
    title: 'iHeel® on Bol',
    description: 'Available through Bol in the Netherlands and Belgium.',
    href: '#',
    note: 'Add final Bol URL.',
  })),
  ...(['netherlands', 'belgium', 'germany'] as CountryKey[]).map((country) => ({
    product: 'iheel' as const,
    country,
    channel: 'Amazon' as const,
    title: 'iHeel® on Amazon',
    description: 'Available through Amazon in selected markets.',
    href: '#',
    note: 'Add final Amazon URL.',
  })),
  {
    product: 'iheel',
    country: 'netherlands',
    channel: 'iHeelpads.com',
    title: 'iHeelpads.com Super Value 10-Pack',
    description: 'Exclusive own-webshop offer for loyal customers: the Super Value 10-Pack with 20 pieces.',
    href: 'https://iheelpads.com/',
  },
  ...(['netherlands', 'belgium'] as CountryKey[]).map((country) => ({
    product: 'batbox' as const,
    country,
    channel: 'Bol' as const,
    title: 'BATBOX® Tester',
    description: 'Available in the Netherlands and Belgium.',
    href: '#',
    note: 'Add final BATBOX® sales URL.',
  })),
];

export const retailPoints: RetailPoint[] = [
  {
    name: 'Schoenmakerij en sleutelservice De Malle Molen',
    address: ['Javastraat 57', '2585 AG Den Haag', 'Nederland'],
    postcode: '2585AG',
    city: 'Den Haag',
    product: 'iheel',
    country: 'netherlands',
    x: 49,
    y: 48,
    lat: 52.0894,
    lon: 4.3002,
    moreInfoHref: 'https://iheelpads.com/where-to-buy/#wpsl-search-wrap',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&origin=Vaillantlaan%2018t%2C%202526%20HZ%20Den%20Haag%2C%20Netherlands&destination=Javastraat%2057%2C%20Den%20Haag%2C%202585%20AG%2C%20Nederland&travelmode=driving',
  },
  {
    name: 'Vakschoenmakerij Bennis & Sleutelservice',
    address: ['Herenstraat 69', '2282 BR Rijswijk', 'Nederland'],
    postcode: '2282BR',
    city: 'Rijswijk',
    product: 'iheel',
    country: 'netherlands',
    x: 45,
    y: 58,
    lat: 52.0377,
    lon: 4.3194,
    moreInfoHref: 'https://iheelpads.com/where-to-buy/#wpsl-search-wrap',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&origin=Vaillantlaan%2018t%2C%202526%20HZ%20Den%20Haag%2C%20Netherlands&destination=Herenstraat%2069%2C%20Rijswijk%2C%202282%20BR%2C%20Nederland&travelmode=driving',
  },
  {
    name: 'Schoen- en sleutelservice Sven',
    address: ['Vestpoort 14', '2611 MG Delft', 'Nederland'],
    postcode: '2611MG',
    city: 'Delft',
    product: 'iheel',
    country: 'netherlands',
    x: 44,
    y: 69,
    lat: 52.0116,
    lon: 4.3592,
    moreInfoHref: 'https://iheelpads.com/where-to-buy/#wpsl-search-wrap',
    directionsHref:
      'https://www.google.com/maps/dir/?api=1&origin=Vaillantlaan%2018t%2C%202526%20HZ%20Den%20Haag%2C%20Netherlands&destination=Vestpoort%2014%2C%20Delft%2C%202611%20MG%2C%20Nederland&travelmode=driving',
  },
];

