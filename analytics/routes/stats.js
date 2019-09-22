const express = require("express");
const router = express.Router();

const { getById, create } = require("../controllers/stat");

router.get("/:id", getById);
router.post("/", create);

module.exports = router;
