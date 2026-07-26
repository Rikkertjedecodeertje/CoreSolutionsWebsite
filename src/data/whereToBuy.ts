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

export type OpeningTime = {
  day: string;
  hours: string;
};

export type RetailPoint = {
  id: string;
  name: string;
  address: string[];
  postcode: string;
  city: string;
  product: ProductKey;
  country: CountryKey;
  lat: number;
  lon: number;
  photo?: string;
  photoAlt?: string;
  phone?: string;
  website?: string;
  hours: OpeningTime[];
  detailsSource: string;
  detailsSourceLabel: string;
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
    note: 'Country-specific marketplace link will be added.',
  })),
  ...(['netherlands', 'belgium'] as CountryKey[]).map((country) => ({
    product: 'iheel' as const,
    country,
    channel: 'Bol' as const,
    title: 'iHeel® on Bol',
    description: 'Available through Bol in the Netherlands and Belgium.',
    href: '#',
    note: 'Marketplace link will be added.',
  })),
  ...(['netherlands', 'belgium', 'germany'] as CountryKey[]).map((country) => ({
    product: 'iheel' as const,
    country,
    channel: 'Amazon' as const,
    title: 'iHeel® on Amazon',
    description: 'Available through Amazon in selected markets.',
    href: '#',
    note: 'Marketplace link will be added.',
  })),
  {
    product: 'iheel',
    country: 'netherlands',
    channel: 'iHeelpads.com',
    title: 'Super Value 10-Pack',
    description:
      'Exclusive own-webshop offer for loyal customers: the Super Value 10-Pack with 20 pieces.',
    href: 'https://iheelpads.com/',
  },
  ...(['netherlands', 'belgium'] as CountryKey[]).map((country) => ({
    product: 'batbox' as const,
    country,
    channel: 'Bol' as const,
    title: 'BATBOX® Tester',
    description: 'Available in the Netherlands and Belgium.',
    href: '#',
    note: 'Marketplace link will be added.',
  })),
];

export const retailPoints: RetailPoint[] = [
  {
    id: 'de-malle-molen',
    name: 'Schoenmakerij en sleutelservice De Malle Molen',
    address: ['Javastraat 57', '2585 AG Den Haag', 'Nederland'],
    postcode: '2585AG',
    city: 'Den Haag',
    product: 'iheel',
    country: 'netherlands',
    lat: 52.0894,
    lon: 4.3002,
    phone: '+31 70 752 3289',
    website: 'https://www.schoenmakerijdemallemolen.nl/',
    hours: [
      { day: 'Monday', hours: '11:00–17:00' },
      { day: 'Tuesday', hours: '08:30–17:00' },
      { day: 'Wednesday', hours: '08:30–17:00' },
      { day: 'Thursday', hours: '08:30–17:00' },
      { day: 'Friday', hours: '08:30–17:00' },
      { day: 'Saturday', hours: '10:00–15:00' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    detailsSource: 'https://www.schoenmakerijdemallemolen.nl/',
    detailsSourceLabel: 'Store website',
  },
  {
    id: 'bennis',
    name: 'Vakschoenmakerij Bennis & Sleutelservice',
    address: ['Herenstraat 69', '2282 BR Rijswijk', 'Nederland'],
    postcode: '2282BR',
    city: 'Rijswijk',
    product: 'iheel',
    country: 'netherlands',
    lat: 52.0377,
    lon: 4.3194,
    photo: '/images/stores/bennis.jpg',
    photoAlt: 'Storefront of Vakschoenmakerij Bennis in Rijswijk',
    phone: '+31 70 399 6410',
    website: 'https://schoenmakerijbennis.nl/',
    hours: [
      { day: 'Monday', hours: '10:00–17:30' },
      { day: 'Tuesday', hours: '08:30–17:30' },
      { day: 'Wednesday', hours: '08:30–17:30' },
      { day: 'Thursday', hours: '08:30–17:30' },
      { day: 'Friday', hours: '08:30–17:30' },
      { day: 'Saturday', hours: '08:00–16:00' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    detailsSource: 'https://schoenmakerijbennis.nl/contact/',
    detailsSourceLabel: 'Store contact page',
  },
  {
    id: 'sven',
    name: 'Schoen- en sleutelservice Sven',
    address: ['Vestpoort 14', '2611 MG Delft', 'Nederland'],
    postcode: '2611MG',
    city: 'Delft',
    product: 'iheel',
    country: 'netherlands',
    lat: 52.0116,
    lon: 4.3592,
    photo: '/images/stores/sven.jpg',
    photoAlt: 'Interior of Schoen- en sleutelservice Sven in Delft',
    phone: '+31 15 364 6183',
    website: 'https://dezuidpoort.nl/schoen-en-sleutelservice-sven/',
    hours: [
      { day: 'Monday', hours: 'Closed' },
      { day: 'Tuesday', hours: '09:00–17:30' },
      { day: 'Wednesday', hours: '09:00–17:30' },
      { day: 'Thursday', hours: '09:00–17:30' },
      { day: 'Friday', hours: '09:00–17:30' },
      { day: 'Saturday', hours: '09:00–17:00' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    detailsSource: 'https://dezuidpoort.nl/schoen-en-sleutelservice-sven/',
    detailsSourceLabel: 'Shopping centre store page',
  },
];
