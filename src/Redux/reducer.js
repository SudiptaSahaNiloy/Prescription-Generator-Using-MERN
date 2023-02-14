import * as actionTypes from "./actionTypes.js";

const INITIAL_STATE = {
    allMedicineResponse: [],
    searchedMedicineResponse: [],
    patientInfo: [],
    allPatientInfo: [],
    userId: "",
    userName: "",
}

export const reducer = (state = INITIAL_STATE, action) => {
    // console.log(action.payload);
    switch (action.type) {
        // Write you case here
        case actionTypes.ALL_MEDICINE_RESPONSE:
            return {
                ...state,
                allMedicineResponse: action.payload,
            }
        case actionTypes.SEARCHED_MEDICINE_RESPONSE:
            return {
                ...state,
                searchedMedicineResponse: action.payload,
            }
        case actionTypes.NEW_ADDED_PATIENT:
            return {
                ...state,
                patientInfo: action.payload,
            }
        case actionTypes.ALL_PATIENTS:
            return {
                ...state,
                allPatientInfo: action.payload,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                userId: action.payload.userId,
                userName: action.payload.userName,
            }
        default:
            return state;
    }
}