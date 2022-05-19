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

  try {
    res.status(200).send(warehouse);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addProductWarehouse = async function (req, res) {
  const objectId = mongoose.Types.ObjectId(req.params.productId);
  const qtyAdded = req.body.quantity; // Quantity added to inventory
  const inventoryProduct = await productModel.findById(req.params.productId);
  const totalQty = inventoryProduct.quantity;

  if (qtyAdded > totalQty) {
    res.send("Insufficient Inventory.");
  } else {
    const warehouse = await warehouseModel.findById(req.params.id);

    // If product already exists in inventory, it will just add the quantity.
    const productExists = warehouse.inventory.some(function (inventoryItem) {
      return inventoryItem.product.toString() === objectId.toString();
      
    });

    if (!productExists) {
      // Object added to inventory.
      // product references product in products collection.
      const addedInventory = {
        product: objectId,
        quantity: qtyAdded,
      };

      warehouse.inventory.push(addedInventory);
      await warehouse.save();
    } else {

      const productIndex = warehouse.inventory.findIndex(function (inventoryItem) {
        return inventoryItem.product.toString() == objectId.toString();
      });

      warehouse.inventory[productIndex].quantity += parseInt(qtyAdded);
      warehouse.save();
    }

    inventoryProduct.quantity = totalQty - qtyAdded; // Removes qty from inventory.
    inventoryProduct.save();

    try {
      res.status(200).send(`Product Added succesfully: ${inventoryProduct}`);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

const getInventory = async function (req, res) {
  const warehouse = await warehouseModel
    .findById(req.params.id)
    .populate("inventory.product");

  inventory = warehouse.inventory.map((item) => {
    // return item.product;
    return {
      name: item.product.productName,
      description: item.product.description,
      quantity: item.quantity,
    };
  });

  try {
    res.status(200).send(inventory);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addWarehouse = async function(req, res){
    const warehouse = new warehouseModel(req.body);

    try{
      await warehouse.save();
      res.status(200).send(warehouse);
    }catch (err) {
      res.status(500).send(err);
    }
}

module.exports = {
  getAllWarehouses,
  getWarehouse,
  addProductWarehouse,
  getInventory,
  addWarehouse
};
