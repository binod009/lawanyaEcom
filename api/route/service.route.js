const express = require("express");
const app = express();

app.post("/service", (req, res) => {
  res.status(200).json({
    messaage: "banner created successfully",
  });
});

app.get("/service", (req, res) => {
  res.status(200).json({
    messaage: "here is your services data",
    result: [],
  });
});

module.exports = app;

//username:lawanya
//password:C5LMo5FH1oif6HyO
//mongodb+srv://<username>:<password>@cluster0.8brv6gn.mongodb.net/
