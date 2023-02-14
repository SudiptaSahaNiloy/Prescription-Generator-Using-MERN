import axios from "axios";
import * as actionTypes from "./actionTypes.js";

const URL = 'http://localhost:3001/Users';

export const authSuccess = (userId, userName) => {
    return ({
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            userId: userId,
            userName: userName,
        },
    })
}

export const authLogout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    return ({ type: actionTypes.AUTH_LOGOUT });
}

export const authFailed = (errMsg) => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: errMsg,
    }
}

export const auth = (email, password) => dispatch => {
    // console.log(email, password);

    axios.get(URL)
        .then(response => {
            let authenticated = 0;
            response.data.map((item, id) => {
                if (item.Email === email && item.Password === password) {
                    authenticated = 1;
                    localStorage.setItem('userId', response.data[id].id);
                    localStorage.setItem('userName', response.data[id].Name);
                    dispatch(authSuccess(response.data[id].id, response.data[id].Name));
                }
            })
            if (authenticated === 0) {
                dispatch(authFailed("Incorrect Email or Password. Try Again"));
                setTimeout(() => {
                    dispatch(authFailed(null));
                }, 4000);
            }
        })
}

// remember me section. Used to stay logged in
export const authCheck = () => dispatch => {
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    // console.log(userName);
    if (userName === null) {
        // logout
        dispatch(authLogout());
    } else {
        dispatch(authSuccess(userId, userName));
    }
}

// const displayName = (userName) => {
//     return {
//         type: actionTypes.LOAD_USER_DATA,
//         payload: userName,
//     }
// }


export const userData = (values) => dispatch => {
    let firstName = values.firstName;
    let lastName = values.lastName;
    const fullName = firstName + " " + lastName;

    const userData = {
        Name: fullName,
        Email: values.email,
        Password: values.password,
        BMDC_License: values.BMDC_License
    }

    axios.post(URL, userData)
        .then(response => {
            // console.log(response);
            dispatch(authSuccess(userData.Id, userData.Name));
        })
        .catch(err => console.log(err))
}

