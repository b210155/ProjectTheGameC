const express = require("express");
const page = express.Router();

var config = require("../CRUD/config");

//抓取線上遊戲的全部資料
page.get("/getGames", (req, res) => {
  var sql =
    "SELECT game_name, game_type, description, image FROM games LIMIT 8;";
  config.query(
    sql,
    // 名稱照 /: 打
    function (err, results, fields) {
      // console.log(results[0]);
      res.send(JSON.stringify(results));
    }
  );
});

//抓取News的資料
page.get("/getNews", (req, res) => {
  var sql =
    "SELECT news_title, news_img, content FROM news WHERE news_type = '最新消息' ORDER BY RAND() LIMIT 4;";
  config.query(
    sql,
    // 名稱照 /: 打
    function (err, results, fields) {
      // console.log(results[0]);
      res.send(JSON.stringify(results));
    }
  );
});
//取得遊戲更新資訊
page.get("/getGameUpdate", (req, res) => {
  var sql =
    "SELECT news_title, news_img, content FROM news WHERE news_type = '遊戲更新' LIMIT 3;";
  config.query(
    sql,
    // 名稱照 /: 打
    function (err, results, fields) {
      // console.log(results[0]);
      res.send(JSON.stringify(results));
    }
  );
});
//優惠活動
page.get("/getpromotion", (req, res) => {
  var sql =
    "SELECT news_title, news_img, content,dateTime FROM news WHERE news_type = '優惠活動'  ORDER BY RAND() LIMIT 3;";
  config.query(
    sql,
    // 名稱照 /: 打
    function (err, results, fields) {
      // console.log(results[0]);
      res.send(JSON.stringify(results));
    }
  );
});
//取得商品資訊
page.get("/getproducts", (req, res) => {
  var sql =
    "SELECT product_name, product_type, image, description,price FROM products  LIMIT 5;";
  config.query(
    sql,
    // 名稱照 /: 打
    function (err, results, fields) {
      // console.log(results[0]);
      res.send(JSON.stringify(results));
    }
  );
});

module.exports = page;
