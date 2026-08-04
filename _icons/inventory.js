const fs = require("fs"), path = require("path");
const DL = "C:/Users/plzdo/Downloads";
const KEEP = "psycheiq-repo";
const rx = /psyche|prompts|imagegen|generate_images|_smoke/i;

function size(p) {
  let t = 0;
  try {
    const st = fs.statSync(p);
    if (st.isFile()) return st.size;
    for (const e of fs.readdirSync(p)) t += size(path.join(p, e));
  } catch (_) {}
  return t;
}
const mb = n => (n / 1048576).toFixed(1).padStart(8) + " MB";

const rows = [];
for (const name of fs.readdirSync(DL)) {
  if (!rx.test(name)) continue;
  const p = path.join(DL, name);
  const st = fs.statSync(p);
  rows.push({ name, dir: st.isDirectory(), bytes: size(p), mtime: st.mtime.toISOString().slice(0, 10) });
}
rows.sort((a, b) => b.bytes - a.bytes);
let total = 0, reclaim = 0;
console.log("PsycheIQ-related items in Downloads\n" + "-".repeat(74));
for (const r of rows) {
  total += r.bytes;
  const keep = r.name === KEEP;
  if (!keep) reclaim += r.bytes;
  console.log((keep ? " KEEP " : " dup  ") + mb(r.bytes) + "  " + r.mtime + "  " + (r.dir ? "[dir] " : "      ") + r.name);
}
console.log("-".repeat(74));
console.log("  total: " + mb(total).trim() + "    reclaimable: " + mb(reclaim).trim());

// nested junk inside the repo itself (gitignored, so invisible to git status)
const nested = path.join(DL, KEEP, "psycheiq-repo");
if (fs.existsSync(nested)) console.log("\n  NOTE: " + mb(size(nested)).trim() + " of stray files nested inside the repo at psycheiq-repo/psycheiq-repo/ (gitignored)");
