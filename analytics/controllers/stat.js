const { createShortener, getShortenerById } = require("../use-cases/shortener");

exports.create = async function(req, res, next) {
  const { hash, success } = req.body;
  const { "user-agent": userAgent, referer } = req.headers;
  const response = await createShortener(hash, userAgent, referer, success);
  const { code } = response;
  return res.status(code).send(response);
};

exports.getById = async function(req, res, next) {
  const shortenerId = req.params.id;
  const response = await getShortenerById(shortenerId);
  const { code } = response;
  return res.status(code).send(response);
};
