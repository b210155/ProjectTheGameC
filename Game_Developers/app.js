const express = require("express");
const app = express();
const cors = require("cors"); // 允許不同網域請求
const bodyParser = require("body-parser"); // 允許不同網域請求
const axios = require("axios");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

///////////////////////////////
// 路由
///////////////////////////////

/* 尚未登入 */
app.get("/", async (req, res) => {
  res.render("GameStore");
});

/* 登入 */
// 撈取 80 的 user_games - wallet_CRUD/GD_CRUD.js
app.get("/:id", async (req, res) => {
  let userGame = await axios.get(
    `http://localhost:80/wallet/api/game_coin/${req.params.id}`
  );
  console.log("獲取的資料-user_games：", userGame.data[0]);
  let mylolSkin = await axios.get(
    `http://localhost:80/wallet/api/lol_skins/${req.params.id}`
  );
  console.log("獲取的資料-lol：", mylolSkin.data);

  // 該使用者是否有該遊戲(撈到的資料是否是[]？)
  // if (userGame.data[0] == null || userGame.data[0] == undefined) {
  //   res.render("GameStore", {
  //     userGameData: userGame.data[0],
  //   });
  // } else {
  res.render("GameStore_users", {
    userGameData: userGame.data[0],
    userlolSkin: mylolSkin.data, // 陣列
  });
  // }
});

app.listen(90, () => {
  console.log("【伺服器 port 90 啟動 - 遊戲廠商：英雄聯盟】");
  console.log("【Ctrl + C 可關閉伺服器】");
});
