const { default: mongoose } = require("mongoose");

const user = new mongoose.Schema(
  {
    user_name: String,
    user_email: String,
    password: String,
    is_activated: { type: Boolean, default: true },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
const userModel = mongoose.model("user", user);
module.exports = { userModel };
