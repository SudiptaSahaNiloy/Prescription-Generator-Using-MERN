import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";

// Create styles
const styles = StyleSheet.create({
    page: {
        color: "black",
        margin: 10,
        paddingLeft: '10px',
        fontWeight: 400,
        fontSize: '10px',
    },
    viewer: {
        width: '1080px', //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
    },
});

// const mapStateToProps = (state) => {
//     return ({
//         patientInfo: state.patientInfo,
//     })
// }

// Create Document Component
function CreatePDF(props) {
    // console.log(props);
    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth() + 1}.${current.getFullYear()}`;

    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.page}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'flex-start' }}>
                        {/* Doctor Info Section Start */}
                        <View>
                            <Text style={{
                                fontWeight: 800,
                                fontSize: '15px',
                            }}>
                                Dr. Nitai Proshad Datta
                            </Text>
                            <Text style={{ fontWeight: 600, fontSize: '12px' }}>Physiatrist</Text>
                            <Text>MBBS (CMC), BCS, FCPS(Physical Medicine)</Text>
                            <Text>Associate Professor</Text>
                        </View>
                        <View style={{ marginLeft: '130px' }}>
                            <Text style={{ marginTop: '10px' }}>Physical Medicine & Rehabilitation Department</Text>
                            <Text>Chittagong Medical College</Text>
                            <Text>BMDC Reg. No-A-35211</Text>
                        </View>
                        {/* Doctor Info Section End */}
                    </View>

                    <View>
                        <Text style={{ border: '1px solid #000000', textAlign: 'left', marginLeft: '0', marginBottom: '5px', marginTop: '5px' }} />
                    </View>

                    {/* Patient Info Section Start */}
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignContent: 'flex-start' }}>
                        <Text style={{ fontSize: '12px' }}>Name: {props.patientInfo.fullName}</Text>
                        <Text style={{ fontSize: '12px' }}>Age: {props.patientInfo.age}</Text>
                        <Text style={{ fontSize: '12px' }}>Weight: {props.patientInfo.weight}</Text>
                        <Text style={{ fontSize: '12px' }}>Date: {date}</Text>
                    </View>
                    {/* Patient Info Section End */}

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'flex-start' }}>
                        <View style={{ display: 'flex', flexDirection: 'col', justifyContent: 'flex-start', alignContent: 'flex-start' }}>
                            {/* Diagnosis Section Start */}
                            <View style={{ marginTop: '20px' }}>
                                <Text style={{ marginBottom: '10px', fontSize: '15px' }}>Diagnosis</Text>
                                {
                                    props.diseaseList.map((item, index) => {
                                        // console.log(item);
                                        return (
                                            <View style={{ marginBottom: '5px' }}>
                                                <Text style={{ fontSize: '12px' }}>{index + 1}. {item}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            {/* Diagnosis Section End */}

                            {/* History Section Start */}
                            <View style={{ marginTop: '20px' }}>
                                <Text style={{ marginBottom: '10px', fontSize: '15px' }}>History</Text>
                                {
                                    props.historyList.map((item, index) => {
                                        // console.log(item);
                                        return (
                                            <View style={{ marginBottom: '5px' }}>
                                                <Text style={{ fontSize: '12px' }}>{index + 1}. {item}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            {/* History Section End */}

                            {/* Investigation Section Start */}
                            <View style={{ marginTop: '20px' }}>
                                <Text style={{ marginBottom: '10px', fontSize: '15px' }}>Investigation</Text>
                                {
                                    props.investigationList.map((item, index) => {
                                        // console.log(item);
                                        return (
                                            <View style={{ marginBottom: '5px' }}>
                                                <Text style={{ fontSize: '12px' }}>{index + 1}. {item}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            {/* Investigation Section End */}
                        </View>

                        {/* RX Section Start */}
                        <View style={{ marginTop: '20px', marginLeft: '200px' }}>
                            <Text style={{ marginBottom: '10px', fontSize: '15px' }}>Rx.</Text>
                            {
                                props.prescribedMedicine.map((item, index) => {
                                    // console.log(item);
                                    return (
                                        <View style={{ marginBottom: '5px' }}>
                                            <Text style={{ fontSize: '12px' }}>{index + 1}. Tab. {item.selectedMedicineBrandName} {item.selectedMedicineStrength}</Text>
                                            <Text style={{ marginLeft: '15px', marginTop: '5px' }}>{item.dosageCount} tablet everyday for {item.dosageDuration} week in {item.timeOfTheDay} {item.toBeTaken}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                        {/* RX Section End */}
                    </View>

                    {/* Signature Section Start */}
                    <View>
                        <Text style={{ border: '1px dotted #000000', textAlign: 'left', marginLeft: '350px', marginBottom: '5px', marginTop: '350px' }} />
                        <Text style={{ marginLeft: '430px', fontSize: '13px' }}>Signature</Text>
                    </View>
                    {/* Signature Section End */}
                </Page>
            </Document>
        </PDFViewer >
    );
}
export default CreatePDF;