const express = require("express")
const Router = express.Router();
const HousesInfos = require('../../model/HousesInfos')



Router.get("/announce", (req, res) => {
    HousesInfos.find({
      show: false,
    }).then((houses) => {
      res.send(houses);
    });
  });
  
  Router.post("/announce", (req, res) => {
    HousesInfos.findOneAndUpdate(
      { show: false },
      { show: true }
    ).then((houses) => {
      res.send(houses);
    });
  });
  
  Router.delete("/announce/:id", (req, res) => {
    HousesInfos.findByIdAndDelete(req.params.id)
      .then((house) => {
        res.send(house);
      })
      .catch((err) => console.log(err));
  });

module.exports = Router