const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'A description is needed'],
    },
    userId: String,
    dateTime: {
        type: Date,
        required: [true, 'A date is needed'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
