import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PRODUCTS } from "@/content/site";

export const metadata: Metadata = {
  title: "The line",
  description:
    "Gavel and Realty: the two products built by LaserRaptor. One engine, one live portal, one standard.",
  alternates: { canonical: "/products" },
};

const SPECS: Record<string, [string, string][]> = {
  gavel: [
    ["Status", "Live"],
    ["Running at", "realty.gavel.laserraptor.eu"],
    ["Brand domain", "gavel.laserraptor.eu"],
    ["Coverage", "NL · PL · PT · ES"],
    ["Surfaces", "Map · list · dossier"],
  ],
  realty: [
    ["Status", "Live"],
    ["Production", "realty.gavel.laserraptor.eu"],
    ["Former name", "gavelll.eu"],
    ["Coverage", "DE · ZVG"],
    ["Surfaces", "Map · list · dossier"],
  ],
};

const SHIP = [
  {
    n: "01",
    title: "Harvest",
    body: "Pull from the official source: registers, portals, notices. Keep the raw record so any number on screen can be traced back.",
  },
  {
    n: "02",
    title: "Normalise",
    body: "One schema, one identity per object, duplicates merged. The same lot must never appear twice with two prices.",
  },
  {
    n: "03",
    title: "Ship",
    body: "A front end that answers a question in one screen, on a phone, over a bad connection. Then measure, then cut.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-floor opacity-[0.16]" aria-hidden="true" />
        <div className="house relative py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow">The line</p>
            <h1 className="mt-5 text-[clamp(2.4rem,5.6vw,4.6rem)]">
              Two tracks,
              <br />
              one <span className="chrome">standard.</span>
            </h1>
            <p className="mt-6 max-w-[56ch] text-body">
              Every LaserRaptor product gets its own domain, its own audience and its own edge. What
              they share is the plumbing: official data, one schema, and a front end that does not
              waste your time.
            </p>
          </Reveal>
        </div>
      </section>

      {PRODUCTS.map((product, index) => (
        <section
          key={product.slug}
          id={product.slug}
          className={`border-b border-line py-16 sm:py-20 ${index % 2 === 1 ? "bg-void/40" : ""}`}
        >
          <div className="house grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <p className="label flex items-center gap-3">
                <span className="font-display text-sm text-magenta">P.{String(index + 1).padStart(2, "0")}</span>
                {product.kicker}
              </p>
              <h2 className="mt-4 text-[clamp(2rem,4.2vw,3.4rem)]">{product.name.toUpperCase()}</h2>
              <p className="mt-5 max-w-[52ch] text-body">{product.summary}</p>

              <ul className="mt-7 grid gap-3">
                {product.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-body">
                    <span className="mt-[3px] font-mono text-[10px] text-cyan" aria-hidden="true">
                      ▸
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {product.href ? (
                  <a href={product.href} target="_blank" rel="noreferrer" className="btn">
                    Visit {product.hrefLabel}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <Link href="/contact" className="btn">
                    Ask about the first run
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
                <Link href="/contact" className="btn btn-ghost">
                  Talk to the lab
                </Link>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="bevel panel overflow-hidden">
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <span className="label">Spec sheet</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                    {product.slug}.rev / 01
                  </span>
                </div>
                <dl>
                  {(SPECS[product.slug] ?? []).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-baseline justify-between gap-6 border-b border-line-soft px-4 py-3 last:border-b-0"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{key}</dt>
                      <dd className="text-right font-mono text-[11px] uppercase tracking-[0.1em] text-ink">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="relative aspect-[16/9] overflow-hidden border-t border-line">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="py-20">
        <div className="house">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Method</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)]">How a product gets out the door.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SHIP.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="bevel-sm h-full border border-line bg-panel p-6">
                  <span className="font-display text-sm text-magenta">{step.n}</span>
                  <h3 className="mt-3 font-display text-lg uppercase tracking-[0.04em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16">
        <div className="house flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="text-[clamp(1.6rem,3.4vw,2.6rem)]">Want the next one first?</h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              The third product is still in the bay. Mail the lab and you will hear about it before
              the launch page does.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/contact" className="btn">
              Open contact <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
