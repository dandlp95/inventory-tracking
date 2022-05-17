const productModel = require("../db/productModel");

const getAllProducts = async function (req, res) {
  const products = await productModel.find({});

  try {
      res.status(200).send({products});
  } catch (err) {
      res.status(500).send({err});
  }
};

const getProductsByWarehouse = async function (req, res) {
    const products
}
