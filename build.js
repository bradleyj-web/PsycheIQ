#!/usr/bin/env node
/**
 * build.js — concatenates src/ modules into the deployable index.html
 *
 * PsycheIQ ships as a single self-contained file (no bundler, no build
 * toolchain, opens straight in a browser), but it is *authored* as the
 * ordered modules below. Edit files in src/, then run:
 *
 *     node build.js
 *
 * Order matters. Modules 03+ all live inside one <script> block, so
 * anything using a top-level `const` at load time must appear after the
 * module that declares it. Function declarations hoist across the whole
 * script, so cross-module function calls are order-independent.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const MODULES = [
  "01-shell-and-styles.html",        // <head>, design tokens, all CSS
  "02-markup.html",                  // <body>, sigil sprite, all view containers
  "03-core-state-and-router.js.html",// opens <script>; State, router, modals, oracle
  "04-symbolic-data.js.html",        // zodiac, lineages, tarot correspondences, registers
  "05-assessments-and-registry.js.html", // quiz engine, Typology, Soul IQ, score, readings, TESTS
  "06-art.js.html",                  // constellations, arcana emblems, natal wheel, orb
  "07-trials-and-leaderboard.js.html",// daily trial, seeded RNG, charts, storage shim
  "08-past-life-engine.js.html",     // Akashic Draw: art, scoring, 64-narrative engine
  "09-profiles-and-funnels.js.html", // profiles, slots, entitlements, conversion funnels
  "10-content-kindred-karma.js.html",// 800 kindred figures, strengths/weaknesses, karma
  "11-body-iq-and-blueprint.js.html",// Body IQ, plain-language layer, Blueprint
  "12-synthesis-engine.js.html",     // trait vector + modular synthesis content blocks
  "13-deck-reading-engine.js.html",  // The Deck: 22x4 reading engine, cooldown gate, promo codes
  "14-access-numerology-locations.js.html", // access control, numerology, city database
  "15-doors-results-cast.js.html",   // Nine Doors, results card, soul blueprint agg, dice cast
  "16-dimensions-light-tarotsynth.js.html", // Mind/Body/Soul dims, light engine, tarot synthesis
  "17-images-and-onboarding.js.html",// past-life art layer, blueprint dashboard, IMAGE LAYER, onboarding
  "18-fools-journey.js.html",        // Fool's Journey: chapters, sigils, badges, deck skins
  "19-payments-supabase-stripe.js.html", // accounts, entitlements, Stripe Checkout
  "20-progress-and-funnels.js.html", // XP -> level -> sigils spine, milestone funnels
  "21-engines-render-and-init.js.html" // Pneuma/Logos engines, results render, init; closes tags
];

const srcDir = path.join(__dirname, "src");
const missing = MODULES.filter(m => !fs.existsSync(path.join(srcDir, m)));
if (missing.length) {
  console.error("Missing source modules:\n  " + missing.join("\n  "));
  process.exit(1);
}

const out = MODULES.map(m => fs.readFileSync(path.join(srcDir, m), "utf8")).join("");
fs.writeFileSync(path.join(__dirname, "index.html"), out);

const kb = (out.length / 1024).toFixed(0);
console.log(`Built index.html from ${MODULES.length} modules (${kb} KB, ${out.split("\n").length} lines)`);

// fail loudly if the build produced something structurally broken
const scriptCount = out.split("<script>").length - 1;
if (scriptCount !== 1) {
  console.error(`Expected exactly 1 <script> block, found ${scriptCount}. Check module order.`);
  process.exit(1);
}
if (!out.trimEnd().endsWith("</html>")) {
  console.error("Output does not end with </html>. Is the final module last?");
  process.exit(1);
}
console.log("Structure check passed.");
