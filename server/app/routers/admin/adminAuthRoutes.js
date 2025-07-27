let express = require("express");
const {
  adminLogin,
  adminView,
  forgotSendOTP,
  varifyOTP,
  resetPassword,
  changePassword,
} = require("../../controllers/admin/adminAuthController");

let adminAuthRoutes = express.Router();

adminAuthRoutes.post("/login", adminLogin);
adminAuthRoutes.get("/view", adminView);
adminAuthRoutes.post("/send-otp", forgotSendOTP);
adminAuthRoutes.post("/verify-otp", varifyOTP);
adminAuthRoutes.post("/reset-password", resetPassword);
adminAuthRoutes.post("/change-password", changePassword);

module.exports = { adminAuthRoutes };
