import React from 'react';
import './HomePage.css';
import profile1 from '../../Image/avatar-11.jpg';
import Services from '../Services/Services';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    const navigateToLoginPage = () => {
        console.log('i am clicked');
        navigate('/login');
    }
    return (
        <div>
            <div className='home-container d-flex flex-column flex-md-row justify-content-center align-items-center'>
                <div>
                    <img src={profile1} alt="" />
                </div>
                <div>
                    <h1>Foucs on Your Goal</h1>
                    <h1>Rock your Career Brand</h1>
                    <h1>Limitless learning | Get Hired</h1>
                    <p className='btn btn-danger rounded-pill' onClick={navigateToLoginPage}>Get Started Now</p>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default HomePage;