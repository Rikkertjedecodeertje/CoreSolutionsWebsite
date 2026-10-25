export type SalesChannel = {
  label: string;
  href: string;
  note?: string;
  isPlaceholder?: boolean;
};

export type MediaMention = {
  title: string;
  description: string;
  href?: string;
  source?: string;
  date?: string;
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
        alt: 'BATBOX battery tester being used with an AA battery',
        caption: 'BATBOX® Tester in use',
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
  {
    "slug": "pillenpopper",
    "name": "PillenPopper",
    "shortName": "PillenPopper",
    "tagline": "Prepare your own pills, even with weak or painful hands.",
    "status": "Preparing for launch",
    "category": "Healthcare",
    "extraTags": [
      "Independent living"
    ],
    "shortDescription": "The PillenPopper helps people with weak or painful hands remove pills from blister packs and split suitable pills without a sharp blade, supporting greater independence and control.",
    "longDescription": "The PillenPopper starts with a small but meaningful part of everyday independence: preparing your own pills. Core Solutions developed the aid through user research, 3D-printed prototypes and feedback from occupational therapy experts. It combines removing pills from blister packs, collecting them and splitting suitable pills without a sharp blade in one tabletop aid. The next step is independent validation and preparation for production.",
    "problem": "Pushing pills out of blister packs requires grip, strength and precise finger movements. That can be difficult with weak or painful hands. For people with conditions such as arthritis, muscle disorders or age-related loss of hand function, this everyday task can become painful and frustrating. They may need someone else's help to prepare their medication, losing a degree of independence and control.",
    "solution": "With the PillenPopper, you simply slide a whole blister strip into a clip. Press a lever with your palm or forearm to push a pill out of the strip and into a collection tray. From there, you can take the pills directly or organise them in, for example, a weekly pill organiser. A separate, patent-pending lever mechanism splits suitable pills without a sharp blade. The PillenPopper is designed to help people regain their independence and control.",
    "targetUsers": [
      "People with weak or painful hands",
      "People with reduced hand function due to arthritis, muscle conditions or ageing",
      "Occupational therapists and care professionals supporting independent living"
    ],
    "features": [
      "Operation with the palm or forearm",
      "Pills collected in a tray",
      "Patent-pending mechanism to split suitable pills without a sharp blade",
      "Developed with users and occupational therapy experts",
      "3D-printed prototypes and planned local pilot production"
    ],
    "achievements": [
      "Developed together with six users and three occupational therapy experts",
      "Patent-pending pill-splitting mechanism",
      "Design refined through 3D-printed prototypes",
      "Nominated for The Hague Student Innovator Award 2026"
    ],
    "salesChannels": [
      {
        "label": "Product and launch inquiries",
        "href": "/contact/",
        "note": "The PillenPopper is not yet available to buy. Contact Core Solutions for current launch information."
      },
      {
        "label": "Independent validation",
        "href": "/contact/",
        "note": "Interested in contributing to further user testing or research? Get in touch."
      },
      {
        "label": "Care and distribution partnerships",
        "href": "/contact/",
        "note": "Discuss opportunities for occupational therapy, care organisations, retail or distribution."
      }
    ],
    "mediaMentions": [
      {
        "title": "Core Solutions nominated for The Hague Student Innovator Award 2026",
        "description": "ImpactCity lists Core Solutions among the student nominees for its work helping people with reduced hand function remove tablets from blister packs independently.",
        "href": "https://www.impactcity.nl/nominaties-voor-the-hague-innovators-awards-2026-bekendgemaakt/",
        "source": "ImpactCity",
        "date": "22 September 2026"
      }
    ],
    "gallery": [
      {
        "src": "/images/pillenpopper-product.webp",
        "alt": "Rik van Wieren demonstrates the purple and white PillenPopper prototype",
        "caption": "PillenPopper prototype operated with the palm"
      }
    ],
    "faqs": [
      {
        "question": "Who is the PillenPopper designed for?",
        "answer": "It is designed for people who have difficulty preparing pills because of weak or painful hands or reduced hand function. Further independent testing is planned to better understand suitability for different users and medication routines."
      },
      {
        "question": "How does the PillenPopper work?",
        "answer": "With the PillenPopper, you simply slide a whole blister strip into a clip. Press a lever with your palm or forearm to push a pill from the strip into the collection tray. The pill can then be taken directly or organised in, for example, a weekly pill organiser. A separate, patent-pending mechanism can split suitable pills without a sharp blade."
      },
      {
        "question": "Can every pill be split?",
        "answer": "No. Only split a pill when the instructions for that specific medicine permit it. If you are unsure, ask your pharmacist. The PillenPopper does not determine whether a medicine can be split."
      },
      {
        "question": "Has the PillenPopper been tested?",
        "answer": "Six users contributed to the development of the PillenPopper, alongside feedback from three occupational therapy experts. The next step is further independent validation."
      },
      {
        "question": "Can I buy the PillenPopper already?",
        "answer": "The PillenPopper is being prepared for market introduction and is not yet available to buy. Contact Core Solutions for current information or to discuss testing and collaboration."
      }
    ],
    "seoTitle": "The PillenPopper | Prepare Your Own Pills",
    "seoDescription": "The PillenPopper helps you remove pills from blister packs and split suitable pills with a patent-pending, blade-free mechanism, supporting everyday independence."
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
    projectSlug: 'pillenpopper',
    title: 'Core Solutions nominated for The Hague Student Innovator Award 2026',
    description:
      'ImpactCity names Core Solutions among the five student nominees for the PillenPopper, a device that helps people with reduced hand function remove pills from blister packs independently.',
    source: 'ImpactCity',
    date: '22 September 2026',
    href: 'https://www.impactcity.nl/nominaties-voor-the-hague-innovators-awards-2026-bekendgemaakt/',
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

