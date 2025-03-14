var jwt = require("jsonwebtoken");
const { token } = require("morgan");
const { userModel } = require("../model/userSchema");
const bcrypt = require("bcrypt");
require("dotenv").config();
const Signin = async (req, res) => {
  try {
    const UserData = req.body;
    const UserInDB = await userModel.findOne({
      user_email: UserData.user_email,
    });
    if (!UserInDB) {
      return res.status(400).json({ message: "User does not exist" });
    }
    if (!UserInDB.is_activated) {
      return res.status(400).json({ message: "User is not activated" });
    }
    const isMatch = await bcrypt.compare(UserData.password, UserInDB.password);
    if (isMatch) {
      const token = jwt.sign(
        {
          data: UserData,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30D" }
      );

      return res.status(200).json({ token: token });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { Signin };
