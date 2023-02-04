import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PatientInfo from './PatientInfo/patientInfo.js';
import PatientList from './PatientList/patientList.js';
import PrescriptionGenerator from './PrescriptionSection/prescriptionGenerator.js';
import './Main.css';
import { useState } from 'react';

function Main() {
    const [addNew, setaddNew] = useState(false);

    const onSubmit = () => {
        setaddNew(!addNew);
    }

    return (
        <div>
            <Row>
                <Col md={4} className='PatientListStyle'>
                    <PatientList />
                </Col>
                <Col md={8} className='PatientInfoStyle' style={{
                    padding: '100px',
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: 'normal',
                }}>
                    {/* top info section start */}
                    <Row>
                        <Col>
                            <Row>
                                <Col md='2'>
                                    <img src="avatar.jpg" alt="Avatar" className='patientImage'></img>
                                </Col>
                                <Col md='10'>
                                    <Row>
                                        <p data-testid='pg-1' className='patientName'>Kate Tunner</p>
                                    </Row>
                                    <Row>
                                        <p className='patientDisease'>Coronary Antherosclerosis</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Button onClick={() => onSubmit()}>Create New Prescription</Button>
                        </Col>
                    </Row>
                    {/* top info section end */}

                    {addNew ? <PatientInfo /> : <PrescriptionGenerator />}
                </Col>
            </Row>
        </div>

    )
}

export default Main