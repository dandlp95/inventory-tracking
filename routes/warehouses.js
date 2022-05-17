const warehouses = require("../controller/warehouses");
const routes = require("express").Router();

routes.get("/", warehouses.getAllWarehouses);

routes.get("/:id", warehouses.getWarehouse);

routes.put("/:id/:productId", warehouses.addProductWarehouse);

module.exports = routes;

