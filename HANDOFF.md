# HANDOFF

> **Read [`CONTEXT.md`](./CONTEXT.md) first** — product direction, the Measured/Modeled/Mythic framing, the synthesis-engine contract, and two unresolved questions for the owner.
>
> **Positioning note.** The front door of this product is **Mind • Body • Soul** — plain, beginner-friendly language. The Hermetic naming (Pneuma Map, Logos Matrix, Anima Field, Akashic Draw) is now a *deep lore layer*: it appears as a small secondary line under each plain name and in code comments, never as the entry point. See `PLAIN` and `PLAIN_ARCH` in `index.html` for the mapping. When adding anything user-facing, lead with what a beginner already understands; the mythology is the reward for going deeper, not the price of admission.

Written for whichever agent (or human) picks this up next. There's no chat history attached to this repo, so this doc is the only record of what's pending and why things are built the way they are. Read this before touching `index.html`.

## Assessment lineup (7 across 3 dimensions)

| Dimension | Assessment | Lore name |
|---|---|---|
| 🧠 Mind | Personality Profile | The Pneuma Map |
| 🧠 Mind | Thinking Style | The Sixteen Types |
| 🧠 Mind | Mind IQ | The Logos Matrix |
| 🧬 Body | Body IQ | The Corpus Field |
| ✨ Soul | Soul IQ | The Anima Sophia |
| ✨ Soul | Your Birth Sky | The Anima Field |
| ✨ Soul | Past Life Story | The Akashic Draw |

Results combine into **Your PsycheIQ Blueprint** (`blueprint()` in `index.html`) — a Mind/Body/Soul character sheet with a Growth Path pointing at the weakest completed dimension, plus a Growth Stage / Experience Level standing (`growthStanding()`) that gives users an accessible progress frame without requiring any tarot or Hermetic knowledge.

**Body IQ has no test-specific Kindred Figures pool yet.** It currently falls back to drawing all 3 figures from its mapped shared bucket (see the fallback branch in `pickKindred()`). Writing a dedicated 100-name pool for it — keyed by `energy`/`stress`/`habits`/`attune` — would bring it in line with the other six and push the dataset to 900. The test in `tests/` asserts the *existing* 800; update its expectations if you add that pool.

## Pending task: rebuild the Deck page

The current `/tarot` view (`renderTarot()`, around line 1968 of `index.html`) is a simple gallery: 22 Major Arcana cards, a "card of the day," tap-a-card-for-its-meaning. **This is a placeholder and needs to be replaced** with the interactive reading described below. This spec is transcribed as exactly as possible from the person who owns this product — preserve the intent even where the wording was loose.

### What it should become

Note the repositioning above: tarot should read as a *reflective tool inside the Soul dimension*, not as the platform's headline. Frame it as "explore symbolic patterns to reflect on yourself," not "take a tarot test."

A **limited reading using only the 22 Major Arcana** (no minor arcana cards are added to the deck — see "category" below for how the four suits get folded in instead).

**Flow:**
1. Person picks a **category** for the reading (see below) — this determines which of the four written responses a card resolves to.
2. Deck of 22 shows **face-down**. A **Shuffle** control visibly mixes the deck (animate the reorder — this is a moment people will screenshot, don't skip the motion).
3. Person **picks one card**. It flips face-up.
4. Below the revealed card: a **1–2 paragraph reading**, specific to *that card × that category* — not a generic card meaning.

**Categories (map directly to the four minor-arcana suits, used only as a thematic/emblem device — not as drawable cards):**

| Category | Suit emblem | Covers |
|---|---|---|
| Intuition, creativity & creation | Wands 🜂 | inspiration, artistic work, gut instinct |
| Money, career & material things | Pentacles 🜃 | work, finances, physical resources |
| Relationships, family & tradition | Cups 🜄 | personal bonds, home, lineage |
| Conflict, strategy & logic | Swords 🜁 | decisions, disputes, planning |

### The content requirement

**22 cards × 4 categories = 88 distinct one-paragraph readings.** Every card needs a genuinely different response per category — not the same paragraph with a category name spliced in. (E.g. The Tower read through *Money & Career* should be about a collapsing structure/job/plan; read through *Relationships* it should be about a rupture that clears the ground; same card, different paragraph, different specifics.)

### Where things already exist to build on

- `const ARCANA = [...]` (~line 1850) — the 22 cards: rank, name, one-line keyword. **Extend this data**, don't replace it; other code (`tarotCard()`, `arcanaArt()`, the home page's "card of the day") reads from it.
- `function arcanaArt(i)` — hand-drawn SVG emblem per card, already exists for all 22. Reuse for the face-up reveal.
- `function tarotCard(i, opts)` — renders one card as a `.tcard` button. The face-down deck for shuffling/picking should probably be a new component (cards need a back state), but keep the same visual language (`.tcard`, `.frame`, gold border, `var(--gold)` etc.).
- `RNG` / `shuffle(a)` (~line 974) — **important**: `RNG` is swapped to a seeded generator during the Daily Trial build and restored to `Math.random` afterward (see `buildDailyItems()`). A manual "Shuffle" button should just call `shuffle()` as-is when nothing else has left `RNG` in a seeded state — but don't assume; check `RNG === Math.random` or just use `Math.random` directly for this feature to avoid any coupling to the daily-trial seeding.
- `modal()`, `$`/`$$`, `esc()` — standard helpers, used everywhere, see `index.html` generally.
- `go(name)` — the router. Add `"deck-reading"` or similar to the `VIEWS` array and the `go()` switch if this becomes its own state, or just extend `view-tarot`'s existing render — either is fine, follow whatever's less disruptive once you're looking at the actual code.
- The `.reg`/`tag(r)` epistemic-register system (◇ Measured / ◈ Modeled / ✦ Mythic) is used throughout the app for anything astrological/tarot-adjacent. This reading is `✦ Mythic` — tag it consistent with everything else (see any `anima`-related block for the pattern).

### Open decisions for whoever builds this

- Should a completed reading save to the profile / count toward a "slot" the way the six instruments do (`saveResult()`/`afterTest()` pattern, see `part` of `index.html` around `function saveResult`)? The person hasn't said. Reasonable default: **no** — this reads as a lighter, repeatable tool (like the daily card), not a one-time "test." Don't gate it behind the 3-slot free-tier limit unless told to.
- Free vs. paid: the rest of the app teases free, locks depth behind $1/$12.99. Decide whether the second paragraph of each 88-paragraph reading is a natural place for that pattern (paragraph 1 free, paragraph 2 unlocks) — consistent with how every other result page in this app already works (see `sectionsBlock()` for the pattern: first section free, `.teaser` class truncates the rest).

## Architecture notes (general)

- **Modular source, single-file output.** Author in `src/` (13 ordered modules), run `node build.js` to produce `index.html`. Never hand-edit `index.html`. Module order matters: everything from `03-` onward shares one `<script>` block, so top-level `const` declarations must precede their use at load time (function declarations hoist across the whole script, so cross-module *calls* are order-independent).
- **State object** (`const State = {...}`, near the top of the script) holds every test result. `saveResult(id, data)` writes into the active profile; `afterTest(id)` navigates to results and fires the post-test conversion funnel.
- **Rendering is manual DOM string-building**, not a framework — every `render*()` function does `$("#view-x").innerHTML = '...'`. Follow the existing style (template literals via string concatenation, `esc()` on anything user- or data-derived that touches innerHTML).
- **Design tokens** are CSS custom properties at the top of the `<style>` block (`--gold`, `--void`, `--gold-line`, etc.) — reuse them, don't hardcode new colors.
- **Payments, accounts, and the leaderboard's cross-device sync are stubbed.** Wiring notes are in a comment block near the end of the `<script>` tag (search for "WIRING POINTS FOR PRODUCTION").

## Testing

`tests/verify-content-pools.js` extracts the `<script>` block from `index.html`, runs it in a Node `vm` with minimal DOM stubs, and checks the Kindred Figures dataset: exact pool counts (200 shared + 100 × 6 tests = 800), zero duplicate names across the whole set, and that every bucket mapping resolves. Run it after any edit that touches data:

```bash
node tests/verify-content-pools.js
```

If you build the 88-paragraph tarot content, **write a sibling test the same way** — load the script, assert all 22×4 combinations exist, are non-empty, and contain no `undefined`/`NaN`. The pattern in `verify-content-pools.js` is written to be copied.
