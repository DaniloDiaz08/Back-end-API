const mongoose = require('mongoose');

const serieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
        gender: {
        type: String,
        required: true
    },
    chapters: {
        type: Number,
        required: true
    },
    timeChapters: {
        type: Number,
        required: true
    },
    seasons: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Workout', serieSchema);