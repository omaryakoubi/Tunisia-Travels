const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FacebookUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
});

const FacebookUser = mongoose.model("FacebookUser", FacebookUserSchema);
module.exports = FacebookUser;
