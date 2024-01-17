const express = require("express");
const app = express();

app.post("/logo", (req, res) => {
  res.json({
    messaage: "banner created successfully",
  });
});

app.get("/logo", (req, res) => {
  res.json({
    messaage: "here is your logo data",
    result: [],
  });
});

module.exports = app;
