const router = require("express").Router();
const mongoose = require("mongoose");
const FacebookUser = require("../../model/FacebookUser");
module.exports = router.post("/user", async (req, res) => {
  try {
    console.log(req.body.data);
    const user = await FacebookUser.findOne({ id: req.body.data.id });
    const omar = req.body.data;
    if (!user) {
      await new FacebookUser({
        name: req.body.data.name,
        id: req.body.data.id,
      }).save();
    } else {
      console.log("User already exist in the database");
    }
  } catch (error) {
    console.log(error);
  }
});
