const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoTravelSchema = new Schema({
    check: { type: Object },
    dest: { type: Object },
    guestsNum: { type: Array },
})

const InfoTravel = mongoose.model('InfoTravel', InfoTravelSchema)

module.exports = InfoTravel;