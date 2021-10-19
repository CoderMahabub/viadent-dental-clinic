import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../Images/viadent.png";
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Header = () => {
    const { logOut, user } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="border border-secondary border-top-0 border-start-0 border-end-0 bg-light">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#banner">
                        <img
                            src={logo}
                            width="90%"
                            height="auto"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#banner">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">services</Nav.Link>
                        <Nav.Link as={HashLink} to="/appointment">Appointment</Nav.Link>
                        <Nav.Link as={HashLink} to="/patient-history">Patient History</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact Us</Nav.Link>
                        {
                            user.displayName ? <Navbar.Text>
                                {
                                    user.displayName && <img className="profile-img ms-1" src={user.photoURL} alt="" />
                                }
                                <span className="text-primary"> {user.displayName}</span>
                                <Link to="/home">
                                    <Button onClick={logOut} className="btn-sm ms-1" variant="warning" >LogOut</Button>
                                </Link>
                            </Navbar.Text>
                                :
                                <Nav.Link className="btn-sm btn-info fw-bold text-light ms-1" as={HashLink} to="/login-register">LogIn/Register</Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;