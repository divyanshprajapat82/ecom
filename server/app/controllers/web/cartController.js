const { cartModel } = require("../../models/cartModel");

let addToCart = async (req, res) => {
  let { color, id, image, price, qty, title, userId } = req.body;

  let checkproductInCart = await cartModel.findOne({
    productId: id,
    color,
    userId,
  });

  let resObj;

  if (checkproductInCart) {
    resObj = {
      status: 0,
      msg: "item Already in Cart",
    };
  } else {
    let obj = {
      color,
      productId: id,
      image,
      price,
      qty,
      title,
      userId,
    };

    let cart = await cartModel.insertOne(obj);

    resObj = {
      status: 1,
      msg: "item add in Cart",
      cart,
    };
  }

  res.send(resObj);
};

let viewCart = async (req, res) => {
  let { userId } = req.body;

  let cartData = await cartModel
    .find({ userId })
    .populate("color", "colorName");
  let obj = {
    status: 1,
    cartData,
    staticPath: process.env.PRODUCTIMAGEPATH,
  };
  res.send(obj);
};

let deleteCart = async (req, res) => {
  let cartId = req.params.cartId;
  console.log(cartId);

  let cart = await cartModel.deleteOne({ _id: cartId });
  let obj = {
    status: 1,
    msg: "Cart Item Deleted",
    cart,
  };
  res.send(obj);
};

module.exports = { addToCart, viewCart, deleteCart };
