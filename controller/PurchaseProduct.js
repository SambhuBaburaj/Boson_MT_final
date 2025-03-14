const { ProductModel } = require("../model/productSchema");
const { purchaseModel } = require("../model/purchaseSchema");

const purchaseProduct = async (req, res) => {
  try {
    const ProductCodes = req.body.items;

    const sum = await ProductCodes.reduce(async (currentsSum, product) => {
      productDetails = await ProductModel.findOne({
        product_code: product.code,
      });

      return (
        parseFloat(productDetails.product_price) * parseInt(product.count) +
        (await currentsSum)
      );
    }, 0);
    console.log(sum, "final sum");
    const purchaseDetails = await new purchaseModel({
      email: req.user.data.user_email,
      items: ProductCodes,
      Total: sum,
    });
    purchaseDetails.save();
    return res
      .status(200)
      .json({ message: "Product purchased successfully ", total: sum });
  } catch (err) {}
};

module.exports = { purchaseProduct };
