import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
import { Row, Col } from 'react-bootstrap';
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

// Create Document Component
function createPDF(props) {
    return (
        <PDFViewer style={styles.viewer}>
            {/* Start of the document*/}
            <Document>
                {/*render a single page*/}
                <Page size="A4" style={styles.page}>
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
                        <Text style={{ marginTop: '10px' }}>Physical Medicine & Rehabilitation Department</Text>
                        <Text>Chittagong Medical College</Text>
                        <Text>BMDC Reg. No-A-35211</Text>
                    </View>
                    {/* Doctor Info Section End */}

                    <View>
                        <Text style={{ border: '1px solid #000000', textAlign: 'left', marginLeft: '0', marginBottom: '5px', marginTop: '5px' }} />
                    </View>

                    {/* Patient Info Section Start */}
                    <View>
                        <Text style={{ fontSize: '12px' }}>Name: ABCD</Text>
                        <Text style={{ fontSize: '12px' }}>Age: 22</Text>
                        <Text style={{ fontSize: '12px' }}>Weight: 60</Text>
                        <Text style={{ fontSize: '12px' }}>Date: 05.02.2023</Text>
                    </View>
                    {/* Patient Info Section End */}

                    {/* RX Section Start */}
                    <View style={{ marginTop: '20px' }}>
                        <Text style={{ marginBottom: '10px' }}>Rx</Text>
                        {
                            props.prescribedMedicine.map((item) => {
                                console.log(item);
                                return (
                                    <View style={{marginBottom: '5px'}}>
                                        <Text style={{ fontSize: '12px' }}>1. Tab. {item.selectedMedicineBrandName} 10mg</Text>
                                        <Text style={{ marginLeft: '15px', marginTop: '5px' }}>1 tablet everyday for 1 week in Morning Before Food</Text>
                                    </View>
                                )
                            })
                        }
                    </View>

                    {/* RX Section End */}
                </Page>
            </Document>
        </PDFViewer >
    );
}
export default createPDF;