const User = require('../models/userModel');

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
    const user = await User.findOne({
        email: body.email,
        password: body.password,
    }).select('email password');

    if (!user) {
        throw new Error();
    }
    return user;
};

exports.validateUser = async (body, id) => {
    if (body.confirmPassword != body.password) {
        throw new Error('The passwords are not equals');
    }

    if (
        !body.firstName &&
        !body.lastName &&
        !body.birthDate &&
        !body.city &&
        !body.country &&
        !body.email &&
        !body.password
    ) {
        throw new Error('A field is missing');
    }

    const user = await User.findByIdAndUpdate(id, {
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
