import React from 'react';
import { Formik } from 'formik';
import { Button, Form, FormGroup, Input, Col, Row, Alert, Label } from 'reactstrap';
import { postPatientInfo } from '../../Redux/mapPatientInfoActionCreator';
import { connect } from 'react-redux';
import { useNavigate, useHref } from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
    return ({
        postPatientInfo: (patientInfo) => { dispatch(postPatientInfo(patientInfo)) }
    })
}

function AddPatientInfo(props) {
    const navigate = useNavigate();

    const handleOnClick = () => {
        setTimeout(() => {
            window.location.reload();
            navigate("/home");
        }, 2000);
    }

    const addPatientInfoForm = (values, handleChange, handleSubmit, errors) => {
        return (
            <Form onSubmit={handleSubmit}>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="fullName"
                                values={values.fullName}
                                placeholder="Full Name" />
                            <span style={{ color: "red" }}>{errors.fullName}</span>
                        </FormGroup>
                    </Col><br />
                    <Col md={12}>
                        <FormGroup>
                            <Input
                                type="email"
                                onChange={handleChange}
                                name="email"
                                values={values.email}
                                placeholder="Write your email" />
                            <span style={{ color: "red" }}>{errors.email}</span>
                        </FormGroup>
                    </Col><br />
                    <Col md={12}>
                        <FormGroup>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="gender"
                                values={values.gender}
                                placeholder="Gender" />
                            <span style={{ color: "red" }}>{errors.gender}</span>
                        </FormGroup>
                    </Col><br />
                    <Col md={12}>
                        <FormGroup>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="age"
                                values={values.age}
                                placeholder="Age" />
                            <span style={{ color: "red" }}>{errors.age}</span>
                        </FormGroup>
                    </Col><br />
                    <Col md={12}>
                        <FormGroup>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="weight"
                                values={values.weight}
                                placeholder="weight" />
                            <span style={{ color: "red" }}>{errors.weight}</span>
                        </FormGroup>
                    </Col><br />
                    <Col md={12}>
                        <FormGroup>
                            <Input
                                type="tel"
                                onChange={handleChange}
                                name="phoneNo"
                                values={values.phoneNo}
                                placeholder="Add Phone No" />
                            <span style={{ color: "red" }}>{errors.phoneNo}</span>
                        </FormGroup>
                    </Col><br />
                    <Col md={12}>
                        <FormGroup>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="address"
                                values={values.address}
                                placeholder="Address" />
                        </FormGroup>
                    </Col><br />
                    <Col md={12}>
                        <FormGroup>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="bloodGroup"
                                values={values.bloodGroup}
                                placeholder="Blood Group" />
                            <span style={{ color: "red" }}>{errors.bloodGroup}</span>
                        </FormGroup>
                    </Col><br />
                    <Col md={12}>
                        <FormGroup>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="knownAllergies"
                                values={values.knownAllergies}
                                placeholder="Known Allergies" />
                            <span style={{ color: "red" }}>{errors.knownAllergies}</span>
                        </FormGroup>
                    </Col><br />
                </Row>
                <div className="d-flex justify-content-center">
                    <Button
                        type="submit"
                        onClick={() => handleOnClick()}
                        style={{
                            width: "30%",
                            marginLeft: '700px',
                            backgroundColor: "#1877F2",
                            fontSize: "20px",
                            fontWeight: "lighter",
                        }}>
                        Create Patient Profile
                    </Button>
                </div>
            </Form >
        )
    }
    return (
        <div>
            <h1>Enter Patient Info</h1>

            {/* Patient Info Input Start */}
            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    gender: "",
                    age: "",
                    weight: "",
                    phoneNo: "",
                    address: "",
                    bloodGroup: "",
                    knownAllergies: "",
                }}

                onSubmit={
                    (values) => {
                        console.log(values);
                        props.postPatientInfo(values);
                    }
                }

                validate={(values) => {
                    // console.log(values);
                    const errors = {};

                    if (!values.fullName) {
                        errors.fullName = "**Required";
                    }

                    if (!values.email) {
                        errors.email = "**Required";
                    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
                        errors.email = "**Invalid Email Address";
                    }

                    if (!values.gender) {
                        errors.gender = "**Required";
                    }

                    if (!values.phoneNo) {
                        errors.phoneNo = "**Required";
                    } else if (/(^ ([+]{ 1 } [8]{ 2 }| 0088)?(01){1}[3-9]{1}\d{8})$/.test(values.phoneNo)) {
                        errors.phoneNo = "**Invalid Phone Number";
                    }

                    if (!values.address) {
                        errors.address = "**Required";
                    }

                    if (!values.bloodGroup) {
                        errors.bloodGroup = "**Required";
                    }

                    if (!values.knownAllergies) {
                        errors.knownAllergies = "**Required";
                    }

                    // console.log("Errors: ", errors);
                    return errors;
                }}
            >
                {({ values, handleChange, handleSubmit, errors }) => {
                    return (
                        <div className="p-5 auth-form">
                            {addPatientInfoForm(values, handleChange, handleSubmit, errors)}
                        </div>
                    )
                }}
            </Formik>
            {/* Patient Info Input End */}
        </div>
    )
}

export default connect(null, mapDispatchToProps)(AddPatientInfo)