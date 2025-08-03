// models/application.js

const mongoose = require ('mongoose');

const applicationSchema = new mongoose.Schema ({
    name: String,
    email: String,
    role: String,
    skills: String,
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Application', applicationSchema)