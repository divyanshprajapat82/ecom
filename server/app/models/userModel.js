const mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      // required: true,
      minLength: 2,
      maxLength: 40,
    },
    userEmail: {
      type: String,
      unique: true,
      required: true,
      minLength: 4,
      maxLength: 80,
    },
    userPassword: {
      type: String,
      // required: true,
      minLength: 6,
      //   maxLength: 10,
    },
    userPhone: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

let userModel = mongoose.model("user", userSchema);
module.exports = { userModel };
