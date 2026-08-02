# PsycheIQ — Product Context

Strategic direction for anyone (human or agent) working on this repo. Read alongside [`HANDOFF.md`](./HANDOFF.md), which covers the pending task list.

## What PsycheIQ is

Not a personality quiz site. A self-discovery platform combining psychology, cognitive assessment, archetypes, symbolic systems and (eventually) AI-assisted insight.

The core question: **"How many different lenses can we use to meaningfully understand who a person is?"**

It is not trying to tell people who they are. It helps them explore themselves through multiple lenses. Every proposed feature should answer: *does this help someone understand themselves better?*

## Measured • Modeled • Mythic

The most important positioning concept in the product. Every insight is tagged as one of three registers, and this distinction is what builds trust:

| Register | Means | In code |
|---|---|---|
| ◇ **Measured** | Assessment data, scoring, established psychology | `tag("M")` |
| ◈ **Modeled** | Rules-based interpretation of patterns | `tag("T")` |
| ✦ **Mythic** | Symbolic frameworks used for reflection | `tag("Y")` |

Symbolic systems are never presented as proven science. The framing is: *"ancient symbolic languages humans have used to explore identity, meaning and transformation."* See `REGISTERS` in `src/04-symbolic-data.js.html`.

## Architecture: four systems

| System | Layer | Implemented as |
|---|---|---|
| **Pneuma Map** | Psychology / personality | Personality Profile + Thinking Style |
| **Logos Matrix** | Intelligence / cognition | Mind IQ |
| **Anima Field** | Symbolic / mythic | Your Birth Sky, Past Life Story, Soul IQ |
| **The Synthesis** | Integration layer | `synthesize()` → the PsycheIQ Blueprint |

**These are internal architecture names.** The user-facing front door is plain language — **Mind • Body • Soul** — with the Hermetic naming kept as a quiet secondary line and in code comments. A beginner should never need to learn a philosophical system before using the product. See `PLAIN` in `src/11-body-iq-and-blueprint.js.html` for the mapping.

## Synthesis Engine v1 — no AI dependency at launch

Launch does **not** require an LLM API. Early budget goes to marketing, acquisition and validation, not inference costs. The v1 engine is handcrafted: *"AI-like personalization without AI costs."*

It is deliberately **not** one giant hardcoded report generator. Results reduce to a small structured trait vector, and modular content blocks are selected against it:

```js
traitVector()  // -> { thinking, energy, social, decision_style, growth_theme }
synthesize()   // -> [ { section, key, text }, ... ]
```

~2,500 base combinations before the symbolic layer multiplies them further. See `src/12-synthesis-engine.js.html`.

**Phase 2 ("Ask Psyche") should consume `traitVector()` output, not re-derive from raw results.** The LLM becomes a *narrator* over this foundation — it should never require rebuilding it.

## Symbolic system — simplified, not a tarot app

Do not build a traditional 78-card tarot app. The goal is not teaching tarot; it's using symbolic language as a self-reflection framework.

- **Archetype** (≈ Major Arcana) — what major theme is active
- **Stage** (≈ numbers 1–10) — Spark, Choice, Growth, Foundation, Challenge, Balance, Refinement, Expansion, Integration, Transformation
- **Role** (≈ court cards) — 🌱 Initiate (learning the pattern), 🔥 Explorer (testing it), ⚙️ Builder (applying it), 👁️ Sage (mastering it)

Page/Knight/Queen/King are never exposed. See `GROWTH_STAGES` and `LEVELS` in `src/11-body-iq-and-blueprint.js.html`.

## Roadmap

- **Phase 1 — Launch.** No API dependency. Assessments, scoring, archetype engine, content database, synthesis generator, user profiles. *(Substantially built.)*
- **Phase 2 — Premium AI.** "Ask Psyche" as a paid enhancement, once revenue exists.
- **Phase 3 — Living Profile.** Journal integration, long-term patterns, goal tracking, reflection history.

## ⚠️ Two open questions the owner needs to settle

These come from a genuine conflict between two context updates. **Don't resolve them by guessing.**

**1. Does the Body dimension survive?**
One context update mandated **Mind • Body • Soul** as the core identity, which prompted building the **Body IQ** assessment (energy rhythm, stress response, habit strength, body awareness — `src/11-body-iq-and-blueprint.js.html`). A later update described the architecture as four systems — Pneuma, Logos, Anima, Synthesis — with **no Body layer at all**.

Both are currently live: Body IQ ships, and the four-system language is the internal architecture. This works, but it's an unresolved tension rather than a decision. If Body is dropped, `BODYIQ`, `BODY_TYPES`, `bodyPanel()` and the Body card in `blueprint()` come out together.

**2. Which is the front door?**
The two updates disagree on whether users first meet *Mind/Body/Soul* or *Pneuma/Logos/Anima*. Current implementation follows the **plain-language-first** instruction (beginner-friendly front door, lore underneath) because that update was explicit that leading with Hermetic terminology "creates unnecessary friction." If the intent was the reverse, the change is contained to `PLAIN`, the `TESTS` registry names in `src/05-assessments-and-registry.js.html`, and the homepage gates in `src/02-markup.html`.

## Development priorities

1. **Modular architecture is now in place** — the app is authored as ordered modules in `src/` and built with `node build.js`. Do not go back to editing a single monolithic file.
2. Assessment logic, scoring, content database, profile data and the synthesis engine are separated across modules; keep them that way.
3. Build foundations that allow future AI integration without a rewrite — see the `traitVector()` contract above.
