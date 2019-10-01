const Redis = require("ioredis");
const { REDIS_URL } = require("../config/constants");
module.exports = new Redis(REDIS_URL);
