const router = require("express").Router();
const nodemailer = require("nodemailer");
const stripeKeyBack = require("../../config/stripeKeysBack");
const stripe = require("stripe")(stripeKeyBack.secretKey);
const NodemailerConfig = require("../../config/NodemailerConfig");

module.exports = router.post("/create-payment-intent", async (req, res) => {
  try {
    const { items } = req.body;

    const calculateOrderAmount = (items) => {
      //WE NEED TO REPLACE THIS WITH THE CALCULATION OF HOW MANY DAYS THE CUSTOMER WILL STAY IN THE HOUSE * THE PRICE.
      return 1000;
    };
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "usd",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: NodemailerConfig.email,
        pass: NodemailerConfig.pass,
      },
    });

    const mailOptions = {
      from: NodemailerConfig.pass,
      to: req.body.email,
      subject: "Payment status",
      text: "You payment is done thank you",
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.err(err);
      } else {
        res.send(`Email sent : ${info.response}`);
      }
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    res.status(500).send(e);
  }
});
