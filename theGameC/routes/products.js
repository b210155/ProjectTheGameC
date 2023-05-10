const express = require("express");
const page = express.Router();
const path = require("path");

page.get("/shopping_cart", (req, res) => {
  res.render("shopping_cart");
});

module.exports = page;
