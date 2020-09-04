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
  
  Router.post("/announce/:id", (req, res) => {
    HousesInfos.findByIdAndUpdate(
      req.params.id,
      { show: true }
    ).then((houses) => {
      console.log(houses)
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