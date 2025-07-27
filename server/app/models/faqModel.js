const mongoose = require("mongoose");

let faqSchema = new mongoose.Schema({
    faqQuestion: {
        type: String,
        unique: false,
        required: true,
        minLength: 5,
        maxLength: 200,  
    },
    faqAnswer: {
        type: String,
        unique: false,
        required: true,
        minLength: 5,
        maxLength: 500, 
    },
    faqStatus: Boolean,
    faqOrder: Number
})

let faqModel = mongoose.model('faq',faqSchema)
module.exports = {faqModel}