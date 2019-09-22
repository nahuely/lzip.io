const mongoose = require("mongoose");
const hitsSchema = require("./hits");
const shortenersSchema = require("./shortener");

const { Schema } = mongoose;

const statsSchema = new Schema(
  {
    hash: {
      type: String
    },
    views: [hitsSchema]
  },
  { timestamps: true }
);

statsSchema.index(
  {
    hash: 1
  },
  { unique: true }
);

statsSchema.pre("findOneAndUpdate", async function(next) {
  try {
    const { hash } = this.getQuery();
    const shortener = await shortenersSchema.findOne({ hash });
    if (!shortener) {
      next("hash doesnt exist");
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Stat = mongoose.model("stat", statsSchema);

module.exports = Stat;
