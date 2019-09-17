const mongoose = require("mongoose");
const validUrl = require("valid-url");
const { Schema } = mongoose;

const shortenersSchema = new Schema(
  {
    urls: {
      type: [String],
      required: [true, "url is required"],
      validate: {
        validator: urls => urls.length && urls.every(validUrl.isWebUri),
        message: "must be a valid list of urls"
      }
    },
    hash: {
      type: String,
      minlength: [1, "min lengh is 1 character"],
      maxlength: [14, "max length is 14 characters"],
      validate: {
        validator: hash => /^[A-Za-z0-9-_]+$/.test(hash),
        message: "can only contain [A-Za-z0-9-_]"
      },
      required: [true, "hash is required"] // this is wrong
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
