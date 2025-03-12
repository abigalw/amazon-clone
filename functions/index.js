const dotenv = require("dotenv")
dotenv.config()
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express")
const cors = require("cors")
const functions = require("firebase-functions");
const { setGlobalOptions } = require("firebase-functions/v2/options");
const admin = require("firebase-admin");
admin.initializeApp();


admin.initializeApp();
const stripe = require("stripe")(process.env.STRIPE_KEY);



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

exports.api = onRequest(app);