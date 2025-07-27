const mongoose = require("mongoose");

let colorSchema = new mongoose.Schema({
  colorName: {
    type: String,
    unique: true,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  colorCode: String,
  colorStatus: Boolean,
  colorOrder: Number,
});

let colorModel = mongoose.model("color", colorSchema);
module.exports = { colorModel };
