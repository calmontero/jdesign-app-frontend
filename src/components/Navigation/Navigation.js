import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import "../../styles.scss";

function Navigation() {
    const location = useLocation();
    return (
        <Navbar className="color-navbar" variant="light" >
            <Nav className="center-navbar" activeKey={location.pathname} >
            <Nav.Link href="/" activeClassName="active" className="linkText">HOME</Nav.Link>
            <Nav.Link href="/jobs" activeClassName="active" className="linkText">JOBS</Nav.Link>
            <Nav.Link href="/testimonials" activeClassName="active" className="linkText">TESTIMONIALS</Nav.Link>
            <Nav.Link href="/downloads" activeClassName="active" className="linkText">DESCARGAS</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;