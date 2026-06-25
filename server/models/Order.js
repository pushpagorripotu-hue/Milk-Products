const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  productName: String,
  quantity: Number,
  totalPrice: Number
});

module.exports = mongoose.model("Order", orderSchema);