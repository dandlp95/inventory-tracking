const warehouseModel = require("../db/warehouseModel");
const mongoose = require("mongoose");

const getAllWarehouses = async function (req, res) {
  const warehouses = await warehouseModel.find({});

  try {
    res.status(200).send(warehouses);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getWarehouse = async function (req, res) {
  const warehouse = await warehouseModel.findById(req.params.id);

  try {
    res.status(200).send(warehouse);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addProductWarehouse = async function (req, res) {
  const objectId = mongoose.Types.ObjectId(req.params.productId);

  const addedInventory = {
    product: objectId,
    quantity: req.body.quantity,
  };

  const warehouse = await warehouseModel.findById(req.params.id);
  warehouse.inventory.push(addedInventory);

  try {
    await warehouse.save();
    res.status(200).send("Product added.");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = { getAllWarehouses, getWarehouse, addProductWarehouse };
