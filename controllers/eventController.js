const Event = require('../models/eventModel');
const User = require('../models/userModel');

const { updateU } = require('../services/eventService');
const { createU } = require('../services/eventService');
const { readU } = require('../services/eventService');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await readU(req.query.dayOfTheWeek);

        if (events.length === 0) {
            return res
                .status(200)
                .json({ status: 'failed', message: 'Events not found' });
        }

        return res.status(200).json({
            status: 'success',
            results: events.length,
            data: {
                events,
            },
        });
    } catch (e) {
        res.status(404).json({
            status: 'failed',
            message: 'Not found events',
        });
    }
};

exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id).populate('userId');

        res.status(200).json({
            status: 'success',
            data: {
                event,
            },
        });
    } catch (e) {
        console.log(e);
        res.status(404).json({
            status: 'failed',
            message: 'This event not exist',
        });
    }
};

exports.createEvent = async (req, res) => {
    try {
        const event = await createU(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                event,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: 'failed',
            message: e.message || 'Something ats wrong',
        });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const event = await updateU(req.body, req.params.id);

        res.status(200).json({
            status: 'success',
            message: 'Event updated with success',
            data: {
                event,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: 'failed',
            message: e.message || 'Event not updated',
        });
    }
};

exports.deleteEventById = async (req, res, next) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (e) {
        res.status(404).json({ status: 'failed', message: 'Id not found' });
    }
};

exports.deleteEventByWeekDay = async (req, res) => {
    try {
        if (!req.query.dayOfTheWeek) {
            res.status(404).json({
                status: 'failed',
                message: 'Enter a valid weekday in the query',
            });
        }
        const weekDay = req.query.dayOfTheWeek;
        await Event.deleteMany({ weekDay: weekDay });
        res.status(204).end();
    } catch (e) {
        res.status(404).json({
            status: 'failed',
            message: e.message,
        });
    }
};
