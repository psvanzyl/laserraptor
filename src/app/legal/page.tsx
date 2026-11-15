import type { Metadata } from "next";
import Link from "next/link";
import { DOC_INDEX, ENTITY, UPDATED, VERSION } from "@/content/legal-docs";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "LaserRaptor legal documents: Data Processing Agreement, sub-processor list and privacy statement. One source of truth for LaserRaptor, Broomy, Gavel and Realty.",
  alternates: { canonical: "/legal" },
};

export default function LegalIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-floor opacity-[0.14]" aria-hidden="true" />
        <div className="house-narrow relative py-14 sm:py-16">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.4rem)]">
            The <span className="chrome">paperwork.</span>
          </h1>
          <p className="mt-5 max-w-[64ch] text-body">
            Three documents, one source of truth. Every LaserRaptor product links here instead of
            keeping its own copy, so a change lands once.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            <span>
              {ENTITY.name} · KvK {ENTITY.kvk}
            </span>
            <span className="text-line">/</span>
            <span>{VERSION}</span>
            <span className="text-line">/</span>
            <span>Updated {UPDATED}</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="house-narrow">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOC_INDEX.map((doc, i) => (
              <Link
                key={doc.slug}
                href={doc.href}
                className="panel group relative flex flex-col justify-between gap-6 p-6 transition-colors hover:border-magenta/60"
              >
                <div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 font-sans text-lg font-semibold normal-case tracking-normal text-ink">
                    {doc.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{doc.blurb}</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-cyan">
                  Read →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-6 border-t border-line-soft pt-8 sm:grid-cols-2">
            <div>
              <p className="label mb-3">Standing rule</p>
              <p className="text-sm leading-relaxed text-body">
                We process customer data inside the EEA, on our own hardware in the Netherlands, with
                no model provider outside the EU in the path. The DPA annex lists the measures that
                make that true, in plain language.
              </p>
            </div>
            <div>
              <p className="label mb-3">Contact</p>
              <p className="text-sm leading-relaxed text-body">
                {ENTITY.name}, {ENTITY.city}, {ENTITY.country}. KvK {ENTITY.kvk}.
                <br />
                <a
                  href={`mailto:${ENTITY.email}`}
                  className="text-ink underline decoration-magenta underline-offset-4 hover:text-cyan"
                >
                  {ENTITY.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
