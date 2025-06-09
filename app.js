require("dotenv").config();

//import stuff

const express = require("express");
const app = express();

const path = require("path");

const homeRouter = require("./routers/homeRouter");

//see form stuff

app.use(express.urlencoded({ extended: true }));

//view

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//serve static file from public

app.use(express.static("public"));

//homeRouter

app.use("/", homeRouter);

//port AND listen

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
