import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import "../../styles.scss";

function Navigation() {
    const location = useLocation();
    return (
        <Navbar fixed="top" className="color-navbar" variant="light" >
            <Nav className="center-navbar" activeKey={location.pathname} >
                <Nav.Link href="/" activeClassName="active" >HOME</Nav.Link>
                <Nav.Link href="/jobs" activeClassName="active" >JOBS</Nav.Link>
                <Nav.Link href="/testimonials" activeClassName="active" >TESTIMONIALS</Nav.Link>
                <Nav.Link href="/downloads" activeClassName="active" >DESCARGAS</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;