const Stat = require("../models/stats");
const Response = require("../common/response");

exports.createOrUpdateStat = async function(hash, browser, referer, success) {
  try {
    const response = await Stat.findOneAndUpdate(
      { hash },
      {
        $inc: {
          count: 1
        },
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

exports.getStatById = async function(id) {
  try {
    const response = await Stat.findOne({ hash: id });
    if (!response)
      throw new Error(
        `the shortener (${id}) doesnt exist or there is not any view yet`
      );
    return Response.success(200, response);
  } catch (error) {
    return Response.error(404, error.message, error);
  }
};
