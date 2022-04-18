import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:"100vh"}} className="w-100 d-flex align-items-center justify-content-center">
            <Spinner animation='border' variant='danger'></Spinner>
        </div>
    );
};

export default Loading;