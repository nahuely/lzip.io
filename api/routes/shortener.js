const express = require("express");
const router = express.Router();

const { getById, create } = require("../controllers/shortener");

router.get("/:id", getById);
router.post("/", create);
router.get("/inspect/:id", getById);

module.exports = router;
