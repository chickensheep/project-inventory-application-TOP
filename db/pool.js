require("dotenv").config();
const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
	host: "localhost",
	user: process.env.DB_USER,
	database: "project_inventory_application_top",
	password: process.env.DB_PASSWORD,
	port: 5432,
});
