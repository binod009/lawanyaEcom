const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    eventimage: String,
    time: String,
    eventdata: {
      type: Date,
      default: Date.now,
    },
    description: String,
  },
  {
    autoIndex: true,
    timestamps: true,
  }
);

const eventModel = mongoose.model("event", eventSchema);

module.exports = eventModel;
