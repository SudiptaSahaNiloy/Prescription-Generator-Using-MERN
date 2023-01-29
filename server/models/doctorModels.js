const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const doctorSchema = mongoose.Schema({
    BMDC_License: String,
    name: String,
    email: String,
    password: String,
});

const Doctor = mongoose.model('medicines', doctorSchema);

exports.Doctor = Doctor;