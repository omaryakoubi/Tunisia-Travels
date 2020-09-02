const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HousesImagesSchema = new Schema({
    images: [{ type: String }]

})

const HousesImages = mongoose.model('HousesImages', HousesImagesSchema)

module.exports = HousesImages;