import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./Redux/store";
import { Provider } from 'react-redux';
import Createpdf from './Components/PrescriptionSection/CreatePDF/createpdf';

function App() {
  return (
    <Provider store={store}>
      {/* <Main /> */}
      <Createpdf />
    </Provider >
  );
}

export default App;