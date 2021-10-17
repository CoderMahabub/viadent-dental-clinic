import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../Images/viadent.png";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="border border-secondary">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">
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
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home/#services">services</Nav.Link>
                        <Navbar.Text>
                            Signed in as: <a as={HashLink} to="#login"> Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;