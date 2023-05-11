const express = require("express");
const page = express.Router();
const path = require("path");

page.get("/", (req, res) => {
  res.render("mail");
});

module.exports = page;














function selectimg(){
    const fileinput = document.getElementById('fileinput').files[0];
    const theimg=document.getElementById('theimg');
    const reader = new FileReader();
    reader.onload = function(event){
        theimg.src= event.target.result;
    };
    reader.readAsDataURL(fileinput);
}



 