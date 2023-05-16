const express = require("express");
const page = express.Router();

const config = require("../CRUD/config"); // 引用 config

//////////////////////////////////////////////////////////////////////////////////
///    遊戲單頁             ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/* 修改玩家對遊戲的評論 game_reviews.sql */
page.put("/api/updateGR/GID/:game_id", (req, res) => {
  var sql =
    "UPDATE game_reviews SET rating = ?, comment = ? WHERE user_id = ? AND game_id = ?;";
  config.query(
    sql,
    [req.body.rating, req.body.comment, req.body.user_id, req.params.game_id],
    function (err, results, fields) {
      console.log(results[0]);
      res.send(JSON.stringify(results[0]));
    }
  );
});

module.exports = page;
