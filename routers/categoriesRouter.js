//import stuff

const { Router } = require("express");
const categoriesController = require("../controllers/categoriesController");

//categories router

const categoriesRouter = Router();

categoriesRouter.get("/", categoriesController.categoriesGet);
categoriesRouter.get("/new", categoriesController.categoriesNewGet);
categoriesRouter.post("/new", categoriesController.categoriesNewPost);

module.exports = categoriesRouter;
