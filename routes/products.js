var express = require("express");
const { default: mongoose } = require("mongoose");
const { userModel } = require("../model/userSchema");
const { addProduct } = require("../controller/Products");

var router = express.Router();

router.post("/add", addProduct);
router.get("/products");
module.exports = router;
