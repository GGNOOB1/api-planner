const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.createUser = async body => {
    if (body.confirmPassword != body.password) {
        throw new Error('The passwords are not equals');
    }
    const user = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        birthDate: body.birthDate,
        city: body.city,
        country: body.country,
        email: body.email,
        password: body.password,
        confirmPassword: body.confirmPassword,
    });
    return user;
};

exports.login = async body => {
    const user = await User.findOne({ email: body.email }).select(
        'firstName email password',
    );
    const result = await bcrypt.compare(body.password, user.password);
    if (result) {
        return user.firstName;
    } else {
        throw new Error();
    }
};

exports.userUpdate = async (body, id) => {
    const user = await User.findOneAndUpdate(
        { _id: id },
        {
            firstName: body.firstName,
            lastName: body.lastName,
            birthDate: body.birthDate,
            city: body.city,
            country: body.country,
            email: body.email,
            password: body.password,
            confirmPassword: body.confirmPassword,
        },
        {
            new: true,
            runValidators: true,
        },
    );

    return user;
};
