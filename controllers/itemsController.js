const db = require("../db/queries");

const itemsGet = async (req, res) => {
	const categories = await db.getAllCategories();
	const items = await db.getAllItems();
	const category = req.query.category;

	let filteredItems;
	if (category == "All" || category == undefined) {
		filteredItems = items;
	} else {
		filteredItems = items.filter((item) => item.category == category);
	}

	res.render("items", {
		items: filteredItems,
		categories: categories,
		category: category,
	});
};

const itemsNewGet = async (req, res) => {
	const categories = await db.getAllCategories();
	console.log(categories);
	res.render("itemsForm", { categories: categories });
};

const itemsNewPost = async (req, res) => {
	const itemsFormName = req.body.itemsFormName;
	const itemsFormImage = req.body.itemsFormImage;
	const itemsFormCategory = req.body.itemsFormCategory;

	await db.addItem(itemsFormName, itemsFormImage, itemsFormCategory);
	res.redirect("/items/");
};

const itemGet = async (req, res) => {
	const items = await db.getAllItems();
	const itemName = req.params.itemName;
	const item = items.filter(
		(item) => item.item.replace(/\s+/g, "") == itemName
	);
	res.render("item", { item: item });
	console.log(item);
};

const itemDelete = async (req, res) => {
	const itemid = parseInt(req.body.itemid);
	await db.deleteItem(itemid);
	res.redirect("/items/");
};

const itemEditGet = async (req, res) => {
	const categories = await db.getAllCategories();

	const items = await db.getAllItems();
	const itemName = req.params.itemName;
	const item = items.filter(
		(item) => item.item.replace(/\s+/g, "") == itemName
	);
	res.render("itemEdit", {
		item: item,
		categories: categories,
	});
};

const itemEditPost = (req, res) => {
	const itemEditName = req.body.itemEditName;
	const itemEditImage = req.body.itemEditImage;
	const itemEditCategory = req.body.itemEditCategory;
	const itemId = parseInt(req.body.itemId);

	db.editItem(itemEditName, itemEditImage, itemEditCategory, itemId);
	res.redirect("../");
};

module.exports = {
	itemsGet,
	itemsNewGet,
	itemsNewPost,
	itemGet,
	itemEditGet,
	itemEditPost,
	itemDelete,
};
