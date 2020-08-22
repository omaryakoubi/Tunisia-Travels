const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoTravelSchema = new Schema({
    check: { type: Number, required: true },
    dest: { type: String, required: true },
    guestsNum: { type: Array, required: true },
})

const InfoTravel = mongoose.model('InfoTravel', InfoTravelSchema)

module.exports = InfoTravel;