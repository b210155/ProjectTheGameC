const express = require("express");
const page = express.Router();
const path = require("path");
const axios = require("axios");

const game_CRUD_select = require("./game_CRUD/g_select ");

page.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:80/games/game_select"); // 向g_select.js裡面撈資料

    const response2 = await axios.get(
      "http://localhost:80/games/game_select_bg"
    );

    res.render(
      "games", // 渲染 games.ejs
      { apple: response.data, cat: response2.data }
    );
    console.log("有收到");
  } catch (error) {
    console.error(error);
    res.status(500).send("伺服器出問題");
    console.log("沒收到", error);
  }
});

// page.get('/data1', async (req, res) => {
// try {
// const response = await axios.get('http://localhost:80/games/game_select_bg'); // 向g_select.js裡面撈資料
// res.render('games',          // 渲染 games.ejs
// { cat:response.data });
// console.log('下方背景圖片資料有收到');
// } catch (error) {
// console.error(error);
// res.status(500).send('下方背景圖片服務器有问题');
// console.log('下方背景圖片沒收到');
// }
// });
//

page.use("/", game_CRUD_select);

module.exports = page;
