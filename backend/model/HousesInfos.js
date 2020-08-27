const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HousesInfosSchema = new Schema({
    governorate: { type: String },
    city: { type: String },
    adress: { type: String },
    guests: { type: Number },
    typeOfPlace: { type: String },
    optionPet: { type: Boolean },
    houseName: { type: String },
    start: { type: String },
    end: { type: String }
})

const HousesInfos = mongoose.model('HousesInfos', HousesInfosSchema)

module.exports = HousesInfos;