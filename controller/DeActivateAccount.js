const { userModel } = require("../model/userSchema");

const deActivate = (req, res) => {
  try {
    userModel
      .findOneAndUpdate(
        { user_email: req.user.data.user_email },
        { is_activated: false }
      )
      .then((data) => {
        res.status(200).json({ message: "Account Deactivated" });
      });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = { deActivate };
