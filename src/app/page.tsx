import Link from "next/link";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import TimeCircuits from "@/components/TimeCircuits";
import TronCycle from "@/components/TronCycle";
import AkiraBike from "@/components/AkiraBike";
import RubiksCube from "@/components/RubiksCube";
import { ARSENAL, PRINCIPLES, PRODUCTS } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-floor opacity-[0.22]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px]"
          style={{ background: "radial-gradient(circle, rgba(124,77,255,0.34) 0%, rgba(124,77,255,0) 68%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-32 h-[420px] w-[420px]"
          style={{ background: "radial-gradient(circle, rgba(255,46,136,0.26) 0%, rgba(255,46,136,0) 68%)" }}
          aria-hidden="true"
        />

        <div className="house relative grid items-center gap-10 py-12 lg:grid-cols-[1.02fr_1fr] lg:gap-14 lg:py-20">
          <div>
            <Reveal>
              <p className="eyebrow">The mothership · independent software lab</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[clamp(2.7rem,6.4vw,5.4rem)] leading-[0.94]">
                Software
                <br />
                with <span className="chrome">sharp</span>
                <br />
                teeth.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-[52ch] text-[16.5px] leading-relaxed text-body">
                LaserRaptor is the lab behind <span className="text-ink">Gavel</span> and{" "}
                <span className="text-ink">Broomy</span>. We take official data, build it into tools
                people actually use, and dress the whole thing in arcade neon. Small operation, sharp
                output.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/products" className="btn">
                  See the line
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/about" className="btn btn-ghost">
                  Read the origin
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320} className="mt-8 max-w-[420px]">
              <TimeCircuits />
            </Reveal>
          </div>

          <Reveal delay={140}>
            <figure className="relative">
              <div className="scanlines bevel relative overflow-hidden border border-line bg-panel shadow-panel">
                <img
                  src="/img/hero-laser.webp"
                  srcSet="/img/hero-laser-sm.webp 873w, /img/hero-laser.webp 1408w"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  width={1408}
                  height={768}
                  alt="A velociraptor with glowing laser eyes stands on a rock above a neon valley, firing beams across a synthwave sky"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
                <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 border border-line/70 bg-void/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-cyan">
                  <span className="h-1 w-1 rounded-full bg-cyan" /> Laser armed
                </div>
                <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
                  Fig. 01 — apex predator, low orbit
                </div>
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.2em] text-muted">
                <span>Neo-Tokyo // 03:14 local</span>
                <span className="text-magenta">88 mph →</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="house relative">
          <dl className="grid grid-cols-1 divide-y divide-line border-t border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["02", "Products in the line"],
              ["01", "Lab, Den Haag"],
              ["00", "Cookies set"],
            ].map(([value, label]) => (
              <div key={label} className="flex items-baseline gap-4 px-1 py-4 sm:px-6">
                <dd className="font-display text-2xl text-ink">{value}</dd>
                <dt className="label">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Marquee />

      {/* --------------------------------------------------------- products */}
      <section id="line" className="relative py-20 sm:py-24">
        <div className="house">
          <Reveal className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">01 / The line</p>
              <h2 className="mt-4 text-[clamp(1.9rem,4vw,3.1rem)]">Products from the workshop.</h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Two tracks, one standard: real data, real edges, no filler. Every product runs its own
              domain under this brand.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.slug} delay={i * 90}>
                <ProductCard product={product} index={i} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="bevel-sm mt-5 flex flex-col gap-4 border border-dashed border-line bg-panel/40 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="label">Bay 03 — occupied</p>
                <p className="mt-2 font-display text-lg uppercase tracking-[0.04em] text-ink">
                  Something else is under the tarp.
                </p>
              </div>
              <Link
                href="/contact"
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan transition-opacity hover:opacity-70"
              >
                Ask for early access →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- statement */}
      <section className="relative overflow-hidden border-y border-line">
        <img
          src="/img/neo-tokyo.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/92 to-canvas/40" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-canvas/25" aria-hidden="true" />
        <div className="scanlines absolute inset-0" aria-hidden="true" />
        <div className="house relative flex min-h-[480px] items-center py-20">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Field note</p>
            <blockquote className="mt-5">
              <p className="font-display text-[clamp(1.7rem,3.9vw,3.1rem)] leading-[1.14] text-ink">
                “We were promised neon cities and flying cars. We got the neon.{" "}
                <span className="neon-magenta">We are building the rest.</span>”
              </p>
              <footer className="mt-7 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
                — The lab, 2026
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- arsenal */}
      <section className="py-20 sm:py-24">
        <div className="house">
          <Reveal className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">02 / The arsenal</p>
              <h2 className="mt-4 text-[clamp(1.9rem,4vw,3.1rem)]">Five things that built the look.</h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Not decoration — a design brief. Chrome, grid, neon and a dinosaur that refuses to go
              extinct.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-6">
            {ARSENAL.map((item, i) => {
              const art =
                item.id === "tron" ? (
                  <TronCycle />
                ) : item.id === "akira" ? (
                  <AkiraBike />
                ) : item.id === "cube" ? (
                  <RubiksCube />
                ) : null;

              return (
                <Reveal key={item.id} className={item.span} delay={i * 70}>
                  <article className="bevel-sm tilt group flex h-full min-h-[340px] flex-col overflow-hidden border border-line bg-panel">
                    <div className="relative flex-1 overflow-hidden bg-void">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.imageAlt ?? ""}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 grid-floor opacity-40" aria-hidden="true">
                          <div className="flex h-full w-full items-center justify-center">{art}</div>
                        </div>
                      )}
                      <span className="absolute left-3 top-3 border border-line/60 bg-void/80 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan">
                        {item.meta}
                      </span>
                    </div>
                    <div className="border-t border-line p-4">
                      <h3 className="font-display text-lg uppercase tracking-[0.05em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{item.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- lab */}
      <section className="border-t border-line bg-void/40 py-20 sm:py-24">
        <div className="house grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="eyebrow">03 / The lab</p>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,3.1rem)]">One room. Two products. No excuses.</h2>
            <p className="mt-6 max-w-[54ch] text-body">
              Design, engineering, data pipelines and copy all happen in the same room. That is why
              the sites are fast, the numbers match, and the text does not read like it was assembled
              by a committee.
            </p>
            <p className="mt-4 max-w-[54ch] text-body">
              The name is the brief: a raptor is small, fast and smarter than it looks. The laser is
              for the detail work.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink transition-colors hover:text-cyan"
            >
              Read the origin <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <ol className="divide-y divide-line border-y border-line">
              {PRINCIPLES.map((p) => (
                <li key={p.n} className="grid grid-cols-[auto_1fr] gap-5 py-6">
                  <span className="font-display text-sm text-magenta">{p.n}</span>
                  <div>
                    <h3 className="font-display text-base uppercase tracking-[0.06em] text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- cta */}
      <section className="relative overflow-hidden border-t border-line">
        <img
          src="/img/raptor-street.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[50%_52%] opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/85 to-canvas/40" aria-hidden="true" />
        <div className="house relative flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">Open channel</p>
            <h2 className="mt-4 text-[clamp(2.1rem,5vw,4rem)]">
              Knock on <span className="chrome">the door.</span>
            </h2>
            <p className="mt-4 max-w-md text-body">
              One address, real replies. Product questions, partnerships, or a good 80s reference we
              missed.
            </p>
          </Reveal>
          <Reveal delay={100} className="shrink-0">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn">
                Open contact
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/products" className="btn btn-ghost">
                The line
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
