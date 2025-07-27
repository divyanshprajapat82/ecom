let express = require("express");
const { userAuthRoutes } = require("./userAuthRoutes");
const { homepageRoutes } = require("./homepageRoutes");
const { cartRoutes } = require("./cartRoutes");
const { orderRoutes } = require("./orderRoutes");
// const { homepageRoutes } = require("c:/Users/COMP/Downloads/homepageRoutes");

let webRoutes = express.Router();

webRoutes.use("/user", userAuthRoutes); //http://localhost:8000/web/user
webRoutes.use("/home", homepageRoutes); //http://localhost:8000/web/home
webRoutes.use("/cart", cartRoutes); //http://localhost:8000/web/cart
webRoutes.use("/order", orderRoutes); //http://localhost:8000/web/cart

module.exports = { webRoutes };
