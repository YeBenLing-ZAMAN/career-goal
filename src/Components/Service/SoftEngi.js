import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../hooks/useServices';
import ServiceAsCartShowing from './ServiceAsCartShowing';

const SoftEngi = ({handleAddToCart}) => {
    const [services] = useServices();
    const softErg = services.filter(service => service.Type === 'AI');
    return (
        <div>
            <Row xs={1} md={3} className="container mx-auto g-4 pt-5">
                {
                    softErg.map(item => <ServiceAsCartShowing handleAddToCart={handleAddToCart} key={item.id} item={item}></ServiceAsCartShowing>)
                }
            </Row>
        </div>
    );
};

export default SoftEngi;