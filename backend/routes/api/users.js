const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../config/keys").secret;
const User = require("../../model/User.js");
/**
 * @route POST api/users/signup
 * @desc SignUp the User
 * @access Public
 */
router.post("/signup", (req, res) => {
  let { name, username, email, password, cpassword, age, phone } = req.body;

  // Check for the password

  // Check for the confirm password
  if (password !== cpassword) {
    return res.status(400).json({
      msg: "Password do not match.",
    });
  }
  // Check for the Age
  if (age < 18) {
    return res.status(400).json({
      msg: "Age have to be greater than 18",
    });
  }
  // Check for the phone
  if (phone.length < 8) {
    return res.status(400).json({
      msg: "Enter valid phone number Please",
    });
  }

  // Check for the unique Username
  User.findOne({ username: username }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "Username is already taken.",
      });
    }
  });
  // Check for the unique Email
  User.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "Email already registered.Did you forget your password?",
      });
    }
  });
  // The data is valid and new we can register the user
  let newUser = new User({
    name,
    username,
    password,
    email,
    phone,
    age,
  });
  // Hash the password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
        return res.status(201).json({
          success: true,
          msg: "User is now registerd.",
        });
      });
    });
  });
});

/**
 * @route POST api/users/login
 * @desc Login the User
 * @access Public
 */
router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "Username is not found.",
        success: false,
      });
    }
    // If there is user we are now going to compare passwords
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        //User's password is correct and we need to send the JSON Token for that user
        const payload = {
          _id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          age: user.age,
        };
        jwt.sign(
          payload,
          key,
          {
            expiresIn: 604800,
          },
          (err, token) => {
            res.status(200).json({
              success: true,
              token: `Bearer ${token}`,
              msg: "You are now logged in",
            });
          }
        );
      } else {
        return res.status(404).json({
          msg: "Incorrect Password",
          success: false,
        });
      }
    });
  });
});
/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Public
 */
router.get(
  "/profile",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    return res.json({
      user: req.user,
    });
  }
);

module.exports = router;
