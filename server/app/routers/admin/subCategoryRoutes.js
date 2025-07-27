let express = require("express");
const multer = require("multer");
// const upload = multer({ dest: "uploads/category" });

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads/subCategory");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

let upload = multer({ storage: storage });

const {
  categoryUpdate,
  categoryMultyDelete,
  categoryDelete,
  categoryViewSingle,
  categoryView,
  categoryInsert,
  changeStatus,
} = require("../../controllers/admin/subCategoryControlle");
// const {} = require("../../controllers/admin/subCategoryControlle");
const {
  subCategoryInsert,
  subCategoryView,
  parentCategory,
} = require("../../controllers/admin/subCategoryControlle");

let subCategoryRoutes = express.Router();

subCategoryRoutes.post(
  "/insert",
  upload.single("subCategoryImage"),
  subCategoryInsert
);

subCategoryRoutes.get("/view", subCategoryView);
subCategoryRoutes.get("/parentcategory", parentCategory);

// subCategoryRoutes.get("/view/:id", categoryViewSingle);

// subCategoryRoutes.post("/multy-delete", categoryMultyDelete);

// subCategoryRoutes.post("/change-status", changeStatus);

// subCategoryRoutes.get("/view/:id", categoryViewSingle);

// categoryRoutes.delete("/delete/:id", categoryDelete)

// categoryRoutes.put("/update/:id", categoryUpdate)

module.exports = { subCategoryRoutes };
