import { render, screen, cleanup } from '@testing-library/react';
import PatientList from './../patientList';

test('should render patient name', () => {
    render(<PatientList />);
    const patientElement = screen.getByText(/Patients/i);
    expect(patientElement).toBeInTheDocument;
})

test('should render patient search', () => {
    const { container } = render(<PatientList />);
    const patientElement = container.getElementsByClassName("searchPatientsInput");
    expect(patientElement).toBeVisible;
})

test('should render patient name', () => {
    const { container } = render(<PatientList />);
    const patientElement = container.getElementsByClassName("patientName");
    expect(patientElement).toBeInTheDocument;
})

test('should render patient disease', () => {
    const { container } = render(<PatientList />);
    const patientElement = container.getElementsByClassName("patientDisease");
    expect(patientElement).toBeInTheDocument;
})

test('should render patient avatar', () => {
    const { container } = render(<PatientList />);
    const patientElement = container.getElementsByClassName("patientImage");
    expect(patientElement).toBeVisible;
})
