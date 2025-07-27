const mongoose = require("mongoose");

let cartSchema = new mongoose.Schema({
  title: {
    type: String,
    // unique: true,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  image: String,
  cartStatus: Boolean,
  price: Number,
  qty: Number,
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "product",
  },
  color: {
    type: mongoose.Types.ObjectId,
    ref: "color",
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

let cartModel = mongoose.model("cart", cartSchema);
module.exports = { cartModel };
