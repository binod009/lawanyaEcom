const express = require("express");
const app = express();
const routes = require("./route/index");

app.use("/assets", express.static("public/"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
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
app.listen(3005, "localhost", (err) => {
  if (!err) {
    console.log("Server is Listening...");
    console.log("Press CTRl+C to Disconnect");
  }
});
