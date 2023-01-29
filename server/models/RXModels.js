const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const diseaseSchema = mongoose.Schema({
    pharmacistId: String,
    BMDCLicense: String,
    patientId: String,
    drugId: String,
    diseaseId: String,
});

const Disease = mongoose.model('diseases', diseaseSchema);

exports.Disease = Disease;