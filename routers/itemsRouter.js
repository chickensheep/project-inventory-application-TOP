const { Router } = require("express");
const itemsController = require("../controllers/itemsController");

const itemsRouter = Router();

itemsRouter.get("/", itemsController.itemsGet);

itemsRouter.get("/new", itemsController.itemsNewGet);
itemsRouter.post("/new", itemsController.itemsNewPost);

itemsRouter.get("/:itemName", itemsController.itemGet);
itemsRouter.post("/:itemName", itemsController.itemDelete);

itemsRouter.get("/:itemName/edit", itemsController.itemEditGet);
itemsRouter.post("/:itemName/edit", itemsController.itemEditPost);

module.exports = itemsRouter;
