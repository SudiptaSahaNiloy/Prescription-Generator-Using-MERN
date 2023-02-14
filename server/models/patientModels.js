const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const patientSchema = mongoose.Schema({
    fullName: String,
    email: String,
    gender: String,
    age: String,
    weight: String,
    address: String,
    phoneNo: String,
    bloodGroup: String,
    knownAllergies: String
});

const Patient = mongoose.model('patients', patientSchema);

exports.Patient = Patient;