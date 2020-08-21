const router = require("express").Router();
const nodemailer = require("nodemailer");
const User = require("../../model/User.js");
const NodemailerConfig = require("../../config/NodemailerConfig");

module.exports = router.get("/reset", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(500);
      }
      if (user.email) {
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
          subject: "Sending email using nodejs",
          text: "Hello I'm Omar from Tunisia-Travels how can i help u?",
        };

        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Email sent : " + info.response);
          }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
