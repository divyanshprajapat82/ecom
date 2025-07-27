let express = require("express");
const {
  register,
  otpVerify,
  sendOtp,
  login,
  changePasswrd,
  googleLoginCreate,
} = require("../../controllers/web/userAuthController");
const multer = require("multer");
const { checkToken } = require("../../middleware/checkToken");

let userAuthRoutes = express.Router();
let uploads = multer();

userAuthRoutes.post("/register", uploads.none(), register);
userAuthRoutes.post("/send-otp", sendOtp);
userAuthRoutes.post("/otp-verify", otpVerify);
userAuthRoutes.post("/login", uploads.none(), login);
userAuthRoutes.post("/create-user-google-login", googleLoginCreate);
userAuthRoutes.post("/change-password", checkToken, changePasswrd);

module.exports = { userAuthRoutes };
