import Main from './Components/Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./Redux/store.js";
import { Provider } from 'react-redux';
import Createpdf from './Components/PrescriptionSection/CreatePDF/createpdf.js';

function App() {
  return (
    <Provider store={store}>
      <Main />
      {/* <Createpdf /> */}
    </Provider >
  );
}

export default App;