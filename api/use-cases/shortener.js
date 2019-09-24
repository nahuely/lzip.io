const Shortener = require("../models/shortener");
const Response = require("../common/response");
const redisClient = require("../service/redis");
const shortid = require("shortid");

exports.createShortener = async function({ hash, links, description }) {
  try {
    const response = await Shortener.create({
      hash: hash || shortid.generate(),
      urls: links,
      description
    });
    return Response.success(201, response);
  } catch (error) {
    return Response.error(400, error);
  }
};

exports.getShortenerById = async function(id) {
  try {
    const cache = await redisClient.get(id);
    if (cache) {
      return Response.success(200, JSON.parse(cache));
    } else {
      const shortener = await Shortener.findOne({ hash: id });
      if (!shortener) throw new Error("hash doesnt exist");
      redisClient.set(shortener.hash, JSON.stringify(shortener), "EX", 1800);
      return Response.success(200, shortener);
    }
  } catch (error) {
    return Response.error(404, error);
  }
};
