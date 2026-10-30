import { TICKER } from "@/content/site";

/** Outlined neon ticker. Content is duplicated so the CSS loop is seamless. */
export default function Marquee({ slow = false }: { slow?: boolean }) {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="relative overflow-hidden border-y border-line bg-void/60 py-3">
      <div className={`marquee ${slow ? "marquee-slow" : ""} items-center gap-8 pr-8`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={copy === 1}>
            {row.map((word, i) => (
              <span key={`${copy}-${word}-${i}`} className="flex items-center gap-8">
                <span className="outline-type font-display text-[13px] leading-none tracking-[0.18em] sm:text-sm">
                  {word}
                </span>
                <span className="text-magenta" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
