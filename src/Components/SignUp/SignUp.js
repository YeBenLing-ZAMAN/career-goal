import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleIcon from '../../Image/icons/google.png';
import faceBookIcon from '../../Image/icons/Facebook_f_logo_(2019).svg';

const SignUp = () => {


    const handleSubmit =(event)=>{
        event.preventDefault();

    }
    return (
        <div className='form-container d-flex flex-column align-items-center justify-content-center'>
            <div className='w-50 from-red-onion'>
                <Form onSubmit={handleSubmit} className='mx-auto w-75'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter New Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button className='w-100' variant="danger" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
            <p className='text-center mt-4'>
                Already Member? <Link className='' to='/login'>Go to Log In</Link>
            </p>
            <div className='line-container'>
                <div className='line'></div>
                <p>OR</p>
                <div className='line'></div>
            </div>
            <div className='d-flex flex-column '>
                <button className='google-login-container m-2 px-2'>
                    <img src={googleIcon} alt="" /> <p> continue with google</p>
                </button>
                <button className='google-login-container m-2 px-2'>
                    <img src={faceBookIcon} alt="" /> <p> continue with faceBook</p>
                </button>
            </div>
        </div>
    );
};

export default SignUp;