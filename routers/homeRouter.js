//import stuff

const { Router } = require("express");
const homeController = require("../controllers/homeController");
const itemsRouter = require("./itemsRouter");
const categoriesRouter = require("./categoriesRouter");

//home router

const homeRouter = Router();

//home

homeRouter.get("/", homeController);

//items

homeRouter.use("/items", itemsRouter);

//categories

homeRouter.use("/categories", categoriesRouter);

module.exports = homeRouter;
