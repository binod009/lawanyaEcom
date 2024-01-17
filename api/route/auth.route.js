const express = require("express");
const app = express.Router();
const uploader = require("../app/middleware/uploader");
const AuthController = require("../app/controller/auth.controller");
const Auth_Ctrl = new AuthController();

app
  .route("/login")
  .post(Auth_Ctrl.login)
  .get((req, res, next) => {
    next({ status: 404, msg: "Unauthorized user" });
  });

app.route("/register").post(uploader.single("image"), Auth_Ctrl.registerUser);

app.route("/logout").post((req, res, next) => {
  res.status(200).json({
    status: true,
    message: "success",
  });
});
module.exports = app;
