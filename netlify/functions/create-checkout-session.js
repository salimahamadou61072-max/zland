// Stripe Checkout starter endpoint.
// IMPORTANT: Keep STRIPE_SECRET_KEY in Netlify environment variables.
// Never expose the secret key in browser JavaScript.
const Stripe = require("stripe");

const CATALOG = {
  // Replace these demo entries with your approved real products and prices (in cents).
  "desk-kit": { name: "ZLAND — Essential desk kit", unit_amount: 2990 },
  "travel-bottle": { name: "ZLAND — Everyday travel bottle", unit_amount: 1990 },
  "tech-organizer": { name: "ZLAND — Tech organizer", unit_amount: 2490 }
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return { statusCode: 503, body: JSON.stringify({ error: "Stripe is not configured yet." }) };
  }
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const payload = JSON.parse(event.body || "{}");
    if (!Array.isArray(payload.items) || payload.items.length === 0 || payload.items.length > 20) {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid cart." }) };
    }
    const line_items = payload.items.map((item) => {
      const product = CATALOG[item.id];
      const quantity = Number(item.quantity);
      if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
        throw new Error("Invalid product or quantity.");
      }
      return {
        price_data: {
          currency: "eur",
          product_data: { name: product.name },
          unit_amount: product.unit_amount
        },
        quantity
      };
    });
    const origin = event.headers.origin || process.env.URL;
    if (!origin || !/^https?:\/\//.test(origin)) throw new Error("Invalid site URL.");
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/?checkout=cancelled`
    });
    return { statusCode: 200, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ url: session.url }) };
  } catch (error) {
    return { statusCode: 400, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "Unable to create checkout session." }) };
  }
};

