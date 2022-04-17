import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import AI from '../Service/AI';
import SoftEngi from '../Service/SoftEngi';
import WebDevlopment from '../Service/WebDevlopment';
import './Services.css';
const Services = () => {
    const [serivces, setServices] = useState('random');
    return (
        <div>
            <Navbar id="menu" bg="light" variant="light">
            <Container className='services-continer'>
                <Nav className="mx-auto">
                <h4 onClick={()=>{setServices('web development')}} style={{color : serivces === 'web development' ? "tomato" :"black"}}>web devlopment</h4>
                <h4 onClick={()=>{setServices('Software Engineering')}} style={{color : serivces === 'Software Engineering' ? "tomato" :"black"}}>Software Engineering</h4>
                <h4 onClick={()=>{setServices('AI')}} style={{color : serivces === 'AI' ? "tomato" :"black"}}>AI</h4>
                </Nav>
            </Container>
        </Navbar>
        <div>
            {
                serivces === 'web development' && <WebDevlopment></WebDevlopment>
            }
            {
                serivces === 'Software Engineering' && <SoftEngi></SoftEngi>
            }
            {
                serivces === 'AI' && <AI></AI>
            }
        </div>
        </div>
    );
};

export default Services;