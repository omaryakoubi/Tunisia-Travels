const router = require("express").Router();
const Reviews = require("../../model/Reviews.js");

module.exports = router.post("/omar", async (req, res) => {
  try {
    const text = req.body.text;

    if (review.length <= 0) {
      throw new Error(
        "Just for testing : Your review lenght is less or equal to zero"
      );
    } else {
      const omar = new Reviews({ text: text });
      await omar.save((err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
      console.log("added");
    }
  } catch (e) {
    console.error(e);
  }
});
