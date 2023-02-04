import * as actionTypes from "./actionTypes";

const INITIAL_STATE = {
    searchedMedicineResponse: [],
}

export const reducer = (state = INITIAL_STATE, action) => {
    // console.log(action.payload);
    switch (action.type) {
        // Write you case here
        case actionTypes.SEARCHED_MEDICINE_RESPONSE:
            return {
                ...state,
                searchedMedicineResponse: action.payload,
            }
        default:
            return state;
    }
}