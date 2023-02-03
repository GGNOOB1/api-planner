const User = require('../models/userModel');

exports.signUp = async (req, res, next) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            city: req.body.city,
            country: req.body.country,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
        });

        res.status(201).json({
            status: 'created',
            data: {
                user,
            },
            message: 'User created with success',
        });
    } catch (e) {
        res.status(400).json({
            status: 'failed',
            message: 'User not created',
        });
    }
};

exports.signIn = async (req, res, next) => {
    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
        });

        res.status(200).json({
            status: 'success',
            message: 'User logged in with successfully',
        });
    } catch (e) {
        res.status(400).json({
            status: 'failed',
            message: 'Email or password are not correct',
        });
    }
};

exports.updateUser = (req, res, next) => {};
