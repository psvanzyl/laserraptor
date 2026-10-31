import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PRODUCTS, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "One address for the LaserRaptor lab: product questions, partnerships and press. No forms, no trackers.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-floor opacity-[0.16]" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px]"
          style={{ background: "radial-gradient(circle, rgba(255,46,136,0.22) 0%, rgba(255,46,136,0) 68%)" }}
          aria-hidden="true"
        />
        <div className="house relative py-16 sm:py-24">
          <Reveal>
            <p className="eyebrow">Open channel</p>
            <h1 className="mt-5 text-[clamp(2.6rem,7vw,5.6rem)]">
              Knock<span className="neon-magenta">.</span>
            </h1>
            <p className="mt-6 max-w-[52ch] text-body">
              Mail goes straight to the lab. Product questions, partnerships, press, or a reference
              we should have used — all welcome.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <a
              href={`mailto:${SITE.email}`}
              className="bevel group mt-10 flex max-w-2xl flex-col gap-2 border border-line bg-panel p-6 transition-colors hover:border-magenta/60 sm:flex-row sm:items-center sm:justify-between"
            >
              <span>
                <span className="label block">Direct line</span>
                <span className="mt-2 block font-display text-xl tracking-[0.04em] text-ink group-hover:text-magenta sm:text-2xl">
                  {SITE.email}
                </span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan">
                Write now ↗
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="house grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="text-[clamp(1.6rem,3.2vw,2.4rem)]">What to put in the mail.</h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {[
                ["What you need", "The problem in one paragraph. No brief template required."],
                ["When", "A date that matters, or an honest “no deadline”."],
                ["What it touches", "Systems, sources, or data it must connect to."],
              ].map(([k, v]) => (
                <li key={k} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
                  <span className="label pt-1">{k}</span>
                  <span className="text-sm text-body">{v}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[46ch] text-sm text-muted">
              No form, no tracker, no newsletter. Just an address that reaches a human.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <div className="bevel panel overflow-hidden">
              <div className="border-b border-line px-5 py-3">
                <span className="label">The line — status board</span>
              </div>
              <ul className="divide-y divide-line-soft">
                {PRODUCTS.map((product) => (
                  <li key={product.slug} className="flex items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <p className="font-display text-sm uppercase tracking-[0.06em] text-ink">
                        {product.name}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        {product.domain}
                      </p>
                    </div>
                    <span
                      className={`font-mono text-[9.5px] uppercase tracking-[0.18em] ${
                        product.status === "LIVE" ? "text-cyan" : "text-muted"
                      }`}
                    >
                      {product.status}
                    </span>
                  </li>
                ))}
                <li className="flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="font-display text-sm uppercase tracking-[0.06em] text-ink">Next run</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                      Unannounced
                    </p>
                  </div>
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                    In the bay
                  </span>
                </li>
              </ul>
              <div className="border-t border-line px-5 py-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {SITE.location} · CET / UTC+1
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
