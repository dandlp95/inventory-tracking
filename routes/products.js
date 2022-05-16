const routes = require("express").Router();
import categories from "../controller/categories";

routes.get("/", categories.getCategories);