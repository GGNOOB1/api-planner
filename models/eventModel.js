const mongoose = require('mongoose');
const moment = require('moment');

const EventSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'A description is required'],
    },
    userId: {
        type: String,
        required: [true, 'A userId is required'],
    },
    dateTime: {
        type: Date,
        required: [true, 'A date is required'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    weekDay: {
        type: String,
        select: false,
    },
});

const daysWeek = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
};

EventSchema.pre('save', function (next) {
    const date = this.dateTime;
    const weekDay = date.getDay();
    this.weekDay = daysWeek[weekDay];

    next();
});

EventSchema.pre('findOneAndUpdate', function (next) {
    const originalDate = this._update.dateTime;
    const dateString = moment(originalDate).toISOString();
    const date = new Date(dateString);
    const weekDay = date.getDay();

    this._update.weekDay = daysWeek[weekDay];

    next();
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
