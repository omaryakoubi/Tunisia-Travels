const mongoose = require('mongoose');
const { string } = require('joi');
const Schema = mongoose.Schema
// Create the User Model
const AdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    file: {
        type: String
    }
})
module.exports = Admin = mongoose.model('admin', AdminSchema)