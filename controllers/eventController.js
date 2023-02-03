const mongoose = require('mongoose');
const Event = require('../models/eventModel');

exports.getAllEvents = async (req, res, next) => {
    try {
        console.log(req.query);

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
        console.log(req.body);

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
            message: 'Something ats wrong',
        });
        console.log(e);
    }
};

exports.updateEvent = (req, res, next) => {};

exports.deleteEventById = async (req, res, next) => {
    const event = await Event.findByIdAndDelete(req.params.id);

    res.status(204).end();
};

exports.deleteEventByWeek = (req, res, next) => {};
