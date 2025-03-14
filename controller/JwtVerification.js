var jwt = require("jsonwebtoken");
require("dotenv").config();

const VerifyJWT = async (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const token = bearer[1];
      const DecodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = DecodedToken;
      next();
    } else {
      res.status(403).json({ message: "Unauthorized" });
    }
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "Unauthorized" });
  }
};
module.exports = { VerifyJWT };
