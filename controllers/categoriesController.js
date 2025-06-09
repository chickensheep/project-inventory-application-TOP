const db = require("../db/queries");

const categoriesGet = async (req, res) => {
	const categories = await db.getAllCategories();
	console.log(categories);
	res.render("categories", { categories: categories });
};

const categoriesNewGet = (req, res) => {
	res.render("categoriesForm");
};

const categoriesNewPost = (req, res) => {
	const newCategoryName = req.body.newCategoryName;
	const newCategoryColour = req.body.newCategoryColour;
	db.addCategory(newCategoryName, newCategoryColour);
	res.redirect("/categories/");
};

module.exports = { categoriesGet, categoriesNewGet, categoriesNewPost };
