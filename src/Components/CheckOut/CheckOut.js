import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const { checkout } = useParams();
    return (
        <div className='d-flex align-items-center justify-content-center' style={{minHeight:"calc(100vh - 76px)"}}>
            <h1>{checkout} course are sucessfully Enrolled</h1>
        </div>
    );
};

export default CheckOut;