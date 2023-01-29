const express = require('express');
const { PharmacistDB } = require('../models/pharmacistModels');
const router = express.Router();

const addPharmacist = async (req, res) => {
    try {
        const newPharmacist = await PharmacistDB.create({
            regNo: req.body.regNo,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            address: req.body.address,
        });
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(newPharmacist);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const deletePharmacist = async (req, res) => {
    try {
        const deletePharmacist = await PharmacistDB.findByIdAndDelete(req.body.id);
        // console.log(result);
        // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(deletePharmacist);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const editPharmacist = async (req, res) => {
    try {
        const editPharmacist = await PharmacistDB.findOneAndUpdate(

        );
        res.send(deletePharmacist);
    } catch (err) {
        return res.status(400).send(err);
    }
}

router.route('/')
    .get(getMedicineList)
// .post(filterLocationList)

module.exports = router; 