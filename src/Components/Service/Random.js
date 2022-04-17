import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../hooks/useServices';
import ServiceAsCartShowing from './ServiceAsCartShowing';
const Random = () => {
    const [services] = useServices();
    // const webDevelop = services.filter(service => service.Type === 'web development');
    return (
        <div>
            <Row xs={1} md={3} className="container mx-auto g-4 pt-5">
                {
                    services.map(item => <ServiceAsCartShowing key={item.id} item={item}></ServiceAsCartShowing>)
                }
            </Row>
        </div>
    );
};

export default Random;