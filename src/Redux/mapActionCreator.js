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

export const getSearchMedicineInfo = (genericName) => dispatch => {
    const URL = mainURL;
    axios.post(URL, { generic: genericName })
        .then(response => dispatch(searchedMedicineResponse(response.data)));
}