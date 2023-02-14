import React from 'react';
import './stylesheet/patientList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
// import 'https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap';
import { Link, useNavigate } from "react-router-dom";
import avatar from './avatar.jpg';
import { getAllPatientInfo } from './../../Redux/mapPatientInfoActionCreator';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return ({
    allPatientInfo: state.allPatientInfo,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllPatientInfo: () => dispatch(getAllPatientInfo())
  })
}

function PatientList(props) {
  const navigate = useNavigate();

  useEffect(() => {
    props.getAllPatientInfo();
  }, [props.allPatientInfo])

  return (
    <div className='patients'>
      <div>Patients</div>
      <Link to="addPatientInfo">
        <motion.button
          href="/prescriptionInfo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          value="everyday"
          style={{
            width: '400px',
            height: 'auto',
            paddingBlock: '7px',
            background: 'rgba(38, 2, 255, 0.51)',
            borderWidth: '0px',
            color: '#00109B',
            marginTop: '10px',
            borderRadius: '10px',
            fontFamily: "'Inter', sans-serif",
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
          }}>Add Patients</motion.button>
      </Link>
      <div className='searchPatients'>
        <Row>
          <input className='searchPatientsInput' type="text" autoComplete="on" placeholder="Search Patients" />
        </Row>
      </div>
      <Row className='patientList'>
        {props.allPatientInfo.map((item) => {
          return (
            <motion.div
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.8 }}
            >
              <Row style={{
                width: '550px',
                height: '94px',
                marginTop: '10px',
                backgroundColor: 'rgba(217, 217, 217, 0.72)',
                borderRadius: '10px',
                cursor: 'pointer'
              }} onClick={() => navigate("/home/patientInfo", { state: { patientInfo: item } })}>
                <Col md='2'>
                  <img src={avatar} alt="Avatar" className='patientImage'></img>
                </Col>
                <Col md='10'>
                  <Row>
                    <p className='patientName'>{item.fullName}</p>
                  </Row>
                  <Row>
                    <p className='patientDisease'>{item.address}</p>
                  </Row>
                </Col>
              </Row>
            </motion.div>

          )
        })}
      </Row>
    </div >
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList)

