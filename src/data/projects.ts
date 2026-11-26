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
  linkLabel?: string;
  additionalLinks?: { label: string; href: string }[];
  featured?: boolean;
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
  cardImage?: Pick<GalleryItem, 'src' | 'alt'>;
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
      '10.000+ products sold',
      'Active in 9 countries',
      'Online and offline distribution',
      'Available through marketplaces and selected retailers',
    ],
    salesChannels: [
      {
        label: 'Where to buy',
        href: '/where-to-buy/?product=iheel',
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
        href: '/where-to-buy/?product=batbox',
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
      "Developed together with users and occupational therapy experts",
      "Patent-pending pill-splitting mechanism",
      "Design refined through 3D-printed prototypes",
      "Won two awards, including the Audience Award at The Hague Innovators Awards 2026"
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
        "title": "The PillenPopper returns to Haagse Knaken after winning the Audience Award",
        "description": "Rik van Wieren discusses winning the Audience Award and the next steps for the PillenPopper (radio in Dutch).",
        "href": "https://media.denhaagfm.nl/audio/denhaagfm/202611171900.mp3#t=2601,3190",
        "source": "Den Haag FM",
        "date": "17 November 2026"
      },
      {
          "title": "Dankzij ondernemer Rik (23) zijn PillenPopper hoeft reumapatiënt niet meer te worstelen met medicijnstrips",
          "description": "De Ondernemer shares the AD story about Rik van Wieren, the PillenPopper and independently removing pills from blister packs (article in Dutch).",
          "href": "https://www.deondernemer.nl/innovatie/technologie/piepjonge-ondernemer-rik-van-wieren-23-pillenpopper-reumapatienten~407efaf",
          "source": "De Ondernemer",
          "date": "13 November 2026"
        },
      {
        "title": "The Hague Innovators Awards 2026 winners announced",
        "description": "Voorburgs Dagblad covers the Audience Award for Core Solutions and previously named the company among the nominees (articles in Dutch).",
        "href": "https://voorburgsdagblad.nl/Den%20Haag%20%26%20Regio/winnaars-the-hague-innovators-awards-2026-bekendgemaakt",
        "source": "Voorburgs Dagblad",
        "date": "11 November 2026",
        "linkLabel": "Read about the Audience Award",
        "additionalLinks": [
          {
            "label": "Read about the nomination",
            "href": "https://voorburgsdagblad.nl/den%20haag%20%26%20regio/nominaties-voor-the-hague-innovators-awards-2026-bekendgemaakt"
          }
        ]
      },
      {
        "title": "The Hague Innovators Awards: nomination and Audience Award",
        "description": "Drimble links to regional coverage of the nomination and the Audience Award for Core Solutions (articles in Dutch).",
        "href": "https://drimble.nl/regio/zuid-holland/zoetermeer/108563033/winnaars-the-hague-innovators-awards-2026-bekendgemaakt.html",
        "source": "Drimble",
        "date": "11 November 2026",
        "linkLabel": "See the winners announcement",
        "additionalLinks": [
          {
            "label": "See the nominations announcement",
            "href": "https://drimble.nl/regio/zuid-holland/haaglanden/108077549/nominaties-voor-the-hague-innovators-awards-2026-bekendgemaakt.html"
          }
        ]
      },
        {
          "title": "CupHub, Legumia and Core Solutions win The Hague Innovators Awards 2026",
          "description": "The Hague Online reports on Core Solutions winning the Audience Award with the PillenPopper.",
          "href": "https://thehagueonline.com/the-hague-innovators-awards-2026-winners/",
          "source": "The Hague Online",
          "date": "11 November 2026"
        },
        {
          "title": "The Hague Innovators Awards 2026 winners announced",
          "description": "Dagblad070 reports on the winners, including the Audience Award for Core Solutions and the PillenPopper (article in Dutch).",
          "href": "https://dagblad070.nl/Den%20Haag%20%26%20Regio/winnaars-the-hague-innovators-awards-2026-bekendgemaakt",
          "source": "Dagblad070",
          "date": "11 November 2026"
        },
        {
          "title": "The Hague Innovators Awards 2026 winners announced",
          "description": "Zoetermeers Dagblad covers the Audience Award for Core Solutions and previously named the company among the nominees (articles in Dutch).",
          "href": "https://zoetermeersdagblad.nl/Den%20Haag%20%26%20Regio/winnaars-the-hague-innovators-awards-2026-bekendgemaakt",
          "source": "Zoetermeers Dagblad",
          "date": "11 November 2026",
          "linkLabel": "Read about the Audience Award",
          "additionalLinks": [
            {
              "label": "Read about the nomination",
              "href": "https://zoetermeersdagblad.nl/Den%20Haag%20%26%20Regio/nominaties-voor-the-hague-innovators-awards-2026-bekendgemaakt"
            }
          ]
        },
        {
          "title": "The Hague Innovators Awards 2026 winners announced",
          "description": "Rijswijks Dagblad covers the Audience Award for Core Solutions and previously named the company among the nominees (articles in Dutch).",
          "href": "https://rijswijksdagblad.nl/Den%20Haag%20%26%20Regio/winnaars-the-hague-innovators-awards-2026-bekendgemaakt",
          "source": "Rijswijks Dagblad",
          "date": "11 November 2026",
          "linkLabel": "Read about the Audience Award",
          "additionalLinks": [
            {
              "label": "Read about the nomination",
              "href": "https://rijswijksdagblad.nl/Den%20Haag%20%26%20Regio/nominaties-voor-the-hague-innovators-awards-2026-bekendgemaakt"
            }
          ]
        },
        {
          "title": "A new generation of Hague entrepreneurs wins awards for social innovation",
          "description": "Duurzaam Ondernemen covers the award-winning social innovations and the Audience Award for Core Solutions (article in Dutch).",
          "href": "https://www.duurzaam-ondernemen.nl/nieuwe-generatie-haagse-ondernemers-wint-prijzen-voor-maatschappelijke-innovatie/",
          "source": "Duurzaam Ondernemen",
          "date": "10 November 2026"
        },
      {
        "title": "The PillenPopper in the local news digest",
        "description": "Essentially The Hague summarises how the aid works and highlights an early user test.",
        "href": "https://essentiallythehague.com/newsletter-2026-11-06/",
        "source": "Essentially The Hague",
        "date": "6 November 2026"
      },
        {
          "title": "PillenPopper helps people with rheumatism open blister packs",
          "description": "Hofstad Radio shares the story of Rik van Wieren and the PillenPopper for people who struggle with blister packs (article in Dutch).",
          "href": "https://www.hofstadradio.com/dankzij-uitvinder-rik-23-hoeft-een-reumapatient-niet-meer-te-worstelen-met-medicijnstrips/",
          "source": "Hofstad Radio",
          "date": "5 November 2026"
        },
      {
        "title": "Rik (23) develops the PillenPopper for people with painful or weak hands",
        "description": "Haagse Dingen visits Rik van Wieren to show the PillenPopper in action (video in Dutch).",
        "href": "https://www.youtube.com/watch?v=inTvBd82SBE",
        "source": "Haagse Dingen",
        "date": "3 November 2026"
      },
      {
        "title": "Inventor Rik (23) helps a rheumatism patient stop struggling with blister packs",
        "description": "AD features Rik van Wieren and the PillenPopper (premium article in Dutch).",
        "href": "https://www.ad.nl/den-haag/dankzij-uitvinder-rik-23-hoeft-een-reumapatient-niet-meer-te-worstelen-met-medicijnstrips~a407efaf/",
        "source": "AD",
        "date": "5 November 2026"
      },
      {
        "title": "Rik (23) invents the PillenPopper: helping people stay independent",
        "description": "Omroep Delft reports on the PillenPopper and independence when removing pills from blister packs (article in Dutch).",
        "href": "https://www.omroepdelft.nl/delft/rik-23-bedenkt-pillenpopper-biedt-stukje-zelfstandigheid/",
        "source": "Omroep Delft",
        "date": "5 November 2026"
      },
      {
        "title": "The PillenPopper on Omroep Delft radio",
        "description": "Rik van Wieren talks about the PillenPopper on Omroep Delft radio (interview in Dutch).",
        "href": "/audio/pillenpopper-omroep-delft-2026-11-04.mp3",
        "source": "Omroep Delft",
        "date": "4 November 2026",
        "linkLabel": "Listen to the interview (14:54)",
        "featured": false
      },
      {
        "title": "The PillenPopper in the Parkinson Association’s member community",
        "description": "The Dutch Parkinson Association shares the public vote appeal in its online member community.",
        "source": "Parkinson Vereniging",
        "date": "2 November 2026"
      },
      {
        "title": "The PillenPopper and its Audience Award",
        "description": "De Nieuwe Haagse Courant covers the PillenPopper and its Audience Award at The Hague Innovators Awards 2026 (articles in Dutch).",
        "href": "https://dnhc.nl/voorpagina/haagse-innovatie-pillenpopper-wint-publieksprijs-the-hague-innovators-awards/",
        "source": "De Nieuwe Haagse Courant",
        "date": "19 November 2026",
        "linkLabel": "Read about the Audience Award",
        "additionalLinks": [
          {
            "label": "Read about the PillenPopper",
            "href": "https://dnhc.nl/voorpagina/haagse-rik-23-ontwikkelt-hulpmiddel-waarmee-mensen-zelfstandig-pillen-kunnen-uitdrukken/"
          }
        ]
      },
      {
        "title": "The PillenPopper on West Wordt Wakker",
        "description": "Rik van Wieren explains why he made the PillenPopper and demonstrates it to Bob Brinkman on Radio West (interview in Dutch).",
        "href": "/audio/pillenpopper-radio-west-2026-11-06.mp3",
        "source": "Omroep West",
        "date": "6 November 2026",
        "linkLabel": "Listen to the interview (5:32)",
        "featured": true
      },
      {
        "title": "The PillenPopper on Den Haag FM",
        "description": "Rik van Wieren talks about the PillenPopper and helping people with weak or painful hands. Listen to the interview in two parts (in Dutch).",
        "href": "https://media.denhaagfm.nl/audio/denhaagfm/202610271900.mp3#t=470,670",
        "source": "Den Haag FM",
        "date": "27 October 2026",
        "linkLabel": "Listen to part 1 (7:50 to 11:10)",
        "additionalLinks": [
          {
            "label": "Listen to part 2 (19:00 to 22:45)",
            "href": "https://media.denhaagfm.nl/audio/denhaagfm/202610271900.mp3#t=1140,1365"
          }
        ]
      },
      {
        "title": "Rik van Wieren and the story behind the PillenPopper",
        "description": "The Hague Online profiles Rik van Wieren, the development of the PillenPopper and his work supporting student entrepreneurs.",
        "href": "https://thehagueonline.com/community-story-meet-rik-van-wieren-the-entrepreneur-behind-the-pillenpopper/",
        "source": "The Hague Online",
        "date": "25 October 2026"
      },
      {
        "title": "Nominee video: Core Solutions and the PillenPopper",
        "description": "Rik van Wieren introduces the PillenPopper and why he developed it in the official ImpactCity nominee video.",
        "href": "https://www.youtube.com/watch?v=zYGTYkWatKQ",
        "source": "ImpactCity",
        "date": "22 October 2026"
      },
      {
        "title": "The Hague Innovators Awards 2026 nominees announced",
        "description": "Core Solutions is listed among the student nominees for an aid for people with reduced hand function (article in Dutch).",
        "href": "https://dagblad070.nl/Den%20Haag%20%26%20Regio/nominaties-voor-the-hague-innovators-awards-2026-bekendgemaakt",
        "source": "Dagblad070",
        "date": "22 September 2026"
      },
      {
        "title": "Core Solutions nominated for The Hague Student Innovator Award 2026",
        "description": "ImpactCity lists Core Solutions among the student nominees for its work helping people with reduced hand function remove tablets from blister packs independently.",
        "href": "https://www.impactcity.nl/nominaties-voor-the-hague-innovators-awards-2026-bekendgemaakt/",
        "source": "ImpactCity",
        "date": "22 September 2026"
      }
    ],
    "cardImage": {
      "src": "/images/pillenpopper-blister.jpg",
      "alt": "A woman presses the PillenPopper with her palm to remove a pill from a blister pack"
    },
    "gallery": [
      {
        "src": "/images/pillenpopper-blister.jpg",
        "alt": "A woman uses her palm to press a pill out of its blister pack with the PillenPopper",
        "caption": "PillenPopper operated with the palm"
      }
    ],
    "faqs": [
      {
        "question": "Who is the PillenPopper designed for?",
        "answer": "It is designed for people who have difficulty preparing pills independently because of weak or painful hands or reduced hand function. With the PillenPopper, people with a range of hand impairments can independently remove pills from blister packs and split suitable pills without having to move their fingers or use much force. Further independent research is planned to better understand its suitability for different users and medication routines."
      },
      {
        "question": "How does the PillenPopper work?",
        "answer": "With the PillenPopper, you simply slide a whole blister strip into a clip without having to move your fingers. Press a lever with your palm or forearm to push a pill from the strip into the collection tray. The pill can then be taken directly or organised in, for example, a weekly pill organiser. An integrated, patent-pending mechanism can split suitable pills without a sharp blade and with little force."
      },
      {
        "question": "Can every pill be split?",
        "answer": "No. Only split a pill when the instructions for that specific medicine permit it. If you are unsure, ask your pharmacist. The PillenPopper does not determine whether a medicine can be split."
      },
      {
        "question": "Has the PillenPopper been tested?",
        "answer": "The PillenPopper was developed together with users and occupational therapists. The next step is further independent validation through a large-scale pilot with 100 participants."
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
    value: '10.000+',
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

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

