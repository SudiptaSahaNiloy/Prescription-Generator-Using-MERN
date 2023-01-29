const express = require('express');
const { RXDB } = require('../models/RXModels');
const router = express.Router();

const postRX = async (req, res) => {
    try {
        const newRX = await RXDB.create({
            pharmacistId: req.body.pharmacistId,
            BMDCLicense: req.body.BMDCLicense,
            patientId: req.body.patientId,
            drugId: req.body.drugId,
            diseaseId: req.body.diseaseId,
        });
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(newRX);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const getRX = async (req, res) => {
    try {
        const result = await Medicine.find({
            pharmacistId: req.body.pharmacistId,
            BMDCLicense: req.body.BMDCLicense,
            patientId: req.body.patientId,
            drugId: req.body.drugId,
            diseaseId: req.body.diseaseId
        });
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const deleteRX = async (req, res) => {
    try {
        const deleteRX = await RXDB.findByIdAndDelete(req.body.id);
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(deleteRX);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const editRX = async (req, res) => {
    try {
        const editRX = await RXDB.findOneAndUpdate(

        );
        res.send(deleteRX);
    } catch (err) {
        return res.status(400).send(err);
    }
}

router.route('/')
    .get(getMedicineList)
// .post(filterLocationList)

module.exports = router; 