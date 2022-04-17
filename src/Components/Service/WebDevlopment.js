import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../hooks/useServices';
import ServiceAsCartShowing from './ServiceAsCartShowing';

const WebDevlopment = () => {
    const [services] = useServices();
    const webDevelop = services.filter(service => service.Type === 'web development');
    console.log(webDevelop);
    return (
        <div>
            <Row xs={1} md={3} className="container mx-auto g-4 pt-5">
                {
                    webDevelop.map(item => <ServiceAsCartShowing key={item.id} item={item}></ServiceAsCartShowing>)
                }
            </Row>
        </div>
    );
};

export default WebDevlopment;