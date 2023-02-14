import Main from './Components/Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./Redux/store.js";
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from './Components/Auth/Auth.js';
import { authCheck, getUser } from './Redux/authActionCreator';
import { useEffect } from 'react';

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider >
  );
}

// export default App;
export default App;