import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import './Stylesheet/patientInfo.css';
import { axios } from 'axios';

function patientInfo() {
  return (
    <div>
      {/* Disease Info start */}
      <Row style={{ marginTop: '50px' }}>
        <h1>Latest Diagnosis</h1>
        <div style={{ border: '1px solid #000000', textAlign: 'left', marginLeft: '0', marginBottom: '20px' }} />
        <Col>
          <Row>
            <div style={{ width: '217px', height: '94px', backgroundColor: 'rgba(217, 217, 217, 0.72)', borderRadius: '10px' }}>
              <h5 style={{ paddingTop: '17px' }}>Depressive Disorder</h5>
              <div style={{ paddingInline: '34px' }}>Octobor 7, 2011</div>
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <div style={{ width: '217px', height: '94px', backgroundColor: 'rgba(217, 217, 217, 0.72)', borderRadius: '10px' }}>
              <h5 style={{ paddingTop: '17px' }}>Depressive Disorder</h5>
              <div style={{ paddingInline: '34px' }}>Octobor 7, 2011</div>
            </div>
          </Row>
        </Col>
        <Col>
          <Row>
            <div style={{ width: '217px', height: '94px', backgroundColor: 'rgba(217, 217, 217, 0.72)', borderRadius: '10px' }}>
              <h5 style={{ paddingTop: '17px' }}>Depressive Disorder</h5>
              <div style={{ paddingInline: '34px' }}>Octobor 7, 2011</div>
            </div>
          </Row>
        </Col>
      </Row>
      {/* Disease Info end */}

      {/* General Info Section start*/}
      <Row style={{ marginTop: '50px' }}>
        <h1>General Information</h1>
        <div style={{ border: '1px solid #000000', textAlign: 'left', marginLeft: '0', marginBottom: '20px' }} />
        <Col style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '20px'
        }}>
          <p>Date of Birth</p>
          <p>Age</p>
          <p>Sex</p>
          <p>Blood Group</p>
        </Col>
        <Col style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '20px'
        }}>
          <p>April 14, 1998</p>
          <p>30 years old</p>
          <p>Male</p>
          <p>B+</p>
        </Col>
      </Row>
      {/* General Info Section end*/}

      {/* Contact Information Start */}
      <Row style={{ marginTop: '50px' }}>
        <h1>Contact Information</h1>
        <div style={{ border: '1px solid #000000', textAlign: 'left', marginLeft: '0', marginBottom: '20px' }} />
        <Col style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '20px'
        }}>
          <p>Address</p>
          <p>Phone Number</p>
        </Col>
        <Col style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '20px'
        }}>
          <p>3/7, Mdpur, Dhaka</p>
          <p>+8801733333331</p>
        </Col>
      </Row>
      {/* Contact Information End */}
    </div>
  )
}

export default patientInfo