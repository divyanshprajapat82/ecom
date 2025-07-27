// const { sliderData } = require("../../controllers/web/homeController");

let express = require("express");
const {
  sliderData,
  homeProduct,
  megaMenu,
  menuData,
} = require("../../controllers/web/homeController");

let homepageRoutes = express.Router();

homepageRoutes.get("/slider", sliderData);
homepageRoutes.get("/home-product", homeProduct);
homepageRoutes.get("/mega-menu", megaMenu);
homepageRoutes.get("/menu-data/:slug", menuData);

module.exports = { homepageRoutes };
