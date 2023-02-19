import axios from "axios";
import * as actionTypes from "./actionTypes.js";

const mainURL = "http://localhost:8000";

export const allPatientInfo = (allPatientInfo) => {
    // console.log(locations);
    return {
        type: actionTypes.ALL_PATIENTS,
        payload: allPatientInfo,
    }
}

export const getAllPatientInfo = (sortByType) => dispatch => {
    console.log(sortByType);
    const URL = mainURL + "/Patient/getPatient";

    axios.post(URL, { sortByType: sortByType })
        .then(response => dispatch(allPatientInfo(response.data)))
}

export const newPatientInfo = (patientInfo) => {
    // console.log(locations);
    return {
        type: actionTypes.NEW_ADDED_PATIENT,
        payload: patientInfo,
    }
}

export const postPatientInfo = (patientInfo) => dispatch => {
    const URL = mainURL + "/Patient/addPatient";
    axios.post(URL, patientInfo)
        .then(response => dispatch(newPatientInfo(response.data)));
}