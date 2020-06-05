import React from 'react';
import {Link} from 'react-router-dom';

import {Navbar, Nav} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to={""} className="navbar-brand" >Quiz App</Link>
            <Nav className="mr-auto">
                
            </Nav>
        </Navbar>
    );
}

export default NavigationBar