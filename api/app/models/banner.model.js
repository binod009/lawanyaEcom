const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    bannerName: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      require: true,
    },
  },
  {
    Timestamp: true,
    autoIndex: true,
  }
);

const bannerModel = mongoose.model("banner", bannerSchema);
module.exports = bannerModel;
