const mongoose = require("mongoose");

const testoSchema = new mongoose.Schema(
  {
    clientname: String,
    clientimage: String,
    clientreview: String,
  },
  {
    autoIndex: true,
    timestamps: true,
  }
);

const testoModel = mongoose.model("testomonial", testoSchema);

module.exports = testoModel;
