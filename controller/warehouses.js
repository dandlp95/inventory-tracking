const warehouseModel = require("../db/categoryModel");

const getWarehouses = async function (req, res) {
  const warehouses = await warehouseModel.find({});

  try {
    res.status(200).send(warehouses);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getWarehouse = async function (req, res) {
  const category = await categoryModel.findById(req.params.id);
  try {
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

const addCategory = async function (req, res) {
  const category = new categoryModel(req.body);

  try {
    await category.save();
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send(error);
  }
};

const editCategory = function (req, res) {
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

const deleteCategory = function (req, res) {
  categoryModel.findByIdAndDelete(req.params.id, (err, docs) => {
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
  getCategories,
  getCategory,
  addCategory,
  editCategory,
  deleteCategory,
};