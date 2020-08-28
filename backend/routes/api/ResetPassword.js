const router = require("express").Router();
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const NodemailerConfig = require("../../config/NodemailerConfig");
const User = require("../../model/User.js");

module.exports = router.post("/reset", async (req, res) => {
  try {
    if (req.body.email === "") throw new Error("email required !");
    const user = await User.findOne({ email: req.body.email });
    if (user === null) {
      console.error("email is not in the data-base");
      throw new Error("email not in the data-base");
    }
    user.resetPasswordToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();
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
               here : https://localhost:8080/resetform/${user.resetPasswordToken}`,
    };
    console.log("Sending Email");
    await transporter.sendMail(mailOptions);
    return res.status(200).json("recovery email sent");
  } catch (e) {
    console.error(e);
    return res.status(403).json({ Error: e });
  }
});

router.post("/reset/:token", async (req, res) => {
  try {
    const user = await User.findOne({ resetPasswordToken: req.params.token });
    if (!user) throw new Error("Invalid Token ! ");
    if (user.resetPasswordExpires < Date.now()) {
      user.resetPasswordToken = "";
      user.resetPasswordExpires = 0;
      await user.save();
      throw new Error("Token Expired !");
    }
    user.resetPasswordToken = "";
    user.resetPasswordExpires = 0;
    user.password = await bcrypt.hash(
      req.body.confirmedPassword,
      await bcrypt.genSalt(10)
    );
    await user.save();
    return res.send("New Password Setted");
  } catch (e) {
    console.error(e);
  }
});
