import React, { Component } from 'react'
import { Navbar, Container, Col } from 'react-bootstrap';

function Footer() {
    let year = new Date().getFullYear();
    return(
        <Navbar fixed="bottom" bg="dark" variant="dark">
            <Container>
                <Col lg={12} className ="text-center text-muted">
                    <div>{year}@All Rights Reserved by Pitman-AWS</div>
                </Col>
            </Container>
        </Navbar>
    );
  }

  export default Footer;