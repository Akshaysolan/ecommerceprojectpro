const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userAddress: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, 
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
