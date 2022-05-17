const products = require("../controller/products");
const routes = require("express").Router();

routes.get("/", products.getAllProducts);

routes.get("/:id", products.getProduct);

routes.post("/add_product", products.addProduct);

routes.put("/edit_product/:id", products.editProduct);

routes.delete("/delete_product/:id", products.deleteProduct);

module.exports = routes;
