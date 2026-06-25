const Order = require("../models/Order");

exports.getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
};