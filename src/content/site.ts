export const SITE = {
  name: "LaserRaptor",
  wordmark: "LASERRAPTOR",
  url: "https://laserraptor.eu",
  tagline: "Software with sharp teeth",
  description:
    "LaserRaptor is an independent software lab in Den Haag. We build data-heavy web products with arcade attitude — Gavel, Realty and whatever hatches next.",
  email: "hello@laserraptor.eu",
  location: "Den Haag, NL",
  nav: [
    { href: "/products", label: "Products" },
    { href: "/about", label: "The Lab" },
    { href: "/contact", label: "Contact" },
  ],
};

export type Product = {
  slug: string;
  name: string;
  kicker: string;
  status: "LIVE" | "IN THE WORKSHOP";
  tone: "magenta" | "cyan";
  summary: string;
  points: string[];
  href?: string;
  hrefLabel?: string;
  domain: string;
  image: string;
  imageAlt: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "gavel",
    name: "Gavel",
    kicker: "Auction platform",
    status: "LIVE",
    tone: "magenta",
    summary:
      "The engine under the line: official auction data harvested, normalised and served as maps, filters and dossiers. Its first portal is Realty.",
    points: [
      "Official sources, deduplicated and normalised",
      "One record per object, one price",
      "Map, list and dossier views over the same data",
    ],
    href: "https://realty.gavel.laserraptor.eu",
    hrefLabel: "realty.gavel.laserraptor.eu",
    domain: "realty.gavel.laserraptor.eu",
    image: "/img/raptor-street.webp",
    imageAlt: "A raptor in a red bomber jacket with a railgun on a neon-lit street beside a DeLorean",
  },
  {
    slug: "realty",
    name: "Realty",
    kicker: "Property auctions",
    status: "LIVE",
    tone: "cyan",
    summary:
      "The property portal on the Gavel engine: German foreclosure auctions with photos, court documents and a dossier per object. This is the site that used to answer at gavelll.eu.",
    points: [
      "Zwangsversteigerung listings from official courts",
      "Photos and documents per object",
      "DE · EN · NL · FR · IT",
    ],
    href: "https://realty.gavel.laserraptor.eu",
    hrefLabel: "realty.gavel.laserraptor.eu",
    domain: "realty.gavel.laserraptor.eu",
    image: "/img/mercenary.webp",
    imageAlt: "A T-Rex mercenary in a bomber jacket with a cannon, standing in a burning city",
  },
];

export const TICKER = [
  "88 MPH",
  "NEON TOKYO",
  "APEX PREDATOR",
  "3 × 3 × 3",
  "LIGHT CYCLE",
  "DMC-12",
  "PACK HUNTER",
  "AKIRA",
  "TRON",
  "LASERRAPTOR",
];

export type ArsenalItem = {
  id: string;
  title: string;
  meta: string;
  body: string;
  image?: string;
  imageAlt?: string;
  span: string;
};

export const ARSENAL: ArsenalItem[] = [
  {
    id: "dmc",
    title: "DMC-12",
    meta: "1981 · 88 MPH",
    body: "Stainless steel, gull-wing doors, a flux capacitor in the back. The only car that treated a speed limit as a design goal.",
    image: "/img/raptor-dmc.webp",
    imageAlt: "A raptor with laser eyes standing on a neon DeLorean on a synthwave grid",
    span: "lg:col-span-3",
  },
  {
    id: "tron",
    title: "Light Cycle",
    meta: "1982 · THE GRID",
    body: "A ribbon of light, a grid with no edges and a soundtrack by Wendy Carlos. Still the cleanest interface metaphor ever filmed.",
    span: "lg:col-span-3",
  },
  {
    id: "akira",
    title: "Kaneda's Bike",
    meta: "1988 · NEO-TOKYO",
    body: "A red slide through a city that never stopped glowing. The reason every dashboard since has wanted neon.",
    span: "lg:col-span-2",
  },
  {
    id: "cube",
    title: "3 × 3 × 3",
    meta: "1974 · 43 QUINTILLION STATES",
    body: "One solved state out of 43 quintillion. The original state machine, and still the cheapest way to teach commitment.",
    span: "lg:col-span-2",
  },
  {
    id: "raptor",
    title: "Velociraptor",
    meta: "75 M BC · NAMESAKE",
    body: "Pack hunter, apex predator, featherweight. Small, fast, and smarter than the fossil record first suggested.",
    image: "/img/field-notes.webp",
    imageAlt: "Ink drawing of a raptor in a red jacket with a railgun on a ruined highway",
    span: "lg:col-span-2",
  },
];

export const PRINCIPLES = [
  {
    n: "01",
    title: "Sharp beats big",
    body: "A product that does one thing exactly is worth more than a platform that does nine things approximately. We ship the first, and we say no to the second.",
  },
  {
    n: "02",
    title: "Data, not decoration",
    body: "Every page answers a question a user actually asked. If a chart cannot change a decision, it does not survive the second review.",
  },
  {
    n: "03",
    title: "No dark patterns",
    body: "No fake urgency, no pre-ticked boxes, no newsletter trap. The exit is as easy as the entrance, and that is a design rule, not a courtesy.",
  },
];
