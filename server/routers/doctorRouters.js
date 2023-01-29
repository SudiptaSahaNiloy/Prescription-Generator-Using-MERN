const express = require('express');
const { DoctorDB } = require('../models/doctorModels');
const router = express.Router();

const addDoctor = async (req, res) => {
    try {
        const newDoctor = await DoctorDB.create({
            BMDC_License: req.body.BMDC_License,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(newDoctor);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const deleteDoctor = async (req, res) => {
    try {
        const deleteDoctor = await DoctorDB.findByIdAndDelete(req.body.id);
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(deleteDoctor);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const editDoctor = async (req, res) => {
    try {
        const editDoctor = await DoctorDB.findOneAndUpdate(

        );
    res.send(deleteDoctor);
} catch (err) {
    return res.status(400).send(err);
}
}

router.route('/')
    .get(getMedicineList)
// .post(filterLocationList)

module.exports = router; 