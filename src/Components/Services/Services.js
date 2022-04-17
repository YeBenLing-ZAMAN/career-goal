import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Services.css';
const Services = () => {
    const [serivces, setServices] = useState('breakfast');
    return (
        <div>
            <Navbar id="menu" bg="light" variant="light">
            <Container className='services-continer'>
                <Nav className="mx-auto">
                <h4>web devlopment</h4>
                <h4>Software Engineering</h4>
                <h4>AI</h4>
                </Nav>
            </Container>
        </Navbar>
        <div>
            {
                serivces === 'random'
            }
        </div>
        </div>
    );
};

export default Services;