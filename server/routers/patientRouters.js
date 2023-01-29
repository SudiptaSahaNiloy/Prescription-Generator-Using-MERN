const express = require('express');
const { PatientDB } = require('../models/patientModels');
const router = express.Router();

const addPatient = async (req, res) => {
    try {
        const newPatient = await PatientDB.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            address: req.body.address,
            phoneNo: req.body.phoneNo,
            bloodGroup: req.body.bloodGroup,
            knownAllergies: req.body.knownAllergies
        });
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(newPatient);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const deletePatient = async (req, res) => {
    try {
        const deletePatient = await PatientDB.findByIdAndDelete(req.body.id);
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(deletePatient);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const editPatient = async (req, res) => {
    try {
        const editPatient = await PatientDB.findOneAndUpdate(

        );
        res.send(deletePatient);
    } catch (err) {
        return res.status(400).send(err);
    }
}

router.route('/')
    .get(getMedicineList)
// .post(filterLocationList)

module.exports = router; 