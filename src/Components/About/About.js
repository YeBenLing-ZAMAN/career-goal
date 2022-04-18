import React from 'react';
import myImg from '../../Image/myImage.png';
import './About.css';

const About = () => {
    return (
        <div className=' about-container d-flex flex-column flex-md-row justify-content-center align-items-center'>
            <div  className=' row justify-content-md-center' >
                <div className='ms-3 col-md-6 text-end'>
                    <h1 className='text-danger'>MD KAMRUZZAMAN</h1>
                    <h4>As a web development Learner I want to become an axpert in this field.Learnig font-end devlopment want to build a strong base on REACT in 1 Months. Then I try to get a intership on relative field.</h4>
                    <h3>I always thinking about this goal and it's motivate me to focus and hard work.</h3>
                </div>
                <div className='col-md-4'>
                    <img  className="border border-2 border-danger rounded-full" src={myImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;