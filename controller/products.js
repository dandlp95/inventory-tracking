const productModel = require("../db/productModel");

const getAllProducts = async function (req, res) {
  const products = await productModel.find({});

  try {
    res.status(200).send({ products });
  } catch (err) {
    res.status(500).send({ err });
  }
};

const getProduct = async function (req, res) {
  const product = await productModel.findById(req.params.id);
  try {
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addProduct = function (req, res) {
  const product = new productModel(req.body);

  try {
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
};

const editProduct = function (req, res) {
  productModel.findByIdUpdate(req.params.id, req.body, (err, docs) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(docs);
    }
  });
};

const deleteProduct = function (req, res) {
  productModel.findByIdAndDelete(req.params.id, req.body, (err, docs) => {
    if (err) {
      send.status(400).send(err);
    } else {
      if (docs === null) {
        res.status(200).send("Product already deleted.");
      } else {
        res.status(200).send(docs);
      }
    }
  });
};

module.exports = { getAllProducts, getProduct, addProduct, editProduct, deleteProduct };
