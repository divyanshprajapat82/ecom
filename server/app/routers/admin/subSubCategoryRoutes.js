let express = require("express");
const multer = require("multer");
// const upload = multer({ dest: "uploads/category" });

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads/subSubCategory");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

let upload = multer({ storage: storage });

// const {
//   categoryUpdate,
//   categoryMultyDelete,
//   categoryDelete,
//   categoryViewSingle,
//   categoryView,
//   categoryInsert,
//   changeStatus,
//   // subSubcategoryViewSingle,
// } = require("../../controllers/admin/subCategoryControlle");
// const {} = require("../../controllers/admin/subCategoryControlle");
// const {
//   subCategoryInsert,
//   subCategoryView,
//   parentCategory,
// } = require("../../controllers/admin/subCategoryControlle");
const {
  subSubCategoryInsert,
  parentSubCategory,
  subSubCategoryView,
  parentCategory,
  subSubCategoryUpdate,
  subSubcategoryViewSingle,
} = require("../../controllers/admin/subSubCategoryControlle");

let subSubCategoryRoutes = express.Router();

subSubCategoryRoutes.post(
  "/insert",
  upload.single("subSubCategoryImage"),
  subSubCategoryInsert
);

subSubCategoryRoutes.get("/view", subSubCategoryView);
subSubCategoryRoutes.get("/parentcategory", parentCategory);
subSubCategoryRoutes.get("/parentsubcategory", parentSubCategory);

subSubCategoryRoutes.get("/view/:id", subSubcategoryViewSingle);

// subCategoryRoutes.post("/multy-delete", categoryMultyDelete);

// subCategoryRoutes.post("/change-status", changeStatus);

// subCategoryRoutes.get("/view/:id", categoryViewSingle);

// categoryRoutes.delete("/delete/:id", categoryDelete)

subSubCategoryRoutes.put("/update/:id", subSubCategoryUpdate);

module.exports = { subSubCategoryRoutes };
