const express = require('express');
const { Medicine } = require('../models/medicineModels');
const router = express.Router();

const getSearchedMedicineList = async (req, res) => {
    try {
        const result = await Medicine.find({
            generic: req.body.generic
        });
        // console.log(result);
        res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

const getAllMedicineInfo = async (req, res) => {
    try {
        const result = await Medicine.find();
        res.set("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(result);
    } catch (err) {
        return res.status(400).send(err);
    }
}

// const filterLocationList = async (req, res) => {
//     console.log(req.body);
//     try {
//         const result = await Location.find({
//             "Region": req.body.Region,
//             "District": req.body.District,
//             "TradingArea": req.body.TradingArea,
//         })
//         // console.log(result);
//         res.set("Access-Control-Allow-Origin", "http://localhost:3000");
//         res.send(result);
//     } catch (err) {
//         return res.status(400).send(err);
//     }
// }

router.route('/')
    .post(getSearchedMedicineList)
    .get(getAllMedicineInfo)
// .post(filterLocationList)

module.exports = router; 