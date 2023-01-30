import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PatientInfo from './PatientInfo/patientInfo';
import PatientList from './PatientList/patientList';
import PrescriptionGenerator from './PrescriptionSection/prescriptionGenerator';
import './Main.css';

function Main() {
    return (
        // <div>
        //     <Row>
        //         <Col md={4} className='PatientListStyle'>
        //             <PatientList />
        //         </Col>
        //         <Col md={8} className='PatientInfoStyle' style={{
        //             padding: '100px',
        //             fontFamily: "'Inter', sans-serif",
        //             fontStyle: 'normal',
        //         }}>
        //             {/* top info section start */}
        //             <Row>
        //                 <Col>
        //                     <Row>
        //                         <Col md='2'>
        //                             <img src="avatar.jpg" alt="Avatar" className='patientImage'></img>
        //                         </Col>
        //                         <Col md='10'>
        //                             <Row>
        //                                 <p className='patientName'>Kate Tunner</p>
        //                             </Row>
        //                             <Row>
        //                                 <p className='patientDisease'>Coronary Antherosclerosis</p>
        //                             </Row>
        //                         </Col>
        //                     </Row>
        //                 </Col>
        //                 <Col>
        //                     <Button>Add New</Button>
        //                 </Col>
        //             </Row>
        //             {/* top info section end */}
        //             {/* <PatientInfo /> */}
        //             <PrescriptionGenerator />
        //         </Col>
        //     </Row>
        // </div>
    )
}

export default Main