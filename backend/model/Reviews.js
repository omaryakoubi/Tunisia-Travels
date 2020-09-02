const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewsSchema = new Schema({
  text: {
    type: String,
    require: true,
  },
});

const Reviews = mongoose.model("Reviews", ReviewsSchema);

module.exports = Reviews;
