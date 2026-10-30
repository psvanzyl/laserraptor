"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/content/site";

const MENU_ID = "site-menu";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <div className="house flex h-[57px] items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
          <RaptorMark />
          <span className="chrome font-display text-[15px] leading-none tracking-[0.14em] sm:text-base">
            LASERRAPTOR
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {SITE.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative font-mono text-[10.5px] uppercase tracking-[0.22em] transition-colors ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-magenta shadow-[0_0_8px_var(--color-magenta)] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted lg:flex">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cyan shadow-[0_0_8px_var(--color-cyan)]" />
            The line is open
          </span>
          <Link
            href="/products"
            className="hidden h-9 items-center border border-line px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition-colors hover:border-magenta hover:text-magenta sm:inline-flex"
          >
            The Line
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={MENU_ID}
            className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-colors hover:border-magenta md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
              <rect x="0" y={open ? 5 : 0} width="16" height="1.5" fill="currentColor" transform={open ? "rotate(45 8 6)" : undefined} />
              <rect x="0" y="5" width="16" height="1.5" fill="currentColor" opacity={open ? 0 : 1} />
              <rect x="0" y={open ? 5 : 10} width="16" height="1.5" fill="currentColor" transform={open ? "rotate(-45 8 6)" : undefined} />
            </svg>
          </button>
        </div>
      </div>

      <div
        id={MENU_ID}
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-line bg-canvas`}
      >
        <nav className="house flex min-h-[calc(100dvh-57px)] flex-col py-4" aria-label="Mobile">
          {SITE.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-baseline justify-between border-b border-line-soft py-4 font-display text-2xl uppercase text-ink"
            >
              <span>{item.label}</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted">0{i + 1}</span>
            </Link>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="mt-auto pt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-magenta"
          >
            {SITE.email}
          </a>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {SITE.location}
          </p>
        </nav>
      </div>
    </header>
  );
}

function RaptorMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <defs>
        <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3ce9ff" />
          <stop offset="55%" stopColor="#ff2e88" />
          <stop offset="100%" stopColor="#ffb43d" />
        </linearGradient>
      </defs>
      <path d="M3 20 L11 4 L13.6 9.4 L21 10.8 L14.2 13 L12.6 20 L9.4 13.4 Z" fill="url(#mark)" />
      <circle cx="12.4" cy="9" r="1.1" fill="#08060f" />
    </svg>
  );
}
