const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: String,

    product_price: Number,
    product_code: String,
    product_quantity: Number,
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);
const ProductModel = mongoose.model("product", productSchema);
module.exports = { ProductModel };
