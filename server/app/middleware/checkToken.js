let jwt = require("jsonwebtoken");
let checkToken = (req, res, next) => {
  console.log(req.headers.authorization);
  try {
    let token = req.headers.authorization.split(" ")[1];
    let decoded = jwt.verify(token, process.env.TOKENKEY);
    req.body.userId = decoded.id;
    next();
  } catch (err) {
    console.log(err);
  }
  // if (decoded.id) {
  //   next();
  // }
  // res.send("Token Check Login");
};

module.exports = { checkToken };
