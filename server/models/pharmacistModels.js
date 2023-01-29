const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const pharmacistSchema = mongoose.Schema({
    regNo: String,
    name: String,
    email: String,
    password: String,
    gender: String,
    address: String,
});

const Pharmacist = mongoose.model('pharmacists', pharmacistSchema);

exports.Pharmacist = Pharmacist;