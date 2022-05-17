const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({

  productName: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  }
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
