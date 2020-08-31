const router = require("express").Router();
const passport = require("passport");
const { $where } = require("../../model/User");

module.exports = router.get(
  "/google",

  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect(`https://localhost:8080/?googleId=${req.user.googleId}`);
});
