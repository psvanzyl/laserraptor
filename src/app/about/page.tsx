import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ARSENAL } from "@/content/site";

export const metadata: Metadata = {
  title: "The lab",
  description:
    "LaserRaptor is an independent software lab in Den Haag: the mothership behind Gavel and Realty, built on 1980s reference material and official data.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-floor opacity-[0.16]" aria-hidden="true" />
        <div className="house relative py-16 sm:py-20">
          <Reveal>
            <p className="eyebrow">The lab</p>
            <h1 className="mt-5 text-[clamp(2.4rem,5.6vw,4.6rem)]">
              The <span className="chrome">mothership.</span>
            </h1>
            <p className="mt-6 max-w-[58ch] text-body">
              LaserRaptor is the name the products ship under, and the lab that builds them. Gavel
              and Realty are not side quests — they are the line.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="house grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <div className="max-w-[62ch] space-y-5 text-body">
              <p>
                One brand, several products. Each one gets its own domain and its own audience, so it
                can be judged on what it does rather than on a logo. What they share is the
                standard: official data, one schema, a fast front end, and copy that says something.
              </p>
              <p>
                The name is a brief. A raptor is a pack hunter — small, fast, and considerably
                smarter than the fossil record first suggested. Add a laser and you get the house
                style: precision with a sense of humour.
              </p>
              <p>
                Everything is built in the Netherlands, in a homelab, by a small team that ships its
                own work. No agency layer, no account manager, no deck. If a page is slow, it gets
                fixed; if a number is wrong, it gets traced back to the source.
              </p>
              <p>
                The aesthetic is not a mood board bolted on afterwards. The 1980s taught a generation
                that software could be a place: a grid you ride on, a city you fly through, a
                dashboard with chrome. We build in that direction on purpose.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-8">
              {[
                ["Base", "Den Haag, NL"],
                ["Products", "Gavel · Realty"],
                ["Model", "Independent"],
                ["Status", "Shipping"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="label">{k}</dt>
                  <dd className="mt-1 font-mono text-[12px] uppercase tracking-[0.1em] text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={90}>
            <figure className="relative">
              <div className="bevel overflow-hidden border border-line bg-panel">
                <img
                  src="/img/field-notes.webp"
                  alt="Ink drawing of a raptor in a red leather jacket carrying a railgun on a ruined highway, DeLorean parked behind"
                  width={1408}
                  height={768}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted">
                Field notes — ink, paper, one red jacket
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-void/40 py-16 sm:py-20">
        <div className="house">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Reference material</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3rem)]">Five things that shaped the house style.</h2>
          </Reveal>

          <ol className="mt-10 divide-y divide-line border-y border-line">
            {ARSENAL.map((item, i) => (
              <Reveal key={item.id} as="li" delay={i * 60}>
                <div className="grid gap-3 py-6 sm:grid-cols-[120px_1fr_auto] sm:items-baseline sm:gap-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{item.meta}</span>
                  <div>
                    <h3 className="font-display text-lg uppercase tracking-[0.04em] text-ink">{item.title}</h3>
                    <p className="mt-2 max-w-[62ch] text-sm text-muted">{item.body}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-line">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line">
        <img
          src="/img/mercenary.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[30%_40%] opacity-45"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/85 to-canvas/30" aria-hidden="true" />
        <div className="house relative flex min-h-[380px] items-center py-16">
          <Reveal className="max-w-2xl">
            <p className="font-display text-[clamp(1.5rem,3.4vw,2.6rem)] leading-[1.16] text-ink">
              “Small, fast, smart — and armed with a laser. The name does most of the explaining.”
            </p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
              House doctrine, line 01
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="house flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="text-[clamp(1.6rem,3.4vw,2.6rem)]">See what the lab ships.</h2>
            <p className="mt-3 max-w-md text-sm text-muted">
              Two products live under the brand, one more in the bay.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/products" className="btn">
              The line <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
