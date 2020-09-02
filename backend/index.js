const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const payment = require("./routes/api/OnlinePayment");
const InfoTravel = require("./model/InfoTravel.js");
const morgan = require("morgan");
const HousesInfos = require("./model/HousesInfos.js")
const HousesImages = require("./model/HousesImages.js")
// const AdminInfos = require ("./model/admin.js")
const fs = require("fs");
const cloudinary = require("./cloudinary.config");
const path = require("path");

// import passport from 'passport'
// Intitialize the app
const app = express();

//OMAR
app.use(morgan("combined"));
const passportGoogle = require("./config/passportGoogle+");
const passportGoogleKeys = require("./config/passportGoogle+Keys");
const AuthSMRoutes = require("./routes/api/AuthSM");
const resetPassword = require("./routes/api/ResetPassword");
const InfoTravelRoutes = require("./routes/api/InforTravel");
const FacebookUser = require("./routes/api/FacebookUser");
const coockieSession = require("cookie-session");

// Middleware
// Form Data Middlware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Json Body Middleware
app.use(bodyParser.json());
// Cors Middleware
app.use(cors());
// Setting up the static directory
app.use(express.static(path.join(__dirname, "/client/public")));
app.use(
  coockieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [passportGoogleKeys.session.coockieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/Auth", AuthSMRoutes);
app.use("/api/users", resetPassword);
app.use("/api/payment", payment);
app.use("/api/facebook-auth", FacebookUser);
// app.use('/', InfoTravelRoutes)
////////////////////////////////////////////////////////////////////
// Use the passport Middleware
// app.use(passport.initialize());
// Bring in the passport Strategy
require("./config/passport")(passport);
// Bring in the Database Config
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((db) => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(`Unable to connect with this database ${err}`);
  });

// Bring in the Users route
const users = require("./routes/api/users");
const keys = require("./config/keys");
const multer = require("multer");
const User = require("./model/User");
app.use("/api/users", users);

//HOU i will reorganize them later {{SORRY}}
app.post("/travelinfo", (req, res) => {
  InfoTravel.create(req.body).then((item) => {
    res.send(item);
  });
});

app.get("/travelinfo", (req, res) => {
  InfoTravel.find({}).then((item) => {
    res.send(item);
  });
});
app.post("/houses", (req, res) => {
  HousesInfos.create(req.body).then((house) => {
    res.send(house);
  });
});

// app.get("/admin", (req, res)=>{
//   AdminInfos.find({}).then((item) =>{
//     res.send(item)
//   })
// })


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})
let upload = multer({ storage: storage })

app.post("/multiple", upload.array("files"), async (req, res) => {
  const uploader = async (path) =>
    await cloudinary.uploads(path, "files");
  const urls = [];
  const arr = req.files;
  for (let key in arr) {
    const path = arr[key].path;
    const newPath = await uploader(path);
    urls.push(newPath);
    fs.unlinkSync(path);
  }
  res.status(200).send(urls)
})



app.get("/houses", (req, res) => {
  HousesInfos.find({}).then((houses) => {
    res.send(houses);
  });
});

app.get("/houseSelected/:id", (req, res) => {
  HousesInfos.findById(req.params.id)
    .then((house) => {
      res.send(house)
    }).catch(err => console.log(err))
});


const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server started on port http://localhost:${port}`)
);
