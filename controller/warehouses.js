const warehouseModel = require("../db/productModel");

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


module.exports = { getAllWarehouses, getWarehouse };
