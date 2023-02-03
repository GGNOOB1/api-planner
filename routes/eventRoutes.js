const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');

router
    .route('/')
    .get(eventController.getAllEvents)
    .post(eventController.createEvent);

router
    .route('/:id')
    .get(eventController.getEventById)
    .delete(eventController.deleteEventById);

module.exports = router;
