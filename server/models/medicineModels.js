const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const medicineSchema = mongoose.Schema({
    brandId: String,
    brandName: String,
    type: String,
    slug: String,
    dosageForm: String,
    generic: String,
    strength: String,
    manufacturer: String,
    packageContainer: String,
});

const Medicine = mongoose.model('medicines', medicineSchema);

exports.Medicine = Medicine;