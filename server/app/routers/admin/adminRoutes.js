let express = require("express");
const { colorRoutes } = require("./colorRoutes");
const { materialRoutes } = require("./materialRoutes");
const { countryRoutes } = require("./countryRouters");
const { faqRoutes } = require("./faqRoutes");
const { categoryRoutes } = require("./categoryRouters");
const { subCategoryRoutes } = require("./subCategoryRoutes");
const { subSubCategoryRoutes } = require("./subSubCategoryRoutes");
const { whyChooseUsRoutes } = require("./whyChooseUsRoutes");
const { adminAuthRoutes } = require("./adminAuthRoutes");
const { producrRoutes } = require("./productRoutes");
const { skiderRoutes } = require("./sliderRoutes");

let adminRoutes = express.Router();

adminRoutes.use("/auth", adminAuthRoutes);
adminRoutes.use("/color", colorRoutes);
adminRoutes.use("/material", materialRoutes);
adminRoutes.use("/category", categoryRoutes);
adminRoutes.use("/subcategory", subCategoryRoutes);
adminRoutes.use("/subsubcategory", subSubCategoryRoutes);
adminRoutes.use("/slider", skiderRoutes);
adminRoutes.use("/product", producrRoutes);
adminRoutes.use("/whyChooseUs", whyChooseUsRoutes);
adminRoutes.use("/country", countryRoutes);
adminRoutes.use("/faq", faqRoutes);

module.exports = { adminRoutes };
