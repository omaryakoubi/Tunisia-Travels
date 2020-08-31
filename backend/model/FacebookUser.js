const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FacebookUserSchema = new Schema({
  name: {
    required: true,
  },
  id: {
    required: true,
    unique: true,
  },
});

const FacebookUser = mongoose.model("FacebookUser", FacebookUserSchema);
module.exports = FacebookUser;
