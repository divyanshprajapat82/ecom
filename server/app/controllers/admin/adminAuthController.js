const { transporter } = require("../../config/mailConfig");
const { adminModel } = require("../../models/adminModel");

let myOTP = new Map();

let adminLogin = async (req, res) => {
  console.log(req.body);

  //   let { adminEmail } = req.body;

  let checkAdmin = await adminModel.findOne(req.body);

  let resObj;

  if (checkAdmin) {
    // console.log("yes");
    resObj = {
      status: 1,
      adminId: checkAdmin._id,
      msg: "Loged In!",
    };
  } else {
    // console.log("no");
    resObj = {
      status: 0,
      msg: "Invalid UserName or Password!",
    };
  }

  res.send(resObj);
};

let adminView = async (req, res) => {
  let data = await adminModel.find();
  resObj = {
    status: 1,
    msg: "Loged View",
    data,
  };

  res.send(resObj);
};

let forgotSendOTP = async (req, res) => {
  let { email } = req.body;
  console.log(email);

  let admin = await adminModel.findOne({ adminEmail: email });

  if (admin) {
    let otp = Math.floor(Math.random() * 99999999)
      .toString()
      .slice(0, 6);
    myOTP.set("MYOTP", otp);
    const info = await transporter.sendMail({
      from: '"Forgot Password OTP" <divyanshprajapat82@gmail.com>',
      to: email,
      subject: "Forgot Password OTP",
      text: "Forgot Password OTP", // plain‑text body
      html: `<p> OTP is :<b> ${otp}</b> </p>`, // HTML body
    });

    res.send({
      status: 1,
      msg: "OTP Send",
    });
  } else {
    res.send({
      status: 0,
      msg: "Email Not Found",
    });
  }

  res.send("Hello");
};

let varifyOTP = (req, res) => {
  let { otp } = req.body;
  let backendOTP = myOTP.get("MYOTP");
  if (backendOTP == otp) {
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

let resetPassword = async (req, res) => {
  let { email, newPassword } = req.body;

  let data = await adminModel.updateOne(
    { adminEmail: email },
    {
      $set: {
        adminPassword: newPassword,
      },
    }
  );

  res.send({
    status: 1,
    msg: "Your Password has been reset successfully",
  });
};

let changePassword = async (req, res) => {
  let { currentPassword, newPassword, adminID } = req.body;
  let admin = await adminModel.findOne({
    adminPassword: currentPassword,
    _id: adminID,
  });
  if (admin) {
    let data = await adminModel.updateOne(
      { _id: adminID },
      { $set: { adminPassword: newPassword } }
    );

    res.send({
      status: 1,
      msg: "Password changes successfully",
    });
  } else {
    res.send({
      status: 0,
      msg: "Invalid Old Password",
    });
  }
};

module.exports = {
  adminLogin,
  adminView,
  forgotSendOTP,
  varifyOTP,
  resetPassword,
  changePassword,
};
