const router = require("express").Router();
const passport = require("passport");

module.exports = router.get(
  "/google",

  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  console.log("here", req.user.googleId);
  // res.redirect("https://localhost:8080/");
  res.send(req.user.googleId);
});
