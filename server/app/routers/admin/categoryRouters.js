  let express = require("express");
const multer = require("multer");
// const upload = multer({ dest: "uploads/category" });

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads/category");
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
} = require("../../controllers/admin/categoryControlle");

let categoryRoutes = express.Router();

categoryRoutes.post("/insert", upload.single("categoryImage"), categoryInsert);

categoryRoutes.get("/view", categoryView);

categoryRoutes.get("/view/:id", categoryViewSingle);

categoryRoutes.post("/multy-delete", categoryMultyDelete);

categoryRoutes.post("/change-status", changeStatus);

categoryRoutes.get("/view/:id", categoryViewSingle);

// categoryRoutes.delete("/delete/:id", categoryDelete)

// categoryRoutes.put("/update/:id", categoryUpdate)

module.exports = { categoryRoutes };
