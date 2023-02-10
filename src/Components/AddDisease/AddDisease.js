import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function AddDisease() {
    const [searchDisease, setsearchDisease] = useState("");
    const [diseaseList, setdiseaseList] = useState([]);
    const [history, sethistory] = useState("");
    const [historyList, sethistoryList] = useState([]);
    const [investigation, setinvestigation] = useState("");
    const [investigationList, setinvestigationList] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const handleDisease = (event) => {
        setdiseaseList(item => [...item, searchDisease]);
        event.preventDefault();
    }

    const handleHistory = (event) => {
        sethistoryList(item => [...item, history]);
        event.preventDefault();
    }

    const handleInvestigation = (event) => {
        setinvestigationList(item => [...item, investigation]);
        event.preventDefault();
    }

    

    return (
        <div>
            <h1>Enter Patient Disease</h1>

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={['niloy', 'nipun']}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />

            {/* Search Disease Section Start */}
            <form onSubmit={(e) => handleDisease(e)}>
                <input
                    type="text"
                    placeholder='Search Diseases'
                    autoComplete='on'
                    onChange={e => setsearchDisease(e.target.value)}
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
            {/* Search Disease Section End */}

            {/* Disease List Start */}
            <ListGroup style={{ marginTop: '50px', marginBottom: '50px', width: '50vw' }} as="ol" numbered>
                {diseaseList.map(item => {
                    return (
                        <ListGroup.Item as="li">{item}</ListGroup.Item>
                    )
                })}
            </ListGroup>
            {/* Disease List End */}

            {/* Search Disease Section Start */}
            <form onSubmit={(e) => handleInvestigation(e)}>
                <input
                    type="text"
                    placeholder='Enter Investigation'
                    autoComplete='on'
                    onChange={e => setinvestigation(e.target.value)}
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
            {/* Search Disease Section End */}

            {/* Disease List Start */}
            <ListGroup style={{ marginTop: '50px', marginBottom: '50px', width: '50vw' }} as="ol" numbered>
                {investigationList.map(item => {
                    return (
                        <ListGroup.Item as="li">{item}</ListGroup.Item>
                    )
                })}
            </ListGroup>
            {/* Disease List End */}

            {/* Search Disease Section Start */}
            <form onSubmit={(e) => handleHistory(e)}>
                <input
                    type="text"
                    placeholder='Enter History'
                    autoComplete='on'
                    onChange={e => sethistory(e.target.value)}
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
            {/* Search Disease Section End */}

            {/* Disease List Start */}
            <ListGroup style={{ marginTop: '50px', marginBottom: '50px', width: '50vw' }} as="ol" numbered>
                {historyList.map(item => {
                    return (
                        <ListGroup.Item as="li">{item}</ListGroup.Item>
                    )
                })}
            </ListGroup>
            {/* Disease List End */}

            <Row>
                <Button onClick={() => navigate('/home/addPrescriptionInfo', {
                    state: {
                        diseaseList: diseaseList,
                        historyList: historyList,
                        investigationList: investigationList,
                        patientInfo: location.state.patientInfo,
                    }
                })}>
                    Create Prescription
                </Button>
            </Row>
        </div>
    )
}

export default AddDisease