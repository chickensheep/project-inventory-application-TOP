const pool = require("./pool");

const getAllCategories = async () => {
	const { rows } = await pool.query("SELECT * FROM categories");
	return rows;
};

const addCategory = async (category, colour) => {
	return await pool.query(
		"INSERT INTO categories (category,colour) VALUES ($1, $2)",
		[category, colour]
	);
};

const getCategoryColour = async (category) => {
	const result = await pool.query(
		"SELECT colour FROM categories WHERE category = $1",
		[category]
	);
	return result.rows[0].colour || null;
};

const getAllItems = async () => {
	const { rows } = await pool.query(
		"SELECT * FROM items JOIN categories ON items.category=categories.category"
	);
	return rows;
};

const addItem = async (a, b, c) => {
	return await pool.query(
		"INSERT INTO items (item,image,category) VALUES ($1,$2,$3)",
		[a, b, c]
	);
};

const deleteItem = async (itemid) => {
	return await pool.query("DELETE FROM items WHERE itemId = $1", [itemid]);
};

const editItem = async (name, image, category, itemid) => {
	return await pool.query(
		"UPDATE items SET item=$1, image=$2, category=$3 WHERE itemId=$4",
		[name, image, category, itemid]
	);
};

module.exports = {
	getAllCategories,
	addCategory,
	getCategoryColour,
	getAllItems,
	deleteItem,
	editItem,
	addItem,
};
