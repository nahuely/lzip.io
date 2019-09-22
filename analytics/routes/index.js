const express = require("express");
const router = express.Router();

const stats = require("./stats");

router.use("/stats", stats);

module.exports = router;
