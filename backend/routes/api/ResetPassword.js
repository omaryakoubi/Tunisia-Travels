const router = require("express").Router();
const nodemailer = require("nodemailer");
const NodemailerConfig = require("../../config/NodemailerConfig");
const bcrypt = require("bcryptjs");
const User = require("../../model/User.js");

module.exports = router.get("/reset", (req, res) => {
  const tempPassword = Math.random().toString(36).slice(-8);
  bcrypt.hash(tempPassword, 10).then((hash) => {
    User.findOneAndUpdate({ email: req.body.email }, { password: hash })
      .then(() => {
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
          text: `You can access your account using this code please dont share you privacy will be violated.
          Passcode:  ${tempPassword}`,
        };

        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.log(err);
          } else {
            res.send(`Email sent : ${info.response}`);
          }
        });
      })
      .catch((err) => res.status(500).send(err));
  });
});
