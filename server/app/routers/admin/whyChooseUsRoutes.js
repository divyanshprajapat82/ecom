let express = require("express");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads/whyChooseUs");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

let upload = multer({ storage: storage });

const {
  countryUpdate,
  countryMultyDelete,
  countryDelete,
  countryViewSingle,
  countryView,
  countryInsert,
} = require("../../controllers/admin/countryControlle");
const { whyChooseUInsert, whyChooseUView } = require("../../controllers/admin/whyChooseUsControlle");
let whyChooseUsRoutes = express.Router();

whyChooseUsRoutes.post(
  "/insert",
  upload.single("whyChooseUsImage"),
  whyChooseUInsert
);

whyChooseUsRoutes.get("/view", whyChooseUView);

// whyChooseUsRoutes.get("/view/:id", whyChooseUViewSingle);

// whyChooseUsRoutes.delete("/delete/:id", whyChooseUDelete);

// whyChooseUsRoutes.post("/multy-delete", whyChooseUMultyDelete);

// whyChooseUsRoutes.put("/update/:id", whyChooseUUpdate);

module.exports = { whyChooseUsRoutes };
