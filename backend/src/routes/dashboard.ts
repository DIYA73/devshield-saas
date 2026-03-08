import { Router } from "express";
import Stripe from "stripe";

const router = Router();

const stripe = new Stripe(process.env.STRIPE_SECRET as string);

router.post("/create-checkout-session", async (req, res) => {

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",

    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "DevShield Pro"
          },
          unit_amount: 1900,
          recurring: {
            interval: "month"
          }
        },
        quantity: 1
      }
    ],

    success_url: "http://localhost:5173/dashboard",
    cancel_url: "http://localhost:5173/billing"

  });

  res.json({ url: session.url });

});

export default router;