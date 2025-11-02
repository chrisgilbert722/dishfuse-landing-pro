// Placeholder checkout API for now — returns success redirect.
// When Stripe is ready, replace with real Checkout Session creation.

export async function POST(req) {
  try {
    // const { email, name, plan } = await req.json(); // (unused in placeholder)
    return new Response(JSON.stringify({ url: "/login?success=true" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ url: "/login?success=true" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
