import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders, errorResponse, jsonResponse } from "../_shared/cors.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") || "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || ""
);

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

async function sendSupportEmail(ticket: {
  email: string;
  page: string;
  active_test: string;
  current_result: string;
  message: string;
}) {
  const apiKey = Deno.env.get("RESEND_API_KEY");
  const to = Deno.env.get("SUPPORT_EMAIL");
  const from = Deno.env.get("SUPPORT_FROM_EMAIL");

  if (!apiKey || !to || !from) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `PsycheIQ Support: ${ticket.message.slice(0, 52)}`,
      text: [
        "PsycheIQ support request",
        "",
        `Reply to: ${ticket.email}`,
        `Page: ${ticket.page}`,
        ticket.active_test ? `Active test: ${ticket.active_test}` : "",
        ticket.current_result ? `Current result: ${ticket.current_result}` : "",
        "",
        "Message:",
        ticket.message,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  return response.ok;
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
    const ticket = {
      user_id: (await getAuthenticatedUserId(request)) || null,
      email: cleanText(body.email).toLowerCase(),
      page: cleanText(body.page),
      active_test: cleanText(body.activeTest),
      current_result: cleanText(body.currentResult),
      message: cleanText(body.message),
    };

    if (!ticket.email || !ticket.message) {
      return errorResponse("Email and message are required", 400);
    }

    const { data, error } = await supabase
      .from("support_tickets")
      .insert(ticket)
      .select("id")
      .single();

    if (error) throw error;

    const emailed = await sendSupportEmail(ticket);

    return jsonResponse({
      ok: true,
      ticketId: data.id,
      emailed,
    });
  } catch (error) {
    return errorResponse(error instanceof Error ? error.message : "Support ticket could not be sent", 500);
  }
});
