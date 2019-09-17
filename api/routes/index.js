const express = require("express");
const router = express.Router();

const shortener = require("./shortener");

router.use("/shortener", shortener);

module.exports = router;
