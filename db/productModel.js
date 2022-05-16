const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema({
  WarehouseId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Warehouse"
  },

  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },

  productName: {
    type: "string",
    required: true,
  },

  quantity: {
    type: "integer",
    required: true,
  },

  description: {
    type: "string",
    required: true,
  },

  image: {
    type: "string",
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
