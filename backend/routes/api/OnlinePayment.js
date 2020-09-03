const router = require("express").Router();
const nodemailer = require("nodemailer");
const stripeKeyBack = require("../../config/stripeKeysBack");
const stripe = require("stripe")(stripeKeyBack.secretKey);
const NodemailerConfig = require("../../config/NodemailerConfig");
const HousesInfos = require("../../model/HousesInfos");

module.exports = router.post("/create-payment-intent", async (req, res) => {
  try {
    const { items } = req.body;
    const id = req.body.id;
    console.log(req.body);

    const calculateOrderAmount = (items) => {
      console.log("lennaaaaaaaaaa", items.id);
      HousesInfos.findById(item.id)
        .then((house) => {
          var duration =
            (new Date(house.end).getTime() - new Date(house.start).getTime()) /
            (1000 * 60 * 60 * 24);
          console.log("omar before", duration, house.start, house.end);
          let total = duration * house.price * 10;

          return total;
        })
        .catch((error) => {
          console.error(error);
        });
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
      text: `Reservation Done from ${this.house.start} to ${this.house.end} with the price of ${this.total}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.send(err);
      } else {
        res.send(`Email sent : ${info.response}`);
      }
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
