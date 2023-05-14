const express = require("express");
const page = express.Router();

const config = require("../CRUD/config"); // 引用 config

/* 插入玩家對商品的評論 product_reviews.sql */
page.post("/api/insertPR/PID/:product_id", (req, res) => {
  var sql =
    "INSERT INTO product_reviews (product_id, user_id, rating, comment) VALUES (?, ?, ?, ?);";
  config.query(
    sql,
    [
      req.params.product_id,
      req.body.user_id,
      req.body.rating,
      req.body.comment,
    ],
    function (err, results, fields) {
      console.log(results[0]);
      res.send(JSON.stringify(results[0]));
    }
  );
});

module.exports = page;
