var express = require("express")
var app = express()
var PORT = process.env.PORT || 8080

app.get("/funthings", (req, res) => {
    res.json("sports", "music", "alcohol");
  });