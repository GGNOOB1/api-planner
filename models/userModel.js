const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'A name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'A last name is required'],
    },
    birthDate: {
        type: Date,
        required: [true, 'A birth date is required'],
    },
    city: {
        type: String,
        required: [true, 'A city is required'],
    },
    country: {
        type: String,
        required: [true, 'A country is required'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'A email is required'],
    },
    password: {
        type: String,
        required: [true, 'A password is required'],
        minLength: 5,
        maxLength: 16,
        select: false,
    },
    confirmPassword: {
        type: String,
        required: [true, 'A password confirm is required'],
        minLength: 5,
        maxLength: 16,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
