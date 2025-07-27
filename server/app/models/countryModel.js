const mongoose = require("mongoose");

let countrySchema = new mongoose.Schema({
    countryName:{
        type: String,
        unique: true,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    countryStatus: Boolean,
    countryOrder: Number
})

let countryModel = mongoose.model("country", countrySchema)
module.exports = {countryModel}