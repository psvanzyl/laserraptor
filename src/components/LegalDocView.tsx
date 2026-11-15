import Link from "next/link";
import type { Block, LegalDoc } from "@/content/legal-docs";
import { DOC_INDEX, ENTITY, UPDATED, VERSION } from "@/content/legal-docs";

/**
 * Renders a legal document: hero, sticky clause index, numbered clauses.
 * Server component. No client JS.
 */
export default function LegalDocView({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 grid-floor opacity-[0.14]" aria-hidden="true" />
        <div className="house-narrow relative py-14 sm:py-16">
          <p className="eyebrow">Legal · {doc.kicker}</p>
          <h1 className="mt-5 text-[clamp(2rem,4.6vw,3.4rem)]">
            <span className="chrome">{doc.title}</span>
          </h1>
          <p className="mt-5 max-w-[62ch] text-body">{doc.summary}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            <span>
              {ENTITY.name} · KvK {ENTITY.kvk}
            </span>
            <span className="text-line">/</span>
            <span>{VERSION}</span>
            <span className="text-line">/</span>
            <span>Updated {UPDATED}</span>
          </div>
          {doc.meta ? (
            <p className="mt-5 max-w-[70ch] border-l border-magenta/60 pl-4 text-sm text-muted">{doc.meta}</p>
          ) : null}
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="house-narrow grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="label mb-4">Contents</p>
            <nav aria-label="Clauses" className="flex flex-col gap-2">
              {doc.clauses.map((c, i) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="group flex gap-2.5 text-[13px] leading-snug text-muted transition-colors hover:text-ink"
                >
                  <span className="font-mono text-[10px] text-muted/70 group-hover:text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{c.heading}</span>
                </a>
              ))}
            </nav>
            <div className="mt-8 border-t border-line-soft pt-5">
              <p className="label mb-3">Also</p>
              <div className="flex flex-col gap-2 text-[13px]">
                {DOC_INDEX.filter((d) => d.slug !== doc.slug).map((d) => (
                  <Link key={d.slug} href={d.href} className="text-muted transition-colors hover:text-cyan">
                    {d.title} ↗
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <article className="max-w-[58ch]">
            {doc.clauses.map((c, i) => (
              <section key={c.id} id={c.id} className="scroll-mt-28 border-t border-line-soft pt-8 first:border-0 first:pt-0 [&+section]:mt-10">
                <h2 className="flex items-baseline gap-3 text-[clamp(1.05rem,2vw,1.35rem)] not-italic">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-lg font-semibold normal-case tracking-normal text-ink sm:text-xl">
                    {c.heading}
                  </span>
                </h2>
                <div className="mt-4 space-y-4">
                  {c.blocks.map((b, j) => (
                    <BlockView key={j} block={b} />
                  ))}
                </div>
              </section>
            ))}

            <div className="mt-14 border-t border-line pt-6">
              <p className="text-sm text-muted">
                Questions about this document:{" "}
                <a href={`mailto:${ENTITY.email}`} className="text-ink underline decoration-magenta underline-offset-4 hover:text-cyan">
                  {ENTITY.email}
                </a>
                . A signed PDF and a Dutch translation are available on request.
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-line">
                {ENTITY.name} · {ENTITY.city}, {ENTITY.country} · {VERSION} · {UPDATED}
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "p":
      return <p className="text-[15.5px] leading-[1.75] text-body">{block.text}</p>;
    case "ul":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[15.5px] leading-[1.7] text-body">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-magenta" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[15.5px] leading-[1.7] text-body">
              <span className="mt-0.5 shrink-0 font-mono text-[11px] text-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full border-collapse text-left text-[13.5px]">
            <thead>
              <tr className="bg-panel">
                {block.head.map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="whitespace-nowrap px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-line-soft align-top">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 leading-relaxed text-body">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "note":
      return (
        <p className="rounded-lg border border-amber/40 bg-amber/[0.06] p-4 text-[14px] leading-relaxed text-body">
          <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.18em] text-amber">Note</span>
          {block.text}
        </p>
      );
    case "h3":
      return <h3 className="pt-2 text-base font-semibold normal-case tracking-normal text-ink">{block.text}</h3>;
    default:
      return null;
  }
}
