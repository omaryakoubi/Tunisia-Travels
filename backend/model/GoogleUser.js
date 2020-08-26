const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create the User Model
const GoogleUserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: String,

  password: String,
  cpassword: String,

  googleId: {
    type: String,
    unique: true,
    required: true,
  },
});

const GoogleUser = mongoose.model("GoogleUser", GoogleUserSchema);
module.exports = GoogleUser;
