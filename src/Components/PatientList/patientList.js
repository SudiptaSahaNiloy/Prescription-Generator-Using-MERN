import React from 'react';
import './stylesheet/patientList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
// import 'https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap';

function patientList() {
  return (
    <div className='patients'>
      <div>Patients</div>
      <div className='searchPatients border'>
        <Row>
          <input className='searchPatientsInput ' type="text" autoComplete="on" placeholder="Search Patients" />
        </Row>
      </div>
      <Row className='patientList'>
        <Col md='2'>
          <img src="avatar.jpg" alt="Avatar" className='patientImage'></img>
        </Col>
        <Col md='10'>
          <Row>
            <p className='patientName'>Kate Tunner</p>
          </Row>
          <Row>
            <p className='patientDisease'>Coronary Antherosclerosis</p>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default patientList

