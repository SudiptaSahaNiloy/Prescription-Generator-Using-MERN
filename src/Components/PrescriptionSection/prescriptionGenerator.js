import React from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { getSearchMedicineInfo } from '../../Redux/mapActionCreator.js';
import { connect } from 'react-redux';
import CreatePDF from './CreatePDF/createpdf.js';
import { motion } from "framer-motion";
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPDF from '@react-pdf/renderer';

const mapStateToProps = (state) => {
    return ({
        searchedMedicineResponse: state.searchedMedicineResponse,
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getSearchMedicineInfo: (searchedMedicine) => { dispatch(getSearchMedicineInfo(searchedMedicine)) }
    })
}

function PrescriptionGenerator(props) {
    const [searchMedicine, setsearchMedicine] = useState('');
    const [selectedMedicine, setselectedMedicine] = useState('');
    const [searchResultTable, setsearchResultTable] = useState(false);
    const [onRepeat, setonRepeat] = useState('');
    const [timeOfTheDay, settimeOfTheDay] = useState('');
    const [toBeTaken, settoBeTaken] = useState('');
    const [dosageCount, setdosageCount] = useState(1);
    const [dosageDuration, setdosageDuration] = useState(1);
    const [prescribedMedicine, setprescribedMedicine] = useState([]);

    const location = useLocation();
    // console.log(location.state);

    const handleSubmit = (event) => {
        setsearchResultTable(true);
        props.getSearchMedicineInfo(searchMedicine);
        event.preventDefault();
    }

    const handleOnRepeat = (e) => {
        setonRepeat(e.target.value);
    }

    const handleTimeOfTheDay = (e) => {
        settimeOfTheDay(e.target.value);
    }

    const handleToBeTaken = (e) => {
        settoBeTaken(e.target.value);
    }

    const handleAddMedicine = (e) => {
        const prescriptionInfo = {
            selectedMedicineBrandName: selectedMedicine.brandName,
            selectedMedicineStrength: selectedMedicine.strength,
            onRepeat: onRepeat,
            timeOfTheDay: timeOfTheDay,
            toBeTaken: toBeTaken,
            dosageCount: dosageCount,
            dosageDuration: dosageDuration,
        }

        setprescribedMedicine(item => [...item, prescriptionInfo]);
    }

    // console.log(prescribedMedicine);

    const handleDosageCountInc = (e) => {
        if (dosageCount < 3) setdosageCount(dosageCount + 1);
    }

    const handleDosageCountDec = (e) => {
        if (dosageCount > 1) setdosageCount(dosageCount - 1);
    }

    const handleDosageDurationInc = () => {
        if (dosageDuration < 3) setdosageDuration(dosageDuration + 1);
    }

    const handleDosageDurationDec = () => {
        if (dosageDuration > 1) setdosageDuration(dosageDuration - 1);
    }

    const handlePrescriptionInfo = () => {
        const prescriptionInfo = {
            onRepeat: onRepeat,
            timeOfTheDay: timeOfTheDay,
            toBeTaken: toBeTaken,
            dosageCount: dosageCount,
            dosageDuration: dosageDuration,
        }

        console.log(prescriptionInfo);
    }

    const handleSelectSearchedMedicine = (med) => {
        setsearchResultTable(false);
        setselectedMedicine(med);
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    placeholder='Search Medicines'
                    className=''
                    autoComplete='on'
                    onChange={e => setsearchMedicine(e.target.value)}
                    autoFocus
                    style={{
                        width: '50vw',
                        height: '44px',
                        background: 'rgba(253, 214, 186, 0.6)',
                        borderRadius: '15px',
                        borderWidth: '0px',
                        paddingInline: '250px',
                    }} />
            </form>

            {
                searchResultTable ?
                    <Table bordered hover style={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        zIndex: '1'
                    }}>
                        <tbody>
                            <tr>
                                <th>Brand Name</th>
                                <th>Dosage Form</th>
                                <th>Manufacturer</th>
                                <th>Package Container</th>
                            </tr>
                            {props.searchedMedicineResponse.map((item) => {
                                console.log(item);
                                return (
                                    <tr onClick={() => handleSelectSearchedMedicine(item)}>
                                        <td>{item.brandName}</td>
                                        <td>{item.dosageForm}</td>
                                        <td>{item.manufacturer}</td>
                                        <td>{item.packageContainer}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table> : null
            }

            <Row style={{ marginTop: '50px', zIndex: '-50' }}>
                <Col className=' p-3' style={{
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: '500',
                    // fontSize: '20px',
                    // lineHeight: '20px'
                }}>
                    {/* Medicine Info Section Start */}
                    <Row>
                        <h2 data-testid="m1">Medicine Name: {selectedMedicine.brandName}</h2>
                        <p style={{ width: '400px', fontSize: '21px' }}>
                            Dosage Form: {selectedMedicine.dosageForm}
                        </p>
                        <p style={{ width: 'auto', fontSize: '21px' }}>
                            Manufacturer: {selectedMedicine.manufacturer}
                        </p>
                    </Row>
                    {/* Medicine Info Section End */}

                    {/* Repeat Section Start */}
                    <Row className='mt-4'>
                        <div style={{
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '24px',
                            marginBottom: '10px'
                        }}>Repeat</div>
                        <div className='mt-1'>
                            <Row>
                                <Col>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={(e) => handleOnRepeat(e)}
                                        value="everyday"
                                        style={{
                                            width: '200px',
                                            background: 'rgba(38, 2, 255, 0.51)',
                                            borderWidth: '0px',
                                            height: '42px',
                                            color: '#00109B',
                                            borderRadius: '10px'
                                        }}>Everyday</motion.button>
                                </Col>
                                <Col>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={(e) => handleOnRepeat(e)}
                                        value="alternate days"
                                        style={{
                                            width: '200px',
                                            background: '#D9D9D9',
                                            borderWidth: '0px',
                                            height: '42px',
                                            borderRadius: '10px',
                                        }}>Alternate days</motion.button>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                    {/* Repeat Section End */}

                    {/* Time of the day section start */}
                    <Row className='mt-4'>
                        <div style={{
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '24px',
                            marginBottom: '10px'
                        }}>Time of the day</div>
                        <div className='mt-1'>
                            <Row>
                                <Col>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={(e) => handleTimeOfTheDay(e)}
                                        value="morning"
                                        style={{
                                            width: '200px',
                                            background: 'rgba(38, 2, 255, 0.51)',
                                            borderWidth: '0px',
                                            height: '42px',
                                            color: '#00109B',
                                            borderRadius: '10px',
                                            marginBottom: '10px'
                                        }}>Morning</motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={(e) => handleTimeOfTheDay(e)}
                                        value="evening"
                                        style={{
                                            width: '200px',
                                            background: 'rgba(38, 2, 255, 0.51)',
                                            borderWidth: '0px',
                                            height: '42px',
                                            color: '#00109B',
                                            borderRadius: '10px'
                                        }}>Evening</motion.button>
                                </Col>
                                <Col>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={(e) => handleTimeOfTheDay(e)}
                                        value="noon"
                                        style={{
                                            width: '200px',
                                            background: '#D9D9D9',
                                            borderWidth: '0px',
                                            height: '42px',
                                            borderRadius: '10px',
                                            marginBottom: '10px'
                                        }}>Noon</motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={(e) => handleTimeOfTheDay(e)}
                                        value="night"
                                        style={{
                                            width: '200px',
                                            background: '#D9D9D9',
                                            borderWidth: '0px',
                                            height: '42px',
                                            borderRadius: '10px',
                                        }}>Night</motion.button>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                    {/* Time of the day section end */}

                    {/* To be taken section start */}
                    <Row className='mt-4'>
                        <div style={{
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '24px',
                            marginBottom: '10px'
                        }}>To Be Taken</div>
                        <div className='mt-1'>
                            <Row>
                                <Col>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        value="after food"
                                        onClick={(e) => handleToBeTaken(e)}
                                        style={{
                                            width: '200px',
                                            background: 'rgba(38, 2, 255, 0.51)',
                                            borderWidth: '0px',
                                            height: '42px',
                                            color: '#00109B',
                                            borderRadius: '10px'
                                        }}>After Food</motion.button>
                                </Col>
                                <Col>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        value="before food"
                                        onClick={(e) => handleToBeTaken(e)}
                                        style={{
                                            width: '200px',
                                            background: '#D9D9D9',
                                            borderWidth: '0px',
                                            height: '42px',
                                            borderRadius: '10px',
                                        }}>Before Food</motion.button>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                    {/* To be taken section end */}

                    {/* Dosage Section Start */}
                    <Row className='mt-4'>
                        <Col className='' style={{ marginLeft: '1px' }}>
                            <h4>Dosage</h4>
                            <FontAwesomeIcon
                                onClick={(e) => handleDosageCountDec(e)}
                                icon={faCircleMinus}
                                style={{ marginRight: '10px' }} />
                            {dosageCount} Tablet
                            <FontAwesomeIcon
                                onClick={(e) => handleDosageCountInc(e)}
                                icon={faCirclePlus}
                                style={{ marginLeft: '10px' }} />
                        </Col>
                        <Col className='' style={{ marginLeft: '50px', height: 'auto', width: '100px' }}>
                            <h4>Duration Week</h4>
                            <FontAwesomeIcon
                                onClick={() => handleDosageDurationDec()}
                                icon={faCircleMinus}
                                style={{ marginRight: '10px' }} />
                            {dosageDuration} Week
                            <FontAwesomeIcon
                                onClick={() => handleDosageDurationInc()}
                                icon={faCirclePlus}
                                style={{ marginLeft: '10px' }} />
                        </Col>
                    </Row>
                    {/* Dosage Section End */}

                    <Row>
                        <motion.button
                            whileHover={{ scale: 1.0 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => handleAddMedicine(e)}
                            style={{
                                width: '600px',
                                height: '41px',
                                background: '#FDD572',
                                borderRadius: '30px',
                                borderWidth: '0px',
                                marginTop: '20px'
                            }}>Add Medicine</motion.button>
                    </Row>
                </Col>
                <Col className='p-3 '>
                    {/* Prescribed Medicine Section Start */}
                    <Row style={{ marginTop: '30px', marginLeft: '50px' }}>
                        <div style={{
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '24px',
                            marginBottom: '10px'
                        }}>Patient's Prescription</div>
                        <div className='mt-1'>
                            {prescribedMedicine.map((item) => {
                                return (
                                    <Row className='mb-1'>
                                        <div style={{
                                            width: '309px',
                                            height: '103px',
                                            background: '#FFFFFF',
                                            border: '0.1px solid #000000',
                                            borderRadius: '11px',
                                            padding: '15px'
                                        }}>
                                            {item.selectedMedicineBrandName} {item.selectedMedicineStrength}
                                            <p style={{
                                                marginTop: '5px',
                                                fontWeight: 400,
                                                fontSize: '14px',
                                                lineHeight: '17px',
                                                color: 'rgba(0, 0, 0, 0.5)'
                                            }}>{item.dosageCount} tablet everyday for {item.dosageDuration} week in {item.timeOfTheDay} {item.toBeTaken}</p>
                                        </div>
                                    </Row>
                                )
                            })}
                        </div>
                    </Row>
                    {/* Prescribed Medicine Section End */}
                </Col>
            </Row >
            {/* <Button onClick={() => handlePrescriptionInfo()}>Generate Prescription</Button> */}
            <CreatePDF
                patientInfo={location.state.patientInfo}
                diseaseList={location.state.diseaseList}
                historyList={location.state.historyList}
                investigationList={location.state.investigationList}
                prescribedMedicine={prescribedMedicine} />
        </div >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionGenerator);