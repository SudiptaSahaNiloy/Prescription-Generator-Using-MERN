import { render, screen, cleanup } from '@testing-library/react';
import PatientList from './../patientList';

test('should render patient list component', () => {
    render(<PatientList />);
    const patientElement = screen.getByText(/Patients/i);
    expect(patientElement).toBeInTheDocument;
})
