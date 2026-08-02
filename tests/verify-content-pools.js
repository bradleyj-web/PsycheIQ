/**
 * verify-content-pools.js
 *
 * Extracts the <script> block from index.html and runs it in a bare
 * Node vm with minimal DOM stubs, then checks the Kindred Figures
 * dataset for the invariants it's supposed to hold:
 *
 *   - 200 shared figures (8 archetypal buckets x 25)
 *   - 100 figures unique to each of the 6 instruments (600 total)
 *   - zero duplicate names across all 800
 *   - every BUCKET_OF mapping resolves to a real shared bucket
 *   - pickKindred() returns a well-shaped 3-item pick for every
 *     tag the app can actually produce
 *
 * This is the pattern to copy for any future content dataset added
 * to the app (e.g. the pending 22x4 tarot readings) — swap the
 * assertions in the second half for whatever the new dataset needs.
 *
 * Run from the repo root:  node tests/verify-content-pools.js
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const scriptMatch = html.split("<script>");
if (scriptMatch.length < 2) {
  console.error("Could not find a <script> block in index.html");
  process.exit(1);
}
const js = scriptMatch[1].split("</script>")[0];

// ---- minimal DOM/browser stubs so the app's top-level code can run headlessly ----
const stubEl = () => new Proxy(function () {}, {
  get: (t, k) => (k === "style" ? {} : k === "classList" ? { add(){}, remove(){} } : k === "innerHTML" ? "" : stubEl()),
  set: () => true,
  apply: () => stubEl(),
});
global.document = {
  querySelector: () => stubEl(),
  querySelectorAll: () => [],
  addEventListener() {},
  removeEventListener() {},
  createElement: () => stubEl(),
  createElementNS: () => stubEl(),
  head: stubEl(),
  body: { appendChild() {}, classList: { add() {} } },
};
global.window = { scrollTo() {} };
global.URL = { createObjectURL: () => "blob:stub" };
global.Blob = function () {};
global.localStorage = { getItem: () => null, setItem() {} };
global.setInterval = () => 0;
global.clearInterval = () => {};
global.setTimeout = () => 0;
global.clearTimeout = () => {};

// vm.runInThisContext (not createContext/runInContext) so that top-level
// `const`/`function` declarations in the app's script land on the real
// Node global object and stay reachable below — matches how this file's
// data was originally validated during development.
vm.runInThisContext(js);

let failures = 0;
const check = (label, condition) => {
  console.log((condition ? "  OK  " : "  FAIL") + "  " + label);
  if (!condition) failures++;
};

console.log("Kindred Figures pool integrity\n" + "-".repeat(40));

// 1. shared pool: 8 buckets x 25 = 200, no dupes
let sharedTotal = 0;
const allNames = [];
KIN_BUCKETS.forEach((b) => {
  const n = KIN_SHARED[b].length;
  sharedTotal += n;
  KIN_SHARED[b].forEach(([name]) => allNames.push(name));
  check(`shared.${b} has 25 entries (has ${n})`, n === 25);
});
check(`shared pool totals 200 (has ${sharedTotal})`, sharedTotal === 200);

// 2. unique pools: 100 per test
let uniqueGrand = 0;
Object.keys(KIN_UNIQUE).forEach((testId) => {
  let t = 0;
  Object.keys(KIN_UNIQUE[testId]).forEach((tag) => {
    const n = KIN_UNIQUE[testId][tag].length;
    t += n;
    KIN_UNIQUE[testId][tag].forEach(([name]) => allNames.push(name));
  });
  check(`${testId} unique pool totals 100 (has ${t})`, t === 100);
  uniqueGrand += t;
});
check(`grand total is 800 (has ${sharedTotal + uniqueGrand})`, sharedTotal + uniqueGrand === 800);

// 3. zero duplicate names anywhere in the 800
const seen = {};
allNames.forEach((n) => { seen[n] = (seen[n] || 0) + 1; });
const dupes = Object.keys(seen).filter((n) => seen[n] > 1);
check(`no duplicate names across all 800 (found ${dupes.length})`, dupes.length === 0);
if (dupes.length) console.log("    " + dupes.join(", "));

// 4. BUCKET_OF: every tag the app can produce must resolve to a real shared bucket
const TAGS = {
  trait: ["will", "insight", "fusion", "focus", "vision", "shadow"],
  type: ["ENTJ","ESTJ","INTJ","INFP","ISTJ","ISTP","ENTP","ESTP","INFJ","ISFJ","ISFP","ESFJ","INTP","ENFP","ESFP","ENFJ"],
  module: ["systemic", "geometry", "memory", "applied"],
  soulq: ["cet", "pmp", "ta", "cse"],
  lineage: ["pleiadian","sirian","arcturian","lyran","andromedan","orion","draconian","terran"],
  role: ["warrior", "singer", "builder", "waterman"],
};
let bucketProblems = 0;
Object.keys(TAGS).forEach((cat) => TAGS[cat].forEach((tag) => {
  const b = BUCKET_OF[cat] && BUCKET_OF[cat][tag];
  if (!b || !KIN_SHARED[b]) bucketProblems++;
}));
check(`every BUCKET_OF mapping resolves (${bucketProblems} problems)`, bucketProblems === 0);

// 5. pickKindred() shape check across every tag the app can actually produce
let pickProblems = 0, exercised = 0;
[["pneuma","trait"],["typology","type"],["logos","module"],["soulq","soulq"],["anima","lineage"],["past","role"]]
  .forEach(([testId, cat]) => TAGS[cat].forEach((tag) => {
    exercised++;
    const picks = pickKindred(testId, cat, tag);
    if (picks.length !== 3) pickProblems++;
    picks.forEach((p) => { if (!p.name || !p.epithet) pickProblems++; });
  }));
check(`pickKindred() returns 3 well-shaped picks for all ${exercised} tags (${pickProblems} problems)`, pickProblems === 0);

console.log("-".repeat(40));
if (failures) {
  console.log(`${failures} check(s) failed.`);
  process.exit(1);
} else {
  console.log("All checks passed.");
}
