let express = require("express");
const { adminRoutes } = require("./app/routers/admin/adminRoutes");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const { adminModel } = require("./app/models/adminModel");
const { webRoutes } = require("./app/routers/web/webRoutes");

let app = express();
app.use(cors({
  origin: "https://ecom-eo3v.vercel.app",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.use("/admin", adminRoutes); // http://localhost:8000/admin
app.use("/web", webRoutes); // http://localhost:8000/web

app.use("/uploads/category", express.static("uploads/category"));
app.use("/uploads/subCategory", express.static("uploads/subCategory"));
app.use("/uploads/subSubCategory", express.static("uploads/subSubCategory"));
app.use("/uploads/whyChooseUs", express.static("uploads/whyChooseUs"));
app.use("/uploads/product", express.static("uploads/product"));
app.use("/uploads/slider", express.static("uploads/slider"));

// app.listen(process.env.PORT)

mongoose
  .connect("mongodb://127.0.0.1:27017/ecomfurniture")
  .then(async (res) => {
    let checkAdmin = await adminModel.find();
    if (checkAdmin.length == 0) {
      adminModel.insertOne({
        adminEmail: process.env.ADMINEMAIL,
        adminPassword: process.env.ADMINPASSWORD,
      });
    }

    console.log("DB Connected");
    app.listen(process.env.PORT);
  });
