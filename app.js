const { static } = require("express");
var express = require("express");
var path = require("path");
var app = express();

app.set("view engine", "html");
app.use(express.static("./public"));

app.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "Home", "home.html"));
});

app.listen(8080);
console.log("Servidor Online em http://127.0.1:8080");
