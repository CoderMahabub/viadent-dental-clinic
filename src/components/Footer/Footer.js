import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import footerLogo from '../../Images/viadent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const arrowRight = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div className="border  border-secondary border-bottom-0 border-start-0 border-end-0">
            <Container>
                <Row className="py-3">
                    <Col className="text-start p-3">
                        <img className="mb-4" src={footerLogo} alt="" />
                        <p>ViaDent is a leading dental care clinic in Bangladesh with a huge success in recent years.</p>
                        <p> <span className="text-primary">{phoneIcon} </span> House# 65, Sector 10, Dhaka</p>
                    </Col>
                    <Col className="d-flex flex-column mt-4 text-decoration-none">
                        <h3 className="fw-bold"><u>Quick Links</u></h3>
                        <Link className="text-decoration-none text-dark" to="/home"><span className="text-primary">{arrowRight} </span> Home</Link>
                        <Link className="text-decoration-none text-dark" to="/home#services"><span className="text-primary">{arrowRight} </span> Services</Link>
                        <Link className="text-decoration-none text-dark" to="/about"><span className="text-primary">{arrowRight} </span> About Us</Link>
                        <Link className="text-decoration-none text-dark" to="/about"><span className="text-primary">{arrowRight} </span> About Us</Link>
                        <Link className="text-decoration-none text-dark" to="/contact"><span className="text-primary">{arrowRight} </span> Contact Us</Link>
                    </Col>
                    <Col className="d-flex flex-column mt-4 text-start">
                        <h3 className="fw-bold"><u>Make an Appointment</u></h3>
                        <p>You can/mail call us 24/7. We are glad to receive your appointment.</p>
                        <p> <span className="text-primary">{emailIcon} </span> support@viadent.com</p>
                        <Button className="text-light fw-bold fs-5" variant="primary">+880 0170 00000</Button>
                    </Col>
                </Row>
            </Container>
            <p className="bg-dark text-light py-2 mb-0">Copyright © 2021. All Right Reserved || Developed by <a className="text-primary fs-5" href="https://codermahabub.com">CoderMahabub</a></p>
        </div>
    );
};

export default Footer;