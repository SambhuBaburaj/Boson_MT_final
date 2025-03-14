const { default: mongoose } = require("mongoose");

const purchaseSchema = new mongoose.Schema({
  email: String,
  items: Array,
  Total: Number,
});

const purchaseModel = mongoose.model("purchase", purchaseSchema);
module.exports = { purchaseModel };
