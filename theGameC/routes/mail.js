const express = require("express");
const page = express.Router();
const path = require("path");

var config = require("./CRUD/config");

page.get("/", (req, res) => {
  // 確定登入以後session有存入到首頁
  if (req.session) {
    const userId = req.session.userId;
    const userName = req.session.userName;
    const email = req.session.email;
    res.render("mail", { userId, userName, email });
  }
});



page.post("/get_reply", function (req, res) {
  var sql =
    "INSERT INTO service_reply (user_id,category, Subject, illustrate, reply_pic) VALUES (?,?,?,?,?);";
  //這個sql是sql語言寫的，?是代表我上面:要輸入的值將被填入到?中
  const user_id = req.body.user_id;
  const category = req.body.category;
  const Subject = req.body.Subject;
  const illustrate = req.body.illustrate;
  const reply_pic = req.body.reply_pic;

  // console.log(reply_pic);

  config.query(
    sql,
    [user_id, category, Subject, illustrate, reply_pic],
    function (err, results, fields) {
      if (err) {
        res.send("error: " + err.sqlMessage);
      } else {
        res.send("success");
      }
    }
  );
});

module.exports = page;



