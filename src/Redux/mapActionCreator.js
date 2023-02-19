import axios from "axios";
import * as actionTypes from "./actionTypes.js";

const mainURL = "http://localhost:8000";

export const searchedMedicineResponse = (medList) => {
    // console.log(locations);
    return {
        type: actionTypes.SEARCHED_MEDICINE_RESPONSE,
        payload: medList,
    }
}

export const getSearchMedicineInfo = (searchedMedicineType, searchMedicine) => dispatch => {
    const URL = mainURL;
    axios.post(URL, { searchedMedicineType: searchedMedicineType, searchMedicine: searchMedicine })
        .then(response => dispatch(searchedMedicineResponse(response.data)));
}

export const allMedicineResponse = (allMedicines) => {
    return {
        type: actionTypes.ALL_MEDICINE_RESPONSE,
        payload: allMedicines
    }
}

export const getAllMedicineInfo = () => dispatch => {
    const URL = mainURL;
    axios.get(URL)
        .then(response => dispatch(allMedicineResponse(response.data)));
}