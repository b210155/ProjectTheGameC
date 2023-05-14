const express = require("express");
const page = express.Router();

const config = require("../CRUD/config"); // 引用 config

/* select - 商品 products.sql */
page.get("/api/productID/:product_id", (req, res) => {
  var sql =
    "SELECT *, DATE_FORMAT(created_at, '%Y年-%m月-%d日') AS formatted_created_at FROM `products` WHERE product_id = ?;";
  config.query(
    sql,
    [req.params.product_id], // 名稱照 /: 打
    function (err, results, fields) {
      console.log(results[0]);
      res.send(JSON.stringify(results[0]));
    }
  );
});

/* 商品平均評分 product_reviews.sql */
page.get("/api/productID/:product_id/rating", (req, res) => {
  var sql =
    "SELECT SUM(rating) / COUNT(rating) AS average_rating FROM product_reviews WHERE product_id = ?;";
  config.query(
    sql,
    [req.params.product_id], // 名稱照 /: 打
    function (err, results, fields) {
      if (err) {
        res.send("出錯：", err);
      } else {
        res.send(JSON.stringify(results[0]));
      }
    }
  );
});

/* 玩家 - 商品 評論 */
page.get("/api/productID/:product_id/user_id/:user_id", (req, res) => {
  var sql =
    "SELECT pr.*, u.nickname, u.username FROM product_reviews pr JOIN users u ON pr.user_id = u.user_id WHERE pr.user_id = ? AND pr.product_id = ?  ";
  config.query(
    sql,
    [req.params.user_id, req.params.product_id], // 名稱照 /: 打
    function (err, results, fields) {
      if (err) {
        res.send("Game_coin 出錯：", err);
      } else {
        res.send(results);
      }
    }
  );
});

module.exports = page;
