const express = require("express");
const page = express.Router();
const path = require("path");

page.get("/", (req, res) => {
  // 確定登入以後session有存入到首頁
  if (req.session) {
    console.log(req.session.userId);
    console.log(req.session.userName);
    console.log(req.session.email);
  }
  res.render("index");
});

module.exports = page;
