import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { setGlobalOptions } from "firebase-functions/v2/options";
import stripePackage from "stripe";
import { onRequest } from "firebase-functions/v2/https";



dotenv.config();
/* eslint-disable no-undef */
const stripe = stripePackage(process.env.STRIPE_KEY);
/* eslint-enable no-undef */


const app = express();
setGlobalOptions({maxInstances: 10 });
app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received for total:", total);

  if (!total || total <= 0) {
    return res.status(400).json({ error: "Invalid total amount" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: "Payment failed" });
  }
});

export const api = onRequest(app);