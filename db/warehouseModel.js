const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WarehouseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  inventory: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ]
});

const Warehouse = mongoose.model("Warehouse", WarehouseSchema);

module.exports = Warehouse;
