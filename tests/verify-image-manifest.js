/*
 * verify-image-manifest.js
 *
 * Every artwork slot in the app resolves through imgOr()/plTile(), which
 * silently falls back to an inline SVG when a file 404s. That is good for
 * shipping art incrementally and terrible for noticing that half your
 * images stopped resolving — which is exactly what happened when the
 * past-life engine built paths like images/past/m1-greek-m1.jpg.
 *
 * This test closes that gap: it runs the built app headlessly, asks it for
 * every image path it will ever request, and asserts each one exists on
 * disk. It also flags files in images/ that nothing asks for.
 *
 * Run from the repo root:  node tests/verify-image-manifest.js
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const js = html.split("<script>")[1].split("</script>")[0];

// ---- same minimal DOM stubs as verify-content-pools.js ----
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

vm.runInThisContext(js);

let failures = 0;
const check = (label, condition) => {
  console.log((condition ? "  OK  " : "  FAIL") + "  " + label);
  if (!condition) failures++;
};

console.log("Image manifest integrity\n" + "-".repeat(46));

// ---- what the app asks for ----
const manifest = imageManifest();          // tarot, zodiac, lineage, tests, hero, past
const wanted = new Map();                  // path -> group
manifest.forEach(x => wanted.set(x.path, x.group));

const byGroup = {};
manifest.forEach(x => { byGroup[x.group] = (byGroup[x.group] || 0) + 1; });

console.log("  slots requested by group:");
Object.keys(byGroup).sort().forEach(g => console.log("    " + g.padEnd(10) + byGroup[g]));
console.log("-".repeat(46));

// ---- what exists on disk ----
const IMAGES = path.join(ROOT, "images");
const onDisk = new Set();
(function walk(dir, prefix) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) walk(path.join(dir, entry.name), prefix + entry.name + "/");
    else onDisk.add("images/" + prefix + entry.name);
  }
})(IMAGES, "");

// ---- assertions ----
const missing = [...wanted.keys()].filter(p => !onDisk.has(p));
check("every requested image exists on disk (" + missing.length + " missing)", missing.length === 0);
missing.slice(0, 40).forEach(p => console.log("        missing: " + p));

const badKeys = [...wanted.keys()].filter(p => /undefined|null|NaN/.test(p));
check("no path contains undefined/null/NaN (" + badKeys.length + " bad)", badKeys.length === 0);
badKeys.slice(0, 20).forEach(p => console.log("        bad path: " + p));

// past-life slots must only ever use the s1/s2 scene names
const badScene = [...wanted.keys()].filter(p => p.startsWith("images/past/") && !/-s[12]\.jpg$/.test(p));
check("past-life paths all end in -s1/-s2 (" + badScene.length + " bad)", badScene.length === 0);
badScene.slice(0, 20).forEach(p => console.log("        bad scene: " + p));

/* The manifest is generated from PL_ART, so it can look perfectly healthy
   while the *quiz* asks for something else entirely — which is precisely
   how the ["m1","m2"] regression survived. Walk the actual question set
   and confirm every tile it can render is a path that exists. */
const qPaths = new Set();
const perQuestion = [];
PL_QS.filter(q => q.type === "image").forEach(q => {
  const slots = Array.isArray(q.art) ? q.art : [q.art];
  const forThis = [];
  Object.keys(PL_ART[q.mod]).forEach(key => {
    slots.forEach(slot => { const p = plImgPath(q.mod, key, slot); qPaths.add(p); forThis.push(p); });
  });
  perQuestion.push({ mod: q.mod, paths: forThis });
});
const qMissing = [...qPaths].filter(p => !onDisk.has(p));
check("every tile the past-life quiz can render exists (" + qPaths.size + " paths, " + qMissing.length + " missing)", qMissing.length === 0);
qMissing.slice(0, 20).forEach(p => console.log("        quiz wants: " + p));

/* No scene may appear in two different image questions, and no question may
   show the same scene twice. This is what actually broke the feel of the
   test: every module's second image question was re-showing the first
   question's pictures, so the run looked like it kept repeating itself. */
const seenIn = new Map();
let repeats = 0, withinDupes = 0;
perQuestion.forEach((q, qi) => {
  if (new Set(q.paths).size !== q.paths.length) withinDupes++;
  q.paths.forEach(p => {
    if (seenIn.has(p) && seenIn.get(p) !== qi) { repeats++; console.log("        repeated across questions: " + p); }
    else seenIn.set(p, qi);
  });
});
check("no scene repeats within a single image question (" + withinDupes + " questions affected)", withinDupes === 0);
check("no scene repeats across image questions (" + repeats + " repeats)", repeats === 0);
check("each image question offers 4 distinct tiles",
  perQuestion.every(q => new Set(q.paths).size === 4));

const dupes = manifest.length - new Set(manifest.map(x => x.path)).size;
check("no duplicate slots in the manifest (" + dupes + " duplicated)", dupes === 0);

const icons = p => /\/icon-\d+\.png$/.test(p);
const orphans = [...onDisk].filter(p => !wanted.has(p) && !icons(p));
check("no orphaned files in images/ (" + orphans.length + " unused)", orphans.length === 0);
orphans.slice(0, 40).forEach(p => console.log("        unused: " + p));

console.log("-".repeat(46));
if (failures) {
  console.error(failures + " check(s) failed.");
  process.exit(1);
}
console.log("All checks passed. " + wanted.size + " image slots, all present.");
