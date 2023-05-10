const express = require("express");
const page = express.Router();
const axios = require("axios");


const login_insert = require("./login_CRUD/login_insert");
const login_select = require("./login_CRUD/login_select");
const post_email = require("./login_CRUD/post_email");





page.get("/", async (req, res) => {
  let usersSelect = await axios.get(
    `http://localhost:80/login/last_id`
  );

  res.render("login", {
    userLast: usersSelect.data,
  });
});


// 綁定為 http://localhost/wallet/...
// 主要用於 wallet_CRUD
page.use("/", login_insert);
page.use("/", login_select);
page.use("/", post_email);


module.exports = page;
