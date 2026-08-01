# PsycheIQ

**The world's first IQ test for the Mind, Body and Soul.**

A single-file web app blending classical cognitive testing with typology, astrology, past-life narrative, and esoteric tradition — every claim tagged by register (◇ Measured / ◈ Modeled / ✦ Mythic) so the science and the symbolism never get confused with each other.

Live at **[psycheiq.live](https://psycheiq.live)**.

## What's inside

Six instruments, feeding one composite **PsycheIQ Score**:

| Instrument | Category | What it measures |
|---|---|---|
| The Pneuma Map | Character | 14 dilemmas → six-trait archetype |
| The Sixteen Types | Character | Traditional four-axis typology |
| The Logos Matrix | Mind | Matrix reasoning, mental rotation, working memory span |
| Soul IQ | Soul | Existential reasoning, meaning, transcendent awareness, state command |
| The Anima Field | Soul | Birth sky (real orbital mechanics) → starseed lineage, soul family, tarot significator |
| The Akashic Draw | Soul | Timed forced-choice draw → one of 64 past-life narratives |

Plus: a Major Arcana reading room, daily competitive Trials with a leaderboard, live 1:1 tarot readings booking, and a Kindred Figures engine drawing from a pool of 800 historical/mythic names (200 shared archetypes + 100 unique per test).

## Tech notes

- **Zero build step.** Everything — CSS, JS, inline SVG art — lives in `index.html`. Open it in a browser and it runs.
- **No external assets** except Google Fonts (Cinzel / Cormorant Garamond / Inter); everything else is self-contained, so there's nothing to region-lock.
- Storage uses a `window.storage` API where available (Claude artifacts), falling back to `localStorage`, falling back to an in-memory shim — so it degrades gracefully anywhere.
- Payments, accounts, and the leaderboard's cross-device sync are currently **stubbed** for the prototype. Wiring notes for Stripe/Play Billing, auth, and a shared leaderboard backend are commented at the bottom of the `<script>` block in `index.html`.

## Continuing this project

**There's a pending task, fully specced in [`HANDOFF.md`](./HANDOFF.md):** the Deck/tarot page needs a rebuild into an interactive shuffle-and-draw reading (22 Major Arcana × 4 categories = 88 written responses). Read that file before making changes — it also covers the app's architecture and points to `tests/verify-content-pools.js` for validating data changes.

## Deploying

This repo is GitHub Pages-ready as-is:

1. Push to GitHub (see below).
2. Repo Settings → Pages → Deploy from branch → `main` / root.
3. Point `psycheiq.live`'s DNS at GitHub Pages (or your host of choice) — no build pipeline needed.

## Disclaimers

The Logos Matrix is an unsupervised exercise built on task families used in cognitive testing. **It is not a normed or clinical IQ assessment.** Nothing in this app is medical, psychological, legal, or financial advice.

---

*Proprietary — all rights reserved. This repo contains live pricing and product logic; keep it private unless you intend otherwise.*
