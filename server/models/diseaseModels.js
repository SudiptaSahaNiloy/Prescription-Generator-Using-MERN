const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const diseaseSchema = mongoose.Schema({
    name: String,
    description: String,
    drugRef: String,
});

const Disease = mongoose.model('diseases', diseaseSchema);

exports.Disease = Disease;