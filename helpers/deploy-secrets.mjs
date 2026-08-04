#!/usr/bin/env node
/*
 * deploy-secrets.mjs — pushes secrets.env into Supabase Edge Function secrets.
 *
 * Run from the repo root:   node helpers/deploy-secrets.mjs
 *
 * secrets.env is gitignored. It never gets committed and the values never
 * appear on a command line: this hands the file to the Supabase CLI with
 * --env-file, so nothing sensitive lands in your shell history or in the
 * process list. (The previous version built `supabase secrets set KEY=value`
 * strings, which both leaked into history and broke on any value containing
 * shell metacharacters.)
 */
import { readFileSync, existsSync } from "fs";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const envPath = resolve(root, "secrets.env");

if (!existsSync(envPath)) {
  console.error("Missing secrets.env.");
  console.error("  copy secrets.env.example to secrets.env and fill in real values");
  console.error("  expected at: " + envPath);
  process.exit(1);
}

const secrets = {};
for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
  const s = line.trim();
  if (!s || s.startsWith("#")) continue;
  const m = s.match(/^([A-Z0-9_]+)\s*=\s*(.*)$/);
  if (!m) continue;
  secrets[m[1]] = m[2].replace(/^["']|["']$/g, "");
}

const REQUIRED = ["STRIPE_SECRET_KEY", "STRIPE_CORE_PRICE_ID",
                  "STRIPE_MEMBER_PRICE_ID", "STRIPE_WEBHOOK_SECRET", "SUPPORT_EMAIL"];

const missing = REQUIRED.filter(k => !secrets[k]);
if (missing.length) {
  console.error("Missing: " + missing.join(", "));
  process.exit(1);
}
const placeholder = REQUIRED.filter(k =>
  /^\.\.\.|your-|TODO|sk_test_\.\.\.|price_\.\.\.|whsec_\.\.\./i.test(secrets[k]) || secrets[k].endsWith("..."));
if (placeholder.length) {
  console.error("Still placeholder values: " + placeholder.join(", "));
  process.exit(1);
}

/* sanity-check the shapes before spending a round trip on the API */
const warn = [];
if (! /^(sk|rk)_(test|live)_/.test(secrets.STRIPE_SECRET_KEY)) warn.push("STRIPE_SECRET_KEY does not start with sk_test_, sk_live_, rk_test_, or rk_live_");
if (!/^price_/.test(secrets.STRIPE_CORE_PRICE_ID)) warn.push("STRIPE_CORE_PRICE_ID does not start with price_");
if (!/^price_/.test(secrets.STRIPE_MEMBER_PRICE_ID)) warn.push("STRIPE_MEMBER_PRICE_ID does not start with price_");
if (!/^whsec_/.test(secrets.STRIPE_WEBHOOK_SECRET)) warn.push("STRIPE_WEBHOOK_SECRET does not start with whsec_");
if (secrets.STRIPE_CORE_PRICE_ID === secrets.STRIPE_MEMBER_PRICE_ID) warn.push("both price IDs are the same");
if (warn.length) {
  console.error("Refusing to push — check these first:");
  warn.forEach(w => console.error("  - " + w));
  process.exit(1);
}

const mode = secrets.STRIPE_SECRET_KEY.startsWith("sk_live_") || secrets.STRIPE_SECRET_KEY.startsWith("rk_live_") ? "LIVE" : "TEST";
console.log("Pushing " + Object.keys(secrets).length + " secrets in " + mode + " mode.");
if (mode === "LIVE") console.log("  These are live keys. Real cards will be charged.");

const cli = process.platform === "win32" ? "npx.cmd" : "npx";
const r = spawnSync(cli, ["supabase", "secrets", "set", "--env-file", envPath],
                    { stdio: "inherit", cwd: root });

if (r.status !== 0) {
  console.error("\nFailed. Common causes:");
  console.error("  not logged in        -> npx supabase login");
  console.error("  project not linked   -> npx supabase link --project-ref ofaafruiapampldmrtdg");
  process.exit(r.status || 1);
}

console.log("\nDone. Next:");
console.log("  1. npx supabase functions deploy create-checkout");
console.log("  2. npx supabase functions deploy checkout-status");
console.log("  3. npx supabase functions deploy support-ticket");
console.log("  4. npx supabase functions deploy stripe-webhook --no-verify-jwt");
console.log("  5. add the webhook endpoint in Stripe, then re-run this with the signing secret");
