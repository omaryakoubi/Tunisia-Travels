const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const googleKeys = require("./passportGoogle+Keys");
const GoogleUser = require("../model/GoogleUser");

passport.serializeUser((user, done) => {
  done(null, user.id);
}),
  passport.deserializeUser((id, done) => {
    GoogleUser.findById(id).then((user) => {
      done(null, user);
    });
  });

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      // callbackURL: "https://localhost:8080/",
      clientID: googleKeys.google.clientID,
      clientSecret: googleKeys.google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callback function
      //Check if user exist in DataBase

      GoogleUser.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          // console.log("user is :", currentUser);
          done(null, currentUser);
        } else {
          // console.log("Google User already exist in database");
        }
      });

      //Create a user in DataBase
      new GoogleUser({
        username: profile.displayName,
        googleId: profile.id,
      })
        .save()
        .then((newUser) => {
          console.log("userCreated", newUser.googleId);
          // console.log(req.user.googleId);
          done(null, newUser);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  )
);
