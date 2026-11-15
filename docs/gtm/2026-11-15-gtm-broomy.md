# LaserRaptor + Broomy — Go-To-Market Plan

Date: 2026-11-15. Owner: Shakazulu. Executor: impi#1 (Hermes), impi#2 (dev).
Status: draft v1, awaiting boss decisions in section 12.

---

## 0. Goal

Sell EU-hosted LLM access under a credible corporate structure.

- LaserRaptor (KvK 92580114) is the parent and the trust brand. Dutch supplier, Dutch invoice.
- Broomy is the product line and subsidiary brand: rent an EU-hosted model by the month.
- Target: 10 paying Broomy customers in 90 days, EUR 1,000+ MRR, gross margin above 90%.
- Secondary target: 3 agency partners who resell Broomy to their own clients.

## 1. Verified current state

| Item | State | Evidence |
|---|---|---|
| https://laserraptor.eu | 200, Next.js, routes / /products /about /contact | curl 2026-11-15, 83.85.185.61 |
| https://broomy.laserraptor.eu | 200, title "Broomy — rent a Qwen 3.8 model by the month" | curl 2026-11-15 |
| Broomy API gate | /api/v1/models returns 401 invalid_api_key without a key | curl 2026-11-15 |
| Broomy source | CT141 /root/projects/rent-llm/app, repo psvanzyl/rent-llm | git head 628721d6 |
| LaserRaptor source | CT141 /root/projects/laserraptor, repo psvanzyl/laserraptor | project_state.md |
| Coolify app (LaserRaptor) | uuid rwuixjdw41j1zgiwkngkkig3, project McAi | project_state.md |
| Coolify app (Broomy) | uuid ogvo9qf354oyhjrhroihu2dk on apps-01 .132 | broomy-rent-llm-ops skill |
| Plans in code | basic 2000 cents, pro 5000 cents, accessDays 31 | src/lib/plans.ts |
| Public models | sensei (262k ctx), bonsai (65k ctx) | src/lib/models.ts |
| Capacity | one 3090 single-slot engine plus gpu-02 (needs reboot) | broomy-rent-llm-ops skill |
| Contact address | hello@laserraptor.eu used site-wide, existence NOT verified | project_state.md |

LaserRaptor site has no Broomy presence today. Products are Gavel and Realty only.
Broomy is described as "dropped" in project_state.md dated 2026-10-31. That note is stale and must be corrected.

## 2. Blocker register — fix before outreach

| # | Blocker | Why it kills the deal | Exit test | Owner |
|---|---|---|---|---|
| B1 | Licence. sensei runs a QCL1.0 model. Commercial MaaS resale is not permitted. | A paying customer with a lawyer exposes the whole company. | Written permission on file, or public engine moved to an Apache-2.0 model. Test: licence text attached to the offer page. | boss |
| B2 | No DPA, no sub-processor list, no privacy note. | Every business buyer asks for all three in the first two emails. | /legal/dpa and /legal/sub-processors live and linked in the footer. | impi#1 |
| B3 | hello@laserraptor.eu unverified. | A bouncing address ends the conversation. | Send and receive one test mail. | boss |
| B4 | Capacity is one slot. Pro tier promises 3 concurrent. | Overselling produces 14 tok/s and refunds. | Demo and user traffic share one queue with a fair scheduler, or Pro copy is reworded. | impi#2 |
| B5 | Uptime is a home uplink, no SLA, no fallback. | Public-sector and finance buyers ask "what happens when your line drops?". | Published status history plus a written answer in the FAQ. | boss |
| B6 | No NEN 7510, no ISO 27001. | Healthcare and most public buyers cannot sign. | Parked: do not target segments that require certification. | - |

Rule: no paid deal closes until B1, B2 and B3 pass.

## 3. Who buys, and who does not

Buyer definition: the person who can approve EUR 39-249 per month without a tender.
That is almost never a hospital CIO. It is a founder, CTO, product owner or agency lead.

### 3.1 Target segments, ranked

| Rank | Segment | Who exactly | Cycle | ARPA | Why they buy |
|---|---|---|---|---|---|
| A1 | AI agencies and consultancies in NL | founder or technical lead of a 2-30 person AI bureau | 1-3 weeks | EUR 99-249 | They need an EU endpoint they can white-label. One agency brings 5-20 end clients. |
| A2 | Vertical SaaS vendors (zorg, onderwijs, gemeente, transport, legal tech) | CTO or product owner of a 10-200 person vendor | 3-8 weeks | EUR 99-249 | Every tender asks where the model runs. EU hosting is a checkbox they must tick. |
| A3 | EU-only developers and small teams abroad (BE, DE, DK, SE, AT) | indie dev or small product team | 1-2 weeks | EUR 39-99 | OpenAI-compatible swap, EU jurisdiction, fixed bill. |
| B1 | Suppliers bidding on public tenders with an EU-hosting requirement | bid manager or architect at an IT supplier | 4-10 weeks | EUR 249+ | They buy the checkbox to win the bid, not the model. |
| B2 | Compliance-heavy professional services (law, notary, accountancy, M&A) | partner or IT manager | 4-12 weeks | EUR 99-249 per seat | Confidentiality is the product. They need a chat UI, not an API. |
| C | DORA and NIS2 entities (finance, energy, water, digital infra) | security officer, vendor manager | 6-18 months | high | EU hosting helps their third-party register. Too slow for a first sale. |

### 3.2 Non-targets, with reasons

- Hospitals, UMC's, GGZ: NEN 7510 and ISO 27001 expected from ICT suppliers, plus DPIA and vendor security questionnaires. Cycle 9-18 months. You hold neither certificate.
- Schools, mbo, hbo, wo: SURF launches its own AI platform for mbo, hbo and wo from January 2027 (SURF AI, with Npuls). Institutions will use SURF AI rather than a small supplier. The door is closing.
- Banks and insurers: DORA vendor register, audit rights, sub-processor objections. Not a first-year market.
- Government bodies direct: European and national procurement thresholds. Sell to their suppliers instead.

### 3.3 Which segment to open with

Open with A1. Reason: shortest cycle, smallest paperwork, and each agency multiplies reach.
Add A2 in the same week, because their tender deadline creates urgency you do not have to invent.

## 4. How to find them — sourcing recipe

Rules: no invented names. Every account needs a live source URL, a named person and a role.

### 4.1 Segment A1 — AI agencies

1. KvK search on SBI 6201, 6202, 6209 combined with the words AI, data, intelligence, digital.
2. LinkedIn company search: "AI agency" and "AI bureau", filter Netherlands, 2-50 employees.
3. Member and partner lists of AIC4NL (aic4nl.nl), the Dutch AI coalition.
4. Regional AI hubs and meetups: PyData Amsterdam, NL AI meetups, AI hub regions.
5. Google Maps and Clutch listings for "AI-bureau" in Amsterdam, Utrecht, Rotterdam, Eindhoven.
6. Check each site for a "built with OpenAI" or "Azure OpenAI" mention. That is the buying signal: they already resell a US model.

### 4.2 Segment A2 — vertical SaaS vendors

1. Take the tender and supplier lists of zorg, onderwijs and gemeente software.
2. Filter for vendors with 10-200 staff, a public API, and an AI feature announced in the last 12 months.
3. Read their privacy statement. If it names OpenAI, Azure or AWS as a sub-processor, they are a qualified prospect.
4. Buyers to name in the email: CTO, head of product, information security officer.

### 4.3 Segment A3 — EU developers

1. Get listed in provider directories that developers browse: OpenWebUI, LibreChat, OpenAI-compatible provider lists, awesome-local-llm lists.
2. Post one launch thread on Tweakers and one on Hacker News "Show HN" with the EU-hosting angle.
3. Answer threads where someone asks for an EU alternative to a US API.

### 4.4 Segment B1 — tender suppliers

1. Watch TenderNed (NL) and TED (EU) for AI, AVG/GDPR, soeverein, EU-datacenter, datasoevereiniteit.
2. Do not bid. Find the suppliers who bid and offer them a sub-processor line item.
3. Public buyer portals: PIANOo for Dutch public procurement practice and publication.

### 4.5 Channel partners

| Partner | What they give you | Ask |
|---|---|---|
| AIC4NL and the AiNed MIT AI subsidy calls | SME consortia that need infrastructure | Join as EU hosting partner, sign one consortium |
| EDIH network via RVO and ROM-Nederland | Broker introductions to SMEs | Offer a free test bed for their intake projects |
| MSPs and IT resellers serving Dutch SME | Existing accounts, existing trust | 20% recurring referral fee |
| EU sovereign AI registries: sovereignty-ai.org European stack, EuroStack, Lindstead comparisons | Free inbound from buyers filtering on sovereignty | Get listed, one paragraph, one link |
| FERM and the Dutch DPO community | Compliance-driven buyers | Publish a GDPR article 28 explainer, no hard sell |

Deliverable D1 in week 1: 60 qualified accounts (30 A1, 20 A2, 10 A3) in a CSV with source URL, contact name, role, email, signal, and segment. Stored on CT141 at docs/gtm/prospects.csv.

## 5. Offer, pricing and proof

### 5.1 Positioning one-liner

"Broomy rents you an EU-hosted model by the month. Same OpenAI SDK, Dutch soil, one flat invoice."

### 5.2 Four proof lines (use everywhere)

1. Your prompts stay in the EU, on Dutch soil, with no US sub-processor.
2. Drop-in: same OpenAI SDK, change the base_url and the key.
3. Flat monthly fee. No token surprises, no surprise bills.
4. Dutch supplier, Dutch invoice, KvK 92580114, DPA on request.

Do not claim "we cannot see your prompts". Claim "we do not store your prompts".
Reason: the proxy-to-engine hop is plaintext on the LAN and the operator holds root. Fix that before making a contractual promise.

### 5.3 Pricing change (recommended)

| Tier | Now | Proposed | Rationale |
|---|---|---|---|
| Basic | EUR 20 | EUR 39 | EUR 20 reads as a hobby price to a business buyer. |
| Pro | EUR 50 | EUR 99 | Pro carries priority queue and 3 keys. |
| Agency | none | EUR 249 by manual invoice | 5 keys, white-label note, named support contact. No new code tier needed: Pro plus extra keys, invoiced outside Mollie. |
| Demo chat | none | free, rate-limited | The conversion engine. See section 7. |

Change is two lines in src/lib/plans.ts plus the landing and pricing copy. Existing customers keep the old price for 3 months.

Reference table for the docs page: EUR 0.10 / 0.20 per 1M tokens input/output for sensei, EUR 0.05 / 0.10 for bonsai, marked "reference only, your plan is flat".

### 5.4 Sales motion — 5 touches in 12 days

1. Touch 1, day 0: short email with the one-liner, one link to the live demo chat, no attachment.
2. Touch 2, day 2: one-screen EU-hosting sheet as PDF or link, plus the DPA link.
3. Touch 3, day 5: a concrete integration snippet for their stack (curl, LangChain, or their SDK).
4. Touch 4, day 8: pilot offer, 14 days, EUR 0, one real workload, no card.
5. Touch 5, day 12: close or park. Parked accounts get a quarterly note, nothing more.

Conversion rule: the demo chat is the first ask. A prospect who tries the demo is 5x more likely to reply to the next touch.

## 6. Website plan — laserraptor.eu

Goal: LaserRaptor reads as a Dutch software lab that runs its own AI. Broomy is visible as the AI product, not hidden behind a domain.

### 6.1 Content changes

1. src/content/site.ts
   - Add Broomy to PRODUCTS: slug "broomy", name "Broomy", kicker "EU-hosted models", status LIVE, tone "amber", domain "broomy.laserraptor.eu", href "https://broomy.laserraptor.eu", four points (EU-only processing, OpenAI-compatible, flat monthly fee, Dutch supplier).
   - Add nav entry "Broomy" pointing to /broomy, placed before Products.
   - Update SITE.description and keywords to include "EU-hosted AI" and "soevereine LLM API".
2. New route src/app/broomy/page.tsx
   - Hero: "Rent an EU model. Skip the GPU." Subline: Dutch soil, OpenAI SDK, flat fee.
   - Live demo chat panel. This is the primary call to action.
   - Model cards: sensei 262k context, bonsai 65k context.
   - Pricing table: Basic 39, Pro 99, Agency 249.
   - Trust block: data residency, no prompt storage, DPA, sub-processors, KvK.
   - FAQ, 6 questions, see appendix B.4.
3. src/app/page.tsx
   - Add one band between the product line and the arsenal: "EU-hosted AI" with three statements and a link to /broomy.
4. New legal routes
   - src/app/legal/dpa/page.tsx — article 28 DPA summary, downloadable text.
   - src/app/legal/sub-processors/page.tsx — table: Coolify host, GPU host gpu-01, mail provider Strato, payments Mollie.
   - src/app/privacy/page.tsx — what is logged (token counts, IP hash, model, duration) and what is not (prompts, completions).
5. src/components/Footer.tsx — add links to DPA, sub-processors, privacy, status.
6. Metadata and SEO: JSON-LD Organization plus Product for /broomy, sitemap.xml, robots.txt, og image per route.

### 6.2 Rules

- Keep the arcade skin. Broomy inherits the LaserRaptor look. Do not build a second design system.
- Every claim on /broomy must map to a fact you can show in a live check.
- No "certified", no "GDPR compliant" badge without the certificate. Write "EU data residency" instead.

## 7. Broomy demo chat — the conversion engine

### 7.1 Purpose and rules

Purpose: a new visitor types one question and sees a working EU-hosted model in 3 seconds.
Rules: no signup, no card, no API key. Rate limited per IP and per session. Answer quality matters more than answer length.

### 7.2 UX

1. Floating bubble bottom-right on laserraptor.eu and /broomy. Label: "Ask the raptor".
2. Panel 380x560, dark, matches house tokens. Header shows model name and "EU-hosted".
3. Three suggested prompts: "Wat is soevereine AI?", "Write a Dutch privacy clause", "Summarise this text" (with a paste box).
4. Streaming answer, token by token.
5. After message 3: inline note "You are using sensei, 262k context. Plans from EUR 39/mo." with a link.
6. On limit: "Demo limit reached for today. Email us for a pilot." with the contact address.
7. Keyboard accessible, ESC closes, focus trap, aria-live on the transcript.
8. No third-party fonts, no trackers, no cookie banner needed. Nothing leaves the visitor's browser except the prompt.

### 7.3 Architecture

New endpoint on the Broomy app, not on the LaserRaptor app. Reason: the model key and the queue live there.

- New file: rent-llm/app/src/app/api/demo/chat/route.ts
- Helpers: rent-llm/app/src/lib/demo-limits.ts, rent-llm/app/src/lib/demo-cors.ts
- Component: laserraptor/src/components/BroomyChat.tsx, mounted in laserraptor/src/app/layout.tsx
- Model: fixed to sensei for the demo. No model choice, no tools, no JSON mode.
- Request: POST { messages: [{role, content}] }, max 4 turns of history, last 1500 characters per turn.
- Response: streamed text/event-stream, plus a final meta line with the remaining daily allowance.
- Limits: max 300 output tokens, 6 turns per session, 12 messages per IP per day, 400 messages global per day.
- Storage: $RENT_DATA_DIR/demo-usage.json, key sha256(salt + ip) truncated to 16 hex chars. No prompt text, ever.
- CORS: allow https://laserraptor.eu, https://www.laserraptor.eu, and http://localhost:3000. OPTIONS preflight answers with the allowlist.
- Priority: demo requests enter the queue BELOW paying users. If queue depth is above 2, return 429 with a friendly message instead of waiting.
- Kill switch: DEMO_ENABLED=0 disables the endpoint with 503 and the widget hides the input.

### 7.4 Abuse and cost controls

1. Prompt length cap enforced server side, not in the browser.
2. System prompt capped at 200 tokens, English and Dutch.
3. No user-supplied system role accepted. Reject any role outside user and assistant.
4. Per-IP limit backed by a file with fsync, so a container restart does not reset the counters.
5. Global cap protects the single engine slot from a demo flood.
6. Zero marginal cost: the GPU is already paid for.

### 7.5 Acceptance tests

| Test | Command | Expected |
|---|---|---|
| Happy path | curl -sS -X POST https://broomy.laserraptor.eu/api/demo/chat -H 'content-type: application/json' -d '{"messages":[{"role":"user","content":"Zeg precies: LEVEND"}]}' | stream contains LEVEND, HTTP 200 |
| Origin block | same with -H 'origin: https://evil.example' | HTTP 403 |
| No key needed | no Authorization header | HTTP 200, not 401 |
| Rate limit | 13 calls from one IP | 12th call returns 429 with a friendly message |
| Kill switch | DEMO_ENABLED=0, redeploy | HTTP 503, widget hides input |
| No prompt log | grep the data dir for the test string | zero matches |
| Queue fairness | one paying call plus one demo call | paying call completes first |

Build order: B2, B4 and CORS first, then the widget, then copy.

## 8. Ninety-day roadmap

| Week | Work | Exit test |
|---|---|---|
| 1 | Licence decision (B1). Contact address test (B3). Pricing change in plans.ts and copy. DPA and sub-processor pages drafted. Demo endpoint live with limits. | curl demo test passes, 429 test passes, no prompt text on disk |
| 2 | /broomy page, homepage band, widget on both, footer legal links, one-pager PDF, demo→pricing link. | Screenshots of / , /broomy, mobile 390px, vision check passed |
| 3 | Prospect list D1 (60 accounts) and 20 channel contacts. First 20 touches sent. | 60 rows with source URL and named contact |
| 4-6 | 30 more touches, 8 demos, 3 pilots running. Fix every objection that repeats twice. | 3 pilots with real workloads |
| 7-9 | Convert pilots, publish one case note, get listed in 4 registries and 3 directories. | 3 paying customers, 5+ listings live |
| 10-12 | Second wave of 40 touches, 2 agency partner agreements, pricing review with real usage data. | 10 paying customers, EUR 1,000 MRR, one agency partner signed |

Weekly rhythm: Monday list update, Wednesday outreach, Friday metric review in the morning brief.

## 9. Metrics and stop rules

Track weekly: demos started, demo completion rate, demo to signup, signup to paid, MRR, churn, queue latency p95, support emails.

Stop rules:
1. If demo to paid stays below 1% after 200 demos, the offer is wrong. Change the offer, not the ads.
2. If queue latency p95 passes 30 seconds with 5 paying users, close sales and add capacity.
3. If two prospects in a row ask for ISO 27001, park that segment and write down the requirement.

## 10. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Licence exposure on sensei | high | B1 decision before the first invoice. Apache-2.0 model as the fallback engine. |
| Single GPU, single operator | high | Honest tier wording, queue, published capacity note. |
| Home uplink outage | medium | Status page with real history. No SLA claim. |
| Demo flood on a shared engine | medium | Global cap, per-IP cap, demo below paying traffic, kill switch. |
| Claim drift on privacy | high | Fixed wording in appendix B.3. Legal pages reviewed once by boss. |
| Bouncing contact address | medium | B3 test in week 1. |
| Boss time as the bottleneck | high | Everything in this plan runs without boss except B1, B3, B5 and price approval. |

## 11. Appendix A — outreach templates

A.1 Agency (segment A1)

Subject: EU endpoint for your client work
Body:
Hi {name}, I run Broomy, a Dutch LLM host. We rent an OpenAI-compatible endpoint that stays in the EU.
Your clients ask where the model runs. This is a clean answer.
Drop-in: same SDK, new base_url. Flat fee, EUR 99 for three keys.
Try it here, no signup: https://laserraptor.eu/broomy
Want reseller terms? I can set 20% recurring for accounts you bring.

A.2 Vertical SaaS (segment A2)

Subject: sub-processor line for your AI feature
Body:
Hi {name}, your privacy statement names a US model provider. I can replace that line with a Dutch one.
Broomy is an OpenAI-compatible endpoint on Dutch hardware. DPA ready, sub-processor list published.
Same SDK call, no rewrite. EUR 99/mo, cancel any time.
One page: https://laserraptor.eu/legal/dpa

A.3 Follow-up after a silent demo

Subject: the demo you tried
Body:
Hi {name}, you tried the demo on {date}. What stopped you from going further: price, paperwork, or the model?
One line is enough. I will fix what I can.

## 12. Appendix B — copy blocks

B.1 Homepage band

EU-hosted AI
Broomy runs on Dutch hardware. Your prompts do not leave the EU.
Same OpenAI SDK. Flat monthly fee. Ask it anything right here.

B.2 /broomy hero

Rent an EU model. Skip the GPU.
Broomy gives you an OpenAI-compatible endpoint on Dutch soil. Flat fee, no token surprises.
[Ask the raptor] [See plans]

B.3 Privacy wording, fixed

What we store: token counts, a hashed IP, the model, the duration.
What we never store: your prompts and the answers.
Where it runs: GPU hardware in the Netherlands, inside the EU.

B.4 FAQ

1. Where does the model run? Dutch hardware, EU jurisdiction, no US sub-processor.
2. Can I keep my code? Yes. Same OpenAI SDK, change base_url and key.
3. Do you train on my data? No.
4. What if I exceed my plan? You get a 429 with a retry hint. Nothing is charged extra.
5. Do you sign a DPA? Yes, article 28, published on this site.
6. What is the uptime? Honest answer: no SLA on the entry tier. Ask for the status history.

## 13. Open decisions for boss

1. B1 licence: swap sensei to an Apache-2.0 model, or get permission in writing? Two different timelines.
2. Price: approve EUR 39 / 99 / 249, or keep 20 / 50 for the first ten customers.
3. Contact address: does hello@laserraptor.eu exist? If not, use info@laserraptor.eu.
4. Agency tier: manual invoice, or a real tier in the app?
5. Retention: how long do we keep the hashed IP counters? Proposal: 30 days.
