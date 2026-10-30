import Link from "next/link";
import type { Product } from "@/content/site";

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const live = product.status === "LIVE";
  const accent = product.tone === "magenta" ? "text-magenta" : "text-cyan";
  const dot = product.tone === "magenta" ? "bg-magenta" : "bg-cyan";

  return (
    <article className="bevel panel tilt group relative flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          P.{String(index + 1).padStart(2, "0")} — {product.kicker}
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em]">
          <span className={`h-1.5 w-1.5 rounded-full ${dot} shadow-[0_0_8px_currentColor] ${accent}`} />
          <span className={live ? "text-ink" : "text-muted"}>{product.status}</span>
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <h3 className="font-display text-[32px] leading-none tracking-[0.02em] text-ink sm:text-[40px]">
          {product.name.toUpperCase()}
        </h3>
        <p className="mt-4 max-w-[46ch] text-[15px] text-body">{product.summary}</p>

        <ul className="mt-6 space-y-2.5">
          {product.points.map((point) => (
            <li key={point} className="flex items-start gap-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-muted">
              <span className="mt-[2px] text-magenta" aria-hidden="true">
                ▸
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {product.domain}
          </span>
          {product.href ? (
            <a
              href={product.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-magenta"
            >
              Open {product.hrefLabel} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-cyan"
            >
              Ask about the first run <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-magenta to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </article>
  );
}
