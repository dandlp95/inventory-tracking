const warehouseModel = require("../db/warehouseModel");
const productModel = require("../db/productModel");
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

  // temporary debugging code below.
  // const product = await warehouseModel
  //   .findById(req.params.id)
  //   .populate("inventory.product");

  // const item = product.inventory[0].product;
  // item.description = "I hate cheese. EDITED";
  // item.save();

  try {
    res.status(200).send(warehouse);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addProductWarehouse = async function (req, res) {
  const objectId = mongoose.Types.ObjectId(req.params.productId);
  const qtyAdded = req.body.quantity; // Quantity added to inventory
  const product = await productModel.findById(req.params.productId);
  const totalQty = product.quantity;

  if (qtyAdded > totalQty) {
    res.send("Insufficient Inventory.");
  } else {
    product.quantity = totalQty - qtyAdded; // Removes qty from inventory.
    product.save();

    // Object added to inventory.
    // product references product in products collection.
    const addedInventory = {
      product: objectId,
      quantity: qtyAdded
    };

    // pushes object to inventory list in warehouse.
    const warehouse = await warehouseModel.findById(req.params.id);
    warehouse.inventory.push(addedInventory);
    await warehouse.save();

    try{
      res.status(200).send(`Product Added succesfully: ${product}`);
    }catch(err){
      res.status(500).send(err);
    }
  }

  // await warehouse.save();

  // const product = await productModel.findById(req.params.productId);

  // const totalQty = product.quantity;

  // if (qty > totalQty) {
  //   res.send("Insufficient Inventory");
  // } else {
  //   product.quantity = totalQty - qtyAdded;
  //   await product.save();
  // }

  // const addedInventory = {
  //   product: objectId,
  //   quantity: qtyAdded,
  // };

  // const warehouse = await warehouseModel.findById(req.params.id);
  // warehouse.inventory.push(addedInventory);

  // try {
  //   res.status(200).send("Product added.");
  // } catch (err) {
  //   res.status(500).send(err);
  // }
};

module.exports = { getAllWarehouses, getWarehouse, addProductWarehouse };
