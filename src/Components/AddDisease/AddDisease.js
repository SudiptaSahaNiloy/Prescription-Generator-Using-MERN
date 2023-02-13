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

    console.log(diseaseList);

    return (
        <div>
            <h1>Enter Patient Disease</h1>

            {/* Search Disease Section Start */}
            <form onSubmit={(e) => handleDisease(e)}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['Hypertension', 'dyslepidemia', 'DM', 'Hypothyroidism', 'LBP-CH(M)', 'Cervico Brachialgia Lt-ch']}
                    onInputChange={(event, searchDisease) => {
                        setsearchDisease(searchDisease);
                    }}
                    sx={{ width: "900px" }}
                    renderInput={(params) => <TextField {...params} label="Search Disease" />}
                />
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
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['CBC', 'CRP with titre', 'S-Creatinin', 'STSH', 'LBP-CH(M)', 'Cervico Brachialgia Lt-ch']}
                    onInputChange={(event, searchInvestigation) => {
                        setinvestigation(searchInvestigation);
                    }}
                    sx={{ width: "900px" }}
                    renderInput={(params) => <TextField {...params} label="Enter Investigation" />}
                />
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
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={['TAH-2007']}
                    onInputChange={(event, searchHistory) => {
                        sethistory(searchHistory);
                    }}
                    sx={{ width: "900px" }}
                    renderInput={(params) => <TextField {...params} label="Enter History" />}
                />
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