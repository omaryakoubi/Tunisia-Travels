const router = require("express").Router();
const stripeKeys = require("../../config/stripeKeysBack");
const stripeKeyBack = require("../../config/stripeKeysBack");
const stripe = require("stripe")(stripeKeyBack.secretKey);

module.exports = router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1000;
  };
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});
