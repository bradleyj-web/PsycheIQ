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
    apiVersion: "2026-02-25.preview" as any,
    httpClient: Stripe.createFetchHttpClient(),
  });
}

function cleanText(value: unknown) {
  return String(value || "").trim();
}

async function getAuthenticatedUserId(request: Request) {
  const header = request.headers.get("Authorization") || "";
  const token = header.replace(/^Bearer\s+/i, "");
  if (!token) return "";

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return "";
  return data.user.id;
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
    const requestedMode = cleanText(body.mode) === "member" ? "member" : "core";
    const testId = cleanText(body.testId);
    const intent = cleanText(body.intent) || "result";
    const email = cleanText(body.email).toLowerCase();
    const successUrl = cleanText(body.successUrl);
    const cancelUrl = cleanText(body.cancelUrl);
    const userId = await getAuthenticatedUserId(request);
    const priceId =
      requestedMode === "member"
        ? Deno.env.get("STRIPE_MEMBER_PRICE_ID")
        : Deno.env.get("STRIPE_CORE_PRICE_ID");

    if (!priceId) return errorResponse("Missing Stripe price configuration", 500);
    if (!successUrl || !cancelUrl) return errorResponse("Missing checkout return URL", 400);

    const metadata = {
      app: "psycheiq",
      access_type: requestedMode,
      test_id: testId,
      intent,
      user_id: userId,
      email,
    };

    const sessionParams: any = {
      mode: requestedMode === "member" ? "subscription" : "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      managed_payments: { enabled: true },
      customer_email: email || undefined,
      client_reference_id: userId || email || undefined,
      success_url: successUrl,
      cancel_url: cancelUrl,
      allow_promotion_codes: true,
      metadata,
      subscription_data:
        requestedMode === "member"
          ? {
              metadata,
            }
          : undefined,
    };

    const session = await stripeClient().checkout.sessions.create(sessionParams);

    return jsonResponse({ url: session.url });
  } catch (error) {
    return errorResponse(error instanceof Error ? error.message : "Checkout could not start", 500);
  }
});
