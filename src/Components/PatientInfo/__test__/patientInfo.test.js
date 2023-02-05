import { render, screen, cleanup } from '@testing-library/react';
import PatientInfo from './../patientInfo';

test('should render latest patient diagnosis', () => {
    render(<PatientInfo />);
    const patientElement = screen.getByText(/Latest Diagnosis/i);
    expect(patientElement).toBeInTheDocument;
})

test('should render general information', () => {
    render(<PatientInfo />);
    const patientElement = screen.getByText(/General Information/i);
    expect(patientElement).toBeInTheDocument;
})

test('should render contact information', () => {
    render(<PatientInfo />);
    const patientElement = screen.getByText(/Contact Information/i);
    expect(patientElement).toBeInTheDocument;
})