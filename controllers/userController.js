const User = require('../models/userModel');
const { createUser } = require('../services/userService');
const { login } = require('../services/userService');
const { validateUser } = require('../services/userService');

exports.signUp = async (req, res, next) => {
    try {
        const user = await createUser(req.body);

        res.status(201).json({
            status: 'created',
            message: 'User created with success',
            data: {
                user,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: 'failed',
            message: e.message || 'User not created',
        });
    }
};

exports.signIn = async (req, res, next) => {
    try {
        await login(req.body);

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

exports.updateUser = async (req, res, next) => {
    const user = await validateUser(req.body, req.params.id);

    try {
        res.status(200).json({
            status: 'success',
            message: 'User update with success',
            data: {
                user,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: 'failed',
            message: e.message || 'User not updated',
        });
    }
};
