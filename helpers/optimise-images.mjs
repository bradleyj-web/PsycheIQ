/*
 * optimise-images.mjs
 *
 * The generated artwork came out of Leonardo at near-lossless quality:
 * 34 MB across 76 files, with single tarot cards over 1 MB. The deck view
 * renders 22 of them at once, so on a phone that was tens of megabytes for
 * a screen where each card is ~150 px wide.
 *
 * This re-encodes every image in place: caps the long edge at a size that
 * still looks sharp at 2x DPR, and uses progressive mozjpeg at a quality
 * where the difference is not visible at display size. Originals are in
 * git history if a number needs revisiting.
 *
 * Run from the repo root:  node helpers/optimise-images.mjs
 * Add --dry to report without writing.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMAGES = path.join(ROOT, "images");
const DRY = process.argv.includes("--dry");

/* folder -> { edge: max long side in px, q: jpeg quality } */
const RULES = {
  "tarot":   { edge: 1000, q: 78 },
  "past":    { edge: 1200, q: 78 },
  "zodiac":  { edge: 800,  q: 80 },
  "lineage": { edge: 1000, q: 78 },
  "tests":   { edge: 800,  q: 80 },
  "":        { edge: 1600, q: 78 },   // hero.jpg and anything at the root
};

const files = [];
(function walk(dir, prefix) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, prefix + entry.name + "/");
    else if (/\.jpe?g$/i.test(entry.name)) files.push({ abs: p, rel: prefix + entry.name, folder: prefix.replace(/\/$/, "") });
  }
})(IMAGES, "");

const kb = n => (n / 1024).toFixed(0).padStart(5) + " KB";
let before = 0, after = 0, changed = 0;

for (const f of files) {
  const rule = RULES[f.folder] ?? RULES[""];
  const src = fs.readFileSync(f.abs);
  before += src.length;

  const out = await sharp(src)
    .rotate()                                   // bake in EXIF orientation
    .resize({ width: rule.edge, height: rule.edge, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: rule.q, progressive: true, mozjpeg: true, chromaSubsampling: "4:2:0" })
    .toBuffer();

  // never let "optimising" make a file bigger
  const keep = out.length < src.length ? out : src;
  after += keep.length;
  if (keep !== src) {
    changed++;
    if (!DRY) fs.writeFileSync(f.abs, keep);
    console.log("  " + kb(src.length) + " -> " + kb(keep.length) + "  " + f.rel);
  }
}

const pct = before ? (100 - (after / before) * 100).toFixed(1) : "0";
console.log("-".repeat(52));
console.log("  files rewritten: " + changed + " of " + files.length);
console.log("  total: " + kb(before) + " -> " + kb(after) + "   (" + pct + "% smaller)");
if (DRY) console.log("  (dry run — nothing written)");
