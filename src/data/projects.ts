export type SalesChannel = {
  label: string;
  href: string;
  note?: string;
  isPlaceholder?: boolean;
};

export type MediaMention = {
  title: string;
  description: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  status: string;
  category: string;
  extraTags?: string[];
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
  targetUsers: string[];
  features: string[];
  achievements: string[];
  salesChannels: SalesChannel[];
  mediaMentions: MediaMention[];
  gallery: GalleryItem[];
  faqs: FAQ[];
  seoTitle: string;
  seoDescription: string;
};

export const projects: Project[] = [
  {
    slug: 'iheel',
    name: 'iHeel®',
    shortName: 'iHeel®',
    tagline: 'Premium self-adhesive iHeel® pads for comfortable, worry-free walking.',
    status: 'Available',
    category: 'Healthcare',
    shortDescription:
      'Premium self-adhesive iHeel® pads that enable comfortable worry-free walking by reducing heel slip and helping prevent blisters.',
    longDescription:
      'iHeel® is a shoe comfort brand built around a simple practical problem: many shoes do not fit perfectly around the heel. The brand focuses on premium self-adhesive heel pads that improve fit, comfort and confidence while walking.',
    problem:
      'People want to wear the shoes they like without thinking about heel slip, rubbing or blisters. But many shoes do not fit perfectly around the heel, causing discomfort, irritation and wear inside the shoe.',
    solution:
      'iHeel® pads are premium self-adhesive heel pads placed inside the back of the shoe to improve fit, reduce heel slip and rubbing, and make walking more comfortable.',
    targetUsers: [],
    features: [
      'Self-adhesive application',
      'Inside heel placement',
      'Reduced heel slip and rubbing',
      'Soft foam and fabric feel',
      'Discreet in-shoe design',
    ],
    achievements: [
      '5,000+ products sold',
      'Active in 9 countries',
      'Online and offline distribution',
      'Available through marketplaces and selected retailers',
    ],
    salesChannels: [
      {
        label: 'Where to buy',
        href: '/where-to-buy/',
        note: 'See online marketplaces and physical retail points by country.',
      },
      {
        label: 'iHeelpads.com Super Value 10-Pack',
        href: 'https://iheelpads.com/product/iheel-pads-super-value-10-pack-20-pieces/',
        note: 'Exclusive own-webshop offer for loyal customers: the Super Value 10-Pack with 20 pieces.',
      },
      {
        label: 'Retail and marketplace inquiries',
        href: '/contact/',
        note: 'Contact Core Solutions for retail or distribution opportunities.',
      },
    ],
    mediaMentions: [],
    gallery: [
      {
        src: '/images/iheel-product.png',
        alt: 'Navy shoes with an iHeel heel pad',
        caption: 'iHeel® heel pad for a more comfortable shoe fit',
      },
      {
        src: '/images/marketplace-placeholder.svg',
        alt: 'Marketplace listing placeholder',
        caption: 'Marketplace and packaging visuals can be added here',
      },
    ],
    faqs: [
      {
        question: 'What are iHeel® pads used for?',
        answer:
          'They are designed to improve comfort around the heel area of shoes and help protect the inside heel lining.',
      },
      {
        question: 'Are iHeel® pads a medical product?',
        answer:
          'No. They are a shoe comfort accessory and are not presented as a medical device.',
      },
      {
        question: 'Where can I buy iHeel® pads?',
        answer: 'Current online channels and physical retail points are shown on the Where to buy page.',
      },
      {
        question: 'How do I attach the iHeel® pads to my shoes?',
        answer:
          'Attaching the iHeel® pads to your shoes is very easy. 1. Grab your shoe, sit down and put it between your knees with the back of your shoe pointing away from you. 2. Remove the white protective backing over the adhesive layer and bend the iHeel® pad. 3. Carefully move the iHeel® pad close to the back of your shoe, align it to the center and attach it over the uncomfortable part in your shoe. 4. Firmly press on the iHeel® pad from the center to the sides to secure it in place.',
      },
      {
        question: 'Do the iHeel® pads feel hard to my heels?',
        answer:
          'No. The iHeel® pads are made out of soft foam and fabric. They feel comfortable to your heels.',
      },
      {
        question: 'How long do the iHeel® pads last?',
        answer:
          'The iHeel® pads last anywhere from a few months to a full year. The lifespan depends on how often and how intensely you use your shoes. Running for hours every day will make them wear out faster than occasional use for special occasions. With every pack ordered through partner marketplaces, you receive 3, 4 or 5 pairs (6, 8 or 10 pieces).',
      },
      {
        question: 'How can I extend the lifespan of the iHeel® pads?',
        answer:
          'To extend the lifespan of the iHeel® pads, put on and take off your shoes with your fingers over the iHeel® pad. This helps prevent accidentally pulling the pad out of your shoe or loosening the edges.',
      },
    ],
    seoTitle: 'iHeel® | Shoe Comfort and Heel Protection',
    seoDescription:
      'iHeel® offers premium self-adhesive heel pads that enable comfortable worry-free walking by reducing heel slip and helping prevent blisters.',
  },
  {
    slug: 'batbox-battery-tester',
    name: 'BATBOX®',
    shortName: 'BATBOX®',
    tagline: 'Premium household battery testing and storage products for organized batteries.',
    status: 'Available',
    category: 'Consumer Electronics',
    extraTags: ['Home Safety'],
    shortDescription:
      'Includes the BATBOX® Tester, a premium household battery tester that quickly shows which batteries still have usable power. It is complemented by BATBOX® Storage, designed to store batteries and the BATBOX® Tester neatly, while keeping them safely out of reach of children and pets.',
    longDescription:
      'BATBOX® was developed around a common household problem: drawers full of batteries with no clear way to know which ones still work. The brand includes BATBOX® Tester for quick battery checks and BATBOX® Storage for organized, safer battery storage.',
    problem:
      'Many households collect loose batteries over time. Without a quick way to test them, usable batteries are often thrown away and empty batteries stay mixed with full ones.',
    solution:
      'BATBOX® helps users quickly check battery status, separate usable batteries from empty ones, and store batteries in a more organized way.',
    targetUsers: [
      'Households',
      'Students',
      'Offices',
      'Schools',
      'People who want to reduce unnecessary battery waste',
      'Retailers looking for simple household utility products',
    ],
    features: [
      'Simple household battery testing concept',
      'Helps identify usable batteries',
      'Helps reduce unnecessary battery waste',
      'Practical and easy to understand',
      'Designed for everyday use',
      'Brand suitable for e-commerce and retail presentation',
    ],
    achievements: [
      'Launched and selling strongly online',
      'Top seller in the Netherlands and Belgium within three months',
      'High visibility in online search results',
      '4.9 out of 5 average product rating',
    ],
    salesChannels: [
      {
        label: 'Where to buy',
        href: '/where-to-buy/',
        note: 'See available BATBOX® sales channels by country.',
      },
      {
        label: 'Retail and marketplace inquiries',
        href: '/contact/',
        note: 'Contact Core Solutions for retail or distribution opportunities.',
      },
    ],
    mediaMentions: [],
    gallery: [
      {
        src: '/images/batbox-product.png',
        alt: 'BATBOX battery tester with two household batteries',
        caption: 'BATBOX® battery tester concept',
      },
      {
        src: '/images/household-placeholder.svg',
        alt: 'Organized household batteries placeholder',
        caption: 'Lifestyle and use-case images can be added here',
      },
    ],
    faqs: [
      {
        question: 'What is BATBOX®',
        answer: 'BATBOX® is a household battery testing and storage brand designed for everyday use.',
      },
      {
        question: 'Where is BATBOX® available?',
        answer:
          'BATBOX® is available through selected online sales channels. Current country-specific links are listed on the Where to buy page.',
      },
      {
        question: 'Who is it for?',
        answer:
          'It is intended for households, offices and other users who want a simple way to check batteries and reduce unnecessary waste.',
      },
    ],
    seoTitle: 'BATBOX® | Practical Household Battery Testing',
    seoDescription:
      'BATBOX® includes premium household battery testing and storage products designed to help organize batteries and reduce unnecessary waste.',
  },
];

export const editableMetrics = [
  {
    value: '5,000+',
    label: 'products sold',
    description: 'Active in 9 countries.',
  },
  {
    value: 'Distribution',
    label: 'Online and offline',
    description: 'Sold on Bol, Amazon, Kaufland and by independent retailers.',
  },
  {
    value: 'Practical',
    label: '2 products launched',
    description: '3 under development.',
  },
];

export const mediaHighlights = [
  {
    title: 'Press and media mentions',
    description:
      'A place for newspaper articles, interviews and independent coverage of Core Solutions products.',
  },
  {
    title: 'Product videos and demonstrations',
    description:
      'Add videos, product explainers and launch content that show the portfolio in use.',
  },
  {
    title: 'Founder and development stories',
    description:
      'Collect interviews, behind-the-scenes updates and product development milestones.',
  },
  {
    title: 'Portfolio credibility',
    description:
      'Use genuine mentions and publications here to strengthen trust and the premium character of the brands.',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

