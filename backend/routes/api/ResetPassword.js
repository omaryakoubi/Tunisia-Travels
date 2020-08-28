// const router = require("express").Router();
// const nodemailer = require("nodemailer");
// const NodemailerConfig = require("../../config/NodemailerConfig");
// const bcrypt = require("bcryptjs");
// const User = require("../../model/User.js");

// module.exports = router.post("/reset", (req, res) => {
//   console.log(req.body);
//   const tempPassword = Math.random().toString(36).slice(-8);
//   bcrypt.hash(tempPassword, 10).then((hash) => {
//     User.findOneAndUpdate({ email: req.body.email }, { password: hash })
//       .then(() => {
//         const transporter = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//             user: NodemailerConfig.email,
//             pass: NodemailerConfig.pass,
//           },
//         });

//         const mailOptions = {
//           from: NodemailerConfig.pass,
//           to: req.body.email,
//           subject: "Reset Password Successed!",
//           text: `You can access your account using this code please dont share you privacy will be violated.
//           Passcode:  ${tempPassword}`,
//         };

//         transporter.sendMail(mailOptions, (err, info) => {
//           if (err) {
//             res.err(err);
//           } else {
//             res.send(`Email sent : ${info.response}`);
//           }
//         });
//       })
//       .catch((err) => res.status(500).send(err));
//   });
// });

const router = require("express").Router();
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const NodemailerConfig = require("../../config/NodemailerConfig");
const User = require("../../model/User.js");

module.exports = router.post("/reset", (req, res) => {
  if (req.body.email === "") {
    res.status(400).send("email required !");
  }
  console.error(req.body.email);
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        console.error("email is not in the data-base");
        res.status(403).send("email not in the data-base");
      } else {
        const token = crypto.randomBytes(20).toString("hex");

        User.update({
          resetPasswordToken: token,
          resetPasswordExpires: Date.now + 3600000,
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
          subject: "Reset Password Successed!",
          text: `You can access your account using this code please dont share you privacy will be violated.
               here : http://localhost:5000/api/users/reset/${token}`,
        };

        console.log("Sending Email");

        transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
            res.err(err);
          } else {
            res.send(`Email sent : ${info.response}`);
          }
        });
      }
    })

    .catch((err) => {
      console.error(err);
    });
});
