const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WarehouseSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  location: {
    type: "string",
    required: true,
  },
});

const Warehouse = mongoose.model("Warehouse", WarehouseSchema);

module.exports = Warehouse;
