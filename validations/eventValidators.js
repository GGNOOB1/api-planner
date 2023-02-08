const Joi = require('joi');
const _ = require('lodash');

exports.validateEvent = (req, res, next) => {
    const eventSchema = Joi.object({
        description: Joi.string().min(5).max(300).required(),
        userId: Joi.string()
            .regex(/^[0-9a-fA-F]{24}$/, 'A valid object id is required')
            .required(),
        dateTime: Joi.date().required(),
    });

    const result = eventSchema.validate(req.body);

    if (result.error) {
        return res.status(400).json({
            status: 'failed',
            message: result.error.message || 'error',
        });
    }

    next();
};

exports.validateWeekDay = (req, res, next) => {
    if (!req.query.dayOfTheWeek) {
        next();
    } else {
        const weekDaySchema = Joi.object({
            weekDay: Joi.string().valid(
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ),
        });

        req.query.dayOfTheWeek = _.capitalize(req.query.dayOfTheWeek);

        const data = {
            weekDay: req.query.dayOfTheWeek,
        };
        const result = weekDaySchema.validate(data);

        if (result.error) {
            return res.status(400).json({
                status: 'failed',
                message: result.error.message || 'error',
            });
        }

        next();
    }
};

// exports.validateUpdateEvent = (req, res, next) => {
//     const updateEventSchema = Joi.object({
//         description: Joi.string().min(5).max(300).required(),
//         userId: Joi.string()
//             .regex(/^[0-9a-fA-F]{24}$/)
//             .required(),
//         dateTime: Joi.date().required(),
//     });

//     const result = eventSchema.validate(req.body);

//     if (result.error) {
//         return res.status(400).json({
//             status: 'failed',
//             message: result.error.message || 'error',
//         });
//     }

//     next();
// };
