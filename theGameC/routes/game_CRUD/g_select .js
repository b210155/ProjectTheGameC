const express = require("express");
const page = express.Router();

const config = require("../CRUD/config"); // 引用 config

/* 遊戲資料表 */
page.get("/games_select", (req, res) => {
  var sql = "SELECT * FROM games WHERE game_id = ?";
  config.query(
    sql,
    [req.body.id], // 名稱照 /: 打
    function (err, results, fields) {
      console.log(results[0]);
      res.send(JSON.stringify(results[0]));
    }
  );
});

module.exports = page;
