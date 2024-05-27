const { name } = require("ejs")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = mongoose.model(
    "User",
    new Schema({
        name: { type: String, required: true},
        email: { type: String, required: true},
        password: { type: String, required: true}
    }) 
)

