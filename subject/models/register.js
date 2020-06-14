var mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: String,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Register = mongoose.model("register", RegisterSchema);
module.exports = Register;