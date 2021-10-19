import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMd, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './PatientHistory.css';

const PatientHistory = () => {
    const { user } = useAuth();
    const [patient, setPatient] = useState([]);
    useEffect(() => {
        fetch('/patientHistory.json')
            .then(res => res.json())
            .then(data => setPatient(data[0]))
    }, [])
    //Font Awesome Icons
    const dr = <FontAwesomeIcon icon={faUserMd} />
    const fauser = <FontAwesomeIcon icon={faUser} />
    const fainfo = <FontAwesomeIcon icon={faInfoCircle} />
    return (
        <div className="bg-dark py-5">
            <Card className="container text-center">
                <Card.Header className="fs-3"><b> PATIENT DETAIL</b></Card.Header>
                <Card.Body className="text-start">
                    <div className="card mb-3">
                        <img src={user?.photoURL} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title fw-bold">{fauser} {user?.displayName}</h3>
                            <h6 className="card-title">{user?.email}</h6>
                            <div className="d-flex align-items-center justify-content-center">
                                <p className="card-text text-start px-3">{fainfo} <b> Patient Detail:</b>{patient.pDescription}</p>
                                <img className="patient-imgg" src={patient.pImage} alt="" />
                            </div>
                            <h6><span><b>Total Meetings:</b> {patient.pTotalMeet}</span><span> ({patient.pAlreadyMet} Times Met)</span></h6>
                            <h5><b>Paid Cost: <span className="text-success">{patient.pPaidAmount}$</span>  <span className="text-danger">(Among {patient.pTotalAmount}$)</span> </b></h5>
                            <h4>{dr}<b> Doctor Name: </b>{patient.pDoctorName}</h4>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted">Consult With Doctor 2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default PatientHistory;