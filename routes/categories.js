const routes = require("express").Router();
const {
  getCategories,
  getCategory,
  addCategory,
  deleteCategory,
  editCategory,
} = require("../controller/categories");

routes.get("/", getCategories);

routes.get("/category/:name", getCategory);

routes.post("/category", addCategory);

routes.delete("/category/:name", deleteCategory);

router.put("/category", editCategory);

module.exports = routes;


