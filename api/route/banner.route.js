const express = require("express");
const app = express();

app.post("/banner", (req, res) => {
  res.json({
    messaage: "banner created successfully",
  });
});

app.get("/banner", (req, res) => {
  res.json({
    messaage: "here is your banner data",
    result: [],
  });
});

module.exports = app;
