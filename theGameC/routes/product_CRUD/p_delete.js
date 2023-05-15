const express = require("express");
const page = express.Router();

const config = require("../CRUD/config"); // 引用 config

/* 插入玩家對商品的評論 product_reviews.sql */
page.delete("/api/DeletePR/PID/:product_id", (req, res) => {
  var sql = "DELETE FROM product_reviews WHERE product_id = ? AND user_id = ?;";
  config.query(
    sql,
    [req.params.product_id, req.body.user_id],
    function (err, results, fields) {
      console.log(results[0]);
      res.send(JSON.stringify(results[0]));
    }
  );
});

module.exports = page;
