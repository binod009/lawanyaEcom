const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    bannerName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      required: true,
    },
  },
  {
    Timestamp: true,
    autoIndex: true,
  }
);

const bannerModel = mongoose.model("banner", bannerSchema);
module.exports = bannerModel;
