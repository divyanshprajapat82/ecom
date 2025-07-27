const mongoose = require("mongoose");

let whyChooseUsSchema = new mongoose.Schema({
  whyChooseUsTitle: {
    type: String,
    unique: true,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  whyChooseUsImage: String,
  whyChooseUsStatus: Boolean,
  whyChooseUsOrder: Number,
  whyChooseUsDescription: String,
});

let whyChooseUsModel = mongoose.model("whyChooseUs", whyChooseUsSchema);
module.exports = { whyChooseUsModel };
