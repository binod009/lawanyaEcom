const express = require("express");
const app = express();

app.post("/", (req, res) => {
  res.json({
    message: "event created successfully",
  });
});

app.get("/event", (req, res) => {
  res.json({
    messaage: "here is your evet data",
    result: [],
  });
});

module.exports = app;
