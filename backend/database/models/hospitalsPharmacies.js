
const mongoose = require('mongoose');
var hospitalPharmaciesSchema = new mongoose.Schema({///the type of elements
    // image:{
    //     type: Image,
    //     required:true
    // },
    pharmacy: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    adress:{
        type: String,
        required: true
    },
    disponibility:{
        type: String,
        required: true
    }
})
var hospitals = mongoose.model('pharmacy', hospitalPharmaciesSchema)
module.exports =hospitals ;
