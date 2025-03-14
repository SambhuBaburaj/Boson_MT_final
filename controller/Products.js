const { ProductModel } = require("../model/productSchema");

const addProduct = (req, res) => {
  try {
    const productInfo = req.body;
    const product = new ProductModel(productInfo);
    product.save().then((data) => {
      res.status(200).json({ message: "Product added successfully" });
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
const getProducts = (req, res) => {
  try {
    ProductModel.find().then((data) => {
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = { addProduct, getProducts };
