const mongoose = require("mongoose");

let materialSchema = new mongoose.Schema({
  materialName: {
    type: String,
    unique: true,
    required: true,
    minLength: 5,
    maxLength: 40,
  },
  materialStatus: Boolean,
  materialOrder: Number,
});

let materialModel = mongoose.model("materia", materialSchema);
module.exports = { materialModel };
