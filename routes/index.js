const routes = require("express").Router();

routes.use("/products", require("./products"));

routes.use("/categories", require("./categories"));

routes.use("/warehouses", require("./warehouses"));

routes.use("/", (req, res) => {
    console.log("placeholder.");
});