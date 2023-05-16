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

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

/* 遊戲單頁 */
page.get("/gamepage/:game_id", async (req, res) => {
  let gameSelect = await axios.get(
    `http://localhost:80/games/api/gameID/${req.params.game_id}`
  );
  // 類型 Icon、CSS背景、你可能喜歡 SELECT 路徑
  var typeIcon = "";
  var typeCss = "";
  var typeName = ""; // 你可能會喜歡 SELECT 路徑
  switch (gameSelect.data.game_type) {
    case "射擊遊戲":
      typeIcon = "/img/Games/GameTypeBg/typeIShooting.png";
      typeCss = "ProductPageBgShooting";
      typeName = gameSelect.data.game_type;
      break;
    case "冒險遊戲":
      typeIcon = "/img/Games/GameTypeBg/typeIAVG.png";
      typeCss = "ProductPageBgAVG";
      typeName = gameSelect.data.game_type;
      break;
    case "競技遊戲":
      typeIcon = "/img/Games/GameTypeBg/typeICom.png";
      typeCss = "ProductPageBgCom";
      typeName = gameSelect.data.game_type;
      break;
  }
  // 年齡限制
  var ageRating = "";
  switch (gameSelect.data.age_rating) {
    case "6":
      ageRating = "保護級";
      break;
    case "12":
      ageRating = "輔導級";
      break;
    case "18":
      ageRating = "限制級";
      break;
    default:
      ageRating = "普遍級";
      break;
  }

  console.log(gameSelect.data.game_type);
  res.render(
    "gamepage", // 渲染 games.ejs
    {
      typeIcon: typeIcon,
      typeCss: typeCss,
      ageRating: ageRating,
      gameData: gameSelect.data,
    }
  );
});

page.use("/", game_CRUD_select);

module.exports = page;
