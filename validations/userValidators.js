const Joi = require('joi');

exports.validateUser = (req, res, next) => {
    const userSchema = Joi.object({
        firstName: Joi.string().min(2).max(30).required(),
        lastName: Joi.string().min(2).max(30).required(),
        birthDate: Joi.date().required(),
        city: Joi.string().min(2).max(30).required(),
        country: Joi.string()
            .min(2)
            .max(30)

            .required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.string().required(),
    });

    const result = userSchema.validate(req.body);

    if (result.error) {
        return res.status(400).json({
            status: 'failed',
            message: result.error.message || 'error',
        });
    }

    if (req.body.confirmPassword != req.body.password) {
        return res.status(400).json({
            status: 'failed',
            message: 'The passwords are not equals',
        });
    }

    next();
};

exports.validateLogin = (req, res, next) => {
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(15).required(),
    });

    const result = loginSchema.validate(req.body);

    if (result.error) {
        return res.status(400).json({
            status: 'failed',
            message: result.error.message || 'error',
        });
    }

    next();
};
