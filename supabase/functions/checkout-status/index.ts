// deno-lint-ignore-file no-explicit-any
import Stripe from "https://esm.sh/stripe@latest?target=denonext";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders, errorResponse, jsonResponse } from "../_shared/cors.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") || "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""
);

function stripeClient() {
  const secretKey = Deno.env.get("STRIPE_SECRET_KEY");
  if (!secretKey) throw new Error("Missing STRIPE_SECRET_KEY");

  return new Stripe(secretKey, {
    httpClient: Stripe.createFetchHttpClient(),
  });
}

function cleanText(value: unknown) {
  return String(value || "").trim();
}

function timestampToIso(value?: number | null) {
  return value ? new Date(value * 1000).toISOString() : null;
}

async function getAuthenticatedUserId(request: Request) {
  const header = request.headers.get("Authorization") || "";
  const token = header.replace(/^Bearer\s+/i, "");
  if (!token) return "";

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return "";
  return data.user.id;
}

async function userIdForEmail(email: string) {
  if (!email) return "";
  const { data } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", email.toLowerCase())
    .maybeSingle();

  return data?.id || "";
}

async function persistCheckoutAccess(session: any, fallbackUserId = "", fallbackTestId = "") {
  const metadata = session.metadata || {};
  const accessType = metadata.access_type === "member" || session.mode === "subscription" ? "member" : "core";
  const testId = cleanText(metadata.test_id || fallbackTestId);
  const email = cleanText(
    session.customer_details?.email || session.customer_email || metadata.email
  ).toLowerCase();
  const userId = cleanText(metadata.user_id || fallbackUserId) || (await userIdForEmail(email)) || null;
  const customerId = typeof session.customer === "string" ? session.customer : session.customer?.id || null;
  const subscriptionId =
    typeof session.subscription === "string" ? session.subscription : session.subscription?.id || null;
  const paymentComplete =
    session.payment_status === "paid" || session.status === "complete" || session.status === "paid";

  if (accessType === "core" && !paymentComplete) {
    return { ok: false, reason: "Payment is not complete yet." };
  }

  let subscription: any = null;
  let subscriptionActive = false;
  let currentPeriodEnd = null;

  if (accessType === "member") {
    if (!subscriptionId) return { ok: false, reason: "Subscription was not found." };
    subscription = await stripeClient().subscriptions.retrieve(subscriptionId);
    subscriptionActive = ["active", "trialing"].includes(subscription.status);
    currentPeriodEnd = timestampToIso(subscription.current_period_end);

    if (!subscriptionActive) {
      return { ok: false, reason: `Subscription status is ${subscription.status}.` };
    }
  }

  await supabase.from("purchases").upsert(
    {
      user_id: userId,
      email,
      access_type: accessType,
      test_id: testId || null,
      stripe_customer_id: customerId,
      stripe_checkout_session_id: session.id,
      stripe_subscription_id: subscriptionId,
      amount_total: session.amount_total,
      currency: session.currency,
      status: accessType === "member" ? subscription.status : session.payment_status,
    },
    { onConflict: "stripe_checkout_session_id" }
  );

  if (accessType === "member" && subscription) {
    await supabase.from("subscriptions").upsert(
      {
        user_id: userId,
        email,
        stripe_customer_id: customerId,
        stripe_subscription_id: subscription.id,
        status: subscription.status,
        current_period_start: timestampToIso(subscription.current_period_start),
        current_period_end: currentPeriodEnd,
        cancel_at_period_end: Boolean(subscription.cancel_at_period_end),
      },
      { onConflict: "stripe_subscription_id" }
    );

    await supabase.from("entitlements").upsert(
      {
        user_id: userId,
        email,
        access_type: "member",
        test_id: null,
        source: "stripe",
        active: subscriptionActive,
        current_period_end: currentPeriodEnd,
        stripe_subscription_id: subscription.id,
      },
      { onConflict: "stripe_subscription_id" }
    );

    return { ok: true, access: { member: true, coreUnlocks: [] } };
  }

  await supabase.from("entitlements").upsert(
    {
      user_id: userId,
      email,
      access_type: "core",
      test_id: testId,
      source: "stripe",
      active: true,
      stripe_checkout_session_id: session.id,
    },
    { onConflict: "stripe_checkout_session_id" }
  );

  return { ok: true, access: { member: false, coreUnlocks: testId ? [testId] : [] } };
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return errorResponse("Method not allowed", 405);
  }

  try {
    const body = await request.json();
    const sessionId = cleanText(body.sessionId);
    if (!sessionId) return errorResponse("Missing checkout session id", 400);

    const session = await stripeClient().checkout.sessions.retrieve(sessionId);
    if (session.metadata?.app !== "psycheiq") {
      return errorResponse("Checkout session does not belong to PsycheIQ", 403);
    }

    const result = await persistCheckoutAccess(
      session,
      await getAuthenticatedUserId(request),
      cleanText(body.testId)
    );

    if (!result.ok) return errorResponse(result.reason || "Payment is not active", 402);
    return jsonResponse({ ok: true, mode: session.metadata?.access_type || body.mode, access: result.access });
  } catch (error) {
    return errorResponse(error instanceof Error ? error.message : "Checkout could not be verified", 500);
  }
});
