const router = require("express").Router();
const nodemailer = require("nodemailer");
const stripeKeyBack = require("../../config/stripeKeysBack");
const stripe = require("stripe")(stripeKeyBack.secretKey);
const NodemailerConfig = require("../../config/NodemailerConfig");
const HousesInfos = require("../../model/HousesInfos");

module.exports = router.post("/create-payment-intent", async (req, res) => {
  try {
    const id = req.body.id;
    const house = await HousesInfos.findById(id);
    let duration =
      (new Date(house.end).getTime() - new Date(house.start).getTime()) /
      (1000 * 60 * 60 * 24);

    let total = duration * house.price * 10;
    // console.log(total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
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
      text: `Reservation Done from ${house.start} to ${house.end} with the price of ${total}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`Email sent : ${info.response}`);
      }
    });

    const client_secret = paymentIntent.client_secret;
    res.send({
      clientSecret: client_secret,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
