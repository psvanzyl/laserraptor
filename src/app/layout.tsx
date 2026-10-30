import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/content/site";

const display = localFont({
  src: [{ path: "../../public/fonts/audiowide-400.woff2", weight: "400", style: "normal" }],
  variable: "--font-audiowide",
  display: "swap",
  fallback: ["Arial Black", "Impact", "system-ui", "sans-serif"],
});

const sans = localFont({
  src: [
    { path: "../../public/fonts/chakra-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/chakra-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/chakra-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/chakra-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-chakra",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});

const mono = localFont({
  src: [
    { path: "../../public/fonts/jbmono-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/jbmono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-jbmono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "LaserRaptor",
    "software lab",
    "web products",
    "auction data",
    "Gavel",
    "Broomy",
    "Den Haag",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/img/og.webp", width: 1200, height: 630, alt: "LaserRaptor — software with sharp teeth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/img/og.webp"],
  },
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="flex min-h-screen flex-col bg-canvas antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-magenta focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-canvas"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
