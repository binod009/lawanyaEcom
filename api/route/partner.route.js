const express = require("express");
const app = express.Router();
const Auth = require("../app/middleware/auth");
const uploader = require("../app/middleware/uploader");
const PartnerController = require("../app/controller/partner.controller");
let partner_ctrl = new PartnerController();

app
  .route("/partner")
  .post(Auth, uploader.single("image"), partner_ctrl.createPartner)
  .get(Auth, partner_ctrl.getAllPartner);

app.route("/partner/:id").delete(Auth, partner_ctrl.deletePartner);

module.exports = app;
