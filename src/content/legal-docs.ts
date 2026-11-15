/**
 * Legal documents for LaserRaptor and its products.
 *
 * One source of truth. Every product site links to these pages instead of
 * keeping its own copy, so a change lands in one place.
 *
 * Version and date are shown on the page. Change them together with the text.
 */

export const ENTITY = {
  name: "LaserRaptor",
  kvk: "92580114",
  city: "Den Haag",
  country: "the Netherlands",
  email: "info@laserraptor.eu",
  product: "Broomy",
  productUrl: "https://broomy.laserraptor.eu",
  legalHub: "https://laserraptor.eu/legal",
} as const;

export const VERSION = "v1.0";
export const UPDATED = "15 November 2026";

export type Block =
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "note"; text: string }
  | { t: "h3"; text: string };

export type Clause = { id: string; heading: string; blocks: Block[] };

export type LegalDoc = {
  slug: "dpa" | "sub-processors" | "privacy";
  title: string;
  kicker: string;
  summary: string;
  meta: string;
  clauses: Clause[];
};

/* ------------------------------------------------------------------ DPA -- */

const DPA: LegalDoc = {
  slug: "dpa",
  title: "Data Processing Agreement",
  kicker: "Article 28 GDPR",
  summary:
    "How LaserRaptor processes personal data on behalf of a customer, which measures protect it, and what happens at the end of the contract.",
  meta: "This DPA applies to every paid Broomy subscription and to any other LaserRaptor service that handles personal data for a customer.",
  clauses: [
    {
      id: "parties",
      heading: "Parties and roles",
      blocks: [
        {
          t: "p",
          text: `This Data Processing Agreement ("DPA") forms part of the agreement between ${ENTITY.name}, ${ENTITY.city}, ${ENTITY.country}, KvK ${ENTITY.kvk} ("we", "processor") and the customer named in the order or subscription ("Customer", "controller").`,
        },
        {
          t: "p",
          text: "The Customer decides why personal data is processed and what data is processed. LaserRaptor processes that data only on the Customer's documented instructions. This DPA follows Article 28 of Regulation (EU) 2016/679 (GDPR).",
        },
        {
          t: "p",
          text: "Where the Customer acts as a processor for its own clients, the Customer is the controller towards LaserRaptor and passes these duties on.",
        },
      ],
    },
    {
      id: "definitions",
      heading: "Definitions",
      blocks: [
        {
          t: "p",
          text: "Personal data, processing, controller, processor, data subject, personal data breach, sub-processor and supervisory authority have the meaning given in Article 4 GDPR.",
        },
        {
          t: "ul",
          items: [
            "Service: the Broomy API, dashboard and related endpoints, and any other LaserRaptor service named in the order.",
            "Customer Data: the prompts, inputs, outputs and files the Customer submits to the Service.",
            "Usage metadata: model identifier, token counts, request duration, status code and a hashed IP address.",
          ],
        },
      ],
    },
    {
      id: "scope",
      heading: "Subject matter, duration and purpose",
      blocks: [
        {
          t: "p",
          text: "Subject matter: provision of the Service, which generates text from the Customer's input. Duration: the term of the subscription plus the deletion period in clause 14.",
        },
        {
          t: "ul",
          items: [
            "Nature of the processing: storage of account data, transmission of a prompt to the inference engine, generation of output, accounting of token use.",
            "Purpose: to deliver the Service the Customer ordered. No other purpose.",
            "No secondary use. We do not train models on Customer Data. We do not sell it. We do not use it for advertising.",
          ],
        },
      ],
    },
    {
      id: "categories",
      heading: "Categories of personal data and data subjects",
      blocks: [
        {
          t: "p",
          text: "Data subjects: the Customer's authorised users, and any person whose personal data appears in a prompt.",
        },
        {
          t: "ul",
          items: [
            "Account data: name, email address, company name, VAT number, hashed password or Google account identifier.",
            "Authentication data: session token, timestamp, IP address.",
            "Usage metadata: model, token counts, duration, status code, hashed IP address.",
            "Customer Data: prompts and generated answers, held in memory for the duration of the request only.",
          ],
        },
        {
          t: "note",
          text: "Do not submit special categories of data (Article 9 GDPR) or data from a regulated sector unless both parties agree in writing first. For healthcare, education and public-sector data we require a written scope agreement before any processing.",
        },
      ],
    },
    {
      id: "instructions",
      heading: "Instructions and scope of processing",
      blocks: [
        {
          t: "ol",
          items: [
            "We process Customer Data only on the Customer's documented instructions, including for transfers to a third country, unless EU or Dutch law requires otherwise. If the law requires it, we tell the Customer before processing, unless that law forbids the notice.",
            "We tell the Customer at once if an instruction, in our view, breaks the GDPR or other EU or Dutch data protection law.",
            "We do not store prompt or completion content in our database, in our application logs or in our backups. A request is held in memory while it runs and is discarded when it finishes.",
            "The inference engine records token counts and timings, never text. We demonstrate this on request with a test request and a log search.",
          ],
        },
      ],
    },
    {
      id: "confidentiality",
      heading: "Confidentiality",
      blocks: [
        {
          t: "p",
          text: "Access to Customer Data is limited to the persons who need it to run the Service. Today that is one system administrator. Each person works under a written confidentiality duty.",
        },
        {
          t: "p",
          text: "Access uses SSH keys, not shared passwords. Access is revoked when a person leaves or changes role.",
        },
      ],
    },
    {
      id: "security",
      heading: "Security of processing",
      blocks: [
        {
          t: "p",
          text: "We take the technical and organisational measures listed in Annex 1. They give a level of security appropriate to the risk, as Article 32 GDPR requires.",
        },
        {
          t: "p",
          text: "We review those measures at least once a year and after every security incident.",
        },
      ],
    },
    {
      id: "subprocessors",
      heading: "Sub-processors",
      blocks: [
        {
          t: "p",
          text: "The Customer gives general written authorisation for the sub-processors published at https://laserraptor.eu/legal/sub-processors.",
        },
        {
          t: "ol",
          items: [
            "We publish the list before the first processing and keep it current.",
            "We give at least 30 days' notice before adding or replacing a sub-processor.",
            "The Customer may object on reasonable data protection grounds. If we cannot resolve the objection, the Customer may terminate the affected service without penalty.",
            "We impose the same data protection duties on every sub-processor by written contract.",
            "We remain liable to the Customer for the acts and omissions of our sub-processors.",
          ],
        },
        {
          t: "p",
          text: "Hosting and inference run on our own hardware in the Netherlands. That hardware is not a sub-processor. We use no model provider outside the EU.",
        },
      ],
    },
    {
      id: "transfers",
      heading: "International transfers",
      blocks: [
        {
          t: "p",
          text: "We process Customer Data inside the European Economic Area. We do not transfer it to a third country. We do not use a support desk outside the EEA.",
        },
        {
          t: "p",
          text: "If this changes, we give notice under clause 8 and put a valid transfer mechanism in place before any transfer starts.",
        },
      ],
    },
    {
      id: "rights",
      heading: "Assistance with data subject rights",
      blocks: [
        {
          t: "p",
          text: "We help the Customer answer requests from data subjects, by technical and organisational means, as far as we can.",
        },
        {
          t: "p",
          text: "We forward any request we receive directly to the Customer without answering it, unless the law requires us to answer. We give the Customer the information it needs from our systems within 10 working days.",
        },
      ],
    },
    {
      id: "assistance",
      heading: "Assistance with Articles 32 to 36",
      blocks: [
        {
          t: "p",
          text: "We help the Customer meet its duties under Articles 32 to 36 GDPR, taking into account the nature of the processing and the information available to us.",
        },
        {
          t: "p",
          text: "This includes a data protection impact assessment and a prior consultation with the supervisory authority.",
        },
      ],
    },
    {
      id: "breach",
      heading: "Personal data breach",
      blocks: [
        {
          t: "ol",
          items: [
            "We notify the Customer without undue delay, and aim to notify within 24 hours of confirming a breach.",
            "The notice describes the nature of the breach, the categories and number of data subjects and records affected, the likely consequences, and the measures taken or proposed.",
            "We give the information in stages when the facts are not yet complete, and we keep the Customer updated until the matter is closed.",
            "We do not notify the supervisory authority or the data subjects on the Customer's behalf unless the Customer asks us to in writing.",
          ],
        },
      ],
    },
    {
      id: "audit",
      heading: "Audit and information",
      blocks: [
        {
          t: "p",
          text: "We answer one security questionnaire per year at no cost.",
        },
        {
          t: "p",
          text: "We allow one audit per year, with 30 days' notice, during office hours, limited to the systems that process Customer Data. The Customer pays the cost. We may refuse an audit that risks the security or confidentiality of other customers, and offer a written statement instead.",
        },
        {
          t: "p",
          text: "We answer reasonable written questions about compliance within 10 working days.",
        },
      ],
    },
    {
      id: "deletion",
      heading: "Deletion and return of data",
      blocks: [
        {
          t: "p",
          text: "The Customer can export its data at any time from the dashboard.",
        },
        {
          t: "p",
          text: "At the end of the agreement we delete Customer Data within 30 days. Backups roll over within 90 days.",
        },
        {
          t: "p",
          text: "We keep invoice records for 7 years because Dutch tax law requires it (Article 52 AWR). Those records contain no Customer Data.",
        },
      ],
    },
    {
      id: "liability",
      heading: "Liability",
      blocks: [
        {
          t: "p",
          text: "Each party is liable under this DPA as set out in the main agreement. Where the main agreement has no cap, liability is limited to the fees paid for the Service in the 12 months before the event.",
        },
        {
          t: "p",
          text: "This cap does not apply to wilful misconduct or gross negligence. It does not limit the rights of data subjects under the GDPR.",
        },
      ],
    },
    {
      id: "term",
      heading: "Term, changes and governing law",
      blocks: [
        {
          t: "p",
          text: "This DPA runs as long as the Service is provided. It ends when the deletion period in clause 14 ends.",
        },
        {
          t: "p",
          text: "Changes are valid only in writing, including email from an authorised address. A new version published on this page replaces the previous version 30 days after publication, unless the Customer objects in writing.",
        },
        {
          t: "p",
          text: "Dutch law applies. The Rechtbank Den Haag has jurisdiction, unless the law gives a data subject another forum.",
        },
      ],
    },
    {
      id: "annex-1",
      heading: "Annex 1 — Technical and organisational measures",
      blocks: [
        {
          t: "ul",
          items: [
            "Hosting: our own hardware in the Netherlands. No hyperscaler, no CDN, no parent company outside the EU in the data path.",
            "Transit: TLS 1.2 or higher on every public endpoint. HSTS with a one-year max-age. HTTP redirects to HTTPS.",
            "Secrets: passwords stored with scrypt. API keys stored as SHA-256 hashes with a 10-character display prefix. Session cookies are HttpOnly, SameSite=Lax, Secure over HTTPS and HMAC-signed.",
            "Prompt content: never written to disk. Not in the database, not in the logs, not in backups. Engine logs record token counts and timings only.",
            "Access: SSH keys only, no password login, one administrator. Root actions are logged.",
            "Separation: each customer has its own API keys. Usage is accounted per key.",
            "Rate limits: per-key concurrency limits, so one account cannot exhaust the engine.",
            "Availability: health checks, restart on failure, automatic recovery of the inference service.",
            "Backups: local Proxmox Backup Server in the Netherlands. Backups hold account and billing data, never prompt content.",
            "Retention: usage metadata 120 days, server logs 30 days, invoices 7 years.",
            "Patching: operating system and dependency updates at least monthly. Urgent security fixes as soon as they land.",
            "Personnel: one administrator under a confidentiality duty, key-based access, revoked on exit.",
            "Premises: access-controlled premises in the Netherlands. The address is not published.",
          ],
        },
      ],
    },
    {
      id: "annex-2",
      heading: "Annex 2 — Processing details",
      blocks: [
        {
          t: "table",
          head: ["Item", "Detail"],
          rows: [
            ["Data subjects", "Customer users, and persons whose data appears in a prompt"],
            ["Categories of personal data", "Account data, authentication data, usage metadata, Customer Data in memory"],
            ["Purpose", "Delivering the Service ordered by the Customer"],
            ["Duration", "Term of the subscription plus the deletion period"],
            ["Special categories", "Not processed unless agreed in writing"],
            ["Sub-processors", "See /legal/sub-processors"],
          ],
        },
      ],
    },
  ],
};

/* --------------------------------------------------------- sub-processors -- */

const SUBPROCESSORS: LegalDoc = {
  slug: "sub-processors",
  title: "Sub-processors",
  kicker: "Article 28(2) GDPR",
  summary:
    "Every third party that can touch customer data, where it is located, and how a customer can object to a change.",
  meta: "Published 15 November 2026. Customers receive at least 30 days' notice before this list changes.",
  clauses: [
    {
      id: "authorisation",
      heading: "Why this page exists",
      blocks: [
        {
          t: "p",
          text: "Customers give general written authorisation for the sub-processors on this page when they accept the Data Processing Agreement. This page is the current list. It is part of that agreement.",
        },
        {
          t: "p",
          text: "The list has no filler. If a company cannot reach customer data, it is not on the list.",
        },
      ],
    },
    {
      id: "current",
      heading: "Current sub-processors",
      blocks: [
        {
          t: "table",
          head: ["Provider", "Service", "Location", "Data"],
          rows: [
            [
              "Mollie B.V.",
              "Payments, subscriptions, invoices",
              "Netherlands (Amsterdam)",
              "Name, email, company, billing address, payment status, last digits of the IBAN",
            ],
            [
              "Strato AG",
              "Transactional email and mailboxes",
              "Germany (Berlin)",
              "Email address, and the content of transactional mail such as login links",
            ],
            [
              "Google Ireland Limited",
              'Optional "Sign in with Google"',
              "Ireland (Dublin)",
              "Email address, name, Google account identifier. Only when the customer chooses this option. Email and password works without it.",
            ],
          ],
        },
      ],
    },
    {
      id: "not-subprocessors",
      heading: "What is not a sub-processor",
      blocks: [
        {
          t: "p",
          text: "Hosting, storage, backups and model inference run on LaserRaptor's own hardware in the Netherlands. No third party has access to it.",
        },
        {
          t: "ul",
          items: [
            "No model provider outside the EU. The model runs on our own GPU.",
            "No content delivery network.",
            "No analytics, tag manager or advertising network.",
            "No external support desk. Support is answered in the EU.",
          ],
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes to this list",
      blocks: [
        {
          t: "ol",
          items: [
            "We email the account owner at least 30 days before a new sub-processor starts.",
            "We publish the addition on this page on the same day.",
            "The customer may object on reasonable data protection grounds within those 30 days.",
            "If we cannot resolve an objection, the customer may terminate the affected service without penalty, and we refund the unused period.",
          ],
        },
      ],
    },
    {
      id: "vetting",
      heading: "How we select a sub-processor",
      blocks: [
        {
          t: "ul",
          items: [
            "The provider processes data inside the EEA.",
            "The provider signs a data processing agreement with GDPR terms.",
            "The provider proves its security posture, or accepts a written assessment.",
            "The provider has a breach notification duty towards us, so we can meet the 24-hour target in our DPA.",
          ],
        },
      ],
    },
    {
      id: "contact",
      heading: "Questions or objections",
      blocks: [
        {
          t: "p",
          text: `Write to ${ENTITY.email} with the subject "sub-processor objection". We answer within 5 working days.`,
        },
      ],
    },
  ],
};

/* --------------------------------------------------------------- privacy -- */

const PRIVACY: LegalDoc = {
  slug: "privacy",
  title: "Privacy statement",
  kicker: "Who we are and what we do with your data",
  summary:
    "What LaserRaptor collects on its own sites, what Broomy stores about an account, how long we keep it, and how to exercise your rights.",
  meta: "This statement covers laserraptor.eu and every LaserRaptor product site that links to it, including Broomy.",
  clauses: [
    {
      id: "controller",
      heading: "Who is responsible",
      blocks: [
        {
          t: "p",
          text: `${ENTITY.name}, ${ENTITY.city}, ${ENTITY.country}, KvK ${ENTITY.kvk}, is the controller for the personal data described here. Write to ${ENTITY.email}.`,
        },
        {
          t: "p",
          text: "We do not have a statutory data protection officer. The owner handles privacy questions directly and answers within 30 days.",
        },
      ],
    },
    {
      id: "site-visits",
      heading: "When you visit our sites",
      blocks: [
        {
          t: "p",
          text: "The web server records the IP address, the user agent, the requested path and the time of the request. We use this for security, abuse prevention and capacity planning. Legal basis: legitimate interest, Article 6(1)(f) GDPR.",
        },
        {
          t: "ul",
          items: [
            "No cookies on the LaserRaptor site.",
            "No analytics, no tag manager, no advertising pixels.",
            "No third-party fonts, scripts or CDNs. Each page loads only from our own server.",
            "No cross-site tracking, so no cookie banner is needed.",
          ],
        },
        {
          t: "note",
          text: "Broomy is different: it sets one functional session cookie so you can stay logged in. It holds a signed session token, nothing else. It is HttpOnly, SameSite=Lax and Secure over HTTPS.",
        },
      ],
    },
    {
      id: "account",
      heading: "When you open a Broomy account",
      blocks: [
        {
          t: "ul",
          items: [
            "Email address, name if you give it, company name and VAT number.",
            "Your password, stored only as a scrypt hash. Or a Google account identifier if you sign in with Google.",
            "Your API keys, stored as SHA-256 hashes. The raw key is shown once and never again.",
            "Usage metadata: model, token counts, duration, status code, hashed IP address.",
          ],
        },
        {
          t: "p",
          text: "Legal basis: performance of a contract, Article 6(1)(b) GDPR, and legitimate interest in abuse prevention, Article 6(1)(f).",
        },
        {
          t: "p",
          text: "We do not store the content of your prompts or the generated answers. A request passes through memory and is then gone.",
        },
      ],
    },
    {
      id: "payments",
      heading: "When you pay",
      blocks: [
        {
          t: "p",
          text: "Payments run through Mollie B.V. in the Netherlands. We receive the payment status, an invoice reference and the last digits of the IBAN. We never see your full card number or your bank credentials.",
        },
        {
          t: "p",
          text: "We keep invoices for 7 years because Dutch tax law requires it (Article 52 AWR). Legal basis: legal obligation, Article 6(1)(c) GDPR.",
        },
      ],
    },
    {
      id: "email",
      heading: "When you email us",
      blocks: [
        {
          t: "p",
          text: "We keep the conversation while it is open, and for 2 years after the last message. Legal basis: legitimate interest in serving customers and keeping a record, Article 6(1)(f).",
        },
      ],
    },
    {
      id: "retention",
      heading: "How long we keep data",
      blocks: [
        {
          t: "table",
          head: ["Data", "Retention"],
          rows: [
            ["Server logs (IP, user agent, path, time)", "30 days"],
            ["Usage metadata (model, tokens, duration, hashed IP)", "120 days"],
            ["Account data", "While the account is active, then 30 days"],
            ["Invoices", "7 years (Article 52 AWR)"],
            ["Support email", "2 years after the last message"],
            ["Backups", "90 days rolling"],
          ],
        },
      ],
    },
    {
      id: "sharing",
      heading: "Who else sees your data",
      blocks: [
        {
          t: "p",
          text: "Only the sub-processors listed at https://laserraptor.eu/legal/sub-processors, and only for the purpose stated there.",
        },
        {
          t: "ul",
          items: [
            "We do not sell personal data.",
            "We do not share it for advertising.",
            "We do not hand it to a model provider outside the EU, because there is none in the path.",
            "We disclose data to a government only when the law requires it, and we tell you unless the law forbids that.",
          ],
        },
      ],
    },
    {
      id: "transfers",
      heading: "Transfers outside the EEA",
      blocks: [
        {
          t: "p",
          text: "We process personal data inside the European Economic Area. We do not transfer it to a third country.",
        },
        {
          t: "p",
          text: "The only exception is what you choose yourself: if you sign in with Google, Google Ireland processes your account data inside the EU.",
        },
      ],
    },
    {
      id: "rights",
      heading: "Your rights",
      blocks: [
        {
          t: "p",
          text: "You can ask for access, correction, deletion, restriction, portability, or object to processing based on legitimate interest. You can withdraw consent at any time.",
        },
        {
          t: "ol",
          items: [
            `Send the request to ${ENTITY.email}. One line is enough; we may ask you to confirm your identity.`,
            "We answer within 30 days, and tell you if we need more time.",
            "If you disagree with the answer, you can complain to the Autoriteit Persoonsgegevens, the Dutch supervisory authority.",
          ],
        },
        {
          t: "p",
          text: "Deleting your account deletes your account data and API keys. Invoices stay, because tax law requires it.",
        },
      ],
    },
    {
      id: "ai-output",
      heading: "About the generated text",
      blocks: [
        {
          t: "ul",
          items: [
            "Model output can be wrong, incomplete or biased. Check it before you rely on it.",
            "The model does not learn from your prompts. Your data does not enter a training set.",
            "Do not submit special categories of data (Article 9 GDPR) or confidential third-party data you have no right to share.",
          ],
        },
      ],
    },
    {
      id: "children",
      heading: "Children",
      blocks: [
        {
          t: "p",
          text: "The Service is for professional use and is not intended for anyone under 16. We do not knowingly process data of children. If you find such data, tell us and we delete it.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes to this statement",
      blocks: [
        {
          t: "p",
          text: "Every version carries a date. A material change is announced by email to account holders at least 30 days before it takes effect.",
        },
      ],
    },
  ],
};

export const DOCS: Record<LegalDoc["slug"], LegalDoc> = {
  dpa: DPA,
  "sub-processors": SUBPROCESSORS,
  privacy: PRIVACY,
};

export const DOC_INDEX: { slug: LegalDoc["slug"]; href: string; title: string; blurb: string }[] = [
  {
    slug: "dpa",
    href: "/legal/dpa",
    title: "Data Processing Agreement",
    blurb: "The Article 28 terms we sign with customers, with the security measures in the annex.",
  },
  {
    slug: "sub-processors",
    href: "/legal/sub-processors",
    title: "Sub-processors",
    blurb: "Every third party that can reach customer data, where it sits, and how to object.",
  },
  {
    slug: "privacy",
    href: "/legal/privacy",
    title: "Privacy statement",
    blurb: "What we collect on our own sites, what an account stores, and how long we keep it.",
  },
];
