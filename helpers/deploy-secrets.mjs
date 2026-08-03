#!/usr/bin/env node
import { readFileSync, existsSync } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '..', 'secrets.env');

if (!existsSync(envPath)) {
  console.error('Missing secrets.env. Copy secrets.env.example -> secrets.env and fill in real values.');
  console.error('Path:', envPath);
  process.exit(1);
}

const envText = readFileSync(envPath, 'utf8');
const secrets = {};
for (const line of envText.split('\n')) {
  const m = line.trim().match(/^([A-Z_]+)\s*=\s*(.+)$/);
  if (!m) continue;
  const [, key, val] = m;
  if (val.startsWith('...') || val.includes('your-') || val.includes('TODO')) {
    console.error('Placeholder still present for', key);
    process.exit(1);
  }
  secrets[key] = val;
}

const required = ['STRIPE_SECRET_KEY','STRIPE_CORE_PRICE_ID','STRIPE_MEMBER_PRICE_ID','STRIPE_WEBHOOK_SECRET','SUPPORT_EMAIL'];
const missing = required.filter(k => !secrets[k]);
if (missing.length) {
  console.error('Missing secrets:', missing.join(', '));
  process.exit(1);
}

for (const key of required) {
  const cmd = `supabase secrets set ${key}=${secrets[key]}`;
  console.log('Setting', key);
  try {
    execSync(cmd, { stdio: 'inherit', cwd: resolve(__dirname, '..') });
  } catch (e) {
    console.error('Failed to set', key);
    process.exit(1);
  }
}

console.log('All Supabase Edge Function secrets set.');
console.log('Next: run the end-to-end browser test.');
