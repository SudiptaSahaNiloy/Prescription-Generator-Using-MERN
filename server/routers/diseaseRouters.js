const express = require('express');
const { DiseaseDB } = require('../models/diseaseModels');
const router = express.Router();

const addDisease = async (req, res) => {
    try {
        const newDisease = await DiseaseDB.create({
            name: req.body.name,
            description: req.body.description,
            drugRef: req.body.drugRef,
        });
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(newDisease);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const checkDisease = async (req, res) => {
    try {
        const result = await Medicine.find({
            name: req.body.name,
            description: req.body.description,
            drugRef: req.body.drugRef,
        });
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const deleteDisease = async (req, res) => {
    try {
        const deleteDisease = await DiseaseDB.findByIdAndDelete(req.body.id);
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(deleteDisease);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const editDisease = async (req, res) => {
    try {
        const editDisease = await DiseaseDB.findOneAndUpdate(

        );
        res.send(deleteDisease);
    } catch (err) {
        return res.status(400).send(err);
    }
}

router.route('/')
    .get(getMedicineList)
// .post(filterLocationList)

module.exports = router; 