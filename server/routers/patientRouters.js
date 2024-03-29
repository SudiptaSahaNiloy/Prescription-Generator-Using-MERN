const express = require('express');
const { Patient } = require('../models/patientModels');
const router = express.Router();

const addPatient = async (req, res) => {
    // console.log(req.body);
    try {
        const result = await Patient.create({
            fullName: req.body.fullName,
            email: req.body.email,
            gender: req.body.gender,
            age: req.body.age,
            weight: req.body.weight,
            address: req.body.address,
            phoneNo: req.body.phoneNo,
            bloodGroup: req.body.bloodGroup,
            knownAllergies: req.body.knownAllergies
        });
        res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const getPatientInfo = async (req, res) => {
    // console.log(req.body);
    try {
        if (req.body.sortByType === "Name(asc)") {
            const result = await Patient.find().sort({ fullName: 'asc' });
            res.set("Access-Control-Allow-Origin", "http://localhost:3000");
            res.send(result);
        }
        else if (req.body.sortByType === "Name(desc)") {
            const result = await Patient.find().sort({ fullName: 'desc' });
            res.set("Access-Control-Allow-Origin", "http://localhost:3000");
            res.send(result);
        }
        else if (req.body.sortByType === "Age(asc)") {
            const result = await Patient.find().sort({ age: 'asc' });
            res.set("Access-Control-Allow-Origin", "http://localhost:3000");
            res.send(result);
        } else {
            const result = await Patient.find().sort({ age: 'desc' });
            res.set("Access-Control-Allow-Origin", "http://localhost:3000");
            res.send(result);
        }
    } catch (err) {
        return res.status(400).send(err);
    }
}

// const deletePatient = async (req, res) => {
//     try {
//         const deletePatient = await PatientDB.findByIdAndDelete(req.body.id);
//         // console.log(result);
//         // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
//         res.send(deletePatient);
//     } catch (err) {
//         return res.status(400).send(err);
//     }
// }

// const editPatient = async (req, res) => {
//     try {
//         const editPatient = await PatientDB.findOneAndUpdate(

//         );
//         res.send(deletePatient);
//     } catch (err) {
//         return res.status(400).send(err);
//     }
// }

router.route('/addPatient')
    .post(addPatient)
router.route('/getPatient')
    .post(getPatientInfo)
// .post(filterLocationList)

module.exports = router; 