const express = require("express");
const page = express.Router();
const path = require("path");

const game_CRUD_select = require("./game_CRUD/g_select ");

page.get("/games", (req, res) => {
  res.render("games");
});

page.use("/", game_CRUD_select);

module.exports = page;
