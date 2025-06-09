require("dotenv").config();
const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
	connectionString:
		"postgresql://neondb_owner:npg_qet8l7QzYkop@ep-purple-sun-a89mz7o5-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
});
