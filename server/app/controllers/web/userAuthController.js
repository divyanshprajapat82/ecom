const bcrypt = require("bcrypt");
const { userModel } = require("../../models/userModel");
const { transporter } = require("../../config/mailConfig");
let jwt = require("jsonwebtoken");

const saltRounds = 10;
let myOTP = new Map();

let register = async (req, res) => {
  let { name, email, password, phone } = req.body;

  let hashPassword = bcrypt.hashSync(password, saltRounds);
  console.log(hashPassword);

  let resObj;

  try {
    let obj = {
      userName: name,
      userEmail: email,
      userPassword: hashPassword,
      userPhone: phone,
    };
    let user = await userModel.insertOne(obj);
    resObj = {
      status: 1,
      msg: "user Created",
      user,
    };
  } catch (err) {
    resObj = {
      status: 0,
      msg: "Email Id Already exists!",
      err,
    };
  }

  res.send(resObj);
};

let sendOtp = async (req, res) => {
  let { email } = req.body;
  console.log(email);

  let admin = await userModel.findOne({ userEmail: email });

  if (!admin) {
    let otp = Math.floor(Math.random() * 99999999)
      .toString()
      .slice(0, 6);
    myOTP.set("MYOTP", otp);
    const info = await transporter.sendMail({
      from: '"register OTP" <divyanshprajapat82@gmail.com>',
      to: email,
      subject: "register OTP",
      text: "register OTP",
      html: `<p> OTP is :<b> ${otp}</b> </p>`,
    });

    res.send({
      status: 1,
      msg: "OTP Send",
    });
  } else {
    res.send({
      status: 0,
      msg: "Email Id Already exists!",
    });
  }
};

let otpVerify = async (req, res) => {
  let { otp } = req.body;
  let backendOtp = myOTP.get("MYOTP");
  if (backendOtp == otp) {
    res.send({
      status: 1,
      msg: "OTP verified",
    });
  } else {
    res.send({
      status: 0,
      msg: "Invalid OTP. Please try again",
    });
  }
};

let login = async (req, res) => {
  let { email, password } = req.body;

  let checkEmail = await userModel.findOne({ userEmail: email });
  let resObj;
  if (checkEmail) {
    let dbPassword = checkEmail.userPassword;
    if (bcrypt.compareSync(password, dbPassword)) {
      let user = {
        userName: checkEmail.userName,
        id: checkEmail._id,
      };
      let token = jwt.sign(user, process.env.TOKENKEY);
      resObj = {
        status: 1,
        msg: "Loged In",
        user,
        token,
      };
    } else {
      resObj = {
        status: 0,
        msg: "Invalid Password. Please try again",
      };
    }
  } else {
    resObj = {
      status: 0,
      msg: "Invalid Email Id. Please try again",
    };
  }

  // console.log(email, password);

  res.send(resObj);

  // divyanshprajapat@gmail.com
  // divyanshKumar
  // divyanshkp@gmail.com
  // divyansh1234!
  // divyansh4321!
};

let googleLoginCreate = async (req, res) => {
  let { displayName, email, phoneNumber } = req.body;
  let checkEmail = await userModel.findOne({ userEmail: email });

  let resObj;

  if (checkEmail) {
    let user = {
      userName: checkEmail.userName,
      id: checkEmail._id,
    };
    let token = jwt.sign(user, process.env.TOKENKEY);
    resObj = {
      status: 1,
      msg: "Loged In",
      user,
      token,
    };
  } else {
    let obj = {
      userName: displayName,
      userEmail: email,
      userPhone: phoneNumber,
    };
    let myUser = await userModel.insertOne(obj);
    let user = {
      userName: myUser.userName,
      id: myUser._id,
    };
    let token = jwt.sign(user, process.env.TOKENKEY);
    resObj = {
      status: 1,
      msg: "Loged In",
      user,
      token,
    };
  }
  res.send(resObj);
};

let changePasswrd = async (req, res) => {
  let { oldPassword, newPassword, confirmPassword, userId } = req.body;

  let userData = await userModel.findOne({ _id: userId });
  // console.log(userData);
  let resObj;
  let dbPassword = userData.userPassword;
  if (bcrypt.compareSync(oldPassword, dbPassword)) {
    if (newPassword == confirmPassword) {
      let hashPassword = bcrypt.hashSync(newPassword, saltRounds);
      await userModel.updateOne(
        { _id: userId },
        {
          $set: {
            userPassword: hashPassword,
          },
        }
      );
      resObj = {
        status: 1,
        msg: "Password Changed",
      };
    } else {
      resObj = {
        status: 0,
        msg: "New Password and Confirm Password should be same",
      };
    }
  } else {
    resObj = {
      status: 0,
      msg: "Invalid Old Password. Please try again",
    };
  }

  // let
  // if()

  // console.log(req.body);

  res.send(resObj);
};

module.exports = {
  register,
  sendOtp,
  otpVerify,
  login,
  changePasswrd,
  googleLoginCreate,
};
