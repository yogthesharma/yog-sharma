"use strict";

var express = require("express");

var pug = require("pug");

var app = express();
var PORT = 3000;
app.set("view engine", "pug");
app.get("/", function (req, res) {
  res.render("index", {
    title: "Hope It Works",
    dynamic: "https://picsum.photos/200"
  });
});
app.listen(PORT, function (err) {
  if (err) console.log("Some Error Occured");
  console.log("Server Started At Port 3000");
});