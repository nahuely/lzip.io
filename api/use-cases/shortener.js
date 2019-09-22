const Shortener = require("../models/shortener");
const Response = require("../common/response");
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
    //TODO: dont return mongoose error without formating
    return Response.error(400, error);
  }
};

exports.getShortenerById = async function(id) {
  try {
    const response = await Shortener.findOne({ hash: id });
    if (!response) throw new Error("hash doesnt exist");
    return Response.success(200, response);
  } catch (error) {
    return Response.error(404, error);
  }
};
