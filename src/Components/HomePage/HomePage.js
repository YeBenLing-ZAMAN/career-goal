import React from 'react';
import './HomePage.css';
import profile1 from '../../Image/avatar-11.jpg';
const HomePage = () => {
    return (
        <div className='home-container d-flex justify-content-center align-items-center'>
            <div>
                <img src={profile1} alt="" />
            </div>
            <div>
                <h1>Foucs on Your Goal</h1>
                <h1>Rock your Career Brand</h1>
                <h1>Limitless learning | Get Hired</h1>
                <p className='btn btn-danger rounded-pill'>Get Started Now</p>
            </div>
        </div>
    );
};

export default HomePage;