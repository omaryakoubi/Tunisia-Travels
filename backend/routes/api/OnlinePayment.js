const router = require("express").Router();
const stripeKeys = require("../../config/stripeKeysBack");
const stripeKeyBack = require("../../config/stripeKeysBack");
const stripe = require("stripe")(stripeKeyBack.secretKey);

module.exports = router.post("/create-payment-intent", async (req, res) => {
  try {
    const { items } = req.body;
    console.log("omar", req.body);

    const calculateOrderAmount = (items) => {
      //WE NEED TO REPLACE THIS WITH THE CALCULATION OF HOW MANY DAYS THE CUSTOMER WILL STAY IN THE HOUSE * THE PRICE.
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
  } catch (e) {
    res.status(500).send(e);
  }
});
