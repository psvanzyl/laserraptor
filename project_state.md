# LaserRaptor — project state

## What this is
Brand/mothership site for **LaserRaptor** (laserraptor.eu). Gavel and Realty are the products
that ship under the brand, each on its own domain. Broomy is the subsidiary AI product line
(EU-hosted model rental) and is live again as of 2026-11-15. Built on the repurposed McAi Coolify app
(the old McKinsey-clone demo was retired for this).

- Look: cyberpunk / 1980s arcade. Near-black canvas, neon magenta + cyan, chrome display type,
  perspective grid, scanlines, CRT vignette.
- References used: DeLorean DMC-12, TRON light cycle, Kaneda's bike (AKIRA), Rubik's cube,
  velociraptors.

## Live / deploy
- Primary URL: **https://laserraptor.eu** — HTTP 200, Let's Encrypt cert valid to 2027-01-29
  (DNS: Strato A records `@` and `www` -> 83.85.185.61, set 2026-10-31).
- www.laserraptor.eu serves the same app with its own LE cert (no redirect; canonical points to apex).
- Aliases still served: https://mcflimsey.laserraptorai.duckdns.org, https://mcflimsey.wegoai.duckdns.org
- Products: Gavel (auction engine) + Realty (property portal on the Gavel engine).
- Coolify app: uuid `rwuixjdw41j1zgiwkngkkig3`, name **LaserRaptor**, project `McAi`
  (project uuid h9grge7o7j123xsdp4tsv5qs), server localhost, build pack dockerfile,
  `/Dockerfile`, ports_exposes 3000.
- Repo: https://github.com/psvanzyl/laserraptor (public, main, commit 17b3544 first deploy).
- API token: /root/.hermes/credentials/.coolify_api_token (Hermes host).

### Deploy procedure
1. Push to `main` on CT141 `/root/projects/laserraptor`.
2. `POST http://192.168.178.132:8000/api/v1/deploy {"uuid":"rwuixjdw41j1zgiwkngkkig3"}`
3. Poll `GET /api/v1/deployments/{deployment_uuid}` until `status=finished` (~110 s).
4. Verify: `curl -sS https://mcflimsey.laserraptorai.duckdns.org/ | grep <title>`.

### Coolify API gotchas
- `PATCH /api/v1/applications/{uuid}` rejects `fqdn` ("Use the domains field"); send
  `domains` = comma-separated URLs instead. `fqdn` then reads back the joined list.
- Router labels appear twice briefly during a redeploy (`Router defined multiple times`);
  it clears itself once the old container is removed.
- New domains get a cert within ~90 s via Traefik **TLS-ALPN** (`acme.tlschallenge=true`),
  so port 80 is not needed. Until then Traefik serves its default self-signed cert.

## laserraptor.eu (live 2026-10-31)
- Strato A `@` and `www` now point to 83.85.185.61. Coolify `domains` carries all four URLs.
- Certs issued by Traefik via TLS-ALPN within ~3 min of the redeploy (no port 80 needed).
- `gavel.laserraptor.eu` and `broomy.laserraptor.eu` still resolve to Strato parking. Broomy is
  retired; gavel.laserraptor.eu stays reserved for the platform brand page.

## Realty cutover (gavelll.eu -> realty.gavel.laserraptor.eu) — ARMED, waiting on DNS
- 2026-10-31: boss chose `realty.gavel.laserraptor.eu` as the product home (not gavel.laserraptor.eu).
- Required DNS at Strato: `A realty.gavel -> 83.85.185.61` (no record exists yet).
- Already done: Traefik route on CT310 (`/data/coolify/proxy/dynamic/zvg-app.yml`) matches
  `realty.gavel.laserraptor.eu` -> zvg-app on CT141:3000; host test returns 302 http->https.
- Removed `gavel.laserraptor.eu` from Coolify app hfwzozwfsiwim6b9nwfwd9cz (it was firing failing
  ACME orders and hit the LE failed-authorization limit: 5/hour).
- Cron `gavel-laserraptor-cutover` (1b6f7b4e124f, every 10 min, script only) now targets realty.
  When DNS resolves it: waits for HTTPS 200, flips PAYWALL_BASE_URL to
  https://realty.gavel.laserraptor.eu, redeploys, installs `/root/.hermes/state/zvg-app.realty.yml`
  (which turns gavelll.eu into a 301 to realty), verifies, reports, and removes itself.
- After the cutover: repoint the site's product links from gavelll.eu to
  realty.gavel.laserraptor.eu (site.ts, two `href` fields) and update the website URL in Mollie.
- Canonicals: `/`, `/products`, `/about`, `/contact` (metadata `alternates.canonical`).

## Code map
- `src/content/site.ts` — SITE, PRODUCTS (Gavel + Realty, both linking to gavelll.eu until the cutover),
  ARSENAL (the five references), PRINCIPLES.
- `src/app/page.tsx` — hero + time circuits, marquee, product line, statement band, arsenal,
  the lab, CTA.
- `src/components/` — Header (mobile menu), Footer, ProductCard, Marquee, TimeCircuits (live
  clock + DeLorean destination row), Reveal (IntersectionObserver), TronCycle, AkiraBike,
  RubiksCube (CSS 3D).
- `src/app/globals.css` — tokens (`--color-canvas #08060f`, `--color-magenta #ff2e88`,
  `--color-cyan #3ce9ff`, `--color-amber #ffb43d`), `.house` (max 1600, 12/20 px pad),
  bevel/scanline/grid/chrome utilities.

## Assets
- Source artwork: `assets-src/image_*.jpg` (from boss's Surface Pro 7 `~/Downloads`,
  2026-10-30). **image_d3b30223_later.jpg was excluded on purpose** ("leave out image *.*later").
- Web versions: `public/img/*.webp` (1408×768, q80) + `-sm` variants (872×476) + `og.webp`
  (1200×630). 6 images, ~1.7 MB total.
- Fonts: `public/fonts/*.woff2` — Audiowide 400, Chakra Petch 400/500/600/700, JetBrains Mono
  400/500 (latin subsets pulled from the Google Fonts CSS, no CDN at build or run time).

## Broomy (subsidiary product line) — reinstated 2026-11-15

- Live: https://broomy.laserraptor.eu (200, title "Broomy — rent a Qwen 3.8 model by the month").
  `/api/v1/models` returns 401 `invalid_api_key` without a key — auth gate works.
- Source: CT141 `/root/projects/rent-llm/app` (repo psvanzyl/rent-llm). Coolify app
  `ogvo9qf354oyhjrhroihu2dk` on apps-01 .132. Plans live in `src/lib/plans.ts` (basic 2000, pro 5000).
- LaserRaptor site still lists only Gavel + Realty. Broomy must be added to `src/content/site.ts`
  PRODUCTS and get its own `/broomy` route plus the demo chat widget.
- GTM plan: `docs/gtm/2026-11-15-gtm-broomy.md` (segments, sourcing recipe, pricing, site plan,
  demo-chat spec plus prompt-injection controls, 90-day roadmap, outreach templates).
- Legal hub live 2026-11-15: `/legal`, `/legal/dpa`, `/legal/sub-processors`, `/legal/privacy`.
  Canonical source: `src/content/legal-docs.ts`, rendered by `src/components/LegalDocView.tsx`.
  Product sites must link the hub, not copy the text. `/privacy`, `/dpa`, `/sub-processors` redirect.
- Prices changed 2026-11-15: Basic EUR 39, Pro EUR 99 (`plans.ts` 3900/9900, plus landing, dashboard,
  FAQ, metadata, and honest queue wording). Contact address is info@laserraptor.eu — hello@ is gone.
- Demo chat is NOT built. It needs the controls in plan section 7.5 and the 10-prompt red-team set first.
- Open blockers from the plan: sensei licence (QCL1.0, no commercial MaaS resale — boss will swap to
  Apache-2.0 when ready), single GPU slot vs. Pro's 3-concurrent promise (boss accepts waiting time),
  SLA wording still to be written.

## Unknowns to confirm with boss
- Contact address: `info@laserraptor.eu` is confirmed and now used site-wide. `hello@` does not exist.
- Broomy was dropped 2026-10-31 and reinstated 2026-11-15 by boss instruction; the site copy was never restored.
- Footer says "Est. 2026".
