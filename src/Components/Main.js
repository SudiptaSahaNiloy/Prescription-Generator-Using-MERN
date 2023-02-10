import React, { useEffect } from 'react';
import Body from './Body/Body.js';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Auth from './Auth/Auth.js';
import PrescriptionGenerator from './PrescriptionSection/prescriptionGenerator.js';
import PatientInfo from './PatientInfo/patientInfo';
import AddPatientInfo from './AddPatientInfo/AddPatientInfo';
import { connect } from 'react-redux';
import { authCheck } from '../Redux/authActionCreator.js';
import AddDisease from './AddDisease/AddDisease.js';

const mapStateToProps = (state) => {
    return ({
        userId: state.userId,
        userName: state.userName,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        authCheck: () => dispatch(authCheck()),
    })
}

function Main(props) {
    useEffect(() => {
        props.authCheck();
    }, [])

    let routes = null;

    // console.log(props.userName !== null)

    if (props.userName) {
        // console.log("Logged In");
        routes = (
            <Routes>
                <Route path="/auth" exact element={<Auth />} />
                <Route path="/home" exact element={<Body />}>
                    <Route path="addPrescriptionInfo" exact element={<PrescriptionGenerator />} />
                    <Route path="patientInfo" exact element={<PatientInfo />} />
                    <Route path="addPatientInfo" exact element={<AddPatientInfo />} />
                    <Route path="addDisease" exact element={<AddDisease />} />
                    {/* <Route path="/generatePrescription" exact element={<CreatePDF />} /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/home" replace={true} />}
                    />
                </Route>
            </Routes>
        )
    } else {
        // console.log("Logged Out");
        routes = (
            <Routes>
                <Route path="/auth" exact element={<Auth />} />
                {/* <Route
                    path="*"
                    element={<Navigate to="/auth" replace={true} />}
                /> */}
            </Routes>
        )
    }

    return (
        <div>
            {routes}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)