const express = require("express");
const app = express();

app.post("/testomonial", (req, res) => {
  res.json({
    messaage: "testomonial created successfully",
  });
});

app.get("/testomonial", (req, res) => {
  res.json({
    messaage: "here is your testomonial data",
    result: [],
  });
});
module.exports = app;
