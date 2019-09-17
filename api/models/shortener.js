const mongoose = require("mongoose");
const validUrl = require("valid-url");
const { Schema } = mongoose;

const shortenersSchema = new Schema(
  {
    urls: {
      type: [String],
      required: [true, "url is required."],
      validate: {
        validator: urls => urls.every(validUrl.isWebUri),
        message: "must be a valid list of urls"
      }
    },
    hash: {
      type: String,
      required: [true, "you gotta pass hash"] // this is wrong
    }
  },
  { timestamps: true }
);

shortenersSchema.index(
  {
    hash: 1
  },
  { unique: true }
);

const Shortener = mongoose.model("shortener", shortenersSchema);

module.exports = Shortener;
