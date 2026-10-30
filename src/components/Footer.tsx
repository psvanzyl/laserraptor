import Link from "next/link";
import { PRODUCTS, SITE } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-line bg-void">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-magenta/70 to-transparent" />
      <div className="house py-14">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl leading-none tracking-[0.08em] text-ink">
              LASER<span className="neon-magenta">RAPTOR</span>
            </p>
            <p className="mt-4 max-w-xs text-sm text-muted">
              An independent software lab in {SITE.location}. We build data-heavy web products and
              give them a coat of arcade paint.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-cyan"
            >
              {SITE.email}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <FooterCol title="Products">
            {PRODUCTS.map((p) =>
              p.href ? (
                <a key={p.slug} href={p.href} rel="noreferrer" className="footer-link">
                  {p.name} <span className="text-muted">↗</span>
                </a>
              ) : (
                <Link key={p.slug} href="/products" className="footer-link">
                  {p.name} <span className="text-muted">· soon</span>
                </Link>
              ),
            )}
          </FooterCol>

          <FooterCol title="The lab">
            <Link href="/about" className="footer-link">
              Origin
            </Link>
            <Link href="/products" className="footer-link">
              The line
            </Link>
            <Link href="/contact" className="footer-link">
              Contact
            </Link>
          </FooterCol>

          <FooterCol title="Coordinates">
            <span className="footer-link">52.0705° N, 4.3007° E</span>
            <span className="footer-link">CET / UTC+1</span>
            <span className="footer-link">Est. 2026</span>
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line-soft pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>No cookies</span>
            <span className="text-line">/</span>
            <span>No trackers</span>
            <span className="text-line">/</span>
            <span>No dark patterns</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label mb-4">{title}</p>
      <div className="flex flex-col gap-2.5 text-sm">{children}</div>
    </div>
  );
}
