import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import footerLogo from '../../Images/viadent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const address = <FontAwesomeIcon icon={faMapMarked} />
    return (
        <div className="border bg-light border-secondary border-bottom-0 border-start-0 border-end-0">
            <Container>
                <Row className="py-2">
                    <Col className="col-12 col-md-4 col-lg-4 text-start p-3">
                        <img className="mb-4" src={footerLogo} alt="" />
                        <p>ViaDent is a leading dental care clinic in Bangladesh with a huge success in recent years.</p>
                        <p> <span className="text-primary">{address} </span> House# 65, Sector 10, Dhaka</p>
                    </Col>
                    <Col className="col-12 col-md-4 col-lg-4 d-flex flex-column mt-4 text-decoration-none">
                        <h3 className="fw-bold"><u>Quick Links</u></h3>
                        <Link className="text-decoration-none text-dark" to="/home"> Home</Link>
                        <Link className="text-decoration-none text-dark" to="/home#services"> Services</Link>
                        <Link className="text-decoration-none text-dark" to="/about"> About Us</Link>
                        <Link className="text-decoration-none text-dark" to="/about"> About Us</Link>
                        <Link className="text-decoration-none text-dark" to="/contact">Contact Us</Link>
                    </Col>
                    <Col className="col-12 col-md-4 col-lg-4 d-flex flex-column mt-4 text-start">
                        <h3 className="fw-bold"><u>Make an Appointment</u></h3>
                        <p>You can/mail call us 24/7. We are glad to receive your appointment.</p>
                        <p> <span className="text-primary">{emailIcon} </span> support@viadent.com</p>
                        <Button className="text-light fw-bold fs-5" variant="primary">{phoneIcon} +880 0170 00000</Button>
                    </Col>
                </Row>
            </Container>
            <p className="bg-dark text-light py-2 mb-0">Copyright ?? 2021. All Right Reserved
                {/* || Developed by <a className="text-primary fs-5" href="https://codermahabub.com">CoderMahabub</a> */}
            </p>
        </div>
    );
};

export default Footer;