import React from 'react';
import './stylesheet/patientList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
// import 'https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap';
import { Link, useNavigate } from "react-router-dom";
import avatar from './avatar.jpg';
import { getAllPatientInfo } from './../../Redux/mapPatientInfoActionCreator';
import { connect } from 'react-redux';
import { DropdownItem } from 'reactstrap';

const mapStateToProps = (state) => {
  return ({
    allPatientInfo: state.allPatientInfo,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllPatientInfo: (sortByType) => dispatch(getAllPatientInfo(sortByType))
  })
}

function PatientList(props) {
  const [sortByType, setsortByType] = useState('Name(asc)');

  const navigate = useNavigate();

  useEffect(() => {
    props.getAllPatientInfo(sortByType);
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
        <Row className='border'>
          {/* <input className='searchPatientsInput' type="text" autoComplete="on" placeholder="Search Patients" /> */}
          <Dropdown>
            <Dropdown.Toggle style={{ width: '400px', padding: '10px' }} variant="success" id="dropdown-basic">
              Sort By {sortByType}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setsortByType('Name(asc)')}>Name (Ascending)</Dropdown.Item>
              <Dropdown.Item onClick={() => setsortByType('Name(desc)')}>Name (Descending)</Dropdown.Item>
              <Dropdown.Item onClick={() => setsortByType('Age(asc)')}>Age (Ascending)</Dropdown.Item>
              <Dropdown.Item onClick={() => setsortByType('Age(desc)')}>Age (Descending)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
                    <div className='patientDisease border'>{item.address}</div>
                    <div className='patientDisease border'>Age: {item.age}</div>
                  </Row>
                  {/* <Row>
                    <p className='patientDisease'>{item.age}</p>
                  </Row> */}
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

