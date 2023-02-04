import { render, screen, cleanup } from '@testing-library/react';
import PGen from '../prescriptionGenerator.js';
import { Provider } from 'react-redux';
import store from '../../../Redux/store.js';

test('should render patient list component', () => {
    render(
        <Provider store={store}>
            <PGen />
        </Provider>
    );
    const patientElement = screen.getByTestId('m1');
    expect(patientElement).toBeInTheDocument();
})