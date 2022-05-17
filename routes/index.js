const routes = require("express").Router();

routes.use("/products", require("./products"));

routes.use("/warehouses", require("./warehouses"));

routes.use("/", (req, res) => {
    res.send("placeholder.");
});

module.exports = routes;