# LaserRaptor — laserraptor.eu

The mothership site for **LaserRaptor**, the brand that Gavel and Broomy ship under.

- Live (brand URL pending DNS): https://mcflimsey.laserraptorai.duckdns.org
- Stack: Next.js 16 (App Router) + React 19 + Tailwind 4, dark-only, fonts vendored.
- Deploy: Coolify app `rwuixjdw41j1zgiwkngkkig3` (Dockerfile, port 3000), repo `psvanzyl/laserraptor`.

## Look

Cyberpunk / 1980s arcade: near-black canvas, neon magenta + cyan, chrome display type,
perspective grid, scanlines, and five references — DeLorean DMC-12, TRON light cycle,
Kaneda's bike, the Rubik's cube, the velociraptor.

## Routes

`/` · `/products` · `/about` · `/contact` · `not-found` · `sitemap.xml` · `robots.txt`

## Develop

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build
PORT=3100 npm run start
```

## Assets

- `public/img/*.webp` — AI artwork, converted from the originals in `assets-src/`.
- `public/fonts/*.woff2` — Audiowide, Chakra Petch, JetBrains Mono (latin subsets).
