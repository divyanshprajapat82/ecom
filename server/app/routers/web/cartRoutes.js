let express = require("express");
const { checkToken } = require("../../middleware/checkToken");
const {
  addToCart,
  viewCart,
  deleteCart,
} = require("../../controllers/web/cartController");
let cartRoutes = express.Router();

cartRoutes.post("/add-to-cart", checkToken, addToCart);
cartRoutes.post("/view-cart", checkToken, viewCart);
cartRoutes.delete("/delete-cart/:cartId", deleteCart);

module.exports = { cartRoutes };
