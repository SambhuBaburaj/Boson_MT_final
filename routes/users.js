var express = require("express");
const { default: mongoose } = require("mongoose");
const { userModel } = require("../model/userSchema");
const { Signup } = require("../controller/SignUp");
const { Signin } = require("../controller/SignIn");
const { VerifyJWT } = require("../controller/JwtVerification");
const { getProducts } = require("../controller/Products");
const { purchaseProduct } = require("../controller/PurchaseProduct");
const { deActivate } = require("../controller/DeActivateAccount");
var router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.get("/products", VerifyJWT, getProducts);
router.get("/purchase_product", VerifyJWT, purchaseProduct);
router.delete("/deactivate", VerifyJWT, deActivate);

router.get("/test_auth", VerifyJWT, (req, res) => {
  res.status(200).json({ message: "Authorized" });
});
module.exports = router;
