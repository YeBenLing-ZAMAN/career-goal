import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../hooks/useServices';
import ServiceAsCartShowing from './ServiceAsCartShowing';

const AI = () => {
    const [services] = useServices();
    const AIS = services.filter(service => service.Type === 'AI');
    console.log(AIS);
    return (
        <div>
            <Row xs={1} md={3} className="container mx-auto g-4 pt-5">
                {
                    AIS.map(item => <ServiceAsCartShowing key={item.id} item={item}></ServiceAsCartShowing>)
                }
            </Row>
        </div>
    );
};

export default AI;