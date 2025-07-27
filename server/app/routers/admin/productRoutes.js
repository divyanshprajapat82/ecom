let express = require("express");
const multer = require("multer");
const {
  productInsert,
  parentCategory,
  subCategory,
  subSubCategory,
  productMaterial,
  productColor,
  productView,
  productSingleView,
  productUpdate,
} = require("../../controllers/admin/productController");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads/product");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

let upload = multer({ storage: storage });

let producrRoutes = express.Router();

producrRoutes.post(
  "/insert",
  upload.fields([
    {
      name: "productImage",
      maxCount: 1,
    },
    {
      name: "productBackImage",
      maxCount: 1,
    },
    {
      name: "productGalleryImage",
      maxCount: 10,
    },
  ]),
  productInsert
);

producrRoutes.get("/view", productView);
producrRoutes.get("/view/:id", productSingleView);
producrRoutes.get("/parent-category", parentCategory);
producrRoutes.get("/sub-category/:id", subCategory);
producrRoutes.get("/sub-sub-category/:id", subSubCategory);
producrRoutes.get("/product-material", productMaterial);
producrRoutes.get("/product-color", productColor);
// producrRoutes.get("/single-product", singleProduct);
producrRoutes.put(
  "/update/:id",
  upload.fields([
    {
      name: "productImage",
      maxCount: 1,
    },
    {
      name: "productBackImage",
      maxCount: 1,
    },
    {
      name: "productGalleryImage",
      maxCount: 10,
    },
  ]),
  productUpdate
);

module.exports = { producrRoutes };
