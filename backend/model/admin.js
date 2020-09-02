const mongoose = require('mongoose');
const { string } = require('joi');
const Schema = mongoose.Schema
// Create the User Model
const AdminSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type:Number,
        required:true
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