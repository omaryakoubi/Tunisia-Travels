const router = require("express").Router();
const passport = require("passport");

module.exports = router.get(
  "/google",

  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    console.log("pfff malla 7ala");
    res.send(res.user);
  }
);
