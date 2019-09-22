const mongoose = require("mongoose");
const { Schema } = mongoose;

const hitsSchema = new Schema(
  {
    referer: String,
    browser: String,
    success: {
      required: [true, "success is required"],
      type: Boolean
    }
  },
  { timestamps: true }
);

module.exports = hitsSchema;
