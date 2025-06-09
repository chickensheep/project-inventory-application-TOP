#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const createAndInsertTable = `
CREATE TABLE categories(
    categoryid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category VARCHAR,
    colour VARCHAR
);

INSERT INTO categories (category, colour) 
VALUES
('Wood', '#8A3D00'),
('Stone', '#BFBFBF'),
('Nature', '#00C903');

CREATE TABLE items(
	itemid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	item VARCHAR,
	image VARCHAR,
	category VARCHAR
);

INSERT INTO items(item, image, category)
VALUES
('Oak Log', 'https://mc.nerothe.com/img/1.21.5/minecraft_oak_log.png', 'Wood'),
('Oak Plank','https://mc.nerothe.com/img/1.21.5/minecraft_oak_planks.png','Wood'),
('Oak Door','https://mc.nerothe.com/img/1.21.5/minecraft_oak_door.png','Wood'),
('Cherry Log','https://mc.nerothe.com/img/1.21.5/minecraft_cherry_log.png','Wood'),
('Cherry Sign','https://mc.nerothe.com/img/1.21.5/minecraft_cherry_sign.png','Wood'),
('Cobblestone','https://mc.nerothe.com/img/1.21.5/minecraft_cobblestone.png','Stone'),
('Dripstone Block','https://mc.nerothe.com/img/1.21.5/minecraft_dripstone_block.png','Stone'),
('Stone Bricks','https://mc.nerothe.com/img/1.21.5/minecraft_stone_bricks.png','Stone'),
('Cobblestone Stairs','https://mc.nerothe.com/img/1.21.5/minecraft_cobblestone_stairs.png','Stone'),
('Stone Brick Wall','https://mc.nerothe.com/img/1.21.5/minecraft_stone_brick_wall.png','Stone'),
('Grass Block','https://mc.nerothe.com/img/1.21.5/minecraft_grass_block.png','Nature'),
('Wheat Seeds','https://mc.nerothe.com/img/1.21.5/minecraft_wheat_seeds.png','Nature'),
('Bamboo','https://mc.nerothe.com/img/1.21.5/minecraft_bamboo.png','Nature'),
('Lily Pad','https://mc.nerothe.com/img/1.21.5/minecraft_lily_pad.png','Nature'),
('Dirt','https://mc.nerothe.com/img/1.21.5/minecraft_dirt.png','Nature');
`;

const main = async () => {
	console.log("dropping and creating db...");
	const client = new Client({
		connectionString: process.env.DB_MAIN_URL,
	});
	await client.connect();
	await client.query(
		"DROP DATABASE IF EXISTS project_inventory_application_top"
	);
	await client.query("CREATE DATABASE project_inventory_application_top");
	await client.end();
	console.log("drop and create db DONE!!!");

	console.log("creating and inserting CATEGORIES and ITEMS table...");
	const newClient = new Client({
		connectionString: process.env.DB_URL,
	});
	await newClient.connect();
	await newClient.query(createAndInsertTable);
	await newClient.end();
	console.log("create and insert CATEGORIES and ITEMS table DONE!!!");

	console.log("db and tables created!!!");
};

main();
