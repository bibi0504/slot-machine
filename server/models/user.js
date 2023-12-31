const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Email required'],
            index: true,
            unique: [true, 'User already exists'],
        },
        password: {
            type: String,
            required: [true, 'Password required'],
            min: 8,
            max: 256,
        },
        // is user active?
        active: {
            type: Boolean,
            default: true,
        },
        // is user logged in?
        loggedIn: {
            type: Boolean,
            default: false,
        },
        dob: {
            type: Date,
            required: [true, 'Date of Birth required'],
        },
        attempts: {
            type: Number,
            default: 50,
        },
        points: {
            type: Number,
            default: 0,
        },
        coupons: {
            type: [String],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
