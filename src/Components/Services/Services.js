import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useServices from '../hooks/useServices';
import AI from '../Service/AI';
import Random from '../Service/Random';
import SoftEngi from '../Service/SoftEngi';
import WebDevlopment from '../Service/WebDevlopment';
import './Services.css';
const Services = () => {
    const [serivces, setServices] = useState('web development');

    /*
     *this part for store items in loacl store
     *but it's not complete yet
     *near future it will be developing 
     */
    /* existing items  */
    const [services] = useServices();
    /* for slected items  */
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        // console.log(selectedItem);
        let newCart = [];
        const exists = cart.find(item => item.id === selectedItem.id);
        if (!exists) {
            newCart = [...cart, selectedItem];
        } else {
            /* ekta message show korbo toast use koren pore thar code ta ami lekhbo ne  */
            newCart = [...cart];
        }
        setCart(newCart);
    }
    // console.log(cart.length);


    
    return (
        <div style={{ minHeight: "calc(100vh - 76px)" }}>
            <Navbar id="menu" bg="light" variant="light">
                <Container className='services-continer'>
                    <Nav className="mx-auto">
                        <h4 onClick={() => { setServices('web development') }} style={{ color: serivces === 'web development' ? "tomato" : "black" }}>web devlopment</h4>
                        <h4 onClick={() => { setServices('Software Engineering') }} style={{ color: serivces === 'Software Engineering' ? "tomato" : "black" }}>Software Engineering</h4>
                        <h4 onClick={() => { setServices('AI') }} style={{ color: serivces === 'AI' ? "tomato" : "black" }}>AI</h4>
                    </Nav>
                </Container>
            </Navbar>
            <div>
                {
                    serivces === 'web development' && <WebDevlopment handleAddToCart={handleAddToCart}></WebDevlopment>
                }
                {
                    serivces === 'Software Engineering' && <SoftEngi handleAddToCart={handleAddToCart}></SoftEngi>
                }
                {
                    serivces === 'AI' && <AI handleAddToCart={handleAddToCart}></AI>
                }
            </div>
        </div>
    );
};

export default Services;