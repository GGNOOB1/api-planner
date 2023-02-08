const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController');
const eventValidators = require('../validations/eventValidators');

router
    .route('/')
    .get(eventValidators.validateWeekDay, eventController.getAllEvents)
    .post(eventValidators.validateEvent, eventController.createEvent)
    .delete(
        eventValidators.validateWeekDay,
        eventController.deleteEventByWeekDay,
    );

router
    .route('/:id')
    .get(eventController.getEventById)
    .put(eventValidators.validateEvent, eventController.updateEvent)
    .delete(eventController.deleteEventById);

module.exports = router;
