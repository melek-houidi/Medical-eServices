
const mongoose = require('mongoose');
var hospitalPharmaciesSchema = new mongoose.Schema({///the type of elements
    image:{
        type: Image,
        required:true
    },
    name: {
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
var User = mongoose.model('hospitalPharmacieSchema', hospitalPharmaciesSchema)
module.exports =Hospitals ;
module.exports = Pharmacies ;
