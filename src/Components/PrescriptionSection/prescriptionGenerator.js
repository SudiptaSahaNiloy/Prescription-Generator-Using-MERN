import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function prescriptionGenerator() {
    return (
        <div>
            <input
                type="text"
                placeholder='Search Medicines'
                className='border'
                autoComplete='on'
                // autoFocus
                style={{
                    width: '50vw',
                    height: '44px',
                    background: 'rgba(253, 214, 186, 0.6)',
                    borderRadius: '15px',
                    borderWidth: '0px',
                    // paddingInline: '350px',
                }} />

            <Row style={{ marginTop: '50px' }}>
                <Col className='border p-3' style={{
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: '500',
                    // fontSize: '20px',
                    // lineHeight: '20px'
                }}>
                    {/* Medicine Info Section Start */}
                    <Row>
                        <h2>Medicine Name: Paracetamol</h2>
                        <p style={{ width: '400px', fontSize: '21px' }}>Description: Paracetamol is a centrally acting analgesic and antipyretic with minimal anti-inflammatory properties</p>
                    </Row>
                    {/* Medicine Info Section End */}

                    {/* Repeat Section Start */}
                    <Row className='mt-2'>
                        <div style={{
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '24px',
                            marginBottom: '10px'
                        }}>Repeat</div>
                        <div className='mt-1'>
                            <Row>
                                <Col>
                                    <button style={{
                                        width: '200px',
                                        background: 'rgba(38, 2, 255, 0.51)',
                                        borderWidth: '0px',
                                        height: '42px',
                                        color: '#00109B',
                                        borderRadius: '10px'
                                    }}>Everyday</button>
                                </Col>
                                <Col>
                                    <button style={{
                                        width: '200px',
                                        background: '#D9D9D9',
                                        borderWidth: '0px',
                                        height: '42px',
                                        borderRadius: '10px',
                                    }}>Alternate days</button>
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
                                    <button style={{
                                        width: '200px',
                                        background: 'rgba(38, 2, 255, 0.51)',
                                        borderWidth: '0px',
                                        height: '42px',
                                        color: '#00109B',
                                        borderRadius: '10px',
                                        marginBottom: '10px'
                                    }}>Morning</button>
                                    <button style={{
                                        width: '200px',
                                        background: 'rgba(38, 2, 255, 0.51)',
                                        borderWidth: '0px',
                                        height: '42px',
                                        color: '#00109B',
                                        borderRadius: '10px'
                                    }}>Evening</button>
                                </Col>
                                <Col>
                                    <button style={{
                                        width: '200px',
                                        background: '#D9D9D9',
                                        borderWidth: '0px',
                                        height: '42px',
                                        borderRadius: '10px',
                                        marginBottom: '10px'
                                    }}>Noon</button>
                                    <button style={{
                                        width: '200px',
                                        background: '#D9D9D9',
                                        borderWidth: '0px',
                                        height: '42px',
                                        borderRadius: '10px',
                                    }}>Night</button>
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
                                    <button style={{
                                        width: '200px',
                                        background: 'rgba(38, 2, 255, 0.51)',
                                        borderWidth: '0px',
                                        height: '42px',
                                        color: '#00109B',
                                        borderRadius: '10px'
                                    }}>After Food</button>
                                </Col>
                                <Col>
                                    <button style={{
                                        width: '200px',
                                        background: '#D9D9D9',
                                        borderWidth: '0px',
                                        height: '42px',
                                        borderRadius: '10px',
                                    }}>Before Food</button>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                    {/* To be taken section end */}

                    <Row>
                        <button style={{
                            width: '600px',
                            height: '41px',
                            background: '#FDD572',
                            borderRadius: '30px',
                            borderWidth: '0px',
                            marginTop: '20px'
                        }}>Add Medicine</button>
                    </Row>
                </Col>
                <Col className='p-3 border'>
                    {/* Dosage Section Start */}
                    <Row>
                        <Col className='border' style={{ marginLeft: '30px' }}>
                            <h4>Dosage</h4>
                            <FontAwesomeIcon icon={faCircleMinus} style={{ marginRight: '10px' }} />
                            1 Tablet
                            <FontAwesomeIcon icon={faCirclePlus} style={{ marginLeft: '10px' }} />
                        </Col>
                        <Col className='border' style={{ marginLeft: '50px', height: 'auto', width: '100px' }}>
                            <h4>Duration Week</h4>
                            <FontAwesomeIcon icon={faCircleMinus} style={{ marginRight: '10px' }} />
                            1 Week
                            <FontAwesomeIcon icon={faCirclePlus} style={{ marginLeft: '10px' }} />
                        </Col>
                    </Row>
                    {/* Dosage Section End */}

                    {/* Prescribed Medicine Section Start */}
                    <Row style={{ marginTop: '80px', marginLeft: '50px' }}>
                        <div style={{
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '24px',
                            marginBottom: '10px'
                        }}>Patient's Prescription</div>
                        <div className='mt-1'>
                            <Row>
                                <div style={{
                                    width: '309px',
                                    height: '103px',
                                    background: '#FFFFFF',
                                    border: '0.1px solid #000000',
                                    borderRadius: '11px',
                                    padding: '15px'
                                }}>
                                    Paracetamol 500mg
                                    <p style={{
                                        marginTop: '5px',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '17px',
                                        color: 'rgba(0, 0, 0, 0.5)'
                                    }}>1 tablet everyday for 1 week in morning, noon after food</p>
                                </div>
                            </Row>
                        </div>
                        <div className='mt-2'>
                            <Row>
                                <div style={{
                                    width: '309px',
                                    height: '103px',
                                    background: '#FFFFFF',
                                    border: '0.1px solid #000000',
                                    borderRadius: '11px',
                                    padding: '15px'
                                }}>
                                    Liquiprin
                                    <p style={{
                                        marginTop: '5px',
                                        fontWeight: 400,
                                        fontSize: '14px',
                                        lineHeight: '17px',
                                        color: 'rgba(0, 0, 0, 0.5)'
                                    }}>1 teaspoon everyday for 1 week in morning, noon after food</p>
                                </div>
                            </Row>
                        </div>
                    </Row>
                    {/* Prescribed Medicine Section End */}
                </Col>
            </Row >
        </div >
    )
}

export default prescriptionGenerator