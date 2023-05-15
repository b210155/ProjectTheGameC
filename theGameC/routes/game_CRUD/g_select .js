const express = require("express");
const page = express.Router();

const config = require("../CRUD/config"); // 引用 config

//中間區塊要抓遊戲種類圖片 資料庫：games
page.get('/game_select', (req, res) => {
  var sql = "SELECT game_type , image ,game_name,age_rating FROM games;";
  config.query(sql, function (err, results, fields) {
    if (err) {
      res.status(500).json({error:'selec錯誤',details:err});
    }else{
      console.log('查詢結果：',results[0]);
      res.send(JSON.stringify(results));
    }
    
    
  });
});
    
 
//下面區塊要抓遊戲背景圖 資料庫：game_type
page.get('/game_select_bg', (req, res) => {
  var sql = "SELECT game_type_name,description, bg_image FROM game_types;";
  config.query(sql, function (err, results, fields) {
    if (err) {
      console.error(err);
      res.status(500).send('服務器有問題');
      return;
    }
    console.log('查詢結果：',results[0]);
    res.send(JSON.stringify(results));
    
    
  });
});

module.exports = page;
