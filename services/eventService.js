const Event = require('../models/eventModel');

exports.createU = async body => {
    const eventResponse = await Event.create({
        description: body.description,
        userId: body.userId,
        dateTime: body.dateTime,
    });

    const event = {
        description: eventResponse.description,
        userId: eventResponse.userId,
        dateTime: eventResponse.dateTime,
        createdAt: eventResponse.createdAt,
    };

    return event;
};

exports.update = async (body, id) => {
    const event = await Event.findByIdAndUpdate(
        id,
        {
            description: body.description,
            userId: body.userId,
            dateTime: body.dateTime,
            weekDay: '',
        },
        {
            new: true,
        },
    );

    return event;
};

exports.readU = async query => {
    if (query) {
        const events = await Event.find({ weekDay: query }).populate('userId');
        return events;
    } else {
        const events = await Event.find().populate('userId');
        return events;
    }
};
