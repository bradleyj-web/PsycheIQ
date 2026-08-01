// deno-lint-ignore-file no-explicit-any
import Stripe from "https://esm.sh/stripe@latest?target=denonext";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders, errorResponse, jsonResponse } from "../_shared/cors.ts";

const cryptoProvider = Stripe.createSubtleCryptoProvider();

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

async function userIdForEmail(email: string) {
  if (!email) return "";
  const { data } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", email.toLowerCase())
    .maybeSingle();

  return data?.id || "";
}

async function persistCheckoutAccess(session: any) {
  const metadata = session.metadata || {};
  const accessType = metadata.access_type === "member" || session.mode === "subscription" ? "member" : "core";
  const testId = cleanText(metadata.test_id);
  const email = cleanText(
    session.customer_details?.email || session.customer_email || metadata.email
  ).toLowerCase();
  const userId = cleanText(metadata.user_id) || (await userIdForEmail(email)) || null;
  const customerId = typeof session.customer === "string" ? session.customer : session.customer?.id || null;
  const subscriptionId =
    typeof session.subscription === "string" ? session.subscription : session.subscription?.id || null;

  let subscription: any = null;
  let subscriptionActive = false;
  let currentPeriodEnd = null;

  if (accessType === "member" && subscriptionId) {
    subscription = await stripeClient().subscriptions.retrieve(subscriptionId);
    subscriptionActive = ["active", "trialing"].includes(subscription.status);
    currentPeriodEnd = timestampToIso(subscription.current_period_end);
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
      status: accessType === "member" && subscription ? subscription.status : session.payment_status,
    },
    { onConflict: "stripe_checkout_session_id" }
  );

  if (accessType === "member" && subscription) {
    await syncSubscription(subscription, userId, email, customerId);
    return;
  }

  if (accessType === "core") {
    await supabase.from("entitlements").upsert(
      {
        user_id: userId,
        email,
        access_type: "core",
        test_id: testId,
        source: "stripe",
        active: session.payment_status === "paid",
        stripe_checkout_session_id: session.id,
      },
      { onConflict: "stripe_checkout_session_id" }
    );
  } else if (subscriptionId) {
    await supabase.from("entitlements").upsert(
      {
        user_id: userId,
        email,
        access_type: "member",
        source: "stripe",
        active: subscriptionActive,
        current_period_end: currentPeriodEnd,
        stripe_subscription_id: subscriptionId,
      },
      { onConflict: "stripe_subscription_id" }
    );
  }
}

async function syncSubscription(subscription: any, fallbackUserId = "", fallbackEmail = "", fallbackCustomerId = "") {
  const metadata = subscription.metadata || {};
  const email = cleanText(metadata.email || fallbackEmail).toLowerCase();
  const userId = cleanText(metadata.user_id || fallbackUserId) || (await userIdForEmail(email)) || null;
  const customerId =
    typeof subscription.customer === "string"
      ? subscription.customer
      : subscription.customer?.id || fallbackCustomerId || null;
  const active = ["active", "trialing"].includes(subscription.status);
  const currentPeriodEnd = timestampToIso(subscription.current_period_end);

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
      active,
      current_period_end: currentPeriodEnd,
      stripe_subscription_id: subscription.id,
    },
    { onConflict: "stripe_subscription_id" }
  );
}

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return errorResponse("Method not allowed", 405);
  }

  const signature = request.headers.get("Stripe-Signature");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!signature || !webhookSecret) return errorResponse("Missing Stripe webhook signature", 400);

  const body = await request.text();
  let event: any;

  try {
    event = await stripeClient().webhooks.constructEventAsync(
      body,
      signature,
      webhookSecret,
      undefined,
      cryptoProvider
    );
  } catch (error) {
    return errorResponse(error instanceof Error ? error.message : "Invalid webhook signature", 400);
  }

  try {
    if (event.type === "checkout.session.completed") {
      await persistCheckoutAccess(event.data.object);
    }

    if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.deleted") {
      await syncSubscription(event.data.object);
    }

    return jsonResponse({ received: true });
  } catch (error) {
    return errorResponse(error instanceof Error ? error.message : "Webhook could not be processed", 500);
  }
});
