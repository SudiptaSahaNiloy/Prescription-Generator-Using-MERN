import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PatientList from '../PatientList/patientList';
import PrescriptionGenerator from '../PrescriptionSection/prescriptionGenerator.js';
import './Stylesheet/Body.css';
import { useState } from 'react';
import AddPatientInfo from '../AddPatientInfo/AddPatientInfo';
import { Navigate, Route, Routes } from 'react-router';
import PatientInfo from '../PatientInfo/patientInfo';
import CreatePDF from '../PrescriptionSection/CreatePDF/createpdf';
import AddDisease from '../AddDisease/AddDisease';


function Body() {
    const [addPatient, setaddPatient] = useState(false);

    let routes = null;

    routes = (
        <Routes>
            <Route path="/addPrescriptionInfo" exact element={<PrescriptionGenerator />} />
            <Route path="/patientInfo" exact element={<PatientInfo />} />
            <Route path="/addPatientInfo" exact element={<AddPatientInfo />} />
            <Route path="/generatePrescription" exact element={<CreatePDF />} />
            <Route path="addDisease" exact element={<AddDisease />} />
        </Routes>
    )

    return (
        <div>
            <Row>
                <Col md={4} className='PatientListStyle'>
                    <PatientList setaddPatient={setaddPatient} />
                </Col>
                <Col md={8} className='PatientInfoStyle' style={{
                    padding: '100px',
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: 'normal',
                }}>
                    {routes}
                </Col>
            </Row>
        </div>
    )
}

export default Body