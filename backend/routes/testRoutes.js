const express = require("express");
const { testControllers } = require("../controllers/testControllers");

// rest object
const router = express.Router();

// routes
router.get("/", testControllers);

module.exports = router;
