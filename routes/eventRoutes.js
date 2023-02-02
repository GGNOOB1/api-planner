const express = require("express");
const router = express.Router();

const eventController = require("../controllers/eventController");

router.route("/").get(eventController.getAllEvents);

module.exports = router;