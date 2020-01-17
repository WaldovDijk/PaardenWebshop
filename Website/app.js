const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// mongoose.connect("mongodb://localhost:27017/blogDB", {useUnifiedTopology:true, useNewUrlParser:true});

//const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res) {
  res.render("home", {});
});

app.get("/order", function(req, res) {
  res.render("order", {});
});

app.get("/register", function(req, res) {
  res.render("register", {});
});

app.get("/login", function(req, res) {
  res.render("login", {});
});

app.get("/product", function(req, res) {
  res.render("product", {});
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
