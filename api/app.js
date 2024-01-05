const express = require("express");
const app = express();

app.listen(3005, "localhost", (err) => {
  if (!err) {
    console.log("Server is Listening...");
    console.log("Press CTRl+C to Disconnect");
  }
});
