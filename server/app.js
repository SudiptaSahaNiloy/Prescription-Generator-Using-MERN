const express = require('express');
const app = express();
const medicineRouter = require('./routers/medicineRouters');
const patientRouter = require('./routers/patientRouters');
const mongoose = require('mongoose');
const cors = require("cors");

// mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://sudiptasahaniloy:bangladesh305968@prescriptiongeneratordb.drn0ztj.mongodb.net/MedicineDB?w=majority")
    .then(() => console.log("Connected to MONGO DB"))
    .catch(() => console.log("Failed to connect"));

app.use(cors());
app.use(express.json());
app.use('/', medicineRouter); //for the router in locationrouter
app.use('/Patient', patientRouter);

const port = 8000;

app.listen(port, () => {
    console.log("Listening on port 8000......");
})