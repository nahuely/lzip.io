const Stat = require("../models/stats");
const Response = require("../common/response");

exports.createShortener = async function(hash, browser, referer, success) {
  try {
    const response = await Stat.findOneAndUpdate(
      { hash },
      {
        $push: {
          views: {
            browser,
            referer,
            success
          }
        }
      },
      { upsert: true, runValidators: true }
    );
    return Response.success(201, response);
  } catch (error) {
    return Response.error(400, error);
  }
};

exports.getShortenerById = async function(id) {
  try {
    const response = await Stat.findOne({ hash: id });
    if (!response) throw new Error("no hash id");
    return Response.success(200, response);
  } catch (error) {
    return Response.error(404, error);
  }
};
