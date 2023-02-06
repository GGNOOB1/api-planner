const mongoose = require('mongoose');
const Event = require('../models/eventModel');

exports.getAllEvents = async (req, res, next) => {
    try {
        const events = await Event.find();

        res.status(200).json({
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
        console.log(e);
    }
};

exports.getEventById = async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                event,
            },
        });
    } catch (e) {
        res.status(404).json({
            status: 'failed',
            message: 'This event not exist',
        });
        console.log(e);
    }
};

exports.createEvent = async (req, res, next) => {
    try {
        const event = await Event.create({
            description: req.body.description,
            userId: req.body.userId,
            dateTime: req.body.dateTime,
        });

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

exports.updateEvent = async (req, res, next) => {
    try {
        const event = await Event.findByIdAndUpdate(
            req.params.id,
            {
                description: req.body.description,
                dateTime: req.body.dateTime,
            },
            {
                runValidators: true,
                new: true,
            },
        );

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

exports.deleteEventByWeek = (req, res, next) => {};
