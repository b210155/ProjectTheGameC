const express = require("express");
const page = express.Router();
const path = require("path");

/* 購物車頁 */
page.get("/shopping_cart", (req, res) => {
  res.render("shopping_cart");
});

/* 商品單頁 */
page.get("/product_Page", (req, res) => {
  res.render("productPage");
});

module.exports = page;
