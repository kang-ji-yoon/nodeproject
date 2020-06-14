var mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
    singer: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Music = mongoose.model("music", MusicSchema);
module.exports = Music;