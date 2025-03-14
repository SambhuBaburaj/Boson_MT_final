const bcrypt = require("bcrypt");
const { userModel } = require("../model/userSchema");

const Signup = async (req, res) => {
  try {
    const userData = req.body;
    const userExist = await userModel.findOne({
      user_email: userData.user_email,
    });
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    console.log(hashedPassword);
    userData.password = hashedPassword;
    const user = await new userModel(userData);
    user.save().then((data) => {
      return res.status(200).json({ message: "User created successfully" });
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = { Signup };
