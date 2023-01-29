const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const patientSchema = mongoose.Schema({
    regNo: String,
    name: String,
    email: String,
    password: String,
    gender: String,
    address: String,
    phoneNo: String,
    bloodGroup: String,
    knownAllergies: String,
});

const Patient = mongoose.model('patients', patientSchema);

exports.Patient = Patient;