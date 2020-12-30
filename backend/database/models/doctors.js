const mongoose = require('mongoose');
var DoctorsSchema = new mongoose.Schema({///the type of elements
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    adress:{
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    disponibility: {
        type: String,
        required: true
    }
})
var Doctors = mongoose.model('doctor', DoctorsSchema)
module.exports = Doctors;