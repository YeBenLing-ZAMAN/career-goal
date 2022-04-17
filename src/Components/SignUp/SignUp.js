import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleIcon from '../../Image/icons/google.png';
import faceBookIcon from '../../Image/icons/Facebook_f_logo_(2019).svg';

const SignUp = () => {
    /* make store for all */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const naviagte = useNavigate();

    /* firebasd-hooks state used */
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    /* sign in firebase-hooks with google */
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);


    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handlConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    if (user || userGoogle) {
        naviagte('/home');
    }

    /* handle to submit button when it clicked */
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 charactore of longer');
            return;
        }else if (password !== confirmPassword) {
            setError('Your two password did not match');
            return;
        }
        
        createUserWithEmailAndPassword(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    }
    return (
        <div className='form-container d-flex flex-column align-items-center justify-content-center'>
            <div className='w-50 from-red-onion'>
                <Form onSubmit={handleSubmit} className='mx-auto w-75'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter Your email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Enter New Password" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handlConfirmPassword} type="password" placeholder="Confirm Password" required/>
                    </Form.Group>
                    <p style={{ color: "red" }}>{error}</p>
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
                <button onClick={() => signInWithGoogle()} className='google-login-container m-2 px-2'>
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