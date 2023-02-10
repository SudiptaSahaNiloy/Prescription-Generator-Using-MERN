import { Formik } from 'formik';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Input, Col, Row, Alert, Label } from 'reactstrap';
import { auth, userData } from '../../Redux/authActionCreator';
import './Stylesheet/Auth.css';

const mapStateToProps = (state) => {
    return {
        errorMsg: state.errorMsg,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userData: (values) => dispatch(userData(values)),
        auth: (email, password) => dispatch(auth(email, password))
    }
}

class Auth extends Component {
    state = {
        authMode: "signInWithPassword",
    }

    render() {
        const signUpForm = (values, handleChange, handleSubmit, errors) => {
            return (
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Input
                                    type="text"
                                    onChange={handleChange}
                                    name="firstName"
                                    values={values.firstName}
                                    placeholder="First Name" />
                                <span style={{ color: "red" }}>{errors.firstName}</span>
                            </FormGroup>
                        </Col><br />
                        <Col>
                            <FormGroup>
                                <Input
                                    type="text"
                                    onChange={handleChange}
                                    name="lastName"
                                    values={values.lastName}
                                    placeholder="Last Name" />
                                <span style={{ color: "red" }}>{errors.lastName}</span>
                            </FormGroup>
                        </Col><br />
                    </Row><br />
                    <Row form>
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
                                    type="password"
                                    onChange={handleChange}
                                    name="password"
                                    values={values.password}
                                    placeholder="Password" />
                                <span style={{ color: "red" }}>{errors.password}</span>
                            </FormGroup>
                        </Col><br />
                        <Col md={12}>
                            <FormGroup>
                                <Input
                                    type="password"
                                    onChange={handleChange}
                                    name="confirmPassword"
                                    values={values.confirmPassword}
                                    placeholder="Confirm Password" />
                                <span style={{ color: "red" }}>{errors.confirmPassword}</span>
                            </FormGroup>
                        </Col><br />
                        <Col md={12}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    onChange={handleChange}
                                    name="instituition"
                                    values={values.instituition}
                                    placeholder="Current Organization" />
                            </FormGroup>
                        </Col><br />
                        <Col md={12}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    onChange={handleChange}
                                    name="walletAddress"
                                    values={values.walletAddress}
                                    placeholder="Wallet Address" />
                            </FormGroup>
                        </Col><br />
                    </Row>
                    <div>
                        Already signed up?
                        <a href="/login" style={{ textDecoration: "none" }}> Login</a>
                    </div><br />
                    <div className="d-flex justify-content-center">
                        <Button
                            type="submit"
                            // onClick={() => this.setState({ authMode: "signInWithPassword" })}
                            style={{
                                width: "100%",
                                backgroundColor: "#1877F2",
                                fontSize: "20px",
                                fontWeight: "lighter",
                            }}>
                            Sign Up
                        </Button>
                    </div>
                </Form>
            )
        }

        const loginForm = (values, handleChange, handleSubmit) => {
            return (
                <Form inline onSubmit={handleSubmit}>
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                        <Input
                            type="email"
                            values={values.email}
                            name="email"
                            onChange={handleChange}
                            placeholder="Email address" />
                    </FormGroup><br />
                    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                        <Input
                            type="password"
                            values={values.password}
                            name="password"
                            onChange={handleChange}
                            placeholder="Password" />
                    </FormGroup><br />
                    <div className="d-flex justify-content-center">
                        <Button
                            type="submit"
                            style={{
                                width: "100%",
                                backgroundColor: "#1877F2",
                                fontSize: "20px",
                                fontWeight: "lighter",
                            }}>
                            Login
                        </Button>
                    </div>
                    <hr /><br />
                    <div className="d-flex justify-content-center">
                        <Button
                            onClick={() => this.setState({ authMode: "signUp" })}
                            style={{ width: "80%", backgroundColor: "#42B72A", fontSize: "20px" }}>
                            Create New Account
                        </Button>
                    </div>
                </Form>
            )
        }

        const alertMsg = <Alert color="danger">{this.props.errorMsg}</Alert>;
        // const successMsg = <Alert color="succes">{this.props.errorMsg}</Alert>;

        return (
            <div className="login-section">
                <div className="row">
                    {/* {this.props.errorMsg !== null ? alertMsg : null} */}
                    <div className="col-md-8 login-image-section">
                        {/* <img src="Images/Login.jpg" className="img-fluid" alt="Login_Car" /> */}
                    </div>
                    <div className="col-md-4">
                        <Formik
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                password: "",
                                confirmPassword: "",
                                instituition: "",
                                walletAddress: "",
                            }}

                            onSubmit={
                                (values) => {
                                    console.log(values);
                                    // signIn
                                    this.props.auth(values.email, values.password);

                                    // signUp
                                    if (this.state.authMode === 'signUp') {
                                        this.props.userData(values);
                                        this.setState({ authMode: "signInWithPassword" })
                                    } 
                                    else {
                                        setTimeout(() => {
                                            window.location.replace('/home');
                                        }, 100);
                                    }
                                }
                            }

                            validate={(values) => {
                                // console.log(values);
                                const errors = {};

                                if (!values.email) {
                                    errors.email = "**Required";
                                } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
                                    errors.email = "**Invalid Email Address";
                                }

                                if (!values.password) {
                                    errors.password = "**Required";
                                } else if (values.password.length < 4) {
                                    errors.password = "**Must be at least 4 characters!";
                                }

                                if (this.state.authMode === 'signUp') {
                                    if (!values.firstName) {
                                        errors.firstName = "**Required";
                                    }

                                    if (!values.lastName) {
                                        errors.lastName = "**Required";
                                    }
                                    if (!values.confirmPassword) {
                                        errors.confirmPassword = "**Required";
                                    } else if (values.password !== values.confirmPassword) {
                                        errors.confirmPassword = "**Password field doesn't match!"
                                    }
                                }
                                // console.log("Errors: ", errors);
                                return errors;
                            }}
                        >
                            {({ values, handleChange, handleSubmit, errors }) => {
                                return (
                                    <div className="p-5 auth-form border">
                                        {this.state.authMode === "signInWithPassword" ?
                                            loginForm(values, handleChange, handleSubmit, errors) :
                                            signUpForm(values, handleChange, handleSubmit, errors)}
                                    </div>
                                )
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);