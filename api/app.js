const express = require("express");
let helmet = require("helmet");
const Cors = require("cors");
const routes = require("./route/index");

const app = express();
app.use(helmet());
PORT = process.env.PORT || PORT;
//This will allow the frontend to get access my backend {files ,image}
app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});
// Use CORS middleware with options
app.use(Cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);

require("dotenv").config();
app.use("/assets/", express.static("public/"));
///setting public directory for accessing file and images
app.use(express.json());
require("./config/mongoose.config");
app.use(routes);
app.use((req, res, next) => {
  next({ status: 404, msg: "not found" }); //error handeling middleware for invalid route
});

//error handeling middlewares
app.use((error, req, res, next) => {
  let status = error.status ?? 500;
  let msg = error.msg ?? error;
  res.status(status).json({
    status: status,
    msg: msg,
  });
});

app.listen(PORT, "localhost", (err) => {
  if (!err) {
    console.log("Server is Listening...", PORT);
    console.log("Press CTRl+C to Disconnect");
  }
});
