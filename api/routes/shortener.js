const express = require("express");
const router = express.Router();
// const middlewares = require("../middlewares");

const { getById, create } = require("../controllers/shortener");

router.get("/:id", getById);
router.post("/", create);

module.exports = router;
