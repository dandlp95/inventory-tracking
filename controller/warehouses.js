const warehouseModel = require("../db/warehouseModel");

const getAllWarehouses = async function (req, res) {
  const warehouses = await warehouseModel.find({});

  try {
    res.status(200).send(warehouses);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getWarehouse = async function (req, res) {
  const warehouse = await categoryModel.findById(req.params.id);
  try {
    res.status(200).send(warehouse);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addWarehouse = async function (req, res) {
  const warehouse = new warehouseModel(req.body);

  try {
    await category.save();
    res.status(200).send(warehouse);
  } catch (error) {
    res.status(500).send(error);
  }
};

const editWarehouse = function (req, res) {
  categoryModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    function (err, docs) {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(docs);
      }
    }
  );
};

const deleteWarehouse = function (req, res) {
  warehouseModel.findByIdAndDelete(req.params.id, (err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      if (docs === null) {
        res.status(200).send("Already Deleted");
      } else {
        res.status(200).send(docs);
      }
    }
  });
};

module.exports = {
  getAllWarehouses,
  getWarehouse,
  addWarehouse,
  editWarehouse,
  deleteWarehouse
};