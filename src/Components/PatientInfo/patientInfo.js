import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './Stylesheet/patientInfo.css';
import { useNavigate, useLocation } from 'react-router-dom';

const mapStateToProps = (state) => {
  return ({
    patientInfo: state.patientInfo,
  })
}

function PatientInfo(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = () => {
    navigate("/home/addDisease", { state: { patientInfo: location.state.patientInfo } });
  }

  return (
    <div>
      {/* Disease Info start */}
      {/* <Row style={{ marginTop: '50px' }}>
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
      </Row> */}
      {/* Disease Info end */}

      <Row>
        {/* <Link to="/addPrescriptionInfo"> */}
        <Button variant="outline-primary" style={{ width: '200px', marginLeft: '40vw' }} onClick={() => handleOnClick()}>Add Disease</Button>
        {/* </Link> */}
      </Row>

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
          <p>Full Name</p>
          <p>Age</p>
          <p>Weight</p>
          <p>Gender</p>
          <p>Blood Group</p>
          <p>Known Allergies</p>
        </Col>
        <Col style={{
          fontFamily: "'Inter', sans-serif",
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '20px'
        }}>
          <p>{location.state.patientInfo.fullName}</p>
          <p>{location.state.patientInfo.age} years old</p>
          <p>{location.state.patientInfo.weight}</p>
          <p>{location.state.patientInfo.gender}</p>
          <p>{location.state.patientInfo.bloodGroup}</p>
          <p>{location.state.patientInfo.knownAllergies}</p>
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
          <p>{location.state.patientInfo.address}</p>
          <p>{location.state.patientInfo.phoneNo}</p>
        </Col>
      </Row>
      {/* Contact Information End */}
    </div >
  )
}

export default connect(mapStateToProps)(PatientInfo)