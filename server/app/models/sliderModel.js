const mongoose = require("mongoose");

let sliderSchema = new mongoose.Schema({
  sliderTitle: {
    type: String,
    unique: true,
    required: true,
    minLength: 2,
    maxLength: 40,
  },
  sliderImage: String,
  sliderStatus: Boolean,
  sliderOrder: Number,
});

let sliderModel = mongoose.model("slider", sliderSchema);
module.exports = { sliderModel };
