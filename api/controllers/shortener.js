const { createShortener, getShortenerById } = require("../use-cases/shortener");

exports.create = async function(req, res, next) {
  const response = await createShortener(req.body);
  const { code } = response;
  return res.status(code).send(response);
};

exports.getById = async function(req, res, next) {
  const shortenerId = req.params.id;
  const response = await getShortenerById(shortenerId);
  const { code } = response;
  return res.status(code).send(response);
};
