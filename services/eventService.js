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

exports.updateU = async (body, id) => {
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
            runValidators: true,
        },
    );

    return event;
};

exports.readU = async query => {
    if (query) {
        const events = await Event.find({ weekDay: query });
        return events;
    } else {
        const events = await Event.find();
        return events;
    }
};
